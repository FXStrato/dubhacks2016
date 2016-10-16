import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './orgList.html';
import { Parties } from '../../../api/parties';

class OrgList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      parties() {
        return Parties.find({});
      }
    });

     this.fb = function() {
      FB.getLoginStatus(function(response) {
         if (response.status === 'connected') {
           {
             $('#fbbutton').hide();
             $('#fbprogp').show();
             $('#fbprogloader').show();
           }

           FB.api(
            "/me/posts?limit=200",
            function (response) {
              if (response && !response.error) {
                document.getElementById('result').innerHTML = "Response came back. Sample: " + response.paging.next;
              }
              {
                $('#fbprogloader').hide();
                $('#fbprogp').hide();
                $('#initialtext').removeClass('animated fadeIn');
                $('#initialtext').addClass('animated fadeOut');
              }
            }
        );
         }
         else {
           FB.login(function(response) {
            // handle the response
          }, {scope: 'email,user_likes, user_posts, user_photos'});
         }
       });
    };
  }
}

const name = 'orgList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: OrgList
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      template: '<org-list></org-list>'
    });
}
