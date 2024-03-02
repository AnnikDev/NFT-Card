import Equilibrium from "/images/image-equilibrium.jpg";
import Etherium from "/images/icon-ethereum.svg"
import Clock from "/images/icon-clock.svg"
import Avatar from "/images/image-avatar.png"
import View from "/images/icon-view.svg"

import "./card.css"

export default function Card() {
    return <div className="container">
        <div class="img-container">
            <img src={Equilibrium} alt="equilibrium photo" className="equilibrium" />
            <div class="middle">
                <img src={View} alt="view icon" />
            </div>
        </div>

        <h1 className="title">Equilibrium #3429</h1>
        <p className="text">Our Equilibrium collection promotes balance and calm.</p>
        <div className="info-container">
            <div className="eth">
                <img src={Etherium} alt="etherium icon" />
                <span>0.041 ETH</span>
            </div>
            <div className="clock">
                <img src={Clock} alt="clock icon" />
                <span>3 days left</span>
            </div>
        </div>
        <div className="avatar">
            <img src={Avatar} alt="avatar photo" />
            <p>Creation of <span>Jules Wyvern</span></p>
        </div>
    </div>
}