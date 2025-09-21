import { PublicUser } from "@/entities/models/public-user/publicUserSchem";
import { getPublicUser } from "@/entities/api/user-actions";
import CustomLink from "@/shared/ui/CustomLink";
import { Icon } from "@iconify/react";

const getUserDisplayInfo = (user: PublicUser) => {
  if (!user) return null;

  const hasName = user.name && user.name.trim() !== "";
  const hasNick = user.nick && user.nick.trim() !== "";

  if (hasName) {
    return {
      displayName: user.name,
      showName: true,
    };
  } else if (hasNick) {
    return {
      displayName: user.nick,
      showName: true,
    };
  } else {
    return {
      displayName: null,
      showName: false,
    };
  }
};

export default async function Header() {
  const user = await getPublicUser();

  const userDisplayInfo = getUserDisplayInfo(user);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <CustomLink variant="ghost" href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
              <Icon icon="mdi:account-group" className="h-8 w-8 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SocialHub
            </span>
          </CustomLink>

          {!user && (
            <div className="flex items-center space-x-4">
              <CustomLink
                href="/login"
                variant="ghost"
                color="primary"
                size="medium"
                className="text-gray-600 hover:text-purple-600 font-medium"
              >
                Sign In
              </CustomLink>
              <CustomLink
                href="/signup"
                variant="solid"
                color="primary"
                size="medium"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white transform hover:scale-105"
              >
                Sign Up
              </CustomLink>
            </div>
          )}

          {user && (
            <div className="flex items-center space-x-2">
              <CustomLink
                href="/profile"
                variant="solid"
                size="medium"
                className="uppercase font-bold flex flex-col items-center"
              >
                {userDisplayInfo?.showName && (
                  <span>Hello, {userDisplayInfo.displayName}</span>
                )}
                <span className="text-xs">Go to Profile</span>
              </CustomLink>
              <CustomLink
                href="/dashboard"
                variant="solid"
                color="primary"
                size="medium"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105 font-medium"
              >
                Go to Dashboard
              </CustomLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
