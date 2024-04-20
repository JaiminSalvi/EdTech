import { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Playlist = () => {
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
      <div className="Playlist">
        <h1
          style={{
            textAlign: "center",
            marginTop: "0.5rem",
            fontSize: "2.5rem",
            fontWeight: "500",
          }}
        >
          Playlist
        </h1>
      </div>
      <div
        style={{
          // position: "absolute",
          display: "flex",
          // gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            // position: "absolute",
            display: "flex",
            // gridArea: "1/3",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexWrap: "wrap",
            // gridTemplateColumns: "repeat(3, 1fr)", // Set 3 columns with equal width
          }}
        >
          {course.map((item, index) => (
            <Card2
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
export default Playlist;
