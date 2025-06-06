export interface TreeNode {
    id: string;
    name: string;
    children?: TreeNode[];
}

export const folderStructure: TreeNode = {
    id: "1",
    name: "Proyecto",
    children: [
        {
            id: "1",
            name: "src",
            children: [
                { id: "3", name: "components" },
                { id: "4", name: "hooks" },
            ],
        },
        { id: "5", name: "public" },
    ],
};