import Image from "next/image";
import "./download.css";
import DownloadImage from "../../assets/Download.png"
import PlayStore from "../../assets/Playstore.png";
import AppStore from "../../assets/Appstore.png";

const Download = () => {
  return (
    <div className="landing_page__download">
        <div className="landing_page__download_image">
            <Image src={DownloadImage} alt={"app_download"} className="w-[40rem]"/>
        </div>
        <div className="landing_page__download_links">
            <p className="text-[#59688C] font-extrabold text-[2.5rem]">Unlock Exclusive Offers</p>
            <p className="text-[#8898C0] text-[1.6rem]">For lightning fast ordering experience download the Domino’s app</p>
            <div className="landing_page__download_links_images">
                <div>
                    <Image src={PlayStore} alt={"playstore"} className="w-[13rem]"/>
                </div>
                <div>
                    <Image src={AppStore} alt={"appstore"} className="w-[13rem]"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download