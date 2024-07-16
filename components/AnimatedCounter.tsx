"use client"
import CountUp from "react-countup"
//use the react-countup to animate the balnce\

const AnimatedCounter = ({amount}: {amount: number}) => {
    return(
         <div className="w-full">
            <CountUp 
            duration={2.75}
            decimals={2}
            end={amount} 
            decimal="," 
            prefix="$"
             />
         </div>
    )
}

export default AnimatedCounter
