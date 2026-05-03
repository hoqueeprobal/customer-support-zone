import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-6">
      <div className="flex-1">
        <span className="md:text-xl font-bold select-none">
          CS — Ticket System
        </span>
      </div>

      <div className="hidden md:flex gap-6 items-center">
        <button className="hover:text-purple-600">Home</button>
        <button className="hover:text-purple-600">FAQ</button>
        <button className="hover:text-purple-600">Changelog</button>
        <button className="hover:text-purple-600">Blog</button>
        <button className="hover:text-purple-600">Download</button>
        <button className="hover:text-purple-600">Contact</button>
      </div>

      <div className="flex items-center">
        <button className="btn bg-gradient-to-r from-purple-600 to-indigo-800 text-white ml-4 hidden md:inline-flex">
          + New Ticket
        </button>
        <button
          className="btn btn-ghost btn-circle md:hidden ml-2"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <button>Home</button>
          <button>FAQ</button>
          <button>Changelog</button>
          <button>Blog</button>
          <button>Download</button>
          <button>Contact</button>

          <button className="btn bg-purple-600 text-white mt-2">
            + New Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
