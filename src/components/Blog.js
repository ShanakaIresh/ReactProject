import '../App.css'
import { useState } from 'react'
import BlogMap from './BlogMap'



const Blog = () => {
    const [blog, setblogs] = useState([{
        key: 1,
        blogTopic: 'Witcher 3',
        blogContent: 'This game is developed by CD Project RED',
        blogAuthor: 'Amal'
    },
    {
        key: 2,
        blogTopic: 'Elden ring',
        blogContent: 'This game is developed by FromSoftware',
        blogAuthor: 'Nimal'
    },
    {
        key: 3,
        blogTopic: 'Resident Evil 4',
        blogContent: 'This game is developed by CapCom',
        blogAuthor: 'Kamal'
    }
    ])

    const handClick = (Id) => {
        const filt = blog.filter((obj) => {
            return obj.key !== Id
        })
        setblogs(filt)

    }

    return (
        <div className="blg">
            <BlogMap blog={blog} handClick={handClick} />
        </div>
    );
}

export default Blog;