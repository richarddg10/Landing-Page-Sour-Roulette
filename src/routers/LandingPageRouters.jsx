import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages'

export function LandingPageRouters() {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<LandingPage />}
                />
            </Routes>
        </>
    )
}