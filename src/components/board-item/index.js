import React from "react";
import {
    string, func,
} from "prop-types";
import EditableLabel from "react-editable-label";

const BoardItem = ( {
    name,
    id,
    onArchive,
    onDelete,
    onUpdate,
} ) => (
    <li className="board level">
        <div className="level-left">
            <EditableLabel
                className="is-size-4 has-text-light"
                initialValue={ name }
                save={ value => onUpdate( { id, name: value } ) }
            />
        </div>
        <div className="level-right">
            <div className="level-item icon favorite-btn">
                <i className="not-fav far fa-star fa-lg" />
                <i className="fav fas fa-star fa-lg " />
            </div>
            <div className="level-item icon archive-btn" onClick={ () => { onArchive( { id, archived: true } ); } }>
                <i className="fas fa-archive" />
            </div>
            <div className="level-item icon delete-btn" onClick={ () => { onDelete( id ); } }>
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
    onUpdate: string.isRequired,
    name: string.isRequired,
    id: string.isRequired,
};
export default BoardItem;
