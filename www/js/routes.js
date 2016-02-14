angular.module('starter.routes', [])

.constant('USER_ROLES', {
  user: 'user_role',
  guest: 'guest_role'
})

.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('intro', {
    url: '/intro',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabCtrl',
    data: {
      authorizedRoles: [USER_ROLES.user]
    }
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.bookmark', {
    url: '/bookmark',
    views: {
      'tab-bookmark': {
        templateUrl: 'templates/tab-bookmark.html',
        controller: 'BookmarkCtrl'
      }
    }
  })

  .state('tab.lectures', {
    url: '/lectures',
    views: {
      'tab-lectures': {
        templateUrl: 'templates/tab-lectures.html',
        controller: 'LecturesCtrl'
      }
    }
  })

  .state('tab.home-noti', {
    url: '/home/noti',
    views: {
      'tab-home': {
        templateUrl: 'templates/home-noti.html',
        controller: 'NotiCtrl'
      }
    }
  })

  .state('tab.home-lecture-detail', {
    url: '/home/lectures/:lectureId',
    views: {
      'tab-home': {
        templateUrl: 'templates/lecture-detail.html',
        controller: 'LectureDetailCtrl'
      }
    }
  })

  .state('tab.bookmark-hot-lectures', {
    url: '/bookmark/hot',
    views: {
      'tab-bookmark': {
        templateUrl: 'templates/hot-lectures.html',
        controller: 'HotLecturesCtrl'
      }
    }
  })

  .state('tab.bookmark-lecture-detail', {
    url: '/bookmark/lectures/:lectureId',
    views: {
      'tab-bookmark': {
        templateUrl: 'templates/lecture-detail.html',
        controller: 'LectureDetailCtrl'
      }
    }
  })

  .state('tab.more-lecture-detail', {
    url: '/more/lectures/:lectureId',
    views: {
      'tab-more': {
        templateUrl: 'templates/lecture-detail.html',
        controller: 'LectureDetailCtrl'
      }
    }
  })

  .state('tab.market', {
    url: '/market',
    views: {
      'tab-market': {
        templateUrl: 'templates/tab-market.html',
        controller: 'MarketCtrl'
      }
    }
  })

  .state('tab.market-create-post', {
    url: '/market/create',
    views: {
      'tab-market': {
        templateUrl: 'templates/post-create.html',
        controller: 'CreatePostCtrl'
      }
    }
  })

  .state('tab.market-post-detail', {
    url: '/market/:postId',
    views: {
      'tab-market': {
        templateUrl: 'templates/post-detail.html',
        controller: 'PostDetailCtrl'
      }
    }
  })

  .state('tab.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'templates/tab-more.html',
        controller: 'MoreCtrl'
      }
    }
  })

  .state('tab.more-profile', {
    url: '/more/profile',
    views: {
      'tab-more': {
        templateUrl: 'templates/more-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('tab.more-auto', {
    url: '/more/auto',
    views: {
      'tab-more': {
        templateUrl: 'templates/more-auto.html',
        controller: 'AutoCtrl'
      }
    }
  })

  .state('tab.more-tips', {
    url: '/more/tips',
    views: {
      'tab-more': {
        templateUrl: 'templates/more-tips.html',
        controller: 'TipsCtrl'
      }
    }
  })

  .state('tab.more-noti', {
    url: '/more/noti',
    views: {
      'tab-more': {
        templateUrl: 'templates/more-noti.html',
        controller: 'NotiCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');
});
