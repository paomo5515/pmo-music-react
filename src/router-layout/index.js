import React, { memo } from 'react'
import { Routes, Route } from 'react-router-dom'

import PmoDiscover from '../pages/discover';
import PmoMine from '../pages/mine';
import PmoFriend from '../pages/friend';

const PmoLayout = memo(() => {
  return (
    <>
      <Routes>
        <Route path='/' element={<PmoDiscover />} />
        <Route path='/my' element={<PmoMine />} />
        <Route path='/friend' element={<PmoFriend />} />
      </Routes>
    </>
  )
})

export default PmoLayout;