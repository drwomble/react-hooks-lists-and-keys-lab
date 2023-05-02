import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
 const navBarList = links.map((link, index) => {
  const properLink = `#${link}`
  return <a key={index} href={properLink}>{link}</a>
 });
 return (<nav>{navBarList}</nav>)
}

export default NavBar;
