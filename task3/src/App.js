import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

const App = () => {
  const { currentView } = useSelector(state => state.posts);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'add-post':
        return <PostForm />;
      case 'posts':
      default:
        return <PostsList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderCurrentView()}
    </div>
  );
};

export default App;