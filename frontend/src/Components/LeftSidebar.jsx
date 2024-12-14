import assets from "../assets/assets";

export default function LeftSidebar() {
    return (
        <div className="leftsidebar text-white bg-sky-950 h-75vh">
            <div className="leftsidebarTop p-5">
                <div className="nav flex justify-between items-center">
                    <img 
                        className="logo max-w-140px"
                        src={assets.logo} alt="" />
                    <div className="menu relative py-2.5 group"> 
                        <img className="h-5 opacity-60 cursor-pointer" src={assets.menu_icon} alt="" />

                        <div className="sub-menu absolute top-full w-32 p-5 right-2 rounded bg-white text-black group-hover:block hidden">
                            <p className="cursor-pointer font-semibold">Edit Profile</p>
                            <hr className="border border-neutral-200 bg-neutral-800 my-2 h-1px" />
                            <p className="cursor-pointer font-semibold">Logout</p>
                        </div>
                    </div>
                </div>
                <div className="search bg-sky-600 flex items-center gap-2.5 px-2.5 py-3 mt-5">
                    <img className="w-4 " src={assets.search_icon} alt="" />
                    <input className="bg-transparent border-none outline-none text-white text-sm" type="text" placeholder="Search here.." />
                </div>
            </div>
            <div className="list flex flex-col h-70p overflow-y-scroll">
                {
                    Array(12).fill("").map((item, index) => (
                        <div key={index} className="friends flex items-center gap-2.5 px-5 py-3 cursor-pointer text-sm hover:bg-sky-600">
                            <img className="w-8 aspect-w-1 aspect-h-1 rounded-full" src={assets.profile_img} alt="" />
                            <div className="flex flex-col">
                                <p>Richard Sanford</p>
                                <span className="text-neutral-400 text-xs ">Hello, How are you?</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
