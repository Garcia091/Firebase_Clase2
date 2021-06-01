import React from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import {notesAction} from '../../actions/notesAction'

export const Sidebar = () => {

    const dispatch = useDispatch()

    const { name } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.notes);

    const handleLogout = () => {
        console.log('Click')
        dispatch(startLogout())
    }

    const handleNew = () => {
        dispatch(notesAction(notes))
        console.log('Click', notes)
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <img src="" alt="" />
                    <span> {name}</span>
                </h3>

                <button className="btn"
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry" onClick ={handleNew}>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5" >
                    New entry
                </p>
            </div>

            <JournalEntries />

        </aside>
    )
}
