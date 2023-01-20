import { useState } from 'react';
import './App.less';

function App() {
  return (
    <div className='qm-editor'>
      {/* 部件面板 */}
      <section className='widget-pannel'>widget-pannel</section>
      {/* 画布 */}
      <section className='qm-canvas'>qm-canvas</section>
      {/* 属性面板 */}
      <section className='attribute-pannel'>attribute-pannel</section>
    </div>
  );
}

export default App;
