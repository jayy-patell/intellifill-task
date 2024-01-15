import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import Card from "./components/Card";

function App() {
  return (
    <div className=" bg-gray-100">
      <header>
        <Navbar />
      </header>
      <main className="w-3/4 mx-auto">
        <div className="flex justify-center items-center py-12 place-items-stretch">
          <img src="../photo1.jpg" className="object-fill h-52 rounded-3xl" />
        </div>
        <h6 className="text-bold pb-5">Recommended Exams</h6>

        <div class="container mx-auto flex overflow-x-auto pb-10 hide-scroll-bar">
          <div class="flex space-x-6 flex-nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <h6 className="text-bold pb-2">Recent Exams</h6>
        <div className="pb-5">
          <p>Engineering</p>
        </div>
        <div className="container mx-auto pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
