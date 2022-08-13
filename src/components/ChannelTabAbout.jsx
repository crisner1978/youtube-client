import React from 'react'

const ChannelTabAbout = ({ about = "No description for this channel" }) => {
  console.log("about", about)
  return (
    <p>{about}</p>
  )
}

export default ChannelTabAbout