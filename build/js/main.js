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

var _RtStack = __webpack_require__("./public/components/rtChart/RtStack.jsx");

var _RtStack2 = _interopRequireDefault(_RtStack);

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
                _react2.default.createElement(_rtPie2.default, { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }),
                _react2.default.createElement(_RtStack2.default, { data: [{
                        value: 15
                    }, {
                        value: 10
                    }, {
                        value: 50
                    }],
                    width: '100px' })
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

/***/ "./public/components/common/FlexRow.jsx":
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

    __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/peller/Desktop/reactracker/public/components/common/FlexRow.jsx');

    __REACT_HOT_LOADER__.register(flexRow, 'flexRow', '/Users/peller/Desktop/reactracker/public/components/common/FlexRow.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/FlexRow.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/Icon.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _ramda = __webpack_require__("./node_modules/ramda/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ viewBox: '0 0 8 8' }, (0, _ramda.omit)(['icon', 'color', 'altClass', 'className'], props), { className: (0, _classnames2.default)(props.altClass || 'icon', props.className) }),
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

  __REACT_HOT_LOADER__.register(Icon, 'Icon', '/Users/peller/Desktop/reactracker/public/components/common/Icon.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/Icon.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/InputBox.jsx":
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
                field: this.props.field,
                valid: this.state.valid
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

    __REACT_HOT_LOADER__.register(InputBox, 'InputBox', '/Users/peller/Desktop/reactracker/public/components/common/InputBox.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/InputBox.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/LoadBar.jsx":
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

    __REACT_HOT_LOADER__.register(LoadBar, 'LoadBar', '/Users/peller/Desktop/reactracker/public/components/common/LoadBar.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/LoadBar.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/LoadContainer.jsx":
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

    __REACT_HOT_LOADER__.register(LoadContainer, 'LoadContainer', '/Users/peller/Desktop/reactracker/public/components/common/LoadContainer.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/LoadContainer.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/RtCard.jsx":
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

  __REACT_HOT_LOADER__.register(RtCard, 'RtCard', '/Users/peller/Desktop/reactracker/public/components/common/RtCard.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/RtCard.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/RtForm.jsx":
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RtForm.__proto__ || Object.getPrototypeOf(RtForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            valid: new Set()
        }, _this.toggleEdit = function () {
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
                            { disabled: !!this.state.valid.size, className: (0, _classnames2.default)('btn', !this.state.valid.size ? 'btn-outline-primary' : 'disabled', { 'btn-outline-pending': this.props.pending }), onClick: this.save },
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
            this.setState(function (state) {
                var modifier = {};
                modifier.valid = new Set(state.valid);

                modifier.data = Object.assign(state.data, _defineProperty({}, update.field.name, update.value));

                if (!update.valid) {
                    modifier.valid.add(update.field.name);
                } else {
                    modifier.valid.delete(update.field.name);
                }

                return modifier;
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

    __REACT_HOT_LOADER__.register(RtForm, 'RtForm', '/Users/peller/Desktop/reactracker/public/components/common/RtForm.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/RtForm.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/RtList.jsx":
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

    __REACT_HOT_LOADER__.register(RtList, 'RtList', '/Users/peller/Desktop/reactracker/public/components/common/RtList.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/RtList.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/RtPane.jsx":
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

  __REACT_HOT_LOADER__.register(RtCard, 'RtCard', '/Users/peller/Desktop/reactracker/public/components/common/RtPane.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/RtPane.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/RtSwatch.jsx":
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _colorService = __webpack_require__("./public/services/colorService.js");

var _colorService2 = _interopRequireDefault(_colorService);

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
    colors: _propTypes2.default.array,
    style: _propTypes2.default.object
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

    __REACT_HOT_LOADER__.register(RtSwatch, 'RtSwatch', '/Users/peller/Desktop/reactracker/public/components/common/RtSwatch.jsx');

    __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/common/RtSwatch.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/RtSwatch.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/SortableList.jsx":
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
        }, _this.makeHandlers = function () {
            var _this2;

            return (_this2 = _this).__makeHandlers__REACT_HOT_LOADER__.apply(_this2, arguments);
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
                            }, item, _this3.makeHandlers(ind, arr, 'list')));
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
                            }, item, _this3.makeHandlers(ind, arr, 'options')));
                        })
                    )
                ) : null
            );
        }
    }, {
        key: '__makeHandlers__REACT_HOT_LOADER__',
        value: function __makeHandlers__REACT_HOT_LOADER__(ind, arr, source) {
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

    __REACT_HOT_LOADER__.register(SortableList, 'SortableList', '/Users/peller/Desktop/reactracker/public/components/common/SortableList.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/SortableList.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/SwipeContainer.jsx":
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

    __REACT_HOT_LOADER__.register(SwipeContainer, 'SwipeContainer', '/Users/peller/Desktop/reactracker/public/components/common/SwipeContainer.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/SwipeContainer.jsx');
}();

;

/***/ }),

/***/ "./public/components/common/TabSwitcher.jsx":
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

    __REACT_HOT_LOADER__.register(isActive, 'isActive', '/Users/peller/Desktop/reactracker/public/components/common/TabSwitcher.jsx');

    __REACT_HOT_LOADER__.register(Slider, 'Slider', '/Users/peller/Desktop/reactracker/public/components/common/TabSwitcher.jsx');

    __REACT_HOT_LOADER__.register(tabSwitcher, 'tabSwitcher', '/Users/peller/Desktop/reactracker/public/components/common/TabSwitcher.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/TabSwitcher.jsx');
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

var _FlexRow = __webpack_require__("./public/components/common/FlexRow.jsx");

var _FlexRow2 = _interopRequireDefault(_FlexRow);

var _InputBox = __webpack_require__("./public/components/common/InputBox.jsx");

var _InputBox2 = _interopRequireDefault(_InputBox);

var _LoadBar = __webpack_require__("./public/components/common/LoadBar.jsx");

var _LoadBar2 = _interopRequireDefault(_LoadBar);

var _LoadContainer = __webpack_require__("./public/components/common/LoadContainer.jsx");

var _LoadContainer2 = _interopRequireDefault(_LoadContainer);

var _RtCard = __webpack_require__("./public/components/common/RtCard.jsx");

var _RtCard2 = _interopRequireDefault(_RtCard);

var _RtForm = __webpack_require__("./public/components/common/RtForm.jsx");

var _RtForm2 = _interopRequireDefault(_RtForm);

var _RtList = __webpack_require__("./public/components/common/RtList.jsx");

var _RtList2 = _interopRequireDefault(_RtList);

var _RtSwatch = __webpack_require__("./public/components/common/RtSwatch.jsx");

var _RtSwatch2 = _interopRequireDefault(_RtSwatch);

var _SwipeContainer = __webpack_require__("./public/components/common/SwipeContainer.jsx");

var _SwipeContainer2 = _interopRequireDefault(_SwipeContainer);

var _Icon = __webpack_require__("./public/components/common/Icon.jsx");

var _Icon2 = _interopRequireDefault(_Icon);

var _RtPane = __webpack_require__("./public/components/common/RtPane.jsx");

var _RtPane2 = _interopRequireDefault(_RtPane);

var _SortableList = __webpack_require__("./public/components/common/SortableList.jsx");

var _SortableList2 = _interopRequireDefault(_SortableList);

var _TabSwitcher = __webpack_require__("./public/components/common/TabSwitcher.jsx");

var _TabSwitcher2 = _interopRequireDefault(_TabSwitcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RtCard = _RtCard2.default;
exports.RtPane = _RtPane2.default;
exports.RtForm = _RtForm2.default;
exports.RtList = _RtList2.default;
exports.Icon = _Icon2.default;
exports.SortableList = _SortableList2.default;
exports.TabSwitcher = _TabSwitcher2.default;
exports.FlexRow = _FlexRow2.default;
exports.LoadContainer = _LoadContainer2.default;
exports.SwipeContainer = _SwipeContainer2.default;
exports.InputBox = _InputBox2.default;
exports.LoadBar = _LoadBar2.default;
exports.RtSwatch = _RtSwatch2.default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),

/***/ "./public/components/gymList/components/GymItem.jsx":
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

    __REACT_HOT_LOADER__.register(GymItem, 'GymItem', '/Users/peller/Desktop/reactracker/public/components/gymList/components/GymItem.jsx');

    __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/gymList/components/GymItem.jsx');

    __REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', '/Users/peller/Desktop/reactracker/public/components/gymList/components/GymItem.jsx');

    __REACT_HOT_LOADER__.register(transformRoutes, 'transformRoutes', '/Users/peller/Desktop/reactracker/public/components/gymList/components/GymItem.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymList/components/GymItem.jsx');
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

var _GymItem = __webpack_require__("./public/components/gymList/components/GymItem.jsx");

