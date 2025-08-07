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
            className="h-full object-cover object-center "
            alt="homepagebanner-image"
            src={`/carousel/${photo.url}`}
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-opacity-80 p-4 md:justify-center md:p-6 lg:p-8 xl:p-10"></div>
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
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    swipe: true,
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
