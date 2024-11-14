// App.js
import React from 'react';
import BlogPost from './Components/BlogPost/BlogPost';

const App = () => {
    // Sample blog post data
    const posts = [
        {
            title: 'Understanding React',
            content: 'React is a JavaScript library for building user interfaces. It makes it painless to create interactive UIs and helps manage state effectively.',
            author: 'John Doe',
        },
        {
            title: 'A Guide to CSS Flexbox',
            content: 'Flexbox is a one-dimensional layout method for laying out items in a single direction - either as a row or a column. It simplifies the process of aligning and distributing space among items.',
            author: 'Jane Smith',
        },
        {
            title: 'JavaScript ES6 Features',
            content: 'ES6 brought many new features to JavaScript, including arrow functions, classes, and template literals, enhancing the development experience and performance.',
            author: 'Emily Johnson',
        },
    ];

    return (
        <div className="app">
            <h1>My Blog</h1>
            {posts.map((post, index) => (
                <BlogPost key={index} title={post.title} content={post.content} author={post.author} />
            ))}
        </div>
    );
};

export default App;