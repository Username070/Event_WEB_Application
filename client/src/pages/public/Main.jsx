import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { globalEvents, reset } from "../../features/eventSlice";
import EventCard from "../../components/EventCard"
import Spinner from "../../components/Spinner"

const Main = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { events, isLoading, isError, message } = useSelector((state) => state.events)

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(globalEvents())
        return () => {
            dispatch(reset())
        }
    }, [navigate, dispatch, isError, message])
    
    return (
        <>
            <main>
                <div className="p-5 mb-4 bg-light rounded-3 shadow">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Event Portal Application</h1>
                        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit autem omnis magnam, minima dolorum quisquam dicta rem est aspernatur. Voluptatem hic debitis repellendus aut provident explicabo ipsa eveniet sapiente non laboriosam maiores iste neque molestias recusandae minima natus aperiam assumenda, illum, autem expedita tenetur soluta suscipit, dolores ad! Omnis?</p>
                        <hr className="my-4"></hr>
                        <button className="btn btn-lg btn-primary" type="button">Press Here To Get Started!</button>
                    </div>
                </div>
                <div className="container-fluid gap-3">
                    <div className="row">
                        {events.length > 0 ? (
                            events[0].map((event) => (
                                <EventCard key={event._id} event={event}/>  
                            ))
                        ) : (
                            <Spinner position={"position-relative"}/>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;