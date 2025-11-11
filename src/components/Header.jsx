import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="flex justify-between items-center py-4 px-4 lg:px-20"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0 ">
        Amirhosein
      </h1>
      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          COMPANY
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          FEATURES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          RESOURSEC
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          DOCS
        </a>
      </nav>
      <button className="hidden  md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 cursor-pointer z-50 hover:bg-white">
        SIGNIN
      </button>

      {/* Mobile Menu Button - Visible only on mobile */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50  cursor-pointer"
      >
        <i className="bx  bx-menu"></i>
      </button>

      {/* Mobile Menu - Hidden by default */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black/70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            COMPANY
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            FEATURES
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            RESOURSEC
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            DOCS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
