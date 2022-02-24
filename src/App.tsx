import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import Index from './pages/Index';

const App: FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/add' element={<AddTodo />} />
        <Route path='/edit/:id' element={<EditTodo />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
