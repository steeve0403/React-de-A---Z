import { Link, Outlet } from "react-router-dom";

export default function Analytics() {
    return (
        <div className="bg-slate-400">
            <div className="max-w-2xl mx-auto text-center pb-20">
                <p className="text-2xl pt-10 mb-6">here is the company analytics</p>
                <p className="mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid amet animi commodi delectus dolore doloribus explicabo fugiat ipsum itaque minus,
                    mollitia nemo nihil nulla obcaecati, odio officiis pariatur quia sapiente.
                </p>
                <nav className="text-center">
                    <Link
                        to="/analytics/development"
                        className="mx-2 font-semibold text-lg"
                    >
                        Development
                    </Link>
                    <Link
                        to="/analytics/cybersecurity"
                        className="mx-2 font-semibold text-lg"
                    >
                        Cybersecurity
                    </Link>
                    <Link
                        to="/analytics/uiux"
                        className="mx-2 font-semibold text-lg"
                    >
                        UI/UX
                    </Link>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}