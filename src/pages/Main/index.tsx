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
  const [hide, setHide] = useState(false);
  const cls: string[] = [hide ? "hide" : ""];

  return (
    <div>
      <button onClick={() => setHide(!hide)}>
          {hide ? "Show" : "Hide"}
      </button>
      <Tree className={cls.join(" ")} items={ItemsStore} />
    </div>
  );
};

