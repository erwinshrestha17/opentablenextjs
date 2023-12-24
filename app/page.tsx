import Navbar from "@/app/component/navbar";
import Header from "@/app/component/header";
import RestaurantCards from "@/app/component/Restaurantcards";
export default function Home() {
    return (
      <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
              <Navbar/>
              <main>
                  <Header/>
                  <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
                     <RestaurantCards/>
                  </div>
              </main>
          </main>
      </main>
  )
}
