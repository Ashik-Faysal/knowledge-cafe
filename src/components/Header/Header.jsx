import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className=" bg-stone-400 rounded-xl text-center p-4">
      <div className="md:flex justify-between">
        <div>
          <a className="btn btn-ghost normal-case text-3xl font-bold mb-4">
            Knowledge Cafe
          </a>
        </div>
        <div className="md:flex">
          <div>
            <a
              className="btn btn-link text-black hover:bg-stone-600"
              href="#contact"
            >
              Contact Us
            </a>
            <a
              className="btn btn-link mx-1 text-black hover:bg-stone-600"
              href="#about"
            >
              About Us
            </a>
          </div>
          <div>
            <input
              type="text"
              placeholder="search"
              className="input input-bordered w-36 mr-1"
            />
          </div>
          <div>
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

