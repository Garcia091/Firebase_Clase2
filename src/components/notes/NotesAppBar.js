import React from 'react'
import { startSaveNote, startUploading, startDeleting } from '../../actions/notesAction'
import { useDispatch, useSelector } from 'react-redux'

export const NotesAppBar = () => {
    const dispatch = useDispatch()
    const { active } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(active))
        
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log('url cargado', file)
        if (file) {
            dispatch(startUploading(file));
        }
    }

    const handleDelete = () => {
        dispatch(startDeleting(active.id))
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div>
                <button
                    className="btn"
                    onClick={handlePictureClick}
                >
                    Picture
                </button>

                <button className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>

                <button type="button"
                    className="btn btn-danger"
                    onClick={handleDelete}
                >
                    Eliminar
                    </button>
            </div>
        </div>
    )
}
