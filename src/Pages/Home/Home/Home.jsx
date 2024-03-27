import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactPage from "../ContactPage/ContactPage";
import Products from "../Products/Products";
import Services from "../Services/Services";
import TeamMembor from "../TeamMembor/TeamMembor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactPage></ContactPage>
            <Products></Products>
            <TeamMembor></TeamMembor>
        </div>
    );
};

export default Home;