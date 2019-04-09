
};
export default BoardItem;

    id,
    onArchive,
    onDelete,
    onUpdate,
            <div className="level-item icon archive-btn" onClick={ () => { onArchive( { id, archived: true } ); } }>
                <i className="fas fa-archive" />
            </div>
            <div className="level-item icon delete-btn" onClick={ () => { onDelete( id ); } }>
                <i className="fas fa-trash-alt" />
            </div>
    onDelete: func.isRequired,
    onArchive: func.isRequired,
    id: string.isRequired,
};
export default BoardItem;
