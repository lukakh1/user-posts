import { signInWithEmail, signUpNewUser, signInWithGmail } from "./auth-actions";
import {getUser, getPublicUser} from './user-actions'
import { getPosts, likePost, unlikePost, isLiked } from "./posts-actions";

const authActions = {signInWithEmail, signUpNewUser, signInWithGmail}
const userActions = {getUser, getPublicUser}
const postActions = {getPosts, likePost, unlikePost, isLiked}

export {authActions, userActions, postActions}