import SearchHeader from "@/app/search/component/SearchHeader";
import SearchSideBar from "@/app/search/component/SearchSideBar";
import RestaurantCard from "@/app/search/component/RestaurantCard";

export default function Home() {
    return (
        <div>
            <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
                 <SearchHeader/>
            </div>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar/>
                <div className="w-5/6">
                    <RestaurantCard/>
                </div>
            </div>
        </div>
    )
}