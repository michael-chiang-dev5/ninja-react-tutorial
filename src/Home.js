import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    // useEffect( () => {
    //     fetch('http://localhost:8000/blogs').then( (res)=> {
    //         return res.json()
    //     })
    //     .then( (data)=> {
    //         setBlogs(data)
    //         setIsPending(false)
    //     })
    // }, []);
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blods')
                .then((res) => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('MCError: could not fetch data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    setBlogs(data)
                    setIsPending(false)
                    setError(false)
                })
                .catch(err => {setError(err.message);
                    setIsPending(false)

                })
        }, 1000)
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title='All blogs' />}
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}

        </div>
    );
}

export default Home;
