webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/Styles/MatchList.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/Styles/MatchList.css ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".matchItem{\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-areas: \"campeonJugado informacion items items  equipos equipos\";\n    border-radius: 20px;\n    grid-gap: 0px;\n    padding: 20px;\n    align-items: center;\n    justify-content: center;\n}\n\n.campeonJugado{\n    display: grid;\n    grid-area: campeonJugado;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-areas: \"campeon habilidades\";\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n.campeonIcon{\n    border-radius: 100%;\n    width: 100%;\n}\n\n.campeonJugado h3{\n    font-size: 15px;\n    white-space: nowrap;\n    width: 100%;                   /* IE6 needs any width */\n    overflow: hidden;              /* \"overflow\" value must be different from  visible\"*/    /* Opera < 11*/\n    text-overflow:    ellipsis; \n}\n\n.habilidadesDeInvocador{\n    grid-area: habilidades;\n    align-items: center;\n    justify-content: center;\n    margin: auto;\n}\n\n.habilidadesDeInvocador img{\n    width: 60%;\n}\n\n.win{\n    background: linear-gradient(90deg, rgba(120, 235, 110, 0.49) 0%, rgba(19, 236, 0, 0.08) 100%);\n}\n\n.lose{\n    background: linear-gradient(90deg, #CB524A 0%, rgba(188, 11, 0, 0.08) 100%);\n}\n\n.informacion{\n    grid-area: informacion;\n}\n\n.items{\n    grid-area: items;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 5px;\n\n}\n\n.items img{\n    width: 70%;\n}\n\n.equipos{\n    grid-area: equipos;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n.equipos img{\n    width: 50%;\n    border-radius: 100%;\n}\n\n.equipos p{\n    white-space: nowrap;\n    width: 100%;                   /* IE6 needs any width */\n    overflow: hidden;              /* \"overflow\" value must be different from  visible\"*/    /* Opera < 11*/\n    text-overflow:    ellipsis;    /* IE, Safari (WebKit), Opera >= 11, FF > 6 */\n}\n\n.equipoAzul {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    justify-content: center;\n    align-items: center;\n}\n\n.equipoRojo {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    justify-content: center;\n    align-items: center;\n}\n", "",{"version":3,"sources":["MatchList.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,qCAAqC;IACrC,6EAA6E;IAC7E,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,qCAAqC;IACrC,0CAA0C;IAC1C,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,WAAW,oBAAoB,wBAAwB;IACvD,gBAAgB,eAAe,qDAAqD,KACrD,cAAc;IAC7C,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,6FAA6F;AACjG;;AAEA;IACI,2EAA2E;AAC/E;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,aAAa;;AAEjB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,WAAW,oBAAoB,wBAAwB;IACvD,gBAAgB,eAAe,qDAAqD,KACrD,cAAc;IAC7C,0BAA0B,KAAK,6CAA6C;AAChF;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,uBAAuB;IACvB,mBAAmB;AACvB","file":"MatchList.css","sourcesContent":[".matchItem{\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-areas: \"campeonJugado informacion items items  equipos equipos\";\n    border-radius: 20px;\n    grid-gap: 0px;\n    padding: 20px;\n    align-items: center;\n    justify-content: center;\n}\n\n.campeonJugado{\n    display: grid;\n    grid-area: campeonJugado;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-areas: \"campeon habilidades\";\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n.campeonIcon{\n    border-radius: 100%;\n    width: 100%;\n}\n\n.campeonJugado h3{\n    font-size: 15px;\n    white-space: nowrap;\n    width: 100%;                   /* IE6 needs any width */\n    overflow: hidden;              /* \"overflow\" value must be different from  visible\"*/ \n    -o-text-overflow: ellipsis;    /* Opera < 11*/\n    text-overflow:    ellipsis; \n}\n\n.habilidadesDeInvocador{\n    grid-area: habilidades;\n    align-items: center;\n    justify-content: center;\n    margin: auto;\n}\n\n.habilidadesDeInvocador img{\n    width: 60%;\n}\n\n.win{\n    background: linear-gradient(90deg, rgba(120, 235, 110, 0.49) 0%, rgba(19, 236, 0, 0.08) 100%);\n}\n\n.lose{\n    background: linear-gradient(90deg, #CB524A 0%, rgba(188, 11, 0, 0.08) 100%);\n}\n\n.informacion{\n    grid-area: informacion;\n}\n\n.items{\n    grid-area: items;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 5px;\n\n}\n\n.items img{\n    width: 70%;\n}\n\n.equipos{\n    grid-area: equipos;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n.equipos img{\n    width: 50%;\n    border-radius: 100%;\n}\n\n.equipos p{\n    white-space: nowrap;\n    width: 100%;                   /* IE6 needs any width */\n    overflow: hidden;              /* \"overflow\" value must be different from  visible\"*/ \n    -o-text-overflow: ellipsis;    /* Opera < 11*/\n    text-overflow:    ellipsis;    /* IE, Safari (WebKit), Opera >= 11, FF > 6 */\n}\n\n.equipoAzul {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    justify-content: center;\n    align-items: center;\n}\n\n.equipoRojo {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    justify-content: center;\n    align-items: center;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=_app.js.d1a88ded98d66880eeac.hot-update.js.map