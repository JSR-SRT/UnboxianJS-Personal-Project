import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const ThankYouPage = () => {
  return (
    <div className="bg-[#fdf6ec] min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-black">
        Thank You!
      </h1>
      <p className="mt-4 text-xl text-stone-800">
        Your message has been sent successfully.
      </p>
      <p className="mt-2 text-lg text-stone-600">
        We will get back to you as soon as possible.
      </p>
      <Button
        asChild
        className="mt-8 bg-black text-[#fdf6ec] hover:bg-stone-400 hover:text-black"
      >
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
};
