// fs.writeFileSync('notes.js','const getNotes=()=>{return()}')
// const fs = require('fs')
// const validator = require('validator')
// console.log(validator.isURL('furqanashraf'))
const notes = require("./notes.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "adding a note",
  builder: {
    title: {
      description: "this is to add a title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "this is to add description",
      demandOption: true,
      type: "string",
    },
  },
  handler(yargs) {
    notes.addNotes(yargs.title, yargs.body);
  },
});
yargs.command({
  command: "remove",
  describe: "to remove a note",
  builder: {
    title: {
      description: "title required to be removed",
      demandOption: true,
      type: "string",
    },
  },
  handler(yargs) {
    notes.removeNote(yargs.title);
  },
});
yargs.command({
  command: "list",
  describe: "to list notes",
  handler() {
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "to read a specific note",
  builder: {
    title: {
      description: "title required to be read",
      demandOption: true,
      type: "string",
    },
  },
  handler(yargs) {
    notes.readNote(yargs.title);
  },
});

yargs.parse();
