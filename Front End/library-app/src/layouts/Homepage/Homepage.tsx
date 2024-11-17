import { Carousel } from "./components/Carousel"
import { ExploteTopBooks } from "./components/ExploreTopBooks"
import { Heros } from "./components/Heros"
import { LibraryServices } from "./components/LibraryServices"

export const Homepage = () => {
        return(
            <div>    
            <ExploteTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </div>
        )
}   