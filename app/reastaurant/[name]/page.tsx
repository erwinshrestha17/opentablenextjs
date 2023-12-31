import RestaurantNavBar from "@/app/reastaurant/[name]/component/RestaurantNavBar";
import RestaurantTitle from "@/app/reastaurant/[name]/component/RestaurantTitle";
import RestaurantRating from "@/app/reastaurant/[name]/component/RestaurantRating";
import RestaurantDescription from "@/app/reastaurant/[name]/component/RestaurantDescription";
import RestaurantImages from "@/app/reastaurant/[name]/component/RestaurantImages";
import RestaurantReviews from "@/app/reastaurant/[name]/component/RestaurantReviews";
import RestaurantReservationCard from "@/app/reastaurant/[name]/component/RestaurantReservationCard";

export default function RestaurantDetails(){
    return (
      <>
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
      </>
    )
}