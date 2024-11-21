'use client'


import Details from "@/app/[components]/propertyDetails/Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useParams } from "next/navigation";


const Detailspage = () => {
    const id = useParams()?.id;
  
const queryClient = new QueryClient()
    return (
        <div>
           <QueryClientProvider client={queryClient}>
           <Details id={id}/>
           </QueryClientProvider>
        
        </div>
    );
};

export default Detailspage;