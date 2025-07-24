import React, { act } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
    nodes: null,
    allNodes: [],
    allEdges: []
}

const NodeSlice = createSlice({
    name: 'node',
    initialState,
    reducers:
    {
        nodeClicked: (state, action) => {
            if (!state.nodes) {
                state.nodes = {
                    node_id: action.payload.node_id,
                    message: action.payload.message
                }
            }
            else {
                state.nodes = null,
                    state.nodes = {
                        node_id: action.payload.node_id,
                        message: action.payload.message
                    }
            }
        },
        nodedeClicked: (state, action) => {
            if (state.nodes) {
                state.nodes = null
            }
        },
        addNodesEdges: (state, action) => {
            state.allNodes = action.payload.nodes;
            state.allEdges = action.payload.edges;
            console.log(state.allEdges)
        }





    }

})

export const { nodeClicked, addNodesEdges, nodedeClicked } = NodeSlice.actions;
export default NodeSlice.reducer;