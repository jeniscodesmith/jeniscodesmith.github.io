'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5c6d8b2f98cd192477ab72ebd4284e23",
"assets/assets/font/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/font/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/assets/font/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/font/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/font/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/font/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/font/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/font/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/assets/font/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/font/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/font/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/assets/font/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/assets/font/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/font/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/images/alittihad_app/Al-Ittihad-1.png": "840cd9b8e644e6e07983fd91c19d477e",
"assets/assets/images/alittihad_app/Al-Ittihad-2.png": "d9e5e2fdd944d7fc2f71485c5b875d76",
"assets/assets/images/alittihad_app/Al-Ittihad-3.png": "ce53bdb9074999fb33623567ab2de758",
"assets/assets/images/background_koffe.png": "05bb4992696dc5394c5fe8c965c670c2",
"assets/assets/images/bitrise_app/Bitrise-1.png": "3b1bd0e2b64db42ccd04efa25c0e7df2",
"assets/assets/images/bitrise_app/Bitrise-2.png": "695ad56483f6be26d9d3a837144c9d14",
"assets/assets/images/bitrise_app/Bitrise-3.png": "ed9594fdfe00efca38bd07a92607e397",
"assets/assets/images/brandx_app/brandx_app_1.png": "69eb63a6f26dac084a1a349428138be2",
"assets/assets/images/brandx_app/brandx_app_2.png": "2e35d0b7c1fcd75ac480b31a471ffd5b",
"assets/assets/images/brandx_app/brandx_app_3.png": "b4a34017f22fb777da2134626fb26c77",
"assets/assets/images/broken_phone.png": "0fc0f5f898a21537fe349ddebff456b0",
"assets/assets/images/cake.png": "8050aa3f09fd657dcca5c3377ab6db51",
"assets/assets/images/call.png": "c2e79364eb1a67a46c7d2869f43bea50",
"assets/assets/images/cam_app/CRM-1.png": "ed77ca4fe2516fdb9565b46163849b09",
"assets/assets/images/cam_app/CRM-2.png": "6aeba4b211c4a42709213858f8be953f",
"assets/assets/images/cam_app/CRM-3.png": "802f40e3d447b86ce66ea26ca4aa7451",
"assets/assets/images/coding_desktop.png": "e48935c212cf6f9d69f8afdd287d4d79",
"assets/assets/images/coinkafe_app/coinkafe-1.png": "e83259b0d5e989075d5b6345edc0973d",
"assets/assets/images/coinkafe_app/coinkafe-2.png": "9707b8ca4d53a8d47eff6d59e14e530b",
"assets/assets/images/coinkafe_app/coinkafe-3.png": "aa6bd5da7e025f3eb6a556a95c07c31b",
"assets/assets/images/facebook.png": "ef828341a34757de5751770143b271ea",
"assets/assets/images/flutter.png": "54fa9118f6d46f1f7d81d4d2e9b0c405",
"assets/assets/images/flutter_logo.png": "54fa9118f6d46f1f7d81d4d2e9b0c405",
"assets/assets/images/homexp_app/homexp-1.png": "5528a2ef897129a70a396a95bfb70a3f",
"assets/assets/images/homexp_app/homexp-2.png": "44c0eef4c4114b3e9a3793e0aabd841d",
"assets/assets/images/homexp_app/homexp-3.png": "f1cca54cae6cf38fdc2a96a32eaeae2e",
"assets/assets/images/in.png": "0d40a4e6067f8d138371e50bbec701a4",
"assets/assets/images/inst.png": "83cec1153639e57e4bf298ef91b09ba5",
"assets/assets/images/linkedin.png": "f4854db3284d615106f8df9e160a6db0",
"assets/assets/images/logo_blue_dark.png": "05bb4992696dc5394c5fe8c965c670c2",
"assets/assets/images/logo_dark_light_mix.png": "d8e77d1e63c7a437588d35d381e486ce",
"assets/assets/images/logo_white_with_text.png": "4b5b7a19047e5c4b165967b5ab836ddd",
"assets/assets/images/map.png": "65d55585cb0855627066e0ab74606315",
"assets/assets/images/menu.png": "3cd9167e9e79a9718f35aa989304b1eb",
"assets/assets/images/music_player.png": "a812f92823143cd9471c527ba9bf82c4",
"assets/assets/images/partner_icon/aaid.png": "0e0f009b69236154fc7924ccef02e4d7",
"assets/assets/images/partner_icon/bcm.png": "4084569b7125a7c9705d24b04993df4d",
"assets/assets/images/partner_icon/bit.png": "f715a046bc30c12b4e5cbcd63303bb2c",
"assets/assets/images/partner_icon/brandx.png": "75787445f13fbb3de16f97dcf21649fc",
"assets/assets/images/partner_icon/businessExpo.png": "48fd18c2dee557b08a77a3f4c59cca46",
"assets/assets/images/partner_icon/Coinkafe.png": "fcb3532e4f7191974436f8bcdbb6f81f",
"assets/assets/images/partner_icon/global.png": "19088d33a9fa9a5e36555233a550a0fe",
"assets/assets/images/partner_icon/homeFood.png": "ceb6e5a79e384e4c0f2b60d520b745a0",
"assets/assets/images/partner_icon/homexp.png": "dae58a795d897bf6b8bcd54efc89f3de",
"assets/assets/images/partner_icon/myra.png": "faf503c56e67dd06ac7927f54dc174a4",
"assets/assets/images/partner_icon/royal-pharma.png": "46bc9fa05d58d619ac14251455393fe9",
"assets/assets/images/partner_icon/storepopin.png": "e18f6f12282691cfae7f5a3da6d9779e",
"assets/assets/images/partner_icon/stuffExpo.png": "a6c1598a850d221d96ebf848fe0c5b06",
"assets/assets/images/partner_icon/textile.png": "df7f2143dc74911a1911ddcbc7a20954",
"assets/assets/images/partner_icon/textileMail.png": "251622846058eaf6540653e86782a52d",
"assets/assets/images/partner_icon/zipping.png": "ecac70565b14cf81b78bd4c8933843d5",
"assets/assets/images/pickup_app/pickup-1.png": "bc5e8d143edc3d96b2e4dc6d466050e0",
"assets/assets/images/pickup_app/pickup-2.png": "5f5d1b495573fd6f040e2b28905eed67",
"assets/assets/images/pickup_app/pickup-3.png": "99b613d1a1381c8b3c0b4f29e78fd8ac",
"assets/assets/images/send.png": "96af8508b9beeff229e700dd6ac26d63",
"assets/assets/images/service_desk_icon_.png": "dd6613b9e0abb3b453b31864bc312c7f",
"assets/assets/images/service_desk_icon_2.png": "960a0242a99dad4f42d9f64dd3fd7f21",
"assets/assets/images/service_desk_icon_3.png": "2bb58ba1706b112701961a432b7d280f",
"assets/assets/images/service_desk_icon_4.png": "dd6613b9e0abb3b453b31864bc312c7f",
"assets/assets/images/snipzen_app/Snipzen-1.png": "43f531a0a6b625f295937b9e1f8dd309",
"assets/assets/images/snipzen_app/Snipzen-2.png": "45d21aeed04cc07e459a1f4237895553",
"assets/assets/images/snipzen_app/Snipzen-3.png": "d6a489625e454d7c441027c4e58a8a59",
"assets/assets/images/society_app/Society-1.png": "7d716683bb10bd52fdb83849c35daaf5",
"assets/assets/images/society_app/Society-2.png": "3a85e860980470f880231fe9dfc5de98",
"assets/assets/images/society_app/Society-3.png": "2e54876b1e0f044e6a16e9cf0dd73eea",
"assets/assets/images/solarzone_app/SolarZone-1.png": "f8ee10726dd4b3cad64de17b35774cdc",
"assets/assets/images/solarzone_app/SolarZone-2.png": "e03d9baa92a7fbc45dd38b1a7064888a",
"assets/assets/images/solarzone_app/SolarZone-3.png": "bff085609d700204692101e3aad79284",
"assets/assets/images/spread_effect_left.png": "4f15d0f749231f7f0a205915fc9cddef",
"assets/assets/images/spread_effect_right.png": "7a2aa85524e970a123a816ee20f119e6",
"assets/assets/images/storepopin_app/Storepopin-1.png": "4cd2f9cfb15c44d9504dbba428033e99",
"assets/assets/images/storepopin_app/Storepopin-2.png": "a6076d68ee892b3a9782837d1e03bed7",
"assets/assets/images/storepopin_app/Storepopin-3.png": "5791981c31570e2ccc75e0b940955733",
"assets/assets/images/techno/back_arrow.png": "19068355837802b0f2c4465d3704980e",
"assets/assets/images/techno/c++.png": "b408f69df9294a8fafcf8b84d602689c",
"assets/assets/images/techno/circle.png": "544806c401b311391726fb5fc7f86502",
"assets/assets/images/techno/fire.png": "41f1370e507bf2b2516ddebd7c1cf8bd",
"assets/assets/images/techno/flutter.png": "9ee29bd68ed3cbbaec90079e5c8af187",
"assets/assets/images/techno/google-cloud.png": "893eecf26ec51b43fcd0883a3e9f4d06",
"assets/assets/images/techno/hypePay.png": "32f6fa10abd1f1116511a85153c11a2a",
"assets/assets/images/techno/mongoDB.png": "fdd8d83f73dd5fb817e4467be4e87a7e",
"assets/assets/images/techno/mysql.png": "8d2079501dcbaea9d885e17bf06d8936",
"assets/assets/images/techno/node.png": "dfa9c0ef06878839b1a0d227da3eed3a",
"assets/assets/images/techno/paypal.png": "7f183cd7b856243fea82e6e97ac58fb3",
"assets/assets/images/techno/php.png": "ac5ea3e82b6f450f570aa8da4ba888ca",
"assets/assets/images/techno/python.png": "df379ddcd110d4d71946e667363f0480",
"assets/assets/images/techno/Solidity_logo.png": "98f2faf05cede297638086d9b5ffc082",
"assets/assets/images/techno/stripe.png": "0f4abd54e6d1e2551d09e48561ddcfaa",
"assets/assets/images/techno/techno.png": "9d1159b855e9c76e883e260441a74300",
"assets/assets/images/techno/wordpress.png": "a75ef6b9911143c73d090bb70fc41aa5",
"assets/assets/images/tidecircles_app/TideCircles-1.png": "e3369f17e9d795be4ac03e99b1c36136",
"assets/assets/images/tidecircles_app/TideCircles-2.png": "fdd3f89dbc7208d85c723e0af9a2bfaa",
"assets/assets/images/tidecircles_app/TideCircles-3.png": "2b7148e6df69be42b51a5f08c5d314ac",
"assets/assets/images/twitter.png": "999af917913ece3a1abcba52b2a82b38",
"assets/assets/images/whatsapp.png": "a0b95a2e6d27a315ff6a89b4c204ae89",
"assets/FontManifest.json": "e92e93fe9005c6755c5942235584e6b2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7681113b925cde9785296842564dad7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5bd46d1214b7dd3ef1fd981b0e1422f",
"/": "d5bd46d1214b7dd3ef1fd981b0e1422f",
"main.dart.js": "a01cb989983aa2784036dfe3e0ef6892",
"manifest.json": "04e84da0df687ce95689c73c0924de2b",
"new_favicon.png": "d4405ab746d72732bb264740e016ce1e",
"version.json": "d8d53b7d23ac704db3b6d8247c9b0302"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
