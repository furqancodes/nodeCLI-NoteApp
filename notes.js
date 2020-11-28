const fs = require("fs");
const chalk = require("chalk");
const red = chalk.red;
const yellow = chalk.yellowBright;
const green = chalk.green;
const cyan = chalk.cyan;
//
//------------exporting functions start-----------
//
//------add function-----------
const addNotes = (title, body) => {
  const noteData = loadNote();
  const duplicateNoteData = noteData.find((note) => {
    return note.title === title;
  });
  if (!duplicateNoteData) {
    noteData.push({
      title: title,
      body: body,
    });
    saveNote(noteData);
    console.log(cyan("added title ") + yellow(title));
  } else {
    console.log(red("note already exists"));
  }
};
//------add function end-----------
//------remove function start -------------
const removeNote = (title) => {
  const noteData = loadNote();
  const duplicateNoteData = noteData.filter((note) => {
    return note.title !== title;
  });
  if (duplicateNoteData.length === noteData.length) {
    console.log(yellow(title), red(" note not found"));
  } else {
    console.log(red("removing " + yellow(title)));
    saveNote(duplicateNoteData);
  }
};

//------remove function end ---------------
//------list function start----------------
const listNotes = () => {
  const noteData = loadNote();
  if (noteData.length === 0) {
    console.log(red("no notes found"));
  } else {
    console.log(green("listing all the notes"));
    noteData.forEach((element) => {
      console.log(green("title = ") + yellow(element.title));
    });
  }
};

//------list function end------------------
//------read function start----------------
const readNote = (title) => {
  const noteData = loadNote();
  const noteFound = noteData.find((note) => note.title === title);
  if (noteFound) {
    console.log(cyan("reading a specific note"));
    console.log(green("title = ") + yellow(noteFound.title));
    console.log(green("body = ") + yellow(noteFound.body));
  } else {
    console.log(red("title not found"));
  }
};
//------read function end------------------
//---------------export function end------------
//
//-------------side function start-----------------
//
const loadNote = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (error) {
    return [];
  }
};
const saveNote = (noteData) => {
  fs.writeFileSync("notes.json", JSON.stringify(noteData));
};
//
//--------side function end---------------------------
//------------exports-------------------------------
module.exports = {
  addNotes,
  removeNote,
  listNotes,
  readNote,
};
