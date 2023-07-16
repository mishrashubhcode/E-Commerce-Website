const { MongoClient } = require("mongodb");

const dbUrl = "mongodb+srv://kumarshubham41515:Canada@123@cluster0.klcwaqo.mongodb.net/";
const client = new MongoClient(dbUrl);

app.get("/", async (request, response) => {
    let links = await getAllLinks();
    response.render("index", { title: "Home", menu: links });
});

app.get("/about", async (request, response) => {
    let links = await getAllLinks();
    response.render("About", {title: "About", menu: links });
    });

app.get("/contact", async (request, response) => {
    let links = await getAllLinks();
    response.render("Contact", {title: "Contact", menu: links });
   });

//MONGODB HELPER FUNCTIONS
async function connection() {
    db = client.db("Commercial_Website");
    return db;
}
async function getAllLinks() {
    db = await connection();
    const results = await db.collection("products").find({});
    resultsArray = await results.toArray();
    console.log(resultsArray);
    return resultsArray;
}