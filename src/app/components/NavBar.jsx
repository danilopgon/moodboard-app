import Link from "next/link";
import SwitchTheme from "./SwitchTheme";

const NavBar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://danilopgon.com/"
                rel="noopener noreferrer"
              >
                Sobre mí
              </a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          That&apos;s a mood!
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <a href="https://danilopgon.com/">Sobre mí</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <SwitchTheme />
      </div>
    </div>
  );
};

export default NavBar;
