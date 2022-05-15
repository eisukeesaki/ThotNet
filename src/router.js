const { Router } = require("express");
const router = Router();

const nc = require("./controllers/NotesController");

router.post("/v0/notes", nc.createNote);

module.exports = router;

