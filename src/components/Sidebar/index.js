import { FaSearch } from "react-icons/fa";
import { LuMonitorStop } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineBlock } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import "./index.css";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div>
                <img
                    alt="logo"
                    src="data:image/jpeg;base64,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"
                />
            </div>
            <div className="icon-container">
                <button>
                    <FaSearch />
                </button>
                <button>
                    <LuMonitorStop />
                </button>
                <button>
                    <FaRegCircleQuestion />
                </button>
                <button>
                    <FaCalendarAlt />
                </button>
                <button>
                    <AiOutlineBlock />
                </button>
                <button>
                    <FaDollarSign />
                </button>
                <button>
                    <FaHeadphonesAlt />
                </button>
            </div>
            <div>
                <button>
                    <IoSettingsSharp className="i" />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
