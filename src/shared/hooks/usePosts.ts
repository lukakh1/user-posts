import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isLiked, likePost, unlikePost } from "@/entities/api/posts-actions";

export const postKeys = {
  all: ["posts"] as const,
  likes: (postId: number) => [...postKeys.all, "likes", postId] as const,
};

export function useIsLiked(postId: number) {
  return useQuery({
    queryKey: postKeys.likes(postId),
    queryFn: () => isLiked(postId),
    enabled: !!postId,
    staleTime: 1000 * 60 * 5,
  });
}

export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likePost,
    onSuccess: (_, postId) => {
      queryClient.setQueryData(postKeys.likes(postId), {
        success: true,
        liked: true,
      });

      queryClient.invalidateQueries({ queryKey: postKeys.all });
    },
    onError: (error) => {
      console.error("Failed to like post:", error);
    },
  });
}

export function useUnlikePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: unlikePost,
    onSuccess: (_, postId) => {
      queryClient.setQueryData(postKeys.likes(postId), {
        success: true,
        liked: false,
      });

      queryClient.invalidateQueries({ queryKey: postKeys.all });
    },
    onError: (error) => {
      console.error("Failed to unlike post:", error);
    },
  });
}
