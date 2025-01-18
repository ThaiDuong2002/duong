import MaxWidthWrapper from "../max-width-wrapper";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 gap-5 items-center justify-start border-b border-zinc-200">
          
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
