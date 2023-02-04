const NotesClient = require("./notesClient");

require("jest-fetch-mock").enableMocks();

describe("Client class", () => {
  it("calls fetch and loads data", (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        note: "This is David's note",
      })
    );

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.note).toBe("This is David's note");
      done();
    });
  });


  describe("Client class", () => {
    beforeEach(() => {
      fetch.resetMocks();  // Reset the behavior of the fetch function before each test.
    });
  
    it("It creates a new note via the POST method", () => {
      const client = new NotesClient();  
      const input = { 
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: { content: "Go to the gym" } }), 
  };
      fetch.mockResponseOnce(JSON.stringify({ content: "Go to the gym" }));  
      client.createNote({ content: "Go to the gym" });
      expect(fetch).toHaveBeenCalledWith("http://localhost:3000/notes", input); 
    });
  });


});
