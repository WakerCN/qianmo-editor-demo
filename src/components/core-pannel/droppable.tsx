import React from 'react';
import { useDrop } from 'react-dnd';
import cx from 'classnames';
import CorePannel from '.';

export interface DroppableProps {
  data: any;
  index: any;
}

function Droppable(props: DroppableProps) {
  const { data, index } = props;

  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: 'display',
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      }),
      drop: (item) => {}
    }),
    [data]
  );

  return (
    <div ref={dropRef} key={index} className={'columns-wrap'}>
      {data ? <CorePannel data={data} /> : null}
    </div>
  );
}

export default Droppable;
