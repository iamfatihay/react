import Card from "react-bootstrap/Card";
import { useState } from "react";

const PlayerCard = ({ img, name, statistics }) => {
    //? onClick={() => setshowImage(!showImage)}    bu sekilde de olur
    //? statistics de map kullandik, az eleman oldugu icin indexlerine ulasarak da yazilabilirdi. Best practice map ile.
    
    const [showImage, setshowImage] = useState(true)
    const handleClick = () => setshowImage(!showImage);

    return (
        <Card className="rounded-2 m-auto player-card" role="button" onClick={handleClick}>
            {showImage ? (<Card.Img variant="top" src={img} className="player-logo" />)
                : (
                    <ul className="m-auto">
                        {statistics.map((item, i) => {
                            return (
                                <li key={i} className="h5 text-start list-unstyled">🏀 {item} </li>
                            )
                        })}
                    </ul>)}
            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    )
}

export default PlayerCard