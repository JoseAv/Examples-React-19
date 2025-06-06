import type React from "react";
import type { TreeNode } from "./types";

export const TreeView = ({ tree }: { tree: TreeNode }): React.ReactElement => {

    return (
        <div className="TreeView">
            {Object.entries(tree).map(([key, value]) => {
                if (key === 'children') return null
                if (key === 'id') return <div key={value}>XClave REpetida</div>
                return (
                    <div key={key}>
                        <p>{key}: {value}</p>
                    </div>
                )
            })}
            {tree.children?.map((ele) => (
                <div key={ele.id}>
                    <TreeView tree={ele} />
                </div>
            ))}
        </div>

    )

}



// <TreeView>  {/* Nivel 0 */}
//     <div key="id">...</div>       {/* key="id" */}
//     <div key="name">...</div>     {/* key="name" */}
//     <div key="children-0">        {/* key del hijo (nivel 1) */}
//         <TreeView>                  {/* Nivel 1 */}
//             <div key="id">...</div>   {/* key="id" (no colisiona con el del nivel 0) */}
//         </TreeView>
//     </div>
// </TreeView>