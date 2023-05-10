import Msg from "./Msg";

const Person = (props) => {

    console.log(props);//{name:osman,img:...}
    
    //!destructuring
    const{name,img,tel}=props
    
      return <div> 
      
      <h2>{name}</h2>

      <Msg isim={name} telefon={tel} />  

      <img src={img} alt="" />
      <h4>{tel}</h4>
      </div>;
    }
    
    export default Person