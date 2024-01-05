import tree from "../tree.png";
import '../App.css'
import studentData from "../studentskills.json";
import {useState} from "react";
import data from "../db.json";

export default function Header() {

    return (
        <div>
            <div className="flex-container2">
                <div className='flex-items'>
                    <img src={tree}
                         alt="Tree"></img>
                </div>
                <div className='flex-items Header'>
                    <div>Skilltree</div>
                </div>
                <div className='flex-items'>
                    <img src={tree}
                         alt="Tree"></img>
                </div>
            </div>
        </div>

    )
}