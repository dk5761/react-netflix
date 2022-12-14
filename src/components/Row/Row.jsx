import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Row.css'
import axios from '../../utils/axios'
import { useRef } from 'react';

export const Row = ({
    title, fetchUrl, isLargeRow
}) => {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"

    const ref = useRef();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])


    useEffect(() => {
        const slider = ref.current;
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
            mouseDown = false;
        };

        let mouseMove = (e) => {
            e.preventDefault();
            if (!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = (x - startX) * 1.5;
            slider.scrollLeft = scrollLeft - scroll;
        }


        slider.addEventListener('mousemove', mouseMove);

        // Add the event listeners
        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);

        return () => {
            slider.removeEventListener('mousemove', mouseMove);
            slider.removeEventListener('mousedown', startDragging, false);
            slider.removeEventListener('mouseup', stopDragging, false);
            slider.removeEventListener('mouseleave', stopDragging, false);
        }
    })

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row__posters" ref={ref}>
                {
                    movies.map(movie => (

                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                        )

                    ))
                }
            </div>
        </div>
    )
}
