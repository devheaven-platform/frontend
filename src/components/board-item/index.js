import React from "react";
import { Link } from "react-router-dom";
import {
    string,
} from "prop-types";

const BoardItem = ( {
    name, projectId, boardId,
} ) => (
    <li className="board level">
        <div className="level-left">
            <Link to={ `/project/${ projectId }/board/${ boardId }` }>
                <p className="is-size-4 has-text-light">{name}</p>
            </Link>
        </div>
        <div className="level-right">
            <div className="level-item icon favorite-btn">
                <i className="not-fav far fa-star fa-lg" />
                <i className="fav fas fa-star fa-lg " />
            </div>
            <button className="level-item delete-btn delete" type="button" />
        </div>
    </li>
);

BoardItem.defaultProps = {
};

BoardItem.propTypes = {
    name: string.isRequired,
    projectId: string.isRequired,
    boardId: string.isRequired,
};
export default BoardItem;
