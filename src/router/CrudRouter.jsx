import { Routes, Route, Navigate } from 'react-router-dom';
import {CrudPage} from '../pages';
import NoAuth from '../pages/NoAuth';
import App from '../Wrapper';

export const CrudRouter = () => {

  const crudStatus = 'authenticated'//'not-authenticated'

  return (
    <Routes>
      
      <Route path="/" element={<App />}>
        
          (crudStatus === 'not-authenticated')
          ?<Route path="/" element={<NoAuth />} />
          :<Route path="/crudPage" element={<CrudPage />} />
          
        

      </Route>
      
        <Route path="/" element={ <Navigate to="/"/>}/>
        {/* JournalApp */}
    </Routes>
  )
}
