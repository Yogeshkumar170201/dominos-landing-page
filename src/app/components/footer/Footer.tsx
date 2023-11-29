import Image from "next/image";
import "./footer.css";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import Youtube from "../../assets/Youtube.png";
import Instagram from "../../assets/Instagram.png";
import FooterImage from "../../assets/Footer.png";

const Footer = () => {
  return (
    <div className="landing_page__footer">
      <div className="landing_page__footer_main">
        <div className="flex flex-col space-y-[1rem]">
          <p className="text-[#546272] text-[1.2rem]">MENU</p>
          <p className="text-white">Veg Pizza</p>
          <p className="text-white">Chicken Pizza</p>
          <p className="text-white">Pasta</p>
          <p className="text-white">Pizza Crust</p>
          <p className="text-white">Beverages</p>
          <p className="text-white">Pizza Mania</p>
          <p className="text-white">Burger Pizza</p>
        </div>
        <div className="flex flex-col space-y-[1rem]">
          <p className="text-[#546272] text-[1.2rem]">COMPANY</p>
          <p className="text-white">Blog</p>
          <p className="text-white">Investor</p>
          <p className="text-white">Feedback</p>
          <p className="text-white">Ads</p>
        </div>
        <div className="flex flex-col space-y-[1rem]">
          <p className="text-[#546272] text-[1.2rem]">PIZZA RESTAURANTS</p>
          <p className="text-white">Restaurants Near Me</p>
          <p className="text-white">Pizza Near Me</p>
          <p className="text-white">Food Near Me</p>
          <p className="text-white">Food Delivery</p>
          <p className="text-white">Italian Food</p>
          <p className="text-white">Order Food Online</p>
        </div>
        <div className="flex flex-col space-y-[1rem]">
          <p className="text-[#546272] text-[1.2rem]">ABOUT</p>
          <p className="text-white">Gift card</p>
          <p className="text-white">Card Balance Enquiry</p>
          <p className="text-white">FAQ</p>
          <p className="text-white">Virtual Pizza Party</p>
          <p className="text-white">E-Gift Vouchers</p>
        </div>
        <div className="flex flex-col space-y-[1rem]">
          <p className="text-[#546272] text-[1.2rem]">LEGAL</p>
          <p className="text-white">Disclaimer</p>
          <p className="text-white">Terms & Conditions</p>
          <p className="text-white">Privacy Policy</p>
        </div>
        <div className="flex flex-col space-y-[1rem]">
          <p className="text-[#546272] text-[1.2rem]">SOCIAL MEDIA</p>
          <div className="flex flex-row justify-center space-x-[1rem]">
            <Image src={Facebook} alt={"facebbok"}  className="w-[2rem]"/>
            <Image src={Twitter} alt={"twitter"} className="w-[2rem]"/>
            <Image src={Instagram} alt={"instagram"} className="w-[2rem]"/>
            <Image src={Youtube} alt={"youtube"} className="w-[2rem]"/>
          </div>
          <div>
            <Image src={FooterImage} alt={"footer"}/>
          </div>
        </div>
      </div>
      <div className="bg-[#1A2735] p-[1.3rem] text-center">
        <p className="text-[#5C6E83]">All Rights Reserved. Copyright © Jubilant FoodWorks Ltd.</p>
      </div>
    </div>
  )
}

export default Footer
