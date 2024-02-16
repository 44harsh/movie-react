import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import d1 from "./image/pop.png"

const Showmore = () => {
    const { id } = useParams()


    const [movie, setmovie] = useState({});
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4676e3b67611b2e34f1ff3f5293f2bc9&language=en-US`)
            .then((req) => {
                setmovie(req.data)
                setloading(false)
            })
    }, [id])

    let posterurl = ""
    if (movie.poster_path) {
        posterurl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    }
    else {
        posterurl = d1
    }


    function rendermovie() {
        if (loading) {
            return <Hero text="loading......" />
        }
        if (movie) {
            return (
                <>

                    <Hero text={movie.original_title} backdrop={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                    <div className="cpntainer my-6">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterurl} alt="no" className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-9">
                                <h2>{movie.original_title}</h2>
                                <p className="lead">{movie.overview}</p>
                                <h2>{movie.status}</h2>
                            </div>
                        </div>

                    </div>

                </>)
        }
    }


    return rendermovie();
}
export default Showmore;