import React from "react";
import {
    string, func,
} from "prop-types";

const BoardItem = ( {
    name,
    id,
    onDelete,
} ) => (
    <li className="board level">
        <div className="level-left">
            <p className="is-size-4 has-text-light">{name}</p>
        </div>
        <div className="level-right">
            <div className="level-item icon favorite-btn">
                <i className="not-fav far fa-star fa-lg" />
                <i className="fav fas fa-star fa-lg " />
            </div>
            <div className="level-item icon archive-btn">
                <i className="fas fa-archive" />
            </div>
            <div className="level-item icon delete-btn" onClick={ () => { console.log( `deleting: ${ id }` ); onDelete( id ); } }>
                <i className="fas fa-trash-alt" />
            </div>
        </div>
    </li>
);

BoardItem.defaultProps = {
};

BoardItem.propTypes = {
    onDelete: func.isRequired,
    id: string.isRequired,
    name: string.isRequired,
};
export default BoardItem;
