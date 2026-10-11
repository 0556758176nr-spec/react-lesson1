
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Flower from './Flower.jsx'
import { createRoot } from 'react-dom/client';

function App(){
  const arr=[{name:"p1", petalColor:"red", centerColor:"yellow"}, {name:"p2", petalColor:"red", centerColor:"yellow"}, {name:"p3", petalColor:"red", centerColor:"yellow"}]

  return(
  <div>
    <Header/>
    {arr.map(i => (<Flower name={i.id} petalColor={i.name} centerColor={i.color}/>))}
    <Flower/>
    <Flower name="גבעול" petalColor="ירוק"/>
    <Flower name="ורדים" centerColor="צהוב"/>
    <Flower name="נרקיס" />
  </div>
  )
}

 