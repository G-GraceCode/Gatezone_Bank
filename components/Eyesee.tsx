import React, {useState} from 'react'
import Image from "next/image"

type EyeType = {
    see: boolean;
    handleEye: () => void;
}

const Eyesee = ({see, handleEye}: EyeType) => {

    return(
        <div className="absolute flex items-center justify-center right-0 bottom-0 size-11 z-10 bg-[#fefefe] round-r-xl border border-solid border-gray-200 cursor-pointer" onClick = {() => handleEye()}><Image 
                src={see ? "/icons/eye-open.svg" : "/icons/eye-closed.svg"}
                width={24}
                height={24}
                alt={'eye-icon'}
                className="fill-[#000] w-6"
            /></div>
    )
}

export default Eyesee