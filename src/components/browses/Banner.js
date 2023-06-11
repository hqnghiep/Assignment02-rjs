import React, { useEffect, useState } from "react";
import { requests } from "../../datas/Requests";

import classes from "./Banner.module.css";

const Banner = () => {
  const request = requests.fetchNetflixOriginals;
  const [data, setData] = useState({});
  const [overview, setOverview] = useState();
  const [imgBanner, setImgBanner] = useState();
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3${request}`);

      if (!response.ok) {
        throw new Error("Fetch data not failed.");
      }

      const datas = await response.json();
      const random =
        datas.results[Math.floor(Math.random() * datas.results.length - 1)];
      setData(random);
    };
    fetchData();
  }, [request]);

  useEffect(() => {
    if (data.overview === "") {
      setOverview(data.original_name);
    } else {
      setOverview(data.overview);
    }

    if (data.backdrop_path === null) {
      setImgBanner(data.poster_path);
    } else {
      setImgBanner(data.backdrop_path);
    }
  }, [data]);

  return (
    <div className={classes.container}>
      <img
        src={`https://image.tmdb.org/t/p/original${imgBanner}`}
        alt={data.title || data.name}
      />
      <div className={classes.text}>
        <h2>{data.name || data.title}</h2>
        <div className={classes.btn}>
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Banner;
