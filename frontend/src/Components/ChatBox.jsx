import assets from "../assets/assets.js"

export default function ChatBox() {
    return (
        <div className="chat-box flex flex-col h-75vh relative bg-white">
            <div className="chatUser px-2.5 py-4 flex items-center gap-2.5 border-b border-neutral-300 ">
                <img className="w-8 rounded-full" src={assets.profile_img} alt="" />
                <p className="flex flex-1 items-center gap-1">Richard Sanford <img className="w-3 rounded-full" src={assets.green_dot} alt="" /></p>
                <img src={assets.help_icon} className="help w-4 rounded-full" alt="" />
            </div>

            <div className="chatMessage h-calc-full-minus-70 pb-16 overflow-y-scroll flex flex-col-reverse h-full">
                
                <div className="sendersMessage flex items-end justify-end gap-1 pt-2 pr-2">
                    <p className="text-white bg-sky-500 p-2 max-w-52 text-sm mb-7 mr-1 rounded-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="">
                        <img className="w-7 rounded-full m-1" src={assets.profile_img} alt="" />
                        <p className="text-xs text-center">2:30 PM</p>
                    </div>
                </div>
                
                <div className="sendersMessage flex items-end justify-end gap-1 p-2">
                   <img className="msgImage max-w-56 mb-7 rounded-lg" src={assets.pic1} alt="" />
                    <div className="">
                        <img className="w-7 rounded-full m-1" src={assets.profile_img} alt="" />
                        <p className="text-xs text-center">2:30 PM</p>
                    </div>
                </div>
                
                <div className="receiversMessage flex items-end justify-end gap-1 p-2 flex-row-reverse">
                    <p className="text-white bg-sky-500 p-2 max-w-52 text-sm mb-7  rounded-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        <img className="w-7 rounded-full " src={assets.profile_img} alt="" />
                        <p className="text-xs text-center">2:30 PM</p>
                    </div>
                </div>
            </div>

            <div className="chat-input flex items-center gap-3 px-2.5 py-4 bg-white absolute bottom-0 left-0 right-0">
                <input className="flex-1 border-none outline-none" type="text" placeholder="send a message" />
                <input type="file" id="image" accept="/image/png, image/jpeg" hidden />
                <label className="flex " htmlFor="image">
                    <img className="w-6 cursor-pointer " src={assets.gallery_icon} alt="" />
                </label>
                <img className="w-8 cursor-pointer" src={assets.send_button} alt="" />
            </div>
        </div>
    )
}