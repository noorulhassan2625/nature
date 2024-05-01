import React from "react";
import Card from "./Cards";
import TopNavbar from "./TopNavbar";

function WalkWithNature({ data }) {
  return (
    <div>
      <TopNavbar />
      <div class="container mx-auto px-8">
        <h1 className="text-center text-[50px] mb-0 mt-5">{data.title}</h1>
        <p className="text-[15px] text-center mb-5">
          Plunge into the vast Oceans, Earth's life-supporting and
          climate-regulating marine expanses, home to an astonishing array of
          life from surface to abyss.
        </p>
        <div className="cards-section grid grid-cols-3 gap-10">
          {data.images.map((img, index) => (
            <Card
              key={index}
              title={img.type}
              imageUrl={img.url}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WalkWithNature;
