console.log("Frontend server starting!");

// ------------ Demonstrating existing functionality -----------

fetch('/api/products')
  .then(response => response.json())
  .then(products => console.log("DEMO: getting all products", products));

fetch('/api/products/2')
  .then(response => response.json())
  .then(products => console.log("DEMO: getting a single product", products));

fetch('/api/products', {
  method: 'post',
  body: JSON.stringify({
    name: 'a new product',
    description: 'it is shiny',
    price: 777
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(res => console.log("DEMO: adding a product", res))
  .catch(e => console.log("DEMO: Adding a new product doesn't work for the production source, but this is how we would've done it!", e));

// ------------ Testing new functionality -----------

    // ... add code to make fetches to your new routes here ...

fetch('api/posts')
  .then(response => response.json())
  .then(posts => console.log("NEW: getting all the posts", posts));

fetch('api/posts/2')
  .then(response => response.json())
  .then(post => console.log("NEW: getting a single post", post));

fetch('api/post', {
  method: 'post',
  body: JSON.stringify({
    title: 'a new post',
    body: 'åhhh body'
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(res => console.log("NEW: Adding a new post", res))
  .catch(err => console.log("NEW: Adding a new post doesn't work for the production source, but this is how we would've done it", err))

// ----------- CORS demonstration -------------

fetch('http://localhost:8888/api/products')
  .then(response => response.json())
  .then(products => console.log("CORS: Could steal data directly from backend!", products))
  .catch(e => console.log("CORS: Failed to call backend directly :(", e));
