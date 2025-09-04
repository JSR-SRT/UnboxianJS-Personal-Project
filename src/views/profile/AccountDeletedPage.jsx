import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from 'react-icons/fa'; // หรือ icon อื่นๆ ที่คุณมี

export const AccountDeletedPage = () => {
  return (
    <div className="bg-[#fdf6ec] min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <FaCheckCircle className="text-red-600 text-6xl mb-4" /> {/* ✅ Icon สีแดงเพื่อสื่อสารว่าเป็นการลบ */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-black">
        Your Account Has Been Deleted
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        We're sad to see you go. Your account and all associated data have been permanently removed.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        This action is irreversible.
      </p>
      <Button asChild className="mt-8 bg-black text-[#fdf6ec] hover:bg-stone-400 hover:text-black">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
};