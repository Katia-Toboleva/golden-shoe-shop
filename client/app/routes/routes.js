import Home from './home';
import Womens from './womens';
import Item from './item';
import Cart from './cart';

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
  {
    component: Cart,
    props: {
      path: '/cart',
      exact: true,
    },
  },
];

export default routes;
