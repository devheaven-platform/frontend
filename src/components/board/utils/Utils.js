/**
 * Reorders a list.
 *
 * @param {Array} list the list to reorder.
 * @param {Number} start the index to move from.
 * @param {Number} end the index to move to.
 */
const reorder = ( list, start, end ) => {
    const [ removed ] = list.splice( start, 1 );
    list.splice( end, 0, removed );

    return list.map( m => m.id );
};

/**
 * Moves a item between two lists.
 *
 * @param {Array} source the source list.
 * @param {Array} destination the destination list.
 * @param {Object} droppableSource the droppable source.
 * @param {Object} droppableDestination the droppable destination.
 */
const move = ( source, destination, droppableSource, droppableDestination ) => {
    const [ removed ] = source.splice( droppableSource.index, 1 );

    destination.splice( droppableDestination.index, 0, removed );

    return {
        [ droppableSource.droppableId ]: source.map( m => m.id ),
        [ droppableDestination.droppableId ]: destination.map( m => m.id ),
    };
};

export default {
    reorder,
    move,
};
