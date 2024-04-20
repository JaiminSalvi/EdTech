import { useState } from "react";
import Card from "../components_basic/Card/Card";
import Card1 from "./Card1";
// import { Title } from "chart.js";

const Recommended = () => {
  const [course, setCourse] = useState([
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
    { title: "Course1", Channel: "TVf", date: "21 December" },
  ]);
  return (
    <>
          <h1 style={{textAlign:"center",fontSize:"2.5rem",fontWeight:"500",marginTop:"2rem"}}>Recommended Courses</h1>
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
            display: "grid",
            // gridArea: "1/3",
            gap: "2rem",
            justifyContent: "center",
            //   flexWrap:"wrap"
            alignItems: "center",
            textAlign: "center",
            gridTemplateColumns: "repeat(3, 1fr)", // Set 3 columns with equal width
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
export default Recommended;
