import React, { Component } from 'react'
import axios from 'axios'


export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            hover : '',
            parr : [1],
            currPage : 1,
            movies : [],
            favorites : []   // add all the movie id which is stored in favorites
        }
    }

    async componentDidMount() {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);

        let data = res.data;

        this.setState({
            movies : [...data.results]
        })
    }

    changeMovies = async() => {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);

        let data = res.data;

        this.setState({
            movies : [...data.results]
        })

        
    }

    handleRight = () => {
        let narr = [];

        if(this.state.parr.length <= this.state.currPage) {
            
            for(let i=1;i<=this.state.parr.length + 1 ; i++) {
                narr.push(i);
            }
        }

        

        this.setState({
            parr : narr.length !== 0 ? [...narr] : [...this.state.parr], 
            currPage : this.state.currPage + 1
        },this.changeMovies)
    }

    handleLeft = () => {
        if(this.state.currPage !== 1) {
            this.setState({
                currPage : this.state.currPage-1
            },this.changeMovies)
        }
    }

    changePage = (value) => {
        if(value !== this.state.currPage) {
            this.setState({
                currPage : value
            },this.changeMovies)
        }
    }

    handleFavorite = (movieObj) => {
        let oldData = JSON.parse(localStorage.getItem('movie') || '[]');

        if(this.state.favorites.includes(movieObj.id)) {
            //Favorite me hai - remove kr do favorite se
            oldData = oldData.filter((m)=>m.id !== movieObj.id);

        } else {
            //Favorite me nhi hai - add kr do
            oldData.push(movieObj);
        }

        localStorage.setItem('movie', JSON.stringify(oldData));
        console.log(oldData);
        this.handleFavoriteState();


    }

    handleFavoriteState = ()=> {
        let oldData = JSON.parse(localStorage.getItem('movie') || '[]');
        let temp = oldData.map((movie)=>movie.id);
        this.setState({
            favorites:[...temp]
        })
    }

    render() {
        // let movie = movies.results
        return (
            <>
                {
                    this.state.movies.length === 0 ?
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
                                    this.state.movies.map((movieObj) => (

                                        <div className="card movie-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} className="card-img-top movie-img" />
                                            <h5 className="card-title movie-title">{movieObj.title}</h5>
                                            <div className='button-wrapper' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>

                                                {
                                                    this.state.hover == movieObj.id ? <a className="btn btn-primary movie-button" onClick={() => this.handleFavorite(movieObj)}>{this.state.favorites.includes(movieObj.id) ? "Remove From Favourite": "Add to Favourite"}</a> : ''
                                                }
                                                

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" onClick={this.handleLeft}>Previous</a></li>
                                {
                                    this.state.parr.map((value)=>(
                                        value === this.state.currPage ? <li class="page-item"><a class="page-link numberTag" onClick={() => this.changePage(value)} >{value}</a></li>: 
                                        <li class="page-item"><a class="page-link" onClick={() => this.changePage(value)} >{value}</a></li>
                                    ))
                                }
                                <li class="page-item"><a class="page-link" onClick={this.handleRight}>Next</a></li>
                            </ul>
                        </nav>
                        </div>

                        </div>
                }
            </>
        )
    }
}
