import CustomLink from "@/shared/ui/CustomLink";

export default function DashboardHeader() {
  return (
    <header className="flex justify-between w-full bg-purple-400 shadow-sm border rounded-full mt-10 max-w-7xl mx-auto px-5 py-3 gap-x-2">
      <CustomLink
        className="uppercase w-full text-center justify-center"
        color="accent"
        variant="ghost"
        href="/dashboard"
      >
        every post
      </CustomLink>
      <CustomLink
        className="uppercase w-full text-center justify-center"
        color="accent"
        variant="ghost"
        href="/dashboard/my-posts"
      >
        my posts
      </CustomLink>
      <CustomLink
        className="uppercase w-full text-center justify-center"
        color="accent"
        variant="ghost"
        href="/dashboard/add-post"
      >
        add post
      </CustomLink>
      <CustomLink
        className="uppercase w-full text-center justify-center"
        color="accent"
        variant="ghost"
        href="/dashboard/saved-posts"
      >
        saved posts
      </CustomLink>
    </header>
  );
}
