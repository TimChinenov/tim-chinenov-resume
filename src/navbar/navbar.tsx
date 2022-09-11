import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="pt-4 pb-8" >
            <section className="pb-4">
                <h1><strong>Technically Writing</strong></h1>
                <h3>The Blog of Tim Chinenov</h3>
            </section>
            <section className="flex flex-row">
                <div className="text-center pr-4 text-slate-900 hover:text-slate-500 ease-in-out duration-200">
                    <Link to="/home">
                        <p>Home</p>
                    </Link>
                </div>
                <div className="text-center pr-4 text-slate-900 hover:text-slate-500 ease-in-out duration-200">
                    <Link to="/about">
                        <p>About</p>
                    </Link>
                </div>
                <div className="text-center pr-4 text-slate-900 hover:text-slate-500 ease-in-out duration-200">
                    <p>Career</p>
                </div>
            </section>
        </div>)
}
