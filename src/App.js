import React, { Component } from 'react'

import GratitudeForm from './GratitudeForm'
import NoteContainer from './NoteContainer'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  addNote = (note) => {
    const { notes } = this.state
    const newNote = {...note, id: Date.now()}
    const newNotes = [newNote, ...notes]
    this.setState({
      notes: newNotes
    })
  }

  deleteNote = (id) => {
    const { notes } = this.state
    const newNotes = notes.filter(note => note.id !== id)
    this.setState({
      notes: newNotes
    })
  }

  render() {
    const { notes } = this.state

    return (
    <div className="App">
      <h1>Thank you, very much!</h1>
      <GratitudeForm addNote={this.addNote}/>
      <NoteContainer notes={notes} deleteNote={this.deleteNote}/>
    </div>
    )
  }
}

export default App;

// remove super from constructor
