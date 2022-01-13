import { MdHome, MdViewCarousel, MdPerson } from "react-icons/md";

const Nav = (): JSX.Element => {
  return (
    <nav className="my-8">
      <ul className="flex flex-col space-y-4">
        {/* start list item */}
        <li className="nav-link">
          <i className="my-auto">
            <MdHome />
          </i>
          <span className="ml-2">Home</span>
        </li>
        {/* end list item */}
        {/* start list item */}
        <li className="nav-link">
          <i className="my-auto">
            <MdViewCarousel />
          </i>
          <span className="ml-2">Projects</span>
        </li>
        {/* end list item */}
        {/* start list item */}
        <li className="nav-link">
          <i className="my-auto">
            <MdPerson />
          </i>
          <span className="ml-2">About</span>
        </li>
        {/* end list item */}
      </ul>
    </nav>
  );
};

export default Nav;
