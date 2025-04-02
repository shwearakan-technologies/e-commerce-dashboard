/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ListItem({ href, name, children }) {
  return (
    <li className="mt-3 text-lg text-gray-400">
      <Link to={href}>
        {children} {name}
      </Link>
    </li>
  );
}
