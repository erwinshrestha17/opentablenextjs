import Link from "next/link";
import Navbar from "@/app/component/navbar";
import RestaurantHeader from "@/app/reastaurant/[name]/component/RestaurantHeader";
import RestaurantNavBar from "@/app/reastaurant/[name]/component/RestaurantNavBar";
import Menu from "@/app/reastaurant/[name]/component/Menu";

export default function RestaurantMenu(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar/>
                <RestaurantHeader/>
                {/* DESCRIPTION PORTION */}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[100%] rounded p-3 shadow">
                     <RestaurantNavBar/>
                     <Menu/>
                    </div>
                </div>
                {/* DESCRIPTION PORTION */}
            </main>
        </main>

    )
}