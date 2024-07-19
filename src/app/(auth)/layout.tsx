import Sidebar from '@components/sidebar/Sidebar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="bg-bg h-lvh flex justify-center">
      <div className="max-w-[1600px] flex">
        <Sidebar />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
