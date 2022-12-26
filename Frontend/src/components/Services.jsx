
function Services() {

    return (
        <section id="services">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="text-primary">SERVICES</h6>
                        <h2>Our Services</h2>
                        <p>Lorem ipsum dolor sit amet consectetur nisi necessitatibus repellat distinctio eveniet eaque
                            fuga
                            in cumque optio consectetur harum vitae debitis sapiente praesentium aperiam aut</p>
                    </div>
                </div>
                <div className="row g-4 mx-4 py-5">
                    <div className="col-lg-6">
                        <div className="service card-effect bounceInUp">
                            <img src={require("../img/hero-4.jpg")} alt="" />
                            <div className="iconbox">
                                <i className='bx bxs-donate-heart'></i>
                            </div>
                            <h5 className="mt-4 mb-2">Donations pickup</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis illo
                                asperiores
                                perferendis </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service card-effect">
                            <img className="service-image2" src={require("../img/hero-5.jpg")} alt="" />
                            <div className="iconbox">
                                <i className='bx bxs-package'></i>
                            </div>
                            <h5 className="mt-4 mb-2">Products</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis illo
                                asperiores
                                perferendis </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Services;