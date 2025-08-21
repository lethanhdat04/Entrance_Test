import React from 'react';

const PostCard = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-200">
    <h3 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
      {post.title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{post.body}</p>
    <div className="mt-4 text-sm text-gray-500">
      Post ID: {post.id} | User ID: {post.userId}
    </div>
  </div>
);

export default PostCard;