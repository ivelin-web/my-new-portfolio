import About from "./components/about/About";
import Certificates from "./components/certificates/Certificates";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
