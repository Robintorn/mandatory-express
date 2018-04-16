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
    const postData = req.body;
    
    store.addPost(postData)
        .then(newPost => res.json({ newPost }));
})

route.delete('/posts/:id', (req, res) => {
    const Id = Number(req.params.id);

    store.deletePost(Id)
        .then(post => res.json(post))
});

module.exports = route;