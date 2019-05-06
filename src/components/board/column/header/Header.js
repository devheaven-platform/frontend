import React from "react";
import PropTypes from "prop-types";

import editColumnForm from "forms/EditColumn";
import ModalForm from "../../../modal/form/Form";

const BoardColumnHeader = ( {
    name,
    errors,
    editColumn,
    removeColumn,
} ) => (
    <div className="board-column-header">
        <h5 className="title is-5 has-margin-bottom-0">{ name }</h5>
        <div>
            <ModalForm
                title="Edit Column"
                description="Edit this column."
                button={ ( { onClick } ) => (
                    <button
                        type="button"
                        className="button is-secondary is-small"
                        onClick={ onClick }
                    >
                        <span className="icon is-small">
                            <i className="fas fa-edit" />
                        </span>
                    </button>
                ) }
                fields={ editColumnForm( { name } ) }
                errors={ errors }
                submit={ editColumn }
            />
            <button type="button" className="button has-margin-left-2 is-danger is-small" onClick={ removeColumn }>
                <span className="icon is-small">
                    <i className="fas fa-trash" />
                </span>
            </button>
        </div>
    </div>
);

BoardColumnHeader.propTypes = {
    name: PropTypes.string.isRequired,
    errors: PropTypes.shape(),
    editColumn: PropTypes.func.isRequired,
    removeColumn: PropTypes.func.isRequired,
};

BoardColumnHeader.defaultProps = {
    errors: {},
};

export default BoardColumnHeader;
