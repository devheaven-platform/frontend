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
    }

    static propTypes = {
        projects: arrayOf( shape( { id: string, name: string, description: string } ) ),
        GetAllProjects: func.isRequired,
        ArchiveProject: func.isRequired,
    }

    componentDidMount() {
        const { GetAllProjects } = this.props;
        GetAllProjects( "3b8fc595-afb7-47a2-83ff-662746c66eee" ); // Todo : Inject user id here rather than hardcoded value
        console.log( this.props );
    }

    render() {
        const {
            projects,
        } = this.props;
        const {
            ArchiveProject,
        } = this.props;
        const projectItems = projects.map( p => <ProjectItem key={ p.id } name={ p.name } description={ p.description } id={ p.id } onArchive={ ArchiveProject } /> );

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
                                    <SelectOption name="DevHeaven" value="3b8fc595-afb7-47a2-83ff-662746c66eee" />
                                    <SelectOption name="Mario business student" value="3b8fc595-afb7-47a2-83ff-662746c66fff" />
                                    <SelectOption name="Progressively Harder" value="3b8fc595-afb7-47a2-83ff-662746c66ggg" />
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
    },
} ) => ( {
    projects,
} );

const mDTP = dispatch => ( {
    GetAllProjects: args => dispatch( actions.getAllProjects( args ) ),
    CreateProject: actions.createProject,
    ArchiveProject: args => dispatch( actions.archiveProject( args ) ),
} );

export default connect( mSTP, mDTP )( Projects );
