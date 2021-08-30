import Home from './home';
import Womens from './womens';
import Cart from './cart';
import Faq from './faq';

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
  {
    component: Faq,
    props: {
      path: '/faq',
      exact: true,
    },
  },
];

export default routes;
