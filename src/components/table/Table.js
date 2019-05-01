import React from "react";
import PropTypes from "prop-types";

import { FILTER_TYPES } from "../../tables/Types";
import TablePropTypesColumn from "./propTypes/Column";
import TableCellHeader from "./TableCellHeader";
import selectors from "./selectors/Selectors";
import Filter from "./filters/Filter";
import TableCell from "./TableCell";
import Sort from "./sort/Sort";

class Table extends React.Component {
    static propTypes = {
        columns: PropTypes.arrayOf( TablePropTypesColumn ).isRequired,
        data: PropTypes.arrayOf( PropTypes.shape() ).isRequired,
        onContextMenuClick: PropTypes.func,
    };

    static defaultProps = {
        onContextMenuClick: () => {},
    };

    static getDerivedStateFromProps( props, state ) {
        // Set default sort
        const defaultSort = { id: props.columns[ 0 ].key, direction: -1 };

        // Filter data
        let { data } = props;
        data = Filter.apply( data, state.filters );

        // Sort data
        data = Sort.apply( data, state.sort || defaultSort );

        return { data, sort: state.sort || defaultSort };
    }

    state = { data: [], sort: null, filters: [] }

    onSortChange = ( id ) => {
        const { sort } = this.state;
        if ( id === sort.id ) {
            // Toggle sort direction on same column
            this.setState( prevState => ( {
                sort: { ...prevState.sort, direction: selectors.sortDirection( prevState.sort.direction ) },
            } ) );
        } else {
            // Set sort to new column and default direction value
            this.setState( { sort: { id, direction: -1 } } );
        }
    }

    onFilterChange = ( filter ) => {
        if ( selectors.isEmptyFilter( filter.value ) ) {
            // Delete old filter
            this.setState( prevState => ( {
                filters: prevState.filters.filter( f => f.id !== filter.id ),
            } ) );
        } else {
            const { filters } = this.state;

            if ( filters.some( f => f.id === filter.id ) ) {
                // Update existing filter with new values
                this.setState( prevState => ( {
                    filters: prevState.filters.map( f => ( f.id === filter.id ? filter : f ) ),
                } ) );
            } else {
                // Create new filter
                this.setState( prevState => ( {
                    filters: [ ...prevState.filters, filter ],
                } ) );
            }
        }
    }

    render() {
        const { columns, onContextMenuClick } = this.props;
        const { data, sort, filters } = this.state;

        return (
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        { columns && columns.map( column => (
                            <TableCellHeader
                                { ...column }
                                id={ column.key }
                                sort={ sort }
                                filter={ filters.find( f => f.id === column.key ) || {
                                    id: column.key,
                                    type: column.filter || FILTER_TYPES.NONE,
                                    value: undefined,
                                } }
                                onSortChange={ this.onSortChange }
                                onFilterChange={ this.onFilterChange }
                            />
                        ) ) }
                    </tr>
                </thead>
                <tbody>
                    { data && data.map( ( row, key ) => (
                        <tr key={ row.id || key }>
                            { columns && columns.map( cell => (
                                <TableCell
                                    key={ cell.key }
                                    type={ cell.type }
                                    value={ row[ cell.key ] }
                                    icon={ cell.icon }
                                    link={ selectors.linkValue( cell.link, row ) }
                                    actions={ cell.actions }
                                    onContextMenuClick={ action => onContextMenuClick( action, row ) }
                                />
                            ) ) }
                        </tr>
                    ) ) }
                </tbody>
            </table>
        );
    }
}

export default Table;
