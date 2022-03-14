import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white  border-0">
                <img src="/assests/piz.jpg" className="card-img" alt="Background"
                    height="1000px" />
                
                <div className="card-img-overlay">
                    <div className="container">
                        <h2 className="card-title"> SATURDAY SPECIAL</h2>
                        <p className="card-text">50% OFF on every SATURDAY</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}
export default Home;