import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ServicosPage from './pages/ServicosPage';
import ContatoPage from './pages/ContatoPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/servicos" element={<ServicosPage />} />
                    <Route path="/contato" element={<ContatoPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
