import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentView } from '../redux/actions/postsActions';

const Navigation = () => {
  const dispatch = useDispatch();
  const { currentView } = useSelector(state => state.posts);

  const navigateTo = (view) => {
    dispatch(setCurrentView(view));
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-800">Posts Management</h1>
          <div className="space-x-4">
            <button
              onClick={() => navigateTo('add-post')}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentView === 'add-post'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-gray-800 bg-green-100 hover:bg-green-200'
              }`}
            >
              Add New Post
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;