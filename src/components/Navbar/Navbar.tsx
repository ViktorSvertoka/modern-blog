import Link from "next/link";

const navLinks = [
  { id: 1, href: "/about", label: "About" },
  { id: 4, href: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex gap-[20px]">
        {navLinks.map(({ id, href, label }) => (
          <Link
            key={id}
            href={href}
            className="text-black font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange]"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
