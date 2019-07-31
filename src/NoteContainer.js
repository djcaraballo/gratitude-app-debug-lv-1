import React from 'react'

import NoteCard from './NoteCard'

const NoteContainer = ({ notes, deleteNote }) => {
  const displayedNotes = notes.map(note => {
    return <NoteCard
            key={note.id}
            deleteNote={deleteNote}
            {...note}
            />
  })

  return(
    <div className="note-container">
      {displayedNotes}
    </div>
  )
}

export default NoteContainer

// remove return statement from map
