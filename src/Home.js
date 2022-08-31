import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const arrBlogs = [
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ];
    const [blogs, setBlogs] = useState(arrBlogs)
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((e)=>e.id!==id);
        setBlogs(newBlogs);
    }
    useEffect( ()=>console.log('rendering') )

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All blogs' handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter( (e)=>e.author==='mario')} title="Mario's blogs" />            
        </div>
     );
}
 
export default Home;
