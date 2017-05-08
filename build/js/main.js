webpackJsonp([0],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadBar = function LoadBar() {
    return _react2.default.createElement(
        "div",
        { className: "load-bar" },
        _react2.default.createElement("div", { className: "load-bar__bar" }),
        _react2.default.createElement("div", { className: "load-bar__bar" }),
        _react2.default.createElement("div", { className: "load-bar__bar" })
    );
};

exports.default = LoadBar;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssTransitionReplace = __webpack_require__(440);

var _reactCssTransitionReplace2 = _interopRequireDefault(_reactCssTransitionReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadContainer = function (_React$Component) {
    _inherits(LoadContainer, _React$Component);

    function LoadContainer() {
        _classCallCheck(this, LoadContainer);

        return _possibleConstructorReturn(this, (LoadContainer.__proto__ || Object.getPrototypeOf(LoadContainer)).apply(this, arguments));
    }

    _createClass(LoadContainer, [{
        key: 'render',
        value: function render() {
            var content = _react2.default.Children.toArray(this.props.children);

            return _react2.default.createElement(
                _reactCssTransitionReplace2.default,
                { transitionName: 'load_container', transitionEnterTimeout: 1000, transitionLeaveTimeout: 1000 },
                this.props.loaded ? content[1] : content[0]
            );
        }
    }]);

    return LoadContainer;
}(_react2.default.Component);

exports.default = LoadContainer;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RtCard = function RtCard(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'bs-1 rt_card__header text-capitalize' },
      props.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'rt_card__content' },
      props.children
    )
  );
};

exports.default = RtCard;


RtCard.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorService = __webpack_require__(147);

var _colorService2 = _interopRequireDefault(_colorService);

var _reactRedux = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtSwatch = function (_Component) {
    _inherits(RtSwatch, _Component);

    function RtSwatch() {
        _classCallCheck(this, RtSwatch);

        return _possibleConstructorReturn(this, (RtSwatch.__proto__ || Object.getPrototypeOf(RtSwatch)).apply(this, arguments));
    }

    _createClass(RtSwatch, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var c = this.props.color;
            if (!this.props.color.color) {
                var t = this.props.colors.filter(function (color) {
                    return color.value === _this2.props.color.toLowerCase();
                })[0];
                c = {
                    color: t ? t.color : '#FFF',
                    value: this.props.color.toLowerCase()
                };
            }
            var style = {
                backgroundColor: c.color || 'white',
                color: _colorService2.default.textColor(c.color),
                borderRadius: '3px'
            };

            return _react2.default.createElement(
                'span',
                { className: this.props.className, style: style },
                c.value || ''
            );
        }
    }]);

    return RtSwatch;
}(_react.Component);

RtSwatch.propTypes = {
    color: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    colors: _propTypes2.default.array
};

function mapState(state) {
    return {
        colors: state.team.colors
    };
}
exports.default = (0, _reactRedux.connect)(mapState)(RtSwatch);

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function colorFactory() {
    return {
        textColor: textColor
    };

    function textColor(color) {
        if (!color) return;
        var splitter = color.length > 4 ? /.{2}/g : /./g;
        var middle = color.length > 4 ? 128 : 8;
        color = color.replace('#', '').match(splitter);
        return color.reduce(function (a, b) {
            return parseInt(b, 16) / 3 + a;
        }, 0) > middle ? '#555' : '#fff';
    }
}();

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var π = function () {
    function π() {
        _classCallCheck(this, π);
    }

    _createClass(π, [{
        key: 'countBy',
        value: function countBy(arr, comp) {
            if (!comp) comp = function comp(a) {
                return a;
            };
            var grouped = {};
            for (var i = 0, l = arr.length; i < l; i++) {
                var a = arr[i];
                if (comp(a) in grouped) {
                    grouped[comp(a)]++;
                } else {
                    grouped[comp(a)] = 1;
                }
            }
            return grouped;
        }
    }, {
        key: 'buckets',
        value: function buckets(arr, list) {
            if (typeof list === 'string') list = list.split(' ');
            if (list instanceof Array) list = this.makeHash(list, 0);
            for (var i = 0, l = arr.length; i < l; i++) {
                list[arr[i]]++;
            }
            return list;
        }
    }, {
        key: 'range',
        value: function range(a, b) {
            var start = b ? a : 0;
            var end = b ? b : a;
            var arr = [];

            for (var i = start; i < end; i++) {
                arr.push(i);
            }

            return arr;
        }

        // internal

    }, {
        key: 'makeHash',
        value: function makeHash(arr, val) {
            var hash = {};
            for (var i = 0, l = arr.length; i < l; i++) {
                hash[arr[i]] = val;
            }
            return hash;
        }
    }]);

    return π;
}();

exports.default = new π();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(345);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(247);

var _app2 = _interopRequireDefault(_app);

var _reactHotLoader = __webpack_require__(508);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(Component) {
    console.log('rendered');
    _reactDom2.default.render(_react2.default.createElement(
        _reactHotLoader.AppContainer,
        null,
        _react2.default.createElement(Component, null)
    ), document.getElementById('root'));
};

render(_app2.default);

if (false) {
    console.log('so so hot');
    module.hot.accept('./app', function () {
        var App = require('./app').default;
        render(App);
    });
}

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _main = __webpack_require__(256);

var _main2 = _interopRequireDefault(_main);

var _reactRedux = __webpack_require__(32);

var _redux = __webpack_require__(141);

var _reduxThunk = __webpack_require__(564);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _fetcher = __webpack_require__(277);

var _fetcher2 = _interopRequireDefault(_fetcher);

var _reducers = __webpack_require__(273);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // dependencies submodules import './components/util/util' import
// './components/rtChart/rtChart' import './components/rtWizard/rtWizard' import
// './components/gymList/gymList' import './components/main/main' import
// './components/rtGym/rtGym'

var store = (0, _redux.createStore)(_reducers2.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_fetcher2.default)));

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(_main2.default, null)
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__(105);

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtBar = function (_Component) {
    _inherits(RtBar, _Component);

    function RtBar() {
        _classCallCheck(this, RtBar);

        return _possibleConstructorReturn(this, (RtBar.__proto__ || Object.getPrototypeOf(RtBar)).apply(this, arguments));
    }

    _createClass(RtBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            makeChart.apply(this);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', { ref: function ref(el) {
                    return _this2.el = el;
                } });
        }
    }]);

    return RtBar;
}(_react.Component);

exports.default = RtBar;


function makeChart() {
    if (!this.props.data) return;
    var data = this.props.data;

    var width = Number(this.props.width) || 500;
    var height = Number(this.props.height) || 200;
    var barWidth = width / data.length;

    var y = d3.scaleLinear().domain([0, d3.max(data)]).range([0, height]);

    var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, data.length]);

    var chart = d3.select(this.el).append('svg').attr('width', width).attr('height', height);

    var bar = chart.selectAll('g').data(data).enter().append('g').attr('transform', function (d, i) {
        return 'translate(' + i * barWidth + ', 0)';
    });

    bar.append('rect').classed('rt-bar', true).attr('width', barWidth - 1).attr('height', 0).attr('opacity', function (d) {
        return +d ? 1 : 0.4;
    }).attr('y', function (d) {
        return height - y(d) - 3;
    }).attr('fill', function (d, i) {
        return rainbow(i);
    }).transition().duration(500).attr('height', function (d) {
        return y(d) + 3;
    });
}

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(32);

var _reactRouterDom = __webpack_require__(44);

var _rtBar = __webpack_require__(248);

var _rtBar2 = _interopRequireDefault(_rtBar);

var _route = __webpack_require__(87);

var _util = __webpack_require__(148);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GymItem = function (_Component) {
    _inherits(GymItem, _Component);

    function GymItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GymItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GymItem.__proto__ || Object.getPrototypeOf(GymItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            data: undefined
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GymItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.getRoutes(this.props.gym._id).then(function (routes) {
                _this2.setState({
                    data: transformRoutes(routes)
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'gym-item' },
                _react2.default.createElement(
                    'div',
                    { className: 'gym-title text-brand text-uppercase text-thin' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: 'gyms/' + this.props.gym.url, className: 'link-plain' },
                        this.props.gym.name
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'gym-preview' },
                    this.state.data ? _react2.default.createElement(_rtBar2.default, { data: this.state.data, width: 200, height: 200 }) : null
                )
            );
        }
    }]);

    return GymItem;
}(_react.Component);

GymItem.propTypes = {
    gym: _propTypes2.default.object
};

function mapState(state, ownProps) {
    return {
        routes: state.routes.toArray().filter(function (route) {
            return route.gym === ownProps.gym._id;
        })
    };
}

function mapDispatch(dispatch) {
    return {
        getRoutes: function getRoutes(id) {
            return dispatch((0, _route.getRoutesByGym)(id));
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(GymItem);


function transformRoutes(routes) {
    var sorted = _util2.default.buckets(routes.map(function (boulder) {
        return boulder.grade;
    }), _util2.default.range(13));
    return Object.keys(sorted).map(function (key) {
        return sorted[key];
    });
}

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _gymItem = __webpack_require__(249);

var _gymItem2 = _interopRequireDefault(_gymItem);

var _loadBar = __webpack_require__(143);

var _loadBar2 = _interopRequireDefault(_loadBar);

var _loadContainer = __webpack_require__(144);

var _loadContainer2 = _interopRequireDefault(_loadContainer);

var _reactRedux = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function listGyms(gyms) {
    return gyms.map(function (gym) {
        return _react2.default.createElement(_gymItem2.default, { key: gym._id, gym: gym, className: 'gym-item' });
    });
}

var GymList = function (_Component) {
    _inherits(GymList, _Component);

    function GymList() {
        _classCallCheck(this, GymList);

        return _possibleConstructorReturn(this, (GymList.__proto__ || Object.getPrototypeOf(GymList)).apply(this, arguments));
    }

    _createClass(GymList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    { className: 'content-title' },
                    'Gyms:'
                ),
                _react2.default.createElement(
                    _loadContainer2.default,
                    { loaded: !!this.props.gyms.length },
                    _react2.default.createElement(
                        'div',
                        { key: '0', className: 'gym-list' },
                        _react2.default.createElement(_loadBar2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { key: '1', className: 'gym-list' },
                        listGyms(this.props.gyms)
                    )
                )
            );
        }
    }]);

    return GymList;
}(_react.Component);

function mapProps(state) {
    return {
        gyms: state.gyms,
        fetching: state.fetching
    };
}

exports.default = (0, _reactRedux.connect)(mapProps)(GymList);

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrows = {
    'asc': '\u25B2',
    'desc': '\u25BC'
};

var RouteHeader = function RouteHeader(props) {
    function arrow(param) {
        return props.sort === param ? arrows[props.dir] : null;
    }

    return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
            'tr',
            { className: 'table-center' },
            _react2.default.createElement(
                'th',
                { onClick: props.handleSort('created_at') },
                'Date ',
                arrow('created_at')
            ),
            _react2.default.createElement(
                'th',
                { onClick: props.handleSort('grade') },
                'Grade ',
                arrow('grade')
            ),
            _react2.default.createElement(
                'th',
                { onClick: props.handleSort('color') },
                'Color ',
                arrow('color')
            ),
            _react2.default.createElement(
                'th',
                { onClick: props.handleSort('setter') },
                'Setter ',
                arrow('setter')
            ),
            _react2.default.createElement(
                'th',
                { className: 'hidden-xs' },
                'Tags'
            )
        )
    );
};

RouteHeader.propTypes = {
    handleSort: _propTypes2.default.func
};

exports.default = RouteHeader;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routeRow = __webpack_require__(253);

var _routeRow2 = _interopRequireDefault(_routeRow);

var _routeHeader = __webpack_require__(251);

var _routeHeader2 = _interopRequireDefault(_routeHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteList = function (_Component) {
    _inherits(RouteList, _Component);

    _createClass(RouteList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                routes: this.props.routes
            });
        }
    }]);

    function RouteList() {
        _classCallCheck(this, RouteList);

        var _this = _possibleConstructorReturn(this, (RouteList.__proto__ || Object.getPrototypeOf(RouteList)).call(this));

        _this.handleSort = _this.handleSort.bind(_this);
        return _this;
    }

    _createClass(RouteList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'table',
                { className: 'table table-mobile' },
                _react2.default.createElement(_routeHeader2.default, { handleSort: this.handleSort, sort: this.state.sort, dir: this.state.dir }),
                _react2.default.createElement(
                    'tbody',
                    null,
                    this.state.routes.map(function (route) {
                        return _react2.default.createElement(_routeRow2.default, { key: route._id, route: route });
                    })
                )
            );
        }
    }, {
        key: 'handleSort',
        value: function handleSort(param) {
            var that = this;
            return function () {
                var newRoutes = [].concat(_toConsumableArray(that.state.routes)),
                    dir = void 0;
                if (that.state.sort === param) {
                    newRoutes.reverse();
                    dir = that.state.dir === 'asc' ? 'desc' : 'asc';
                } else {
                    sortOn(newRoutes, param);
                    dir = 'asc';
                }

                that.setState({
                    dir: dir,
                    sort: param,
                    routes: newRoutes
                });
            };
        }
    }]);

    return RouteList;
}(_react.Component);

RouteList.propTypes = {
    routes: _propTypes2.default.array
};

function sortOn(arr, prop) {
    if (prop === 'grade') {
        return arr.sort(function (a, b) {
            return a[prop] - b[prop];
        });
    }
    arr.sort(function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        } else if (a[prop] > b[prop]) {
            return 1;
        } else {
            return 0;
        }
    });
}

exports.default = RouteList;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rtSwatch = __webpack_require__(146);