var _GymItem2 = _interopRequireDefault(_GymItem);

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
                            return _react2.default.createElement(_GymItem2.default, { key: gym._id, gym: gym, className: 'gym-item' });
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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RouteList.__proto__ || Object.getPrototypeOf(RouteList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            range: new Set()
        }, _this.selectHandler = {
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
                    range = new Set([].concat(_toConsumableArray(_this.state.range), _toConsumableArray(selected)));
                } else if (modifier && !_this.lastSelected) {
                    _this.lastSelected = ind;
                    range = _this.state.range.add(ind);
                } else if (shift && _this.state.range.size) {
                    var _l = Math.min.apply(Math, _toConsumableArray(_this.state.range));
                    var _h = Math.max.apply(Math, _toConsumableArray(_this.state.range));
                    var _selected = ind <= _h ? _rtutil2.default.range(ind, _h + 1) : _rtutil2.default.range(_l, ind + 1);
                    _this.lastSelected = undefined;
                    range = new Set([].concat(_toConsumableArray(_this.state.range), _toConsumableArray(_selected)));
                } else if (document.body.clientWidth < 1000) {
                    var temp = new Set(_this.state.range);
                    _this.state.range.has(ind) ? temp.delete(ind) : temp.add(ind);
                    range = temp;
                } else {
                    _this.lastSelected = ind;
                    range = _this.state.range.has(ind) && _this.state.range.size === 1 ? new Set() : new Set([ind]);
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
                routes: sortOn([].concat(_toConsumableArray(this.props.routes)), 'set_on')
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
                    selected: this.state.range.size > 0 }),
                _react2.default.createElement(
                    'tbody',
                    null,
                    this.state.routes.map(function (route, ind) {
                        return _react2.default.createElement(_routeRow2.default, {
                            ind: ind,
                            key: route._id + route.updated_at,
                            route: route,
                            selectHandler: _this5.selectHandler,
                            selected: _this5.state.range.has(ind),
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
                range: new Set()
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
                    routes: newRoutes
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = __webpack_require__("./public/components/common/index.js");

var _rtutil = __webpack_require__("./public/rtutil.js");

var _ramda = __webpack_require__("./node_modules/ramda/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TdInput = function TdInput(props) {
  return _react2.default.createElement(
    'td',
    { className: props.className },
    _react2.default.createElement('input', _extends({}, (0, _ramda.dissoc)('className', props), { className: 'input-sm form-control' }))
  );
};

var TdSelect = function TdSelect(props) {
  return _react2.default.createElement(
    'td',
    { className: props.className },
    _react2.default.createElement(
      'select',
      _extends({ className: 'input-sm form-control' }, (0, _ramda.omit)(['className', 'children'], props)),
      props.children
    )
  );
};

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
        _react2.default.createElement(TdInput, {
          type: 'text',
          className: 'gym-row__date',
          name: 'set_on',
          onChange: this.updateField,
          defaultValue: new Date(this.props.route.set_on).toLocaleDateString() }),
        _react2.default.createElement(TdInput, {
          type: 'text',
          name: 'grade',
          onChange: this.updateField,
          defaultValue: this.props.route.grade }),
        _react2.default.createElement(TdInput, {
          type: 'text',
          name: 'color',
          onChange: this.updateField,
          defaultValue: this.props.route.color }),
        _react2.default.createElement(
          TdSelect,
          {
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
        ),
        _react2.default.createElement(
          TdSelect,
          {
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
          null,
          _react2.default.createElement('input', { className: 'hidden-sm',
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
          { className: 'gym-row__date', alt: ' (' + _rtutil.dateMath.weeksOld(this.props.route.set_on) + ' weeks old)' },
          new Date(this.props.route.set_on).toLocaleDateString()
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

  __REACT_HOT_LOADER__.register(TdInput, 'TdInput', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeRow.jsx');

  __REACT_HOT_LOADER__.register(TdSelect, 'TdSelect', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/routeRow.jsx');

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
              _reactstrap.NavLink,
              { href: '/logout' },
              'Logout'
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

/***/ "./public/components/rtChart/RtStack.jsx":
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

var RtStack = function (_Component) {
    _inherits(RtStack, _Component);

    function RtStack() {
        _classCallCheck(this, RtStack);

        return _possibleConstructorReturn(this, (RtStack.__proto__ || Object.getPrototypeOf(RtStack)).apply(this, arguments));
    }

    _createClass(RtStack, [{
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

    return RtStack;
}(_react.Component);

function makeChart() {
    if (!this.props.data) return;

    var _props = this.props,
        data = _props.data,
        width = _props.width,
        _props$height = _props.height,
        height = _props$height === undefined ? '100' : _props$height;


    var total = data.reduce(function (acc, cur) {
        return acc + cur.value;
    }, 0);

    var chart = d3.select(this.el).append('svg').attr('viewBox', '0 0 100 100').attr('width', width).attr('height', height);

    var x = d3.scaleLinear().domain([0, total]).range([0, 100]);

    var segments = chart.selectAll('g').data(data).enter().append('g').attr('transform', function (d) {
        return 'translate(' + x(d) + ', 0)';
    });

    segments.append('rect').attr('width', function (d) {
        return x(d.value);
    }).attr('height', height).attr('x', function (d) {
        return x(d.value);
    }).attr('fill', 'black');
}

var _default = RtStack;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtStack, 'RtStack', '/Users/peller/Desktop/reactracker/public/components/rtChart/RtStack.jsx');

    __REACT_HOT_LOADER__.register(makeChart, 'makeChart', '/Users/peller/Desktop/reactracker/public/components/rtChart/RtStack.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtChart/RtStack.jsx');
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

var _common = __webpack_require__("./public/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WzStep = function WzStep(props) {
  return props.review ? _react2.default.createElement(
    'div',
    { className: 'wz-item' },
    _react2.default.createElement('div', { className: 'h3' }),
    _react2.default.createElement(
      _common.RtCard,
      { title: props.name },
      props.children
    )
  ) : _react2.default.createElement(
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

var _common = __webpack_require__("./public/components/common/index.js");

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
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.resetForm();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _common.SwipeContainer,
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    }, {
        key: 'toggleArray',
        value: function toggleArray(a, v) {
            a = [].concat(_toConsumableArray(a));
            var i = a.indexOf(v);
            if (i === -1) a.push(v);else a.splice(i, 1);

            return a;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvYmFzaWNJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvdGVhbUluZm8uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9GbGV4Um93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0lucHV0Qm94LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vTG9hZEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdENhcmQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdEZvcm0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdExpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFBhbmUuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFN3YXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1NvcnRhYmxlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1N3aXBlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vVGFiU3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2NvbXBvbmVudHMvR3ltSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZUhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZUxpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVSb3cuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvc3RhdHNDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9ydENvbnRlbnQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vcnRIZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjay5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekl0ZW0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pMaXN0SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elBhZ2UuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6U3RlcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC93ekdyaWQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvZ3ltLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy90ZWFtLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3dpemFyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9neW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvdGVhbS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3dpemFyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcnRjb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3J0dXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2VydmljZXMvY29sb3JTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zZXJ2aWNlcy9mZXRjaGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbImhpc3RvcnkiLCJyb3V0ZU1pZGRsZXdhcmUiLCJzdG9yZSIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJ3aXRoRXh0cmFBcmd1bWVudCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsIm5leHRSb290UmVkdWNlciIsInJlcXVpcmUiLCJyZXBsYWNlUmVkdWNlciIsIkFwcCIsIkJhc2ljSW5mbyIsInN0YXRlIiwib25TYXZlIiwiZmllbGRzIiwidmFsaWRhdGVFbXB0eSIsInZhbGlkYXRlRW1haWwiLCJwcm9wcyIsInVzZXIiLCJwZW5kaW5nIiwiZGF0YSIsInNldFN0YXRlIiwidmFsdWVzIiwiZXhwYW5kU2ltcGxlT2JqZWN0IiwidXBkYXRlIiwidGhlbiIsImxhYmVsIiwibmFtZSIsInR5cGUiLCJ2YWxpZGF0ZSIsInZhbHVlIiwibGVuZ3RoIiwidGVzdCIsInByb3BUeXBlcyIsIm9iamVjdCIsIkxpc3RJdGVtQ29sb3IiLCJjb2xvciIsIkxpc3RJdGVtIiwiYXZhaWxhYmxlIiwibWFwIiwiVGVhbUluZm8iLCJ0ZWFtIiwiY29sb3JzIiwic2xpY2UiLCJhIiwiYiIsIl9pZCIsImdyYWRlcyIsImJvdWxkZXIiLCJtYXBTdGF0ZSIsInRhYnMiLCJBY2NvdW50IiwibG9hZGVkIiwiYWN0aXZlIiwidG9nZ2xlIiwiZ2V0VXNlciIsImluZCIsImZ1bmMiLCJtYXBEaXNwYXRjaCIsImRpc3BhdGNoIiwic3R5bGVzIiwiZGlzcGxheSIsImlubGluZSIsImp1c3RpZnlDb250ZW50IiwiYXJvdW5kIiwibWFyZ2luIiwic3R5bGUiLCJmbGV4Um93IiwiY2hpbGRyZW4iLCJub2RlIiwiSWNvbiIsImFsdENsYXNzIiwiY2xhc3NOYW1lIiwiaWNvbiIsIklucHV0Qm94IiwidmFsaWQiLCJoYW5kbGVDaGFuZ2UiLCJvbkJsdXIiLCJlIiwiZmllbGQiLCJ0YXJnZXQiLCJ1cGRhdGVGb3JtIiwiZWRpdCIsIkNvbXBvbmVudCIsImJvb2wiLCJMb2FkQmFyIiwiTG9hZENvbnRhaW5lciIsImNvbnRlbnQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJSdENhcmQiLCJ0aXRsZSIsInN0cmluZyIsIlJ0Rm9ybSIsIlNldCIsInRvZ2dsZUVkaXQiLCJzYXZlIiwibWFrZUZvcm0iLCJPYmplY3QiLCJhc3NpZ24iLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInBvc2l0aW9uIiwiZWRpdGFibGUiLCJzaXplIiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJpIiwiQXJyYXkiLCJwYWRkaW5nIiwibW9kaWZpZXIiLCJhZGQiLCJkZWxldGUiLCJkZWZhdWx0UHJvcHMiLCJhcnJheU9mIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJzaGFwZSIsImlzUmVxdWlyZWQiLCJvbkNsaWNrIiwiUnRMaXN0IiwibGlzdEl0ZW1zIiwiaXRlbSIsImluZGV4IiwiUnRTd2F0Y2giLCJjIiwidCIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwibG9jYWxTdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIlNvcnRhYmxlTGlzdCIsIml0ZW1zIiwibWFrZUhhbmRsZXJzIiwiY29tcG9uZW50IiwiY29tcGFyYXRvciIsImN1cnJlbnQiLCJsaXN0Iiwib3B0aW9ucyIsImRpZmZlcmVuY2VXaXRoIiwibmV4dFByb3BzIiwiZm9udFNpemUiLCJhcnIiLCJrZXkiLCJzb3VyY2UiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsImdldERhdGEiLCJkZXN0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJvbGRJbmQiLCJuZXdJbmQiLCJsaXN0cyIsIm5ld0VsIiwic3BsaWNlIiwiU3dpcGVDb250YWluZXIiLCJ0b3VjaFN0YXJ0IiwidG91Y2hFbmQiLCJjaGFuZ2VkVG91Y2hlcyIsInN0YXJ0WCIsImNsaWVudFgiLCJkaXN0Iiwib25MZWZ0Iiwib25Td2lwZSIsIm9uUmlnaHQiLCJpc0FjdGl2ZSIsInRhYiIsIlNsaWRlciIsInRhYlN3aXRjaGVyIiwiUnRQYW5lIiwiVGFiU3dpdGNoZXIiLCJGbGV4Um93IiwiR3ltSXRlbSIsInVuZGVmaW5lZCIsImdldFJvdXRlcyIsImd5bSIsInVybCIsIm93blByb3BzIiwiZ3ltUm91dGVzIiwicm91dGVzIiwicm91dGUiLCJ0cmFuc2Zvcm1Sb3V0ZXMiLCJpZCIsInNvcnRlZCIsImJ1Y2tldHMiLCJncmFkZSIsInJhbmdlIiwia2V5cyIsIkd5bUxpc3QiLCJneW1zIiwibWFwUHJvcHMiLCJmZXRjaGluZyIsImFycm93cyIsIlJvdXRlSGVhZGVyIiwiYXJyb3ciLCJwYXJhbSIsInNvcnQiLCJkaXIiLCJoYW5kbGVTb3J0Iiwic2VsZWN0ZWQiLCJkZWxldGVIYW5kbGVyIiwiUm91dGVMaXN0Iiwic2VsZWN0SGFuZGxlciIsIm1vdXNlRG93biIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnQiLCJzaGlmdEtleSIsIk51bWJlciIsImxhc3RTZWxlY3RlZCIsImwiLCJNYXRoIiwibWluIiwiaCIsIm1heCIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwidGVtcCIsImhhcyIsInVwZGF0ZVJvdXRlIiwic29ydE9uIiwibmV4dCIsInJldmVyc2UiLCJ1cGRhdGVkX2F0Iiwid2FsbHMiLCJldmVudCIsImluZHMiLCJpZHMiLCJyZW1vdmVSb3V0ZXMiLCJuZXdSb3V0ZXMiLCJuZXdSb3V0ZSIsInByb3AiLCJEYXRlIiwicGFyc2UiLCJzZXRfb24iLCJUZElucHV0IiwiVGRTZWxlY3QiLCJSb3V0ZVJvdyIsImNhbmNlbEVkaXQiLCJkZWxldGVSb3V0ZSIsInVwZGF0ZUZpZWxkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2FsbCIsInNldHRlciIsIm1lbWJlcnMiLCJuaWNrbmFtZSIsIndpZHRoIiwid2Vla3NPbGQiLCJudW1iZXIiLCJTdGF0c0NhcmQiLCJtYWtlT3ZlcnZpZXciLCJjb3VudCIsIm9sZGVzdCIsIkluZmluaXR5IiwiZm9yRWFjaCIsIkd5bU92ZXJ2aWV3IiwidHlwZXMiLCJ1cGRhdGVSb3V0ZXMiLCJnZXREYXRhRm9yR3ltIiwibWF0Y2giLCJwYXJhbXMiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJtaW5IZWlnaHQiLCJnZXRUZWFtIiwiY3VycmVudEd5bSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIk1haW4iLCJsb2NhdGlvbiIsImdldEd5bXMiLCJyb3V0ZXIiLCJtYWluQ29udGFpbmVyIiwiUnRDb250ZW50IiwiUnRIZWFkZXIiLCJpc09wZW4iLCJkcm9wZG93bklzT3BlbiIsInRvZ2dsZURyb3Bkb3duIiwiZDMiLCJSdFN0YWNrIiwibWFrZUNoYXJ0IiwiYXBwbHkiLCJlbCIsInRvdGFsIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwiY2hhcnQiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwic2VnbWVudHMiLCJzZWxlY3RBbGwiLCJlbnRlciIsImQiLCJSdEJhciIsImJhcldpZHRoIiwieSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJjb2xvclNjYWxlIiwiaW50ZXJwb2xhdGVIY2wiLCJzY2FsZVNlcXVlbnRpYWwiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJjbGFzc2VkIiwiYmFyIiwiZGVsYXkiLCJyYW5kb20iLCJkdXJhdGlvbiIsImVhc2UiLCJlYXNlRXhwSW4iLCJ0aXAiLCJSdEJpZ0JhciIsInVwZGF0ZUNoYXJ0IiwicmVtb3ZlIiwic3ZnIiwidGV4dCIsImZvbnRTY2FsZSIsImNsYW1wIiwib2Zmc2V0IiwiaHRtbCIsImNhbGwiLCJvbiIsInNob3ciLCJoaWRlIiwicmVzaXplZCIsInNjYWxlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib25yZXNpemUiLCJiaW5kIiwiZ29hbCIsIlJ0UGllIiwicmFkaXVzIiwiZyIsInNjYWxlT3JkaW5hbCIsInBpZSIsInJhaW5ib3ciLCJwYXRoIiwiYXJjIiwib3V0ZXJSYWRpdXMiLCJpbm5lclJhZGl1cyIsImhvdmVyUGF0aCIsImNlbnRyb2lkIiwiYWdlIiwiV3pDb250YWluZXIiLCJ0cmFuc2Zvcm0iLCJzdGVwIiwiV3pJdGVtIiwiX2NsaWNrIiwic2V0Q2xhc3MiLCJXekxpc3RJdGVtIiwiV3pQYWdlIiwicHJldiIsIld6UHJldmlldyIsInBvc3RSb3V0ZSIsInRyYW5zZm9ybWVkUm91dGUiLCJ0cmFuc2Zvcm1Sb3V0ZSIsInRhZ3MiLCJqb2luIiwicmVzZXQiLCJhZGRlZCIsIm1vdmUiLCJvYmoiLCJub3ciLCJXelN0ZXAiLCJyZXZpZXciLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1cGRhdGVUYWdzIiwicmVzZXRGb3JtIiwiUnRXaXphcmRDb250YWluZXIiLCJSdFdpemFyZCIsImd5bUZpbHRlciIsImNsaWNrcyIsImNsaWNrZWQiLCJzdGVwcyIsInN0ZXBDb250ZW50IiwiZW5kIiwidG9TdGVwIiwidGFnIiwiaW5kZXhPZiIsInNldEZpbHRlciIsImZpbHRlckd5bXMiLCJXekdyaWQiLCJFbCIsImlzU2VsZWN0ZWQiLCJzZWxlY3RvciIsIm9uZU9mIiwicmVjZWl2ZUd5bXMiLCJwYXlsb2FkIiwiZ2V0U3RhdGUiLCJmZXRjaGVyIiwiZ2V0IiwiYWRkUm91dGUiLCJyZWNlaXZlUm91dGVzIiwiZ2V0Um91dGVzQnlHeW0iLCJwdXRSb3V0ZSIsImNyZWF0ZSIsInJlcyIsInJlY2VpdmVUZWFtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWNlaXZlVXNlciIsInJlc2V0V2l6YXJkIiwiaW5pdGlhbFN0YXRlIiwidHJhbnNmb3JtR3ltcyIsImFjdGlvbiIsIm1haW5SZWR1Y2VyIiwiTWFwIiwic2V0IiwiZmlsdGVyTm90IiwidiIsImNvbmNhdCIsInJvcGUiLCJ0cmFuc2Zvcm1UZWFtIiwid2l6YXJkIiwidG9nZ2xlVGFnIiwic3RhdGVUb2dnbGUiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZWZhdWx0IiwicGFsYXR0ZSIsInRlYWwiLCJwaW5rIiwib3JhbmdlIiwiZ3JlZW4iLCJ5ZWxsb3ciLCJibHVlIiwicmVkIiwiz4AiLCJjb21wIiwiZ3JvdXBlZCIsInNwbGl0IiwiX21ha2VIYXNoIiwic3RhcnQiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9wYXJzZURvdE5vdGF0aW9uIiwidmFsIiwiaGFzaCIsInN0ciIsImN1cnJlbnRPYmoiLCJyZW5kZXJJZiIsImNvbmRpdGlvbiIsImVsZW1lbnQiLCJkYXRlTWF0aCIsImRheSIsIndlZWsiLCJtcyIsImdldFRpbWUiLCJ3ZWVrcyIsInJvdW5kIiwic2xlZXAiLCJ0aW1lIiwiY29sb3JGYWN0b3J5Iiwic3BsaXR0ZXIiLCJtaWRkbGUiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJwcmVmaXgiLCJyZXNvdXJjZSIsImZldGNoIiwicGFyYW1Ub1F1ZXJ5IiwianNvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJmb3JtYXRCb2R5IiwiY3JlZGVudGlhbHMiLCJlbmNvZGVVUklDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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LENBQVA7QUFVSDs7Ozs7O2VBR1UsSUFBSTVFLE9BQUosRTs7Ozs7QUFFZixTQUFTMkUsWUFBVCxDQUFzQnZHLEdBQXRCLEVBQTJCO0FBQ3ZCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sRUFBUDs7QUFFVixXQUFPLE1BQ0h2UixPQUFPa0csSUFBUCxDQUFZcUwsR0FBWixFQUFpQmxWLEdBQWpCLENBQXFCLFVBQVMyRyxHQUFULEVBQWM7QUFDL0IsZUFBT29WLG1CQUFtQnBWLEdBQW5CLElBQTBCLEdBQTFCLEdBQ0hvVixtQkFBbUI3RyxJQUFJdk8sR0FBSixDQUFuQixDQURKO0FBRUgsS0FIRCxFQUdHbU8sSUFISCxDQUdRLEdBSFIsQ0FESjtBQUtIOztBQUVELFNBQVMrRyxVQUFULENBQW9CM0csR0FBcEIsRUFBeUI7QUFDckIsV0FBTzRFLEtBQUtDLFNBQUwsQ0FBZTdFLEdBQWYsQ0FBUDtBQUNIOzs7Ozs7OztrQ0FqREs0QixPOztrQ0FxQ0cyRSxZOztrQ0FVQUksVTs7Ozs7Ozs7Ozs7O0FDL0NULHlDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZXBlbmRlbmNpZXMgc3VibW9kdWxlcyBpbXBvcnQgJy4vY29tcG9uZW50cy91dGlsL3V0aWwnIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydENoYXJ0L3J0Q2hhcnQnIGltcG9ydCAnLi9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkJyBpbXBvcnRcbi8vICcuL2NvbXBvbmVudHMvZ3ltTGlzdC9neW1MaXN0JyBpbXBvcnQgJy4vY29tcG9uZW50cy9tYWluL21haW4nIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydEd5bS9ydEd5bSdcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW4gZnJvbSAnY29tcG9uZW50cy9tYWluJ1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnc2VydmljZXMvZmV0Y2hlcidcbmltcG9ydCBtYWluUmVkdWNlciBmcm9tICdkYXRhL3JlZHVjZXJzJ1xuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyLCByb3V0ZXJNaWRkbGV3YXJlfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSgpXG5jb25zdCByb3V0ZU1pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgbWFpblJlZHVjZXIsIFxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCksIFxuICAgIGFwcGx5TWlkZGxld2FyZShyb3V0ZU1pZGRsZXdhcmUsIHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KGZldGNoZXIpKVxuICAgIClcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9kYXRhL3JlZHVjZXJzJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuL2RhdGEvcmVkdWNlcnMvaW5kZXgnKVxuICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXh0Um9vdFJlZHVjZXIpXG4gICAgfSlcbn1cblxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgICAgICAgICAgICAgPE1haW4vPlxuICAgICAgICAgICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2FwcC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IFJ0Rm9ybSB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdzZXJ2aWNlcy9mZXRjaGVyJ1xuaW1wb3J0IHBpLCB7IHNsZWVwIH0gZnJvbSAncnR1dGlsJ1xuXG5jbGFzcyBCYXNpY0luZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0geyAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSdEZvcm1cbiAgICAgICAgICAgICAgICAgICAgZmllbGRzPXsgdGhpcy5maWVsZHMoKSB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcz17IHRoaXMucHJvcHMudXNlciB9XG4gICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXsgdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17IHRoaXMub25TYXZlIH1cbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZz17IHRoaXMuc3RhdGUucGVuZGluZyB9IC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBvblNhdmUgPSAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBlbmRpbmc6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHBpLmV4cGFuZFNpbXBsZU9iamVjdChkYXRhKVxuXG4gICAgICAgIHJldHVybiBmZXRjaGVyLnVwZGF0ZSgndXNlcnMvY3VycmVudCcsIGRhdGEpXG4gICAgICAgICAgICAudGhlbihzbGVlcCgxMDAwKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgICB9KVxuXG5cbiAgICB9XG5cbiAgICBmaWVsZHMgPSAoKSA9PiBbXG4gICAgICAgIFtcbiAgICAgICAgICAgICdHZW5lcmFsJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZUVtcHR5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRS1tYWlsJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGVFbWFpbFxuICAgICAgICAgICAgfV0sXG4gICAgICAgIFtcbiAgICAgICAgICAgICdTZXR0aW5nJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ05pY2tuYW1lJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmlja25hbWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZUVtcHR5XG4gICAgICAgICAgICB9XVxuICAgIF1cblxuICAgIHZhbGlkYXRlRW1wdHkgPSAodmFsdWUpID0+IHZhbHVlLmxlbmd0aCA+IDBcblxuICAgIHZhbGlkYXRlRW1haWwgPSAodmFsdWUpID0+IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QodmFsdWUpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNJbmZvXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvY29tcG9uZW50cy9iYXNpY0luZm8uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBSdFN3YXRjaCwgRmxleFJvdywgU29ydGFibGVMaXN0IH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCBSdFBpZSBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvcnRQaWUnXG5pbXBvcnQgUnRTdGFjayBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjaydcblxuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdydGNvbmZpZydcblxuXG5jb25zdCBMaXN0SXRlbUNvbG9yID0gKHByb3BzKSA9PiAoPGxpIHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJ0U3dhdGNoIGNvbG9yPXsgcHJvcHMuY29sb3IgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcblxuY29uc3QgTGlzdEl0ZW0gPSAocHJvcHMpID0+ICg8bGkgey4uLnByb3BzfT57cHJvcHMudmFsdWV9PC9saT4pICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbmNvbnN0IGF2YWlsYWJsZSA9IGNvbG9ycy5tYXAoY29sb3IgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbG9yXG4gICAgfVxufSlcblxuXG5jbGFzcyBUZWFtSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7ICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0ZWFtOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgPFNvcnRhYmxlTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXsgdGhpcy5wcm9wcy50ZWFtLmNvbG9ycy5zbGljZSgwLCA1KS5tYXAoY29sb3IgPT4geyByZXR1cm4geyBjb2xvcn0gfSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IGF2YWlsYWJsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9eyBMaXN0SXRlbUNvbG9yIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmF0b3I9eyhhLCBiKSA9PiAgYS5jb2xvci5faWQgPT09IGIuY29sb3IuX2lkfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUxpc3RcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpc3QtdW5zdHlsZWQnXG4gICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5wcm9wcy50ZWFtLmdyYWRlcy5ib3VsZGVyLnNsaWNlKDAsIDIpfVxuICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMudGVhbS5ncmFkZXMuYm91bGRlcn1cbiAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpc3RJdGVtfVxuICAgICAgICAgICAgICAgICAgIGNvbXBhcmF0b3I9eyhhLCBiKSA9PiBhLnZhbHVlID09PSBiLnZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8UnRQaWUgZGF0YT17WzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXX0vPlxuICAgICAgICAgICAgICA8UnRTdGFjayBkYXRhPXtbe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IDE1XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogNTBcbiAgICAgICAgICAgICAgfV19XG4gICAgICAgICAgICAgIHdpZHRoPScxMDBweCcvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZWFtOiBzdGF0ZS50ZWFtXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShUZWFtSW5mbylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvdGVhbUluZm8uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFRhYiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IExvYWRCYXIsIFJ0Q2FyZCwgTG9hZENvbnRhaW5lciwgVGFiU3dpdGNoZXIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCBCYXNpY0luZm8gZnJvbSAnLi9jb21wb25lbnRzL2Jhc2ljSW5mbydcbmltcG9ydCBUZWFtSW5mbyBmcm9tICcuL2NvbXBvbmVudHMvdGVhbUluZm8nXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ2RhdGEvYWN0aW9ucy91c2VyJ1xuXG5jb25zdCB0YWJzID0gWydCYXNpYyBJbmZvJywgJ1RlYW0gSW5mbyddXG5cbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBwZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlOiAnQmFzaWMgSW5mbydcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnZXRVc2VyOiBQVC5mdW5jLFxuICAgICAgICB1c2VyOiBQVC5vYmplY3RcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TG9hZENvbnRhaW5lciBsb2FkZWQ9e3RoaXMuc3RhdGUubG9hZGVkfT5cbiAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICA8UnRDYXJkIHRpdGxlPVwiTXkgQWNjb3VudFwiPlxuICAgICAgICAgICAgICAgIDxUYWJTd2l0Y2hlciB0YWJzPXt0YWJzfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJJZih0aGlzLnN0YXRlLmFjdGl2ZSA9PSAnQmFzaWMgSW5mbycpKFxuICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkJhc2ljIEluZm9cIiBldmVudEtleT17MX0gdGFiQ2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPEJhc2ljSW5mbyB1c2VyPXt0aGlzLnByb3BzLnVzZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cmVuZGVySWYodGhpcy5zdGF0ZS5hY3RpdmUgPT09ICdUZWFtIEluZm8nKShcbiAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJUZWFtIEluZm9cIiBldmVudEtleT17Mn0gdGFiQ2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPFRlYW1JbmZvLz5cbiAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1J0Q2FyZD5cbiAgICAgICAgICAgIDwvTG9hZENvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHRvZ2dsZSA9IChpbmQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6IGluZFxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IHN0YXRlLnVzZXJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VXNlcjogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlcigpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEFjY291bnQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWNjb3VudC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHN0eWxlcyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6IHByb3BzLmlubGluZT8gJ2lubGluZS1mbGV4JyA6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IHByb3BzLmFyb3VuZD8gJ3NwYWNlLWFyb3VuZCcgOiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAuLi5wcm9wcy5zdHlsZVxuICAgIH1cbn1cblxuY29uc3QgZmxleFJvdyA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgc3R5bGU9eyBzdHlsZXMocHJvcHMpIH0gY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbilcblxuZmxleFJvdy5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsZXhSb3dcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vRmxleFJvdy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge29taXR9IGZyb20gJ3JhbWRhJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5cblxuY29uc3QgSWNvbiA9IChwcm9wcykgPT4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCA4IDhcIiB7Li4ub21pdChbJ2ljb24nLCAnY29sb3InLCAnYWx0Q2xhc3MnLCAnY2xhc3NOYW1lJ10sIHByb3BzKX0gY2xhc3NOYW1lPXtjeChwcm9wcy5hbHRDbGFzcyB8fCAnaWNvbicsIHByb3BzLmNsYXNzTmFtZSl9PlxuICAgICAgPHVzZSB4bGlua0hyZWY9eycjJyArIHByb3BzLmljb259IGNsYXNzTmFtZT17cHJvcHMuY29sb3IgfHwgJ2ljb24tYmxhY2snfSAvPlxuICAgIDwvc3ZnPlxuKVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9JY29uLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jbGFzcyBJbnB1dEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHZhbGlkOiB0cnVlXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdXBkYXRlRm9ybTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5maWVsZC52YWxpZGF0ZSkge1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gdGhpcy5wcm9wcy5maWVsZC52YWxpZGF0ZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZhbGlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CbHVyID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIGZpZWxkOiB0aGlzLnByb3BzLmZpZWxkLFxuICAgICAgICAgICAgdmFsaWQ6IHRoaXMuc3RhdGUudmFsaWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUZvcm0oZGF0YSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7ZmllbGQsIHZhbHVlc30gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS52YWxpZCA/ICdmb3JtLWdyb3VwIHJvdycgOiAnZm9ybS1ncm91cCByb3cgaGFzLXdhcm5pbmcnIH0ga2V5PXsgZmllbGQubGFiZWwgfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbCBjb2wtbWQtMiBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIHsgZmllbGQubGFiZWwgfVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5lZGl0ID8gKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17IGZpZWxkLnR5cGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBmaWVsZC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyB2YWx1ZXNbZmllbGQubmFtZV0gfHwgZmllbGQubGFiZWwgfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1zdGF0aWMgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWVzW2ZpZWxkLm5hbWVdIHx8IGZpZWxkLmxhYmVsIH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbklucHV0Qm94LnByb3BUeXBlcyA9IHtcbiAgICBmaWVsZDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2YWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZWRpdDogUHJvcFR5cGVzLmJvb2xcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCb3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vSW5wdXRCb3guanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMb2FkQmFyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuaW5saW5lPyAnbG9hZC1iYXIgbG9hZC1iYXItaW5saW5lJyA6ICdsb2FkLWJhcid9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtYmFyX19iYXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWJhcl9fYmFyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1iYXJfX2JhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZEJhclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9Mb2FkQmFyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIGZyb20gJ3JlYWN0LWNzcy10cmFuc2l0aW9uLXJlcGxhY2UnXG5cblxuY2xhc3MgTG9hZENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZSB0cmFuc2l0aW9uTmFtZT1cImxvYWRfY29udGFpbmVyXCIgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXs1MDB9PlxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMubG9hZGVkID8gY29udGVudFsxXSA6IGNvbnRlbnRbMF0gfVxuICAgICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuXG5jb25zdCBSdENhcmQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJydC1jYXJkX19jb250ZW50XCIgc3R5bGU9e3Byb3BzLnN0eWxlfT5cbiAgICB7cmVuZGVySWYocHJvcHMudGl0bGUpKFxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnQtY2FyZF9faGVhZGVyIHRleHQtY2FwaXRhbGl6ZVwiPlxuICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgIDwvZGl2Pil9XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj5cbilcblxuXG5leHBvcnQgZGVmYXVsdCBSdENhcmRcblxuUnRDYXJkLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRDYXJkLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBJbnB1dEJveCwgRmxleFJvdywgTG9hZEJhciB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuXG5cbmNsYXNzIFJ0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHZhbGlkOiBuZXcgU2V0KClcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBmaWVsZHM6IFtdLFxuICAgICAgICB2YWx1ZXM6IHt9XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZmllbGRzOiBQVC5hcnJheU9mKFxuICAgICAgICAgICAgUFQub25lT2ZUeXBlKFtcbiAgICAgICAgICAgICAgICBQVC5hcnJheSxcbiAgICAgICAgICAgICAgICBQVC5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFBULnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBQVC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFBULnN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyOiBQVC5mdW5jLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBQVC5mdW5jLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogUFQuZnVuY1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICApKS5pc1JlcXVpcmVkLFxuICAgICAgICB2YWx1ZXM6IFBULm9iamVjdCxcbiAgICAgICAgZWRpdGFibGU6IFBULmJvb2wsXG4gICAgICAgIHBlbmRpbmc6IFBULmJvb2wsXG4gICAgICAgIG9uU2F2ZTogUFQuZnVuY1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMudmFsdWVzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIHN0eWxlPXsgeyBvcGFjaXR5OiB0aGlzLnByb3BzLnBlbmRpbmcgPyAwLjUgOiAxLCB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjNzIGxpbmVhcicsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH0gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPEZsZXhSb3cgaW5saW5lPlxuICAgICAgICAgICAgICAgICAgeyByZW5kZXJJZih0aGlzLnByb3BzLmVkaXRhYmxlICYmICF0aGlzLnN0YXRlLmVkaXQpKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZUVkaXQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgICAgeyByZW5kZXJJZih0aGlzLnByb3BzLmVkaXRhYmxlICYmIHRoaXMuc3RhdGUuZWRpdCkoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBvbkNsaWNrPXsgdGhpcy50b2dnbGVFZGl0IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgICAgeyByZW5kZXJJZih0aGlzLnN0YXRlLmVkaXQpKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17ISF0aGlzLnN0YXRlLnZhbGlkLnNpemV9IGNsYXNzTmFtZT17Y3goJ2J0bicsICF0aGlzLnN0YXRlLnZhbGlkLnNpemU/ICdidG4tb3V0bGluZS1wcmltYXJ5JzonZGlzYWJsZWQnLCB7J2J0bi1vdXRsaW5lLXBlbmRpbmcnOiB0aGlzLnByb3BzLnBlbmRpbmd9KX0gb25DbGljaz17IHRoaXMuc2F2ZSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgeyB0aGlzLm1ha2VGb3JtKCkgfVxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICB0b2dnbGVFZGl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVkaXQgPyB0aGlzLnByb3BzLnZhbHVlcyA6IHRoaXMuc3RhdGUuZGF0YSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0OiAhdGhpcy5zdGF0ZS5lZGl0LFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNhdmUgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucHJvcHMub25TYXZlKHRoaXMuc3RhdGUuZGF0YSlcbiAgICAgICAgaWYgKHJlc3VsdC50aGVuKSB7XG4gICAgICAgICAgICByZXN1bHQudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZUZvcm0gPSAoZmllbGRzKSA9PiB7XG4gICAgICAgIGZpZWxkcyA9IGZpZWxkcyB8fCB0aGlzLnByb3BzLmZpZWxkc1xuICAgICAgICByZXR1cm4gZmllbGRzLm1hcCgoZmllbGQsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17IGkgfSBzdHlsZT17IHsgcGFkZGluZzogJzMwcHggMCAwJyB9IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57IGZpZWxkWzBdIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5tYWtlRm9ybShmaWVsZC5zbGljZSgxKSwgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmVkaXQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgZmllbGQubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD17IGZpZWxkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17IHRoaXMuc3RhdGUuZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0PXsgdGhpcy5zdGF0ZS5lZGl0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09eyB0aGlzLnVwZGF0ZUZvcm0gfSAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVGb3JtID0gKHVwZGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGlmaWVyID0ge31cbiAgICAgICAgICAgIG1vZGlmaWVyLnZhbGlkID0gbmV3IFNldChzdGF0ZS52YWxpZClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbW9kaWZpZXIuZGF0YSA9IE9iamVjdC5hc3NpZ24oc3RhdGUuZGF0YSwgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBbdXBkYXRlLmZpZWxkLm5hbWVdOiB1cGRhdGUudmFsdWVcbiAgICAgICAgICAgICAgICB9LCApXG5cbiAgICAgICAgICAgIGlmKCF1cGRhdGUudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllci52YWxpZC5hZGQodXBkYXRlLmZpZWxkLm5hbWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVyLnZhbGlkLmRlbGV0ZSh1cGRhdGUuZmllbGQubmFtZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVyXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRGb3JtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jb25zdCBSdExpc3QgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9fcG9kX19saXN0XCI+XG4gICAgICAgIHsgcHJvcHMubGlzdEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+ICg8ZGl2IGtleT17aXRlbS5faWQgfHwgaW5kZXh9IGNsYXNzTmFtZT1cIlwiPntpdGVtLnZhbHVlIHx8IGl0ZW19PC9kaXY+KSkgfVxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSdExpc3RcblxuUnRMaXN0LnByb3BUeXBlcyA9IHtcbiAgICBsaXN0SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSksXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1J0TGlzdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cblxuY29uc3QgUnRDYXJkID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXsncnQtcGFuZSAnICsgKHByb3BzLmNsYXNzTmFtZSB8fCAnJyl9PlxuICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUnRDYXJkXG5cblJ0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFBhbmUuanN4IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IGNvbG9yIGZyb20gJ3NlcnZpY2VzL2NvbG9yU2VydmljZSdcblxuY2xhc3MgUnRTd2F0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGMgPSB0aGlzLnByb3BzLmNvbG9yXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb2xvci5jb2xvcikge1xuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnByb3BzLmNvbG9ycy5maWx0ZXIoY29sb3IgPT4gY29sb3IudmFsdWUgPT09IHRoaXMucHJvcHMuY29sb3IudG9Mb3dlckNhc2UoKSlbMF1cbiAgICAgICAgICAgIGMgPSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHQ/IHQuY29sb3IgOiAnI0ZGRicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMuY29sb3IudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvY2FsU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGMuY29sb3IgfHwgJ3doaXRlJyxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvci50ZXh0Q29sb3IoYy5jb2xvciksXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMzBweCdcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgbG9jYWxTdHlsZSwgdGhpcy5wcm9wcy5zdHlsZT8gdGhpcy5wcm9wcy5zdHlsZSA6IHt9KVxuXG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9eyBzdHlsZSB9PjxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbi1zbS1kb3duXCI+eyBjLnZhbHVlIHx8ICcnIH08L3NwYW4+PC9zcGFuPilcbiAgICB9XG5cbn1cblxuUnRTd2F0Y2gucHJvcFR5cGVzID0ge1xuICAgIGNvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgY29sb3JzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2xvcnM6IHN0YXRlLnRlYW0uY29sb3JzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShSdFN3YXRjaClcblxuZXhwb3J0IHsgUnRTd2F0Y2ggfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFN3YXRjaC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHJlbmRlcklmIH0gZnJvbSAncnR1dGlsJ1xuXG5cbmNsYXNzIFNvcnRhYmxlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGl0ZW1zOiBbXVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBsaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICBjb21wYXJhdG9yOiBQcm9wVHlwZXMuZnVuY1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLkxpc3RJdGVtID0gdGhpcy5wcm9wcy5jb21wb25lbnRcbiAgICAgICAgdGhpcy5jb21wYXJhdG9yID0gdGhpcy5wcm9wcy5jb21wYXJhdG9yIHx8ICgoYSwgYikgPT4gYSA9PT0gYilcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IHRoaXMucHJvcHMubGlzdFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBSLmRpZmZlcmVuY2VXaXRoKHRoaXMuY29tcGFyYXRvciwgdGhpcy5wcm9wcy5vcHRpb25zLCB0aGlzLnByb3BzLmxpc3QpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50OiBuZXh0UHJvcHMubGlzdFxuICAgICAgICB9KVxuICAgICAgICBpZiAobmV4dFByb3BzLm9wdGlvbnMgJiYgdGhpcy5zdGF0ZS5jdXJyZW50IHx8IG5leHRQcm9wcy5saXN0KSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gUi5kaWZmZXJlbmNlV2l0aCh0aGlzLmNvbXBhcmF0b3IsIG5leHRQcm9wcy5vcHRpb25zLCBuZXh0UHJvcHMubGlzdClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jdXJyZW50KSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuY2xhc3NOYW1lIH0gc3R5bGU9eyB7IGZvbnRTaXplOiAnMS41ZW0nIH0gfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuY3VycmVudC5tYXAoKGl0ZW0sIGluZCwgYXJyKSA9PiA8dGhpcy5MaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc291cmNlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaXRlbS5rZXkgfHwgaW5kIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5tYWtlSGFuZGxlcnMoaW5kLCBhcnIsICdsaXN0Jyl9Lz4pIH1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcHRpb25zID8gKFxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuY2xhc3NOYW1lIH0gc3R5bGU9eyB7IGZvbnRTaXplOiAnMS41ZW0nIH0gfT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcHRpb25zLm1hcCgoaXRlbSwgaW5kLCBhcnIpID0+IDx0aGlzLkxpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNvdXJjZT1cIm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgaXRlbS5rZXkgfHwgaW5kIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMubWFrZUhhbmRsZXJzKGluZCwgYXJyLCAnb3B0aW9ucycpfS8+XG4gICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Db2w+KSA6IG51bGwgfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBtYWtlSGFuZGxlcnMgPSAoaW5kLCBhcnIsIHNvdXJjZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgb25EcmFnU3RhcnQ6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnaW5kJywgaW5kKVxuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NvdXJjZScsIHNvdXJjZSlcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EcmFnT3ZlcjogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRyb3A6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NvdXJjZScpXG4gICAgICAgICAgICAgICAgbGV0IGRlc3QgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zb3VyY2VcblxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IGRlc3QpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgbGV0IG9sZEluZCA9ICtlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdpbmQnKVxuICAgICAgICAgICAgICAgIGxldCBuZXdJbmQgPSBpbmRcblxuICAgICAgICAgICAgICAgIGxldCBsaXN0cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogWy4uLnRoaXMuc3RhdGUuY3VycmVudF0sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFsuLi50aGlzLnN0YXRlLm9wdGlvbnNdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5ld0luZCA9PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJbmQgPSBhcnIubGVuZ3RoXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBuZXdFbCA9IGxpc3RzW3NvdXJjZV0uc3BsaWNlKG9sZEluZCwgMSlbMF1cbiAgICAgICAgICAgICAgICBsaXN0c1tkZXN0XS5zcGxpY2UobmV3SW5kLCAwLCBuZXdFbClcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBsaXN0cy5saXN0LFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBsaXN0cy5vcHRpb25zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29ydGFibGVMaXN0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1NvcnRhYmxlTGlzdC5qc3giLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBTd2lwZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBvblRvdWNoU3RhcnQ9e3RoaXMudG91Y2hTdGFydH0gb25Ub3VjaEVuZD17dGhpcy50b3VjaEVuZH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgdG91Y2hTdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGlmKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuXG4gICAgICAgIHRoaXMuc3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYXG4gICAgfVxuXG4gICAgdG91Y2hFbmQgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgZGlzdCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuc3RhcnRYXG4gICAgICAgIGlmKGRpc3QgPCAxMDAgJiYgZGlzdCA+IC0xMDApIHJldHVyblxuXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLm9uTGVmdCkgcmV0dXJuIHRoaXMucHJvcHMub25Td2lwZShkaXN0KVxuXG4gICAgICAgIGRpc3QgPiAwID8gdGhpcy5wcm9wcy5vblJpZ2h0KCkgOiB0aGlzLnByb3BzLm9uTGVmdCgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZUNvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9Td2lwZUNvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5mdW5jdGlvbiBpc0FjdGl2ZShwcm9wcywgdGFiKSB7XG4gICAgcmV0dXJuIHByb3BzLmFjdGl2ZSA9PT0gdGFiID8gJ2FjdGl2ZSB0ZXh0LWNhcGl0YWxpemUnIDogJ3RleHQtY2FwaXRhbGl6ZSdcbn1cblxuY29uc3QgU2xpZGVyID0gKCkgPT4gPGxpIGNsYXNzTmFtZT0ndGFiLXNsaWRlcicvPlxuXG5jb25zdCB0YWJTd2l0Y2hlciA9IChwcm9wcykgPT4gKFxuICAgIDxOYXYgdGFicz5cbiAgICAgIHsgcHJvcHMudGFicy5tYXAoKHRhYiwgaW5kKSA9PiAoXG4gICAgICAgICAgICA8TmF2SXRlbSBrZXk9e3RhYn0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNBY3RpdmUocHJvcHMsIHRhYikgfSBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4ge3Byb3BzLnRvZ2dsZSh0YWIpfSB9PlxuICAgICAgICAgICAgICAgIHt0YWJ9XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICkpIH1cbiAgICAgICAgPFNsaWRlciBrZXk9J3NsaWRlcicvPlxuICAgIDwvTmF2PlxuKVxuXG50YWJTd2l0Y2hlci5wcm9wVHlwZXMgPSB7XG4gICAgdGFiczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgYWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvZ2dsZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxudGFiU3dpdGNoZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHRhYnM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYlN3aXRjaGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1RhYlN3aXRjaGVyLmpzeCIsImltcG9ydCBGbGV4Um93IGZyb20gJy4vRmxleFJvdydcbmltcG9ydCBJbnB1dEJveCBmcm9tICcuL0lucHV0Qm94J1xuaW1wb3J0IExvYWRCYXIgZnJvbSAnLi9Mb2FkQmFyJ1xuaW1wb3J0IExvYWRDb250YWluZXIgZnJvbSAnLi9Mb2FkQ29udGFpbmVyJ1xuaW1wb3J0IFJ0Q2FyZCBmcm9tICcuL1J0Q2FyZCdcbmltcG9ydCBSdEZvcm0gZnJvbScuL1J0Rm9ybSdcbmltcG9ydCBSdExpc3QgZnJvbSAnLi9SdExpc3QnXG5pbXBvcnQgUnRTd2F0Y2ggZnJvbSAnLi9SdFN3YXRjaCdcbmltcG9ydCBTd2lwZUNvbnRhaW5lciBmcm9tICcuL1N3aXBlQ29udGFpbmVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IFJ0UGFuZSBmcm9tICcuL1J0UGFuZSdcbmltcG9ydCBTb3J0YWJsZUxpc3QgZnJvbSAnLi9Tb3J0YWJsZUxpc3QnXG5pbXBvcnQgVGFiU3dpdGNoZXIgZnJvbSAnLi9UYWJTd2l0Y2hlcidcblxuZXhwb3J0IHtcbiAgICAvLyBVSSBcbiAgICBSdENhcmQsXG4gICAgUnRQYW5lLFxuICAgIFJ0Rm9ybSxcbiAgICBSdExpc3QsXG4gICAgSWNvbixcbiAgICBTb3J0YWJsZUxpc3QsXG4gICAgVGFiU3dpdGNoZXIsXG5cbiAgICAvLyBMQVlPVVRcbiAgICBGbGV4Um93LFxuICAgIExvYWRDb250YWluZXIsXG4gICAgU3dpcGVDb250YWluZXIsXG5cbiAgICAvL0VMRU1FTlRTXG4gICAgSW5wdXRCb3gsXG4gICAgTG9hZEJhcixcbiAgICBSdFN3YXRjaFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUnRCYXIgZnJvbSAnY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyJ1xuXG5pbXBvcnQgeyBnZXRSb3V0ZXNCeUd5bSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IM+AIGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgR3ltSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFJvdXRlcyh0aGlzLnByb3BzLmd5bS5faWQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneW0taXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3ltLXRpdGxlIHRleHQtYnJhbmQgdGV4dC11cHBlcmNhc2UgdGV4dC10aGluXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17ICcvZ3ltcy8nICsgdGhpcy5wcm9wcy5neW0udXJsIH0gY2xhc3NOYW1lPVwibGluay1wbGFpblwiPlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd5bS1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVxuICAgICAgICAgICAgICAgICAgICA/IDxSdEJhciBkYXRhPXsgdGhpcy5wcm9wcy5kYXRhIH0gY29sb3I9e3RoaXMucHJvcHMuZ3ltLmNvbG9yfS8+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkd5bUl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGd5bTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICBsZXQgZ3ltUm91dGVzID0gc3RhdGUucm91dGVzLnRvQXJyYXkoKS5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBvd25Qcm9wcy5neW0uX2lkKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogdHJhbnNmb3JtUm91dGVzKGd5bVJvdXRlcylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Um91dGVzOiAoaWQpID0+IGRpc3BhdGNoKGdldFJvdXRlc0J5R3ltKGlkKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShHeW1JdGVtKVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzKSB7XG4gICAgaWYgKCFyb3V0ZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICAgIGxldCBzb3J0ZWQgPSDPgC5idWNrZXRzKHJvdXRlcy5tYXAoYm91bGRlciA9PiBib3VsZGVyLmdyYWRlKSwgz4AucmFuZ2UoMTMpKVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4gc29ydGVkW2tleV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9jb21wb25lbnRzL0d5bUl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgR3ltSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvR3ltSXRlbSdcbmltcG9ydCB7IExvYWRCYXIsIExvYWRDb250YWluZXIsIFJ0Q2FyZCB9ZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmNsYXNzIEd5bUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ3ltczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT1cIkd5bXNcIj5cbiAgICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXsgISF0aGlzLnByb3BzLmd5bXMubGVuZ3RoIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIwXCIgY2xhc3NOYW1lPVwiZ3ltLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMVwiIGNsYXNzTmFtZT1cImd5bS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZ3ltcy5tYXAoZ3ltID0+ICg8R3ltSXRlbSBrZXk9eyBneW0uX2lkIH0gZ3ltPXsgZ3ltIH0gY2xhc3NOYW1lPVwiZ3ltLWl0ZW1cIiAvPikpIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Mb2FkQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9SdENhcmQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcFByb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltcyxcbiAgICAgICAgZmV0Y2hpbmc6IHN0YXRlLmZldGNoaW5nXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShHeW1MaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge3JlbmRlcklmfSBmcm9tICdydHV0aWwnXG5cbmNvbnN0IGFycm93cyA9IHsgXG4gICAgJ2FzYyc6ICdcXHUyNUIyJyxcbiAgICAnZGVzYyc6ICdcXHUyNUJDJ1xufVxuXG5cbmNvbnN0IFJvdXRlSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gICAgZnVuY3Rpb24gYXJyb3cocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnNvcnQgPT09IHBhcmFtPyBhcnJvd3NbcHJvcHMuZGlyXSA6IG51bGxcbiAgICB9IFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRhYmxlLWNlbnRlclwiPlxuICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdzZXRfb24nKX0+RGF0ZSB7YXJyb3coJ3NldF9vbicpfTwvdGg+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ2dyYWRlJyl9PkdyYWRlIHthcnJvdygnZ3JhZGUnKX08L3RoPlxuICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdjb2xvcicpfT5Db2xvciB7YXJyb3coJ2NvbG9yJyl9PC90aD5cbiAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnd2FsbCcpfT5XYWxsIHthcnJvdygnd2FsbCcpfTwvdGg+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ3NldHRlcicpfT5TZXR0ZXIge2Fycm93KCdzZXR0ZXInKX08L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2hpZGRlbi1zbS1kb3duJz5FZGl0PC90aD5cbiAgICAgICAgICA8dGg+e3Byb3BzLnNlbGVjdGVkPyA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUhhbmRsZXJ9PlJlbW92ZTwvYT4gOiAnU2VsZWN0J308L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICApXG59XG5cblJvdXRlSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgICBoYW5kbGVTb3J0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNvcnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRlbGV0ZUhhbmRsZXI6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZUhlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBSb3V0ZVJvdyBmcm9tICcuL3JvdXRlUm93J1xuaW1wb3J0IFJvdXRlSGVhZGVyIGZyb20gJy4vcm91dGVIZWFkZXInXG5cbmltcG9ydCBwaSBmcm9tICdydHV0aWwnXG5cbmNsYXNzIFJvdXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHJhbmdlOiBuZXcgU2V0KClcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByb3V0ZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgdGVhbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZ3ltOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICB1cGRhdGVSb3V0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHJlbW92ZVJvdXRlczogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm91dGVzOiBzb3J0T24oWy4uLnRoaXMucHJvcHMucm91dGVzXSwgJ3NldF9vbicpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0KSB7XG4gICAgICAgIGlmIChuZXh0LnJvdXRlcykge1xuICAgICAgICAgICAgbGV0IHJvdXRlcyA9IHNvcnRPbihuZXh0LnJvdXRlcywgdGhpcy5zdGF0ZS5zb3J0IHx8ICdzZXRfb24nKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcm91dGVzOiB0aGlzLnN0YXRlLmRpciA9PT0gJ2Rlc2MnID8gcm91dGVzLnJldmVyc2UoKSA6IHJvdXRlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLW1vYmlsZSB0YWJsZS1maXhlZCB0YWJsZV9fcm91dGVsaXN0Jz5cbiAgICAgICAgICAgICAgPFJvdXRlSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTb3J0PXsgdGhpcy5oYW5kbGVTb3J0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ9eyB0aGlzLnN0YXRlLnNvcnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyPXsgdGhpcy5zdGF0ZS5kaXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSGFuZGxlcj17IHRoaXMuZGVsZXRlSGFuZGxlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHRoaXMuc3RhdGUucmFuZ2Uuc2l6ZSA+IDAgfSAvPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUucm91dGVzLm1hcCgocm91dGUsIGluZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kPXsgaW5kIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyByb3V0ZS5faWQgKyByb3V0ZS51cGRhdGVkX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZT17IHJvdXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RIYW5kbGVyPXsgdGhpcy5zZWxlY3RIYW5kbGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHRoaXMuc3RhdGUucmFuZ2UuaGFzKGluZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW09eyB0aGlzLnByb3BzLnRlYW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvdXRlPXsgdGhpcy51cGRhdGVSb3V0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbHM9e3RoaXMucHJvcHMud2FsbHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzZWxlY3RIYW5kbGVyID0ge1xuICAgICAgICBtb3VzZURvd246IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgbGV0IG1vZGlmaWVyID0gZS5jdHJsS2V5IHx8IGUubWV0YUtleVxuICAgICAgICAgICAgbGV0IHNoaWZ0ID0gZS5zaGlmdEtleVxuICAgICAgICAgICAgbGV0IGluZCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuICAgICAgICAgICAgbGV0IHJhbmdlXG5cbiAgICAgICAgICAgIGlmIChtb2RpZmllciAmJiB0aGlzLmxhc3RTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGwgPSBNYXRoLm1pbih0aGlzLmxhc3RTZWxlY3RlZCwgaW5kKVxuICAgICAgICAgICAgICAgIGxldCBoID0gTWF0aC5tYXgodGhpcy5sYXN0U2VsZWN0ZWQsIGluZClcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBwaS5yYW5nZShsLCBoICsgMSlcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZCA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIHJhbmdlID0gbmV3IFNldChbLi4udGhpcy5zdGF0ZS5yYW5nZSwgLi4uc2VsZWN0ZWRdKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RpZmllciAmJiAhdGhpcy5sYXN0U2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZCA9IGluZFxuICAgICAgICAgICAgICAgIHJhbmdlID0gdGhpcy5zdGF0ZS5yYW5nZS5hZGQoaW5kKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlmdCAmJiB0aGlzLnN0YXRlLnJhbmdlLnNpemUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbCA9IE1hdGgubWluKC4uLnRoaXMuc3RhdGUucmFuZ2UpXG4gICAgICAgICAgICAgICAgbGV0IGggPSBNYXRoLm1heCguLi50aGlzLnN0YXRlLnJhbmdlKVxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGluZCA8PSBoID8gcGkucmFuZ2UoaW5kLCBoICsgMSkgOiBwaS5yYW5nZShsLCBpbmQgKyAxKVxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFNlbGVjdGVkID0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSBuZXcgU2V0KFsuLi50aGlzLnN0YXRlLnJhbmdlLCAuLi5zZWxlY3RlZF0pXG4gICAgICAgICAgICB9IGVsc2UgaWYoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDEwMDApe1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gbmV3IFNldCh0aGlzLnN0YXRlLnJhbmdlKVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmFuZ2UuaGFzKGluZCk/IHRlbXAuZGVsZXRlKGluZCkgOiB0ZW1wLmFkZChpbmQpXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSB0ZW1wICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWQgPSBpbmRcbiAgICAgICAgICAgICAgICByYW5nZSA9IHRoaXMuc3RhdGUucmFuZ2UuaGFzKGluZCkgJiYgdGhpcy5zdGF0ZS5yYW5nZS5zaXplID09PSAxID8gbmV3IFNldCgpIDogbmV3IFNldChbaW5kXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmFuZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgaW5kcyA9IFsuLi5uZXcgU2V0KHRoaXMuc3RhdGUucmFuZ2UpXVxuICAgICAgICBjb25zdCBpZHMgPSBpbmRzLm1hcChpbmQgPT4gdGhpcy5zdGF0ZS5yb3V0ZXNbaW5kXS5faWQpXG5cbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVSb3V0ZXMoaWRzKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJhbmdlOiBuZXcgU2V0KClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTb3J0ID0gKHBhcmFtKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Um91dGVzID0gWy4uLnRoaXMuc3RhdGUucm91dGVzXSxcbiAgICAgICAgICAgICAgICBkaXJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnQgPT09IHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgbmV3Um91dGVzLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgIGRpciA9IHRoaXMuc3RhdGUuZGlyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvcnRPbihuZXdSb3V0ZXMsIHBhcmFtKVxuICAgICAgICAgICAgICAgIGRpciA9ICdhc2MnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRpcixcbiAgICAgICAgICAgICAgICBzb3J0OiBwYXJhbSxcbiAgICAgICAgICAgICAgICByb3V0ZXM6IG5ld1JvdXRlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJvdXRlID0gKG5ld1JvdXRlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm91dGVzOiB0aGlzLnN0YXRlLnJvdXRlcy5tYXAocm91dGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZS5faWQgPT09IG5ld1JvdXRlLl9pZCA/IG5ld1JvdXRlIDogcm91dGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUm91dGUobmV3Um91dGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzb3J0T24oYXJyLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09ICdncmFkZScpIHtcbiAgICAgICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBhW3Byb3BdIC0gYltwcm9wXSlcbiAgICB9XG5cbiAgICBpZiAocHJvcCA9PT0gJ3NldF9vbicpIHtcbiAgICAgICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBEYXRlLnBhcnNlKGEuc2V0X29uKSAtIERhdGUucGFyc2UoYi5zZXRfb24pKVxuICAgIH1cbiAgICByZXR1cm4gYXJyLnNvcnQoXG4gICAgICAgIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhW3Byb3BdIDwgYltwcm9wXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhW3Byb3BdID4gYltwcm9wXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVMaXN0LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgUnRTd2F0Y2gsIEZsZXhSb3csIEljb24gfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuaW1wb3J0IHtkYXRlTWF0aH0gZnJvbSAncnR1dGlsJ1xuaW1wb3J0IHtkaXNzb2MsIG9taXR9IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBUZElucHV0ID0gKHByb3BzKSA9PiA8dGQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PjxpbnB1dCB7Li4uZGlzc29jKCdjbGFzc05hbWUnLCBwcm9wcyl9IGNsYXNzTmFtZT1cImlucHV0LXNtIGZvcm0tY29udHJvbFwiLz48L3RkPlxuXG5jb25zdCBUZFNlbGVjdCA9IChwcm9wcykgPT4gKFxuICA8dGQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiaW5wdXQtc20gZm9ybS1jb250cm9sXCIgey4uLm9taXQoWydjbGFzc05hbWUnLCAnY2hpbGRyZW4nXSwgcHJvcHMpfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvc2VsZWN0PlxuICA8L3RkPlxuKVxuXG5cbmNsYXNzIFJvdXRlUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZWRpdDogZmFsc2VcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpbmQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBzZWxlY3RIYW5kbGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHRlYW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHVwZGF0ZVJvdXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgd2FsbHM6IFByb3BUeXBlcy5hcnJheVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZWRpdCA/IChcbiAgICAgIDx0ciBjbGFzc05hbWU9eyd0YWJsZS1jZW50ZXIgJyArICh0aGlzLnByb3BzLnNlbGVjdGVkID8gJ3JvdXRlLXJvd19fc2VsZWN0ZWQnIDogJycpfT5cbiAgICAgICAgPFRkSW5wdXRcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJneW0tcm93X19kYXRlXCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInNldF9vblwiXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZpZWxkfVxuICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25ldyBEYXRlKHRoaXMucHJvcHMucm91dGUuc2V0X29uKS50b0xvY2FsZURhdGVTdHJpbmcoKX0gLz5cbiAgICAgICAgPFRkSW5wdXRcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBuYW1lPVwiZ3JhZGVcIlxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnJvdXRlLmdyYWRlfSAvPlxuICAgICAgICA8VGRJbnB1dFxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZpZWxkfVxuICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucm91dGUuY29sb3J9IC8+XG4gICAgICAgIDxUZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndhbGxcIlxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnVwZGF0ZUZpZWxkfVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnJvdXRlLndhbGx9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLndhbGxzLm1hcCh3YWxsID0+IFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3dhbGx9IHZhbHVlPXt3YWxsfT5cbiAgICAgICAgICAgICAgICAgICAge3dhbGx9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RkU2VsZWN0PlxuICAgICAgICA8VGRTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnVwZGF0ZUZpZWxkfVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnJvdXRlLnNldHRlcn0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50ZWFtLm1lbWJlcnMubWFwKHNldHRlciA9PiAoXG4gICAgICAgICAgICAgICA8b3B0aW9uIGtleT17c2V0dGVyLl9pZH0gdmFsdWU9e3NldHRlci5uaWNrbmFtZX0+XG4gICAgICAgICAgICAgICAgIHtzZXR0ZXIubmlja25hbWV9XG4gICAgICAgICAgICAgICA8L29wdGlvbj4pKX1cbiAgICAgICAgPC9UZFNlbGVjdD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImd5bS1yb3dfX2VkaXQgaGlkZGVuLXNtLWRvd25cIj5cbiAgICAgICAgICA8RmxleFJvdyBpbmxpbmUgYXJvdW5kIHN0eWxlPXt7IHdpZHRoOiAnODAlJyB9fT5cbiAgICAgICAgICAgIDxJY29uIG9uQ2xpY2s9e3RoaXMuY2FuY2VsRWRpdH0gaWNvbj1cInhcIiAvPlxuICAgICAgICAgICAgPEljb24gb25DbGljaz17dGhpcy50b2dnbGVFZGl0fSBpY29uPVwiY2hlY2tcIiAvPlxuICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJoaWRkZW4tc21cIlxuICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5zZWxlY3RIYW5kbGVyLm1vdXNlRG93bn1cbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgZGF0YS1pbmRleD17dGhpcy5wcm9wcy5pbmR9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgKSA6IChcbiAgICAgIDx0ciBjbGFzc05hbWU9eyd0YWJsZS1jZW50ZXIgJyArICh0aGlzLnByb3BzLnNlbGVjdGVkID8gJ3JvdXRlLXJvd19fc2VsZWN0ZWQnIDogJycpfSBvbkRvdWJsZUNsaWNrPXt0aGlzLnRvZ2dsZUVkaXR9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ3ltLXJvd19fZGF0ZVwiIGFsdD17JyAoJyArIGRhdGVNYXRoLndlZWtzT2xkKHRoaXMucHJvcHMucm91dGUuc2V0X29uKSArICcgd2Vla3Mgb2xkKSd9PlxuICAgICAgICAgIHtuZXcgRGF0ZSh0aGlzLnByb3BzLnJvdXRlLnNldF9vbikudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yb3V0ZS5ncmFkZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHs8UnRTd2F0Y2ggY2xhc3NOYW1lPVwibGlzdF9fc3dhdGNoXCIgY29sb3I9e3RoaXMucHJvcHMucm91dGUuY29sb3J9IC8+fVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge3RoaXMucHJvcHMucm91dGUud2FsbH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJvdXRlLnNldHRlcn1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT0naGlkZGVuLXNtLWRvd24nPlxuICAgICAgICAgIDxJY29uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdH0gaWNvbj1cInBlbmNpbFwiIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJoaWRkZW4tc21cIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHJvcHMuc2VsZWN0SGFuZGxlci5tb3VzZURvd259XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgIGRhdGEtaW5kZXg9e3RoaXMucHJvcHMuaW5kfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjYW5jZWxFZGl0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVkaXQ6ICF0aGlzLnN0YXRlLmVkaXRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVFZGl0ID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lZGl0KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVJvdXRlKHRoaXMucm91dGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5yb3V0ZSlcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0OiAhdGhpcy5zdGF0ZS5lZGl0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVsZXRlUm91dGUgPSAoKSA9PiB7XG4gICAgfVxuXG4gICAgdXBkYXRlRmllbGQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGZpZWxkID0gZXZlbnQudGFyZ2V0Lm5hbWVcbiAgICAgICAgdGhpcy5yb3V0ZVtmaWVsZF0gPSBldmVudC50YXJnZXQudmFsdWVcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZVJvd1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVSb3cuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUnRQYW5lIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmNsYXNzIFN0YXRzQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGF0YTogdGhpcy5tYWtlT3ZlcnZpZXcodGhpcy5wcm9wcy5kYXRhKVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZSkgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSdFBhbmU+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJ0LXBhbmVfX2hlYWRlclwiPk92ZXJ2aWV3PC9zcGFuPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ291bnQ6XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuZGF0YS5jb3VudCB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJvdXRlcyBOZWVkZWQ6XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBOL0FcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgT2xkZXN0IFJvdXRlOlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmRhdGEub2xkZXN0IH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvUnRQYW5lPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbWFrZU92ZXJ2aWV3KGRhdGEpIHtcbiAgICAgICAgbGV0IG1pbiA9IEluZmluaXR5XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgICAgICAgIGlmIChtaW4gPiBEYXRlLnBhcnNlKHJvdXRlLnNldF9vbikpXG4gICAgICAgICAgICAgICAgbWluID0gcm91dGUuc2V0X29uXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb3VudDogZGF0YS5sZW5ndGgsXG4gICAgICAgICAgICBvbGRlc3Q6IG5ldyBEYXRlKG1pbikudG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuU3RhdHNDYXJkLnByb3BUeXBlcyA9IHtcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTdGF0c0NhcmRcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9zdGF0c0NhcmQuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5cbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFJ0QmlnQmFyIGZyb20gJ2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0JhcidcbmltcG9ydCB7IExvYWRDb250YWluZXIsIExvYWRCYXIsIFJ0Q2FyZCwgVGFiU3dpdGNoZXIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCBTdGF0c0NhcmQgZnJvbSAnLi9jb21wb25lbnRzL3N0YXRzQ2FyZCdcbmltcG9ydCBSb3V0ZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlTGlzdCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIGZyb20gJ3JlYWN0LWNzcy10cmFuc2l0aW9uLXJlcGxhY2UnXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdyZWFjdHN0cmFwJ1xuXG5pbXBvcnQgeyBnZXRUZWFtIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3RlYW0nXG5pbXBvcnQgeyBnZXRSb3V0ZXNCeUd5bSwgcHV0Um91dGUsIHJlbW92ZVJvdXRlcyB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IHBpIGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgR3ltT3ZlcnZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBhY3RpdmU6ICdyb3BlJ1xuICAgIH1cblxuICAgIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdHlwZXM6IFtdXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZ3ltOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBtYXRjaDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgdGVhbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgcm91dGVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIGdldFRlYW06IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBnZXRSb3V0ZXM6IFByb3BUeXBlcy5mdW5jXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0RGF0YUZvckd5bSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5uYW1lKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmd5bSAmJiBuZXh0UHJvcHMuZ3ltICYmIHRoaXMucHJvcHMuZ3ltLm5hbWUgIT09IG5leHRQcm9wcy5neW0ubmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5nZXREYXRhRm9yR3ltKG5leHRQcm9wcy5neW0udXJsKSwgMzAwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5yb3V0ZXMgJiYgdGhpcy5wcm9wcy5neW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNvdW50OiB0aGlzLnVwZGF0ZVJvdXRlcyhuZXh0UHJvcHMucm91dGVzKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSb3V0ZXMgPSAobmV3Um91dGVzLCB0eXBlKSA9PiB7XG4gICAgICAgIHR5cGUgPSB0eXBlPyB0eXBlLnRvTG93ZXJDYXNlKCkgOiB0aGlzLnByb3BzLmd5bS50eXBlWzBdXG4gICAgICAgIGxldCBncmFkZXMgPSB0aGlzLnByb3BzLnRlYW0uZ3JhZGVzW3R5cGVdXG4gICAgICAgIGxldCByb3V0ZXMgPSBuZXdSb3V0ZXMuZmlsdGVyKHJvdXRlID0+IHJvdXRlLnR5cGUgPT09IHR5cGUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm91dGVzOiByb3V0ZXNcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVJvdXRlcyhyb3V0ZXMsIGdyYWRlcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSByZXR1cm4gPFJlZGlyZWN0IHRvPScvJyAvPlxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuZ3ltKSByZXR1cm4gKDxSdENhcmQgc3R5bGU9e3sgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KScgfX0+IDxMb2FkQmFyLz48L1J0Q2FyZD4pXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UnRDYXJkIHRpdGxlPXt0aGlzLnN0YXRlLmxvYWRlZD8gdGhpcy5wcm9wcy5neW0ubmFtZSA6ICcnfSBrZXk9e3RoaXMucHJvcHMuZ3ltLm5hbWV9IHN0eWxlPXt7IG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAxMDBweCknIH19PlxuICAgICAgICAgICAgICA8TG9hZENvbnRhaW5lciBsb2FkZWQ9e3RoaXMuc3RhdGUubG9hZGVkfT5cbiAgICAgICAgICAgICAgICA8TG9hZEJhci8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLXN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYlN3aXRjaGVyIHRhYnM9e3RoaXMucHJvcHMuZ3ltLnR5cGV9IHRvZ2dsZT17dGhpcy50b2dnbGV9IGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwZXJhdG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiOFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxSdEJpZ0JhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmNvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3RoaXMuc3RhdGUuYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17dGhpcy5wcm9wcy5neW0uY29sb3J9PjwvUnRCaWdCYXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjRcIiBjbGFzc05hbWU9XCJjb2wtbnAgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YXRzQ2FyZCBkYXRhPXt0aGlzLnN0YXRlLnJvdXRlc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBlcmF0b3JcIiAvPlxuICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZSB0cmFuc2l0aW9uTmFtZT1cImxvYWRfY29udGFpbmVyXCIgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXs1MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMuc3RhdGUuYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXM9e3RoaXMuc3RhdGUucm91dGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSb3V0ZT17dGhpcy5wcm9wcy51cGRhdGVSb3V0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUm91dGVzPXt0aGlzLnByb3BzLnJlbW92ZVJvdXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbT17dGhpcy5wcm9wcy50ZWFtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxscz17dGhpcy5wcm9wcy5neW0ud2FsbHNbdGhpcy5zdGF0ZS5hY3RpdmVdfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZT5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgIDwvTG9hZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvUnRDYXJkPlxuXG4gICAgICAgIClcbiAgICB9XG5cbiAgICB0b2dnbGUgPSAoa2V5KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0ga2V5KSByZXR1cm5cbiAgICAgICAgbGV0IHJvdXRlcyA9IHRoaXMudXBkYXRlUm91dGVzKHRoaXMucHJvcHMucm91dGVzLCBrZXkpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlOiBrZXksXG4gICAgICAgICAgICBjb3VudDogcm91dGVzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0RGF0YUZvckd5bShuYW1lKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VGVhbSgpXG4gICAgICAgICAgICAudGhlbih0ZWFtID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEd5bSA9IHRlYW0uZ3ltcy5maWx0ZXIoZ3ltID0+IG5hbWUgPT09IGd5bS51cmwpWzBdXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50R3ltKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRSb3V0ZXMoY3VycmVudEd5bS5faWQpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUsIG93blByb3BzKSB7XG4gICAgbGV0IGd5bSA9IHN0YXRlLmd5bXMuZmlsdGVyKGd5bSA9PiBneW0udXJsID09PSBvd25Qcm9wcy5tYXRjaC5wYXJhbXMubmFtZSlbMF1cbiAgICBsZXQgcm91dGVzID0gc3RhdGUucm91dGVzLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5neW0gPT09IGd5bS5faWQpXG4gICAgbGV0IGFyciA9IHJvdXRlcy50b0FycmF5KClcbiAgICBhcnIuZm9yRWFjaCgocm91dGUsIGluZCkgPT4gcm91dGUuaW5kID0gaW5kKVxuICAgIHJldHVybiB7XG4gICAgICAgIGd5bTogZ3ltLFxuICAgICAgICByb3V0ZXM6IGFycixcbiAgICAgICAgdGVhbTogc3RhdGUudGVhbVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUZWFtOiAoKSA9PiBkaXNwYXRjaChnZXRUZWFtKCkpLFxuICAgICAgICBnZXRSb3V0ZXM6IChpZCkgPT4gZGlzcGF0Y2goZ2V0Um91dGVzQnlHeW0oaWQpKSxcbiAgICAgICAgdXBkYXRlUm91dGU6IChyb3V0ZSkgPT4gZGlzcGF0Y2gocHV0Um91dGUocm91dGUpKSxcbiAgICAgICAgcmVtb3ZlUm91dGVzOiAoYXJyKSA9PiBkaXNwYXRjaChyZW1vdmVSb3V0ZXMoYXJyKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShHeW1PdmVydmlldylcblxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGVzKHJvdXRlcywgZ3JhZGVzKSB7XG4gICAgaWYgKCFncmFkZXMgfHwgIXJvdXRlcykgcmV0dXJuIFtdXG4gICAgbGV0IHNvcnRlZCA9IHBpLmJ1Y2tldHMocm91dGVzLm1hcChyb3V0ZSA9PiByb3V0ZS5ncmFkZSksIHBpLnJhbmdlKGdyYWRlcy5sZW5ndGgpKVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JhZGU6IGdyYWRlc1trZXldICYmIGdyYWRlc1trZXldLnZhbHVlLFxuICAgICAgICAgICAgY291bnQ6IHNvcnRlZFtrZXldXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldFRlYW0gfSBmcm9tICdkYXRhL2FjdGlvbnMvdGVhbSdcbmltcG9ydCB7IGdldEd5bXMgfSBmcm9tICdkYXRhL2FjdGlvbnMvZ3ltJ1xuXG5pbXBvcnQgUnRIZWFkZXIgZnJvbSAnLi9ydEhlYWRlcidcbmltcG9ydCBSdENvbnRlbnQgZnJvbSAnLi9ydENvbnRlbnQnXG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkgeyBcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRUZWFtKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJ0SGVhZGVyIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufS8+XG4gICAgICAgICAgICAgICAgPFJ0Q29udGVudCBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuTWFpbi5wcm9wVHlwZXMgPSB7XG4gICAgZ2V0VGVhbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBnZXRHeW1zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGVhbTogc3RhdGUudGVhbSxcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltcyxcbiAgICAgICAgbG9jYXRpb246IHN0YXRlLnJvdXRlci5sb2NhdGlvblxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUZWFtOiAoKSA9PiBkaXNwYXRjaChnZXRUZWFtKCkpLFxuICAgICAgICBnZXRHeW1zOiAodGVhbSkgPT4gZGlzcGF0Y2goZ2V0R3ltcyh0ZWFtKSlcbiAgICB9XG59XG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoTWFpbilcbmV4cG9ydCBkZWZhdWx0IG1haW5Db250YWluZXJcblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBHeW1MaXN0IGZyb20gJ2NvbXBvbmVudHMvZ3ltTGlzdCdcbmltcG9ydCBHeW1PdmVydmlldyBmcm9tICdjb21wb25lbnRzL2d5bU92ZXJ2aWV3J1xuaW1wb3J0IEFjY291bnQgZnJvbSAnY29tcG9uZW50cy9hY2NvdW50J1xuXG5pbXBvcnQgUnRXaXphcmRDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9ydFdpemFyZCdcblxuY2xhc3MgUnRDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPFN3aXRjaCBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17R3ltTGlzdH0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2d5bXMvOm5hbWUnIGNvbXBvbmVudD17R3ltT3ZlcnZpZXd9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hZGQnIGNvbXBvbmVudD17UnRXaXphcmRDb250YWluZXJ9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hY2NvdW50JyBjb21wb25lbnQ9e0FjY291bnR9IC8+XG4gICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRDb250ZW50XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL3J0Q29udGVudC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb2xsYXBzZSwgTmF2YmFyLCBOYXZiYXJUb2dnbGVyLCBOYXZiYXJCcmFuZCwgTmF2LCBOYXZEcm9wZG93biwgRHJvcGRvd25JdGVtLCBEcm9wZG93blRvZ2dsZSwgRHJvcGRvd25NZW51LCBOYXZMaW5rIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItYm9vdHN0cmFwJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtzdGF0ZVRvZ2dsZX0gZnJvbSAnZGF0YS91dGlsJ1xuaW1wb3J0IHtOYXZMaW5rIGFzIE5hdlJvdXRlckxpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNsYXNzIFJ0SGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgZHJvcGRvd25Jc09wZW46IGZhbHNlXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgPE5hdmJhciB0b2dnbGVhYmxlIGNvbG9yPVwicHJpbWFyeVwiIGludmVyc2U+XG4gICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvXCI+XG4gICAgICAgICAgICA8TmF2YmFyQnJhbmQ+XG4gICAgICAgICAgICAgIFJvdXRldHJhY2tlclxuICAgICAgICAgICAgPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPE5hdmJhclRvZ2dsZXIgcmlnaHQgb25DbGljaz17dGhpcy50b2dnbGV9Lz5cbiAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXsgdGhpcy5zdGF0ZS5pc09wZW4gfSBuYXZiYXI+XG4gICAgICAgICAgICA8TmF2IG5hdmJhcj5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiR3ltc1wiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCIgdG9nZ2xlPXt0aGlzLnRvZ2dsZURyb3Bkb3dufSBpc09wZW49e3RoaXMuc3RhdGUuZHJvcGRvd25Jc09wZW59PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBuYXY+XG4gICAgICAgICAgICAgICAgICBHeW1zXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IG9uQ2xpY2s9e3RoaXMudG9nZ2xlRHJvcGRvd259PlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmd5bXMgPyB0aGlzLnByb3BzLmd5bXMubWFwKGd5bSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxOYXZSb3V0ZXJMaW5rIGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbScga2V5PXsgZ3ltLl9pZCB9IHRvPXsgJy9neW1zLycgKyBneW0udXJsIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZ3ltLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Um91dGVyTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKSkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlci8+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICBTZXBhcmF0ZWQgbGlua1xuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9hZGRcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbms+XG4gICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8TmF2IG5hdmJhciBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2FjY291bnRcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbms+XG4gICAgICAgICAgICAgICAgTXkgQWNjb3VudFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8L05hdmJhcj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZVRvZ2dsZSgnaXNPcGVuJykpXG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVUb2dnbGUoJ2Ryb3Bkb3duSXNPcGVuJykpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGd5bXM6IHN0YXRlLmd5bXNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUpKFJ0SGVhZGVyKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9ydEhlYWRlci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuY2xhc3MgUnRTdGFjayBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIG1ha2VDaGFydC5hcHBseSh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnfX0gcmVmPXsgKGVsKSA9PiB0aGlzLmVsID0gZWwgfT48L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIFxufVxuXG5mdW5jdGlvbiBtYWtlQ2hhcnQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRhdGEpIHJldHVyblxuICAgIFxuICAgIGNvbnN0IHsgZGF0YSwgd2lkdGgsIGhlaWdodCA9ICcxMDAnfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRvdGFsID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIudmFsdWUsIDApXG5cbiAgICBjb25zdCBjaGFydCA9IGQzXG4gICAgICAgIC5zZWxlY3QodGhpcy5lbClcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAwIDEwMCAxMDAnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcblxuICAgIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIHRvdGFsXSlcbiAgICAgICAgLnJhbmdlKFswLCAxMDBdKVxuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBjaGFydC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyB4KGQpICsgJywgMCknXG4gICAgICAgIH0pXG4gICAgXG4gICAgc2VnbWVudHMuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKGQpID0+IHgoZC52YWx1ZSkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgIC5hdHRyKCd4JywgKGQpID0+IHgoZC52YWx1ZSkpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcblxufVxuXG5leHBvcnQgZGVmYXVsdCBSdFN0YWNrXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9SdFN0YWNrLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHtwYWxhdHRlfSBmcm9tICdydGNvbmZpZydcblxuY2xhc3MgUnRCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBtYWtlQ2hhcnQuYXBwbHkodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj17IChlbCkgPT4gdGhpcy5lbCA9IGVsIH0+PC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0QmFyXG5cbmZ1bmN0aW9uIG1ha2VDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGF0YSkgcmV0dXJuXG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB3aWR0aCA9IDk0XG4gICAgY29uc3QgaGVpZ2h0ID0gOTRcbiAgICBjb25zdCBiYXJXaWR0aCA9IHdpZHRoIC8gZGF0YS5sZW5ndGhcblxuICAgIGNvbnN0IHkgPSBkM1xuICAgICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFtcbiAgICAgICAgICAgIDAsIGQzLm1heChkYXRhKVxuICAgICAgICBdKVxuICAgICAgICAucmFuZ2UoWzAsIGhlaWdodF0pXG5cbiAgICBjb25zdCBjb2xvciA9IHBhbGF0dGVbdGhpcy5wcm9wcy5jb2xvcl0gfHwge3ByaW1hcnk6ICdibGFjaycsIHNlY29uZGFyeTogJ2JsYWNrJ31cblxuXG4gICAgY29uc3QgY29sb3JTY2FsZSA9IHRoaXMucHJvcHMuY29sb3IgP1xuICAgICAgICBkMy5zY2FsZUxpbmVhcihkMy5pbnRlcnBvbGF0ZUhjbClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcbiAgICAgICAgICAgIC5yYW5nZShbY29sb3IucHJpbWFyeSwgY29sb3Iuc2Vjb25kYXJ5XSkgOlxuICAgICAgICBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXG4gICAgY29uc3QgY2hhcnQgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMuZWwpXG4gICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJy0zIC0zIDEwMCAxMDAnKVxuICAgICAgICAuYXR0cigncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pbiBtZWV0JylcbiAgICAgICAgLmNsYXNzZWQoJ3cxMDAnLCB0cnVlKVxuXG4gICAgY29uc3QgYmFyID0gY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGkgKiBiYXJXaWR0aCArICcsIDApJ1xuICAgICAgICB9KVxuXG4gICAgYmFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5jbGFzc2VkKCdydC1iYXInLCB0cnVlKVxuICAgICAgICAuYXR0cignd2lkdGgnLCBiYXJXaWR0aCAtIDEpXG4gICAgICAgIC5hdHRyKCdyeCcsIDEpXG4gICAgICAgIC5hdHRyKCdyeScsIDEpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIChkKSA9PiArZFxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IDAuNClcbiAgICAgICAgLmF0dHIoJ3knLCBoZWlnaHQpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoaSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZGVsYXkoKCkgPT4gNDAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmVhc2UoZDMuZWFzZUV4cEluKVxuICAgICAgICAuYXR0cigneScsIChkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0IC0geShkKVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IHkoZCkpXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgZDN0aXAgZnJvbSAnZDMtdGlwJ1xuaW1wb3J0IHtwYWxhdHRlfSBmcm9tICdydGNvbmZpZydcbmQzLnRpcCA9IGQzdGlwXG5cbmNsYXNzIFJ0QmlnQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIGdvYWw6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jaGFydCA9IGQzLnNlbGVjdCh0aGlzLmVsKVxuICAgICAgICB0aGlzLm1ha2VDaGFydCgpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy50eXBlICE9PSB0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKClcbiAgICAgICAgICAgIHRoaXMubWFrZUNoYXJ0KG5leHRQcm9wcy5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0UHJvcHMuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDaGFydChuZXh0UHJvcHMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFByb3BzLmNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiLTUgLTUgNTAwIDMwMFwiXG4gICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWluIG1lZXRcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIncxMDAgY2hhcnRcIlxuICAgICAgICAgICAgICAgICAgIHJlZj17IChlbCkgPT4gdGhpcy5lbCA9IGVsIH0+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFydCA9IChkYXRhKSA9PiB7XG4gICAgICAgIHZhciBzdmcgPSBkMy5zZWxlY3QodGhpcy5lbClcblxuICAgICAgICAvLyBjYWxjdWxhdGUgbmV3IGhlaWdodFxuICAgICAgICB0aGlzLnkgPSBkM1xuICAgICAgICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oW1xuICAgICAgICAgICAgICAgIDAsIGQzLm1heChkYXRhLCAoZCkgPT4gZC5jb3VudClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHRoaXMuaGVpZ2h0XSlcblxuICAgICAgICAvLyBNYWtlIHRoZSBjaGFuZ2VzXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJy5ydC1iYXInKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKCkgLy8gY2hhbmdlIHRoZSBsaW5lXG4gICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAtIHRoaXMueShkLmNvdW50KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4gdGhpcy55KGQuY291bnQpICsgNilcblxuICAgICAgICBzdmcuc2VsZWN0QWxsKCcucnQtbWFya2VyJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZ3JhZGUpXG4gICAgfVxuXG4gICAgbWFrZUNoYXJ0ID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRhdGEpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgZGF0YSA9IGRhdGEgfHwgdGhpcy5wcm9wcy5kYXRhXG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDQ5MFxuICAgICAgICB0aGlzLmhlaWdodCA9IDI4NVxuXG4gICAgICAgIGNvbnN0IGNvbG9yID0gcGFsYXR0ZVt0aGlzLnByb3BzLmNvbG9yXSB8fCB7cHJpbWFyeTogJ2JsYWNrJywgc2Vjb25kYXJ5OiAnYmxhY2snfVxuXG5cbiAgICAgICAgY29uc3QgY29sb3JTY2FsZSA9IHRoaXMucHJvcHMuY29sb3IgP1xuICAgICAgICBkMy5zY2FsZUxpbmVhcihkMy5pbnRlcnBvbGF0ZUhjbClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcbiAgICAgICAgICAgIC5yYW5nZShbY29sb3IucHJpbWFyeSwgY29sb3Iuc2Vjb25kYXJ5XSkgOlxuICAgICAgICAgICAgZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdylcbiAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cblxuICAgICAgICBjb25zdCBiYXJXaWR0aCA9IHRoaXMud2lkdGggLyBkYXRhLmxlbmd0aFxuXG5cbiAgICAgICAgdGhpcy55ID0gZDNcbiAgICAgICAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFtcbiAgICAgICAgICAgICAgICAwLCBkMy5tYXgoZGF0YSwgKGQpID0+IGQuY291bnQpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB0aGlzLmhlaWdodF0pXG5cbiAgICAgICAgY29uc3QgZm9udFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMzIwLCA1MDBdKSAvLyBleHBlY3RlZCBsaW1pdHMgb2YgU1ZHIHdpZHRoXG4gICAgICAgICAgICAucmFuZ2UoWzMwLCAxNV0pXG4gICAgICAgICAgICAuY2xhbXAodHJ1ZSlcblxuICAgICAgICBjb25zdCBiYXIgPSB0aGlzLmNoYXJ0XG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYmFyLWdyb3VwJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGkgKiBiYXJXaWR0aCArICcsIDApJ1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB2YXIgdGlwID0gZDMudGlwKClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdkMy10aXAnKVxuICAgICAgICAgICAgLm9mZnNldChbLTEwLCAwXSlcbiAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxzdHJvbmc+JyArIGQuZ3JhZGUgKyAnOjwvc3Ryb25nPiA8c3BhbiBzdHlsZT1cXCdjb2xvcjojZmYwMDQ0XFwnPicgKyBkLmNvdW50ICsgJzwvc3Bhbj4nXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY2hhcnQuY2FsbCh0aXApXG5cbiAgICAgICAgYmFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgncnQtYmFyJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGJhcldpZHRoIC0gNSlcbiAgICAgICAgICAgIC5hdHRyKCdyeCcsIDMpXG4gICAgICAgICAgICAuYXR0cigncnknLCAzKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDYpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsIChkKSA9PiArZC5jb3VudCA/IDEgOiAwLjQpXG4gICAgICAgICAgICAuYXR0cigneScsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoaSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIHRpcC5zaG93KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIHRpcC5oaWRlKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmRlbGF5KCgpID0+IDQwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cEluKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAtIHRoaXMueShkLmNvdW50KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4gdGhpcy55KGQuY291bnQpICsgNilcblxuICAgICAgICBiYXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdydC1tYXJrZXInLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCBiYXJXaWR0aCAvIDIgKyAzKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAtMjgwKVxuICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5ncmFkZSlcbiAgICAgICAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnMTRweCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxuXG5cblxuXG4gICAgICAgIGNvbnN0IHJlc2l6ZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBmb250U2NhbGUodGhpcy5jaGFydC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpXG4gICAgICAgICAgICB2YXIgdGV4dCA9IGQzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICB0ZXh0LmF0dHIoJ2ZvbnQtc2l6ZScsIHNjYWxlICsgJ3B4JylcbiAgICAgICAgICAgIGlmIChzY2FsZSA+IDE4KSB7XG4gICAgICAgICAgICAgICAgdGV4dC5hdHRyKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGV4dC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2l6ZWQoKVxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSByZXNpemVkLmJpbmQodGhpcylcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRCaWdCYXJcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0Jhci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuY2xhc3MgUnRQaWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBtYWtlQ2hhcnQuYXBwbHkodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4J319IHJlZj17IChlbCkgPT4gdGhpcy5lbCA9IGVsIH0+PC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0UGllXG5cbmZ1bmN0aW9uIG1ha2VDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGF0YSlcbiAgICAgICAgcmV0dXJuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YVxuXG4gICAgY29uc3Qgd2lkdGggPSA5NFxuICAgIGNvbnN0IGhlaWdodCA9IDk0XG4gICAgY29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGRhdGEubGVuZ3RoXG5cbiAgICBjb25zdCBjaGFydCA9IGQzXG4gICAgICAgIC5zZWxlY3QodGhpcy5lbClcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnLTMgLTMgMTAwIDEwMCcpXG4gICAgICAgIC5hdHRyKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWluIG1lZXQnKVxuICAgICAgICAuY2xhc3NlZCgndzEwMCcsIHRydWUpXG5cblxuICAgIHZhciByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIsXG4gICAgICAgIGcgPSBjaGFydC5hcHBlbmQoJ2cnKS5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB3aWR0aCAvIDIgKyAnLCcgKyBoZWlnaHQgLyAyICsgJyknKVxuXG4gICAgdmFyIGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKFsnIzk4YWJjNScsICcjOGE4OWE2JywgJyM3YjY4ODgnLCAnIzZiNDg2YicsICcjYTA1ZDU2JywgJyNkMDc0M2MnLCAnI2ZmOGMwMCddKVxuXG4gICAgdmFyIHBpZSA9IGQzLnBpZSgpXG4gICAgLnNvcnQobnVsbClcbiAgICAudmFsdWUoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZFxuICAgIH0pXG4gICAgY29uc3QgcmFpbmJvdyA9IGQzXG4gICAgICAgIC5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuICAgICAgICAuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cbiAgICB2YXIgcGF0aCA9IGQzLmFyYygpXG4gICAgLm91dGVyUmFkaXVzKHJhZGl1cyAtIDEwKVxuICAgIC5pbm5lclJhZGl1cygzMClcblxuICAgIHZhciBob3ZlclBhdGggPSBkMy5hcmMoKVxuICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgLSA4KVxuICAgIC5pbm5lclJhZGl1cygzMClcblxuICAgIHZhciBsYWJlbCA9IGQzLmFyYygpXG4gICAgLm91dGVyUmFkaXVzKHJhZGl1cyAtIDQwKVxuICAgIC5pbm5lclJhZGl1cyhyYWRpdXMgLSA0MClcblxuXG4gICAgdmFyIGFyYyA9IGcuc2VsZWN0QWxsKCcuYXJjJylcbiAgICAuZGF0YShwaWUoZGF0YSkpXG4gICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAuYXR0cignY2xhc3MnLCAnYXJjJylcblxuICAgIGFyYy5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAuYXR0cignZmlsbCcsIGQgPT4gcmFpbmJvdyhkLmRhdGEpKVxuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgaG92ZXJQYXRoKVxuICAgIH0pXG4gICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICB9KVxuXG4gICAgYXJjLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGxhYmVsLmNlbnRyb2lkKGQpICsgJyknXG4gICAgfSlcbiAgICAuYXR0cignZHknLCAnMC4zNWVtJylcbiAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEuYWdlXG4gICAgfSlcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFd6Q29udGFpbmVyID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1iaWctY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtd2luZ1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1pbm5lclwiIHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkeyhwcm9wcy5zdGVwKSAqIC0xNi42fSUpYH19PlxuICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCBkaXYgY2xhc3NOYW1lPVwicmlnaHQtd2luZ1wiPiA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgV3pDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6Q29udGFpbmVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjb2xvciBmcm9tICdzZXJ2aWNlcy9jb2xvclNlcnZpY2UnXG5cbmNvbnN0IFd6SXRlbSA9IChwcm9wcykgPT4ge1xuICAgIGZ1bmN0aW9uIF9jbGljaygpIHtcbiAgICAgICAgcHJvcHMudXBkYXRlKHByb3BzLnR5cGUscHJvcHMuaXRlbSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e19jbGlja30gY2xhc3NOYW1lPXtzZXRDbGFzcyhwcm9wcyl9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5pdGVtLmNvbG9yPyBwcm9wcy5pdGVtLmNvbG9yIDogJ3doaXRlJywgY29sb3I6IHByb3BzLml0ZW0uY29sb3I/IGNvbG9yLnRleHRDb2xvcihwcm9wcy5pdGVtLmNvbG9yKSA6ICdpbmhlcml0J319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGdyaWQtbGFiZWxcIiBvbkNsaWNrPXtfY2xpY2t9Pntwcm9wcy5pdGVtLnZhbHVlfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcblxufVxuXG5Xekl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXRlbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKHByb3BzKSB7XG4gICAgcmV0dXJuICd3ei1kb3QgJyArIChwcm9wcy5zZWxlY3RlZD8gJ2l0ZW0tc2VsZWN0ZWQnIDogJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6SXRlbVxuICAgICAgICAgICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBXekxpc3RJdGVtID0gKHByb3BzKSA9PiB7XG4gICAgZnVuY3Rpb24gX2NsaWNrKCkge1xuICAgICAgICBwcm9wcy51cGRhdGUocHJvcHMudHlwZSwgcHJvcHMuaXRlbSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2V0Q2xhc3MocHJvcHMpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBsaXN0LWxhYmVsXCIgb25DbGljaz17X2NsaWNrfT57cHJvcHMuaXRlbS52YWx1ZSB8fCBwcm9wcy5pdGVtfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgICl9XG5cbmZ1bmN0aW9uIHNldENsYXNzKHByb3BzKSB7XG4gICAgcmV0dXJuICd3ei1saXN0LWl0ZW0gJyArIChwcm9wcy5zZWxlY3RlZD8gJ2l0ZW0tc2VsZWN0ZWQnIDogJycpXG59XG5cbld6TGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGl0ZW06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6TGlzdEl0ZW1cbiAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pMaXN0SXRlbS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNsYXNzIFd6UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5wcmV2LmJpbmQodGhpcylcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcDEwYiBoaWRkZW4teHMganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgb25DbGljaz17dGhpcy5wcmV2fT5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgb25DbGljaz17dGhpcy5uZXh0IH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXh0KDEpXG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcmV2KC0xKVxuICAgIH1cbn1cblxuV3pQYWdlLnByb3BUeXBlcyA9IHtcbiAgICBwcmV2OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXh0OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBXelBhZ2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6UGFnZS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge0ZsZXhSb3csIFJ0U3dhdGNofSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHBvc3RSb3V0ZSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IHtzbGVlcCwgcmVuZGVySWZ9IGZyb20gJ3J0dXRpbCdcblxuXG5jbGFzcyBXelByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge31cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1lZFJvdXRlID0gdHJhbnNmb3JtUm91dGUodGhpcy5wcm9wcy5yb3V0ZSlcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtZWRSb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy50cmFuc2Zvcm1lZFJvdXRlPyAoXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid3otbGlzdCBwMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBUeXBlOiB7dGhpcy5wcm9wcy5yb3V0ZS50eXBlfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIENvbG9yOiBcbiAgICAgICAgICAgICAgICAgICAgICA8UnRTd2F0Y2ggY29sb3I9eyB0aGlzLnByb3BzLnJvdXRlLmNvbG9yIHx8IGZhbHNlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBHcmFkZToge3RoaXMucHJvcHMucm91dGUuZ3JhZGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3ei1saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgR3ltOiB7dGhpcy5wcm9wcy5yb3V0ZS5neW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBXYWxsOiB7dGhpcy5wcm9wcy5yb3V0ZS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBUYWdzOiB7dGhpcy5wcm9wcy5yb3V0ZS50YWdzLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDxGbGV4Um93PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmVkaXR9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydidG4gYnRuLW91dGxpbmUtcHJpbWFyeScgKyByZW5kZXJJZih0aGlzLnN0YXRlLnBlbmRpbmcpKCcgYnRuLW91dGxpbmUtcGVuZGluZycpfSBvbkNsaWNrPXt0aGlzLnBvc3RSb3V0ZX0+QWRkIFJvdXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBwb3N0Um91dGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BlbmRpbmc6IHRydWV9KVxuICAgICAgICB0aGlzLnByb3BzLnBvc3RSb3V0ZSh0aGlzLnRyYW5zZm9ybWVkUm91dGUpXG4gICAgICAgICAgICAudGhlbihzbGVlcCgxMDAwKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZWRpdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5tb3ZlKC0xKVxuICAgIH1cbn1cblxuV3pQcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgICByb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBncmFkZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcmVzZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvc3RSb3V0ZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGUob2JqKSB7XG4gICAgaWYgKG9iai5neW0gJiYgb2JqLmdyYWRlICYmIG9iai5jb2xvciAmJiBvYmoudGFncyAmJiBvYmoubG9jYXRpb24pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBvYmoudHlwZSxcbiAgICAgICAgICAgIGNvbG9yOiBvYmouY29sb3IudmFsdWUsXG4gICAgICAgICAgICBncmFkZTogb2JqLmdyYWRlLl9pZCxcbiAgICAgICAgICAgIGd5bTogb2JqLmd5bS5faWQsXG4gICAgICAgICAgICB3YWxsOiBvYmoubG9jYXRpb24sXG4gICAgICAgICAgICB0YWdzOiBvYmoudGFncy5qb2luKCcsICcpLFxuICAgICAgICAgICAgc2V0X29uOiBEYXRlLm5vdygpXG4gICAgICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZTogc3RhdGUucm91dGUsXG4gICAgICAgIGdyYWRlczogc3RhdGUudGVhbS5ncmFkZXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdFJvdXRlOiAocm91dGUpID0+IGRpc3BhdGNoKHBvc3RSb3V0ZShyb3V0ZSkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoV3pQcmV2aWV3KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pQcmV2aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXelBhZ2UgZnJvbSAnLi93elBhZ2UnXG5pbXBvcnQge1J0Q2FyZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vJ1xuXG5jb25zdCBXelN0ZXAgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gcHJvcHMucmV2aWV3PyAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzXCI+PC9kaXY+XG4gICAgICA8UnRDYXJkIHRpdGxlPXtwcm9wcy5uYW1lfT57cHJvcHMuY2hpbGRyZW59PC9SdENhcmQ+XG4gICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaDMgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgIHsgcHJvcHMubmFtZSB9OjwvZGl2PlxuICAgICAgPFd6UGFnZSBuZXh0PXtwcm9wcy5uZXh0fSBwcmV2PXtwcm9wcy5wcmV2fS8+XG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbld6U3RlcC5wcm9wVHlwZXMgPSB7XG4gICAgcmV2aWV3OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBuZXh0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwcmV2OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBXelN0ZXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6U3RlcC5qc3giLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJ0V2l6YXJkIGZyb20gJy4vcnRXaXphcmQnXG5pbXBvcnQge3VwZGF0ZVJvdXRlLCB1cGRhdGVUYWdzLCByZXNldFdpemFyZH0gZnJvbSAnZGF0YS9hY3Rpb25zL3dpemFyZCdcbmltcG9ydCB7Z2V0VGVhbX0gZnJvbSAnZGF0YS9hY3Rpb25zL3RlYW0nXG5pbXBvcnQge2dldEd5bXN9IGZyb20gJ2RhdGEvYWN0aW9ucy9neW0nXG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlOiBzdGF0ZS5yb3V0ZSxcbiAgICAgICAgdGVhbTogc3RhdGUudGVhbSxcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGU6IChmaWVsZCwgdmFsdWUpID0+IGRpc3BhdGNoKHVwZGF0ZVJvdXRlKGZpZWxkLCB2YWx1ZSkpLFxuICAgICAgICB1cGRhdGVUYWdzOiAodmFsdWUpID0+IGRpc3BhdGNoKHVwZGF0ZVRhZ3ModmFsdWUpKSxcbiAgICAgICAgcmVzZXRGb3JtOiAoKSA9PiBkaXNwYXRjaChyZXNldFdpemFyZCgpKSxcbiAgICAgICAgZ2V0VGVhbTogKCkgPT4gZGlzcGF0Y2goZ2V0VGVhbSgpKSxcbiAgICAgICAgZ2V0R3ltczogKCkgPT4gZGlzcGF0Y2goZ2V0R3ltcygpKVxuICAgIH1cbn1cblxuY29uc3QgUnRXaXphcmRDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2gpKFJ0V2l6YXJkKVxuXG5leHBvcnQgZGVmYXVsdCBSdFdpemFyZENvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXekdyaWQgZnJvbSAnLi93ekdyaWQnXG5pbXBvcnQgV3pDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL3d6Q29udGFpbmVyJ1xuaW1wb3J0IFd6U3RlcCBmcm9tICcuL2NvbXBvbmVudHMvd3pTdGVwJ1xuaW1wb3J0IFd6UHJldmlldyBmcm9tICcuL2NvbXBvbmVudHMvd3pQcmV2aWV3J1xuaW1wb3J0IHtTd2lwZUNvbnRhaW5lcn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmNsYXNzIFJ0V2l6YXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RlcDogMCxcbiAgICAgICAgICAgIGd5bUZpbHRlcjogdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsaWNrcyA9IDBcbiAgICAgICAgdGhpcy5jbGlja2VkID0gJ2d5bSdcbiAgICAgICAgdGhpcy5zdGVwcyA9IFsnZ3ltJywgJ2NvbG9yJywgJ2dyYWRlJywgJ2xvY2F0aW9uJywgJ3RhZ3MnXVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMucmVzZXRGb3JtKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3dpcGVDb250YWluZXIgb25Td2lwZT17dGhpcy5vblN3aXBlfT5cbiAgICAgICAgICAgICAgICA8V3pDb250YWluZXIgc3RlcD17dGhpcy5zdGF0ZS5zdGVwfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RlcENvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3RlcCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXelN0ZXAga2V5PXtzdGVwLm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17c3RlcC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldj17dGhpcy5tb3ZlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ9e3RoaXMubW92ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZD17c3RlcC5lbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXc9e3N0ZXAucmV2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1d6U3RlcD4pXG4gICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgIDwvV3pDb250YWluZXI+XG4gICAgICAgICAgICA8L1N3aXBlQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgb25Td2lwZSA9IChkaXIpID0+IHtcbiAgICAgICAgaWYoIFxuICAgICAgICAgICAgLy8gbGFzdCBzdGVwXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS5zdGVwICE9PSA1ICYmIGRpciA8IDApIHx8ICEodGhpcy5zdGVwc1t0aGlzLnN0YXRlLnN0ZXBdIGluIHRoaXMucHJvcHMucm91dGUpKSByZXR1cm5cbiAgICAgICAgXG4gICAgICAgIGxldCB0b1N0ZXAgPSB0aGlzLnN0YXRlLnN0ZXAgKyAoZGlyID4gMD8gLTEgOiAxKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IHRvU3RlcH0pXG4gICAgfVxuXG4gICAgbW92ZSA9IChkaXIsIGZpZWxkKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZS5zdGVwXG4gICAgICAgIC8vIGNhbGxlZCBieSB1cGRhdGVcbiAgICAgICAgaWYoZmllbGQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtzdGVwOiBjdXJyZW50ICsgZGlyfSlcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UndmUgbWFkZSBpdCBwYXN0IHRoaXMgc3RlcCBhbHJlYWR5XG4gICAgICAgIGlmKGN1cnJlbnQgKyBkaXIgPCAwIHx8ICEodGhpcy5zdGVwc1t0aGlzLnN0YXRlLnN0ZXBdIGluIHRoaXMucHJvcHMucm91dGUpICYmIGRpciA+IDApIHJldHVyblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiBjdXJyZW50ICsgZGlyfSlcbiAgICB9XG5cbiAgICB1cGRhdGUgPSAoZmllbGQsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGhhbmRsZSBkb3VibGUgY2xpY2tcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tzID4gMCAmJiB0aGlzLnByb3BzLnJvdXRlW2ZpZWxkXSA9PT0gdmFsdWUpIHJldHVybiB0aGlzLm1vdmUoMSwgZmllbGQpXG5cbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGUoZmllbGQsIHZhbHVlKVxuICAgICAgICBsZXQgbmV4dCA9IHRoaXMuc3RhdGUuc3RlcCArIDFcblxuICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gaWYgd2UndmUgbWFudWFsbHkgZ29uZSBiYWNrd2FyZHMsIGRvbid0IG1vdmVcbiAgICAgICAgICAgICghdGhpcy5wcm9wcy5yb3V0ZVt0aGlzLnN0ZXBzW25leHRdXSAmJiBmaWVsZCAhPT0gJ3R5cGUnKVxuICAgICAgICAgICAgLy8gb3IgdGhlIG5leHQgc3RlcCBpcyBtdWx0aXBsZSBjaG9pY2VcbiAgICAgICAgICAgIHx8IHRoaXMuc3RlcHNbbmV4dF0gPT09ICd0YWdzJ1xuICAgICAgICApIHJldHVybiB0aGlzLm1vdmUoMSwgZmllbGQpXG5cbiAgICAgICAgLy8gc3RvcmUgY2xpY2sgZm9yIGRvdWJsZSBjbGlja1xuICAgICAgICB0aGlzLmNsaWNrcysrXG4gICAgICAgIHRoaXMuY2xpY2tlZCA9IGZpZWxkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbGlja3MtLSwgNTAwKVxuICAgIH1cblxuICAgIHVwZGF0ZVRhZ3MgPSAodGFncywgdGFnKSA9PiB7XG4gICAgICAgIGxldCB7dmFsdWV9ID0gdGFnXG4gICAgICAgIFxuICAgICAgICAvLyBoYW5kbGUgZG91YmxlIGNsaWNrXG4gICAgICAgIGlmICh0aGlzLmNsaWNrcyA+IDAgJiYgdGhpcy5wcm9wcy5yb3V0ZS50YWdzLmluZGV4T2YodmFsdWUpID49MCApIHJldHVybiB0aGlzLm1vdmUoMSwgdHJ1ZSlcblxuICAgICAgICAvLyBpZiB3ZSd2ZSBtYW51YWxseSBnb25lIGJhY2t3YXJkcywgZG9uJ3QgbW92ZVxuICAgICAgICAvLyBpZiAoIXRoaXMucHJvcHMucm91dGVbdGhpcy5zdGVwc1t0aGlzLnN0YXRlLnN0ZXAgKyAxXV0pIHJldHVybiB0aGlzLm1vdmUoMSwgZmllbGQpXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlVGFncyh2YWx1ZSlcblxuICAgICAgICAvLyBzdG9yZSBjbGljayBmb3IgZG91YmxlIGNsaWNrXG4gICAgICAgIHRoaXMuY2xpY2tzKytcbiAgICAgICAgdGhpcy5jbGlja2VkID0gdmFsdWVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsaWNrcy0tLCA1MDApXG4gICAgfVxuXG4gICAgZmlsdGVyR3ltcyhneW1zLCBmaWx0ZXIpIHtcbiAgICAgICAgaWYoIWZpbHRlcikgcmV0dXJuIFtdXG4gICAgICAgIHJldHVybiBneW1zLmZpbHRlcihneW0gPT4gZ3ltLndhbGxzW2ZpbHRlcl0ubGVuZ3RoKVxuICAgIH1cblxuICAgIHNldEZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoJ3R5cGUnLCBmaWx0ZXIpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2d5bUZpbHRlcjogZmlsdGVyfSlcbiAgICB9XG5cbiAgICByZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucmVzZXRGb3JtKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogMX0pXG4gICAgfVxuXG4gICAgc3RlcENvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2d5bScsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAnd3otbGlzdC1pdGVtICcgKyAodGhpcy5zdGF0ZS5neW1GaWx0ZXIgPT09ICdib3VsZGVyJyA/ICdpdGVtLXNlbGVjdGVkJyA6ICcnICl9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0RmlsdGVyKCdib3VsZGVyJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgbGlzdC1sYWJlbFwiPkJvdWxkZXJpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3d6LWxpc3QtaXRlbSAnICsgKHRoaXMuc3RhdGUuZ3ltRmlsdGVyID09PSAncm9wZScgPyAnaXRlbS1zZWxlY3RlZCcgOiAnJyApfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEZpbHRlcigncm9wZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGxpc3QtbGFiZWxcIj5Sb3BlczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMuZmlsdGVyR3ltcyh0aGlzLnByb3BzLmd5bXMsIHRoaXMuc3RhdGUuZ3ltRmlsdGVyKX0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnZ3ltJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0gbGlzdC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2xvcicsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnRlYW0uY29sb3JzfSByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gc2VsZWN0b3I9eydjb2xvcid9IHVwZGF0ZT17dGhpcy51cGRhdGV9Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2dyYWRlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMucm91dGUudHlwZT8gdGhpcy5wcm9wcy50ZWFtLmdyYWRlc1t0aGlzLnByb3BzLnJvdXRlLnR5cGVdIDogdGhpcy5wcm9wcy50ZWFtLmdyYWRlcy5ib3VsZGVyfSByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gc2VsZWN0b3I9eydncmFkZSd9IHVwZGF0ZT17dGhpcy51cGRhdGV9Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMucm91dGUuZ3ltICYmIHRoaXMucHJvcHMucm91dGUuZ3ltLndhbGxzW3RoaXMuc3RhdGUuZ3ltRmlsdGVyXSB8fCBbXX0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnbG9jYXRpb24nfSB1cGRhdGU9e3RoaXMudXBkYXRlfSBsaXN0Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RhZ3MnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5wcm9wcy50ZWFtLnRhZ3N9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J3RhZ3MnfSB1cGRhdGU9e3RoaXMudXBkYXRlVGFnc30gbGlzdC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXZpZXc6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pQcmV2aWV3IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBtb3ZlPXt0aGlzLm1vdmV9IHJlc2V0PXt0aGlzLnJlc2V0Rm9ybX0vPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbn1cblxuUnRXaXphcmQucHJvcFR5cGVzID0ge1xuICAgIHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGd5bXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRlYW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcmVzZXRGb3JtOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBSdFdpemFyZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXekxpc3RJdGVtIGZyb20gJy4vY29tcG9uZW50cy93ekxpc3RJdGVtJ1xuaW1wb3J0IFd6SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvd3pJdGVtJ1xuXG5jb25zdCBXekdyaWQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBFbCA9IHByb3BzLmxpc3QgPyBXekxpc3RJdGVtIDogV3pJdGVtXG5cbiAgICBjb25zdCBpc1NlbGVjdGVkID0gKGl0ZW0pID0+IHtcbiAgICAgICAgaWYocHJvcHMuc2VsZWN0b3IgPT09ICd0YWdzJykgcmV0dXJuIHByb3BzLnJvdXRlLnRhZ3MuaW5kZXhPZihpdGVtLnZhbHVlKSA+IC0xXG4gICAgICAgIHJldHVybiAgcHJvcHMucm91dGVbcHJvcHMuc2VsZWN0b3JdID09PSBpdGVtIFxuICAgIH1cblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ3ei1ncmlkXCI+XG4gICAgICAgICAgICAgIHsgcHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RWwga2V5PXsgaXRlbS5faWQgfHwgaXRlbX0gaXRlbT17IGl0ZW0gfSB0eXBlPXsgcHJvcHMuc2VsZWN0b3IgfSB1cGRhdGU9eyBwcm9wcy51cGRhdGUgfSBzZWxlY3RlZD17aXNTZWxlY3RlZChpdGVtKX0gLz5cbiAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5XekdyaWQucHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbGlzdDogUHJvcFR5cGVzLm9uZU9mKFt1bmRlZmluZWQsIHRydWVdKSxcbiAgICB0YWdzOiBQcm9wVHlwZXMub25lT2YoW3VuZGVmaW5lZCwgdHJ1ZV0pLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6R3JpZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3d6R3JpZC5qc3giLCJleHBvcnQgZnVuY3Rpb24gcmVjZWl2ZUd5bXMoZ3ltcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdSRUNFSVZFX0dZTVMnLFxuICAgICAgICBwYXlsb2FkOiBneW1zXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3ltcyh0ZWFtKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+e1xuICAgICAgICByZXR1cm4gZmV0Y2hlci5nZXQoJ2d5bXMvdGVhbS8nK3RlYW0uX2lkKS50aGVuKGd5bXMgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUd5bXMoZ3ltcykpXG4gICAgICAgICAgICByZXR1cm4gZ3ltc1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL2d5bS5qcyIsImV4cG9ydCBmdW5jdGlvbiBhZGRSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdBRERfUk9VVEUnLFxuICAgICAgICBwYXlsb2FkOiByb3V0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVSb3V0ZXMocm91dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1JFQ0VJVkVfUk9VVEVTJyxcbiAgICAgICAgcGF5bG9hZDogcm91dGVzXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnVVBEQVRFX1JPVVRFJyxcbiAgICAgICAgcGF5bG9hZDogcm91dGVcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSb3V0ZXMoYXJyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1JFTU9WRV9ST1VURVMnLFxuICAgICAgICBwYXlsb2FkOiBhcnJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZXNCeUd5bShpZCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBmZXRjaGVyLmdldChgcm91dGUvZ3ltLyR7aWR9YCwge1xuICAgICAgICAgICAgZ3ltOiBpZFxuICAgICAgICB9KS50aGVuKHJvdXRlcyA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlUm91dGVzKHJvdXRlcykpXG4gICAgICAgICAgICAvL3JldHVybiByb3V0ZXNcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0Um91dGUocm91dGUpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2hlci5jcmVhdGUoJ3JvdXRlJywgcm91dGUpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZFJvdXRlKHJlcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXRSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBmZXRjaGVyLnVwZGF0ZShgcm91dGUvJHtyb3V0ZS5faWR9YCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVJvdXRlKHJlcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgfSlcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy9yb3V0ZS5qcyIsImltcG9ydCB7cmVjZWl2ZUd5bXN9IGZyb20gJy4vZ3ltJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVRlYW0odGVhbSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdSRUNFSVZFX1RFQU0nLFxuICAgICAgICBwYXlsb2FkOiB0ZWFtXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVhbSgpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpXG4gICAgICAgIGlmIChzdGF0ZS50ZWFtLmd5bXMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hlci5nZXQoJ3RlYW1zL2N1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC50aGVuKHRlYW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVGVhbSh0ZWFtKSlcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUd5bXModGVhbS5neW1zKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlYW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvdGVhbS5qcyIsImV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVXNlcih1c2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1JFQ0VJVkVfVVNFUicsXG4gICAgICAgIHBheWxvYWQ6IHVzZXJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyKCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IGdldFN0YXRlKClcbiAgICAgICAgaWYgKHN0YXRlLnVzZXIuX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YXRlLnVzZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hlci5nZXQoJ3VzZXJzL2N1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXNlcih1c2VyKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvdXNlci5qcyIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb3V0ZShmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnVVBEQVRFX05FV19ST1VURScsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhZ3ModmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnVVBEQVRFX1RBR1MnLFxuICAgICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0V2l6YXJkKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdSRVNFVF9XSVpBUkQnXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy93aXphcmQuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSBbXVxuXG5jb25zdCB0cmFuc2Zvcm1HeW1zID0gKGd5bXMpID0+IHtcbiAgICBneW1zLmZvckVhY2goZ3ltID0+IHtcbiAgICAgICAgZ3ltLnZhbHVlID0gZ3ltLm5hbWVcbiAgICB9KVxuICAgIHJldHVybiBneW1zXG59XG5cbmNvbnN0IGd5bSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfR1lNUyc6XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1HeW1zKGFjdGlvbi5wYXlsb2FkKVxuICAgIGNhc2UgJ0dFVF9HWU1TJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBneW0gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2d5bS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcbmltcG9ydCB3aXphcmQgZnJvbSAnLi93aXphcmQnXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgcm91dGUgZnJvbSAnLi9yb3V0ZSdcbmltcG9ydCB0ZWFtIGZyb20gJy4vdGVhbSdcbmltcG9ydCBneW0gZnJvbSAnLi9neW0nXG5cbmNvbnN0IG1haW5SZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICByb3V0ZTogd2l6YXJkLCBcbiAgICByb3V0ZXM6IHJvdXRlLFxuICAgIHRlYW06IHRlYW0sXG4gICAgZ3ltczogZ3ltLFxuICAgIHVzZXIsXG4gICAgcm91dGVyOiByb3V0ZXJSZWR1Y2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCBtYWluUmVkdWNlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5jb25zdCBpbml0aWFsU3RhdGUgPSBuZXcgSW1tdXRhYmxlLk1hcCgpXG5cbmZ1bmN0aW9uIHJvdXRlKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChhY3Rpb24ucGF5bG9hZC5faWQsIGFjdGlvbi5wYXlsb2FkKVxuICAgIGNhc2UgJ1JFTU9WRV9ST1VURVMnOiB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBJbW11dGFibGUuU2V0KGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICByZXR1cm4gc3RhdGUuZmlsdGVyTm90KCh2KSA9PnJvdXRlcy5oYXModi5faWQpKVxuICAgIH1cbiAgICBjYXNlICdSRUNFSVZFX1JPVVRFUyc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5jb25jYXQoYWN0aW9uLnBheWxvYWQubWFwKHJvdXRlID0+IFtyb3V0ZS5faWQscm91dGVdKSlcbiAgICBjYXNlICdVUERBVEVfUk9VVEUnOlxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0KGFjdGlvbi5wYXlsb2FkLl9pZCwgYWN0aW9uLnBheWxvYWQpXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3JvdXRlLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGNvbG9yczogW10sXG4gICAgdGFnczogW10sXG4gICAgZ3JhZGVzOiB7XG4gICAgICAgIGJvdWxkZXI6IFtdLFxuICAgICAgICByb3BlOiBbXVxuICAgIH1cbn1cblxuY29uc3QgdHJhbnNmb3JtVGVhbSA9ICh0ZWFtKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGVhbSxcbiAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICBib3VsZGVyOiB0ZWFtLmdyYWRlcy5ib3VsZGVyLm1hcCgoZ3JhZGUsIGluZGV4KSA9PiB7cmV0dXJuIHtfaWQ6IGluZGV4LCB2YWx1ZTogZ3JhZGV9fSksXG4gICAgICAgICAgICByb3BlOiB0ZWFtLmdyYWRlcy5yb3BlLm1hcCgoZ3JhZGUsIGluZGV4KSA9PiB7cmV0dXJuIHtfaWQ6IGluZGV4LCB2YWx1ZTogZ3JhZGV9fSlcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3JzOiB0ZWFtLmNvbG9ycy5tYXAoY29sb3IgPT4ge3JldHVybiB7X2lkOiBjb2xvci5uYW1lLCB2YWx1ZTogY29sb3IubmFtZSwgY29sb3I6IGNvbG9yLmNvbG9yfX0pLFxuICAgICAgICB0YWdzOiB0ZWFtLnRhZ3MubWFwKHRhZyA9PiB7cmV0dXJuIHtfaWQ6IHRhZywgdmFsdWU6IHRhZ319KVxuICAgIH1cbn1cblxuY29uc3QgdGVhbSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfVEVBTSc6XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1UZWFtKGFjdGlvbi5wYXlsb2FkKVxuICAgIGNhc2UgJ0dFVF9URUFNJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0ZWFtICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy90ZWFtLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuY29uc3QgdXNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfVVNFUic6XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgIGNhc2UgJ0dFVF9VU0VSJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy91c2VyLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHRhZ3M6IFtdXG59XG5cbmNvbnN0IHdpemFyZCA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1VQREFURV9ORVdfUk9VVEUnOlxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgW2FjdGlvbi5wYXlsb2FkLmZpZWxkXTogYWN0aW9uLnBheWxvYWQudmFsdWV9KVxuICAgIGNhc2UgJ1VQREFURV9UQUdTJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7dGFnczogdG9nZ2xlVGFnKHN0YXRlLnRhZ3MsIGFjdGlvbi5wYXlsb2FkKX0pXG4gICAgY2FzZSAnUkVTRVRfV0laQVJEJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtneW06IHN0YXRlLmd5bSwgdGFnczogW119KVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l6YXJkXG5cbi8vIHV0aWxpdGllc1xuXG5mdW5jdGlvbiB0b2dnbGVUYWcodGFncywgdGFnKSB7XG4gICAgbGV0IGluZCA9IHRhZ3MuaW5kZXhPZih0YWcpXG4gICAgdGFncyA9IFsuLi50YWdzXVxuICAgIGlmIChpbmQgPj0gMCkge1xuICAgICAgICB0YWdzW2luZF0gPSB0YWdzW3RhZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgdGFncy5sZW5ndGggPSB0YWdzLmxlbmd0aCAtIDFcbiAgICAgICAgcmV0dXJuIHRhZ3NcbiAgICB9XG4gICAgcmV0dXJuIHRhZ3MuY29uY2F0KHRhZylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy93aXphcmQuanMiLCIgLyoqXG4gKiBAbmFtZSBzdGF0ZVRvZ2dsZVxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgcHJvcGVydHkgb2Ygc3RhdGUgdG8gdG9nZ2xlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cblxuXG5leHBvcnQgY29uc3Qgc3RhdGVUb2dnbGUgPSBwcm9wID0+IHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBbcHJvcF06ICFzdGF0ZVtwcm9wXVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS91dGlsL2luZGV4LmpzIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcbmltcG9ydCBTdmdJbmplY3RvciBmcm9tICdzdmctaW5qZWN0b3InXG5cbmNvbnN0IHJlbmRlciA9IENvbXBvbmVudCA9PiB7XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG5cdFx0PENvbXBvbmVudCAvPlxuXHQ8L0FwcENvbnRhaW5lcj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICApXG59XG5cbnJlbmRlcihBcHApXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbmljLXNwcml0ZScpXG4gICAgU3ZnSW5qZWN0b3IoaWNvbnMpXG59KVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIGNvbnNvbGUubG9nKCdzbyBzbyBob3QnKVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL2FwcCcsICgpID0+IHsgXG4gICAgICAgIGNvbnN0IEFwcCA9IHJlcXVpcmUoJy4vYXBwJykuZGVmYXVsdFxuICAgICAgICByZW5kZXIoQXBwKVxuICAgIH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL21haW4uanN4IiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFtcbiAgICB7ICdfaWQnOiAncmVkJywgJ3ZhbHVlJzogJ3JlZCcsICdjb2xvcic6ICcjZmUyZTJlJyB9LFxuICAgIHsgJ19pZCc6ICdvcmFuZ2UnLCAndmFsdWUnOiAnb3JhbmdlJywgJ2NvbG9yJzogJyNmOTInIH0sXG4gICAgeyAnX2lkJzogJ3llbGxvdycsICd2YWx1ZSc6ICd5ZWxsb3cnLCAnY29sb3InOiAnI2ZmZjA0YycgfSxcbiAgICB7ICdfaWQnOiAnZ3JlZW4nLCAndmFsdWUnOiAnZ3JlZW4nLCAnY29sb3InOiAnIzBiMCcgfSxcbiAgICB7ICdfaWQnOiAnYmx1ZScsICd2YWx1ZSc6ICdibHVlJywgJ2NvbG9yJzogJyMxZTU0ZjQnIH0sXG4gICAgeyAnX2lkJzogJ3B1cnBsZScsICd2YWx1ZSc6ICdwdXJwbGUnLCAnY29sb3InOiAnIzgwOCcgfSxcbiAgICB7ICdfaWQnOiAnYmxhY2snLCAndmFsdWUnOiAnYmxhY2snLCAnY29sb3InOiAnIzAwMCcgfSxcbiAgICB7ICdfaWQnOiAnd2hpdGUnLCAndmFsdWUnOiAnd2hpdGUnLCAnY29sb3InOiAnI2ZmZicgfSxcbiAgICB7ICdfaWQnOiAncGluaycsICd2YWx1ZSc6ICdwaW5rJywgJ2NvbG9yJzogJyNlNWQnIH1cbl1cblxuXG5leHBvcnQgY29uc3QgcGFsYXR0ZSA9IHtcbiAgICB0ZWFsOiB7cHJpbWFyeTogJyMwOGUwYzUnLCBzZWNvbmRhcnk6ICcjNGJkMGRkJ30sXG4gICAgcGluazoge3ByaW1hcnk6ICcjZmE0OTc4Jywgc2Vjb25kYXJ5OiAnI2ViNjdhOCd9LFxuICAgIG9yYW5nZToge3ByaW1hcnk6ICcjZmI5NTAwJywgc2Vjb25kYXJ5OiAnI2ZiYzEwMCd9LFxuICAgIGdyZWVuOiB7cHJpbWFyeTogJyM4M2JmMDAnLCBzZWNvbmRhcnk6ICcjODNiZjAwJ30sXG4gICAgeWVsbG93OiB7cHJpbWFyeTogJyNmZmRjMDAnLCBzZWNvbmRhcnk6ICcjZmZmNDAwJ30sXG4gICAgYmx1ZToge3ByaW1hcnk6ICcjMDA4RkZGJywgc2Vjb25kYXJ5OiAnIzI1NzdFOCd9LFxuICAgIHJlZDoge3ByaW1hcnk6ICcjRUMzNTM1Jywgc2Vjb25kYXJ5OiAnI0UzMTgyOCd9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvcnRjb25maWcuanMiLCJjbGFzcyDPgCB7XG4gICAgY291bnRCeShhcnIsIGNvbXApIHtcbiAgICAgICAgaWYgKCFjb21wKSBcbiAgICAgICAgICAgIGNvbXAgPSAoYSkgPT4gYVxuICAgICAgICBsZXQgZ3JvdXBlZCA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGEgPSBhcnJbaV1cbiAgICAgICAgICAgIGlmIChjb21wKGEpIGluIGdyb3VwZWQpIHtcbiAgICAgICAgICAgICAgICBncm91cGVkW2NvbXAoYSldKytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBlZFtjb21wKGEpXSA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXBlZFxuICAgIH1cblxuICAgIGJ1Y2tldHMoYXJyLCBsaXN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpIFxuICAgICAgICAgICAgbGlzdCA9IGxpc3Quc3BsaXQoJyAnKVxuICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSBcbiAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9tYWtlSGFzaChsaXN0LCAwKVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RbYXJyW2ldXSsrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RcbiAgICB9XG5cbiAgICByYW5nZShhLCBiKSB7XG4gICAgICAgIGxldCBzdGFydCA9IGJcbiAgICAgICAgICAgID8gYVxuICAgICAgICAgICAgOiAwXG4gICAgICAgIGxldCBlbmQgPSBiXG4gICAgICAgICAgICA/IGJcbiAgICAgICAgICAgIDogYVxuICAgICAgICBsZXQgYXJyID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2goaSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICBleHBhbmRTaW1wbGVPYmplY3Qob2JqKSB7XG4gICAgICAgIG9iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSAhPT0gLTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VEb3ROb3RhdGlvbihrZXksIG9ialtrZXldLCBvYmopXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIHRvZ2dsZUFycmF5KGEsIHYpIHtcbiAgICAgICAgYSA9IFsuLi5hXVxuICAgICAgICB2YXIgaSA9IGEuaW5kZXhPZih2KVxuICAgICAgICBpZiAoaSA9PT0gLTEpXG4gICAgICAgICAgICBhLnB1c2godilcbiAgICAgICAgZWxzZVxuICAgICAgICBhLnNwbGljZShpLDEpXG5cbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cblxuICAgIC8vIGludGVybmFsXG5cbiAgICBfbWFrZUhhc2goYXJyLCB2YWwpIHtcbiAgICAgICAgbGV0IGhhc2ggPSB7fVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hbYXJyW2ldXSA9IHZhbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgfVxuXG4gICAgX3BhcnNlRG90Tm90YXRpb24oc3RyLCB2YWwsIG9iaikge1xuICAgICAgICB2YXIgY3VycmVudE9iaiA9IG9iaixcbiAgICAgICAgICAgIGtleXMgPSBzdHIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGksIGwgPSBNYXRoLm1heCgxLCBrZXlzLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAga2V5XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXVxuICAgICAgICAgICAgY3VycmVudE9ialtrZXldID0gY3VycmVudE9ialtrZXldIHx8IHt9XG4gICAgICAgICAgICBjdXJyZW50T2JqID0gY3VycmVudE9ialtrZXldXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRPYmpba2V5c1tpXV0gPSB2YWxcbiAgICAgICAgZGVsZXRlIG9ialtzdHJdXG4gICAgfVxuXG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IM+AKClcblxuZXhwb3J0IGNvbnN0IHJlbmRlcklmID0gY29uZGl0aW9uID0+IGVsZW1lbnQgPT4gKGNvbmRpdGlvbiAmJiBlbGVtZW50KSB8fCAnJyBcblxuZXhwb3J0IGNvbnN0IGRhdGVNYXRoID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgZGF5ID0gOC42NGU3XG4gICAgY29uc3Qgd2VlayA9IDYuMDQ4ZSs4XG4gICAgXG4gICAgZnVuY3Rpb24gd2Vla3NPbGQoZGF5KSB7XG4gICAgICAgIGNvbnN0IG1zID0gRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGRheSkuZ2V0VGltZSgpXG5cbiAgICAgICAgY29uc3Qgd2Vla3MgPSBtcy93ZWVrXG5cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQod2Vla3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF5LFxuICAgICAgICB3ZWVrLFxuICAgICAgICB3ZWVrc09sZFxuICAgIH1cblxufSkoKVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAodGltZSkgPT4gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9ydHV0aWwuanMiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY29sb3JGYWN0b3J5KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRleHRDb2xvclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHRDb2xvcihjb2xvcikge1xuICAgICAgICBpZighY29sb3IpIHJldHVyblxuICAgICAgICBsZXQgc3BsaXR0ZXIgPSBjb2xvci5sZW5ndGggPiA0PyAvLnsyfS9nIDogLy4vZ1xuICAgICAgICBsZXQgbWlkZGxlID0gY29sb3IubGVuZ3RoID4gND8gMTI4IDogOFxuICAgICAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnJykubWF0Y2goc3BsaXR0ZXIpXG4gICAgICAgIHJldHVybiBjb2xvci5yZWR1Y2UoKGEsIGIpID0+IChwYXJzZUludChiLCAxNikgLyAzKSArIGEsIDApID4gbWlkZGxlID8gJyM1NTUnIDogJyNmZmYnXG4gICAgfVxufSkoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NlcnZpY2VzL2NvbG9yU2VydmljZS5qcyIsImNsYXNzIGZldGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByZWZpeCA9ICcvYXBpLydcbiAgICB9XG5cbiAgICBnZXQocmVzb3VyY2UsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSArIHBhcmFtVG9RdWVyeShwYXJhbXMpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgY3JlYXRlKHJlc291cmNlLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLnByZWZpeCArIHJlc291cmNlLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBmb3JtYXRCb2R5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlKHJlc291cmNlLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLnByZWZpeCArIHJlc291cmNlLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICBib2R5OiBmb3JtYXRCb2R5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IGZldGNoZXIoKVxuXG5mdW5jdGlvbiBwYXJhbVRvUXVlcnkob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiAnJ1xuXG4gICAgcmV0dXJuICc/JyArXG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICtcbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pXG4gICAgICAgIH0pLmpvaW4oJyYnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRCb2R5KG9iaikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc2VydmljZXMvZmV0Y2hlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9wdWJsaWMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9