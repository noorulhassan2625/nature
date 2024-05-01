// Example: StarsAndTrees.js

import React from "react";
import Card from "./Cards";
import TopNavbar from "./TopNavbar";

function BeautyOfNatureSpeaks({ data }) {
  return (
    <div>
      <TopNavbar />
      <div class="container mx-auto px-8">
        <h1 className="text-center text-[50px] mt-5">{data.title}</h1>
        <p className="text-[15px] text-center mb-5">
          Discover the verdant splendor of Green Lands, where lush forests and
          fertile plains breathe life into our planet, supporting a myriad of
          ecosystems and biodiversity.
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

export default BeautyOfNatureSpeaks;
