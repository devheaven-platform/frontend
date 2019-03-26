import React from "react";
import {
    string,
} from "prop-types";

const BoardItem = ( {
    name,
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
            <button className="level-item delete-btn delete" type="button" />
        </div>
    </li>
);

BoardItem.defaultProps = {
};

BoardItem.propTypes = {
    name: string.isRequired,
};
export default BoardItem;
