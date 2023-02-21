import React from "react";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <p className="info-date__who">Дорогие</p>
        <p className="info-date__who">родные и друзья!</p>
        <p className="info-date__text">Мы сами не ожидали, но этот день настал – мы женимся! <br /> Приглашаем вас разделить с нами этот чудесный день!</p>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__line1"></div>
        <div className="info-date__line2"></div>
        <p className="info-date__day-week">Пятница</p>
        <div className="info-date__day">
          <p className="info-date__number">15</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">07</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">23</p>
        </div>
        <p className="info-date__time">В 15.00</p>
        <div className="info-date__banquet">
          <p className="info-date__what">Празднчный банкет</p>
          <p className="info-date__where">"ресторан "Панорама"<br /> Санкт-Петербург, Репино, Приморское шоссе, 428, лит.Д"	</p>
          <iframe className="info-date__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaf4e218b72f0da126a28aba56b8d15ae58b4927c3264408385223d6084af4914&amp;source=constructor" frameborder="0" title="map"></iframe>
        </div>
        <div className="info-date__figure-left"></div>
        <div className="info-date__figure-right"></div>
      </div>
    </section>
  );
}

export default InfoDate;