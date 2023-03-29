import React, { useState } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import CertMate from "./certmate";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="container">
      <LeftSidebar />
      <div style={{ gridColumn: 1 / 10 }}>
        {data.find((el) => el.id === currentSlide).component}
      </div>
    </div>
  );
}

const data = [
  {
    id: 0,
    name: "CertMate",
    component: <CertMate />,
  },
];
