import { route } from '@aurelia/router-lite';
import Home from '@/pages/home/home';
import About from '@/pages/about/about';

@route({
  routes: [
    {
      path: ['', 'home'],
      component: Home,
      title: 'Home'
    },
    {
      path: 'about',
      component: About,
      title: 'About'
    }
  ]
})
export class MyApp {}
