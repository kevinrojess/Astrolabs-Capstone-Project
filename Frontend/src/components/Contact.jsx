function Contact() {

    const contactStyle = {
        "color": "red",
    };

    return (

        <section className="bg-light py-1" id="contact">
            <div className="container mt-5 mb-5 w-50">
                <h2 className="mb-4 text-center">Contact Us</h2>
                <form action="https://formspree.io/f/xlevkerw" method="POST">
                    <div className="col mb-3">
                        <a href>First Name <span style={contactStyle}>*</span></a>
                        <input type="text" className="form-control" name="firstname" />
                    </div>
                    <div className="col mb-3">
                        <a href>Last Name <span style={contactStyle}>*</span></a>
                        <input type="text" className="form-control" name="lastname" />
                    </div>
                    <div className="mb-3">
                        <a href>Email <span style={contactStyle}>*</span></a>
                        <input type="text-light" className="form-control" name="email" />
                    </div>
                    <div className="form-group col mb-3 col-5">
                        <label>Regarding? <span style={contactStyle}>*</span></label>
                        <select className="form-control">
                            <option value="">---</option>
                            <option value="Donation Pickup">Donation Pickup</option>
                            <option value="Volunteer Opportunities">Volunteering</option>
                            <option value="Our Products">Shop Products</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-12 d-grid">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;