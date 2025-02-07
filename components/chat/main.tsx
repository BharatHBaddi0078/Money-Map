"use client";

import Image from "next/image"
import { useContext } from "react"
import { text } from "stream/consumers";
import { ModeToggle } from "../modeToggle";
import { Context } from "../context";
import { Card } from "../ui/card";

const Main = () => {
  //@ts-ignore
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input,load} = useContext(Context);
  return (
    <div className="dark:bg-dark flex-1 min-h-screen pb-[15vh] relative">
        <div className="max-w-[900px] m-auto">
        {!showResult? <>
            <div className="my-[50px] mx-0 text-[56px] font-[500] p-[20px]">
                <p  ><span className="span">Hello, Rahul.</span></p>
                <p className="" >How can I help you today?</p>
            </div>
            <div className="dark:bg-dark grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-[20px]  ">
                <Card className="h-[200px] p-[15px] dark:bg-medium relative cursor-pointer dark:hover:bg-dark ">
                    <p className="text-[17px]">Suggest beautiful place to see on an upcoming road trip</p>
                    <Image
                        className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px] "
                        src={"/compass.svg"}
                        alt=""
                        width={30}
                        height={30}
                    />
                </Card>
                <Card className="h-[200px] p-[15px] dark:bg-medium relative cursor-pointer dark:hover:bg-dark ">
                    <p className="text-[17px]">Suggest beautiful place to see on an upcoming road trip</p>
                    <Image
                        className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px] "
                        src={"/compass.svg"}
                        alt=""
                        width={30}
                        height={30}
                    />
                </Card>
                <Card className="h-[200px] p-[15px] dark:bg-medium relative cursor-pointer dark:hover:bg-dark ">
                    <p className="text-[17px]">Suggest beautiful place to see on an upcoming road trip</p>
                    <Image
                        className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px] "
                        src={"/compass.svg"}
                        alt=""
                        width={30}
                        height={30}
                    />
                </Card>
                <Card className="h-[200px] p-[15px] dark:bg-medium relative cursor-pointer dark:hover:bg-dark ">
                    <p className="text-[17px]">Suggest beautiful place to see on an upcoming road trip</p>
                    <Image
                        className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px] "
                        src={"/compass.svg"}
                        alt=""
                        width={30}
                        height={30}
                    />
                </Card>
            </div>
        </>: <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll result ">
            <div className=" my-[40px] mx-0  flex items-center gap-5 "> 
                <Image
                    className=" w-10 rounded-[50%] "
                    src={"/user.svg"}
                    alt=""
                    width={30}
                    height={30}
                />
                <p className="dark:text-white" >{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5 ">
                <Image
                    className={`${loading?'animate-spin':''} `}
                    src={"/GEM.svg"}
                    alt=""
                    width={40}
                    height={40}
                />
                {loading? <div className="w-[100%] flex flex-col gap-2.5 ">
                    <hr  className=" rounded-[4px] border-none bg-[#f6f7f8] loaderHr bg-[length:800px_50px] h-5 animate-[loader_3s_linear_infinite] " />
                    <hr  className=" rounded-[4px] border-none bg-[#f6f7f8] loaderHr bg-[length:800px_50px] h-5 animate-[loader_3s_linear_infinite] " />
                    <hr  className=" rounded-[4px] border-none bg-[#f6f7f8] loaderHr bg-[length:800px_50px] h-5 animate-[loader_3s_linear_infinite] " />
                </div>: <p className=" dark:text-white text-[17px] font-[300px] leading-[1.8] " dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                
            </div>
        </div> }
            
            <div className="absolute bottom-0 w-[100%] max-w-[900px] py-0 px-5 m-auto  ">
                <Card className="flex items-center justify-between gap-5 py-[10px] px-5 rounded-[50px]">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} className="outline-none p-2 text-lg flex-1 rounded-md" type="text" placeholder="Enter a prompt here... " />
                    <div className="flex items-center gap-[15px] " >
                        <Image 
                            className="cursor-pointer w-[24px] "
                            src={"/gallery.svg"}
                            alt=""
                            width={30}
                            height={30}
                        />
                        <Image 
                            className="cursor-pointer w-[24px] "
                            src={"/mic.svg"}
                            alt=""
                            width={30}
                            height={30}
                        />
                        <Image 
                            onClick={()=>onSent()}
                            className="cursor-pointer w-[24px] "
                            src={"/send.svg"}
                            alt=""
                            width={30}
                            height={30}
                        />
                    </div>
                </Card>
                <p className="dark:text-white font-light text-[13px] my-[15px] mx-auto text-center ">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
