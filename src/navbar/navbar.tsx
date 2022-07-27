import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="pb-8" >
            <section>
                <h1>Technically Writing</h1>
                <p>The Adventures of Tim Chinenov</p>
            </section>
            <section className="flex flex-row">
                <div className="text-center pr-4">
                    <Link to="/home">
                        <p>Home</p>
                    </Link>
                </div>
                <div className="text-center pr-4">
                    <Link to="/about">
                        <p>About</p>
                    </Link>
                </div>
                <div className="text-center pr-4">
                    <p>Career</p>
                </div>
            </section>
        </div>)
}
