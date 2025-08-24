// src/views/HomePage.jsx
export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#fdf6ec] flex flex-col items-center justify-center text-center px-6">
      {/* Hero Text */}
      <h1 className="text-[15vw] md:text-[10vw] lg:text-[8vw] font-extrabold tracking-tight leading-none relative">
        Unboxian
        <span className="relative inline-block align-baseline text-[1.1em]">
          J
        </span>
        S
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-gray-700 text-lg md:text-xl">
        UnboxianJS brings together the culture of <span className="font-semibold">collectibles & street art</span>.  
        Every piece is <span className="italic">authentic</span>, crafted with quality,  
        and made to be shared with friends who appreciate <span className="uppercase">true originals</span>.
      </p>

      {/* Hashtags */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-600">
        <span>#elmo</span>
        <span>#labubu</span>
        <span>#crybaby</span>
        <span>#tokidoki</span>
        <span>#bearbrick</span>
        <span>#kaws</span>
        <span>#streettoys</span>
      </div>
    </div>
  );
};
