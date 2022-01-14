import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselProps } from '../../interfaces';
import styles from './styles.module.scss';

const CarouselComponent: React.FC<CarouselProps> = ({ children }) => {
  const responsive = {
    desktop_LL: {
      breakpoint: { max: 3000, min: 2624 },
      items: 13,
    },
    desktop_L: {
      breakpoint: { max: 2623, min: 2024 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 2024, min: 1624 },
      items: 8,
    },
    desktop_S: {
      breakpoint: { max: 1624, min: 1224 },
      items: 6,
    },
    tablet_L: {
      breakpoint: { max: 1224, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1023, min: 820 },
      items: 4,
    },
    tablet_S: {
      breakpoint: { max: 820, min: 620 },
      items: 3,
    },
    mobile_L: {
      breakpoint: { max: 620, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      draggable={true}
      slidesToSlide={1}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass={styles.carousel}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass={styles.item}
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
};

export { CarouselComponent };
