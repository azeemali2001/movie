import React, { Component } from 'react'
import { movies } from './getmovies'

export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            hover : ''
        }
    }
    render() {
        let movie = movies.results
        return (
            <>
                {
                    movie.length == 0 ?
                        <div className="card" aria-hidden="true" style={{ 'width': '20rem' }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body" >
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a className="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div> :

                        <div>

                            <h3 className='text-center'><strong>Trending</strong></h3>
                            <div className='movie-list'>
                                {
                                    movie.map((movieObj) => (

                                        <div className="card movie-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} className="card-img-top movie-img" />
                                            <h5 className="card-title movie-title">{movieObj.title}</h5>
                                            <div className='button-wrapper' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>

                                                {
                                                    this.state.hover == movieObj.id ? <a className="btn btn-primary movie-button">Add to Favorite</a> : ''
                                                }
                                                

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div style = {{display: 'flex', justifyContent: 'center', margin : '1rem'}}>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                }
            </>
        )
    }
}
