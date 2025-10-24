import React from "react";
import defaultAvatar from "/assets/default.jpg";
import { formatTimestamp } from "../utils/formatTimestamp";
import { RiSendPlaneFill } from "react-icons/ri";


const Chatbox = () => {
    return (
        <section className="flex flex-col items-start justify-start h-screen w-[100%] background-image">
            <header className="border-b border-gray-400 w-[100%} h-[70px] md:h-fit p-4 bg-white">
                <main className="flex items-center gap-3">
                    <span>
                        <img src={defaultAvatar} className="w-11 h-11 object-cover rounded-full" alt="" />


                    </span>
                    <span>
                        <h3 className="font-semibold text-[#2A3D39] text-lg">Chat app user</h3>
                        <p className="font-light text-[#2A3D39] text-sm">@chatfrik</p>
                    </span>
                </main>
            </header>
            <main className="relative h-[100vh] w-[100%] flex flex-col justify-between">
                <section className="px-3 pt-5 b-20 lg:pb-10">
                    <div className="overflo-auto h-[80vh]">
                        <div className="flex flex-col items-end">
                            <span className="flex gap-">
                                <div className="h-auto">
                                    <div className="flex items-center bg-white justify-center p-6 rounded-lg shadow-sm">
                                        <h4 className="font-medium text-[17px] text-gray-800 w-full break-words">Hey Friend</h4>
                                    </div>
                                    <p className="text-gray-400 text-sx text-right mt-3">7:45pm</p>

                                </div>

                            </span>
                            <span className="flex gap-3 w-[40%] h-auto ms-10">
                                <img src={defaultAvatar} className="h-11 w-11 object-cover rounded-full" alt="" />
                                <div>
                                    <div className="flex items-center bg-white justify-center p-6 rounded-lg shadow-sm">
                                        <h4>Chatapp user</h4>

                                    </div>
                                    <p className="text-gray-400 text-sx mt-3">9:00am</p>
                                </div>
                            </span>
                            

                        </div>

                    </div>

                </section>
                <div className="sticky lg:bottom-0 bottom-[60px] p-3 h-fit w-[100%]">
                    <form action="" className="flex items-center bg-white h-[45px] w-[100%] px-2 rounded-lg relative shadow-lg">
                        <input className="h-full text-[#2A3D39] outline-none text-[16px] pl-3 pr-[50px] rounded-lg w-[100%]" type="text" placeholder="Write your message..." />
                        <button className="flex items-center justify-center absolute right-3 p-2 rounded-full bg-[#D9f2ed] hover:bg-[#c8eae3]">
                            <RiSendPlaneFill color="#01AA85"/>
                        </button>

                    </form>
                </div>

            </main>
        </section>
    )
}

export default Chatbox;