import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-stone-100 text-black">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Knowledge Care</a>
        </div>
              <div className="flex-none gap-2">
                  <ul>
                      <li className="btn btn-ghost">Contact us</li>
                      <li className="btn btn-ghost">About us</li>
                  </ul>
                  <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
