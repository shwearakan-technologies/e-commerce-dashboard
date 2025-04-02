import { Bell, Menu, Sun } from "lucide-react";

export default function Navbar() {
  return (
    <div className="z-30 border-b border-gray-800 bg-base-100 px-3">
      <div className="navbar mx-auto lg:container">
        <div className="navbar-start">
          <div className="dropdown block lg:hidden">
            <label
              htmlFor="my-drawer-2"
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <Menu />
            </label>
          </div>
        </div>
        <div className="navbar-end gap-5">
          <Bell />
          <Sun />
        </div>
      </div>
    </div>
  );
}
