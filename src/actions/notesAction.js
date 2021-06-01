import { db } from '../firebase/firebase-config'
import { loadNotes } from '../helpers/loadNotes';
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { fileUpload } from '../helpers/fileUpload';

export const notesAction = (notes) => {
    return async (dispatch, getSate) => {

        const uid = getSate().auth.uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/note`).add(newNote)
        console.log()
       
        dispatch(activeNote(docRef.id, newNote))
        dispatch(addNewNote(docRef.id, newNote))
      
    }
}

export const activeNote = (id, notes) => {
    return {
        type: types.notesActive,
        payload: {
            id,
            ...notes
        }
    }
}

export const addNewNote = ( id, notes ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...notes
    }
})

export const startLoadingNote = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid)
        dispatch(setNote(notes))
    }
}

export const setNote = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
}

export const startSaveNote = (notes) => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!notes.url) {
            delete notes.url;
        }

        const noteToFirestore = { ...notes }
        delete noteToFirestore.id

        await db.doc(`${uid}/journal/note/${notes.id}`).update(noteToFirestore)
        dispatch(refreshNote(notes.id, noteToFirestore));
      
        Swal.fire('Saved', notes.title, 'success');
    }
}

export const refreshNote = (id, notes) => ({
    type: types.notesUpdate,
    payload: {
        id,
        notes: {
            id,
            ...notes
        }
    }
});

export const startUploading = (file) => {
    return async (dispatch, getState) => {

        const { active: activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        const fileUrl = await fileUpload(file)
        activeNote.url = fileUrl
        dispatch(startSaveNote(activeNote))

        Swal.close()
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/note/${id}`).delete();

        dispatch(deleteNote(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});

export const noteLogout = () => ({
    type: types.notesLogoutClean,

});
