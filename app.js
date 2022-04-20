const express = require('express');
const app = express();




app.use(express.static('public'));



/* Routes */

app.get("/", (request, res, next) => {
    console.log(request);
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/about", (request, res, next) => {
    console.log(request);
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/extras", (request, res, next) => {
    console.log(request);
    res.sendFile(__dirname + '/views/extras.html');
}); 





app.get("/", (request, res, next) => {
    console.log(request);
    res.sendFile(__dirname + "/views/main.html");
});


app.get("/styles", (request, res, next) => {
    console.log(request);
    res.sendFile(__dirname + '/public/styles/styles.css');
});

app.get("/js", (request, res, next) => {
    console.log(request);
    res.sendFile(__dirname + '/public/js/main.js');
});

app.get("/images", (request, res, next) => {
    console.log(request);
    res.sendFile(__dirname + '/public/images/cool-cat.jpg');
});




app.listen(3001, () => {
    
    console.log("my first app listening...");
});

