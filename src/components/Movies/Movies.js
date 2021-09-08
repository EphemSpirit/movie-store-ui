import React from 'react';
import styles from './Movies.module.css';

import MovieItem from './MovieItem';

const Movies = (props) => {

    const mappedMovies = props.movies.map(movie => (
        <MovieItem
            key={movie.id}
            title={movie.title}
            director={movie.director}
            description={movie.description}
            rating={movie.rating}
        />
    ))

    return (
        <ul className={styles.list}>
           {mappedMovies}
        </ul>
    )

};

export default Movies;