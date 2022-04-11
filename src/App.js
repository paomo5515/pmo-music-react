import React, { memo, Suspense } from 'react'

// 布局路由
import PmoLayout from './router-layout';
import Header from "./components/app-header"
import PmoDiscover from './pages/discover';

const App = memo(() => {
  return (
    <div className='app'>
      <Suspense fallback={<Header><PmoDiscover /></Header>}>
        <PmoLayout />
      </Suspense>
    </div>
  )
})

export default App;