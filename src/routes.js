import Login from './container/login'
import Category from './container/category'

const routes = [
    {
      path: "/",
      component: Login,
      exact: true
    },
    {
      path: "/category",
      component: Category
    }
  ];

  export default routes;