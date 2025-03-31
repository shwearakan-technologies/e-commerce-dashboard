import Drawer from '@/ui/Drawer';
import Navbar from '@/ui/Navbar';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="m-0 grid grid-cols-12 overflow-hidden bg-base-200">
      <div className="w-full border-gray-800 bg-base-100 lg:col-span-3 lg:border-r xl:col-span-2">
        <Drawer />
      </div>
      <div className="col-span-12 lg:col-span-9 xl:col-span-10">
        <Navbar />
        <div className="py-7 lg:container lg:px-5 xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
