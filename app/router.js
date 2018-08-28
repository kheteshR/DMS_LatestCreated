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
  this.route('DashBoard');
  this.route('divisionalboard');
  this.route('pulldocuments');
  this.route('statusupload');
  this.route('uploaddocument');
  this.route('AppForm');
  this.route('employerdashboard');
  this.route('applicationhsc');
  this.route('EmployerDocumentCategory');
  this.route('InstituteDashboard');
  this.route('signup');
  this.route('ApplicationFormRepo');
  this.route('FullForm');
  this.route('HallTicketRepo');
  this.route('userhallticket');
  this.route('samplepdf');
  this.route('UserRepository');
  this.route('Marksheet');
  this.route('hallticket');
  this.route('reapplyfordocuments');
  this.route('History');
  this.route('verificationofdocs');
});

export default Router;
