import { TestimonialType } from "@/db/testimonialsTwoData"

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
    const isReal = testimonial.isRealImage === true

    if (isReal) {
        return (
            <div className="testimonial-box-items testimonial-box-items--real">
                <div className="testimonial-real-image">
                    <img
                        src={testimonial.image}
                        alt="Depoimento real de cliente"
                        loading="lazy"
                        onError={(e) => {
                            const t = e.currentTarget;
                            t.onerror = null;
                            t.style.display = 'none';
                        }}
                    />
                </div>
                <div className="testimonial-real-caption">
                    <span>{testimonial.role}</span>
                    <div className="star">
                        {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                            <i key={i} className="fas fa-star" />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="testimonial-box-items">
            <div className="icon">
                <img
                    src={testimonial.icon}
                    alt=""
                    onError={(e) => {
                        const t = e.currentTarget;
                        t.onerror = null;
                        t.style.display = 'none';
                    }}
                />
            </div>
            <div className="client-items">
                <div className="client-image">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        loading="lazy"
                        onError={(e) => {
                            const t = e.currentTarget;
                            t.onerror = null;
                            t.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=200&background=FFD700&color=000`;
                        }}
                    />
                </div>
                <div className="client-content">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <div className="star">
                        {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                            <i key={i} className="fas fa-star" />
                        ))}
                        {testimonial.stars % 1 !== 0 && (
                            <i className="fas fa-star color-text" />
                        )}
                    </div>
                </div>
            </div>
            <p>{testimonial.feedback}</p>
        </div>
    )
}

export default TestimonialCard