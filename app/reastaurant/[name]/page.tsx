import Link from "next/link";
import Navbar from "@/app/component/navbar";
import RestaurantHeader from "@/app/reastaurant/[name]/component/RestaurantHeader";
import RestaurantNavBar from "@/app/reastaurant/[name]/component/RestaurantNavBar";
import RestaurantTitle from "@/app/reastaurant/[name]/component/RestaurantTitle";
import RestaurantRating from "@/app/reastaurant/[name]/component/RestaurantRating";
import RestaurantDescription from "@/app/reastaurant/[name]/component/RestaurantDescription";
import RestaurantImages from "@/app/reastaurant/[name]/component/RestaurantImages";
import RestaurantReviews from "@/app/reastaurant/[name]/component/RestaurantReviews";
import RestaurantReservationCard from "@/app/reastaurant/[name]/component/RestaurantReservationCard";

export default function RestaurantDetails(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar/>
                <RestaurantHeader/>
                {/* DESCRIPTION PORTION */}
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[70%] rounded p-3 shadow">
                        <RestaurantNavBar/>
                        <RestaurantTitle/>
                        <RestaurantRating/>
                        <RestaurantDescription/>
                        <RestaurantImages/>
                        <RestaurantReviews/>
                    </div>
                    <div className="w-[27%] relative text-reg">
                        <RestaurantReservationCard/>
                    </div>
                </div>

            </main>
        </main>

    )
}