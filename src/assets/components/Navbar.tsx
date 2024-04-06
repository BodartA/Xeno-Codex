import codexImage from '../images/codex.png'

const Navbar = () => {

    const Links = [
        { name: "Automatons", link: "/" },
        { name: "Termitides", link: "/" },
    ]

    return (
        <div className=' bg-yellow-400 shadow-md w-full fixed left-0 top-0'>

            <div className='font-mono text-zinc-800 md:px-10 py-4 px-7 md:flex justify-between items-center'>

                <div className='flex text-4xl items-center gap-2'>
                    <img src={codexImage} className='w-10 h-10'></img>
                    <span className=' font-bold'>Xeno Codex</span>
                </div>

                <ul className='md:flex pl-9 md:pl-0'>
                    {
                        Links.map(link => (
                            <li className=' font-semibold my-5 md:my-0 md:ml-8'>
                                <a href='/'>{link.name}</a>
                            </li>))
                    }
                    <button className='btn bg-zinc-800 text-yellow-400 py-1 px-3 md:ml-8 rounded md:static'>Mon Compte</button>
                </ul>

            </div>

        </div>
    );
};

export default Navbar;