import { useState } from 'react';
import './App.less';
import WidgetPannel from './components/widget-pannel';

type WidgetCategory = 'display' | 'container';

interface WidgetProps {
  /**
   * 部件唯一标识，根据name可以区分出是哪一个组件
   */
  name: string;
  /**
   * 组件类别
   */
  catagory: WidgetCategory;
  /**
   * 组件配置属性
   */
  attribute: any;
}

function App() {
  return (
    <div className='qm-editor'>
      {/* 部件面板 */}
      <section className='widget-pannel'>
        <WidgetPannel />
      </section>
      {/* 画布 */}
      <section className='qm-canvas'>qm-canvas</section>
      {/* 属性面板 */}
      <section className='attribute-pannel'>attribute-pannel</section>
    </div>
  );
}

export default App;
