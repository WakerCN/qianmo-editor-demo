import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MOCK_DATA } from '../../types';
import CorePannel from '../core-pannel';
import './index.less';

/** 通用元素id */
interface Element {
  /** 元素唯一 id */
  id: string;
  type: 'layout' | 'widget';
}

/** 布局元素 */
interface LayoutElement extends Element {
  type: 'layout';
  /** 布局分几栏 */
  columns?: number;
  /** 布局分栏具体信息 */
  columnsInfo?: LayoutElementColumns[];
}

/** 元素组件 */
interface WidgetElement extends Element {
  type: 'widget';
  title: string;
}

interface LayoutElementColumns {
  /** 分栏占比 */
  percent?: number;
  /** 元素id */
  id?: string;
}

export interface ReportCanvas {
  /** 画布全局设置 */
  GlobalSettings: {};
  /** 画布的布局信息 */
  layout?: Array<LayoutElement>;
  /** 元素组件 */
  widgets?: Array<WidgetElement>;
}

function ReportCanvas() {
  const { layouts = [] } = MOCK_DATA;

  const render = () => {
    return (
      <div className={'qm-canvas'}>
        <DndProvider backend={HTML5Backend}>
          <CorePannel data={MOCK_DATA} />
        </DndProvider>
      </div>
    );
  };

  return render();
}

export default ReportCanvas;
