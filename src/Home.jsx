import Hero from "./Hero";
import m1 from "./image/movie.jpg"

const Home = () => {
    return (
        <>
            <Hero text="Welcome to movies world" backdrop={m1} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p>
                            Movie World is a theme park on the Gold Coast in Queensland, Australia. Owned and operated by Village Roadshow Theme Parks, the park opened on 3 June 1991. It is part of a 154-hectare (380.5-acre) entertainment precinct, with the adjacent Village Roadshow Studios and nearby Wet'n'Wild Gold Coast, among other sites operated by Village Roadshow. Movie World is Australia's only film-related theme park and the oldest of the Warner Bros. parks worldwide (the others are at Madrid and Abu Dhabi). As of 2016, it receives a yearly average of 1.4 million visitors.

                            In the late 1980s, a failed film studio lot and its adjacent land were bought out by Village. They entered a joint venture with Pivot Leisure (part-owners of the nearby Sea World) and Warner to develop the land into a theme park. Designed by C. V. Wood, the layout was inspired by Universal Studios Hollywood and Disney-MGM Studios Theme Park, and opening attractions were designed to educate guests about the processes behind filmmaking. The park has since expanded to include an array of attractions that are based on Warner and related DC Comics properties. It has survived financial hardships and remains among Australia's most popular tourist destinations.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;