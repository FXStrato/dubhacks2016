import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './orgList.html';
import {
  Parties
} from '../../../api/parties';

class OrgList {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);

    $scope.firstindex = 0;
    $scope.secondindex = 0;

    this.helpers({
      organizations() {
        return Parties.find({});
      }
    });

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1052752098175697',
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.AppEvents.logPageView();
      checkLogin();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

     function checkLogin() {
       FB.getLoginStatus(function(response) {
         //Hide log into facebook button and show other one
         if (response.status === 'connected') {
           $('#fbbutton').hide();
           $('#loggedbutton').show();
           $('#loggedbutton').addClass("animated fadeIn");
         } else {
           $('#fbbutton').show();
           $('#fbbutton').addClass("animated fadeIn");
           $('#loggedbutton').hide();
         }
       });
     }


    this.fb = function() {
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          {
            $('#fbbutton').hide();
            $('#fbprogp').show();
            $('#fbprogloader').show();
          }

          FB.api(
            "/me",
            function(response) {
              if (response && !response.error) {
                $()
              }
            }
          );

          FB.api(
            "/me/posts?limit=200",
            function(response) {
              if (response && !response.error) {

                getOrgs(response);
              }
            }
          );
        } else {
          FB.login(function(response) {
            // handle the response
          }, {
            scope: 'email,user_likes, user_posts, user_photos'
          });
        }
      });
    };

    function getOrgs(response) {
      var keywords = [["environment", "animals", "nature", "conservation"],
                ["arts", "culture", "humanities", "music"],
                ["education", "learning", "teaching"],
                ["health", "medical", "ill"],
                ["counseling", "referral", "equity", "equality"],
                ["international", "foreign", "trafficking", "immigrant"],
                ["public", "society", "leadership", "civic"],
                ["religion", "jewish", "catholic", "christian", "islamic"]];
      var result = response.data;
      var scores = [0, 0, 0, 0, 0, 0, 0, 0]; //category scores
      for (i = 0; i < result.length; i++) {
        var msg = result[i].message;
        if (msg != undefined) {
          for (j = 0; j < keywords.length; j++) {
            for (k = 0; k < keywords[j].length; k++) {
              var count = (msg.split(keywords[j][k]) || []).length - 1;
              scores[j] += count;
            }
          }
        }

      }
      var unordered = [];
      for (i = 0; i < scores.length; i++) {
        unordered.push(scores[i]);
      }
      var ordered = scores.sort(function(a, b) {
        return b - a
      });
      $scope.firstindex = unordered.indexOf(ordered[0]) + 1; //first match
      $scope.secondindex = unordered.indexOf(ordered[1]) + 1; //second match
      console.log($scope.firstindex + " " + $scope.secondindex);
      $state.go('partyDetails', {'indexes': [$scope.firstindex, $scope.secondindex]});
      {
        $('#fbprogloader').hide();
        $('#fbprogp').hide();
        $('#initialtext').removeClass('animated fadeIn');
        $('#initialtext').addClass('animated fadeOut');
      }
      //show the matches for category firstCIndex and secondCIndex

    }
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
