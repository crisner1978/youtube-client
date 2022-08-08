import axios from "axios";
import { queryClient } from "../components/AppProviders";

export const client = axios.create({
  baseURL: "/api/v1",
});

export function authenticate(response) {
    const { tokenId, credential, id_token } = response
  console.log("hey look at", tokenId);
  client({
    method: "POST",
    url: "/auth/google-login",
    data: { idToken: tokenId || credential || id_token },
  })
    .then((res) => {
      console.log("Sign in success :", res);
      window.location.assign(window.location.href);
    })
    .catch((error) => {
      console.group("Sign in error", error.response);
    });
}

export async function signoutUser() {
  await client.get("/auth/signout");
  window.location.pathname = "/";
}

export async function addVideo(video) {
  await client.post("/videos", video);
  await queryClient.invalidateQueries(["Channel"]);
}

export async function addVideoView(videoId) {
  await client.get(`/videos/${videoId}/view`);
  await queryClient.invalidateQueries(["History"]);
}

export async function likeVideo(videoId) {
  await client.get(`/videos/${videoId}/like`);
  await queryClient.invalidateQueries(["WatchVideo", videoId]);
}

export async function dislikeVideo(videoId) {
  await client.get(`/videos/${videoId}/dislike`);
  await queryClient.invalidateQueries(["WatchVideo", videoId]);
}

export async function toggleSubscribeUser(channelId) {
  await client.get(`/users/${channelId}/toggle-subscribe`);
  await queryClient.invalidateQueries(["Channel"]);
  await queryClient.invalidateQueries(["Channels"]);
  await queryClient.invalidateQueries(["Subscriptions"]);
  await queryClient.invalidateQueries(["AuthProvider"]);
  await queryClient.invalidateQueries(["WatchVideo"]);
  await queryClient.invalidateQueries(["SearchResults"]);
}

export async function addComment({ video, comment }) {
    await client.post(`/videos/${video.id}/comments`, { text: comment })
    await queryClient.invalidateQueries(["WatchVideo", video.id]);
}
