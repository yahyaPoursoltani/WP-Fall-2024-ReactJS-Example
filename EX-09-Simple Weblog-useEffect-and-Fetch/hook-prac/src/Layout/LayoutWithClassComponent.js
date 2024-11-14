import React, { Component } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlogPost from './components/BlogPost/BlogPost';
import './Layout.css';

class LayoutWithClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="App">
                <Header />
                <Navbar />
                <main>
                    {
                        posts.map((post) => (
                            <BlogPost key={post.id} title={post.title} content={post.body} />
                        ))
                    }
                </main>
                <Footer />
            </div>
        );
    }
}

export default LayoutWithClassComponent;