// Nodes.jsx
import "reactflow/dist/style.css";
import { useDispatch} from "react-redux";
import { nodeClicked } from "../../Store/NodeSlice";
import { MdChat } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Handle, Position } from "reactflow";

const Typeone = ({ id, data }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(nodeClicked({  node_id: id,message:data.message }));
    }

    return (
        <div className="w-40 h-20 bg-white shadow-md rounded-md relative border border-gray-300">
            <Handle
                type="target"
                position={Position.Left}
                id="left"
                style={{ background: "#555", width: 10, height: 10, borderRadius: "50%" }}
            />
            <div className="relative w-full h-1/3 bg-[#DFFCF0]">
                <MdChat className="text-[10px] absolute left-1 top-1" />
                <p className="text-[10px] absolute left-5 font-semibold">Send Message</p>
                <FaWhatsapp className="text-blue-800 text-[12px] absolute right-1 top-0.5" />
            </div>
            <div className="relative w-full h-2/3 bg-white" onClick={handleClick}>
                <p className="absolute top-1 left-1 text-xs font-semibold">{data.message}</p>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="right"
                style={{ background: "#555", width: 10, height: 10, borderRadius: "50%" }}
            />
        </div>
    );
};

export default Typeone;