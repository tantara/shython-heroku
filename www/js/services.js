angular.module('starter.services', [])

.service('StatService', function($q, $http, SERVER) {
  var clickAd = function(banner) {
    return $q(function(resolve, reject) {
      $http({
        method: 'POST',
        url: SERVER.host + '/api/v1/stats/click_ad',
        data: banner
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  return {
    clickAd: clickAd
  }
})

.service('TipsService', function($q, $http, SERVER) {
  var getAll = function(tip) {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/tips'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var save = function(tip) {
    return $q(function(resolve, reject) {
      $http({
        method: 'POST',
        url: SERVER.host + '/api/v1/tips',
        data: tip
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  return {
    getAll: getAll,
    save: save
  }
})

.service('ProfileService', function($q, $http, SERVER) {
  var get = function(postId) {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/profiles/me'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var edit = function(data) {
    return $q(function(resolve, reject) {
      $http({
        method: 'PUT',
        url: SERVER.host + '/api/v1/profiles/me',
        data: data
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  return {
    get: get,
    edit: edit
  }
})

.service('PostsService', function($q, $http, SERVER) {
  var get = function(postId) {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/posts/' + postId
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var getLatest = function(lastId) {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/posts/latest?last_id=' + lastId
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var register = function(data) {
    return $q(function(resolve, reject) {
      $http({
        method: 'POST',
        url: SERVER.host + '/api/v1/posts',
        data: data
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  return {
    getLatest: getLatest,
    get: get,
    register: register
  }
})

.service('LecturesService', function($q, $http, SERVER) {
  var hot = function() {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/lectures/hot'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var hotLiked = function() {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/lectures/hot/liked'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var search = function(q) {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/lectures/search?q=' + q
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var get = function(lectureId) {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/lectures/' + lectureId
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var toggle = function(lectureId) {
    return $q(function(resolve, reject) {
      $http({
        method: 'POST',
        url: SERVER.host + '/api/v1/lectures/' + lectureId +  '/toggle'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var register = function(data) {
    return $q(function(resolve, reject) {
      $http({
        method: 'POST',
        url: SERVER.host + '/api/v1/lectures/register',
        data: data
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  return {
    get: get,
    search: search,
    hot: hot,
    hotLiked: hotLiked,
    toggle: toggle,
    register: register
  };
})

.service('UsersService', function($q, $http, SERVER) {
  var configure = function() {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/users/me/configure'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('Signup Failed.');
      });
    });
  };

  var me = function() {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/users/me'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('Signup Failed.');
      });
    });
  };

  var getBookmark = function() {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/users/me/bookmark'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('Signup Failed.');
      });
    });
  };

  var getNoti = function() {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/users/me/noti'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('Signup Failed.');
      });
    });
  };

  var getOptions = function() {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: SERVER.host + '/api/v1/users/me/options'
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('Signup Failed.');
      });
    });
  };

  var editOptions = function(options, uuid, device) {
    return $q(function(resolve, reject) {
      $http({
        method: 'PUT',
        url: SERVER.host + '/api/v1/users/me/options',
        data: {device: options, uuid: uuid, device_info: device}
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('Signup Failed.');
      });
    });
  };

  var saveDevice = function(uuid, device) {
    return $q(function(resolve, reject) {
      $http({
        method: 'POST',
        url: SERVER.host + '/api/v1/users/me/device',
        data: {uuid: uuid, device: device}
      }).then(function successCallback(response) {
        console.log(response);
        resolve(response);
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  return {
    configure: configure,
    getBookmark: getBookmark,
    getNoti: getNoti,
    getOptions: getOptions,
    editOptions: editOptions,
    saveDevice: saveDevice
  };
})

.service('AuthService', function($q, $http, USER_ROLES, SERVER) {
  var LOCAL_TOKEN_KEY = 'yourTokenKey';
  var LOCAL_DEVICE_INFO_KEY = 'yourDeviceInfoKey';
  var LOCAL_PUSH_TOKEN_KEY = 'yourPushTokenKey';
  var LOCAL_USER_INFO_KEY = 'yourUserInfoKey';
  var LOCAL_TMP_ID = 'tmpId';
  var LOCAL_TMP_PASSWORD = 'tmpPassword';
  var LOCAL_TMP_TIME = 'tmpTime';
  var LOCAL_UID_KEY = 'yourUIDKey';
  var isAuthenticated = false;
  var role = '';
  var authToken;

  function loadUserCredentials() {
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (token) {
      useCredentials(token);
    }
  }

  function getUserCredentials() {
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    return token;
  }

  function storeUserCredentials(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }

  function storeDeviceInfo(info) {
    window.localStorage.setItem(LOCAL_DEVICE_INFO_KEY, JSON.stringify(info));
    useDevice(info);
  }

  function loadDeviceInfo() {
    return window.localStorage.getItem(LOCAL_DEVICE_INFO_KEY);
  }

  function storeUID(uid) {
    window.localStorage.setItem(LOCAL_UID_KEY, uid);
  }

  function loadUID() {
    return window.localStorage.getItem(LOCAL_UID_KEY);
  }

  function storePushToken(token) {
    window.localStorage.setItem(LOCAL_PUSH_TOKEN_KEY, token);
  }

  function loadPushToken() {
    return window.localStorage.getItem(LOCAL_PUSH_TOKEN_KEY);
  }

  function useCredentials(token) {
    isAuthenticated = true;
    authToken = token;

    role = USER_ROLES.user

    // Set the token as header for your requests!
    $http.defaults.headers.common['X-AUTH-TOKEN'] = token;
  }

  function useDevice(info) {
    $http.defaults.headers.common['X-DEVICE-UUID'] = info.uuid;
  }

  function destroyUserCredentials() {
    authToken = undefined;
    isAuthenticated = false;
    $http.defaults.headers.common['X-AUTH-TOKEN'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }

  function tmpTimeSave(time) {
    window.localStorage.setItem(LOCAL_TMP_TIME, time);
  }

  function tmpTimeLoad() {
    var time = window.localStorage.getItem(LOCAL_TMP_TIME);
    if(time == undefined) {
      time = 0;
    }
    return parseInt(time);
  }

  function tmpTimeInit() {
    window.localStorage.removeItem(LOCAL_TMP_TIME);
  }

  function tmpSave(id, password) {
    window.localStorage.setItem(LOCAL_TMP_ID, id);
    window.localStorage.setItem(LOCAL_TMP_PASSWORD, password);
  }

  function tmpLoad(id, password) {
    var id = window.localStorage.getItem(LOCAL_TMP_ID);
    var password = window.localStorage.getItem(LOCAL_TMP_PASSWORD);
    if(id == undefined) id = '';
    if(password == undefined) password = '';
    return {
      id: id,
      password: password
    }
  }

  function tmpInit() {
    window.localStorage.removeItem(LOCAL_TMP_ID);
    window.localStorage.removeItem(LOCAL_TMP_PASSWORD);
  }

  var start = function(user) {
    return $q(function(resolve, reject) {
      $http({
        method: 'POST',
        url: SERVER.host + '/api/v1/users',
        data: {user: user}
      }).then(function successCallback(response) {
        console.log(response);
        storeUserCredentials(response.data.token);
        resolve('success.');
      }, function errorCallback(response) {
        reject('failed.');
      });
    });
  };

  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };

  loadUserCredentials();

  return {
    tmpTimeSave: tmpTimeSave,
    tmpTimeLoad: tmpTimeLoad,
    tmpTimeInit: tmpTimeInit,
    tmpSave: tmpSave,
    tmpLoad: tmpLoad,
    tmpInit: tmpInit,
    storeUID: storeUID,
    loadUID: loadUID,
    start: start,
    getUserCredentials: getUserCredentials,
    storeDeviceInfo: storeDeviceInfo,
    loadDeviceInfo: loadDeviceInfo,
    storePushToken: storePushToken,
    loadPushToken: loadPushToken,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
    role: function() {return role;}
  };
})

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
  return {
    request: function(config) {
      $rootScope.showLoading(config);
      return config;
    },
    response: function(response) {
      $rootScope.hideLoading(response.config);
      return response;
    },
    responseError: function (response) {
      $rootScope.hideLoading(response.config);
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized
      }[response.status], response);
      return $q.reject(response);
    }
  };
})

.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');

  var agentString = "Shython 0.9.1 (Android 5.1.1; ko; a3abba76-e795-496f-9510-30b9962de562; SM-G920S)";
  var agentString = "Shython " + appVersion;

  var deviceInfoString = "";
  if(ionic.Platform.isIOS()) {
    deviceInfoString += "iOS " + ionic.Platform.version();
  } else if(ionic.Platform.isAndroid()) {
    deviceInfoString += "Android " + ionic.Platform.version();
  } else {
    deviceInfoString = navigator.userAgent;
  }

  agentString = agentString + " (" + deviceInfoString + ")";

  $httpProvider.defaults.headers.common['X-AGENT'] = agentString;
})
