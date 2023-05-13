import "./Main.scss"
import { data } from "../../helpers/data";
import Card from "./Card";


const Main = () => {
    // console.log(data);

    return(
        <div className="card-container">
            {data.map((item, index)=> <Card {...item} key={index}/>)} //!Unique key istiyor uygulama o yuzden mecbur koyuluyor.
        </div>
    )
}

export default Main