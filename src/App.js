import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"
import Posts from './Posts';

function App() {
  const [state,setState]=useState("")
  const [country,setCountry]=useState("")
  const [posts,setPosts]=useState([])
  const [total,setTotal]=useState(0)

  let flag=0

  useEffect(()=>{
  let fetchRes=fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=66ee2fa06a834263a2215fc011d568bd`);
  fetchRes.then(res =>
    res.json()).then(data => {
      setTotal(data.articles)
      setPosts(data.articles.slice(0,10))
    })
  },[country])

  const loading=()=>{
    if(flag===0){
      setPosts(total.slice(0,20))
      flag=1
    }
  }

  return (
    <>
      <input type="text" value={state} onChange={(e)=>setState(e.target.value)} />
      <button onClick={() => setCountry(state.slice(0, 2).toLowerCase())}>click</button>

      <div>
        <Posts props={posts} />
      </div>

      <button onClick={()=>loading()}>LOAD MORE</button>
    </>

  );
}

export default App;
