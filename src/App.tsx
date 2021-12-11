import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from 'components';

const App: FC = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">Content</main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
