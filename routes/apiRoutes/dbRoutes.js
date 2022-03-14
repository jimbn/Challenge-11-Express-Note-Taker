const router = require('express').Router();
const db = require('../../db/db.json');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req,res) => res.json(db));

router.post('/notes', (req,res) => {
    let newId = uuid.v4();
    let toSave = {
        id: newId,
        title: req.body.title,
        text: req.body.text,
    }
    db.push(toSave);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db, null, 2)
    );
    res.send(db);
});

router.delete('/notes/:id', (req,res) => {
    let noteId = req.params.id;
    let filteredNotes = db.filter((db) => db.id != noteId);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(filteredNotes, null, 2)
    );
    res.send(db);
});


module.exports = router;