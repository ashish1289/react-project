import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from './components/PostList';
import PostDetail from './components/PostDetails';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<PostsList />} />
                    <Route path="/posts/:postId" element={<PostDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;