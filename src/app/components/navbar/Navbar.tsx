import './navbar.css';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='landing_page__navbar'>
      <div>
        <Image src={Logo} alt="Domino's Logo" width={200} height={200} />
      </div>
      <div className='landing_page__navbar_menu'>
        <p>OUR MENU</p>
        <p>DOMINO'S STORES</p>
        <p>GIFT CARD</p>
        <p>CORPORATE ENQUIRY</p>
        <p>CONTACT</p>
      </div>
      <div>
        <button className='landing_page__navbar_button'>Download App</button>
      </div>
    </div>
  )
}

export default Navbar