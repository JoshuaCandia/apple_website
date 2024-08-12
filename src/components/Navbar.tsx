import { appleImg, bagImg, hamburgerImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(
    window.innerWidth < 768 ? true : false
  );

  const handleShowHamburger = () => {
    if (window.innerWidth < 1024) {
      setShowHamburger(true);
    } else {
      setShowHamburger(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleShowHamburger);

    return () => {
      window.removeEventListener("resize", handleShowHamburger);
    };
  }, []);

  return (
    <header className="w-full py-3.5 sm:px-10 px-5 flex justify-evenly items-center">
      <nav className="flex justify-center items-center gap-3.5 w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={12} height={18} />
        <div className="flex justify-center max-lg:hidden">
          {navLists.map((nav) => (
            <a
              className=" px-5 text-xs text-white/70 hover:text-white transition-all"
              key={nav}
              href={`
                /${nav.toLowerCase().replace(/ /g, "-")}
              `}
            >
              {nav}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-7 max-sm:justify-end max-sm:items-center max-sm:flex-1">
          <img src={searchImg} alt="search" width={14} height={18} />
          <img src={bagImg} alt="bag" width={14} height={18} />
          {showHamburger && (
            <img src={hamburgerImg} alt="bag" width={14} height={18} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
