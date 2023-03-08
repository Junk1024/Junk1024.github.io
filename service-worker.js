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
    "revision": "415fb646ad8bd7d436f6e750af7c06ac"
  },
  {
    "url": "assets/css/0.styles.f4269fec.css",
    "revision": "325ae1b3f067f52f50a2a226d829ce38"
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
    "url": "assets/js/1.ad76be21.js",
    "revision": "04918ee56ed0a5972e7b19fb7e474107"
  },
  {
    "url": "assets/js/10.cae70dc8.js",
    "revision": "8043cfcc89c9fb53aab723c2e87c04c1"
  },
  {
    "url": "assets/js/11.45a662c5.js",
    "revision": "a2eca35ff3571b9e282f355e0278964b"
  },
  {
    "url": "assets/js/12.df604bd8.js",
    "revision": "5ffd741ca9630e83705d2ba23bb3bb50"
  },
  {
    "url": "assets/js/13.52c09223.js",
    "revision": "3793a014b4dee7257d4d18b1d3d5ce8f"
  },
  {
    "url": "assets/js/14.54e1966f.js",
    "revision": "11592d16f66c24c804bb09ec6b87da3a"
  },
  {
    "url": "assets/js/15.a1509fdc.js",
    "revision": "9f82e4401836ce9d8852383d638abd32"
  },
  {
    "url": "assets/js/16.4b97a538.js",
    "revision": "f6063919a8117650db86d9a63b21eb90"
  },
  {
    "url": "assets/js/3.d8cb7a9a.js",
    "revision": "18fa5f506f3d673beb42c6609ad9a6c4"
  },
  {
    "url": "assets/js/4.d4155b21.js",
    "revision": "1ef74d6af879adcc74bff894e5c143e1"
  },
  {
    "url": "assets/js/5.6bd0a7a2.js",
    "revision": "ee942cd7b0d22c04c9db72934a8aefe9"
  },
  {
    "url": "assets/js/6.d79cf2a3.js",
    "revision": "7b66b0599f5eec13c82b1e7f135c19ad"
  },
  {
    "url": "assets/js/7.567dc37d.js",
    "revision": "2ec75dfd3159b666769b91c86fb4dde0"
  },
  {
    "url": "assets/js/8.b66490ea.js",
    "revision": "ff884b9d5bd03fa394707d0ee0e91026"
  },
  {
    "url": "assets/js/9.c6a63828.js",
    "revision": "0b93ffa8de239af3f43fcf933d1e56e3"
  },
  {
    "url": "assets/js/app.15f16927.js",
    "revision": "f56dbe2cab188af8059e843a59034dd5"
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
    "revision": "64a5f832bfa8bc61ecf17a5baa43dbb1"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "03ae150c6d7239f84dc9f0c43bcc16c4"
  },
  {
    "url": "categories/教程/index.html",
    "revision": "0079b96ed26ccf8f9b9ea8ab11fac726"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "fc69ba8d19ede5395d098752cb63d468"
  },
  {
    "url": "ES6-github-pages.html",
    "revision": "f9dae6670b9d4fe41ee041245101880a"
  },
  {
    "url": "favicon.jpg",
    "revision": "912008e890e35f7be5154d3a10a1cd76"
  },
  {
    "url": "git-skills-pages.html",
    "revision": "933588d98d96056f6e731887a4298592"
  },
  {
    "url": "head.jpg",
    "revision": "e32a3f926706dba25c0ff052b1d27d6e"
  },
  {
    "url": "index.html",
    "revision": "25d927c8c82dc02552bf818e29fe1eec"
  },
  {
    "url": "interview-github-pages.html",
    "revision": "b93fb691a9294c335692519d2c12f9bb"
  },
  {
    "url": "tag/index.html",
    "revision": "00cf0c12935e25a472d57093679ccb5d"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "62e1c0313b823c4266e63a68d6ea4f7b"
  },
  {
    "url": "timeline/index.html",
    "revision": "44e9cf97c17722e95a7cf4266a043259"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "d591d35f8c2d31aea798bc16377d3ec0"
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
