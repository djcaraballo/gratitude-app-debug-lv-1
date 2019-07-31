import React from 'react'

const NoteCard = ({ id, sender, recipient, date, note, deleteNote }) => {
  return(
    <div className="note-card">
      <h3 className="card-date">Sent: {date}</h3>
      <h2 className="greeting">Dear {recipient},</h2>
      <p>{note}</p>
      <h2>- {sender}</h2>
      <button onClick={() => deleteNote(id)}>Delete Note</button>
    </div>
  )
}

export default NoteCard
