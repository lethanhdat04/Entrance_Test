import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, setCurrentView } from '../redux/actions/postsActions';

const PostForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.body.trim()) {
      newErrors.body = 'Content is required';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await dispatch(createPost(formData));
      setFormData({ title: '', body: '', userId: 1 });
      setSubmitSuccess(true);
      setTimeout(() => {
        dispatch(setCurrentView('posts'));
    }, 1000);
      setErrors({});
    } catch (error) {
      setErrors({ submit: 'Failed to create post. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewPosts = () => {
    dispatch(setCurrentView('posts'));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Post</h2>
          
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <p className="font-medium">Post created successfully!</p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter post title..."
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                rows="6"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical ${
                  errors.body ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Write your post content here..."
              />
              {errors.body && (
                <p className="mt-1 text-sm text-red-500">{errors.body}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User ID
              </label>
              <select
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    User {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {errors.submit && (
              <div className="text-red-500 text-sm text-center">{errors.submit}</div>
            )}

            <div className="flex space-x-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                {isSubmitting ? 'Creating...' : 'Create Post'}
              </button>
              <button
                onClick={handleViewPosts}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;