import Login from './container/login'
import Dashboard from './container/dashboard'

const routes = [
    {
      path: "/",
      component: Login,
      exact: true
    },
    {
      path: "/dashboard",
      component: Dashboard
    }
  ];

  export default routes;