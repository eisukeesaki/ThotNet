const db = require("../db/db");

module.exports = {

  createNote(req, res) {
    res.json(db.notes[db.notes.push(req.body) - 1]);
  }

}

