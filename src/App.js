import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import {useState} from 'react'

function App() {
  const [contacts, setcontacts] = useState([])
  const formSub  = (data) => {
    setcontacts([...contacts,data]);
  }
  // delete contact
  const deleteContact = (id) =>{
    let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    })
    setcontacts(newContact)
  }
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home formSub={formSub} contacts={contacts} deleteContact={deleteContact}/>} />
      <Route path='/Favorites' element={<Favorites/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
