import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { RouterConfiguration } from '@aurelia/router-lite';

Aurelia
  .register(RouterConfiguration)
  .app(MyApp)
  .start();
