import React from "react";
import TopNavbar from "../Components/TopNavbar";
import Card from "../Components/Cards";

function Homepage({ data }) {
  return (
    <>
        <TopNavbar />
      <div className="container mx-auto px-8">
            <h2 className="text-[30px] my-5 text-center mb-0">Home Page</h2>
            <p className="text-[15px] text-center mb-5">Discover the diversity of Earth's ecosystems—from the vibrant Green Lands and vast Oceans to the stark Deserts, each showcasing nature's resilience and beauty.</p>
        <div className="cards-section grid grid-cols-3 gap-10">
          {data.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              imageUrl={item.images[0].url}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
