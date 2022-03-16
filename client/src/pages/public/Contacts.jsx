import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import SimpleMap from "../../components/SimpleMap"

const Contacts = () => {
    return (
        <>
            <main>
                <div className="text-center py-4">
                    <h2>Contact Us</h2>
                    <hr className="my-4 py-1 w-10 m-auto"></hr>
                </div>
                <div className="text-center w-50 m-auto">
                    <p className="fs-4 text-about">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, nihil?
                    </p>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card mb-4 box-shadow contacts-cards shadow">
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title pricing-card-title">Bug Reports</h3>
                                    <hr></hr>
                                    <div className="card-body fs-5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui expedita sit, ipsam nemo doloremque nisi.
                                    </div>
                                    <a href="#" className="mt-auto btn btn-primary btn-lg">More..</a>                          </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card mb-4 box-shadow contacts-cards shadow">
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title pricing-card-title">Help & Support</h3>
                                    <hr></hr>
                                    <div className="card-body fs-5">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia quam asperiores, obcaecati quas voluptate. Voluptates, suscipit!
                                    </div>
                                    <a href="#" className="mt-auto btn btn-primary btn-lg">More..</a>                           </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card mb-4 box-shadow contacts-cards shadow">
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title pricing-card-title">Offers Inquiries</h3>
                                    <hr></hr>
                                    <div className="card-body fs-5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatibus nihil necessitatibus, non impedit fugit quos iure cum!
                                    </div>
                                    <a href="#" className="mt-auto btn btn-primary btn-lg">More..</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-4">
                    <h2>Where To Find Us</h2>
                </div>
                <div className="text-center w-50 m-auto pb-4">
                    <p className="fs-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos quis enim at perferendis reiciendis nemo delectus ea provident iure, odio totam error beatae iusto!
                    </p>
                </div>
                <div className="map m-0 p-0">
                    <SimpleMap />
                </div>
            </main>
        </>
    )
}

export default Contacts;