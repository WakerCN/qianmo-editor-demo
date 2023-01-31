import { ColumnsWidget, DisplayWidget, Pannel } from '../../types';
import Draggable from './draggable';
import Droppable from './droppable';

interface Props {
  data: Pannel;
}

export default function CorePannel(props: Props) {
  const { data } = props;
  const { layouts } = data;

  const renderDisplayWidget = (dw: DisplayWidget) => {
    return <Draggable key={dw.id} dw={dw} />;
  };

  const renderColumnWidget = (cw: ColumnsWidget) => {
    const columns = cw.columnsInfo.length;

    return (
      <div key={cw.id} className={'sc-widget'}>
        {cw.columnsInfo.map((c, index) => (
          <Droppable data={c} index={index} />
          // <div key={index} className={'columns-wrap'}>
          //   {c ? <CorePannel data={c} /> : null}
          // </div>
        ))}
      </div>
    );
  };

  return (
    <div className='core-pannel'>
      {layouts.map((l) =>
        l.type === 'display'
          ? renderDisplayWidget(l)
          : l.name === 'Columns'
          ? renderColumnWidget(l)
          : null
      )}
    </div>
  );
}
