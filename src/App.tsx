import { Routes, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import ProtectedRouter from './routes/ProtectedRouter';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRouter />}>
        <Route path="*" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
