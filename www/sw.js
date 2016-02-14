console.log('Started', self);

FETCH_UNREAD_NOTIFICATION = "http://api-sugang.snu.ac/api/v1/users/me/noti?unread=true";
token = "";
URL_TO_DEFAULT_ICON = "img/icon.png";

self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});

self.addEventListener('message', function(event) {
  console.log('Received', event);
  token = event.data.token;
  console.log('token: ' + token);
});

self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);

  if(event.notification.tag != 'notification-error') {
    console.log(event);
    clients.openWindow('http://sugang.snu.ac.kr/sugang/cc/cc210.action');
  }
  event.notification.close();
});

self.addEventListener('push', function(event) {
  console.log('Push message', event);
  console.log('request token', token);

  if(token.length == 0) {
    console.log('token is empty. try later');
    return;
  }

  event.waitUntil(
    fetch(FETCH_UNREAD_NOTIFICATION + "&auth_token=" + token).then(function(response) {
      if (response.status !== 200) {
        // Either show a message to the user explaining the error
        // or enter a generic message and handle the
        // onnotificationclick event to direct the user to a web page
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        throw new Error();
      }

      // Examine the text in the response
      var title = "수강신청 빈자리 알림";
      var icon = URL_TO_DEFAULT_ICON;
      return response.json().then(function(data) {
        console.log(data);

        for(var i = 0; i < data.notis.length;i ++) {
          var noti = data.notis[i];

          var message = noti.content;
          var notificationTag = noti.id;

          self.registration.showNotification(title, {
            body: message,
            icon: icon,
            tag: notificationTag
          });
        }

        return;
      });
    }).catch(function(err) {
      console.error('Unable to retrieve data', err);

      var title = '안내';
      var message = '잠시만 기다려주세요. 푸시 설정 중입니다.';
      var icon = URL_TO_DEFAULT_ICON;
      var notificationTag = 'notification-error';
      return self.registration.showNotification(title, {
        body: message,
        icon: icon,
        tag: notificationTag
      });
    })
  )
});
