const express = require('express');
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {

})
app.get("/about", (req, res) => {

})
app.get("/features", (req, res) => {

})
app.get("/gallery", (req, res) => {

})






app.listen(3000, () => {
    console.log('listening on port 3000');
})