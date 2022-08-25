import {Routes,Route} from 'react-router-dom'
import Contacts from './pages/Contacts'
import Auth from './pages/Auth'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/auth' element={<Contacts/>}/>
    </Routes>
  );
}

export default App;
