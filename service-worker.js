/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "69de5534b084c2d3980349b397ed695f"
  },
  {
    "url": "assets/css/0.styles.66f08aaf.css",
    "revision": "8d303f12839d9a927eb79856485b1846"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.8e6bf94f.js",
    "revision": "97a2c3c6873116def19654360bd66be8"
  },
  {
    "url": "assets/js/10.a6a52a87.js",
    "revision": "6586ddca310780e184336409ed8c5093"
  },
  {
    "url": "assets/js/11.73a0d9b9.js",
    "revision": "0aacff27bdc4a0f98beb46dd2f275eee"
  },
  {
    "url": "assets/js/12.3a1c7468.js",
    "revision": "91db47bf24b151025047dfdcc711af94"
  },
  {
    "url": "assets/js/13.21f1f8fc.js",
    "revision": "27ca578911927f48bedd448bd30b6c45"
  },
  {
    "url": "assets/js/14.f0da74d2.js",
    "revision": "3a3192f7f780e727742f6052d37def09"
  },
  {
    "url": "assets/js/3.bef78585.js",
    "revision": "9a453f60d19640c9427fdcadeedf9c8d"
  },
  {
    "url": "assets/js/4.18af3eff.js",
    "revision": "78751c8a084fb4c47adb07da1afd02cb"
  },
  {
    "url": "assets/js/5.f7f13f8d.js",
    "revision": "dc3b8141ea5a3c0b29101d056d9f743b"
  },
  {
    "url": "assets/js/6.d20b85ca.js",
    "revision": "83c12a21b7706784882e728f1c2cb8f6"
  },
  {
    "url": "assets/js/7.ed13d24c.js",
    "revision": "410c3fc9b192affa8e5c3bf2cb71d193"
  },
  {
    "url": "assets/js/8.e39776a9.js",
    "revision": "75bfafe3fa6a2ec01273cb54bab9660c"
  },
  {
    "url": "assets/js/9.7833e792.js",
    "revision": "96cd36b481b785bfcd2774540b43d336"
  },
  {
    "url": "assets/js/app.954847dd.js",
    "revision": "40c91e2c348dae9c7cfac15a556d785e"
  },
  {
    "url": "author.jpg",
    "revision": "a966034f4990f8a0f85448550ad6357a"
  },
  {
    "url": "banner.jpg",
    "revision": "e9d147848b3ca2991472007eb3914bb0"
  },
  {
    "url": "categories/index.html",
    "revision": "0b7417d709109310d85c3da95bc4d984"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "65f38bcbdba6c009601fbe8d4730eaef"
  },
  {
    "url": "categories/教程/index.html",
    "revision": "e3a9719f5b2a591bc4276b7daf107bfc"
  },
  {
    "url": "favicon.jpg",
    "revision": "912008e890e35f7be5154d3a10a1cd76"
  },
  {
    "url": "git-skills-pages.html",
    "revision": "4ddf1312df0920ccd661b7a2a8456063"
  },
  {
    "url": "head.jpg",
    "revision": "e32a3f926706dba25c0ff052b1d27d6e"
  },
  {
    "url": "index.html",
    "revision": "8fcbb9ed394256a6226126db6f854ab3"
  },
  {
    "url": "tag/index.html",
    "revision": "21f17d663d532f5877f0f6372500f571"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "adfe181b9de3f96664679a77d9d356aa"
  },
  {
    "url": "timeline/index.html",
    "revision": "b0587442831d3b511816e7dac554c527"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "0e11fd3b83948c83bd5576895dda7e32"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
