import RestaurantHeader from "@/app/reastaurant/[name]/component/RestaurantHeader";
import type { Metadata } from 'next'


export const metadata:Metadata={
    title:"Milestones Grill (Toronto)"
}

export default function RestaurantLayout({children,}: {
    children: React.ReactNode
}) {
    return(
        <main>
            <RestaurantHeader/>
            {/* DESCRIPTION PORTION */}
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                {children}
            </div>
        </main>
    )
}
