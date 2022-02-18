import React from "react";
import css from "./Services.module.css";
import Card from "../UI/Card/Card.component";
import Image from "next/image";
import photo1 from "../../resources/services.png";
import photo2 from "../../resources/services1.jpg";
import photo3 from "../../resources/services2.jpg";

const About = () => {
  return (
    <div className={css.container} id="services">
      <h1 style={{ color: "white" }}>خدمات ما</h1>
      <Card>
        <div className={css.cardContainer}>
          <div className={css.cardImage}>
            <Image src={photo1} alt="pp" />
          </div>
          <div className={css.cardText}>
            <h3>اخذ پذیرش دانشگاه و خوابگاه</h3>
            <p>ارائه تمامی خدمات صفر تا صد دریافت پذیرش دانشگاه</p>
          </div>
        </div>
      </Card>
      <Card>
        <div className={css.cardContainer}>
          <div className={css.cardImage}>
            <Image src={photo2} alt="pp" />
          </div>
          <div className={css.cardText}>
            <h3>راهنمای امور مربوط به سفارت</h3>
            <p>راهنمای کامل جهت تکمیل پرونده سفارت تا دریافت بدون مشکل ویزا</p>
          </div>
        </div>
      </Card>
      <Card>
        <div className={css.cardContainer}>
          <div className={css.cardImage}>
            <Image src={photo3} alt="pp" />
          </div>
          <div className={css.cardText}>
            <h3>آموزش زبان آلمانی</h3>
            <p>تدریس تخصصی زبان آلمانی از مبتدی تا پیشرفته</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
