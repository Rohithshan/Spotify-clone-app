import React from 'react'
import "./Player.css"
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue(); 

  return (
    <div className="sidebar">
        <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />    

        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <strong className="sidebar__title">Playlists</strong>
        <hr />

        {playlists?.items?.map(playlist => (
          <SidebarOption title={playlist.name} />

        ))}

    </div>

  )
}

export default Sidebar