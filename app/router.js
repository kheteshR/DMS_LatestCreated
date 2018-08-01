import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('Home_Page');
  this.route('footer');
  this.route('header');
  this.route('dashboard');
});

export default Router;
