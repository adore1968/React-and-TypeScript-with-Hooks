import Link from "next/link";

function Navbar() {
  return (
    <nav className="px-10 py-5 flex justify-between items-center border-b border-[#FFFDFA]">
      <Link href="/" className="text-xl sm:text-2xl font-semibold">
        React with TS
      </Link>
      <ul className="flex gap-5 items-center text-lg sm:text-xl">
        <li>
          <Link
            href="/create-task"
            className="hover:text-blue-600 transition-colors ease-in"
          >
            Create Task
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-green-600 transition-colors ease-in"
          >
            Tasks
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
