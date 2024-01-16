import React from "react";

export default function infoPage() {
  return (
    <>
      <main className="w-3/4 mx-auto">
        <div className="flex pt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M24,13l0-2-21.445.031L6.877,6.707,5.463,5.293.877,9.879a3,3,0,0,0,0,4.242l4.586,4.586,1.414-1.414L2.615,13.031Z" />
          </svg>
          <p className="text-indigo-500 pl-4">Back</p>
        </div>

        <div className="grid grid-cols-2 space-x-4 pt-6">
          <div>
            <div className="mb-8">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex flex-no-wrap">
                  <img
                    src="../logo512.png"
                    className="rounded-circle w-10 h-10"
                  />
                  <div>
                    <h5 className="text-xl font-semibold px-4">
                      JEE Mains 2023
                    </h5>
                    <p className="text-gray-400 text-sm flex-wrap mb-2 px-4">
                      National Testing Agency
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="ml-auto text-blue-400 hover:text-blue-800 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z" />
                  </svg>
                </div>
                <hr className="bg-gray-200"></hr>
                <p className="text-gray-700 text-base pl-10 flex-nowrap">
                  <div className="flex flex-nowrap pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <path d="M12,17a4,4,0,1,1,4-4A4,4,0,0,1,12,17Zm6,4a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3v3H18ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8Zm0,5A5.968,5.968,0,0,1,7.537,9H3a3,3,0,0,0-3,3v3H6.349A5.971,5.971,0,0,1,6,13Zm11.651,2H24V12a3,3,0,0,0-3-3H16.463a5.952,5.952,0,0,1,1.188,6Z" />
                    </svg>
                    <p className="flex-nowrap pl-4">More than 20 people</p>
                  </div>
                  <div className="flex flex-nowrap py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="25"
                      height="25"
                    >
                      <path d="M21,6H5c-.859,0-1.672-.372-2.235-.999,.55-.614,1.349-1.001,2.235-1.001H23c1.308-.006,1.307-1.995,0-2H5C2.239,2,0,4.239,0,7v10c0,2.761,2.239,5,5,5H21c1.657,0,3-1.343,3-3V9c0-1.657-1.343-3-3-3Zm-1,9c-1.308-.006-1.308-1.994,0-2,1.308,.006,1.308,1.994,0,2Z" />
                    </svg>
                    <p className="flex-nowrap pl-4">Rs. 2200</p>
                  </div>
                </p>
                <hr className="pb-4"></hr>
                <div className="flex pt-2">
                  <p className="text-gray-400 text-sm">
                    Started on May 12. Forms end on 6 June, 2021.
                  </p>

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl ml-auto">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg py-6 mb-12">
              <p className="text-lg text-bold pl-6 pb-2">Exam Description: </p>
              <ul
                className="pl-12 pr-4 pb-2"
                style={{ "list-style-type": "circle" }}
              >
                <li>
                  JEE Main is a standarized test conducted across different
                  states in India.
                </li>
                <li>
                  The exam is held at an undergraduate level to offer admissions
                  to somme of the best engineering and technical institutions
                  that are Government funded or privately-owned.
                </li>
                <li>
                  The exam conducting authority considers the best NTA score in
                  preparing the rank/merit list.
                </li>
              </ul>
              <p className="text-lg text-bold pl-6 pb-2">Eligibility: </p>
              <ul
                className="pl-12 pr-4 pb-2"
                style={{ "list-style-type": "circle" }}
              >
                <li>Age limit - No age limit</li>
                <li>Qualifying Exam - Class 12/Equivalent Exam</li>
                <li>Percentage - At least 75% in Class 12/Equivalent Exam</li>
                <li>Year of passing - 2021,2022 or appearing in 2023</li>
                <li>
                  Number of attempts - Candidate can appear in JEE Main for 3
                  consecutive years after passing their Class 12/Equivalent Exam
                </li>
              </ul>
              <p className="text-lg text-bold pl-6 pb-2">Important Dates: </p>
              <ul
                className="pl-12 pr-4 pb-2"
                style={{ "list-style-type": "circle" }}
              >
                <li>Application form last date - 1st week of January 2022</li>
                <li>Admit card release - 2nd week of February 2022</li>
                <li>Exam date - 4th week of February 2022</li>
                <li>Result declaration - 4th week of March 2022</li>
              </ul>
            </div>
          </div>

          <div className="w-3/4 mx-auto">
            <div className="bg-white rounded-lg shadow-lg">
              <p>You might be interested in</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
