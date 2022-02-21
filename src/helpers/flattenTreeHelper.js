import {concat, flatMap, union} from "lodash";

export const flattenMyTree = (tree) => {
    function recurse(nodes, path) {
        return flatMap(nodes, function(node) {
            var newPath = union(path, [node.path]);
            return concat([
                    newPath[newPath.length - 1]
                ],
                recurse(node.children, newPath)
            );
        });
    }
    return recurse(tree);
}