var _rtSwatch2 = _interopRequireDefault(_rtSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouteRow = function RouteRow(props) {
  return _react2.default.createElement(
    'tr',
    { className: 'table-center' },
    _react2.default.createElement(
      'td',
      null,
      new Date(props.route.created_at).toLocaleDateString()
    ),
    _react2.default.createElement(
      'td',
      null,
      props.route.grade
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(_rtSwatch2.default, { className: 'list__swatch', color: props.route.color })
    ),
    _react2.default.createElement(
      'td',
      null,
      props.route.setter
    ),
    _react2.default.createElement(
      'td',
      { className: 'hidden-xs' },
      props.route.tags
    )
  );
};

RouteRow.propTypes = {
  route: _propTypes2.default.object
};

exports.default = RouteRow;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rtCard = __webpack_require__(145);

var _rtCard2 = _interopRequireDefault(_rtCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatsCard = function (_Component) {
    _inherits(StatsCard, _Component);

    function StatsCard() {
        _classCallCheck(this, StatsCard);

        return _possibleConstructorReturn(this, (StatsCard.__proto__ || Object.getPrototypeOf(StatsCard)).apply(this, arguments));
    }

    _createClass(StatsCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ data: this.makeOverview(this.props.data) });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.state) return null;
            return _react2.default.createElement(
                _rtCard2.default,
                { title: 'Hey!' },
                _react2.default.createElement(
                    'ul',
                    { className: 'list-unstyled' },
                    _react2.default.createElement(
                        'li',
                        null,
                        'Count: ',
                        this.state.data.count
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'Routes Needed: N/A'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'Oldest Route: ',
                        this.state.data.oldest
                    )
                )
            );
        }
    }, {
        key: 'makeOverview',
        value: function makeOverview(data) {

            var min = Infinity;

            data.forEach(function (route) {
                if (min > Date.parse(route.created_at)) min = route.created_at;
            });
            return {
                count: data.length,
                oldest: new Date(min).toLocaleDateString()
            };
        }
    }]);

    return StatsCard;
}(_react.Component);

StatsCard.propTypes = {
    data: _propTypes2.default.array
};

exports.default = StatsCard;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(32);

var _reactRouter = __webpack_require__(22);

var _rtBigBar = __webpack_require__(261);

var _rtBigBar2 = _interopRequireDefault(_rtBigBar);

var _loadContainer = __webpack_require__(144);

var _loadContainer2 = _interopRequireDefault(_loadContainer);

var _loadBar = __webpack_require__(143);

var _loadBar2 = _interopRequireDefault(_loadBar);

var _statsCard = __webpack_require__(254);

var _statsCard2 = _interopRequireDefault(_statsCard);

var _routeList = __webpack_require__(252);

var _routeList2 = _interopRequireDefault(_routeList);

var _team = __webpack_require__(88);

var _route = __webpack_require__(87);

var _util = __webpack_require__(148);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GymOverview = function (_Component) {
    _inherits(GymOverview, _Component);

    function GymOverview() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GymOverview);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GymOverview.__proto__ || Object.getPrototypeOf(GymOverview)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loaded: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GymOverview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getDataForGym(this.props.match.params.name);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (this.props.gym && this.props.gym.name !== nextProps.gym.name) {
                this.setState({ count: false });
                setTimeout(function () {
                    return _this2.getDataForGym(nextProps.gym.url);
                }, 300);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.error) return _react2.default.createElement(_reactRouter.Redirect, { to: '/' });
            return _react2.default.createElement(
                _loadContainer2.default,
                { loaded: this.state.count },
                _react2.default.createElement(_loadBar2.default, null),
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'content-title bs-1' },
                        this.props.gym && this.props.gym.name
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12 col-sm-8' },
                            _react2.default.createElement(_rtBigBar2.default, { data: this.state.count, width: '500', height: '200' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-4 col-xs-12 col-np' },
                            _react2.default.createElement(_statsCard2.default, { data: this.state.data })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12' },
                            _react2.default.createElement(_routeList2.default, { routes: this.state.data })
                        )
                    )
                )
            );
        }
    }, {
        key: 'getDataForGym',
        value: function getDataForGym(name) {
            var _this3 = this;

            this.props.getTeam().then(function (team) {
                var currentGym = team.gyms.filter(function (gym) {
                    return name === gym.url;
                })[0];
                if (!currentGym) {
                    _this3.setState({
                        error: true
                    });
                } else {
                    return _this3.props.getRoutes(currentGym._id);
                }
            }).then(function (data) {
                if (!data) return;
                _this3.setState({
                    data: data,
                    count: transformRoutes(data)
                });
            });
        }
    }]);

    return GymOverview;
}(_react.Component);

GymOverview.propTypes = {
    name: _propTypes2.default.string,
    gym: _propTypes2.default.object,
    getRoutes: _propTypes2.default.func,
    getTeam: _propTypes2.default.func
};

function mapState(state, ownProps) {
    return {
        gym: state.gyms.filter(function (gym) {
            return gym.url === ownProps.match.params.name;
        })[0]
    };
}

function mapDispatch(dispatch) {
    return {
        getTeam: function getTeam() {
            return dispatch((0, _team.getTeam)());
        },
        getRoutes: function getRoutes(id) {
            return dispatch((0, _route.getRoutesByGym)(id));
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(GymOverview);


function transformRoutes(boulders) {
    var sorted = _util2.default.buckets(boulders.map(function (boulder) {
        return boulder.grade;
    }), _util2.default.range(13));
    return Object.keys(sorted).map(function (key) {
        return {
            grade: key,
            count: sorted[key]
        };
    });
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(44);

var _reactRedux = __webpack_require__(32);

var _team = __webpack_require__(88);

var _gym = __webpack_require__(86);

var _rtHeader = __webpack_require__(258);

var _rtHeader2 = _interopRequireDefault(_rtHeader);

var _rtContent = __webpack_require__(257);

var _rtContent2 = _interopRequireDefault(_rtContent);

var _rtSidebar = __webpack_require__(259);

var _rtSidebar2 = _interopRequireDefault(_rtSidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getTeam();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_rtHeader2.default, null),
                    _react2.default.createElement(_rtSidebar2.default, null),
                    _react2.default.createElement(_rtContent2.default, null)
                )
            );
        }
    }]);

    return Main;
}(_react.Component);

Main.propTypes = {
    getTeam: _propTypes2.default.func.isRequired,
    getGyms: _propTypes2.default.func.isRequired
};

function mapState(state) {
    return {
        team: state.team,
        gyms: state.gyms
    };
}

function mapDispatch(dispatch) {
    return {
        getTeam: function getTeam() {
            return dispatch((0, _team.getTeam)());
        },
        getGyms: function getGyms(team) {
            return dispatch((0, _gym.getGyms)(team));
        }
    };
}

var mainContainer = (0, _reactRedux.connect)(mapState, mapDispatch)(Main);
exports.default = mainContainer;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(44);

var _gymList = __webpack_require__(250);

var _gymList2 = _interopRequireDefault(_gymList);

var _gymOverview = __webpack_require__(255);

var _gymOverview2 = _interopRequireDefault(_gymOverview);

var _rtWizard = __webpack_require__(268);

var _rtWizard2 = _interopRequireDefault(_rtWizard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtContent = function (_Component) {
    _inherits(RtContent, _Component);

    function RtContent() {
        _classCallCheck(this, RtContent);

        return _possibleConstructorReturn(this, (RtContent.__proto__ || Object.getPrototypeOf(RtContent)).apply(this, arguments));
    }

    _createClass(RtContent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'rt-content' },
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _gymList2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/gyms/:name', component: _gymOverview2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/add', component: _rtWizard2.default })
            );
        }
    }]);

    return RtContent;
}(_react.Component);

exports.default = RtContent;

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(44);

var _reactBootstrap = __webpack_require__(195);

var _reactRouterBootstrap = __webpack_require__(529);

var _reactRedux = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtHeader = function (_Component) {
  _inherits(RtHeader, _Component);

  function RtHeader() {
    _classCallCheck(this, RtHeader);

    return _possibleConstructorReturn(this, (RtHeader.__proto__ || Object.getPrototypeOf(RtHeader)).apply(this, arguments));
  }

  _createClass(RtHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { inverse: true, collapseOnSelect: true, fluid: true },
        _react2.default.createElement(
          _reactBootstrap.Navbar.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Brand,
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'Routetracker'
            )
          ),
          _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2.default.createElement(
          _reactBootstrap.Navbar.Collapse,
          null,
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _reactBootstrap.NavDropdown,
              { eventKey: 3, title: 'Gyms', id: 'basic-nav-dropdown' },
              this.props.gyms ? this.props.gyms.map(function (gym) {
                return _react2.default.createElement(
                  _reactBootstrap.MenuItem,
                  { key: gym._id, eventKey: 3.1 },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/gyms/' + gym.url },
                    gym.name
                  )
                );
              }) : null,
              _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
              _react2.default.createElement(
                _reactBootstrap.MenuItem,
                { eventKey: 3.3 },
                'Separated link'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/add' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 2 },
                'Add'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { pullRight: true },
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/logout' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 1, href: '#' },
                'Logout'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/account' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 2, href: '#' },
                'My Account'
              )
            )
          )
        )
      );
    }
  }]);

  return RtHeader;
}(_react.Component);

function mapState(state) {
  return {
    gyms: state.gyms
  };
}

exports.default = (0, _reactRedux.connect)(mapState)(RtHeader);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _menuItem = __webpack_require__(260);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _reactRouterDom = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menu = [{
    name: 'Bouldering',
    to: 'gyms',
    icon: 'glyphicon-sunglasses'
}, {
    name: 'Sport',
    to: 'bouldering',
    icon: 'glyphicon-fire'
}, {
    name: 'Toprope',
    to: 'bouldering',
    icon: 'glyphicon-baby-formula'
}];

var RtSidebar = function RtSidebar() {
    return _react2.default.createElement(
        'div',
        { className: 'rt-sidebar p10' },
        _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            null,
            _react2.default.createElement(
                'ul',
                { className: 'list-unstyled' },
                menu.map(function (item) {
                    return _react2.default.createElement(_menuItem2.default, { key: item.name, item: item });
                })
            )
        )
    );
};

exports.default = RtSidebar;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(44);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(_ref) {
    var item = _ref.item;
    return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' + item.to, className: 'sidebar-link' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('i', { className: 'glyphicon ' + item.icon }),
            item.name
        )
    );
};

MenuItem.propTypes = {
    item: _propTypes2.default.object
};

MenuItem.contextTypes = {
    router: _propTypes2.default.object
};

exports.default = MenuItem;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__(105);

var d3 = _interopRequireWildcard(_d);

var _d3Tip = __webpack_require__(328);

var _d3Tip2 = _interopRequireDefault(_d3Tip);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

d3.tip = _d3Tip2.default;

var RtBar = function (_Component) {
    _inherits(RtBar, _Component);

    function RtBar() {
        _classCallCheck(this, RtBar);

        return _possibleConstructorReturn(this, (RtBar.__proto__ || Object.getPrototypeOf(RtBar)).apply(this, arguments));
    }

    _createClass(RtBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            makeChart.apply(this);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', { ref: function ref(el) {
                    return _this2.el = el;
                } });
        }
    }]);

    return RtBar;
}(_react.Component);

exports.default = RtBar;


function makeChart() {
    if (!this.props.data) return;
    var data = this.props.data;

    var width = 500;
    var height = 288;
    var barWidth = width / data.length;

    var y = d3.scaleLinear().domain([0, d3.max(data, function (d) {
        return d.count;
    })]).range([0, height]);

    var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, data.length]);

    var fontScale = d3.scaleLinear().domain([320, 500]) // expected limits of SVG width
    .range([30, 15]) // when SVG is 1/2 width, text will be 2/3 size
    .clamp(true);

    var chart = d3.select(this.el).append('svg').attr('viewBox', '0 -5 500 300').attr('preserveAspectRatio', 'xMidYMin meet').classed('w100', true).classed('chart bs-1', true);

    var bar = chart.selectAll('g').data(data).enter().append('g').attr('transform', function (d, i) {
        return 'translate(' + i * barWidth + ', 0)';
    });

    var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function (d) {
        return '<strong>Total:</strong> <span style=\'color:#ff0044\'>' + d.count + '</span>';
    });

    chart.call(tip);

    bar.append('rect').classed('rt-bar', true).attr('width', barWidth - 5).attr('height', 0).attr('opacity', function (d) {
        return +d.count ? 1 : 0.4;
    }).attr('y', function (d) {
        return height - y(d.count) - 1;
    }).attr('fill', function (d, i) {
        return rainbow(i);
    }).on('mouseover', tip.show).on('mouseout', tip.hide).transition().duration(500).attr('height', function (d) {
        return y(d.count) + 3;
    });

    bar.append('text').classed('rt-marker', true).attr('y', height - 7).attr('x', barWidth / 2 - 4).attr('text-anchor', 'middle').text(function (d) {
        return d.grade;
    }).attr('font-size', '14px').attr('opacity', 0).transition().duration(500).attr('opacity', 1);

    window.onresize = resized;

    function resized() {
        var scale = fontScale(chart.node().getBoundingClientRect().width);
        var text = d3.selectAll('text');
        text.attr('font-size', scale + 'px');
    }
}

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WzContainer = function WzContainer(props) {
  return _react2.default.createElement(
    "div",
    { className: "wz-big-container" },
    _react2.default.createElement("div", { className: "left-wing" }),
    _react2.default.createElement(
      "div",
      { className: "wz-container" },
      _react2.default.createElement(
        "div",
        { className: "wz-inner", style: { transform: "translateX(" + props.step * -16.6 + "%)" } },
        props.children
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "right-wing" },
      " "
    )
  );
};

exports.default = WzContainer;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorService = __webpack_require__(147);

