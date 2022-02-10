import React from "react";
import css from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const modalHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={css.container}>
        <div className={css.social}>
          <Link href="/" onClick={modalHandler}>
            <i className="fab fa-instagram fa-2x"></i>
          </Link>
          <Link href="/" onClick={modalHandler}>
            <i className="fab fa-telegram fa-2x"></i>
          </Link>
          <Link href="/" onClick={modalHandler}>
            <i className="fab fa-whatsapp fa-2x"></i>
          </Link>
        </div>
        <div className={css.footertext}>
          <i className="far fa-copyright"></i>
          <p>2021 Tehran Iran, All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
