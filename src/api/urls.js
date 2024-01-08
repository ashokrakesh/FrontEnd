import config from "../config";

const URL = 'http://localhost:3031';
// Users
export const usersData = URL+'/api/users';
export const profileData = URL+'/api/users/{id}';

// Auth
export const loadUserData = URL + '/api/auth/{id}';
export const registerUser =  URL+'/api/users';
export const loginUser = URL + '/api/auth';

// Posts
export const allPostsData = URL + '/api/posts';
export const singlePostData = URL + '/api/posts/{id}';
export const allTagPostsData = config.BASE_URL + '/api/posts/tag/{tagName}';
export const createSinglePost = URL + '/api/posts';
export const deleteSinglePost = URL + '/api/posts/{id}';

// Answers
export const allAnswersData = config.BASE_URL + '/api/posts/answers/{id}';
export const createSingleAnswer = config.BASE_URL + '/api/posts/answers/{postId}';
export const deleteSingleAnswer = config.BASE_URL + '/api/posts/answers/{AnswerId}';

// Comments
export const allCommentsData = config.BASE_URL + '/api/posts/comments/{id}';
export const createSingleComment = config.BASE_URL + '/api/posts/comments/{postId}';
export const deleteSingleComment = config.BASE_URL + '/api/posts/comments/{CommentId}';

// Tags
export const allTagsData = config.BASE_URL + '/api/tags';
export const singleTagData = config.BASE_URL + '/api/tags/{tagName}';