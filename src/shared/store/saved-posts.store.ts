import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SavedPostIdsState {
  savedPostIds: number[];
  isHydrated: boolean;
  addPostToSaved: (postId: number) => void;
  removePostFromSaved: (postId: number) => void;
  togglePostSaved: (postId: number) => void;
  isPostSaved: (postId: number) => boolean;
  clearAllSaved: () => void;
  getSavedCount: () => number;
  setHydrated: () => void;
}

const createSafeStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage;
  }

  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
  };
};

const useSavedPostIds = create<SavedPostIdsState>()(
  persist(
    (set, get) => ({
      savedPostIds: [],
      isHydrated: false,

      addPostToSaved: (postId: number) =>
        set((state) => ({
          savedPostIds: state.savedPostIds.includes(postId)
            ? state.savedPostIds
            : [...state.savedPostIds, postId],
        })),

      removePostFromSaved: (postId: number) =>
        set((state) => ({
          savedPostIds: state.savedPostIds.filter((id) => id !== postId),
        })),

      togglePostSaved: (postId: number) => {
        const { savedPostIds, addPostToSaved, removePostFromSaved } = get();
        if (savedPostIds.includes(postId)) {
          removePostFromSaved(postId);
        } else {
          addPostToSaved(postId);
        }
      },

      isPostSaved: (postId: number) => get().savedPostIds.includes(postId),

      clearAllSaved: () => set({ savedPostIds: [] }),

      getSavedCount: () => get().savedPostIds.length,

      setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: "saved-posts-storage",
      version: 1,
      storage: createJSONStorage(createSafeStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);

export default useSavedPostIds;
