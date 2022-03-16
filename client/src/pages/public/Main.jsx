const Main = () => {
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
                        <div className="col-md-6 mb-5">
                            <div className="card shadow">
                                <img src={require("../../img/placeholder1.jpg")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Placeholder</h5>
                                    <p className="card-text event-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque magni ipsum quis vero, deserunt, commodi maxime eaque quae ex veniam delectus. Blanditiis quos dicta deserunt, architecto voluptates fuga dolore eum numquam quidem incidunt nobis est aliquam veniam consectetur illo expedita non, et dolorum adipisci id molestiae asperiores voluptatibus nostrum! Est, incidunt voluptatum. Dicta iure nostrum impedit, consectetur sequi dolor!</p>
                                    <button type="button" className="btn btn-primary float-end">More..</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="card shadow">
                                <img src={require("../../img/placeholder2.jpg")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Placeholder</h5>
                                    <p className="card-text event-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque magni ipsum quis vero, deserunt, commodi maxime eaque quae ex veniam delectus. Blanditiis quos dicta deserunt, architecto voluptates fuga dolore eum numquam quidem incidunt nobis est aliquam veniam consectetur illo expedita non, et dolorum adipisci id molestiae asperiores voluptatibus nostrum! Est, incidunt voluptatum. Dicta iure nostrum impedit, consectetur sequi dolor!</p>
                                    <button type="button" className="btn btn-primary float-end">More..</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="card shadow">
                                <img src={require("../../img/placeholder3.jpg")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Placeholder</h5>
                                    <p className="card-text event-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque magni ipsum quis vero, deserunt, commodi maxime eaque quae ex veniam delectus. Blanditiis quos dicta deserunt, architecto voluptates fuga dolore eum numquam quidem incidunt nobis est aliquam veniam consectetur illo expedita non, et dolorum adipisci id molestiae asperiores voluptatibus nostrum! Est, incidunt voluptatum. Dicta iure nostrum impedit, consectetur sequi dolor!</p>
                                    <button type="button" className="btn btn-primary float-end">More..</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="card shadow">
                                <img src={require("../../img/placeholder4.jpg")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Placeholder</h5>
                                    <p className="card-text event-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque magni ipsum quis vero, deserunt, commodi maxime eaque quae ex veniam delectus. Blanditiis quos dicta deserunt, architecto voluptates fuga dolore eum numquam quidem incidunt nobis est aliquam veniam consectetur illo expedita non, et dolorum adipisci id molestiae asperiores voluptatibus nostrum! Est, incidunt voluptatum. Dicta iure nostrum impedit, consectetur sequi dolor!</p>
                                    <button type="button" className="btn btn-primary float-end">More..</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;