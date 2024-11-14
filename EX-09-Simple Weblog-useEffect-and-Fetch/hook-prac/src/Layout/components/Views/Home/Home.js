import React,{useEffect,useState} from 'react';
import BlogPost from '../../BlogPost/BlogPost';

const Home = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        console.log("Loading Data ...")
         fetch("https://jsonplaceholder.typicode.com/posts")
                 .then(res=>res.json())
                 .then(data=>setPosts(data))
        setPosts([]);
    },[])

    return (
            <main>
                <h1>Homepage</h1>
                {
                    posts.map((post)=>{
                        return <BlogPost key={post.id} title={post.title} content={post.body}/>
                    })
                }
            </main>
    );
}

export default Home;
