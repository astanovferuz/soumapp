import React, {useState} from "react";
import {uniq} from "lodash";
import { Badge } from 'reactstrap';
import { flattenMyTree } from "../helpers/flattenTreeHelper";
import { TreeNode } from "./TreeNode";


const Tree = ({data}) => {


    const [treeData, setTreeData] = useState(data);
    const [selected, setSelected] = useState([]);

    const handleClick = (item, parent) => {
        item.isOpen = !item.isOpen;
        setTreeData([...treeData])
    }
    const handleCheckbox = (item, parent) => {
        item.isSelected = !item.isSelected;
        item.isOpen = true;
        const flatNode = flattenMyTree(item.children);


        if(!selected.includes(item.path)){          //checking weather array contain the id
            selected.push(item.path);               //adding to array because value doesnt exists
            selected.push(...flatNode);               //adding to array because value doesnt exists
        }else{
            flatNode.forEach(selectedItem => selected.splice(selected.indexOf(selectedItem.path), 1))
            selected.splice(selected.indexOf(item.path), 1)
        };

        setSelected([...uniq(selected)])

        setTreeData([...treeData])
    }

    const renderTreeNodes = (nodes, parent = {}) => {
        return nodes.map((node, index) => {

            const key = node.name;
            const children = (node.children.length > 0 && node.isOpen) ? renderTreeNodes(node.children, node) : null;
            
            return (

                <TreeNode
                    checked={selected.includes(node.path)}
                    onClick={() => {handleClick(node)}}
                    onCheckboxChange={() => {handleCheckbox(node)}}
                    key={key}
                    value={`${node.name}`}
                    isOpen={node.isOpen}
                >
                    {children}
                </TreeNode>
                )
            }
        )
    }

    return (
        <div className="treeNode">
            <div className="tree">{renderTreeNodes(treeData)}</div>
            <div className="tree-stats">
                {selected.map((x, index) =>{
                    const item = x.split('/')
                    return (
                        <Badge color="info" key={index} className='tree-label--item'>{item[item.length-1]}</Badge>
                    )
                })}
            </div>
        </div>
    )
}

export default Tree;