import style from "../css/Crew.module.css";
import { MyCrew } from "../components/MyCrew";
import { CrewList } from "./CrewList";
import { CrewDetail } from "./CrewDetail";
// import { useEffect, useState } from "react";

const Crew = () => {
  return (
    <main className={`mw ${style.mainCrew}`}>
      <MyCrew />
      {/* <CrewList /> */}
      <CrewDetail />
    </main>
  );
};

export default Crew;
