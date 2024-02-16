import App from "./App.css"

const Hero = ({ text, backdrop }) => {
    return (
        <div class="jumbotron bg-dark text-white hero-container">
            <h1 className="hero-text">{text}</h1>
            <div className="hero-back" style={{ backgroundImage: `url(${backdrop})` }}></div>
        </div>
    );
}
export default Hero;