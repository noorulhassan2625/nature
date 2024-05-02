import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Homepage from "../Pages/Homepage";
import StarsAndTrees from "../Components/StarsAndTrees";

import starImage1 from "../Assets/Images/StarImage1.jpeg";
import starImage2 from "../Assets/Images/StarImage2.jpg";
import starImage3 from "../Assets/Images/StarImage3.jpg";
import treeImage1 from "../Assets/Images/TreeImage1.jpg";
import treeImage2 from "../Assets/Images/TreeImage2.jpg";
import treeImage3 from "../Assets/Images/TreeImage3.jpg";

import natureWalk1 from "../Assets/Images/NatureWalk1.jpg";
import natureWalk2 from "../Assets/Images/NatureWalk2.jpg";
import natureWalk3 from "../Assets/Images/NatureWalk3.jpg";
import natureWalk4 from "../Assets/Images/NatureWalk4.jpg";
import natureWalk5 from "../Assets/Images/NatureWalk5.jpg";
import natureWalk6 from "../Assets/Images/NatureWalk6.jpg";


import beautynature1 from "../Assets/Images/BeautyNature1.jpg";
import beautyNature2 from "../Assets/Images/BeautyNature2.jpg";
import beautyNature3 from "../Assets/Images/BeautyNature3.jpg";
import beautyNature4 from "../Assets/Images/BeautyNature4.jpg";
import beautyNature5 from "../Assets/Images/BeautyNature5.jpg";
import beautyNature6 from "../Assets/Images/BeautyNature6.jpg";


import WalkWithNature from "../Components/WalkWithNature";
import BeautyOfNatureSpeaks from "../Components/BeautyOfNatureSpeaks";

const imageData = [
  {
    title: "Deserts",
    images: [
      { url: starImage1, type: "Desert" },
      { url: starImage2, type: "Desert" },
      { url: starImage3, type: "Desert" },
      { url: treeImage1, type: "Desert" },
      { url: treeImage2, type: "Desert" },
      { url: treeImage3, type: "Desert" },
    ],
    // description: " Deserts, characterized by their extreme temperature fluctuations, cover about one-fifth of the Earth's surface.",
    link: "/deserts",
  },
  {
    title: "Oceans",
    images: [
      { url: natureWalk6, type: "Oceans" },
      { url: natureWalk5, type: "Oceans" },
      { url: natureWalk4, type: "Oceans" },
      { url: natureWalk3, type: "Oceans" },
      { url: natureWalk2, type: "Oceans" },
      { url: natureWalk1, type: "Oceans" }
    ],
    // description: "Dive into the mysterious depths of the world’s oceans, which cover more than 70% of our planet's surface",
    link: "/oceans",
  },
  {
    title: "Greenlands",
    images: [
      { url: beautynature1, type: "Greenlands" },
      { url: beautyNature2, type: "Greenlands" },
      { url: beautyNature3, type: "Greenlands" },
      { url: beautyNature4, type: "Greenlands" },
      { url: beautyNature5, type: "Greenlands" },
      { url: beautyNature6, type: "Greenlands" },
    ],
    // description: "Discover the verdant splendor of Green Lands, where lush forests and fertile plains breathe life into our planet.",
    link: "/greenlands",
  },
];

function Routes() {
  return (
    <Switch>
      {/* <Routes> */}
      <Route path="/" element={<Homepage data={imageData} />} />
      <Route
        path="/deserts"
        element={<StarsAndTrees data={imageData[0]} />}
      />
      <Route path="/oceans" element={<WalkWithNature data={imageData[1]} />} />
            <Route path="/greenlands" element={<BeautyOfNatureSpeaks data={imageData[2]} />} />
      {/* </Routes> */}
    </Switch>
  );
}

export default Routes;
