import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes'
import { Global } from './styles/Global';

const App: React.FC = () => {


  return (
    <>
      <Global />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App;

// value={newRepo} onChange={(e) => setNewRepo(e.target.value)}
