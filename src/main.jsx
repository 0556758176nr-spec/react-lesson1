
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Flower from './Flower.jsx'
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <div>
    <Header/>
    <Flower/>
  </div>
)
