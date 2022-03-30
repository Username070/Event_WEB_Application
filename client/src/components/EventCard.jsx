const EventCard = ({event}) => {

    const addStr = (str, index, stringToAdd) => {
        return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
    }

    const dimensions = "w_1920,h_1080/"
    return (
        <>
            <div className="col-md-6 mb-5">
                <div className="card shadow">
                    <img src={addStr(event.image, 50, dimensions)} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text event-truncate">{event.description}</p>
                        <button type="button" className="btn btn-primary float-end">More..</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCard;