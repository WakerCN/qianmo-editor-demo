import React from 'react';
import { useDrag } from 'react-dnd';
import { DisplayWidget } from '../../types';

type Props = {
  dw: DisplayWidget;
};

export default function draggable(props: Props) {
  const { dw } = props;
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'display',
    item: { ...dw },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));
  return (
    <div ref={dragRef} key={dw.id} className={'widget-box'}>
      {dw.id}
    </div>
  );
}
