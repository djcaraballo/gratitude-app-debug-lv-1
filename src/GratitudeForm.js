import React from 'react'

export class GratitudeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sender: '',
      recipient: '',
      date: '',
      note: ''
    }
  }

  handleChange = ({target: { name, value }}) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNote(this.state)
    this.setState({
      sender: '',
      recipient: '',
      date: '',
      note: ''
    })
  }

  render() {
    const { sender, recipient, date, note } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
      <h2>Send someone a note of gratitude!</h2>
      <p>Sending a note of gratitude to someone can really brighten someone's day. Post a note here so that your friends know how grateful you are!</p>
        <label htmlFor="sender">From: </label>
        <input
          className="form-input"
          name="sender"
          value="sender"
          placeholder="Enter sender's name"
          onChange={this.handleChange} />
        <label htmlFor="recipient">To: </label>
        <input
          className="form-input"
          name="recipient"
          value={recipient}
          placeholder="Enter recipient's name"
          onChange={this.handleChange}/>
        <label htmlFor="date">Date: </label>
        <input
          className="form-input"
          name="date"
          value="date"
          type="date"
          onChange={this.handleChange}/>
        <label htmlFor="note">Note: </label>
        <input
          className="form-input note-input"
          name="note"
          value="note"
          placeholder="What are you grateful for?"
          onChange={this.handleChange}/>
        <button>Post Note!</button>
      </form>
    )
  }
}
