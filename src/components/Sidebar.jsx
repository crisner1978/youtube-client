import { PlayIcon as PlayOutlineIcon } from '@heroicons/react/outline'
import { ClockIcon, CollectionIcon, FireIcon, HomeIcon, LibraryIcon, ThumbUpIcon } from '@heroicons/react/solid'
import { SidebarAuth, SidebarRow, Subscriptions } from '.'
import { useAuth } from '../context/authContext'


const Sidebar = ({ isSidebarOpen }) => {
  const user = useAuth()

  return (
    <div className={`${isSidebarOpen ? "flex absolute" : "hidden"} lg:flex lg:absolute top-0 left-0 right-0 flex-col col-span-2 items-start dark:bg-grey min-h-screen pt-16 pb-6 w-[240px] z-40 overflow-y-scroll scrollbar-hide`}>
      <SidebarRow Icon={HomeIcon} title="Home" pathname="/" />
      <SidebarRow Icon={FireIcon} title="Trending" pathname="feed/trending" />
      <SidebarRow Icon={CollectionIcon} title="Subscriptions" pathname="feed/subscriptions" />
      <hr className='border border-gray-3 w-full my-3' />
      <SidebarRow Icon={LibraryIcon} title="Library" pathname="feed/library" />
      <SidebarRow Icon={ClockIcon} title="History" pathname="feed/history" />
      <SidebarRow Icon={PlayOutlineIcon} title="Your videos" pathname="feed/my_videos" />
      <SidebarRow Icon={ThumbUpIcon} title="Liked videos" pathname="feed/liked_videos" />
      <hr className='border border-gray-3 w-full my-3' />
      {user ? <Subscriptions user={user} /> : <SidebarAuth />}
    </div>
  )
}

export default Sidebar