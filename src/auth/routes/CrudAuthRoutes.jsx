import { Navigate, Route, Routes } from "react-router-dom"
import { CrudLoginPage, CrudRegisterPage } from "../../pages"

export const CrudAuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<CrudLoginPage />}/>

        <Route path="register" element={<CrudRegisterPage />}/>

        <Route path="/*" element={ <Navigate to='auth/login' />} />
    </Routes>
  )
}
