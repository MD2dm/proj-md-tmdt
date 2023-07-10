import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y, EffectCube } from 'swiper';
// Import Swiper styles
import "swiper/swiper-bundle.min.css"

import url1 from "@assets/image/Sale1.png";
import url2 from "@assets/image/sale2.png";
import url3 from "@assets/image/sale3.png";
import url4 from "@assets/image/sale4.png";
import url5 from "@assets/image/sale5.png";

interface BannerItem {
    id: number;
    url: string;
}

const DataBaner: BannerItem[] = [
    {
        id: 1,
        url: url1,
    },
    {
        id: 2,
        url: url2,
    },
    {
        id: 3,
        url: url3,
    },
    {
        id: 4,
        url: url4,
    },
    {
        id: 5,
        url: url5,
    },
];

function SwiperSlider() {
    return (
        <div className="w-[950px] h-[450px] mx-auto mt-10 shadow-xl relative ">
            <div className="layout absolute -z-50"></div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination, A11y, EffectCube, Autoplay]}>
                {DataBaner.map((item: BannerItem) => (
                    <SwiperSlide key={item.id}>
                        <div className="h-[500px]">
                            <img
                                src={item.url}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperSlider;
