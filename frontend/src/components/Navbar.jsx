import React       from "react";
import SearchInput from "./sidebar/SearchInput";

const Navbar = () => {
    const toggleSidebar = () => {
        const sidebar = document.querySelector("#sidebar");
        const main = document.querySelector("#messageContainer");
        sidebar.classList.toggle("hidden");
        main.classList.toggle("hidden");
    }
	return (
		<div className="navbar bg-transparent absolute top-0 backdrop-blur-xl">
			<div className="flex-1">
				<button
					className="btn btn-square btn-ghost"
					onClick={() => {
						toggleSidebar();
					}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block h-5 w-5 stroke-current">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
				<a className="btn btn-ghost text-xl backdrop-blur-sm">Chat App</a>
			</div>
			<div className="flex-none gap-2 hidden">
				<SearchInput />
			</div>
		</div>
	);
};

export default Navbar;
