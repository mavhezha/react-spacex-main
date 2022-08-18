import ErrorPage from 'pages/ErrorPage'
import Home from 'pages/Home'
import React from 'react'
import { Routes as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PUBLIC_PATHS } from './Paths'

/* -------------------------- OTHER IMPORTS -------------------------- */
import ScrollToTop from './ScrollToTop'

const Routes = () => {
    return (
        <>
            <ScrollToTop />

            <Router>
                <Route path={PUBLIC_PATHS.home} element={<Home />} />

                {/* -------------------------- 404 ROUTE -------------------------- */}
                <Route path='*' element={<ErrorPage />} />
            </Router>

            <ToastContainer />
        </>
    )
}

export default Routes
