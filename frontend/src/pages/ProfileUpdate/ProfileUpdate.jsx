import { useState } from "react";
import assets from "../../assets/assets";

export default function ProfileUpdate() {

    const [image, setImage] = useState(false)

    return (
        <div className="profile min-h-screen bg-[url('/background.png')] bg-cover bg-no-repeat flex items-center justify-center">
            
            <div className="profileContainer bg-white flex items-center justify-between min-w-700px rounded-lg">
                
                <form className="flex flex-col gap-5 p-10">
                    <h3 className="font-semibold">Profile details</h3>
                    <label className="flex items-center gap-2.5 text-gray-800 cursor-pointer" htmlFor="avatar">
                        <input  
                        onChange={(e)=>setImage(e.target.files[0])}
                        className="" 
                        type="file" 
                        id="avatar" 
                        accept=".png, .jpg, .jpeg" hidden />
                        <img className="w-12 border rounded-full" src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="Upload profile image" />
                        upload profile image
                    </label>
                    
                    <input className="border p-2.5 min-w-300px outline-sky-600" type="text" placeholder="your name" required />
                    <textarea className="border p-2.5 min-w-300px outline-sky-600" placeholder="Write a bio." required></textarea>
                    <button className="borde-none text-white bg-sky-500 hover:bg-sky-600 p-2 text-sm cursor-pointer" type="submit">Save</button>
                </form>
                
                <img className="max-w-40 border my-5 mx-auto rounded-full" src={image ? URL.createObjectURL(image) : assets.logo_icon} alt="" />
            
            </div>
        </div>
    )
}
