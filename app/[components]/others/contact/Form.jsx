import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Form = () => {
    const contactHandle = async(e)=>{
        e.preventDefault()

        const name = e.target.name.value;
        const tel= e.target.tel.value;
        const email= e.target.email.value;
        const message = e.target.message.value
        const data = {
            name,
            tel,
            email,
            message,
            date: new Date()
          
        }
        const resp = await axios.post( `/api/contact`, data)
        console.log(resp?.data);
        if(resp?.data?.status){
            toast.success('Message sent successfully')
        }
    }
    return (
        <form onSubmit={contactHandle} className="space-y-6">
        <div>
          
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
            </label>
            <input
                type="text"
                name='name'
                placeholder="Enter your name"
                className="input input-bordered w-full rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6a2b93]"
            />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                </label>
                <input
                    type="tel"
                    name="tel"
                    placeholder="Enter your phone number"
                    className="input input-bordered w-full rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6a2b93]"
                />
            </div>
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="input input-bordered w-full rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6a2b93]"
                />
            </div>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
            </label>
            <textarea
                placeholder="Write your message here..."
                name="message"
                className="input input-bordered w-full h-32 rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6a2b93] resize-none"
            ></textarea>
        </div>
        <div className="">
            <button
                type="submit"
                className="px-6 py-3 text-lg font-semibold border hover:text-white bg-transparent text-black border-black hover:bg-[#582779] focus:ring-4 focus:ring-[#6a2b93] transition-all"
            >
                Send
            </button>
        </div>
    </form>
    );
};

export default Form;