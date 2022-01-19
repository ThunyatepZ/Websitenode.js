const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const products = require("./data/products.json");
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) => {
    res.render('Products',
        products,
    );

});

productRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.send("products" +id);
});

app.use("/products", productRouter)

app.get("/", (req, res) => {

    res.render('index', { username: 'Thunyatep++', customer: ['mos', 'moos', 'mss'] })

})

app.listen(PORT, () => {
    debug(PORT)
})
