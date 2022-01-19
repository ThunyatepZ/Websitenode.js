const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) => {
    res.render('Products',{
        products: [
            {producttitle: 'น้ำเปล่า', productde: 'ดี'},
            {producttitle: 'น้ำเปล่า2', productde: 'ดี2'},
            {producttitle: 'น้ำเปล่า3', productde: 'ดี3'}

        ],
    });
    
});

productRouter.route("/1").get((req, res) => {
    res.send("Hello boi");
});

app.use("/products", productRouter)

app.get("/", (req, res) => {

    res.render('index', { username: 'Thunyatep++', customer: ['mos', 'moos', 'mss'] })

})

app.listen(PORT, () => {
    debug(PORT)
})
