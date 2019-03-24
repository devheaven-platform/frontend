import React from "react";
import { string } from "prop-types";

const SelectOption = ( { name, value } ) => (
    <option value={ value }>{ name }</option>
);

SelectOption.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
};

export default SelectOption;
