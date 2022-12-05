import Footer from "./Footer";
import Navbar from "./Navbar";

const PageLayout = ({ children }) => {
    return (
        <div className="AppContainer">
            <Navbar />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
};

export default PageLayout;