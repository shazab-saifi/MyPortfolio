import Button from "./Button"

const Navbar = () => {
    return (
        <nav className="flex py-4 justify-between">
            <div style={{ fontFamily: 'Monoton', fontSize: '32px' }}>S</div>
            <div className="flex space-x-6 text-sm items-center">
                <div className="space-x-4 hidden sm:block">
                    <span className="cursor-pointer active:text-gray-400">About me</span>
                    <span className="cursor-pointer active:text-gray-400">Skills</span>
                    <span className="cursor-pointer active:text-gray-400">My projects</span>
                    <span className="cursor-pointer active:text-gray-400">Experience</span>
                </div>
                <Button children="Get in touch" />
            </div>
        </nav>
    )
}

export default Navbar