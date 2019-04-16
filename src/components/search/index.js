import React, { Component } from "react";
import {
    string, func,
} from "prop-types";

class Search extends Component {
    constructor( props ) {
        super( props );

        this.handleInputChange = this.handleInputChange.bind( this );
    }

    handleInputChange( e ) {
        const query = e.target.value;
        const { onSearch } = this.props;
        onSearch( query );
    }

    render() {
        const { placeholder } = this.props;
        return (
            <form>
                <input className="search"
                    placeholder={ placeholder }
                    onChange={ this.handleInputChange }
                />
            </form>
        );
    }
}
Search.defaultProps = {

};

Search.propTypes = {
    onSearch: func.isRequired,
    placeholder: string.isRequired,
};
export default Search;
