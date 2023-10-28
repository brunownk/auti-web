import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthGuard } from './AuthGuard';
import { Dashboard, Home, Login, Register, NotFound, Memory } from '../view/pages';
import { AuthLayout, PrivateLayout } from '../view/layouts';

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
          <Route element={<PrivateLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/game/memory" element={<Memory />} />

          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}