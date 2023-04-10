import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'cube-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert',
    icon: 'toggle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Pull to Resfresh',
    icon: 'toggle-outline',
    component: 'PullToRefresh',
  },
  {
    name: 'Section List',
    icon: 'toggle-outline',
    component: 'CustomSectionList',
  },
  {
    name: 'Modal Screen',
    icon: 'toggle-outline',
    component: 'Modal',
  },
  {
    name: 'Infinite Scroll',
    icon: 'toggle-outline',
    component: 'InfiniteScroll',
  },
];

