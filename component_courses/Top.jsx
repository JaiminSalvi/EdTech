import { useState } from "react";
import Card from "../components_basic/Card/Card";
import Card1 from "./Card1";
// import { Title } from "chart.js";

const Top = () => {
  const [course, setCourse] = useState([
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
  ]);
  return (
    <>
          <h1 style={{textAlign:"center",fontSize:"2.5rem",fontWeight:"500"}}>Top Courses</h1>
      <div
      style={{
        // position: "absolute",
        display: "flex",
        // gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop:"2rem"
      }}>
        <div
          style={{
            // position: "absolute",
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {course.map((item, index) => (
            <Card1
              key={index}
              title={item.title}
              channel={item.Channel}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Top;
