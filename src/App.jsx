import React, { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Test from './components/Test'

function App() {
  // const toast = useToast();

  // const countAlert = () => {
  //   toast({
  //     title: '10 Counted',
  //     description: "Your Count Reach to 10",
  //     isClosable: true,
  //     duration: 4000,
  //     position: 'top-right',
  //     colorScheme: 'purple',
  //   })
  // }
  // const [count, setCount] = useState(0);
  const [details, setDetails] = useState([{name: 'ram'}])
  const [typeValue, setTypedValue] = useState('typeSomething')

  const setValue = () => {
    setDetails([...details, {name: typeValue}])
  }

  const handleDelete = (index) => {
    const newDetails = details.filter((_, i) => i !== index);
    setDetails(newDetails);
  }

  return (
    <>
      <div style={{display : 'flex', margin:  '30px ', gap: '20px', height: '40px'} }>
        <input type='text' style={{width : '300px' , borderRadius : '8px'}} onChange={(e) => {setTypedValue(e.target.value)}}/>
        <button style={{color : 'white', background : 'teal', width : '80px', borderRadius : '8px'} } onClick={setValue}>Add</button>
      </div>
      
      <div style={{ display: 'flex' }}>
        <p style={{ fontSize: '1.125rem' }}> Typing: {typeValue}</p>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        {details.map((detail, index) => { 
          return (
            <div key={index}>
              <li style={{color: detail.name === 'pramod' ? 'purple' : 'black'}}>
                {detail.name}
              </li>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>

      {/* <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <h1 style={{ marginBottom: '10px' }}> Count {count}</h1>
        <button 
          style={{ backgroundColor: 'purple', color: 'white', padding: '8px 16px', borderRadius: '4px' }}
          onClick={() => { setCount(count+1) }}
        >
          Increase Count
        </button>
      </div> */}
{/*       
      {count>=10 ? countAlert() : ''} */}
    </>
  )
}

export default App
