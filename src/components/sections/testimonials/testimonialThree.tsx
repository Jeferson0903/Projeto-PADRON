import { testimonialsTwoData } from "@/db/testimonialsTwoData"
import { Swiper, SwiperSlide } from "swiper/react"
import TestimonialCard from "./testimonialCard"
import { Autoplay, Navigation } from "swiper/modules"
import SectionTitle from "@/components/ui/sectionTitle"

const TestimonialThree = () => {
    return (
        <section id="depoimentos" className="tesimonial-section-3 section-padding section-bg-2 bg-cover">
            <div className="line-shape">
                <img src="/img/team/line-shape.png" alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="mask-shape">
                <img src="/img/team/mask-shape.png" alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="array-button">
                <button className="array-prev"><i className="fa fa-arrow-left" /></button>
                <button className="array-next"><i className="fa fa-arrow-right" /></button>
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle className="text-white">Depoimentos</SectionTitle.SubTitle>
                    <SectionTitle.Title className="text-white">Clientes que recomendam</SectionTitle.Title>
                </SectionTitle>
                <Swiper
                    speed={1500}
                    loop={true}
                    spaceBetween={30}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    }}
                    breakpoints={{
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 1,
                        },

                        575: {
                            slidesPerView: 1,
                        },

                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                >
                    {testimonialsTwoData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    )
}

export default TestimonialThree