angular.module('starter.filters', [])

.filter('courseType2Str', function() {
  return function(type) {
    if(type == 0) {
      return "교양";
    } else if(type == 1) {
      return "전선";
    } else if(type == 2) {
      return "전필";
    } else if(type == 3) {
      return "교직";
    } else if(type == 4) {
      return "논문";
    } else {
      return "에러";
    }
  };
})

.filter('toTime', function() {
  return function(ts) {
    if(ts != undefined && ts.length > 0) {
      return new Date(ts);
    } else {
      return "";
    }
  };
})

.filter('amFromUnix', function() {
  return function(ts) {
    return new Date(ts * 1000); 
  };
})
;