import logo from "../../logo.svg";
import css from "./Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [hamClick, setHamClick] = useState(false);
  const hamMenuClickHandler = () => {
    setHamClick(!hamClick);
  };
  return (
    <>
      <div className={css.container}>
        <div className={css.hamIcon}>
          <i className={`fas fa-bars fa-2x`} onClick={hamMenuClickHandler}></i>
        </div>
        <div className={css.linksContainer}>
          <Link href="/" className={css.homeLink}>
            خانه
          </Link>
          <Link href="/articles" className={css.links}>
            مقالات
          </Link>
          <Link href="/#forum" className={css.links}>
            فرم ارزیابی
          </Link>
          <Link href="/#contact" className={css.links}>
            تماس با ما
          </Link>
        </div>
        <div className={css.logo}>
          <div className={css.logoImage}>
            <Image src={logo} alt="Merli-Apply-Logo" />
          </div>
          <h3>Merli Apply</h3>
        </div>
      </div>
      {hamClick && (
        <div className={css.hamMenu}>
          <Link href="/" className={css.links}>
            خانه
          </Link>
          <Link className={css.links} href="/articles">
            مقالات
          </Link>
          <Link className={css.links} href="/#forum">
            فرم ارزیابی
          </Link>
          <Link className={css.links} href="/#contact">
            تماس با ما
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
