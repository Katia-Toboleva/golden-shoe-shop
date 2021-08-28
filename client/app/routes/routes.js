import Home from './home';
import Womens from './womens';
import Item from './item';

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
    component: Item,
    props: {
      path: '/item/:id',
      exact: true,
    },
  },
];

export default routes;
