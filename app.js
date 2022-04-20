const express = require('express');
const app = express();

app.set("views", ___dirname + "/views");
app.set("view engine", "hbs");


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
    res.sendFile(_dirname + '/views/extras.html');
}); 


app.get("/limoncello", (request, res, next) => {
    res.sendFile(__dirname + '/views/product-limoncello.html')
//res.render ("view", info);

const data = {
    title: "Limoncello",
    price: 20,
    image: "product-limoncello.png"
}
    res.render("product-limoncello", data);
});


app.get("/singlemalt", (request, res, next) =>{
    res.sendFile(__dirname + '/views/product-singlemalt.html')

    const data = {

        title: "singlemalt"
        price: 30,
        image: "product-whiskey.png"
    }

    res.render("product-whsikey", data);
});

app.get("/tequila", (request, res, next) =>{
    res.sendFile(__dirname + '/views/product-tequila.html')
});



app.get("/", (request, res, next) => {
    console.log(request);
    res.sendFile(_dirname + '/public/main.html');
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
    res.sendFile(_dirname + '/public/images/cool-cat.jpg');
});




app.listen(3001, () => {
    console.log(request);
    console.log("my first app listening...");
});


