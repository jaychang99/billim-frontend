import { RefineProps } from '@refinedev/core';

export const REFINE_RESOURCES: RefineProps['resources'] = [
  {
    name: 'things',
    key: 'things',
    list: '/things',
    create: '/things/create',
    edit: '/things/:id',
  },
  {
    name: 'categories',
    key: 'categories',
    list: '/categories',
    create: '/categories/create',
    edit: '/categories/:id',
  },
];
