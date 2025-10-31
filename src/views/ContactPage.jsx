import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const ContactPage = () => {
    const [form, setForm] = useState({ //state สำหรับ form
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => { // Function handleChange
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => { // Function handleSubmit
        e.preventDefault();
        console.log("Form Submitted:", form);

        // ในอนาคต อาจจะมีการเรียก API เพื่อส่งข้อมูลไป Backend
        // เมื่อ API Call สำเร็จ
        navigate('/contact/thank-you'); // เมื่อส่งข้อมูลสำเร็จ ให้ navigate ไปที่หน้า Thank You
    };

    return (
        <section className="bg-[#fdf6ec] w-full max-w-md shadow-lg rounded-xl p-8 container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Let’s get in touch</h2>
            {/* เพิ่ม onSubmit={handleSubmit} ให้กับ <form> */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4"> 
                {/* เพิ่ม name, value, onChange ให้กับ input แต่ละอัน */}
                <input 
                    type="text" 
                    name="firstName"
                    placeholder="FirstName" 
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg" 
                />
                <input 
                    type="text" 
                    name="lastName"
                    placeholder="LastName" 
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg" 
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg" 
                />
                <textarea 
                    placeholder="Message" 
                    name="message"
                    rows="4" 
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                ></textarea>
                <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-stone-400 hover:text-black">
                    Submit
                </button>
            </form>
        </section>
    );
};



