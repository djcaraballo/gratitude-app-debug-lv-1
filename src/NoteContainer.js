import React from 'react'

const NoteContainer = ({ notes, deleteNote }) => {
  const displayedNotes = notes.map(note => {
     <NoteCard
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
