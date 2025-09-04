import React, { useState } from "react"; // ✅ line 1: เพิ่ม useState
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // ✅ line 3: เพิ่ม Input
import { Textarea } from "@/components/ui/textarea"; // ✅ line 4: เพิ่ม Textarea
import { useNavigate } from "react-router-dom"; // ✅ line 5: เพิ่ม useNavigate
import { Card } from "@/components/ui/card";

export const ContactPage = () => {
    const [form, setForm] = useState({ // ✅ line 11: เพิ่ม state สำหรับ form
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    });
    const navigate = useNavigate(); // ✅ line 17: ใช้ hook สำหรับการนำทาง

    const handleChange = (e) => { // ✅ line 19: เพิ่มฟังก์ชัน handleChange
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => { // ✅ line 23: สร้างฟังก์ชัน handleSubmit
        e.preventDefault();
        console.log("Form Submitted:", form);

        // ในชีวิตจริง จะมีการเรียก API เพื่อส่งข้อมูลไป Backend
        // เมื่อ API Call สำเร็จ
        navigate('/contact/thank-you'); // ✅ line 28: เมื่อส่งข้อมูลสำเร็จ ให้ navigate ไปที่หน้า Thank You
    };

    return (
        <section className="bg-[#fdf6ec] w-full max-w-md shadow-lg rounded-xl p-8 container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Let’s get in touch</h2>
            {/* ✅ line 35: เพิ่ม onSubmit={handleSubmit} ให้กับ <form> */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4"> 
                {/* ✅ line 37-40: เพิ่ม name, value, onChange ให้กับ input แต่ละอัน */}
                <input 
                    type="text" 
                    name="firstname"
                    placeholder="Firstname" 
                    value={form.firstname}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg" 
                />
                <input 
                    type="text" 
                    name="lastname"
                    placeholder="Lastname" 
                    value={form.lastname}
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



