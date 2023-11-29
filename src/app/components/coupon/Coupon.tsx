"use client";
import './coupon.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import Card1 from "../../assets/Carousel1.jpeg"
import Card2 from "../../assets/Carousel2.jpeg"
import Card3 from "../../assets/Carousel3.jpeg"
import Card4 from "../../assets/Carousel4.jpeg"
import Card5 from "../../assets/Carousel5.jpeg"
import Card6 from "../../assets/Carousel6.jpeg"
import Card7 from "../../assets/Carousel7.jpeg"

import Image from 'next/image';


const Coupon = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='landing_page__coupon'>
      <div className='landing_page__coupon_home'>
        <p>Home</p>
      </div>
      <div className='landing_page__coupon_carousel'>
        <p className='text-[#708AA4]'>Coupons & Offers</p>
        <div className='mt-[2rem]'>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            
            <div className='mr-[20px]'>
              <Image src={Card1} alt={'card1'} className='w-[30rem] h-[15rem]'/>
            </div>
            <div>
            <Image src={Card2} alt={'card2'} className='w-[30rem] h-[15rem]'/>
            </div>
            <div className='mr-[20px]'>
              <Image src={Card3} alt={'card3'} className='w-[30rem] h-[15rem]'/>
            </div>
            <div className='mr-[20px]'>
              <Image src={Card4} alt={'card4'} className='w-[30rem] h-[15rem]'/>
            </div>
            <div>
            <Image src={Card5} alt={'card5'} className='w-[30rem] h-[15rem]'/>
            </div>
            <div className='mr-[20px]'>
              <Image src={Card6} alt={'card'} className='w-[30rem] h-[15rem]'/>
            </div>
            <div className='mr-[20px]'>
              <Image src={Card7} alt={'card'} className='w-[30rem] h-[15rem]'/>
            </div> 
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Coupon