// Dependencies
const express = require("express");
const html_routes = require("./routes/html_routes");
const api_routes = require("./routes/api_routes");
const PORT = process.env.PORT || 3001;
// Sets up the Express App
const app = express();

// Add express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes);
app.use(api_routes);

app.listen(PORT, () => {
  console.log(`API server now on port http://localhost:${PORT}`);
});
