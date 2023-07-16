// index.js
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || '3000';

// Set the view engine to use Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set the path for static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

//Define an array of products
const products = [
  {
    name: 'iPhone 12 Pro',
    image: '/images/iphone12pro.jpeg',
    price: '$800',
  },
  {
    name: 'Samsung Galaxy S21 Ultra',
    image: '/images/galaxys21ultra.jpg',
    price: '$1299',
  },
  {
    name: 'MacBook Pro 2021',
    image: '/images/macbookpro2021.jpg',
    price: '$1799',
  },
];

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('layout', { title: 'Home', products });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us'});
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
