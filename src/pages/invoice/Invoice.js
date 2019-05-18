/* eslint-disable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import createInvoiceForm from "forms/CreateInvoice";
import { PageLoading } from "pages";
import { Page, ModalForm, Table } from "components";
import invoiceTable from "tables/Invoice";

import { actions } from "./duck";

class PageInvoices extends React.Component {
    static propTypes = {
        projects: PropTypes.arrayOf( PropTypes.shape() ),
        invoices: PropTypes.arrayOf( PropTypes.shape() ),
        errors: PropTypes.shape(),
        Load: PropTypes.func.isRequired,
        Create: PropTypes.func.isRequired,
    }

    static defaultProps = {
        projects: null,
        invoices: null,
        errors: {},
    }

    state = {
        selected: { name: "select a project", milestones: [ { label: "select a project", value: "1223123123213" } ] },
    }

    componentDidMount() {
        const { Load } = this.props;
        Load();
    }

    onChange = ( event ) => {
        const { projects } = this.props;
        const id = event.currentTarget.value;
        this.setState( {
            selected: projects.find( p => p.id === id ),
        } );
    }

    render() {
        const {
            projects,
            invoices,
            errors,
            Create,
        } = this.props;
        const { selected } = this.state;

        if ( projects === null || invoices === null ) {
            return <PageLoading />;
        }

        const items = projects.map( project => <option key={ project.id } value={ project.id }>{ project.name }</option> );

        return (
            <Page>
                <Page.Header title="Invoices" subtitle="View or create Invoices">
                    { projects.length > 0 && (
                        <React.Fragment>
                            <div className="field is-horizontal has-margin-right-2 has-margin-bottom-0">
                                <div className="field-label is-normal">
                                    <label htmlFor="project" className="label">Project</label>
                                </div>
                                <select name="project" className="input" onChange={ this.onChange }>
                                    { items }
                                </select>
                            </div>
                            <ModalForm
                                title="Create"
                                description="Create a new Invoice."
                                fields={ createInvoiceForm( { project: selected } ) }
                                errors={ errors }
                                submit={ values => Create( { ...values, project: selected.id } ) }
                            />
                        </React.Fragment>
                    ) }
                </Page.Header>
                <Page.Content>
                    <Table
                        columns={ invoiceTable }
                        data={ projects }
                        onContextMenuClick={ this.onContextMenuClick }
                    />
                </Page.Content>
                <Page.Footer>
                    <p>
                        { `Copyright © ${ new Date().getFullYear() } Devheaven.nl`}
                    </p>
                </Page.Footer>
            </Page>
        );
    }
}

const mSTP = ( {
    invoices: {
        invoices, projects, errors,
    },
} ) => ( {
    invoices, projects, errors,
} );

const mDTP = dispatch => ( {
    Load: () => dispatch( actions.load() ),
    Create: payload => dispatch( actions.create( payload ) ),
    Archive: payload => dispatch( actions.archive( payload ) ),
} );

export default connect( mSTP, mDTP )( PageInvoices );
/* eslint-enable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
