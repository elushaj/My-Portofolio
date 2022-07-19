import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../githubProjects/projects.css'
import Card from '../../components/Card';
const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
const[languages,setLanguages]=useState([])
  useEffect(() => {
    const loadPost = async () => {

        
        setLoading(true);

        const response = await axios.get(
        "https://api.github.com/users/elushaj/repos");

// const langResponse=await Promise.all(response.data.results.map((el) =>{
//   return axios.get('https://api.github.com/elushaj/repos/${el.name}/languages')

// }))
        setPosts(response.data);
 console.log(response)
       
        setLoading(false);
    }

    loadPost();
   
}, []);  

let repo


  return (
   <div className="App">
    <h1>Projects</h1>
    <div className='cards'>
  {loading ? (
        <h4>Loading...</h4>) :
        (posts.map((item,index) =>
        (<Card  loadPost={item} key={index}/>
        
        )
  
           
            
            )
        )
    }</div>
  
</div>

  )
}

export default Projects