app.get("../public/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.use("../public/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
