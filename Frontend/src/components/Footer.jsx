function Footer() {

    const footerStyle = {
        "background-color": "white"
    };

    const footerStyle2 = {
        "width": "60px",
        "height": "2px"
    };

    const footerEnd = {
        "background-color": "#0d6efd"
    };

    return (
        <div>
            <footer className=" container-fluid text-center text-lg-start text-black" style={footerStyle}>
                <div className="container p-4">
                    <div className="container text-center text-md-start">

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className=" text-black text-uppercase">Benevolent Hearts</h5>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={footerStyle2} />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Molestiae modi cum ipsam ad, illo possimus laborum ut
                                    reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                                    Reiciendis assumenda iusto sapiente inventore animi?
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className=" text-black text-uppercase fw-bold ">Our World</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={footerStyle2} />
                                <p>
                                    <a href="#!" className="text-black">Terms</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-black">Privacy</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-black">Blog</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-black">About</a>
                                </p>
                            </div>


                            <div className="col-lg-4">
                                <h6 className="text-black text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={footerStyle2} />
                                <ul className="list-unstyled">
                                    <li>Address: Dubai, United Arab Emirates</li>
                                    <li>Email: benevolent@hearts.org</li>
                                    <li>Phone:+971 57654321</li>
                                    <br />
                                    <div className="social-icons">
                                        <a href="/"><i className='bx bxl-facebook'></i></a>
                                        <a href="/"><i className='bx bxl-twitter'></i></a>
                                        <a href="/"><i className='bx bxl-instagram-alt'></i></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <div className="container-fluid text-center p3" style={footerEnd}>
                <a className="text-white" href="/">© Copyright 2022 | Designed by <i>Byte Me</i></a>
            </div>
        </div>

    );
}

export default Footer;