var _colorService2 = _interopRequireDefault(_colorService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WzItem = function WzItem(props) {
    function _click() {
        props.update(props.type, props.item);
    }
    return _react2.default.createElement(
        'div',
        { onClick: _click, className: setClass(props), style: { backgroundColor: props.item.color ? props.item.color : 'white', color: props.item.color ? _colorService2.default.textColor(props.item.color) : 'inherit' } },
        _react2.default.createElement(
            'div',
            { className: 'wz-label grid-label', onClick: _click },
            props.item.value
        )
    );
};

WzItem.propTypes = {
    update: _propTypes2.default.func,
    item: _propTypes2.default.object,
    type: _propTypes2.default.string
};

function setClass(props) {
    return 'wz-dot ' + (props.selected ? 'item-selected' : '');
}

exports.default = WzItem;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WzListItem = function WzListItem(props) {
    function _click() {
        props.update(props.type, props.item);
    }
    return _react2.default.createElement(
        'div',
        { className: setClass(props) },
        _react2.default.createElement(
            'div',
            { className: 'wz-label list-label', onClick: _click },
            props.item.value || props.item
        )
    );
};

function setClass(props) {
    return 'wz-list-item ' + (props.selected ? 'item-selected' : '');
}

WzListItem.propTypes = {
    selected: _propTypes2.default.bool,
    update: _propTypes2.default.func,
    item: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    type: _propTypes2.default.string
};

exports.default = WzListItem;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WzPage = function (_Component) {
    _inherits(WzPage, _Component);

    function WzPage() {
        _classCallCheck(this, WzPage);

        var _this = _possibleConstructorReturn(this, (WzPage.__proto__ || Object.getPrototypeOf(WzPage)).call(this));

        _this.next = _this.next.bind(_this);
        _this.prev = _this.prev.bind(_this);
        return _this;
    }

    _createClass(WzPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row p10b hidden-xs' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-link', onClick: this.prev },
                        'Previous'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6 text-right' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-link', onClick: this.next },
                        'Next'
                    )
                )
            );
        }
    }, {
        key: 'next',
        value: function next() {
            this.props.next(1);
        }
    }, {
        key: 'prev',
        value: function prev() {
            this.props.prev(-1);
        }
    }]);

    return WzPage;
}(_react.Component);

WzPage.propTypes = {
    prev: _propTypes2.default.func,
    next: _propTypes2.default.func
};

exports.default = WzPage;

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rtSwatch = __webpack_require__(146);

var _rtSwatch2 = _interopRequireDefault(_rtSwatch);

var _reactRedux = __webpack_require__(32);

var _route = __webpack_require__(87);

var _reactBootstrap = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WzPreview = function (_Component) {
    _inherits(WzPreview, _Component);

    function WzPreview() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WzPreview);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WzPreview.__proto__ || Object.getPrototypeOf(WzPreview)).call.apply(_ref, [this].concat(args))), _this), _this.postRoute = function () {
            _this.props.postRoute(_this.transformedRoute);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WzPreview, [{
        key: 'render',
        value: function render() {
            this.transformedRoute = transformRoute(this.props.route);
            if (this.transformedRoute) {
                return _react2.default.createElement(
                    'div',
                    null,
                    this.transformedRoute ? _react2.default.createElement(
                        'ul',
                        { className: 'wz_list p10' },
                        _react2.default.createElement(
                            'li',
                            { className: 'wz_list__item' },
                            'Type: ',
                            this.props.route.type
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz_list__item' },
                            'Color:',
                            _react2.default.createElement(_rtSwatch2.default, { color: this.props.route.color || false })
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz_list__item' },
                            'Grade: ',
                            this.props.route.grade.value
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz_list__item' },
                            'Gym: ',
                            this.props.route.gym.name
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz_list__item' },
                            'Wall: ',
                            this.props.route.location
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz_list__item' },
                            'Tags: ',
                            this.props.route.tags.join(', ')
                        )
                    ) : null,
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary', block: true, onClick: this.postRoute },
                        'Add Route'
                    )
                );
            }
            return null;
        }
    }]);

    return WzPreview;
}(_react.Component);

WzPreview.propTypes = {
    route: _propTypes2.default.object,
    grades: _propTypes2.default.array
};

function transformRoute(obj) {
    if (obj.gym && obj.grade && obj.color && obj.tags.length && obj.location) return {
        type: obj.type,
        color: obj.color.value,
        grade: obj.grade.value.slice(1),
        gym: obj.gym._id,
        wall: obj.location,
        tags: obj.tags.join(', ')
    };
    return false;
}

function mapState(state) {
    return {
        route: state.route,
        grades: state.team.grades
    };
}

function mapDispatch(dispatch) {
    return {
        postRoute: function postRoute(route) {
            return dispatch((0, _route.postRoute)(route));
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(WzPreview);

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wzPage = __webpack_require__(265);

var _wzPage2 = _interopRequireDefault(_wzPage);

var _rtCard = __webpack_require__(145);

var _rtCard2 = _interopRequireDefault(_rtCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WzStep = function WzStep(props) {
  if (props.review) {
    return _react2.default.createElement(
      'div',
      { className: 'wz-item' },
      _react2.default.createElement('div', { className: 'h3' }),
      _react2.default.createElement(
        _rtCard2.default,
        { title: props.name },
        props.children
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'wz-item' },
    _react2.default.createElement(
      'div',
      { className: 'text-center h3 text-capitalize' },
      props.name,
      ':'
    ),
    _react2.default.createElement(_wzPage2.default, { next: props.next, prev: props.prev }),
    props.children
  );
};

WzStep.propTypes = {
  review: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  children: _propTypes2.default.node,
  next: _propTypes2.default.func,
  prev: _propTypes2.default.func
};

exports.default = WzStep;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(32);

var _rtWizard = __webpack_require__(269);

var _rtWizard2 = _interopRequireDefault(_rtWizard);

var _wizard = __webpack_require__(271);

var _team = __webpack_require__(88);

var _gym = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
    return {
        route: state.route,
        team: state.team,
        gyms: state.gyms
    };
}

function mapDispatch(dispatch) {
    return {
        update: function update(field, value) {
            return dispatch((0, _wizard.updateRoute)(field, value));
        },
        updateTags: function updateTags(value) {
            return dispatch((0, _wizard.updateTags)(value));
        },
        resetForm: function resetForm() {
            return dispatch((0, _wizard.resetWizard)());
        },
        getTeam: function getTeam() {
            return dispatch((0, _team.getTeam)());
        },
        getGyms: function getGyms() {
            return dispatch((0, _gym.getGyms)());
        }
    };
}

var RtWizardContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatch)(_rtWizard2.default);

exports.default = RtWizardContainer;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wzGrid = __webpack_require__(270);

var _wzGrid2 = _interopRequireDefault(_wzGrid);

var _wzContainer = __webpack_require__(262);

var _wzContainer2 = _interopRequireDefault(_wzContainer);

var _wzStep = __webpack_require__(267);

var _wzStep2 = _interopRequireDefault(_wzStep);

var _wzPreview = __webpack_require__(266);

var _wzPreview2 = _interopRequireDefault(_wzPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtWizard = function (_Component) {
    _inherits(RtWizard, _Component);

    function RtWizard() {
        _classCallCheck(this, RtWizard);

        var _this = _possibleConstructorReturn(this, (RtWizard.__proto__ || Object.getPrototypeOf(RtWizard)).call(this));

        _this.state = {
            step: 0,
            gymFilter: undefined
        };

        _this.clicks = 0;
        _this.clicked = 'gym';
        _this.steps = ['gym', 'color', 'grade', 'location', 'tags'];
        _this.move = _this.move.bind(_this);
        _this.update = _this.update.bind(_this);
        _this.updateTags = _this.updateTags.bind(_this);
        return _this;
    }

    _createClass(RtWizard, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _wzContainer2.default,
                { step: this.state.step },
                this.stepContent().map(function (step) {
                    return _react2.default.createElement(
                        _wzStep2.default,
                        { key: step.name,
                            name: step.name,
                            prev: _this2.move,
                            next: _this2.move,
                            update: _this2.update,
                            end: step.end,
                            review: step.review },
                        step.content
                    );
                })
            );
        }
    }, {
        key: 'move',
        value: function move(dir, field) {
            var current = this.state.step;
            // called by update
            if (field) return this.setState({ step: current + dir });
            // check if we've made it past this step already
            if (current + dir < 0 || !(this.steps[this.state.step] in this.props.route) && dir > 0) return;
            this.setState({ step: current + dir });
        }
    }, {
        key: 'update',
        value: function update(field, value) {
            var _this3 = this;

            // handle double click
            if (this.clicks > 0 && this.props.route[field] === value) return this.move(1, field);

            this.props.update(field, value);
            var next = this.state.step + 1;

            if (
            // if we've manually gone backwards, don't move
            !this.props.route[this.steps[next]] && field !== 'type' ||
            // or the next step is multiple choice
            this.steps[next] === 'tags') return this.move(1, field);

            // store click for double click
            this.clicks++;
            this.clicked = field;
            setTimeout(function () {
                return _this3.clicks--;
            }, 500);
        }
    }, {
        key: 'updateTags',
        value: function updateTags(tags, tag) {
            var _this4 = this;

            var value = tag.value;

            // handle double click

            if (this.clicks > 0 && this.props.route.tags.indexOf(value) >= 0) return this.move(1, true);

            // if we've manually gone backwards, don't move
            // if (!this.props.route[this.steps[this.state.step + 1]]) return this.move(1, field)
            this.props.updateTags(value);

            // store click for double click
            this.clicks++;
            this.clicked = value;
            setTimeout(function () {
                return _this4.clicks--;
            }, 500);
        }
    }, {
        key: 'filterGyms',
        value: function filterGyms(gyms, filter) {
            if (!filter) return [];
            return gyms.filter(function (gym) {
                return gym.walls[filter].length;
            });
        }
    }, {
        key: 'setFilter',
        value: function setFilter(filter) {
            this.update('type', filter);
            this.setState({ gymFilter: filter });
        }
    }, {
        key: 'resetForm',
        value: function resetForm() {
            this.props.reset();
            this.setState({ step: 1 });
        }
    }, {
        key: 'stepContent',
        value: function stepContent() {
            var _this5 = this;

            return [{
                name: 'gym',
                content: _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'wz-grid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'wz-list-item ' + (this.state.gymFilter === 'boulder' ? 'item-selected' : ''), onClick: function onClick() {
                                    return _this5.setFilter('boulder');
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'wz-label list-label' },
                                'Bouldering'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'wz-list-item ' + (this.state.gymFilter === 'rope' ? 'item-selected' : ''), onClick: function onClick() {
                                    return _this5.setFilter('rope');
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'wz-label list-label' },
                                'Ropes'
                            )
                        )
                    ),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(_wzGrid2.default, { items: this.filterGyms(this.props.gyms, this.state.gymFilter), route: this.props.route, selector: 'gym', update: this.update, list: true })
                )
            }, {
                name: 'color',
                content: _react2.default.createElement(_wzGrid2.default, { items: this.props.team.colors, route: this.props.route, selector: 'color', update: this.update })
            }, {
                name: 'grade',
                content: _react2.default.createElement(_wzGrid2.default, { items: this.props.team.grades, route: this.props.route, selector: 'grade', update: this.update })
            }, {
                name: 'location',
                content: _react2.default.createElement(_wzGrid2.default, { items: this.props.route.gym && this.props.route.gym.walls[this.state.gymFilter] || [], route: this.props.route, selector: 'location', update: this.update, list: true })
            }, {
                name: 'tags',
                content: _react2.default.createElement(_wzGrid2.default, { items: this.props.team.tags, route: this.props.route, selector: 'tags', update: this.updateTags, list: true })
            }, {
                name: 'review',
                end: true,
                review: true,
                content: _react2.default.createElement(_wzPreview2.default, { route: this.props.route })
            }];
        }
    }]);

    return RtWizard;
}(_react.Component);

RtWizard.propTypes = {
    route: _propTypes2.default.object,
    gyms: _propTypes2.default.array,
    update: _propTypes2.default.func,
    team: _propTypes2.default.object
};

exports.default = RtWizard;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wzListItem = __webpack_require__(264);

var _wzListItem2 = _interopRequireDefault(_wzListItem);

var _wzItem = __webpack_require__(263);

var _wzItem2 = _interopRequireDefault(_wzItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WzGrid = function WzGrid(props) {
    var El = props.list ? _wzListItem2.default : _wzItem2.default;

    var isSelected = function isSelected(item) {
        if (props.selector === 'tags') return props.route.tags.indexOf(item.value) > -1;
        return props.route[props.selector] === item;
    };

    return _react2.default.createElement(
        'div',
        { className: 'wz-grid' },
        props.items.map(function (item) {
            return _react2.default.createElement(El, { key: item._id || item, item: item, type: props.selector, update: props.update, selected: isSelected(item) });
        })
    );
};

WzGrid.propTypes = {
    items: _propTypes2.default.array,
    selector: _propTypes2.default.string,
    route: _propTypes2.default.object,
    list: _propTypes2.default.oneOf([undefined, true]),
    tags: _propTypes2.default.oneOf([undefined, true]),
    color: _propTypes2.default.string
};

exports.default = WzGrid;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateRoute = updateRoute;
exports.updateTags = updateTags;
exports.resetWizard = resetWizard;
var UPDATE_ROUTE = exports.UPDATE_ROUTE = 'UPDATE_ROUTE';

function updateRoute(field, value) {
    return {
        type: UPDATE_ROUTE,
        field: field,
        value: value
    };
}

function updateTags(value) {
    return {
        type: 'UPDATE_TAGS',
        value: value
    };
}

function resetWizard() {
    return {
        type: 'RESET_WIZARD'
    };
}

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var initialState = [];

var transformGyms = function transformGyms(gyms) {
    gyms.forEach(function (gym) {
        gym.value = gym.name;
    });
    return gyms;
};

var gym = function gym() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'RECEIVE_GYMS':
            return transformGyms(action.gyms);
        case 'GET_GYMS':
            return state;
        default:
            return state;
    }
};

exports.default = gym;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(141);

var _wizard = __webpack_require__(276);

var _wizard2 = _interopRequireDefault(_wizard);

var _route = __webpack_require__(274);

var _route2 = _interopRequireDefault(_route);

var _team = __webpack_require__(275);

var _team2 = _interopRequireDefault(_team);

var _gym = __webpack_require__(272);

var _gym2 = _interopRequireDefault(_gym);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainReducer = (0, _redux.combineReducers)({
    route: _wizard2.default,
    routes: _route2.default,
    team: _team2.default,
    gyms: _gym2.default
});

exports.default = mainReducer;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = __webpack_require__(365);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = new _immutable2.default.Map();

function route() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_ROUTE':
            return state.set(action.route);
        case 'RECEIVE_ROUTES':
            return state.concat(action.routes.map(function (route) {
                return [route._id, route];
            }));
        default:
            return state;
    }
}

exports.default = route;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
    colors: [],
    tags: [],
    grades: []
};

