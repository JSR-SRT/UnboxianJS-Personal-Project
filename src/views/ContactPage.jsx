export const ContactPage = () => {
  return (
    <section className="bg-[#fdf6ec] w-full max-w-md shadow-lg rounded-xl p-8 container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Let’s get in touch</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Firstname" className="w-full p-3 border rounded-lg" />
        <input type="text" placeholder="Lastname" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded-lg"></textarea>
        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-stone-400 hover:text-black">
          Submit
        </button>
      </form>
    </section>
  );
};



