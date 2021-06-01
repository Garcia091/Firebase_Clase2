import { db } from '../firebase/firebase-config'

export const loadNotes = async (uid) => {

    const noteStore = await db.collection(`${uid}/journal/note`).get()
    const notes = [];

    noteStore.forEach(hijo=>{
       notes.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    console.log(notes)
    return notes
}

