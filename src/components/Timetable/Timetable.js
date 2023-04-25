import React from "react";
import "./Timetable.css";
import Title from "../Title/Title";
import rings from "../../images/rings.svg";
import glasses from "../../images/glasses.svg";
import plate from "../../images/plate.svg";
import cake from "../../images/cake.svg";
import music from "../../images/music.svg";
import car from "../../images/car.svg";
import legsin from "../../images/legsin.svg";
import legsgo from "../../images/legsgo.svg";
import lineStart from "../../images/start.svg";
import lineEnd from "../../images/end.svg";
import lineCenter from "../../images/center.svg";

function Timetable() {
  return (
    <section className="timetable" id="plan">
      <Title title={"План дня"}/>
      <div className="timetable__block">
        <img alt="rings" className="timetable__pic timetable__pic_visual_rings" src={rings}></img>
        <img alt="glasses" className="timetable__pic timetable__pic_visual_glasses" src={glasses}></img>
        <img alt="plate" className="timetable__pic timetable__pic_visual_plate" src={plate}></img>
        <img alt="cake" className="timetable__pic timetable__pic_visual_cake" src={cake}></img>
        <img alt="music" className="timetable__pic timetable__pic_visual_music" src={music}></img>
        <img alt="car" className="timetable__pic timetable__pic_visual_car" src={car}></img>
        <img alt="legsin" className="timetable__pic timetable__pic_visual_legsin" src={legsin}></img>
        <img alt="legsgo" className="timetable__pic timetable__pic_visual_legsgo" src={legsgo}></img>
        <img className="timetable__line timetable__line_center_rings" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_glasses" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_plate" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_cake" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_music" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_car" src={lineCenter} alt="линия"></img>
        <img className="timetable__line-start" src={lineStart} alt="линия"></img>
        <img className="timetable__line-end" src={lineEnd} alt="линия"></img>
        <p className="timetable__text timetable__text_about_legsin">Сбор гостей <br />м. Старая деревня<br /> 14.00</p>
        <p className="timetable__text timetable__text_about_car">Трансфер до ресторана "Панорама"<br /> 14.20</p>
        <p className="timetable__text timetable__text_about_glasses">Welcome Фуршет	<br /> 15.00</p>
        <p className="timetable__text timetable__text_about_rings">Торжественная церемония <br /> 16.00</p>
        <p className="timetable__text timetable__text_about_plate">Открытие свадебной вечеринки<br /> 16.40</p>
        <p className="timetable__text timetable__text_about_cake">Свадебный торт <br /> 21.00</p>
        <p className="timetable__text timetable__text_about_music">Танцы <br /> 21.30</p>
        <p className="timetable__text timetable__text_about_legsgo">Окончание вечера 23.00</p>
      </div>
    </section>
  );
}

export default Timetable;