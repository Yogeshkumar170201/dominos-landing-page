import { Navbar, Header, Coupon, Explore, Download, Content, Footer, ButtonDiv } from "./components";
import './globals.css';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Coupon/>
      <Explore/>
      <Download/>
      <Content/>
      <ButtonDiv/>
      <Footer/>
    </div>
  )
}
