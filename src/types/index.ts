export type AllLayout = BarChartWidget | ColumnsWidget;

export interface Pannel {
  id: string;
  layouts: Array<AllLayout>;
}

type WidgetType = 'display' | 'layout';

interface Widget {
  /** 小部件实例id */
  id: string;
  /** 部件唯一名字 */
  name: string;
  /** 部件类型 */
  type: WidgetType;
}

export interface DisplayWidget extends Widget {
  type: 'display';
  props: any;
}

interface ContainerWidget extends Widget {
  type: 'layout';
}

/** 柱状图组件 */
interface BarChartWidget extends DisplayWidget {}

/** 分栏组件 */
export interface ColumnsWidget extends ContainerWidget {
  name: 'Columns';
  columnsInfo: Array<Pannel | null>;
}

export const MOCK_DATA: Pannel = {
  id: 'root-p-01',
  layouts: [
    {
      id: 'chart-01',
      name: 'bar-chart',
      type: 'display',
      props: {}
    },
    {
      id: 'col-01',
      name: 'Columns',
      type: 'layout',
      columnsInfo: [
        null,
        {
          id: 'p-02',
          layouts: [
            { id: 'chart-02', name: 'barChart', type: 'display', props: {} },
            {
              id: 'col-02',
              type: 'layout',
              name: 'Columns',
              columnsInfo: [
                null,
                {
                  id: 'p-03',
                  layouts: [
                    {
                      id: 'char-03',
                      type: 'display',
                      name: 'bar-chart',
                      props: {}
                    },
                    {
                      id: 'col-03',
                      type: 'layout',
                      name: 'Columns',
                      columnsInfo: [
                        {
                          id: 'p-04',
                          layouts: [
                            {
                              id: 'chart-04',
                              type: 'display',
                              name: 'bar-chart',
                              props: {}
                            }
                          ]
                        },
                        null
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        null
      ]
    }
  ]
};
