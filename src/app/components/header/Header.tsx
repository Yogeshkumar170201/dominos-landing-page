import Image from 'next/image';
import './header.css';
import LandingPage from '../../assets/LandingPage.png';
import Title from "../../assets/Title.jpeg";

const Header = () => {
  return (
    <div className='landing_page__header'>
      <div className='landing_page__header_title'>
        <div className='landing_page__header_title_text'>
          <p className='text-white text-[2rem]'>Domino's online ordering</p>
          <p className='text-[#47A0FF] text-[1.2rem]'>Yummy pizza delivered fast & fresh</p>
        </div>
        <div className='landing_page__header_title_btn'>
          <button>ORDER ONLINE NOW</button>
        </div>
        <Image src={Title} alt="Domino's Logo" width={350} height={350} className='w-full'/>
      </div>
      <div>
        <Image src={LandingPage} alt="Domino's Logo" width={950} height={950} />
      </div>
    </div>
  )
}

export default Header