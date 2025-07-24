# ChatBot_Flow_Builder

A visual, extensible chatbot‐flow builder built with React and React Flow. Drag, drop and connect nodes to define message sequences, conditions and end points. Includes live validation, auto‐layout and a properties sidebar for easy editing.

![Chatbot_reference_01](https://github.com/user-attachments/assets/48e19e33-c67e-4cd7-ad17-413b1351f289)
![Chatbot_reference_03](https://github.com/user-attachments/assets/4c4bb794-54b9-4a9f-b513-fc7469014f94)
![Chatbot_reference_02](https://github.com/user-attachments/assets/0ea21177-9d42-4d8e-9b32-5205e2e3d329)


## 🔗 Live Demo

https://chat-bot-flow-builder-9ewv.vercel.app/
 
## 🚀 Features

### Nodes
- **Start Node**: Marks the entry point of the flow.  
- **Message Node**: Displays a text message to the user.  
- **Conditional Path Node**: Branch your flow based on user input or other conditions, with dynamic handles for each case.  
- **End Node**: Terminates the chat flow.

### Sidebars
- **Node Library**: Drag‑and‑drop panel containing all available node types.As of now only one type(Typeone1) is added.but you can create other type component and just add it in the Nodes Component.
- **Properties Panel**: Replaces the node library when a node is selected; edit node text, labels and settings here.

### Flow Management
- **Validation**: Ensures your flow always has exactly one valid start node, at least one end node, and no unconnected required handles before saving.  
- **Auto‐Adjust**: Keeps nodes from overlapping by automatically repositioning them when added or moved. (Lines will stay where you draw them.)

## 💻 Tech Stack
- **Core:** React , Javascript
- **Visual Flow:** [React Flow](https://reactflow.dev/)  
- **State Management:** Redux Toolkit  
- **Styling:** UnoCSS & Vite  
- **Tooling:** ESLint, Prettier, Vite

## Process

 ChatBot Flow Builder – Code Overview (Brief)
Components:
1.Nodes.jsx  : Main canvas where nodes are dropped and displayed.Uses React Flow for managing nodes and connections.Handles node drop, update, and edge connections.
2.NodeTypes.jsx : 
Sidebar with two views:
Default: shows draggable "Send Message" node.
Edit Mode: shows input field to update message of selected node.
3.CustomNode.jsx
Represents each node UI on canvas.On click, updates Redux with selected node details.
4.Header.jsx
Contains "Save Changes" button.
On click, checks if all nodes are connected using Redux data.
5.NodeSlice.jsx : Redux slice managing:
Currently selected node
All nodes dropped
All edges created
Has actions like nodeClicked, nodeUpdated, and addNodesEdges.
