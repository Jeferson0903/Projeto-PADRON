import { ServiceDataType } from "@/db/serviceOneData"
import { Link } from "react-router-dom"

const ServiceCardTwo = ({ service }: { service: ServiceDataType }) => {
    return (
        <div className="modern-service-card">
            <div className="card-image-wrapper">
                <img
                    src={service.image}
                    alt={service.title}
                    onError={(e) => {
                        const t = e.currentTarget;
                        t.onerror = null;
                        t.src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`;
                    }}
                />
            </div>
            
            <div className="card-content">
                <div className="card-header">
                    {service.icon && (
                        <img 
                            src={service.icon} 
                            alt="Ícone do serviço" 
                            className="card-icon"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                        />
                    )}
                    <h4 className="card-title">
                        <Link to={service.link}>
                            {service.title}
                        </Link>
                    </h4>
                    {service.subtitle && (
                        <span className="card-subtitle">{service.subtitle}</span>
                    )}
                </div>
                
                <p className="card-description">{service.description}</p>
                
                <Link to={service.link} className="theme-btn-modern mt-auto">
                    Saiba mais
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default ServiceCardTwo