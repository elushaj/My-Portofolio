import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'

const Language = () => {

    const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

    const axios = new Axios({
        auth: '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'
      })
      
     

      useEffect(() => {
        const loadPost = async () => {
    
            
            setLoading(true);
    
            const response = await axios.get(
            "https://api.github.com/repos/elushaj/My-Portofolio/languages");
    
     
            setPosts(response.data);
    
           
            setLoading(false);
        }
    
        loadPost();
    }, []);  
    
    return (
        <div><div className="App">
        {loading ? (
            <h4>Loading...</h4>) :
            (posts.map((item) =>
                <div>
               <h3>{item.title}</h3>
                </div>
                )
            )
        }
    </div>
      </div>
      )
}

export default Language