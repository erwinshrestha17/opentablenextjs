import Header from "@/app/component/header";
import RestaurantCards from "@/app/component/Restaurantcards";
export default function Home() {
    return (
        <main>
            <Header/>
            <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
                <RestaurantCards/>
            </div>
        </main>
  )
}
