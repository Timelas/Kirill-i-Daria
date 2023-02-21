import React from "react";
import Title from "../Title/Title";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <Title title={"Детали"}/>
      <p className="details__text">Обратите внимание, что формат мероприятия не предполагают детской площадки и аниматоров. Пожалуйста, позаботьтесь
о том, чтобы провести этот вечер без детей.</p>
      <div className="details__line"></div>
      <p className="details__text">Если вы подготовили для нас сюрприз или творческий подарок, не забудьте предупредить нашего ведущего Игоря: +7 981 132 47 88. Он поможет воплотить вашу идею или отговорит вас, и ответит на все вопросы. </p>
      <div className="details__line"></div>
      <p className="details__text">Мы понимаем, что вас, как и нас сейчас, переполняют эмоции, но очень сильно просим воздержаться от криков "Горько!"</p>
      <div className="details__line"></div>
      <p className="details__text">Пожалуйста, не дарите нам цветы, замените их на бутылку любимого вина – она точно дождется нас из свадебного путешествия и пополнит нашу домашнюю коллекцию.</p>
    </section>
  );
}

export default Details;