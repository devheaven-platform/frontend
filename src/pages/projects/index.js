import React from "react";
import {
    func, shape, string, arrayOf,
} from "prop-types";
import { connect } from "react-redux";
import ProjectItem from "components/project-item/ProjectItem";
import {
    Modal, Form, FormField, SubmitButton, SelectOption,
} from "components";
import { required, number } from "common/validators";
import { actions } from "./duck";

class Projects extends React.Component {
    static defaultProps = {
        projects: [],
        clients: [],
    }

    static propTypes = {
        projects: arrayOf( shape( { id: string, name: string, description: string } ) ),
        clients: arrayOf( shape( { id: string, name: string } ) ),
        GetAllProjects: func.isRequired,
        GetAllClients: func.isRequired,
        ArchiveProject: func.isRequired,
    }

    componentDidMount() {
        const { GetAllProjects, GetAllClients } = this.props;
        GetAllProjects( "3b8fc595-afb7-47a2-83ff-662746c66eee" ); // Todo : Inject user id here rather than hardcoded value
        GetAllClients( "" ); // Todo: inject some value to get clients of
    }

    render() {
        const {
            projects,
            ArchiveProject,
            clients,
        } = this.props;
        const projectItems = projects.map( p => <ProjectItem key={ p.id } name={ p.name } description={ p.description } id={ p.id } onArchive={ ArchiveProject } /> );
        const clientItems = clients.map( c => <SelectOption key={ c.id } name={ c.name } value={ c.id } /> );
        return (
            <>
                <div className="level">
                    <Modal
                        title="Create"
                        description="Create a project."
                        body={ (
                            <Form
                                form="createProjectForm"
                                onSubmit={ actions.createProject }
                            >
                                <FormField validate={ [ required ] } name="name" type="text" label="Name" placeholder="Name" />
                                <FormField validate={ [ required ] } name="description" type="text" label="Description" placeholder="Description" />
                                <FormField validate={ [ number ] } name="budget" type="number" label="Budget" placeholder="Budget" />
                                <FormField validate={ [ required ] } name="start" type="date" label="Start Date" />
                                <FormField validate={ [ required ] } name="client" type="select" label="Client" placeholder="Client">
                                    {clientItems}
                                </FormField>
                            </Form>
                        ) }
                        footer={
                            <SubmitButton form="createProjectForm">Create</SubmitButton>
                        }
                        enableCancelButton
                    />
                </div>

                <div className="columns">
                    <div className="column">
                        {projectItems}
                    </div>
                </div>
            </>
        );
    }
}

const mSTP = ( {
    projects: {
        projects,
        clients,
    },
} ) => ( {
    projects,
    clients,
} );

const mDTP = dispatch => ( {
    GetAllProjects: args => dispatch( actions.getAllProjects( args ) ),
    CreateProject: actions.createProject,
    ArchiveProject: args => dispatch( actions.archiveProject( args ) ),
    GetAllClients: args => dispatch( actions.getAllClients( args ) ),
} );

export default connect( mSTP, mDTP )( Projects );
