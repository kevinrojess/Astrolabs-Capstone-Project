function Campaign() {

    return (

        <section id="campaigns">
            <div className="container-fluid ">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="text-primary">CAMPAIGNS</h6>
                        <h1>Our Recent Campaigns</h1>
                        <p>We organize our own campaigns and also partner with different organizations to help people in
                            need and to create awareness of things that happen in our daily life, but goes unnoticed.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-md-12">
                        <div className="campaign">
                            <img src={require("../img/hero-9.jpg")} alt="" />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Food at Covid</h4>
                                    <h6 className="text-white">One Million Saved Meals campaign has been introduced by the
                                        UAE Food Bank in an effort to slash needless food waste and
                                        ensure vulnerable members of society do not go hungry.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="campaign">
                            <img src={require("../img/hero-10.jpg")} alt="" />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Awareness</h4>
                                    <h6 className="text-white">mber of organizations are fighting to increase awareness and
                                        end poverty around the world. It is an issue that many have
                                        encountered, but may not be aware of the jarring actuality behind those living
                                        on the streets.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Campaign;