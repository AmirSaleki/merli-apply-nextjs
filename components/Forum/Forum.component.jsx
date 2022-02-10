import React, { useState } from "react";
import emailjs from "emailjs-com";

import emailAPI from "../../API_KEY";
import css from "./Forum.module.css";

const Forum = () => {
  const [showForum, setShowForum] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const showForumHandler = (e) => {
    setUserEmail(e.target.value);
    if (userEmail !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (pattern.test(userEmail)) {
        setShowForum(true);
        setUserEmail(e.target.value);
      }
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailAPI.service, emailAPI.template, e.target, emailAPI.user)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShowForum(false);
    setShowConfirmMessage(true);
  };
  return (
    <>
      <div className={css.container} id="forum">
        <div className={css.validation}>
          <div>
            <h1 className={showForum ? css.hideTitle : css.title}>
              جهت تکمیل فرم ارزیابی رایگان لطفا ایمیل خود را وارد فرمایید
            </h1>
          </div>
          <div>
            <input
              className={showForum ? css.hideTitle : css.title}
              onChange={showForumHandler}
              type="email"
              placeholder="ایمیل"
              size="30"
              required
            />
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className={showForum ? css.forum : css.hideForum}>
            <div className={css.leftList}>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                name="name"
                required
              />

              <input
                type="number"
                placeholder="سن"
                step="1"
                name="age"
                required
              />
              <input
                type="text"
                placeholder="میزان تحصیلات فعلی"
                name="latest-degree"
                required
              />
              <input
                type="text"
                placeholder="رشته تحصیلی"
                name="major"
                required
              />
              <input
                type="number"
                placeholder="معدل آخرین مدرک تحصیلی"
                step="0.1"
                name="latest-note"
                required
              />
            </div>
            <div className={css.rightList}>
              <input
                type="number"
                placeholder="میزان سابقه کار مرتبط با رشته تحصیلی"
                step="1"
                name="years-of-experience"
              />
              <input
                type="text"
                placeholder="مدرک زبان خارجی"
                name="foreign-language"
              />
              <input
                type="email"
                placeholder="ایمیل"
                name="email"
                defaultValue={userEmail}
              />
              <input type="phone" placeholder="شماره تماس" name="phone" />
              <button className={css.sendButton} type="submit">
                ارسال
              </button>
            </div>
          </div>
        </form>
        {showConfirmMessage &&
          alert(
            "درخواست شما با موفقیت ثبت شد و پس از بررسی کارشناسان ما در اولین فرصت با شما تماس خواهند گرفت"
          )}
        ;
      </div>
    </>
  );
};

export default Forum;
