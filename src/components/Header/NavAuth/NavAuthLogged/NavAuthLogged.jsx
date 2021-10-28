import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { actLogout } from "containers/Auth/module/actions";
import { Link, withRouter } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavAuthLogged = withRouter((props) => {
  const history = props.history;
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const dispatch = useDispatch();
  return (
    <Menu as="div" className="relative inline-block text-left nav__logged">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <span className="overflow-ellipsis whitespace-nowrap overflow-hidden w-100">
            Xin chào {currentUser.hoTen}
          </span>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile/userinfo"
                  exact={true}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/admin/user-management"
                  exact={true}
                  className={classNames(
                    currentUser.maLoaiNguoiDung !== "GV"
                      ? "d-none"
                      : active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Trang quản trị
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                  onClick={() => {
                    dispatch(actLogout());
                    history.push("/");
                  }}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
});
export default NavAuthLogged;