var transformTeam = function transformTeam(team) {
    return _extends({}, team, {
        grades: team.grades.map(function (grade) {
            return { _id: grade, value: grade };
        }),
        colors: team.colors.map(function (color) {
            return { _id: color.name, value: color.name, color: color.color };
        }),
        tags: team.tags.map(function (tag) {
            return { _id: tag, value: tag };
        })
    });
};

var team = function team() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'RECEIVE_TEAM':
            return transformTeam(action.team);
        case 'GET_TEAM':
            return state;
        default:
            return state;
    }
};

exports.default = team;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
    tags: []
};

var wizard = function wizard() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE_ROUTE':
            return Object.assign({}, state, _defineProperty({}, action.field, action.value));
        case 'UPDATE_TAGS':
            return Object.assign({}, state, { tags: toggleTag(state.tags, action.value) });
        case 'RESET_WIZARD':
            return Object.assign({}, { gym: state.gym });
        default:
            return state;
    }
};

exports.default = wizard;

// utilities

function toggleTag(tags, tag) {
    var ind = tags.indexOf(tag);
    tags = [].concat(_toConsumableArray(tags));
    if (ind >= 0) {
        tags[ind] = tags[tags.length - 1];
        tags.length = tags.length - 1;
        return tags;
    }
    return tags.concat(tag);
}

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fetcher = function () {
    function fetcher() {
        _classCallCheck(this, fetcher);

        this.prefix = '/api/';
    }

    _createClass(fetcher, [{
        key: 'get',
        value: function get(resource, params) {
            return fetch(this.prefix + resource + paramToQuery(params)).then(function (res) {
                return res.json();
            });
        }
    }, {
        key: 'create',
        value: function create(resource, data) {
            return fetch(this.prefix + resource, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: formatBody(data)
            });
        }
    }]);

    return fetcher;
}();

exports.default = new fetcher();


function paramToQuery(obj) {
    if (!obj) return '';

    return '?' + Object.keys(obj).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    }).join('&');
}

function formatBody(obj) {
    return JSON.stringify(obj);
}

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(246);
module.exports = __webpack_require__(245);


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.receiveGyms = receiveGyms;
exports.getGyms = getGyms;
function receiveGyms(gyms) {
    return {
        type: 'RECEIVE_GYMS',
        gyms: gyms
    };
}

