import RestaurantNavBar from "@/app/reastaurant/[name]/component/RestaurantNavBar";
import Menu from "@/app/reastaurant/[name]/component/Menu";

export default function RestaurantMenu(){
    return (
       <>
           <div className="bg-white w-[100%] rounded p-3 shadow">
               <RestaurantNavBar/>
               <Menu/>
           </div>
       </>

    )
}