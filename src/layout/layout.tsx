import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

export default function Layout() {
    return (
        <div className="grid grid-cols-4">
            <div>
            </div>
            <div className="col-span-2">
                <Navbar />
                <Outlet />
            </div>
            <div>
            </div>
        </div>
    )
}