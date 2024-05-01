// Example: StarsAndTrees.js

import React from "react";
import Card from "./Cards";
import TopNavbar from "./TopNavbar";

function StarsAndTrees({ data }) {
  return (
    <div>
      <TopNavbar />
      <div class="container mx-auto px-8">
        <h1 className="text-center text-[50px] mb-0 mt-5">{data.title}</h1>
        <p className="text-[15px] text-center mb-5">
          Explore the enigmatic Deserts, lands of extreme survival where both
          flora and fauna exhibit remarkable adaptations to thrive under harsh
          conditions.
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

export default StarsAndTrees;
