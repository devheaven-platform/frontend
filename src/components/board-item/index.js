import React from "react";
import { withRouter } from "react-router-dom";
import {
    string, func, shape,
} from "prop-types";
// import EditableLabel from "react-editable-label";

const BoardItem = ( {
    name,
    boardId,
    projectId,
    onArchive,
    onDelete,
    onUpdate,
    history,
} ) => (
    <li role="presentation" className="board level" onClick={ () => { history.push( `/project/${ projectId }/board/${ boardId }` ); } }>
        <div
            role="presentation"
            className="level-left"
            onClick={ ( e ) => { e.stopPropagation(); } }
        >
            { name }
            {/* <EditableLabel
                className="is-size-4 has-text-light"
                initialValue={ name }
                save={ value => onUpdate( { id: boardId, name: value } ) }
            /> */}
        </div>
        <div className="level-right">
            <div className="level-item icon favorite-btn">
                <i className="not-fav far fa-star fa-lg" />
                <i className="fav fas fa-star fa-lg " />
            </div>
            <div className="level-item icon archive-btn" onClick={ ( e ) => { e.stopPropagation(); onArchive( { id: boardId, archived: true } ); } }>
                <i className="fas fa-archive" />
            </div>
            <div className="level-item icon delete-btn" onClick={ ( e ) => { e.stopPropagation(); onDelete( { id: boardId } ); } }>

                <i className="fas fa-trash-alt" />
            </div>
        </div>
    </li>
);

BoardItem.defaultProps = {
};

BoardItem.propTypes = {
    onDelete: func.isRequired,
    onArchive: func.isRequired,
    onUpdate: func.isRequired,
    name: string.isRequired,
    projectId: string.isRequired,
    boardId: string.isRequired,
    history: shape( {} ).isRequired,
};
export default withRouter( BoardItem );
