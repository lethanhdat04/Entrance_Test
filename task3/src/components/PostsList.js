import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, setCurrentPage } from '../redux/actions/postsActions';
import PostCard from './PostCard';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error, currentPage, postsPerPage } = useSelector(state => state.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <LoadingSpinner />;
  if (error) return (
    <div className="text-center py-8">
      <div className="text-red-500 text-lg">Error: {error}</div>
      <button 
        onClick={() => dispatch(fetchPosts())}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Retry
      </button>
    </div>
  );

  // Calculate pagination
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 text-gray-600">
        Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, posts.length)} of {posts.length} posts
      </div>

      <div className="grid gap-4">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default PostsList;