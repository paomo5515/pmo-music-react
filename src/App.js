import React, { memo } from 'react'


// 布局路由
import PmoLayout from './router-layout';
import PmoAppHeader from './components/app-header';
import PmoAppFooter from './components/app-footer';

const App = memo(() => {
  return (
    <div>
      <PmoAppHeader />
      <PmoLayout></PmoLayout>
      <PmoAppFooter />
    </div>
  )
})

export default App;