function getGyms(team) {
    return function (dispatch, getState, fetcher) {
        return fetcher.get('gyms/team/' + team._id).then(function (gyms) {
            dispatch(receiveGyms(gyms));
            return gyms;
        });
    };
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addRoute = addRoute;
exports.receiveRoutes = receiveRoutes;
exports.getRoutesByGym = getRoutesByGym;
exports.postRoute = postRoute;
function addRoute(route) {
    return {
        type: 'ADD_ROUTE',
        route: route
    };
}

function receiveRoutes(routes) {
    return {
        type: 'RECEIVE_ROUTES',
        routes: routes
    };
}

function getRoutesByGym(id) {
    return function (dispatch, getState, fetcher) {
        return fetcher.get('route/boulder/gym', {
            gym: id
        }).then(function (routes) {
            dispatch(receiveRoutes(routes));
            return routes;
        });
    };
}

function postRoute(route) {
    return function (dispatch, getState, fetcher) {
        return fetcher.create('route', route).then(function (res) {
            dispatch(addRoute(res));
        });
    };
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECEIVE_TEAM = undefined;
exports.receiveTeam = receiveTeam;
exports.getTeam = getTeam;

var _gym = __webpack_require__(86);

var RECEIVE_TEAM = exports.RECEIVE_TEAM = 'RECEIVE_TEAM';

function receiveTeam(team) {
    return {
        type: RECEIVE_TEAM,
        team: team
    };
}

function getTeam() {
    return function (dispatch, getState, fetcher) {
        var state = getState();
        if (state.team.gyms) {
            return Promise.resolve(state);
        } else {
            return fetcher.get('teams/current').then(function (team) {
                dispatch(receiveTeam(team));
                dispatch((0, _gym.receiveGyms)(team.gyms));
                return team;
            });
        }
    };
}

/***/ })

},[576]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vbG9hZEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2xvYWRDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydENhcmQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydFN3YXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NlcnZpY2VzL2NvbG9yU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3J0QmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2d5bUl0ZW0vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlUm93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3N0YXRzQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vcnRDb250ZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL3J0SGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL3J0U2lkZWJhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9ydFNpZGViYXIvbWVudUl0ZW0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvcnRCaWdCYXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6TGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6UHJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elN0ZXAuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9ydFdpemFyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvd3pHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3dpemFyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9neW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvdGVhbS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy93aXphcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NlcnZpY2VzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9neW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3RlYW0uanMiXSwibmFtZXMiOlsiTG9hZEJhciIsIkxvYWRDb250YWluZXIiLCJjb250ZW50IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwicHJvcHMiLCJjaGlsZHJlbiIsImxvYWRlZCIsIkNvbXBvbmVudCIsIlJ0Q2FyZCIsInRpdGxlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJSdFN3YXRjaCIsImMiLCJjb2xvciIsInQiLCJjb2xvcnMiLCJmaWx0ZXIiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJjbGFzc05hbWUiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJhcnJheSIsIm1hcFN0YXRlIiwic3RhdGUiLCJ0ZWFtIiwiY29sb3JGYWN0b3J5Iiwic3BsaXR0ZXIiLCJsZW5ndGgiLCJtaWRkbGUiLCJyZXBsYWNlIiwibWF0Y2giLCJyZWR1Y2UiLCJhIiwiYiIsInBhcnNlSW50Iiwiz4AiLCJhcnIiLCJjb21wIiwiZ3JvdXBlZCIsImkiLCJsIiwibGlzdCIsInNwbGl0IiwiQXJyYXkiLCJtYWtlSGFzaCIsInN0YXJ0IiwiZW5kIiwicHVzaCIsInZhbCIsImhhc2giLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsIkFwcCIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RvcmUiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwid2l0aEV4dHJhQXJndW1lbnQiLCJkMyIsIlJ0QmFyIiwibWFrZUNoYXJ0IiwiYXBwbHkiLCJlbCIsImRhdGEiLCJ3aWR0aCIsIk51bWJlciIsImhlaWdodCIsImJhcldpZHRoIiwieSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwibWF4IiwicmFuZ2UiLCJyYWluYm93Iiwic2NhbGVTZXF1ZW50aWFsIiwiaW50ZXJwb2xhdGVSYWluYm93IiwiY2hhcnQiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiYmFyIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJkIiwiY2xhc3NlZCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIkd5bUl0ZW0iLCJ1bmRlZmluZWQiLCJnZXRSb3V0ZXMiLCJneW0iLCJfaWQiLCJ0aGVuIiwic2V0U3RhdGUiLCJ0cmFuc2Zvcm1Sb3V0ZXMiLCJyb3V0ZXMiLCJ1cmwiLCJuYW1lIiwib3duUHJvcHMiLCJyb3V0ZSIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJpZCIsInNvcnRlZCIsImJ1Y2tldHMiLCJtYXAiLCJib3VsZGVyIiwiZ3JhZGUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwibGlzdEd5bXMiLCJneW1zIiwiR3ltTGlzdCIsIm1hcFByb3BzIiwiZmV0Y2hpbmciLCJhcnJvd3MiLCJSb3V0ZUhlYWRlciIsImFycm93IiwicGFyYW0iLCJzb3J0IiwiZGlyIiwiaGFuZGxlU29ydCIsImZ1bmMiLCJSb3V0ZUxpc3QiLCJiaW5kIiwidGhhdCIsIm5ld1JvdXRlcyIsInJldmVyc2UiLCJzb3J0T24iLCJwcm9wIiwiUm91dGVSb3ciLCJEYXRlIiwiY3JlYXRlZF9hdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNldHRlciIsInRhZ3MiLCJTdGF0c0NhcmQiLCJtYWtlT3ZlcnZpZXciLCJjb3VudCIsIm9sZGVzdCIsIm1pbiIsIkluZmluaXR5IiwiZm9yRWFjaCIsInBhcnNlIiwiR3ltT3ZlcnZpZXciLCJnZXREYXRhRm9yR3ltIiwicGFyYW1zIiwibmV4dFByb3BzIiwic2V0VGltZW91dCIsImVycm9yIiwiZ2V0VGVhbSIsImN1cnJlbnRHeW0iLCJib3VsZGVycyIsIk1haW4iLCJnZXRHeW1zIiwibWFpbkNvbnRhaW5lciIsIlJ0Q29udGVudCIsIlJ0SGVhZGVyIiwibWVudSIsInRvIiwiaWNvbiIsIlJ0U2lkZWJhciIsIml0ZW0iLCJNZW51SXRlbSIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsInRpcCIsImZvbnRTY2FsZSIsImNsYW1wIiwib2Zmc2V0IiwiaHRtbCIsImNhbGwiLCJvbiIsInNob3ciLCJoaWRlIiwidGV4dCIsIm9ucmVzaXplIiwicmVzaXplZCIsInNjYWxlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiV3pDb250YWluZXIiLCJ0cmFuc2Zvcm0iLCJzdGVwIiwiV3pJdGVtIiwiX2NsaWNrIiwidXBkYXRlIiwidHlwZSIsInNldENsYXNzIiwic2VsZWN0ZWQiLCJXekxpc3RJdGVtIiwiYm9vbCIsIld6UGFnZSIsIm5leHQiLCJwcmV2IiwiV3pQcmV2aWV3IiwicG9zdFJvdXRlIiwidHJhbnNmb3JtZWRSb3V0ZSIsInRyYW5zZm9ybVJvdXRlIiwibG9jYXRpb24iLCJqb2luIiwiZ3JhZGVzIiwib2JqIiwic2xpY2UiLCJ3YWxsIiwiV3pTdGVwIiwicmV2aWV3IiwibWFwU3RhdGVUb1Byb3BzIiwiZmllbGQiLCJ1cGRhdGVUYWdzIiwicmVzZXRGb3JtIiwiUnRXaXphcmRDb250YWluZXIiLCJSdFdpemFyZCIsImd5bUZpbHRlciIsImNsaWNrcyIsImNsaWNrZWQiLCJzdGVwcyIsIm1vdmUiLCJzdGVwQ29udGVudCIsImN1cnJlbnQiLCJ0YWciLCJpbmRleE9mIiwid2FsbHMiLCJyZXNldCIsInNldEZpbHRlciIsImZpbHRlckd5bXMiLCJXekdyaWQiLCJFbCIsImlzU2VsZWN0ZWQiLCJzZWxlY3RvciIsIml0ZW1zIiwib25lT2YiLCJ1cGRhdGVSb3V0ZSIsInJlc2V0V2l6YXJkIiwiVVBEQVRFX1JPVVRFIiwiaW5pdGlhbFN0YXRlIiwidHJhbnNmb3JtR3ltcyIsImFjdGlvbiIsIm1haW5SZWR1Y2VyIiwiTWFwIiwic2V0IiwiY29uY2F0IiwidHJhbnNmb3JtVGVhbSIsIndpemFyZCIsImFzc2lnbiIsInRvZ2dsZVRhZyIsImluZCIsImZldGNoZXIiLCJwcmVmaXgiLCJyZXNvdXJjZSIsImZldGNoIiwicGFyYW1Ub1F1ZXJ5IiwicmVzIiwianNvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiZm9ybWF0Qm9keSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNlaXZlR3ltcyIsImdldFN0YXRlIiwiZ2V0IiwiYWRkUm91dGUiLCJyZWNlaXZlUm91dGVzIiwiZ2V0Um91dGVzQnlHeW0iLCJjcmVhdGUiLCJyZWNlaXZlVGVhbSIsIlJFQ0VJVkVfVEVBTSIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsV0FDWjtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDSSwrQ0FBSyxXQUFVLGVBQWYsR0FESjtBQUVJLCtDQUFLLFdBQVUsZUFBZixHQUZKO0FBR0ksK0NBQUssV0FBVSxlQUFmO0FBSEosS0FEWTtBQUFBLENBQWhCOztrQkFRZUEsTzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNQyxhOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLGdCQUFNQyxVQUFVLGdCQUFNQyxR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QjtBQUNqQixtQkFBTzhKLFFBQVFDLE9BQVIsQ0FBZ0IvUCxLQUFoQixDQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsbUJBQU91TyxRQUFRZ0IsR0FBUixDQUFZLGVBQVosRUFDRjNLLElBREUsQ0FDRyxnQkFBUTtBQUNWUyx5QkFBU3VLLFlBQVkzUCxJQUFaLENBQVQ7QUFDQW9GLHlCQUFTLHNCQUFZcEYsS0FBSytGLElBQWpCLENBQVQ7QUFDQSx1QkFBTy9GLElBQVA7QUFDSCxhQUxFLENBQVA7QUFNSDtBQUNKLEtBWkQ7QUFhSCxDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IExvYWRCYXIgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtYmFyX19iYXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWJhcl9fYmFyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1iYXJfX2JhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQmFyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2xvYWRCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2UgZnJvbSAncmVhY3QtY3NzLXRyYW5zaXRpb24tcmVwbGFjZSdcblxuXG5jbGFzcyBMb2FkQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIHRyYW5zaXRpb25OYW1lPVwibG9hZF9jb250YWluZXJcIiB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXsxMDAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXsxMDAwfT5cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmxvYWRlZCA/IGNvbnRlbnRbMV0gOiBjb250ZW50WzBdIH1cbiAgICAgICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZENvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9sb2FkQ29udGFpbmVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jb25zdCBSdENhcmQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicy0xIHJ0X2NhcmRfX2hlYWRlciB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ0X2NhcmRfX2NvbnRlbnRcIj5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUnRDYXJkXG5cblJ0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRDYXJkLmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY29sb3IgZnJvbSAnc2VydmljZXMvY29sb3JTZXJ2aWNlJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jbGFzcyBSdFN3YXRjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYyA9IHRoaXMucHJvcHMuY29sb3JcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNvbG9yLmNvbG9yKSB7XG4gICAgICAgICAgICBsZXQgdCA9IHRoaXMucHJvcHMuY29sb3JzLmZpbHRlcihjb2xvciA9PiBjb2xvci52YWx1ZSA9PT0gdGhpcy5wcm9wcy5jb2xvci50b0xvd2VyQ2FzZSgpKVswXVxuICAgICAgICAgICAgYyA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdD8gdC5jb2xvciA6ICcjRkZGJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5jb2xvci50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGMuY29sb3IgfHwgJ3doaXRlJyxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvci50ZXh0Q29sb3IoYy5jb2xvciksXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17IHN0eWxlIH0+eyBjLnZhbHVlIHx8ICcnIH08L3NwYW4+KVxuICAgIH1cblxufVxuXG5SdFN3YXRjaC5wcm9wVHlwZXMgPSB7XG4gICAgY29sb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBjb2xvcnM6IFByb3BUeXBlcy5hcnJheVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbG9yczogc3RhdGUudGVhbS5jb2xvcnNcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShSdFN3YXRjaClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRTd2F0Y2guanN4IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGNvbG9yRmFjdG9yeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0Q29sb3JcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgaWYoIWNvbG9yKSByZXR1cm5cbiAgICAgICAgbGV0IHNwbGl0dGVyID0gY29sb3IubGVuZ3RoID4gND8gLy57Mn0vZyA6IC8uL2dcbiAgICAgICAgbGV0IG1pZGRsZSA9IGNvbG9yLmxlbmd0aCA+IDQ/IDEyOCA6IDhcbiAgICAgICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKCcjJywgJycpLm1hdGNoKHNwbGl0dGVyKVxuICAgICAgICByZXR1cm4gY29sb3IucmVkdWNlKChhLCBiKSA9PiAocGFyc2VJbnQoYiwgMTYpIC8gMykgKyBhLCAwKSA+IG1pZGRsZSA/ICcjNTU1JyA6ICcjZmZmJ1xuICAgIH1cbn0pKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zZXJ2aWNlcy9jb2xvclNlcnZpY2UuanMiLCJjbGFzcyDPgCB7XG4gICAgY291bnRCeShhcnIsIGNvbXApIHtcbiAgICAgICAgaWYgKCFjb21wKSBcbiAgICAgICAgICAgIGNvbXAgPSAoYSkgPT4gYVxuICAgICAgICBsZXQgZ3JvdXBlZCA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGEgPSBhcnJbaV1cbiAgICAgICAgICAgIGlmIChjb21wKGEpIGluIGdyb3VwZWQpIHtcbiAgICAgICAgICAgICAgICBncm91cGVkW2NvbXAoYSldKytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBlZFtjb21wKGEpXSA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXBlZFxuICAgIH1cblxuICAgIGJ1Y2tldHMoYXJyLCBsaXN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpIFxuICAgICAgICAgICAgbGlzdCA9IGxpc3Quc3BsaXQoJyAnKVxuICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSBcbiAgICAgICAgICAgIGxpc3QgPSB0aGlzLm1ha2VIYXNoKGxpc3QsIDApXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGlzdFthcnJbaV1dKytcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdFxuICAgIH1cblxuICAgIHJhbmdlKGEsIGIpIHtcbiAgICAgICAgbGV0IHN0YXJ0ID0gYlxuICAgICAgICAgICAgPyBhXG4gICAgICAgICAgICA6IDBcbiAgICAgICAgbGV0IGVuZCA9IGJcbiAgICAgICAgICAgID8gYlxuICAgICAgICAgICAgOiBhXG4gICAgICAgIGxldCBhcnIgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIC8vIGludGVybmFsXG5cbiAgICBtYWtlSGFzaChhcnIsIHZhbCkge1xuICAgICAgICBsZXQgaGFzaCA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaGFzaFthcnJbaV1dID0gdmFsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyDPgCgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvdXRpbC5qcyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXG5cblxuY29uc3QgcmVuZGVyID0gQ29tcG9uZW50ID0+IHtcbiAgICBjb25zb2xlLmxvZygncmVuZGVyZWQnKVxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwQ29udGFpbmVyPlxuXHRcdDxDb21wb25lbnQgLz5cblx0PC9BcHBDb250YWluZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgKVxufVxuXG5yZW5kZXIoQXBwKVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIGNvbnNvbGUubG9nKCdzbyBzbyBob3QnKVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL2FwcCcsICgpID0+IHsgXG4gICAgICAgIGNvbnN0IEFwcCA9IHJlcXVpcmUoJy4vYXBwJykuZGVmYXVsdFxuICAgICAgICByZW5kZXIoQXBwKVxuICAgIH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL21haW4uanN4IiwiLy8gZGVwZW5kZW5jaWVzIHN1Ym1vZHVsZXMgaW1wb3J0ICcuL2NvbXBvbmVudHMvdXRpbC91dGlsJyBpbXBvcnRcbi8vICcuL2NvbXBvbmVudHMvcnRDaGFydC9ydENoYXJ0JyBpbXBvcnQgJy4vY29tcG9uZW50cy9ydFdpemFyZC9ydFdpemFyZCcgaW1wb3J0XG4vLyAnLi9jb21wb25lbnRzL2d5bUxpc3QvZ3ltTGlzdCcgaW1wb3J0ICcuL2NvbXBvbmVudHMvbWFpbi9tYWluJyBpbXBvcnRcbi8vICcuL2NvbXBvbmVudHMvcnRHeW0vcnRHeW0nXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNYWluIGZyb20gJ2NvbXBvbmVudHMvbWFpbidcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBmZXRjaGVyIGZyb20gJ3NlcnZpY2VzL2ZldGNoZXInXG5pbXBvcnQgbWFpblJlZHVjZXIgZnJvbSAnZGF0YS9yZWR1Y2VycydcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShtYWluUmVkdWNlciwgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KGZldGNoZXIpKSlcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XG4gICAgICAgICAgICAgIDxNYWluLz5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9hcHAuanN4IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5jbGFzcyBSdEJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIG1ha2VDaGFydC5hcHBseSh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPXsoZWwpID0+IHRoaXMuZWwgPSBlbH0+PC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0QmFyXG5cbmZ1bmN0aW9uIG1ha2VDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGF0YSkgXG4gICAgICAgIHJldHVyblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGFcblxuICAgIGNvbnN0IHdpZHRoID0gTnVtYmVyKHRoaXMucHJvcHMud2lkdGgpIHx8IDUwMFxuICAgIGNvbnN0IGhlaWdodCA9IE51bWJlcih0aGlzLnByb3BzLmhlaWdodCkgfHwgMjAwXG4gICAgY29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGRhdGEubGVuZ3RoXG5cbiAgICBjb25zdCB5ID0gZDNcbiAgICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbXG4gICAgICAgICAgICAwLCBkMy5tYXgoZGF0YSlcbiAgICAgICAgXSlcbiAgICAgICAgLnJhbmdlKFswLCBoZWlnaHRdKVxuXG4gICAgY29uc3QgcmFpbmJvdyA9IGQzXG4gICAgICAgIC5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuICAgICAgICAuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cbiAgICBjb25zdCBjaGFydCA9IGQzXG4gICAgICAgIC5zZWxlY3QodGhpcy5lbClcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG5cbiAgICBjb25zdCBiYXIgPSBjaGFydFxuICAgICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGkgKiBiYXJXaWR0aCArICcsIDApJ1xuICAgICAgICB9KVxuXG4gICAgYmFyXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuY2xhc3NlZCgncnQtYmFyJywgdHJ1ZSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgYmFyV2lkdGggLSAxKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4gKyBkXG4gICAgICAgICAgICA/IDFcbiAgICAgICAgICAgIDogMC40KVxuICAgICAgICAuYXR0cigneScsIChkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0IC0geShkKSAtIDNcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHJhaW5ib3coaSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IHkoZCkgKyAzKVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3J0QmFyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUnRCYXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcnRCYXInXG5cbmltcG9ydCB7IGdldFJvdXRlc0J5R3ltIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3JvdXRlJ1xuXG5pbXBvcnQgz4AgZnJvbSAndXRpbC5qcydcblxuY2xhc3MgR3ltSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFJvdXRlcyh0aGlzLnByb3BzLmd5bS5faWQpXG4gICAgICAgIC50aGVuKHJvdXRlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd5bS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3ltLXRpdGxlIHRleHQtYnJhbmQgdGV4dC11cHBlcmNhc2UgdGV4dC10aGluXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89eyAnZ3ltcy8nICsgdGhpcy5wcm9wcy5neW0udXJsIH0gY2xhc3NOYW1lPVwibGluay1wbGFpblwiPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5neW0ubmFtZSB9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneW0tcHJldmlld1wiPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5kYXRhXG4gICAgICAgICAgICAgICAgICA/IDxSdEJhciBkYXRhPXsgdGhpcy5zdGF0ZS5kYXRhIH0gd2lkdGg9eyAyMDAgfSBoZWlnaHQ9eyAyMDAgfSAvPlxuICAgICAgICAgICAgICAgICAgOiBudWxsIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuR3ltSXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgZ3ltOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlczogc3RhdGUucm91dGVzLnRvQXJyYXkoKS5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBvd25Qcm9wcy5neW0uX2lkKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRSb3V0ZXM6IChpZCkgPT4gZGlzcGF0Y2goZ2V0Um91dGVzQnlHeW0oaWQpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEd5bUl0ZW0pXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlcyhyb3V0ZXMpIHtcbiAgICBsZXQgc29ydGVkID0gz4AuYnVja2V0cyhyb3V0ZXMubWFwKGJvdWxkZXIgPT4gYm91bGRlci5ncmFkZSksIM+ALnJhbmdlKDEzKSlcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc29ydGVkKS5tYXAoa2V5ID0+IHNvcnRlZFtrZXldKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bUxpc3QvZ3ltSXRlbS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR3ltSXRlbSBmcm9tICcuL2d5bUl0ZW0nXG5pbXBvcnQgTG9hZEJhciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9sb2FkQmFyJ1xuaW1wb3J0IExvYWRDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9hZENvbnRhaW5lcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuXG5mdW5jdGlvbiBsaXN0R3ltcyhneW1zKSB7XG4gICAgcmV0dXJuIGd5bXMubWFwKGd5bSA9PiAoPEd5bUl0ZW0ga2V5PXsgZ3ltLl9pZCB9IGd5bT17IGd5bSB9IGNsYXNzTmFtZT1cImd5bS1pdGVtXCIgLz4pKVxufVxuXG5jbGFzcyBHeW1MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50LXRpdGxlXCI+R3ltczo8L3NwYW4+XG4gICAgICAgICAgICAgIDxMb2FkQ29udGFpbmVyIGxvYWRlZD17ICEhdGhpcy5wcm9wcy5neW1zLmxlbmd0aCB9PlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMFwiIGNsYXNzTmFtZT1cImd5bS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkQmFyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIjFcIiBjbGFzc05hbWU9XCJneW0tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgeyBsaXN0R3ltcyh0aGlzLnByb3BzLmd5bXMpIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Mb2FkQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcFByb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltcyxcbiAgICAgICAgZmV0Y2hpbmc6IHN0YXRlLmZldGNoaW5nXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShHeW1MaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IGFycm93cyA9IHsgXG4gICAgJ2FzYyc6ICdcXHUyNUIyJyxcbiAgICAnZGVzYyc6ICdcXHUyNUJDJ1xufVxuXG5cbmNvbnN0IFJvdXRlSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gICAgZnVuY3Rpb24gYXJyb3cocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnNvcnQgPT09IHBhcmFtPyBhcnJvd3NbcHJvcHMuZGlyXSA6IG51bGxcbiAgICB9IFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRhYmxlLWNlbnRlclwiPlxuICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdjcmVhdGVkX2F0Jyl9PkRhdGUge2Fycm93KCdjcmVhdGVkX2F0Jyl9PC90aD5cbiAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnZ3JhZGUnKX0+R3JhZGUge2Fycm93KCdncmFkZScpfTwvdGg+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ2NvbG9yJyl9PkNvbG9yIHthcnJvdygnY29sb3InKX08L3RoPlxuICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdzZXR0ZXInKX0+U2V0dGVyIHthcnJvdygnc2V0dGVyJyl9PC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGlkZGVuLXhzXCI+VGFnczwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgIClcbn1cblxuUm91dGVIZWFkZXIucHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZVNvcnQ6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZUhlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBSb3V0ZVJvdyBmcm9tICcuL3JvdXRlUm93J1xuaW1wb3J0IFJvdXRlSGVhZGVyIGZyb20gJy4vcm91dGVIZWFkZXInXG5cbmNsYXNzIFJvdXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvdXRlczogdGhpcy5wcm9wcy5yb3V0ZXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmhhbmRsZVNvcnQgPSB0aGlzLmhhbmRsZVNvcnQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLW1vYmlsZSc+XG4gICAgICAgIDxSb3V0ZUhlYWRlciBoYW5kbGVTb3J0PXsgdGhpcy5oYW5kbGVTb3J0IH0gc29ydD17dGhpcy5zdGF0ZS5zb3J0fSBkaXI9e3RoaXMuc3RhdGUuZGlyfS8+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUucm91dGVzLm1hcChyb3V0ZSA9PiAoXG4gICAgICAgICAgICAgIDxSb3V0ZVJvdyBrZXk9eyByb3V0ZS5faWQgfSByb3V0ZT17IHJvdXRlIH0gLz5cbiAgICAgICAgICAgICkpIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBoYW5kbGVTb3J0KHBhcmFtKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbmV3Um91dGVzID0gWy4uLnRoYXQuc3RhdGUucm91dGVzXSwgZGlyXG4gICAgICAgICAgICBpZih0aGF0LnN0YXRlLnNvcnQgPT09IHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgbmV3Um91dGVzLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgIGRpciA9IHRoYXQuc3RhdGUuZGlyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvcnRPbihuZXdSb3V0ZXMsIHBhcmFtKVxuICAgICAgICAgICAgICAgIGRpciA9ICdhc2MnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRpcixcbiAgICAgICAgICAgICAgICBzb3J0OiBwYXJhbSxcbiAgICAgICAgICAgICAgICByb3V0ZXM6IG5ld1JvdXRlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuUm91dGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgICByb3V0ZXM6IFByb3BUeXBlcy5hcnJheVxufVxuXG5mdW5jdGlvbiBzb3J0T24gKGFyciwgcHJvcCkge1xuICAgIGlmKHByb3AgPT09ICdncmFkZScpIHtcbiAgICAgICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBhW3Byb3BdIC0gYltwcm9wXSlcbiAgICB9XG4gICAgYXJyLnNvcnQoXG4gICAgICAgIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYVtwcm9wXSA8IGJbcHJvcF0pe1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhW3Byb3BdID4gYltwcm9wXSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVMaXN0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZUxpc3QuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgUnRTd2F0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vcnRTd2F0Y2gnXG5cbmNvbnN0IFJvdXRlUm93ID0gKHByb3BzKSA9PiAoXG4gICAgPHRyIGNsYXNzTmFtZT1cInRhYmxlLWNlbnRlclwiPlxuICAgICAgPHRkPlxuICAgICAgICB7IG5ldyBEYXRlKHByb3BzLnJvdXRlLmNyZWF0ZWRfYXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpIH1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIHsgcHJvcHMucm91dGUuZ3JhZGUgfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgeyA8UnRTd2F0Y2ggY2xhc3NOYW1lPVwibGlzdF9fc3dhdGNoXCIgY29sb3I9e3Byb3BzLnJvdXRlLmNvbG9yfS8+fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgeyBwcm9wcy5yb3V0ZS5zZXR0ZXIgfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj5cbiAgICAgICAgeyBwcm9wcy5yb3V0ZS50YWdzIH1cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbilcblxuUm91dGVSb3cucHJvcFR5cGVzID0ge1xuICAgIHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlUm93XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZVJvdy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUnRDYXJkIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3J0Q2FyZCdcblxuY2xhc3MgU3RhdHNDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogdGhpcy5tYWtlT3ZlcnZpZXcodGhpcy5wcm9wcy5kYXRhKX0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUpIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UnRDYXJkIHRpdGxlPVwiSGV5IVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Db3VudDoge3RoaXMuc3RhdGUuZGF0YS5jb3VudH08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Um91dGVzIE5lZWRlZDogTi9BPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk9sZGVzdCBSb3V0ZToge3RoaXMuc3RhdGUuZGF0YS5vbGRlc3R9PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9SdENhcmQ+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBtYWtlT3ZlcnZpZXcoZGF0YSkge1xuXG4gICAgICAgIGxldCBtaW4gPSBJbmZpbml0eVxuXG4gICAgICAgIGRhdGEuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICAgICAgICBpZihtaW4gPiBEYXRlLnBhcnNlKHJvdXRlLmNyZWF0ZWRfYXQpKSBtaW4gPSByb3V0ZS5jcmVhdGVkX2F0XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb3VudDogZGF0YS5sZW5ndGgsXG4gICAgICAgICAgICBvbGRlc3Q6IG5ldyBEYXRlKG1pbikudG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuU3RhdHNDYXJkLnByb3BUeXBlcyA9IHtcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTdGF0c0NhcmRcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9zdGF0c0NhcmQuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5cbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFJ0QmlnQmFyIGZyb20gJ2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0JhcidcbmltcG9ydCBMb2FkQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvYWRDb250YWluZXInXG5pbXBvcnQgTG9hZEJhciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9sb2FkQmFyJ1xuaW1wb3J0IFN0YXRzQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvc3RhdHNDYXJkJ1xuaW1wb3J0IFJvdXRlTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVMaXN0J1xuXG5pbXBvcnQgeyBnZXRUZWFtIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3RlYW0nXG5pbXBvcnQgeyBnZXRSb3V0ZXNCeUd5bSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IM+AIGZyb20gJ3V0aWwuanMnXG5cbmNsYXNzIEd5bU92ZXJ2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmdldERhdGFGb3JHeW0odGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubmFtZSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZih0aGlzLnByb3BzLmd5bSAmJiB0aGlzLnByb3BzLmd5bS5uYW1lICE9PSBuZXh0UHJvcHMuZ3ltLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50OiBmYWxzZX0pXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZ2V0RGF0YUZvckd5bShuZXh0UHJvcHMuZ3ltLnVybCksIDMwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHJldHVybiA8UmVkaXJlY3QgdG89Jy8nIC8+XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TG9hZENvbnRhaW5lciBsb2FkZWQ9eyB0aGlzLnN0YXRlLmNvdW50IH0+XG4gICAgICAgICAgICAgIDxMb2FkQmFyLz5cbiAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudC10aXRsZSBicy0xXCI+eyB0aGlzLnByb3BzLmd5bSAmJiB0aGlzLnByb3BzLmd5bS5uYW1lIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxSdEJpZ0JhciBkYXRhPXsgdGhpcy5zdGF0ZS5jb3VudCB9IHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiMjAwXCI+PC9SdEJpZ0Jhcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wteHMtMTIgY29sLW5wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdGF0c0NhcmQgZGF0YT17IHRoaXMuc3RhdGUuZGF0YSB9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlTGlzdCByb3V0ZXM9e3RoaXMuc3RhdGUuZGF0YX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9Mb2FkQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0RGF0YUZvckd5bShuYW1lKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VGVhbSgpXG4gICAgICAgICAgICAudGhlbih0ZWFtID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEd5bSA9IHRlYW0uZ3ltcy5maWx0ZXIoZ3ltID0+IG5hbWUgPT09IGd5bS51cmwpWzBdXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50R3ltKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRSb3V0ZXMoY3VycmVudEd5bS5faWQpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSByZXR1cm5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRyYW5zZm9ybVJvdXRlcyhkYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuR3ltT3ZlcnZpZXcucHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ3ltOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGdldFJvdXRlczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2V0VGVhbTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3ltOiBzdGF0ZS5neW1zLmZpbHRlcihneW0gPT4gZ3ltLnVybCA9PT0gb3duUHJvcHMubWF0Y2gucGFyYW1zLm5hbWUpWzBdXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRlYW06ICgpID0+IGRpc3BhdGNoKGdldFRlYW0oKSksXG4gICAgICAgIGdldFJvdXRlczogKGlkKSA9PiBkaXNwYXRjaChnZXRSb3V0ZXNCeUd5bShpZCkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoR3ltT3ZlcnZpZXcpXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlcyhib3VsZGVycykge1xuICAgIGxldCBzb3J0ZWQgPSDPgC5idWNrZXRzKGJvdWxkZXJzLm1hcChib3VsZGVyID0+IGJvdWxkZXIuZ3JhZGUpLCDPgC5yYW5nZSgxMykpXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvcnRlZCkubWFwKGtleSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncmFkZToga2V5LFxuICAgICAgICAgICAgY291bnQ6IHNvcnRlZFtrZXldXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldFRlYW0gfSBmcm9tICdkYXRhL2FjdGlvbnMvdGVhbSdcbmltcG9ydCB7IGdldEd5bXMgfSBmcm9tICdkYXRhL2FjdGlvbnMvZ3ltJ1xuXG5pbXBvcnQgUnRIZWFkZXIgZnJvbSAnLi9ydEhlYWRlcidcbmltcG9ydCBSdENvbnRlbnQgZnJvbSAnLi9ydENvbnRlbnQnXG5pbXBvcnQgUnRTaWRlYmFyIGZyb20gJy4vcnRTaWRlYmFyJ1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHsgXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VGVhbSgpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UnRIZWFkZXIvPlxuICAgICAgICAgICAgICAgIDxSdFNpZGViYXIvPlxuICAgICAgICAgICAgICAgIDxSdENvbnRlbnQvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5NYWluLnByb3BUeXBlcyA9IHtcbiAgICBnZXRUZWFtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGdldEd5bXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZWFtOiBzdGF0ZS50ZWFtLFxuICAgICAgICBneW1zOiBzdGF0ZS5neW1zXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRlYW06ICgpID0+IGRpc3BhdGNoKGdldFRlYW0oKSksXG4gICAgICAgIGdldEd5bXM6ICh0ZWFtKSA9PiBkaXNwYXRjaChnZXRHeW1zKHRlYW0pKVxuICAgIH1cbn1cblxuXG5jb25zdCBtYWluQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKE1haW4pXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGFpbmVyXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgR3ltTGlzdCBmcm9tICdjb21wb25lbnRzL2d5bUxpc3QnXG5pbXBvcnQgR3ltT3ZlcnZpZXcgZnJvbSAnY29tcG9uZW50cy9neW1PdmVydmlldydcblxuaW1wb3J0IFJ0V2l6YXJkQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvcnRXaXphcmQnXG5cbmNsYXNzIFJ0Q29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtHeW1MaXN0fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvZ3ltcy86bmFtZScgY29tcG9uZW50PXtHeW1PdmVydmlld30vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2FkZCcgY29tcG9uZW50PXtSdFdpemFyZENvbnRhaW5lcn0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdENvbnRlbnRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vcnRDb250ZW50L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0sIE5hdkRyb3Bkb3duLCBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItYm9vdHN0cmFwJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jbGFzcyBSdEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5hdmJhciBpbnZlcnNlIGNvbGxhcHNlT25TZWxlY3QgZmx1aWQ+XG4gICAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Sb3V0ZXRyYWNrZXI8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9eyAzIH0gdGl0bGU9XCJHeW1zXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZ3ltcz8gdGhpcy5wcm9wcy5neW1zLm1hcChneW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2d5bS5faWR9IGV2ZW50S2V5PXsgMy4xIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9neW1zLycgKyBneW0udXJsfT57Z3ltLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICkpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXsgMy4zIH0+U2VwYXJhdGVkIGxpbms8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2FkZFwiPjxOYXZJdGVtIGV2ZW50S2V5PXsgMiB9PkFkZDwvTmF2SXRlbT48L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgPE5hdiBwdWxsUmlnaHQ+XG4gICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dvdXRcIj48TmF2SXRlbSBldmVudEtleT17IDEgfSBocmVmPVwiI1wiPkxvZ291dDwvTmF2SXRlbT48L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9hY2NvdW50XCI+PE5hdkl0ZW0gZXZlbnRLZXk9eyAyIH0gaHJlZj1cIiNcIj5NeSBBY2NvdW50PC9OYXZJdGVtPjwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBneW1zOiBzdGF0ZS5neW1zXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShSdEhlYWRlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vcnRIZWFkZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0nXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBtZW51ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0JvdWxkZXJpbmcnLFxuICAgICAgICB0bzogJ2d5bXMnLFxuICAgICAgICBpY29uOiAnZ2x5cGhpY29uLXN1bmdsYXNzZXMnXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnU3BvcnQnLFxuICAgICAgICB0bzogJ2JvdWxkZXJpbmcnLFxuICAgICAgICBpY29uOiAnZ2x5cGhpY29uLWZpcmUnXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnVG9wcm9wZScsXG4gICAgICAgIHRvOiAnYm91bGRlcmluZycsXG4gICAgICAgIGljb246ICdnbHlwaGljb24tYmFieS1mb3JtdWxhJ1xuICAgIH1cbl1cblxuY29uc3QgUnRTaWRlYmFyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicnQtc2lkZWJhciBwMTBcIj5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XG4gICAgICAgICAgICAgICAge21lbnUubWFwKGl0ZW0gPT4gKDxNZW51SXRlbSBrZXk9e2l0ZW0ubmFtZX0gaXRlbT17aXRlbX0vPikpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFJ0U2lkZWJhclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9ydFNpZGViYXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBNZW51SXRlbSA9ICh7aXRlbX0pID0+IChcbiAgICA8TGluayB0bz17Jy8nICsgaXRlbS50b30gY2xhc3NOYW1lPVwic2lkZWJhci1saW5rXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9eydnbHlwaGljb24gJyArIGl0ZW0uaWNvbn0+PC9pPlxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuKVxuXG5NZW51SXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgaXRlbTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5NZW51SXRlbS5jb250ZXh0VHlwZXMgPSB7XG4gICAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9ydFNpZGViYXIvbWVudUl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgZDN0aXAgZnJvbSAnZDMtdGlwJ1xuZDMudGlwID0gZDN0aXBcblxuY2xhc3MgUnRCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBtYWtlQ2hhcnQuYXBwbHkodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj17IChlbCkgPT4gdGhpcy5lbCA9IGVsIH0+PC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0QmFyXG5cbmZ1bmN0aW9uIG1ha2VDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGF0YSlcbiAgICAgICAgcmV0dXJuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YVxuXG4gICAgY29uc3Qgd2lkdGggPSA1MDBcbiAgICBjb25zdCBoZWlnaHQgPSAyODhcbiAgICBjb25zdCBiYXJXaWR0aCA9IHdpZHRoIC8gZGF0YS5sZW5ndGhcblxuICAgIGNvbnN0IHkgPSBkM1xuICAgICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFtcbiAgICAgICAgICAgIDAsIGQzLm1heChkYXRhLCAoZCkgPT4gZC5jb3VudClcbiAgICAgICAgXSlcbiAgICAgICAgLnJhbmdlKFswLCBoZWlnaHRdKVxuXG4gICAgY29uc3QgcmFpbmJvdyA9IGQzXG4gICAgICAgIC5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuICAgICAgICAuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cbiAgICBjb25zdCBmb250U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzMyMCwgNTAwXSkgLy8gZXhwZWN0ZWQgbGltaXRzIG9mIFNWRyB3aWR0aFxuICAgICAgICAucmFuZ2UoWzMwLCAxNV0pIC8vIHdoZW4gU1ZHIGlzIDEvMiB3aWR0aCwgdGV4dCB3aWxsIGJlIDIvMyBzaXplXG4gICAgICAgIC5jbGFtcCh0cnVlKVxuXG4gICAgY29uc3QgY2hhcnQgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMuZWwpXG4gICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgNTAwIDMwMCcpXG4gICAgICAgIC5hdHRyKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWluIG1lZXQnKVxuICAgICAgICAuY2xhc3NlZCgndzEwMCcsIHRydWUpXG4gICAgICAgIC5jbGFzc2VkKCdjaGFydCBicy0xJywgdHJ1ZSlcblxuICAgIGNvbnN0IGJhciA9IGNoYXJ0XG4gICAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBpICogYmFyV2lkdGggKyAnLCAwKSdcbiAgICAgICAgfSlcblxuICAgIHZhciB0aXAgPSBkMy50aXAoKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZDMtdGlwJylcbiAgICAgICAgLm9mZnNldChbLTEwLCAwXSlcbiAgICAgICAgLmh0bWwoZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuICc8c3Ryb25nPlRvdGFsOjwvc3Ryb25nPiA8c3BhbiBzdHlsZT1cXCdjb2xvcjojZmYwMDQ0XFwnPicgKyBkLmNvdW50ICsgJzwvc3Bhbj4nXG4gICAgICAgIH0pXG5cbiAgICBjaGFydC5jYWxsKHRpcClcblxuICAgIGJhci5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuY2xhc3NlZCgncnQtYmFyJywgdHJ1ZSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgYmFyV2lkdGggLSA1KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4gK2QuY291bnQgPyAxIDogMC40KVxuICAgICAgICAuYXR0cigneScsIChkKSA9PiAgaGVpZ2h0IC0geShkLmNvdW50KSAtIDEpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHJhaW5ib3coaSlcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCB0aXAuc2hvdylcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIHRpcC5oaWRlKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4geShkLmNvdW50KSArIDMpXG5cbiAgICBiYXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmNsYXNzZWQoJ3J0LW1hcmtlcicsIHRydWUpXG4gICAgICAgIC5hdHRyKCd5JywgaGVpZ2h0IC0gNylcbiAgICAgICAgLmF0dHIoJ3gnLCBiYXJXaWR0aCAvIDIgLSA0KVxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnRleHQoZCA9PiBkLmdyYWRlKVxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgJzE0cHgnKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxuXG5cbiAgICB3aW5kb3cub25yZXNpemUgPSByZXNpemVkXG5cbiAgICBmdW5jdGlvbiByZXNpemVkKCkge1xuICAgICAgICB2YXIgc2NhbGUgPSBmb250U2NhbGUoY2hhcnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKVxuICAgICAgICB2YXIgdGV4dCA9IGQzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIHRleHQuYXR0cignZm9udC1zaXplJywgc2NhbGUgKyAncHgnKVxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvcnRCaWdCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXekNvbnRhaW5lciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3otYmlnLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXdpbmdcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otaW5uZXJcIiBzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsocHJvcHMuc3RlcCkgKiAtMTYuNn0lKWB9fT5cbiAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwgZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXdpbmdcIj4gPC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFd6Q29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekNvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY29sb3IgZnJvbSAnc2VydmljZXMvY29sb3JTZXJ2aWNlJ1xuXG5jb25zdCBXekl0ZW0gPSAocHJvcHMpID0+IHtcbiAgICBmdW5jdGlvbiBfY2xpY2soKSB7XG4gICAgICAgIHByb3BzLnVwZGF0ZShwcm9wcy50eXBlLHByb3BzLml0ZW0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtfY2xpY2t9IGNsYXNzTmFtZT17c2V0Q2xhc3MocHJvcHMpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcHJvcHMuaXRlbS5jb2xvcj8gcHJvcHMuaXRlbS5jb2xvciA6ICd3aGl0ZScsIGNvbG9yOiBwcm9wcy5pdGVtLmNvbG9yPyBjb2xvci50ZXh0Q29sb3IocHJvcHMuaXRlbS5jb2xvcikgOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBncmlkLWxhYmVsXCIgb25DbGljaz17X2NsaWNrfT57cHJvcHMuaXRlbS52YWx1ZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuV3pJdGVtLnByb3BUeXBlcyA9IHtcbiAgICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGl0ZW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhwcm9wcykge1xuICAgIHJldHVybiAnd3otZG90ICcgKyAocHJvcHMuc2VsZWN0ZWQ/ICdpdGVtLXNlbGVjdGVkJyA6ICcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXekl0ZW1cbiAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pJdGVtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgV3pMaXN0SXRlbSA9IChwcm9wcykgPT4ge1xuICAgIGZ1bmN0aW9uIF9jbGljaygpIHtcbiAgICAgICAgcHJvcHMudXBkYXRlKHByb3BzLnR5cGUsIHByb3BzLml0ZW0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3NldENsYXNzKHByb3BzKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgbGlzdC1sYWJlbFwiIG9uQ2xpY2s9e19jbGlja30+e3Byb3BzLml0ZW0udmFsdWUgfHwgcHJvcHMuaXRlbX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhwcm9wcykge1xuICAgIHJldHVybiAnd3otbGlzdC1pdGVtICcgKyAocHJvcHMuc2VsZWN0ZWQ/ICdpdGVtLXNlbGVjdGVkJyA6ICcnKVxufVxuXG5Xekxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpdGVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBXekxpc3RJdGVtXG4gICAgICAgICAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6TGlzdEl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBXelBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMucHJldi5iaW5kKHRoaXMpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHAxMGIgaGlkZGVuLXhzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e3RoaXMucHJldn0+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgb25DbGljaz17dGhpcy5uZXh0IH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXh0KDEpXG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcmV2KC0xKVxuICAgIH1cbn1cblxuV3pQYWdlLnByb3BUeXBlcyA9IHtcbiAgICBwcmV2OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXh0OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBXelBhZ2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6UGFnZS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUnRTd2F0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vcnRTd2F0Y2gnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBwb3N0Um91dGUgfSBmcm9tICdkYXRhL2FjdGlvbnMvcm91dGUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cblxuY2xhc3MgV3pQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtZWRSb3V0ZSA9IHRyYW5zZm9ybVJvdXRlKHRoaXMucHJvcHMucm91dGUpXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybWVkUm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMudHJhbnNmb3JtZWRSb3V0ZT8gKFxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInd6X2xpc3QgcDEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3el9saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVHlwZToge3RoaXMucHJvcHMucm91dGUudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6X2xpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBDb2xvcjogXG4gICAgICAgICAgICAgICAgICAgICAgPFJ0U3dhdGNoIGNvbG9yPXsgdGhpcy5wcm9wcy5yb3V0ZS5jb2xvciB8fCBmYWxzZSB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3el9saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgR3JhZGU6IHt0aGlzLnByb3BzLnJvdXRlLmdyYWRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3pfbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEd5bToge3RoaXMucHJvcHMucm91dGUuZ3ltLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3el9saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgV2FsbDoge3RoaXMucHJvcHMucm91dGUubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3el9saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGFnczoge3RoaXMucHJvcHMucm91dGUudGFncy5qb2luKCcsICcpfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgYmxvY2sgb25DbGljaz17dGhpcy5wb3N0Um91dGV9PkFkZCBSb3V0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcG9zdFJvdXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnBvc3RSb3V0ZSh0aGlzLnRyYW5zZm9ybWVkUm91dGUpXG4gICAgfVxufVxuXG5XelByZXZpZXcucHJvcFR5cGVzID0ge1xuICAgIHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGdyYWRlczogUHJvcFR5cGVzLmFycmF5XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlKG9iaikge1xuICAgIGlmIChvYmouZ3ltICYmIG9iai5ncmFkZSAmJiBvYmouY29sb3IgJiYgb2JqLnRhZ3MubGVuZ3RoICYmIG9iai5sb2NhdGlvbilcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IG9iai50eXBlLFxuICAgICAgICAgICAgY29sb3I6IG9iai5jb2xvci52YWx1ZSxcbiAgICAgICAgICAgIGdyYWRlOiBvYmouZ3JhZGUudmFsdWUuc2xpY2UoMSksXG4gICAgICAgICAgICBneW06IG9iai5neW0uX2lkLFxuICAgICAgICAgICAgd2FsbDogb2JqLmxvY2F0aW9uLFxuICAgICAgICAgICAgdGFnczogb2JqLnRhZ3Muam9pbignLCAnKVxuICAgICAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGU6IHN0YXRlLnJvdXRlLFxuICAgICAgICBncmFkZXM6IHN0YXRlLnRlYW0uZ3JhZGVzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RSb3V0ZTogKHJvdXRlKSA9PiBkaXNwYXRjaChwb3N0Um91dGUocm91dGUpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKFd6UHJldmlldylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6UHJldmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgV3pQYWdlIGZyb20gJy4vd3pQYWdlJ1xuaW1wb3J0IFJ0Q2FyZCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9ydENhcmQnXG5cbmNvbnN0IFd6U3RlcCA9IChwcm9wcykgPT4ge1xuICAgIGlmKHByb3BzLnJldmlldykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoM1wiPjwvZGl2PlxuICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT17cHJvcHMubmFtZX0+e3Byb3BzLmNoaWxkcmVufTwvUnRDYXJkPlxuICAgICAgICAgIDwvZGl2PilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaDMgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgIHsgcHJvcHMubmFtZSB9OjwvZGl2PlxuICAgICAgPFd6UGFnZSBuZXh0PXtwcm9wcy5uZXh0fSBwcmV2PXtwcm9wcy5wcmV2fS8+XG4gICAgICB7IC8qPHd6LXBhZ2UgcHJldj1cIiRjdHJsLm1vdmVDb250YWluZXIoLTEpXCIgbmV4dD1cIiRjdHJsLm1vdmVDb250YWluZXIoMSlcIj48L3d6LXBhZ2U+Ki8gfVxuICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5XelN0ZXAucHJvcFR5cGVzID0ge1xuICAgIHJldmlldzogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgbmV4dDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcHJldjogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3pTdGVwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elN0ZXAuanN4IiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSdFdpemFyZCBmcm9tICcuL3J0V2l6YXJkJ1xuaW1wb3J0IHt1cGRhdGVSb3V0ZSwgdXBkYXRlVGFncywgcmVzZXRXaXphcmR9IGZyb20gJ2RhdGEvYWN0aW9ucy93aXphcmQnXG5pbXBvcnQge2dldFRlYW19IGZyb20gJ2RhdGEvYWN0aW9ucy90ZWFtJ1xuaW1wb3J0IHtnZXRHeW1zfSBmcm9tICdkYXRhL2FjdGlvbnMvZ3ltJ1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZTogc3RhdGUucm91dGUsXG4gICAgICAgIHRlYW06IHN0YXRlLnRlYW0sXG4gICAgICAgIGd5bXM6IHN0YXRlLmd5bXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlOiAoZmllbGQsIHZhbHVlKSA9PiBkaXNwYXRjaCh1cGRhdGVSb3V0ZShmaWVsZCwgdmFsdWUpKSxcbiAgICAgICAgdXBkYXRlVGFnczogKHZhbHVlKSA9PiBkaXNwYXRjaCh1cGRhdGVUYWdzKHZhbHVlKSksXG4gICAgICAgIHJlc2V0Rm9ybTogKCkgPT4gZGlzcGF0Y2gocmVzZXRXaXphcmQoKSksXG4gICAgICAgIGdldFRlYW06ICgpID0+IGRpc3BhdGNoKGdldFRlYW0oKSksXG4gICAgICAgIGdldEd5bXM6ICgpID0+IGRpc3BhdGNoKGdldEd5bXMoKSlcbiAgICB9XG59XG5cbmNvbnN0IFJ0V2l6YXJkQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoKShSdFdpemFyZClcblxuZXhwb3J0IGRlZmF1bHQgUnRXaXphcmRDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgV3pHcmlkIGZyb20gJy4vd3pHcmlkJ1xuaW1wb3J0IFd6Q29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy93ekNvbnRhaW5lcidcbmltcG9ydCBXelN0ZXAgZnJvbSAnLi9jb21wb25lbnRzL3d6U3RlcCdcbmltcG9ydCBXelByZXZpZXcgZnJvbSAnLi9jb21wb25lbnRzL3d6UHJldmlldydcblxuY2xhc3MgUnRXaXphcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGVwOiAwLFxuICAgICAgICAgICAgZ3ltRmlsdGVyOiB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xpY2tzID0gMFxuICAgICAgICB0aGlzLmNsaWNrZWQgPSAnZ3ltJ1xuICAgICAgICB0aGlzLnN0ZXBzID0gWydneW0nLCAnY29sb3InLCAnZ3JhZGUnLCAnbG9jYXRpb24nLCAndGFncyddXG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLnVwZGF0ZVRhZ3MgPSB0aGlzLnVwZGF0ZVRhZ3MuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxXekNvbnRhaW5lciBzdGVwPXt0aGlzLnN0YXRlLnN0ZXB9PlxuICAgICAgICAgICAgICB7IHRoaXMuc3RlcENvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChzdGVwKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8V3pTdGVwIGtleT17c3RlcC5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17c3RlcC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2PXt0aGlzLm1vdmV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0PXt0aGlzLm1vdmV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kPXtzdGVwLmVuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3PXtzdGVwLnJldmlld30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV3pTdGVwPilcbiAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgIDwvV3pDb250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBtb3ZlKGRpciwgZmllbGQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLnN0ZXBcbiAgICAgICAgLy8gY2FsbGVkIGJ5IHVwZGF0ZVxuICAgICAgICBpZihmaWVsZCkgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IGN1cnJlbnQgKyBkaXJ9KVxuICAgICAgICAvLyBjaGVjayBpZiB3ZSd2ZSBtYWRlIGl0IHBhc3QgdGhpcyBzdGVwIGFscmVhZHlcbiAgICAgICAgaWYoY3VycmVudCArIGRpciA8IDAgfHwgISh0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcF0gaW4gdGhpcy5wcm9wcy5yb3V0ZSkgJiYgZGlyID4gMCkgcmV0dXJuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IGN1cnJlbnQgKyBkaXJ9KVxuICAgIH1cblxuICAgIHVwZGF0ZShmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgLy8gaGFuZGxlIGRvdWJsZSBjbGlja1xuICAgICAgICBpZiAodGhpcy5jbGlja3MgPiAwICYmIHRoaXMucHJvcHMucm91dGVbZmllbGRdID09PSB2YWx1ZSkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcblxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZShmaWVsZCwgdmFsdWUpXG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5zdGF0ZS5zdGVwICsgMVxuXG4gICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBpZiB3ZSd2ZSBtYW51YWxseSBnb25lIGJhY2t3YXJkcywgZG9uJ3QgbW92ZVxuICAgICAgICAgICAgKCF0aGlzLnByb3BzLnJvdXRlW3RoaXMuc3RlcHNbbmV4dF1dICYmIGZpZWxkICE9PSAndHlwZScpXG4gICAgICAgICAgICAvLyBvciB0aGUgbmV4dCBzdGVwIGlzIG11bHRpcGxlIGNob2ljZVxuICAgICAgICAgICAgfHwgdGhpcy5zdGVwc1tuZXh0XSA9PT0gJ3RhZ3MnXG4gICAgICAgICkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcblxuICAgICAgICAvLyBzdG9yZSBjbGljayBmb3IgZG91YmxlIGNsaWNrXG4gICAgICAgIHRoaXMuY2xpY2tzKytcbiAgICAgICAgdGhpcy5jbGlja2VkID0gZmllbGRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsaWNrcy0tLCA1MDApXG4gICAgfVxuXG4gICAgdXBkYXRlVGFncyh0YWdzLCB0YWcpIHtcbiAgICAgICAgbGV0IHt2YWx1ZX0gPSB0YWdcbiAgICAgICAgXG4gICAgICAgIC8vIGhhbmRsZSBkb3VibGUgY2xpY2tcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tzID4gMCAmJiB0aGlzLnByb3BzLnJvdXRlLnRhZ3MuaW5kZXhPZih2YWx1ZSkgPj0wICkgcmV0dXJuIHRoaXMubW92ZSgxLCB0cnVlKVxuXG4gICAgICAgIC8vIGlmIHdlJ3ZlIG1hbnVhbGx5IGdvbmUgYmFja3dhcmRzLCBkb24ndCBtb3ZlXG4gICAgICAgIC8vIGlmICghdGhpcy5wcm9wcy5yb3V0ZVt0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcCArIDFdXSkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVUYWdzKHZhbHVlKVxuXG4gICAgICAgIC8vIHN0b3JlIGNsaWNrIGZvciBkb3VibGUgY2xpY2tcbiAgICAgICAgdGhpcy5jbGlja3MrK1xuICAgICAgICB0aGlzLmNsaWNrZWQgPSB2YWx1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xpY2tzLS0sIDUwMClcbiAgICB9XG5cbiAgICBmaWx0ZXJHeW1zKGd5bXMsIGZpbHRlcikge1xuICAgICAgICBpZighZmlsdGVyKSByZXR1cm4gW11cbiAgICAgICAgcmV0dXJuIGd5bXMuZmlsdGVyKGd5bSA9PiBneW0ud2FsbHNbZmlsdGVyXS5sZW5ndGgpXG4gICAgfVxuXG4gICAgc2V0RmlsdGVyKGZpbHRlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZSgndHlwZScsIGZpbHRlcilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z3ltRmlsdGVyOiBmaWx0ZXJ9KVxuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDF9KVxuICAgIH1cblxuICAgIHN0ZXBDb250ZW50KCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdneW0nLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3d6LWxpc3QtaXRlbSAnICsgKHRoaXMuc3RhdGUuZ3ltRmlsdGVyID09PSAnYm91bGRlcicgPyAnaXRlbS1zZWxlY3RlZCcgOiAnJyApfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEZpbHRlcignYm91bGRlcicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGxpc3QtbGFiZWxcIj5Cb3VsZGVyaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd3ei1saXN0LWl0ZW0gJyArICh0aGlzLnN0YXRlLmd5bUZpbHRlciA9PT0gJ3JvcGUnID8gJ2l0ZW0tc2VsZWN0ZWQnIDogJycgKX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRGaWx0ZXIoJ3JvcGUnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBsaXN0LWxhYmVsXCI+Um9wZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLmZpbHRlckd5bXModGhpcy5wcm9wcy5neW1zLCB0aGlzLnN0YXRlLmd5bUZpbHRlcil9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2d5bSd9IHVwZGF0ZT17dGhpcy51cGRhdGV9IGxpc3QvPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29sb3InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5wcm9wcy50ZWFtLmNvbG9yc30gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnY29sb3InfSB1cGRhdGU9e3RoaXMudXBkYXRlfS8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdncmFkZScsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnRlYW0uZ3JhZGVzfSByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gc2VsZWN0b3I9eydncmFkZSd9IHVwZGF0ZT17dGhpcy51cGRhdGV9Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMucm91dGUuZ3ltICYmIHRoaXMucHJvcHMucm91dGUuZ3ltLndhbGxzW3RoaXMuc3RhdGUuZ3ltRmlsdGVyXSB8fCBbXX0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnbG9jYXRpb24nfSB1cGRhdGU9e3RoaXMudXBkYXRlfSBsaXN0Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RhZ3MnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5wcm9wcy50ZWFtLnRhZ3N9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J3RhZ3MnfSB1cGRhdGU9e3RoaXMudXBkYXRlVGFnc30gbGlzdC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXZpZXc6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pQcmV2aWV3IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfS8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufVxuXG5SdFdpemFyZC5wcm9wVHlwZXMgPSB7XG4gICAgcm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZ3ltczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGVhbTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBSdFdpemFyZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXekxpc3RJdGVtIGZyb20gJy4vY29tcG9uZW50cy93ekxpc3RJdGVtJ1xuaW1wb3J0IFd6SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvd3pJdGVtJ1xuXG5jb25zdCBXekdyaWQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBFbCA9IHByb3BzLmxpc3QgPyBXekxpc3RJdGVtIDogV3pJdGVtXG5cbiAgICBjb25zdCBpc1NlbGVjdGVkID0gKGl0ZW0pID0+IHtcbiAgICAgICAgaWYocHJvcHMuc2VsZWN0b3IgPT09ICd0YWdzJykgcmV0dXJuIHByb3BzLnJvdXRlLnRhZ3MuaW5kZXhPZihpdGVtLnZhbHVlKSA+IC0xXG4gICAgICAgIHJldHVybiAgcHJvcHMucm91dGVbcHJvcHMuc2VsZWN0b3JdID09PSBpdGVtIFxuICAgIH1cblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ3ei1ncmlkXCI+XG4gICAgICAgICAgICAgIHsgcHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RWwga2V5PXsgaXRlbS5faWQgfHwgaXRlbX0gaXRlbT17IGl0ZW0gfSB0eXBlPXsgcHJvcHMuc2VsZWN0b3IgfSB1cGRhdGU9eyBwcm9wcy51cGRhdGUgfSBzZWxlY3RlZD17aXNTZWxlY3RlZChpdGVtKX0gLz5cbiAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5XekdyaWQucHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbGlzdDogUHJvcFR5cGVzLm9uZU9mKFt1bmRlZmluZWQsIHRydWVdKSxcbiAgICB0YWdzOiBQcm9wVHlwZXMub25lT2YoW3VuZGVmaW5lZCwgdHJ1ZV0pLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6R3JpZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3d6R3JpZC5qc3giLCJleHBvcnQgY29uc3QgVVBEQVRFX1JPVVRFID0gJ1VQREFURV9ST1VURSdcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvdXRlKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFVQREFURV9ST1VURSxcbiAgICAgICAgZmllbGQsXG4gICAgICAgIHZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFncyh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfVEFHUycsXG4gICAgICAgIHZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRXaXphcmQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1JFU0VUX1dJWkFSRCdcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy93aXphcmQuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSBbXVxuXG5jb25zdCB0cmFuc2Zvcm1HeW1zID0gKGd5bXMpID0+IHtcbiAgICBneW1zLmZvckVhY2goZ3ltID0+IHtcbiAgICAgICAgZ3ltLnZhbHVlID0gZ3ltLm5hbWVcbiAgICB9KVxuICAgIHJldHVybiBneW1zXG59XG5cbmNvbnN0IGd5bSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfR1lNUyc6XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1HeW1zKGFjdGlvbi5neW1zKVxuICAgIGNhc2UgJ0dFVF9HWU1TJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBneW0gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2d5bS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHdpemFyZCBmcm9tICcuL3dpemFyZCdcbmltcG9ydCByb3V0ZSBmcm9tICcuL3JvdXRlJ1xuaW1wb3J0IHRlYW0gZnJvbSAnLi90ZWFtJ1xuaW1wb3J0IGd5bSBmcm9tICcuL2d5bSdcblxuY29uc3QgbWFpblJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHJvdXRlOiB3aXphcmQsIFxuICAgIHJvdXRlczogcm91dGUsXG4gICAgdGVhbTogdGVhbSxcbiAgICBneW1zOiBneW1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1haW5SZWR1Y2VyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSdcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IG5ldyBJbW11dGFibGUuTWFwKClcblxuZnVuY3Rpb24gcm91dGUoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfUk9VVEUnOlxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0KGFjdGlvbi5yb3V0ZSlcbiAgICBjYXNlICdSRUNFSVZFX1JPVVRFUyc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5jb25jYXQoYWN0aW9uLnJvdXRlcy5tYXAocm91dGUgPT4gW3JvdXRlLl9pZCxyb3V0ZV0pKVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9yb3V0ZS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjb2xvcnM6IFtdLFxuICAgIHRhZ3M6IFtdLFxuICAgIGdyYWRlczogW11cbn1cblxuY29uc3QgdHJhbnNmb3JtVGVhbSA9ICh0ZWFtKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGVhbSxcbiAgICAgICAgZ3JhZGVzOiB0ZWFtLmdyYWRlcy5tYXAoZ3JhZGUgPT4ge3JldHVybiB7X2lkOiBncmFkZSwgdmFsdWU6IGdyYWRlfX0pLFxuICAgICAgICBjb2xvcnM6IHRlYW0uY29sb3JzLm1hcChjb2xvciA9PiB7cmV0dXJuIHtfaWQ6IGNvbG9yLm5hbWUsIHZhbHVlOiBjb2xvci5uYW1lLCBjb2xvcjogY29sb3IuY29sb3J9fSksXG4gICAgICAgIHRhZ3M6IHRlYW0udGFncy5tYXAodGFnID0+IHtyZXR1cm4ge19pZDogdGFnLCB2YWx1ZTogdGFnfX0pXG4gICAgfVxufVxuXG5jb25zdCB0ZWFtID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnUkVDRUlWRV9URUFNJzpcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVRlYW0oYWN0aW9uLnRlYW0pXG4gICAgY2FzZSAnR0VUX1RFQU0nOlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRlYW0gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3RlYW0uanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdGFnczogW11cbn1cblxuY29uc3Qgd2l6YXJkID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVVBEQVRFX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFthY3Rpb24uZmllbGRdOiBhY3Rpb24udmFsdWV9KVxuICAgIGNhc2UgJ1VQREFURV9UQUdTJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7dGFnczogdG9nZ2xlVGFnKHN0YXRlLnRhZ3MsIGFjdGlvbi52YWx1ZSl9KVxuICAgIGNhc2UgJ1JFU0VUX1dJWkFSRCc6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7Z3ltOiBzdGF0ZS5neW19KVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l6YXJkXG5cbi8vIHV0aWxpdGllc1xuXG5mdW5jdGlvbiB0b2dnbGVUYWcodGFncywgdGFnKSB7XG4gICAgbGV0IGluZCA9IHRhZ3MuaW5kZXhPZih0YWcpXG4gICAgdGFncyA9IFsuLi50YWdzXVxuICAgIGlmIChpbmQgPj0gMCkge1xuICAgICAgICB0YWdzW2luZF0gPSB0YWdzW3RhZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgdGFncy5sZW5ndGggPSB0YWdzLmxlbmd0aCAtIDFcbiAgICAgICAgcmV0dXJuIHRhZ3NcbiAgICB9XG4gICAgcmV0dXJuIHRhZ3MuY29uY2F0KHRhZylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy93aXphcmQuanMiLCJjbGFzcyBmZXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSAnL2FwaS8nXG4gICAgfVxuXG4gICAgZ2V0KHJlc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMucHJlZml4ICsgcmVzb3VyY2UgKyBwYXJhbVRvUXVlcnkocGFyYW1zKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGNyZWF0ZShyZXNvdXJjZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogZm9ybWF0Qm9keShkYXRhKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IGZldGNoZXIoKVxuXG5mdW5jdGlvbiBwYXJhbVRvUXVlcnkob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiAnJ1xuXG4gICAgcmV0dXJuICc/JyArXG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICtcbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pXG4gICAgICAgIH0pLmpvaW4oJyYnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRCb2R5KG9iaikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc2VydmljZXMvZmV0Y2hlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiByZWNlaXZlR3ltcyhneW1zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1JFQ0VJVkVfR1lNUycsXG4gICAgICAgIGd5bXNcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHeW1zKHRlYW0pIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT57XG4gICAgICAgIHJldHVybiBmZXRjaGVyLmdldCgnZ3ltcy90ZWFtLycrdGVhbS5faWQpLnRoZW4oZ3ltcyA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlR3ltcyhneW1zKSlcbiAgICAgICAgICAgIHJldHVybiBneW1zXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvZ3ltLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0FERF9ST1VURScsXG4gICAgICAgIHJvdXRlXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVJvdXRlcyhyb3V0ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnUkVDRUlWRV9ST1VURVMnLFxuICAgICAgICByb3V0ZXNcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZXNCeUd5bShpZCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBmZXRjaGVyLmdldCgncm91dGUvYm91bGRlci9neW0nLCB7XG4gICAgICAgICAgICBneW06IGlkXG4gICAgICAgIH0pLnRoZW4ocm91dGVzID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVSb3V0ZXMocm91dGVzKSlcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXNcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0Um91dGUocm91dGUpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2hlci5jcmVhdGUoJ3JvdXRlJywgcm91dGUpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZFJvdXRlKHJlcykpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3JvdXRlLmpzIiwiaW1wb3J0IHtyZWNlaXZlR3ltc30gZnJvbSAnLi9neW0nXG5leHBvcnQgY29uc3QgUkVDRUlWRV9URUFNID0gJ1JFQ0VJVkVfVEVBTSdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUZWFtKHRlYW0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSRUNFSVZFX1RFQU0sXG4gICAgICAgIHRlYW1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZWFtKCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IGdldFN0YXRlKClcbiAgICAgICAgaWYgKHN0YXRlLnRlYW0uZ3ltcykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaGVyLmdldCgndGVhbXMvY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnRoZW4odGVhbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVUZWFtKHRlYW0pKVxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlR3ltcyh0ZWFtLmd5bXMpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVhbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy90ZWFtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==