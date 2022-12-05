import React from "react";
import Navbar from "../../components/common/Navbar";
class HomePage extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <h2>Hello world</h2>
                 <Navbar/>
                <div className="mt-3">
                    {/*<img src={img} className="mx-auto d-block " alt="..." />*/}
                </div>
                <div className="mt-5" id="Content">
                    {/*<Content />*/}
                </div>
               <div className='mt-5 container' id="Slide">
                    {/*<Slide />*/}
                </div>
                <div className='container mt-5 ' id='Card'>
                    {/*<Card />*/}
                </div>
               
            </div>
        )
    }
}
export default HomePage;
