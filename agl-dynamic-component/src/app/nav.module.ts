export type PageKey = 'home' | 'about';

export interface NavItem {
  key: PageKey;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'home',  label: 'Home'  },
  { key: 'about', label: 'About' },
];