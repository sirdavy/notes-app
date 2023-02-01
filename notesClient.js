class NotesClient {
  loadNotes(bananas) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      bananas(data)
    });
  }
}

module.exports = NotesClient;
