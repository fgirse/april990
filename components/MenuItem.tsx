// components/MenuItem.js
import Bulleye from './Bulleye.svg';

export default function MenuItem({ label, ...props }) {
  return (
    <li className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-4 py-2" {...props}>
      <Bulleye className="w-5 h-5" />
      <span>{label}</span>
    </li>
  );
}