(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.array = [];
        }
        getNotes() {
          return this.array;
        }
        addNote(note) {
          this.array.push(note);
        }
        setNotes(notes) {
          this.array = notes;
        }
        reset() {
          this.array = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#add-note-button");
          this.buttonEl.addEventListener("click", () => {
            this.addNote();
          });
        }
        displayNotes() {
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const newDivNote = document.createElement("div");
            newDivNote.textContent = note;
            newDivNote.id = "note";
            this.mainContainerEl.append(newDivNote);
          });
        }
        displayNotesFromApi() {
          this.client.loadNotes((notes) => {
            this.model.setNotes(notes);
            this.displayNotes();
          });
        }
        async addNote() {
          const inputEl = document.querySelector("#new-note-input");
          await this.client.createNote(inputEl.value);
          inputEl.value = null;
          this.displayNotesFromApi();
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesClient.js
  var require_notesClient = __commonJS({
    "notesClient.js"(exports, module) {
      var NotesClient2 = class {
        loadNotes(onNotesLoaded) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            onNotesLoaded(data);
          });
        }
        createNote(content) {
          const newNote = { content };
          return fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
          }).then((response) => response.json()).then((newNote2) => {
            console.log("Success:", newNote2);
            return newNote2;
          }).catch((error) => {
            console.error("Error:", error);
            throw error;
          });
        }
      };
      module.exports = NotesClient2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesClient = require_notesClient();
  var client = new NotesClient();
  var model = new NotesModel();
  var view = new NotesView(model, client);
  view.displayNotesFromApi();
})();
