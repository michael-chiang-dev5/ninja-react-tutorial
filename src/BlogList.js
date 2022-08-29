const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((e) => (
                <div className='blog-preview' key={e.id}>
                    <h2>{e['title']}</h2>
                    <p> Written by {e['author']} </p>
                    <button onClick={()=> handleDelete(e.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;

