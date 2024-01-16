import React from "react";
import Card from "../components/Card";

export default function homePage() {
  return (
    <>
      <main className="w-3/4 mx-auto">
        <div className="flex justify-center items-center py-12 place-items-stretch">
          <img src="../photo1.jpg" className="object-fill h-52 rounded-3xl" />
        </div>
        <div className="grid grid-cols-2">
          <h6 className="text-bold pb-5">Recommended Exams</h6>
          <a className="text-bold text-right pb-5 text-indigo-500" href="#">
            See all
          </a>
        </div>

        <div class="container mx-auto flex overflow-x-auto pb-10 hide-scroll-bar">
          <div class="flex space-x-6 flex-nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <h6 className="text-bold pb-5">Popular Exams</h6>
          <a className="text-bold text-right pb-5 text-indigo-500" href="#">
            See all
          </a>
        </div>
        <div className="pb-5">
          <p>Engineering</p>
        </div>
        <div className="container mx-auto flex overflow-x-auto pb-10 hide-scroll-bar">
          <div className="flex space-x-6 flex-nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </>
  );
}
