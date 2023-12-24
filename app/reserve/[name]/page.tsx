import Navbar from "@/app/component/navbar";
import ReserveHeader from "@/app/reserve/[name]/component/ReserveHeader";
import ReservationForm from "@/app/reserve/[name]/component/Form";

export default function Reservation(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar/>
                <div className="border-t h-screen">
                    <div className="py-9 w-3/5 m-auto">
                        <ReserveHeader/>
                        <ReservationForm/>
                    </div>
                </div>
            </main>
        </main>

    )
}