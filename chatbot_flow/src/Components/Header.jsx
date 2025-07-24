import React, { useEffect, useState } from "react";
import { Button } from "./Index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const nodes = useSelector((state) => { return state.node?.allNodes });
  const edges = useSelector((state) => { return state.node?.allEdges })
  const [show, setShow] = useState(false);
  const [connected, setConnected] = useState(true)
  const flow_status = connected ? 'Flow saved' : 'Cannot save Flow'

  const checkEdgesConnected = () => {
    let edgeArray = []
    edges.map((edge) => {
      edgeArray.push(edge.source)
      edgeArray.push(edge.target)
    })
    edgeArray = [...new Set(edgeArray)]

    nodes.map((node) => {
      if (!edgeArray.includes(node.id)) {
        setConnected(false)
      }
      else {
        setConnected(true)
      }
      setShow(true)
    })

  }
  return (
    <div className="relative flex justify-center flex-wrap items-center w-full h-10 bg-gray-200">
      <div className="absolute left-1 h-7 font-semibold ">ChatBot Flow Builder</div>
      {show && <div className=" h-7 bg-red-200 rounded-sm text-sm pt-1 p-1 "
      >{flow_status}</div>}
      <Button className='absolute right-20 w-25 h-7 border-1 border-blue-800 rounded-sm text-blue-800 text-[10px] font-semibold' placeHolder='Save Changes' onClick={() => checkEdgesConnected()}>
        Save Changes
      </Button>
    </div>
  )
}

export default Header;