import React, { lazy, Suspense } from 'react';
// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorBoundary/ErrorBoundary';
// pages
const Home = lazy(() => import('./pages/home/Home'));
const Error = lazy(() => import('./pages/error/Error'));
// Header
const Header = lazy(() => import('./components/header/Header'));
const Footer = lazy(() => import('./components/footer/Footer'));

const App = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback="Loading ...">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
          {/* <Footer /> */}
        </Suspense>
      </ErrorBoundary>
    </Router>
  )
};

export default App;
