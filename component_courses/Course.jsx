/* eslint-disable no-unused-vars */
import Main from "./Main";
import styles from "./Course.module.css";
import image from "../../EdTech/public/space.jpg";
import { useEffect, useState } from "react";
import Top from "./Top";
import Recommended from "./recommended";
const Course = () => {
  return (
    <div >
      {/* <div className={styles.background}>
        <img src={image} alt=""  style={{height:"100vh",width:"100vw"}}/>
      </div>
      <Main /> */}
      <Top></Top>
      <Recommended/>
    </div>
  );
};

export default Course;
