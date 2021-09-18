import React from 'react';
import styles from './MovieItem.module.css';

import Button from '../UI/Button';
import Card from '../UI/Card';

const MovieItem = (props) => {

    return (
        <Card className={styles.item}>
          <div className={styles['movie-title']}>{props.title}</div>
          <div className={styles.director}>{props.director}</div>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.rating}>{props.rating}/5</div>
          <Button onClick={() => {console.log(props.title)}}>View Movie</Button>
        </Card>
    )
    
};

export default MovieItem;