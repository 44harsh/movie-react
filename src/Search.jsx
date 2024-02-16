import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const Search = ({ keytext, keyresult }) => {

    const [mydata, newdata] = useState([]);

    const title = `you are searching for ${keytext}`
    useEffect(() => {
        if (keytext) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4676e3b67611b2e34f1ff3f5293f2bc9&language=en-US&query=${keytext}&page=1&include_adult=false`)
                .then((req) => { newdata(req.data) })
        }
    }, [keytext])

    console.log(mydata, "hello")

    return (
        <>
            <Hero text={title} />
            <div className="container">
                <div className="row">

                    {typeof mydata.results !== "undefined" ? (
                        <>
                            {mydata.results.map((key) =>
                                <>
                                    <div className="col-lg-4 col-md-3 col-2">
                                        <div class="card" style={{ width: "18em" }}>
                                            <img class="card-img-top" src={`https://image.tmdb.org/t/p/original/${key.poster_path}`} alt="no" />
                                            <div class="card-body">
                                                <h5 class="card-title">{key.original_title}</h5>
                                                <p class="card-text">rating:-{key.vote_average}</p>
                                                <Link to={`/show/${key.id}`} class="btn btn-primary">Know more</Link>
                                            </div>
                                        </div>
                                    </div>

                                </>

                            )}
                        </>
                    ) : (
                        ""
                    )}

                </div>
            </div>


        </>
    )
}
export default Search;