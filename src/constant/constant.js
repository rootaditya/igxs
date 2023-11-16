import { CiInstagram, CiYoutube } from 'react-icons/ci';
import { FaBehance } from 'react-icons/fa';

export const Name = 'Aditya';
export const FullName = 'Aditya Kumar';
export const SiteName = 'Incredible Graphix Studio';
export const Email = 'contactincrediblegraphixstudio@gmail.com';

export const NavList = [
  {
    id: 0,
    title: 'Services',
    url: '#services',
  },
  {
    id: 1,
    title: 'Contact Us',
    url: '#contact',
  },
];

export const SNSLinks = [
  {
    id: 0,
    name: <CiInstagram />,
    url: 'https://www.instagram.com/incrediblegraphixstudio/',
  },
  {
    id: 1,
    name: <CiYoutube />,
    url: 'https://www.youtube.com/@incrediblegraphixstudio',
  },
  {
    id: 2,
    name: <FaBehance />,
    url: 'https://www.behance.net/igraphixstudio',
  },
];
