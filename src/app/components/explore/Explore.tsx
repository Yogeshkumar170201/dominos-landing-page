import "./explore.css";
import Explore1 from "../../assets/Explore1.png";
import Explore2 from "../../assets/Explore2.png";
import Explore3 from "../../assets/Explore3.png";
import Explore4 from "../../assets/Explore4.png";
import Image from "next/image";




const Explore = () => {
  return (
    <div className="landing_page__explore">
        <p className="landing_page__explore_title">Explore</p>
        <div className="landing_page__explore_cards">
        <div className="flex flex-col">
                <div className="landing_page__explore_card">
                    <div>
                        <Image src={Explore1} alt={"explore1"} className="w-[5rem] h-[8rem]"/>
                    </div>
                    <p className="landing_page__explore_card_title">OUR MENU</p>
                    <p className="landing_page__explore_card_description">Explore our range of delicious Pizzas, delivered in 30 minutes!</p>
                </div>
                <div className="landing_page__explore_card_btn">
                    <p>DISCOVER PIZZA</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="landing_page__explore_card">
                    <div>
                        <Image src={Explore2} alt={"explore2"} className="w-[5rem] h-[8rem]"/>
                    </div>
                    <p className="landing_page__explore_card_title">NEARBY STORE</p>
                    <p className="landing_page__explore_card_description">Find a Domino’s Pizza restaurant near you</p>
                </div>
                <div className="landing_page__explore_card_btn">
                    <p>FIND DOMINO'S STORE</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="landing_page__explore_card">
                    <div>
                        <Image src={Explore3} alt={"explore3"} className="w-[5rem] h-[8rem]"/>
                    </div>
                    <p className="landing_page__explore_card_title">BIRTHDAY PARTY</p>
                    <p className="landing_page__explore_card_description">Celebrate the joy of birthday with Fresh & Hot pizzas</p>
        
                </div>
                <div className="landing_page__explore_card_btn">
                    <p>BOOK NOW</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="landing_page__explore_card">
                    <div>
                        <Image src={Explore4} alt={"explore4"} className="w-[5rem] h-[8rem]"/>
                    </div>
                    <p className="landing_page__explore_card_title">CATERING</p>
                    <p className="landing_page__explore_card_description">Live Domino's Kitchen for weddings / corporate events</p>
                    
                </div>
                <div className="landing_page__explore_card_btn">
                    <p>BOOK NOW</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore