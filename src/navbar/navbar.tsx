import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [page, setPage] = useState("");
    const location = useLocation()

    

    return (
        <div className="pt-4 pb-8" >
            <section className="pb-4">
                <h1><strong>Technically Writing</strong></h1>
                <h3>The Blog of Tim Chinenov</h3>
            </section>
            <section className="flex flex-row">
                <div className="text-center pr-4 text-slate-900 hover:text-slate-500 ease-in-out duration-200">
                    <Link to="/home">
                        <p className={((location.pathname == "/home" || location.pathname == "/") ? "border-slate-500 border-b-2" : "border-b-0")}>Home</p>
                    </Link>
                </div>

                <div className="text-center pr-4 text-slate-900 hover:text-slate-500 ease-in-out duration-200">
                    <Link to="/about">
                        <p className={(location.pathname == "/about" ? "border-slate-500 border-b-2" : "border-b-0")}>About</p>
                    </Link>
                </div>

                <div className="text-center pr-4 text-slate-900 hover:text-slate-500 ease-in-out duration-200">
                    <Link to="/career">
                        <p className={(location.pathname == "/career" ? "border-slate-500 border-b-2" : "border-b-0")}>Career</p>
                    </Link>
                </div>
            </section>
        </div>)
}
