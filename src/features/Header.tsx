import { getPublicUser } from "@/shared/api/user-actions";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default async function Header() {
  const user = await getPublicUser();

  const getUserDisplayInfo = (user: {
    id: string;
    name?: string;
    nick?: string;
  }) => {
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

  const userDisplayInfo = getUserDisplayInfo(user);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
              <Icon icon="mdi:account-group" className="h-8 w-8 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SocialHub
            </span>
          </div>

          {!user && (
            <div className="flex items-center space-x-4">
              <Link
                href={"/login"}
                className="px-6 py-2 text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                href={"/signup"}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Sign Up
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center space-x-2">
              <Link
                href={"/profile"}
                className="text-slate-700 px-4 py-1 rounded-4xl border border-purple-200 bg-purple-300 uppercase font-bold flex flex-col items-center hover:bg-purple-400 hover:text-white transition-all duration-200"
              >
                {userDisplayInfo?.showName && (
                  <span className="">Hello, {userDisplayInfo.displayName}</span>
                )}
                <span className="text-xs">Go to Profile</span>
              </Link>
              <Link
                href={"/dashboard"}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
