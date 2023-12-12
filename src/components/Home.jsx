import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Projects from "./Projects";
import Skill from "./Skill";
import Title from "./Title";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Title value={"My Skills"}></Title>
            <Skill></Skill>
            <Title value={"Projects"}></Title>
            <Projects></Projects>
            <Title value={"Education"
            }></Title>
            <Education></Education>
            <Title value={"Contact with me"}></Title>
            <Contact></Contact>
        <Footer></Footer>
        </div>
    );
};

export default Home;