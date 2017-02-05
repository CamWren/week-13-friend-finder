app.get("../data/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "friends.js"));
});

app.post("/api/new", function(req, res) {
  // var newcharacter = req.body;
  // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  // console.log(newcharacter);

  // characters.push(newcharacter);

  // res.json(newcharacter);
});
