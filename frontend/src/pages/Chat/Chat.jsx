import ChatBox from "../../Components/ChatBox";
import LeftSidebar from "../../Components/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar";

export default function Chat() {
    return (
        <div className="chat min-h-screen bg-gradient-to-bl from-blue-400 to-purple-400 grid place-items-center">
            <div className="chatContainer w-95p max-w-1000px h-75vh bg-aliceblue grid grid-cols-[1fr_2fr_1fr]">
                <LeftSidebar />
                <ChatBox />
                <RightSidebar />
            </div>
        </div>
    )
}