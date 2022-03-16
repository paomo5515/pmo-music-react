import React, { memo, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PmoAppHeader from '../components/app-header'
import PmoAppPlayerBar from '../pages/player/app-play-bar';
import PmoAppFooter from '../components/app-footer';
import PmoDiscover from '../pages/discover';
// 路由懒加载
// const PmoDiscover = lazy(() => import('../pages/discover'))
const PmoRecommend = lazy(() => import('../pages/discover/c-pages/recommend'))
const PmoRanking = lazy(() => import('../pages/discover/c-pages/ranking'))
const PmoSong = lazy(() => import('../pages/discover/c-pages/songs'))
const PmoDjradio = lazy(() => import('../pages/discover/c-pages/djradio'))
const PmoArtist = lazy(() => import('../pages/discover/c-pages/artist'))
const PmoAlbum = lazy(() => import('../pages/discover/c-pages/album'))
const PmoMine = lazy(() => import('../pages/mine'))

const PmoFriend = lazy(() => import('../pages/friend'))


// import PmoDiscover from '../pages/discover';
// import PmoRecommend from '../pages/discover/c-pages/recommend';
// import PmoRanking from '../pages/discover/c-pages/ranking';
// import PmoSong from '../pages/discover/c-pages/songs';
// import PmoDjradio from '../pages/discover/c-pages/djradio';
// import PmoArtist from '../pages/discover/c-pages/artist';
// import PmoAlbum from '../pages/discover/c-pages/album';
// import PmoMine from '../pages/mine';
// import PmoFriend from '../pages/friend';

// import PmoPlayer from '../pages/player';

const PmoLayout = memo(() => {
  return (
    <>
      <PmoAppHeader />
      {/* 导航按钮 */}
      {/*  <PmoDiscover /> */}
      <Routes>
        <Route path='/' element={<PmoDiscover />}>
          <Route path='discover/' element={<PmoRecommend />} />
          <Route path='discover/ranking' element={<PmoRanking />} />
          <Route path='discover/songs' element={<PmoSong />} />
          <Route path='discover/djradio' element={<PmoDjradio />} />
          <Route path='discover/artist' element={<PmoArtist />} />
          <Route path='discover/album' element={<PmoAlbum />} />
          <Route path='*' element={<Navigate to="discover/" />} />
        </Route>
        <Route path='mine' element={<PmoMine />} />
        <Route path='friend' element={<PmoFriend />} />
      </Routes>
      <PmoAppFooter />
      <PmoAppPlayerBar />
    </>
  )
})

export default PmoLayout;