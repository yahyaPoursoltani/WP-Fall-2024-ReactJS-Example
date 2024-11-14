// BlogPost.js
import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, content, author }) => {
    return (
        <div className="blog-post">
            <h2 className="blog-post-title">{title}</h2>
            <p className="blog-post-content">{content}</p>
            <p className="blog-post-author">Written by: {author}</p>
        </div>
    );
};

export default BlogPost;