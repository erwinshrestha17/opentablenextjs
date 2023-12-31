import ReserveHeader from "@/app/reserve/[name]/component/ReserveHeader";
import ReservationForm from "@/app/reserve/[name]/component/Form";

export default function Reservation(){
    return (
       <>
           <div className="border-t h-screen">
               <div className="py-9 w-3/5 m-auto">
                   <ReserveHeader/>
                   <ReservationForm/>
               </div>
           </div>
       </>
    )
}