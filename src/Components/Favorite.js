import React, { Component } from 'react'
import { movies } from './getmovies'

export default class Favorite extends Component {

    constructor() {
        super();

        this.state =  {
            genres : [],
            currGenre : "All Genre",
        }
    }

    render() {
        let movie = movies.results;
        const genreid = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};


        let temp = [];
        temp.push("All Genre");
        movie.forEach((movieObj) => {
            if(!temp.includes(genreid[movieObj.genre_ids[0]])) {
                temp.push(genreid[movieObj.genre_ids[0]])
            }
        })
        return (
            <>
                <div className='main'>
                    <div className='row'>
                        <div className='col-3'>
                            <ul class="list-group favorite-genre">
                                {
                                    temp.map((val) => (
                                        val == this.state.currGenre ? 
                                        <li class="list-group-item" style= {{backgroundColor:'#0066b2', color: 'white',textDecoration : 'bold'}} >{val}</li> : 
                                        <li class="list-group-item">{val}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='col-9 favorite-table'>

                            <div className='row'>
                                <input className='input-group-text col-9' placeholder='Movie Search'></input>
                                <input className='input-group-text col' placeholder='Rows Count'></input>
                            </div>

                            <div className='row'>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Genre</th>
                                            <th scope="col">Popularity</th>
                                            <th scope="col">Rating</th>
                                            <th scope='col'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {
                                                movie.map((movieObj)=>(
                                                    <tr>
                                                        <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} style={{width: '5rem'}}>

                                                        </img>{movieObj.title}</td>
                                                        <td>{genreid[movieObj.genre_ids[0]]}</td>
                                                        <td>{movieObj.popularity}</td>
                                                        <td>{movieObj.vote_average}</td>
                                                        <td><button type="button" class="btn btn-danger">Delete</button></td>
                                                    </tr>
                                                ))
                                            }
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <nav aria-label="...">
                                    <ul class="pagination">
                                        <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                        <li class="page-item"><a class="page-link">2</a></li>
                                        <li class="page-item"><a class="page-link">3</a></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
