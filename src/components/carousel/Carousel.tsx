import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.css';

interface PhotoProps {
  photo: {
    id: string;
    url: string;
    css_id: string;
    heading?: string;
    description: string;
    link?: string;
    link_text?: string;
    golflink?: string;
    badge?: string; // You might want to specify the correct type of badge
  };
}

const photos: PhotoProps['photo'][] = [
  {
    id: '1',
    url: '1-leben-retten.jpeg',
    css_id: 'banner-image-one',
    heading: 'unsere mission',
    description: 'Lebensrettende Hilfe für die Schwächsten',
    link: '/projekte',
    link_text: 'mehr erfahren',
  },
  {
    id: '2',
    url: '2-2jahre.JPG',
    css_id: 'banner-image-two',
    link_text: 'mehr erfahren',
    link: '/events#golf-turnier',
    description: 'Hilfe, die dort ankommt, wo sie am dringendsten gebraucht wird!',
    golflink: '/events#golf-turnier',
  },
  {
    id: '3',
    url: '3-besuch.jpg',
    css_id: 'banner-image-three',
    heading: 'unsere projekte',
    description: 'Hilfe, die dort ankommt, wo sie am dringendsten gebraucht wird!',
    link: '/projekte',
    link_text: 'mehr erfahren',
  },
  {
    id: '4',
    url: '4-golf-2023.jpg',
    css_id: 'banner-image-three',
    heading: 'unsere projekte',
    description: 'Hilfe, die dort ankommt, wo sie am dringendsten gebraucht wird!',
    link: '/projekte',
    link_text: 'mehr erfahren',
  },
];

const Photo: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <a href={photo.link} key={photo.id}>
      <div className="relative isolate flex h-[600px] overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          alt="homepagebanner-image"
          src={`/carousel/${photo.url}`}
        />
        <div className={`${styles.homepagebannerText} ${styles[photo.css_id]}`}>
          {photo.id === '1' && (
            <div>
              <img
                src={photo.badge}
                width="100%"
                style={{ position: 'absolute' }}
                className={styles.bannerBadge}
              />
            </div>
          )}

          <div className="m-20 flex max-w-screen-md flex-col bg-[#f2f8f9] px-4 py-6 md:w-2/6 md:px-6">
            <h4 className="text-2xl tracking-tight">{photo.heading}</h4>
            <span className="my-4 w-full border-b-2 border-[#033277]"></span>
            <h2 className="text-3xl font-bold md:text-4xl md:leading-tight">
              {photo.description}
            </h2>
          </div>
        </div>
      </div>
    </a>
  );
};

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
