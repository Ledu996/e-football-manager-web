import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation, Pagination } from 'swiper';

import 'swiper/swiper.min.css';






const Carousel = (props) => {
    return (
        <Swiper
            spaceBetween={100}
            slidesPerView={1}
            onSlideChange = {console.log('slide changed')}
            onSwiper={(swiper) => {console.log(swiper)}}
        >
            {props.children.map(child => {
                console.log('Deca: ', child);
                return <SwiperSlide key={child.id}>{child}</SwiperSlide>
            })}
        </Swiper>
    )
}


export default Carousel;








