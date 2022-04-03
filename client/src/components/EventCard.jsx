import { FaCalendarAlt } from "react-icons/fa";

const EventCard = (props) => {
    const { image, title, description, date, time } = props.data
    const addStr = (str, index, stringToAdd) => {
        return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
    }

    const dimensions = "w_1920,h_1080/"
    return (
        <>
            <div className="col-md-6 mb-5">
                <div className="card shadow">
                    <img src={addStr(image, 50, dimensions)} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text event-truncate">{description}</p>
                        <button type="button" className="btn btn-primary float-end">More..</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">
                            <span className="d-flex align-items-center">
                                <FaCalendarAlt className="me-2"/>
                                {date.split("T")[0]}, {time}
                            </span>
                        </small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCard;