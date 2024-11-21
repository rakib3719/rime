'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Card from "../[components]/project/Card";



const page = () => {
   
    const queryClient = new QueryClient()
    return (
      <div className="">
<h1 className="text-center py-8 text-5xl font-bold">Our All Projects</h1>
        <QueryClientProvider client={queryClient}>
        <Card/>
        </QueryClientProvider>

      </div>
    );
};

export default page;