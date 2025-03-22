import React from 'react'
import { BackgroundGradientAnimation } from './Gradient'
import { FlipWords } from './FlipWords';

const BackgroundGradient = () => {
    const words = ['design', 'code'];
    const words2 = ['developer', 'designer'];
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex justify-center text-white items-center font-bold px-4 pointer-events-none text-3xl md:text-4xl lg:text-7xl">
                <p className="w-full text-4xl bg-clip-text p-8 text-transparent text-center drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    I&apos;m a <FlipWords words={words2} /> who can <FlipWords words={words} />
                </p>
            </div>
        </BackgroundGradientAnimation>
    )
}

export default BackgroundGradient