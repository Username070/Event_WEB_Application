import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../features/eventSlice"

const CreateEvent = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    image: "",
  });

  const { title, date, time, description, image } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {

    e.preventDefault();

    const eventData = {
        title,
        date,
        time,
        description,
        image
    }

    dispatch(createEvent(eventData));
    
  };

  return (
    <>
      <main className="pb-4">
        <div className="text-center py-4">
          <h2>Create New Event</h2>
          <hr className="my-4 py-1 w-10 m-auto"></hr>
        </div>
        <div className="container w-25 m-auto p-3 border rounded shadow">
          <div id="errors-container"></div>
          <form onSubmit={onSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={date}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="time" className="form-label">
                    Time
                  </label>
                  <div className="form-group">
                    <input
                      type="time"
                      className="form-control"
                      id="time"
                      name="time"
                      value={time}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={description}
                      placeholder="Description"
                      onChange={onChange}
                      rows="4"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 mb-3">
                  <label htmlFor="description" className="form-label">
                    Image
                  </label>
                  <div className="form-group">
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      value={image}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 d-grid">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateEvent;
