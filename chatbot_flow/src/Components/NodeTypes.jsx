import React, { useState,useEffect } from "react";
import { MdChat } from 'react-icons/md'
import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { nodeClicked, nodedeClicked } from '../Store/NodeSlice';
import { useDispatch } from "react-redux";

const NodeTypes = () => {
    const dispatch = useDispatch();
    const cur_Node = useSelector((state) => { return state.node.nodes })

    const backToNodeTypes = () => {
        dispatch(nodedeClicked())
    }

    const saveMessage = (val) => {
        let node = { node_id: cur_Node.node_id, message: val };
        dispatch(nodeClicked(node));
    };

    const handledragStart = (e, type) =>                 
    {
        console.log(type)
        e.dataTransfer.setData('nodeType', type)
    }


    return (
        <div className="w-full h-full ">
            {cur_Node ? <div className="pb-2 w-full border-1 border-gray-200   flex justify-center items-center flex-wrap">
                <div className=" w-full h-6 border-1 border-gray-200 flex justify-start text-[10px] font-semibold items-center flex-wrap">
                    <AiOutlineArrowLeft onClick={() => backToNodeTypes()} className="w-5 "></AiOutlineArrowLeft>

                    <p className="w-50 flex justify-center items-center">Message</p> </div>
                <div className="p-3 w-full h-7  flex justify-start text-[10px] disabled:opacity-50 " disabled={true}> Text</div>

                <div className=" w-full flex h-15 justify-center" >
                    <input type="text" className="m-1 border-1 w-full border-1 border-gray-200 text-[9px] pb-7 pl-2" onChange={(e) => { saveMessage(e.target.value) }} value={cur_Node?.message || ""}  placeholder="Please Enter Message" />
                </div>
            </div> :
                <div draggable onDragStart={(e) => { handledragStart(e, 'Message') }} className="cursor-move m-3 w-26 h-12 border border-blue-800 rounded flex justify-center items-center flex-wrap">
                    <div className="pt-3 w-full flex justify-center"> <MdChat className="text-blue-800 text-[15px]"></MdChat></div>
                    <div className=" w-full flex justify-center" ><p className="text-blue-800 text-[9px]">Message</p></div>
                </div>
            }

        </div>
    )
}

export default NodeTypes;