
function Navbar(){

    return (
        <div className="navbar bg-base-100 shadow-lg px-4 lg:px-8">
            {/* logo */}
            <div className="flex-1">
                <a href="/" className="btn btn-ghost text-xl font-bold">
                Epic Robotics
                </a>
            </div>
            {/* Desktop Menu */}
            <div className="flex-none hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                <li><a href="#features">Características</a></li>
                <li><a href="#pricing">Precios</a></li>
                <li><a href="#testimonials">Testimonios</a></li>
                <li><a href="#faq">FAQ</a></li>
                </ul>
                <button className="btn btn-primary ml-4">Get Started</button>
            </div>
            {/* Mobile menu */}
            <div className="flex-none lg:hidden">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><button className="btn btn-primary btn-sm mt-2 w-full">Get Started</button></li>
                </ul>
                </div>
            </div>

        </div>
    )

}

export default Navbar;