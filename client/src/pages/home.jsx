import React from 'react';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to FoodApp</h1>
          <p className="text-white text-lg mb-6">Delicious meals delivered to your doorstep</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Order Now
          </button>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src="https://thumbs.dreamstime.com/b/studio-close-up-slice-pizza-margherita-wooden-board-italian-cuisine-tomato-sauce-mozzarella-basil-leaves-traditional-384795679.jpg" alt="Dish 1" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Margherita Delight</h3>
              <p className="text-gray-600 mb-3">$12.99</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition">Order</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UQvUKAAdNIVVEEx94JWQEco793bGTqgyPQ&s" alt="Dish 1" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Salmon Nigiri</h3>
              <p className="text-gray-600 mb-3">$12.99</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition">Order</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVjyFah5XRAxlB8N1bkZ0CJJu9_zxbQBx8Q&s" alt="Dish 1" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Crispy Chicken Wings</h3>
              <p className="text-gray-600 mb-3">$12.99</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition">Order</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg" alt="Dish 1" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Spicy Chicken Pizza</h3>
              <p className="text-gray-600 mb-3">$12.99</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition">Order</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80" alt="Dish 2" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cheese Burger</h3>
              <p className="text-gray-600 mb-3">$9.99</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition">Order</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src="https://www.vanillabeancuisine.com/wp-content/uploads/2024/12/Spaghetti-Alfredo-2nd-Set-7.jpg" alt="Dish 3" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Pasta Alfredo</h3>
              <p className="text-gray-600 mb-3">$11.99</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition">Order</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Explore Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center transition cursor-pointer">
              <img className="mx-auto mb-4 w-16 h-16" src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png" alt="Pizza"/>
              <h3 className="font-semibold">Pizza</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center transition cursor-pointer">
              <img className="mx-auto mb-4 w-16 h-16" src="https://img.icons8.com/emoji/48/000000/hamburger-emoji.png" alt="Burgers"/>
              <h3 className="font-semibold">Burgers</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center transition cursor-pointer">
              <img className="mx-auto mb-4 w-16 h-16" src="https://img.icons8.com/emoji/48/000000/spaghetti-emoji.png" alt="Pasta"/>
              <h3 className="font-semibold">Pasta</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center transition cursor-pointer">
              <img className="mx-auto mb-4 w-16 h-16" src="https://img.icons8.com/emoji/48/000000/sushi-emoji.png" alt="Sushi"/>
              <h3 className="font-semibold">Sushi</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
    