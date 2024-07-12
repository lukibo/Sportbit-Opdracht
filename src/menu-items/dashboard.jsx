import 'bootstrap-icons/font/bootstrap-icons.css';
import './icon.css';

const Icon = ({ name }) => {
  return <i className={`bi bi-${name} icon`}></i>;
};
// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Management',
      type: 'item',
      url: '/dashboard/default',
      icon: () => <Icon name="pie-chart-fill" />
    },
    {
      id: 'administration',
      title: 'Administratie',
      type: 'item',
      url: '/invalid',
      icon: () => <Icon name="file-earmark-text-fill" />
    },
    {
      id: 'calendar',
      title: 'Administratie',
      type: 'item',
      url: '/invalid',
      icon: () => <Icon name="calendar2-week-fill" />
    },
    {
      id: 'shop',
      title: 'Shop',
      type: 'item',
      url: '/invalid',
      icon: () => <Icon name="cart-fill" />
    },
    {
      id: 'communication',
      title: 'Communicatie',
      type: 'item',
      url: '/invalid',
      icon: () => <Icon name="chat-fill" />
    },
    {
      id: 'club',
      title: 'Clubbeheer',
      type: 'item',
      url: '/invalid',
      icon: () => <Icon name="house-fill" />
    },
    {
      id: 'configuration',
      title: 'Configuratie',
      type: 'item',
      url: '/invalid',
      icon: () => <Icon name="gear-fill" />
    }
  ]
};

export default dashboard;
