import React, { useEffect } from 'react';
import { Pagination } from '../../features/pagination/Pagination';
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getEvents, reset } from "../../features/eventSlice";
import EventCard from "../../components/EventCard"
import Spinner from "../../components/Spinner"

const Events = () => {

    const { events, isLoading, isError, message } = useSelector((state) => state.events)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const pageLimit = Math.ceil(events.length / 4)

    // This should be executed whenever the page is loaded
    // So it would be correct to put it into seperate useEffect()
    // But that way it does't work for whatever reason..
    dispatch(reset())

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(getEvents())
        return () => {
            dispatch(reset())
        }
    }, [navigate, dispatch, isError, message])

    return (
        <main className="pb-4">
            <div className="text-center py-4">
                <h2>Events</h2>
                <hr className="my-4 py-1 w-10 m-auto"></hr>
            </div>
            <div className="container-fluid gap-3">
                <div className="row">
                    {events.length > 0 ? (
                        <Pagination
                            data={events}
                            RenderComponent={EventCard}
                            title="event"
                            pageLimit={pageLimit}
                            dataLimit={4}
                        />
                    ) : (
                        <Spinner position={"position-relative"} />
                    )}
                </div>
            </div>
        </main>
    )
}

export default Events;