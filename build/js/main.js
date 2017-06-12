webpackJsonp([0],{

/***/ "./public/app.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _main = __webpack_require__("./public/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _createBrowserHistory = __webpack_require__("./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reduxThunk = __webpack_require__("./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _fetcher = __webpack_require__("./public/services/fetcher.js");

var _fetcher2 = _interopRequireDefault(_fetcher);

var _reducers = __webpack_require__("./public/data/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRouterRedux = __webpack_require__("./node_modules/react-router-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // dependencies submodules import './components/util/util' import
// './components/rtChart/rtChart' import './components/rtWizard/rtWizard' import
// './components/gymList/gymList' import './components/main/main' import
// './components/rtGym/rtGym'

var history = (0, _createBrowserHistory2.default)();
var routeMiddleware = (0, _reactRouterRedux.routerMiddleware)(history);

var store = (0, _redux.createStore)(_reducers2.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), (0, _redux.applyMiddleware)(routeMiddleware, _reduxThunk2.default.withExtraArgument(_fetcher2.default)));

if (true) {
    module.hot.accept("./public/data/reducers/index.js", function () {
        var nextRootReducer = __webpack_require__("./public/data/reducers/index.js");
        store.replaceReducer(nextRootReducer);
    });
}

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
                _react2.default.createElement(
                    _reactRouterRedux.ConnectedRouter,
                    { history: history },
                    _react2.default.createElement(_main2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var _default = App;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(history, 'history', '/Users/peller/Desktop/reactracker/public/app.jsx');

    __REACT_HOT_LOADER__.register(routeMiddleware, 'routeMiddleware', '/Users/peller/Desktop/reactracker/public/app.jsx');

    __REACT_HOT_LOADER__.register(store, 'store', '/Users/peller/Desktop/reactracker/public/app.jsx');

    __REACT_HOT_LOADER__.register(App, 'App', '/Users/peller/Desktop/reactracker/public/app.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/app.jsx');
}();

;

/***/ }),

/***/ "./public/components/account/components/basicInfo.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = __webpack_require__("./public/components/common/index.js");

var _fetcher = __webpack_require__("./public/services/fetcher.js");

var _fetcher2 = _interopRequireDefault(_fetcher);

var _rtutil = __webpack_require__("./public/rtutil.js");

var _rtutil2 = _interopRequireDefault(_rtutil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicInfo = function (_Component) {
    _inherits(BasicInfo, _Component);

    function BasicInfo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BasicInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BasicInfo.__proto__ || Object.getPrototypeOf(BasicInfo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.onSave = function () {
            var _this2;

            return (_this2 = _this).__onSave__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.fields = function () {
            var _this3;

            return (_this3 = _this).__fields__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _this.validateEmpty = function () {
            var _this4;

            return (_this4 = _this).__validateEmpty__REACT_HOT_LOADER__.apply(_this4, arguments);
        }, _this.validateEmail = function () {
            var _this5;

            return (_this5 = _this).__validateEmail__REACT_HOT_LOADER__.apply(_this5, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BasicInfo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_common.RtForm, {
                fields: this.fields(),
                values: this.props.user,
                editable: true,
                onSave: this.onSave,
                pending: this.state.pending });
        }
    }, {
        key: '__onSave__REACT_HOT_LOADER__',
        value: function __onSave__REACT_HOT_LOADER__(data) {
            var _this6 = this;

            this.setState({
                pending: true
            });

            this.values = _rtutil2.default.expandSimpleObject(data);

            return _fetcher2.default.update('users/current', data).then((0, _rtutil.sleep)(1000)).then(function () {
                _this6.setState({
                    pending: false
                });
                return data;
            });
        }
    }, {
        key: '__fields__REACT_HOT_LOADER__',
        value: function __fields__REACT_HOT_LOADER__() {
            return [['General', {
                label: 'Username',
                name: 'username',
                type: 'text',
                validate: this.validateEmpty
            }, {
                label: 'E-mail',
                name: 'email',
                type: 'email',
                validate: this.validateEmail
            }], ['Setting', {
                label: 'Nickname',
                name: 'nickname',
                type: 'text',
                validate: this.validateEmpty
            }]];
        }
    }, {
        key: '__validateEmpty__REACT_HOT_LOADER__',
        value: function __validateEmpty__REACT_HOT_LOADER__(value) {
            return value.length > 0;
        }
    }, {
        key: '__validateEmail__REACT_HOT_LOADER__',
        value: function __validateEmail__REACT_HOT_LOADER__(value) {
            return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
            );
        }
    }]);

    return BasicInfo;
}(_react.Component);

BasicInfo.propTypes = {
    user: _propTypes2.default.object
};
var _default = BasicInfo;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(BasicInfo, 'BasicInfo', '/Users/peller/Desktop/reactracker/public/components/account/components/basicInfo.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/account/components/basicInfo.jsx');
}();

;

/***/ }),

/***/ "./public/components/account/components/teamInfo.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _common = __webpack_require__("./public/components/common/index.js");

var _rtPie = __webpack_require__("./public/components/rtChart/rtPie.jsx");

var _rtPie2 = _interopRequireDefault(_rtPie);

var _rtconfig = __webpack_require__("./public/rtconfig.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItemColor = function ListItemColor(props) {
    return _react2.default.createElement(
        'li',
        props,
        _react2.default.createElement(_common.RtSwatch, { color: props.color })
    );
};

var ListItem = function ListItem(props) {
    return _react2.default.createElement(
        'li',
        props,
        props.value
    );
};

var available = _rtconfig.colors.map(function (color) {
    return {
        color: color
    };
});

var TeamInfo = function (_Component) {
    _inherits(TeamInfo, _Component);

    function TeamInfo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TeamInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeamInfo.__proto__ || Object.getPrototypeOf(TeamInfo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TeamInfo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm' },
                    _react2.default.createElement(_common.SortableList, {
                        className: 'list-unstyled',
                        list: this.props.team.colors.slice(0, 5).map(function (color) {
                            return { color: color };
                        }),
                        options: available,
                        component: ListItemColor,
                        comparator: function comparator(a, b) {
                            return a.color._id === b.color._id;
                        } })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm' },
                    _react2.default.createElement(_common.SortableList, {
                        className: 'list-unstyled',
                        list: this.props.team.grades.boulder.slice(0, 2),
                        options: this.props.team.grades.boulder,
                        component: ListItem,
                        comparator: function comparator(a, b) {
                            return a.value === b.value;
                        }
                    })
                ),
                _react2.default.createElement('div', { className: 'col-sm' }),
                _react2.default.createElement(_rtPie2.default, { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
            );
        }
    }]);

    return TeamInfo;
}(_react.Component);

TeamInfo.propTypes = {
    team: _propTypes2.default.object
};


function mapState(state) {
    return {
        team: state.team
    };
}

var _default = (0, _reactRedux.connect)(mapState)(TeamInfo);

exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ListItemColor, 'ListItemColor', '/Users/peller/Desktop/reactracker/public/components/account/components/teamInfo.jsx');

    __REACT_HOT_LOADER__.register(ListItem, 'ListItem', '/Users/peller/Desktop/reactracker/public/components/account/components/teamInfo.jsx');

    __REACT_HOT_LOADER__.register(available, 'available', '/Users/peller/Desktop/reactracker/public/components/account/components/teamInfo.jsx');

    __REACT_HOT_LOADER__.register(TeamInfo, 'TeamInfo', '/Users/peller/Desktop/reactracker/public/components/account/components/teamInfo.jsx');

    __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/account/components/teamInfo.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/account/components/teamInfo.jsx');
}();

;

/***/ }),

/***/ "./public/components/account/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _common = __webpack_require__("./public/components/common/index.js");

var _basicInfo = __webpack_require__("./public/components/account/components/basicInfo.jsx");

var _basicInfo2 = _interopRequireDefault(_basicInfo);

var _teamInfo = __webpack_require__("./public/components/account/components/teamInfo.jsx");

var _teamInfo2 = _interopRequireDefault(_teamInfo);

var _rtutil = __webpack_require__("./public/rtutil.js");

var _user = __webpack_require__("./public/data/actions/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tabs = ['Basic Info', 'Team Info'];

var Account = function (_Component) {
    _inherits(Account, _Component);

    function Account() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Account);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Account.__proto__ || Object.getPrototypeOf(Account)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loaded: false,
            pending: false,
            active: 'Basic Info'
        }, _this.toggle = function () {
            var _this2;

            return (_this2 = _this).__toggle__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Account, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.props.getUser().then(function () {
                _this3.setState({
                    loaded: true
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _common.LoadContainer,
                { loaded: this.state.loaded },
                _react2.default.createElement(_common.LoadBar, null),
                _react2.default.createElement(
                    _common.RtCard,
                    { title: 'My Account' },
                    _react2.default.createElement(_common.TabSwitcher, { tabs: tabs, toggle: this.toggle }),
                    (0, _rtutil.renderIf)(this.state.active == 'Basic Info')(_react2.default.createElement(
                        _reactBootstrap.Tab,
                        { title: 'Basic Info', eventKey: 1, tabClassName: 'nav-link' },
                        _react2.default.createElement(_basicInfo2.default, { user: this.props.user })
                    )),
                    (0, _rtutil.renderIf)(this.state.active === 'Team Info')(_react2.default.createElement(
                        _reactBootstrap.Tab,
                        { title: 'Team Info', eventKey: 2, tabClassName: 'nav-link' },
                        _react2.default.createElement(_teamInfo2.default, null)
                    ))
                )
            );
        }
    }, {
        key: '__toggle__REACT_HOT_LOADER__',
        value: function __toggle__REACT_HOT_LOADER__(ind) {
            this.setState({
                active: ind
            });
        }
    }]);

    return Account;
}(_react.Component);

Account.propTypes = {
    getUser: _propTypes2.default.func,
    user: _propTypes2.default.object
};


function mapState(state) {
    return {
        user: state.user
    };
}

function mapDispatch(dispatch) {
    return {
        getUser: function getUser() {
            return dispatch((0, _user.getUser)());
        }
    };
}

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(Account);

exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(tabs, 'tabs', '/Users/peller/Desktop/reactracker/public/components/account/index.jsx');

    __REACT_HOT_LOADER__.register(Account, 'Account', '/Users/peller/Desktop/reactracker/public/components/account/index.jsx');

    __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/account/index.jsx');

    __REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', '/Users/peller/Desktop/reactracker/public/components/account/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/account/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/flexRow.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(props) {
    return _extends({
        display: props.inline ? 'inline-flex' : 'flex',
        justifyContent: props.around ? 'space-around' : 'space-between',
        margin: 'auto'
    }, props.style);
};

var flexRow = function flexRow(props) {
    return _react2.default.createElement(
        'div',
        { style: styles(props), className: 'flex-row' },
        props.children
    );
};

flexRow.propTypes = {
    children: _propTypes2.default.node
};

var _default = flexRow;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/peller/Desktop/reactracker/public/components/common/flexRow.jsx');

    __REACT_HOT_LOADER__.register(flexRow, 'flexRow', '/Users/peller/Desktop/reactracker/public/components/common/flexRow.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/flexRow.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/icon.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 8 8', onClick: props.onClick, className: props.altClass || 'icon' },
    _react2.default.createElement('use', { xlinkHref: '#' + props.icon, className: props.color || 'icon-black' })
  );
};

var _default = Icon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Icon, 'Icon', '/Users/peller/Desktop/reactracker/public/components/common/icon.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/icon.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RtSwatch = exports.LoadBar = exports.InputBox = exports.SwipeContainer = exports.LoadContainer = exports.FlexRow = exports.TabSwitcher = exports.SortableList = exports.Icon = exports.RtList = exports.RtForm = exports.RtPane = exports.RtCard = undefined;

var _flexRow = __webpack_require__("./public/components/common/flexRow.jsx");

var _flexRow2 = _interopRequireDefault(_flexRow);

var _inputBox = __webpack_require__("./public/components/common/inputBox.jsx");

var _inputBox2 = _interopRequireDefault(_inputBox);

var _loadBar = __webpack_require__("./public/components/common/loadBar.jsx");

var _loadBar2 = _interopRequireDefault(_loadBar);

var _loadContainer = __webpack_require__("./public/components/common/loadContainer.jsx");

var _loadContainer2 = _interopRequireDefault(_loadContainer);

var _rtCard = __webpack_require__("./public/components/common/rtCard.jsx");

var _rtCard2 = _interopRequireDefault(_rtCard);

var _rtForm = __webpack_require__("./public/components/common/rtForm.jsx");

var _rtForm2 = _interopRequireDefault(_rtForm);

var _rtList = __webpack_require__("./public/components/common/rtList.jsx");

var _rtList2 = _interopRequireDefault(_rtList);

var _rtSwatch = __webpack_require__("./public/components/common/rtSwatch.jsx");

var _rtSwatch2 = _interopRequireDefault(_rtSwatch);

var _swipeContainer = __webpack_require__("./public/components/common/swipeContainer.jsx");

var _swipeContainer2 = _interopRequireDefault(_swipeContainer);

var _icon = __webpack_require__("./public/components/common/icon.jsx");

var _icon2 = _interopRequireDefault(_icon);

var _rtPane = __webpack_require__("./public/components/common/rtPane.jsx");

var _rtPane2 = _interopRequireDefault(_rtPane);

var _sortableList = __webpack_require__("./public/components/common/sortableList.jsx");

var _sortableList2 = _interopRequireDefault(_sortableList);

var _tabSwitcher = __webpack_require__("./public/components/common/tabSwitcher.jsx");

var _tabSwitcher2 = _interopRequireDefault(_tabSwitcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RtCard = _rtCard2.default;
exports.RtPane = _rtPane2.default;
exports.RtForm = _rtForm2.default;
exports.RtList = _rtList2.default;
exports.Icon = _icon2.default;
exports.SortableList = _sortableList2.default;
exports.TabSwitcher = _tabSwitcher2.default;
exports.FlexRow = _flexRow2.default;
exports.LoadContainer = _loadContainer2.default;
exports.SwipeContainer = _swipeContainer2.default;
exports.InputBox = _inputBox2.default;
exports.LoadBar = _loadBar2.default;
exports.RtSwatch = _rtSwatch2.default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),

/***/ "./public/components/common/inputBox.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputBox = function (_React$Component) {
    _inherits(InputBox, _React$Component);

    function InputBox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InputBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputBox.__proto__ || Object.getPrototypeOf(InputBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            valid: true
        }, _this.handleChange = function () {
            var _this2;

            return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.onBlur = function () {
            var _this3;

            return (_this3 = _this).__onBlur__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InputBox, [{
        key: '__handleChange__REACT_HOT_LOADER__',
        value: function __handleChange__REACT_HOT_LOADER__(e) {
            if (this.props.field.validate) {
                var valid = this.props.field.validate(e.target.value);
                this.setState({
                    valid: valid
                });
            }
        }
    }, {
        key: '__onBlur__REACT_HOT_LOADER__',
        value: function __onBlur__REACT_HOT_LOADER__(e) {
            var data = {
                value: e.target.value,
                field: this.props.field
            };
            this.props.updateForm(data);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                field = _props.field,
                values = _props.values;


            return _react2.default.createElement(
                'div',
                { className: this.state.valid ? 'form-group row' : 'form-group row has-warning', key: field.label },
                _react2.default.createElement(
                    'label',
                    { className: 'form-control-label col-md-2 col-form-label' },
                    field.label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-10' },
                    this.props.edit ? _react2.default.createElement('input', {
                        type: field.type,
                        name: field.name,
                        onBlur: this.onBlur,
                        onChange: this.handleChange,
                        className: 'form-control',
                        defaultValue: values[field.name] || field.label }) : _react2.default.createElement(
                        'p',
                        { className: 'form-control-static text-left' },
                        values[field.name] || field.label
                    )
                )
            );
        }
    }]);

    return InputBox;
}(_react2.default.Component);

InputBox.propTypes = {
    updateForm: _propTypes2.default.func
};


InputBox.propTypes = {
    field: _propTypes2.default.object,
    values: _propTypes2.default.object,
    edit: _propTypes2.default.bool
};

var _default = InputBox;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(InputBox, 'InputBox', '/Users/peller/Desktop/reactracker/public/components/common/inputBox.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/inputBox.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/loadBar.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadBar = function LoadBar(props) {
    return _react2.default.createElement(
        'div',
        { className: props.inline ? 'load-bar load-bar-inline' : 'load-bar' },
        _react2.default.createElement('div', { className: 'load-bar__bar' }),
        _react2.default.createElement('div', { className: 'load-bar__bar' }),
        _react2.default.createElement('div', { className: 'load-bar__bar' })
    );
};

var _default = LoadBar;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(LoadBar, 'LoadBar', '/Users/peller/Desktop/reactracker/public/components/common/loadBar.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/loadBar.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/loadContainer.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactCssTransitionReplace = __webpack_require__("./node_modules/react-css-transition-replace/lib/ReactCSSTransitionReplace.js");

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
                { transitionName: 'load_container', transitionEnterTimeout: 500, transitionLeaveTimeout: 500 },
                this.props.loaded ? content[1] : content[0]
            );
        }
    }]);

    return LoadContainer;
}(_react2.default.Component);

var _default = LoadContainer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(LoadContainer, 'LoadContainer', '/Users/peller/Desktop/reactracker/public/components/common/loadContainer.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/loadContainer.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/rtCard.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rtutil = __webpack_require__("./public/rtutil.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RtCard = function RtCard(props) {
  return _react2.default.createElement(
    'div',
    { className: 'rt-card__content', style: props.style },
    (0, _rtutil.renderIf)(props.title)(_react2.default.createElement(
      'div',
      { className: 'rt-card__header text-capitalize' },
      props.title
    )),
    props.children
  );
};

var _default = RtCard;
exports.default = _default;


RtCard.propTypes = {
  title: _propTypes2.default.string,
  children: _propTypes2.default.node
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RtCard, 'RtCard', '/Users/peller/Desktop/reactracker/public/components/common/rtCard.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/rtCard.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/rtForm.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = __webpack_require__("./public/components/common/index.js");

var _rtutil = __webpack_require__("./public/rtutil.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtForm = function (_Component) {
    _inherits(RtForm, _Component);

    function RtForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RtForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RtForm.__proto__ || Object.getPrototypeOf(RtForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.toggleEdit = function () {
            var _this2;

            return (_this2 = _this).__toggleEdit__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.save = function () {
            var _this3;

            return (_this3 = _this).__save__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _this.makeForm = function () {
            var _this4;

            return (_this4 = _this).__makeForm__REACT_HOT_LOADER__.apply(_this4, arguments);
        }, _this.updateForm = function () {
            var _this5;

            return (_this5 = _this).__updateForm__REACT_HOT_LOADER__.apply(_this5, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RtForm, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (!this.state.data) {
                this.setState({
                    data: Object.assign({}, this.props.values)
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { className: 'form-horizontal', style: { opacity: this.props.pending ? 0.5 : 1, transition: 'opacity 0.3s linear', position: 'relative' } },
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        _common.FlexRow,
                        { inline: true },
                        (0, _rtutil.renderIf)(this.props.editable && !this.state.edit)(_react2.default.createElement(
                            'button',
                            { className: 'btn btn-outline-primary', onClick: this.toggleEdit },
                            'Edit'
                        )),
                        (0, _rtutil.renderIf)(this.props.editable && this.state.edit)(_react2.default.createElement(
                            'button',
                            { className: 'btn btn-outline-secondary', onClick: this.toggleEdit },
                            'Cancel'
                        )),
                        (0, _rtutil.renderIf)(this.state.edit)(_react2.default.createElement(
                            'button',
                            { className: 'btn btn-outline-primary' + (0, _rtutil.renderIf)(this.props.pending)(' btn-outline-pending'), onClick: this.save },
                            'Save'
                        ))
                    )
                ),
                this.makeForm()
            );
        }
    }, {
        key: '__toggleEdit__REACT_HOT_LOADER__',
        value: function __toggleEdit__REACT_HOT_LOADER__(e) {
            e.preventDefault();
            var data = Object.assign({}, this.state.edit ? this.props.values : this.state.data);
            this.setState({
                edit: !this.state.edit,
                data: data
            });
        }
    }, {
        key: '__save__REACT_HOT_LOADER__',
        value: function __save__REACT_HOT_LOADER__(e) {
            var _this6 = this;

            e.preventDefault();
            var result = this.props.onSave(this.state.data);
            if (result.then) {
                result.then(function (data) {
                    _this6.setState({
                        edit: false,
                        data: data
                    });
                });
            } else {
                this.setState({
                    edit: false,
                    data: result
                });
            }
        }
    }, {
        key: '__makeForm__REACT_HOT_LOADER__',
        value: function __makeForm__REACT_HOT_LOADER__(fields) {
            var _this7 = this;

            fields = fields || this.props.fields;
            return fields.map(function (field, i) {
                if (field instanceof Array) {
                    return _react2.default.createElement(
                        'div',
                        { key: i, style: { padding: '30px 0 0' } },
                        _react2.default.createElement(
                            'h5',
                            null,
                            field[0]
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _this7.makeForm(field.slice(1), _this7.state.data, _this7.state.edit)
                        )
                    );
                } else {
                    return _react2.default.createElement(_common.InputBox, {
                        key: field.name,
                        field: field,
                        values: _this7.state.data,
                        edit: _this7.state.edit,
                        updateForm: _this7.updateForm });
                }
            });
        }
    }, {
        key: '__updateForm__REACT_HOT_LOADER__',
        value: function __updateForm__REACT_HOT_LOADER__(update) {
            this.setState({
                data: Object.assign(this.state.data, _defineProperty({}, update.field.name, update.value))
            });
        }
    }]);

    return RtForm;
}(_react.Component);

RtForm.defaultProps = {
    fields: [],
    values: {}
};
RtForm.propTypes = {
    fields: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        type: _propTypes2.default.string.isRequired,
        label: _propTypes2.default.string,
        onBlur: _propTypes2.default.func,
        onClick: _propTypes2.default.func,
        validate: _propTypes2.default.func
    })])).isRequired,
    values: _propTypes2.default.object,
    editable: _propTypes2.default.bool,
    pending: _propTypes2.default.bool,
    onSave: _propTypes2.default.func
};
var _default = RtForm;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtForm, 'RtForm', '/Users/peller/Desktop/reactracker/public/components/common/rtForm.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/rtForm.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/rtList.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RtList = function RtList(props) {
    return _react2.default.createElement(
        'div',
        { className: 'info_pod__list' },
        props.listItems.map(function (item, index) {
            return _react2.default.createElement(
                'div',
                { key: item._id || index, className: '' },
                item.value || item
            );
        })
    );
};

var _default = RtList;
exports.default = _default;


RtList.propTypes = {
    listItems: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]))
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtList, 'RtList', '/Users/peller/Desktop/reactracker/public/components/common/rtList.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/rtList.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/rtPane.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RtCard = function RtCard(props) {
  return _react2.default.createElement(
    'div',
    { className: 'rt-pane ' + (props.className || '') },
    props.children
  );
};

var _default = RtCard;
exports.default = _default;


RtCard.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RtCard, 'RtCard', '/Users/peller/Desktop/reactracker/public/components/common/rtPane.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/rtPane.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/rtSwatch.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RtSwatch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorService = __webpack_require__("./public/services/colorService.js");

var _colorService2 = _interopRequireDefault(_colorService);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

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
            var localStyle = {
                backgroundColor: c.color || 'white',
                color: _colorService2.default.textColor(c.color),
                borderRadius: '3px',
                height: '30px'
            };

            var style = Object.assign({}, localStyle, this.props.style ? this.props.style : {});

            return _react2.default.createElement(
                'span',
                { className: this.props.className, style: style },
                _react2.default.createElement(
                    'span',
                    { className: 'hidden-sm-down' },
                    c.value || ''
                )
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

var _default = (0, _reactRedux.connect)(mapState)(RtSwatch);

exports.default = _default;
exports.RtSwatch = RtSwatch;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtSwatch, 'RtSwatch', '/Users/peller/Desktop/reactracker/public/components/common/rtSwatch.jsx');

    __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/common/rtSwatch.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/rtSwatch.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/sortableList.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ramda = __webpack_require__("./node_modules/ramda/index.js");

var _ramda2 = _interopRequireDefault(_ramda);

var _reactstrap = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");

var _rtutil = __webpack_require__("./public/rtutil.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortableList = function (_Component) {
    _inherits(SortableList, _Component);

    function SortableList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SortableList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SortableList.__proto__ || Object.getPrototypeOf(SortableList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            items: []
        }, _this.makeOptions = function () {
            var _this2;

            return (_this2 = _this).__makeOptions__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SortableList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.ListItem = this.props.component;
            this.comparator = this.props.comparator || function (a, b) {
                return a === b;
            };

            this.setState({
                current: this.props.list
            });

            if (this.props.options) {
                var options = _ramda2.default.differenceWith(this.comparator, this.props.options, this.props.list);
                this.setState({
                    options: options
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                current: nextProps.list
            });
            if (nextProps.options && this.state.current || nextProps.list) {
                var options = _ramda2.default.differenceWith(this.comparator, nextProps.options, nextProps.list);
                this.setState({
                    options: options
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (!this.state.current) return null;
            return _react2.default.createElement(
                _reactstrap.Row,
                null,
                _react2.default.createElement(
                    _reactstrap.Col,
                    null,
                    _react2.default.createElement(
                        'ul',
                        { className: this.props.className, style: { fontSize: '1.5em' } },
                        this.state.current.map(function (item, ind, arr) {
                            return _react2.default.createElement(_this3.ListItem, _extends({
                                'data-source': 'list',
                                key: item.key || ind
                            }, item, _this3.makeOptions(ind, arr, 'list')));
                        })
                    )
                ),
                this.state.options ? _react2.default.createElement(
                    _reactstrap.Col,
                    null,
                    _react2.default.createElement(
                        'ul',
                        { className: this.props.className, style: { fontSize: '1.5em' } },
                        this.state.options.map(function (item, ind, arr) {
                            return _react2.default.createElement(_this3.ListItem, _extends({
                                'data-source': 'options',
                                key: item.key || ind
                            }, item, _this3.makeOptions(ind, arr, 'options')));
                        })
                    )
                ) : null
            );
        }
    }, {
        key: '__makeOptions__REACT_HOT_LOADER__',
        value: function __makeOptions__REACT_HOT_LOADER__(ind, arr, source) {
            var _this4 = this;

            return {
                draggable: true,
                onDragStart: function onDragStart(e) {
                    e.dataTransfer.setData('ind', ind);
                    e.dataTransfer.setData('source', source);
                    e.dataTransfer.effectAllowed = 'move';
                },
                onDragOver: function onDragOver(e) {
                    e.preventDefault();
                },
                onDrop: function onDrop(e) {
                    var source = e.dataTransfer.getData('source');
                    var dest = e.currentTarget.dataset.source;

                    if (source === dest) return;

                    var oldInd = +e.dataTransfer.getData('ind');
                    var newInd = ind;

                    var lists = {
                        list: [].concat(_toConsumableArray(_this4.state.current)),
                        options: [].concat(_toConsumableArray(_this4.state.options))
                    };

                    if (newInd == arr.length - 1) {
                        newInd = arr.length;
                    }
                    var newEl = lists[source].splice(oldInd, 1)[0];
                    lists[dest].splice(newInd, 0, newEl);

                    _this4.setState({
                        current: lists.list,
                        options: lists.options
                    });
                }
            };
        }
    }]);

    return SortableList;
}(_react.Component);

SortableList.propTypes = {
    className: _propTypes2.default.string,
    component: _propTypes2.default.func.isRequired,
    list: _propTypes2.default.array.isRequired,
    options: _propTypes2.default.array,
    comparator: _propTypes2.default.func
};
var _default = SortableList;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(SortableList, 'SortableList', '/Users/peller/Desktop/reactracker/public/components/common/sortableList.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/sortableList.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/swipeContainer.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwipeContainer = function (_Component) {
    _inherits(SwipeContainer, _Component);

    function SwipeContainer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SwipeContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwipeContainer.__proto__ || Object.getPrototypeOf(SwipeContainer)).call.apply(_ref, [this].concat(args))), _this), _this.touchStart = function () {
            var _this2;

            return (_this2 = _this).__touchStart__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.touchEnd = function () {
            var _this3;

            return (_this3 = _this).__touchEnd__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SwipeContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { onTouchStart: this.touchStart, onTouchEnd: this.touchEnd },
                this.props.children
            );
        }
    }, {
        key: '__touchStart__REACT_HOT_LOADER__',
        value: function __touchStart__REACT_HOT_LOADER__(e) {
            if (e.changedTouches.length > 1) return;
            this.startX = e.changedTouches[0].clientX;
        }
    }, {
        key: '__touchEnd__REACT_HOT_LOADER__',
        value: function __touchEnd__REACT_HOT_LOADER__(e) {
            var dist = e.changedTouches[0].clientX - this.startX;
            if (dist < 100 && dist > -100) return;

            if (!this.props.onLeft) return this.props.onSwipe(dist);

            dist > 0 ? this.props.onRight() : this.props.onLeft();
        }
    }]);

    return SwipeContainer;
}(_react.Component);

var _default = SwipeContainer;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(SwipeContainer, 'SwipeContainer', '/Users/peller/Desktop/reactracker/public/components/common/swipeContainer.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/swipeContainer.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/tabSwitcher.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isActive(props, tab) {
    return props.active === tab ? 'active text-capitalize' : 'text-capitalize';
}

var Slider = function Slider() {
    return _react2.default.createElement('li', { className: 'tab-slider' });
};

var tabSwitcher = function tabSwitcher(props) {
    return _react2.default.createElement(
        _reactstrap.Nav,
        { tabs: true },
        props.tabs.map(function (tab, ind) {
            return _react2.default.createElement(
                _reactstrap.NavItem,
                { key: tab },
                _react2.default.createElement(
                    _reactstrap.NavLink,
                    {
                        className: isActive(props, tab),
                        onClick: function onClick() {
                            props.toggle(tab);
                        } },
                    tab
                )
            );
        }),
        _react2.default.createElement(Slider, { key: 'slider' })
    );
};

tabSwitcher.propTypes = {
    tabs: _propTypes2.default.array.isRequired,
    active: _propTypes2.default.string,
    toggle: _propTypes2.default.func
};

tabSwitcher.defaultProps = {
    tabs: []
};

var _default = tabSwitcher;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(isActive, 'isActive', '/Users/peller/Desktop/reactracker/public/components/common/tabSwitcher.jsx');

    __REACT_HOT_LOADER__.register(Slider, 'Slider', '/Users/peller/Desktop/reactracker/public/components/common/tabSwitcher.jsx');

    __REACT_HOT_LOADER__.register(tabSwitcher, 'tabSwitcher', '/Users/peller/Desktop/reactracker/public/components/common/tabSwitcher.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/tabSwitcher.jsx');
}();

;

/***/ }),

/***/ "./public/components/gymList/gymItem/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _rtBar = __webpack_require__("./public/components/rtChart/rtBar.jsx");

var _rtBar2 = _interopRequireDefault(_rtBar);

var _route = __webpack_require__("./public/data/actions/route.js");

var _rtutil = __webpack_require__("./public/rtutil.js");

var _rtutil2 = _interopRequireDefault(_rtutil);

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
            this.props.getRoutes(this.props.gym._id);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'gym-item' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'gym-title text-brand text-uppercase text-thin' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/gyms/' + this.props.gym.url, className: 'link-plain' },
                            this.props.gym.name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'gym-preview' },
                        this.props.data ? _react2.default.createElement(_rtBar2.default, { data: this.props.data, color: this.props.gym.color }) : null
                    )
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
    var gymRoutes = state.routes.toArray().filter(function (route) {
        return route.gym === ownProps.gym._id;
    });

    return {
        data: transformRoutes(gymRoutes)
    };
}

function mapDispatch(dispatch) {
    return {
        getRoutes: function getRoutes(id) {
            return dispatch((0, _route.getRoutesByGym)(id));
        }
    };
}

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(GymItem);

exports.default = _default;


function transformRoutes(routes) {
    if (!routes.length) return null;
    var sorted = _rtutil2.default.buckets(routes.map(function (boulder) {
        return boulder.grade;
    }), _rtutil2.default.range(13));
    return Object.keys(sorted).map(function (key) {
        return sorted[key];
    });
}
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(GymItem, 'GymItem', '/Users/peller/Desktop/reactracker/public/components/gymList/gymItem/index.jsx');

    __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/gymList/gymItem/index.jsx');

    __REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', '/Users/peller/Desktop/reactracker/public/components/gymList/gymItem/index.jsx');

    __REACT_HOT_LOADER__.register(transformRoutes, 'transformRoutes', '/Users/peller/Desktop/reactracker/public/components/gymList/gymItem/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymList/gymItem/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/gymList/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _gymItem = __webpack_require__("./public/components/gymList/gymItem/index.jsx");

var _gymItem2 = _interopRequireDefault(_gymItem);

var _common = __webpack_require__("./public/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                _common.RtCard,
                { title: 'Gyms' },
                _react2.default.createElement(
                    _common.LoadContainer,
                    { loaded: !!this.props.gyms.length },
                    _react2.default.createElement(
                        'div',
                        { key: '0', className: 'gym-list' },
                        _react2.default.createElement(_common.LoadBar, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { key: '1', className: 'gym-list' },
                        this.props.gyms.map(function (gym) {
                            return _react2.default.createElement(_gymItem2.default, { key: gym._id, gym: gym, className: 'gym-item' });
                        })
                    )
                )
            );
        }
    }]);

    return GymList;
}(_react.Component);

GymList.propTypes = {
    gyms: _propTypes2.default.array.isRequired
};


function mapProps(state) {
    return {
        gyms: state.gyms,
        fetching: state.fetching
    };
}

var _default = (0, _reactRedux.connect)(mapProps)(GymList);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(GymList, 'GymList', '/Users/peller/Desktop/reactracker/public/components/gymList/index.jsx');

    __REACT_HOT_LOADER__.register(mapProps, 'mapProps', '/Users/peller/Desktop/reactracker/public/components/gymList/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymList/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/gymOverview/components/routeHeader.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rtutil = __webpack_require__("./public/rtutil.js");

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
                { onClick: props.handleSort('set_on') },
                'Date ',
                arrow('set_on')
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
                { onClick: props.handleSort('wall') },
                'Wall ',
                arrow('wall')
            ),
            _react2.default.createElement(
                'th',
                { onClick: props.handleSort('setter') },
                'Setter ',
                arrow('setter')
            ),
            _react2.default.createElement(
                'th',
                { className: 'hidden-sm-down' },
                'Edit'
            ),
            _react2.default.createElement(
                'th',
                null,
                props.selected ? _react2.default.createElement(
                    'a',
                    { href: '#', onClick: props.deleteHandler },
                    'Remove'
                ) : 'Select'
            )
        )
    );
};

RouteHeader.propTypes = {
    handleSort: _propTypes2.default.func.isRequired,
    sort: _propTypes2.default.string,
    selected: _propTypes2.default.bool,
    deleteHandler: _propTypes2.default.func
};

var _default = RouteHeader;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(arrows, 'arrows', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeHeader.jsx');

    __REACT_HOT_LOADER__.register(RouteHeader, 'RouteHeader', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeHeader.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeHeader.jsx');
}();

;

/***/ }),

/***/ "./public/components/gymOverview/components/routeList.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routeRow = __webpack_require__("./public/components/gymOverview/components/routeRow.jsx");

var _routeRow2 = _interopRequireDefault(_routeRow);

var _routeHeader = __webpack_require__("./public/components/gymOverview/components/routeHeader.jsx");

var _routeHeader2 = _interopRequireDefault(_routeHeader);

var _rtutil = __webpack_require__("./public/rtutil.js");

var _rtutil2 = _interopRequireDefault(_rtutil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteList = function (_Component) {
    _inherits(RouteList, _Component);

    function RouteList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RouteList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RouteList.__proto__ || Object.getPrototypeOf(RouteList)).call.apply(_ref, [this].concat(args))), _this), _this.selectHandler = {
            mouseDown: function mouseDown(e) {
                e.preventDefault();

                var modifier = e.ctrlKey || e.metaKey;
                var shift = e.shiftKey;
                var ind = Number(e.target.dataset.index);
                var range = void 0;

                if (modifier && _this.lastSelected !== undefined) {
                    var l = Math.min(_this.lastSelected, ind);
                    var h = Math.max(_this.lastSelected, ind);
                    var selected = _rtutil2.default.range(l, h + 1);
                    _this.lastSelected = undefined;
                    range = _this.state.range.concat(selected);
                } else if (modifier && !_this.lastSelected) {
                    _this.lastSelected = ind;
                    range = _this.state.range.concat(ind);
                } else if (shift && _this.state.range.length) {
                    var _l = Math.min.apply(Math, _toConsumableArray(_this.state.range));
                    var _h = Math.max.apply(Math, _toConsumableArray(_this.state.range));
                    var _selected = ind <= _h ? _rtutil2.default.range(ind, _h + 1) : _rtutil2.default.range(_l, ind + 1);
                    _this.lastSelected = undefined;
                    range = _this.state.range.concat(_selected);
                } else {
                    _this.lastSelected = ind;
                    range = _this.state.range.includes(ind) && _this.state.range.length === 1 ? [] : [ind];
                }

                _this.setState({
                    range: range
                });
            }
        }, _this.deleteHandler = function () {
            var _this2;

            return (_this2 = _this).__deleteHandler__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.handleSort = function () {
            var _this3;

            return (_this3 = _this).__handleSort__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _this.updateRoute = function () {
            var _this4;

            return (_this4 = _this).__updateRoute__REACT_HOT_LOADER__.apply(_this4, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RouteList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                routes: sortOn([].concat(_toConsumableArray(this.props.routes)), 'set_on'),
                range: []
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(next) {
            if (next.routes) {
                var routes = sortOn(next.routes, this.state.sort || 'set_on');
                this.setState({
                    routes: this.state.dir === 'desc' ? routes.reverse() : routes
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement(
                'table',
                { className: 'table table-sm table-mobile table-fixed table__routelist' },
                _react2.default.createElement(_routeHeader2.default, {
                    handleSort: this.handleSort,
                    sort: this.state.sort,
                    dir: this.state.dir,
                    deleteHandler: this.deleteHandler,
                    selected: this.state.range.length > 0 }),
                _react2.default.createElement(
                    'tbody',
                    null,
                    this.state.routes.map(function (route, ind) {
                        return _react2.default.createElement(_routeRow2.default, {
                            ind: ind,
                            key: route._id + route.updated_at,
                            route: route,
                            selectHandler: _this5.selectHandler,
                            selected: _this5.state.range.includes(ind),
                            team: _this5.props.team,
                            updateRoute: _this5.updateRoute,
                            walls: _this5.props.walls });
                    })
                )
            );
        }
    }, {
        key: '__deleteHandler__REACT_HOT_LOADER__',
        value: function __deleteHandler__REACT_HOT_LOADER__(event) {
            var _this6 = this;

            event.preventDefault();
            var inds = [].concat(_toConsumableArray(new Set(this.state.range)));
            var ids = inds.map(function (ind) {
                return _this6.state.routes[ind]._id;
            });

            this.props.removeRoutes(ids);
            this.setState({
                range: []
            });
        }
    }, {
        key: '__handleSort__REACT_HOT_LOADER__',
        value: function __handleSort__REACT_HOT_LOADER__(param) {
            var _this7 = this;

            return function () {
                var newRoutes = [].concat(_toConsumableArray(_this7.state.routes)),
                    dir = void 0;
                if (_this7.state.sort === param) {
                    newRoutes.reverse();
                    dir = _this7.state.dir === 'asc' ? 'desc' : 'asc';
                } else {
                    sortOn(newRoutes, param);
                    dir = 'asc';
                }

                _this7.setState({
                    dir: dir,
                    sort: param,
                    routes: newRoutes,
                    range: []
                });
            };
        }
    }, {
        key: '__updateRoute__REACT_HOT_LOADER__',
        value: function __updateRoute__REACT_HOT_LOADER__(newRoute) {
            this.setState({
                routes: this.state.routes.map(function (route) {
                    return route._id === newRoute._id ? newRoute : route;
                })
            });
            this.props.updateRoute(newRoute);
        }
    }]);

    return RouteList;
}(_react.Component);

RouteList.propTypes = {
    routes: _propTypes2.default.array,
    team: _propTypes2.default.object,
    gym: _propTypes2.default.object,
    updateRoute: _propTypes2.default.func,
    removeRoutes: _propTypes2.default.func
};


function sortOn(arr, prop) {
    if (prop === 'grade') {
        return arr.sort(function (a, b) {
            return a[prop] - b[prop];
        });
    }

    if (prop === 'set_on') {
        return arr.sort(function (a, b) {
            return Date.parse(a.set_on) - Date.parse(b.set_on);
        });
    }
    return arr.sort(function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        } else if (a[prop] > b[prop]) {
            return 1;
        } else {
            return 0;
        }
    });
}

var _default = RouteList;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RouteList, 'RouteList', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeList.jsx');

    __REACT_HOT_LOADER__.register(sortOn, 'sortOn', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeList.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeList.jsx');
}();

;

/***/ }),

/***/ "./public/components/gymOverview/components/routeRow.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = __webpack_require__("./public/components/common/index.js");

var _rtutil = __webpack_require__("./public/rtutil.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteRow = function (_React$Component) {
  _inherits(RouteRow, _React$Component);

  function RouteRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RouteRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RouteRow.__proto__ || Object.getPrototypeOf(RouteRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      edit: false
    }, _this.cancelEdit = function () {
      var _this2;

      return (_this2 = _this).__cancelEdit__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.toggleEdit = function () {
      var _this3;

      return (_this3 = _this).__toggleEdit__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.deleteRoute = function () {
      var _this4;

      return (_this4 = _this).__deleteRoute__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.updateField = function () {
      var _this5;

      return (_this5 = _this).__updateField__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RouteRow, [{
    key: 'render',
    value: function render() {
      return this.state.edit ? _react2.default.createElement(
        'tr',
        { className: 'table-center ' + (this.props.selected ? 'route-row__selected' : '') },
        _react2.default.createElement(
          'td',
          { className: 'gym-row__date' },
          _react2.default.createElement('input', {
            type: 'text',
            className: 'input-sm form-control',
            name: 'set_on',
            onChange: this.updateField,
            defaultValue: new Date(this.props.route.set_on).toLocaleDateString() })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('input', {
            type: 'text',
            className: 'input-sm form-control',
            name: 'grade',
            onChange: this.updateField,
            defaultValue: this.props.route.grade })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('input', {
            type: 'text',
            className: 'input-sm form-control',
            name: 'color',
            onChange: this.updateField,
            defaultValue: this.props.route.color })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'select',
            {
              className: 'input-sm form-control',
              name: 'wall',
              onBlur: this.updateField,
              defaultValue: this.props.route.wall },
            this.props.walls.map(function (wall) {
              return _react2.default.createElement(
                'option',
                { key: wall, value: wall },
                wall
              );
            })
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'select',
            {
              className: 'input-sm form-control',
              name: 'setter',
              onBlur: this.updateField,
              defaultValue: this.props.route.setter },
            this.props.team.members.map(function (setter) {
              return _react2.default.createElement(
                'option',
                { key: setter._id, value: setter.nickname },
                setter.nickname
              );
            })
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'gym-row__edit hidden-sm-down' },
          _react2.default.createElement(
            _common.FlexRow,
            { inline: true, around: true, style: { width: '80%' } },
            _react2.default.createElement(_common.Icon, { onClick: this.cancelEdit, icon: 'x' }),
            _react2.default.createElement(_common.Icon, { onClick: this.toggleEdit, icon: 'check' })
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'hidden-sm' },
          _react2.default.createElement('input', {
            onMouseDown: this.props.selectHandler.mouseDown,
            type: 'checkbox',
            checked: this.props.selected,
            'data-index': this.props.ind })
        )
      ) : _react2.default.createElement(
        'tr',
        { className: 'table-center ' + (this.props.selected ? 'route-row__selected' : ''), onDoubleClick: this.toggleEdit },
        _react2.default.createElement(
          'td',
          { className: 'gym-row__date' },
          new Date(this.props.route.set_on).toLocaleDateString(),
          _react2.default.createElement(
            'div',
            { className: 'hidden-md-down' },
            ' (' + _rtutil.dateMath.weeksOld(this.props.route.set_on) + ' weeks old)'
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.route.grade
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_common.RtSwatch, { className: 'list__swatch', color: this.props.route.color })
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.route.wall
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.route.setter
        ),
        _react2.default.createElement(
          'td',
          { className: 'hidden-sm-down' },
          _react2.default.createElement(_common.Icon, { onClick: this.toggleEdit, icon: 'pencil' })
        ),
        _react2.default.createElement(
          'td',
          { className: 'hidden-sm' },
          _react2.default.createElement('input', {
            onMouseDown: this.props.selectHandler.mouseDown,
            type: 'checkbox',
            checked: this.props.selected,
            'data-index': this.props.ind })
        )
      );
    }
  }, {
    key: '__cancelEdit__REACT_HOT_LOADER__',
    value: function __cancelEdit__REACT_HOT_LOADER__() {
      this.setState({
        edit: !this.state.edit
      });
    }
  }, {
    key: '__toggleEdit__REACT_HOT_LOADER__',
    value: function __toggleEdit__REACT_HOT_LOADER__() {
      if (this.state.edit) {
        this.props.updateRoute(this.route);
      } else {
        this.route = Object.assign({}, this.props.route);
      }

      this.setState({
        edit: !this.state.edit
      });
    }
  }, {
    key: '__deleteRoute__REACT_HOT_LOADER__',
    value: function __deleteRoute__REACT_HOT_LOADER__() {}
  }, {
    key: '__updateField__REACT_HOT_LOADER__',
    value: function __updateField__REACT_HOT_LOADER__(event) {
      var field = event.target.name;
      this.route[field] = event.target.value;
    }
  }]);

  return RouteRow;
}(_react2.default.Component);

RouteRow.propTypes = {
  ind: _propTypes2.default.number,
  route: _propTypes2.default.object,
  selectHandler: _propTypes2.default.object,
  selected: _propTypes2.default.bool,
  team: _propTypes2.default.object,
  updateRoute: _propTypes2.default.func,
  walls: _propTypes2.default.array
};
var _default = RouteRow;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RouteRow, 'RouteRow', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeRow.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeRow.jsx');
}();

;

/***/ }),

/***/ "./public/components/gymOverview/components/statsCard.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = __webpack_require__("./public/components/common/index.js");

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
      this.setState({
        data: this.makeOverview(this.props.data)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state) return null;
      return _react2.default.createElement(
        _common.RtPane,
        null,
        _react2.default.createElement(
          'span',
          { className: 'rt-pane__header' },
          'Overview'
        ),
        _react2.default.createElement(
          'table',
          { className: 'table' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { className: 'text-right' },
                'Count:'
              ),
              _react2.default.createElement(
                'td',
                { className: 'text-left' },
                this.state.data.count
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { className: 'text-right' },
                'Routes Needed:'
              ),
              _react2.default.createElement(
                'td',
                { className: 'text-left' },
                'N/A'
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { className: 'text-right' },
                'Oldest Route:'
              ),
              _react2.default.createElement(
                'td',
                { className: 'text-left' },
                this.state.data.oldest
              )
            )
          )
        )
      );
    }
  }, {
    key: 'makeOverview',
    value: function makeOverview(data) {
      var min = Infinity;

      data.forEach(function (route) {
        if (min > Date.parse(route.set_on)) min = route.set_on;
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

var _default = StatsCard;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(StatsCard, 'StatsCard', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/statsCard.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/statsCard.jsx');
}();

;

/***/ }),

/***/ "./public/components/gymOverview/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _reactRouter = __webpack_require__("./node_modules/react-router/es/index.js");

var _rtBigBar = __webpack_require__("./public/components/rtChart/rtBigBar.jsx");

var _rtBigBar2 = _interopRequireDefault(_rtBigBar);

var _common = __webpack_require__("./public/components/common/index.js");

var _statsCard = __webpack_require__("./public/components/gymOverview/components/statsCard.jsx");

var _statsCard2 = _interopRequireDefault(_statsCard);

var _routeList = __webpack_require__("./public/components/gymOverview/components/routeList.jsx");

var _routeList2 = _interopRequireDefault(_routeList);

var _reactCssTransitionReplace = __webpack_require__("./node_modules/react-css-transition-replace/lib/ReactCSSTransitionReplace.js");

var _reactCssTransitionReplace2 = _interopRequireDefault(_reactCssTransitionReplace);

var _reactstrap = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");

var _team = __webpack_require__("./public/data/actions/team.js");

var _route = __webpack_require__("./public/data/actions/route.js");

var _rtutil = __webpack_require__("./public/rtutil.js");

var _rtutil2 = _interopRequireDefault(_rtutil);

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
            loaded: false,
            active: 'rope'
        }, _this.defaultProps = {
            types: []
        }, _this.updateRoutes = function () {
            var _this2;

            return (_this2 = _this).__updateRoutes__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.toggle = function () {
            var _this3;

            return (_this3 = _this).__toggle__REACT_HOT_LOADER__.apply(_this3, arguments);
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
            var _this4 = this;

            if (this.props.gym && nextProps.gym && this.props.gym.name !== nextProps.gym.name) {
                this.setState({
                    loaded: false
                });
                setTimeout(function () {
                    return _this4.getDataForGym(nextProps.gym.url);
                }, 300);
            }

            if (nextProps.routes && this.props.gym) {
                this.setState({
                    count: this.updateRoutes(nextProps.routes)
                });
            }
        }
    }, {
        key: '__updateRoutes__REACT_HOT_LOADER__',
        value: function __updateRoutes__REACT_HOT_LOADER__(newRoutes, type) {
            type = type ? type.toLowerCase() : this.props.gym.type[0];
            var grades = this.props.team.grades[type];
            var routes = newRoutes.filter(function (route) {
                return route.type === type;
            });
            this.setState({
                routes: routes
            });
            return transformRoutes(routes, grades);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.error) return _react2.default.createElement(_reactRouter.Redirect, { to: '/' });
            if (!this.props.gym) return _react2.default.createElement(
                _common.RtCard,
                { style: { minHeight: 'calc(100vh - 100px)' } },
                ' ',
                _react2.default.createElement(_common.LoadBar, null)
            );
            return _react2.default.createElement(
                _common.RtCard,
                { title: this.state.loaded ? this.props.gym.name : '', key: this.props.gym.name, style: { minHeight: 'calc(100vh - 100px)' } },
                _react2.default.createElement(
                    _common.LoadContainer,
                    { loaded: this.state.loaded },
                    _react2.default.createElement(_common.LoadBar, null),
                    _react2.default.createElement(
                        'section',
                        null,
                        _react2.default.createElement(
                            _reactstrap.Row,
                            { className: 'align-items-stretch' },
                            _react2.default.createElement(
                                _reactstrap.Col,
                                { xs: '12' },
                                _react2.default.createElement(_common.TabSwitcher, { tabs: this.props.gym.type, toggle: this.toggle, active: this.state.active })
                            ),
                            _react2.default.createElement(
                                _reactstrap.Col,
                                { xs: '12' },
                                _react2.default.createElement('hr', { className: 'seperator' })
                            ),
                            _react2.default.createElement(
                                _reactstrap.Col,
                                { xs: '12', sm: '8' },
                                _react2.default.createElement(_rtBigBar2.default, {
                                    data: this.state.count,
                                    width: '500',
                                    height: '200',
                                    type: this.state.active,
                                    color: this.props.gym.color })
                            ),
                            _react2.default.createElement(
                                _reactstrap.Col,
                                { xs: '12', sm: '4', className: 'col-np d-flex' },
                                _react2.default.createElement(_statsCard2.default, { data: this.state.routes })
                            )
                        ),
                        _react2.default.createElement('hr', { className: 'seperator' }),
                        _react2.default.createElement(
                            _reactstrap.Row,
                            null,
                            _react2.default.createElement(
                                _reactstrap.Col,
                                null,
                                _react2.default.createElement(
                                    _reactCssTransitionReplace2.default,
                                    { transitionName: 'load_container', transitionEnterTimeout: 500, transitionLeaveTimeout: 500 },
                                    _react2.default.createElement(_routeList2.default, {
                                        key: this.state.active,
                                        routes: this.state.routes,
                                        updateRoute: this.props.updateRoute,
                                        removeRoutes: this.props.removeRoutes,
                                        team: this.props.team,
                                        walls: this.props.gym.walls[this.state.active] })
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: '__toggle__REACT_HOT_LOADER__',
        value: function __toggle__REACT_HOT_LOADER__(key) {
            if (this.state.active === key) return;
            var routes = this.updateRoutes(this.props.routes, key);
            this.setState({
                active: key,
                count: routes
            });
        }
    }, {
        key: 'getDataForGym',
        value: function getDataForGym(name) {
            var _this5 = this;

            this.props.getTeam().then(function (team) {
                var currentGym = team.gyms.filter(function (gym) {
                    return name === gym.url;
                })[0];
                if (!currentGym) {
                    _this5.setState({
                        error: true
                    });
                } else {
                    return _this5.props.getRoutes(currentGym._id);
                }
            }).then(function () {
                _this5.setState({
                    loaded: true
                });
            }).catch(function (err) {
                console.log(err);
                _this5.setState({
                    error: true
                });
            });
        }
    }]);

    return GymOverview;
}(_react.Component);

GymOverview.propTypes = {
    name: _propTypes2.default.string,
    gym: _propTypes2.default.object,
    match: _propTypes2.default.object,
    team: _propTypes2.default.object,
    routes: _propTypes2.default.array,
    getTeam: _propTypes2.default.func,
    getRoutes: _propTypes2.default.func
};


function mapState(state, ownProps) {
    var gym = state.gyms.filter(function (gym) {
        return gym.url === ownProps.match.params.name;
    })[0];
    var routes = state.routes.filter(function (route) {
        return route.gym === gym._id;
    });
    var arr = routes.toArray();
    arr.forEach(function (route, ind) {
        return route.ind = ind;
    });
    return {
        gym: gym,
        routes: arr,
        team: state.team
    };
}

function mapDispatch(dispatch) {
    return {
        getTeam: function getTeam() {
            return dispatch((0, _team.getTeam)());
        },
        getRoutes: function getRoutes(id) {
            return dispatch((0, _route.getRoutesByGym)(id));
        },
        updateRoute: function updateRoute(route) {
            return dispatch((0, _route.putRoute)(route));
        },
        removeRoutes: function removeRoutes(arr) {
            return dispatch((0, _route.removeRoutes)(arr));
        }
    };
}

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(GymOverview);

exports.default = _default;


function transformRoutes(routes, grades) {
    if (!grades || !routes) return [];
    var sorted = _rtutil2.default.buckets(routes.map(function (route) {
        return route.grade;
    }), _rtutil2.default.range(grades.length));
    return Object.keys(sorted).map(function (key) {
        return {
            grade: grades[key] && grades[key].value,
            count: sorted[key]
        };
    });
}
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(GymOverview, 'GymOverview', '/Users/peller/Desktop/reactracker/public/components/gymOverview/index.jsx');

    __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/gymOverview/index.jsx');

    __REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', '/Users/peller/Desktop/reactracker/public/components/gymOverview/index.jsx');

    __REACT_HOT_LOADER__.register(transformRoutes, 'transformRoutes', '/Users/peller/Desktop/reactracker/public/components/gymOverview/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymOverview/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/main/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _team = __webpack_require__("./public/data/actions/team.js");

var _gym = __webpack_require__("./public/data/actions/gym.js");

var _rtHeader = __webpack_require__("./public/components/main/rtHeader/index.jsx");

var _rtHeader2 = _interopRequireDefault(_rtHeader);

var _rtContent = __webpack_require__("./public/components/main/rtContent/index.jsx");

var _rtContent2 = _interopRequireDefault(_rtContent);

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
                'div',
                null,
                _react2.default.createElement(_rtHeader2.default, { location: this.props.location }),
                _react2.default.createElement(_rtContent2.default, { location: this.props.location })
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
        gyms: state.gyms,
        location: state.router.location
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
var _default = mainContainer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Main, 'Main', '/Users/peller/Desktop/reactracker/public/components/main/index.jsx');

    __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/main/index.jsx');

    __REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', '/Users/peller/Desktop/reactracker/public/components/main/index.jsx');

    __REACT_HOT_LOADER__.register(mainContainer, 'mainContainer', '/Users/peller/Desktop/reactracker/public/components/main/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/main/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/main/rtContent/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _gymList = __webpack_require__("./public/components/gymList/index.jsx");

var _gymList2 = _interopRequireDefault(_gymList);

var _gymOverview = __webpack_require__("./public/components/gymOverview/index.jsx");

var _gymOverview2 = _interopRequireDefault(_gymOverview);

var _account = __webpack_require__("./public/components/account/index.jsx");

var _account2 = _interopRequireDefault(_account);

var _rtWizard = __webpack_require__("./public/components/rtWizard/index.jsx");

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
        _react2.default.createElement(
          _reactRouterDom.Switch,
          { location: this.props.location },
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _gymList2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/gyms/:name', component: _gymOverview2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/add', component: _rtWizard2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/account', component: _account2.default })
        )
      );
    }
  }]);

  return RtContent;
}(_react.Component);

var _default = RtContent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RtContent, 'RtContent', '/Users/peller/Desktop/reactracker/public/components/main/rtContent/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/main/rtContent/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/main/rtHeader/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");

var _reactRouterBootstrap = __webpack_require__("./node_modules/react-router-bootstrap/lib/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _util = __webpack_require__("./public/data/util/index.js");

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtHeader = function (_Component) {
  _inherits(RtHeader, _Component);

  function RtHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RtHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RtHeader.__proto__ || Object.getPrototypeOf(RtHeader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      dropdownIsOpen: false
    }, _this.toggle = function () {
      var _this2;

      return (_this2 = _this).__toggle__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.toggleDropdown = function () {
      var _this3;

      return (_this3 = _this).__toggleDropdown__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RtHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactstrap.Navbar,
        { toggleable: true, color: 'primary', inverse: true },
        _react2.default.createElement(
          _reactRouterBootstrap.LinkContainer,
          { to: '/' },
          _react2.default.createElement(
            _reactstrap.NavbarBrand,
            null,
            'Routetracker'
          )
        ),
        _react2.default.createElement(_reactstrap.NavbarToggler, { right: true, onClick: this.toggle }),
        _react2.default.createElement(
          _reactstrap.Collapse,
          { isOpen: this.state.isOpen, navbar: true },
          _react2.default.createElement(
            _reactstrap.Nav,
            { navbar: true },
            _react2.default.createElement(
              _reactstrap.NavDropdown,
              { title: 'Gyms', id: 'basic-nav-dropdown', toggle: this.toggleDropdown, isOpen: this.state.dropdownIsOpen },
              _react2.default.createElement(
                _reactstrap.DropdownToggle,
                { nav: true },
                'Gyms'
              ),
              _react2.default.createElement(
                _reactstrap.DropdownMenu,
                { onClick: this.toggleDropdown },
                this.props.gyms ? this.props.gyms.map(function (gym) {
                  return _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { className: 'dropdown-item', key: gym._id, to: '/gyms/' + gym.url },
                    gym.name
                  );
                }) : null,
                _react2.default.createElement(_reactstrap.DropdownItem, { divider: true }),
                _react2.default.createElement(
                  _reactstrap.DropdownItem,
                  null,
                  'Separated link'
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/add' },
              _react2.default.createElement(
                _reactstrap.NavLink,
                null,
                'Add'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Nav,
            { navbar: true, className: 'ml-auto' },
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/logout' },
              _react2.default.createElement(
                _reactstrap.NavLink,
                null,
                'Logout'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/account' },
              _react2.default.createElement(
                _reactstrap.NavLink,
                null,
                'My Account'
              )
            )
          )
        )
      );
    }
  }, {
    key: '__toggle__REACT_HOT_LOADER__',
    value: function __toggle__REACT_HOT_LOADER__() {
      this.setState((0, _util.stateToggle)('isOpen'));
    }
  }, {
    key: '__toggleDropdown__REACT_HOT_LOADER__',
    value: function __toggleDropdown__REACT_HOT_LOADER__() {
      this.setState((0, _util.stateToggle)('dropdownIsOpen'));
    }
  }]);

  return RtHeader;
}(_react.Component);

function mapState(state) {
  return {
    gyms: state.gyms
  };
}

var _default = (0, _reactRedux.connect)(mapState)(RtHeader);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RtHeader, 'RtHeader', '/Users/peller/Desktop/reactracker/public/components/main/rtHeader/index.jsx');

  __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/main/rtHeader/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/main/rtHeader/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtChart/rtBar.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__("./node_modules/d3/build/d3.js");

var d3 = _interopRequireWildcard(_d);

var _rtconfig = __webpack_require__("./public/rtconfig.js");

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

var _default = RtBar;
exports.default = _default;


function makeChart() {
    if (!this.props.data) return;
    var data = this.props.data;

    var width = 94;
    var height = 94;
    var barWidth = width / data.length;

    var y = d3.scaleLinear().domain([0, d3.max(data)]).range([0, height]);

    var color = _rtconfig.palatte[this.props.color] || { primary: 'black', secondary: 'black' };

    var colorScale = this.props.color ? d3.scaleLinear(d3.interpolateHcl).domain([0, data.length]).range([color.primary, color.secondary]) : d3.scaleSequential(d3.interpolateRainbow).domain([0, data.length]);

    var chart = d3.select(this.el).append('svg').attr('viewBox', '-3 -3 100 100').attr('preserveAspectRatio', 'xMidYMin meet').classed('w100', true);

    var bar = chart.selectAll('g').data(data).enter().append('g').attr('transform', function (d, i) {
        return 'translate(' + i * barWidth + ', 0)';
    });

    bar.append('rect').classed('rt-bar', true).attr('width', barWidth - 1).attr('rx', 1).attr('ry', 1).attr('height', 0).attr('opacity', function (d) {
        return +d ? 1 : 0.4;
    }).attr('y', height).attr('fill', function (d, i) {
        return colorScale(i);
    }).transition().delay(function () {
        return 400 - Math.random() * 100;
    }).duration(300).ease(d3.easeExpIn).attr('y', function (d) {
        return height - y(d);
    }).attr('height', function (d) {
        return y(d);
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtBar, 'RtBar', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtBar.jsx');

    __REACT_HOT_LOADER__.register(makeChart, 'makeChart', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtBar.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtBar.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtChart/rtBigBar.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d = __webpack_require__("./node_modules/d3/build/d3.js");

var d3 = _interopRequireWildcard(_d);

var _d3Tip = __webpack_require__("./node_modules/d3-tip/index.js");

var _d3Tip2 = _interopRequireDefault(_d3Tip);

var _rtconfig = __webpack_require__("./public/rtconfig.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

d3.tip = _d3Tip2.default;

var RtBigBar = function (_Component) {
    _inherits(RtBigBar, _Component);

    function RtBigBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RtBigBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RtBigBar.__proto__ || Object.getPrototypeOf(RtBigBar)).call.apply(_ref, [this].concat(args))), _this), _this.updateChart = function () {
            var _this2;

            return (_this2 = _this).__updateChart__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.makeChart = function () {
            var _this3;

            return (_this3 = _this).__makeChart__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RtBigBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.chart = d3.select(this.el);
            this.makeChart();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.type !== this.props.type) {
                this.chart.selectAll('*').remove();
                this.makeChart(nextProps.data);
            }
            if (nextProps.data) {
                this.updateChart(nextProps.data);
            }
            if (nextProps.color) {
                return;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('svg', {
                    viewBox: '-5 -5 500 300',
                    preserveAspectRatio: 'xMidYMin meet',
                    className: 'w100 chart',
                    ref: function ref(el) {
                        return _this4.el = el;
                    } })
            );
        }
    }, {
        key: '__updateChart__REACT_HOT_LOADER__',
        value: function __updateChart__REACT_HOT_LOADER__(data) {
            var _this5 = this;

            var svg = d3.select(this.el);

            // calculate new height
            this.y = d3.scaleLinear().domain([0, d3.max(data, function (d) {
                return d.count;
            })]).range([0, this.height]);

            // Make the changes
            svg.selectAll('.rt-bar').data(data).transition() // change the line
            .duration(750).attr('y', function (d) {
                return _this5.height - _this5.y(d.count);
            }).attr('height', function (d) {
                return _this5.y(d.count) + 6;
            });

            svg.selectAll('.rt-marker').data(data).text(function (d) {
                return d.grade;
            });
        }
    }, {
        key: '__makeChart__REACT_HOT_LOADER__',
        value: function __makeChart__REACT_HOT_LOADER__(data) {
            var _this6 = this;

            if (!this.props.data) return;
            data = data || this.props.data;

            this.width = 490;
            this.height = 285;

            var color = _rtconfig.palatte[this.props.color] || { primary: 'black', secondary: 'black' };

            var colorScale = this.props.color ? d3.scaleLinear(d3.interpolateHcl).domain([0, data.length]).range([color.primary, color.secondary]) : d3.scaleSequential(d3.interpolateRainbow).domain([0, data.length]);

            var barWidth = this.width / data.length;

            this.y = d3.scaleLinear().domain([0, d3.max(data, function (d) {
                return d.count;
            })]).range([0, this.height]);

            var fontScale = d3.scaleLinear().domain([320, 500]) // expected limits of SVG width
            .range([30, 15]).clamp(true);

            var bar = this.chart.selectAll('g').data(data).enter().append('g').attr('class', 'bar-group').attr('transform', function (d, i) {
                return 'translate(' + i * barWidth + ', 0)';
            });

            var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function (d) {
                return '<strong>' + d.grade + ':</strong> <span style=\'color:#ff0044\'>' + d.count + '</span>';
            });

            this.chart.call(tip);

            bar.append('rect').classed('rt-bar', true).attr('width', barWidth - 5).attr('rx', 3).attr('ry', 3).attr('height', 6).attr('opacity', function (d) {
                return +d.count ? 1 : 0.4;
            }).attr('y', this.height).attr('fill', function (d, i) {
                return colorScale(i);
            }).on('mouseover', tip.show).on('mouseout', tip.hide).transition().delay(function () {
                return 400 - Math.random() * 100;
            }).duration(300).ease(d3.easeExpIn).attr('y', function (d) {
                return _this6.height - _this6.y(d.count);
            }).attr('height', function (d) {
                return _this6.y(d.count) + 6;
            });

            bar.append('text').classed('rt-marker', true).attr('y', barWidth / 2 + 3).attr('x', -280).attr('text-anchor', 'start').text(function (d) {
                return d.grade;
            }).attr('font-size', '14px').attr('opacity', 0).transition().duration(500).attr('opacity', 1);

            var resized = function resized() {
                var scale = fontScale(_this6.chart.node().getBoundingClientRect().width);
                var text = d3.selectAll('text');
                text.attr('font-size', scale + 'px');
                if (scale > 18) {
                    text.attr('opacity', 0);
                } else {
                    text.attr('opacity', 1);
                }
            };

            resized();
            window.onresize = resized.bind(this);
        }
    }]);

    return RtBigBar;
}(_react.Component);

RtBigBar.propTypes = {
    data: _propTypes2.default.array,
    goal: _propTypes2.default.array,
    type: _propTypes2.default.string,
    color: _propTypes2.default.string
};
var _default = RtBigBar;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtBigBar, 'RtBigBar', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtBigBar.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtBigBar.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtChart/rtPie.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__("./node_modules/d3/build/d3.js");

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtPie = function (_Component) {
    _inherits(RtPie, _Component);

    function RtPie() {
        _classCallCheck(this, RtPie);

        return _possibleConstructorReturn(this, (RtPie.__proto__ || Object.getPrototypeOf(RtPie)).apply(this, arguments));
    }

    _createClass(RtPie, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            makeChart.apply(this);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', { style: { width: '100px', height: '100px' }, ref: function ref(el) {
                    return _this2.el = el;
                } });
        }
    }]);

    return RtPie;
}(_react.Component);

var _default = RtPie;
exports.default = _default;


function makeChart() {
    if (!this.props.data) return;
    var data = this.props.data;

    var width = 94;
    var height = 94;
    var barWidth = width / data.length;

    var chart = d3.select(this.el).append('svg').attr('viewBox', '-3 -3 100 100').attr('preserveAspectRatio', 'xMidYMin meet').classed('w100', true);

    var radius = Math.min(width, height) / 2,
        g = chart.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    var color = d3.scaleOrdinal(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

    var pie = d3.pie().sort(null).value(function (d) {
        return d;
    });
    var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, data.length]);

    var path = d3.arc().outerRadius(radius - 10).innerRadius(30);

    var hoverPath = d3.arc().outerRadius(radius - 8).innerRadius(30);

    var label = d3.arc().outerRadius(radius - 40).innerRadius(radius - 40);

    var arc = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

    arc.append('path').attr('d', path).attr('fill', function (d) {
        return rainbow(d.data);
    }).on('mouseover', function (d, i) {
        d3.select(this).attr('d', hoverPath);
    }).on('mouseout', function () {
        d3.select(this).attr('d', path);
    });

    arc.append('text').attr('transform', function (d) {
        return 'translate(' + label.centroid(d) + ')';
    }).attr('dy', '0.35em').text(function (d) {
        return d.data.age;
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtPie, 'RtPie', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtPie.jsx');

    __REACT_HOT_LOADER__.register(makeChart, 'makeChart', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtPie.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtPie.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/components/wzContainer.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

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

var _default = WzContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WzContainer, "WzContainer", "/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzContainer.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzContainer.jsx");
}();

;

/***/ }),

/***/ "./public/components/rtWizard/components/wzItem.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorService = __webpack_require__("./public/services/colorService.js");

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

var _default = WzItem;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(WzItem, 'WzItem', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzItem.jsx');

    __REACT_HOT_LOADER__.register(setClass, 'setClass', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzItem.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzItem.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/components/wzListItem.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

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

var _default = WzListItem;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(WzListItem, 'WzListItem', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzListItem.jsx');

    __REACT_HOT_LOADER__.register(setClass, 'setClass', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzListItem.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzListItem.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/components/wzPage.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

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
                { className: 'row p10b hidden-xs justify-content-between' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-2' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-link', onClick: this.prev },
                        'Previous'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-2' },
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

var _default = WzPage;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(WzPage, 'WzPage', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzPage.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzPage.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/components/wzPreview.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = __webpack_require__("./public/components/common/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _route = __webpack_require__("./public/data/actions/route.js");

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _rtutil = __webpack_require__("./public/rtutil.js");

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WzPreview.__proto__ || Object.getPrototypeOf(WzPreview)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.postRoute = function () {
            var _this2;

            return (_this2 = _this).__postRoute__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.edit = function () {
            var _this3;

            return (_this3 = _this).__edit__REACT_HOT_LOADER__.apply(_this3, arguments);
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
                        { className: 'wz-list p10' },
                        _react2.default.createElement(
                            'li',
                            { className: 'wz-list__item' },
                            'Type: ',
                            this.props.route.type
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz-list__item' },
                            'Color:',
                            _react2.default.createElement(_common.RtSwatch, { color: this.props.route.color || false })
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz-list__item' },
                            'Grade: ',
                            this.props.route.grade.value
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz-list__item' },
                            'Gym: ',
                            this.props.route.gym.name
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz-list__item' },
                            'Wall: ',
                            this.props.route.location
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'wz-list__item' },
                            'Tags: ',
                            this.props.route.tags.join(', ')
                        )
                    ) : null,
                    _react2.default.createElement(
                        _common.FlexRow,
                        null,
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-outline-secondary', onClick: this.edit },
                            'Edit'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-outline-primary' + (0, _rtutil.renderIf)(this.state.pending)(' btn-outline-pending'), onClick: this.postRoute },
                            'Add Route'
                        )
                    )
                );
            }
            return null;
        }
    }, {
        key: '__postRoute__REACT_HOT_LOADER__',
        value: function __postRoute__REACT_HOT_LOADER__() {
            var _this4 = this;

            this.setState({ pending: true });
            this.props.postRoute(this.transformedRoute).then((0, _rtutil.sleep)(1000)).then(function () {
                _this4.props.reset();
                _this4.setState({
                    added: true,
                    pending: false
                });
            });
        }
    }, {
        key: '__edit__REACT_HOT_LOADER__',
        value: function __edit__REACT_HOT_LOADER__() {
            this.props.move(-1);
        }
    }]);

    return WzPreview;
}(_react.Component);

WzPreview.propTypes = {
    route: _propTypes2.default.object,
    grades: _propTypes2.default.object,
    reset: _propTypes2.default.func,
    move: _propTypes2.default.func,
    postRoute: _propTypes2.default.func
};

function transformRoute(obj) {
    if (obj.gym && obj.grade && obj.color && obj.tags && obj.location) return {
        type: obj.type,
        color: obj.color.value,
        grade: obj.grade._id,
        gym: obj.gym._id,
        wall: obj.location,
        tags: obj.tags.join(', '),
        set_on: Date.now()
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

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(WzPreview);

exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(WzPreview, 'WzPreview', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzPreview.jsx');

    __REACT_HOT_LOADER__.register(transformRoute, 'transformRoute', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzPreview.jsx');

    __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzPreview.jsx');

    __REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzPreview.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzPreview.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/components/wzStep.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wzPage = __webpack_require__("./public/components/rtWizard/components/wzPage.jsx");

var _wzPage2 = _interopRequireDefault(_wzPage);

var _rtCard = __webpack_require__("./public/components/common/rtCard.jsx");

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

var _default = WzStep;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WzStep, 'WzStep', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzStep.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzStep.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _rtWizard = __webpack_require__("./public/components/rtWizard/rtWizard.jsx");

var _rtWizard2 = _interopRequireDefault(_rtWizard);

var _wizard = __webpack_require__("./public/data/actions/wizard.js");

var _team = __webpack_require__("./public/data/actions/team.js");

var _gym = __webpack_require__("./public/data/actions/gym.js");

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

var _default = RtWizardContainer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/peller/Desktop/reactracker/public/components/rtWizard/index.jsx');

    __REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', '/Users/peller/Desktop/reactracker/public/components/rtWizard/index.jsx');

    __REACT_HOT_LOADER__.register(RtWizardContainer, 'RtWizardContainer', '/Users/peller/Desktop/reactracker/public/components/rtWizard/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/rtWizard.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wzGrid = __webpack_require__("./public/components/rtWizard/wzGrid.jsx");

var _wzGrid2 = _interopRequireDefault(_wzGrid);

var _wzContainer = __webpack_require__("./public/components/rtWizard/components/wzContainer.jsx");

var _wzContainer2 = _interopRequireDefault(_wzContainer);

var _wzStep = __webpack_require__("./public/components/rtWizard/components/wzStep.jsx");

var _wzStep2 = _interopRequireDefault(_wzStep);

var _wzPreview = __webpack_require__("./public/components/rtWizard/components/wzPreview.jsx");

var _wzPreview2 = _interopRequireDefault(_wzPreview);

var _swipeContainer = __webpack_require__("./public/components/common/swipeContainer.jsx");

var _swipeContainer2 = _interopRequireDefault(_swipeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtWizard = function (_Component) {
    _inherits(RtWizard, _Component);

    function RtWizard() {
        _classCallCheck(this, RtWizard);

        var _this = _possibleConstructorReturn(this, (RtWizard.__proto__ || Object.getPrototypeOf(RtWizard)).call(this));

        _this.onSwipe = function () {
            return _this.__onSwipe__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.move = function () {
            return _this.__move__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.update = function () {
            return _this.__update__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.updateTags = function () {
            return _this.__updateTags__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.resetForm = function () {
            return _this.__resetForm__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.state = {
            step: 0,
            gymFilter: undefined
        };

        _this.clicks = 0;
        _this.clicked = 'gym';
        _this.steps = ['gym', 'color', 'grade', 'location', 'tags'];
        return _this;
    }

    _createClass(RtWizard, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _swipeContainer2.default,
                { onSwipe: this.onSwipe },
                _react2.default.createElement(
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
                )
            );
        }
    }, {
        key: '__onSwipe__REACT_HOT_LOADER__',
        value: function __onSwipe__REACT_HOT_LOADER__(dir) {
            if (
            // last step
            this.state.step !== 5 && dir < 0 || !(this.steps[this.state.step] in this.props.route)) return;

            var toStep = this.state.step + (dir > 0 ? -1 : 1);

            this.setState({ step: toStep });
        }
    }, {
        key: '__move__REACT_HOT_LOADER__',
        value: function __move__REACT_HOT_LOADER__(dir, field) {
            var current = this.state.step;
            // called by update
            if (field) return this.setState({ step: current + dir });
            // check if we've made it past this step already
            if (current + dir < 0 || !(this.steps[this.state.step] in this.props.route) && dir > 0) return;
            this.setState({ step: current + dir });
        }
    }, {
        key: '__update__REACT_HOT_LOADER__',
        value: function __update__REACT_HOT_LOADER__(field, value) {
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
        key: '__updateTags__REACT_HOT_LOADER__',
        value: function __updateTags__REACT_HOT_LOADER__(tags, tag) {
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
        key: '__resetForm__REACT_HOT_LOADER__',
        value: function __resetForm__REACT_HOT_LOADER__() {
            this.props.resetForm();
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
                content: _react2.default.createElement(_wzGrid2.default, { items: this.props.route.type ? this.props.team.grades[this.props.route.type] : this.props.team.grades.boulder, route: this.props.route, selector: 'grade', update: this.update })
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
                content: _react2.default.createElement(_wzPreview2.default, { route: this.props.route, move: this.move, reset: this.resetForm })
            }];
        }
    }]);

    return RtWizard;
}(_react.Component);

RtWizard.propTypes = {
    route: _propTypes2.default.object,
    gyms: _propTypes2.default.array,
    update: _propTypes2.default.func,
    team: _propTypes2.default.object,
    resetForm: _propTypes2.default.func
};

var _default = RtWizard;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtWizard, 'RtWizard', '/Users/peller/Desktop/reactracker/public/components/rtWizard/rtWizard.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/rtWizard.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/wzGrid.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wzListItem = __webpack_require__("./public/components/rtWizard/components/wzListItem.jsx");

var _wzListItem2 = _interopRequireDefault(_wzListItem);

var _wzItem = __webpack_require__("./public/components/rtWizard/components/wzItem.jsx");

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

var _default = WzGrid;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(WzGrid, 'WzGrid', '/Users/peller/Desktop/reactracker/public/components/rtWizard/wzGrid.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/wzGrid.jsx');
}();

;

/***/ }),

/***/ "./public/data/actions/gym.js":
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
        payload: gyms
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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(receiveGyms, 'receiveGyms', '/Users/peller/Desktop/reactracker/public/data/actions/gym.js');

    __REACT_HOT_LOADER__.register(getGyms, 'getGyms', '/Users/peller/Desktop/reactracker/public/data/actions/gym.js');
}();

;

/***/ }),

/***/ "./public/data/actions/route.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addRoute = addRoute;
exports.receiveRoutes = receiveRoutes;
exports.updateRoute = updateRoute;
exports.removeRoutes = removeRoutes;
exports.getRoutesByGym = getRoutesByGym;
exports.postRoute = postRoute;
exports.putRoute = putRoute;
function addRoute(route) {
    return {
        type: 'ADD_ROUTE',
        payload: route
    };
}

function receiveRoutes(routes) {
    return {
        type: 'RECEIVE_ROUTES',
        payload: routes
    };
}

function updateRoute(route) {
    return {
        type: 'UPDATE_ROUTE',
        payload: route
    };
}

function removeRoutes(arr) {
    return {
        type: 'REMOVE_ROUTES',
        payload: arr
    };
}

function getRoutesByGym(id) {
    return function (dispatch, getState, fetcher) {
        return fetcher.get('route/gym/' + id, {
            gym: id
        }).then(function (routes) {
            dispatch(receiveRoutes(routes));
            //return routes
        });
    };
}

function postRoute(route) {
    return function (dispatch, getState, fetcher) {
        return fetcher.create('route', route).then(function (res) {
            dispatch(addRoute(res));
            return res;
        });
    };
}

function putRoute(route) {
    return function (dispatch, getState, fetcher) {
        return fetcher.update('route/' + route._id, route).then(function (res) {
            dispatch(updateRoute(res));
            return res;
        });
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(addRoute, 'addRoute', '/Users/peller/Desktop/reactracker/public/data/actions/route.js');

    __REACT_HOT_LOADER__.register(receiveRoutes, 'receiveRoutes', '/Users/peller/Desktop/reactracker/public/data/actions/route.js');

    __REACT_HOT_LOADER__.register(updateRoute, 'updateRoute', '/Users/peller/Desktop/reactracker/public/data/actions/route.js');

    __REACT_HOT_LOADER__.register(removeRoutes, 'removeRoutes', '/Users/peller/Desktop/reactracker/public/data/actions/route.js');

    __REACT_HOT_LOADER__.register(getRoutesByGym, 'getRoutesByGym', '/Users/peller/Desktop/reactracker/public/data/actions/route.js');

    __REACT_HOT_LOADER__.register(postRoute, 'postRoute', '/Users/peller/Desktop/reactracker/public/data/actions/route.js');

    __REACT_HOT_LOADER__.register(putRoute, 'putRoute', '/Users/peller/Desktop/reactracker/public/data/actions/route.js');
}();

;

/***/ }),

/***/ "./public/data/actions/team.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.receiveTeam = receiveTeam;
exports.getTeam = getTeam;

var _gym = __webpack_require__("./public/data/actions/gym.js");

function receiveTeam(team) {
    return {
        type: 'RECEIVE_TEAM',
        payload: team
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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(receiveTeam, 'receiveTeam', '/Users/peller/Desktop/reactracker/public/data/actions/team.js');

    __REACT_HOT_LOADER__.register(getTeam, 'getTeam', '/Users/peller/Desktop/reactracker/public/data/actions/team.js');
}();

;

/***/ }),

/***/ "./public/data/actions/user.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.receiveUser = receiveUser;
exports.getUser = getUser;
function receiveUser(user) {
    return {
        type: 'RECEIVE_USER',
        payload: user
    };
}

function getUser() {
    return function (dispatch, getState, fetcher) {
        var state = getState();
        if (state.user._id) {
            return Promise.resolve(state.user);
        } else {
            return fetcher.get('users/current').then(function (user) {
                dispatch(receiveUser(user));
                return user;
            });
        }
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(receiveUser, 'receiveUser', '/Users/peller/Desktop/reactracker/public/data/actions/user.js');

    __REACT_HOT_LOADER__.register(getUser, 'getUser', '/Users/peller/Desktop/reactracker/public/data/actions/user.js');
}();

;

/***/ }),

/***/ "./public/data/actions/wizard.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateRoute = updateRoute;
exports.updateTags = updateTags;
exports.resetWizard = resetWizard;
function updateRoute(field, value) {
    return {
        type: 'UPDATE_NEW_ROUTE',
        payload: {
            field: field,
            value: value
        }
    };
}

function updateTags(value) {
    return {
        type: 'UPDATE_TAGS',
        payload: value
    };
}

function resetWizard() {
    return {
        type: 'RESET_WIZARD'
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(updateRoute, 'updateRoute', '/Users/peller/Desktop/reactracker/public/data/actions/wizard.js');

    __REACT_HOT_LOADER__.register(updateTags, 'updateTags', '/Users/peller/Desktop/reactracker/public/data/actions/wizard.js');

    __REACT_HOT_LOADER__.register(resetWizard, 'resetWizard', '/Users/peller/Desktop/reactracker/public/data/actions/wizard.js');
}();

;

/***/ }),

/***/ "./public/data/reducers/gym.js":
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
            return transformGyms(action.payload);
        case 'GET_GYMS':
            return state;
        default:
            return state;
    }
};

var _default = gym;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/peller/Desktop/reactracker/public/data/reducers/gym.js');

    __REACT_HOT_LOADER__.register(transformGyms, 'transformGyms', '/Users/peller/Desktop/reactracker/public/data/reducers/gym.js');

    __REACT_HOT_LOADER__.register(gym, 'gym', '/Users/peller/Desktop/reactracker/public/data/reducers/gym.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/data/reducers/gym.js');
}();

;

/***/ }),

/***/ "./public/data/reducers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _reactRouterRedux = __webpack_require__("./node_modules/react-router-redux/es/index.js");

var _wizard = __webpack_require__("./public/data/reducers/wizard.js");

var _wizard2 = _interopRequireDefault(_wizard);

var _user = __webpack_require__("./public/data/reducers/user.js");

var _user2 = _interopRequireDefault(_user);

var _route = __webpack_require__("./public/data/reducers/route.js");

var _route2 = _interopRequireDefault(_route);

var _team = __webpack_require__("./public/data/reducers/team.js");

var _team2 = _interopRequireDefault(_team);

var _gym = __webpack_require__("./public/data/reducers/gym.js");

var _gym2 = _interopRequireDefault(_gym);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainReducer = (0, _redux.combineReducers)({
    route: _wizard2.default,
    routes: _route2.default,
    team: _team2.default,
    gyms: _gym2.default,
    user: _user2.default,
    router: _reactRouterRedux.routerReducer
});

var _default = mainReducer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(mainReducer, 'mainReducer', '/Users/peller/Desktop/reactracker/public/data/reducers/index.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/data/reducers/index.js');
}();

;

/***/ }),

/***/ "./public/data/reducers/route.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = __webpack_require__("./node_modules/immutable/dist/immutable.js");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = new _immutable2.default.Map();

function route() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_ROUTE':
            return state.set(action.payload._id, action.payload);
        case 'REMOVE_ROUTES':
            {
                var routes = new _immutable2.default.Set(action.payload);
                return state.filterNot(function (v) {
                    return routes.has(v._id);
                });
            }
        case 'RECEIVE_ROUTES':
            return state.concat(action.payload.map(function (route) {
                return [route._id, route];
            }));
        case 'UPDATE_ROUTE':
            return state.set(action.payload._id, action.payload);
        default:
            return state;
    }
}

var _default = route;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/peller/Desktop/reactracker/public/data/reducers/route.js');

    __REACT_HOT_LOADER__.register(route, 'route', '/Users/peller/Desktop/reactracker/public/data/reducers/route.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/data/reducers/route.js');
}();

;

/***/ }),

/***/ "./public/data/reducers/team.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
    colors: [],
    tags: [],
    grades: {
        boulder: [],
        rope: []
    }
};

var transformTeam = function transformTeam(team) {
    return _extends({}, team, {
        grades: {
            boulder: team.grades.boulder.map(function (grade, index) {
                return { _id: index, value: grade };
            }),
            rope: team.grades.rope.map(function (grade, index) {
                return { _id: index, value: grade };
            })
        },
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
            return transformTeam(action.payload);
        case 'GET_TEAM':
            return state;
        default:
            return state;
    }
};

var _default = team;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/peller/Desktop/reactracker/public/data/reducers/team.js');

    __REACT_HOT_LOADER__.register(transformTeam, 'transformTeam', '/Users/peller/Desktop/reactracker/public/data/reducers/team.js');

    __REACT_HOT_LOADER__.register(team, 'team', '/Users/peller/Desktop/reactracker/public/data/reducers/team.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/data/reducers/team.js');
}();

;

/***/ }),

/***/ "./public/data/reducers/user.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var initialState = {};

var user = function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'RECEIVE_USER':
            return action.payload;
        case 'GET_USER':
            return state;
        default:
            return state;
    }
};

var _default = user;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/peller/Desktop/reactracker/public/data/reducers/user.js');

    __REACT_HOT_LOADER__.register(user, 'user', '/Users/peller/Desktop/reactracker/public/data/reducers/user.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/data/reducers/user.js');
}();

;

/***/ }),

/***/ "./public/data/reducers/wizard.js":
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
        case 'UPDATE_NEW_ROUTE':
            return Object.assign({}, state, _defineProperty({}, action.payload.field, action.payload.value));
        case 'UPDATE_TAGS':
            return Object.assign({}, state, { tags: toggleTag(state.tags, action.payload) });
        case 'RESET_WIZARD':
            return Object.assign({}, { gym: state.gym, tags: [] });
        default:
            return state;
    }
};

var _default = wizard;
exports.default = _default;

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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/peller/Desktop/reactracker/public/data/reducers/wizard.js');

    __REACT_HOT_LOADER__.register(wizard, 'wizard', '/Users/peller/Desktop/reactracker/public/data/reducers/wizard.js');

    __REACT_HOT_LOADER__.register(toggleTag, 'toggleTag', '/Users/peller/Desktop/reactracker/public/data/reducers/wizard.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/data/reducers/wizard.js');
}();

;

/***/ }),

/***/ "./public/data/util/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* @name stateToggle
* @function 
* @param {String} prop property of state to toggle
* @returns {Function}
*/

var stateToggle = exports.stateToggle = function stateToggle(prop) {
    return function (state) {
        return _defineProperty({}, prop, !state[prop]);
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(stateToggle, "stateToggle", "/Users/peller/Desktop/reactracker/public/data/util/index.js");
}();

;

/***/ }),

/***/ "./public/main.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./public/styles/main.scss");

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__("./public/app.jsx");

var _app2 = _interopRequireDefault(_app);

var _reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js");

var _svgInjector = __webpack_require__("./node_modules/svg-injector/svg-injector.js");

var _svgInjector2 = _interopRequireDefault(_svgInjector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(Component) {
    _reactDom2.default.render(_react2.default.createElement(
        _reactHotLoader.AppContainer,
        null,
        _react2.default.createElement(Component, null)
    ), document.getElementById('root'));
};

render(_app2.default);

document.addEventListener('DOMContentLoaded', function () {
    var icons = document.querySelectorAll('.iconic-sprite');
    (0, _svgInjector2.default)(icons);
});

if (true) {
    console.log('so so hot');
    module.hot.accept("./public/app.jsx", function () {
        var App = __webpack_require__("./public/app.jsx").default;
        render(App);
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(render, 'render', '/Users/peller/Desktop/reactracker/public/main.jsx');
}();

;

/***/ }),

/***/ "./public/rtconfig.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var colors = exports.colors = [{ '_id': 'red', 'value': 'red', 'color': '#fe2e2e' }, { '_id': 'orange', 'value': 'orange', 'color': '#f92' }, { '_id': 'yellow', 'value': 'yellow', 'color': '#fff04c' }, { '_id': 'green', 'value': 'green', 'color': '#0b0' }, { '_id': 'blue', 'value': 'blue', 'color': '#1e54f4' }, { '_id': 'purple', 'value': 'purple', 'color': '#808' }, { '_id': 'black', 'value': 'black', 'color': '#000' }, { '_id': 'white', 'value': 'white', 'color': '#fff' }, { '_id': 'pink', 'value': 'pink', 'color': '#e5d' }];

var palatte = exports.palatte = {
    teal: { primary: '#08e0c5', secondary: '#4bd0dd' },
    pink: { primary: '#fa4978', secondary: '#eb67a8' },
    orange: { primary: '#fb9500', secondary: '#fbc100' },
    green: { primary: '#83bf00', secondary: '#83bf00' },
    yellow: { primary: '#ffdc00', secondary: '#fff400' },
    blue: { primary: '#008FFF', secondary: '#2577E8' },
    red: { primary: '#EC3535', secondary: '#E31828' }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(colors, 'colors', '/Users/peller/Desktop/reactracker/public/rtconfig.js');

    __REACT_HOT_LOADER__.register(palatte, 'palatte', '/Users/peller/Desktop/reactracker/public/rtconfig.js');
}();

;

/***/ }),

/***/ "./public/rtutil.js":
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
            if (list instanceof Array) list = this._makeHash(list, 0);
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
    }, {
        key: 'expandSimpleObject',
        value: function expandSimpleObject(obj) {
            obj = JSON.parse(JSON.stringify(obj));

            for (var key in obj) {
                if (key.indexOf('.') !== -1) {
                    this._parseDotNotation(key, obj[key], obj);
                }
            }
            return obj;
        }

        // internal

    }, {
        key: '_makeHash',
        value: function _makeHash(arr, val) {
            var hash = {};
            for (var i = 0, l = arr.length; i < l; i++) {
                hash[arr[i]] = val;
            }
            return hash;
        }
    }, {
        key: '_parseDotNotation',
        value: function _parseDotNotation(str, val, obj) {
            var currentObj = obj,
                keys = str.split('.'),
                i,
                l = Math.max(1, keys.length - 1),
                key;

            for (i = 0; i < l; ++i) {
                key = keys[i];
                currentObj[key] = currentObj[key] || {};
                currentObj = currentObj[key];
            }

            currentObj[keys[i]] = val;
            delete obj[str];
        }
    }]);

    return π;
}();

var _default = new π();

exports.default = _default;
var renderIf = exports.renderIf = function renderIf(condition) {
    return function (element) {
        return condition && element || '';
    };
};

var dateMath = exports.dateMath = function () {

    var day = 8.64e7;
    var week = 6.048e+8;

    function weeksOld(day) {
        var ms = Date.now() - new Date(day).getTime();

        var weeks = ms / week;

        return Math.round(weeks);
    }

    return {
        day: day,
        week: week,
        weeksOld: weeksOld
    };
}();

var sleep = exports.sleep = function sleep(time) {
    return function () {
        return new Promise(function (resolve) {
            return setTimeout(resolve, time);
        });
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(π, '\u03C0', '/Users/peller/Desktop/reactracker/public/rtutil.js');

    __REACT_HOT_LOADER__.register(renderIf, 'renderIf', '/Users/peller/Desktop/reactracker/public/rtutil.js');

    __REACT_HOT_LOADER__.register(dateMath, 'dateMath', '/Users/peller/Desktop/reactracker/public/rtutil.js');

    __REACT_HOT_LOADER__.register(sleep, 'sleep', '/Users/peller/Desktop/reactracker/public/rtutil.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/rtutil.js');
}();

;

/***/ }),

/***/ "./public/services/colorService.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = function colorFactory() {
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

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/services/colorService.js');
}();

;

/***/ }),

/***/ "./public/services/fetcher.js":
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
    }, {
        key: 'update',
        value: function update(resource, data) {
            return fetch(this.prefix + resource, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: formatBody(data)
            }).then(function (res) {
                return res.json();
            });
        }
    }]);

    return fetcher;
}();

var _default = new fetcher();

exports.default = _default;


function paramToQuery(obj) {
    if (!obj) return '';

    return '?' + Object.keys(obj).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    }).join('&');
}

function formatBody(obj) {
    return JSON.stringify(obj);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(fetcher, 'fetcher', '/Users/peller/Desktop/reactracker/public/services/fetcher.js');

    __REACT_HOT_LOADER__.register(paramToQuery, 'paramToQuery', '/Users/peller/Desktop/reactracker/public/services/fetcher.js');

    __REACT_HOT_LOADER__.register(formatBody, 'formatBody', '/Users/peller/Desktop/reactracker/public/services/fetcher.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/services/fetcher.js');
}();

;

/***/ }),

/***/ "./public/styles/main.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/whatwg-fetch/fetch.js");
__webpack_require__("./node_modules/react-hot-loader/patch.js");
__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http:/localhost:8081");
module.exports = __webpack_require__("./public/main.jsx");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvYmFzaWNJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvdGVhbUluZm8uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9mbGV4Um93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vaWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbnB1dEJveC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2xvYWRCYXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9sb2FkQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRQYW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRTd2F0Y2guanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9zb3J0YWJsZUxpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9zd2lwZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3RhYlN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2d5bUl0ZW0vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlUm93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3N0YXRzQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vcnRDb250ZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL3J0SGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0QmlnQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0UGllLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6Q29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekxpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6UGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elByZXZpZXcuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pTdGVwLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvcnRXaXphcmQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3d6R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9neW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3RlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy91c2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvd2l6YXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2d5bS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy90ZWFtLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvd2l6YXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21haW4uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9ydGNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcnR1dGlsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zZXJ2aWNlcy9jb2xvclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NlcnZpY2VzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiaGlzdG9yeSIsInJvdXRlTWlkZGxld2FyZSIsInN0b3JlIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsIndpdGhFeHRyYUFyZ3VtZW50IiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwibmV4dFJvb3RSZWR1Y2VyIiwicmVxdWlyZSIsInJlcGxhY2VSZWR1Y2VyIiwiQXBwIiwiQmFzaWNJbmZvIiwic3RhdGUiLCJvblNhdmUiLCJmaWVsZHMiLCJ2YWxpZGF0ZUVtcHR5IiwidmFsaWRhdGVFbWFpbCIsInByb3BzIiwidXNlciIsInBlbmRpbmciLCJkYXRhIiwic2V0U3RhdGUiLCJ2YWx1ZXMiLCJleHBhbmRTaW1wbGVPYmplY3QiLCJ1cGRhdGUiLCJ0aGVuIiwibGFiZWwiLCJuYW1lIiwidHlwZSIsInZhbGlkYXRlIiwidmFsdWUiLCJsZW5ndGgiLCJ0ZXN0IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiTGlzdEl0ZW1Db2xvciIsImNvbG9yIiwiTGlzdEl0ZW0iLCJhdmFpbGFibGUiLCJtYXAiLCJUZWFtSW5mbyIsInRlYW0iLCJjb2xvcnMiLCJzbGljZSIsImEiLCJiIiwiX2lkIiwiZ3JhZGVzIiwiYm91bGRlciIsIm1hcFN0YXRlIiwidGFicyIsIkFjY291bnQiLCJsb2FkZWQiLCJhY3RpdmUiLCJ0b2dnbGUiLCJnZXRVc2VyIiwiaW5kIiwiZnVuYyIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJzdHlsZXMiLCJkaXNwbGF5IiwiaW5saW5lIiwianVzdGlmeUNvbnRlbnQiLCJhcm91bmQiLCJtYXJnaW4iLCJzdHlsZSIsImZsZXhSb3ciLCJjaGlsZHJlbiIsIm5vZGUiLCJJY29uIiwib25DbGljayIsImFsdENsYXNzIiwiaWNvbiIsIlJ0Q2FyZCIsIlJ0UGFuZSIsIlJ0Rm9ybSIsIlJ0TGlzdCIsIlNvcnRhYmxlTGlzdCIsIlRhYlN3aXRjaGVyIiwiRmxleFJvdyIsIkxvYWRDb250YWluZXIiLCJTd2lwZUNvbnRhaW5lciIsIklucHV0Qm94IiwiTG9hZEJhciIsIlJ0U3dhdGNoIiwidmFsaWQiLCJoYW5kbGVDaGFuZ2UiLCJvbkJsdXIiLCJlIiwiZmllbGQiLCJ0YXJnZXQiLCJ1cGRhdGVGb3JtIiwiZWRpdCIsIkNvbXBvbmVudCIsImJvb2wiLCJjb250ZW50IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwidGl0bGUiLCJzdHJpbmciLCJ0b2dnbGVFZGl0Iiwic2F2ZSIsIm1ha2VGb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJwb3NpdGlvbiIsImVkaXRhYmxlIiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJpIiwiQXJyYXkiLCJwYWRkaW5nIiwiZGVmYXVsdFByb3BzIiwiYXJyYXlPZiIsIm9uZU9mVHlwZSIsImFycmF5Iiwic2hhcGUiLCJpc1JlcXVpcmVkIiwibGlzdEl0ZW1zIiwiaXRlbSIsImluZGV4IiwiY2xhc3NOYW1lIiwiYyIsInQiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJpdGVtcyIsIm1ha2VPcHRpb25zIiwiY29tcG9uZW50IiwiY29tcGFyYXRvciIsImN1cnJlbnQiLCJsaXN0Iiwib3B0aW9ucyIsImRpZmZlcmVuY2VXaXRoIiwibmV4dFByb3BzIiwiZm9udFNpemUiLCJhcnIiLCJrZXkiLCJzb3VyY2UiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsImdldERhdGEiLCJkZXN0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJvbGRJbmQiLCJuZXdJbmQiLCJsaXN0cyIsIm5ld0VsIiwic3BsaWNlIiwidG91Y2hTdGFydCIsInRvdWNoRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJzdGFydFgiLCJjbGllbnRYIiwiZGlzdCIsIm9uTGVmdCIsIm9uU3dpcGUiLCJvblJpZ2h0IiwiaXNBY3RpdmUiLCJ0YWIiLCJTbGlkZXIiLCJ0YWJTd2l0Y2hlciIsIkd5bUl0ZW0iLCJ1bmRlZmluZWQiLCJnZXRSb3V0ZXMiLCJneW0iLCJ1cmwiLCJvd25Qcm9wcyIsImd5bVJvdXRlcyIsInJvdXRlcyIsInJvdXRlIiwidHJhbnNmb3JtUm91dGVzIiwiaWQiLCJzb3J0ZWQiLCJidWNrZXRzIiwiZ3JhZGUiLCJyYW5nZSIsImtleXMiLCJHeW1MaXN0IiwiZ3ltcyIsIm1hcFByb3BzIiwiZmV0Y2hpbmciLCJhcnJvd3MiLCJSb3V0ZUhlYWRlciIsImFycm93IiwicGFyYW0iLCJzb3J0IiwiZGlyIiwiaGFuZGxlU29ydCIsInNlbGVjdGVkIiwiZGVsZXRlSGFuZGxlciIsIlJvdXRlTGlzdCIsInNlbGVjdEhhbmRsZXIiLCJtb3VzZURvd24iLCJtb2RpZmllciIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnQiLCJzaGlmdEtleSIsIk51bWJlciIsImxhc3RTZWxlY3RlZCIsImwiLCJNYXRoIiwibWluIiwiaCIsIm1heCIsImNvbmNhdCIsImluY2x1ZGVzIiwidXBkYXRlUm91dGUiLCJzb3J0T24iLCJuZXh0IiwicmV2ZXJzZSIsInVwZGF0ZWRfYXQiLCJ3YWxscyIsImV2ZW50IiwiaW5kcyIsIlNldCIsImlkcyIsInJlbW92ZVJvdXRlcyIsIm5ld1JvdXRlcyIsIm5ld1JvdXRlIiwicHJvcCIsIkRhdGUiLCJwYXJzZSIsInNldF9vbiIsIlJvdXRlUm93IiwiY2FuY2VsRWRpdCIsImRlbGV0ZVJvdXRlIiwidXBkYXRlRmllbGQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3YWxsIiwic2V0dGVyIiwibWVtYmVycyIsIm5pY2tuYW1lIiwid2lkdGgiLCJ3ZWVrc09sZCIsIm51bWJlciIsIlN0YXRzQ2FyZCIsIm1ha2VPdmVydmlldyIsImNvdW50Iiwib2xkZXN0IiwiSW5maW5pdHkiLCJmb3JFYWNoIiwiR3ltT3ZlcnZpZXciLCJ0eXBlcyIsInVwZGF0ZVJvdXRlcyIsImdldERhdGFGb3JHeW0iLCJtYXRjaCIsInBhcmFtcyIsInNldFRpbWVvdXQiLCJlcnJvciIsIm1pbkhlaWdodCIsImdldFRlYW0iLCJjdXJyZW50R3ltIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiTWFpbiIsImxvY2F0aW9uIiwiZ2V0R3ltcyIsInJvdXRlciIsIm1haW5Db250YWluZXIiLCJSdENvbnRlbnQiLCJSdEhlYWRlciIsImlzT3BlbiIsImRyb3Bkb3duSXNPcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJkMyIsIlJ0QmFyIiwibWFrZUNoYXJ0IiwiYXBwbHkiLCJlbCIsImJhcldpZHRoIiwieSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yU2NhbGUiLCJpbnRlcnBvbGF0ZUhjbCIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRlUmFpbmJvdyIsImNoYXJ0Iiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImNsYXNzZWQiLCJiYXIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImQiLCJkZWxheSIsInJhbmRvbSIsImR1cmF0aW9uIiwiZWFzZSIsImVhc2VFeHBJbiIsInRpcCIsIlJ0QmlnQmFyIiwidXBkYXRlQ2hhcnQiLCJyZW1vdmUiLCJzdmciLCJ0ZXh0IiwiZm9udFNjYWxlIiwiY2xhbXAiLCJvZmZzZXQiLCJodG1sIiwiY2FsbCIsIm9uIiwic2hvdyIsImhpZGUiLCJyZXNpemVkIiwic2NhbGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvbnJlc2l6ZSIsImJpbmQiLCJnb2FsIiwiUnRQaWUiLCJyYWRpdXMiLCJnIiwic2NhbGVPcmRpbmFsIiwicGllIiwicmFpbmJvdyIsInBhdGgiLCJhcmMiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiaG92ZXJQYXRoIiwiY2VudHJvaWQiLCJhZ2UiLCJXekNvbnRhaW5lciIsInRyYW5zZm9ybSIsInN0ZXAiLCJXekl0ZW0iLCJfY2xpY2siLCJzZXRDbGFzcyIsIld6TGlzdEl0ZW0iLCJXelBhZ2UiLCJwcmV2IiwiV3pQcmV2aWV3IiwicG9zdFJvdXRlIiwidHJhbnNmb3JtZWRSb3V0ZSIsInRyYW5zZm9ybVJvdXRlIiwidGFncyIsImpvaW4iLCJyZXNldCIsImFkZGVkIiwibW92ZSIsIm9iaiIsIm5vdyIsIld6U3RlcCIsInJldmlldyIsIm1hcFN0YXRlVG9Qcm9wcyIsInVwZGF0ZVRhZ3MiLCJyZXNldEZvcm0iLCJSdFdpemFyZENvbnRhaW5lciIsIlJ0V2l6YXJkIiwiZ3ltRmlsdGVyIiwiY2xpY2tzIiwiY2xpY2tlZCIsInN0ZXBzIiwic3RlcENvbnRlbnQiLCJlbmQiLCJ0b1N0ZXAiLCJ0YWciLCJpbmRleE9mIiwic2V0RmlsdGVyIiwiZmlsdGVyR3ltcyIsIld6R3JpZCIsIkVsIiwiaXNTZWxlY3RlZCIsInNlbGVjdG9yIiwib25lT2YiLCJyZWNlaXZlR3ltcyIsInBheWxvYWQiLCJnZXRTdGF0ZSIsImZldGNoZXIiLCJnZXQiLCJhZGRSb3V0ZSIsInJlY2VpdmVSb3V0ZXMiLCJnZXRSb3V0ZXNCeUd5bSIsInB1dFJvdXRlIiwiY3JlYXRlIiwicmVzIiwicmVjZWl2ZVRlYW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY2VpdmVVc2VyIiwicmVzZXRXaXphcmQiLCJpbml0aWFsU3RhdGUiLCJ0cmFuc2Zvcm1HeW1zIiwiYWN0aW9uIiwibWFpblJlZHVjZXIiLCJNYXAiLCJzZXQiLCJmaWx0ZXJOb3QiLCJ2IiwiaGFzIiwicm9wZSIsInRyYW5zZm9ybVRlYW0iLCJ3aXphcmQiLCJ0b2dnbGVUYWciLCJzdGF0ZVRvZ2dsZSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaWNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGVmYXVsdCIsInBhbGF0dGUiLCJ0ZWFsIiwicGluayIsIm9yYW5nZSIsImdyZWVuIiwieWVsbG93IiwiYmx1ZSIsInJlZCIsIs+AIiwiY29tcCIsImdyb3VwZWQiLCJzcGxpdCIsIl9tYWtlSGFzaCIsInN0YXJ0IiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfcGFyc2VEb3ROb3RhdGlvbiIsInZhbCIsImhhc2giLCJzdHIiLCJjdXJyZW50T2JqIiwicmVuZGVySWYiLCJjb25kaXRpb24iLCJlbGVtZW50IiwiZGF0ZU1hdGgiLCJkYXkiLCJ3ZWVrIiwibXMiLCJnZXRUaW1lIiwid2Vla3MiLCJyb3VuZCIsInNsZWVwIiwidGltZSIsImNvbG9yRmFjdG9yeSIsInNwbGl0dGVyIiwibWlkZGxlIiwicmVwbGFjZSIsInJlZHVjZSIsInBhcnNlSW50IiwicHJlZml4IiwicmVzb3VyY2UiLCJmZXRjaCIsInBhcmFtVG9RdWVyeSIsImpzb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImZvcm1hdEJvZHkiLCJjcmVkZW50aWFscyIsImVuY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7K2VBZEE7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsVUFBVSxxQ0FBaEI7QUFDQSxJQUFNQyxrQkFBa0Isd0NBQWlCRCxPQUFqQixDQUF4Qjs7QUFFQSxJQUFNRSxRQUFRLDRDQUVWQyxPQUFPQyw0QkFBUCxJQUF1Q0QsT0FBT0MsNEJBQVAsRUFGN0IsRUFHViw0QkFBZ0JILGVBQWhCLEVBQWlDLHFCQUFNSSxpQkFBTixtQkFBakMsQ0FIVSxDQUFkOztBQU1BLElBQUksSUFBSixFQUFnQjtBQUNaQyxXQUFPQyxHQUFQLENBQVdDLE1BQVgsQ0FBa0IsaUNBQWxCLEVBQXFDLFlBQU07QUFDdkMsWUFBTUMsa0JBQWtCLG1CQUFBQyxDQUFRLGlDQUFSLENBQXhCO0FBQ0FSLGNBQU1TLGNBQU4sQ0FBcUJGLGVBQXJCO0FBQ0gsS0FIRDtBQUlIOztJQUlLRyxHOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBVSxPQUFPVixLQUFqQjtBQUNJO0FBQUE7QUFBQSxzQkFBaUIsU0FBU0YsT0FBMUI7QUFDSTtBQURKO0FBREosYUFESjtBQU9IOzs7Ozs7ZUFHVVksRzs7Ozs7Ozs7O2tDQTlCVFosTzs7a0NBQ0FDLGU7O2tDQUVBQyxLOztrQ0FlQVUsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNOOzs7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUMsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ0ZDLEssR0FBUSxFLFFBaUJSQyxNOzs7O2lCQW1CQUMsTTs7OztpQkF5QkFDLGE7Ozs7aUJBRUFDLGE7Ozs7Ozs7OztpQ0F6RFM7QUFDTCxtQkFDSTtBQUNRLHdCQUFTLEtBQUtGLE1BQUwsRUFEakI7QUFFUSx3QkFBUyxLQUFLRyxLQUFMLENBQVdDLElBRjVCO0FBR1EsMEJBQVcsSUFIbkI7QUFJUSx3QkFBUyxLQUFLTCxNQUp0QjtBQUtRLHlCQUFVLEtBQUtELEtBQUwsQ0FBV08sT0FMN0IsR0FESjtBQVFIOzs7cURBRVNDLEksRUFBUztBQUFBOztBQUNmLGlCQUFLQyxRQUFMLENBQWM7QUFDVkYseUJBQVM7QUFEQyxhQUFkOztBQUlBLGlCQUFLRyxNQUFMLEdBQWMsaUJBQUdDLGtCQUFILENBQXNCSCxJQUF0QixDQUFkOztBQUVBLG1CQUFPLGtCQUFRSSxNQUFSLENBQWUsZUFBZixFQUFnQ0osSUFBaEMsRUFDRkssSUFERSxDQUNHLG1CQUFNLElBQU4sQ0FESCxFQUVGQSxJQUZFLENBRUcsWUFBTTtBQUNSLHVCQUFLSixRQUFMLENBQWM7QUFDVkYsNkJBQVM7QUFEQyxpQkFBZDtBQUdBLHVCQUFPQyxJQUFQO0FBQ0gsYUFQRSxDQUFQO0FBVUg7Ozs7bUJBRWMsQ0FDWCxDQUNJLFNBREosRUFFSTtBQUNJTSx1QkFBTyxVQURYO0FBRUlDLHNCQUFNLFVBRlY7QUFHSUMsc0JBQU0sTUFIVjtBQUlJQywwQkFBVSxLQUFLZDtBQUpuQixhQUZKLEVBUUk7QUFDSVcsdUJBQU8sUUFEWDtBQUVJQyxzQkFBTSxPQUZWO0FBR0lDLHNCQUFNLE9BSFY7QUFJSUMsMEJBQVUsS0FBS2I7QUFKbkIsYUFSSixDQURXLEVBZVgsQ0FDSSxTQURKLEVBRUk7QUFDSVUsdUJBQU8sVUFEWDtBQUVJQyxzQkFBTSxVQUZWO0FBR0lDLHNCQUFNLE1BSFY7QUFJSUMsMEJBQVUsS0FBS2Q7QUFKbkIsYUFGSixDQWZXLEM7Ozs7NERBeUJFZSxLO21CQUFVQSxNQUFNQyxNQUFOLEdBQWUsQzs7Ozs0REFFekJELEs7bUJBQVUsMEpBQXlKRSxJQUF6SixDQUE4SkYsS0FBOUo7Ozs7Ozs7O0FBaEV6Qm5CLFMsQ0FHS3NCLFMsR0FBWTtBQUNmZixVQUFNLG9CQUFVZ0I7QUFERCxDO2VBaUVSdkIsUzs7Ozs7Ozs7O2tDQXBFVEEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk47Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7QUFHQSxJQUFNd0IsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDbEIsS0FBRDtBQUFBLFdBQVk7QUFBQTtBQUFRQSxhQUFSO0FBQ0gsMERBQVUsT0FBUUEsTUFBTW1CLEtBQXhCO0FBREcsS0FBWjtBQUFBLENBQXRCOztBQUlBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDcEIsS0FBRDtBQUFBLFdBQVk7QUFBQTtBQUFRQSxhQUFSO0FBQWdCQSxjQUFNYTtBQUF0QixLQUFaO0FBQUEsQ0FBakI7O0FBRUEsSUFBTVEsWUFBWSxpQkFBT0MsR0FBUCxDQUFXLGlCQUFTO0FBQ2xDLFdBQU87QUFDSEg7QUFERyxLQUFQO0FBR0gsQ0FKaUIsQ0FBbEI7O0lBT01JLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNGNUIsSyxHQUFRLEU7Ozs7O2lDQUtDO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFFBQWY7QUFDRTtBQUNjLG1DQUFVLGVBRHhCO0FBRWMsOEJBQU8sS0FBS0ssS0FBTCxDQUFXd0IsSUFBWCxDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DSixHQUFuQyxDQUF1QyxpQkFBUztBQUFFLG1DQUFPLEVBQUVILFlBQUYsRUFBUDtBQUFpQix5QkFBbkUsQ0FGckI7QUFHYyxpQ0FBVUUsU0FIeEI7QUFJYyxtQ0FBWUgsYUFKMUI7QUFLYyxvQ0FBWSxvQkFBQ1MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUNBQVdELEVBQUVSLEtBQUYsQ0FBUVUsR0FBUixLQUFnQkQsRUFBRVQsS0FBRixDQUFRVSxHQUFuQztBQUFBLHlCQUwxQjtBQURGLGlCQURGO0FBU0U7QUFBQTtBQUFBLHNCQUFLLFdBQVUsUUFBZjtBQUNFO0FBQ0csbUNBQVUsZUFEYjtBQUVHLDhCQUFNLEtBQUs3QixLQUFMLENBQVd3QixJQUFYLENBQWdCTSxNQUFoQixDQUF1QkMsT0FBdkIsQ0FBK0JMLEtBQS9CLENBQXFDLENBQXJDLEVBQXdDLENBQXhDLENBRlQ7QUFHRyxpQ0FBUyxLQUFLMUIsS0FBTCxDQUFXd0IsSUFBWCxDQUFnQk0sTUFBaEIsQ0FBdUJDLE9BSG5DO0FBSUcsbUNBQVdYLFFBSmQ7QUFLRyxvQ0FBWSxvQkFBQ08sQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUNBQVVELEVBQUVkLEtBQUYsS0FBWWUsRUFBRWYsS0FBeEI7QUFBQTtBQUxmO0FBREYsaUJBVEY7QUFrQkUsdURBQUssV0FBVSxRQUFmLEdBbEJGO0FBbUJFLGlFQUFPLE1BQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixFQUE1QixDQUFiO0FBbkJGLGFBREo7QUF3Qkg7Ozs7OztBQS9CQ1UsUSxDQUdLUCxTLEdBQVk7QUFDZlEsVUFBTSxvQkFBVVA7QUFERCxDOzs7QUErQnZCLFNBQVNlLFFBQVQsQ0FBa0JyQyxLQUFsQixFQUF5QjtBQUNyQixXQUFPO0FBQ0g2QixjQUFNN0IsTUFBTTZCO0FBRFQsS0FBUDtBQUdIOztlQUVjLHlCQUFRUSxRQUFSLEVBQWtCVCxRQUFsQixDOzs7Ozs7Ozs7O2tDQXJEVEwsYTs7a0NBSUFFLFE7O2tDQUVBQyxTOztrQ0FPQUUsUTs7a0NBa0NHUyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRFQ7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQU1DLE9BQU8sQ0FBQyxZQUFELEVBQWUsV0FBZixDQUFiOztJQUVNQyxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDRnZDLEssR0FBUTtBQUNKd0Msb0JBQVEsS0FESjtBQUVKakMscUJBQVMsS0FGTDtBQUdKa0Msb0JBQVE7QUFISixTLFFBMENSQyxNOzs7Ozs7Ozs7NENBL0JvQjtBQUFBOztBQUNoQixpQkFBS3JDLEtBQUwsQ0FBV3NDLE9BQVgsR0FDSzlCLElBREwsQ0FDVSxZQUFNO0FBQ1IsdUJBQUtKLFFBQUwsQ0FBYztBQUNWK0IsNEJBQVE7QUFERSxpQkFBZDtBQUdILGFBTEw7QUFPSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFlLFFBQVEsS0FBS3hDLEtBQUwsQ0FBV3dDLE1BQWxDO0FBQ0Usb0VBREY7QUFFRTtBQUFBO0FBQUEsc0JBQVEsT0FBTSxZQUFkO0FBQ0UseUVBQWEsTUFBTUYsSUFBbkIsRUFBeUIsUUFBUSxLQUFLSSxNQUF0QyxHQURGO0FBRUcsMENBQVMsS0FBSzFDLEtBQUwsQ0FBV3lDLE1BQVgsSUFBcUIsWUFBOUIsRUFDSTtBQUFBO0FBQUEsMEJBQUssT0FBTSxZQUFYLEVBQXdCLFVBQVUsQ0FBbEMsRUFBcUMsY0FBYSxVQUFsRDtBQUNFLDZFQUFXLE1BQU0sS0FBS3BDLEtBQUwsQ0FBV0MsSUFBNUI7QUFERixxQkFESixDQUZIO0FBT0csMENBQVMsS0FBS04sS0FBTCxDQUFXeUMsTUFBWCxLQUFzQixXQUEvQixFQUNJO0FBQUE7QUFBQSwwQkFBSyxPQUFNLFdBQVgsRUFBdUIsVUFBVSxDQUFqQyxFQUFvQyxjQUFhLFVBQWpEO0FBQ0U7QUFERixxQkFESjtBQVBIO0FBRkYsYUFESjtBQWtCSDs7O3FEQUVTRyxHLEVBQVE7QUFDZCxpQkFBS25DLFFBQUwsQ0FBYztBQUNWZ0Msd0JBQVFHO0FBREUsYUFBZDtBQUdIOzs7Ozs7QUEvQ0NMLE8sQ0FPS2xCLFMsR0FBWTtBQUNmc0IsYUFBUyxvQkFBR0UsSUFERztBQUVmdkMsVUFBTSxvQkFBR2dCO0FBRk0sQzs7O0FBNEN2QixTQUFTZSxRQUFULENBQWtCckMsS0FBbEIsRUFBeUI7QUFDckIsV0FBTztBQUNITSxjQUFNTixNQUFNTTtBQURULEtBQVA7QUFHSDs7QUFFRCxTQUFTd0MsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDM0IsV0FBTztBQUNISixpQkFBUztBQUFBLG1CQUFNSSxTQUFTLG9CQUFULENBQU47QUFBQTtBQUROLEtBQVA7QUFHSDs7ZUFFYyx5QkFBUVYsUUFBUixFQUFrQlMsV0FBbEIsRUFBK0JQLE9BQS9CLEM7Ozs7Ozs7Ozs7a0NBakVURCxJOztrQ0FFQUMsTzs7a0NBbURHRixROztrQ0FNQVMsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVUOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1FLFNBQVMsU0FBVEEsTUFBUyxDQUFDM0MsS0FBRCxFQUFXO0FBQ3RCO0FBQ0k0QyxpQkFBUzVDLE1BQU02QyxNQUFOLEdBQWMsYUFBZCxHQUE4QixNQUQzQztBQUVJQyx3QkFBZ0I5QyxNQUFNK0MsTUFBTixHQUFjLGNBQWQsR0FBK0IsZUFGbkQ7QUFHSUMsZ0JBQVE7QUFIWixPQUlPaEQsTUFBTWlELEtBSmI7QUFNSCxDQVBEOztBQVNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDbEQsS0FBRDtBQUFBLFdBQ1o7QUFBQTtBQUFBLFVBQUssT0FBUTJDLE9BQU8zQyxLQUFQLENBQWIsRUFBNkIsV0FBVSxVQUF2QztBQUNJQSxjQUFNbUQ7QUFEVixLQURZO0FBQUEsQ0FBaEI7O0FBTUFELFFBQVFsQyxTQUFSLEdBQW9CO0FBQ2hCbUMsY0FBVSxvQkFBVUM7QUFESixDQUFwQjs7ZUFJZUYsTzs7Ozs7Ozs7O2tDQW5CVFAsTTs7a0NBU0FPLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTjs7Ozs7O0FBR0EsSUFBTUcsT0FBTyxTQUFQQSxJQUFPLENBQUNyRCxLQUFEO0FBQUEsU0FDVDtBQUFBO0FBQUEsTUFBSyxTQUFRLFNBQWIsRUFBdUIsU0FBU0EsTUFBTXNELE9BQXRDLEVBQStDLFdBQVd0RCxNQUFNdUQsUUFBTixJQUFrQixNQUE1RTtBQUNFLDJDQUFLLFdBQVcsTUFBTXZELE1BQU13RCxJQUE1QixFQUFrQyxXQUFXeEQsTUFBTW1CLEtBQU4sSUFBZSxZQUE1RDtBQURGLEdBRFM7QUFBQSxDQUFiOztlQU1la0MsSTs7Ozs7Ozs7O2dDQU5UQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hOOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFJSUksTTtRQUNBQyxNO1FBQ0FDLE07UUFDQUMsTTtRQUNBUCxJO1FBQ0FRLFk7UUFDQUMsVztRQUdBQyxPO1FBQ0FDLGE7UUFDQUMsYztRQUdBQyxRO1FBQ0FDLE87UUFDQUMsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSjs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHTUYsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ0Z2RSxLLEdBQVE7QUFDSjBFLG1CQUFPO0FBREgsUyxRQVFSQyxZOzs7O2lCQVNBQyxNOzs7Ozs7Ozs7MkRBVGdCQyxDLEVBQU07QUFDbEIsZ0JBQUksS0FBS3hFLEtBQUwsQ0FBV3lFLEtBQVgsQ0FBaUI3RCxRQUFyQixFQUErQjtBQUMzQixvQkFBSXlELFFBQVEsS0FBS3JFLEtBQUwsQ0FBV3lFLEtBQVgsQ0FBaUI3RCxRQUFqQixDQUEwQjRELEVBQUVFLE1BQUYsQ0FBUzdELEtBQW5DLENBQVo7QUFDQSxxQkFBS1QsUUFBTCxDQUFjO0FBQ1ZpRTtBQURVLGlCQUFkO0FBR0g7QUFDSjs7O3FEQUVTRyxDLEVBQU07QUFDWixnQkFBTXJFLE9BQU87QUFDVFUsdUJBQU8yRCxFQUFFRSxNQUFGLENBQVM3RCxLQURQO0FBRVQ0RCx1QkFBTyxLQUFLekUsS0FBTCxDQUFXeUU7QUFGVCxhQUFiO0FBSUEsaUJBQUt6RSxLQUFMLENBQVcyRSxVQUFYLENBQXNCeEUsSUFBdEI7QUFDSDs7O2lDQUVRO0FBQUEseUJBQ2lCLEtBQUtILEtBRHRCO0FBQUEsZ0JBQ0F5RSxLQURBLFVBQ0FBLEtBREE7QUFBQSxnQkFDT3BFLE1BRFAsVUFDT0EsTUFEUDs7O0FBR0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVksS0FBS1YsS0FBTCxDQUFXMEUsS0FBWCxHQUFtQixnQkFBbkIsR0FBc0MsNEJBQXZELEVBQXNGLEtBQU1JLE1BQU1oRSxLQUFsRztBQUNFO0FBQUE7QUFBQSxzQkFBTyxXQUFVLDRDQUFqQjtBQUNJZ0UsMEJBQU1oRTtBQURWLGlCQURGO0FBSUU7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJLHlCQUFLVCxLQUFMLENBQVc0RSxJQUFYLEdBQ0E7QUFDTyw4QkFBT0gsTUFBTTlELElBRHBCO0FBRU8sOEJBQU84RCxNQUFNL0QsSUFGcEI7QUFHTyxnQ0FBUyxLQUFLNkQsTUFIckI7QUFJTyxrQ0FBVyxLQUFLRCxZQUp2QjtBQUtPLG1DQUFVLGNBTGpCO0FBTU8sc0NBQWVqRSxPQUFPb0UsTUFBTS9ELElBQWIsS0FBc0IrRCxNQUFNaEUsS0FObEQsR0FEQSxHQVNBO0FBQUE7QUFBQSwwQkFBRyxXQUFVLCtCQUFiO0FBQ0lKLCtCQUFPb0UsTUFBTS9ELElBQWIsS0FBc0IrRCxNQUFNaEU7QUFEaEM7QUFWSjtBQUpGLGFBREo7QUFxQkg7Ozs7RUFsRGtCLGdCQUFNb0UsUzs7QUFBdkJYLFEsQ0FLS2xELFMsR0FBWTtBQUNmMkQsZ0JBQVksb0JBQVVuQztBQURQLEM7OztBQWdEdkIwQixTQUFTbEQsU0FBVCxHQUFxQjtBQUNqQnlELFdBQU8sb0JBQVV4RCxNQURBO0FBRWpCWixZQUFRLG9CQUFVWSxNQUZEO0FBR2pCMkQsVUFBTSxvQkFBVUU7QUFIQyxDQUFyQjs7ZUFTZVosUTs7Ozs7Ozs7O2tDQTlEVEEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pOOzs7Ozs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ25FLEtBQUQsRUFBVztBQUN2QixXQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVdBLE1BQU02QyxNQUFOLEdBQWMsMEJBQWQsR0FBMkMsVUFBM0Q7QUFDSSwrQ0FBSyxXQUFVLGVBQWYsR0FESjtBQUVJLCtDQUFLLFdBQVUsZUFBZixHQUZKO0FBR0ksK0NBQUssV0FBVSxlQUFmO0FBSEosS0FEQTtBQU9ILENBUkQ7O2VBVWVzQixPOzs7Ozs7Ozs7a0NBVlRBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZOOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNSCxhOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLGdCQUFNZSxVQUFVLGdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUIsS0FBS2pGLEtBQUwsQ0FBV21ELFFBQWxDLENBQWhCOztBQUVBLG1CQUNJO0FBQUE7QUFBQSxrQkFBMkIsZ0JBQWUsZ0JBQTFDLEVBQTJELHdCQUF3QixHQUFuRixFQUF3Rix3QkFBd0IsR0FBaEg7QUFDSSxxQkFBS25ELEtBQUwsQ0FBV21DLE1BQVgsR0FBb0I0QyxRQUFRLENBQVIsQ0FBcEIsR0FBaUNBLFFBQVEsQ0FBUjtBQURyQyxhQURKO0FBS0g7Ozs7RUFUdUIsZ0JBQU1GLFM7O2VBWW5CYixhOzs7Ozs7Ozs7a0NBWlRBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFHQSxJQUFNUCxTQUFTLFNBQVRBLE1BQVMsQ0FBQ3pELEtBQUQ7QUFBQSxTQUNiO0FBQUE7QUFBQSxNQUFLLFdBQVUsa0JBQWYsRUFBa0MsT0FBT0EsTUFBTWlELEtBQS9DO0FBQ0csMEJBQVNqRCxNQUFNa0YsS0FBZixFQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsaUNBQWY7QUFDR2xGLFlBQU1rRjtBQURULEtBREYsQ0FESDtBQUtHbEYsVUFBTW1EO0FBTFQsR0FEYTtBQUFBLENBQWY7O2VBV2VNLE07Ozs7QUFFZkEsT0FBT3pDLFNBQVAsR0FBbUI7QUFDZmtFLFNBQU8sb0JBQVVDLE1BREY7QUFFZmhDLFlBQVUsb0JBQVVDO0FBRkwsQ0FBbkI7Ozs7Ozs7O2dDQWJNSyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTjs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNRSxNOzs7Ozs7Ozs7Ozs7OzswTEFDRmhFLEssR0FBUSxFLFFBOERSeUYsVTs7OztpQkFTQUMsSTs7OztpQkFrQkFDLFE7Ozs7aUJBdUJBWCxVOzs7Ozs7Ozs7NkNBckZxQjtBQUNqQixnQkFBSSxDQUFDLEtBQUtoRixLQUFMLENBQVdRLElBQWhCLEVBQXNCO0FBQ2xCLHFCQUFLQyxRQUFMLENBQWM7QUFDVkQsMEJBQU1vRixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLeEYsS0FBTCxDQUFXSyxNQUE3QjtBQURJLGlCQUFkO0FBR0g7QUFDSjs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFNLFdBQVUsaUJBQWhCLEVBQWtDLE9BQVEsRUFBRW9GLFNBQVMsS0FBS3pGLEtBQUwsQ0FBV0UsT0FBWCxHQUFxQixHQUFyQixHQUEyQixDQUF0QyxFQUF5Q3dGLFlBQVkscUJBQXJELEVBQTRFQyxVQUFVLFVBQXRGLEVBQTFDO0FBQ0U7QUFBQTtBQUFBLHNCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSwwQkFBUyxZQUFUO0FBQ0ksOENBQVMsS0FBSzNGLEtBQUwsQ0FBVzRGLFFBQVgsSUFBdUIsQ0FBQyxLQUFLakcsS0FBTCxDQUFXaUYsSUFBNUMsRUFDSTtBQUFBO0FBQUEsOEJBQVEsV0FBVSx5QkFBbEIsRUFBNEMsU0FBVSxLQUFLUSxVQUEzRDtBQUFBO0FBQUEseUJBREosQ0FESjtBQU1JLDhDQUFTLEtBQUtwRixLQUFMLENBQVc0RixRQUFYLElBQXVCLEtBQUtqRyxLQUFMLENBQVdpRixJQUEzQyxFQUNJO0FBQUE7QUFBQSw4QkFBUSxXQUFVLDJCQUFsQixFQUE4QyxTQUFVLEtBQUtRLFVBQTdEO0FBQUE7QUFBQSx5QkFESixDQU5KO0FBV0ksOENBQVMsS0FBS3pGLEtBQUwsQ0FBV2lGLElBQXBCLEVBQ0k7QUFBQTtBQUFBLDhCQUFRLFdBQVcsNEJBQTRCLHNCQUFTLEtBQUs1RSxLQUFMLENBQVdFLE9BQXBCLEVBQTZCLHNCQUE3QixDQUEvQyxFQUFxRyxTQUFVLEtBQUttRixJQUFwSDtBQUFBO0FBQUEseUJBREo7QUFYSjtBQURGLGlCQURGO0FBb0JJLHFCQUFLQyxRQUFMO0FBcEJKLGFBREo7QUF3Qkg7Ozt5REFFYWQsQyxFQUFNO0FBQ2hCQSxjQUFFcUIsY0FBRjtBQUNBLGdCQUFNMUYsT0FBT29GLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUs3RixLQUFMLENBQVdpRixJQUFYLEdBQWtCLEtBQUs1RSxLQUFMLENBQVdLLE1BQTdCLEdBQXNDLEtBQUtWLEtBQUwsQ0FBV1EsSUFBbkUsQ0FBYjtBQUNBLGlCQUFLQyxRQUFMLENBQWM7QUFDVndFLHNCQUFNLENBQUMsS0FBS2pGLEtBQUwsQ0FBV2lGLElBRFI7QUFFVnpFO0FBRlUsYUFBZDtBQUlIOzs7bURBRU9xRSxDLEVBQU07QUFBQTs7QUFDVkEsY0FBRXFCLGNBQUY7QUFDQSxnQkFBSUMsU0FBUyxLQUFLOUYsS0FBTCxDQUFXSixNQUFYLENBQWtCLEtBQUtELEtBQUwsQ0FBV1EsSUFBN0IsQ0FBYjtBQUNBLGdCQUFJMkYsT0FBT3RGLElBQVgsRUFBaUI7QUFDYnNGLHVCQUFPdEYsSUFBUCxDQUFZLFVBQUNMLElBQUQsRUFBVTtBQUNsQiwyQkFBS0MsUUFBTCxDQUFjO0FBQ1Z3RSw4QkFBTSxLQURJO0FBRVZ6RSw4QkFBTUE7QUFGSSxxQkFBZDtBQUlILGlCQUxEO0FBTUgsYUFQRCxNQU9PO0FBQ0gscUJBQUtDLFFBQUwsQ0FBYztBQUNWd0UsMEJBQU0sS0FESTtBQUVWekUsMEJBQU0yRjtBQUZJLGlCQUFkO0FBSUg7QUFDSjs7O3VEQUVXakcsTSxFQUFXO0FBQUE7O0FBQ25CQSxxQkFBU0EsVUFBVSxLQUFLRyxLQUFMLENBQVdILE1BQTlCO0FBQ0EsbUJBQU9BLE9BQU95QixHQUFQLENBQVcsVUFBQ21ELEtBQUQsRUFBUXNCLENBQVIsRUFBYztBQUM1QixvQkFBSXRCLGlCQUFpQnVCLEtBQXJCLEVBQTRCO0FBQ3hCLDJCQUFRO0FBQUE7QUFBQSwwQkFBSyxLQUFNRCxDQUFYLEVBQWUsT0FBUSxFQUFFRSxTQUFTLFVBQVgsRUFBdkI7QUFDRTtBQUFBO0FBQUE7QUFBTXhCLGtDQUFNLENBQU47QUFBTix5QkFERjtBQUVFO0FBQUE7QUFBQTtBQUNJLG1DQUFLYSxRQUFMLENBQWNiLE1BQU0vQyxLQUFOLENBQVksQ0FBWixDQUFkLEVBQThCLE9BQUsvQixLQUFMLENBQVdRLElBQXpDLEVBQStDLE9BQUtSLEtBQUwsQ0FBV2lGLElBQTFEO0FBREo7QUFGRixxQkFBUjtBQU1ILGlCQVBELE1BT087QUFDSCwyQkFDSTtBQUNVLDZCQUFNSCxNQUFNL0QsSUFEdEI7QUFFVSwrQkFBUStELEtBRmxCO0FBR1UsZ0NBQVMsT0FBSzlFLEtBQUwsQ0FBV1EsSUFIOUI7QUFJVSw4QkFBTyxPQUFLUixLQUFMLENBQVdpRixJQUo1QjtBQUtVLG9DQUFhLE9BQUtELFVBTDVCLEdBREo7QUFRSDtBQUNKLGFBbEJNLENBQVA7QUFtQkg7Ozt5REFFYXBFLE0sRUFBVztBQUNyQixpQkFBS0gsUUFBTCxDQUFjO0FBQ1ZELHNCQUFNb0YsT0FBT0MsTUFBUCxDQUFjLEtBQUs3RixLQUFMLENBQVdRLElBQXpCLHNCQUNESSxPQUFPa0UsS0FBUCxDQUFhL0QsSUFEWixFQUNtQkgsT0FBT00sS0FEMUI7QUFESSxhQUFkO0FBS0g7Ozs7OztBQXZIQzhDLE0sQ0FHS3VDLFksR0FBZTtBQUNsQnJHLFlBQVEsRUFEVTtBQUVsQlEsWUFBUTtBQUZVLEM7QUFIcEJzRCxNLENBUUszQyxTLEdBQVk7QUFDZm5CLFlBQVEsb0JBQUdzRyxPQUFILENBQ0osb0JBQUdDLFNBQUgsQ0FBYSxDQUNULG9CQUFHQyxLQURNLEVBRVQsb0JBQUdDLEtBQUgsQ0FBUztBQUNMNUYsY0FBTSxvQkFBR3lFLE1BQUgsQ0FBVW9CLFVBRFg7QUFFTDVGLGNBQU0sb0JBQUd3RSxNQUFILENBQVVvQixVQUZYO0FBR0w5RixlQUFPLG9CQUFHMEUsTUFITDtBQUlMWixnQkFBUSxvQkFBRy9CLElBSk47QUFLTGMsaUJBQVMsb0JBQUdkLElBTFA7QUFNTDVCLGtCQUFVLG9CQUFHNEI7QUFOUixLQUFULENBRlMsQ0FBYixDQURJLEVBWUQrRCxVQWJRO0FBY2ZsRyxZQUFRLG9CQUFHWSxNQWRJO0FBZWYyRSxjQUFVLG9CQUFHZCxJQWZFO0FBZ0JmNUUsYUFBUyxvQkFBRzRFLElBaEJHO0FBaUJmbEYsWUFBUSxvQkFBRzRDO0FBakJJLEM7ZUFrSFJtQixNOzs7Ozs7Ozs7a0NBMUhUQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk47Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQUM1RCxLQUFEO0FBQUEsV0FDWDtBQUFBO0FBQUEsVUFBSyxXQUFVLGdCQUFmO0FBQ01BLGNBQU13RyxTQUFOLENBQWdCbEYsR0FBaEIsQ0FBb0IsVUFBQ21GLElBQUQsRUFBT0MsS0FBUDtBQUFBLG1CQUFrQjtBQUFBO0FBQUEsa0JBQUssS0FBS0QsS0FBSzVFLEdBQUwsSUFBWTZFLEtBQXRCLEVBQTZCLFdBQVUsRUFBdkM7QUFBMkNELHFCQUFLNUYsS0FBTCxJQUFjNEY7QUFBekQsYUFBbEI7QUFBQSxTQUFwQjtBQUROLEtBRFc7QUFBQSxDQUFmOztlQU1lN0MsTTs7OztBQUVmQSxPQUFPNUMsU0FBUCxHQUFtQjtBQUNmd0YsZUFBVyxvQkFBVUwsT0FBVixDQUFrQixvQkFBVUMsU0FBVixDQUFvQixDQUFDLG9CQUFVakIsTUFBWCxFQUFtQixvQkFBVWxFLE1BQTdCLENBQXBCLENBQWxCO0FBREksQ0FBbkI7Ozs7Ozs7O2tDQVJNMkMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pOOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU1ILFNBQVMsU0FBVEEsTUFBUyxDQUFDekQsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBLE1BQUssV0FBVyxjQUFjQSxNQUFNMkcsU0FBTixJQUFtQixFQUFqQyxDQUFoQjtBQUNJM0csVUFBTW1EO0FBRFYsR0FEYTtBQUFBLENBQWY7O2VBTWVNLE07Ozs7QUFFZkEsT0FBT3pDLFNBQVAsR0FBbUI7QUFDZm1DLFlBQVUsb0JBQVVDLElBREw7QUFFZnVELGFBQVcsb0JBQVV4QjtBQUZOLENBQW5COzs7Ozs7OztnQ0FSTTFCLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNVyxROzs7Ozs7Ozs7OztpQ0FDTztBQUFBOztBQUNMLGdCQUFJd0MsSUFBSSxLQUFLNUcsS0FBTCxDQUFXbUIsS0FBbkI7QUFDQSxnQkFBSSxDQUFDLEtBQUtuQixLQUFMLENBQVdtQixLQUFYLENBQWlCQSxLQUF0QixFQUE2QjtBQUN6QixvQkFBSTBGLElBQUksS0FBSzdHLEtBQUwsQ0FBV3lCLE1BQVgsQ0FBa0JxRixNQUFsQixDQUF5QjtBQUFBLDJCQUFTM0YsTUFBTU4sS0FBTixLQUFnQixPQUFLYixLQUFMLENBQVdtQixLQUFYLENBQWlCNEYsV0FBakIsRUFBekI7QUFBQSxpQkFBekIsRUFBa0YsQ0FBbEYsQ0FBUjtBQUNBSCxvQkFBSTtBQUNBekYsMkJBQU8wRixJQUFHQSxFQUFFMUYsS0FBTCxHQUFhLE1BRHBCO0FBRUFOLDJCQUFPLEtBQUtiLEtBQUwsQ0FBV21CLEtBQVgsQ0FBaUI0RixXQUFqQjtBQUZQLGlCQUFKO0FBSUg7QUFDRCxnQkFBTUMsYUFBYTtBQUNmQyxpQ0FBaUJMLEVBQUV6RixLQUFGLElBQVcsT0FEYjtBQUVmQSx1QkFBTyx1QkFBTStGLFNBQU4sQ0FBZ0JOLEVBQUV6RixLQUFsQixDQUZRO0FBR2ZnRyw4QkFBYyxLQUhDO0FBSWZDLHdCQUFRO0FBSk8sYUFBbkI7O0FBT0EsZ0JBQU1uRSxRQUFRc0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0J3QixVQUFsQixFQUE4QixLQUFLaEgsS0FBTCxDQUFXaUQsS0FBWCxHQUFrQixLQUFLakQsS0FBTCxDQUFXaUQsS0FBN0IsR0FBcUMsRUFBbkUsQ0FBZDs7QUFJQSxtQkFBUTtBQUFBO0FBQUEsa0JBQU0sV0FBVyxLQUFLakQsS0FBTCxDQUFXMkcsU0FBNUIsRUFBdUMsT0FBUTFELEtBQS9DO0FBQXVEO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGdCQUFoQjtBQUFtQzJELHNCQUFFL0YsS0FBRixJQUFXO0FBQTlDO0FBQXZELGFBQVI7QUFDSDs7Ozs7O0FBSUx1RCxTQUFTcEQsU0FBVCxHQUFxQjtBQUNqQkcsV0FBTyxvQkFBVWlGLFNBQVYsQ0FBb0IsQ0FBQyxvQkFBVW5GLE1BQVgsRUFBbUIsb0JBQVVrRSxNQUE3QixDQUFwQixDQURVO0FBRWpCMUQsWUFBUSxvQkFBVTRFO0FBRkQsQ0FBckI7O0FBS0EsU0FBU3JFLFFBQVQsQ0FBa0JyQyxLQUFsQixFQUF5QjtBQUNyQixXQUFPO0FBQ0g4QixnQkFBUTlCLE1BQU02QixJQUFOLENBQVdDO0FBRGhCLEtBQVA7QUFHSDs7ZUFFYyx5QkFBUU8sUUFBUixFQUFrQm9DLFFBQWxCLEM7OztRQUVOQSxRLEdBQUFBLFE7Ozs7Ozs7O2tDQXZDSEEsUTs7a0NBK0JHcEMsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ1Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNNkIsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ0ZsRSxLLEdBQVE7QUFDSjBILG1CQUFPO0FBREgsUyxRQW9FUkMsVzs7Ozs7Ozs7OzRDQXhEb0I7QUFDaEIsaUJBQUtsRyxRQUFMLEdBQWdCLEtBQUtwQixLQUFMLENBQVd1SCxTQUEzQjtBQUNBLGlCQUFLQyxVQUFMLEdBQWtCLEtBQUt4SCxLQUFMLENBQVd3SCxVQUFYLElBQTBCLFVBQUM3RixDQUFELEVBQUlDLENBQUo7QUFBQSx1QkFBVUQsTUFBTUMsQ0FBaEI7QUFBQSxhQUE1Qzs7QUFFQSxpQkFBS3hCLFFBQUwsQ0FBYztBQUNWcUgseUJBQVMsS0FBS3pILEtBQUwsQ0FBVzBIO0FBRFYsYUFBZDs7QUFJQSxnQkFBSSxLQUFLMUgsS0FBTCxDQUFXMkgsT0FBZixFQUF3QjtBQUNwQixvQkFBTUEsVUFBVSxnQkFBRUMsY0FBRixDQUFpQixLQUFLSixVQUF0QixFQUFrQyxLQUFLeEgsS0FBTCxDQUFXMkgsT0FBN0MsRUFBc0QsS0FBSzNILEtBQUwsQ0FBVzBILElBQWpFLENBQWhCO0FBQ0EscUJBQUt0SCxRQUFMLENBQWM7QUFDVnVIO0FBRFUsaUJBQWQ7QUFHSDtBQUNKOzs7a0RBRXlCRSxTLEVBQVc7QUFDakMsaUJBQUt6SCxRQUFMLENBQWM7QUFDVnFILHlCQUFTSSxVQUFVSDtBQURULGFBQWQ7QUFHQSxnQkFBSUcsVUFBVUYsT0FBVixJQUFxQixLQUFLaEksS0FBTCxDQUFXOEgsT0FBaEMsSUFBMkNJLFVBQVVILElBQXpELEVBQStEO0FBQzNELG9CQUFNQyxVQUFVLGdCQUFFQyxjQUFGLENBQWlCLEtBQUtKLFVBQXRCLEVBQWtDSyxVQUFVRixPQUE1QyxFQUFxREUsVUFBVUgsSUFBL0QsQ0FBaEI7QUFDQSxxQkFBS3RILFFBQUwsQ0FBYztBQUNWdUg7QUFEVSxpQkFBZDtBQUdIO0FBQ0o7OztpQ0FFUTtBQUFBOztBQUNMLGdCQUFJLENBQUMsS0FBS2hJLEtBQUwsQ0FBVzhILE9BQWhCLEVBQXlCLE9BQU8sSUFBUDtBQUN6QixtQkFDSTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsMEJBQUksV0FBWSxLQUFLekgsS0FBTCxDQUFXMkcsU0FBM0IsRUFBdUMsT0FBUSxFQUFFbUIsVUFBVSxPQUFaLEVBQS9DO0FBQ0ksNkJBQUtuSSxLQUFMLENBQVc4SCxPQUFYLENBQW1CbkcsR0FBbkIsQ0FBdUIsVUFBQ21GLElBQUQsRUFBT2xFLEdBQVAsRUFBWXdGLEdBQVo7QUFBQSxtQ0FBb0IscUNBQU0sUUFBTjtBQUNlLCtDQUFZLE1BRDNCO0FBRWUscUNBQU10QixLQUFLdUIsR0FBTCxJQUFZekY7QUFGakMsK0JBR21Ca0UsSUFIbkIsRUFJbUIsT0FBS2EsV0FBTCxDQUFpQi9FLEdBQWpCLEVBQXNCd0YsR0FBdEIsRUFBMkIsTUFBM0IsQ0FKbkIsRUFBcEI7QUFBQSx5QkFBdkI7QUFESjtBQURBLGlCQURGO0FBVUkscUJBQUtwSSxLQUFMLENBQVdnSSxPQUFYLEdBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLDBCQUFJLFdBQVksS0FBSzNILEtBQUwsQ0FBVzJHLFNBQTNCLEVBQXVDLE9BQVEsRUFBRW1CLFVBQVUsT0FBWixFQUEvQztBQUNJLDZCQUFLbkksS0FBTCxDQUFXZ0ksT0FBWCxDQUFtQnJHLEdBQW5CLENBQXVCLFVBQUNtRixJQUFELEVBQU9sRSxHQUFQLEVBQVl3RixHQUFaO0FBQUEsbUNBQW9CLHFDQUFNLFFBQU47QUFDZSwrQ0FBWSxTQUQzQjtBQUVlLHFDQUFNdEIsS0FBS3VCLEdBQUwsSUFBWXpGO0FBRmpDLCtCQUdtQmtFLElBSG5CLEVBSW1CLE9BQUthLFdBQUwsQ0FBaUIvRSxHQUFqQixFQUFzQndGLEdBQXRCLEVBQTJCLFNBQTNCLENBSm5CLEVBQXBCO0FBQUEseUJBQXZCO0FBREo7QUFEQSxpQkFEQSxHQVVVO0FBcEJkLGFBREo7QUF3Qkg7OzswREFFY3hGLEcsRUFBS3dGLEcsRUFBS0UsTSxFQUFXO0FBQUE7O0FBQ2hDLG1CQUFPO0FBQ0hDLDJCQUFXLElBRFI7QUFFSEMsNkJBQWEscUJBQUMzRCxDQUFELEVBQU87QUFDaEJBLHNCQUFFNEQsWUFBRixDQUFlQyxPQUFmLENBQXVCLEtBQXZCLEVBQThCOUYsR0FBOUI7QUFDQWlDLHNCQUFFNEQsWUFBRixDQUFlQyxPQUFmLENBQXVCLFFBQXZCLEVBQWlDSixNQUFqQztBQUNBekQsc0JBQUU0RCxZQUFGLENBQWVFLGFBQWYsR0FBK0IsTUFBL0I7QUFDSCxpQkFORTtBQU9IQyw0QkFBWSxvQkFBQy9ELENBQUQsRUFBTztBQUNmQSxzQkFBRXFCLGNBQUY7QUFDSCxpQkFURTtBQVVIMkMsd0JBQVEsZ0JBQUNoRSxDQUFELEVBQU87QUFDWCx3QkFBSXlELFNBQVN6RCxFQUFFNEQsWUFBRixDQUFlSyxPQUFmLENBQXVCLFFBQXZCLENBQWI7QUFDQSx3QkFBSUMsT0FBT2xFLEVBQUVtRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlgsTUFBbkM7O0FBRUEsd0JBQUlBLFdBQVdTLElBQWYsRUFBcUI7O0FBRXJCLHdCQUFJRyxTQUFTLENBQUNyRSxFQUFFNEQsWUFBRixDQUFlSyxPQUFmLENBQXVCLEtBQXZCLENBQWQ7QUFDQSx3QkFBSUssU0FBU3ZHLEdBQWI7O0FBRUEsd0JBQUl3RyxRQUFRO0FBQ1JyQiwyREFBVSxPQUFLL0gsS0FBTCxDQUFXOEgsT0FBckIsRUFEUTtBQUVSRSw4REFBYSxPQUFLaEksS0FBTCxDQUFXZ0ksT0FBeEI7QUFGUSxxQkFBWjs7QUFLQSx3QkFBSW1CLFVBQVVmLElBQUlqSCxNQUFKLEdBQWEsQ0FBM0IsRUFBOEI7QUFDMUJnSSxpQ0FBU2YsSUFBSWpILE1BQWI7QUFDSDtBQUNELHdCQUFJa0ksUUFBUUQsTUFBTWQsTUFBTixFQUFjZ0IsTUFBZCxDQUFxQkosTUFBckIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FBWjtBQUNBRSwwQkFBTUwsSUFBTixFQUFZTyxNQUFaLENBQW1CSCxNQUFuQixFQUEyQixDQUEzQixFQUE4QkUsS0FBOUI7O0FBRUEsMkJBQUs1SSxRQUFMLENBQWM7QUFDVnFILGlDQUFTc0IsTUFBTXJCLElBREw7QUFFVkMsaUNBQVNvQixNQUFNcEI7QUFGTCxxQkFBZDtBQUlIO0FBbENFLGFBQVA7QUFvQ0g7Ozs7OztBQTFHQzlELFksQ0FLSzdDLFMsR0FBWTtBQUNmMkYsZUFBVyxvQkFBVXhCLE1BRE47QUFFZm9DLGVBQVcsb0JBQVUvRSxJQUFWLENBQWUrRCxVQUZYO0FBR2ZtQixVQUFNLG9CQUFVckIsS0FBVixDQUFnQkUsVUFIUDtBQUlmb0IsYUFBUyxvQkFBVXRCLEtBSko7QUFLZm1CLGdCQUFZLG9CQUFVaEY7QUFMUCxDO2VBd0dScUIsWTs7Ozs7Ozs7O2tDQTdHVEEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUE47Ozs7Ozs7Ozs7OztJQUVNSSxjOzs7Ozs7Ozs7Ozs7OzswTUFTRmlGLFU7Ozs7aUJBS0FDLFE7Ozs7Ozs7OztpQ0FiUztBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFjLEtBQUtELFVBQXhCLEVBQW9DLFlBQVksS0FBS0MsUUFBckQ7QUFDTSxxQkFBS25KLEtBQUwsQ0FBV21EO0FBRGpCLGFBREo7QUFLSDs7O3lEQUVhcUIsQyxFQUFNO0FBQ2hCLGdCQUFHQSxFQUFFNEUsY0FBRixDQUFpQnRJLE1BQWpCLEdBQTBCLENBQTdCLEVBQWdDO0FBQ2hDLGlCQUFLdUksTUFBTCxHQUFjN0UsRUFBRTRFLGNBQUYsQ0FBaUIsQ0FBakIsRUFBb0JFLE9BQWxDO0FBQ0g7Ozt1REFFVzlFLEMsRUFBTTtBQUNkLGdCQUFJK0UsT0FBTy9FLEVBQUU0RSxjQUFGLENBQWlCLENBQWpCLEVBQW9CRSxPQUFwQixHQUE4QixLQUFLRCxNQUE5QztBQUNBLGdCQUFHRSxPQUFPLEdBQVAsSUFBY0EsT0FBTyxDQUFDLEdBQXpCLEVBQThCOztBQUU5QixnQkFBRyxDQUFDLEtBQUt2SixLQUFMLENBQVd3SixNQUFmLEVBQXVCLE9BQU8sS0FBS3hKLEtBQUwsQ0FBV3lKLE9BQVgsQ0FBbUJGLElBQW5CLENBQVA7O0FBRXZCQSxtQkFBTyxDQUFQLEdBQVcsS0FBS3ZKLEtBQUwsQ0FBVzBKLE9BQVgsRUFBWCxHQUFrQyxLQUFLMUosS0FBTCxDQUFXd0osTUFBWCxFQUFsQztBQUNIOzs7Ozs7ZUFHVXZGLGM7Ozs7Ozs7OztrQ0F4QlRBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTjs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxTQUFTMEYsUUFBVCxDQUFrQjNKLEtBQWxCLEVBQXlCNEosR0FBekIsRUFBOEI7QUFDMUIsV0FBTzVKLE1BQU1vQyxNQUFOLEtBQWlCd0gsR0FBakIsR0FBdUIsd0JBQXZCLEdBQWtELGlCQUF6RDtBQUNIOztBQUVELElBQU1DLFNBQVMsU0FBVEEsTUFBUztBQUFBLFdBQU0sc0NBQUksV0FBVSxZQUFkLEdBQU47QUFBQSxDQUFmOztBQUVBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDOUosS0FBRDtBQUFBLFdBQ2hCO0FBQUE7QUFBQSxVQUFLLFVBQUw7QUFDSUEsY0FBTWlDLElBQU4sQ0FBV1gsR0FBWCxDQUFlLFVBQUNzSSxHQUFELEVBQU1ySCxHQUFOO0FBQUEsbUJBQ1g7QUFBQTtBQUFBLGtCQUFTLEtBQUtxSCxHQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbUNBQVlELFNBQVMzSixLQUFULEVBQWdCNEosR0FBaEIsQ0FEZDtBQUVFLGlDQUFVLG1CQUFNO0FBQUM1SixrQ0FBTXFDLE1BQU4sQ0FBYXVILEdBQWI7QUFBa0IseUJBRnJDO0FBR0dBO0FBSEg7QUFERixhQURXO0FBQUEsU0FBZixDQURKO0FBV0ksc0NBQUMsTUFBRCxJQUFRLEtBQUksUUFBWjtBQVhKLEtBRGdCO0FBQUEsQ0FBcEI7O0FBZ0JBRSxZQUFZOUksU0FBWixHQUF3QjtBQUNwQmlCLFVBQU0sb0JBQVVvRSxLQUFWLENBQWdCRSxVQURGO0FBRXBCbkUsWUFBUSxvQkFBVStDLE1BRkU7QUFHcEI5QyxZQUFRLG9CQUFVRztBQUhFLENBQXhCOztBQU1Bc0gsWUFBWTVELFlBQVosR0FBMkI7QUFDdkJqRSxVQUFNO0FBRGlCLENBQTNCOztlQUllNkgsVzs7Ozs7Ozs7O2tDQWhDTkgsUTs7a0NBSUhFLE07O2tDQUVBQyxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWTjs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRU1DLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNGcEssSyxHQUFRO0FBQ0pRLGtCQUFNNko7QUFERixTOzs7Ozs0Q0FJWTtBQUNoQixpQkFBS2hLLEtBQUwsQ0FBV2lLLFNBQVgsQ0FBcUIsS0FBS2pLLEtBQUwsQ0FBV2tLLEdBQVgsQ0FBZXJJLEdBQXBDO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsMEJBQUssV0FBVSwrQ0FBZjtBQUNFO0FBQUE7QUFBQSw4QkFBTSxJQUFLLFdBQVcsS0FBSzdCLEtBQUwsQ0FBV2tLLEdBQVgsQ0FBZUMsR0FBckMsRUFBMkMsV0FBVSxZQUFyRDtBQUNFLGlDQUFLbkssS0FBTCxDQUFXa0ssR0FBWCxDQUFleEo7QUFEakI7QUFERixxQkFERjtBQU1FO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGFBQWY7QUFDSSw2QkFBS1YsS0FBTCxDQUFXRyxJQUFYLEdBQ0UsaURBQU8sTUFBTyxLQUFLSCxLQUFMLENBQVdHLElBQXpCLEVBQWdDLE9BQU8sS0FBS0gsS0FBTCxDQUFXa0ssR0FBWCxDQUFlL0ksS0FBdEQsR0FERixHQUVFO0FBSE47QUFORjtBQURGLGFBREo7QUFnQkg7Ozs7OztBQUdMNEksUUFBUS9JLFNBQVIsR0FBb0I7QUFDaEJrSixTQUFLLG9CQUFVako7QUFEQyxDQUFwQjs7QUFJQSxTQUFTZSxRQUFULENBQWtCckMsS0FBbEIsRUFBeUJ5SyxRQUF6QixFQUFtQztBQUMvQixRQUFJQyxZQUFZMUssTUFBTTJLLE1BQU4sQ0FBYXJGLE9BQWIsR0FBdUI2QixNQUF2QixDQUE4QjtBQUFBLGVBQVN5RCxNQUFNTCxHQUFOLEtBQWNFLFNBQVNGLEdBQVQsQ0FBYXJJLEdBQXBDO0FBQUEsS0FBOUIsQ0FBaEI7O0FBRUEsV0FBTztBQUNIMUIsY0FBTXFLLGdCQUFnQkgsU0FBaEI7QUFESCxLQUFQO0FBR0g7O0FBRUQsU0FBUzVILFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzNCLFdBQU87QUFDSHVILG1CQUFXLG1CQUFDUSxFQUFEO0FBQUEsbUJBQVEvSCxTQUFTLDJCQUFlK0gsRUFBZixDQUFULENBQVI7QUFBQTtBQURSLEtBQVA7QUFHSDs7ZUFFYyx5QkFBUXpJLFFBQVIsRUFBa0JTLFdBQWxCLEVBQStCc0gsT0FBL0IsQzs7Ozs7QUFFZixTQUFTUyxlQUFULENBQXlCRixNQUF6QixFQUFpQztBQUM3QixRQUFJLENBQUNBLE9BQU94SixNQUFaLEVBQW9CLE9BQU8sSUFBUDtBQUNwQixRQUFJNEosU0FBUyxpQkFBRUMsT0FBRixDQUFVTCxPQUFPaEosR0FBUCxDQUFXO0FBQUEsZUFBV1MsUUFBUTZJLEtBQW5CO0FBQUEsS0FBWCxDQUFWLEVBQWdELGlCQUFFQyxLQUFGLENBQVEsRUFBUixDQUFoRCxDQUFiO0FBQ0EsV0FBT3RGLE9BQU91RixJQUFQLENBQVlKLE1BQVosRUFBb0JwSixHQUFwQixDQUF3QjtBQUFBLGVBQU9vSixPQUFPMUMsR0FBUCxDQUFQO0FBQUEsS0FBeEIsQ0FBUDtBQUNIOzs7Ozs7OztrQ0FyREsrQixPOztrQ0FpQ0cvSCxROztrQ0FRQVMsVzs7a0NBUUErSCxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RFQ7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTU8sTzs7Ozs7Ozs7Ozs7aUNBS087QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxNQUFkO0FBQ0U7QUFBQTtBQUFBLHNCQUFlLFFBQVMsQ0FBQyxDQUFDLEtBQUsvSyxLQUFMLENBQVdnTCxJQUFYLENBQWdCbEssTUFBMUM7QUFDRTtBQUFBO0FBQUEsMEJBQUssS0FBSSxHQUFULEVBQWEsV0FBVSxVQUF2QjtBQUNJO0FBREoscUJBREY7QUFJRTtBQUFBO0FBQUEsMEJBQUssS0FBSSxHQUFULEVBQWEsV0FBVSxVQUF2QjtBQUNJLDZCQUFLZCxLQUFMLENBQVdnTCxJQUFYLENBQWdCMUosR0FBaEIsQ0FBb0I7QUFBQSxtQ0FBUSxtREFBUyxLQUFNNEksSUFBSXJJLEdBQW5CLEVBQXlCLEtBQU1xSSxHQUEvQixFQUFxQyxXQUFVLFVBQS9DLEdBQVI7QUFBQSx5QkFBcEI7QUFESjtBQUpGO0FBREYsYUFESjtBQVlIOzs7Ozs7QUFsQkNhLE8sQ0FFSy9KLFMsR0FBWTtBQUNmZ0ssVUFBTSxvQkFBVTNFLEtBQVYsQ0FBZ0JFO0FBRFAsQzs7O0FBbUJ2QixTQUFTMEUsUUFBVCxDQUFrQnRMLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQU87QUFDSHFMLGNBQU1yTCxNQUFNcUwsSUFEVDtBQUVIRSxrQkFBVXZMLE1BQU11TDtBQUZiLEtBQVA7QUFJSDs7ZUFFYyx5QkFBUUQsUUFBUixFQUFrQkYsT0FBbEIsQzs7Ozs7Ozs7OztrQ0E1QlRBLE87O2tDQXFCR0UsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCVDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNRSxTQUFTO0FBQ1gsV0FBTyxRQURJO0FBRVgsWUFBUTtBQUZHLENBQWY7O0FBTUEsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUNwTCxLQUFELEVBQVc7QUFDM0IsYUFBU3FMLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNsQixlQUFPdEwsTUFBTXVMLElBQU4sS0FBZUQsS0FBZixHQUFzQkgsT0FBT25MLE1BQU13TCxHQUFiLENBQXRCLEdBQTBDLElBQWpEO0FBQ0g7O0FBRUQsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFVLGNBQWQ7QUFDRTtBQUFBO0FBQUEsa0JBQUksU0FBU3hMLE1BQU15TCxVQUFOLENBQWlCLFFBQWpCLENBQWI7QUFBQTtBQUErQ0osc0JBQU0sUUFBTjtBQUEvQyxhQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFJLFNBQVNyTCxNQUFNeUwsVUFBTixDQUFpQixPQUFqQixDQUFiO0FBQUE7QUFBK0NKLHNCQUFNLE9BQU47QUFBL0MsYUFGRjtBQUdFO0FBQUE7QUFBQSxrQkFBSSxTQUFTckwsTUFBTXlMLFVBQU4sQ0FBaUIsT0FBakIsQ0FBYjtBQUFBO0FBQStDSixzQkFBTSxPQUFOO0FBQS9DLGFBSEY7QUFJRTtBQUFBO0FBQUEsa0JBQUksU0FBU3JMLE1BQU15TCxVQUFOLENBQWlCLE1BQWpCLENBQWI7QUFBQTtBQUE2Q0osc0JBQU0sTUFBTjtBQUE3QyxhQUpGO0FBS0U7QUFBQTtBQUFBLGtCQUFJLFNBQVNyTCxNQUFNeUwsVUFBTixDQUFpQixRQUFqQixDQUFiO0FBQUE7QUFBaURKLHNCQUFNLFFBQU47QUFBakQsYUFMRjtBQU1FO0FBQUE7QUFBQSxrQkFBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQSxhQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUtyTCxzQkFBTTBMLFFBQU4sR0FBZ0I7QUFBQTtBQUFBLHNCQUFHLE1BQUssR0FBUixFQUFZLFNBQVMxTCxNQUFNMkwsYUFBM0I7QUFBQTtBQUFBLGlCQUFoQixHQUF1RTtBQUE1RTtBQVBGO0FBREYsS0FERjtBQWFILENBbEJEOztBQW9CQVAsWUFBWXBLLFNBQVosR0FBd0I7QUFDcEJ5SyxnQkFBWSxvQkFBVWpKLElBQVYsQ0FBZStELFVBRFA7QUFFcEJnRixVQUFNLG9CQUFVcEcsTUFGSTtBQUdwQnVHLGNBQVUsb0JBQVU1RyxJQUhBO0FBSXBCNkcsbUJBQWUsb0JBQVVuSjtBQUpMLENBQXhCOztlQU9lNEksVzs7Ozs7Ozs7O2tDQWpDVEQsTTs7a0NBTUFDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZOOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBRU1RLFM7Ozs7Ozs7Ozs7Ozs7O2dNQWtERkMsYSxHQUFnQjtBQUNaQyx1QkFBVyxtQkFBQ3RILENBQUQsRUFBTztBQUNkQSxrQkFBRXFCLGNBQUY7O0FBRUEsb0JBQUlrRyxXQUFXdkgsRUFBRXdILE9BQUYsSUFBYXhILEVBQUV5SCxPQUE5QjtBQUNBLG9CQUFJQyxRQUFRMUgsRUFBRTJILFFBQWQ7QUFDQSxvQkFBSTVKLE1BQU02SixPQUFPNUgsRUFBRUUsTUFBRixDQUFTa0UsT0FBVCxDQUFpQmxDLEtBQXhCLENBQVY7QUFDQSxvQkFBSW1FLGNBQUo7O0FBRUEsb0JBQUlrQixZQUFZLE1BQUtNLFlBQUwsS0FBc0JyQyxTQUF0QyxFQUFpRDtBQUM3Qyx3QkFBSXNDLElBQUlDLEtBQUtDLEdBQUwsQ0FBUyxNQUFLSCxZQUFkLEVBQTRCOUosR0FBNUIsQ0FBUjtBQUNBLHdCQUFJa0ssSUFBSUYsS0FBS0csR0FBTCxDQUFTLE1BQUtMLFlBQWQsRUFBNEI5SixHQUE1QixDQUFSO0FBQ0Esd0JBQUltSixXQUFXLGlCQUFHYixLQUFILENBQVN5QixDQUFULEVBQVlHLElBQUksQ0FBaEIsQ0FBZjtBQUNBLDBCQUFLSixZQUFMLEdBQW9CckMsU0FBcEI7QUFDQWEsNEJBQVEsTUFBS2xMLEtBQUwsQ0FBV2tMLEtBQVgsQ0FBaUI4QixNQUFqQixDQUF3QmpCLFFBQXhCLENBQVI7QUFDSCxpQkFORCxNQU1PLElBQUlLLFlBQVksQ0FBQyxNQUFLTSxZQUF0QixFQUFvQztBQUN2QywwQkFBS0EsWUFBTCxHQUFvQjlKLEdBQXBCO0FBQ0FzSSw0QkFBUSxNQUFLbEwsS0FBTCxDQUFXa0wsS0FBWCxDQUFpQjhCLE1BQWpCLENBQXdCcEssR0FBeEIsQ0FBUjtBQUNILGlCQUhNLE1BR0EsSUFBSTJKLFNBQVMsTUFBS3ZNLEtBQUwsQ0FBV2tMLEtBQVgsQ0FBaUIvSixNQUE5QixFQUFzQztBQUN6Qyx3QkFBSXdMLEtBQUlDLEtBQUtDLEdBQUwsZ0NBQVksTUFBSzdNLEtBQUwsQ0FBV2tMLEtBQXZCLEVBQVI7QUFDQSx3QkFBSTRCLEtBQUlGLEtBQUtHLEdBQUwsZ0NBQVksTUFBSy9NLEtBQUwsQ0FBV2tMLEtBQXZCLEVBQVI7QUFDQSx3QkFBSWEsWUFBV25KLE9BQU9rSyxFQUFQLEdBQVcsaUJBQUc1QixLQUFILENBQVN0SSxHQUFULEVBQWNrSyxLQUFJLENBQWxCLENBQVgsR0FBa0MsaUJBQUc1QixLQUFILENBQVN5QixFQUFULEVBQVkvSixNQUFNLENBQWxCLENBQWpEO0FBQ0EsMEJBQUs4SixZQUFMLEdBQW9CckMsU0FBcEI7QUFDQWEsNEJBQVEsTUFBS2xMLEtBQUwsQ0FBV2tMLEtBQVgsQ0FBaUI4QixNQUFqQixDQUF3QmpCLFNBQXhCLENBQVI7QUFDSCxpQkFOTSxNQU1BO0FBQ0gsMEJBQUtXLFlBQUwsR0FBb0I5SixHQUFwQjtBQUNBc0ksNEJBQVEsTUFBS2xMLEtBQUwsQ0FBV2tMLEtBQVgsQ0FBaUIrQixRQUFqQixDQUEwQnJLLEdBQTFCLEtBQWtDLE1BQUs1QyxLQUFMLENBQVdrTCxLQUFYLENBQWlCL0osTUFBakIsS0FBNEIsQ0FBOUQsR0FBa0UsRUFBbEUsR0FBdUUsQ0FBQ3lCLEdBQUQsQ0FBL0U7QUFDSDs7QUFFRCxzQkFBS25DLFFBQUwsQ0FBYztBQUNWeUs7QUFEVSxpQkFBZDtBQUdIO0FBaENXLFMsUUFtQ2hCYyxhOzs7O2lCQVdBRixVOzs7O2lCQXFCQW9CLFc7Ozs7Ozs7Ozs2Q0E3R3FCO0FBQ2pCLGlCQUFLek0sUUFBTCxDQUFjO0FBQ1ZrSyx3QkFBUXdDLG9DQUFXLEtBQUs5TSxLQUFMLENBQVdzSyxNQUF0QixJQUErQixRQUEvQixDQURFO0FBRVZPLHVCQUFPO0FBRkcsYUFBZDtBQUlIOzs7a0RBRXlCa0MsSSxFQUFNO0FBQzVCLGdCQUFJQSxLQUFLekMsTUFBVCxFQUFpQjtBQUNiLG9CQUFJQSxTQUFTd0MsT0FBT0MsS0FBS3pDLE1BQVosRUFBb0IsS0FBSzNLLEtBQUwsQ0FBVzRMLElBQVgsSUFBbUIsUUFBdkMsQ0FBYjtBQUNBLHFCQUFLbkwsUUFBTCxDQUFjO0FBQ1ZrSyw0QkFBUSxLQUFLM0ssS0FBTCxDQUFXNkwsR0FBWCxLQUFtQixNQUFuQixHQUE0QmxCLE9BQU8wQyxPQUFQLEVBQTVCLEdBQStDMUM7QUFEN0MsaUJBQWQ7QUFHSDtBQUNKOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQU8sV0FBVSwwREFBakI7QUFDRTtBQUNhLGdDQUFhLEtBQUttQixVQUQvQjtBQUVhLDBCQUFPLEtBQUs5TCxLQUFMLENBQVc0TCxJQUYvQjtBQUdhLHlCQUFNLEtBQUs1TCxLQUFMLENBQVc2TCxHQUg5QjtBQUlhLG1DQUFnQixLQUFLRyxhQUpsQztBQUthLDhCQUFXLEtBQUtoTSxLQUFMLENBQVdrTCxLQUFYLENBQWlCL0osTUFBakIsR0FBMEIsQ0FMbEQsR0FERjtBQU9FO0FBQUE7QUFBQTtBQUNNLHlCQUFLbkIsS0FBTCxDQUFXMkssTUFBWCxDQUFrQmhKLEdBQWxCLENBQXNCLFVBQUNpSixLQUFELEVBQVFoSSxHQUFSO0FBQUEsK0JBQ2xCO0FBQ1UsaUNBQU1BLEdBRGhCO0FBRVUsaUNBQU1nSSxNQUFNMUksR0FBTixHQUFZMEksTUFBTTBDLFVBRmxDO0FBR1UsbUNBQVExQyxLQUhsQjtBQUlVLDJDQUFnQixPQUFLc0IsYUFKL0I7QUFLVSxzQ0FBVyxPQUFLbE0sS0FBTCxDQUFXa0wsS0FBWCxDQUFpQitCLFFBQWpCLENBQTBCckssR0FBMUIsQ0FMckI7QUFNVSxrQ0FBTyxPQUFLdkMsS0FBTCxDQUFXd0IsSUFONUI7QUFPVSx5Q0FBYyxPQUFLcUwsV0FQN0I7QUFRVSxtQ0FBTyxPQUFLN00sS0FBTCxDQUFXa04sS0FSNUIsR0FEa0I7QUFBQSxxQkFBdEI7QUFETjtBQVBGLGFBREo7QUF1Qkg7Ozs0REFxQ2dCQyxLLEVBQVU7QUFBQTs7QUFDdkJBLGtCQUFNdEgsY0FBTjtBQUNBLGdCQUFNdUgsb0NBQVcsSUFBSUMsR0FBSixDQUFRLEtBQUsxTixLQUFMLENBQVdrTCxLQUFuQixDQUFYLEVBQU47QUFDQSxnQkFBTXlDLE1BQU1GLEtBQUs5TCxHQUFMLENBQVM7QUFBQSx1QkFBTyxPQUFLM0IsS0FBTCxDQUFXMkssTUFBWCxDQUFrQi9ILEdBQWxCLEVBQXVCVixHQUE5QjtBQUFBLGFBQVQsQ0FBWjs7QUFFQSxpQkFBSzdCLEtBQUwsQ0FBV3VOLFlBQVgsQ0FBd0JELEdBQXhCO0FBQ0EsaUJBQUtsTixRQUFMLENBQWM7QUFDVnlLLHVCQUFPO0FBREcsYUFBZDtBQUdIOzs7eURBRWFTLEssRUFBVTtBQUFBOztBQUNwQixtQkFBTyxZQUFNO0FBQ1Qsb0JBQUlrQyx5Q0FBZ0IsT0FBSzdOLEtBQUwsQ0FBVzJLLE1BQTNCLEVBQUo7QUFBQSxvQkFDSWtCLFlBREo7QUFFQSxvQkFBSSxPQUFLN0wsS0FBTCxDQUFXNEwsSUFBWCxLQUFvQkQsS0FBeEIsRUFBK0I7QUFDM0JrQyw4QkFBVVIsT0FBVjtBQUNBeEIsMEJBQU0sT0FBSzdMLEtBQUwsQ0FBVzZMLEdBQVgsS0FBbUIsS0FBbkIsR0FBMkIsTUFBM0IsR0FBb0MsS0FBMUM7QUFDSCxpQkFIRCxNQUdPO0FBQ0hzQiwyQkFBT1UsU0FBUCxFQUFrQmxDLEtBQWxCO0FBQ0FFLDBCQUFNLEtBQU47QUFDSDs7QUFFRCx1QkFBS3BMLFFBQUwsQ0FBYztBQUNWb0wsNEJBRFU7QUFFVkQsMEJBQU1ELEtBRkk7QUFHVmhCLDRCQUFRa0QsU0FIRTtBQUlWM0MsMkJBQU87QUFKRyxpQkFBZDtBQU1ILGFBakJEO0FBa0JIOzs7MERBRWM0QyxRLEVBQWE7QUFDeEIsaUJBQUtyTixRQUFMLENBQWM7QUFDVmtLLHdCQUFRLEtBQUszSyxLQUFMLENBQVcySyxNQUFYLENBQWtCaEosR0FBbEIsQ0FBc0IsaUJBQVM7QUFDbkMsMkJBQU9pSixNQUFNMUksR0FBTixLQUFjNEwsU0FBUzVMLEdBQXZCLEdBQTZCNEwsUUFBN0IsR0FBd0NsRCxLQUEvQztBQUNILGlCQUZPO0FBREUsYUFBZDtBQUtBLGlCQUFLdkssS0FBTCxDQUFXNk0sV0FBWCxDQUF1QlksUUFBdkI7QUFDSDs7Ozs7O0FBNUhDN0IsUyxDQUNLNUssUyxHQUFZO0FBQ2ZzSixZQUFRLG9CQUFVakUsS0FESDtBQUVmN0UsVUFBTSxvQkFBVVAsTUFGRDtBQUdmaUosU0FBSyxvQkFBVWpKLE1BSEE7QUFJZjRMLGlCQUFhLG9CQUFVckssSUFKUjtBQUtmK0ssa0JBQWMsb0JBQVUvSztBQUxULEM7OztBQThIdkIsU0FBU3NLLE1BQVQsQ0FBZ0IvRSxHQUFoQixFQUFxQjJGLElBQXJCLEVBQTJCO0FBQ3ZCLFFBQUlBLFNBQVMsT0FBYixFQUFzQjtBQUNsQixlQUFPM0YsSUFBSXdELElBQUosQ0FBUyxVQUFDNUosQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVVELEVBQUUrTCxJQUFGLElBQVU5TCxFQUFFOEwsSUFBRixDQUFwQjtBQUFBLFNBQVQsQ0FBUDtBQUNIOztBQUVELFFBQUlBLFNBQVMsUUFBYixFQUF1QjtBQUNuQixlQUFPM0YsSUFBSXdELElBQUosQ0FBUyxVQUFDNUosQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVUrTCxLQUFLQyxLQUFMLENBQVdqTSxFQUFFa00sTUFBYixJQUF1QkYsS0FBS0MsS0FBTCxDQUFXaE0sRUFBRWlNLE1BQWIsQ0FBakM7QUFBQSxTQUFULENBQVA7QUFDSDtBQUNELFdBQU85RixJQUFJd0QsSUFBSixDQUNILFVBQVM1SixDQUFULEVBQVlDLENBQVosRUFBZTtBQUNYLFlBQUlELEVBQUUrTCxJQUFGLElBQVU5TCxFQUFFOEwsSUFBRixDQUFkLEVBQXVCO0FBQ25CLG1CQUFPLENBQUMsQ0FBUjtBQUNILFNBRkQsTUFFTyxJQUFJL0wsRUFBRStMLElBQUYsSUFBVTlMLEVBQUU4TCxJQUFGLENBQWQsRUFBdUI7QUFDMUIsbUJBQU8sQ0FBUDtBQUNILFNBRk0sTUFFQTtBQUNILG1CQUFPLENBQVA7QUFDSDtBQUNKLEtBVEUsQ0FBUDtBQVdIOztlQUVjOUIsUzs7Ozs7Ozs7O2tDQXBKVEEsUzs7a0NBK0hHa0IsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklUOzs7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztJQUVNZ0IsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ0ZuTyxLLEdBQVE7QUFDSmlGLFlBQU07QUFERixLLFFBaUhSbUosVTs7OzthQU1BM0ksVTs7OzthQWFBNEksVzs7OzthQUdBQyxXOzs7Ozs7Ozs7NkJBekhTO0FBQ0wsYUFBTyxLQUFLdE8sS0FBTCxDQUFXaUYsSUFBWCxHQUNUO0FBQUE7QUFBQSxVQUFJLFdBQVcsbUJBQW1CLEtBQUs1RSxLQUFMLENBQVcwTCxRQUFYLEdBQXNCLHFCQUF0QixHQUE4QyxFQUFqRSxDQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxlQUFkO0FBQ0U7QUFDTyxrQkFBSyxNQURaO0FBRU8sdUJBQVUsdUJBRmpCO0FBR08sa0JBQUssUUFIWjtBQUlPLHNCQUFVLEtBQUt1QyxXQUp0QjtBQUtPLDBCQUFjLElBQUlOLElBQUosQ0FBUyxLQUFLM04sS0FBTCxDQUFXdUssS0FBWCxDQUFpQnNELE1BQTFCLEVBQWtDSyxrQkFBbEMsRUFMckI7QUFERixTQURGO0FBU0U7QUFBQTtBQUFBO0FBQ0U7QUFDTyxrQkFBSyxNQURaO0FBRU8sdUJBQVUsdUJBRmpCO0FBR08sa0JBQUssT0FIWjtBQUlPLHNCQUFVLEtBQUtELFdBSnRCO0FBS08sMEJBQWMsS0FBS2pPLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUJLLEtBTHRDO0FBREYsU0FURjtBQWlCRTtBQUFBO0FBQUE7QUFDRTtBQUNPLGtCQUFLLE1BRFo7QUFFTyx1QkFBVSx1QkFGakI7QUFHTyxrQkFBSyxPQUhaO0FBSU8sc0JBQVUsS0FBS3FELFdBSnRCO0FBS08sMEJBQWMsS0FBS2pPLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUJwSixLQUx0QztBQURGLFNBakJGO0FBeUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNRLHlCQUFVLHVCQURsQjtBQUVRLG9CQUFLLE1BRmI7QUFHUSxzQkFBUSxLQUFLOE0sV0FIckI7QUFJUSw0QkFBYyxLQUFLak8sS0FBTCxDQUFXdUssS0FBWCxDQUFpQjRELElBSnZDO0FBS0csaUJBQUtuTyxLQUFMLENBQVdrTixLQUFYLENBQWlCNUwsR0FBakIsQ0FBcUI7QUFBQSxxQkFDbkI7QUFBQTtBQUFBLGtCQUFRLEtBQUs2TSxJQUFiLEVBQW1CLE9BQU9BLElBQTFCO0FBQ0dBO0FBREgsZUFEbUI7QUFBQSxhQUFyQjtBQUxIO0FBREYsU0F6QkY7QUFxQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ1EseUJBQVUsdUJBRGxCO0FBRVEsb0JBQUssUUFGYjtBQUdRLHNCQUFRLEtBQUtGLFdBSHJCO0FBSVEsNEJBQWMsS0FBS2pPLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUI2RCxNQUp2QztBQUtHLGlCQUFLcE8sS0FBTCxDQUFXd0IsSUFBWCxDQUFnQjZNLE9BQWhCLENBQXdCL00sR0FBeEIsQ0FBNEI7QUFBQSxxQkFDMUI7QUFBQTtBQUFBLGtCQUFRLEtBQUs4TSxPQUFPdk0sR0FBcEIsRUFBeUIsT0FBT3VNLE9BQU9FLFFBQXZDO0FBQ0dGLHVCQUFPRTtBQURWLGVBRDBCO0FBQUEsYUFBNUI7QUFMSDtBQURGLFNBckNGO0FBaURFO0FBQUE7QUFBQSxZQUFJLFdBQVUsOEJBQWQ7QUFDRTtBQUFBO0FBQUEsY0FBUyxZQUFULEVBQWdCLFlBQWhCLEVBQXVCLE9BQU8sRUFBRUMsT0FBTyxLQUFULEVBQTlCO0FBQ0UsMERBQU0sU0FBUyxLQUFLUixVQUFwQixFQUFnQyxNQUFLLEdBQXJDLEdBREY7QUFFRSwwREFBTSxTQUFTLEtBQUszSSxVQUFwQixFQUFnQyxNQUFLLE9BQXJDO0FBRkY7QUFERixTQWpERjtBQXVERTtBQUFBO0FBQUEsWUFBSSxXQUFVLFdBQWQ7QUFDRTtBQUNPLHlCQUFhLEtBQUtwRixLQUFMLENBQVc2TCxhQUFYLENBQXlCQyxTQUQ3QztBQUVPLGtCQUFLLFVBRlo7QUFHTyxxQkFBUyxLQUFLOUwsS0FBTCxDQUFXMEwsUUFIM0I7QUFJTywwQkFBWSxLQUFLMUwsS0FBTCxDQUFXdUMsR0FKOUI7QUFERjtBQXZERixPQURTLEdBaUVUO0FBQUE7QUFBQSxVQUFJLFdBQVcsbUJBQW1CLEtBQUt2QyxLQUFMLENBQVcwTCxRQUFYLEdBQXNCLHFCQUF0QixHQUE4QyxFQUFqRSxDQUFmLEVBQXFGLGVBQWUsS0FBS3RHLFVBQXpHO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxlQUFkO0FBQ0csY0FBSXVJLElBQUosQ0FBUyxLQUFLM04sS0FBTCxDQUFXdUssS0FBWCxDQUFpQnNELE1BQTFCLEVBQWtDSyxrQkFBbEMsRUFESDtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZ0JBQWY7QUFDRyxtQkFBTyxpQkFBU00sUUFBVCxDQUFrQixLQUFLeE8sS0FBTCxDQUFXdUssS0FBWCxDQUFpQnNELE1BQW5DLENBQVAsR0FBb0Q7QUFEdkQ7QUFGRixTQURGO0FBT0U7QUFBQTtBQUFBO0FBQ0csZUFBSzdOLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUJLO0FBRHBCLFNBUEY7QUFVRTtBQUFBO0FBQUE7QUFDRyw0REFBVSxXQUFVLGNBQXBCLEVBQW1DLE9BQU8sS0FBSzVLLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUJwSixLQUEzRDtBQURILFNBVkY7QUFhRTtBQUFBO0FBQUE7QUFDRyxlQUFLbkIsS0FBTCxDQUFXdUssS0FBWCxDQUFpQjREO0FBRHBCLFNBYkY7QUFnQkU7QUFBQTtBQUFBO0FBQ0csZUFBS25PLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUI2RDtBQURwQixTQWhCRjtBQW1CRTtBQUFBO0FBQUEsWUFBSSxXQUFVLGdCQUFkO0FBQ0Usd0RBQU0sU0FBUyxLQUFLaEosVUFBcEIsRUFBZ0MsTUFBSyxRQUFyQztBQURGLFNBbkJGO0FBc0JFO0FBQUE7QUFBQSxZQUFJLFdBQVUsV0FBZDtBQUNFO0FBQ08seUJBQWEsS0FBS3BGLEtBQUwsQ0FBVzZMLGFBQVgsQ0FBeUJDLFNBRDdDO0FBRU8sa0JBQUssVUFGWjtBQUdPLHFCQUFTLEtBQUs5TCxLQUFMLENBQVcwTCxRQUgzQjtBQUlPLDBCQUFZLEtBQUsxTCxLQUFMLENBQVd1QyxHQUo5QjtBQURGO0FBdEJGLE9BakVFO0FBZ0dIOzs7dURBRWtCO0FBQ2YsV0FBS25DLFFBQUwsQ0FBYztBQUNWd0UsY0FBTSxDQUFDLEtBQUtqRixLQUFMLENBQVdpRjtBQURSLE9BQWQ7QUFHSDs7O3VEQUVrQjtBQUNmLFVBQUksS0FBS2pGLEtBQUwsQ0FBV2lGLElBQWYsRUFBcUI7QUFDakIsYUFBSzVFLEtBQUwsQ0FBVzZNLFdBQVgsQ0FBdUIsS0FBS3RDLEtBQTVCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS0EsS0FBTCxHQUFhaEYsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS3hGLEtBQUwsQ0FBV3VLLEtBQTdCLENBQWI7QUFDSDs7QUFHRCxXQUFLbkssUUFBTCxDQUFjO0FBQ1Z3RSxjQUFNLENBQUMsS0FBS2pGLEtBQUwsQ0FBV2lGO0FBRFIsT0FBZDtBQUdIOzs7d0RBRW1CLENBQ25COzs7c0RBRWN1SSxLLEVBQVU7QUFDckIsVUFBSTFJLFFBQVEwSSxNQUFNekksTUFBTixDQUFhaEUsSUFBekI7QUFDQSxXQUFLNkosS0FBTCxDQUFXOUYsS0FBWCxJQUFvQjBJLE1BQU16SSxNQUFOLENBQWE3RCxLQUFqQztBQUNIOzs7O0VBM0lrQixnQkFBTWdFLFM7O0FBQXZCaUosUSxDQUtLOU0sUyxHQUFZO0FBQ2Z1QixPQUFLLG9CQUFVa00sTUFEQTtBQUVmbEUsU0FBTyxvQkFBVXRKLE1BRkY7QUFHZjRLLGlCQUFlLG9CQUFVNUssTUFIVjtBQUlmeUssWUFBVSxvQkFBVTVHLElBSkw7QUFLZnRELFFBQU0sb0JBQVVQLE1BTEQ7QUFNZjRMLGVBQWEsb0JBQVVySyxJQU5SO0FBT2YwSyxTQUFPLG9CQUFVN0c7QUFQRixDO2VBMklSeUgsUTs7Ozs7Ozs7O2dDQWhKVEEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUE47Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1ZLFM7Ozs7Ozs7Ozs7O3dDQUNrQjtBQUNoQixXQUFLdE8sUUFBTCxDQUFjO0FBQ1ZELGNBQU0sS0FBS3dPLFlBQUwsQ0FBa0IsS0FBSzNPLEtBQUwsQ0FBV0csSUFBN0I7QUFESSxPQUFkO0FBR0g7Ozs2QkFDUTtBQUNMLFVBQUksQ0FBQyxLQUFLUixLQUFWLEVBQWlCLE9BQU8sSUFBUDtBQUNqQixhQUNJO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLFdBQVUsaUJBQWhCO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQU8sV0FBVSxPQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLFlBQWQ7QUFBQTtBQUFBLGVBREY7QUFJRTtBQUFBO0FBQUEsa0JBQUksV0FBVSxXQUFkO0FBQ0kscUJBQUtBLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQnlPO0FBRHBCO0FBSkYsYUFERjtBQVNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLFlBQWQ7QUFBQTtBQUFBLGVBREY7QUFJRTtBQUFBO0FBQUEsa0JBQUksV0FBVSxXQUFkO0FBQUE7QUFBQTtBQUpGLGFBVEY7QUFpQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsWUFBZDtBQUFBO0FBQUEsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLFdBQWQ7QUFDSSxxQkFBS2pQLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQjBPO0FBRHBCO0FBSkY7QUFqQkY7QUFERjtBQUZGLE9BREo7QUFpQ0g7OztpQ0FFWTFPLEksRUFBTTtBQUNmLFVBQUlxTSxNQUFNc0MsUUFBVjs7QUFFQTNPLFdBQUs0TyxPQUFMLENBQWEsaUJBQVM7QUFDbEIsWUFBSXZDLE1BQU1tQixLQUFLQyxLQUFMLENBQVdyRCxNQUFNc0QsTUFBakIsQ0FBVixFQUNJckIsTUFBTWpDLE1BQU1zRCxNQUFaO0FBQ1AsT0FIRDtBQUlBLGFBQU87QUFDSGUsZUFBT3pPLEtBQUtXLE1BRFQ7QUFFSCtOLGdCQUFRLElBQUlsQixJQUFKLENBQVNuQixHQUFULEVBQWMwQixrQkFBZDtBQUZMLE9BQVA7QUFJSDs7Ozs7O0FBR0xRLFVBQVUxTixTQUFWLEdBQXNCO0FBQ2xCYixRQUFNLG9CQUFVa0c7QUFERSxDQUF0Qjs7ZUFLZXFJLFM7Ozs7Ozs7OztnQ0E5RFRBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pOOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTU0sVzs7Ozs7Ozs7Ozs7Ozs7b01BQ0ZyUCxLLEdBQVE7QUFDSndDLG9CQUFRLEtBREo7QUFFSkMsb0JBQVE7QUFGSixTLFFBS1I4RCxZLEdBQWU7QUFDWCtJLG1CQUFPO0FBREksUyxRQWlDZkMsWTs7OztpQkEwREE3TSxNOzs7Ozs7Ozs7NENBN0VvQjtBQUNoQixpQkFBSzhNLGFBQUwsQ0FBbUIsS0FBS25QLEtBQUwsQ0FBV29QLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCM08sSUFBM0M7QUFDSDs7O2tEQUV5Qm1ILFMsRUFBVztBQUFBOztBQUNqQyxnQkFBSSxLQUFLN0gsS0FBTCxDQUFXa0ssR0FBWCxJQUFrQnJDLFVBQVVxQyxHQUE1QixJQUFtQyxLQUFLbEssS0FBTCxDQUFXa0ssR0FBWCxDQUFleEosSUFBZixLQUF3Qm1ILFVBQVVxQyxHQUFWLENBQWN4SixJQUE3RSxFQUFtRjtBQUMvRSxxQkFBS04sUUFBTCxDQUFjO0FBQ1YrQiw0QkFBUTtBQURFLGlCQUFkO0FBR0FtTiwyQkFBVztBQUFBLDJCQUFNLE9BQUtILGFBQUwsQ0FBbUJ0SCxVQUFVcUMsR0FBVixDQUFjQyxHQUFqQyxDQUFOO0FBQUEsaUJBQVgsRUFBd0QsR0FBeEQ7QUFDSDs7QUFFRCxnQkFBSXRDLFVBQVV5QyxNQUFWLElBQW9CLEtBQUt0SyxLQUFMLENBQVdrSyxHQUFuQyxFQUF3QztBQUNwQyxxQkFBSzlKLFFBQUwsQ0FBYztBQUNWd08sMkJBQU8sS0FBS00sWUFBTCxDQUFrQnJILFVBQVV5QyxNQUE1QjtBQURHLGlCQUFkO0FBR0g7QUFDSjs7OzJEQUVla0QsUyxFQUFXN00sSSxFQUFTO0FBQ2hDQSxtQkFBT0EsT0FBTUEsS0FBS29HLFdBQUwsRUFBTixHQUEyQixLQUFLL0csS0FBTCxDQUFXa0ssR0FBWCxDQUFldkosSUFBZixDQUFvQixDQUFwQixDQUFsQztBQUNBLGdCQUFJbUIsU0FBUyxLQUFLOUIsS0FBTCxDQUFXd0IsSUFBWCxDQUFnQk0sTUFBaEIsQ0FBdUJuQixJQUF2QixDQUFiO0FBQ0EsZ0JBQUkySixTQUFTa0QsVUFBVTFHLE1BQVYsQ0FBaUI7QUFBQSx1QkFBU3lELE1BQU01SixJQUFOLEtBQWVBLElBQXhCO0FBQUEsYUFBakIsQ0FBYjtBQUNBLGlCQUFLUCxRQUFMLENBQWM7QUFDVmtLLHdCQUFRQTtBQURFLGFBQWQ7QUFHQSxtQkFBT0UsZ0JBQWdCRixNQUFoQixFQUF3QnhJLE1BQXhCLENBQVA7QUFDSDs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBS25DLEtBQUwsQ0FBVzRQLEtBQWYsRUFBc0IsT0FBTyx1REFBVSxJQUFHLEdBQWIsR0FBUDtBQUN0QixnQkFBSSxDQUFDLEtBQUt2UCxLQUFMLENBQVdrSyxHQUFoQixFQUFxQixPQUFRO0FBQUE7QUFBQSxrQkFBUSxPQUFPLEVBQUVzRixXQUFXLHFCQUFiLEVBQWY7QUFBQTtBQUFzRDtBQUF0RCxhQUFSO0FBQ3JCLG1CQUNJO0FBQUE7QUFBQSxrQkFBUSxPQUFPLEtBQUs3UCxLQUFMLENBQVd3QyxNQUFYLEdBQW1CLEtBQUtuQyxLQUFMLENBQVdrSyxHQUFYLENBQWV4SixJQUFsQyxHQUF5QyxFQUF4RCxFQUE0RCxLQUFLLEtBQUtWLEtBQUwsQ0FBV2tLLEdBQVgsQ0FBZXhKLElBQWhGLEVBQXNGLE9BQU8sRUFBRThPLFdBQVcscUJBQWIsRUFBN0Y7QUFDRTtBQUFBO0FBQUEsc0JBQWUsUUFBUSxLQUFLN1AsS0FBTCxDQUFXd0MsTUFBbEM7QUFDRSx3RUFERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSw4QkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLGtDQUFLLElBQUcsSUFBUjtBQUNFLHFGQUFhLE1BQU0sS0FBS25DLEtBQUwsQ0FBV2tLLEdBQVgsQ0FBZXZKLElBQWxDLEVBQXdDLFFBQVEsS0FBSzBCLE1BQXJELEVBQTZELFFBQVEsS0FBSzFDLEtBQUwsQ0FBV3lDLE1BQWhGO0FBREYsNkJBREY7QUFJRTtBQUFBO0FBQUEsa0NBQUssSUFBRyxJQUFSO0FBQ0Usc0VBQUksV0FBVSxXQUFkO0FBREYsNkJBSkY7QUFPRTtBQUFBO0FBQUEsa0NBQUssSUFBRyxJQUFSLEVBQWEsSUFBRyxHQUFoQjtBQUNFO0FBQ1UsMENBQU0sS0FBS3pDLEtBQUwsQ0FBV2lQLEtBRDNCO0FBRVUsMkNBQU0sS0FGaEI7QUFHVSw0Q0FBTyxLQUhqQjtBQUlVLDBDQUFNLEtBQUtqUCxLQUFMLENBQVd5QyxNQUozQjtBQUtVLDJDQUFPLEtBQUtwQyxLQUFMLENBQVdrSyxHQUFYLENBQWUvSSxLQUxoQztBQURGLDZCQVBGO0FBZUU7QUFBQTtBQUFBLGtDQUFLLElBQUcsSUFBUixFQUFhLElBQUcsR0FBaEIsRUFBb0IsV0FBVSxlQUE5QjtBQUNFLHFGQUFXLE1BQU0sS0FBS3hCLEtBQUwsQ0FBVzJLLE1BQTVCO0FBREY7QUFmRix5QkFERjtBQW9CRSw4REFBSSxXQUFVLFdBQWQsR0FwQkY7QUFxQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLHNDQUEyQixnQkFBZSxnQkFBMUMsRUFBMkQsd0JBQXdCLEdBQW5GLEVBQXdGLHdCQUF3QixHQUFoSDtBQUNFO0FBQ1csNkNBQUssS0FBSzNLLEtBQUwsQ0FBV3lDLE1BRDNCO0FBRVcsZ0RBQVEsS0FBS3pDLEtBQUwsQ0FBVzJLLE1BRjlCO0FBR1cscURBQWEsS0FBS3RLLEtBQUwsQ0FBVzZNLFdBSG5DO0FBSVcsc0RBQWMsS0FBSzdNLEtBQUwsQ0FBV3VOLFlBSnBDO0FBS1csOENBQU0sS0FBS3ZOLEtBQUwsQ0FBV3dCLElBTDVCO0FBTVcsK0NBQU8sS0FBS3hCLEtBQUwsQ0FBV2tLLEdBQVgsQ0FBZWdELEtBQWYsQ0FBcUIsS0FBS3ZOLEtBQUwsQ0FBV3lDLE1BQWhDLENBTmxCO0FBREY7QUFERjtBQURGO0FBckJGO0FBRkY7QUFERixhQURKO0FBMkNIOzs7cURBRVM0RixHLEVBQVE7QUFDZCxnQkFBSSxLQUFLckksS0FBTCxDQUFXeUMsTUFBWCxLQUFzQjRGLEdBQTFCLEVBQStCO0FBQy9CLGdCQUFJc0MsU0FBUyxLQUFLNEUsWUFBTCxDQUFrQixLQUFLbFAsS0FBTCxDQUFXc0ssTUFBN0IsRUFBcUN0QyxHQUFyQyxDQUFiO0FBQ0EsaUJBQUs1SCxRQUFMLENBQWM7QUFDVmdDLHdCQUFRNEYsR0FERTtBQUVWNEcsdUJBQU90RTtBQUZHLGFBQWQ7QUFJSDs7O3NDQUVhNUosSSxFQUFNO0FBQUE7O0FBQ2hCLGlCQUFLVixLQUFMLENBQVd5UCxPQUFYLEdBQ0tqUCxJQURMLENBQ1UsZ0JBQVE7QUFDVixvQkFBSWtQLGFBQWFsTyxLQUFLd0osSUFBTCxDQUFVbEUsTUFBVixDQUFpQjtBQUFBLDJCQUFPcEcsU0FBU3dKLElBQUlDLEdBQXBCO0FBQUEsaUJBQWpCLEVBQTBDLENBQTFDLENBQWpCO0FBQ0Esb0JBQUksQ0FBQ3VGLFVBQUwsRUFBaUI7QUFDYiwyQkFBS3RQLFFBQUwsQ0FBYztBQUNWbVAsK0JBQU87QUFERyxxQkFBZDtBQUdILGlCQUpELE1BSU87QUFDSCwyQkFBTyxPQUFLdlAsS0FBTCxDQUFXaUssU0FBWCxDQUFxQnlGLFdBQVc3TixHQUFoQyxDQUFQO0FBQ0g7QUFFSixhQVhMLEVBWUtyQixJQVpMLENBWVUsWUFBTTtBQUNSLHVCQUFLSixRQUFMLENBQWM7QUFDVitCLDRCQUFRO0FBREUsaUJBQWQ7QUFHSCxhQWhCTCxFQWlCS3dOLEtBakJMLENBaUJXLFVBQUNDLEdBQUQsRUFBUztBQUNaQyx3QkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EsdUJBQUt4UCxRQUFMLENBQWM7QUFDVm1QLDJCQUFPO0FBREcsaUJBQWQ7QUFHSCxhQXRCTDtBQXVCSDs7Ozs7O0FBbElDUCxXLENBVUtoTyxTLEdBQVk7QUFDZk4sVUFBTSxvQkFBVXlFLE1BREQ7QUFFZitFLFNBQUssb0JBQVVqSixNQUZBO0FBR2ZtTyxXQUFPLG9CQUFVbk8sTUFIRjtBQUlmTyxVQUFNLG9CQUFVUCxNQUpEO0FBS2ZxSixZQUFRLG9CQUFVakUsS0FMSDtBQU1mb0osYUFBUyxvQkFBVWpOLElBTko7QUFPZnlILGVBQVcsb0JBQVV6SDtBQVBOLEM7OztBQTJIdkIsU0FBU1IsUUFBVCxDQUFrQnJDLEtBQWxCLEVBQXlCeUssUUFBekIsRUFBbUM7QUFDL0IsUUFBSUYsTUFBTXZLLE1BQU1xTCxJQUFOLENBQVdsRSxNQUFYLENBQWtCO0FBQUEsZUFBT29ELElBQUlDLEdBQUosS0FBWUMsU0FBU2dGLEtBQVQsQ0FBZUMsTUFBZixDQUFzQjNPLElBQXpDO0FBQUEsS0FBbEIsRUFBaUUsQ0FBakUsQ0FBVjtBQUNBLFFBQUk0SixTQUFTM0ssTUFBTTJLLE1BQU4sQ0FBYXhELE1BQWIsQ0FBb0I7QUFBQSxlQUFTeUQsTUFBTUwsR0FBTixLQUFjQSxJQUFJckksR0FBM0I7QUFBQSxLQUFwQixDQUFiO0FBQ0EsUUFBSWtHLE1BQU11QyxPQUFPckYsT0FBUCxFQUFWO0FBQ0E4QyxRQUFJZ0gsT0FBSixDQUFZLFVBQUN4RSxLQUFELEVBQVFoSSxHQUFSO0FBQUEsZUFBZ0JnSSxNQUFNaEksR0FBTixHQUFZQSxHQUE1QjtBQUFBLEtBQVo7QUFDQSxXQUFPO0FBQ0gySCxhQUFLQSxHQURGO0FBRUhJLGdCQUFRdkMsR0FGTDtBQUdIdkcsY0FBTTdCLE1BQU02QjtBQUhULEtBQVA7QUFLSDs7QUFFRCxTQUFTaUIsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDM0IsV0FBTztBQUNIK00saUJBQVM7QUFBQSxtQkFBTS9NLFNBQVMsb0JBQVQsQ0FBTjtBQUFBLFNBRE47QUFFSHVILG1CQUFXLG1CQUFDUSxFQUFEO0FBQUEsbUJBQVEvSCxTQUFTLDJCQUFlK0gsRUFBZixDQUFULENBQVI7QUFBQSxTQUZSO0FBR0hvQyxxQkFBYSxxQkFBQ3RDLEtBQUQ7QUFBQSxtQkFBVzdILFNBQVMscUJBQVM2SCxLQUFULENBQVQsQ0FBWDtBQUFBLFNBSFY7QUFJSGdELHNCQUFjLHNCQUFDeEYsR0FBRDtBQUFBLG1CQUFTckYsU0FBUyx5QkFBYXFGLEdBQWIsQ0FBVCxDQUFUO0FBQUE7QUFKWCxLQUFQO0FBTUg7O2VBRWMseUJBQVEvRixRQUFSLEVBQWtCUyxXQUFsQixFQUErQnVNLFdBQS9CLEM7Ozs7O0FBRWYsU0FBU3hFLGVBQVQsQ0FBeUJGLE1BQXpCLEVBQWlDeEksTUFBakMsRUFBeUM7QUFDckMsUUFBSSxDQUFDQSxNQUFELElBQVcsQ0FBQ3dJLE1BQWhCLEVBQXdCLE9BQU8sRUFBUDtBQUN4QixRQUFJSSxTQUFTLGlCQUFHQyxPQUFILENBQVdMLE9BQU9oSixHQUFQLENBQVc7QUFBQSxlQUFTaUosTUFBTUssS0FBZjtBQUFBLEtBQVgsQ0FBWCxFQUE2QyxpQkFBR0MsS0FBSCxDQUFTL0ksT0FBT2hCLE1BQWhCLENBQTdDLENBQWI7QUFDQSxXQUFPeUUsT0FBT3VGLElBQVAsQ0FBWUosTUFBWixFQUFvQnBKLEdBQXBCLENBQXdCLGVBQU87QUFDbEMsZUFBTztBQUNIc0osbUJBQU85SSxPQUFPa0csR0FBUCxLQUFlbEcsT0FBT2tHLEdBQVAsRUFBWW5ILEtBRC9CO0FBRUgrTixtQkFBT2xFLE9BQU8xQyxHQUFQO0FBRkosU0FBUDtBQUlILEtBTE0sQ0FBUDtBQU1IOzs7Ozs7OztrQ0FyS0tnSCxXOztrQ0FxSUdoTixROztrQ0FZQVMsVzs7a0NBV0ErSCxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5S1Q7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNdUYsSTs7Ozs7Ozs7Ozs7NENBQ2tCO0FBQ2hCLGlCQUFLL1AsS0FBTCxDQUFXeVAsT0FBWDtBQUNIOzs7aUNBRVE7QUFDTCxtQkFDTTtBQUFBO0FBQUE7QUFDRSxvRUFBVSxVQUFVLEtBQUt6UCxLQUFMLENBQVdnUSxRQUEvQixHQURGO0FBRUUscUVBQVcsVUFBVSxLQUFLaFEsS0FBTCxDQUFXZ1EsUUFBaEM7QUFGRixhQUROO0FBTUg7Ozs7OztBQUdMRCxLQUFLL08sU0FBTCxHQUFpQjtBQUNieU8sYUFBUyxvQkFBVWpOLElBQVYsQ0FBZStELFVBRFg7QUFFYjBKLGFBQVMsb0JBQVV6TixJQUFWLENBQWUrRDtBQUZYLENBQWpCOztBQUtBLFNBQVN2RSxRQUFULENBQWtCckMsS0FBbEIsRUFBeUI7QUFDckIsV0FBTztBQUNINkIsY0FBTTdCLE1BQU02QixJQURUO0FBRUh3SixjQUFNckwsTUFBTXFMLElBRlQ7QUFHSGdGLGtCQUFVclEsTUFBTXVRLE1BQU4sQ0FBYUY7QUFIcEIsS0FBUDtBQUtIOztBQUVELFNBQVN2TixXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUMzQixXQUFPO0FBQ0grTSxpQkFBUztBQUFBLG1CQUFNL00sU0FBUyxvQkFBVCxDQUFOO0FBQUEsU0FETjtBQUVIdU4saUJBQVMsaUJBQUN6TyxJQUFEO0FBQUEsbUJBQVVrQixTQUFTLGtCQUFRbEIsSUFBUixDQUFULENBQVY7QUFBQTtBQUZOLEtBQVA7QUFJSDs7QUFFRCxJQUFNMk8sZ0JBQWdCLHlCQUFRbk8sUUFBUixFQUFrQlMsV0FBbEIsRUFBK0JzTixJQUEvQixDQUF0QjtlQUNlSSxhOzs7Ozs7Ozs7a0NBcENUSixJOztrQ0FvQkcvTixROztrQ0FRQVMsVzs7a0NBT0gwTixhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q047Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRU1DLFM7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsYUFDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsWUFBUSxVQUFVLEtBQUtwUSxLQUFMLENBQVdnUSxRQUE3QjtBQUNFLGlFQUFPLFdBQVAsRUFBYSxNQUFLLEdBQWxCLEVBQXNCLDRCQUF0QixHQURGO0FBRUUsaUVBQU8sTUFBSyxhQUFaLEVBQTBCLGdDQUExQixHQUZGO0FBR0UsaUVBQU8sTUFBSyxNQUFaLEVBQW1CLDZCQUFuQixHQUhGO0FBSUUsaUVBQU8sTUFBSyxVQUFaLEVBQXVCLDRCQUF2QjtBQUpGO0FBREYsT0FESjtBQVNIOzs7Ozs7ZUFHVUksUzs7Ozs7Ozs7O2dDQWRUQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSTjs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1DLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNGMVEsSyxHQUFRO0FBQ0oyUSxjQUFRLEtBREo7QUFFSkMsc0JBQWdCO0FBRlosSyxRQXVEUmxPLE07Ozs7YUFJQW1PLGM7Ozs7Ozs7Ozs2QkF0RFM7QUFDTCxhQUNGO0FBQUE7QUFBQSxVQUFRLGdCQUFSLEVBQW1CLE9BQU0sU0FBekIsRUFBbUMsYUFBbkM7QUFDSTtBQUFBO0FBQUEsWUFBZSxJQUFHLEdBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBREo7QUFNSSxtRUFBZSxXQUFmLEVBQXFCLFNBQVMsS0FBS25PLE1BQW5DLEdBTko7QUFPSTtBQUFBO0FBQUEsWUFBVSxRQUFTLEtBQUsxQyxLQUFMLENBQVcyUSxNQUE5QixFQUF1QyxZQUF2QztBQUNFO0FBQUE7QUFBQSxjQUFLLFlBQUw7QUFDRTtBQUFBO0FBQUEsZ0JBQWEsT0FBTSxNQUFuQixFQUEwQixJQUFHLG9CQUE3QixFQUFrRCxRQUFRLEtBQUtFLGNBQS9ELEVBQStFLFFBQVEsS0FBSzdRLEtBQUwsQ0FBVzRRLGNBQWxHO0FBQ0U7QUFBQTtBQUFBLGtCQUFnQixTQUFoQjtBQUFBO0FBQUEsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBYyxTQUFTLEtBQUtDLGNBQTVCO0FBQ0kscUJBQUt4USxLQUFMLENBQVdnTCxJQUFYLEdBQWtCLEtBQUtoTCxLQUFMLENBQVdnTCxJQUFYLENBQWdCMUosR0FBaEIsQ0FBb0I7QUFBQSx5QkFDdEM7QUFBQTtBQUFBLHNCQUFlLFdBQVUsZUFBekIsRUFBeUMsS0FBTTRJLElBQUlySSxHQUFuRCxFQUF5RCxJQUFLLFdBQVdxSSxJQUFJQyxHQUE3RTtBQUNRRCx3QkFBSXhKO0FBRFosbUJBRHNDO0FBQUEsaUJBQXBCLENBQWxCLEdBSUssSUFMVDtBQU1FLDBFQUFjLGFBQWQsR0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUpGLGFBREY7QUFpQkE7QUFBQTtBQUFBLGdCQUFlLElBQUcsTUFBbEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFqQkEsV0FERjtBQXdCQTtBQUFBO0FBQUEsY0FBSyxZQUFMLEVBQVksV0FBVSxTQUF0QjtBQUNFO0FBQUE7QUFBQSxnQkFBZSxJQUFHLFNBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBREY7QUFNRTtBQUFBO0FBQUEsZ0JBQWUsSUFBRyxVQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQU5GO0FBeEJBO0FBUEosT0FERTtBQStDSDs7O21EQUVjO0FBQ1gsV0FBS04sUUFBTCxDQUFjLHVCQUFZLFFBQVosQ0FBZDtBQUNIOzs7MkRBRXNCO0FBQ25CLFdBQUtBLFFBQUwsQ0FBYyx1QkFBWSxnQkFBWixDQUFkO0FBQ0g7Ozs7OztBQUdMLFNBQVM0QixRQUFULENBQWtCckMsS0FBbEIsRUFBeUI7QUFDckIsU0FBTztBQUNIcUwsVUFBTXJMLE1BQU1xTDtBQURULEdBQVA7QUFHSDs7ZUFFYyx5QkFBUWhKLFFBQVIsRUFBa0JxTyxRQUFsQixDOzs7Ozs7Ozs7O2dDQXZFVEEsUTs7Z0NBaUVHck8sUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVUOzs7O0FBQ0E7O0lBQVl5TyxFOztBQUNaOzs7Ozs7Ozs7Ozs7SUFFTUMsSzs7Ozs7Ozs7Ozs7NENBQ2tCO0FBQ2hCQyxzQkFBVUMsS0FBVixDQUFnQixJQUFoQjtBQUNIOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSSx1Q0FBSyxLQUFNLGFBQUNDLEVBQUQ7QUFBQSwyQkFBUSxPQUFLQSxFQUFMLEdBQVVBLEVBQWxCO0FBQUEsaUJBQVgsR0FESjtBQUdIOzs7Ozs7ZUFHVUgsSzs7OztBQUVmLFNBQVNDLFNBQVQsR0FBcUI7QUFDakIsUUFBSSxDQUFDLEtBQUszUSxLQUFMLENBQVdHLElBQWhCLEVBQ0k7QUFDSixRQUFNQSxPQUFPLEtBQUtILEtBQUwsQ0FBV0csSUFBeEI7O0FBRUEsUUFBTW9PLFFBQVEsRUFBZDtBQUNBLFFBQU1uSCxTQUFTLEVBQWY7QUFDQSxRQUFNMEosV0FBV3ZDLFFBQVFwTyxLQUFLVyxNQUE5Qjs7QUFFQSxRQUFNaVEsSUFBSU4sR0FDTE8sV0FESyxHQUVMQyxNQUZLLENBRUUsQ0FDSixDQURJLEVBQ0RSLEdBQUcvRCxHQUFILENBQU92TSxJQUFQLENBREMsQ0FGRixFQUtMMEssS0FMSyxDQUtDLENBQUMsQ0FBRCxFQUFJekQsTUFBSixDQUxELENBQVY7O0FBT0EsUUFBTWpHLFFBQVEsa0JBQVEsS0FBS25CLEtBQUwsQ0FBV21CLEtBQW5CLEtBQTZCLEVBQUMrUCxTQUFTLE9BQVYsRUFBbUJDLFdBQVcsT0FBOUIsRUFBM0M7O0FBR0EsUUFBTUMsYUFBYSxLQUFLcFIsS0FBTCxDQUFXbUIsS0FBWCxHQUNmc1AsR0FBR08sV0FBSCxDQUFlUCxHQUFHWSxjQUFsQixFQUNLSixNQURMLENBQ1ksQ0FBQyxDQUFELEVBQUk5USxLQUFLVyxNQUFULENBRFosRUFFSytKLEtBRkwsQ0FFVyxDQUFDMUosTUFBTStQLE9BQVAsRUFBZ0IvUCxNQUFNZ1EsU0FBdEIsQ0FGWCxDQURlLEdBSWZWLEdBQUdhLGVBQUgsQ0FBbUJiLEdBQUdjLGtCQUF0QixFQUNLTixNQURMLENBQ1ksQ0FBQyxDQUFELEVBQUk5USxLQUFLVyxNQUFULENBRFosQ0FKSjs7QUFPQSxRQUFNMFEsUUFBUWYsR0FDVGdCLE1BRFMsQ0FDRixLQUFLWixFQURILEVBRVRhLE1BRlMsQ0FFRixLQUZFLEVBR1RDLElBSFMsQ0FHSixTQUhJLEVBR08sZUFIUCxFQUlUQSxJQUpTLENBSUoscUJBSkksRUFJbUIsZUFKbkIsRUFLVEMsT0FMUyxDQUtELE1BTEMsRUFLTyxJQUxQLENBQWQ7O0FBT0EsUUFBTUMsTUFBTUwsTUFDUE0sU0FETyxDQUNHLEdBREgsRUFFUDNSLElBRk8sQ0FFRkEsSUFGRSxFQUdQNFIsS0FITyxHQUlQTCxNQUpPLENBSUEsR0FKQSxFQUtQQyxJQUxPLENBS0YsV0FMRSxFQUtXLFVBQVNLLENBQVQsRUFBWWpNLENBQVosRUFBZTtBQUM5QixlQUFPLGVBQWVBLElBQUkrSyxRQUFuQixHQUE4QixNQUFyQztBQUNILEtBUE8sQ0FBWjs7QUFTQWUsUUFDS0gsTUFETCxDQUNZLE1BRFosRUFFS0UsT0FGTCxDQUVhLFFBRmIsRUFFdUIsSUFGdkIsRUFHS0QsSUFITCxDQUdVLE9BSFYsRUFHbUJiLFdBQVcsQ0FIOUIsRUFJS2EsSUFKTCxDQUlVLElBSlYsRUFJZ0IsQ0FKaEIsRUFLS0EsSUFMTCxDQUtVLElBTFYsRUFLZ0IsQ0FMaEIsRUFNS0EsSUFOTCxDQU1VLFFBTlYsRUFNb0IsQ0FOcEIsRUFPS0EsSUFQTCxDQU9VLFNBUFYsRUFPcUIsVUFBQ0ssQ0FBRDtBQUFBLGVBQU8sQ0FBQ0EsQ0FBRCxHQUNsQixDQURrQixHQUVsQixHQUZXO0FBQUEsS0FQckIsRUFVS0wsSUFWTCxDQVVVLEdBVlYsRUFVZXZLLE1BVmYsRUFXS3VLLElBWEwsQ0FXVSxNQVhWLEVBV2tCLFVBQVNLLENBQVQsRUFBWWpNLENBQVosRUFBZTtBQUN6QixlQUFPcUwsV0FBV3JMLENBQVgsQ0FBUDtBQUNILEtBYkwsRUFjS0wsVUFkTCxHQWVLdU0sS0FmTCxDQWVXO0FBQUEsZUFBTSxNQUFNMUYsS0FBSzJGLE1BQUwsS0FBZ0IsR0FBNUI7QUFBQSxLQWZYLEVBZ0JLQyxRQWhCTCxDQWdCYyxHQWhCZCxFQWlCS0MsSUFqQkwsQ0FpQlUzQixHQUFHNEIsU0FqQmIsRUFrQktWLElBbEJMLENBa0JVLEdBbEJWLEVBa0JlLFVBQUNLLENBQUQsRUFBTztBQUNkLGVBQU81SyxTQUFTMkosRUFBRWlCLENBQUYsQ0FBaEI7QUFDSCxLQXBCTCxFQXFCS0wsSUFyQkwsQ0FxQlUsUUFyQlYsRUFxQm9CLFVBQUNLLENBQUQ7QUFBQSxlQUFPakIsRUFBRWlCLENBQUYsQ0FBUDtBQUFBLEtBckJwQjtBQXVCSDs7Ozs7Ozs7a0NBL0VLdEIsSzs7a0NBY0dDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCVDs7OztBQUNBOzs7O0FBRUE7O0lBQVlGLEU7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUc2QixHQUFIOztJQUVNQyxROzs7Ozs7Ozs7Ozs7Ozs4TEF1Q0ZDLFc7Ozs7aUJBMEJBN0IsUzs7Ozs7Ozs7OzRDQXpEb0I7QUFDaEIsaUJBQUthLEtBQUwsR0FBYWYsR0FBR2dCLE1BQUgsQ0FBVSxLQUFLWixFQUFmLENBQWI7QUFDQSxpQkFBS0YsU0FBTDtBQUNIOzs7a0RBRXlCOUksUyxFQUFXO0FBQ2pDLGdCQUFJQSxVQUFVbEgsSUFBVixLQUFtQixLQUFLWCxLQUFMLENBQVdXLElBQWxDLEVBQXdDO0FBQ3BDLHFCQUFLNlEsS0FBTCxDQUFXTSxTQUFYLENBQXFCLEdBQXJCLEVBQTBCVyxNQUExQjtBQUNBLHFCQUFLOUIsU0FBTCxDQUFlOUksVUFBVTFILElBQXpCO0FBQ0g7QUFDRCxnQkFBSTBILFVBQVUxSCxJQUFkLEVBQW9CO0FBQ2hCLHFCQUFLcVMsV0FBTCxDQUFpQjNLLFVBQVUxSCxJQUEzQjtBQUNIO0FBQ0QsZ0JBQUkwSCxVQUFVMUcsS0FBZCxFQUFxQjtBQUNqQjtBQUNIO0FBQ0o7OztpQ0FFUTtBQUFBOztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNFO0FBQ0ssNkJBQVEsZUFEYjtBQUVLLHlDQUFvQixlQUZ6QjtBQUdLLCtCQUFVLFlBSGY7QUFJSyx5QkFBTSxhQUFDMFAsRUFBRDtBQUFBLCtCQUFRLE9BQUtBLEVBQUwsR0FBVUEsRUFBbEI7QUFBQSxxQkFKWDtBQURGLGFBREo7QUFVSDs7OzBEQUVjMVEsSSxFQUFTO0FBQUE7O0FBQ3BCLGdCQUFJdVMsTUFBTWpDLEdBQUdnQixNQUFILENBQVUsS0FBS1osRUFBZixDQUFWOztBQUVBO0FBQ0EsaUJBQUtFLENBQUwsR0FBU04sR0FDSk8sV0FESSxHQUVKQyxNQUZJLENBRUcsQ0FDSixDQURJLEVBQ0RSLEdBQUcvRCxHQUFILENBQU92TSxJQUFQLEVBQWEsVUFBQzZSLENBQUQ7QUFBQSx1QkFBT0EsRUFBRXBELEtBQVQ7QUFBQSxhQUFiLENBREMsQ0FGSCxFQUtKL0QsS0FMSSxDQUtFLENBQUMsQ0FBRCxFQUFJLEtBQUt6RCxNQUFULENBTEYsQ0FBVDs7QUFPQTtBQUNBc0wsZ0JBQUlaLFNBQUosQ0FBYyxTQUFkLEVBQ0szUixJQURMLENBQ1VBLElBRFYsRUFFS3VGLFVBRkwsR0FFa0I7QUFGbEIsYUFHS3lNLFFBSEwsQ0FHYyxHQUhkLEVBSUtSLElBSkwsQ0FJVSxHQUpWLEVBSWUsVUFBQ0ssQ0FBRCxFQUFPO0FBQ2QsdUJBQU8sT0FBSzVLLE1BQUwsR0FBYyxPQUFLMkosQ0FBTCxDQUFPaUIsRUFBRXBELEtBQVQsQ0FBckI7QUFDSCxhQU5MLEVBT0srQyxJQVBMLENBT1UsUUFQVixFQU9vQixVQUFDSyxDQUFEO0FBQUEsdUJBQU8sT0FBS2pCLENBQUwsQ0FBT2lCLEVBQUVwRCxLQUFULElBQWtCLENBQXpCO0FBQUEsYUFQcEI7O0FBU0E4RCxnQkFBSVosU0FBSixDQUFjLFlBQWQsRUFDSzNSLElBREwsQ0FDVUEsSUFEVixFQUVLd1MsSUFGTCxDQUVVO0FBQUEsdUJBQUtYLEVBQUVwSCxLQUFQO0FBQUEsYUFGVjtBQUdIOzs7d0RBRVl6SyxJLEVBQVM7QUFBQTs7QUFDbEIsZ0JBQUksQ0FBQyxLQUFLSCxLQUFMLENBQVdHLElBQWhCLEVBQ0k7QUFDSkEsbUJBQU9BLFFBQVEsS0FBS0gsS0FBTCxDQUFXRyxJQUExQjs7QUFFQSxpQkFBS29PLEtBQUwsR0FBYSxHQUFiO0FBQ0EsaUJBQUtuSCxNQUFMLEdBQWMsR0FBZDs7QUFFQSxnQkFBTWpHLFFBQVEsa0JBQVEsS0FBS25CLEtBQUwsQ0FBV21CLEtBQW5CLEtBQTZCLEVBQUMrUCxTQUFTLE9BQVYsRUFBbUJDLFdBQVcsT0FBOUIsRUFBM0M7O0FBR0EsZ0JBQU1DLGFBQWEsS0FBS3BSLEtBQUwsQ0FBV21CLEtBQVgsR0FDbkJzUCxHQUFHTyxXQUFILENBQWVQLEdBQUdZLGNBQWxCLEVBQ0tKLE1BREwsQ0FDWSxDQUFDLENBQUQsRUFBSTlRLEtBQUtXLE1BQVQsQ0FEWixFQUVLK0osS0FGTCxDQUVXLENBQUMxSixNQUFNK1AsT0FBUCxFQUFnQi9QLE1BQU1nUSxTQUF0QixDQUZYLENBRG1CLEdBSWZWLEdBQUdhLGVBQUgsQ0FBbUJiLEdBQUdjLGtCQUF0QixFQUNLTixNQURMLENBQ1ksQ0FBQyxDQUFELEVBQUk5USxLQUFLVyxNQUFULENBRFosQ0FKSjs7QUFRQSxnQkFBTWdRLFdBQVcsS0FBS3ZDLEtBQUwsR0FBYXBPLEtBQUtXLE1BQW5DOztBQUdBLGlCQUFLaVEsQ0FBTCxHQUFTTixHQUNKTyxXQURJLEdBRUpDLE1BRkksQ0FFRyxDQUNKLENBREksRUFDRFIsR0FBRy9ELEdBQUgsQ0FBT3ZNLElBQVAsRUFBYSxVQUFDNlIsQ0FBRDtBQUFBLHVCQUFPQSxFQUFFcEQsS0FBVDtBQUFBLGFBQWIsQ0FEQyxDQUZILEVBS0ovRCxLQUxJLENBS0UsQ0FBQyxDQUFELEVBQUksS0FBS3pELE1BQVQsQ0FMRixDQUFUOztBQU9BLGdCQUFNd0wsWUFBWW5DLEdBQUdPLFdBQUgsR0FDYkMsTUFEYSxDQUNOLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FETSxFQUNNO0FBRE4sYUFFYnBHLEtBRmEsQ0FFUCxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRk8sRUFHYmdJLEtBSGEsQ0FHUCxJQUhPLENBQWxCOztBQUtBLGdCQUFNaEIsTUFBTSxLQUFLTCxLQUFMLENBQ1BNLFNBRE8sQ0FDRyxHQURILEVBRVAzUixJQUZPLENBRUZBLElBRkUsRUFHUDRSLEtBSE8sR0FJUEwsTUFKTyxDQUlBLEdBSkEsRUFLUEMsSUFMTyxDQUtGLE9BTEUsRUFLTyxXQUxQLEVBTVBBLElBTk8sQ0FNRixXQU5FLEVBTVcsVUFBU0ssQ0FBVCxFQUFZak0sQ0FBWixFQUFlO0FBQzlCLHVCQUFPLGVBQWVBLElBQUkrSyxRQUFuQixHQUE4QixNQUFyQztBQUNILGFBUk8sQ0FBWjs7QUFVQSxnQkFBSXdCLE1BQU03QixHQUFHNkIsR0FBSCxHQUNMWCxJQURLLENBQ0EsT0FEQSxFQUNTLFFBRFQsRUFFTG1CLE1BRkssQ0FFRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQU4sQ0FGRixFQUdMQyxJQUhLLENBR0EsVUFBU2YsQ0FBVCxFQUFZO0FBQ2QsdUJBQU8sYUFBYUEsRUFBRXBILEtBQWYsR0FBdUIsMkNBQXZCLEdBQXFFb0gsRUFBRXBELEtBQXZFLEdBQStFLFNBQXRGO0FBQ0gsYUFMSyxDQUFWOztBQU9BLGlCQUFLNEMsS0FBTCxDQUFXd0IsSUFBWCxDQUFnQlYsR0FBaEI7O0FBRUFULGdCQUFJSCxNQUFKLENBQVcsTUFBWCxFQUNLRSxPQURMLENBQ2EsUUFEYixFQUN1QixJQUR2QixFQUVLRCxJQUZMLENBRVUsT0FGVixFQUVtQmIsV0FBVyxDQUY5QixFQUdLYSxJQUhMLENBR1UsSUFIVixFQUdnQixDQUhoQixFQUlLQSxJQUpMLENBSVUsSUFKVixFQUlnQixDQUpoQixFQUtLQSxJQUxMLENBS1UsUUFMVixFQUtvQixDQUxwQixFQU1LQSxJQU5MLENBTVUsU0FOVixFQU1xQixVQUFDSyxDQUFEO0FBQUEsdUJBQU8sQ0FBQ0EsRUFBRXBELEtBQUgsR0FBVyxDQUFYLEdBQWUsR0FBdEI7QUFBQSxhQU5yQixFQU9LK0MsSUFQTCxDQU9VLEdBUFYsRUFPZSxLQUFLdkssTUFQcEIsRUFRS3VLLElBUkwsQ0FRVSxNQVJWLEVBUWtCLFVBQVNLLENBQVQsRUFBWWpNLENBQVosRUFBZTtBQUN6Qix1QkFBT3FMLFdBQVdyTCxDQUFYLENBQVA7QUFDSCxhQVZMLEVBV0trTixFQVhMLENBV1EsV0FYUixFQVdxQlgsSUFBSVksSUFYekIsRUFZS0QsRUFaTCxDQVlRLFVBWlIsRUFZb0JYLElBQUlhLElBWnhCLEVBYUt6TixVQWJMLEdBY0t1TSxLQWRMLENBY1c7QUFBQSx1QkFBTSxNQUFNMUYsS0FBSzJGLE1BQUwsS0FBZ0IsR0FBNUI7QUFBQSxhQWRYLEVBZUtDLFFBZkwsQ0FlYyxHQWZkLEVBZ0JLQyxJQWhCTCxDQWdCVTNCLEdBQUc0QixTQWhCYixFQWlCS1YsSUFqQkwsQ0FpQlUsR0FqQlYsRUFpQmUsVUFBQ0ssQ0FBRCxFQUFPO0FBQ2QsdUJBQU8sT0FBSzVLLE1BQUwsR0FBYyxPQUFLMkosQ0FBTCxDQUFPaUIsRUFBRXBELEtBQVQsQ0FBckI7QUFDSCxhQW5CTCxFQW9CSytDLElBcEJMLENBb0JVLFFBcEJWLEVBb0JvQixVQUFDSyxDQUFEO0FBQUEsdUJBQU8sT0FBS2pCLENBQUwsQ0FBT2lCLEVBQUVwRCxLQUFULElBQWtCLENBQXpCO0FBQUEsYUFwQnBCOztBQXNCQWlELGdCQUFJSCxNQUFKLENBQVcsTUFBWCxFQUNLRSxPQURMLENBQ2EsV0FEYixFQUMwQixJQUQxQixFQUVLRCxJQUZMLENBRVUsR0FGVixFQUVlYixXQUFXLENBQVgsR0FBZSxDQUY5QixFQUdLYSxJQUhMLENBR1UsR0FIVixFQUdlLENBQUMsR0FIaEIsRUFJS0EsSUFKTCxDQUlVLGFBSlYsRUFJeUIsT0FKekIsRUFLS2dCLElBTEwsQ0FLVTtBQUFBLHVCQUFLWCxFQUFFcEgsS0FBUDtBQUFBLGFBTFYsRUFNSytHLElBTkwsQ0FNVSxXQU5WLEVBTXVCLE1BTnZCLEVBT0tBLElBUEwsQ0FPVSxTQVBWLEVBT3FCLENBUHJCLEVBUUtqTSxVQVJMLEdBU0t5TSxRQVRMLENBU2MsR0FUZCxFQVVLUixJQVZMLENBVVUsU0FWVixFQVVxQixDQVZyQjs7QUFlQSxnQkFBTXlCLFVBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLG9CQUFJQyxRQUFRVCxVQUFVLE9BQUtwQixLQUFMLENBQVdwTyxJQUFYLEdBQWtCa1EscUJBQWxCLEdBQTBDL0UsS0FBcEQsQ0FBWjtBQUNBLG9CQUFJb0UsT0FBT2xDLEdBQUdxQixTQUFILENBQWEsTUFBYixDQUFYO0FBQ0FhLHFCQUFLaEIsSUFBTCxDQUFVLFdBQVYsRUFBdUIwQixRQUFRLElBQS9CO0FBQ0Esb0JBQUlBLFFBQVEsRUFBWixFQUFnQjtBQUNaVix5QkFBS2hCLElBQUwsQ0FBVSxTQUFWLEVBQXFCLENBQXJCO0FBQ0gsaUJBRkQsTUFFTztBQUNIZ0IseUJBQUtoQixJQUFMLENBQVUsU0FBVixFQUFxQixDQUFyQjtBQUNIO0FBQ0osYUFURDs7QUFXQXlCO0FBQ0FwVSxtQkFBT3VVLFFBQVAsR0FBa0JILFFBQVFJLElBQVIsQ0FBYSxJQUFiLENBQWxCO0FBRUg7Ozs7OztBQXpLQ2pCLFEsQ0FDS3ZSLFMsR0FBWTtBQUNmYixVQUFNLG9CQUFVa0csS0FERDtBQUVmb04sVUFBTSxvQkFBVXBOLEtBRkQ7QUFHZjFGLFVBQU0sb0JBQVV3RSxNQUhEO0FBSWZoRSxXQUFPLG9CQUFVZ0U7QUFKRixDO2VBMktSb04sUTs7Ozs7Ozs7O2tDQTVLVEEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk47Ozs7QUFDQTs7SUFBWTlCLEU7Ozs7Ozs7Ozs7OztJQUVOaUQsSzs7Ozs7Ozs7Ozs7NENBQ2tCO0FBQ2hCL0Msc0JBQVVDLEtBQVYsQ0FBZ0IsSUFBaEI7QUFDSDs7O2lDQUVRO0FBQUE7O0FBQ0wsbUJBQ0ksdUNBQUssT0FBTyxFQUFDckMsT0FBTyxPQUFSLEVBQWlCbkgsUUFBUSxPQUF6QixFQUFaLEVBQStDLEtBQU0sYUFBQ3lKLEVBQUQ7QUFBQSwyQkFBUSxPQUFLQSxFQUFMLEdBQVVBLEVBQWxCO0FBQUEsaUJBQXJELEdBREo7QUFHSDs7Ozs7O2VBR1U2QyxLOzs7O0FBRWYsU0FBUy9DLFNBQVQsR0FBcUI7QUFDakIsUUFBSSxDQUFDLEtBQUszUSxLQUFMLENBQVdHLElBQWhCLEVBQ0k7QUFDSixRQUFNQSxPQUFPLEtBQUtILEtBQUwsQ0FBV0csSUFBeEI7O0FBRUEsUUFBTW9PLFFBQVEsRUFBZDtBQUNBLFFBQU1uSCxTQUFTLEVBQWY7QUFDQSxRQUFNMEosV0FBV3ZDLFFBQVFwTyxLQUFLVyxNQUE5Qjs7QUFFQSxRQUFNMFEsUUFBUWYsR0FDVGdCLE1BRFMsQ0FDRixLQUFLWixFQURILEVBRVRhLE1BRlMsQ0FFRixLQUZFLEVBR1RDLElBSFMsQ0FHSixTQUhJLEVBR08sZUFIUCxFQUlUQSxJQUpTLENBSUoscUJBSkksRUFJbUIsZUFKbkIsRUFLVEMsT0FMUyxDQUtELE1BTEMsRUFLTyxJQUxQLENBQWQ7O0FBUUEsUUFBSStCLFNBQVNwSCxLQUFLQyxHQUFMLENBQVMrQixLQUFULEVBQWdCbkgsTUFBaEIsSUFBMEIsQ0FBdkM7QUFBQSxRQUNJd00sSUFBSXBDLE1BQU1FLE1BQU4sQ0FBYSxHQUFiLEVBQWtCQyxJQUFsQixDQUF1QixXQUF2QixFQUFvQyxlQUFlcEQsUUFBUSxDQUF2QixHQUEyQixHQUEzQixHQUFpQ25ILFNBQVMsQ0FBMUMsR0FBOEMsR0FBbEYsQ0FEUjs7QUFHQSxRQUFJakcsUUFBUXNQLEdBQUdvRCxZQUFILENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEMsRUFBNkMsU0FBN0MsRUFBd0QsU0FBeEQsRUFBbUUsU0FBbkUsQ0FBaEIsQ0FBWjs7QUFFQSxRQUFJQyxNQUFNckQsR0FBR3FELEdBQUgsR0FDVHZJLElBRFMsQ0FDSixJQURJLEVBRVQxSyxLQUZTLENBRUgsVUFBU21SLENBQVQsRUFBWTtBQUNmLGVBQU9BLENBQVA7QUFDSCxLQUpTLENBQVY7QUFLQSxRQUFNK0IsVUFBVXRELEdBQ1hhLGVBRFcsQ0FDS2IsR0FBR2Msa0JBRFIsRUFFWE4sTUFGVyxDQUVKLENBQUMsQ0FBRCxFQUFJOVEsS0FBS1csTUFBVCxDQUZJLENBQWhCOztBQUlBLFFBQUlrVCxPQUFPdkQsR0FBR3dELEdBQUgsR0FDVkMsV0FEVSxDQUNFUCxTQUFTLEVBRFgsRUFFVlEsV0FGVSxDQUVFLEVBRkYsQ0FBWDs7QUFJQSxRQUFJQyxZQUFZM0QsR0FBR3dELEdBQUgsR0FDZkMsV0FEZSxDQUNIUCxTQUFTLENBRE4sRUFFZlEsV0FGZSxDQUVILEVBRkcsQ0FBaEI7O0FBSUEsUUFBSTFULFFBQVFnUSxHQUFHd0QsR0FBSCxHQUNYQyxXQURXLENBQ0NQLFNBQVMsRUFEVixFQUVYUSxXQUZXLENBRUNSLFNBQVMsRUFGVixDQUFaOztBQUtBLFFBQUlNLE1BQU1MLEVBQUU5QixTQUFGLENBQVksTUFBWixFQUNUM1IsSUFEUyxDQUNKMlQsSUFBSTNULElBQUosQ0FESSxFQUVUNFIsS0FGUyxHQUVETCxNQUZDLENBRU0sR0FGTixFQUdUQyxJQUhTLENBR0osT0FISSxFQUdLLEtBSEwsQ0FBVjs7QUFLQXNDLFFBQUl2QyxNQUFKLENBQVcsTUFBWCxFQUNDQyxJQURELENBQ00sR0FETixFQUNXcUMsSUFEWCxFQUVDckMsSUFGRCxDQUVNLE1BRk4sRUFFYztBQUFBLGVBQUtvQyxRQUFRL0IsRUFBRTdSLElBQVYsQ0FBTDtBQUFBLEtBRmQsRUFHQzhTLEVBSEQsQ0FHSSxXQUhKLEVBR2lCLFVBQVNqQixDQUFULEVBQVlqTSxDQUFaLEVBQWU7QUFDNUIwSyxXQUFHZ0IsTUFBSCxDQUFVLElBQVYsRUFDS0UsSUFETCxDQUNVLEdBRFYsRUFDZXlDLFNBRGY7QUFFSCxLQU5ELEVBT0NuQixFQVBELENBT0ksVUFQSixFQU9nQixZQUFXO0FBQ3ZCeEMsV0FBR2dCLE1BQUgsQ0FBVSxJQUFWLEVBQ0tFLElBREwsQ0FDVSxHQURWLEVBQ2VxQyxJQURmO0FBRUgsS0FWRDs7QUFZQUMsUUFBSXZDLE1BQUosQ0FBVyxNQUFYLEVBQ0NDLElBREQsQ0FDTSxXQUROLEVBQ21CLFVBQVNLLENBQVQsRUFBWTtBQUMzQixlQUFPLGVBQWV2UixNQUFNNFQsUUFBTixDQUFlckMsQ0FBZixDQUFmLEdBQW1DLEdBQTFDO0FBQ0gsS0FIRCxFQUlDTCxJQUpELENBSU0sSUFKTixFQUlZLFFBSlosRUFLQ2dCLElBTEQsQ0FLTSxVQUFTWCxDQUFULEVBQVk7QUFDZCxlQUFPQSxFQUFFN1IsSUFBRixDQUFPbVUsR0FBZDtBQUNILEtBUEQ7QUFTSDs7Ozs7Ozs7a0NBcEZLWixLOztrQ0FjRy9DLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlQ7Ozs7OztBQUVBLElBQU00RCxjQUFjLFNBQWRBLFdBQWMsQ0FBQ3ZVLEtBQUQ7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0UsMkNBQUssV0FBVSxXQUFmLEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBTyxFQUFDd1UsMkJBQTBCeFUsTUFBTXlVLElBQVAsR0FBZSxDQUFDLElBQXpDLE9BQUQsRUFBakM7QUFDSXpVLGNBQU1tRDtBQURWO0FBREYsS0FGRjtBQU9FO0FBQUE7QUFBQSxRQUFNLFdBQVUsWUFBaEI7QUFBQTtBQUFBO0FBUEYsR0FEZ0I7QUFBQSxDQUFwQjs7ZUFZZW9SLFc7Ozs7Ozs7OztnQ0FaVEEsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZOOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUcsU0FBUyxTQUFUQSxNQUFTLENBQUMxVSxLQUFELEVBQVc7QUFDdEIsYUFBUzJVLE1BQVQsR0FBa0I7QUFDZDNVLGNBQU1PLE1BQU4sQ0FBYVAsTUFBTVcsSUFBbkIsRUFBd0JYLE1BQU15RyxJQUE5QjtBQUNIO0FBQ0QsV0FDQTtBQUFBO0FBQUEsVUFBSyxTQUFTa08sTUFBZCxFQUFzQixXQUFXQyxTQUFTNVUsS0FBVCxDQUFqQyxFQUFrRCxPQUFPLEVBQUNpSCxpQkFBaUJqSCxNQUFNeUcsSUFBTixDQUFXdEYsS0FBWCxHQUFrQm5CLE1BQU15RyxJQUFOLENBQVd0RixLQUE3QixHQUFxQyxPQUF2RCxFQUFnRUEsT0FBT25CLE1BQU15RyxJQUFOLENBQVd0RixLQUFYLEdBQWtCLHVCQUFNK0YsU0FBTixDQUFnQmxILE1BQU15RyxJQUFOLENBQVd0RixLQUEzQixDQUFsQixHQUFzRCxTQUE3SCxFQUF6RDtBQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUscUJBQWYsRUFBcUMsU0FBU3dULE1BQTlDO0FBQXVEM1Usa0JBQU15RyxJQUFOLENBQVc1RjtBQUFsRTtBQURKLEtBREE7QUFNSCxDQVZEOztBQVlBNlQsT0FBTzFULFNBQVAsR0FBbUI7QUFDZlQsWUFBUSxvQkFBVWlDLElBREg7QUFFZmlFLFVBQU0sb0JBQVV4RixNQUZEO0FBR2ZOLFVBQU0sb0JBQVV3RTtBQUhELENBQW5COztBQU1BLFNBQVN5UCxRQUFULENBQWtCNVUsS0FBbEIsRUFBeUI7QUFDckIsV0FBTyxhQUFhQSxNQUFNMEwsUUFBTixHQUFnQixlQUFoQixHQUFrQyxFQUEvQyxDQUFQO0FBQ0g7O2VBRWNnSixNOzs7Ozs7Ozs7a0NBdEJUQSxNOztrQ0FrQkdFLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QlQ7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUM3VSxLQUFELEVBQVc7QUFDMUIsYUFBUzJVLE1BQVQsR0FBa0I7QUFDZDNVLGNBQU1PLE1BQU4sQ0FBYVAsTUFBTVcsSUFBbkIsRUFBeUJYLE1BQU15RyxJQUEvQjtBQUNIO0FBQ0QsV0FDQTtBQUFBO0FBQUEsVUFBSyxXQUFXbU8sU0FBUzVVLEtBQVQsQ0FBaEI7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLHFCQUFmLEVBQXFDLFNBQVMyVSxNQUE5QztBQUF1RDNVLGtCQUFNeUcsSUFBTixDQUFXNUYsS0FBWCxJQUFvQmIsTUFBTXlHO0FBQWpGO0FBREosS0FEQTtBQUlFLENBUk47O0FBVUEsU0FBU21PLFFBQVQsQ0FBa0I1VSxLQUFsQixFQUF5QjtBQUNyQixXQUFPLG1CQUFtQkEsTUFBTTBMLFFBQU4sR0FBZ0IsZUFBaEIsR0FBa0MsRUFBckQsQ0FBUDtBQUNIOztBQUVEbUosV0FBVzdULFNBQVgsR0FBdUI7QUFDbkIwSyxjQUFVLG9CQUFVNUcsSUFERDtBQUVuQnZFLFlBQVEsb0JBQVVpQyxJQUZDO0FBR25CaUUsVUFBTSxvQkFBVUwsU0FBVixDQUFvQixDQUFDLG9CQUFVakIsTUFBWCxFQUFtQixvQkFBVWxFLE1BQTdCLENBQXBCLENBSGE7QUFJbkJOLFVBQU0sb0JBQVV3RTtBQUpHLENBQXZCOztlQU9lMFAsVTs7Ozs7Ozs7O2tDQXJCVEEsVTs7a0NBVUdELFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JUOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNRSxNOzs7QUFDRixzQkFBYztBQUFBOztBQUFBOztBQUVWLGNBQUsvSCxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVeUcsSUFBVixPQUFaO0FBQ0EsY0FBS3VCLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVV2QixJQUFWLE9BQVo7QUFIVTtBQUliOzs7O2lDQUNRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsNENBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLDBCQUFRLFdBQVUsY0FBbEIsRUFBaUMsU0FBUyxLQUFLdUIsSUFBL0M7QUFBQTtBQUFBO0FBREYsaUJBREY7QUFJRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLDBCQUFRLFdBQVUsY0FBbEIsRUFBaUMsU0FBUyxLQUFLaEksSUFBL0M7QUFBQTtBQUFBO0FBREY7QUFKRixhQURKO0FBVUg7OzsrQkFFTTtBQUNILGlCQUFLL00sS0FBTCxDQUFXK00sSUFBWCxDQUFnQixDQUFoQjtBQUNIOzs7K0JBRU07QUFDSCxpQkFBSy9NLEtBQUwsQ0FBVytVLElBQVgsQ0FBZ0IsQ0FBQyxDQUFqQjtBQUNIOzs7Ozs7QUFHTEQsT0FBTzlULFNBQVAsR0FBbUI7QUFDZitULFVBQU0sb0JBQVV2UyxJQUREO0FBRWZ1SyxVQUFNLG9CQUFVdks7QUFGRCxDQUFuQjs7ZUFLZXNTLE07Ozs7Ozs7OztrQ0FqQ1RBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hOOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztJQUdNRSxTOzs7Ozs7Ozs7Ozs7OztnTUFDRnJWLEssR0FBUSxFLFFBd0NSc1YsUzs7OztpQkFhQXJRLEk7Ozs7Ozs7OztpQ0FwRFM7QUFDTCxpQkFBS3NRLGdCQUFMLEdBQXdCQyxlQUFlLEtBQUtuVixLQUFMLENBQVd1SyxLQUExQixDQUF4QjtBQUNBLGdCQUFJLEtBQUsySyxnQkFBVCxFQUEyQjtBQUN2Qix1QkFDSTtBQUFBO0FBQUE7QUFDSyx5QkFBS0EsZ0JBQUwsR0FDSDtBQUFBO0FBQUEsMEJBQUksV0FBVSxhQUFkO0FBQ0U7QUFBQTtBQUFBLDhCQUFJLFdBQVUsZUFBZDtBQUFBO0FBQ1MsaUNBQUtsVixLQUFMLENBQVd1SyxLQUFYLENBQWlCNUo7QUFEMUIseUJBREY7QUFJRTtBQUFBO0FBQUEsOEJBQUksV0FBVSxlQUFkO0FBQUE7QUFFRSw4RUFBVSxPQUFRLEtBQUtYLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUJwSixLQUFqQixJQUEwQixLQUE1QztBQUZGLHlCQUpGO0FBUUU7QUFBQTtBQUFBLDhCQUFJLFdBQVUsZUFBZDtBQUFBO0FBQ1UsaUNBQUtuQixLQUFMLENBQVd1SyxLQUFYLENBQWlCSyxLQUFqQixDQUF1Qi9KO0FBRGpDLHlCQVJGO0FBV0U7QUFBQTtBQUFBLDhCQUFJLFdBQVUsZUFBZDtBQUFBO0FBQ1EsaUNBQUtiLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUJMLEdBQWpCLENBQXFCeEo7QUFEN0IseUJBWEY7QUFjRTtBQUFBO0FBQUEsOEJBQUksV0FBVSxlQUFkO0FBQUE7QUFDUyxpQ0FBS1YsS0FBTCxDQUFXdUssS0FBWCxDQUFpQnlGO0FBRDFCLHlCQWRGO0FBaUJFO0FBQUE7QUFBQSw4QkFBSSxXQUFVLGVBQWQ7QUFBQTtBQUNTLGlDQUFLaFEsS0FBTCxDQUFXdUssS0FBWCxDQUFpQjZLLElBQWpCLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQjtBQURUO0FBakJGLHFCQURHLEdBdUJDLElBeEJOO0FBeUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSw4QkFBUSxXQUFVLDJCQUFsQixFQUE4QyxTQUFTLEtBQUt6USxJQUE1RDtBQUFBO0FBQUEseUJBREY7QUFFRTtBQUFBO0FBQUEsOEJBQVEsV0FBVyw0QkFBNEIsc0JBQVMsS0FBS2pGLEtBQUwsQ0FBV08sT0FBcEIsRUFBNkIsc0JBQTdCLENBQS9DLEVBQXFHLFNBQVMsS0FBSytVLFNBQW5IO0FBQUE7QUFBQTtBQUZGO0FBekJGLGlCQURKO0FBZ0NIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7MERBRWlCO0FBQUE7O0FBQ2QsaUJBQUs3VSxRQUFMLENBQWMsRUFBQ0YsU0FBUyxJQUFWLEVBQWQ7QUFDQSxpQkFBS0YsS0FBTCxDQUFXaVYsU0FBWCxDQUFxQixLQUFLQyxnQkFBMUIsRUFDSzFVLElBREwsQ0FDVSxtQkFBTSxJQUFOLENBRFYsRUFFS0EsSUFGTCxDQUVVLFlBQU07QUFDUix1QkFBS1IsS0FBTCxDQUFXc1YsS0FBWDtBQUNBLHVCQUFLbFYsUUFBTCxDQUFjO0FBQ1ZtViwyQkFBTyxJQURHO0FBRVZyViw2QkFBUztBQUZDLGlCQUFkO0FBSUgsYUFSTDtBQVNIOzs7cURBRVk7QUFDVCxpQkFBS0YsS0FBTCxDQUFXd1YsSUFBWCxDQUFnQixDQUFDLENBQWpCO0FBQ0g7Ozs7OztBQUdMUixVQUFVaFUsU0FBVixHQUFzQjtBQUNsQnVKLFdBQU8sb0JBQVV0SixNQURDO0FBRWxCYSxZQUFRLG9CQUFVYixNQUZBO0FBR2xCcVUsV0FBTyxvQkFBVTlTLElBSEM7QUFJbEJnVCxVQUFNLG9CQUFVaFQsSUFKRTtBQUtsQnlTLGVBQVcsb0JBQVV6UztBQUxILENBQXRCOztBQVFBLFNBQVMyUyxjQUFULENBQXdCTSxHQUF4QixFQUE2QjtBQUN6QixRQUFJQSxJQUFJdkwsR0FBSixJQUFXdUwsSUFBSTdLLEtBQWYsSUFBd0I2SyxJQUFJdFUsS0FBNUIsSUFBcUNzVSxJQUFJTCxJQUF6QyxJQUFpREssSUFBSXpGLFFBQXpELEVBQ0ksT0FBTztBQUNIclAsY0FBTThVLElBQUk5VSxJQURQO0FBRUhRLGVBQU9zVSxJQUFJdFUsS0FBSixDQUFVTixLQUZkO0FBR0grSixlQUFPNkssSUFBSTdLLEtBQUosQ0FBVS9JLEdBSGQ7QUFJSHFJLGFBQUt1TCxJQUFJdkwsR0FBSixDQUFRckksR0FKVjtBQUtIc00sY0FBTXNILElBQUl6RixRQUxQO0FBTUhvRixjQUFNSyxJQUFJTCxJQUFKLENBQVNDLElBQVQsQ0FBYyxJQUFkLENBTkg7QUFPSHhILGdCQUFRRixLQUFLK0gsR0FBTDtBQVBMLEtBQVA7QUFTSixXQUFPLEtBQVA7QUFDSDs7QUFFRCxTQUFTMVQsUUFBVCxDQUFrQnJDLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQU87QUFDSDRLLGVBQU81SyxNQUFNNEssS0FEVjtBQUVIekksZ0JBQVFuQyxNQUFNNkIsSUFBTixDQUFXTTtBQUZoQixLQUFQO0FBSUg7O0FBRUQsU0FBU1csV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDM0IsV0FBTztBQUNIdVMsbUJBQVcsbUJBQUMxSyxLQUFEO0FBQUEsbUJBQVc3SCxTQUFTLHNCQUFVNkgsS0FBVixDQUFULENBQVg7QUFBQTtBQURSLEtBQVA7QUFHSDs7ZUFFYyx5QkFBUXZJLFFBQVIsRUFBa0JTLFdBQWxCLEVBQStCdVMsU0FBL0IsQzs7Ozs7Ozs7OztrQ0E5RlRBLFM7O2tDQW1FR0csYzs7a0NBY0FuVCxROztrQ0FPQVMsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHVDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTWtULFNBQVMsU0FBVEEsTUFBUyxDQUFDM1YsS0FBRCxFQUFXO0FBQ3RCLE1BQUdBLE1BQU00VixNQUFULEVBQWlCO0FBQ2IsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFNBQWY7QUFDRSw2Q0FBSyxXQUFVLElBQWYsR0FERjtBQUVFO0FBQUE7QUFBQSxVQUFRLE9BQU81VixNQUFNVSxJQUFyQjtBQUE0QlYsY0FBTW1EO0FBQWxDO0FBRkYsS0FERjtBQUtIO0FBQ0QsU0FDQTtBQUFBO0FBQUEsTUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGdDQUFmO0FBQ0luRCxZQUFNVSxJQURWO0FBQUE7QUFBQSxLQURGO0FBR0Usc0RBQVEsTUFBTVYsTUFBTStNLElBQXBCLEVBQTBCLE1BQU0vTSxNQUFNK1UsSUFBdEMsR0FIRjtBQUlJL1UsVUFBTW1EO0FBSlYsR0FEQTtBQVFILENBaEJEOztBQWtCQXdTLE9BQU8zVSxTQUFQLEdBQW1CO0FBQ2Y0VSxVQUFRLG9CQUFVOVEsSUFESDtBQUVmcEUsUUFBTSxvQkFBVXlFLE1BRkQ7QUFHZmhDLFlBQVUsb0JBQVVDLElBSEw7QUFJZjJKLFFBQU0sb0JBQVV2SyxJQUpEO0FBS2Z1UyxRQUFNLG9CQUFVdlM7QUFMRCxDQUFuQjs7ZUFRZW1ULE07Ozs7Ozs7OztnQ0ExQlRBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMTjs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBU0UsZUFBVCxDQUF5QmxXLEtBQXpCLEVBQWdDO0FBQzVCLFdBQU87QUFDSDRLLGVBQU81SyxNQUFNNEssS0FEVjtBQUVIL0ksY0FBTTdCLE1BQU02QixJQUZUO0FBR0h3SixjQUFNckwsTUFBTXFMO0FBSFQsS0FBUDtBQUtIOztBQUVELFNBQVN2SSxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUMzQixXQUFPO0FBQ0huQyxnQkFBUSxnQkFBQ2tFLEtBQUQsRUFBUTVELEtBQVI7QUFBQSxtQkFBa0I2QixTQUFTLHlCQUFZK0IsS0FBWixFQUFtQjVELEtBQW5CLENBQVQsQ0FBbEI7QUFBQSxTQURMO0FBRUhpVixvQkFBWSxvQkFBQ2pWLEtBQUQ7QUFBQSxtQkFBVzZCLFNBQVMsd0JBQVc3QixLQUFYLENBQVQsQ0FBWDtBQUFBLFNBRlQ7QUFHSGtWLG1CQUFXO0FBQUEsbUJBQU1yVCxTQUFTLDBCQUFULENBQU47QUFBQSxTQUhSO0FBSUgrTSxpQkFBUztBQUFBLG1CQUFNL00sU0FBUyxvQkFBVCxDQUFOO0FBQUEsU0FKTjtBQUtIdU4saUJBQVM7QUFBQSxtQkFBTXZOLFNBQVMsbUJBQVQsQ0FBTjtBQUFBO0FBTE4sS0FBUDtBQU9IOztBQUVELElBQU1zVCxvQkFBb0IseUJBQVFILGVBQVIsRUFBeUJwVCxXQUF6QixxQkFBMUI7O2VBRWV1VCxpQjs7Ozs7Ozs7O2tDQXBCTkgsZTs7a0NBUUFwVCxXOztrQ0FVSHVULGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qk47Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQyxROzs7QUFDRix3QkFBYztBQUFBOztBQUFBOztBQUFBLGNBaUNkeE0sT0FqQ2M7QUFBQTtBQUFBOztBQUFBLGNBMkNkK0wsSUEzQ2M7QUFBQTtBQUFBOztBQUFBLGNBb0RkalYsTUFwRGM7QUFBQTtBQUFBOztBQUFBLGNBeUVkdVYsVUF6RWM7QUFBQTtBQUFBOztBQUFBLGNBbUdkQyxTQW5HYztBQUFBO0FBQUE7O0FBRVYsY0FBS3BXLEtBQUwsR0FBYTtBQUNUOFUsa0JBQU0sQ0FERztBQUVUeUIsdUJBQVdsTTtBQUZGLFNBQWI7O0FBS0EsY0FBS21NLE1BQUwsR0FBYyxDQUFkO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxjQUFLQyxLQUFMLEdBQWEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixPQUFqQixFQUEwQixVQUExQixFQUFzQyxNQUF0QyxDQUFiO0FBVFU7QUFVYjs7OztpQ0FFUTtBQUFBOztBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBTyxTQUFTLEtBQUs1TSxPQUFyQjtBQUNBO0FBQUE7QUFBQSxzQkFBYSxNQUFNLEtBQUs5SixLQUFMLENBQVc4VSxJQUE5QjtBQUNJLHlCQUFLNkIsV0FBTCxHQUNLaFYsR0FETCxDQUNTLFVBQUNtVCxJQUFEO0FBQUEsK0JBQ0Q7QUFBQTtBQUFBLDhCQUFRLEtBQUtBLEtBQUsvVCxJQUFsQjtBQUNRLHNDQUFNK1QsS0FBSy9ULElBRG5CO0FBRVEsc0NBQU0sT0FBSzhVLElBRm5CO0FBR1Esc0NBQU0sT0FBS0EsSUFIbkI7QUFJUSx3Q0FBUSxPQUFLalYsTUFKckI7QUFLUSxxQ0FBS2tVLEtBQUs4QixHQUxsQjtBQU1RLHdDQUFROUIsS0FBS21CLE1BTnJCO0FBT0tuQixpQ0FBSzFQO0FBUFYseUJBREM7QUFBQSxxQkFEVDtBQURKO0FBREEsYUFESjtBQWtCSDs7O3NEQUVVeUcsRyxFQUFRO0FBQ2Y7QUFDSTtBQUNDLGlCQUFLN0wsS0FBTCxDQUFXOFUsSUFBWCxLQUFvQixDQUFwQixJQUF5QmpKLE1BQU0sQ0FBaEMsSUFBc0MsRUFBRSxLQUFLNkssS0FBTCxDQUFXLEtBQUsxVyxLQUFMLENBQVc4VSxJQUF0QixLQUErQixLQUFLelUsS0FBTCxDQUFXdUssS0FBNUMsQ0FGMUMsRUFFOEY7O0FBRTlGLGdCQUFJaU0sU0FBUyxLQUFLN1csS0FBTCxDQUFXOFUsSUFBWCxJQUFtQmpKLE1BQU0sQ0FBTixHQUFTLENBQUMsQ0FBVixHQUFjLENBQWpDLENBQWI7O0FBRUEsaUJBQUtwTCxRQUFMLENBQWMsRUFBQ3FVLE1BQU0rQixNQUFQLEVBQWQ7QUFDSDs7O21EQUVPaEwsRyxFQUFLL0csSyxFQUFVO0FBQ25CLGdCQUFJZ0QsVUFBVSxLQUFLOUgsS0FBTCxDQUFXOFUsSUFBekI7QUFDQTtBQUNBLGdCQUFHaFEsS0FBSCxFQUFVLE9BQU8sS0FBS3JFLFFBQUwsQ0FBYyxFQUFDcVUsTUFBTWhOLFVBQVUrRCxHQUFqQixFQUFkLENBQVA7QUFDVjtBQUNBLGdCQUFHL0QsVUFBVStELEdBQVYsR0FBZ0IsQ0FBaEIsSUFBcUIsRUFBRSxLQUFLNkssS0FBTCxDQUFXLEtBQUsxVyxLQUFMLENBQVc4VSxJQUF0QixLQUErQixLQUFLelUsS0FBTCxDQUFXdUssS0FBNUMsS0FBc0RpQixNQUFNLENBQXBGLEVBQXVGO0FBQ3ZGLGlCQUFLcEwsUUFBTCxDQUFjLEVBQUNxVSxNQUFNaE4sVUFBVStELEdBQWpCLEVBQWQ7QUFDSDs7O3FEQUVTL0csSyxFQUFPNUQsSyxFQUFVO0FBQUE7O0FBQ3ZCO0FBQ0EsZ0JBQUksS0FBS3NWLE1BQUwsR0FBYyxDQUFkLElBQW1CLEtBQUtuVyxLQUFMLENBQVd1SyxLQUFYLENBQWlCOUYsS0FBakIsTUFBNEI1RCxLQUFuRCxFQUEwRCxPQUFPLEtBQUsyVSxJQUFMLENBQVUsQ0FBVixFQUFhL1EsS0FBYixDQUFQOztBQUUxRCxpQkFBS3pFLEtBQUwsQ0FBV08sTUFBWCxDQUFrQmtFLEtBQWxCLEVBQXlCNUQsS0FBekI7QUFDQSxnQkFBSWtNLE9BQU8sS0FBS3BOLEtBQUwsQ0FBVzhVLElBQVgsR0FBa0IsQ0FBN0I7O0FBR0E7QUFDSTtBQUNDLGFBQUMsS0FBS3pVLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUIsS0FBSzhMLEtBQUwsQ0FBV3RKLElBQVgsQ0FBakIsQ0FBRCxJQUF1Q3RJLFVBQVUsTUFBbEQ7QUFDQTtBQUNHLGlCQUFLNFIsS0FBTCxDQUFXdEosSUFBWCxNQUFxQixNQUo1QixFQUtFLE9BQU8sS0FBS3lJLElBQUwsQ0FBVSxDQUFWLEVBQWEvUSxLQUFiLENBQVA7O0FBRUY7QUFDQSxpQkFBSzBSLE1BQUw7QUFDQSxpQkFBS0MsT0FBTCxHQUFlM1IsS0FBZjtBQUNBNkssdUJBQVc7QUFBQSx1QkFBTSxPQUFLNkcsTUFBTCxFQUFOO0FBQUEsYUFBWCxFQUFnQyxHQUFoQztBQUNIOzs7eURBRWFmLEksRUFBTXFCLEcsRUFBUTtBQUFBOztBQUFBLGdCQUNuQjVWLEtBRG1CLEdBQ1Y0VixHQURVLENBQ25CNVYsS0FEbUI7O0FBR3hCOztBQUNBLGdCQUFJLEtBQUtzVixNQUFMLEdBQWMsQ0FBZCxJQUFtQixLQUFLblcsS0FBTCxDQUFXdUssS0FBWCxDQUFpQjZLLElBQWpCLENBQXNCc0IsT0FBdEIsQ0FBOEI3VixLQUE5QixLQUF1QyxDQUE5RCxFQUFrRSxPQUFPLEtBQUsyVSxJQUFMLENBQVUsQ0FBVixFQUFhLElBQWIsQ0FBUDs7QUFFbEU7QUFDQTtBQUNBLGlCQUFLeFYsS0FBTCxDQUFXOFYsVUFBWCxDQUFzQmpWLEtBQXRCOztBQUVBO0FBQ0EsaUJBQUtzVixNQUFMO0FBQ0EsaUJBQUtDLE9BQUwsR0FBZXZWLEtBQWY7QUFDQXlPLHVCQUFXO0FBQUEsdUJBQU0sT0FBSzZHLE1BQUwsRUFBTjtBQUFBLGFBQVgsRUFBZ0MsR0FBaEM7QUFDSDs7O21DQUVVbkwsSSxFQUFNbEUsTSxFQUFRO0FBQ3JCLGdCQUFHLENBQUNBLE1BQUosRUFBWSxPQUFPLEVBQVA7QUFDWixtQkFBT2tFLEtBQUtsRSxNQUFMLENBQVk7QUFBQSx1QkFBT29ELElBQUlnRCxLQUFKLENBQVVwRyxNQUFWLEVBQWtCaEcsTUFBekI7QUFBQSxhQUFaLENBQVA7QUFDSDs7O2tDQUVTZ0csTSxFQUFRO0FBQ2QsaUJBQUt2RyxNQUFMLENBQVksTUFBWixFQUFvQnVHLE1BQXBCO0FBQ0EsaUJBQUsxRyxRQUFMLENBQWMsRUFBQzhWLFdBQVdwUCxNQUFaLEVBQWQ7QUFDSDs7OzBEQUVpQjtBQUNkLGlCQUFLOUcsS0FBTCxDQUFXK1YsU0FBWDtBQUNBLGlCQUFLM1YsUUFBTCxDQUFjLEVBQUNxVSxNQUFNLENBQVAsRUFBZDtBQUNIOzs7c0NBRWE7QUFBQTs7QUFDVixtQkFBTyxDQUNIO0FBQ0kvVCxzQkFBTSxLQURWO0FBRUlxRSx5QkFDQTtBQUFBO0FBQUE7QUFDSztBQUFBO0FBQUEsMEJBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLDhCQUFLLFdBQVksbUJBQW1CLEtBQUtwRixLQUFMLENBQVd1VyxTQUFYLEtBQXlCLFNBQXpCLEdBQXFDLGVBQXJDLEdBQXVELEVBQTFFLENBQWpCLEVBQWlHLFNBQVM7QUFBQSwyQ0FBTSxPQUFLUyxTQUFMLENBQWUsU0FBZixDQUFOO0FBQUEsaUNBQTFHO0FBQ0U7QUFBQTtBQUFBLGtDQUFLLFdBQVUscUJBQWY7QUFBQTtBQUFBO0FBREYseUJBREY7QUFJRTtBQUFBO0FBQUEsOEJBQUssV0FBWSxtQkFBbUIsS0FBS2hYLEtBQUwsQ0FBV3VXLFNBQVgsS0FBeUIsTUFBekIsR0FBa0MsZUFBbEMsR0FBb0QsRUFBdkUsQ0FBakIsRUFBOEYsU0FBUztBQUFBLDJDQUFNLE9BQUtTLFNBQUwsQ0FBZSxNQUFmLENBQU47QUFBQSxpQ0FBdkc7QUFDRTtBQUFBO0FBQUEsa0NBQUssV0FBVSxxQkFBZjtBQUFBO0FBQUE7QUFERjtBQUpGLHFCQURMO0FBU0ssNkRBVEw7QUFVSyxzRUFBUSxPQUFPLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBSzVXLEtBQUwsQ0FBV2dMLElBQTNCLEVBQWlDLEtBQUtyTCxLQUFMLENBQVd1VyxTQUE1QyxDQUFmLEVBQXVFLE9BQU8sS0FBS2xXLEtBQUwsQ0FBV3VLLEtBQXpGLEVBQWdHLFVBQVUsS0FBMUcsRUFBaUgsUUFBUSxLQUFLaEssTUFBOUgsRUFBc0ksVUFBdEk7QUFWTDtBQUhKLGFBREcsRUFnQkE7QUFDQ0csc0JBQU0sT0FEUDtBQUVDcUUseUJBQ0ksa0RBQVEsT0FBTyxLQUFLL0UsS0FBTCxDQUFXd0IsSUFBWCxDQUFnQkMsTUFBL0IsRUFBdUMsT0FBTyxLQUFLekIsS0FBTCxDQUFXdUssS0FBekQsRUFBZ0UsVUFBVSxPQUExRSxFQUFtRixRQUFRLEtBQUtoSyxNQUFoRztBQUhMLGFBaEJBLEVBcUJBO0FBQ0NHLHNCQUFNLE9BRFA7QUFFQ3FFLHlCQUNJLGtEQUFRLE9BQU8sS0FBSy9FLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUI1SixJQUFqQixHQUF1QixLQUFLWCxLQUFMLENBQVd3QixJQUFYLENBQWdCTSxNQUFoQixDQUF1QixLQUFLOUIsS0FBTCxDQUFXdUssS0FBWCxDQUFpQjVKLElBQXhDLENBQXZCLEdBQXVFLEtBQUtYLEtBQUwsQ0FBV3dCLElBQVgsQ0FBZ0JNLE1BQWhCLENBQXVCQyxPQUE3RyxFQUFzSCxPQUFPLEtBQUsvQixLQUFMLENBQVd1SyxLQUF4SSxFQUErSSxVQUFVLE9BQXpKLEVBQWtLLFFBQVEsS0FBS2hLLE1BQS9LO0FBSEwsYUFyQkEsRUEwQkE7QUFDQ0csc0JBQU0sVUFEUDtBQUVDcUUseUJBQ0ksa0RBQVEsT0FBTyxLQUFLL0UsS0FBTCxDQUFXdUssS0FBWCxDQUFpQkwsR0FBakIsSUFBd0IsS0FBS2xLLEtBQUwsQ0FBV3VLLEtBQVgsQ0FBaUJMLEdBQWpCLENBQXFCZ0QsS0FBckIsQ0FBMkIsS0FBS3ZOLEtBQUwsQ0FBV3VXLFNBQXRDLENBQXhCLElBQTRFLEVBQTNGLEVBQStGLE9BQU8sS0FBS2xXLEtBQUwsQ0FBV3VLLEtBQWpILEVBQXdILFVBQVUsVUFBbEksRUFBOEksUUFBUSxLQUFLaEssTUFBM0osRUFBbUssVUFBbks7QUFITCxhQTFCQSxFQStCQTtBQUNDRyxzQkFBTSxNQURQO0FBRUNxRSx5QkFDSSxrREFBUSxPQUFPLEtBQUsvRSxLQUFMLENBQVd3QixJQUFYLENBQWdCNFQsSUFBL0IsRUFBcUMsT0FBTyxLQUFLcFYsS0FBTCxDQUFXdUssS0FBdkQsRUFBOEQsVUFBVSxNQUF4RSxFQUFnRixRQUFRLEtBQUt1TCxVQUE3RixFQUF5RyxVQUF6RztBQUhMLGFBL0JBLEVBb0NBO0FBQ0NwVixzQkFBTSxRQURQO0FBRUM2VixxQkFBSyxJQUZOO0FBR0NYLHdCQUFRLElBSFQ7QUFJQzdRLHlCQUNJLHFEQUFXLE9BQU8sS0FBSy9FLEtBQUwsQ0FBV3VLLEtBQTdCLEVBQW9DLE1BQU0sS0FBS2lMLElBQS9DLEVBQXFELE9BQU8sS0FBS08sU0FBakU7QUFMTCxhQXBDQSxDQUFQO0FBNkNIOzs7Ozs7QUFHTEUsU0FBU2pWLFNBQVQsR0FBcUI7QUFDakJ1SixXQUFPLG9CQUFVdEosTUFEQTtBQUVqQitKLFVBQU0sb0JBQVUzRSxLQUZDO0FBR2pCOUYsWUFBUSxvQkFBVWlDLElBSEQ7QUFJakJoQixVQUFNLG9CQUFVUCxNQUpDO0FBS2pCOFUsZUFBVyxvQkFBVXZUO0FBTEosQ0FBckI7O2VBUWV5VCxROzs7Ozs7Ozs7a0NBbEtUQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk47Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1ZLFNBQVMsU0FBVEEsTUFBUyxDQUFDN1csS0FBRCxFQUFXO0FBQ3RCLFFBQU04VyxLQUFLOVcsTUFBTTBILElBQU4sMENBQVg7O0FBRUEsUUFBTXFQLGFBQWEsU0FBYkEsVUFBYSxDQUFDdFEsSUFBRCxFQUFVO0FBQ3pCLFlBQUd6RyxNQUFNZ1gsUUFBTixLQUFtQixNQUF0QixFQUE4QixPQUFPaFgsTUFBTXVLLEtBQU4sQ0FBWTZLLElBQVosQ0FBaUJzQixPQUFqQixDQUF5QmpRLEtBQUs1RixLQUE5QixJQUF1QyxDQUFDLENBQS9DO0FBQzlCLGVBQVFiLE1BQU11SyxLQUFOLENBQVl2SyxNQUFNZ1gsUUFBbEIsTUFBZ0N2USxJQUF4QztBQUNILEtBSEQ7O0FBS0EsV0FBUTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDSXpHLGNBQU1xSCxLQUFOLENBQVkvRixHQUFaLENBQWdCO0FBQUEsbUJBQ1osOEJBQUMsRUFBRCxJQUFJLEtBQU1tRixLQUFLNUUsR0FBTCxJQUFZNEUsSUFBdEIsRUFBNEIsTUFBT0EsSUFBbkMsRUFBMEMsTUFBT3pHLE1BQU1nWCxRQUF2RCxFQUFrRSxRQUFTaFgsTUFBTU8sTUFBakYsRUFBMEYsVUFBVXdXLFdBQVd0USxJQUFYLENBQXBHLEdBRFk7QUFBQSxTQUFoQjtBQURKLEtBQVI7QUFNSCxDQWREOztBQWtCQW9RLE9BQU83VixTQUFQLEdBQW1CO0FBQ2ZxRyxXQUFPLG9CQUFVaEIsS0FERjtBQUVmMlEsY0FBVSxvQkFBVTdSLE1BRkw7QUFHZm9GLFdBQU8sb0JBQVV0SixNQUhGO0FBSWZ5RyxVQUFNLG9CQUFVdVAsS0FBVixDQUFnQixDQUFDak4sU0FBRCxFQUFZLElBQVosQ0FBaEIsQ0FKUztBQUtmb0wsVUFBTSxvQkFBVTZCLEtBQVYsQ0FBZ0IsQ0FBQ2pOLFNBQUQsRUFBWSxJQUFaLENBQWhCLENBTFM7QUFNZjdJLFdBQU8sb0JBQVVnRTtBQU5GLENBQW5COztlQVNlMFIsTTs7Ozs7Ozs7O2tDQTNCVEEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDTFVLLFcsR0FBQUEsVztRQU9BakgsTyxHQUFBQSxPO0FBUFQsU0FBU2lILFdBQVQsQ0FBcUJsTSxJQUFyQixFQUEyQjtBQUM5QixXQUFPO0FBQ0hySyxjQUFNLGNBREg7QUFFSHdXLGlCQUFTbk07QUFGTixLQUFQO0FBSUg7O0FBRU0sU0FBU2lGLE9BQVQsQ0FBaUJ6TyxJQUFqQixFQUF1QjtBQUMxQixXQUFPLFVBQUNrQixRQUFELEVBQVcwVSxRQUFYLEVBQXFCQyxPQUFyQixFQUFnQztBQUNuQyxlQUFPQSxRQUFRQyxHQUFSLENBQVksZUFBYTlWLEtBQUtLLEdBQTlCLEVBQW1DckIsSUFBbkMsQ0FBd0MsZ0JBQVE7QUFDbkRrQyxxQkFBU3dVLFlBQVlsTSxJQUFaLENBQVQ7QUFDQSxtQkFBT0EsSUFBUDtBQUNILFNBSE0sQ0FBUDtBQUlILEtBTEQ7QUFNSDs7Ozs7Ozs7a0NBZGVrTSxXOztrQ0FPQWpILE87Ozs7Ozs7Ozs7Ozs7Ozs7UUNQQXNILFEsR0FBQUEsUTtRQU9BQyxhLEdBQUFBLGE7UUFPQTNLLFcsR0FBQUEsVztRQU9BVSxZLEdBQUFBLFk7UUFPQWtLLGMsR0FBQUEsYztRQVdBeEMsUyxHQUFBQSxTO1FBVUF5QyxRLEdBQUFBLFE7QUFqRFQsU0FBU0gsUUFBVCxDQUFrQmhOLEtBQWxCLEVBQXlCO0FBQzVCLFdBQU87QUFDSDVKLGNBQU0sV0FESDtBQUVId1csaUJBQVM1TTtBQUZOLEtBQVA7QUFJSDs7QUFFTSxTQUFTaU4sYUFBVCxDQUF1QmxOLE1BQXZCLEVBQStCO0FBQ2xDLFdBQU87QUFDSDNKLGNBQU0sZ0JBREg7QUFFSHdXLGlCQUFTN007QUFGTixLQUFQO0FBSUg7O0FBRU0sU0FBU3VDLFdBQVQsQ0FBcUJ0QyxLQUFyQixFQUE0QjtBQUMvQixXQUFPO0FBQ0g1SixjQUFNLGNBREg7QUFFSHdXLGlCQUFTNU07QUFGTixLQUFQO0FBSUg7O0FBRU0sU0FBU2dELFlBQVQsQ0FBc0J4RixHQUF0QixFQUEyQjtBQUM5QixXQUFPO0FBQ0hwSCxjQUFNLGVBREg7QUFFSHdXLGlCQUFTcFA7QUFGTixLQUFQO0FBSUg7O0FBRU0sU0FBUzBQLGNBQVQsQ0FBd0JoTixFQUF4QixFQUE0QjtBQUMvQixXQUFPLFVBQUMvSCxRQUFELEVBQVcwVSxRQUFYLEVBQXFCQyxPQUFyQixFQUFpQztBQUNwQyxlQUFPQSxRQUFRQyxHQUFSLGdCQUF5QjdNLEVBQXpCLEVBQStCO0FBQ2xDUCxpQkFBS087QUFENkIsU0FBL0IsRUFFSmpLLElBRkksQ0FFQyxrQkFBVTtBQUNka0MscUJBQVM4VSxjQUFjbE4sTUFBZCxDQUFUO0FBQ0E7QUFDSCxTQUxNLENBQVA7QUFNSCxLQVBEO0FBUUg7O0FBRU0sU0FBUzJLLFNBQVQsQ0FBbUIxSyxLQUFuQixFQUEwQjtBQUM3QixXQUFPLFVBQUM3SCxRQUFELEVBQVcwVSxRQUFYLEVBQXFCQyxPQUFyQixFQUFpQztBQUNwQyxlQUFPQSxRQUFRTSxNQUFSLENBQWUsT0FBZixFQUF3QnBOLEtBQXhCLEVBQ0YvSixJQURFLENBQ0csZUFBTztBQUNUa0MscUJBQVM2VSxTQUFTSyxHQUFULENBQVQ7QUFDQSxtQkFBT0EsR0FBUDtBQUNILFNBSkUsQ0FBUDtBQUtILEtBTkQ7QUFPSDs7QUFFTSxTQUFTRixRQUFULENBQWtCbk4sS0FBbEIsRUFBeUI7QUFDNUIsV0FBTyxVQUFDN0gsUUFBRCxFQUFXMFUsUUFBWCxFQUFxQkMsT0FBckIsRUFBaUM7QUFDcEMsZUFBT0EsUUFBUTlXLE1BQVIsWUFBd0JnSyxNQUFNMUksR0FBOUIsRUFBcUMwSSxLQUFyQyxFQUNGL0osSUFERSxDQUNHLGVBQU87QUFDVGtDLHFCQUFTbUssWUFBWStLLEdBQVosQ0FBVDtBQUNBLG1CQUFPQSxHQUFQO0FBQ0gsU0FKRSxDQUFQO0FBS0gsS0FORDtBQU9IOzs7Ozs7OztrQ0F6RGVMLFE7O2tDQU9BQyxhOztrQ0FPQTNLLFc7O2tDQU9BVSxZOztrQ0FPQWtLLGM7O2tDQVdBeEMsUzs7a0NBVUF5QyxROzs7Ozs7Ozs7Ozs7Ozs7O1FDL0NBRyxXLEdBQUFBLFc7UUFPQXBJLE8sR0FBQUEsTzs7QUFUaEI7O0FBRU8sU0FBU29JLFdBQVQsQ0FBcUJyVyxJQUFyQixFQUEyQjtBQUM5QixXQUFPO0FBQ0hiLGNBQU0sY0FESDtBQUVId1csaUJBQVMzVjtBQUZOLEtBQVA7QUFJSDs7QUFFTSxTQUFTaU8sT0FBVCxHQUFtQjtBQUN0QixXQUFPLFVBQUMvTSxRQUFELEVBQVcwVSxRQUFYLEVBQXFCQyxPQUFyQixFQUFpQztBQUNwQyxZQUFJMVgsUUFBUXlYLFVBQVo7QUFDQSxZQUFJelgsTUFBTTZCLElBQU4sQ0FBV3dKLElBQWYsRUFBcUI7QUFDakIsbUJBQU84TSxRQUFRQyxPQUFSLENBQWdCcFksS0FBaEIsQ0FBUDtBQUNILFNBRkQsTUFFTztBQUNILG1CQUFPMFgsUUFBUUMsR0FBUixDQUFZLGVBQVosRUFDRjlXLElBREUsQ0FDRyxnQkFBUTtBQUNWa0MseUJBQVNtVixZQUFZclcsSUFBWixDQUFUO0FBQ0FrQix5QkFBUyxzQkFBWWxCLEtBQUt3SixJQUFqQixDQUFUO0FBQ0EsdUJBQU94SixJQUFQO0FBQ0gsYUFMRSxDQUFQO0FBTUg7QUFDSixLQVpEO0FBYUg7Ozs7Ozs7O2tDQXJCZXFXLFc7O2tDQU9BcEksTzs7Ozs7Ozs7Ozs7Ozs7OztRQ1RBdUksVyxHQUFBQSxXO1FBT0ExVixPLEdBQUFBLE87QUFQVCxTQUFTMFYsV0FBVCxDQUFxQi9YLElBQXJCLEVBQTJCO0FBQzlCLFdBQU87QUFDSFUsY0FBTSxjQURIO0FBRUh3VyxpQkFBU2xYO0FBRk4sS0FBUDtBQUlIOztBQUVNLFNBQVNxQyxPQUFULEdBQW1CO0FBQ3RCLFdBQU8sVUFBQ0ksUUFBRCxFQUFXMFUsUUFBWCxFQUFxQkMsT0FBckIsRUFBaUM7QUFDcEMsWUFBSTFYLFFBQVF5WCxVQUFaO0FBQ0EsWUFBSXpYLE1BQU1NLElBQU4sQ0FBVzRCLEdBQWYsRUFBb0I7QUFDaEIsbUJBQU9pVyxRQUFRQyxPQUFSLENBQWdCcFksTUFBTU0sSUFBdEIsQ0FBUDtBQUNILFNBRkQsTUFFTztBQUNILG1CQUFPb1gsUUFBUUMsR0FBUixDQUFZLGVBQVosRUFDRjlXLElBREUsQ0FDRyxnQkFBUTtBQUNWa0MseUJBQVNzVixZQUFZL1gsSUFBWixDQUFUO0FBQ0EsdUJBQU9BLElBQVA7QUFDSCxhQUpFLENBQVA7QUFLSDtBQUNKLEtBWEQ7QUFZSDs7Ozs7Ozs7a0NBcEJlK1gsVzs7a0NBT0ExVixPOzs7Ozs7Ozs7Ozs7Ozs7O1FDUEF1SyxXLEdBQUFBLFc7UUFVQWlKLFUsR0FBQUEsVTtRQU9BbUMsVyxHQUFBQSxXO0FBakJULFNBQVNwTCxXQUFULENBQXFCcEksS0FBckIsRUFBNEI1RCxLQUE1QixFQUFtQztBQUN0QyxXQUFPO0FBQ0hGLGNBQU0sa0JBREg7QUFFSHdXLGlCQUFTO0FBQ0wxUyx3QkFESztBQUVMNUQ7QUFGSztBQUZOLEtBQVA7QUFPSDs7QUFFTSxTQUFTaVYsVUFBVCxDQUFvQmpWLEtBQXBCLEVBQTJCO0FBQzlCLFdBQU87QUFDSEYsY0FBTSxhQURIO0FBRUh3VyxpQkFBU3RXO0FBRk4sS0FBUDtBQUlIOztBQUVNLFNBQVNvWCxXQUFULEdBQXVCO0FBQzFCLFdBQU87QUFDSHRYLGNBQU07QUFESCxLQUFQO0FBR0g7Ozs7Ozs7O2tDQXJCZWtNLFc7O2tDQVVBaUosVTs7a0NBT0FtQyxXOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJoQixJQUFNQyxlQUFlLEVBQXJCOztBQUVBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ25OLElBQUQsRUFBVTtBQUM1QkEsU0FBSytELE9BQUwsQ0FBYSxlQUFPO0FBQ2hCN0UsWUFBSXJKLEtBQUosR0FBWXFKLElBQUl4SixJQUFoQjtBQUNILEtBRkQ7QUFHQSxXQUFPc0ssSUFBUDtBQUNILENBTEQ7O0FBT0EsSUFBTWQsTUFBTSxTQUFOQSxHQUFNLEdBQWtDO0FBQUEsUUFBakN2SyxLQUFpQyx1RUFBekJ1WSxZQUF5QjtBQUFBLFFBQVhFLE1BQVc7O0FBQzFDLFlBQVFBLE9BQU96WCxJQUFmO0FBQ0EsYUFBSyxjQUFMO0FBQ0ksbUJBQU93WCxjQUFjQyxPQUFPakIsT0FBckIsQ0FBUDtBQUNKLGFBQUssVUFBTDtBQUNJLG1CQUFPeFgsS0FBUDtBQUNKO0FBQ0ksbUJBQU9BLEtBQVA7QUFOSjtBQVFILENBVEQ7O2VBV2V1SyxHOzs7Ozs7Ozs7a0NBcEJUZ08sWTs7a0NBRUFDLGE7O2tDQU9Bak8sRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ROOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1tTyxjQUFjLDRCQUFnQjtBQUNoQzlOLDJCQURnQztBQUVoQ0QsMkJBRmdDO0FBR2hDOUksd0JBSGdDO0FBSWhDd0osdUJBSmdDO0FBS2hDL0ssd0JBTGdDO0FBTWhDaVE7QUFOZ0MsQ0FBaEIsQ0FBcEI7O2VBU2VtSSxXOzs7Ozs7Ozs7a0NBVFRBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSTjs7Ozs7O0FBQ0EsSUFBTUgsZUFBZSxJQUFJLG9CQUFVSSxHQUFkLEVBQXJCOztBQUVBLFNBQVMvTixLQUFULEdBQTZDO0FBQUEsUUFBOUI1SyxLQUE4Qix1RUFBdEJ1WSxZQUFzQjtBQUFBLFFBQVJFLE1BQVE7O0FBQ3pDLFlBQVFBLE9BQU96WCxJQUFmO0FBQ0EsYUFBSyxXQUFMO0FBQ0ksbUJBQU9oQixNQUFNNFksR0FBTixDQUFVSCxPQUFPakIsT0FBUCxDQUFldFYsR0FBekIsRUFBOEJ1VyxPQUFPakIsT0FBckMsQ0FBUDtBQUNKLGFBQUssZUFBTDtBQUFzQjtBQUNsQixvQkFBTTdNLFNBQVMsSUFBSSxvQkFBVStDLEdBQWQsQ0FBa0IrSyxPQUFPakIsT0FBekIsQ0FBZjtBQUNBLHVCQUFPeFgsTUFBTTZZLFNBQU4sQ0FBZ0IsVUFBQ0MsQ0FBRDtBQUFBLDJCQUFNbk8sT0FBT29PLEdBQVAsQ0FBV0QsRUFBRTVXLEdBQWIsQ0FBTjtBQUFBLGlCQUFoQixDQUFQO0FBQ0g7QUFDRCxhQUFLLGdCQUFMO0FBQ0ksbUJBQU9sQyxNQUFNZ04sTUFBTixDQUFheUwsT0FBT2pCLE9BQVAsQ0FBZTdWLEdBQWYsQ0FBbUI7QUFBQSx1QkFBUyxDQUFDaUosTUFBTTFJLEdBQVAsRUFBVzBJLEtBQVgsQ0FBVDtBQUFBLGFBQW5CLENBQWIsQ0FBUDtBQUNKLGFBQUssY0FBTDtBQUNJLG1CQUFPNUssTUFBTTRZLEdBQU4sQ0FBVUgsT0FBT2pCLE9BQVAsQ0FBZXRWLEdBQXpCLEVBQThCdVcsT0FBT2pCLE9BQXJDLENBQVA7QUFDSjtBQUNJLG1CQUFPeFgsS0FBUDtBQVpKO0FBY0g7O2VBRWM0SyxLOzs7Ozs7Ozs7a0NBbkJUMk4sWTs7a0NBRUczTixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIVCxJQUFNMk4sZUFBZTtBQUNqQnpXLFlBQVEsRUFEUztBQUVqQjJULFVBQU0sRUFGVztBQUdqQnRULFlBQVE7QUFDSkMsaUJBQVMsRUFETDtBQUVKNFcsY0FBTTtBQUZGO0FBSFMsQ0FBckI7O0FBU0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDcFgsSUFBRCxFQUFVO0FBQzVCLHdCQUNPQSxJQURQO0FBRUlNLGdCQUFRO0FBQ0pDLHFCQUFTUCxLQUFLTSxNQUFMLENBQVlDLE9BQVosQ0FBb0JULEdBQXBCLENBQXdCLFVBQUNzSixLQUFELEVBQVFsRSxLQUFSLEVBQWtCO0FBQUMsdUJBQU8sRUFBQzdFLEtBQUs2RSxLQUFOLEVBQWE3RixPQUFPK0osS0FBcEIsRUFBUDtBQUFrQyxhQUE3RSxDQURMO0FBRUorTixrQkFBTW5YLEtBQUtNLE1BQUwsQ0FBWTZXLElBQVosQ0FBaUJyWCxHQUFqQixDQUFxQixVQUFDc0osS0FBRCxFQUFRbEUsS0FBUixFQUFrQjtBQUFDLHVCQUFPLEVBQUM3RSxLQUFLNkUsS0FBTixFQUFhN0YsT0FBTytKLEtBQXBCLEVBQVA7QUFBa0MsYUFBMUU7QUFGRixTQUZaO0FBTUluSixnQkFBUUQsS0FBS0MsTUFBTCxDQUFZSCxHQUFaLENBQWdCLGlCQUFTO0FBQUMsbUJBQU8sRUFBQ08sS0FBS1YsTUFBTVQsSUFBWixFQUFrQkcsT0FBT00sTUFBTVQsSUFBL0IsRUFBcUNTLE9BQU9BLE1BQU1BLEtBQWxELEVBQVA7QUFBZ0UsU0FBMUYsQ0FOWjtBQU9JaVUsY0FBTTVULEtBQUs0VCxJQUFMLENBQVU5VCxHQUFWLENBQWMsZUFBTztBQUFDLG1CQUFPLEVBQUNPLEtBQUs0VSxHQUFOLEVBQVc1VixPQUFPNFYsR0FBbEIsRUFBUDtBQUE4QixTQUFwRDtBQVBWO0FBU0gsQ0FWRDs7QUFZQSxJQUFNalYsT0FBTyxTQUFQQSxJQUFPLEdBQWtDO0FBQUEsUUFBakM3QixLQUFpQyx1RUFBekJ1WSxZQUF5QjtBQUFBLFFBQVhFLE1BQVc7O0FBQzNDLFlBQVFBLE9BQU96WCxJQUFmO0FBQ0EsYUFBSyxjQUFMO0FBQ0ksbUJBQU9pWSxjQUFjUixPQUFPakIsT0FBckIsQ0FBUDtBQUNKLGFBQUssVUFBTDtBQUNJLG1CQUFPeFgsS0FBUDtBQUNKO0FBQ0ksbUJBQU9BLEtBQVA7QUFOSjtBQVFILENBVEQ7O2VBV2U2QixJOzs7Ozs7Ozs7a0NBaENUMFcsWTs7a0NBU0FVLGE7O2tDQVlBcFgsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJOLElBQU0wVyxlQUFlLEVBQXJCOztBQUVBLElBQU1qWSxPQUFPLFNBQVBBLElBQU8sR0FBa0M7QUFBQSxRQUFqQ04sS0FBaUMsdUVBQXpCdVksWUFBeUI7QUFBQSxRQUFYRSxNQUFXOztBQUMzQyxZQUFRQSxPQUFPelgsSUFBZjtBQUNBLGFBQUssY0FBTDtBQUNJLG1CQUFPeVgsT0FBT2pCLE9BQWQ7QUFDSixhQUFLLFVBQUw7QUFDSSxtQkFBT3hYLEtBQVA7QUFDSjtBQUNJLG1CQUFPQSxLQUFQO0FBTko7QUFRSCxDQVREOztlQVdlTSxJOzs7Ozs7Ozs7a0NBYlRpWSxZOztrQ0FFQWpZLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRk4sSUFBTWlZLGVBQWU7QUFDakI5QyxVQUFNO0FBRFcsQ0FBckI7O0FBSUEsSUFBTXlELFNBQVMsU0FBVEEsTUFBUyxHQUFrQztBQUFBLFFBQWpDbFosS0FBaUMsdUVBQXpCdVksWUFBeUI7QUFBQSxRQUFYRSxNQUFXOztBQUM3QyxZQUFRQSxPQUFPelgsSUFBZjtBQUNBLGFBQUssa0JBQUw7QUFDSSxtQkFBTzRFLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCN0YsS0FBbEIsc0JBQTRCeVksT0FBT2pCLE9BQVAsQ0FBZTFTLEtBQTNDLEVBQW1EMlQsT0FBT2pCLE9BQVAsQ0FBZXRXLEtBQWxFLEVBQVA7QUFDSixhQUFLLGFBQUw7QUFDSSxtQkFBTzBFLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCN0YsS0FBbEIsRUFBeUIsRUFBQ3lWLE1BQU0wRCxVQUFVblosTUFBTXlWLElBQWhCLEVBQXNCZ0QsT0FBT2pCLE9BQTdCLENBQVAsRUFBekIsQ0FBUDtBQUNKLGFBQUssY0FBTDtBQUNJLG1CQUFPNVIsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsRUFBQzBFLEtBQUt2SyxNQUFNdUssR0FBWixFQUFpQmtMLE1BQU0sRUFBdkIsRUFBbEIsQ0FBUDtBQUNKO0FBQ0ksbUJBQU96VixLQUFQO0FBUko7QUFVSCxDQVhEOztlQWFla1osTTs7O0FBRWY7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQjFELElBQW5CLEVBQXlCcUIsR0FBekIsRUFBOEI7QUFDMUIsUUFBSWxVLE1BQU02UyxLQUFLc0IsT0FBTCxDQUFhRCxHQUFiLENBQVY7QUFDQXJCLHdDQUFXQSxJQUFYO0FBQ0EsUUFBSTdTLE9BQU8sQ0FBWCxFQUFjO0FBQ1Y2UyxhQUFLN1MsR0FBTCxJQUFZNlMsS0FBS0EsS0FBS3RVLE1BQUwsR0FBYyxDQUFuQixDQUFaO0FBQ0FzVSxhQUFLdFUsTUFBTCxHQUFjc1UsS0FBS3RVLE1BQUwsR0FBYyxDQUE1QjtBQUNBLGVBQU9zVSxJQUFQO0FBQ0g7QUFDRCxXQUFPQSxLQUFLekksTUFBTCxDQUFZOEosR0FBWixDQUFQO0FBQ0g7Ozs7Ozs7O2tDQTlCS3lCLFk7O2tDQUlBVyxNOztrQ0FpQkdDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCUjs7Ozs7OztBQVFNLElBQU1DLG9DQUFjLFNBQWRBLFdBQWM7QUFBQSxXQUFRLGlCQUFTO0FBQ3hDLG1DQUNLckwsSUFETCxFQUNZLENBQUMvTixNQUFNK04sSUFBTixDQURiO0FBR0gsS0FKMEI7QUFBQSxDQUFwQjs7Ozs7Ozs7a0NBQU1xTCxXOzs7Ozs7Ozs7Ozs7O0FDUmI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxZQUFhO0FBQ3hCLHVCQUFTQSxNQUFULENBQ0E7QUFBQTtBQUFBO0FBQ0Ysc0NBQUMsU0FBRDtBQURFLEtBREEsRUFJQUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUpBO0FBTUgsQ0FQRDs7QUFTQUY7O0FBRUFDLFNBQVNFLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JELFFBQUlDLFFBQVFILFNBQVNJLGdCQUFULENBQTBCLGdCQUExQixDQUFaO0FBQ0EsK0JBQVlELEtBQVo7QUFDSCxDQUhEOztBQUtBLElBQUksSUFBSixFQUFnQjtBQUNadkosWUFBUUMsR0FBUixDQUFZLFdBQVo7QUFDQTNRLFdBQU9DLEdBQVAsQ0FBV0MsTUFBWCxDQUFrQixrQkFBbEIsRUFBMkIsWUFBTTtBQUM3QixZQUFNSSxNQUFNLG1CQUFBRixDQUFRLGtCQUFSLEVBQWlCK1osT0FBN0I7QUFDQU4sZUFBT3ZaLEdBQVA7QUFDSCxLQUhEO0FBSUg7Ozs7Ozs7O2tDQXRCS3VaLE07Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQyxJQUFNdlgsMEJBQVMsQ0FDbEIsRUFBRSxPQUFPLEtBQVQsRUFBZ0IsU0FBUyxLQUF6QixFQUFnQyxTQUFTLFNBQXpDLEVBRGtCLEVBRWxCLEVBQUUsT0FBTyxRQUFULEVBQW1CLFNBQVMsUUFBNUIsRUFBc0MsU0FBUyxNQUEvQyxFQUZrQixFQUdsQixFQUFFLE9BQU8sUUFBVCxFQUFtQixTQUFTLFFBQTVCLEVBQXNDLFNBQVMsU0FBL0MsRUFIa0IsRUFJbEIsRUFBRSxPQUFPLE9BQVQsRUFBa0IsU0FBUyxPQUEzQixFQUFvQyxTQUFTLE1BQTdDLEVBSmtCLEVBS2xCLEVBQUUsT0FBTyxNQUFULEVBQWlCLFNBQVMsTUFBMUIsRUFBa0MsU0FBUyxTQUEzQyxFQUxrQixFQU1sQixFQUFFLE9BQU8sUUFBVCxFQUFtQixTQUFTLFFBQTVCLEVBQXNDLFNBQVMsTUFBL0MsRUFOa0IsRUFPbEIsRUFBRSxPQUFPLE9BQVQsRUFBa0IsU0FBUyxPQUEzQixFQUFvQyxTQUFTLE1BQTdDLEVBUGtCLEVBUWxCLEVBQUUsT0FBTyxPQUFULEVBQWtCLFNBQVMsT0FBM0IsRUFBb0MsU0FBUyxNQUE3QyxFQVJrQixFQVNsQixFQUFFLE9BQU8sTUFBVCxFQUFpQixTQUFTLE1BQTFCLEVBQWtDLFNBQVMsTUFBM0MsRUFUa0IsQ0FBZjs7QUFhQSxJQUFNOFgsNEJBQVU7QUFDbkJDLFVBQU0sRUFBQ3RJLFNBQVMsU0FBVixFQUFxQkMsV0FBVyxTQUFoQyxFQURhO0FBRW5Cc0ksVUFBTSxFQUFDdkksU0FBUyxTQUFWLEVBQXFCQyxXQUFXLFNBQWhDLEVBRmE7QUFHbkJ1SSxZQUFRLEVBQUN4SSxTQUFTLFNBQVYsRUFBcUJDLFdBQVcsU0FBaEMsRUFIVztBQUluQndJLFdBQU8sRUFBQ3pJLFNBQVMsU0FBVixFQUFxQkMsV0FBVyxTQUFoQyxFQUpZO0FBS25CeUksWUFBUSxFQUFDMUksU0FBUyxTQUFWLEVBQXFCQyxXQUFXLFNBQWhDLEVBTFc7QUFNbkIwSSxVQUFNLEVBQUMzSSxTQUFTLFNBQVYsRUFBcUJDLFdBQVcsU0FBaEMsRUFOYTtBQU9uQjJJLFNBQUssRUFBQzVJLFNBQVMsU0FBVixFQUFxQkMsV0FBVyxTQUFoQztBQVBjLENBQWhCOzs7Ozs7OztrQ0FiTTFQLE07O2tDQWFBOFgsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDYlBRLEM7Ozs7Ozs7Z0NBQ01oUyxHLEVBQUtpUyxJLEVBQU07QUFDZixnQkFBSSxDQUFDQSxJQUFMLEVBQ0lBLE9BQU8sY0FBQ3JZLENBQUQ7QUFBQSx1QkFBT0EsQ0FBUDtBQUFBLGFBQVA7QUFDSixnQkFBSXNZLFVBQVUsRUFBZDtBQUNBLGlCQUFLLElBQUlsVSxJQUFJLENBQVIsRUFBV3VHLElBQUl2RSxJQUFJakgsTUFBeEIsRUFBZ0NpRixJQUFJdUcsQ0FBcEMsRUFBdUN2RyxHQUF2QyxFQUE0QztBQUN4QyxvQkFBSXBFLElBQUlvRyxJQUFJaEMsQ0FBSixDQUFSO0FBQ0Esb0JBQUlpVSxLQUFLclksQ0FBTCxLQUFXc1ksT0FBZixFQUF3QjtBQUNwQkEsNEJBQVFELEtBQUtyWSxDQUFMLENBQVI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hzWSw0QkFBUUQsS0FBS3JZLENBQUwsQ0FBUixJQUFtQixDQUFuQjtBQUNIO0FBQ0o7QUFDRCxtQkFBT3NZLE9BQVA7QUFDSDs7O2dDQUVPbFMsRyxFQUFLTCxJLEVBQU07QUFDZixnQkFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQ0lBLE9BQU9BLEtBQUt3UyxLQUFMLENBQVcsR0FBWCxDQUFQO0FBQ0osZ0JBQUl4UyxnQkFBZ0IxQixLQUFwQixFQUNJMEIsT0FBTyxLQUFLeVMsU0FBTCxDQUFlelMsSUFBZixFQUFxQixDQUFyQixDQUFQO0FBQ0osaUJBQUssSUFBSTNCLElBQUksQ0FBUixFQUFXdUcsSUFBSXZFLElBQUlqSCxNQUF4QixFQUFnQ2lGLElBQUl1RyxDQUFwQyxFQUF1Q3ZHLEdBQXZDLEVBQTRDO0FBQ3hDMkIscUJBQUtLLElBQUloQyxDQUFKLENBQUw7QUFDSDtBQUNELG1CQUFPMkIsSUFBUDtBQUNIOzs7OEJBRUsvRixDLEVBQUdDLEMsRUFBRztBQUNSLGdCQUFJd1ksUUFBUXhZLElBQ05ELENBRE0sR0FFTixDQUZOO0FBR0EsZ0JBQUk0VSxNQUFNM1UsSUFDSkEsQ0FESSxHQUVKRCxDQUZOO0FBR0EsZ0JBQUlvRyxNQUFNLEVBQVY7O0FBRUEsaUJBQUssSUFBSWhDLElBQUlxVSxLQUFiLEVBQW9CclUsSUFBSXdRLEdBQXhCLEVBQTZCeFEsR0FBN0IsRUFBa0M7QUFDOUJnQyxvQkFBSXNTLElBQUosQ0FBU3RVLENBQVQ7QUFDSDs7QUFFRCxtQkFBT2dDLEdBQVA7QUFDSDs7OzJDQUVrQjBOLEcsRUFBSztBQUNwQkEsa0JBQU02RSxLQUFLMU0sS0FBTCxDQUFXME0sS0FBS0MsU0FBTCxDQUFlOUUsR0FBZixDQUFYLENBQU47O0FBRUEsaUJBQUssSUFBSXpOLEdBQVQsSUFBZ0J5TixHQUFoQixFQUFxQjtBQUNqQixvQkFBSXpOLElBQUkwTyxPQUFKLENBQVksR0FBWixNQUFxQixDQUFDLENBQTFCLEVBQ0E7QUFDSSx5QkFBSzhELGlCQUFMLENBQXVCeFMsR0FBdkIsRUFBNEJ5TixJQUFJek4sR0FBSixDQUE1QixFQUFzQ3lOLEdBQXRDO0FBQ0g7QUFDSjtBQUNELG1CQUFPQSxHQUFQO0FBQ0g7O0FBR0Q7Ozs7a0NBRVUxTixHLEVBQUswUyxHLEVBQUs7QUFDaEIsZ0JBQUlDLE9BQU8sRUFBWDtBQUNBLGlCQUFLLElBQUkzVSxJQUFJLENBQVIsRUFBV3VHLElBQUl2RSxJQUFJakgsTUFBeEIsRUFBZ0NpRixJQUFJdUcsQ0FBcEMsRUFBdUN2RyxHQUF2QyxFQUE0QztBQUN4QzJVLHFCQUFLM1MsSUFBSWhDLENBQUosQ0FBTCxJQUFlMFUsR0FBZjtBQUNIO0FBQ0QsbUJBQU9DLElBQVA7QUFDSDs7OzBDQUVpQkMsRyxFQUFLRixHLEVBQUtoRixHLEVBQUs7QUFDN0IsZ0JBQUltRixhQUFhbkYsR0FBakI7QUFBQSxnQkFDSTNLLE9BQU82UCxJQUFJVCxLQUFKLENBQVUsR0FBVixDQURYO0FBQUEsZ0JBRUluVSxDQUZKO0FBQUEsZ0JBRU91RyxJQUFJQyxLQUFLRyxHQUFMLENBQVMsQ0FBVCxFQUFZNUIsS0FBS2hLLE1BQUwsR0FBYyxDQUExQixDQUZYO0FBQUEsZ0JBR0lrSCxHQUhKOztBQUtBLGlCQUFLakMsSUFBSSxDQUFULEVBQVlBLElBQUl1RyxDQUFoQixFQUFtQixFQUFFdkcsQ0FBckIsRUFBd0I7QUFDcEJpQyxzQkFBTThDLEtBQUsvRSxDQUFMLENBQU47QUFDQTZVLDJCQUFXNVMsR0FBWCxJQUFrQjRTLFdBQVc1UyxHQUFYLEtBQW1CLEVBQXJDO0FBQ0E0Uyw2QkFBYUEsV0FBVzVTLEdBQVgsQ0FBYjtBQUNIOztBQUVENFMsdUJBQVc5UCxLQUFLL0UsQ0FBTCxDQUFYLElBQXNCMFUsR0FBdEI7QUFDQSxtQkFBT2hGLElBQUlrRixHQUFKLENBQVA7QUFDSDs7Ozs7O2VBTVUsSUFBSVosQ0FBSixFOzs7QUFFUixJQUFNYyw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsV0FBYTtBQUFBLGVBQVlDLGFBQWFDLE9BQWQsSUFBMEIsRUFBckM7QUFBQSxLQUFiO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUMsOEJBQVksWUFBVzs7QUFFaEMsUUFBTUMsTUFBTSxNQUFaO0FBQ0EsUUFBTUMsT0FBTyxRQUFiOztBQUVBLGFBQVMxTSxRQUFULENBQWtCeU0sR0FBbEIsRUFBdUI7QUFDbkIsWUFBTUUsS0FBS3hOLEtBQUsrSCxHQUFMLEtBQWEsSUFBSS9ILElBQUosQ0FBU3NOLEdBQVQsRUFBY0csT0FBZCxFQUF4Qjs7QUFFQSxZQUFNQyxRQUFRRixLQUFHRCxJQUFqQjs7QUFFQSxlQUFPM08sS0FBSytPLEtBQUwsQ0FBV0QsS0FBWCxDQUFQO0FBQ0g7O0FBRUQsV0FBTztBQUNISixnQkFERztBQUVIQyxrQkFGRztBQUdIMU07QUFIRyxLQUFQO0FBTUgsQ0FuQnVCLEVBQWpCOztBQXFCQSxJQUFNK00sd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxJQUFEO0FBQUEsV0FBVTtBQUFBLGVBQU0sSUFBSTFELE9BQUosQ0FBWTtBQUFBLG1CQUFXeEksV0FBV3lJLE9BQVgsRUFBb0J5RCxJQUFwQixDQUFYO0FBQUEsU0FBWixDQUFOO0FBQUEsS0FBVjtBQUFBLENBQWQ7Ozs7Ozs7O2tDQS9HRHpCLEM7O2tDQXdGT2MsUTs7a0NBRUFHLFE7O2tDQXFCQU8sSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQy9HRyxTQUFTRSxZQUFULEdBQXdCO0FBQ3BDLFdBQU87QUFDSHZVO0FBREcsS0FBUDs7QUFJQSxhQUFTQSxTQUFULENBQW1CL0YsS0FBbkIsRUFBMEI7QUFDdEIsWUFBRyxDQUFDQSxLQUFKLEVBQVc7QUFDWCxZQUFJdWEsV0FBV3ZhLE1BQU1MLE1BQU4sR0FBZSxDQUFmLEdBQWtCLE9BQWxCLEdBQTRCLElBQTNDO0FBQ0EsWUFBSTZhLFNBQVN4YSxNQUFNTCxNQUFOLEdBQWUsQ0FBZixHQUFrQixHQUFsQixHQUF3QixDQUFyQztBQUNBSyxnQkFBUUEsTUFBTXlhLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLEVBQW5CLEVBQXVCeE0sS0FBdkIsQ0FBNkJzTSxRQUE3QixDQUFSO0FBQ0EsZUFBT3ZhLE1BQU0wYSxNQUFOLENBQWEsVUFBQ2xhLENBQUQsRUFBSUMsQ0FBSjtBQUFBLG1CQUFXa2EsU0FBU2xhLENBQVQsRUFBWSxFQUFaLElBQWtCLENBQW5CLEdBQXdCRCxDQUFsQztBQUFBLFNBQWIsRUFBa0QsQ0FBbEQsSUFBdURnYSxNQUF2RCxHQUFnRSxNQUFoRSxHQUF5RSxNQUFoRjtBQUNIO0FBQ0osQ0FaYyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQVR0RSxPO0FBQ0YsdUJBQWM7QUFBQTs7QUFDVixhQUFLMEUsTUFBTCxHQUFjLE9BQWQ7QUFDSDs7Ozs0QkFFR0MsUSxFQUFVM00sTSxFQUFRO0FBQ2xCLG1CQUFPNE0sTUFBTSxLQUFLRixNQUFMLEdBQWNDLFFBQWQsR0FBeUJFLGFBQWE3TSxNQUFiLENBQS9CLEVBQ0Y3TyxJQURFLENBQ0c7QUFBQSx1QkFBT29YLElBQUl1RSxJQUFKLEVBQVA7QUFBQSxhQURILENBQVA7QUFFSDs7OytCQUVNSCxRLEVBQVU3YixJLEVBQU07QUFDbkIsbUJBQU84YixNQUFNLEtBQUtGLE1BQUwsR0FBY0MsUUFBcEIsRUFBOEI7QUFDakNJLHdCQUFRLE1BRHlCO0FBRWpDQyx5QkFBUztBQUNMLDhCQUFVLGtCQURMO0FBRUwsb0NBQWdCO0FBRlgsaUJBRndCO0FBTWpDQyxzQkFBTUMsV0FBV3BjLElBQVg7QUFOMkIsYUFBOUIsQ0FBUDtBQVFIOzs7K0JBRU02YixRLEVBQVU3YixJLEVBQU07QUFDbkIsbUJBQU84YixNQUFNLEtBQUtGLE1BQUwsR0FBY0MsUUFBcEIsRUFBOEI7QUFDakNJLHdCQUFRLEtBRHlCO0FBRWpDQyx5QkFBUztBQUNMLDhCQUFVLGtCQURMO0FBRUwsb0NBQWdCO0FBRlgsaUJBRndCO0FBTWpDRyw2QkFBYSxTQU5vQjtBQU9qQ0Ysc0JBQU1DLFdBQVdwYyxJQUFYO0FBUDJCLGFBQTlCLEVBU05LLElBVE0sQ0FTRDtBQUFBLHVCQUFPb1gsSUFBSXVFLElBQUosRUFBUDtBQUFBLGFBVEMsQ0FBUDtBQVVIOzs7Ozs7ZUFHVSxJQUFJOUUsT0FBSixFOzs7OztBQUVmLFNBQVM2RSxZQUFULENBQXNCekcsR0FBdEIsRUFBMkI7QUFDdkIsUUFBSSxDQUFDQSxHQUFMLEVBQVUsT0FBTyxFQUFQOztBQUVWLFdBQU8sTUFDSGxRLE9BQU91RixJQUFQLENBQVkySyxHQUFaLEVBQWlCblUsR0FBakIsQ0FBcUIsVUFBUzBHLEdBQVQsRUFBYztBQUMvQixlQUFPeVUsbUJBQW1CelUsR0FBbkIsSUFBMEIsR0FBMUIsR0FDSHlVLG1CQUFtQmhILElBQUl6TixHQUFKLENBQW5CLENBREo7QUFFSCxLQUhELEVBR0dxTixJQUhILENBR1EsR0FIUixDQURKO0FBS0g7O0FBRUQsU0FBU2tILFVBQVQsQ0FBb0I5RyxHQUFwQixFQUF5QjtBQUNyQixXQUFPNkUsS0FBS0MsU0FBTCxDQUFlOUUsR0FBZixDQUFQO0FBQ0g7Ozs7Ozs7O2tDQWpESzRCLE87O2tDQXFDRzZFLFk7O2tDQVVBSyxVOzs7Ozs7Ozs7Ozs7QUMvQ1QseUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRlcGVuZGVuY2llcyBzdWJtb2R1bGVzIGltcG9ydCAnLi9jb21wb25lbnRzL3V0aWwvdXRpbCcgaW1wb3J0XG4vLyAnLi9jb21wb25lbnRzL3J0Q2hhcnQvcnRDaGFydCcgaW1wb3J0ICcuL2NvbXBvbmVudHMvcnRXaXphcmQvcnRXaXphcmQnIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9neW1MaXN0L2d5bUxpc3QnIGltcG9ydCAnLi9jb21wb25lbnRzL21haW4vbWFpbicgaW1wb3J0XG4vLyAnLi9jb21wb25lbnRzL3J0R3ltL3J0R3ltJ1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFpbiBmcm9tICdjb21wb25lbnRzL21haW4nXG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdzZXJ2aWNlcy9mZXRjaGVyJ1xuaW1wb3J0IG1haW5SZWR1Y2VyIGZyb20gJ2RhdGEvcmVkdWNlcnMnXG5pbXBvcnQgeyBDb25uZWN0ZWRSb3V0ZXIsIHJvdXRlck1pZGRsZXdhcmV9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KClcbmNvbnN0IHJvdXRlTWlkZGxld2FyZSA9IHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSlcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBtYWluUmVkdWNlciwgXG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSwgXG4gICAgYXBwbHlNaWRkbGV3YXJlKHJvdXRlTWlkZGxld2FyZSwgdGh1bmsud2l0aEV4dHJhQXJndW1lbnQoZmV0Y2hlcikpXG4gICAgKVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL2RhdGEvcmVkdWNlcnMnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmUoJy4vZGF0YS9yZWR1Y2Vycy9pbmRleCcpXG4gICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSb290UmVkdWNlcilcbiAgICB9KVxufVxuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Q29ubmVjdGVkUm91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgICAgICAgICAgICA8TWFpbi8+XG4gICAgICAgICAgICAgICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvYXBwLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgUnRGb3JtIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCBmZXRjaGVyIGZyb20gJ3NlcnZpY2VzL2ZldGNoZXInXG5pbXBvcnQgcGksIHsgc2xlZXAgfSBmcm9tICdydHV0aWwnXG5cbmNsYXNzIEJhc2ljSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7ICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Rm9ybVxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM9eyB0aGlzLmZpZWxkcygpIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXsgdGhpcy5wcm9wcy51c2VyIH1cbiAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9eyB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgb25TYXZlPXsgdGhpcy5vblNhdmUgfVxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nPXsgdGhpcy5zdGF0ZS5wZW5kaW5nIH0gLz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG9uU2F2ZSA9IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGVuZGluZzogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudmFsdWVzID0gcGkuZXhwYW5kU2ltcGxlT2JqZWN0KGRhdGEpXG5cbiAgICAgICAgcmV0dXJuIGZldGNoZXIudXBkYXRlKCd1c2Vycy9jdXJyZW50JywgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKHNsZWVwKDEwMDApKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIH0pXG5cblxuICAgIH1cblxuICAgIGZpZWxkcyA9ICgpID0+IFtcbiAgICAgICAgW1xuICAgICAgICAgICAgJ0dlbmVyYWwnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VybmFtZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlRW1wdHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdFLW1haWwnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZUVtYWlsXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgW1xuICAgICAgICAgICAgJ1NldHRpbmcnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTmlja25hbWUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICduaWNrbmFtZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlRW1wdHlcbiAgICAgICAgICAgIH1dXG4gICAgXVxuXG4gICAgdmFsaWRhdGVFbXB0eSA9ICh2YWx1ZSkgPT4gdmFsdWUubGVuZ3RoID4gMFxuXG4gICAgdmFsaWRhdGVFbWFpbCA9ICh2YWx1ZSkgPT4gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdCh2YWx1ZSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0luZm9cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWNjb3VudC9jb21wb25lbnRzL2Jhc2ljSW5mby5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFJ0U3dhdGNoLCBGbGV4Um93LCBTb3J0YWJsZUxpc3QgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuaW1wb3J0IFJ0UGllIGZyb20gJ2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZSdcblxuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdydGNvbmZpZydcblxuXG5jb25zdCBMaXN0SXRlbUNvbG9yID0gKHByb3BzKSA9PiAoPGxpIHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJ0U3dhdGNoIGNvbG9yPXsgcHJvcHMuY29sb3IgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcblxuY29uc3QgTGlzdEl0ZW0gPSAocHJvcHMpID0+ICg8bGkgey4uLnByb3BzfT57cHJvcHMudmFsdWV9PC9saT4pICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbmNvbnN0IGF2YWlsYWJsZSA9IGNvbG9ycy5tYXAoY29sb3IgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbG9yXG4gICAgfVxufSlcblxuXG5jbGFzcyBUZWFtSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7ICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0ZWFtOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgPFNvcnRhYmxlTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXsgdGhpcy5wcm9wcy50ZWFtLmNvbG9ycy5zbGljZSgwLCA1KS5tYXAoY29sb3IgPT4geyByZXR1cm4geyBjb2xvcn0gfSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IGF2YWlsYWJsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9eyBMaXN0SXRlbUNvbG9yIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmF0b3I9eyhhLCBiKSA9PiAgYS5jb2xvci5faWQgPT09IGIuY29sb3IuX2lkfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUxpc3RcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpc3QtdW5zdHlsZWQnXG4gICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5wcm9wcy50ZWFtLmdyYWRlcy5ib3VsZGVyLnNsaWNlKDAsIDIpfVxuICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMudGVhbS5ncmFkZXMuYm91bGRlcn1cbiAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpc3RJdGVtfVxuICAgICAgICAgICAgICAgICAgIGNvbXBhcmF0b3I9eyhhLCBiKSA9PiBhLnZhbHVlID09PSBiLnZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8UnRQaWUgZGF0YT17WzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZWFtOiBzdGF0ZS50ZWFtXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShUZWFtSW5mbylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvdGVhbUluZm8uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFRhYiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IExvYWRCYXIsIFJ0Q2FyZCwgTG9hZENvbnRhaW5lciwgVGFiU3dpdGNoZXIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCBCYXNpY0luZm8gZnJvbSAnLi9jb21wb25lbnRzL2Jhc2ljSW5mbydcbmltcG9ydCBUZWFtSW5mbyBmcm9tICcuL2NvbXBvbmVudHMvdGVhbUluZm8nXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ2RhdGEvYWN0aW9ucy91c2VyJ1xuXG5jb25zdCB0YWJzID0gWydCYXNpYyBJbmZvJywgJ1RlYW0gSW5mbyddXG5cbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBwZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlOiAnQmFzaWMgSW5mbydcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnZXRVc2VyOiBQVC5mdW5jLFxuICAgICAgICB1c2VyOiBQVC5vYmplY3RcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TG9hZENvbnRhaW5lciBsb2FkZWQ9e3RoaXMuc3RhdGUubG9hZGVkfT5cbiAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICA8UnRDYXJkIHRpdGxlPVwiTXkgQWNjb3VudFwiPlxuICAgICAgICAgICAgICAgIDxUYWJTd2l0Y2hlciB0YWJzPXt0YWJzfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJJZih0aGlzLnN0YXRlLmFjdGl2ZSA9PSAnQmFzaWMgSW5mbycpKFxuICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkJhc2ljIEluZm9cIiBldmVudEtleT17MX0gdGFiQ2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPEJhc2ljSW5mbyB1c2VyPXt0aGlzLnByb3BzLnVzZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cmVuZGVySWYodGhpcy5zdGF0ZS5hY3RpdmUgPT09ICdUZWFtIEluZm8nKShcbiAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJUZWFtIEluZm9cIiBldmVudEtleT17Mn0gdGFiQ2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPFRlYW1JbmZvLz5cbiAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1J0Q2FyZD5cbiAgICAgICAgICAgIDwvTG9hZENvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHRvZ2dsZSA9IChpbmQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6IGluZFxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IHN0YXRlLnVzZXJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VXNlcjogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlcigpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEFjY291bnQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWNjb3VudC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHN0eWxlcyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6IHByb3BzLmlubGluZT8gJ2lubGluZS1mbGV4JyA6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IHByb3BzLmFyb3VuZD8gJ3NwYWNlLWFyb3VuZCcgOiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAuLi5wcm9wcy5zdHlsZVxuICAgIH1cbn1cblxuY29uc3QgZmxleFJvdyA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgc3R5bGU9eyBzdHlsZXMocHJvcHMpIH0gY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbilcblxuZmxleFJvdy5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsZXhSb3dcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vZmxleFJvdy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuY29uc3QgSWNvbiA9IChwcm9wcykgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCA4IDhcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBjbGFzc05hbWU9e3Byb3BzLmFsdENsYXNzIHx8ICdpY29uJ30+XG4gICAgICA8dXNlIHhsaW5rSHJlZj17JyMnICsgcHJvcHMuaWNvbn0gY2xhc3NOYW1lPXtwcm9wcy5jb2xvciB8fCAnaWNvbi1ibGFjayd9IC8+XG4gICAgPC9zdmc+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEljb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vaWNvbi5qc3giLCJpbXBvcnQgRmxleFJvdyBmcm9tICcuL2ZsZXhSb3cnXG5pbXBvcnQgSW5wdXRCb3ggZnJvbSAnLi9pbnB1dEJveCdcbmltcG9ydCBMb2FkQmFyIGZyb20gJy4vbG9hZEJhcidcbmltcG9ydCBMb2FkQ29udGFpbmVyIGZyb20gJy4vbG9hZENvbnRhaW5lcidcbmltcG9ydCBSdENhcmQgZnJvbSAnLi9ydENhcmQnXG5pbXBvcnQgUnRGb3JtIGZyb20nLi9ydEZvcm0nXG5pbXBvcnQgUnRMaXN0IGZyb20gJy4vcnRMaXN0J1xuaW1wb3J0IFJ0U3dhdGNoIGZyb20gJy4vcnRTd2F0Y2gnXG5pbXBvcnQgU3dpcGVDb250YWluZXIgZnJvbSAnLi9zd2lwZUNvbnRhaW5lcidcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbidcbmltcG9ydCBSdFBhbmUgZnJvbSAnLi9ydFBhbmUnXG5pbXBvcnQgU29ydGFibGVMaXN0IGZyb20gJy4vc29ydGFibGVMaXN0J1xuaW1wb3J0IFRhYlN3aXRjaGVyIGZyb20gJy4vdGFiU3dpdGNoZXInXG5cbmV4cG9ydCB7XG4gICAgLy8gVUkgXG4gICAgUnRDYXJkLFxuICAgIFJ0UGFuZSxcbiAgICBSdEZvcm0sXG4gICAgUnRMaXN0LFxuICAgIEljb24sXG4gICAgU29ydGFibGVMaXN0LFxuICAgIFRhYlN3aXRjaGVyLFxuXG4gICAgLy8gTEFZT1VUXG4gICAgRmxleFJvdyxcbiAgICBMb2FkQ29udGFpbmVyLFxuICAgIFN3aXBlQ29udGFpbmVyLFxuXG4gICAgLy9FTEVNRU5UU1xuICAgIElucHV0Qm94LFxuICAgIExvYWRCYXIsXG4gICAgUnRTd2F0Y2hcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cblxuY2xhc3MgSW5wdXRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB2YWxpZDogdHJ1ZVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHVwZGF0ZUZvcm06IFByb3BUeXBlcy5mdW5jXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGQudmFsaWRhdGUpIHtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IHRoaXMucHJvcHMuZmllbGQudmFsaWRhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2YWxpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICBmaWVsZDogdGhpcy5wcm9wcy5maWVsZFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRm9ybShkYXRhKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtmaWVsZCwgdmFsdWVzfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyB0aGlzLnN0YXRlLnZhbGlkID8gJ2Zvcm0tZ3JvdXAgcm93JyA6ICdmb3JtLWdyb3VwIHJvdyBoYXMtd2FybmluZycgfSBrZXk9eyBmaWVsZC5sYWJlbCB9PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsIGNvbC1tZC0yIGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgeyBmaWVsZC5sYWJlbCB9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCI+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmVkaXQgPyAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsgZmllbGQudHlwZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IGZpZWxkLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IHZhbHVlc1tmaWVsZC5uYW1lXSB8fCBmaWVsZC5sYWJlbCB9IC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXN0YXRpYyB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZXNbZmllbGQubmFtZV0gfHwgZmllbGQubGFiZWwgfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuSW5wdXRCb3gucHJvcFR5cGVzID0ge1xuICAgIGZpZWxkOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBlZGl0OiBQcm9wVHlwZXMuYm9vbFxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEJveFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbnB1dEJveC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IExvYWRCYXIgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5pbmxpbmU/ICdsb2FkLWJhciBsb2FkLWJhci1pbmxpbmUnIDogJ2xvYWQtYmFyJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1iYXJfX2JhclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtYmFyX19iYXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWJhcl9fYmFyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQmFyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2xvYWRCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2UgZnJvbSAncmVhY3QtY3NzLXRyYW5zaXRpb24tcmVwbGFjZSdcblxuXG5jbGFzcyBMb2FkQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIHRyYW5zaXRpb25OYW1lPVwibG9hZF9jb250YWluZXJcIiB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9IHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezUwMH0+XG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5sb2FkZWQgPyBjb250ZW50WzFdIDogY29udGVudFswXSB9XG4gICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2U+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vbG9hZENvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IHJlbmRlcklmIH0gZnJvbSAncnR1dGlsJ1xuXG5cbmNvbnN0IFJ0Q2FyZCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJ0LWNhcmRfX2NvbnRlbnRcIiBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgIHtyZW5kZXJJZihwcm9wcy50aXRsZSkoXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJydC1jYXJkX19oZWFkZXIgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgPC9kaXY+KX1cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJ0Q2FyZFxuXG5SdENhcmQucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydENhcmQuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBJbnB1dEJveCwgRmxleFJvdywgTG9hZEJhciB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgUnRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHsgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGZpZWxkczogW10sXG4gICAgICAgIHZhbHVlczoge31cbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBmaWVsZHM6IFBULmFycmF5T2YoXG4gICAgICAgICAgICBQVC5vbmVPZlR5cGUoW1xuICAgICAgICAgICAgICAgIFBULmFycmF5LFxuICAgICAgICAgICAgICAgIFBULnNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFBULnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogUFQuc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI6IFBULmZ1bmMsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IFBULmZ1bmMsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBQVC5mdW5jXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgICkpLmlzUmVxdWlyZWQsXG4gICAgICAgIHZhbHVlczogUFQub2JqZWN0LFxuICAgICAgICBlZGl0YWJsZTogUFQuYm9vbCxcbiAgICAgICAgcGVuZGluZzogUFQuYm9vbCxcbiAgICAgICAgb25TYXZlOiBQVC5mdW5jXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy52YWx1ZXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCIgc3R5bGU9eyB7IG9wYWNpdHk6IHRoaXMucHJvcHMucGVuZGluZyA/IDAuNSA6IDEsIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuM3MgbGluZWFyJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfSB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8RmxleFJvdyBpbmxpbmU+XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMucHJvcHMuZWRpdGFibGUgJiYgIXRoaXMuc3RhdGUuZWRpdCkoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17IHRoaXMudG9nZ2xlRWRpdCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMucHJvcHMuZWRpdGFibGUgJiYgdGhpcy5zdGF0ZS5lZGl0KShcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZUVkaXQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMuc3RhdGUuZWRpdCkoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2J0biBidG4tb3V0bGluZS1wcmltYXJ5JyArIHJlbmRlcklmKHRoaXMucHJvcHMucGVuZGluZykoJyBidG4tb3V0bGluZS1wZW5kaW5nJyl9IG9uQ2xpY2s9eyB0aGlzLnNhdmUgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsgdGhpcy5tYWtlRm9ybSgpIH1cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgdG9nZ2xlRWRpdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lZGl0ID8gdGhpcy5wcm9wcy52YWx1ZXMgOiB0aGlzLnN0YXRlLmRhdGEpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZWRpdDogIXRoaXMuc3RhdGUuZWRpdCxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnByb3BzLm9uU2F2ZSh0aGlzLnN0YXRlLmRhdGEpXG4gICAgICAgIGlmIChyZXN1bHQudGhlbikge1xuICAgICAgICAgICAgcmVzdWx0LnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VGb3JtID0gKGZpZWxkcykgPT4ge1xuICAgICAgICBmaWVsZHMgPSBmaWVsZHMgfHwgdGhpcy5wcm9wcy5maWVsZHNcbiAgICAgICAgcmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9eyBpIH0gc3R5bGU9eyB7IHBhZGRpbmc6ICczMHB4IDAgMCcgfSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+eyBmaWVsZFswXSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMubWFrZUZvcm0oZmllbGQuc2xpY2UoMSksIHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5lZGl0KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGZpZWxkLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9eyBmaWVsZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9eyB0aGlzLnN0YXRlLmRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdD17IHRoaXMuc3RhdGUuZWRpdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXsgdGhpcy51cGRhdGVGb3JtIH0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlRm9ybSA9ICh1cGRhdGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuZGF0YSwge1xuICAgICAgICAgICAgICAgIFt1cGRhdGUuZmllbGQubmFtZV06IHVwZGF0ZS52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0Rm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNvbnN0IFJ0TGlzdCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb19wb2RfX2xpc3RcIj5cbiAgICAgICAgeyBwcm9wcy5saXN0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKDxkaXYga2V5PXtpdGVtLl9pZCB8fCBpbmRleH0gY2xhc3NOYW1lPVwiXCI+e2l0ZW0udmFsdWUgfHwgaXRlbX08L2Rpdj4pKSB9XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFJ0TGlzdFxuXG5SdExpc3QucHJvcFR5cGVzID0ge1xuICAgIGxpc3RJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pKSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRMaXN0LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jb25zdCBSdENhcmQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9eydydC1wYW5lICcgKyAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKX0+XG4gICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSdENhcmRcblxuUnRDYXJkLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3J0UGFuZS5qc3giLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNvbG9yIGZyb20gJ3NlcnZpY2VzL2NvbG9yU2VydmljZSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY2xhc3MgUnRTd2F0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGMgPSB0aGlzLnByb3BzLmNvbG9yXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb2xvci5jb2xvcikge1xuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnByb3BzLmNvbG9ycy5maWx0ZXIoY29sb3IgPT4gY29sb3IudmFsdWUgPT09IHRoaXMucHJvcHMuY29sb3IudG9Mb3dlckNhc2UoKSlbMF1cbiAgICAgICAgICAgIGMgPSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHQ/IHQuY29sb3IgOiAnI0ZGRicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMuY29sb3IudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvY2FsU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGMuY29sb3IgfHwgJ3doaXRlJyxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvci50ZXh0Q29sb3IoYy5jb2xvciksXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCdcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgbG9jYWxTdHlsZSwgdGhpcy5wcm9wcy5zdHlsZT8gdGhpcy5wcm9wcy5zdHlsZSA6IHt9KVxuXG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9eyBzdHlsZSB9PjxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbi1zbS1kb3duXCI+eyBjLnZhbHVlIHx8ICcnIH08L3NwYW4+PC9zcGFuPilcbiAgICB9XG5cbn1cblxuUnRTd2F0Y2gucHJvcFR5cGVzID0ge1xuICAgIGNvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgY29sb3JzOiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2xvcnM6IHN0YXRlLnRlYW0uY29sb3JzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShSdFN3YXRjaClcblxuZXhwb3J0IHsgUnRTd2F0Y2ggfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydFN3YXRjaC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHJlbmRlcklmIH0gZnJvbSAncnR1dGlsJ1xuXG5cbmNsYXNzIFNvcnRhYmxlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGl0ZW1zOiBbXVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBsaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICBjb21wYXJhdG9yOiBQcm9wVHlwZXMuZnVuY1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLkxpc3RJdGVtID0gdGhpcy5wcm9wcy5jb21wb25lbnRcbiAgICAgICAgdGhpcy5jb21wYXJhdG9yID0gdGhpcy5wcm9wcy5jb21wYXJhdG9yIHx8ICgoYSwgYikgPT4gYSA9PT0gYilcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IHRoaXMucHJvcHMubGlzdFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBSLmRpZmZlcmVuY2VXaXRoKHRoaXMuY29tcGFyYXRvciwgdGhpcy5wcm9wcy5vcHRpb25zLCB0aGlzLnByb3BzLmxpc3QpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50OiBuZXh0UHJvcHMubGlzdFxuICAgICAgICB9KVxuICAgICAgICBpZiAobmV4dFByb3BzLm9wdGlvbnMgJiYgdGhpcy5zdGF0ZS5jdXJyZW50IHx8IG5leHRQcm9wcy5saXN0KSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gUi5kaWZmZXJlbmNlV2l0aCh0aGlzLmNvbXBhcmF0b3IsIG5leHRQcm9wcy5vcHRpb25zLCBuZXh0UHJvcHMubGlzdClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jdXJyZW50KSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuY2xhc3NOYW1lIH0gc3R5bGU9eyB7IGZvbnRTaXplOiAnMS41ZW0nIH0gfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY3VycmVudC5tYXAoKGl0ZW0sIGluZCwgYXJyKSA9PiA8dGhpcy5MaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc291cmNlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaXRlbS5rZXkgfHwgaW5kIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5tYWtlT3B0aW9ucyhpbmQsIGFyciwgJ2xpc3QnKX0vPikgfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLm9wdGlvbnMgPyAoXG4gICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfSBzdHlsZT17IHsgZm9udFNpemU6ICcxLjVlbScgfSB9PlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLm9wdGlvbnMubWFwKChpdGVtLCBpbmQsIGFycikgPT4gPHRoaXMuTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc291cmNlPVwib3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBpdGVtLmtleSB8fCBpbmQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5tYWtlT3B0aW9ucyhpbmQsIGFyciwgJ29wdGlvbnMnKX0vPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvQ29sPikgOiBudWxsIH1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbWFrZU9wdGlvbnMgPSAoaW5kLCBhcnIsIHNvdXJjZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgb25EcmFnU3RhcnQ6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnaW5kJywgaW5kKVxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NvdXJjZScsIHNvdXJjZSlcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EcmFnT3ZlcjogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRyb3A6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NvdXJjZScpXG4gICAgICAgICAgICAgICAgbGV0IGRlc3QgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zb3VyY2VcblxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IGRlc3QpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgbGV0IG9sZEluZCA9ICtlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdpbmQnKVxuICAgICAgICAgICAgICAgIGxldCBuZXdJbmQgPSBpbmRcblxuICAgICAgICAgICAgICAgIGxldCBsaXN0cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogWy4uLnRoaXMuc3RhdGUuY3VycmVudF0sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFsuLi50aGlzLnN0YXRlLm9wdGlvbnNdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5ld0luZCA9PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJbmQgPSBhcnIubGVuZ3RoXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuZXdFbCA9IGxpc3RzW3NvdXJjZV0uc3BsaWNlKG9sZEluZCwgMSlbMF1cbiAgICAgICAgICAgICAgICBsaXN0c1tkZXN0XS5zcGxpY2UobmV3SW5kLCAwLCBuZXdFbClcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBsaXN0cy5saXN0LFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBsaXN0cy5vcHRpb25zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29ydGFibGVMaXN0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3NvcnRhYmxlTGlzdC5qc3giLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBTd2lwZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBvblRvdWNoU3RhcnQ9e3RoaXMudG91Y2hTdGFydH0gb25Ub3VjaEVuZD17dGhpcy50b3VjaEVuZH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgdG91Y2hTdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGlmKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuXG4gICAgICAgIHRoaXMuc3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYXG4gICAgfVxuXG4gICAgdG91Y2hFbmQgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgZGlzdCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuc3RhcnRYXG4gICAgICAgIGlmKGRpc3QgPCAxMDAgJiYgZGlzdCA+IC0xMDApIHJldHVyblxuXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLm9uTGVmdCkgcmV0dXJuIHRoaXMucHJvcHMub25Td2lwZShkaXN0KVxuXG4gICAgICAgIGRpc3QgPiAwID8gdGhpcy5wcm9wcy5vblJpZ2h0KCkgOiB0aGlzLnByb3BzLm9uTGVmdCgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZUNvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9zd2lwZUNvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5mdW5jdGlvbiBpc0FjdGl2ZShwcm9wcywgdGFiKSB7XG4gICAgcmV0dXJuIHByb3BzLmFjdGl2ZSA9PT0gdGFiID8gJ2FjdGl2ZSB0ZXh0LWNhcGl0YWxpemUnIDogJ3RleHQtY2FwaXRhbGl6ZSdcbn1cblxuY29uc3QgU2xpZGVyID0gKCkgPT4gPGxpIGNsYXNzTmFtZT0ndGFiLXNsaWRlcicvPlxuXG5jb25zdCB0YWJTd2l0Y2hlciA9IChwcm9wcykgPT4gKFxuICAgIDxOYXYgdGFicz5cbiAgICAgIHsgcHJvcHMudGFicy5tYXAoKHRhYiwgaW5kKSA9PiAoXG4gICAgICAgICAgICA8TmF2SXRlbSBrZXk9e3RhYn0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNBY3RpdmUocHJvcHMsIHRhYikgfSBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4ge3Byb3BzLnRvZ2dsZSh0YWIpfSB9PlxuICAgICAgICAgICAgICAgIHt0YWJ9XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICkpIH1cbiAgICAgICAgPFNsaWRlciBrZXk9J3NsaWRlcicvPlxuICAgIDwvTmF2PlxuKVxuXG50YWJTd2l0Y2hlci5wcm9wVHlwZXMgPSB7XG4gICAgdGFiczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvZ2dsZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxudGFiU3dpdGNoZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHRhYnM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYlN3aXRjaGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3RhYlN3aXRjaGVyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUnRCYXIgZnJvbSAnY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyJ1xuXG5pbXBvcnQgeyBnZXRSb3V0ZXNCeUd5bSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IM+AIGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgR3ltSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFJvdXRlcyh0aGlzLnByb3BzLmd5bS5faWQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneW0taXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3ltLXRpdGxlIHRleHQtYnJhbmQgdGV4dC11cHBlcmNhc2UgdGV4dC10aGluXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17ICcvZ3ltcy8nICsgdGhpcy5wcm9wcy5neW0udXJsIH0gY2xhc3NOYW1lPVwibGluay1wbGFpblwiPlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd5bS1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVxuICAgICAgICAgICAgICAgICAgICA/IDxSdEJhciBkYXRhPXsgdGhpcy5wcm9wcy5kYXRhIH0gY29sb3I9e3RoaXMucHJvcHMuZ3ltLmNvbG9yfS8+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkd5bUl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGd5bTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICBsZXQgZ3ltUm91dGVzID0gc3RhdGUucm91dGVzLnRvQXJyYXkoKS5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBvd25Qcm9wcy5neW0uX2lkKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogdHJhbnNmb3JtUm91dGVzKGd5bVJvdXRlcylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Um91dGVzOiAoaWQpID0+IGRpc3BhdGNoKGdldFJvdXRlc0J5R3ltKGlkKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShHeW1JdGVtKVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzKSB7XG4gICAgaWYgKCFyb3V0ZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICAgIGxldCBzb3J0ZWQgPSDPgC5idWNrZXRzKHJvdXRlcy5tYXAoYm91bGRlciA9PiBib3VsZGVyLmdyYWRlKSwgz4AucmFuZ2UoMTMpKVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4gc29ydGVkW2tleV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9neW1JdGVtL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEd5bUl0ZW0gZnJvbSAnLi9neW1JdGVtJ1xuaW1wb3J0IHsgTG9hZEJhciwgTG9hZENvbnRhaW5lciwgUnRDYXJkIH1mcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuY2xhc3MgR3ltTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBneW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UnRDYXJkIHRpdGxlPVwiR3ltc1wiPlxuICAgICAgICAgICAgICA8TG9hZENvbnRhaW5lciBsb2FkZWQ9eyAhIXRoaXMucHJvcHMuZ3ltcy5sZW5ndGggfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIjBcIiBjbGFzc05hbWU9XCJneW0tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZEJhci8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIxXCIgY2xhc3NOYW1lPVwiZ3ltLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5neW1zLm1hcChneW0gPT4gKDxHeW1JdGVtIGtleT17IGd5bS5faWQgfSBneW09eyBneW0gfSBjbGFzc05hbWU9XCJneW0taXRlbVwiIC8+KSkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG4gICAgICAgICAgICA8L1J0Q2FyZD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBneW1zOiBzdGF0ZS5neW1zLFxuICAgICAgICBmZXRjaGluZzogc3RhdGUuZmV0Y2hpbmdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwUHJvcHMpKEd5bUxpc3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7cmVuZGVySWZ9IGZyb20gJ3J0dXRpbCdcblxuY29uc3QgYXJyb3dzID0geyBcbiAgICAnYXNjJzogJ1xcdTI1QjInLFxuICAgICdkZXNjJzogJ1xcdTI1QkMnXG59XG5cblxuY29uc3QgUm91dGVIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgICBmdW5jdGlvbiBhcnJvdyhwYXJhbSkge1xuICAgICAgICByZXR1cm4gcHJvcHMuc29ydCA9PT0gcGFyYW0/IGFycm93c1twcm9wcy5kaXJdIDogbnVsbFxuICAgIH0gXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGFibGUtY2VudGVyXCI+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ3NldF9vbicpfT5EYXRlIHthcnJvdygnc2V0X29uJyl9PC90aD5cbiAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnZ3JhZGUnKX0+R3JhZGUge2Fycm93KCdncmFkZScpfTwvdGg+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ2NvbG9yJyl9PkNvbG9yIHthcnJvdygnY29sb3InKX08L3RoPlxuICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCd3YWxsJyl9PldhbGwge2Fycm93KCd3YWxsJyl9PC90aD5cbiAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnc2V0dGVyJyl9PlNldHRlciB7YXJyb3coJ3NldHRlcicpfTwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0naGlkZGVuLXNtLWRvd24nPkVkaXQ8L3RoPlxuICAgICAgICAgIDx0aD57cHJvcHMuc2VsZWN0ZWQ/IDxhIGhyZWY9XCIjXCIgb25DbGljaz17cHJvcHMuZGVsZXRlSGFuZGxlcn0+UmVtb3ZlPC9hPiA6ICdTZWxlY3QnfTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgIClcbn1cblxuUm91dGVIZWFkZXIucHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZVNvcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc29ydDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVsZXRlSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlSGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IFJvdXRlUm93IGZyb20gJy4vcm91dGVSb3cnXG5pbXBvcnQgUm91dGVIZWFkZXIgZnJvbSAnLi9yb3V0ZUhlYWRlcidcblxuaW1wb3J0IHBpIGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgUm91dGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByb3V0ZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgdGVhbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZ3ltOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICB1cGRhdGVSb3V0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHJlbW92ZVJvdXRlczogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvdXRlczogc29ydE9uKFsuLi50aGlzLnByb3BzLnJvdXRlc10sICdzZXRfb24nKSxcbiAgICAgICAgICAgIHJhbmdlOiBbXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dCkge1xuICAgICAgICBpZiAobmV4dC5yb3V0ZXMpIHtcbiAgICAgICAgICAgIGxldCByb3V0ZXMgPSBzb3J0T24obmV4dC5yb3V0ZXMsIHRoaXMuc3RhdGUuc29ydCB8fCAnc2V0X29uJylcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJvdXRlczogdGhpcy5zdGF0ZS5kaXIgPT09ICdkZXNjJyA/IHJvdXRlcy5yZXZlcnNlKCkgOiByb3V0ZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1zbSB0YWJsZS1tb2JpbGUgdGFibGUtZml4ZWQgdGFibGVfX3JvdXRlbGlzdCc+XG4gICAgICAgICAgICAgIDxSb3V0ZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU29ydD17IHRoaXMuaGFuZGxlU29ydCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0PXsgdGhpcy5zdGF0ZS5zb3J0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcj17IHRoaXMuc3RhdGUuZGlyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUhhbmRsZXI9eyB0aGlzLmRlbGV0ZUhhbmRsZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyB0aGlzLnN0YXRlLnJhbmdlLmxlbmd0aCA+IDAgfSAvPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUucm91dGVzLm1hcCgocm91dGUsIGluZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kPXsgaW5kIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyByb3V0ZS5faWQgKyByb3V0ZS51cGRhdGVkX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZT17IHJvdXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RIYW5kbGVyPXsgdGhpcy5zZWxlY3RIYW5kbGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHRoaXMuc3RhdGUucmFuZ2UuaW5jbHVkZXMoaW5kKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbT17IHRoaXMucHJvcHMudGVhbSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm91dGU9eyB0aGlzLnVwZGF0ZVJvdXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxscz17dGhpcy5wcm9wcy53YWxsc30gLz5cbiAgICAgICAgICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHNlbGVjdEhhbmRsZXIgPSB7XG4gICAgICAgIG1vdXNlRG93bjogKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgICBsZXQgbW9kaWZpZXIgPSBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5XG4gICAgICAgICAgICBsZXQgc2hpZnQgPSBlLnNoaWZ0S2V5XG4gICAgICAgICAgICBsZXQgaW5kID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG4gICAgICAgICAgICBsZXQgcmFuZ2VcblxuICAgICAgICAgICAgaWYgKG1vZGlmaWVyICYmIHRoaXMubGFzdFNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbCA9IE1hdGgubWluKHRoaXMubGFzdFNlbGVjdGVkLCBpbmQpXG4gICAgICAgICAgICAgICAgbGV0IGggPSBNYXRoLm1heCh0aGlzLmxhc3RTZWxlY3RlZCwgaW5kKVxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHBpLnJhbmdlKGwsIGggKyAxKVxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFNlbGVjdGVkID0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSB0aGlzLnN0YXRlLnJhbmdlLmNvbmNhdChzZWxlY3RlZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXIgJiYgIXRoaXMubGFzdFNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWQgPSBpbmRcbiAgICAgICAgICAgICAgICByYW5nZSA9IHRoaXMuc3RhdGUucmFuZ2UuY29uY2F0KGluZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpZnQgJiYgdGhpcy5zdGF0ZS5yYW5nZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbCA9IE1hdGgubWluKC4uLnRoaXMuc3RhdGUucmFuZ2UpXG4gICAgICAgICAgICAgICAgbGV0IGggPSBNYXRoLm1heCguLi50aGlzLnN0YXRlLnJhbmdlKVxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGluZCA8PSBoID8gcGkucmFuZ2UoaW5kLCBoICsgMSkgOiBwaS5yYW5nZShsLCBpbmQgKyAxKVxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFNlbGVjdGVkID0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSB0aGlzLnN0YXRlLnJhbmdlLmNvbmNhdChzZWxlY3RlZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWQgPSBpbmRcbiAgICAgICAgICAgICAgICByYW5nZSA9IHRoaXMuc3RhdGUucmFuZ2UuaW5jbHVkZXMoaW5kKSAmJiB0aGlzLnN0YXRlLnJhbmdlLmxlbmd0aCA9PT0gMSA/IFtdIDogW2luZF1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmFuZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgaW5kcyA9IFsuLi5uZXcgU2V0KHRoaXMuc3RhdGUucmFuZ2UpXVxuICAgICAgICBjb25zdCBpZHMgPSBpbmRzLm1hcChpbmQgPT4gdGhpcy5zdGF0ZS5yb3V0ZXNbaW5kXS5faWQpXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVSb3V0ZXMoaWRzKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJhbmdlOiBbXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVNvcnQgPSAocGFyYW0pID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdSb3V0ZXMgPSBbLi4udGhpcy5zdGF0ZS5yb3V0ZXNdLFxuICAgICAgICAgICAgICAgIGRpclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydCA9PT0gcGFyYW0pIHtcbiAgICAgICAgICAgICAgICBuZXdSb3V0ZXMucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgZGlyID0gdGhpcy5zdGF0ZS5kaXIgPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc29ydE9uKG5ld1JvdXRlcywgcGFyYW0pXG4gICAgICAgICAgICAgICAgZGlyID0gJ2FzYydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZGlyLFxuICAgICAgICAgICAgICAgIHNvcnQ6IHBhcmFtLFxuICAgICAgICAgICAgICAgIHJvdXRlczogbmV3Um91dGVzLFxuICAgICAgICAgICAgICAgIHJhbmdlOiBbXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJvdXRlID0gKG5ld1JvdXRlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm91dGVzOiB0aGlzLnN0YXRlLnJvdXRlcy5tYXAocm91dGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZS5faWQgPT09IG5ld1JvdXRlLl9pZCA/IG5ld1JvdXRlIDogcm91dGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUm91dGUobmV3Um91dGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzb3J0T24oYXJyLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09ICdncmFkZScpIHtcbiAgICAgICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBhW3Byb3BdIC0gYltwcm9wXSlcbiAgICB9XG5cbiAgICBpZiAocHJvcCA9PT0gJ3NldF9vbicpIHtcbiAgICAgICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBEYXRlLnBhcnNlKGEuc2V0X29uKSAtIERhdGUucGFyc2UoYi5zZXRfb24pKVxuICAgIH1cbiAgICByZXR1cm4gYXJyLnNvcnQoXG4gICAgICAgIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhW3Byb3BdIDwgYltwcm9wXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhW3Byb3BdID4gYltwcm9wXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVMaXN0LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgUnRTd2F0Y2gsIEZsZXhSb3csIEljb24gfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuaW1wb3J0IHsgZGF0ZU1hdGh9IGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgUm91dGVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBlZGl0OiBmYWxzZVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGluZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgcm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHNlbGVjdEhhbmRsZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgdGVhbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgdXBkYXRlUm91dGU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICB3YWxsczogUHJvcFR5cGVzLmFycmF5XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5lZGl0ID8gKFxuICAgICAgPHRyIGNsYXNzTmFtZT17J3RhYmxlLWNlbnRlciAnICsgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPyAncm91dGUtcm93X19zZWxlY3RlZCcgOiAnJyl9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ3ltLXJvd19fZGF0ZVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXNtIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJzZXRfb25cIlxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZSh0aGlzLnByb3BzLnJvdXRlLnNldF9vbikudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1zbSBmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBuYW1lPVwiZ3JhZGVcIlxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnJvdXRlLmdyYWRlfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtc20gZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZS5jb2xvcn0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXNtIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2FsbFwiXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucm91dGUud2FsbH0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy53YWxscy5tYXAod2FsbCA9PiAoXG4gICAgICAgICAgICAgICA8b3B0aW9uIGtleT17d2FsbH0gdmFsdWU9e3dhbGx9PlxuICAgICAgICAgICAgICAgICB7d2FsbH1cbiAgICAgICAgICAgICAgIDwvb3B0aW9uPikpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtc20gZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnVwZGF0ZUZpZWxkfVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnJvdXRlLnNldHRlcn0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50ZWFtLm1lbWJlcnMubWFwKHNldHRlciA9PiAoXG4gICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c2V0dGVyLl9pZH0gdmFsdWU9e3NldHRlci5uaWNrbmFtZX0+XG4gICAgICAgICAgICAgICAgIHtzZXR0ZXIubmlja25hbWV9XG4gICAgICAgICAgICAgICA8L29wdGlvbj4pKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImd5bS1yb3dfX2VkaXQgaGlkZGVuLXNtLWRvd25cIj5cbiAgICAgICAgICA8RmxleFJvdyBpbmxpbmUgYXJvdW5kIHN0eWxlPXt7IHdpZHRoOiAnODAlJyB9fT5cbiAgICAgICAgICAgIDxJY29uIG9uQ2xpY2s9e3RoaXMuY2FuY2VsRWRpdH0gaWNvbj1cInhcIiAvPlxuICAgICAgICAgICAgPEljb24gb25DbGljaz17dGhpcy50b2dnbGVFZGl0fSBpY29uPVwiY2hlY2tcIiAvPlxuICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImhpZGRlbi1zbVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5zZWxlY3RIYW5kbGVyLm1vdXNlRG93bn1cbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgZGF0YS1pbmRleD17dGhpcy5wcm9wcy5pbmR9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgKSA6IChcbiAgICAgIDx0ciBjbGFzc05hbWU9eyd0YWJsZS1jZW50ZXIgJyArICh0aGlzLnByb3BzLnNlbGVjdGVkID8gJ3JvdXRlLXJvd19fc2VsZWN0ZWQnIDogJycpfSBvbkRvdWJsZUNsaWNrPXt0aGlzLnRvZ2dsZUVkaXR9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ3ltLXJvd19fZGF0ZVwiPlxuICAgICAgICAgIHtuZXcgRGF0ZSh0aGlzLnByb3BzLnJvdXRlLnNldF9vbikudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4tbWQtZG93blwiPlxuICAgICAgICAgICAgeycgKCcgKyBkYXRlTWF0aC53ZWVrc09sZCh0aGlzLnByb3BzLnJvdXRlLnNldF9vbikgKyAnIHdlZWtzIG9sZCknfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge3RoaXMucHJvcHMucm91dGUuZ3JhZGV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7PFJ0U3dhdGNoIGNsYXNzTmFtZT1cImxpc3RfX3N3YXRjaFwiIGNvbG9yPXt0aGlzLnByb3BzLnJvdXRlLmNvbG9yfSAvPn1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJvdXRlLndhbGx9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yb3V0ZS5zZXR0ZXJ9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J2hpZGRlbi1zbS1kb3duJz5cbiAgICAgICAgICA8SWNvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXR9IGljb249XCJwZW5jaWxcIiAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaGlkZGVuLXNtXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByb3BzLnNlbGVjdEhhbmRsZXIubW91c2VEb3dufVxuICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICBkYXRhLWluZGV4PXt0aGlzLnByb3BzLmluZH0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICApXG4gICAgfVxuXG4gICAgY2FuY2VsRWRpdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0OiAhdGhpcy5zdGF0ZS5lZGl0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlRWRpdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVSb3V0ZSh0aGlzLnJvdXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMucm91dGUpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZWRpdDogIXRoaXMuc3RhdGUuZWRpdFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRlbGV0ZVJvdXRlID0gKCkgPT4ge1xuICAgIH1cblxuICAgIHVwZGF0ZUZpZWxkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBmaWVsZCA9IGV2ZW50LnRhcmdldC5uYW1lXG4gICAgICAgIHRoaXMucm91dGVbZmllbGRdID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVSb3dcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlUm93LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFJ0UGFuZSB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5jbGFzcyBTdGF0c0NhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHRoaXMubWFrZU92ZXJ2aWV3KHRoaXMucHJvcHMuZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUpIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UnRQYW5lPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJydC1wYW5lX19oZWFkZXJcIj5PdmVydmlldzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIENvdW50OlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmRhdGEuY291bnQgfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXMgTmVlZGVkOlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgTi9BXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIE9sZGVzdCBSb3V0ZTpcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5kYXRhLm9sZGVzdCB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L1J0UGFuZT5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG1ha2VPdmVydmlldyhkYXRhKSB7XG4gICAgICAgIGxldCBtaW4gPSBJbmZpbml0eVxuXG4gICAgICAgIGRhdGEuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICAgICAgICBpZiAobWluID4gRGF0ZS5wYXJzZShyb3V0ZS5zZXRfb24pKVxuICAgICAgICAgICAgICAgIG1pbiA9IHJvdXRlLnNldF9vblxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291bnQ6IGRhdGEubGVuZ3RoLFxuICAgICAgICAgICAgb2xkZXN0OiBuZXcgRGF0ZShtaW4pLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblN0YXRzQ2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHNDYXJkXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvc3RhdHNDYXJkLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBSdEJpZ0JhciBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvcnRCaWdCYXInXG5pbXBvcnQgeyBMb2FkQ29udGFpbmVyLCBMb2FkQmFyLCBSdENhcmQsIFRhYlN3aXRjaGVyIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgU3RhdHNDYXJkIGZyb20gJy4vY29tcG9uZW50cy9zdGF0c0NhcmQnXG5pbXBvcnQgUm91dGVMaXN0IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZUxpc3QnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZSBmcm9tICdyZWFjdC1jc3MtdHJhbnNpdGlvbi1yZXBsYWNlJ1xuaW1wb3J0IHtSb3csIENvbH0gZnJvbSAncmVhY3RzdHJhcCdcblxuaW1wb3J0IHsgZ2V0VGVhbSB9IGZyb20gJ2RhdGEvYWN0aW9ucy90ZWFtJ1xuaW1wb3J0IHsgZ2V0Um91dGVzQnlHeW0sIHB1dFJvdXRlLCByZW1vdmVSb3V0ZXMgfSBmcm9tICdkYXRhL2FjdGlvbnMvcm91dGUnXG5cbmltcG9ydCBwaSBmcm9tICdydHV0aWwnXG5cbmNsYXNzIEd5bU92ZXJ2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlOiAncm9wZSdcbiAgICB9XG5cbiAgICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHR5cGVzOiBbXVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGd5bTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgbWF0Y2g6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHRlYW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHJvdXRlczogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICBnZXRUZWFtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgZ2V0Um91dGVzOiBQcm9wVHlwZXMuZnVuY1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmdldERhdGFGb3JHeW0odGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubmFtZSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5neW0gJiYgbmV4dFByb3BzLmd5bSAmJiB0aGlzLnByb3BzLmd5bS5uYW1lICE9PSBuZXh0UHJvcHMuZ3ltLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZ2V0RGF0YUZvckd5bShuZXh0UHJvcHMuZ3ltLnVybCksIDMwMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMucm91dGVzICYmIHRoaXMucHJvcHMuZ3ltKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjb3VudDogdGhpcy51cGRhdGVSb3V0ZXMobmV4dFByb3BzLnJvdXRlcyksXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUm91dGVzID0gKG5ld1JvdXRlcywgdHlwZSkgPT4ge1xuICAgICAgICB0eXBlID0gdHlwZT8gdHlwZS50b0xvd2VyQ2FzZSgpIDogdGhpcy5wcm9wcy5neW0udHlwZVswXVxuICAgICAgICBsZXQgZ3JhZGVzID0gdGhpcy5wcm9wcy50ZWFtLmdyYWRlc1t0eXBlXVxuICAgICAgICBsZXQgcm91dGVzID0gbmV3Um91dGVzLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS50eXBlID09PSB0eXBlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvdXRlczogcm91dGVzXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzLCBncmFkZXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikgcmV0dXJuIDxSZWRpcmVjdCB0bz0nLycgLz5cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmd5bSkgcmV0dXJuICg8UnRDYXJkIHN0eWxlPXt7IG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAxMDBweCknIH19PiA8TG9hZEJhci8+PC9SdENhcmQ+KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT17dGhpcy5zdGF0ZS5sb2FkZWQ/IHRoaXMucHJvcHMuZ3ltLm5hbWUgOiAnJ30ga2V5PXt0aGlzLnByb3BzLmd5bS5uYW1lfSBzdHlsZT17eyBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJyB9fT5cbiAgICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXt0aGlzLnN0YXRlLmxvYWRlZH0+XG4gICAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJTd2l0Y2hlciB0YWJzPXt0aGlzLnByb3BzLmd5bS50eXBlfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGVyYXRvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UnRCaWdCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3RoaXMucHJvcHMuZ3ltLmNvbG9yfT48L1J0QmlnQmFyPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI0XCIgY2xhc3NOYW1lPVwiY29sLW5wIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGF0c0NhcmQgZGF0YT17dGhpcy5zdGF0ZS5yb3V0ZXN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwZXJhdG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2UgdHJhbnNpdGlvbk5hbWU9XCJsb2FkX2NvbnRhaW5lclwiIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezUwMH0gdHJhbnNpdGlvbkxlYXZlVGltZW91dD17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnN0YXRlLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzPXt0aGlzLnN0YXRlLnJvdXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm91dGU9e3RoaXMucHJvcHMudXBkYXRlUm91dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJvdXRlcz17dGhpcy5wcm9wcy5yZW1vdmVSb3V0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW09e3RoaXMucHJvcHMudGVhbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbHM9e3RoaXMucHJvcHMuZ3ltLndhbGxzW3RoaXMuc3RhdGUuYWN0aXZlXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2U+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG4gICAgICAgICAgICA8L1J0Q2FyZD5cblxuICAgICAgICApXG4gICAgfVxuXG4gICAgdG9nZ2xlID0gKGtleSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGtleSkgcmV0dXJuXG4gICAgICAgIGxldCByb3V0ZXMgPSB0aGlzLnVwZGF0ZVJvdXRlcyh0aGlzLnByb3BzLnJvdXRlcywga2V5KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZToga2V5LFxuICAgICAgICAgICAgY291bnQ6IHJvdXRlc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldERhdGFGb3JHeW0obmFtZSkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFRlYW0oKVxuICAgICAgICAgICAgLnRoZW4odGVhbSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRHeW0gPSB0ZWFtLmd5bXMuZmlsdGVyKGd5bSA9PiBuYW1lID09PSBneW0udXJsKVswXVxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudEd5bSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ2V0Um91dGVzKGN1cnJlbnRHeW0uX2lkKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGxldCBneW0gPSBzdGF0ZS5neW1zLmZpbHRlcihneW0gPT4gZ3ltLnVybCA9PT0gb3duUHJvcHMubWF0Y2gucGFyYW1zLm5hbWUpWzBdXG4gICAgbGV0IHJvdXRlcyA9IHN0YXRlLnJvdXRlcy5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBneW0uX2lkKVxuICAgIGxldCBhcnIgPSByb3V0ZXMudG9BcnJheSgpXG4gICAgYXJyLmZvckVhY2goKHJvdXRlLCBpbmQpID0+IHJvdXRlLmluZCA9IGluZClcbiAgICByZXR1cm4ge1xuICAgICAgICBneW06IGd5bSxcbiAgICAgICAgcm91dGVzOiBhcnIsXG4gICAgICAgIHRlYW06IHN0YXRlLnRlYW1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VGVhbTogKCkgPT4gZGlzcGF0Y2goZ2V0VGVhbSgpKSxcbiAgICAgICAgZ2V0Um91dGVzOiAoaWQpID0+IGRpc3BhdGNoKGdldFJvdXRlc0J5R3ltKGlkKSksXG4gICAgICAgIHVwZGF0ZVJvdXRlOiAocm91dGUpID0+IGRpc3BhdGNoKHB1dFJvdXRlKHJvdXRlKSksXG4gICAgICAgIHJlbW92ZVJvdXRlczogKGFycikgPT4gZGlzcGF0Y2gocmVtb3ZlUm91dGVzKGFycikpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoR3ltT3ZlcnZpZXcpXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlcyhyb3V0ZXMsIGdyYWRlcykge1xuICAgIGlmICghZ3JhZGVzIHx8ICFyb3V0ZXMpIHJldHVybiBbXVxuICAgIGxldCBzb3J0ZWQgPSBwaS5idWNrZXRzKHJvdXRlcy5tYXAocm91dGUgPT4gcm91dGUuZ3JhZGUpLCBwaS5yYW5nZShncmFkZXMubGVuZ3RoKSlcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc29ydGVkKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdyYWRlOiBncmFkZXNba2V5XSAmJiBncmFkZXNba2V5XS52YWx1ZSxcbiAgICAgICAgICAgIGNvdW50OiBzb3J0ZWRba2V5XVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRUZWFtIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3RlYW0nXG5pbXBvcnQgeyBnZXRHeW1zIH0gZnJvbSAnZGF0YS9hY3Rpb25zL2d5bSdcblxuaW1wb3J0IFJ0SGVhZGVyIGZyb20gJy4vcnRIZWFkZXInXG5pbXBvcnQgUnRDb250ZW50IGZyb20gJy4vcnRDb250ZW50J1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHsgXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VGVhbSgpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxSdEhlYWRlciBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0vPlxuICAgICAgICAgICAgICAgIDxSdENvbnRlbnQgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbk1haW4ucHJvcFR5cGVzID0ge1xuICAgIGdldFRlYW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZ2V0R3ltczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRlYW06IHN0YXRlLnRlYW0sXG4gICAgICAgIGd5bXM6IHN0YXRlLmd5bXMsXG4gICAgICAgIGxvY2F0aW9uOiBzdGF0ZS5yb3V0ZXIubG9jYXRpb25cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VGVhbTogKCkgPT4gZGlzcGF0Y2goZ2V0VGVhbSgpKSxcbiAgICAgICAgZ2V0R3ltczogKHRlYW0pID0+IGRpc3BhdGNoKGdldEd5bXModGVhbSkpXG4gICAgfVxufVxuXG5jb25zdCBtYWluQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKE1haW4pXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGFpbmVyXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgR3ltTGlzdCBmcm9tICdjb21wb25lbnRzL2d5bUxpc3QnXG5pbXBvcnQgR3ltT3ZlcnZpZXcgZnJvbSAnY29tcG9uZW50cy9neW1PdmVydmlldydcbmltcG9ydCBBY2NvdW50IGZyb20gJ2NvbXBvbmVudHMvYWNjb3VudCdcblxuaW1wb3J0IFJ0V2l6YXJkQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvcnRXaXphcmQnXG5cbmNsYXNzIFJ0Q29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxTd2l0Y2ggbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259PlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0d5bUxpc3R9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9neW1zLzpuYW1lJyBjb21wb25lbnQ9e0d5bU92ZXJ2aWV3fSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWRkJyBjb21wb25lbnQ9e1J0V2l6YXJkQ29udGFpbmVyfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWNjb3VudCcgY29tcG9uZW50PXtBY2NvdW50fSAvPlxuICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0Q29udGVudFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9ydENvbnRlbnQvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29sbGFwc2UsIE5hdmJhciwgTmF2YmFyVG9nZ2xlciwgTmF2YmFyQnJhbmQsIE5hdiwgTmF2RHJvcGRvd24sIERyb3Bkb3duSXRlbSwgRHJvcGRvd25Ub2dnbGUsIERyb3Bkb3duTWVudSwgTmF2TGluayB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7c3RhdGVUb2dnbGV9IGZyb20gJ2RhdGEvdXRpbCdcbmltcG9ydCB7TmF2TGluayBhcyBOYXZSb3V0ZXJMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jbGFzcyBSdEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIGRyb3Bkb3duSXNPcGVuOiBmYWxzZVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgIDxOYXZiYXIgdG9nZ2xlYWJsZSBjb2xvcj1cInByaW1hcnlcIiBpbnZlcnNlPlxuICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL1wiPlxuICAgICAgICAgICAgPE5hdmJhckJyYW5kPlxuICAgICAgICAgICAgICBSb3V0ZXRyYWNrZXJcbiAgICAgICAgICAgIDwvTmF2YmFyQnJhbmQ+XG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIHJpZ2h0IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfS8+XG4gICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17IHRoaXMuc3RhdGUuaXNPcGVuIH0gbmF2YmFyPlxuICAgICAgICAgICAgPE5hdiBuYXZiYXI+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIkd5bXNcIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiIHRvZ2dsZT17dGhpcy50b2dnbGVEcm9wZG93bn0gaXNPcGVuPXt0aGlzLnN0YXRlLmRyb3Bkb3duSXNPcGVufT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgbmF2PlxuICAgICAgICAgICAgICAgICAgR3ltc1xuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBvbkNsaWNrPXt0aGlzLnRvZ2dsZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5neW1zID8gdGhpcy5wcm9wcy5neW1zLm1hcChneW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TmF2Um91dGVyTGluayBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGtleT17IGd5bS5faWQgfSB0bz17ICcvZ3ltcy8nICsgZ3ltLnVybCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L05hdlJvdXRlckxpbms+XG4gICAgICAgICAgICAgICAgICAgICkpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIvPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgU2VwYXJhdGVkIGxpbmtcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvYWRkXCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rPlxuICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPE5hdiBuYXZiYXIgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9nb3V0XCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rPlxuICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9hY2NvdW50XCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rPlxuICAgICAgICAgICAgICAgIE15IEFjY291bnRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVUb2dnbGUoJ2lzT3BlbicpKVxuICAgIH1cblxuICAgIHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlVG9nZ2xlKCdkcm9wZG93bklzT3BlbicpKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBneW1zOiBzdGF0ZS5neW1zXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShSdEhlYWRlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vcnRIZWFkZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQge3BhbGF0dGV9IGZyb20gJ3J0Y29uZmlnJ1xuXG5jbGFzcyBSdEJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIG1ha2VDaGFydC5hcHBseSh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPXsgKGVsKSA9PiB0aGlzLmVsID0gZWwgfT48L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRCYXJcblxuZnVuY3Rpb24gbWFrZUNoYXJ0KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kYXRhKVxuICAgICAgICByZXR1cm5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhXG5cbiAgICBjb25zdCB3aWR0aCA9IDk0XG4gICAgY29uc3QgaGVpZ2h0ID0gOTRcbiAgICBjb25zdCBiYXJXaWR0aCA9IHdpZHRoIC8gZGF0YS5sZW5ndGhcblxuICAgIGNvbnN0IHkgPSBkM1xuICAgICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFtcbiAgICAgICAgICAgIDAsIGQzLm1heChkYXRhKVxuICAgICAgICBdKVxuICAgICAgICAucmFuZ2UoWzAsIGhlaWdodF0pXG5cbiAgICBjb25zdCBjb2xvciA9IHBhbGF0dGVbdGhpcy5wcm9wcy5jb2xvcl0gfHwge3ByaW1hcnk6ICdibGFjaycsIHNlY29uZGFyeTogJ2JsYWNrJ31cblxuXG4gICAgY29uc3QgY29sb3JTY2FsZSA9IHRoaXMucHJvcHMuY29sb3IgP1xuICAgICAgICBkMy5zY2FsZUxpbmVhcihkMy5pbnRlcnBvbGF0ZUhjbClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcbiAgICAgICAgICAgIC5yYW5nZShbY29sb3IucHJpbWFyeSwgY29sb3Iuc2Vjb25kYXJ5XSkgOlxuICAgICAgICBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXG4gICAgY29uc3QgY2hhcnQgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMuZWwpXG4gICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJy0zIC0zIDEwMCAxMDAnKVxuICAgICAgICAuYXR0cigncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pbiBtZWV0JylcbiAgICAgICAgLmNsYXNzZWQoJ3cxMDAnLCB0cnVlKVxuXG4gICAgY29uc3QgYmFyID0gY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGkgKiBiYXJXaWR0aCArICcsIDApJ1xuICAgICAgICB9KVxuXG4gICAgYmFyXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuY2xhc3NlZCgncnQtYmFyJywgdHJ1ZSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgYmFyV2lkdGggLSAxKVxuICAgICAgICAuYXR0cigncngnLCAxKVxuICAgICAgICAuYXR0cigncnknLCAxKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4gK2RcbiAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgOiAwLjQpXG4gICAgICAgIC5hdHRyKCd5JywgaGVpZ2h0KVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGkpXG4gICAgICAgIH0pXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmRlbGF5KCgpID0+IDQwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgIC5lYXNlKGQzLmVhc2VFeHBJbilcbiAgICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGhlaWdodCAtIHkoZClcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIChkKSA9PiB5KGQpKVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJhci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IGQzdGlwIGZyb20gJ2QzLXRpcCdcbmltcG9ydCB7cGFsYXR0ZX0gZnJvbSAncnRjb25maWcnXG5kMy50aXAgPSBkM3RpcFxuXG5jbGFzcyBSdEJpZ0JhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICBnb2FsOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY2hhcnQgPSBkMy5zZWxlY3QodGhpcy5lbClcbiAgICAgICAgdGhpcy5tYWtlQ2hhcnQoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMudHlwZSAhPT0gdGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpXG4gICAgICAgICAgICB0aGlzLm1ha2VDaGFydChuZXh0UHJvcHMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFByb3BzLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcnQobmV4dFByb3BzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRQcm9wcy5jb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgdmlld0JveD1cIi01IC01IDUwMCAzMDBcIlxuICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pbiBtZWV0XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3MTAwIGNoYXJ0XCJcbiAgICAgICAgICAgICAgICAgICByZWY9eyAoZWwpID0+IHRoaXMuZWwgPSBlbCB9PlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgdXBkYXRlQ2hhcnQgPSAoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWwpXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIG5ldyBoZWlnaHRcbiAgICAgICAgdGhpcy55ID0gZDNcbiAgICAgICAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFtcbiAgICAgICAgICAgICAgICAwLCBkMy5tYXgoZGF0YSwgKGQpID0+IGQuY291bnQpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB0aGlzLmhlaWdodF0pXG5cbiAgICAgICAgLy8gTWFrZSB0aGUgY2hhbmdlc1xuICAgICAgICBzdmcuc2VsZWN0QWxsKCcucnQtYmFyJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpIC8vIGNoYW5nZSB0aGUgbGluZVxuICAgICAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQgLSB0aGlzLnkoZC5jb3VudClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IHRoaXMueShkLmNvdW50KSArIDYpXG5cbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnLnJ0LW1hcmtlcicpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmdyYWRlKVxuICAgIH1cblxuICAgIG1ha2VDaGFydCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5kYXRhKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIGRhdGEgPSBkYXRhIHx8IHRoaXMucHJvcHMuZGF0YVxuXG4gICAgICAgIHRoaXMud2lkdGggPSA0OTBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyODVcblxuICAgICAgICBjb25zdCBjb2xvciA9IHBhbGF0dGVbdGhpcy5wcm9wcy5jb2xvcl0gfHwge3ByaW1hcnk6ICdibGFjaycsIHNlY29uZGFyeTogJ2JsYWNrJ31cblxuXG4gICAgICAgIGNvbnN0IGNvbG9yU2NhbGUgPSB0aGlzLnByb3BzLmNvbG9yID9cbiAgICAgICAgZDMuc2NhbGVMaW5lYXIoZDMuaW50ZXJwb2xhdGVIY2wpXG4gICAgICAgICAgICAuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG4gICAgICAgICAgICAucmFuZ2UoW2NvbG9yLnByaW1hcnksIGNvbG9yLnNlY29uZGFyeV0pIDpcbiAgICAgICAgICAgIGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpXG4gICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXG5cbiAgICAgICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLndpZHRoIC8gZGF0YS5sZW5ndGhcblxuXG4gICAgICAgIHRoaXMueSA9IGQzXG4gICAgICAgICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbXG4gICAgICAgICAgICAgICAgMCwgZDMubWF4KGRhdGEsIChkKSA9PiBkLmNvdW50KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIC5yYW5nZShbMCwgdGhpcy5oZWlnaHRdKVxuXG4gICAgICAgIGNvbnN0IGZvbnRTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oWzMyMCwgNTAwXSkgLy8gZXhwZWN0ZWQgbGltaXRzIG9mIFNWRyB3aWR0aFxuICAgICAgICAgICAgLnJhbmdlKFszMCwgMTVdKVxuICAgICAgICAgICAgLmNsYW1wKHRydWUpXG5cbiAgICAgICAgY29uc3QgYmFyID0gdGhpcy5jaGFydFxuICAgICAgICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Jhci1ncm91cCcpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBpICogYmFyV2lkdGggKyAnLCAwKSdcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdmFyIHRpcCA9IGQzLnRpcCgpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnZDMtdGlwJylcbiAgICAgICAgICAgIC5vZmZzZXQoWy0xMCwgMF0pXG4gICAgICAgICAgICAuaHRtbChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8c3Ryb25nPicgKyBkLmdyYWRlICsgJzo8L3N0cm9uZz4gPHNwYW4gc3R5bGU9XFwnY29sb3I6I2ZmMDA0NFxcJz4nICsgZC5jb3VudCArICc8L3NwYW4+J1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmNoYXJ0LmNhbGwodGlwKVxuXG4gICAgICAgIGJhci5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3J0LWJhcicsIHRydWUpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBiYXJXaWR0aCAtIDUpXG4gICAgICAgICAgICAuYXR0cigncngnLCAzKVxuICAgICAgICAgICAgLmF0dHIoJ3J5JywgMylcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCA2KVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4gK2QuY291bnQgPyAxIDogMC40KVxuICAgICAgICAgICAgLmF0dHIoJ3knLCB0aGlzLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCB0aXAuc2hvdylcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCB0aXAuaGlkZSlcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheSgoKSA9PiA0MDAgLSBNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAgIC5lYXNlKGQzLmVhc2VFeHBJbilcbiAgICAgICAgICAgIC5hdHRyKCd5JywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQgLSB0aGlzLnkoZC5jb3VudClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IHRoaXMueShkLmNvdW50KSArIDYpXG5cbiAgICAgICAgYmFyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgncnQtbWFya2VyJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgYmFyV2lkdGggLyAyICsgMylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgLTI4MClcbiAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZ3JhZGUpXG4gICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgJzE0cHgnKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcblxuXG5cblxuICAgICAgICBjb25zdCByZXNpemVkID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNjYWxlID0gZm9udFNjYWxlKHRoaXMuY2hhcnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKVxuICAgICAgICAgICAgdmFyIHRleHQgPSBkMy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgICAgdGV4dC5hdHRyKCdmb250LXNpemUnLCBzY2FsZSArICdweCcpXG4gICAgICAgICAgICBpZiAoc2NhbGUgPiAxOCkge1xuICAgICAgICAgICAgICAgIHRleHQuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRleHQuYXR0cignb3BhY2l0eScsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXNpemVkKClcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gcmVzaXplZC5iaW5kKHRoaXMpXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0QmlnQmFyXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvcnRCaWdCYXIuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cbmNsYXNzIFJ0UGllIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbWFrZUNoYXJ0LmFwcGx5KHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCd9fSByZWY9eyAoZWwpID0+IHRoaXMuZWwgPSBlbCB9PjwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdFBpZVxuXG5mdW5jdGlvbiBtYWtlQ2hhcnQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRhdGEpXG4gICAgICAgIHJldHVyblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGFcblxuICAgIGNvbnN0IHdpZHRoID0gOTRcbiAgICBjb25zdCBoZWlnaHQgPSA5NFxuICAgIGNvbnN0IGJhcldpZHRoID0gd2lkdGggLyBkYXRhLmxlbmd0aFxuXG4gICAgY29uc3QgY2hhcnQgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMuZWwpXG4gICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJy0zIC0zIDEwMCAxMDAnKVxuICAgICAgICAuYXR0cigncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pbiBtZWV0JylcbiAgICAgICAgLmNsYXNzZWQoJ3cxMDAnLCB0cnVlKVxuXG5cbiAgICB2YXIgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyLFxuICAgICAgICBnID0gY2hhcnQuYXBwZW5kKCdnJykuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgd2lkdGggLyAyICsgJywnICsgaGVpZ2h0IC8gMiArICcpJylcblxuICAgIHZhciBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChbJyM5OGFiYzUnLCAnIzhhODlhNicsICcjN2I2ODg4JywgJyM2YjQ4NmInLCAnI2EwNWQ1NicsICcjZDA3NDNjJywgJyNmZjhjMDAnXSlcblxuICAgIHZhciBwaWUgPSBkMy5waWUoKVxuICAgIC5zb3J0KG51bGwpXG4gICAgLnZhbHVlKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGRcbiAgICB9KVxuICAgIGNvbnN0IHJhaW5ib3cgPSBkM1xuICAgICAgICAuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdylcbiAgICAgICAgLmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXG4gICAgdmFyIHBhdGggPSBkMy5hcmMoKVxuICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgLSAxMClcbiAgICAuaW5uZXJSYWRpdXMoMzApXG5cbiAgICB2YXIgaG92ZXJQYXRoID0gZDMuYXJjKClcbiAgICAub3V0ZXJSYWRpdXMocmFkaXVzIC0gOClcbiAgICAuaW5uZXJSYWRpdXMoMzApXG5cbiAgICB2YXIgbGFiZWwgPSBkMy5hcmMoKVxuICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgLSA0MClcbiAgICAuaW5uZXJSYWRpdXMocmFkaXVzIC0gNDApXG5cblxuICAgIHZhciBhcmMgPSBnLnNlbGVjdEFsbCgnLmFyYycpXG4gICAgLmRhdGEocGllKGRhdGEpKVxuICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2FyYycpXG5cbiAgICBhcmMuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgLmF0dHIoJ2ZpbGwnLCBkID0+IHJhaW5ib3coZC5kYXRhKSlcbiAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAuYXR0cignZCcsIGhvdmVyUGF0aClcbiAgICB9KVxuICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgfSlcblxuICAgIGFyYy5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBsYWJlbC5jZW50cm9pZChkKSArICcpJ1xuICAgIH0pXG4gICAgLmF0dHIoJ2R5JywgJzAuMzVlbScpXG4gICAgLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5kYXRhLmFnZVxuICAgIH0pXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvcnRQaWUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXekNvbnRhaW5lciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3otYmlnLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXdpbmdcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otaW5uZXJcIiBzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsocHJvcHMuc3RlcCkgKiAtMTYuNn0lKWB9fT5cbiAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwgZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXdpbmdcIj4gPC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFd6Q29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekNvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY29sb3IgZnJvbSAnc2VydmljZXMvY29sb3JTZXJ2aWNlJ1xuXG5jb25zdCBXekl0ZW0gPSAocHJvcHMpID0+IHtcbiAgICBmdW5jdGlvbiBfY2xpY2soKSB7XG4gICAgICAgIHByb3BzLnVwZGF0ZShwcm9wcy50eXBlLHByb3BzLml0ZW0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtfY2xpY2t9IGNsYXNzTmFtZT17c2V0Q2xhc3MocHJvcHMpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcHJvcHMuaXRlbS5jb2xvcj8gcHJvcHMuaXRlbS5jb2xvciA6ICd3aGl0ZScsIGNvbG9yOiBwcm9wcy5pdGVtLmNvbG9yPyBjb2xvci50ZXh0Q29sb3IocHJvcHMuaXRlbS5jb2xvcikgOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBncmlkLWxhYmVsXCIgb25DbGljaz17X2NsaWNrfT57cHJvcHMuaXRlbS52YWx1ZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuV3pJdGVtLnByb3BUeXBlcyA9IHtcbiAgICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGl0ZW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhwcm9wcykge1xuICAgIHJldHVybiAnd3otZG90ICcgKyAocHJvcHMuc2VsZWN0ZWQ/ICdpdGVtLXNlbGVjdGVkJyA6ICcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXekl0ZW1cbiAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pJdGVtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgV3pMaXN0SXRlbSA9IChwcm9wcykgPT4ge1xuICAgIGZ1bmN0aW9uIF9jbGljaygpIHtcbiAgICAgICAgcHJvcHMudXBkYXRlKHByb3BzLnR5cGUsIHByb3BzLml0ZW0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3NldENsYXNzKHByb3BzKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgbGlzdC1sYWJlbFwiIG9uQ2xpY2s9e19jbGlja30+e3Byb3BzLml0ZW0udmFsdWUgfHwgcHJvcHMuaXRlbX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhwcm9wcykge1xuICAgIHJldHVybiAnd3otbGlzdC1pdGVtICcgKyAocHJvcHMuc2VsZWN0ZWQ/ICdpdGVtLXNlbGVjdGVkJyA6ICcnKVxufVxuXG5Xekxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpdGVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBXekxpc3RJdGVtXG4gICAgICAgICAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6TGlzdEl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBXelBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMucHJldi5iaW5kKHRoaXMpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHAxMGIgaGlkZGVuLXhzIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e3RoaXMucHJldn0+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e3RoaXMubmV4dCB9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMubmV4dCgxKVxuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICAgIHRoaXMucHJvcHMucHJldigtMSlcbiAgICB9XG59XG5cbld6UGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgcHJldjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbmV4dDogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3pQYWdlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elBhZ2UuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtGbGV4Um93LCBSdFN3YXRjaH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBwb3N0Um91dGUgfSBmcm9tICdkYXRhL2FjdGlvbnMvcm91dGUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmltcG9ydCB7c2xlZXAsIHJlbmRlcklmfSBmcm9tICdydHV0aWwnXG5cblxuY2xhc3MgV3pQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHt9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybWVkUm91dGUgPSB0cmFuc2Zvcm1Sb3V0ZSh0aGlzLnByb3BzLnJvdXRlKVxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1lZFJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnRyYW5zZm9ybWVkUm91dGU/IChcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3ei1saXN0IHAxMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFR5cGU6IHt0aGlzLnByb3BzLnJvdXRlLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3ei1saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ29sb3I6IFxuICAgICAgICAgICAgICAgICAgICAgIDxSdFN3YXRjaCBjb2xvcj17IHRoaXMucHJvcHMucm91dGUuY29sb3IgfHwgZmFsc2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEdyYWRlOiB7dGhpcy5wcm9wcy5yb3V0ZS5ncmFkZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBHeW06IHt0aGlzLnByb3BzLnJvdXRlLmd5bS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFdhbGw6IHt0aGlzLnByb3BzLnJvdXRlLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRhZ3M6IHt0aGlzLnByb3BzLnJvdXRlLnRhZ3Muam9pbignLCAnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPEZsZXhSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuZWRpdH0+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2J0biBidG4tb3V0bGluZS1wcmltYXJ5JyArIHJlbmRlcklmKHRoaXMuc3RhdGUucGVuZGluZykoJyBidG4tb3V0bGluZS1wZW5kaW5nJyl9IG9uQ2xpY2s9e3RoaXMucG9zdFJvdXRlfT5BZGQgUm91dGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHBvc3RSb3V0ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGVuZGluZzogdHJ1ZX0pXG4gICAgICAgIHRoaXMucHJvcHMucG9zdFJvdXRlKHRoaXMudHJhbnNmb3JtZWRSb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKHNsZWVwKDEwMDApKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXQoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhZGRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBlZGl0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm1vdmUoLTEpXG4gICAgfVxufVxuXG5XelByZXZpZXcucHJvcFR5cGVzID0ge1xuICAgIHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGdyYWRlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICByZXNldDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcG9zdFJvdXRlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZShvYmopIHtcbiAgICBpZiAob2JqLmd5bSAmJiBvYmouZ3JhZGUgJiYgb2JqLmNvbG9yICYmIG9iai50YWdzICYmIG9iai5sb2NhdGlvbilcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IG9iai50eXBlLFxuICAgICAgICAgICAgY29sb3I6IG9iai5jb2xvci52YWx1ZSxcbiAgICAgICAgICAgIGdyYWRlOiBvYmouZ3JhZGUuX2lkLFxuICAgICAgICAgICAgZ3ltOiBvYmouZ3ltLl9pZCxcbiAgICAgICAgICAgIHdhbGw6IG9iai5sb2NhdGlvbixcbiAgICAgICAgICAgIHRhZ3M6IG9iai50YWdzLmpvaW4oJywgJyksXG4gICAgICAgICAgICBzZXRfb246IERhdGUubm93KClcbiAgICAgICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlOiBzdGF0ZS5yb3V0ZSxcbiAgICAgICAgZ3JhZGVzOiBzdGF0ZS50ZWFtLmdyYWRlc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwb3N0Um91dGU6IChyb3V0ZSkgPT4gZGlzcGF0Y2gocG9zdFJvdXRlKHJvdXRlKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShXelByZXZpZXcpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elByZXZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFd6UGFnZSBmcm9tICcuL3d6UGFnZSdcbmltcG9ydCBSdENhcmQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcnRDYXJkJ1xuXG5jb25zdCBXelN0ZXAgPSAocHJvcHMpID0+IHtcbiAgICBpZihwcm9wcy5yZXZpZXcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWl0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDNcIj48L2Rpdj5cbiAgICAgICAgICAgIDxSdENhcmQgdGl0bGU9e3Byb3BzLm5hbWV9Pntwcm9wcy5jaGlsZHJlbn08L1J0Q2FyZD5cbiAgICAgICAgICA8L2Rpdj4pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGgzIHRleHQtY2FwaXRhbGl6ZVwiPlxuICAgICAgICB7IHByb3BzLm5hbWUgfTo8L2Rpdj5cbiAgICAgIDxXelBhZ2UgbmV4dD17cHJvcHMubmV4dH0gcHJldj17cHJvcHMucHJldn0vPlxuICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5XelN0ZXAucHJvcFR5cGVzID0ge1xuICAgIHJldmlldzogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgbmV4dDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcHJldjogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3pTdGVwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elN0ZXAuanN4IiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSdFdpemFyZCBmcm9tICcuL3J0V2l6YXJkJ1xuaW1wb3J0IHt1cGRhdGVSb3V0ZSwgdXBkYXRlVGFncywgcmVzZXRXaXphcmR9IGZyb20gJ2RhdGEvYWN0aW9ucy93aXphcmQnXG5pbXBvcnQge2dldFRlYW19IGZyb20gJ2RhdGEvYWN0aW9ucy90ZWFtJ1xuaW1wb3J0IHtnZXRHeW1zfSBmcm9tICdkYXRhL2FjdGlvbnMvZ3ltJ1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZTogc3RhdGUucm91dGUsXG4gICAgICAgIHRlYW06IHN0YXRlLnRlYW0sXG4gICAgICAgIGd5bXM6IHN0YXRlLmd5bXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlOiAoZmllbGQsIHZhbHVlKSA9PiBkaXNwYXRjaCh1cGRhdGVSb3V0ZShmaWVsZCwgdmFsdWUpKSxcbiAgICAgICAgdXBkYXRlVGFnczogKHZhbHVlKSA9PiBkaXNwYXRjaCh1cGRhdGVUYWdzKHZhbHVlKSksXG4gICAgICAgIHJlc2V0Rm9ybTogKCkgPT4gZGlzcGF0Y2gocmVzZXRXaXphcmQoKSksXG4gICAgICAgIGdldFRlYW06ICgpID0+IGRpc3BhdGNoKGdldFRlYW0oKSksXG4gICAgICAgIGdldEd5bXM6ICgpID0+IGRpc3BhdGNoKGdldEd5bXMoKSlcbiAgICB9XG59XG5cbmNvbnN0IFJ0V2l6YXJkQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoKShSdFdpemFyZClcblxuZXhwb3J0IGRlZmF1bHQgUnRXaXphcmRDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgV3pHcmlkIGZyb20gJy4vd3pHcmlkJ1xuaW1wb3J0IFd6Q29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy93ekNvbnRhaW5lcidcbmltcG9ydCBXelN0ZXAgZnJvbSAnLi9jb21wb25lbnRzL3d6U3RlcCdcbmltcG9ydCBXelByZXZpZXcgZnJvbSAnLi9jb21wb25lbnRzL3d6UHJldmlldydcbmltcG9ydCBTd2lwZSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2lwZUNvbnRhaW5lcidcblxuY2xhc3MgUnRXaXphcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGVwOiAwLFxuICAgICAgICAgICAgZ3ltRmlsdGVyOiB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xpY2tzID0gMFxuICAgICAgICB0aGlzLmNsaWNrZWQgPSAnZ3ltJ1xuICAgICAgICB0aGlzLnN0ZXBzID0gWydneW0nLCAnY29sb3InLCAnZ3JhZGUnLCAnbG9jYXRpb24nLCAndGFncyddXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN3aXBlIG9uU3dpcGU9e3RoaXMub25Td2lwZX0+XG4gICAgICAgICAgICA8V3pDb250YWluZXIgc3RlcD17dGhpcy5zdGF0ZS5zdGVwfT5cbiAgICAgICAgICAgICAgeyB0aGlzLnN0ZXBDb250ZW50KClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3RlcCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFd6U3RlcCBrZXk9e3N0ZXAubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3N0ZXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldj17dGhpcy5tb3ZlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dD17dGhpcy5tb3ZlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZD17c3RlcC5lbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldz17c3RlcC5yZXZpZXd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1d6U3RlcD4pXG4gICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICA8L1d6Q29udGFpbmVyPlxuICAgICAgICAgICAgPC9Td2lwZT5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG9uU3dpcGUgPSAoZGlyKSA9PiB7XG4gICAgICAgIGlmKCBcbiAgICAgICAgICAgIC8vIGxhc3Qgc3RlcFxuICAgICAgICAgICAgKHRoaXMuc3RhdGUuc3RlcCAhPT0gNSAmJiBkaXIgPCAwKSB8fCAhKHRoaXMuc3RlcHNbdGhpcy5zdGF0ZS5zdGVwXSBpbiB0aGlzLnByb3BzLnJvdXRlKSkgcmV0dXJuXG4gICAgICAgIFxuICAgICAgICBsZXQgdG9TdGVwID0gdGhpcy5zdGF0ZS5zdGVwICsgKGRpciA+IDA/IC0xIDogMSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiB0b1N0ZXB9KVxuICAgIH1cblxuICAgIG1vdmUgPSAoZGlyLCBmaWVsZCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGUuc3RlcFxuICAgICAgICAvLyBjYWxsZWQgYnkgdXBkYXRlXG4gICAgICAgIGlmKGZpZWxkKSByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7c3RlcDogY3VycmVudCArIGRpcn0pXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlJ3ZlIG1hZGUgaXQgcGFzdCB0aGlzIHN0ZXAgYWxyZWFkeVxuICAgICAgICBpZihjdXJyZW50ICsgZGlyIDwgMCB8fCAhKHRoaXMuc3RlcHNbdGhpcy5zdGF0ZS5zdGVwXSBpbiB0aGlzLnByb3BzLnJvdXRlKSAmJiBkaXIgPiAwKSByZXR1cm5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogY3VycmVudCArIGRpcn0pXG4gICAgfVxuXG4gICAgdXBkYXRlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBoYW5kbGUgZG91YmxlIGNsaWNrXG4gICAgICAgIGlmICh0aGlzLmNsaWNrcyA+IDAgJiYgdGhpcy5wcm9wcy5yb3V0ZVtmaWVsZF0gPT09IHZhbHVlKSByZXR1cm4gdGhpcy5tb3ZlKDEsIGZpZWxkKVxuXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlKGZpZWxkLCB2YWx1ZSlcbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLnN0YXRlLnN0ZXAgKyAxXG5cbiAgICAgICAgXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIGlmIHdlJ3ZlIG1hbnVhbGx5IGdvbmUgYmFja3dhcmRzLCBkb24ndCBtb3ZlXG4gICAgICAgICAgICAoIXRoaXMucHJvcHMucm91dGVbdGhpcy5zdGVwc1tuZXh0XV0gJiYgZmllbGQgIT09ICd0eXBlJylcbiAgICAgICAgICAgIC8vIG9yIHRoZSBuZXh0IHN0ZXAgaXMgbXVsdGlwbGUgY2hvaWNlXG4gICAgICAgICAgICB8fCB0aGlzLnN0ZXBzW25leHRdID09PSAndGFncydcbiAgICAgICAgKSByZXR1cm4gdGhpcy5tb3ZlKDEsIGZpZWxkKVxuXG4gICAgICAgIC8vIHN0b3JlIGNsaWNrIGZvciBkb3VibGUgY2xpY2tcbiAgICAgICAgdGhpcy5jbGlja3MrK1xuICAgICAgICB0aGlzLmNsaWNrZWQgPSBmaWVsZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xpY2tzLS0sIDUwMClcbiAgICB9XG5cbiAgICB1cGRhdGVUYWdzID0gKHRhZ3MsIHRhZykgPT4ge1xuICAgICAgICBsZXQge3ZhbHVlfSA9IHRhZ1xuICAgICAgICBcbiAgICAgICAgLy8gaGFuZGxlIGRvdWJsZSBjbGlja1xuICAgICAgICBpZiAodGhpcy5jbGlja3MgPiAwICYmIHRoaXMucHJvcHMucm91dGUudGFncy5pbmRleE9mKHZhbHVlKSA+PTAgKSByZXR1cm4gdGhpcy5tb3ZlKDEsIHRydWUpXG5cbiAgICAgICAgLy8gaWYgd2UndmUgbWFudWFsbHkgZ29uZSBiYWNrd2FyZHMsIGRvbid0IG1vdmVcbiAgICAgICAgLy8gaWYgKCF0aGlzLnByb3BzLnJvdXRlW3RoaXMuc3RlcHNbdGhpcy5zdGF0ZS5zdGVwICsgMV1dKSByZXR1cm4gdGhpcy5tb3ZlKDEsIGZpZWxkKVxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVRhZ3ModmFsdWUpXG5cbiAgICAgICAgLy8gc3RvcmUgY2xpY2sgZm9yIGRvdWJsZSBjbGlja1xuICAgICAgICB0aGlzLmNsaWNrcysrXG4gICAgICAgIHRoaXMuY2xpY2tlZCA9IHZhbHVlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbGlja3MtLSwgNTAwKVxuICAgIH1cblxuICAgIGZpbHRlckd5bXMoZ3ltcywgZmlsdGVyKSB7XG4gICAgICAgIGlmKCFmaWx0ZXIpIHJldHVybiBbXVxuICAgICAgICByZXR1cm4gZ3ltcy5maWx0ZXIoZ3ltID0+IGd5bS53YWxsc1tmaWx0ZXJdLmxlbmd0aClcbiAgICB9XG5cbiAgICBzZXRGaWx0ZXIoZmlsdGVyKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCd0eXBlJywgZmlsdGVyKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtneW1GaWx0ZXI6IGZpbHRlcn0pXG4gICAgfVxuXG4gICAgcmVzZXRGb3JtID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnJlc2V0Rm9ybSgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDF9KVxuICAgIH1cblxuICAgIHN0ZXBDb250ZW50KCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdneW0nLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3d6LWxpc3QtaXRlbSAnICsgKHRoaXMuc3RhdGUuZ3ltRmlsdGVyID09PSAnYm91bGRlcicgPyAnaXRlbS1zZWxlY3RlZCcgOiAnJyApfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEZpbHRlcignYm91bGRlcicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGxpc3QtbGFiZWxcIj5Cb3VsZGVyaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd3ei1saXN0LWl0ZW0gJyArICh0aGlzLnN0YXRlLmd5bUZpbHRlciA9PT0gJ3JvcGUnID8gJ2l0ZW0tc2VsZWN0ZWQnIDogJycgKX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRGaWx0ZXIoJ3JvcGUnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBsaXN0LWxhYmVsXCI+Um9wZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLmZpbHRlckd5bXModGhpcy5wcm9wcy5neW1zLCB0aGlzLnN0YXRlLmd5bUZpbHRlcil9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2d5bSd9IHVwZGF0ZT17dGhpcy51cGRhdGV9IGxpc3QvPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29sb3InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5wcm9wcy50ZWFtLmNvbG9yc30gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnY29sb3InfSB1cGRhdGU9e3RoaXMudXBkYXRlfS8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdncmFkZScsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnJvdXRlLnR5cGU/IHRoaXMucHJvcHMudGVhbS5ncmFkZXNbdGhpcy5wcm9wcy5yb3V0ZS50eXBlXSA6IHRoaXMucHJvcHMudGVhbS5ncmFkZXMuYm91bGRlcn0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnZ3JhZGUnfSB1cGRhdGU9e3RoaXMudXBkYXRlfS8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsb2NhdGlvbicsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnJvdXRlLmd5bSAmJiB0aGlzLnByb3BzLnJvdXRlLmd5bS53YWxsc1t0aGlzLnN0YXRlLmd5bUZpbHRlcl0gfHwgW119IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2xvY2F0aW9uJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0gbGlzdC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0YWdzJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMudGVhbS50YWdzfSByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gc2VsZWN0b3I9eyd0YWdzJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZVRhZ3N9IGxpc3QvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBlbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgcmV2aWV3OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6UHJldmlldyByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gbW92ZT17dGhpcy5tb3ZlfSByZXNldD17dGhpcy5yZXNldEZvcm19Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59XG5cblJ0V2l6YXJkLnByb3BUeXBlcyA9IHtcbiAgICByb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBneW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0ZWFtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHJlc2V0Rm9ybTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRXaXphcmRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9ydFdpemFyZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgV3pMaXN0SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvd3pMaXN0SXRlbSdcbmltcG9ydCBXekl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL3d6SXRlbSdcblxuY29uc3QgV3pHcmlkID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgRWwgPSBwcm9wcy5saXN0ID8gV3pMaXN0SXRlbSA6IFd6SXRlbVxuXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IChpdGVtKSA9PiB7XG4gICAgICAgIGlmKHByb3BzLnNlbGVjdG9yID09PSAndGFncycpIHJldHVybiBwcm9wcy5yb3V0ZS50YWdzLmluZGV4T2YoaXRlbS52YWx1ZSkgPiAtMVxuICAgICAgICByZXR1cm4gIHByb3BzLnJvdXRlW3Byb3BzLnNlbGVjdG9yXSA9PT0gaXRlbSBcbiAgICB9XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwid3otZ3JpZFwiPlxuICAgICAgICAgICAgICB7IHByb3BzLml0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEVsIGtleT17IGl0ZW0uX2lkIHx8IGl0ZW19IGl0ZW09eyBpdGVtIH0gdHlwZT17IHByb3BzLnNlbGVjdG9yIH0gdXBkYXRlPXsgcHJvcHMudXBkYXRlIH0gc2VsZWN0ZWQ9e2lzU2VsZWN0ZWQoaXRlbSl9IC8+XG4gICAgICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuV3pHcmlkLnByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNlbGVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxpc3Q6IFByb3BUeXBlcy5vbmVPZihbdW5kZWZpbmVkLCB0cnVlXSksXG4gICAgdGFnczogUHJvcFR5cGVzLm9uZU9mKFt1bmRlZmluZWQsIHRydWVdKSxcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBXekdyaWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC93ekdyaWQuanN4IiwiZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVHeW1zKGd5bXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnUkVDRUlWRV9HWU1TJyxcbiAgICAgICAgcGF5bG9hZDogZ3ltc1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEd5bXModGVhbSkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PntcbiAgICAgICAgcmV0dXJuIGZldGNoZXIuZ2V0KCdneW1zL3RlYW0vJyt0ZWFtLl9pZCkudGhlbihneW1zID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVHeW1zKGd5bXMpKVxuICAgICAgICAgICAgcmV0dXJuIGd5bXNcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy9neW0uanMiLCJleHBvcnQgZnVuY3Rpb24gYWRkUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQUREX1JPVVRFJyxcbiAgICAgICAgcGF5bG9hZDogcm91dGVcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlUm91dGVzKHJvdXRlcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdSRUNFSVZFX1JPVVRFUycsXG4gICAgICAgIHBheWxvYWQ6IHJvdXRlc1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9ST1VURScsXG4gICAgICAgIHBheWxvYWQ6IHJvdXRlXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUm91dGVzKGFycikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdSRU1PVkVfUk9VVEVTJyxcbiAgICAgICAgcGF5bG9hZDogYXJyXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVzQnlHeW0oaWQpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2hlci5nZXQoYHJvdXRlL2d5bS8ke2lkfWAsIHtcbiAgICAgICAgICAgIGd5bTogaWRcbiAgICAgICAgfSkudGhlbihyb3V0ZXMgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVJvdXRlcyhyb3V0ZXMpKVxuICAgICAgICAgICAgLy9yZXR1cm4gcm91dGVzXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdFJvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGZldGNoZXIuY3JlYXRlKCdyb3V0ZScsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChhZGRSb3V0ZShyZXMpKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHV0Um91dGUocm91dGUpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2hlci51cGRhdGUoYHJvdXRlLyR7cm91dGUuX2lkfWAsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVSb3V0ZShyZXMpKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvcm91dGUuanMiLCJpbXBvcnQge3JlY2VpdmVHeW1zfSBmcm9tICcuL2d5bSdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUZWFtKHRlYW0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnUkVDRUlWRV9URUFNJyxcbiAgICAgICAgcGF5bG9hZDogdGVhbVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlYW0oKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gZ2V0U3RhdGUoKVxuICAgICAgICBpZiAoc3RhdGUudGVhbS5neW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoZXIuZ2V0KCd0ZWFtcy9jdXJyZW50JylcbiAgICAgICAgICAgICAgICAudGhlbih0ZWFtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVRlYW0odGVhbSkpXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVHeW1zKHRlYW0uZ3ltcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZWFtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3RlYW0uanMiLCJleHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVVzZXIodXNlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdSRUNFSVZFX1VTRVInLFxuICAgICAgICBwYXlsb2FkOiB1c2VyXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpXG4gICAgICAgIGlmIChzdGF0ZS51c2VyLl9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZS51c2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoZXIuZ2V0KCd1c2Vycy9jdXJyZW50JylcbiAgICAgICAgICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVzZXIodXNlcikpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3VzZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gdXBkYXRlUm91dGUoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9ORVdfUk9VVEUnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYWdzKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9UQUdTJyxcbiAgICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFdpemFyZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnUkVTRVRfV0laQVJEJ1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvd2l6YXJkLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0gW11cblxuY29uc3QgdHJhbnNmb3JtR3ltcyA9IChneW1zKSA9PiB7XG4gICAgZ3ltcy5mb3JFYWNoKGd5bSA9PiB7XG4gICAgICAgIGd5bS52YWx1ZSA9IGd5bS5uYW1lXG4gICAgfSlcbiAgICByZXR1cm4gZ3ltc1xufVxuXG5jb25zdCBneW0gPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX0dZTVMnOlxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtR3ltcyhhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdHRVRfR1lNUyc6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ3ltICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9neW0uanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5pbXBvcnQgd2l6YXJkIGZyb20gJy4vd2l6YXJkJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IHJvdXRlIGZyb20gJy4vcm91dGUnXG5pbXBvcnQgdGVhbSBmcm9tICcuL3RlYW0nXG5pbXBvcnQgZ3ltIGZyb20gJy4vZ3ltJ1xuXG5jb25zdCBtYWluUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcm91dGU6IHdpemFyZCwgXG4gICAgcm91dGVzOiByb3V0ZSxcbiAgICB0ZWFtOiB0ZWFtLFxuICAgIGd5bXM6IGd5bSxcbiAgICB1c2VyLFxuICAgIHJvdXRlcjogcm91dGVyUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgbWFpblJlZHVjZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuY29uc3QgaW5pdGlhbFN0YXRlID0gbmV3IEltbXV0YWJsZS5NYXAoKVxuXG5mdW5jdGlvbiByb3V0ZShzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9ST1VURSc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zZXQoYWN0aW9uLnBheWxvYWQuX2lkLCBhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdSRU1PVkVfUk9VVEVTJzoge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSBuZXcgSW1tdXRhYmxlLlNldChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlck5vdCgodikgPT5yb3V0ZXMuaGFzKHYuX2lkKSlcbiAgICB9XG4gICAgY2FzZSAnUkVDRUlWRV9ST1VURVMnOlxuICAgICAgICByZXR1cm4gc3RhdGUuY29uY2F0KGFjdGlvbi5wYXlsb2FkLm1hcChyb3V0ZSA9PiBbcm91dGUuX2lkLHJvdXRlXSkpXG4gICAgY2FzZSAnVVBEQVRFX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChhY3Rpb24ucGF5bG9hZC5faWQsIGFjdGlvbi5wYXlsb2FkKVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9yb3V0ZS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjb2xvcnM6IFtdLFxuICAgIHRhZ3M6IFtdLFxuICAgIGdyYWRlczoge1xuICAgICAgICBib3VsZGVyOiBbXSxcbiAgICAgICAgcm9wZTogW11cbiAgICB9XG59XG5cbmNvbnN0IHRyYW5zZm9ybVRlYW0gPSAodGVhbSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRlYW0sXG4gICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgYm91bGRlcjogdGVhbS5ncmFkZXMuYm91bGRlci5tYXAoKGdyYWRlLCBpbmRleCkgPT4ge3JldHVybiB7X2lkOiBpbmRleCwgdmFsdWU6IGdyYWRlfX0pLFxuICAgICAgICAgICAgcm9wZTogdGVhbS5ncmFkZXMucm9wZS5tYXAoKGdyYWRlLCBpbmRleCkgPT4ge3JldHVybiB7X2lkOiBpbmRleCwgdmFsdWU6IGdyYWRlfX0pXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yczogdGVhbS5jb2xvcnMubWFwKGNvbG9yID0+IHtyZXR1cm4ge19pZDogY29sb3IubmFtZSwgdmFsdWU6IGNvbG9yLm5hbWUsIGNvbG9yOiBjb2xvci5jb2xvcn19KSxcbiAgICAgICAgdGFnczogdGVhbS50YWdzLm1hcCh0YWcgPT4ge3JldHVybiB7X2lkOiB0YWcsIHZhbHVlOiB0YWd9fSlcbiAgICB9XG59XG5cbmNvbnN0IHRlYW0gPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX1RFQU0nOlxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtVGVhbShhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdHRVRfVEVBTSc6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVhbSAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvdGVhbS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IHVzZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX1VTRVInOlxuICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICBjYXNlICdHRVRfVVNFUic6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlciAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvdXNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0YWdzOiBbXVxufVxuXG5jb25zdCB3aXphcmQgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVUERBVEVfTkVXX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFthY3Rpb24ucGF5bG9hZC5maWVsZF06IGFjdGlvbi5wYXlsb2FkLnZhbHVlfSlcbiAgICBjYXNlICdVUERBVEVfVEFHUyc6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3RhZ3M6IHRvZ2dsZVRhZyhzdGF0ZS50YWdzLCBhY3Rpb24ucGF5bG9hZCl9KVxuICAgIGNhc2UgJ1JFU0VUX1dJWkFSRCc6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7Z3ltOiBzdGF0ZS5neW0sIHRhZ3M6IFtdfSlcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpemFyZFxuXG4vLyB1dGlsaXRpZXNcblxuZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZ3MsIHRhZykge1xuICAgIGxldCBpbmQgPSB0YWdzLmluZGV4T2YodGFnKVxuICAgIHRhZ3MgPSBbLi4udGFnc11cbiAgICBpZiAoaW5kID49IDApIHtcbiAgICAgICAgdGFnc1tpbmRdID0gdGFnc1t0YWdzLmxlbmd0aCAtIDFdXG4gICAgICAgIHRhZ3MubGVuZ3RoID0gdGFncy5sZW5ndGggLSAxXG4gICAgICAgIHJldHVybiB0YWdzXG4gICAgfVxuICAgIHJldHVybiB0YWdzLmNvbmNhdCh0YWcpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvd2l6YXJkLmpzIiwiIC8qKlxuICogQG5hbWUgc3RhdGVUb2dnbGVcbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIHByb3BlcnR5IG9mIHN0YXRlIHRvIHRvZ2dsZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5cblxuZXhwb3J0IGNvbnN0IHN0YXRlVG9nZ2xlID0gcHJvcCA9PiBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW3Byb3BdOiAhc3RhdGVbcHJvcF1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvdXRpbC9pbmRleC5qcyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXG5pbXBvcnQgU3ZnSW5qZWN0b3IgZnJvbSAnc3ZnLWluamVjdG9yJ1xuXG5jb25zdCByZW5kZXIgPSBDb21wb25lbnQgPT4ge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwQ29udGFpbmVyPlxuXHRcdDxDb21wb25lbnQgLz5cblx0PC9BcHBDb250YWluZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgKVxufVxuXG5yZW5kZXIoQXBwKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb25pYy1zcHJpdGUnKVxuICAgIFN2Z0luamVjdG9yKGljb25zKVxufSlcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBjb25zb2xlLmxvZygnc28gc28gaG90JylcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9hcHAnLCAoKSA9PiB7IFxuICAgICAgICBjb25zdCBBcHAgPSByZXF1aXJlKCcuL2FwcCcpLmRlZmF1bHRcbiAgICAgICAgcmVuZGVyKEFwcClcbiAgICB9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9tYWluLmpzeCIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSBbXG4gICAgeyAnX2lkJzogJ3JlZCcsICd2YWx1ZSc6ICdyZWQnLCAnY29sb3InOiAnI2ZlMmUyZScgfSxcbiAgICB7ICdfaWQnOiAnb3JhbmdlJywgJ3ZhbHVlJzogJ29yYW5nZScsICdjb2xvcic6ICcjZjkyJyB9LFxuICAgIHsgJ19pZCc6ICd5ZWxsb3cnLCAndmFsdWUnOiAneWVsbG93JywgJ2NvbG9yJzogJyNmZmYwNGMnIH0sXG4gICAgeyAnX2lkJzogJ2dyZWVuJywgJ3ZhbHVlJzogJ2dyZWVuJywgJ2NvbG9yJzogJyMwYjAnIH0sXG4gICAgeyAnX2lkJzogJ2JsdWUnLCAndmFsdWUnOiAnYmx1ZScsICdjb2xvcic6ICcjMWU1NGY0JyB9LFxuICAgIHsgJ19pZCc6ICdwdXJwbGUnLCAndmFsdWUnOiAncHVycGxlJywgJ2NvbG9yJzogJyM4MDgnIH0sXG4gICAgeyAnX2lkJzogJ2JsYWNrJywgJ3ZhbHVlJzogJ2JsYWNrJywgJ2NvbG9yJzogJyMwMDAnIH0sXG4gICAgeyAnX2lkJzogJ3doaXRlJywgJ3ZhbHVlJzogJ3doaXRlJywgJ2NvbG9yJzogJyNmZmYnIH0sXG4gICAgeyAnX2lkJzogJ3BpbmsnLCAndmFsdWUnOiAncGluaycsICdjb2xvcic6ICcjZTVkJyB9XG5dXG5cblxuZXhwb3J0IGNvbnN0IHBhbGF0dGUgPSB7XG4gICAgdGVhbDoge3ByaW1hcnk6ICcjMDhlMGM1Jywgc2Vjb25kYXJ5OiAnIzRiZDBkZCd9LFxuICAgIHBpbms6IHtwcmltYXJ5OiAnI2ZhNDk3OCcsIHNlY29uZGFyeTogJyNlYjY3YTgnfSxcbiAgICBvcmFuZ2U6IHtwcmltYXJ5OiAnI2ZiOTUwMCcsIHNlY29uZGFyeTogJyNmYmMxMDAnfSxcbiAgICBncmVlbjoge3ByaW1hcnk6ICcjODNiZjAwJywgc2Vjb25kYXJ5OiAnIzgzYmYwMCd9LFxuICAgIHllbGxvdzoge3ByaW1hcnk6ICcjZmZkYzAwJywgc2Vjb25kYXJ5OiAnI2ZmZjQwMCd9LFxuICAgIGJsdWU6IHtwcmltYXJ5OiAnIzAwOEZGRicsIHNlY29uZGFyeTogJyMyNTc3RTgnfSxcbiAgICByZWQ6IHtwcmltYXJ5OiAnI0VDMzUzNScsIHNlY29uZGFyeTogJyNFMzE4MjgnfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3J0Y29uZmlnLmpzIiwiY2xhc3Mgz4Age1xuICAgIGNvdW50QnkoYXJyLCBjb21wKSB7XG4gICAgICAgIGlmICghY29tcCkgXG4gICAgICAgICAgICBjb21wID0gKGEpID0+IGFcbiAgICAgICAgbGV0IGdyb3VwZWQgPSB7fVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyW2ldXG4gICAgICAgICAgICBpZiAoY29tcChhKSBpbiBncm91cGVkKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBlZFtjb21wKGEpXSsrXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyb3VwZWRbY29tcChhKV0gPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwZWRcbiAgICB9XG5cbiAgICBidWNrZXRzKGFyciwgbGlzdCkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnKSBcbiAgICAgICAgICAgIGxpc3QgPSBsaXN0LnNwbGl0KCcgJylcbiAgICAgICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkgXG4gICAgICAgICAgICBsaXN0ID0gdGhpcy5fbWFrZUhhc2gobGlzdCwgMClcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0W2FycltpXV0rK1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuXG4gICAgcmFuZ2UoYSwgYikge1xuICAgICAgICBsZXQgc3RhcnQgPSBiXG4gICAgICAgICAgICA/IGFcbiAgICAgICAgICAgIDogMFxuICAgICAgICBsZXQgZW5kID0gYlxuICAgICAgICAgICAgPyBiXG4gICAgICAgICAgICA6IGFcbiAgICAgICAgbGV0IGFyciA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgZXhwYW5kU2ltcGxlT2JqZWN0KG9iaikge1xuICAgICAgICBvYmogPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgIT09IC0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlRG90Tm90YXRpb24oa2V5LCBvYmpba2V5XSwgb2JqKVxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG5cblxuICAgIC8vIGludGVybmFsXG5cbiAgICBfbWFrZUhhc2goYXJyLCB2YWwpIHtcbiAgICAgICAgbGV0IGhhc2ggPSB7fVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hbYXJyW2ldXSA9IHZhbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgfVxuXG4gICAgX3BhcnNlRG90Tm90YXRpb24oc3RyLCB2YWwsIG9iaikge1xuICAgICAgICB2YXIgY3VycmVudE9iaiA9IG9iaixcbiAgICAgICAgICAgIGtleXMgPSBzdHIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGksIGwgPSBNYXRoLm1heCgxLCBrZXlzLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAga2V5XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXVxuICAgICAgICAgICAgY3VycmVudE9ialtrZXldID0gY3VycmVudE9ialtrZXldIHx8IHt9XG4gICAgICAgICAgICBjdXJyZW50T2JqID0gY3VycmVudE9ialtrZXldXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRPYmpba2V5c1tpXV0gPSB2YWxcbiAgICAgICAgZGVsZXRlIG9ialtzdHJdXG4gICAgfVxuXG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IM+AKClcblxuZXhwb3J0IGNvbnN0IHJlbmRlcklmID0gY29uZGl0aW9uID0+IGVsZW1lbnQgPT4gKGNvbmRpdGlvbiAmJiBlbGVtZW50KSB8fCAnJyBcblxuZXhwb3J0IGNvbnN0IGRhdGVNYXRoID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgZGF5ID0gOC42NGU3XG4gICAgY29uc3Qgd2VlayA9IDYuMDQ4ZSs4XG4gICAgXG4gICAgZnVuY3Rpb24gd2Vla3NPbGQoZGF5KSB7XG4gICAgICAgIGNvbnN0IG1zID0gRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGRheSkuZ2V0VGltZSgpXG5cbiAgICAgICAgY29uc3Qgd2Vla3MgPSBtcy93ZWVrXG5cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQod2Vla3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF5LFxuICAgICAgICB3ZWVrLFxuICAgICAgICB3ZWVrc09sZFxuICAgIH1cblxufSkoKVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAodGltZSkgPT4gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9ydHV0aWwuanMiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY29sb3JGYWN0b3J5KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRleHRDb2xvclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHRDb2xvcihjb2xvcikge1xuICAgICAgICBpZighY29sb3IpIHJldHVyblxuICAgICAgICBsZXQgc3BsaXR0ZXIgPSBjb2xvci5sZW5ndGggPiA0PyAvLnsyfS9nIDogLy4vZ1xuICAgICAgICBsZXQgbWlkZGxlID0gY29sb3IubGVuZ3RoID4gND8gMTI4IDogOFxuICAgICAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnJykubWF0Y2goc3BsaXR0ZXIpXG4gICAgICAgIHJldHVybiBjb2xvci5yZWR1Y2UoKGEsIGIpID0+IChwYXJzZUludChiLCAxNikgLyAzKSArIGEsIDApID4gbWlkZGxlID8gJyM1NTUnIDogJyNmZmYnXG4gICAgfVxufSkoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NlcnZpY2VzL2NvbG9yU2VydmljZS5qcyIsImNsYXNzIGZldGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByZWZpeCA9ICcvYXBpLydcbiAgICB9XG5cbiAgICBnZXQocmVzb3VyY2UsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSArIHBhcmFtVG9RdWVyeShwYXJhbXMpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgY3JlYXRlKHJlc291cmNlLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLnByZWZpeCArIHJlc291cmNlLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBmb3JtYXRCb2R5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlKHJlc291cmNlLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLnByZWZpeCArIHJlc291cmNlLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICBib2R5OiBmb3JtYXRCb2R5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IGZldGNoZXIoKVxuXG5mdW5jdGlvbiBwYXJhbVRvUXVlcnkob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiAnJ1xuXG4gICAgcmV0dXJuICc/JyArXG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICtcbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pXG4gICAgICAgIH0pLmpvaW4oJyYnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRCb2R5KG9iaikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc2VydmljZXMvZmV0Y2hlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9wdWJsaWMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9