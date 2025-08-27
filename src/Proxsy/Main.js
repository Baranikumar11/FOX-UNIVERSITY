import Home from './Home'
export default function Main(){
     let a="asdfghj";

     let c={
        name:"barani",
        age:"20"
     }
    return(
        <div>
            <Home d={a} b={c}/>
        </div>
    );
}