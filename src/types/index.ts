export type TTreeItem = {
    title: string,
    id: number,
    children: TTreeItem[]
}

export type THideState = {
    hideChildren: boolean,
    clicked: boolean
}