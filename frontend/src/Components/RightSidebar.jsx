import assets from "../assets/assets";

export default function RightSidebar() {
    return (
        <div className="rightSidebar text-white bg-neutral-800 relative h-75vh overflow-y-scroll ">
            <div className="profile pt-15 text-center max-w-70p m-auto">
                <img className="w-28 h-28 rounded-full m-auto mt-8" src={assets.profile_img} alt="" />
                <h3 className="flex items-center text-lg justify-center gap-1 mx-1">Richard Sanford <img className="w-3 h-3" src={assets.green_dot} alt="" /> </h3>
                <p className="text-xs opacity-80">Hey, I am Richard Sanford using chat app.</p>
            </div>
            <hr className="text-neutral-800 m-3" />
            <div className="media px-3">
                <p className="opacity-80 text-sm">Media</p>
                <div className="max-h-44 overflow-y-scroll grid gap-1 mt-2 grid-cols-custom">
                    <img className="w-16 cursor-pointer rounded" src={assets.pic1} alt="" />
                    <img className="w-16 cursor-pointer rounded" src={assets.pic2} alt="" />
                    <img className="w-16 cursor-pointer rounded" src={assets.pic3} alt="" />
                    <img className="w-16 cursor-pointer rounded" src={assets.pic4} alt="" />
                    <img className="w-16 cursor-pointer rounded" src={assets.pic1} alt="" />
                    <img className="w-16 cursor-pointer rounded" src={assets.pic2} alt="" />
                </div>
            </div>
            <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-sky-600 text-white border-none text-xs font-light py-2.5 px-16 rounded-3xl cursor-pointer">Logout</button>
        </div>
    )
}