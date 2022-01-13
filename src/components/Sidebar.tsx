import Nav from "./Nav";

interface Props {
  sidebarActive: boolean;
}

const Sidebar = ({ sidebarActive }: Props): JSX.Element => {
  console.log(sidebarActive);

  const sidebarClasses = sidebarActive
    ? "fixed opacity-1 h-full w-[170px] md:w-[300px] bg-gray-700 shadow-lg px-2 py-4 flex flex-col transition-all ease-in-out duration-500"
    : "fixed opacity-0 w-0 h-full flex flex-col pl-2 py-4 pointer-events-none transition-all ease-in-out duration-500";

  return (
    <div className={sidebarClasses}>
      <span className="text-xl font-bold md:truncate">TailwindCSS Sidebar</span>
      <Nav />
      <footer className="text-xs mt-auto">
        <span className="truncate">Made by ekoret</span>
      </footer>
    </div>
  );
};

export default Sidebar;
