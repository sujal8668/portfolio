"use client"
import {motion} from "framer-motion"
const TestPage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <motion.div className="w-32 h-32 rounded"
            initial={{x:-100}}
            animate={{x:100,opacity:0.5}}
            transition={{duration:4}}
            ></motion.div>
        </div>
    )
}

export default TestPage