'use client'
import { motion } from 'framer-motion'
import React from 'react'

type MotionSectionPropsType = {
    children: React.ReactNode ,
    className: string
}

const MotionSection = ({children, className}: MotionSectionPropsType) => {
  return (
    <motion.section className={className}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    viewport={{margin: `-601px`}}
    >{children}</motion.section>
  )
}

export default MotionSection