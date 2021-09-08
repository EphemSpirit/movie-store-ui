import React from 'react';
import styles from './MovieItem.module.css';

const MovieItem = (props) => {

    return (
        <li className={styles.item}>
          <div className={styles['movie-title']}>{props.title}</div>
          <div className={styles.director}>{props.director}</div>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.rating}>{props.rating}</div>
        </li>
    )
    
};

export default MovieItem;