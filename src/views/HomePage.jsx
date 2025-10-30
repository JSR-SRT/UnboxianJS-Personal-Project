export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#fdf6ec] drop-shadow-lg rounded-xl flex flex-col items-center justify-center text-center px-6 py-2">
      {/* Hero Text */}
      <img
        src="/images/0-bear-opening-box.png"
        alt="BrandLogo"
        className="h-80 w-auto rounded-xl opacity-90 drop-shadow-lg"
      />
      <br></br> <br></br>
      <h1 className="text-[15vw] md:text-[10vw] lg:text-[10vw] font-extrabold tracking-tight leading-none relative">
        Unboxian
        <span className="relative inline-block align-baseline text-[1.1em]">
          JS
        </span>
      </h1>
      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-gray-700 text-lg md:text-xl">
        <strong>isn’t just about toys — it’s about culture.</strong> <br></br>{" "}
        Crossroads of street-inspired design, popular icons, modern aesthetics,
        cute vibes, and exceptional art toys that bring together the culture of{" "}
        <span className="font-semibold">collectibles & arts</span>. Every piece
        is <span className="italic">authentic</span>, meant to be shared with
        friends who appreciate <span className="uppercase">true originals</span>
        .
      </p>
      {/* Hashtags */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-600">
        <span>#Elmo</span>
        <span>#Labubu</span>
        <span>#Cry-Baby</span>
        <span>#CookieMonster</span>
        <span>#Minions</span>
        <span>#Molly</span>
        <span>#Garfield</span>
        <span>#CheerBear</span>
        <span>#Atmos</span>
        <span>#Carnival</span>
      </div>
    </div>
  );
};
