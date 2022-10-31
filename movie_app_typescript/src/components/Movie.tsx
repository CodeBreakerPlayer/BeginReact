import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export interface MovieProps{
    id:number;
    medium_cover_image:string;
    title:string;
    year:number;
    summary:string;
    genres:Array<string>;
}

export function Movie({ id, medium_cover_image, title, year, summary, genres }:MovieProps) {
  return (
    <div className={styles.movie}>
      <img src={medium_cover_image} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year:PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
