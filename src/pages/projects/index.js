import React from "react";
import {
    func, shape, string, arrayOf, bool,
} from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    Modal, Form, FormField, BoardItem, SubmitButton,
} from "components";
import { actions } from "./duck";
import ProjectItem from "../../components/project-item/ProjectItem";

class Projects extends React.Component {
    static defaultProps = {
        projects: [],
    }

    static propTypes = {
        projects: arrayOf( shape( { id: string, name: string, description: string } ) ),
        GetAllProjects: func.isRequired,

    }

    componentDidMount() {
        const { GetAllProjects } = this.props;
        GetAllProjects( "02cb199e-0314-4c64-9f5c-9951e517efcd" ); // Todo : Inject user id here rather than hardcoded value
        console.log( this.props );
    }

    render() {
        const {
            projects,
        } = this.props;

        const projectItems = projects.map( p => <ProjectItem name={ p.name } description={ p.description } id={ p.id } /> );

        return (
            <div className="columns">
                <div className="column">
                    {projectItems}
                </div>
            </div>
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
} );

export default connect( mSTP, mDTP )( Projects );
