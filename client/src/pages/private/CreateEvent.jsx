import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { render } from 'react-dom';

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        description: '',
        image: ''
    })

    const {title, date, time, description, image} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <main className="pb-4">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={title}
                        placeholder="Enter title"
                        onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={date}
                        onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="time"
                        className="form-control"
                        id="time"
                        name="time"
                        value={time}
                        placeholder="Enter time"
                        onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={description}
                        placeholder="Enter description"
                        onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        value={image}
                        onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default CreateEvent