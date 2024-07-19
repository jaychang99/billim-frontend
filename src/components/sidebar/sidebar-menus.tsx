import {
  AppstoreOutlined,
  DashboardOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { ReactNode } from 'react';

export const SIDEBAR_MENUS: SidebarMenuItem[] = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: '대시보드',
    href: '/',
  },
  {
    key: 'things',
    icon: <ShopOutlined />,
    label: '물건 관리',
    children: [
      {
        key: 'things-list',
        label: '물건 목록',
        href: '/things',
      },
      {
        key: 'things-create',
        label: '물건 생성',
        href: '/things/create',
      },
    ],
  },
  {
    key: 'categories',
    label: '카테고리 관리',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'categories-list',
        label: '카테고리 목록',
        href: '/categories',
      },
      {
        key: 'categories-create',
        label: '카테고리 생성',
        href: '/categories/create',
      },
    ],
  },
];

type SidebarMenuItem = SidebarWithoutChildrenItem | SidebarWithChildrenItem;

interface SidebarWithoutChildrenItem extends BaseSidebarMenuItem {
  href: string;
  children?: never;
}

interface SidebarWithChildrenItem extends BaseSidebarMenuItem {
  children: Omit<SidebarWithoutChildrenItem, 'icon'>[];
  href?: never;
}

interface BaseSidebarMenuItem {
  icon?: ReactNode;
  key: string;
  label: string;
}
