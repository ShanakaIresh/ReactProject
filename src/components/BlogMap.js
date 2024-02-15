const BlogMap = (prop) => {
    const blog = prop.blog
    const handClick = prop.handClick
    return (
        <>
            {
                blog.map((blog) => {
                    return (
                        <div className="blogArea" key={blog.key}>
                            <div className="blogTopic"><h2>{blog.blogTopic}</h2></div>
                            <div className="blogContent"><p>{blog.blogContent}</p></div>
                            <div className="blogAuthor"><p>{blog.blogAuthor}</p></div>
                            <button className="btn" onClick={() => { handClick(blog.key) }}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    );
}

export default BlogMap;