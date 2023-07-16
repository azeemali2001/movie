import React, { Component } from 'react'
import { movies } from './getmovies'

export default class Banner extends Component {
    render() {
        
        let movie = movies.results[0];
        return (
            <>
                {
                    movie == '' ?
                        <div className="spinner-border m-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> :

                        <div className="card banner-card">
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="card-img-top banner-img"/>
                            <h2 className="card-title banner-title">{movie.original_title}</h2>
                            <p className="card-text banner-text">{movie.overview}</p>
                        </div>
                }

            </>
        )
    }
}
