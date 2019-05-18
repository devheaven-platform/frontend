import React from "react";
import { Page, ModalForm } from "components";
import classNames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import createWorkPeriodForm from "forms/CreateWorkPeriod";
import { TablePlain } from "@dccs/react-table-plain";
import moment from "moment";
import { actions } from "./duck";

const mockID = "a9eac184-ed4b-4d16-9498-d1e66089e170";
class Hours extends React.Component {
    componentDidMount() {
        const { Load } = this.props;
        Load( { employee: mockID } );
    }

    createWorkPeriod=( payload ) => {
        const { Create } = this.props;
        Create( { ...payload, employee: mockID } );
    }

    render() {
        const { errors, hours, Delete } = this.props;
        const workPeriods = hours.map( h => ( {
            from: `${ moment( h.startDate ).format( "ddd M-Y, hA" ) }`,
            till: `${ moment( h.endDate ).format( "ddd M-Y, hA" ) }`,
            what: h.context,
            actions: ( <button type="button" className="button is-secondary" onClick={ () => Delete( { id: h.id } ) }>Delete</button> ),
        } ) );
        return (
            <Page>
                <Page.Content isCentered>
                    <div className="columns">
                        <ModalForm
                            title="Add"
                            description="Register a workperiod"
                            fields={ createWorkPeriodForm() }
                            errors={ errors }
                            submit={ this.createWorkPeriod }
                        />
                        <TablePlain
                            data={ workPeriods }
                            cellProps={ data => ( {
                                style: {
                                    padding: 6,
                                },
                            } ) }
                            colDef={ [
                                {
                                    prop: "from",
                                    header: "From",
                                    sortable: true,
                                },
                                {
                                    prop: "till",
                                    header: "Till",
                                    sortable: true,
                                },
                                {
                                    prop: "what",
                                    header: "What",
                                    sortable: true,
                                }, {
                                    prop: "actions",
                                    header: "",
                                    sortable: false,
                                },
                            ] }
                        />
                    </div>
                </Page.Content>
            </Page>
        );
    }
}

Hours.propTypes = {
    Create: PropTypes.func.isRequired,
    Load: PropTypes.func.isRequired,
    Delete: PropTypes.func.isRequired,
    errors: PropTypes.shape(),
    hours: PropTypes.arrayOf( PropTypes.shape() ),
};

Hours.defaultProps = {
    hours: null,
    errors: {},
};

const mSTP = ( { hours: { errors, hours } } ) => ( { errors, hours } );

const mDTP = dispatch => ( {
    Load: payload => dispatch( actions.load( payload ) ),
    Create: payload => dispatch( actions.create( payload ) ),
    Delete: payload => dispatch( actions.deleteWorkPeriod( payload ) ),
} );

export default connect( mSTP, mDTP )( Hours );
