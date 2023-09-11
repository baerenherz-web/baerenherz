import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import photos from '@data/photos.json'

function Photo({ photo }) {
  return (
    <a href={photo.link} key={photo.id}>
      <div className="relative h-[50vh] bg-gray-900 ">
        <div className="flex h-full items-center justify-center">
          <img
            /* className="absolute inset-0 h-full w-full object-cover" */
            className="h-full object-cover object-center "
            alt="homepagebanner-image"
            src={`/carousel/${photo.url}`}
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-opacity-80 p-4 md:justify-center md:p-6 lg:p-8 xl:p-10"></div>
          {/* old code */}
          {/* {photo.id === '0' && (
            <div>
              <img src={photo.badge} loading="lazy" alt={photo.description} />
            </div>
          )} */}

          {/* to add later */}
          {/* text box */}
          {/* 
          <div className="absolute bottom-0 left-0 m-5 flex w-3/6 flex-col border-2 border-teal-800 bg-[#f2f8f9] p-5 md:w-2/6 md:px-6">
            <h4 className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl">
              {photo.heading}
            </h4>
            <div className="mb-3 w-12 border-b-2 border-teal-800"></div>
            <h2 className="text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
              {photo.description}
            </h2>
          </div> 
          */}
        </div>
      </div>
    </a>
  )
}

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  }

  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </Slider>
    </div>
  )
}
