import { useEffect, useState } from "react";
import Card from "../components_basic/Card/Card";

const Main = () => {
  const [year, setYear] = useState("2023");
  const [minute, setMinute] = useState("146");
  const [duration, setDuration] = useState("");
  const [genre, setGenre] = useState([
    "Biopic",
    "Common-Man Struggle",
    "Underdog",
    "Throughout-Invoking",
  ]);
  const [final_genre, setFinalGenre] = useState("");
  useEffect(() => {
    let duration = `${Math.floor(minute / 60)}h ${minute % 60}m`;
    setDuration(duration);
    let genre1 = genre.join(" | ");
    setFinalGenre(genre1);
  }, []);
  return (
    <>
      < div  style={{position:"absolute", width: '40%', marginLeft: '60px', marginTop: '170px' }} >
        <div className="course-icon">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/218/1640218-t-af2c7898f613"
            alt=""
          />
        </div>
        <div className="about flex gap-2">
          <div className="year">
            <strong>{year}</strong>
          </div>
          <span style={{ color: "grey" }}>•</span>
          <div className="hour-min">
            <strong>{duration}</strong>
          </div>
          <span style={{ color: "grey" }}>•</span>
          <div className="language">
            <strong>English</strong>
          </div>
          <span style={{ color: "grey" }}>•</span>
          <div>
            <span
              className="flex align-items-center justify-content-center bg-gray-300 w-7"
              style={{ borderRadius: "5px" }}
            >
              U
            </span>
          </div>
        </div>

        <div className="description">
          <br />
          Every fight begins with a failure! Braving against the odds, Manoj
          Kumar Sharma puts it all on the line to crack the nation’s much
          sought-after exam: UPSC.
          <br />
          <br />
        </div>
        <div className="genre">{final_genre}</div>
      </div>
    </>
  );
};
export default Main;
