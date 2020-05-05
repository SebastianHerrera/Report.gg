webpackHotUpdate("static/development/pages/summoner/[region]/[summonerName].js",{

/***/ "./src/images/ranked-emblems lazy recursive ^\\.\\/.*\\.png$":
/*!***********************************************************************!*\
  !*** ./src/images/ranked-emblems lazy ^\.\/.*\.png$ namespace object ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Emblem_Bronze.png": [
		"./src/images/ranked-emblems/Emblem_Bronze.png",
		1
	],
	"./Emblem_Challenger.png": [
		"./src/images/ranked-emblems/Emblem_Challenger.png",
		2
	],
	"./Emblem_Diamond.png": [
		"./src/images/ranked-emblems/Emblem_Diamond.png",
		3
	],
	"./Emblem_Gold.png": [
		"./src/images/ranked-emblems/Emblem_Gold.png",
		4
	],
	"./Emblem_Grandmaster.png": [
		"./src/images/ranked-emblems/Emblem_Grandmaster.png",
		5
	],
	"./Emblem_Iron.png": [
		"./src/images/ranked-emblems/Emblem_Iron.png",
		6
	],
	"./Emblem_Master.png": [
		"./src/images/ranked-emblems/Emblem_Master.png",
		7
	],
	"./Emblem_Platinum.png": [
		"./src/images/ranked-emblems/Emblem_Platinum.png",
		8
	],
	"./Emblem_Silver.png": [
		"./src/images/ranked-emblems/Emblem_Silver.png",
		9
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/images/ranked-emblems lazy recursive ^\\.\\/.*\\.png$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/images/ranked-emblems sync recursive ^\\.\\/.*$":
false,

/***/ "./src/images/ranked-emblems/Emblem_Bronze.png":
false,

/***/ "./src/images/ranked-emblems/Emblem_Challenger.png":
false,

/***/ "./src/images/ranked-emblems/Emblem_Diamond.png":
false,

/***/ "./src/images/ranked-emblems/Emblem_Gold.png":
false,

/***/ "./src/images/ranked-emblems/Emblem_Grandmaster.png":
false,

/***/ "./src/images/ranked-emblems/Emblem_Iron.png":
false,

/***/ "./src/images/ranked-emblems/Emblem_Master.png":
false,

/***/ "./src/images/ranked-emblems/Emblem_Platinum.png":
false,

/***/ "./src/images/ranked-emblems/Emblem_Silver.png":
false,

/***/ "./src/pages/summoner/[region]/[summonerName].js":
/*!*******************************************************!*\
  !*** ./src/pages/summoner/[region]/[summonerName].js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MatchList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/MatchList */ "./src/components/MatchList.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/PageLoading */ "./src/components/PageLoading.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api */ "./src/api.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/home/beleno/Desktop/Proyectos/Personales/Report.gg/src/pages/summoner/[region]/[summonerName].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      loading: true,
      error: null,
      summoner: null,
      summonerIcon: null,
      winRatio: null,
      emblem: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchData", async e => {
      this.setState({
        loading: true,
        error: null
      });

      try {
        const data = await _api__WEBPACK_IMPORTED_MODULE_6__["default"].summoner.general(this.props.query.region, this.props.query.summonerName);
        let win_ratio = 0;
        let lose_ratio = 0;
        win_ratio = data.win_ratio;
        lose_ratio = 100 - win_ratio;
        console.log(win_ratio);
        console.log(lose_ratio);
        let winRate;
        winRate = {
          datasets: [{
            data: [win_ratio, lose_ratio],
            backgroundColor: ["#4ac036", "#f45247"]
          }]
        };
        this.setState({
          winRatio: winRate
        });
        this.setState({
          loading: false,
          summoner: data
        });
      } catch (err) {
        this.setState({
          loading: false,
          error: err
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadImage", imageName => {
      __webpack_require__("./src/images/ranked-emblems lazy recursive ^\\.\\/.*\\.png$")("./".concat(imageName, ".png")).then(image => {
        this.setState({
          image
        });
      });
    });
  }

  static getInitialProps({
    query
  }) {
    return {
      query
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.loading) {
      return __jsx(_components_PageLoading__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 14
        }
      });
    }

    if (this.state.error) {
      return __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 12
        }
      }, this.state.error, "}");
    }

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }
    }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "contenedor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "profileIcon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "notify-badge",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, this.state.summoner.level), __jsx("img", {
      src: this.state.summoner.iconUrl,
      alt: this.state.summoner.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }))), __jsx("div", {
      className: "summonerBasicInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, this.state.summoner.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      content: "Actualizar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Doughnut"], {
      data: this.state.winRatio,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "rankedInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: this.state.emblem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "rankedText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, this.state.summoner.ranked_solo_fives.tier, " ", this.state.summoner.ranked_solo_fives.division), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, "Ranked solo fives"), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, this.state.summoner.ranked_solo_fives.league_points))), __jsx("div", {
      className: "MatchList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }, __jsx(_components_MatchList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      MatchList: this.state.summoner.matchs,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "mostPlayed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }, "Campeones m\xE1s jugados"), this.state.summoner.campeones_mas_jugados.map(campeon => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: "campeonIcon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: campeon.campeon.icon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "campeonName",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 19
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }
      }, campeon.campeon.nombre)), __jsx("div", {
        className: "campeonCantidad",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 19
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      }, campeon.cantidad)));
    }))));
  }

}

/***/ })

})
//# sourceMappingURL=[summonerName].js.f3fa906d6d16bfa72ce4.hot-update.js.map