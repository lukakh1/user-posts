import { getPosts } from "@/entities/api/posts-actions";
import Posts from "@/features/post-page/Posts";
import H1 from "@/shared/ui/H1";

export default async function DashboardPage() {
  const posts = await getPosts();
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 animate-fade-in flex flex-col w-full items-center">
        <H1 color="text-purple-600">Community Posts</H1>
        <p className="text-gray-600 text-sm">
          Discover what&apos;s happening in our community
        </p>
      </div>
      <Posts posts={posts.data ?? []} />
    </div>
  );
}
