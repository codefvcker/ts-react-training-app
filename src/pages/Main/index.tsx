import React, { useState } from 'react'
import { TTreeItem } from '../../types'
import { Tree } from '../../components'

const ItemsStore: TTreeItem[] = [
  {
    title: "Main",
    id: 1,
    children: [
      {
        title: "SubMain",
        id: 1.1,
        children: [],
      },
      {
        title: "SubMain",
        id: 1.2,
        children: [],
      },
    ],
  },
  {
    title: "Main 2",
    id: 2,
    children: [
      {
        title: "SubMain 2",
        id: 2.1,
        children: [],
      },
      {
        title: "SubMain 2",
        id: 2.2,
        children: [
          {
            title: "SubSubMain 2",
            id: 2.11,
            children: [],
          },
          {
            title: "SubSubMain 2",
            id: 2.22,
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: "Main 3",
    id: 3,
    children: [
      {
        title: "SubMain 3",
        id: 3.1,
        children: [],
      },
      {
        title: "SubMain 3",
        id: 3.2,
        children: [],
      },
    ],
  },
];

export const Main: React.FC = () => {

    // clicked - стейт по которому айтем отслеживает изменения в useEffect 

  const [hideState, setHideState] = useState({
      hideChildren: false,
      clicked: false
  });

  return (
    <div>
      <button className="btn" onClick={() => setHideState({hideChildren: false, clicked: !hideState.clicked})}>
        Show
      </button>
      <button className="btn" onClick={() => setHideState({hideChildren: true, clicked: !hideState.clicked})}>
        Hide
      </button>
      <Tree items={ItemsStore} hideState={hideState} />
    </div>
  );
};

