import { Channel, History, Home, Library, LikedVideos, NotFound, SearchResults, SubscriptionsPage, Trending, WatchVideo, YourVideos } from "Pages"
import { Routes, Route } from "react-router-dom"

export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="watch/:videoId" element={<WatchVideo />} />
      <Route path="channel/:channelId" element={<Channel />} />
      <Route path="results/:searchQuery" element={<SearchResults />} />
      <Route path="feed/trending" element={<Trending />} />
      <Route path="feed/subscriptions" element={<SubscriptionsPage />} />
      <Route path="feed/library" element={<Library />} />
      <Route path="feed/history" element={<History />} />
      <Route path="feed/my_videos" element={<YourVideos />} />
      <Route path="feed/liked_videos" element={<LikedVideos />} />
      <Route path="feed/my_videos" element={<YourVideos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
