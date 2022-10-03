import React from "react";

function Pages({ prev, next, onPrevious, onNext }) {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="flex list-reset pl-0 rounded justify-center">
        {prev ? (
          <li className="page-item m-2">
            <button
              className="relative block -ml-px bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-400 no-underline"
              onClick={handlePrevious}
            >
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item m-2">
            <button
              className="relative block -ml-px bg-indigo-500 px-4 py-2 text-white rounded-md hover:bg-indigo-400 no-underline"
              onClick={handleNext}
            >
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Pages;
