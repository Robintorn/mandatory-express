const products = [
    {
        id: 1,
        name: 'JS 101',
        category: 'book'
    },
    {
        id: 2,
        name: 'Avancerad JS',
        category: 'book'
    }
];

const posts = [
    {
        userId: 1,
        id: 1,
        title: 'k23a',
        body: 'kommunikation'
    },
    {
        userId: 1,
        id: 2,
        title: 'Avancerad JS',
        body: 'book'
    }
];

class mockSource {
    getProducts() {
        return Promise.resolve(products);
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            const found = products.find(product => product.id === +id);
            found ? resolve(found) : reject();
        });

    }

    addProduct({ category, name }) {
        const lastIndex = products.length - 1;
        const lastId    = products[lastIndex].id;
        const newProduct = {
            id: lastId + 1,
            category,
            name
        };
        products.push(newProduct);

        return Promise.resolve(newProduct);
    }

    getPosts() {
        return Promise.resolve(posts);
    }

    getPost(id) {
        return new Promise((resolve, reject) => {
            const found = posts.find(post => post.id === +id);
            found ? resolve(found) : reject();
        })
    }

    addPost({ userId ,title, body }) {
        const lastIndex = posts.length - 1;
        const lastId    = posts[lastIndex].id;
        const newPost = {
            userId,
            id: lastId + 1,
            title,
            body
        };
        posts.push(newPost);

        return Promise.resolve(newPost);
    }
}

module.exports = mockSource;