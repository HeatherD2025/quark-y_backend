const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

app.get("/", (req, res) => res.send("Server healthy"));
