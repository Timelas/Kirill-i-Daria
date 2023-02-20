import React from "react";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <div className="dresscode__header">
        <h2 className="dresscode__title">Dress code</h2>
        <div className="dresscode__trait">Black Tie</div>
      </div>
      <div className="dresscode__figure"></div>
      <p className="dresscode__description">Мы очень старались сделать праздник красивым и будем рады, если в своих нарядах вы поддержите цветовую гамму нашей свадьбы и примеры образов ниже:</p>
      <div className="dresscode__colors">
        <div className="dresscode__color dresscode__color_var_one"></div>
        <div className="dresscode__color dresscode__color_var_two"></div>
        <div className="dresscode__color dresscode__color_var_three"></div>
        <div className="dresscode__color dresscode__color_var_four"></div>
        <div className="dresscode__color dresscode__color_var_five"></div>
      </div>
    </section>
  );
}

export default Dresscode;