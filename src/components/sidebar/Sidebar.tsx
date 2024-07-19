'use client';
import { SIDEBAR_MENUS } from '@components/sidebar/sidebar-menus';
import { Avatar, Divider, Menu } from 'antd';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex-shrink-0 w-[292px] bg-bg-sub px-4 py-3">
      <div className="p-3 flex items-center gap-x-2">
        <Avatar style={{ backgroundColor: '#f56a00' }}>홍</Avatar>
        <span className="inline-flex">홍길동</span>
      </div>
      <Divider />
      <Menu
        mode="inline"
        style={{ backgroundColor: 'transparent', border: 'none' }}
      >
        {SIDEBAR_MENUS.map((menu) => {
          if ('href' in menu && typeof menu.href === 'string') {
            return (
              <Menu.Item key={menu.key} icon={menu.icon}>
                <Link key={menu.key} href={menu.href}>
                  {menu.label}
                </Link>
              </Menu.Item>
            );
          }

          return (
            <Menu.SubMenu key={menu.key} icon={menu.icon} title={menu.label}>
              {menu.children.map((child) => (
                <Link key={child.key} href={child.href}>
                  <Menu.Item key={child.key}>{child.label}</Menu.Item>
                </Link>
              ))}
            </Menu.SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};

export default Sidebar;
