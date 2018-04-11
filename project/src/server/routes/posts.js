const express = require('express');

const store = require('../store');

const route = express.Router();

// GET /api/posts

route.get('/posts', (req, res) => {

    store.getPosts()
        .then(posts => res.json({ posts }));
})

route.get('/posts/:id', (req, res) => {
    const postId = Number(req.params.id);
    
    store.getPost(postId)
        .then(post => res.json(post))
        .catch(error => {
            res.status(404).json(
                { error }   
            );
        })
})

route.post('/posts', (req, res) => {
    const postData = JSON.parse(req.body);

    store.addPost(postData)
        .then(newPost => res.json({ newPost }));
})

module.exports = route;