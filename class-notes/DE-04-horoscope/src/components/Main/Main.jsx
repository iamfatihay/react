import "./Main.scss"
import { data } from "../../helpers/data";
import Card from "./Card";


const Main = () => {
    // console.log(data);
//!Unique key istiyor uygulama o yuzden mecbur koyuluyor.
    return(
        <div className="card-container">
            {data.map((item, index)=> <Card {...item} key={index}/>)} 
        </div>
    )
}

export default Main