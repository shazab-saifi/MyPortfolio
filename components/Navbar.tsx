import Button from "./Button"

const Navbar = () => {
    return (
        <nav className="flex py-4 justify-between">
            <div style={{ fontFamily: 'Monoton', fontSize: '32px' }}>S</div>
            <div className="flex space-x-6 text-sm">
                <div>
                    <span className="cursor-pointer active:text-gray-400">About me</span><br />
                    <span className="cursor-pointer active:text-gray-400">Skills</span><br />
                    <span className="cursor-pointer active:text-gray-400">My projects</span><br />
                    <span className="cursor-pointer active:text-gray-400">Experience</span>
                </div>
                <Button />
            </div>

        </nav>
    )
}

export default Navbar