import { Post } from "@/entities/models/post/postSchema";
import { Icon } from "@iconify/react";
import Button from "./Button";

const formatDate = (date: Date) => {
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(dateObj);
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-100 group cursor-pointer hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs group-hover:rotate-12 transition-transform duration-300">
            {post.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors">
              {post.name}
            </h3>
            {post.subname && (
              <p className="text-xs text-gray-500">{post.subname}</p>
            )}
          </div>
        </div>

        <div className="text-xs text-gray-400 group-hover:scale-105 transition-transform duration-200">
          {formatDate(post.created_at)}
        </div>
      </div>

      <div className="mb-3">
        <p
          className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.content}
        </p>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium hover:from-purple-200 hover:to-pink-200 transition-all duration-200 hover:scale-105"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="text-xs text-gray-400 px-2 py-1">
              +{post.tags.length - 2}
            </span>
          )}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <Button
            color="error"
            size="small"
            className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors hover:scale-105"
          >
            <Icon icon="mdi:heart-outline" className="text-sm" />
            <span className="text-xs font-medium">{post.likes}</span>
          </Button>
        </div>

        <Button
          color="submit"
          size="small"
          className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors hover:scale-105"
        >
          {" "}
          <Icon icon="mdi:bookmark-outline" className="text-sm" />
        </Button>
      </div>
    </div>
  );
}
