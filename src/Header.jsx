import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({ searchtext, setsearchtext }) => {
    const navigate = useNavigate()

    const handle = (e) => {
        navigate("search")
        setsearchtext(e.target.value)
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" class="navbar-brand" href="#">MOVIE</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="about" class="nav-link active" >About</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchtext} onChange={handle} />
                    </form>
                </div>
            </nav>
            <Outlet />
        </>

    );
}
export default Header;