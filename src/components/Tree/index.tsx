import React from 'react'
import {TTreeItem, THideState} from '../../types'
import { TreeItem } from '../TreeItem'

interface ITreeProps {
    items: TTreeItem[],
    className?: string, 
    hideState: THideState,
}

export const Tree: React.FC<ITreeProps> = ({ items, className, hideState }) => {
  const renderItems = (items: TTreeItem[]) => {
    return items.map((item) => (
      <TreeItem
        key={item.id}
        id={item.id}
        title={item.title}
        children={item.children}
        renderItems={renderItems}
        hideState = {hideState}
      />
    ));
  };

  return <div className={className}>{renderItems(items)}</div>;
};
