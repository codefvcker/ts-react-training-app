import React from 'react'
import {TTreeItem} from '../../types'
import { TreeItem } from '../TreeItem'

interface ITreeProps {
    items: TTreeItem[],
    className?: string
}

export const Tree: React.FC<ITreeProps> = ({ items, className }) => {
  const renderItems = (items: TTreeItem[]) => {
    return items.map((item) => (
      <TreeItem
        key={item.id}
        id={item.id}
        title={item.title}
        children={item.children}
        renderItems={renderItems}
      />
    ));
  };

  return <div className={className}>{renderItems(items)}</div>;
};
