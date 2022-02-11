import React from "react";
import css from "./Article.module.css";
import Card from "../UI/Card/Card.component";
import articleData from "./ArticleData";
import bannerImage from "../../resources/images/articles/banner.webp";
import Link from "next/link";
import Image from "next/image";

const Article = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.cardFrame}>
          <Card>
            <div className={css.cardContainer}>
              <div className={css.menu}>
                <ul className={css.menuUl}>
                  <li className={css.menuLi}>
                    <Link
                      href="/"
                      style={{ color: "var(--textBlue)", fontWeight: "800" }}
                      className={css.articleA}
                    >
                      بازگشت به صفحه اول
                    </Link>
                  </li>
                  {articleData.map((content) => (
                    <li key={content.id} className={css.menuLi}>
                      <Link
                        className={css.navMenuLinks}
                        href={`#${content.id}`}
                      >
                        {content.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={css.content}>
                <Image src={bannerImage} alt="articleBanner" />
                <div className={css.contentText}>
                  {articleData.map((content) => (
                    <div key={content.id}>
                      <div id={content.id} className={css.spanFiller} />
                      <h3>{content.title}</h3>
                      <p>{content.content}</p>
                      {content.list && (
                        <ul className={css.articleUl}>
                          {content.list.map((item) => (
                            <li key={content.list.indexOf(item)}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {content.img && (
                        <Image
                          className={css.contentImage}
                          src={content.img}
                          alt={content.title}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Article;
