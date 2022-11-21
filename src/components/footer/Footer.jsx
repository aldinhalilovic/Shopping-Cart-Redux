import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";
import React from "react";

function Footer() {
  const anchor = {
    color: "#1C7ED6",
  };
  return (
    <div
      style={{
        height: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "2px solid #F58216",
        color: "#F58216",
      }}
    >
      <h3>aldinhalilovic@gmail.com</h3>
      <div>
        <a
          href="https://www.github.com/aldinhalilovic"
          target="blank"
          rel="noreferrer"
          style={anchor}
        >
          <IconBrandGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aldin-halilovic-177388252/"
          target="blank"
          rel="noreferrer"
          style={anchor}
        >
          <IconBrandLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
