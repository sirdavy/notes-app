// onNotesLoaded is a placeholder for the function being passed to it (in this case, 
// and as far as I know ALL case, brian).
// When onNotesLoaded is called in the final line it's actually calling the brian function 
// - as defined in index.js - on the data received

class NotesClient {
  loadNotes(onNotesLoaded) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      onNotesLoaded(data)
    });
  }

  createNote(content) {
    const newNote = { content };
    return fetch('http://localhost:3000/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((newNote) => {
        console.log('Success:', newNote);
        return newNote;
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });
  }





}

module.exports = NotesClient;
