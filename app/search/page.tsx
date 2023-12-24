import Link from "next/link";
import Navbar from "@/app/component/navbar";
import SearchHeader from "@/app/search/component/SearchHeader";
import SearchSideBar from "@/app/search/component/SearchSideBar";
import RestaurantCard from "@/app/search/component/RestaurantCard";

export default function Home() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
            <Navbar/>
                <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
                 <SearchHeader/>
                </div>
                <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                    <SearchSideBar/>
                    <div className="w-5/6">
                        <RestaurantCard/>
                    </div>
                </div>
            </main>
        </main>

    )
}