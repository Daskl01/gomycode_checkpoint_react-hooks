import React from 'react'
import Suits from './Suits.jpg' 
import Avengers from './Avengers.jpg'
import F9 from './F9.jpg'
import bpp from './bpp.jpg'
import MovieList from './MovieList'


function MovieCard(){

    return(
        <div className="Film">
            <h1>Saison 1</h1>
            <section>
                <img src={Suits} alt="Film"/>
                <img src={Avengers} alt="Film"/>
                <img src={F9} alt="Film"/>
                <img src={bpp} alt="Film"/>
            </section>

            <div className="des"> 
            <figure>
                <MovieList/>
            </figure>
            <figure>
            <MovieList/>
            </figure>
            <figure>
            <MovieList/>
            </figure>
            <figure>
            <MovieList/>
            </figure>
            </div>
            <div className="bouton">
                <a href='index.html'>Ajouter un film</a>
            </div>
            
        </div>
    )
        
}
export default MovieCard;





