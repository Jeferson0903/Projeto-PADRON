import SectionTitle from "@/components/ui/sectionTitle";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const achievementData = [
    {
        id: 1,
        icon: '/img/achievement-icon/01.svg',
        count: 500,
        description: 'Projetos Realizados',
        delay: '.3',
    },
    {
        id: 2,
        icon: '/img/achievement-icon/02.svg',
        count: 300,
        description: 'Clientes Satisfeitos',
        delay: '.5',
    },
    {
        id: 3,
        icon: '/img/achievement-icon/03.svg',
        count: 15,
        description: 'Anos de Experiência',
        delay: '.7',
    },
    {
        id: 4,
        icon: '/img/achievement-icon/04.svg',
        count: 8,
        description: 'Tipos de Serviços',
        delay: '.9',
    },
];


const AchievementTwo = ({ achievementWrapperClass, className, id }: { achievementWrapperClass?: string; className?: string; id?: string }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    return (
        <section id={id} className={`achievement-section-2 fix ${className ?? ""}`}>
            <div className="container">
                <div className={`achievement-wrapper ${achievementWrapperClass ?? ""}`}>
                    <SectionTitle className="mb-0">
                        <SectionTitle.SubTitle className="text-white">Em números</SectionTitle.SubTitle>
                        <SectionTitle.Title className="text-white">Resultados da Padron</SectionTitle.Title>
                    </SectionTitle>
                    <div className="counter-area" ref={ref}>
                        {achievementData.map((item) => (
                            <div
                                key={item.id}
                                className="counter-items wow slideUp"
                                data-delay={item.delay}
                            >
                                <div className="icon">
                                    <img
                                        src={item.icon}
                                        alt="icon-img"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                </div>
                                <div className="content">
                                    <h2>
                                        {inView ? (
                                            <span className="count">
                                                <CountUp
                                                    start={0}
                                                    end={item.count}
                                                    duration={2.5}
                                                    useEasing
                                                />+
                                            </span>
                                        ) : (
                                            <span className="count">0+</span>
                                        )}
                                    </h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AchievementTwo