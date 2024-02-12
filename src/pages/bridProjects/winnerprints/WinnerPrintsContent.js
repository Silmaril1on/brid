import React from "react";
import image01 from "../../../assets/winnerprints/01.jpg";
import image02 from "../../../assets/winnerprints/02.jpg";
import image03 from "../../../assets/winnerprints/03.gif";
import image04 from "../../../assets/winnerprints/04.jpg";
import image05 from "../../../assets/winnerprints/05.jpg";
import image06 from "../../../assets/winnerprints/06.jpg";
import image07 from "../../../assets/winnerprints/07.gif";
import image08 from "../../../assets/winnerprints/08.jpg";
import image09 from "../../../assets/winnerprints/09.jpg";
import image10 from "../../../assets/winnerprints/10.gif";
import image11 from "../../../assets/winnerprints/11.jpg";
import image12 from "../../../assets/winnerprints/12.jpg";
import image13 from "../../../assets/winnerprints/13.jpg";
import image14 from "../../../assets/winnerprints/14.gif";
import image15 from "../../../assets/winnerprints/15.jpg";
import text1 from "../../../assets/winnerprints/text_1.png";
import text2 from "../../../assets/winnerprints/text_2.png";
import text3 from "../../../assets/winnerprints/text_3.png";
import text4 from "../../../assets/winnerprints/text_4.png";

function WinnerPrintsContent() {
  return (
    <section className="center flex-col mx-20">
      <div className="center flex-col *:w-full *:h-full *:mb-5">
        <img src={text1} alt="winterprints" />
        <img src={image01} alt="winterprints" />
        <img src={image02} alt="winterprints" />
        <div className="center flex-row">
          <img src={image03} alt="winterprints" />
          <img src={image04} alt="winterprints" />
        </div>
        <img src={text2} alt="winterprints" />
        <img src={image05} alt="winterprints" />
        <div className="center flex-row">
          <img src={image06} alt="winterprints" />
          <img src={image07} alt="winterprints" />
        </div>
        <img src={text3} alt="winterprints" />
        <img src={image08} alt="winterprints" />
        <img src={image09} alt="winterprints" />
        <div className="center flex-row">
          <img src={image10} alt="winterprints" />
          <img src={image11} alt="winterprints" />
        </div>
        <img src={text4} alt="winterprints" />
        <img src={image12} alt="winterprints" />
        <div className="center flex-row">
          <img src={image13} alt="winterprints" />
          <img src={image14} alt="winterprints" />
        </div>
        <img src={image15} alt="winterprints" />
      </div>
    </section>
  );
}

export default WinnerPrintsContent;
