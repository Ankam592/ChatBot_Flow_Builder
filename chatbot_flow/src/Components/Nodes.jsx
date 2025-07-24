// Nodes.jsx
import React, { useState, useEffect } from "react";
import Typeone from "./NodeTypes/Typeone";
import ReactFlow, {
    Handle,
    Position,
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    addEdge,
    Background
} from "reactflow";
import "reactflow/dist/style.css";
import { useDispatch, useSelector } from "react-redux";
import {addNodesEdges } from "../Store/NodeSlice";

const nodeTypes = {
    custom: Typeone,
};

const Nodes = () => {
    const dispatch = useDispatch();
    const cur_node = useSelector((state) => state.node.nodes);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    useEffect(() => {
        dispatch(addNodesEdges({'nodes':nodes,'edges':edges}))
    }, [nodes,edges]);

    useEffect(() => {
        if (!cur_node?.node_id) return;
        setNodes((prevNodes) =>
            prevNodes.map((node) =>
                node.id === cur_node.node_id
                    ? {
                        ...node,
                        data: {
                            ...node.data,
                            message: cur_node?.message

                        },
                    }
                    : node
            )
        );
    }, [cur_node?.node_id, cur_node?.message]); 

    const onConnect = (connection) => setEdges((eds) => addEdge(connection, eds));

    const handleDrop = (e) => {
        e.preventDefault();
        const nodeType = e.dataTransfer.getData("nodeType");
        const rect = e.currentTarget.getBoundingClientRect();
        const position = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };

        const newNode = {
            id: Date.now().toString(),
            type: "custom",
            position,
            data: {
                message: "Click here to add message",
            },
        };
        setNodes((prev) => [...prev, newNode]);
        console.log("how many times ")
    };


    return (
        <ReactFlowProvider>
            <div
                className="w-full h-screen"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    fitView
                >
                    <Background />
                </ReactFlow>
            </div>
        </ReactFlowProvider>
    );
};

export default Nodes;
