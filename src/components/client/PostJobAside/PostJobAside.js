
import { Link } from 'react-router-dom'
import './PostJobAside.css'

export default function PostJobAside({ btns }) {

    return (
        <aside>
            <ul>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.title}>
                        <Link
                            to={`${process.env.PUBLIC_URL}/post-job/title`}
                            className={`d-flex justify-content-between ${!btns.title && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark">
                                <i className="fas fa-pencil-alt mx-4"></i>
                                "Title"
                            </span>
                            <i className={`fas fa-check-circle ${btns.title && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.description}>
                        <Link
                            to={`${process.env.PUBLIC_URL}/post-job/description`}
                            className={`d-flex justify-content-between ${!btns.description && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark">
                                <i className="fas fa-edit mx-4"></i>
                                "Description"
                            </span>
                            <i className={`fas fa-check-circle ${btns.description && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.details}>
                        <Link
                            to={`${process.env.PUBLIC_URL}/post-job/details`}
                            className={`d-flex justify-content-between ${!btns.details && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark">
                                <i className="fas fa-list-alt mx-4"></i>
                                "Details"
                            </span>
                            <i className={`fas fa-check-circle ${btns.details && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.expertise}>
                        <Link
                            to={`${process.env.PUBLIC_URL}/post-job/expertise`}
                            className={`d-flex justify-content-between ${!btns.expertise && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark">
                                <i className="fas fa-tools mx-4"></i>
                                "Expertise"
                            </span>
                            <i className={`fas fa-check-circle ${btns.expertise && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.visibility}>
                        <Link
                            to={`${process.env.PUBLIC_URL}/post-job/visibility`}
                            className={`d-flex justify-content-between ${!btns.visibility && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark">
                                <i className="fas fa-user-clock mx-4"></i>
                                "Visibility"
                            </span>
                            <i className={`fas fa-check-circle ${btns.visibility && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.budget}>
                        <Link
                            to={`${process.env.PUBLIC_URL}/post-job/budget`}
                            className={`d-flex justify-content-between ${!btns.budget && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark">
                                <i className="fas fa-search-dollar mx-4"></i>
                                "Budget"
                            </span>
                            <i className={`fas fa-check-circle ${btns.budget && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
                <li className="py-1 my-2">
                    <button className="btn w-100" disabled={btns.review}>
                        <Link
                            to={`${process.env.PUBLIC_URL}/post-job/review`}
                            className={`d-flex justify-content-between ${!btns.review && "border-start border-4 border-success"}`}
                        >
                            <span className="text-dark">
                                <i className="fas fa-check mx-4"></i>
                                "Review"
                            </span>
                            <i className={`fas fa-check-circle ${btns.review && "text-dark"}`}></i>
                        </Link>
                    </button>
                </li>
            </ul>
        </aside>
    )
}
