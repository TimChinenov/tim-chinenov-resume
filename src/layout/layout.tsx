import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

export default function Layout() {
    return (
        <div className="grid grid-cols-4 pb-8">
            <div className="hidden md:block">
            </div>
            <div className="col-span-4 lg:col-span-2">
                <Navbar />
                <Outlet />
            </div>
            <div className="hidden md:block">
            </div>
        </div>
    )
}