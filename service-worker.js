"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","aaeb6d7a31bbffeee63c27b1e4b51507"],["/static/css/main.b845ac58.css","2c0968e6d1046fdd41e728c713ee4edc"],["/static/js/main.528e175d.js","44404a5400d7ade0e7a3d8d03b79e73e"],["/static/media/IMG_4978.77db9b15.jpg","77db9b15f2b41402fcbf1e2d41224f48"],["/static/media/gameplanet-min.8ebd0f91.png","8ebd0f91d28e5eb0bbab386ea47c3ca7"],["/static/media/inmybag-min.62cce880.png","62cce88005a45d0b843531c989f0fc42"],["/static/media/inmybag1-min.e2af9cf1.png","e2af9cf186fc053a9b5a91940789e300"],["/static/media/lyft-min.901e0f0b.png","901e0f0b4e587e7865f6024390555ca0"],["/static/media/routing-min.b9e66102.png","b9e66102462999367372b00586f0f0cb"],["/static/media/rsvp-min.ec46c285.png","ec46c285dcf045e288b60fbfb1cdc818"],["/static/media/rsvp1-min.9fadfba9.png","9fadfba99d427f54fa08b7750e47e920"],["/static/media/scoreboard1-min.4ddaa33e.png","4ddaa33e96cf5ddb23ed58e5ec686bce"],["/static/media/seats-min.fae5af51.png","fae5af5133ab22958000cf3ad845775d"],["/static/media/seats1-min.8d6a8faa.png","8d6a8faadf4306b1f5a5e5da3a928fa8"],["/static/media/sushi-min.31125da4.png","31125da48399b2b31607062021cb2449"],["/static/media/sushi1-min.266ef985.png","266ef985b2e341c878908ecbb91d453e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});