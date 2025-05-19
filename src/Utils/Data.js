import { FaClock, FaUserAlt, FaBell, FaBriefcase, FaFilm, FaGlobe, FaHeartbeat, FaFlask, FaFootballBall, FaMicrochip } from 'react-icons/fa';
import { IoLanguageSharp } from 'react-icons/io5';

export const iconMap = {
  FaClock: FaClock,
  FaUserAlt: FaUserAlt,
  IoLanguageSharp: IoLanguageSharp,
  FaBell: FaBell,
  FaBriefcase: FaBriefcase,
  FaFilm: FaFilm,
  FaGlobe: FaGlobe,
  FaHeartbeat: FaHeartbeat,
  FaFlask: FaFlask,
  FaFootballBall: FaFootballBall,
  FaMicrochip: FaMicrochip,
};

export const Features = [
  {
    Title: 'Real-time Updates',
    Description: 'Get breaking news as it happens with our lightning-fast delivery system.',
    icon: 'FaClock'
  },
  {
    Title: 'Personalized Feed',
    Description: 'Customized news experience based on your interests and reading habits.',
    icon: 'FaUserAlt'
  },
  {
    Title: 'Multi-Language Support',
    Description: 'Access news in over 30 languages from sources around the world.',
    icon: 'IoLanguageSharp'
  },
  {
    Title: 'Smart Notifications',
    Description: 'Intelligent alerts for stories that matter most to you.',
    icon: 'FaBell'
  },
];

export const Categories = [
  {
    Title: 'Business',
    Icon: 'FaBriefcase',
  },
  {
    Title: 'Entertainment',
    Icon: 'FaFilm',
  },
  {
    Title: 'General',
    Icon: 'FaGlobe',
  },
  {
    Title: 'Health',
    Icon: 'FaHeartbeat',
  },
  {
    Title: 'Science',
    Icon: 'FaFlask',
  },
  {
    Title: 'Sports',
    Icon: 'FaFootballBall',
  },
  {
    Title: 'Technology',
    Icon: 'FaMicrochip',
  },
];
