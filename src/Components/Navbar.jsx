export const Navbar = ({title}) => {
    return(
        <nav className="bg-slate-900 p-8">
            <div className="container mx-8 sm:px-4">
                <a href="/" className="text-white text-xl font-bold">{title}</a>
            </div>
        </nav>
    );
}