import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const photos = [
  {
    "id": "1",
    "url": "1-leben-retten.jpeg",
    "css_id": "banner-image-one",
    "heading": "unsere mission",
    "description": "Lebensrettende Hilfe für die Schwächsten",
    "link": "/projekte",
    "link_text": "mehr erfahren"
  },
  {
    "id": "2",
    "url": "2-2jahre.JPG",
    "css_id": "banner-image-two",
    "link_text": "mehr erfahren",
    "link": "/",
    "description": "Hilfe, die dort ankommt, wo sie am dringendsten gebraucht wird",
    "golflink": "/events#golf-turnier"
  },
  {
    "id": "3",
    "url": "3-besuch.jpg",
    "css_id": "banner-image-three",
    "heading": "unsere projekte",
    "description": "Hilfe, die dort ankommt, wo sie am dringendsten gebraucht wird",
    "link": "/projekte",
    "link_text": "mehr erfahren"
  },
  {
    "id": "4",
    "url": "4-golf-2023.jpg",
    "css_id": "banner-image-three",
    "heading": "unsere projekte",
    "description": "Hilfe, die dort ankommt, wo sie am dringendsten gebraucht wird",
    "link": "/projekte",
    "link_text": "mehr erfahren"
  }
]


function Photo({ photo }) {
  return (
    <a href={photo.link} key={photo.id}>
      <div className="relative h-[600px] bg-gray-900 md:h-[400px] lg:h-[500px] xl:h-[600px]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          alt="homepagebanner-image"
          src={`/carousel/${photo.url}`}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-opacity-80 p-4 md:justify-center md:p-6 lg:p-8 xl:p-10">
          {photo.id === '1' && (
            <div>
              <img src={photo.badge} alt="Badge" />
            </div>
          )}

          <div className="absolute bottom-0 left-0 m-5 flex w-3/6 flex-col border-2 border-teal-800 bg-[#f2f8f9] p-5 md:w-2/6 md:px-6">
            <h4 className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl">
              {photo.heading}
            </h4>
            <div className="mb-3 w-12 border-b-2 border-teal-800"></div>
            <h2 className="text-xl font-bold leading-tight md:text-2xl lg:text-3xl">
              {photo.description}
            </h2>
          </div>
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
    autoplaySpeed: 2000,
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
