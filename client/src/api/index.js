import axios from "axios";

const URL = "http://localhost:5000";

const API = axios.create({ baseURL: URL });

API.interceptors.request.use((req) => {
  const profile = localStorage.getItem("profile");

  if (profile) {
    req.headers.authorization = `Bearer ${JSON.parse(profile).token}`;
  }
  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (FormData) => API.post("/user/signin", FormData);
export const signUp = (FormData) => API.post("/user/signup", FormData);
