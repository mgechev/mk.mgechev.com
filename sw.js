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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/arenas/0/arena.png",
    "revision": "272107e365b03102d06f89b5c05e5ac9"
  },
  {
    "url": "images/arenas/1/arena.png",
    "revision": "14097727b1d54e2f437b3187adcf6f9e"
  },
  {
    "url": "images/favicon.png",
    "revision": "5da359650d4ed2b1de9c6ebe32ad33fa"
  },
  {
    "url": "images/fighters/kano/left/attractive-stand-up/0.png",
    "revision": "389bd9de97602fc15ac80ce8589cdc54"
  },
  {
    "url": "images/fighters/kano/left/attractive-stand-up/1.png",
    "revision": "48286baabf594fe4b66f2ed68e66ab07"
  },
  {
    "url": "images/fighters/kano/left/attractive-stand-up/2.png",
    "revision": "989081a5974de147e6522a67652d49b9"
  },
  {
    "url": "images/fighters/kano/left/attractive-stand-up/3.png",
    "revision": "6ac38e59aa4fc9a7a0a929ef79ae3b6c"
  },
  {
    "url": "images/fighters/kano/left/backward-jump-kick/0.png",
    "revision": "51c2970c461e8409f1bc81dc61b2ef22"
  },
  {
    "url": "images/fighters/kano/left/backward-jump-kick/1.png",
    "revision": "785cae5b6a448c55d6e02a03bfc2d3a1"
  },
  {
    "url": "images/fighters/kano/left/backward-jump-kick/2.png",
    "revision": "d7dd8e8752e15c7001894550b8b26f2d"
  },
  {
    "url": "images/fighters/kano/left/backward-jump-punch/0.png",
    "revision": "93d46203a7143cabc42880d8e428ae13"
  },
  {
    "url": "images/fighters/kano/left/backward-jump-punch/1.png",
    "revision": "bae586d166cd2ad6992cdc5b2013c235"
  },
  {
    "url": "images/fighters/kano/left/backward-jump-punch/2.png",
    "revision": "9dfd3407fae6ba747abfeac2e271c41e"
  },
  {
    "url": "images/fighters/kano/left/backward-jump/0.png",
    "revision": "0a322568dfee2296c3ba708d933ed11f"
  },
  {
    "url": "images/fighters/kano/left/backward-jump/1.png",
    "revision": "94456ef03d4dd84dd8acb6cdab8ad171"
  },
  {
    "url": "images/fighters/kano/left/backward-jump/2.png",
    "revision": "69122c6868043312b8bc1d595b3b753e"
  },
  {
    "url": "images/fighters/kano/left/backward-jump/3.png",
    "revision": "d0b6d42d4ef72066c1fcd8e742e5dbaf"
  },
  {
    "url": "images/fighters/kano/left/backward-jump/4.png",
    "revision": "8b7fe3d3071788583fcdc7500a8589d1"
  },
  {
    "url": "images/fighters/kano/left/backward-jump/5.png",
    "revision": "d3672cf1931347ef33d89e00f46b9dbd"
  },
  {
    "url": "images/fighters/kano/left/backward-jump/6.png",
    "revision": "8da3df0e5290a38d635bb1b2203242c4"
  },
  {
    "url": "images/fighters/kano/left/backward-jump/7.png",
    "revision": "e16016cd045e5816cf1c81b8438eb552"
  },
  {
    "url": "images/fighters/kano/left/blocking/0.png",
    "revision": "aab515b82eead16ed5f91b96f2d5723e"
  },
  {
    "url": "images/fighters/kano/left/blocking/1.png",
    "revision": "50013814b4a57405ebf99f2898ab8f7e"
  },
  {
    "url": "images/fighters/kano/left/blocking/2.png",
    "revision": "505d7c00c9bb6e6ae2270d2c9b44fd99"
  },
  {
    "url": "images/fighters/kano/left/endure/0.png",
    "revision": "d851e0bb250e689abe3c34f8789c81b6"
  },
  {
    "url": "images/fighters/kano/left/endure/1.png",
    "revision": "b9c72eb5a48a623c4e92feff3ff03482"
  },
  {
    "url": "images/fighters/kano/left/endure/2.png",
    "revision": "bb359af6e1cfe95e17e62f3d78bbc1e4"
  },
  {
    "url": "images/fighters/kano/left/endure/test.pl",
    "revision": "e611184463d4a8b8d9459120346d4c79"
  },
  {
    "url": "images/fighters/kano/left/fall/0.png",
    "revision": "77cd5f41f6d88983cc341d41783104bf"
  },
  {
    "url": "images/fighters/kano/left/fall/1.png",
    "revision": "99d795e41ec8f7ed01c12437d67e6dac"
  },
  {
    "url": "images/fighters/kano/left/fall/2.png",
    "revision": "a102460d99dedba151fd7e77df378a68"
  },
  {
    "url": "images/fighters/kano/left/fall/3.png",
    "revision": "6afdcad790c311710dd9370bbf2b4ebe"
  },
  {
    "url": "images/fighters/kano/left/fall/4.png",
    "revision": "890a87775ac789cb54c4e5a59aabdb86"
  },
  {
    "url": "images/fighters/kano/left/fall/5.png",
    "revision": "93c4592f25bc2934f50fcb9447365102"
  },
  {
    "url": "images/fighters/kano/left/fall/6.png",
    "revision": "7f5110b436b1ffa32b2ad01302270495"
  },
  {
    "url": "images/fighters/kano/left/forward-jump-kick/0.png",
    "revision": "51c2970c461e8409f1bc81dc61b2ef22"
  },
  {
    "url": "images/fighters/kano/left/forward-jump-kick/1.png",
    "revision": "785cae5b6a448c55d6e02a03bfc2d3a1"
  },
  {
    "url": "images/fighters/kano/left/forward-jump-kick/2.png",
    "revision": "d7dd8e8752e15c7001894550b8b26f2d"
  },
  {
    "url": "images/fighters/kano/left/forward-jump-punch/0.png",
    "revision": "93d46203a7143cabc42880d8e428ae13"
  },
  {
    "url": "images/fighters/kano/left/forward-jump-punch/1.png",
    "revision": "bae586d166cd2ad6992cdc5b2013c235"
  },
  {
    "url": "images/fighters/kano/left/forward-jump-punch/2.png",
    "revision": "9dfd3407fae6ba747abfeac2e271c41e"
  },
  {
    "url": "images/fighters/kano/left/forward-jump/0.png",
    "revision": "0a322568dfee2296c3ba708d933ed11f"
  },
  {
    "url": "images/fighters/kano/left/forward-jump/1.png",
    "revision": "94456ef03d4dd84dd8acb6cdab8ad171"
  },
  {
    "url": "images/fighters/kano/left/forward-jump/2.png",
    "revision": "69122c6868043312b8bc1d595b3b753e"
  },
  {
    "url": "images/fighters/kano/left/forward-jump/3.png",
    "revision": "d0b6d42d4ef72066c1fcd8e742e5dbaf"
  },
  {
    "url": "images/fighters/kano/left/forward-jump/4.png",
    "revision": "8b7fe3d3071788583fcdc7500a8589d1"
  },
  {
    "url": "images/fighters/kano/left/forward-jump/5.png",
    "revision": "d3672cf1931347ef33d89e00f46b9dbd"
  },
  {
    "url": "images/fighters/kano/left/forward-jump/6.png",
    "revision": "8da3df0e5290a38d635bb1b2203242c4"
  },
  {
    "url": "images/fighters/kano/left/forward-jump/7.png",
    "revision": "e16016cd045e5816cf1c81b8438eb552"
  },
  {
    "url": "images/fighters/kano/left/high-kick/0.png",
    "revision": "9ec945f3c9e2ff057dd9529685cec9bf"
  },
  {
    "url": "images/fighters/kano/left/high-kick/1.png",
    "revision": "352c1db8c39624ae29d70402dde64e96"
  },
  {
    "url": "images/fighters/kano/left/high-kick/2.png",
    "revision": "d87e1c4117b1e886d8f3c4aa7b204c9d"
  },
  {
    "url": "images/fighters/kano/left/high-kick/3.png",
    "revision": "403aff86340802457b75bdaf58f24b13"
  },
  {
    "url": "images/fighters/kano/left/high-kick/4.png",
    "revision": "0382db74dec911ad5995a0f5b5ab82ca"
  },
  {
    "url": "images/fighters/kano/left/high-kick/5.png",
    "revision": "56b7a26a2e545d2b967aee4d4c34ec65"
  },
  {
    "url": "images/fighters/kano/left/high-kick/6.png",
    "revision": "623e3c696c1c5588da55125ba1cecc31"
  },
  {
    "url": "images/fighters/kano/left/high-punch/0.png",
    "revision": "7ddc30c402ff732e8d20847f4af2f4f2"
  },
  {
    "url": "images/fighters/kano/left/high-punch/1.png",
    "revision": "028f108765ba4df1f909f9ca0c624fdc"
  },
  {
    "url": "images/fighters/kano/left/high-punch/2.png",
    "revision": "49ef8983dd5716efacc1f00db8b29624"
  },
  {
    "url": "images/fighters/kano/left/high-punch/3.png",
    "revision": "7777ab112de6d5f96167ab27fae047c2"
  },
  {
    "url": "images/fighters/kano/left/high-punch/4.png",
    "revision": "bf71c427c129194702507b057296976b"
  },
  {
    "url": "images/fighters/kano/left/high-punch/5.png",
    "revision": "ea0f68bc6aec554aa18e53bb8df45739"
  },
  {
    "url": "images/fighters/kano/left/high-punch/6.png",
    "revision": "49e8ac55a00102eed8228a88ce1d6f74"
  },
  {
    "url": "images/fighters/kano/left/high-punch/7.png",
    "revision": "7ddc30c402ff732e8d20847f4af2f4f2"
  },
  {
    "url": "images/fighters/kano/left/jumping/0.png",
    "revision": "d6faa91fb50d8a1e3cb1faae6e83729b"
  },
  {
    "url": "images/fighters/kano/left/jumping/1.png",
    "revision": "abb03fab0a51588e32c33b836be910da"
  },
  {
    "url": "images/fighters/kano/left/jumping/2.png",
    "revision": "abb03fab0a51588e32c33b836be910da"
  },
  {
    "url": "images/fighters/kano/left/jumping/3.png",
    "revision": "abb03fab0a51588e32c33b836be910da"
  },
  {
    "url": "images/fighters/kano/left/jumping/4.png",
    "revision": "abb03fab0a51588e32c33b836be910da"
  },
  {
    "url": "images/fighters/kano/left/jumping/5.png",
    "revision": "abb03fab0a51588e32c33b836be910da"
  },
  {
    "url": "images/fighters/kano/left/jumping/backup.png",
    "revision": "6d50dd17b65cda1dc77d7facde115bcc"
  },
  {
    "url": "images/fighters/kano/left/knock-down/0.png",
    "revision": "eb79dfc64e473443f32a6a709de46cc0"
  },
  {
    "url": "images/fighters/kano/left/knock-down/1.png",
    "revision": "da7bda4606f6c949334e84aafc7fbff3"
  },
  {
    "url": "images/fighters/kano/left/knock-down/2.png",
    "revision": "d5b8cde4fb1abb2a38cc048a42041bba"
  },
  {
    "url": "images/fighters/kano/left/knock-down/3.png",
    "revision": "df34890a5d003246017c437e1b8885d6"
  },
  {
    "url": "images/fighters/kano/left/knock-down/4.png",
    "revision": "4e8f5d94cd86a5e8c19ca4f0d256e894"
  },
  {
    "url": "images/fighters/kano/left/knock-down/5.png",
    "revision": "5d0349d34051f423b47d742e3ef13d81"
  },
  {
    "url": "images/fighters/kano/left/knock-down/6.png",
    "revision": "5d0349d34051f423b47d742e3ef13d81"
  },
  {
    "url": "images/fighters/kano/left/knock-down/7.png",
    "revision": "5d0349d34051f423b47d742e3ef13d81"
  },
  {
    "url": "images/fighters/kano/left/knock-down/8.png",
    "revision": "5007adcb10843beede63bc07d60ddd64"
  },
  {
    "url": "images/fighters/kano/left/knock-down/9.png",
    "revision": "f3e2901331f3ed540a05c986a9345be6"
  },
  {
    "url": "images/fighters/kano/left/low-kick/0.png",
    "revision": "9ec945f3c9e2ff057dd9529685cec9bf"
  },
  {
    "url": "images/fighters/kano/left/low-kick/1.png",
    "revision": "352c1db8c39624ae29d70402dde64e96"
  },
  {
    "url": "images/fighters/kano/left/low-kick/2.png",
    "revision": "d87e1c4117b1e886d8f3c4aa7b204c9d"
  },
  {
    "url": "images/fighters/kano/left/low-kick/3.png",
    "revision": "403aff86340802457b75bdaf58f24b13"
  },
  {
    "url": "images/fighters/kano/left/low-kick/4.png",
    "revision": "f2644b4894b5e951b043267b71d880ca"
  },
  {
    "url": "images/fighters/kano/left/low-kick/5.png",
    "revision": "91d4a26f76d401fc5773a4a17c3cb9f3"
  },
  {
    "url": "images/fighters/kano/left/low-punch/0.png",
    "revision": "699187dcb27182920a6756fab7e9e7e9"
  },
  {
    "url": "images/fighters/kano/left/low-punch/1.png",
    "revision": "6c5fb33444376764e869106af44f0b20"
  },
  {
    "url": "images/fighters/kano/left/low-punch/2.png",
    "revision": "1eca4cb4056740f7c76d574c4be461b4"
  },
  {
    "url": "images/fighters/kano/left/low-punch/3.png",
    "revision": "88496a82f8f5e02d0319e78a56791291"
  },
  {
    "url": "images/fighters/kano/left/low-punch/4.png",
    "revision": "98fda7a07cbd5b555f6d2461318c65f1"
  },
  {
    "url": "images/fighters/kano/left/spin-kick/0.png",
    "revision": "677db932baca638ddc0b9f68d72c171a"
  },
  {
    "url": "images/fighters/kano/left/spin-kick/1.png",
    "revision": "b2fe09251dd82d52a150ad4a70f723ac"
  },
  {
    "url": "images/fighters/kano/left/spin-kick/2.png",
    "revision": "92f865454dc2315c8de22d9c1442e767"
  },
  {
    "url": "images/fighters/kano/left/spin-kick/3.png",
    "revision": "a251e9d3052f37d14659cc17bca081bd"
  },
  {
    "url": "images/fighters/kano/left/spin-kick/4.png",
    "revision": "31bee5aaf901ae298134ffb0c7f8e9d2"
  },
  {
    "url": "images/fighters/kano/left/spin-kick/5.png",
    "revision": "acb1e581b9d7a046628135ccc76e13d3"
  },
  {
    "url": "images/fighters/kano/left/spin-kick/6.png",
    "revision": "079f927ca5361adcf67bbc98ce6e6874"
  },
  {
    "url": "images/fighters/kano/left/spin-kick/7.png",
    "revision": "6279387dc2c19077aa2130b7897cb98a"
  },
  {
    "url": "images/fighters/kano/left/squat-endure/0.png",
    "revision": "2ffc0b9f81849583ff44322c54882ef3"
  },
  {
    "url": "images/fighters/kano/left/squat-endure/1.png",
    "revision": "59fd24cce2c846283721239770b9121b"
  },
  {
    "url": "images/fighters/kano/left/squat-endure/2.png",
    "revision": "49f75f4ea47a98cd07d9970c042b0cf6"
  },
  {
    "url": "images/fighters/kano/left/squat-high-kick/0.png",
    "revision": "da46df3e147fc24a8e5c1f7f1d290348"
  },
  {
    "url": "images/fighters/kano/left/squat-high-kick/1.png",
    "revision": "69d6a8248358cd4c54bb88fa1e9bb82e"
  },
  {
    "url": "images/fighters/kano/left/squat-high-kick/2.png",
    "revision": "3d080fc0fe8c1916dd9fd59d513c1b1a"
  },
  {
    "url": "images/fighters/kano/left/squat-high-kick/3.png",
    "revision": "23135c382f39afbe6a6c698cfc6c3e27"
  },
  {
    "url": "images/fighters/kano/left/squat-low-kick/0.png",
    "revision": "5976b4f94ecfdcb52eeac118088d0938"
  },
  {
    "url": "images/fighters/kano/left/squat-low-kick/1.png",
    "revision": "52a495d684d1535a748b2ffe112fda8e"
  },
  {
    "url": "images/fighters/kano/left/squat-low-kick/2.png",
    "revision": "1597aed84aeb1cf8115dc9bed07f0961"
  },
  {
    "url": "images/fighters/kano/left/squat-low-punch/0.png",
    "revision": "2ce77aba23d7d87db5b12700976a2cfb"
  },
  {
    "url": "images/fighters/kano/left/squat-low-punch/1.png",
    "revision": "51cae1814b43ea56253cc22c5615262c"
  },
  {
    "url": "images/fighters/kano/left/squat-low-punch/2.png",
    "revision": "d7161263607524e23cd1d85e6cdc1634"
  },
  {
    "url": "images/fighters/kano/left/squating/0.png",
    "revision": "cbd0264b1a8824036c946cdca2b52ca7"
  },
  {
    "url": "images/fighters/kano/left/squating/1.png",
    "revision": "8c8dc24d05edda0dfbdda29ae10e51d8"
  },
  {
    "url": "images/fighters/kano/left/squating/2.png",
    "revision": "652685e91e379bb81950f06fa623f679"
  },
  {
    "url": "images/fighters/kano/left/stand-up/0.png",
    "revision": "652685e91e379bb81950f06fa623f679"
  },
  {
    "url": "images/fighters/kano/left/stand-up/1.png",
    "revision": "8c8dc24d05edda0dfbdda29ae10e51d8"
  },
  {
    "url": "images/fighters/kano/left/stand-up/2.png",
    "revision": "cbd0264b1a8824036c946cdca2b52ca7"
  },
  {
    "url": "images/fighters/kano/left/stand/0.png",
    "revision": "a10f5ec09441a8aeff12b61b52375b1e"
  },
  {
    "url": "images/fighters/kano/left/stand/1.png",
    "revision": "0ee4913a5bddef2c463fb0b28243a202"
  },
  {
    "url": "images/fighters/kano/left/stand/2.png",
    "revision": "f69428275a7ddda360ac8bf65352feeb"
  },
  {
    "url": "images/fighters/kano/left/stand/3.png",
    "revision": "a394b0581bac94383ca793885e752d0b"
  },
  {
    "url": "images/fighters/kano/left/stand/4.png",
    "revision": "379109b7be0aa54285d0acff353088ff"
  },
  {
    "url": "images/fighters/kano/left/stand/5.png",
    "revision": "9e9715f5b78e597755f773a95fc05e59"
  },
  {
    "url": "images/fighters/kano/left/stand/6.png",
    "revision": "80bf123eee2343dcb5e293fad4f87097"
  },
  {
    "url": "images/fighters/kano/left/stand/7.png",
    "revision": "12e5f39212d268faad806ae1b4fb3558"
  },
  {
    "url": "images/fighters/kano/left/stand/8.png",
    "revision": "1c14d76ebbad22bd61ebfff2af9c2e37"
  },
  {
    "url": "images/fighters/kano/left/stand/a1.gif",
    "revision": "fc183c482f6657ffaf8371c28e3fa7d8"
  },
  {
    "url": "images/fighters/kano/left/uppercut/0.png",
    "revision": "bf373ca6b817d5115d9e806b3790d037"
  },
  {
    "url": "images/fighters/kano/left/uppercut/1.png",
    "revision": "137bcea0ce3e1098693f4af71b0f027c"
  },
  {
    "url": "images/fighters/kano/left/uppercut/2.png",
    "revision": "fb3c3b52bad025bcf2f3694243cea004"
  },
  {
    "url": "images/fighters/kano/left/uppercut/3.png",
    "revision": "e7a6ce81ba7e337bbc915f50833ac1a6"
  },
  {
    "url": "images/fighters/kano/left/uppercut/4.png",
    "revision": "f01133bc3b6854cdd82b7844c89d9f79"
  },
  {
    "url": "images/fighters/kano/left/uppercut/5.png",
    "revision": "a22ce99b26383fe53bf2c0c2fff9f59d"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/0.png",
    "revision": "d4221032b4f140e1120025fec51473f4"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/1.png",
    "revision": "2b5ea4f2703c38976d5fd9ef9baf424b"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/2.png",
    "revision": "074539fde6eec026c380d5e75d714edd"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/3.png",
    "revision": "d5e87fdc8060b0719d2247a9057d27de"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/4.png",
    "revision": "bd30914da3f9dbdc4425adbc68d00da4"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/5.png",
    "revision": "e6903b9a4998a98b2e935b999d9ff09d"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/6.png",
    "revision": "cf5473596a3e934796acf63034bfb6bc"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/7.png",
    "revision": "fb84d61bcac04435ee4bfb3e94d2dcba"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/8.png",
    "revision": "e9cdb78af5fe536871bdd1e005988cf5"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/a1.gif",
    "revision": "599e80305d201068da37b9c00fe68d23"
  },
  {
    "url": "images/fighters/kano/left/walking-backward/a2.gif",
    "revision": "41274a902da21b22369dbee5c08a46ea"
  },
  {
    "url": "images/fighters/kano/left/walking/0.png",
    "revision": "7d946654b2aeff28dbbebf31b9808e07"
  },
  {
    "url": "images/fighters/kano/left/walking/1.png",
    "revision": "1252a916882a341eb5e98e9c6de85c22"
  },
  {
    "url": "images/fighters/kano/left/walking/2.png",
    "revision": "d5747d3a7a007671cd9ea99a9bc36027"
  },
  {
    "url": "images/fighters/kano/left/walking/3.png",
    "revision": "e43b42932b73b020a16c2d6b8307090f"
  },
  {
    "url": "images/fighters/kano/left/walking/4.png",
    "revision": "5c6e0f980bc2e253712488d4f5bb51f4"
  },
  {
    "url": "images/fighters/kano/left/walking/5.png",
    "revision": "90d8d5bbbbca531cae50d1fe2bfaf25a"
  },
  {
    "url": "images/fighters/kano/left/walking/6.png",
    "revision": "b1e8e4c171578544c1b461057579a27f"
  },
  {
    "url": "images/fighters/kano/left/walking/7.png",
    "revision": "a002b237597e10c05745a13ef2def357"
  },
  {
    "url": "images/fighters/kano/left/walking/8.png",
    "revision": "77f349823da327ac6f5269bb32e3b04f"
  },
  {
    "url": "images/fighters/kano/left/walking/a1.gif",
    "revision": "599e80305d201068da37b9c00fe68d23"
  },
  {
    "url": "images/fighters/kano/left/walking/a2.gif",
    "revision": "41274a902da21b22369dbee5c08a46ea"
  },
  {
    "url": "images/fighters/kano/left/win/0.png",
    "revision": "b27d4b3698a70ced7cecd0d1b2555138"
  },
  {
    "url": "images/fighters/kano/left/win/1.png",
    "revision": "ca9586fb435f4afa5280c4848fb1bd35"
  },
  {
    "url": "images/fighters/kano/left/win/2.png",
    "revision": "c0b2f838d3816e941b44cdae8e1d5306"
  },
  {
    "url": "images/fighters/kano/left/win/3.png",
    "revision": "3c149d15aa135661a3237ea7e6ea60b7"
  },
  {
    "url": "images/fighters/kano/left/win/4.png",
    "revision": "5a3a9a6038fcada3932de85537474a6d"
  },
  {
    "url": "images/fighters/kano/left/win/5.png",
    "revision": "7e5ce72cf18955c5ac68392b5b0ce095"
  },
  {
    "url": "images/fighters/kano/left/win/6.png",
    "revision": "a2a8dd003571063ba604d206417a6ae9"
  },
  {
    "url": "images/fighters/kano/left/win/7.png",
    "revision": "338ba8b87551d1316ad7e442f4e0e6a1"
  },
  {
    "url": "images/fighters/kano/left/win/8.png",
    "revision": "4e272958692229b118d4fcd6357b4a8a"
  },
  {
    "url": "images/fighters/kano/left/win/9.png",
    "revision": "13ec8ed6c7210c4b96e18a34842e0f5d"
  },
  {
    "url": "images/fighters/kano/right/attractive-stand-up/0.png",
    "revision": "9aa483a9f5996e0b9dffdd98abd3bf67"
  },
  {
    "url": "images/fighters/kano/right/attractive-stand-up/1.png",
    "revision": "367b3779981cf1ab281a95a8978b5802"
  },
  {
    "url": "images/fighters/kano/right/attractive-stand-up/2.png",
    "revision": "a3fb74079e34fb32252be7ca98bec87a"
  },
  {
    "url": "images/fighters/kano/right/attractive-stand-up/3.png",
    "revision": "c1a081f0398f27cdb15d355b6d1b49f2"
  },
  {
    "url": "images/fighters/kano/right/backward-jump-kick/0.png",
    "revision": "d62f54993f665554d082a6a415be1428"
  },
  {
    "url": "images/fighters/kano/right/backward-jump-kick/1.png",
    "revision": "31af4802cc74cca97209f898b0f53129"
  },
  {
    "url": "images/fighters/kano/right/backward-jump-kick/2.png",
    "revision": "f9e09b6e961914a51274a702bf624346"
  },
  {
    "url": "images/fighters/kano/right/backward-jump-punch/0.png",
    "revision": "b2aafa688412eb2d53c567dee40157e5"
  },
  {
    "url": "images/fighters/kano/right/backward-jump-punch/1.png",
    "revision": "aa7a097369a177a60325b3296cd33e86"
  },
  {
    "url": "images/fighters/kano/right/backward-jump-punch/2.png",
    "revision": "0f971085a4868b19bd4f8207e50c39fc"
  },
  {
    "url": "images/fighters/kano/right/backward-jump/0.png",
    "revision": "ff7f4d0a8144e1254bbec6e182a19479"
  },
  {
    "url": "images/fighters/kano/right/backward-jump/1.png",
    "revision": "b873852c2d3d40e681d6b05e75da5a9f"
  },
  {
    "url": "images/fighters/kano/right/backward-jump/2.png",
    "revision": "5fea6fe7c6ac570348277d9502c9b829"
  },
  {
    "url": "images/fighters/kano/right/backward-jump/3.png",
    "revision": "24a8191f9863c49558d97d47558a692b"
  },
  {
    "url": "images/fighters/kano/right/backward-jump/4.png",
    "revision": "bbd5f16ce4319a3a8aacfe140027b62c"
  },
  {
    "url": "images/fighters/kano/right/backward-jump/5.png",
    "revision": "5ed4246ad38b142c88fd8a6e4f21b6fe"
  },
  {
    "url": "images/fighters/kano/right/backward-jump/6.png",
    "revision": "ca4fe208aedc0e4860306a982911870f"
  },
  {
    "url": "images/fighters/kano/right/backward-jump/7.png",
    "revision": "5d4905b2d0a700d3fb321cb2eff8f2e8"
  },
  {
    "url": "images/fighters/kano/right/blocking/0.png",
    "revision": "c43b4639993851b1f0fb76147cb96e5e"
  },
  {
    "url": "images/fighters/kano/right/blocking/1.png",
    "revision": "17b25a1b7339d2e5c4c0a92587900f17"
  },
  {
    "url": "images/fighters/kano/right/blocking/2.png",
    "revision": "1050b045d3c1bc85a3c9df6433dd9da3"
  },
  {
    "url": "images/fighters/kano/right/endure/0.png",
    "revision": "60b6fe4292209101c74382c802ca4999"
  },
  {
    "url": "images/fighters/kano/right/endure/1.png",
    "revision": "d8e6f14242b202e5e26716e9933a2da4"
  },
  {
    "url": "images/fighters/kano/right/endure/2.png",
    "revision": "b336d3df3de291e4ef1b61b3607a3ad3"
  },
  {
    "url": "images/fighters/kano/right/fall/0.png",
    "revision": "d64112af11807e53d5f8f795b40b651e"
  },
  {
    "url": "images/fighters/kano/right/fall/1.png",
    "revision": "fcd091cfa3600b92162cc1e60f32fa3e"
  },
  {
    "url": "images/fighters/kano/right/fall/2.png",
    "revision": "433f074414b4ba609a958d598168c4a5"
  },
  {
    "url": "images/fighters/kano/right/fall/3.png",
    "revision": "ac51eac3f56177ec974aa479bfbea3b5"
  },
  {
    "url": "images/fighters/kano/right/fall/4.png",
    "revision": "5200846f3bbcd1358839a2daef834e30"
  },
  {
    "url": "images/fighters/kano/right/fall/5.png",
    "revision": "822b96b119ffb462257f76e97797de82"
  },
  {
    "url": "images/fighters/kano/right/fall/6.png",
    "revision": "9705729d8ad23ab15519fef08ffe4643"
  },
  {
    "url": "images/fighters/kano/right/forward-jump-kick/0.png",
    "revision": "d62f54993f665554d082a6a415be1428"
  },
  {
    "url": "images/fighters/kano/right/forward-jump-kick/1.png",
    "revision": "31af4802cc74cca97209f898b0f53129"
  },
  {
    "url": "images/fighters/kano/right/forward-jump-kick/2.png",
    "revision": "f9e09b6e961914a51274a702bf624346"
  },
  {
    "url": "images/fighters/kano/right/forward-jump-punch/0.png",
    "revision": "c39282a7041bd37c9c9f19bc4a131a68"
  },
  {
    "url": "images/fighters/kano/right/forward-jump-punch/1.png",
    "revision": "9a5a121cccaadf19c555dd0d6b584a41"
  },
  {
    "url": "images/fighters/kano/right/forward-jump-punch/2.png",
    "revision": "2b29132b68789dbd2c66c55a1ffa1386"
  },
  {
    "url": "images/fighters/kano/right/forward-jump/0.png",
    "revision": "ff7f4d0a8144e1254bbec6e182a19479"
  },
  {
    "url": "images/fighters/kano/right/forward-jump/1.png",
    "revision": "b873852c2d3d40e681d6b05e75da5a9f"
  },
  {
    "url": "images/fighters/kano/right/forward-jump/2.png",
    "revision": "5fea6fe7c6ac570348277d9502c9b829"
  },
  {
    "url": "images/fighters/kano/right/forward-jump/3.png",
    "revision": "24a8191f9863c49558d97d47558a692b"
  },
  {
    "url": "images/fighters/kano/right/forward-jump/4.png",
    "revision": "bbd5f16ce4319a3a8aacfe140027b62c"
  },
  {
    "url": "images/fighters/kano/right/forward-jump/5.png",
    "revision": "5ed4246ad38b142c88fd8a6e4f21b6fe"
  },
  {
    "url": "images/fighters/kano/right/forward-jump/6.png",
    "revision": "ca4fe208aedc0e4860306a982911870f"
  },
  {
    "url": "images/fighters/kano/right/forward-jump/7.png",
    "revision": "5d4905b2d0a700d3fb321cb2eff8f2e8"
  },
  {
    "url": "images/fighters/kano/right/high-kick/0.png",
    "revision": "7c101d7ea5518a9689309ab0a72faf62"
  },
  {
    "url": "images/fighters/kano/right/high-kick/1.png",
    "revision": "12b95869e30f12d91b90bbefbf8b7245"
  },
  {
    "url": "images/fighters/kano/right/high-kick/2.png",
    "revision": "8a58380877de17b6db1cc55d74fc9dbb"
  },
  {
    "url": "images/fighters/kano/right/high-kick/3.png",
    "revision": "7b63db1aa1a25c301e83a9eff37f68ea"
  },
  {
    "url": "images/fighters/kano/right/high-kick/4.png",
    "revision": "48866997666d2e8c89e08c51cd04421d"
  },
  {
    "url": "images/fighters/kano/right/high-kick/5.png",
    "revision": "25efc95115b3ebc30fd544fa0f62f106"
  },
  {
    "url": "images/fighters/kano/right/high-kick/6.png",
    "revision": "691cb6e4a2f021deace166517320fa51"
  },
  {
    "url": "images/fighters/kano/right/high-punch/0.png",
    "revision": "d1fc066474c3ddb796836b3187e71c2b"
  },
  {
    "url": "images/fighters/kano/right/high-punch/1.png",
    "revision": "05acb2b5d5ccd2944feec8c913812475"
  },
  {
    "url": "images/fighters/kano/right/high-punch/2.png",
    "revision": "f78840d249a83d2f520d0c63c1948f59"
  },
  {
    "url": "images/fighters/kano/right/high-punch/3.png",
    "revision": "0670d3c32ed6bd9fe5481b7dbc1aa9a1"
  },
  {
    "url": "images/fighters/kano/right/high-punch/4.png",
    "revision": "788a950022a478cd10dde281abf068e4"
  },
  {
    "url": "images/fighters/kano/right/high-punch/5.png",
    "revision": "860c6813989e0be3367282fa87004e01"
  },
  {
    "url": "images/fighters/kano/right/high-punch/6.png",
    "revision": "c7b71d711453e5971812d2ba28e13582"
  },
  {
    "url": "images/fighters/kano/right/high-punch/7.png",
    "revision": "abf10aeeae7d52062bd3a17fc034219f"
  },
  {
    "url": "images/fighters/kano/right/jumping/0.png",
    "revision": "0195b00030547b8a4932bb79d5fb552c"
  },
  {
    "url": "images/fighters/kano/right/jumping/1.png",
    "revision": "4055e62cfa77a55777eda161d9ebf56c"
  },
  {
    "url": "images/fighters/kano/right/jumping/2.png",
    "revision": "4055e62cfa77a55777eda161d9ebf56c"
  },
  {
    "url": "images/fighters/kano/right/jumping/3.png",
    "revision": "4055e62cfa77a55777eda161d9ebf56c"
  },
  {
    "url": "images/fighters/kano/right/jumping/4.png",
    "revision": "4055e62cfa77a55777eda161d9ebf56c"
  },
  {
    "url": "images/fighters/kano/right/jumping/5.png",
    "revision": "4055e62cfa77a55777eda161d9ebf56c"
  },
  {
    "url": "images/fighters/kano/right/jumping/backup.png",
    "revision": "a0798243555b5d2d8fe6ac559933b381"
  },
  {
    "url": "images/fighters/kano/right/knock-down/0.png",
    "revision": "03c51d3ce373eecf5ebe60ce52face11"
  },
  {
    "url": "images/fighters/kano/right/knock-down/1.png",
    "revision": "f8ec7837df3b53a0a1d173bd92b4f4ad"
  },
  {
    "url": "images/fighters/kano/right/knock-down/2.png",
    "revision": "d9f19b45085340e0af9b186798193c36"
  },
  {
    "url": "images/fighters/kano/right/knock-down/3.png",
    "revision": "656839080cb792e221ed798a26836271"
  },
  {
    "url": "images/fighters/kano/right/knock-down/4.png",
    "revision": "a1f7aa1e4726cc8a79728834ca5c8d62"
  },
  {
    "url": "images/fighters/kano/right/knock-down/5.png",
    "revision": "d8a8b29ec466fe4688be95929d48ba29"
  },
  {
    "url": "images/fighters/kano/right/knock-down/6.png",
    "revision": "d8a8b29ec466fe4688be95929d48ba29"
  },
  {
    "url": "images/fighters/kano/right/knock-down/7.png",
    "revision": "d8a8b29ec466fe4688be95929d48ba29"
  },
  {
    "url": "images/fighters/kano/right/knock-down/8.png",
    "revision": "e12690b13be492da1f37e83c0fa55163"
  },
  {
    "url": "images/fighters/kano/right/knock-down/9.png",
    "revision": "0d01024e4cab7d71aceaba98f6acbcb0"
  },
  {
    "url": "images/fighters/kano/right/low-kick/0.png",
    "revision": "e99f404f6e6fe191ed65e3e9a8efca69"
  },
  {
    "url": "images/fighters/kano/right/low-kick/1.png",
    "revision": "20fcc984c325a1cde7c49a8c66e16926"
  },
  {
    "url": "images/fighters/kano/right/low-kick/2.png",
    "revision": "c098cf6e9f5e56cade7bcb22c31ab838"
  },
  {
    "url": "images/fighters/kano/right/low-kick/3.png",
    "revision": "4503ce1802dded5ffaadae5db8c0c6b1"
  },
  {
    "url": "images/fighters/kano/right/low-kick/4.png",
    "revision": "18639176cb70fd8dfe95d20370eccdfe"
  },
  {
    "url": "images/fighters/kano/right/low-kick/5.png",
    "revision": "c31c06853864be5437d4ce7e838274fb"
  },
  {
    "url": "images/fighters/kano/right/low-punch/0.png",
    "revision": "536758c394bf7812af3ec88e2a64580f"
  },
  {
    "url": "images/fighters/kano/right/low-punch/1.png",
    "revision": "9dab7bf56327402d69de24a342a12106"
  },
  {
    "url": "images/fighters/kano/right/low-punch/2.png",
    "revision": "ed505acfb87c8552fc11ac7446d4ae44"
  },
  {
    "url": "images/fighters/kano/right/low-punch/3.png",
    "revision": "850d9e3493e88297a3dd883ae3020f1f"
  },
  {
    "url": "images/fighters/kano/right/low-punch/4.png",
    "revision": "6ab92f11378ba4afd4a3bcd50e5faec3"
  },
  {
    "url": "images/fighters/kano/right/spin-kick/0.png",
    "revision": "49913ea5b07cdf1056b779af2911917c"
  },
  {
    "url": "images/fighters/kano/right/spin-kick/1.png",
    "revision": "da0549e157d88d5d7639fc210920dc62"
  },
  {
    "url": "images/fighters/kano/right/spin-kick/2.png",
    "revision": "7a5ee51e2fedfc2956c2dd75abdd9063"
  },
  {
    "url": "images/fighters/kano/right/spin-kick/3.png",
    "revision": "2589d854353e6720eec357954b92f028"
  },
  {
    "url": "images/fighters/kano/right/spin-kick/4.png",
    "revision": "248996087caa1beadd42034f692eaa58"
  },
  {
    "url": "images/fighters/kano/right/spin-kick/5.png",
    "revision": "2a1af48b5830fac9d38b4905e56312a1"
  },
  {
    "url": "images/fighters/kano/right/spin-kick/6.png",
    "revision": "e7c1a0500d218e28a010be199f8e2d76"
  },
  {
    "url": "images/fighters/kano/right/spin-kick/7.png",
    "revision": "ba39ea0542eee78d1d07271dc4f814be"
  },
  {
    "url": "images/fighters/kano/right/squat-endure/0.png",
    "revision": "d78f75a23285654519446b9285466687"
  },
  {
    "url": "images/fighters/kano/right/squat-endure/1.png",
    "revision": "8a3ae2ce18a3a0c98ef2bf952f06829b"
  },
  {
    "url": "images/fighters/kano/right/squat-endure/2.png",
    "revision": "20517f39b04ff10859f8d8bf3e7bd5a0"
  },
  {
    "url": "images/fighters/kano/right/squat-high-kick/0.png",
    "revision": "c0cab3ccc9b770346dbfe1a21f9ffb10"
  },
  {
    "url": "images/fighters/kano/right/squat-high-kick/1.png",
    "revision": "0ef534bf08e3a5bbc6d3df868b507351"
  },
  {
    "url": "images/fighters/kano/right/squat-high-kick/2.png",
    "revision": "176fe00bab97a00247726d9ee11889d5"
  },
  {
    "url": "images/fighters/kano/right/squat-high-kick/3.png",
    "revision": "2391f6f425b4ddd52cb4ff7ff23ea336"
  },
  {
    "url": "images/fighters/kano/right/squat-low-kick/0.png",
    "revision": "0fad201b1773a297ebdeb8d62f7f9ee7"
  },
  {
    "url": "images/fighters/kano/right/squat-low-kick/1.png",
    "revision": "25b5b57d4e82abdb7b90082f95de674d"
  },
  {
    "url": "images/fighters/kano/right/squat-low-kick/2.png",
    "revision": "5aa760360872b4ebad7af33b8d52fc42"
  },
  {
    "url": "images/fighters/kano/right/squat-low-punch/0.png",
    "revision": "a88d03a0cad42fad84633ca6a3181a07"
  },
  {
    "url": "images/fighters/kano/right/squat-low-punch/1.png",
    "revision": "448e82830b4ab86bf40958f9e73d0bda"
  },
  {
    "url": "images/fighters/kano/right/squat-low-punch/2.png",
    "revision": "9eed426c7c6e437a9576bb233e51fe4b"
  },
  {
    "url": "images/fighters/kano/right/squating/0.png",
    "revision": "0a165d09a09b0bccce88794d821a2c81"
  },
  {
    "url": "images/fighters/kano/right/squating/1.png",
    "revision": "f30f8a0d6026d8715b4f85db75a5d4a6"
  },
  {
    "url": "images/fighters/kano/right/squating/2.png",
    "revision": "435afd782cc17b370af94153f8697516"
  },
  {
    "url": "images/fighters/kano/right/stand-up/0.png",
    "revision": "435afd782cc17b370af94153f8697516"
  },
  {
    "url": "images/fighters/kano/right/stand-up/1.png",
    "revision": "f30f8a0d6026d8715b4f85db75a5d4a6"
  },
  {
    "url": "images/fighters/kano/right/stand-up/2.png",
    "revision": "0a165d09a09b0bccce88794d821a2c81"
  },
  {
    "url": "images/fighters/kano/right/stand/0.png",
    "revision": "77ae8eb8315373583edb9bf338826eec"
  },
  {
    "url": "images/fighters/kano/right/stand/1.png",
    "revision": "cb6c12ff58b8a2003ed095928012e7a9"
  },
  {
    "url": "images/fighters/kano/right/stand/2.png",
    "revision": "a282bf179675c493e20b594f3ae9eac0"
  },
  {
    "url": "images/fighters/kano/right/stand/3.png",
    "revision": "2d7276904b467352209342a2ddfaf492"
  },
  {
    "url": "images/fighters/kano/right/stand/4.png",
    "revision": "4ccd43d789ed08641aa71d349cd0a1e0"
  },
  {
    "url": "images/fighters/kano/right/stand/5.png",
    "revision": "2c78b09dc2cb813906dc601d02d652be"
  },
  {
    "url": "images/fighters/kano/right/stand/6.png",
    "revision": "587b4457974c50dd13697cda71e37a0b"
  },
  {
    "url": "images/fighters/kano/right/stand/7.png",
    "revision": "fb141d2ae9765d34c5058b3f7ce2335b"
  },
  {
    "url": "images/fighters/kano/right/stand/8.png",
    "revision": "9bc1d229ff4d2b2ecf58ec9280b03758"
  },
  {
    "url": "images/fighters/kano/right/uppercut/0.png",
    "revision": "b2cb34a8a7fcec973665eada7aebef44"
  },
  {
    "url": "images/fighters/kano/right/uppercut/1.png",
    "revision": "b79a3bcf699fb0f4116f952943891c26"
  },
  {
    "url": "images/fighters/kano/right/uppercut/2.png",
    "revision": "9703c64350af7f3f8000ebabd25fdd1e"
  },
  {
    "url": "images/fighters/kano/right/uppercut/3.png",
    "revision": "15c551a90e58ec5860c9de89faccd7ac"
  },
  {
    "url": "images/fighters/kano/right/uppercut/4.png",
    "revision": "d709de16b9184ee86b2201e6c592590d"
  },
  {
    "url": "images/fighters/kano/right/uppercut/5.png",
    "revision": "babd46c11fc5bce71f9a53525376316f"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/0.png",
    "revision": "540c2e1553795995b211ec5fa4286da4"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/1.png",
    "revision": "01c51d038e841f40c60c966530a67bf2"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/2.png",
    "revision": "86755dbd867381dd5405993435f6eaec"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/3.png",
    "revision": "450a7527362baed3216605a594feafb8"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/4.png",
    "revision": "7361e1b57f123083250affae94597eaf"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/5.png",
    "revision": "a47f34582c69c46b53c9ee38f231a1f7"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/6.png",
    "revision": "5aa713658476811d10d54334b0bd42e0"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/7.png",
    "revision": "012bf6b3defd6ce6e5be4a2847e67f4c"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/8.png",
    "revision": "8a9f22c12ec200b67c9a53cd346b43a1"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/a1.gif",
    "revision": "599e80305d201068da37b9c00fe68d23"
  },
  {
    "url": "images/fighters/kano/right/walking-backward/a2.gif",
    "revision": "14c8cc570ff246d8ce45812ca7861cfe"
  },
  {
    "url": "images/fighters/kano/right/walking/0.png",
    "revision": "d6907100e9b1795c10c8f23d66fd17eb"
  },
  {
    "url": "images/fighters/kano/right/walking/1.png",
    "revision": "c68ab4d6c4330060a3bb0061877b90b0"
  },
  {
    "url": "images/fighters/kano/right/walking/2.png",
    "revision": "f79d76ee80844a97710fca734744feda"
  },
  {
    "url": "images/fighters/kano/right/walking/3.png",
    "revision": "b5d1e0892b4dc2bc92a7fa1a1528bb3f"
  },
  {
    "url": "images/fighters/kano/right/walking/4.png",
    "revision": "2a955e47a70ae52178811be0ec1d85e9"
  },
  {
    "url": "images/fighters/kano/right/walking/5.png",
    "revision": "cef1b170bac38e5d9b94453fc537f991"
  },
  {
    "url": "images/fighters/kano/right/walking/6.png",
    "revision": "73cfb981b49e082fe8fc902617d0b745"
  },
  {
    "url": "images/fighters/kano/right/walking/7.png",
    "revision": "4af4d901349bb12c2e3a6e1ae0e9fe27"
  },
  {
    "url": "images/fighters/kano/right/walking/8.png",
    "revision": "434d2634de196e0a0a107d49f4cfa559"
  },
  {
    "url": "images/fighters/kano/right/walking/a1.gif",
    "revision": "599e80305d201068da37b9c00fe68d23"
  },
  {
    "url": "images/fighters/kano/right/walking/a2.gif",
    "revision": "14c8cc570ff246d8ce45812ca7861cfe"
  },
  {
    "url": "images/fighters/kano/right/win/0.png",
    "revision": "b27d4b3698a70ced7cecd0d1b2555138"
  },
  {
    "url": "images/fighters/kano/right/win/1.png",
    "revision": "ca9586fb435f4afa5280c4848fb1bd35"
  },
  {
    "url": "images/fighters/kano/right/win/2.png",
    "revision": "c0b2f838d3816e941b44cdae8e1d5306"
  },
  {
    "url": "images/fighters/kano/right/win/3.png",
    "revision": "3c149d15aa135661a3237ea7e6ea60b7"
  },
  {
    "url": "images/fighters/kano/right/win/4.png",
    "revision": "5a3a9a6038fcada3932de85537474a6d"
  },
  {
    "url": "images/fighters/kano/right/win/5.png",
    "revision": "7e5ce72cf18955c5ac68392b5b0ce095"
  },
  {
    "url": "images/fighters/kano/right/win/6.png",
    "revision": "a2a8dd003571063ba604d206417a6ae9"
  },
  {
    "url": "images/fighters/kano/right/win/7.png",
    "revision": "338ba8b87551d1316ad7e442f4e0e6a1"
  },
  {
    "url": "images/fighters/kano/right/win/8.png",
    "revision": "4e272958692229b118d4fcd6357b4a8a"
  },
  {
    "url": "images/fighters/kano/right/win/9.png",
    "revision": "13ec8ed6c7210c4b96e18a34842e0f5d"
  },
  {
    "url": "images/fighters/subzero/left/attractive-stand-up/0.png",
    "revision": "a113ffba9565f9892aa4fa35c280eced"
  },
  {
    "url": "images/fighters/subzero/left/attractive-stand-up/1.png",
    "revision": "8063c00dd96f7691ff7165825892510c"
  },
  {
    "url": "images/fighters/subzero/left/attractive-stand-up/2.png",
    "revision": "5ecafeb4998a9e5dc7f7406fd802622a"
  },
  {
    "url": "images/fighters/subzero/left/attractive-stand-up/3.png",
    "revision": "f8974ae96f77e1a45e5866ae2117fd65"
  },
  {
    "url": "images/fighters/subzero/left/attractive-stand-up/4.png",
    "revision": "449b9f775efc1971d274432855808c13"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump-kick/0.png",
    "revision": "0710344ef881177503964d3ceffcf947"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump-kick/1.png",
    "revision": "4da428d40209b6c60e25ab06767e4ce2"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump-kick/2.png",
    "revision": "76097b01e9a8692d54557be743aa9155"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump-punch/0.png",
    "revision": "97ab9bee3dba0c69ce28f06a4516af21"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump-punch/1.png",
    "revision": "f681f2f564599d958edd1b91e9bc7c73"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump-punch/2.png",
    "revision": "ecd154f5fc34deb015f8c3f49ec455e0"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump/0.png",
    "revision": "96f4f8224df98c4a2e16c2c7d690c77b"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump/1.png",
    "revision": "53e2c512804be6abcb3f8bd2da579580"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump/2.png",
    "revision": "118c865d3a2b1ea1591628a6ae0ecb81"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump/3.png",
    "revision": "7327471c4ec00e513ad2d4c1e67ead03"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump/4.png",
    "revision": "575f7209488322accf9bb8c8e812acc4"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump/5.png",
    "revision": "7bada319d7bf79500d72ca5bab965682"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump/6.png",
    "revision": "542366505077054105a49bc68f15dff8"
  },
  {
    "url": "images/fighters/subzero/left/backward-jump/7.png",
    "revision": "c4ae76171a4c9c5d8049057183fb7808"
  },
  {
    "url": "images/fighters/subzero/left/blocking/0.png",
    "revision": "526c6f935bd026fd05662fda1abd2dc9"
  },
  {
    "url": "images/fighters/subzero/left/blocking/1.png",
    "revision": "f28704075e3a0876333ff90f5359dc8e"
  },
  {
    "url": "images/fighters/subzero/left/blocking/2.png",
    "revision": "020749701cbf44f25eaaa0d2d209db6b"
  },
  {
    "url": "images/fighters/subzero/left/endure/0.png",
    "revision": "499aa40864bec55e3b6f8b3aefa4546c"
  },
  {
    "url": "images/fighters/subzero/left/endure/1.png",
    "revision": "94a17e3be98366fca012e021050a1fb8"
  },
  {
    "url": "images/fighters/subzero/left/endure/2.png",
    "revision": "2ebdd106b8e2f604215499782919ec1a"
  },
  {
    "url": "images/fighters/subzero/left/fall/0.png",
    "revision": "3417c3b20876501001afec068b0cb9c1"
  },
  {
    "url": "images/fighters/subzero/left/fall/1.png",
    "revision": "28ba3a7d4ceec28c28a37d9e62249ef8"
  },
  {
    "url": "images/fighters/subzero/left/fall/2.png",
    "revision": "9dda9cef80e085874248a795b621530a"
  },
  {
    "url": "images/fighters/subzero/left/fall/3.png",
    "revision": "2f6996bfe839d0e312df7ba730bf1844"
  },
  {
    "url": "images/fighters/subzero/left/fall/4.png",
    "revision": "c5e228e844d8a6e88ce4f3d1b05c6046"
  },
  {
    "url": "images/fighters/subzero/left/fall/5.png",
    "revision": "97c40ebc50e3ade392d6e6fa17d3bfb4"
  },
  {
    "url": "images/fighters/subzero/left/fall/6.png",
    "revision": "c02adb0da3976f3a0938f157d9754d1f"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump-kick/0.png",
    "revision": "0710344ef881177503964d3ceffcf947"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump-kick/1.png",
    "revision": "4da428d40209b6c60e25ab06767e4ce2"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump-kick/2.png",
    "revision": "76097b01e9a8692d54557be743aa9155"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump-punch/0.png",
    "revision": "97ab9bee3dba0c69ce28f06a4516af21"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump-punch/1.png",
    "revision": "f681f2f564599d958edd1b91e9bc7c73"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump-punch/2.png",
    "revision": "ecd154f5fc34deb015f8c3f49ec455e0"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump/0.png",
    "revision": "96f4f8224df98c4a2e16c2c7d690c77b"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump/1.png",
    "revision": "53e2c512804be6abcb3f8bd2da579580"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump/2.png",
    "revision": "118c865d3a2b1ea1591628a6ae0ecb81"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump/3.png",
    "revision": "7327471c4ec00e513ad2d4c1e67ead03"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump/4.png",
    "revision": "575f7209488322accf9bb8c8e812acc4"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump/5.png",
    "revision": "7bada319d7bf79500d72ca5bab965682"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump/6.png",
    "revision": "542366505077054105a49bc68f15dff8"
  },
  {
    "url": "images/fighters/subzero/left/forward-jump/7.png",
    "revision": "c4ae76171a4c9c5d8049057183fb7808"
  },
  {
    "url": "images/fighters/subzero/left/high-kick/0.png",
    "revision": "74304da32a67d7e248a83c8a65ffb383"
  },
  {
    "url": "images/fighters/subzero/left/high-kick/1.png",
    "revision": "6576399331b4e24d72ba9f3975da3730"
  },
  {
    "url": "images/fighters/subzero/left/high-kick/2.png",
    "revision": "ba62b33424b7cfbb73b7122ad6e1d0e7"
  },
  {
    "url": "images/fighters/subzero/left/high-kick/3.png",
    "revision": "92db1e5f76fb1128804a9348f074972a"
  },
  {
    "url": "images/fighters/subzero/left/high-kick/4.png",
    "revision": "3b12ec2ff91fd58f17cac7d59f283dcb"
  },
  {
    "url": "images/fighters/subzero/left/high-kick/5.png",
    "revision": "1e6c5ccb61a74b325ef7e0e7ce80f417"
  },
  {
    "url": "images/fighters/subzero/left/high-kick/6.png",
    "revision": "19c6e3665e6014764de70bca5ec86ac9"
  },
  {
    "url": "images/fighters/subzero/left/high-punch/0.png",
    "revision": "89e04ccad31b0a1f09c12445928f56db"
  },
  {
    "url": "images/fighters/subzero/left/high-punch/1.png",
    "revision": "7dfe716b0f2c79f60280670626d81cab"
  },
  {
    "url": "images/fighters/subzero/left/high-punch/2.png",
    "revision": "3c191aece56f5bb5022e1b07327accee"
  },
  {
    "url": "images/fighters/subzero/left/high-punch/3.png",
    "revision": "1f80fa0de53186d7d1cd9a49aa11e464"
  },
  {
    "url": "images/fighters/subzero/left/high-punch/4.png",
    "revision": "801abbc170d9d34787661a51813b6961"
  },
  {
    "url": "images/fighters/subzero/left/high-punch/5.png",
    "revision": "a85b8ada057a2058833851057da7f723"
  },
  {
    "url": "images/fighters/subzero/left/high-punch/6.png",
    "revision": "586670359308fad4ac4e1ef22b91d0ba"
  },
  {
    "url": "images/fighters/subzero/left/high-punch/7.png",
    "revision": "253b6b08e82608fc1778f49313f1fbf9"
  },
  {
    "url": "images/fighters/subzero/left/jumping/0.png",
    "revision": "8417f193486179bc3aacb890b2177a01"
  },
  {
    "url": "images/fighters/subzero/left/jumping/1.png",
    "revision": "3076dba6c787d8371962b321b5f05352"
  },
  {
    "url": "images/fighters/subzero/left/jumping/2.png",
    "revision": "4847a5e6bda791a334ba9de4b4e183d5"
  },
  {
    "url": "images/fighters/subzero/left/jumping/3.png",
    "revision": "4847a5e6bda791a334ba9de4b4e183d5"
  },
  {
    "url": "images/fighters/subzero/left/jumping/4.png",
    "revision": "4847a5e6bda791a334ba9de4b4e183d5"
  },
  {
    "url": "images/fighters/subzero/left/jumping/5.png",
    "revision": "4847a5e6bda791a334ba9de4b4e183d5"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/0.png",
    "revision": "abc08930ce2ff69ef7553da8b63370c8"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/1.png",
    "revision": "526189ccd7766551fd0e698024d89360"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/2.png",
    "revision": "f351c2ee6766ddca43da8526be9a5417"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/3.png",
    "revision": "e4ee1f6218f9bd953be4b49462d7d08a"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/4.png",
    "revision": "c5fc06e989029ff1414428a91f01ed73"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/5.png",
    "revision": "2fd0fafe0d3165f4725d1e66ccd18460"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/6.png",
    "revision": "2fd0fafe0d3165f4725d1e66ccd18460"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/7.png",
    "revision": "2fd0fafe0d3165f4725d1e66ccd18460"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/8.png",
    "revision": "2fd0fafe0d3165f4725d1e66ccd18460"
  },
  {
    "url": "images/fighters/subzero/left/knock-down/9.png",
    "revision": "401f0c3a1e991d2e0dc3cf1b93f7b21d"
  },
  {
    "url": "images/fighters/subzero/left/low-kick/0.png",
    "revision": "74304da32a67d7e248a83c8a65ffb383"
  },
  {
    "url": "images/fighters/subzero/left/low-kick/1.png",
    "revision": "6576399331b4e24d72ba9f3975da3730"
  },
  {
    "url": "images/fighters/subzero/left/low-kick/2.png",
    "revision": "ba62b33424b7cfbb73b7122ad6e1d0e7"
  },
  {
    "url": "images/fighters/subzero/left/low-kick/3.png",
    "revision": "92db1e5f76fb1128804a9348f074972a"
  },
  {
    "url": "images/fighters/subzero/left/low-kick/4.png",
    "revision": "3b12ec2ff91fd58f17cac7d59f283dcb"
  },
  {
    "url": "images/fighters/subzero/left/low-kick/5.png",
    "revision": "ce840f98cb7ac77b4216ae9503c2c483"
  },
  {
    "url": "images/fighters/subzero/left/low-punch/0.png",
    "revision": "8d5485fc9a055bd078dc54995c193679"
  },
  {
    "url": "images/fighters/subzero/left/low-punch/1.png",
    "revision": "34ee0c6855bc1ace8f22db4035589ad7"
  },
  {
    "url": "images/fighters/subzero/left/low-punch/2.png",
    "revision": "231786bf748e9a83afc38e3fa56f6d27"
  },
  {
    "url": "images/fighters/subzero/left/low-punch/3.png",
    "revision": "6c781e647a50a4e4a8f64b0595bc6ed3"
  },
  {
    "url": "images/fighters/subzero/left/low-punch/4.png",
    "revision": "495eeecdaf2003000f746707d805db84"
  },
  {
    "url": "images/fighters/subzero/left/spin-kick/0.png",
    "revision": "1b11d9e40cd723916c23396ec21b17b8"
  },
  {
    "url": "images/fighters/subzero/left/spin-kick/1.png",
    "revision": "1fa3bfcf30161abbf8db69a4c4b23306"
  },
  {
    "url": "images/fighters/subzero/left/spin-kick/2.png",
    "revision": "db5909f411927635ad6ef3d266c631a0"
  },
  {
    "url": "images/fighters/subzero/left/spin-kick/3.png",
    "revision": "325308b6e2fadf642b150971f221d8b6"
  },
  {
    "url": "images/fighters/subzero/left/spin-kick/4.png",
    "revision": "b9a09e96b868f32913ac300c1b1cc90a"
  },
  {
    "url": "images/fighters/subzero/left/spin-kick/5.png",
    "revision": "7f887e46a9defe11fcede38f640d450a"
  },
  {
    "url": "images/fighters/subzero/left/spin-kick/6.png",
    "revision": "9433af416b1efd24da6983e7b7253f46"
  },
  {
    "url": "images/fighters/subzero/left/spin-kick/7.png",
    "revision": "dc82803822b1e59a65fb84affff1bdd3"
  },
  {
    "url": "images/fighters/subzero/left/squat-endure/0.png",
    "revision": "e73cce5c4f85cd2cda9f9eb27b2500fe"
  },
  {
    "url": "images/fighters/subzero/left/squat-endure/1.png",
    "revision": "4267fb68a6db1519fc398280a89304f3"
  },
  {
    "url": "images/fighters/subzero/left/squat-endure/2.png",
    "revision": "71d6673e93db233e4778308d066005ce"
  },
  {
    "url": "images/fighters/subzero/left/squat-high-kick/0.png",
    "revision": "9511c803703a18c100dcb1cf4ef888bc"
  },
  {
    "url": "images/fighters/subzero/left/squat-high-kick/1.png",
    "revision": "27628d085e084059160cd93b55decbb7"
  },
  {
    "url": "images/fighters/subzero/left/squat-high-kick/2.png",
    "revision": "8dcf72c2ff00179f653368fb02724739"
  },
  {
    "url": "images/fighters/subzero/left/squat-high-kick/3.png",
    "revision": "63babb663aefec008d981bdd77287702"
  },
  {
    "url": "images/fighters/subzero/left/squat-low-kick/0.png",
    "revision": "89e78043c7a7a136ed36a13f63d1b3a8"
  },
  {
    "url": "images/fighters/subzero/left/squat-low-kick/1.png",
    "revision": "0839eca6a16b0c38d306c4bc968d39e2"
  },
  {
    "url": "images/fighters/subzero/left/squat-low-kick/2.png",
    "revision": "88ad40a2dcc934cacb093c2884ceed32"
  },
  {
    "url": "images/fighters/subzero/left/squat-low-punch/0.png",
    "revision": "72e4efe7c22658eca4fc03ac0833875f"
  },
  {
    "url": "images/fighters/subzero/left/squat-low-punch/1.png",
    "revision": "358a7b5bbc49f623390abdd8cb432c31"
  },
  {
    "url": "images/fighters/subzero/left/squat-low-punch/2.png",
    "revision": "d1c3e31b3be8cde319496ac4f40d4bcc"
  },
  {
    "url": "images/fighters/subzero/left/squating/0.png",
    "revision": "071dc2e33f6fbab9ca18053539b639c9"
  },
  {
    "url": "images/fighters/subzero/left/squating/1.png",
    "revision": "1b6a9c3572b26f1687f01136506ddb98"
  },
  {
    "url": "images/fighters/subzero/left/squating/2.png",
    "revision": "ad4e14c6275a5bc9d177763c28452a68"
  },
  {
    "url": "images/fighters/subzero/left/stand-up/0.png",
    "revision": "ad4e14c6275a5bc9d177763c28452a68"
  },
  {
    "url": "images/fighters/subzero/left/stand-up/1.png",
    "revision": "1b6a9c3572b26f1687f01136506ddb98"
  },
  {
    "url": "images/fighters/subzero/left/stand-up/2.png",
    "revision": "071dc2e33f6fbab9ca18053539b639c9"
  },
  {
    "url": "images/fighters/subzero/left/stand/0.png",
    "revision": "332d5d8f558fdb9ad06a1ba421e67c8e"
  },
  {
    "url": "images/fighters/subzero/left/stand/1.png",
    "revision": "290d4a7c6ae7af655ddf9dbc23454f44"
  },
  {
    "url": "images/fighters/subzero/left/stand/2.png",
    "revision": "c1469e8f873e0e758f5d439a7668ea57"
  },
  {
    "url": "images/fighters/subzero/left/stand/3.png",
    "revision": "95aa35dc1717cef4786650efb8be1833"
  },
  {
    "url": "images/fighters/subzero/left/stand/4.png",
    "revision": "6690e653fbbd26781671a3da47b248df"
  },
  {
    "url": "images/fighters/subzero/left/stand/5.png",
    "revision": "bcef03a2f81608056bbe6319534daa4c"
  },
  {
    "url": "images/fighters/subzero/left/stand/6.png",
    "revision": "175e56420e8987652da5af52b0c9c38c"
  },
  {
    "url": "images/fighters/subzero/left/stand/7.png",
    "revision": "b26c6038e1ac88bde13b82beafa51c76"
  },
  {
    "url": "images/fighters/subzero/left/stand/8.png",
    "revision": "ebc635ae135a4edb5999fbe4a3134655"
  },
  {
    "url": "images/fighters/subzero/left/stand/9.png",
    "revision": "13762f96257c317355230db339ea62ed"
  },
  {
    "url": "images/fighters/subzero/left/stand/subzero.gif",
    "revision": "822376066dd47989362e4f4dc9853e28"
  },
  {
    "url": "images/fighters/subzero/left/uppercut/0.png",
    "revision": "4df483df43433fd526db99afff30b4df"
  },
  {
    "url": "images/fighters/subzero/left/uppercut/1.png",
    "revision": "6fd0f374493f2b20f6807498fb460e88"
  },
  {
    "url": "images/fighters/subzero/left/uppercut/2.png",
    "revision": "319c72779c0c2aa71b2d7250c4f76be3"
  },
  {
    "url": "images/fighters/subzero/left/uppercut/3.png",
    "revision": "f7bdd94e04f418eeecba534627c0ae1b"
  },
  {
    "url": "images/fighters/subzero/left/uppercut/4.png",
    "revision": "1be6991dcee036a9b151ecaa39094144"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/0.png",
    "revision": "e0e527a445e24818e508d7fcbb85c9a0"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/1.png",
    "revision": "b339b9d36a569363c7e522f17040efcd"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/2.png",
    "revision": "644c5b39339ee79e58d301043840687c"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/3.png",
    "revision": "6f31be8eefb610e16a56ba63e0a6d0c1"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/4.png",
    "revision": "b944f97559c3e92b453f738d87d5f4bc"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/5.png",
    "revision": "ef704975f34aa214e24f12275c495df3"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/6.png",
    "revision": "1b2430a139e87a196350739d12093f98"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/7.png",
    "revision": "0621db9e600754f2de4235637d6c413c"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/8.png",
    "revision": "68cb7a27ca7444d88b0322b3f7c4607c"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/subzero-walking-b.gif",
    "revision": "f23a66180ce785a1e70cb81afb5ca0d9"
  },
  {
    "url": "images/fighters/subzero/left/walking-backward/subzero-walking-f.gif",
    "revision": "045a028273f23aaf2d8a4110bac35d63"
  },
  {
    "url": "images/fighters/subzero/left/walking/0.png",
    "revision": "1d7c0da2f03fd88ab78387b2a583d393"
  },
  {
    "url": "images/fighters/subzero/left/walking/1.png",
    "revision": "189b1f9f7e9a3cfb95786aa798f0a64b"
  },
  {
    "url": "images/fighters/subzero/left/walking/2.png",
    "revision": "62dc0876cb98b7a4550445d8f169caa3"
  },
  {
    "url": "images/fighters/subzero/left/walking/3.png",
    "revision": "317dcf321aa609a4711af69bc63fa1a7"
  },
  {
    "url": "images/fighters/subzero/left/walking/4.png",
    "revision": "41d0946dcf2698bf54aa353a7395858d"
  },
  {
    "url": "images/fighters/subzero/left/walking/5.png",
    "revision": "fb52cd29b5691ce7424bd8bf54060f4f"
  },
  {
    "url": "images/fighters/subzero/left/walking/6.png",
    "revision": "d7dd5d969a0be1c470b9d55a1665847c"
  },
  {
    "url": "images/fighters/subzero/left/walking/7.png",
    "revision": "dff5abb306266927b40a81f2eb200c30"
  },
  {
    "url": "images/fighters/subzero/left/walking/8.png",
    "revision": "a1f766c14919694004abc125079d532a"
  },
  {
    "url": "images/fighters/subzero/left/walking/subzero-walking-b.gif",
    "revision": "f23a66180ce785a1e70cb81afb5ca0d9"
  },
  {
    "url": "images/fighters/subzero/left/walking/subzero-walking-f.gif",
    "revision": "045a028273f23aaf2d8a4110bac35d63"
  },
  {
    "url": "images/fighters/subzero/left/win/0.png",
    "revision": "0782da27952d61338eeb827ecc85127d"
  },
  {
    "url": "images/fighters/subzero/left/win/1.png",
    "revision": "a19f654f5abf238fa66180d01c28d5ea"
  },
  {
    "url": "images/fighters/subzero/left/win/2.png",
    "revision": "d76b6f27fbfbe5f1e84036f46fac9b14"
  },
  {
    "url": "images/fighters/subzero/left/win/3.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/left/win/4.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/left/win/5.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/left/win/6.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/left/win/7.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/left/win/8.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/left/win/9.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/right/attractive-stand-up/0.png",
    "revision": "52144f4871fade00994b055b2c3cc764"
  },
  {
    "url": "images/fighters/subzero/right/attractive-stand-up/1.png",
    "revision": "66b0b7c66bbbbfd3cc30a02e0b8542cf"
  },
  {
    "url": "images/fighters/subzero/right/attractive-stand-up/2.png",
    "revision": "a61853e074f2b3600f68caa4239942ec"
  },
  {
    "url": "images/fighters/subzero/right/attractive-stand-up/3.png",
    "revision": "a028d41b90eb71d7b858ec1a461cfed8"
  },
  {
    "url": "images/fighters/subzero/right/attractive-stand-up/4.png",
    "revision": "4ccfe4670cab9ada358e88635859e935"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump-kick/0.png",
    "revision": "62171307c2470fb4be12eadfbe028379"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump-kick/1.png",
    "revision": "da2acf836b99f9a23e8313177584044a"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump-kick/2.png",
    "revision": "38bb4ad740f211ed908e10e90a61e4e2"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump-punch/0.png",
    "revision": "6db6a297056392d417118fbca6519f15"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump-punch/1.png",
    "revision": "969aa3a1f598bdd7114acc5a77979b3e"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump-punch/2.png",
    "revision": "1c037ab5e6f95d18f29f80c861d3ca96"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump/0.png",
    "revision": "6af98d4a3fc98610f01455e808eb79f9"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump/1.png",
    "revision": "f4c4f44d8cb9a1e1db9eb630be732b7d"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump/2.png",
    "revision": "b605592184ac18b49270aa28e06e114b"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump/3.png",
    "revision": "5a58ca0c48e8926fe75a2c953cd08481"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump/4.png",
    "revision": "3d840f37792e842c849a211767fa3e6f"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump/5.png",
    "revision": "e79f198fccd458ab83c90023e83e5de9"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump/6.png",
    "revision": "bfdbdfcff6ca50d57984c7b59f7f6ba0"
  },
  {
    "url": "images/fighters/subzero/right/backward-jump/7.png",
    "revision": "d3c091ac826945f4bd841b0829622955"
  },
  {
    "url": "images/fighters/subzero/right/blocking/0.png",
    "revision": "5fea88c21e3de87de62b7c3a99fa1228"
  },
  {
    "url": "images/fighters/subzero/right/blocking/1.png",
    "revision": "7c301864a3bf8af7dd713a1c206103ac"
  },
  {
    "url": "images/fighters/subzero/right/blocking/2.png",
    "revision": "d60b0c35ad931a0da639e565ccb79aab"
  },
  {
    "url": "images/fighters/subzero/right/dizzy/subzero-dizzy.gif",
    "revision": "9f6e32cf8f00079355323ac7913bd475"
  },
  {
    "url": "images/fighters/subzero/right/endure/0.png",
    "revision": "4a19af1efe1088ed3a387bf53d595fd5"
  },
  {
    "url": "images/fighters/subzero/right/endure/1.png",
    "revision": "ad67bb143c41a44d890e6f9ff48df732"
  },
  {
    "url": "images/fighters/subzero/right/endure/2.png",
    "revision": "c8fd42994f458887cdbc27d42281fc8d"
  },
  {
    "url": "images/fighters/subzero/right/fall/0.png",
    "revision": "9339a62b5d9baff17076709d645ba00b"
  },
  {
    "url": "images/fighters/subzero/right/fall/1.png",
    "revision": "cdabd7726695a857e70c9528a6fb6760"
  },
  {
    "url": "images/fighters/subzero/right/fall/2.png",
    "revision": "1b53df00eef2e99ab432deb879917b1d"
  },
  {
    "url": "images/fighters/subzero/right/fall/3.png",
    "revision": "a65d3fbee7007578ebb376e1f1254de5"
  },
  {
    "url": "images/fighters/subzero/right/fall/4.png",
    "revision": "f7b370a3b6d7d2287c9e20e69769ba5a"
  },
  {
    "url": "images/fighters/subzero/right/fall/5.png",
    "revision": "5ced0a660888747c35a47ef53419da26"
  },
  {
    "url": "images/fighters/subzero/right/fall/6.png",
    "revision": "33bde757218cdd8007a09c0fad305347"
  },
  {
    "url": "images/fighters/subzero/right/falling/subzero-falling.gif",
    "revision": "73f12fcc64068307d5703b51c0ea68fe"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump-kick/0.png",
    "revision": "62171307c2470fb4be12eadfbe028379"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump-kick/1.png",
    "revision": "da2acf836b99f9a23e8313177584044a"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump-kick/2.png",
    "revision": "38bb4ad740f211ed908e10e90a61e4e2"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump-punch/0.png",
    "revision": "6db6a297056392d417118fbca6519f15"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump-punch/1.png",
    "revision": "969aa3a1f598bdd7114acc5a77979b3e"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump-punch/2.png",
    "revision": "1c037ab5e6f95d18f29f80c861d3ca96"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump/0.png",
    "revision": "383136b92b9a5cea22597c031018d862"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump/1.png",
    "revision": "49690312c3833e57cfdc4e1c7d275438"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump/2.png",
    "revision": "2ce071695be40f75e0b1310f7af414f8"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump/3.png",
    "revision": "efb772f273a66117c31d84fadaa58fab"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump/4.png",
    "revision": "e11b83e570bd24961c33eb5f557ee6c9"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump/5.png",
    "revision": "6d72a79f9f759242ff2068cd7b3268d1"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump/6.png",
    "revision": "bba2bf7c664d7c8da2898a0a7a6bf64f"
  },
  {
    "url": "images/fighters/subzero/right/forward-jump/7.png",
    "revision": "89acf0d6a8f805c0d94b98d20bb5e7f0"
  },
  {
    "url": "images/fighters/subzero/right/high-kick/0.png",
    "revision": "34191566208233bfc1210e15ca227eeb"
  },
  {
    "url": "images/fighters/subzero/right/high-kick/1.png",
    "revision": "5447a42ef7a00ae27fc53bc2d7f5dbbf"
  },
  {
    "url": "images/fighters/subzero/right/high-kick/2.png",
    "revision": "da87b2e2ed5e8a87bfac0b98f488a376"
  },
  {
    "url": "images/fighters/subzero/right/high-kick/3.png",
    "revision": "b6c8ac35f7611c917bd104351a7a409f"
  },
  {
    "url": "images/fighters/subzero/right/high-kick/4.png",
    "revision": "175db6092bad8d78b6d25c1426f1259d"
  },
  {
    "url": "images/fighters/subzero/right/high-kick/5.png",
    "revision": "03c858b66a07880e8707c67209216f88"
  },
  {
    "url": "images/fighters/subzero/right/high-kick/6.png",
    "revision": "f039409e2bd072a876b0d61ea2c993e4"
  },
  {
    "url": "images/fighters/subzero/right/high-punch/0.png",
    "revision": "03cd28a425c145f7e229e4053ec5b8aa"
  },
  {
    "url": "images/fighters/subzero/right/high-punch/1.png",
    "revision": "d23051ea6d5889e98fcd85811c75617b"
  },
  {
    "url": "images/fighters/subzero/right/high-punch/2.png",
    "revision": "1292341345af4ad74845afe741c6ac6e"
  },
  {
    "url": "images/fighters/subzero/right/high-punch/3.png",
    "revision": "9d12a74fa5a6b971f7b4ca9e219ed02f"
  },
  {
    "url": "images/fighters/subzero/right/high-punch/4.png",
    "revision": "226257ff9f7b6af6c631f17ea2b5a550"
  },
  {
    "url": "images/fighters/subzero/right/high-punch/5.png",
    "revision": "46ecb0abf255ec7feb0bf8ff43872ab8"
  },
  {
    "url": "images/fighters/subzero/right/high-punch/6.png",
    "revision": "5f3da9897848a9588281f078b3aebde4"
  },
  {
    "url": "images/fighters/subzero/right/high-punch/7.png",
    "revision": "84a136804679d91a2a62d2003adf9468"
  },
  {
    "url": "images/fighters/subzero/right/jumping/0.png",
    "revision": "3aac40d8a52c4b01b47896972a849621"
  },
  {
    "url": "images/fighters/subzero/right/jumping/1.png",
    "revision": "aefe249e500bf6b2b563b37270233b15"
  },
  {
    "url": "images/fighters/subzero/right/jumping/2.png",
    "revision": "1a9b3185b59bfb546fc2695d4f521b54"
  },
  {
    "url": "images/fighters/subzero/right/jumping/3.png",
    "revision": "dd4488d691aac6048a4e1a1915659dc1"
  },
  {
    "url": "images/fighters/subzero/right/jumping/4.png",
    "revision": "c939dadb95dace644aa635e767644122"
  },
  {
    "url": "images/fighters/subzero/right/jumping/5.png",
    "revision": "c939dadb95dace644aa635e767644122"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/0.png",
    "revision": "58832d12c7c01ca9736a1b4943c16525"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/1.png",
    "revision": "b76843deb52febf993c3545fc70d7044"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/2.png",
    "revision": "9f204dc00d45e92c49878b7e4069b636"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/3.png",
    "revision": "9e773447e20f53bb75e8ccfdaa34af40"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/4.png",
    "revision": "28e81f99ea41a89299a458f80eeded3a"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/5.png",
    "revision": "569e3f66b51893cc111ddf77411112ed"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/6.png",
    "revision": "569e3f66b51893cc111ddf77411112ed"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/7.png",
    "revision": "569e3f66b51893cc111ddf77411112ed"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/8.png",
    "revision": "569e3f66b51893cc111ddf77411112ed"
  },
  {
    "url": "images/fighters/subzero/right/knock-down/9.png",
    "revision": "c827ee0d4628134c883640f207bb16a4"
  },
  {
    "url": "images/fighters/subzero/right/low-kick/0.png",
    "revision": "d24aa4c7a8b684626290145b99d40575"
  },
  {
    "url": "images/fighters/subzero/right/low-kick/1.png",
    "revision": "ab9ba48b15015054bacc5202cf2bdcae"
  },
  {
    "url": "images/fighters/subzero/right/low-kick/2.png",
    "revision": "ece1a4fec259f610efdc54fbaae6460b"
  },
  {
    "url": "images/fighters/subzero/right/low-kick/3.png",
    "revision": "970ab28374f286062486fb74a71b71c1"
  },
  {
    "url": "images/fighters/subzero/right/low-kick/4.png",
    "revision": "0f22efc7367f679546abe5d2457d5be2"
  },
  {
    "url": "images/fighters/subzero/right/low-kick/5.png",
    "revision": "aca5cb5c9534afaba5e1b2b3c152ac11"
  },
  {
    "url": "images/fighters/subzero/right/low-punch/0.png",
    "revision": "c1a3290cd6a628b594bdb7fab5aa6d73"
  },
  {
    "url": "images/fighters/subzero/right/low-punch/1.png",
    "revision": "dbd2b322f51d75b67e35b1cc723e35a8"
  },
  {
    "url": "images/fighters/subzero/right/low-punch/2.png",
    "revision": "55b852e3e11610a2992264cf42bce70b"
  },
  {
    "url": "images/fighters/subzero/right/low-punch/3.png",
    "revision": "231fcd665faee70dc97b9889c8fe875d"
  },
  {
    "url": "images/fighters/subzero/right/low-punch/4.png",
    "revision": "a9c03e90e790e251f5ce99f8ac7026e3"
  },
  {
    "url": "images/fighters/subzero/right/running/subzero-running.gif",
    "revision": "3d4986d4188268a9a2dce2737dcd6aa8"
  },
  {
    "url": "images/fighters/subzero/right/slipping/subzero-slipping.gif",
    "revision": "50e9a43909f44d1f77cf05aa80e85e76"
  },
  {
    "url": "images/fighters/subzero/right/spin-kick/0.png",
    "revision": "2eea008c2874dd538cb6941f14be3044"
  },
  {
    "url": "images/fighters/subzero/right/spin-kick/1.png",
    "revision": "a1e3e9405a46e20b2f3657392095301f"
  },
  {
    "url": "images/fighters/subzero/right/spin-kick/2.png",
    "revision": "c0fbe98b1b0e40f4f2faf4004b584867"
  },
  {
    "url": "images/fighters/subzero/right/spin-kick/3.png",
    "revision": "efb475a7bdfa3e1856cbcfff887fe165"
  },
  {
    "url": "images/fighters/subzero/right/spin-kick/4.png",
    "revision": "ffef662ac6cd101978dfe0304b2c0b62"
  },
  {
    "url": "images/fighters/subzero/right/spin-kick/5.png",
    "revision": "ac9f494f046c21f15d6db8b9f470f754"
  },
  {
    "url": "images/fighters/subzero/right/spin-kick/6.png",
    "revision": "2e780cb7787b2630a377b38aa76306fb"
  },
  {
    "url": "images/fighters/subzero/right/spin-kick/7.png",
    "revision": "99f9c3b118182d2aad9b09ddc953a637"
  },
  {
    "url": "images/fighters/subzero/right/squat-endure/0.png",
    "revision": "28214d7258f2b88c925cd7b1fd23f6cb"
  },
  {
    "url": "images/fighters/subzero/right/squat-endure/1.png",
    "revision": "5c42902df91c05c4a3fa3cef91fe6360"
  },
  {
    "url": "images/fighters/subzero/right/squat-endure/2.png",
    "revision": "82095b6401c3fcc726ff79659ce0e341"
  },
  {
    "url": "images/fighters/subzero/right/squat-high-kick/0.png",
    "revision": "bf8482cb8db0c7650ebbc00833771e7d"
  },
  {
    "url": "images/fighters/subzero/right/squat-high-kick/1.png",
    "revision": "bc1823391fb04aa919f309280a662bea"
  },
  {
    "url": "images/fighters/subzero/right/squat-high-kick/2.png",
    "revision": "b8ac35b5adbf32da456643f007222b25"
  },
  {
    "url": "images/fighters/subzero/right/squat-high-kick/3.png",
    "revision": "ce5d60e26ec76c91cc6728274d246b30"
  },
  {
    "url": "images/fighters/subzero/right/squat-low-kick/0.png",
    "revision": "cdb45a027c3740f7e037331f0ce09870"
  },
  {
    "url": "images/fighters/subzero/right/squat-low-kick/1.png",
    "revision": "d8af1900a69ce2634304a372ab53d6ce"
  },
  {
    "url": "images/fighters/subzero/right/squat-low-kick/2.png",
    "revision": "8db359df5c38b0b35ee3c600f91fd0b5"
  },
  {
    "url": "images/fighters/subzero/right/squat-low-punch/0.png",
    "revision": "0455a36304d3d29626132c88e5e1471d"
  },
  {
    "url": "images/fighters/subzero/right/squat-low-punch/1.png",
    "revision": "8716a45abac40cd24a35040e8693b739"
  },
  {
    "url": "images/fighters/subzero/right/squat-low-punch/2.png",
    "revision": "7daa1971bc03ded9f6d6096317645f16"
  },
  {
    "url": "images/fighters/subzero/right/squating/0.png",
    "revision": "2f869dae5f7e287d9f37722e76905881"
  },
  {
    "url": "images/fighters/subzero/right/squating/1.png",
    "revision": "51a99d7691ce300930ff80e891737119"
  },
  {
    "url": "images/fighters/subzero/right/squating/2.png",
    "revision": "143d10e73de95e605ed9e6fe8a786825"
  },
  {
    "url": "images/fighters/subzero/right/stand-up/0.png",
    "revision": "9c7a82724d9fb9ee9021ca0e5533eb03"
  },
  {
    "url": "images/fighters/subzero/right/stand-up/1.png",
    "revision": "4a58c07e215bdf767ee4fb140ad3fa5f"
  },
  {
    "url": "images/fighters/subzero/right/stand-up/2.png",
    "revision": "96095c042f6eb9515377bd8e09f5a547"
  },
  {
    "url": "images/fighters/subzero/right/stand/0.png",
    "revision": "3f265e76d83907f129e9192f3af67261"
  },
  {
    "url": "images/fighters/subzero/right/stand/1.png",
    "revision": "adc120b0156134a9f033fc0c416e9192"
  },
  {
    "url": "images/fighters/subzero/right/stand/2.png",
    "revision": "40a22436c240e6b6b34fb44007f37402"
  },
  {
    "url": "images/fighters/subzero/right/stand/3.png",
    "revision": "448d18c37a269114f0921538ffa3192e"
  },
  {
    "url": "images/fighters/subzero/right/stand/4.png",
    "revision": "995ce7c189bbef5f42e64586c2326fe7"
  },
  {
    "url": "images/fighters/subzero/right/stand/5.png",
    "revision": "9b3e034ea0337ac2e466f2e986fafac0"
  },
  {
    "url": "images/fighters/subzero/right/stand/6.png",
    "revision": "ed802b04737750f0c983a6842117cb61"
  },
  {
    "url": "images/fighters/subzero/right/stand/7.png",
    "revision": "37b0d76d05acfe2736239731452333a8"
  },
  {
    "url": "images/fighters/subzero/right/stand/8.png",
    "revision": "2b7815308c7700148a14348fc3003805"
  },
  {
    "url": "images/fighters/subzero/right/stand/subzero.gif",
    "revision": "822376066dd47989362e4f4dc9853e28"
  },
  {
    "url": "images/fighters/subzero/right/uppercut/0.png",
    "revision": "a3d2dd429f8be5e184a72cbe088689e4"
  },
  {
    "url": "images/fighters/subzero/right/uppercut/1.png",
    "revision": "805c0f06ba357e1e6b9b0641cd873c4c"
  },
  {
    "url": "images/fighters/subzero/right/uppercut/2.png",
    "revision": "c2687f54b1d30510d614c0905da5c85c"
  },
  {
    "url": "images/fighters/subzero/right/uppercut/3.png",
    "revision": "57ce6f772bd42cd29da7166969ce9e0b"
  },
  {
    "url": "images/fighters/subzero/right/uppercut/4.png",
    "revision": "6ea8754962deb072c2ee01eab4ebc3d9"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/0.png",
    "revision": "f468cdb30d9b6c0c884d72d271914691"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/1.png",
    "revision": "7d93a73bcb69a8708d483dde19a2a765"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/2.png",
    "revision": "40cd567616299fb14f599f04071891c7"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/3.png",
    "revision": "67e17baf44ef8d3f80168c3732b15baa"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/4.png",
    "revision": "eabf4df68e3e92093fbedf2391d2d47d"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/5.png",
    "revision": "808b89717382fb9f75d6a1c6a594d796"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/6.png",
    "revision": "ce7a86207aae7ca0d003ec7478b89a63"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/7.png",
    "revision": "675a3f2aff73283730d5953d379fb6bb"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/8.png",
    "revision": "04d12bba767f67fa306446e7937c4b6e"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/subzero-walking-b.gif",
    "revision": "f23a66180ce785a1e70cb81afb5ca0d9"
  },
  {
    "url": "images/fighters/subzero/right/walking-backward/subzero-walking-f.gif",
    "revision": "045a028273f23aaf2d8a4110bac35d63"
  },
  {
    "url": "images/fighters/subzero/right/walking/0.png",
    "revision": "c2e5a337438fd3d19a692f48e69a89be"
  },
  {
    "url": "images/fighters/subzero/right/walking/1.png",
    "revision": "8c0cc09bfefb35172a8fd91ea0b28e86"
  },
  {
    "url": "images/fighters/subzero/right/walking/2.png",
    "revision": "f50c00e2afafe2bc945e14ed54d7ccae"
  },
  {
    "url": "images/fighters/subzero/right/walking/3.png",
    "revision": "35e2aa80a78f65e26c5cfb0fc533aeda"
  },
  {
    "url": "images/fighters/subzero/right/walking/4.png",
    "revision": "22904c0e601ef6c3135d5535975a6718"
  },
  {
    "url": "images/fighters/subzero/right/walking/5.png",
    "revision": "18812ef30dbcc3eff1cd3b16cab3bc3d"
  },
  {
    "url": "images/fighters/subzero/right/walking/6.png",
    "revision": "026c4aef696c24fb1472af7187fa8246"
  },
  {
    "url": "images/fighters/subzero/right/walking/7.png",
    "revision": "a4a6bd5bcc41451242d2c5b06ff9ac2f"
  },
  {
    "url": "images/fighters/subzero/right/walking/8.png",
    "revision": "251f979a58fe27d0f09977199af5727b"
  },
  {
    "url": "images/fighters/subzero/right/walking/subzero-walking-b.gif",
    "revision": "f23a66180ce785a1e70cb81afb5ca0d9"
  },
  {
    "url": "images/fighters/subzero/right/walking/subzero-walking-f.gif",
    "revision": "045a028273f23aaf2d8a4110bac35d63"
  },
  {
    "url": "images/fighters/subzero/right/win/0.png",
    "revision": "0782da27952d61338eeb827ecc85127d"
  },
  {
    "url": "images/fighters/subzero/right/win/1.png",
    "revision": "a19f654f5abf238fa66180d01c28d5ea"
  },
  {
    "url": "images/fighters/subzero/right/win/2.png",
    "revision": "d76b6f27fbfbe5f1e84036f46fac9b14"
  },
  {
    "url": "images/fighters/subzero/right/win/3.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/right/win/4.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/right/win/5.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/right/win/6.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/right/win/7.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/right/win/8.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/fighters/subzero/right/win/9.png",
    "revision": "2f6de3869358f962b5da117158006c81"
  },
  {
    "url": "images/github.png",
    "revision": "b8ccd30524130d2ade7186a1e6943ada"
  },
  {
    "url": "index.html",
    "revision": "7e3a3cf8b206141b98c2e36463a56d21"
  },
  {
    "url": "src/mk.js",
    "revision": "0e74b898715befa374f83a65ad76391d"
  },
  {
    "url": "styles/styles.css",
    "revision": "80de672302b7eb27608a0ed81ead5c79"
  },
  {
    "url": "workbox-config.js",
    "revision": "0792fae39ae1ec4303045ac9851ac5ef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
