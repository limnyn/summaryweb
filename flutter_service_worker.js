'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "86795125e8fce0b2e4fc472d9d23b6ea",
"index.html": "27b7931e8d38685ad10bc28420a03a0e",
"/": "27b7931e8d38685ad10bc28420a03a0e",
"main.dart.js": "444cbc968eb5c7ea1c4be9a31f0a9897",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ddd88574970cf20eb1b6dbf156bb2059",
".git/config": "4223bdffb59da605a21822874649101c",
".git/objects/59/21f65632b3395d0b4294bc427aa5f575da75eb": "33873c4683b47c68304a3bda8fbec0b8",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/d49c8bf50abebd5dbbe68757a5c14a492a6d8f": "bb6eeb0ff5d516bce582598cdb36d90e",
".git/objects/94/fa5d839765f09a724ed63c129ceea8c152c60c": "1a1511003ce04eb3512ef95fb14b8bad",
".git/objects/34/9e131b6110103f0ff41823e94cabe0bad9c2a9": "4fe2034c315f010deb3cd8d6680655ac",
".git/objects/5a/c19e37101cb408423e0e98723ddf47b6b291bd": "af8d1b09381eb17f000d3f64ea341091",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9c/90fe7ccb0be53a1169fde2d086dff24b67c9fd": "3e6be7fb82e45ae4e4a62ed83ca25740",
".git/objects/a4/77e50edd06608aced70cc56375c77e184c6580": "a4510a6f0315b7fc39a416e069a18f27",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/a5/318f0e6a51a2ba687773027ca0da27eb35db99": "c0333eb26d941c130956c3cb40200a98",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/93e5999ecc8200f19f6cf55a4b6c6ad8eb2799": "4357ffe66524b68fdf7ea96aaaa65ba2",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/a5a2a7797d0f4b1e3c6a3fc43bddff3b3d2e5a": "b8a4ca73d9c923f38bb0b4b748c22db6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/3e871ec56f22accb8780fde84b8fff4917d9b0": "0512c430893e27e84b9b622e22710c2d",
".git/objects/c7/735e526a7e82c82e5c00c619f7d304cde9e1b2": "b57932e0aebc296b84cce00a220ac62f",
".git/objects/c0/11ef63531c7d1b87834b00c88449c5644e6dca": "c8dbc3e45819b5a41d99acc0ff484fe2",
".git/objects/c0/f83dc90589d6b0d7633f81c7b797d23a308927": "8e25a72131c1a9353fb3dba7f30fc70f",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/cf/01d849ebe01bc10716ef61b69ba5c58475281b": "2b0db0947d18d3d55e6146daa32c6a9d",
".git/objects/ca/bdb007bffb183e1fe65299aa1fee90a67406f3": "d006da85612004ff35181b67a0e91dbb",
".git/objects/fe/d0d12e7ba28b34c859b13e489ea002226f7d7c": "10928f80c26c61acf4fa239eebf273ad",
".git/objects/45/d5beaa000dccaf92d1a7eb945d3e39e1f78582": "73d503f4cff4ded2b10a82ecfc13b362",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/7e/caaff5806fc7cb19a743eac01df7e1f612b3e8": "b22484255054f157013279031bf7cf8a",
".git/objects/4d/89399baeac82f0ddb41795f58a5a036b59d38a": "99e5dfdeaa44b3289f24d78ed7708af8",
".git/objects/86/a18102e8eba452969f716f2dceb35f85b5e61e": "e1efe0b4306ef2563124ddfda99e4a99",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/c9f5efd5cc608f114c189e68951ebfdb4b5cdf": "d929d6322e702f571e28871a7baae6a2",
".git/objects/91/9b60d557153bce5fa4120e0c73b8156e14ef16": "b240021c6dfc5f4e5fceb6a8763ff536",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/d2ad4fbbf69712366d870f455011165a85131c": "b8f6d2deea5dd37af00b1f7f89fb56a2",
".git/objects/5e/d0c40fd8582fe4daf44ab372d3d6f7b2954849": "0439cb22081705d9c14f3206f4137888",
".git/objects/52/121a5cf382d55259ef6ddd0fa12c41494b1a5b": "4606b21f33e89844fb093cd4c0c4a748",
".git/objects/0a/8afba750c70e92dea670c753a9558001e0b02d": "a23e8719229f65d0140bd52aac5e3874",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/412362dd70a6aa092be5664ce4b748c008f634": "dcb61ce9b085f416cfbe446109684751",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/af/cbd615387f863c868f2ba4d6089fb751fb57be": "1db41f71544bd682715f88bcc94ae289",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c5400f448ee47874b8959faf01e16eabdb0a53": "23d30736f7655f77fd4b11d92d7725ba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/d3e607aa527eee98041bd65fb264ebdf532dc1": "dbd94758cca8ac2db212c469348ae3a1",
".git/objects/a1/3d100e14d933bb96c885935d8af85d8de885f3": "3d5f42a662f4605f482c9bc497189474",
".git/objects/c3/93372b62ca5d1fc49165c916fa030edd052302": "8154134c1dd8bddc694a13873224c73b",
".git/objects/e6/d7b2c478b1b380bfe49fd007cf67a4b17dbd49": "6d3415e7adf388d64d92197c7b8005d5",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/2f52cf459329d3812b662e5f91dbda6110e6e6": "755f4cea985d11705480cefcdb4cbeed",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f1/7808cd72490e0f88da183870ce11a6ab50b814": "3a3bd1b6f24b75b20759c117ba0e6b70",
".git/objects/e7/0b3bdb0e6a9a22ef17ded6d3d94269ad1c4ad3": "eaef57b537f166a5969f1705ecafa519",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/71/12af6a1ebd321f41f602ce1b0a4f26cf853f01": "baff341733a369eca3007b18ba772411",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/78/747eb79544173bd5c970483907e7cde177b7c7": "2b87f36896da59461a77f4a2daa4240f",
".git/objects/13/69a544956ac84502dd53f3e5f77943db067d35": "302269c1e859be9e6e54d16f81944689",
".git/objects/7a/a3027e251e5c854bf72d7cca1b2da0e6fd15ee": "085ebd8e926c94869e6a90269025acff",
".git/objects/25/ce202ac8b1665768902c0a4c3a442600b3b73f": "c29f19404849cf1c10494a97e216e16f",
".git/objects/25/b801165aa466a917e11eae1b441dfde7318f63": "09ebb7806ac6b767f989826a44afeed7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a2b3ab250f0fd92d94c682306622920c",
".git/logs/refs/heads/main": "a2b3ab250f0fd92d94c682306622920c",
".git/logs/refs/remotes/origin/main": "2cbe89eba100136e5a0ad00f88d4c699",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0cf83426cdf7c77fb21ceb19e48a8b46",
".git/refs/remotes/origin/main": "2d7fe5d81a17acd6720d9ff6c77c66fd",
".git/index": "468c003cbc7e06557eb7b87f9b5a4b7f",
".git/COMMIT_EDITMSG": "c061e66887971961bd9eed68a2722898",
".git/FETCH_HEAD": "85526583e4465a44d158a8d8eded450c",
"assets/AssetManifest.json": "43d7aa2f2fdaa3f8bf0bbf2aade31b45",
"assets/NOTICES": "08faccf46d4d3ce11756c58150f52fa6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "324cffce0646a5895ffb08125c265287",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
