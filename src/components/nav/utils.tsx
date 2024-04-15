import {AiOutlineHeart, AiOutlineHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';

export interface MenuItem {
  label: string;
  href: string;
  children: React.ReactNode;
}

export const items: MenuItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    children: (
      <Link to="/">
        <AiOutlineHome style={{fontSize: '24px'}} />
      </Link>
    ),
  },
  {
    label: 'Saved',
    href: '/favorites',
    children: (
      <Link to="/favorites">
        <AiOutlineHeart style={{fontSize: '24px'}} />
      </Link>
    ),
  },
];
