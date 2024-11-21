'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Project from "./Project";

const OurProject = () => {


    const queryClient = new QueryClient()
    return (

        <QueryClientProvider client={queryClient}>
  <div>
                <div className="max-w-[1400px] mt-28 pb-20 mx-auto">
            <h1 className="text-center font-bold text-2xl">Our Project</h1>
        </div>

       <Project/>
        </div>

</QueryClientProvider>
      
    );
};

export default OurProject;