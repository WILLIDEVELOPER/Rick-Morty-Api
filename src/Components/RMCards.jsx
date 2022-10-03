import React from "react";

function RMCards({ characters = [] }) {
  return (
    <div className="grid grid-cols-4 gap-y-7 justify-items-center">
      {characters.map((item, index) => (
        <div key={index}>
            <div className="card">
                <img src={item.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title text-white uppercase font-bold">{item.name}</h5>
                    <hr />
                    <p className="text-white capitalize font-bold "> species: {item.species}</p>
                    <p className="text-white capitalize font-bold"> location: {item.location.name}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default RMCards;
