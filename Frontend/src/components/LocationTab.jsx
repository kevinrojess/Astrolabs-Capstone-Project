import GetLocation from "./GetLocation";

const contactStyle = {
    "color": "red",
};

function LocationTab() {
    return (
        <section className="py-1" id="location">
            <div className="container mt-4 mb-5 w-50">
                <h2 className="mb-4 text-center">Choose your location: </h2>
                <form action="https://formspree.io/f/xlevkerw" method="POST">
                    <div className="form-group col mb-3 col-5">
                        <label>State <span style={contactStyle}>*</span></label>
                        <select className="form-control">
                            <option value="">---</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Ajman">Ajman</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Umm All Quwain">Umm All Quwain</option>
                            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                            <option value="Fujairah">Fujairah</option>
                        </select>
                    </div>
                    <div className="form-group col mb-3 col-5">
                        <label>Area <span style={contactStyle}>*</span></label>
                        <select className="form-control">
                            <option value="">---</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Ajman">Ajman</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Umm All Quwain">Umm All Quwain</option>
                            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                            <option value="Fujairah">Fujairah</option>
                        </select>
                    </div>
                    <div className="mb-3 col col-5">
                        <a href>Building <span style={contactStyle}>*</span></a>
                        <input type="text-light" className="form-control" name="building" />
                    </div>
                    <div className="col-md-12 d-flex justify-content-evenly align-items-center ">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <GetLocation />
            </div>
        </section>
    );
}

export default LocationTab;