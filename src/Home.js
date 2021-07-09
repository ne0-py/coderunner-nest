import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([{title: "Welcome to the Nest!", body: "lorem ipsum...", author: "Admin", id: 1},
     {title: "Getting Started", body: "lorem ipsum...", author: "Morpheus", id: 2},
     {title: "Tips for Netrunning", body: "lorem ipsum...", author: "Neo", id: 3},
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
    );
}
 
export default Home;