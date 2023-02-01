const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('calls fetch and loads data', (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify({
      note: "This is David's note"
    }));

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.note).toBe("This is David's note");
    done();
    });
  });
});
