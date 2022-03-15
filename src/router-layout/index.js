import React, { memo } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PmoAppHeader from '../components/app-header'
import PmoDiscover from '../pages/discover';
import PmoRecommend from '../pages/discover/c-pages/recommend';
import PmoRanking from '../pages/discover/c-pages/ranking';
import PmoSong from '../pages/discover/c-pages/songs';
import PmoDjradio from '../pages/discover/c-pages/djradio';
import PmoArtist from '../pages/discover/c-pages/artist';
import PmoAlbum from '../pages/discover/c-pages/album';
import PmoMine from '../pages/mine';
import PmoFriend from '../pages/friend';
import PmoAppFooter from '../components/app-footer';
import PmoAppPlayerBar from '../pages/player/app-play-bar';
import PmoPlayer from '../pages/player';
const PmoLayout = memo(() => {
  return (
    <>
      <PmoAppHeader />
      {/* 导航按钮 */}
      <PmoDiscover />
      <Routes>
        <Route path='discover/' element={<PmoRecommend />} />
        <Route path='discover/ranking' element={<PmoRanking />} />
        <Route path='discover/songs' element={<PmoSong />} />
        <Route path='discover/djradio' element={<PmoDjradio />} />
        <Route path='discover/artist' element={<PmoArtist />} />
        <Route path='discover/album' element={<PmoAlbum />} />
        <Route path='discover/mine' element={<PmoMine />} />
        <Route path='discover/friend' element={<PmoFriend />} />
        <Route path='discover/player' element={<PmoPlayer />} />
        <Route path='*' element={<Navigate to="discover/" />} />
      </Routes>
      <PmoAppFooter />
      <PmoAppPlayerBar />
    </>
  )
})

export default PmoLayout;