import React from "react";
import {
    string,
    func,
} from "prop-types";
import { Link } from "react-router-dom";

const ProjectItem = ( {
    id,
    name,
    description,
    onArchive,
} ) => (
    <>

        <div className="card">
            <div className="card-body">
                <button type="submit" className="button is-danger is-pulled-right" onClick={ () => onArchive( id ) }> Archive </button>
                <Link to={ `/project/${ id }` } className="button is-primary is-pulled-right"> View </Link>
                <p><strong>{ name }</strong></p>
                <small><cite>{ description }</cite></small>
            </div>
        </div>

    </>
);

ProjectItem.defaultProps = {
};

ProjectItem.propTypes = {
    id: string.isRequired,
    name: string.isRequired,
    description: string.isRequired,
    onArchive: func.isRequired,
};

export default ProjectItem;
