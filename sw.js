if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const c=e=>i(e,f),o={module:{uri:f},exports:d,require:c};s[f]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/index.Bd-ZBlnc.css",revision:"b7e90f4b2031cf22e1fe7108cc4a980a"},{url:"css/index.By2kKtPE.css",revision:"1492ea9d75a08b3ae36b29863755adfb"},{url:"index.html",revision:"da8effe9be02d6825bca423b00878a04"},{url:"js/index-legacy.BUdbIBhh.js",revision:"d3346b7d6b5f4f555866ae6864274b51"},{url:"js/index-legacy.C0DvFKK5.js",revision:"14fd135f77e7168f5b6206c4b9863db5"},{url:"js/index-legacy.CNRzyJKT.js",revision:"b7c02a4280e409d3129ba25d62d03e3f"},{url:"js/index.36pwHGCp.js",revision:"4de18ed29ae955c65e4ee15853dc5954"},{url:"js/index.BQYQJ3AC.js",revision:"1e992748531be9f5fb00f6eb01435f47"},{url:"js/index.CVu4Kpn3.js",revision:"acb3f246f73f5e140c7b92b44974c6b8"},{url:"js/polyfills-legacy.DNcpt3kB.js",revision:"b7b6f881a0fe68244eef3fa72288bff2"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"d2ed9f4007fcf96e8120956ef3ceabb6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
