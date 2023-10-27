import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthGuard } from './AuthGuard';
import { Dashboard, Home, Login, Register } from '../view/pages';
import { AuthLayout } from '../view/layouts/AuthLayout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}