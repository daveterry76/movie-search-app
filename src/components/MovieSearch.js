import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
    const [input, setInput] = useState('');
    const [movies, setMovies] = useState([]);


    const searchMovie = async (input) => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=7756b182&s=${input}`);
            console.log(response.data);
            setMovies(response.data.Search);
       } catch (e) {
            console.log(e.message);
        }
    }
    useEffect(() => {
        searchMovie(input);
    }, [input]);

    


  return (
    <>
        <div className='flex flex-col justify-center items-center min-h-screen bg-stone-600'>
            <div className='flex-col p-6 rounded-md max-h-[25rem]'>
                <h1 className='text-3xl text-center text-white mb-5 font-bold font-aboreto'>Movie App</h1>
                <input className='border w-64 px-4 py-3 rounded' placeholder='Search for any movie...' value={input} onChange={(e) => setInput(e.target.value)}></input>
                {/* <button className='px-2'><i class="fa-solid fa-magnifying-glass"></i></button> */}
            </div>
            <div className='text-white flex flex-wrap flex-col md:flex-row justify-around'>
                {movies && movies.map((movie, index) => {
                return (
                    <>
                        <p className='text-white'>{movie.totalResults}</p>
                        <div className='font-aboreto h-fit w-64 py-8 px-5 bg-stone-800 text-center my-5 justify-around flex flex-col items-center rounded-lg'>
                            <img className='h-56 w-fit' src={movie.Poster} alt='poster'/>
                            <h1 className='text-2xl mt-4' key={index}>{movie.Title} ({movie.Year})</h1>
                        </div>
                    </>
                )})}
            </div>
            
        </div>
    </>
  )
}

export default MovieSearch;