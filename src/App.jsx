import { useState ,useEffect} from 'react'
import axios from 'axios'
import './App.css'


const baseUrl='http://localhost:3000'

function App() {
  const [id, setId] = useState(1)
  const getAllUsers= async()=>
    {
    const response= await axios.get(`${baseUrl}/users`) //baseUrl+"/users"
    console.log(response.data)
    }

    const getUserById= async(id)=>{
      const response= await axios.get(`${baseUrl}/users/${id}`)
      console.log('Kullanıcı adı:', response.data.email)
    }
  
useEffect(()=>{
  
  
},[])

  return (
    <>
      <div>
        <button onClick={()=>getAllUsers()}>Get All Users</button>
        <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
        <button onClick={()=>getUserById(id)}>Get User By ID</button>
      </div>
      
    </>
  )
}

export default App
