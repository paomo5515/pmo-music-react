import React, { memo, Suspense } from 'react'

// 布局路由
import PmoLayout from './router-layout';


const App = memo(() => {
  return (
    <div className='app'>
      <Suspense fallback={<div>page loadIng</div>}>
        <PmoLayout />
      </Suspense>
    </div>
  )
})

export default App;