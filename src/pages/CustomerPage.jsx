import { useState, useEffect } from 'react'
import api from '../api/axios'

function CustomerPage() {
  const [customers, setCustomers] = useState([])
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState({
    street: '',
    city: '',
    country: ''
  })

  // Tüm müşterileri getir
  const getAllCustomers = async () => {
    try {
      const response = await api.get('/customer/list')
      setCustomers(response.data)
      console.log('Müşteriler:', response.data)
    } catch (error) {
      console.error('Hata:', error)
    }
  }

  // ID'ye göre müşteri getir
  const getCustomerById = async (id) => {
    try {
      const response = await api.get(`/customer/list/${id}`)
      console.log('Müşteri:', response.data)
    } catch (error) {
      console.error('Hata:', error)
    }
  }

  // Yeni müşteri oluştur
  const createCustomer = async (customerData) => {
    try {
      const response = await api.post('/customer/save', customerData)
      console.log('Müşteri oluşturuldu:', response.data)
      getAllCustomers() // Listeyi güncelle
    } catch (error) {
      console.error('Hata:', error)
    }
  }

  useEffect(() => {
    getAllCustomers()
  }, [])

  return (
    <div className='container'>
      <h1>Müşteri API İşlemleri</h1>

      {/* Müşteri Listesi */}
      <section>
        <h2>Müşteri Listesi</h2>
        <button onClick={getAllCustomers}>Müşterileri Getir</button>
        <div className="customer-list">
          {customers.map(customer => (
            <div key={customer.id} className="customer-card">
              <p>ID: {customer.id}</p>
              <p>İsim: {customer.name}</p>
              {customer.address && (
                <div className="address-info">
                  <p>Adres: {customer.address.street}</p>
                  <p>Şehir: {customer.address.city}</p>
                  <p>Ülke: {customer.address.country}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ID ile Müşteri Arama */}
      <section>
        <h2>Müşteri Ara</h2>
        <input 
          type="number" 
          value={id} 
          onChange={(e) => setId(e.target.value)}
          placeholder="Müşteri ID"
        />
        <button onClick={() => getCustomerById(id)}>Müşteri Bul</button>
      </section>

      {/* Yeni Müşteri Oluşturma */}
      <section>
        <h2>Yeni Müşteri Oluştur</h2>
        <input 
          type="text" 
          value={name}
          placeholder="Müşteri Adı" 
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          value={address.street}
          placeholder="Sokak" 
          onChange={(e) => setAddress({...address, street: e.target.value})}
        />
        <input 
          type="text" 
          value={address.city}
          placeholder="Şehir" 
          onChange={(e) => setAddress({...address, city: e.target.value})}
        />
        <input 
          type="text" 
          value={address.country}
          placeholder="Ülke" 
          onChange={(e) => setAddress({...address, country: e.target.value})}
        />
        <button onClick={() => createCustomer({name, address})}>
          Müşteri Oluştur
        </button>
      </section>
    </div>
  )
}

export default CustomerPage 