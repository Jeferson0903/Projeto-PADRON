import { serviceThreeData } from "@/db/serviceThreeData"
import NewsLetterTwo from "../newsLetterTwo"
import ServiceCardTwo from "./serviceCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"

const ServicesThree = () => {
    return (
        <section
            id="services"
            className="service-section-3 service-section-3--custom-bg pb-0 fix section-padding bg-cover"
        >
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>O que fazemos</SectionTitle.SubTitle>
                        <SectionTitle.Title>Elétrica, automação, CFTV e alarmes</SectionTitle.Title>
                    </SectionTitle>
                </div>
                <div className="row">
                    {serviceThreeData.map((service) => (
                        <div key={service.id} className="col-xl-4 col-lg-4 col-md-6">
                            <ServiceCardTwo service={service} />
                        </div>
                    ))}
                </div>
            </div>
            <NewsLetterTwo />
        </section>

    )
}

export default ServicesThree