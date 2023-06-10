import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollValue = window.scrollY;
    setScrollY(scrollValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className={scrollY > 100 ? classes.background : classes.unbackground}>
      <div className={classes.container}>
        <h4 onClick={() => navigate("/")}>Movie App</h4>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={classes.icon}
          onClick={() => navigate("/search")}
        />
      </div>
    </div>
  );
};

export default Navbar;
