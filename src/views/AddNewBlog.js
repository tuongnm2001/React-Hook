import './Blogs.scss'
import { useState } from 'react'
import axios from 'axios'

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmitBtn = async () => {
        if (!title) {
            alert('Empty title')
            return;
        }

        if (!content) {
            alert('Empty Content ')
            return;
        }

        let data = {
            title: title,
            content: content,
            userId: 1
        }

        let res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data)
        if (res && res.data) {
            let newBlog = res.data
            props.handleAddNew(newBlog)
        }
    }

    return (
        <div className="add-new-container">
            <div className="text-add-new">------Add new Blog------</div>
            <div className='inputs-data'>
                <label>Title</label>
                <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>

            <div className='inputs-data'>
                <label>Content</label>
                <input type='text' value={content} onChange={(event) => setContent(event.target.value)} />
            </div>

            <button onClick={handleSubmitBtn} className='btn-add-new'>Submit</button>
        </div>
    )
}

export default AddNewBlog;