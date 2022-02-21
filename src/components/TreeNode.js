import React from "react"
import {Input } from 'reactstrap';
import { IoChevronDownSharp, IoChevronForward } from "react-icons/io5";

export const TreeNode = ({value, children, onClick, onCheckboxChange, checked, isOpen = false}) => {
    return (
        <ul className="nodeList">
            <li>
                <div className="nodeList--item">
                    {isOpen ? <IoChevronDownSharp /> : <IoChevronForward />}
                    <Input className="checkBoxInput" type="checkbox" checked={checked} onChange={onCheckboxChange}/>
                    <span className="nodeName" onClick={onClick}>
                        {value}
                    </span>
                </div>
                {children}
            </li>
        </ul>
    )
}