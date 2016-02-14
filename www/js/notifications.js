function tokenKey() {
  return window.localStorage.getItem('yourTokenKey');
}

function saveDevice(endpoint) {
  var token = endpoint.split('gcm/send/')[1];
  var device = {
    platform: 'android',
    model: navigator.userAgent,
    version: '1.0.0'
  };

  $.ajax({
    url: "http://api-sugang.snu.ac/api/v1/users/me/device?auth_token=" + tokenKey(),
    method: "POST",
    data: {
      uuid: token,
      device: JSON.stringify(device)
    }
  }).done(function() {
  });
}

function activate() {
  if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js').then(function() {
      return navigator.serviceWorker.ready;
    }).then(function(reg) {
      console.log('Service Worker is ready :^)', reg);
      navigator.serviceWorker.controller.postMessage({'token': tokenKey()});

      reg.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) {

        console.log('endpoint:', sub.endpoint);
        saveDevice(sub.endpoint);
      });
    }).catch(function(error) {
      console.log('Service Worker error :^(', error);
    });
  }
}
