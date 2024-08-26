"use client";
const getCookie = (name: string) => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const cookieName = cookie.substring(0, cookie.indexOf("="));

    if (cookieName === name) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  return null;
};

export default getCookie;
