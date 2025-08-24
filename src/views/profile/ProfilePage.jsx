export const ProfilePage = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">User Profile</h2>
      <form className="max-w-lg space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
        <input type="text" placeholder="Address" className="w-full p-3 border rounded-lg" />
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Update Profile
        </button>
      </form>
    </section>
  );
};

