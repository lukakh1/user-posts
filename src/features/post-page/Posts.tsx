import { type Post } from "@/entities";
import { PostCard } from "@/entities";
import { Icon } from "@iconify/react";

export default function Posts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
          <Icon icon="mdi:post-outline" className="text-3xl text-purple-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No posts yet</h3>
        <p className="text-gray-500 max-w-sm text-sm">
          Be the first to share your thoughts and start the conversation!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
