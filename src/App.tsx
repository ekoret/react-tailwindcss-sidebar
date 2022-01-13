import { useState } from "react";
import FloatingMenuButton from "./components/FloatingMenuButton";
import Sidebar from "./components/Sidebar";

function App(): JSX.Element {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="App h-full bg-gray-900 text-white font-poppins">
      <FloatingMenuButton
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />
      <Sidebar sidebarActive={sidebarActive} />
      <div className="text-center">
        <h1 className="text-4xl pt-16 font-bold">Hello World.</h1>
        <p>This is a simple example of a sidebar menu with transitions.</p>
        <div className="py-16 place-items-center gap-8 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 max-w-screen-md mx-auto">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <div className="w-3/4 pb-8 mx-auto md:max-w-[800px]">
        <h1 className="text-4xl pt-16 font-bold">More Content.</h1>
        <p>Random content to make the page scroll.</p>
        <p>
          Fugiat pariatur sit consectetur reprehenderit adipisicing amet esse
          officia eu in sint ex sint sit. Fugiat aute aliquip qui ad non sunt
          deserunt eu sit dolore. Nisi velit cupidatat consequat est. Proident
          officia dolore esse irure consectetur nisi dolore non sunt ullamco
          cupidatat elit pariatur. Quis pariatur laborum id velit aute eu
          adipisicing. Est deserunt deserunt ullamco culpa. Occaecat commodo
          quis tempor enim sit aute non culpa pariatur anim esse. Adipisicing
          occaecat duis enim veniam qui voluptate consequat elit non adipisicing
          sint eu. Non qui ea dolor labore amet irure sit tempor non est
          exercitation qui duis. Ut deserunt eu amet laborum anim irure amet
          culpa quis Lorem minim dolore eu. Elit duis aute exercitation id
          excepteur sint non. Cillum exercitation sint est minim magna ut
          laboris duis occaecat. Quis nulla veniam elit nulla velit consequat
          mollit. Aliqua magna quis elit eiusmod culpa aliquip proident culpa
          consequat ipsum Lorem cillum anim. Nostrud exercitation proident
          proident dolore dolor. Sit officia pariatur voluptate officia officia
          laboris ullamco veniam deserunt dolor ullamco magna adipisicing.
          Nostrud magna ad labore fugiat minim aliqua sit amet cillum qui
          incididunt laboris laboris ea. Sint mollit velit et ipsum ipsum mollit
          ex excepteur Lorem ullamco elit. Consectetur esse voluptate pariatur
          exercitation est non labore ea ex nisi ipsum occaecat. Ut elit
          incididunt dolore pariatur aute in fugiat pariatur fugiat mollit
          laborum irure tempor velit.
        </p>
      </div>
    </div>
  );
}

export default App;
