webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/pages/styles/Summoner.css":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/pages/styles/Summoner.css ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".contenedor{\n    display: grid;\n    margin: auto;\n    padding: 0 10%;\n    grid-template-columns: repeat(5, 1fr);\n\n    grid-template-areas:    \"profileIcon summonerBasicInfo winratio rankedInfo rankedInfo\"\n                            \"matchList matchList matchList mostPlayed ad\";\n\n\n}\n\n.profileIcon{\n    grid-area: profileIcon\n}\n\n.item {\n    position:relative;\n    padding-top:20px;\n    display:inline-block;\n}\n\n.item img{\n    border-radius: 100%;\n    width: 70%;\n}\n\n\n.notify-badge{\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    border: 3px solid #B59524;\n    left: 100px;\n    background:#1D0D4B;\n    text-align: center;\n    border-radius: 100%;\n    color:white;\n    padding: 10px 0px;\n    font-size: 20px;\n}\n\n.summonerBasicInfo h1{\n    font-size: 50px;\n}\n\n.summonerBasicInfo Button{\n    background: #ffb800 !important;\n    color: white !important;\n    font-weight: bolder !important;\n    font-size: 15px !important;\n}\n\n.rankedInfo {\n    grid-column-start: rankedInfo;\n    grid-column-end: rankedInfo;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    align-items: center;\n}\n\n.rankedInfo img {\n    width: 100%;\n}\n\n.MatchList{\n    grid-area: matchList;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 20px;\n    padding: 20px;\n}\n\n.mostPlayed{\n    grid-area: mostPlayed;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(11, 50px);\n    align-items: center;\n    text-align:  center;\n    padding: 20px;\n    grid-gap: 10px;\n}\n\n.mostPlayed h3{\n    grid-column-start: 1;\n    grid-column-end: 4;\n}\n\n\n\n.campeonIcon img{\n    width: 80%;\n}", "",{"version":3,"sources":["Summoner.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,cAAc;IACd,qCAAqC;;IAErC;yEACqE;;;AAGzE;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd;;;AAGA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,uBAAuB;IACvB,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,6BAA6B;IAC7B,2BAA2B;IAC3B,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,0BAA0B;IAC1B,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,qCAAqC;IACrC,oCAAoC;IACpC,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;;;AAIA;IACI,UAAU;AACd","file":"Summoner.css","sourcesContent":[".contenedor{\n    display: grid;\n    margin: auto;\n    padding: 0 10%;\n    grid-template-columns: repeat(5, 1fr);\n\n    grid-template-areas:    \"profileIcon summonerBasicInfo winratio rankedInfo rankedInfo\"\n                            \"matchList matchList matchList mostPlayed ad\";\n\n\n}\n\n.profileIcon{\n    grid-area: profileIcon\n}\n\n.item {\n    position:relative;\n    padding-top:20px;\n    display:inline-block;\n}\n\n.item img{\n    border-radius: 100%;\n    width: 70%;\n}\n\n\n.notify-badge{\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    border: 3px solid #B59524;\n    left: 100px;\n    background:#1D0D4B;\n    text-align: center;\n    border-radius: 100%;\n    color:white;\n    padding: 10px 0px;\n    font-size: 20px;\n}\n\n.summonerBasicInfo h1{\n    font-size: 50px;\n}\n\n.summonerBasicInfo Button{\n    background: #ffb800 !important;\n    color: white !important;\n    font-weight: bolder !important;\n    font-size: 15px !important;\n}\n\n.rankedInfo {\n    grid-column-start: rankedInfo;\n    grid-column-end: rankedInfo;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    align-items: center;\n}\n\n.rankedInfo img {\n    width: 100%;\n}\n\n.MatchList{\n    grid-area: matchList;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 20px;\n    padding: 20px;\n}\n\n.mostPlayed{\n    grid-area: mostPlayed;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(11, 50px);\n    align-items: center;\n    text-align:  center;\n    padding: 20px;\n    grid-gap: 10px;\n}\n\n.mostPlayed h3{\n    grid-column-start: 1;\n    grid-column-end: 4;\n}\n\n\n\n.campeonIcon img{\n    width: 80%;\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=_app.js.8b610b59cc3ac632893f.hot-update.js.map