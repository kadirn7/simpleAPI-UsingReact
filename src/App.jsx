import { useState ,useEffect} from 'react'
import axios from 'axios'
import './App.css'


const baseUrl='http://localhost:3000'

function App() {
  const [id, setId] = useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [updatedEmail,setUpdatedEmail]=useState('')
  const [updatedPassword,setUpdatedPassword]=useState('')
  const [deletedId,setDeletedId]=useState('')


    const getAllUsers= async()=>
    {
    const response= await axios.get(`${baseUrl}/users`) //baseUrl+"/users" şeklinde de yazılabilir
    console.log(response.data)
    }
    

    const getUserById= async(id)=>{
      const response= await axios.get(`${baseUrl}/users/${id}`) //baseUrl+"/users/"+id şeklinde de yazılabilir
      console.log('Kullanıcı adı:', response.data.email)
    }
  
    const createUser=async(newUSer)=>{
      const response= await axios.post(`${baseUrl}/users`,newUSer)
      console.log('Kullanıcı oluşturuldu:', response.data)
    }

    const updateUser=async(updatedUser)=>{
      const response= await axios.put(`${baseUrl}/users/${updatedUser.id}`,updatedUser)
      console.log('Kullanıcı güncellendi:', response.data)
    }

    const deleteUser=async(id)=>{
      const response= await axios.delete(`${baseUrl}/users/${id}`)
      console.log('Kullanıcı silindi:', response.data)
    }

    
useEffect(()=>{
  
  
},[])

  return (
    <>
      <div className='container'>

          <h1>API Kullanımı</h1>
        <button onClick={()=>getAllUsers()}>Get All Users</button>
        <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
        <button onClick={()=>getUserById(id)}>Get User By ID</button>

        <h2>Create User</h2>
        <input type="text"value={id} placeholder='ID'  onChange={(e)=>setId(e.target.value)}/>
        <input type="text" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>createUser({id,email,password})}>Create User</button>

        <h2>Update User</h2>
        <input type="text" value={id} placeholder='ID' onChange={(e)=>setId(e.target.value)}/>
        <input type="text" value={updatedEmail} placeholder='Updated Email' onChange={(e)=>setUpdatedEmail(e.target.value)}/>
        <input type="password" value={updatedPassword} placeholder='Updated Password' onChange={(e)=>setUpdatedPassword(e.target.value)}/>
        <button onClick={()=>updateUser({id,email:updatedEmail,password:updatedPassword})}>Update User</button>

        <h2>Delete User</h2>
        <input type="text" value={deletedId} placeholder='ID' onChange={(e)=>setDeletedId(e.target.value)}/>
        <button onClick={()=>deleteUser(deletedId)}>Delete User</button>

      </div>
      
    </>
  )
}

export default App
