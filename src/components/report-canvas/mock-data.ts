import { ReportCanvas } from '.';

export const MOCK_DATA: ReportCanvas = {
  GlobalSettings: {},
  layout: [
    {
      type: 'layout',
      id: 'ly-01',
      columns: 3,
      columnsInfo: [
        {
          id: 'wt-01'
        }
      ]
    },
    {
      type: 'layout',
      id: 'ly-02',
      columns: 2
    }
  ],
  widgets: [
    {
      type: 'widget',
      id: 'wt-01',
      title: '组件A'
    }
  ]
};
