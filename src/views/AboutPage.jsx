export const AboutPage = () => {
  return (
    <section className="relative z-10 bg-center bg-cover min-h-screen w-full" >
      <h2 className="text-5xl font-bold mb-6 text-center">About Us</h2>
      <p className="text-stone-700 max-w-2xl mx-auto text-lg text-left z-10 relative">
        <br></br><br></br><strong>UnboxianJS</strong> isn’t just about toys — it’s about culture.
        <br></br>We stand at the crossroads of street-inspired design, popular
        icons, modern aesthetics, cute vibes, and exceptional art toys that
        break boundaries.<br></br> <br></br>Every piece in our collection is
        carefully curated — sourced through preorders and trusted channels — to
        ensure authenticity. Each toy is chosen with passion, not just as a
        product, but as a piece of culture waiting to be unboxed and shared.
        <br></br> <br></br>This is a place where collectors, dreamers, and
        creators come together. <br></br>Where a sealed box can spark curiosity.
        <br></br>Where a displayed figure carries pride. <br></br>Where every
        item — whether brand-new, untouched, or carefully preserved in excellent
        condition — holds the spirit of originality. <br></br> <br></br>At
        UnboxianJS, we believe collectibles are more than objects. <br></br>They
        are symbols of creativity, style, and community.<br></br> They invite
        you to explore, to connect, and to share the excitement with friends who
        know the value of true originals.<br></br> <br></br> We are not just
        building a collection. We are creating a movement. <br></br>A playground
        of art toys where every piece reflects identity — edgy, modern, cute, or
        bold — and every unboxing moment is an experience that unites us.
        <br></br> <br></br> <br></br>✨ Unbox with us. Collect with us. Share
        with us. <br></br>Because here at UnboxianJS, every unboxing is worth
        remembering.
      </p>

      {/* BG Images */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 
          "url(/images/0-bg-bearbrick-about.png), url(/images/0-bg-labubu-about.png)",
          backgroundPosition: "left center, right center",
          backgroundSize: "50%, 50%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
};
