import Home from './home';
import Womens from './womens';

const routes = [
  {
    component: Home,
    props: {
      path: '/',
      exact: true,
    },
  },
  {
    component: Womens,
    props: {
      path: '/womens',
      exact: true,
    },
  },
];

export default routes;
