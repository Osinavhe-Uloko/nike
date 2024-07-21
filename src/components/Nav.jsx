import { hamburger, cross } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} onClick={() => setToggleMenu(true)}/>
          
          {toggleMenu && (
            <div classname='fixed top-0 left-0 w-full h-lvh transition ease flex flex-col duration-[0.5s] justify-center items-center slide-bottom'>
              <img src={cross} alt='cross icon' width={25} height={25} className="bg-slate-800 absolute top-5 right-5" onClick={() => setToggleMenu(false)}/>
              <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden list-none'>
                {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                  >
                    {item.label}
                  </a>
                </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
