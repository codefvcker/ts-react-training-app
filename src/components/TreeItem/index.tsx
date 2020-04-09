import React, { useState, useEffect, useMemo } from 'react'
import { TTreeItem, THideState } from '../../types'

interface ITreeItemProps {
    title: string,
    id: number,
    children: TTreeItem[],
    renderItems: (items: TTreeItem[]) => any,
    hideState: THideState,
}

export const TreeItem: React.FC<ITreeItemProps> = ({
  title,
  id,
  children,
  renderItems,
  hideState,
}) => {
  const [hide, setHide] = useState(false);

  const cls: string[] = ["tree-item__children", hide ? "hide" : ""];

  useEffect(() => {
    setHide(hideState.hideChildren)
  }, [hideState]);

  return (
    <li>
      <span onClick={() => setHide(!hide)}>{title}</span>
      <ul className={cls.join(" ")}>{renderItems(children)}</ul>
    </li>
  );
};
