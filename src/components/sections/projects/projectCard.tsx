import { ProjectDataType } from "@/db/projectsOneData";
import { Link } from "react-router-dom";

type ProjectCardPropsType = {
    project: ProjectDataType;
    className?: string;
    iconCalss?: string;
    isIconShow?: boolean
}
const ProjectCard = ({ project, className, iconCalss, isIconShow=true }: ProjectCardPropsType) => {
    return (
        <div className={`project-items ${className}`}>
            <div className="project-image">
                <img
                    src={project.image}
                    alt="project-img"
                    loading="lazy"
                    onError={(e) => {
                        const t = e.currentTarget;
                        t.onerror = null;
                        t.src =
                            "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80";
                    }}
                />
                <div className="project-content">
                    <p>{project.category}</p>
                    <h4>
                        <Link to={project.link}>{project.title}</Link>
                    </h4>
                    {
                        isIconShow &&
                        <Link to={project.link} className={`${iconCalss}`}>
                            <i className="fa-solid fa-arrow-right" />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard