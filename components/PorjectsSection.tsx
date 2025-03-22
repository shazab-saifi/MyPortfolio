import React from 'react'
import { LayoutGrid } from './LayoutGrid';
import Link from 'next/link';

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                WireSketch
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                It's a digital canvas website where people can come and start drawing shapes and visualize their ideas on the canvas. I'm still working on this; it's in development.
            </p>
            <Link href="https://www.figma.com/design/ktXDLtIUlDb76tnnZaTATB/WireSketch?node-id=18-80&t=A8hdx4ErYZ9Vs1wJ-1">
                <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
                    View Design
                </button>
            </Link>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Memeverse
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A social platform for memes where people can create, share, like, and more—just like a social website. It's a group project, and it's in development. I designed the entire prototype, I Made the sidebar in development.
            </p>
            <Link href="https://www.figma.com/design/JLPg9XdjFLbVG7lA0mlbuO/LetterGen?node-id=0-1&t=A8hdx4ErYZ9Vs1wJ-1">
                <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
                    View Design
                </button>
            </Link>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                LetterGen
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                It's an AI-powered cover letter generator. Users can provide information about themselves and the job they're applying for, and the AI will generate a cover letter based on the provided details. The user can then download the cover letter in PDF format. It's a group project, and I designed the entire prototype.
            </p>
            <div className='space-x-4'>
                <Link href="https://www.figma.com/design/JLPg9XdjFLbVG7lA0mlbuO/LetterGen?node-id=0-1&t=A8hdx4ErYZ9Vs1wJ-1">
                    <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
                        View Design
                    </button>
                </Link>
                <Link href="https://lettergen.kreyon.in/">
                    <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
                        View Website
                    </button>
                </Link>
            </div>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Periskope
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                It was an assignment for an internship at Periskope. It's a platform where users can create chat rooms and send messages to each other. It only includes the features that were specified in the assignment.
            </p>
            <Link href="https://periskopeassignment.vercel.app/">
                <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer hover:bg-gray-200 active:bg-gray-300">
                    View Website
                </button>
            </Link>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail:
            "https://i.postimg.cc/SKpkwF1Q/Screenshot-from-2025-03-22-11-41-42.png",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://i.postimg.cc/ryvVSrGt/Screenshot-from-2025-03-22-11-49-28.png",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "https://i.postimg.cc/1tkkNpxm/Screenshot-from-2025-03-22-11-52-50.png",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            "https://i.postimg.cc/gcBdG6tT/Screenshot-from-2025-03-22-11-45-24.png",
    },
];


const PorjectsSection = () => {
    return (
        <div className="h-[1000px] py-20 w-full flex justify-center">
            <LayoutGrid cards={cards} />
        </div>
    )
}

export default PorjectsSection