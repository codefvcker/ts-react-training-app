import React, { useState } from 'react'
import { TTreeItem } from '../../types'

interface ITreeItemProps {
    title: string,
    id: number,
    children: TTreeItem[],
    renderItems: (items: TTreeItem[]) => any,
    hideChildren: boolean
}

export const TreeItem: React.FC<ITreeItemProps> = ({
  title,
  id,
  children,
  renderItems,
  hideChildren
}) => {
  const [hide, setHide] = useState(false);

  const cls: string[] = ["tree-item__children", hide || hideChildren ? "hide" : ""];

  return (
    <li>
      <span onClick={() => setHide(!hide)}>{title}</span>
      <ul className={cls.join(" ")}>{renderItems(children)}</ul>
    </li>
  );
};
