import Hero from "../components/Hero";
import Campaign from "../components/Campaign";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";

function HomeScreen() {
    return (
        <div>
            <div>
                <Hero />
                <Services />
                <WhyUs />
                <Campaign />
                <Contact />
            </div>
        </div>
    );
}

export default HomeScreen;