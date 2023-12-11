import { useState, useEffect, useRef} from 'react';






export function GetTrees(){  
    
    const [data, setdata] = useState(0)
    
    var myHeaders = new Headers();
      myHeaders.append("ocp-apim-subscription-key", "d69ee6a096904bbc89a4c7bded954899");
       
      var requestOptions = {
        mode:'cors',
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      console.log('fetch')
      

    useEffect(() =>{
        
        
      const fetchdata = async () =>{
       
        const result = await fetch("https://skilltree.azure-api.net/v1/skilltree", requestOptions)
    console.log(result)
        result.json().then(json =>{setdata(json)})
        
      
      
      }
    
      fetchdata();
    
}
    
    ,[]);
    console.log(data)
    return data
    }

   

