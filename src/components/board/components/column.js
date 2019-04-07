import React from "react";
import {
    string,
} from "prop-types";

const Column = ( {
    boardId, name,
} ) => (
    <div>
        <h2>
            {name}
            {" "}
            {boardId}
        </h2>
    </div>
);

Column.defaultProps = {
};

Column.propTypes = {
    name: string.isRequired,
    boardId: string.isRequired,
};
export default Column;
