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

/***/ "./public/components/account/components/BasicInfo.jsx":
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
		}, _this.saveSuccess = function () {
			var _this3;

			return (_this3 = _this).__saveSuccess__REACT_HOT_LOADER__.apply(_this3, arguments);
		}, _this.fields = function () {
			var _this4;

			return (_this4 = _this).__fields__REACT_HOT_LOADER__.apply(_this4, arguments);
		}, _this.validateEmpty = function () {
			var _this5;

			return (_this5 = _this).__validateEmpty__REACT_HOT_LOADER__.apply(_this5, arguments);
		}, _this.validateEmail = function () {
			var _this6;

			return (_this6 = _this).__validateEmail__REACT_HOT_LOADER__.apply(_this6, arguments);
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
			this.setState({
				pending: true
			});

			this.values = _rtutil2.default.expandSimpleObject(data);

			return _fetcher2.default.update('users/current', data).then((0, _rtutil.sleep)(1000)).then(this.saveSuccess(data));
		}
	}, {
		key: '__saveSuccess__REACT_HOT_LOADER__',
		value: function __saveSuccess__REACT_HOT_LOADER__(data) {
			var _this7 = this;

			return function () {
				_this7.setState({
					pending: false
				});
				return data;
			};
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

	__REACT_HOT_LOADER__.register(BasicInfo, 'BasicInfo', '/Users/peller/Desktop/reactracker/public/components/account/components/BasicInfo.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/account/components/BasicInfo.jsx');
}();

;

/***/ }),

/***/ "./public/components/account/components/TeamInfo.jsx":
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

  __REACT_HOT_LOADER__.register(ListItemColor, 'ListItemColor', '/Users/peller/Desktop/reactracker/public/components/account/components/TeamInfo.jsx');

  __REACT_HOT_LOADER__.register(ListItem, 'ListItem', '/Users/peller/Desktop/reactracker/public/components/account/components/TeamInfo.jsx');

  __REACT_HOT_LOADER__.register(available, 'available', '/Users/peller/Desktop/reactracker/public/components/account/components/TeamInfo.jsx');

  __REACT_HOT_LOADER__.register(TeamInfo, 'TeamInfo', '/Users/peller/Desktop/reactracker/public/components/account/components/TeamInfo.jsx');

  __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/account/components/TeamInfo.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/account/components/TeamInfo.jsx');
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

var _BasicInfo = __webpack_require__("./public/components/account/components/BasicInfo.jsx");

var _BasicInfo2 = _interopRequireDefault(_BasicInfo);

var _TeamInfo = __webpack_require__("./public/components/account/components/TeamInfo.jsx");

var _TeamInfo2 = _interopRequireDefault(_TeamInfo);

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
						_react2.default.createElement(_BasicInfo2.default, { user: this.props.user })
					)),
					(0, _rtutil.renderIf)(this.state.active === 'Team Info')(_react2.default.createElement(
						_reactBootstrap.Tab,
						{ title: 'Team Info', eventKey: 2, tabClassName: 'nav-link' },
						_react2.default.createElement(_TeamInfo2.default, null)
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

Icon.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string,
  altClass: _propTypes2.default.string
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

LoadBar.propTypes = {
    inline: _propTypes2.default.bool
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

LoadContainer.propTypes = {
	loaded: _propTypes2.default.bool
};
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

RtCard.propTypes = {
	title: _propTypes2.default.string,
	children: _propTypes2.default.node,
	style: _propTypes2.default.object
};

var _default = RtCard;
exports.default = _default;
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
				var modifier = {
					valid: new Set(state.valid),
					data: Object.assign(state.data, _defineProperty({}, update.field.name, update.value))
				};

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
							return _react2.default.createElement(_this3.ListItem, _extends({ 'data-source': 'list', key: item.key || ind }, item, _this3.makeHandlers(ind, arr, 'list')));
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
							return _react2.default.createElement(_this3.ListItem, _extends({ 'data-source': 'options', key: item.key || ind }, item, _this3.makeHandlers(ind, arr, 'options')));
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

SwipeContainer.propTypes = {
	onLeft: _propTypes2.default.func,
	onRight: _propTypes2.default.func,
	onSwipe: _propTypes2.default.func
};

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
    props.tabs.map(function (tab) {
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
	gym: _propTypes2.default.object,
	getRoutes: _propTypes2.default.func,
	data: _propTypes2.default.array
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

/***/ "./public/components/gymOverview/components/RouteList.jsx":
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
	removeRoutes: _propTypes2.default.func,
	walls: _propTypes2.default.array
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

	__REACT_HOT_LOADER__.register(RouteList, 'RouteList', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/RouteList.jsx');

	__REACT_HOT_LOADER__.register(sortOn, 'sortOn', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/RouteList.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/RouteList.jsx');
}();

;

/***/ }),

/***/ "./public/components/gymOverview/components/StatsCard.jsx":
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

  __REACT_HOT_LOADER__.register(StatsCard, 'StatsCard', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/StatsCard.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/gymOverview/components/StatsCard.jsx');
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
	deleteHandler: _propTypes2.default.func,
	dir: _propTypes2.default.string
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

var _reactCssTransitionReplace = __webpack_require__("./node_modules/react-css-transition-replace/lib/ReactCSSTransitionReplace.js");

var _reactCssTransitionReplace2 = _interopRequireDefault(_reactCssTransitionReplace);

var _rtBigBar = __webpack_require__("./public/components/rtChart/rtBigBar.jsx");

var _rtBigBar2 = _interopRequireDefault(_rtBigBar);

var _common = __webpack_require__("./public/components/common/index.js");

var _reactstrap = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");

var _StatsCard = __webpack_require__("./public/components/gymOverview/components/StatsCard.jsx");

var _StatsCard2 = _interopRequireDefault(_StatsCard);

var _RouteList = __webpack_require__("./public/components/gymOverview/components/RouteList.jsx");

var _RouteList2 = _interopRequireDefault(_RouteList);

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
		}, _this.onTeam = function () {
			var _this4;

			return (_this4 = _this).__onTeam__REACT_HOT_LOADER__.apply(_this4, arguments);
		}, _this.setLoaded = function () {
			var _this5;

			return (_this5 = _this).__setLoaded__REACT_HOT_LOADER__.apply(_this5, arguments);
		}, _this.setError = function () {
			var _this6;

			return (_this6 = _this).__setError__REACT_HOT_LOADER__.apply(_this6, arguments);
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
			var _this7 = this;

			if (this.props.gym && nextProps.gym && this.props.gym.name !== nextProps.gym.name) {
				this.setState({
					loaded: false
				});
				setTimeout(function () {
					return _this7.getDataForGym(nextProps.gym.url);
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
								_react2.default.createElement(_StatsCard2.default, { data: this.state.routes })
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
									_react2.default.createElement(_RouteList2.default, {
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
			this.props.getTeam().then(this.onTeam(name)).then(this.setLoaded).catch(this.setError);
		}
	}, {
		key: '__onTeam__REACT_HOT_LOADER__',
		value: function __onTeam__REACT_HOT_LOADER__(name) {
			var _this8 = this;

			return function (team) {
				var currentGym = team.gyms.filter(function (gym) {
					return name === gym.url;
				})[0];
				if (!currentGym) {
					_this8.setState({
						error: true
					});
				} else {
					return _this8.props.getRoutes(currentGym._id);
				}
			};
		}
	}, {
		key: '__setLoaded__REACT_HOT_LOADER__',
		value: function __setLoaded__REACT_HOT_LOADER__() {
			this.setState({ loaded: true });
		}
	}, {
		key: '__setError__REACT_HOT_LOADER__',
		value: function __setError__REACT_HOT_LOADER__() {
			this.setState({ error: true });
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
	getRoutes: _propTypes2.default.func,
	updateRoute: _propTypes2.default.func,
	removeRoutes: _propTypes2.default.func
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

/***/ "./public/components/main/RtContent.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var RtContent = function RtContent(props) {
    return _react2.default.createElement(
        'div',
        { className: 'rt-content' },
        _react2.default.createElement(
            _reactRouterDom.Switch,
            { location: props.location },
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _gymList2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/gyms/:name', component: _gymOverview2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/add', component: _rtWizard2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/account', component: _account2.default })
        )
    );
};

RtContent.propTypes = {
    location: _propTypes2.default.object
};

var _default = RtContent;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtContent, 'RtContent', '/Users/peller/Desktop/reactracker/public/components/main/RtContent.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/main/RtContent.jsx');
}();

;

/***/ }),

/***/ "./public/components/main/RtHeader.jsx":
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

var _reactstrap = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");

var _reactRouterBootstrap = __webpack_require__("./node_modules/react-router-bootstrap/lib/index.js");

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _util = __webpack_require__("./public/data/util/index.js");

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

RtHeader.propTypes = {
  gyms: _propTypes2.default.array
};


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

  __REACT_HOT_LOADER__.register(RtHeader, 'RtHeader', '/Users/peller/Desktop/reactracker/public/components/main/RtHeader.jsx');

  __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/main/RtHeader.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/main/RtHeader.jsx');
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _team = __webpack_require__("./public/data/actions/team.js");

var _gym = __webpack_require__("./public/data/actions/gym.js");

var _RtHeader = __webpack_require__("./public/components/main/RtHeader.jsx");

var _RtHeader2 = _interopRequireDefault(_RtHeader);

var _RtContent = __webpack_require__("./public/components/main/RtContent.jsx");

var _RtContent2 = _interopRequireDefault(_RtContent);

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
				_react2.default.createElement(_RtHeader2.default, { location: this.props.location }),
				_react2.default.createElement(_RtContent2.default, { location: this.props.location })
			);
		}
	}]);

	return Main;
}(_react.Component);

Main.propTypes = {
	getTeam: _propTypes2.default.func.isRequired,
	getGyms: _propTypes2.default.func.isRequired,
	location: _propTypes2.default.object
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

	var color = _rtconfig.palatte[this.props.color] || {
		primary: 'black',
		secondary: 'black'
	};

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

			var color = _rtconfig.palatte[this.props.color] || {
				primary: 'black',
				secondary: 'black'
			};
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
			window.onresize = resized;
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
	var _this3 = this;

	if (!this.props.data) return;
	var data = this.props.data;

	var width = 94;
	var height = 94;

	var chart = d3.select(this.el).append('svg').attr('viewBox', '-3 -3 100 100').attr('preserveAspectRatio', 'xMidYMin meet').classed('w100', true);

	var radius = Math.min(width, height) / 2,
	    g = chart.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

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
	}).on('mouseover', function () {
		return d3.select(_this3).attr('d', hoverPath);
	}).on('mouseout', function () {
		return d3.select(_this3).attr('d', path);
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

/***/ "./public/components/rtWizard/components/WzContainer.jsx":
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

var WzContainer = function WzContainer(props) {
  return _react2.default.createElement(
    'div',
    { className: 'wz-big-container' },
    _react2.default.createElement('div', { className: 'left-wing' }),
    _react2.default.createElement(
      'div',
      { className: 'wz-container' },
      _react2.default.createElement(
        'div',
        { className: 'wz-inner', style: { transform: 'translateX(' + props.step * -16.6 + '%)' } },
        props.children
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'right-wing' },
      ' '
    )
  );
};

WzContainer.propTypes = {
  step: _propTypes2.default.number
};

var _default = WzContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WzContainer, 'WzContainer', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzContainer.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzContainer.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/components/WzGrid.jsx":
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
	color: _propTypes2.default.string,
	update: _propTypes2.default.func
};

var _default = WzGrid;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(WzGrid, 'WzGrid', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzGrid.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzGrid.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/components/WzPreview.jsx":
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

	__REACT_HOT_LOADER__.register(WzPreview, 'WzPreview', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzPreview.jsx');

	__REACT_HOT_LOADER__.register(transformRoute, 'transformRoute', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzPreview.jsx');

	__REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzPreview.jsx');

	__REACT_HOT_LOADER__.register(mapDispatch, 'mapDispatch', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzPreview.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzPreview.jsx');
}();

;

/***/ }),

/***/ "./public/components/rtWizard/components/WzStep.jsx":
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

  __REACT_HOT_LOADER__.register(WzStep, 'WzStep', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzStep.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/WzStep.jsx');
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WzItem = function WzItem(props) {
	function onClick() {
		props.update(props.type, props.item);
	}

	var itemStyle = {
		backgroundColor: props.item.color ? props.item.color : 'white',
		color: props.item.color ? _colorService2.default.textColor(props.item.color) : 'inherit'
	};

	return _react2.default.createElement(
		'div',
		{ onClick: onClick, className: (0, _classnames2.default)('wz-dot', { 'item-selected': props.selected }), style: itemStyle },
		_react2.default.createElement(
			'div',
			{ className: 'wz-label grid-label', onClick: onClick },
			props.item.value
		)
	);
};

WzItem.propTypes = {
	update: _propTypes2.default.func,
	item: _propTypes2.default.object,
	type: _propTypes2.default.string,
	selected: _propTypes2.default.bool
};

var _default = WzItem;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(WzItem, 'WzItem', '/Users/peller/Desktop/reactracker/public/components/rtWizard/components/wzItem.jsx');

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

var _WzGrid = __webpack_require__("./public/components/rtWizard/components/WzGrid.jsx");

var _WzGrid2 = _interopRequireDefault(_WzGrid);

var _WzContainer = __webpack_require__("./public/components/rtWizard/components/WzContainer.jsx");

var _WzContainer2 = _interopRequireDefault(_WzContainer);

var _WzStep = __webpack_require__("./public/components/rtWizard/components/WzStep.jsx");

var _WzStep2 = _interopRequireDefault(_WzStep);

var _WzPreview = __webpack_require__("./public/components/rtWizard/components/WzPreview.jsx");

var _WzPreview2 = _interopRequireDefault(_WzPreview);

var _common = __webpack_require__("./public/components/common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RtWizard = function (_Component) {
	_inherits(RtWizard, _Component);

	function RtWizard() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RtWizard);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RtWizard.__proto__ || Object.getPrototypeOf(RtWizard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			step: 0,
			gymFilter: undefined
		}, _this.clicks = 0, _this.clicked = 'gym', _this.steps = ['gym', 'color', 'grade', 'location', 'tags'], _this.onSwipe = function () {
			var _this2;

			return (_this2 = _this).__onSwipe__REACT_HOT_LOADER__.apply(_this2, arguments);
		}, _this.move = function () {
			var _this3;

			return (_this3 = _this).__move__REACT_HOT_LOADER__.apply(_this3, arguments);
		}, _this.update = function () {
			var _this4;

			return (_this4 = _this).__update__REACT_HOT_LOADER__.apply(_this4, arguments);
		}, _this.updateTags = function () {
			var _this5;

			return (_this5 = _this).__updateTags__REACT_HOT_LOADER__.apply(_this5, arguments);
		}, _this.resetForm = function () {
			var _this6;

			return (_this6 = _this).__resetForm__REACT_HOT_LOADER__.apply(_this6, arguments);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RtWizard, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.props.resetForm();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this7 = this;

			return _react2.default.createElement(
				_common.SwipeContainer,
				{ onSwipe: this.onSwipe },
				_react2.default.createElement(
					_WzContainer2.default,
					{ step: this.state.step },
					this.stepContent().map(function (step) {
						return _react2.default.createElement(
							_WzStep2.default,
							{ key: step.name,
								name: step.name,
								prev: _this7.move,
								next: _this7.move,
								update: _this7.update,
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
			if (this.state.step !== 5 && dir < 0 || !(this.steps[this.state.step] in this.props.route)) return;

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
			var _this8 = this;

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
				return _this8.clicks--;
			}, 500);
		}
	}, {
		key: '__updateTags__REACT_HOT_LOADER__',
		value: function __updateTags__REACT_HOT_LOADER__(tags, tag) {
			var _this9 = this;

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
				return _this9.clicks--;
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
			var _this10 = this;

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
									return _this10.setFilter('boulder');
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
									return _this10.setFilter('rope');
								} },
							_react2.default.createElement(
								'div',
								{ className: 'wz-label list-label' },
								'Ropes'
							)
						)
					),
					_react2.default.createElement('hr', null),
					_react2.default.createElement(_WzGrid2.default, { items: this.filterGyms(this.props.gyms, this.state.gymFilter), route: this.props.route, selector: 'gym', update: this.update, list: true })
				)
			}, {
				name: 'color',
				content: _react2.default.createElement(_WzGrid2.default, { items: this.props.team.colors, route: this.props.route, selector: 'color', update: this.update })
			}, {
				name: 'grade',
				content: _react2.default.createElement(_WzGrid2.default, { items: this.props.route.type ? this.props.team.grades[this.props.route.type] : this.props.team.grades.boulder, route: this.props.route, selector: 'grade', update: this.update })
			}, {
				name: 'location',
				content: _react2.default.createElement(_WzGrid2.default, { items: this.props.route.gym && this.props.route.gym.walls[this.state.gymFilter] || [], route: this.props.route, selector: 'location', update: this.update, list: true })
			}, {
				name: 'tags',
				content: _react2.default.createElement(_WzGrid2.default, { items: this.props.team.tags, route: this.props.route, selector: 'tags', update: this.updateTags, list: true })
			}, {
				name: 'review',
				end: true,
				review: true,
				content: _react2.default.createElement(_WzPreview2.default, { route: this.props.route, move: this.move, reset: this.resetForm })
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

var _temp2 = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(RtWizard, 'RtWizard', '/Users/peller/Desktop/reactracker/public/components/rtWizard/rtWizard.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtWizard/rtWizard.jsx');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvQmFzaWNJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvVGVhbUluZm8uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9GbGV4Um93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0lucHV0Qm94LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vTG9hZEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdENhcmQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdEZvcm0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdExpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFBhbmUuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFN3YXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1NvcnRhYmxlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1N3aXBlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vVGFiU3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2NvbXBvbmVudHMvR3ltSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9Sb3V0ZUxpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvU3RhdHNDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlUm93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9SdENvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vUnRIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjay5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XekNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XekdyaWQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvV3pQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL1d6U3RlcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekl0ZW0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pMaXN0SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elBhZ2UuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9ydFdpemFyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9neW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3RlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy91c2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvd2l6YXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2d5bS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy90ZWFtLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvd2l6YXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21haW4uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9ydGNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcnR1dGlsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zZXJ2aWNlcy9jb2xvclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NlcnZpY2VzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiaGlzdG9yeSIsInJvdXRlTWlkZGxld2FyZSIsInN0b3JlIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsIndpdGhFeHRyYUFyZ3VtZW50IiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwibmV4dFJvb3RSZWR1Y2VyIiwicmVxdWlyZSIsInJlcGxhY2VSZWR1Y2VyIiwiQXBwIiwiQmFzaWNJbmZvIiwic3RhdGUiLCJvblNhdmUiLCJzYXZlU3VjY2VzcyIsImZpZWxkcyIsInZhbGlkYXRlRW1wdHkiLCJ2YWxpZGF0ZUVtYWlsIiwicHJvcHMiLCJ1c2VyIiwicGVuZGluZyIsImRhdGEiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImV4cGFuZFNpbXBsZU9iamVjdCIsInVwZGF0ZSIsInRoZW4iLCJsYWJlbCIsIm5hbWUiLCJ0eXBlIiwidmFsaWRhdGUiLCJ2YWx1ZSIsImxlbmd0aCIsInRlc3QiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJMaXN0SXRlbUNvbG9yIiwiY29sb3IiLCJMaXN0SXRlbSIsImF2YWlsYWJsZSIsIm1hcCIsIlRlYW1JbmZvIiwidGVhbSIsImNvbG9ycyIsInNsaWNlIiwiYSIsImIiLCJfaWQiLCJncmFkZXMiLCJib3VsZGVyIiwibWFwU3RhdGUiLCJ0YWJzIiwiQWNjb3VudCIsImxvYWRlZCIsImFjdGl2ZSIsInRvZ2dsZSIsImdldFVzZXIiLCJpbmQiLCJmdW5jIiwibWFwRGlzcGF0Y2giLCJkaXNwYXRjaCIsInN0eWxlcyIsImRpc3BsYXkiLCJpbmxpbmUiLCJqdXN0aWZ5Q29udGVudCIsImFyb3VuZCIsIm1hcmdpbiIsInN0eWxlIiwiZmxleFJvdyIsImNoaWxkcmVuIiwibm9kZSIsIkljb24iLCJhbHRDbGFzcyIsImNsYXNzTmFtZSIsImljb24iLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiSW5wdXRCb3giLCJ2YWxpZCIsImhhbmRsZUNoYW5nZSIsIm9uQmx1ciIsImUiLCJmaWVsZCIsInRhcmdldCIsInVwZGF0ZUZvcm0iLCJlZGl0IiwiQ29tcG9uZW50IiwiYm9vbCIsIkxvYWRCYXIiLCJMb2FkQ29udGFpbmVyIiwiY29udGVudCIsIkNoaWxkcmVuIiwidG9BcnJheSIsIlJ0Q2FyZCIsInRpdGxlIiwiUnRGb3JtIiwiU2V0IiwidG9nZ2xlRWRpdCIsInNhdmUiLCJtYWtlRm9ybSIsIk9iamVjdCIsImFzc2lnbiIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwicG9zaXRpb24iLCJlZGl0YWJsZSIsInNpemUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsImkiLCJBcnJheSIsInBhZGRpbmciLCJtb2RpZmllciIsImFkZCIsImRlbGV0ZSIsImRlZmF1bHRQcm9wcyIsImFycmF5T2YiLCJvbmVPZlR5cGUiLCJhcnJheSIsInNoYXBlIiwib25DbGljayIsIlJ0TGlzdCIsImxpc3RJdGVtcyIsIml0ZW0iLCJpbmRleCIsIlJ0U3dhdGNoIiwiYyIsInQiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJTb3J0YWJsZUxpc3QiLCJpdGVtcyIsIm1ha2VIYW5kbGVycyIsImNvbXBvbmVudCIsImNvbXBhcmF0b3IiLCJjdXJyZW50IiwibGlzdCIsIm9wdGlvbnMiLCJkaWZmZXJlbmNlV2l0aCIsIm5leHRQcm9wcyIsImZvbnRTaXplIiwiYXJyIiwia2V5Iiwic291cmNlIiwiZHJhZ2dhYmxlIiwib25EcmFnU3RhcnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnZXREYXRhIiwiZGVzdCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib2xkSW5kIiwibmV3SW5kIiwibGlzdHMiLCJuZXdFbCIsInNwbGljZSIsIlN3aXBlQ29udGFpbmVyIiwidG91Y2hTdGFydCIsInRvdWNoRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJzdGFydFgiLCJjbGllbnRYIiwiZGlzdCIsIm9uTGVmdCIsIm9uU3dpcGUiLCJvblJpZ2h0IiwiaXNBY3RpdmUiLCJ0YWIiLCJTbGlkZXIiLCJ0YWJTd2l0Y2hlciIsIlJ0UGFuZSIsIlRhYlN3aXRjaGVyIiwiRmxleFJvdyIsIkd5bUl0ZW0iLCJ1bmRlZmluZWQiLCJnZXRSb3V0ZXMiLCJneW0iLCJ1cmwiLCJvd25Qcm9wcyIsImd5bVJvdXRlcyIsInJvdXRlcyIsInJvdXRlIiwidHJhbnNmb3JtUm91dGVzIiwiaWQiLCJzb3J0ZWQiLCJidWNrZXRzIiwiZ3JhZGUiLCJyYW5nZSIsImtleXMiLCJHeW1MaXN0IiwiZ3ltcyIsIm1hcFByb3BzIiwiZmV0Y2hpbmciLCJSb3V0ZUxpc3QiLCJzZWxlY3RIYW5kbGVyIiwibW91c2VEb3duIiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdCIsInNoaWZ0S2V5IiwiTnVtYmVyIiwibGFzdFNlbGVjdGVkIiwibCIsIk1hdGgiLCJtaW4iLCJoIiwibWF4Iiwic2VsZWN0ZWQiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsInRlbXAiLCJoYXMiLCJkZWxldGVIYW5kbGVyIiwiaGFuZGxlU29ydCIsInVwZGF0ZVJvdXRlIiwic29ydE9uIiwibmV4dCIsInNvcnQiLCJkaXIiLCJyZXZlcnNlIiwidXBkYXRlZF9hdCIsIndhbGxzIiwiZXZlbnQiLCJpbmRzIiwiaWRzIiwicmVtb3ZlUm91dGVzIiwicGFyYW0iLCJuZXdSb3V0ZXMiLCJuZXdSb3V0ZSIsInByb3AiLCJEYXRlIiwicGFyc2UiLCJzZXRfb24iLCJTdGF0c0NhcmQiLCJtYWtlT3ZlcnZpZXciLCJjb3VudCIsIm9sZGVzdCIsIkluZmluaXR5IiwiZm9yRWFjaCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImFycm93cyIsIlJvdXRlSGVhZGVyIiwiYXJyb3ciLCJUZElucHV0IiwiVGRTZWxlY3QiLCJSb3V0ZVJvdyIsImNhbmNlbEVkaXQiLCJkZWxldGVSb3V0ZSIsInVwZGF0ZUZpZWxkIiwid2FsbCIsInNldHRlciIsIm1lbWJlcnMiLCJuaWNrbmFtZSIsIndpZHRoIiwid2Vla3NPbGQiLCJudW1iZXIiLCJHeW1PdmVydmlldyIsInR5cGVzIiwidXBkYXRlUm91dGVzIiwib25UZWFtIiwic2V0TG9hZGVkIiwic2V0RXJyb3IiLCJnZXREYXRhRm9yR3ltIiwibWF0Y2giLCJwYXJhbXMiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJtaW5IZWlnaHQiLCJnZXRUZWFtIiwiY2F0Y2giLCJjdXJyZW50R3ltIiwiUnRDb250ZW50IiwibG9jYXRpb24iLCJSdEhlYWRlciIsImlzT3BlbiIsImRyb3Bkb3duSXNPcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJNYWluIiwiZ2V0R3ltcyIsInJvdXRlciIsIm1haW5Db250YWluZXIiLCJkMyIsIlJ0U3RhY2siLCJtYWtlQ2hhcnQiLCJhcHBseSIsImVsIiwidG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjaGFydCIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJzZWdtZW50cyIsInNlbGVjdEFsbCIsImVudGVyIiwiZCIsIlJ0QmFyIiwiYmFyV2lkdGgiLCJ5IiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yU2NhbGUiLCJpbnRlcnBvbGF0ZUhjbCIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRlUmFpbmJvdyIsImNsYXNzZWQiLCJiYXIiLCJkZWxheSIsInJhbmRvbSIsImR1cmF0aW9uIiwiZWFzZSIsImVhc2VFeHBJbiIsInRpcCIsIlJ0QmlnQmFyIiwidXBkYXRlQ2hhcnQiLCJyZW1vdmUiLCJzdmciLCJ0ZXh0IiwiZm9udFNjYWxlIiwiY2xhbXAiLCJvZmZzZXQiLCJodG1sIiwiY2FsbCIsIm9uIiwic2hvdyIsImhpZGUiLCJyZXNpemVkIiwic2NhbGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvbnJlc2l6ZSIsImdvYWwiLCJSdFBpZSIsInJhZGl1cyIsImciLCJwaWUiLCJyYWluYm93IiwicGF0aCIsImFyYyIsIm91dGVyUmFkaXVzIiwiaW5uZXJSYWRpdXMiLCJob3ZlclBhdGgiLCJjZW50cm9pZCIsImFnZSIsIld6Q29udGFpbmVyIiwidHJhbnNmb3JtIiwic3RlcCIsIld6R3JpZCIsIkVsIiwiaXNTZWxlY3RlZCIsInNlbGVjdG9yIiwidGFncyIsImluZGV4T2YiLCJvbmVPZiIsIld6UHJldmlldyIsInBvc3RSb3V0ZSIsInRyYW5zZm9ybWVkUm91dGUiLCJ0cmFuc2Zvcm1Sb3V0ZSIsImpvaW4iLCJyZXNldCIsImFkZGVkIiwibW92ZSIsIm9iaiIsIm5vdyIsIld6U3RlcCIsInJldmlldyIsInByZXYiLCJXekl0ZW0iLCJpdGVtU3R5bGUiLCJXekxpc3RJdGVtIiwiX2NsaWNrIiwic2V0Q2xhc3MiLCJXelBhZ2UiLCJiaW5kIiwibWFwU3RhdGVUb1Byb3BzIiwidXBkYXRlVGFncyIsInJlc2V0Rm9ybSIsIlJ0V2l6YXJkQ29udGFpbmVyIiwiUnRXaXphcmQiLCJneW1GaWx0ZXIiLCJjbGlja3MiLCJjbGlja2VkIiwic3RlcHMiLCJzdGVwQ29udGVudCIsImVuZCIsInRvU3RlcCIsInRhZyIsInNldEZpbHRlciIsImZpbHRlckd5bXMiLCJyZWNlaXZlR3ltcyIsInBheWxvYWQiLCJnZXRTdGF0ZSIsImZldGNoZXIiLCJnZXQiLCJhZGRSb3V0ZSIsInJlY2VpdmVSb3V0ZXMiLCJnZXRSb3V0ZXNCeUd5bSIsInB1dFJvdXRlIiwiY3JlYXRlIiwicmVzIiwicmVjZWl2ZVRlYW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY2VpdmVVc2VyIiwicmVzZXRXaXphcmQiLCJpbml0aWFsU3RhdGUiLCJ0cmFuc2Zvcm1HeW1zIiwiYWN0aW9uIiwibWFpblJlZHVjZXIiLCJNYXAiLCJzZXQiLCJmaWx0ZXJOb3QiLCJ2IiwiY29uY2F0Iiwicm9wZSIsInRyYW5zZm9ybVRlYW0iLCJ3aXphcmQiLCJ0b2dnbGVUYWciLCJzdGF0ZVRvZ2dsZSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwicGFsYXR0ZSIsInRlYWwiLCJwaW5rIiwib3JhbmdlIiwiZ3JlZW4iLCJ5ZWxsb3ciLCJibHVlIiwicmVkIiwiz4AiLCJjb21wIiwiZ3JvdXBlZCIsInNwbGl0IiwiX21ha2VIYXNoIiwic3RhcnQiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9wYXJzZURvdE5vdGF0aW9uIiwidmFsIiwiaGFzaCIsInN0ciIsImN1cnJlbnRPYmoiLCJyZW5kZXJJZiIsImNvbmRpdGlvbiIsImVsZW1lbnQiLCJkYXRlTWF0aCIsImRheSIsIndlZWsiLCJtcyIsImdldFRpbWUiLCJ3ZWVrcyIsInJvdW5kIiwic2xlZXAiLCJ0aW1lIiwiY29sb3JGYWN0b3J5Iiwic3BsaXR0ZXIiLCJtaWRkbGUiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJwcmVmaXgiLCJyZXNvdXJjZSIsImZldGNoIiwicGFyYW1Ub1F1ZXJ5IiwianNvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJmb3JtYXRCb2R5IiwiY3JlZGVudGlhbHMiLCJlbmNvZGVVUklD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REw7QUFFTCxvQ0FBZ0I7QUFGWCxpQkFGd0I7QUFNakNFLDZCQUFhLFNBTm9CO0FBT2pDOVEsc0JBQU02USxXQUFXbGQsSUFBWDtBQVAyQixhQUE5QixFQVNOSyxJQVRNLENBU0Q7QUFBQSx1QkFBT21ZLElBQUl1RSxJQUFKLEVBQVA7QUFBQSxhQVRDLENBQVA7QUFVSDs7Ozs7O2VBR1UsSUFBSTlFLE9BQUosRTs7Ozs7QUFFZixTQUFTNkUsWUFBVCxDQUFzQjNHLEdBQXRCLEVBQTJCO0FBQ3ZCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sRUFBUDs7QUFFVixXQUFPLE1BQ0hwUixPQUFPaUcsSUFBUCxDQUFZbUwsR0FBWixFQUFpQmhWLEdBQWpCLENBQXFCLFVBQVMyRyxHQUFULEVBQWM7QUFDL0IsZUFBT3NWLG1CQUFtQnRWLEdBQW5CLElBQTBCLEdBQTFCLEdBQ0hzVixtQkFBbUJqSCxJQUFJck8sR0FBSixDQUFuQixDQURKO0FBRUgsS0FIRCxFQUdHaU8sSUFISCxDQUdRLEdBSFIsQ0FESjtBQUtIOztBQUVELFNBQVNtSCxVQUFULENBQW9CL0csR0FBcEIsRUFBeUI7QUFDckIsV0FBT2dGLEtBQUtDLFNBQUwsQ0FBZWpGLEdBQWYsQ0FBUDtBQUNIOzs7Ozs7OztrQ0FqREs4QixPOztrQ0FxQ0c2RSxZOztrQ0FVQUksVTs7Ozs7Ozs7Ozs7O0FDL0NULHlDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZXBlbmRlbmNpZXMgc3VibW9kdWxlcyBpbXBvcnQgJy4vY29tcG9uZW50cy91dGlsL3V0aWwnIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydENoYXJ0L3J0Q2hhcnQnIGltcG9ydCAnLi9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkJyBpbXBvcnRcbi8vICcuL2NvbXBvbmVudHMvZ3ltTGlzdC9neW1MaXN0JyBpbXBvcnQgJy4vY29tcG9uZW50cy9tYWluL21haW4nIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydEd5bS9ydEd5bSdcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW4gZnJvbSAnY29tcG9uZW50cy9tYWluJ1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnc2VydmljZXMvZmV0Y2hlcidcbmltcG9ydCBtYWluUmVkdWNlciBmcm9tICdkYXRhL3JlZHVjZXJzJ1xuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyLCByb3V0ZXJNaWRkbGV3YXJlfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSgpXG5jb25zdCByb3V0ZU1pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgbWFpblJlZHVjZXIsIFxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCksIFxuICAgIGFwcGx5TWlkZGxld2FyZShyb3V0ZU1pZGRsZXdhcmUsIHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KGZldGNoZXIpKVxuICAgIClcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9kYXRhL3JlZHVjZXJzJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuL2RhdGEvcmVkdWNlcnMvaW5kZXgnKVxuICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXh0Um9vdFJlZHVjZXIpXG4gICAgfSlcbn1cblxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgICAgICAgICAgICAgPE1haW4vPlxuICAgICAgICAgICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2FwcC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IFJ0Rm9ybSB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdzZXJ2aWNlcy9mZXRjaGVyJ1xuaW1wb3J0IHBpLCB7IHNsZWVwIH0gZnJvbSAncnR1dGlsJ1xuXG5jbGFzcyBCYXNpY0luZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHsgIH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHVzZXI6IFByb3BUeXBlcy5vYmplY3Rcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Rm9ybVxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM9eyB0aGlzLmZpZWxkcygpIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXsgdGhpcy5wcm9wcy51c2VyIH1cbiAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9eyB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgb25TYXZlPXsgdGhpcy5vblNhdmUgfVxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nPXsgdGhpcy5zdGF0ZS5wZW5kaW5nIH0gLz5cblx0XHQpXG5cdH1cblxuXHRvblNhdmUgPSBkYXRhID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBlbmRpbmc6IHRydWVcblx0XHR9KVxuXG5cdFx0dGhpcy52YWx1ZXMgPSBwaS5leHBhbmRTaW1wbGVPYmplY3QoZGF0YSlcblxuXHRcdHJldHVybiBmZXRjaGVyLnVwZGF0ZSgndXNlcnMvY3VycmVudCcsIGRhdGEpXG4gICAgICAgICAgICAudGhlbihzbGVlcCgxMDAwKSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuc2F2ZVN1Y2Nlc3MoZGF0YSkpXG5cdH1cblxuXHRzYXZlU3VjY2VzcyA9IGRhdGEgPT4gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cGVuZGluZzogZmFsc2Vcblx0XHR9KVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblxuXHRmaWVsZHMgPSAoKSA9PiBbXG5cdFx0W1xuXHRcdFx0J0dlbmVyYWwnLFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ1VzZXJuYW1lJyxcblx0XHRcdFx0bmFtZTogJ3VzZXJuYW1lJyxcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZUVtcHR5XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ0UtbWFpbCcsXG5cdFx0XHRcdG5hbWU6ICdlbWFpbCcsXG5cdFx0XHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0XHRcdHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlRW1haWxcblx0XHRcdH1cblx0XHRdLFxuXHRcdFtcblx0XHRcdCdTZXR0aW5nJyxcblx0XHRcdHtcblx0XHRcdFx0bGFiZWw6ICdOaWNrbmFtZScsXG5cdFx0XHRcdG5hbWU6ICduaWNrbmFtZScsXG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dmFsaWRhdGU6IHRoaXMudmFsaWRhdGVFbXB0eVxuXHRcdFx0fV1cblx0XVxuXG5cdHZhbGlkYXRlRW1wdHkgPSB2YWx1ZSA9PiB2YWx1ZS5sZW5ndGggPiAwXG5cblx0dmFsaWRhdGVFbWFpbCA9IHZhbHVlID0+IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QodmFsdWUpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNJbmZvXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvY29tcG9uZW50cy9CYXNpY0luZm8uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBSdFN3YXRjaCwgU29ydGFibGVMaXN0IH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCBSdFBpZSBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvcnRQaWUnXG5pbXBvcnQgUnRTdGFjayBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjaydcblxuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdydGNvbmZpZydcblxuXG5jb25zdCBMaXN0SXRlbUNvbG9yID0gcHJvcHMgPT4gPGxpIHsuLi5wcm9wc30+PFJ0U3dhdGNoIGNvbG9yPXsgcHJvcHMuY29sb3IgfSAvPjwvbGk+XG5cblxuY29uc3QgTGlzdEl0ZW0gPSBwcm9wcyA9PiAoPGxpIHsuLi5wcm9wc30+e3Byb3BzLnZhbHVlfTwvbGk+KSAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5jb25zdCBhdmFpbGFibGUgPSBjb2xvcnMubWFwKGNvbG9yID0+IHtcblx0cmV0dXJuIHtcblx0XHRjb2xvclxuXHR9XG59KVxuXG5cbmNsYXNzIFRlYW1JbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7ICB9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHR0ZWFtOiBQcm9wVHlwZXMub2JqZWN0XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17IHRoaXMucHJvcHMudGVhbS5jb2xvcnMuc2xpY2UoMCwgNSkubWFwKGNvbG9yID0+IHsgcmV0dXJuIHsgY29sb3J9IH0pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBhdmFpbGFibGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXsgTGlzdEl0ZW1Db2xvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJhdG9yPXsoYSwgYikgPT4gIGEuY29sb3IuX2lkID09PSBiLmNvbG9yLl9pZH0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgICA8U29ydGFibGVMaXN0XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaXN0LXVuc3R5bGVkJ1xuICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RoaXMucHJvcHMudGVhbS5ncmFkZXMuYm91bGRlci5zbGljZSgwLCAyKX1cbiAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLnRlYW0uZ3JhZGVzLmJvdWxkZXJ9XG4gICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaXN0SXRlbX1cbiAgICAgICAgICAgICAgICAgICBjb21wYXJhdG9yPXsoYSwgYikgPT4gYS52YWx1ZSA9PT0gYi52YWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj48L2Rpdj5cbiAgICAgICAgICAgICAgPFJ0UGllIGRhdGE9e1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF19Lz5cbiAgICAgICAgICAgICAgPFJ0U3RhY2sgZGF0YT17W1xuXHR7XG5cdFx0dmFsdWU6IDE1XG5cdH0sIHtcblx0XHR2YWx1ZTogMTBcblx0fSwge1xuXHRcdHZhbHVlOiA1MFxuXHR9XX1cbiAgICAgICAgICAgICAgd2lkdGg9JzEwMHB4Jy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXHRcdClcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHRlYW06IHN0YXRlLnRlYW1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShUZWFtSW5mbylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvVGVhbUluZm8uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFRhYiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IExvYWRCYXIsIFJ0Q2FyZCwgTG9hZENvbnRhaW5lciwgVGFiU3dpdGNoZXIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCBCYXNpY0luZm8gZnJvbSAnLi9jb21wb25lbnRzL0Jhc2ljSW5mbydcbmltcG9ydCBUZWFtSW5mbyBmcm9tICcuL2NvbXBvbmVudHMvVGVhbUluZm8nXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ2RhdGEvYWN0aW9ucy91c2VyJ1xuXG5jb25zdCB0YWJzID0gWydCYXNpYyBJbmZvJywgJ1RlYW0gSW5mbyddXG5cbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdHBlbmRpbmc6IGZhbHNlLFxuXHRcdGFjdGl2ZTogJ0Jhc2ljIEluZm8nXG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGdldFVzZXI6IFBULmZ1bmMsXG5cdFx0dXNlcjogUFQub2JqZWN0XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLmdldFVzZXIoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHR0aGlzLnNldFN0YXRlKHtcblx0XHRsb2FkZWQ6IHRydWVcblx0fSlcbn0pXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXt0aGlzLnN0YXRlLmxvYWRlZH0+XG4gICAgICAgICAgICAgIDxMb2FkQmFyLz5cbiAgICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT1cIk15IEFjY291bnRcIj5cbiAgICAgICAgICAgICAgICA8VGFiU3dpdGNoZXIgdGFicz17dGFic30gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICB7cmVuZGVySWYodGhpcy5zdGF0ZS5hY3RpdmUgPT0gJ0Jhc2ljIEluZm8nKShcbiAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJCYXNpYyBJbmZvXCIgZXZlbnRLZXk9ezF9IHRhYkNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxCYXNpY0luZm8gdXNlcj17dGhpcy5wcm9wcy51c2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3JlbmRlcklmKHRoaXMuc3RhdGUuYWN0aXZlID09PSAnVGVhbSBJbmZvJykoXG4gICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiVGVhbSBJbmZvXCIgZXZlbnRLZXk9ezJ9IHRhYkNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxUZWFtSW5mby8+XG4gICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9SdENhcmQ+XG4gICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG5cdFx0KVxuXHR9XG5cblx0dG9nZ2xlID0gKGluZCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBpbmRcblx0XHR9KVxuXHR9XG5cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHR1c2VyOiBzdGF0ZS51c2VyXG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcblx0cmV0dXJuIHtcblx0XHRnZXRVc2VyOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyKCkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEFjY291bnQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWNjb3VudC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHN0eWxlcyA9IHByb3BzID0+ICh7XG5cdGRpc3BsYXk6IHByb3BzLmlubGluZT8gJ2lubGluZS1mbGV4JyA6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6IHByb3BzLmFyb3VuZD8gJ3NwYWNlLWFyb3VuZCcgOiAnc3BhY2UtYmV0d2VlbicsXG5cdG1hcmdpbjogJ2F1dG8nLFxuXHQuLi5wcm9wcy5zdHlsZVxufSlcblxuY29uc3QgZmxleFJvdyA9IHByb3BzID0+IChcbiAgICA8ZGl2IHN0eWxlPXsgc3R5bGVzKHByb3BzKSB9IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4pXG5cbmZsZXhSb3cucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxleFJvd1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9GbGV4Um93LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHtvbWl0fSBmcm9tICdyYW1kYSdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5cbmNvbnN0IEljb24gPSBwcm9wcyA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDggOFwiIHsuLi5vbWl0KFsnaWNvbicsICdjb2xvcicsICdhbHRDbGFzcycsICdjbGFzc05hbWUnXSwgcHJvcHMpfSBjbGFzc05hbWU9e2N4KHByb3BzLmFsdENsYXNzIHx8ICdpY29uJywgcHJvcHMuY2xhc3NOYW1lKX0+XG4gICAgICA8dXNlIHhsaW5rSHJlZj17JyMnICsgcHJvcHMuaWNvbn0gY2xhc3NOYW1lPXtwcm9wcy5jb2xvciB8fCAnaWNvbi1ibGFjayd9IC8+XG4gICAgPC9zdmc+XG4pXG5cbkljb24ucHJvcFR5cGVzID0ge1xuXHRpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRhbHRDbGFzczogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9JY29uLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jbGFzcyBJbnB1dEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHZhbGlkOiB0cnVlXG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHVwZGF0ZUZvcm06IFByb3BUeXBlcy5mdW5jXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgPSBlID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5maWVsZC52YWxpZGF0ZSkge1xuXHRcdFx0bGV0IHZhbGlkID0gdGhpcy5wcm9wcy5maWVsZC52YWxpZGF0ZShlLnRhcmdldC52YWx1ZSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR2YWxpZFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRvbkJsdXIgPSBlID0+IHtcblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0dmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuXHRcdFx0ZmllbGQ6IHRoaXMucHJvcHMuZmllbGQsXG5cdFx0XHR2YWxpZDogdGhpcy5zdGF0ZS52YWxpZFxuXHRcdH1cblx0XHR0aGlzLnByb3BzLnVwZGF0ZUZvcm0oZGF0YSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQge2ZpZWxkLCB2YWx1ZXN9ID0gdGhpcy5wcm9wc1xuXG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS52YWxpZCA/ICdmb3JtLWdyb3VwIHJvdycgOiAnZm9ybS1ncm91cCByb3cgaGFzLXdhcm5pbmcnIH0ga2V5PXsgZmllbGQubGFiZWwgfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbCBjb2wtbWQtMiBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIHsgZmllbGQubGFiZWwgfVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5lZGl0ID8gKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17IGZpZWxkLnR5cGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBmaWVsZC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyB2YWx1ZXNbZmllbGQubmFtZV0gfHwgZmllbGQubGFiZWwgfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1zdGF0aWMgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWVzW2ZpZWxkLm5hbWVdIHx8IGZpZWxkLmxhYmVsIH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcblx0fVxufVxuXG5JbnB1dEJveC5wcm9wVHlwZXMgPSB7XG5cdGZpZWxkOiBQcm9wVHlwZXMub2JqZWN0LFxuXHR2YWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cdGVkaXQ6IFByb3BUeXBlcy5ib29sXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IElucHV0Qm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0lucHV0Qm94LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgTG9hZEJhciA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuaW5saW5lPyAnbG9hZC1iYXIgbG9hZC1iYXItaW5saW5lJyA6ICdsb2FkLWJhcid9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtYmFyX19iYXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWJhcl9fYmFyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1iYXJfX2JhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5Mb2FkQmFyLnByb3BUeXBlcyA9IHtcblx0aW5saW5lOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQmFyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZSBmcm9tICdyZWFjdC1jc3MtdHJhbnNpdGlvbi1yZXBsYWNlJ1xuXG5cbmNsYXNzIExvYWRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGxvYWRlZDogUHJvcFR5cGVzLmJvb2xcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBjb250ZW50ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIHRyYW5zaXRpb25OYW1lPVwibG9hZF9jb250YWluZXJcIiB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9IHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezUwMH0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubG9hZGVkID8gY29udGVudFsxXSA6IGNvbnRlbnRbMF19XG4gICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2U+XG5cdFx0KVxuXHR9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuY29uc3QgUnRDYXJkID0gcHJvcHMgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInJ0LWNhcmRfX2NvbnRlbnRcIiBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgICAgICB7cmVuZGVySWYocHJvcHMudGl0bGUpKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJydC1jYXJkX19oZWFkZXIgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cblx0XHRcdDwvZGl2Pil9XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbilcblxuUnRDYXJkLnByb3BUeXBlcyA9IHtcblx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblx0c3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRDYXJkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRDYXJkLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBJbnB1dEJveCwgRmxleFJvdyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuXG5cbmNsYXNzIFJ0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHZhbGlkOiBuZXcgU2V0KClcblx0fVxuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0ZmllbGRzOiBbXSxcblx0XHR2YWx1ZXM6IHt9XG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGZpZWxkczogUFQuYXJyYXlPZihcbiAgICAgICAgICAgIFBULm9uZU9mVHlwZShbXG5cdFBULmFycmF5LFxuXHRQVC5zaGFwZSh7XG5cdFx0bmFtZTogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0dHlwZTogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0bGFiZWw6IFBULnN0cmluZyxcblx0XHRvbkJsdXI6IFBULmZ1bmMsXG5cdFx0b25DbGljazogUFQuZnVuYyxcblx0XHR2YWxpZGF0ZTogUFQuZnVuY1xuXHR9KVxuXVxuICAgICAgICAgICAgKSkuaXNSZXF1aXJlZCxcblx0XHR2YWx1ZXM6IFBULm9iamVjdCxcblx0XHRlZGl0YWJsZTogUFQuYm9vbCxcblx0XHRwZW5kaW5nOiBQVC5ib29sLFxuXHRcdG9uU2F2ZTogUFQuZnVuY1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy52YWx1ZXMpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCIgc3R5bGU9eyB7IG9wYWNpdHk6IHRoaXMucHJvcHMucGVuZGluZyA/IDAuNSA6IDEsIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuM3MgbGluZWFyJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfSB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8RmxleFJvdyBpbmxpbmU+XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMucHJvcHMuZWRpdGFibGUgJiYgIXRoaXMuc3RhdGUuZWRpdCkoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17IHRoaXMudG9nZ2xlRWRpdCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMucHJvcHMuZWRpdGFibGUgJiYgdGhpcy5zdGF0ZS5lZGl0KShcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZUVkaXQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMuc3RhdGUuZWRpdCkoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshIXRoaXMuc3RhdGUudmFsaWQuc2l6ZX0gY2xhc3NOYW1lPXtjeCgnYnRuJywgIXRoaXMuc3RhdGUudmFsaWQuc2l6ZT8gJ2J0bi1vdXRsaW5lLXByaW1hcnknOidkaXNhYmxlZCcsIHsnYnRuLW91dGxpbmUtcGVuZGluZyc6IHRoaXMucHJvcHMucGVuZGluZ30pfSBvbkNsaWNrPXsgdGhpcy5zYXZlIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7IHRoaXMubWFrZUZvcm0oKSB9XG4gICAgICAgICAgICAgIDwvZm9ybT5cblx0XHQpXG5cdH1cblxuXHR0b2dnbGVFZGl0ID0gZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZWRpdCA/IHRoaXMucHJvcHMudmFsdWVzIDogdGhpcy5zdGF0ZS5kYXRhKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZWRpdDogIXRoaXMuc3RhdGUuZWRpdCxcblx0XHRcdGRhdGFcblx0XHR9KVxuXHR9XG5cblx0c2F2ZSA9IGUgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGxldCByZXN1bHQgPSB0aGlzLnByb3BzLm9uU2F2ZSh0aGlzLnN0YXRlLmRhdGEpXG5cdFx0aWYgKHJlc3VsdC50aGVuKSB7XG5cdFx0XHRyZXN1bHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZWRpdDogZmFsc2UsXG5cdFx0XHRcdFx0ZGF0YTogZGF0YVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGVkaXQ6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiByZXN1bHRcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0bWFrZUZvcm0gPSBmaWVsZHMgPT4ge1xuXHRcdGZpZWxkcyA9IGZpZWxkcyB8fCB0aGlzLnByb3BzLmZpZWxkc1xuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZCwgaSkgPT4ge1xuXHRcdFx0aWYgKGZpZWxkIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0cmV0dXJuICg8ZGl2IGtleT17IGkgfSBzdHlsZT17IHsgcGFkZGluZzogJzMwcHggMCAwJyB9IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57IGZpZWxkWzBdIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5tYWtlRm9ybShmaWVsZC5zbGljZSgxKSwgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmVkaXQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGZpZWxkLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9eyBmaWVsZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9eyB0aGlzLnN0YXRlLmRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdD17IHRoaXMuc3RhdGUuZWRpdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXsgdGhpcy51cGRhdGVGb3JtIH0gLz5cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHR1cGRhdGVGb3JtID0gdXBkYXRlID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcblx0XHRcdGxldCBtb2RpZmllciA9IHtcblx0XHRcdFx0dmFsaWQ6IG5ldyBTZXQoc3RhdGUudmFsaWQpLFxuXHRcdFx0XHRkYXRhOiBPYmplY3QuYXNzaWduKHN0YXRlLmRhdGEsIHtbdXBkYXRlLmZpZWxkLm5hbWVdOiB1cGRhdGUudmFsdWV9KVxuXHRcdFx0fVxuXG5cdFx0XHRpZighdXBkYXRlLnZhbGlkKSB7XG5cdFx0XHRcdG1vZGlmaWVyLnZhbGlkLmFkZCh1cGRhdGUuZmllbGQubmFtZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1vZGlmaWVyLnZhbGlkLmRlbGV0ZSh1cGRhdGUuZmllbGQubmFtZSlcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1vZGlmaWVyXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRGb3JtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jb25zdCBSdExpc3QgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvX3BvZF9fbGlzdFwiPlxuICAgICAgICB7IHByb3BzLmxpc3RJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoPGRpdiBrZXk9e2l0ZW0uX2lkIHx8IGluZGV4fSBjbGFzc05hbWU9XCJcIj57aXRlbS52YWx1ZSB8fCBpdGVtfTwvZGl2PikpIH1cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUnRMaXN0XG5cblJ0TGlzdC5wcm9wVHlwZXMgPSB7XG5cdGxpc3RJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pKSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdExpc3QuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNvbnN0IFJ0Q2FyZCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9eydydC1wYW5lICcgKyAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKX0+XG4gICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSdENhcmRcblxuUnRDYXJkLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRQYW5lLmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBjb2xvciBmcm9tICdzZXJ2aWNlcy9jb2xvclNlcnZpY2UnXG5cbmNsYXNzIFJ0U3dhdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCBjID0gdGhpcy5wcm9wcy5jb2xvclxuXHRcdGlmICghdGhpcy5wcm9wcy5jb2xvci5jb2xvcikge1xuXHRcdFx0bGV0IHQgPSB0aGlzLnByb3BzLmNvbG9ycy5maWx0ZXIoY29sb3IgPT4gY29sb3IudmFsdWUgPT09IHRoaXMucHJvcHMuY29sb3IudG9Mb3dlckNhc2UoKSlbMF1cblx0XHRcdGMgPSB7XG5cdFx0XHRcdGNvbG9yOiB0PyB0LmNvbG9yIDogJyNGRkYnLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy5jb2xvci50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9jYWxTdHlsZSA9IHtcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYy5jb2xvciB8fCAnd2hpdGUnLFxuXHRcdFx0Y29sb3I6IGNvbG9yLnRleHRDb2xvcihjLmNvbG9yKSxcblx0XHRcdGJvcmRlclJhZGl1czogJzNweCcsXG5cdFx0XHRoZWlnaHQ6ICczMHB4J1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgbG9jYWxTdHlsZSwgdGhpcy5wcm9wcy5zdHlsZT8gdGhpcy5wcm9wcy5zdHlsZSA6IHt9KVxuXG5cdFx0cmV0dXJuICg8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17IHN0eWxlIH0+PHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLXNtLWRvd25cIj57IGMudmFsdWUgfHwgJycgfTwvc3Bhbj48L3NwYW4+KVxuXHR9XG5cbn1cblxuUnRTd2F0Y2gucHJvcFR5cGVzID0ge1xuXHRjb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXHRjb2xvcnM6IFByb3BUeXBlcy5hcnJheSxcblx0c3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRjb2xvcnM6IHN0YXRlLnRlYW0uY29sb3JzXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSkoUnRTd2F0Y2gpXG5cbmV4cG9ydCB7IFJ0U3dhdGNoIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRTd2F0Y2guanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnXG5cbmNsYXNzIFNvcnRhYmxlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGl0ZW1zOiBbXVxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0Y29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdGxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXHRcdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcblx0XHRjb21wYXJhdG9yOiBQcm9wVHlwZXMuZnVuY1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5MaXN0SXRlbSA9IHRoaXMucHJvcHMuY29tcG9uZW50XG5cdFx0dGhpcy5jb21wYXJhdG9yID0gdGhpcy5wcm9wcy5jb21wYXJhdG9yIHx8ICgoYSwgYikgPT4gYSA9PT0gYilcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogdGhpcy5wcm9wcy5saXN0XG5cdFx0fSlcblxuXHRcdGlmICh0aGlzLnByb3BzLm9wdGlvbnMpIHtcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBSLmRpZmZlcmVuY2VXaXRoKHRoaXMuY29tcGFyYXRvciwgdGhpcy5wcm9wcy5vcHRpb25zLCB0aGlzLnByb3BzLmxpc3QpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0b3B0aW9uc1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogbmV4dFByb3BzLmxpc3Rcblx0XHR9KVxuXHRcdGlmIChuZXh0UHJvcHMub3B0aW9ucyAmJiB0aGlzLnN0YXRlLmN1cnJlbnQgfHwgbmV4dFByb3BzLmxpc3QpIHtcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBSLmRpZmZlcmVuY2VXaXRoKHRoaXMuY29tcGFyYXRvciwgbmV4dFByb3BzLm9wdGlvbnMsIG5leHRQcm9wcy5saXN0KVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG9wdGlvbnNcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5jdXJyZW50KSByZXR1cm4gbnVsbFxuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfSBzdHlsZT17IHsgZm9udFNpemU6ICcxLjVlbScgfSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5jdXJyZW50Lm1hcCgoaXRlbSwgaW5kLCBhcnIpID0+IFxuXHRcdFx0XHRcdDx0aGlzLkxpc3RJdGVtIGRhdGEtc291cmNlPVwibGlzdFwiIGtleT17IGl0ZW0ua2V5IHx8IGluZCB9IHsuLi5pdGVtfSB7Li4udGhpcy5tYWtlSGFuZGxlcnMoaW5kLCBhcnIsICdsaXN0Jyl9Lz4pIH1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcHRpb25zID8gKFxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuY2xhc3NOYW1lIH0gc3R5bGU9eyB7IGZvbnRTaXplOiAnMS41ZW0nIH0gfT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcHRpb25zLm1hcCgoaXRlbSwgaW5kLCBhcnIpID0+IFxuXHRcdFx0XHRcdFx0PHRoaXMuTGlzdEl0ZW0gZGF0YS1zb3VyY2U9XCJvcHRpb25zXCIga2V5PXsgaXRlbS5rZXkgfHwgaW5kIH0gey4uLml0ZW19IHsuLi50aGlzLm1ha2VIYW5kbGVycyhpbmQsIGFyciwgJ29wdGlvbnMnKX0vPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Db2w+KSA6IG51bGwgfVxuICAgICAgICAgICAgPC9Sb3c+XG5cdFx0KVxuXHR9XG5cblx0bWFrZUhhbmRsZXJzID0gKGluZCwgYXJyLCBzb3VyY2UpID0+ICh7XG5cdFx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRcdG9uRHJhZ1N0YXJ0OiBlID0+IHtcblx0XHRcdGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2luZCcsIGluZClcblx0XHRcdGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NvdXJjZScsIHNvdXJjZSlcblx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcblx0XHR9LFxuXHRcdG9uRHJhZ092ZXI6IGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0fSxcblx0XHRvbkRyb3A6IGUgPT4ge1xuXHRcdFx0bGV0IHNvdXJjZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NvdXJjZScpXG5cdFx0XHRsZXQgZGVzdCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNvdXJjZVxuXG5cdFx0XHRpZiAoc291cmNlID09PSBkZXN0KSByZXR1cm5cblxuXHRcdFx0bGV0IG9sZEluZCA9ICtlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdpbmQnKVxuXHRcdFx0bGV0IG5ld0luZCA9IGluZFxuXG5cdFx0XHRsZXQgbGlzdHMgPSB7XG5cdFx0XHRcdGxpc3Q6IFsuLi50aGlzLnN0YXRlLmN1cnJlbnRdLFxuXHRcdFx0XHRvcHRpb25zOiBbLi4udGhpcy5zdGF0ZS5vcHRpb25zXVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3SW5kID09IGFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdG5ld0luZCA9IGFyci5sZW5ndGhcblx0XHRcdH1cblx0XHRcdGxldCBuZXdFbCA9IGxpc3RzW3NvdXJjZV0uc3BsaWNlKG9sZEluZCwgMSlbMF1cblx0XHRcdGxpc3RzW2Rlc3RdLnNwbGljZShuZXdJbmQsIDAsIG5ld0VsKVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Y3VycmVudDogbGlzdHMubGlzdCxcblx0XHRcdFx0b3B0aW9uczogbGlzdHMub3B0aW9uc1xuXHRcdFx0fSlcblx0XHR9XG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9Tb3J0YWJsZUxpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBTd2lwZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBvblRvdWNoU3RhcnQ9e3RoaXMudG91Y2hTdGFydH0gb25Ub3VjaEVuZD17dGhpcy50b3VjaEVuZH0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHR0b3VjaFN0YXJ0ID0gZSA9PiB7XG5cdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuXG5cdFx0dGhpcy5zdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFhcblx0fVxuXG5cdHRvdWNoRW5kID0gZSA9PiB7XG5cdFx0bGV0IGRpc3QgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnN0YXJ0WFxuXHRcdGlmIChkaXN0IDwgMTAwICYmIGRpc3QgPiAtMTAwKSByZXR1cm5cblxuXHRcdGlmICghdGhpcy5wcm9wcy5vbkxlZnQpIHJldHVybiB0aGlzLnByb3BzLm9uU3dpcGUoZGlzdClcblxuXHRcdGRpc3QgPiAwID8gdGhpcy5wcm9wcy5vblJpZ2h0KCkgOiB0aGlzLnByb3BzLm9uTGVmdCgpXG5cdH1cbn1cblxuU3dpcGVDb250YWluZXIucHJvcFR5cGVzID0ge1xuXHRvbkxlZnQ6IFByb3BUeXBlcy5mdW5jLFxuXHRvblJpZ2h0OiBQcm9wVHlwZXMuZnVuYyxcblx0b25Td2lwZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vU3dpcGVDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2LCBOYXZJdGVtLCBOYXZMaW5rIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZnVuY3Rpb24gaXNBY3RpdmUocHJvcHMsIHRhYikge1xuXHRyZXR1cm4gcHJvcHMuYWN0aXZlID09PSB0YWIgPyAnYWN0aXZlIHRleHQtY2FwaXRhbGl6ZScgOiAndGV4dC1jYXBpdGFsaXplJ1xufVxuXG5jb25zdCBTbGlkZXIgPSAoKSA9PiA8bGkgY2xhc3NOYW1lPSd0YWItc2xpZGVyJy8+XG5cbmNvbnN0IHRhYlN3aXRjaGVyID0gcHJvcHMgPT4gKFxuICAgIDxOYXYgdGFicz5cbiAgICAgIHsgcHJvcHMudGFicy5tYXAodGFiID0+IChcbiAgICAgICAgICAgIDxOYXZJdGVtIGtleT17dGFifT5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBpc0FjdGl2ZShwcm9wcywgdGFiKSB9IFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7cHJvcHMudG9nZ2xlKHRhYil9IH0+XG4gICAgICAgICAgICAgICAge3RhYn1cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgKSkgfVxuICAgICAgICA8U2xpZGVyIGtleT0nc2xpZGVyJy8+XG4gICAgPC9OYXY+XG4pXG5cbnRhYlN3aXRjaGVyLnByb3BUeXBlcyA9IHtcblx0dGFiczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cdGFjdGl2ZTogUHJvcFR5cGVzLnN0cmluZyxcblx0dG9nZ2xlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG50YWJTd2l0Y2hlci5kZWZhdWx0UHJvcHMgPSB7XG5cdHRhYnM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYlN3aXRjaGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1RhYlN3aXRjaGVyLmpzeCIsImltcG9ydCBGbGV4Um93IGZyb20gJy4vRmxleFJvdydcbmltcG9ydCBJbnB1dEJveCBmcm9tICcuL0lucHV0Qm94J1xuaW1wb3J0IExvYWRCYXIgZnJvbSAnLi9Mb2FkQmFyJ1xuaW1wb3J0IExvYWRDb250YWluZXIgZnJvbSAnLi9Mb2FkQ29udGFpbmVyJ1xuaW1wb3J0IFJ0Q2FyZCBmcm9tICcuL1J0Q2FyZCdcbmltcG9ydCBSdEZvcm0gZnJvbScuL1J0Rm9ybSdcbmltcG9ydCBSdExpc3QgZnJvbSAnLi9SdExpc3QnXG5pbXBvcnQgUnRTd2F0Y2ggZnJvbSAnLi9SdFN3YXRjaCdcbmltcG9ydCBTd2lwZUNvbnRhaW5lciBmcm9tICcuL1N3aXBlQ29udGFpbmVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IFJ0UGFuZSBmcm9tICcuL1J0UGFuZSdcbmltcG9ydCBTb3J0YWJsZUxpc3QgZnJvbSAnLi9Tb3J0YWJsZUxpc3QnXG5pbXBvcnQgVGFiU3dpdGNoZXIgZnJvbSAnLi9UYWJTd2l0Y2hlcidcblxuZXhwb3J0IHtcbiAgICAvLyBVSSBcbiAgICBSdENhcmQsXG4gICAgUnRQYW5lLFxuICAgIFJ0Rm9ybSxcbiAgICBSdExpc3QsXG4gICAgSWNvbixcbiAgICBTb3J0YWJsZUxpc3QsXG4gICAgVGFiU3dpdGNoZXIsXG5cbiAgICAvLyBMQVlPVVRcbiAgICBGbGV4Um93LFxuICAgIExvYWRDb250YWluZXIsXG4gICAgU3dpcGVDb250YWluZXIsXG5cbiAgICAvL0VMRU1FTlRTXG4gICAgSW5wdXRCb3gsXG4gICAgTG9hZEJhcixcbiAgICBSdFN3YXRjaFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUnRCYXIgZnJvbSAnY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyJ1xuXG5pbXBvcnQgeyBnZXRSb3V0ZXNCeUd5bSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IM+AIGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgR3ltSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGRhdGE6IHVuZGVmaW5lZFxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRneW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0Z2V0Um91dGVzOiBQcm9wVHlwZXMuZnVuYyxcblx0XHRkYXRhOiBQcm9wVHlwZXMuYXJyYXlcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuZ2V0Um91dGVzKHRoaXMucHJvcHMuZ3ltLl9pZClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneW0taXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3ltLXRpdGxlIHRleHQtYnJhbmQgdGV4dC11cHBlcmNhc2UgdGV4dC10aGluXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17ICcvZ3ltcy8nICsgdGhpcy5wcm9wcy5neW0udXJsIH0gY2xhc3NOYW1lPVwibGluay1wbGFpblwiPlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd5bS1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVxuICAgICAgICAgICAgICAgICAgICA/IDxSdEJhciBkYXRhPXsgdGhpcy5wcm9wcy5kYXRhIH0gY29sb3I9e3RoaXMucHJvcHMuZ3ltLmNvbG9yfS8+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlLCBvd25Qcm9wcykge1xuXHRsZXQgZ3ltUm91dGVzID0gc3RhdGUucm91dGVzLnRvQXJyYXkoKS5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBvd25Qcm9wcy5neW0uX2lkKVxuXG5cdHJldHVybiB7XG5cdFx0ZGF0YTogdHJhbnNmb3JtUm91dGVzKGd5bVJvdXRlcylcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuXHRyZXR1cm4ge1xuXHRcdGdldFJvdXRlczogaWQgPT4gZGlzcGF0Y2goZ2V0Um91dGVzQnlHeW0oaWQpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShHeW1JdGVtKVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzKSB7XG5cdGlmICghcm91dGVzLmxlbmd0aCkgcmV0dXJuIG51bGxcblx0bGV0IHNvcnRlZCA9IM+ALmJ1Y2tldHMocm91dGVzLm1hcChib3VsZGVyID0+IGJvdWxkZXIuZ3JhZGUpLCDPgC5yYW5nZSgxMykpXG5cdHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4gc29ydGVkW2tleV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9jb21wb25lbnRzL0d5bUl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgR3ltSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvR3ltSXRlbSdcbmltcG9ydCB7IExvYWRCYXIsIExvYWRDb250YWluZXIsIFJ0Q2FyZCB9ZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmNsYXNzIEd5bUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ3ltczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT1cIkd5bXNcIj5cbiAgICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXsgISF0aGlzLnByb3BzLmd5bXMubGVuZ3RoIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIwXCIgY2xhc3NOYW1lPVwiZ3ltLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMVwiIGNsYXNzTmFtZT1cImd5bS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZ3ltcy5tYXAoZ3ltID0+ICg8R3ltSXRlbSBrZXk9eyBneW0uX2lkIH0gZ3ltPXsgZ3ltIH0gY2xhc3NOYW1lPVwiZ3ltLWl0ZW1cIiAvPikpIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Mb2FkQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9SdENhcmQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcFByb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltcyxcbiAgICAgICAgZmV0Y2hpbmc6IHN0YXRlLmZldGNoaW5nXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShHeW1MaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBSb3V0ZVJvdyBmcm9tICcuL3JvdXRlUm93J1xuaW1wb3J0IFJvdXRlSGVhZGVyIGZyb20gJy4vcm91dGVIZWFkZXInXG5cbmltcG9ydCBwaSBmcm9tICdydHV0aWwnXG5cbmNsYXNzIFJvdXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHJhbmdlOiBuZXcgU2V0KClcblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0cm91dGVzOiBQcm9wVHlwZXMuYXJyYXksXG5cdFx0dGVhbTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRneW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0dXBkYXRlUm91dGU6IFByb3BUeXBlcy5mdW5jLFxuXHRcdHJlbW92ZVJvdXRlczogUHJvcFR5cGVzLmZ1bmMsXG5cdFx0d2FsbHM6IFByb3BUeXBlcy5hcnJheVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cm91dGVzOiBzb3J0T24oWy4uLnRoaXMucHJvcHMucm91dGVzXSwgJ3NldF9vbicpXG5cdFx0fSlcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dCkge1xuXHRcdGlmIChuZXh0LnJvdXRlcykge1xuXHRcdFx0bGV0IHJvdXRlcyA9IHNvcnRPbihuZXh0LnJvdXRlcywgdGhpcy5zdGF0ZS5zb3J0IHx8ICdzZXRfb24nKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJvdXRlczogdGhpcy5zdGF0ZS5kaXIgPT09ICdkZXNjJyA/IHJvdXRlcy5yZXZlcnNlKCkgOiByb3V0ZXNcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1zbSB0YWJsZS1tb2JpbGUgdGFibGUtZml4ZWQgdGFibGVfX3JvdXRlbGlzdCc+XG4gICAgICAgICAgICAgIDxSb3V0ZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU29ydD17IHRoaXMuaGFuZGxlU29ydCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0PXsgdGhpcy5zdGF0ZS5zb3J0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcj17IHRoaXMuc3RhdGUuZGlyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUhhbmRsZXI9eyB0aGlzLmRlbGV0ZUhhbmRsZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyB0aGlzLnN0YXRlLnJhbmdlLnNpemUgPiAwIH0gLz5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnJvdXRlcy5tYXAoKHJvdXRlLCBpbmQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZD17IGluZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgcm91dGUuX2lkICsgcm91dGUudXBkYXRlZF9hdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU9eyByb3V0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0SGFuZGxlcj17IHRoaXMuc2VsZWN0SGFuZGxlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyB0aGlzLnN0YXRlLnJhbmdlLmhhcyhpbmQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtPXsgdGhpcy5wcm9wcy50ZWFtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSb3V0ZT17IHRoaXMudXBkYXRlUm91dGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxzPXt0aGlzLnByb3BzLndhbGxzfSAvPlxuICAgICAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXHRcdClcblx0fVxuXG5cdHNlbGVjdEhhbmRsZXIgPSB7XG5cdFx0bW91c2VEb3duOiBlID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0XHRsZXQgbW9kaWZpZXIgPSBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5XG5cdFx0XHRsZXQgc2hpZnQgPSBlLnNoaWZ0S2V5XG5cdFx0XHRsZXQgaW5kID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG5cdFx0XHRsZXQgcmFuZ2VcblxuXHRcdFx0aWYgKG1vZGlmaWVyICYmIHRoaXMubGFzdFNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bGV0IGwgPSBNYXRoLm1pbih0aGlzLmxhc3RTZWxlY3RlZCwgaW5kKVxuXHRcdFx0XHRsZXQgaCA9IE1hdGgubWF4KHRoaXMubGFzdFNlbGVjdGVkLCBpbmQpXG5cdFx0XHRcdGxldCBzZWxlY3RlZCA9IHBpLnJhbmdlKGwsIGggKyAxKVxuXHRcdFx0XHR0aGlzLmxhc3RTZWxlY3RlZCA9IHVuZGVmaW5lZFxuXHRcdFx0XHRyYW5nZSA9IG5ldyBTZXQoWy4uLnRoaXMuc3RhdGUucmFuZ2UsIC4uLnNlbGVjdGVkXSlcblx0XHRcdH0gZWxzZSBpZiAobW9kaWZpZXIgJiYgIXRoaXMubGFzdFNlbGVjdGVkKSB7XG5cdFx0XHRcdHRoaXMubGFzdFNlbGVjdGVkID0gaW5kXG5cdFx0XHRcdHJhbmdlID0gdGhpcy5zdGF0ZS5yYW5nZS5hZGQoaW5kKVxuXHRcdFx0fSBlbHNlIGlmIChzaGlmdCAmJiB0aGlzLnN0YXRlLnJhbmdlLnNpemUpIHtcblx0XHRcdFx0bGV0IGwgPSBNYXRoLm1pbiguLi50aGlzLnN0YXRlLnJhbmdlKVxuXHRcdFx0XHRsZXQgaCA9IE1hdGgubWF4KC4uLnRoaXMuc3RhdGUucmFuZ2UpXG5cdFx0XHRcdGxldCBzZWxlY3RlZCA9IGluZCA8PSBoID8gcGkucmFuZ2UoaW5kLCBoICsgMSkgOiBwaS5yYW5nZShsLCBpbmQgKyAxKVxuXHRcdFx0XHR0aGlzLmxhc3RTZWxlY3RlZCA9IHVuZGVmaW5lZFxuXHRcdFx0XHRyYW5nZSA9IG5ldyBTZXQoWy4uLnRoaXMuc3RhdGUucmFuZ2UsIC4uLnNlbGVjdGVkXSlcblx0XHRcdH0gZWxzZSBpZihkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgMTAwMCl7XG5cdFx0XHRcdGxldCB0ZW1wID0gbmV3IFNldCh0aGlzLnN0YXRlLnJhbmdlKVxuXHRcdFx0XHR0aGlzLnN0YXRlLnJhbmdlLmhhcyhpbmQpPyB0ZW1wLmRlbGV0ZShpbmQpIDogdGVtcC5hZGQoaW5kKVxuXHRcdFx0XHRyYW5nZSA9IHRlbXAgIFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sYXN0U2VsZWN0ZWQgPSBpbmRcblx0XHRcdFx0cmFuZ2UgPSB0aGlzLnN0YXRlLnJhbmdlLmhhcyhpbmQpICYmIHRoaXMuc3RhdGUucmFuZ2Uuc2l6ZSA9PT0gMSA/IG5ldyBTZXQoKSA6IG5ldyBTZXQoW2luZF0pXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyYW5nZVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRkZWxldGVIYW5kbGVyID0gZXZlbnQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCBpbmRzID0gWy4uLm5ldyBTZXQodGhpcy5zdGF0ZS5yYW5nZSldXG5cdFx0Y29uc3QgaWRzID0gaW5kcy5tYXAoaW5kID0+IHRoaXMuc3RhdGUucm91dGVzW2luZF0uX2lkKVxuXG5cdFx0dGhpcy5wcm9wcy5yZW1vdmVSb3V0ZXMoaWRzKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cmFuZ2U6IG5ldyBTZXQoKVxuXHRcdH0pXG5cdH1cblxuXHRoYW5kbGVTb3J0ID0gcGFyYW0gPT4gKCkgPT4ge1xuXHRcdGxldCBuZXdSb3V0ZXMgPSBbLi4udGhpcy5zdGF0ZS5yb3V0ZXNdLFxuXHRcdFx0ZGlyXG5cdFx0aWYgKHRoaXMuc3RhdGUuc29ydCA9PT0gcGFyYW0pIHtcblx0XHRcdG5ld1JvdXRlcy5yZXZlcnNlKClcblx0XHRcdGRpciA9IHRoaXMuc3RhdGUuZGlyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNvcnRPbihuZXdSb3V0ZXMsIHBhcmFtKVxuXHRcdFx0ZGlyID0gJ2FzYydcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRpcixcblx0XHRcdHNvcnQ6IHBhcmFtLFxuXHRcdFx0cm91dGVzOiBuZXdSb3V0ZXNcblx0XHR9KVxuXHR9XG5cblx0dXBkYXRlUm91dGUgPSBuZXdSb3V0ZSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyb3V0ZXM6IHRoaXMuc3RhdGUucm91dGVzLm1hcChyb3V0ZSA9PiByb3V0ZS5faWQgPT09IG5ld1JvdXRlLl9pZCA/IG5ld1JvdXRlIDogcm91dGUpXG5cdFx0fSlcblx0XHR0aGlzLnByb3BzLnVwZGF0ZVJvdXRlKG5ld1JvdXRlKVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNvcnRPbihhcnIsIHByb3ApIHtcblx0aWYgKHByb3AgPT09ICdncmFkZScpIHtcblx0XHRyZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IGFbcHJvcF0gLSBiW3Byb3BdKVxuXHR9XG5cblx0aWYgKHByb3AgPT09ICdzZXRfb24nKSB7XG5cdFx0cmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBEYXRlLnBhcnNlKGEuc2V0X29uKSAtIERhdGUucGFyc2UoYi5zZXRfb24pKVxuXHR9XG5cdHJldHVybiBhcnIuc29ydChcbiAgICAgICAgZnVuY3Rpb24oYSwgYikge1xuXHRpZiAoYVtwcm9wXSA8IGJbcHJvcF0pIHtcblx0XHRyZXR1cm4gLTFcblx0fSBlbHNlIGlmIChhW3Byb3BdID4gYltwcm9wXSkge1xuXHRcdHJldHVybiAxXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIDBcblx0fVxufVxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVMaXN0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9Sb3V0ZUxpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUnRQYW5lIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmNsYXNzIFN0YXRzQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGF0YTogdGhpcy5tYWtlT3ZlcnZpZXcodGhpcy5wcm9wcy5kYXRhKVxuXHRcdH0pXG5cdH1cblx0XG5cdHJlbmRlcigpIHtcblx0XHRpZiAoIXRoaXMuc3RhdGUpIHJldHVybiBudWxsXG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxSdFBhbmU+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJ0LXBhbmVfX2hlYWRlclwiPk92ZXJ2aWV3PC9zcGFuPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ291bnQ6XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuZGF0YS5jb3VudCB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJvdXRlcyBOZWVkZWQ6XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBOL0FcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgT2xkZXN0IFJvdXRlOlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmRhdGEub2xkZXN0IH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvUnRQYW5lPlxuXHRcdClcblx0fVxuXG5cdG1ha2VPdmVydmlldyhkYXRhKSB7XG5cdFx0bGV0IG1pbiA9IEluZmluaXR5XG5cblx0XHRkYXRhLmZvckVhY2gocm91dGUgPT4ge1xuXHRcdFx0aWYgKG1pbiA+IERhdGUucGFyc2Uocm91dGUuc2V0X29uKSlcblx0XHRcdFx0bWluID0gcm91dGUuc2V0X29uXG5cdFx0fSlcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y291bnQ6IGRhdGEubGVuZ3RoLFxuXHRcdFx0b2xkZXN0OiBuZXcgRGF0ZShtaW4pLnRvTG9jYWxlRGF0ZVN0cmluZygpXG5cdFx0fVxuXHR9XG59XG5cblN0YXRzQ2FyZC5wcm9wVHlwZXMgPSB7XG5cdGRhdGE6IFByb3BUeXBlcy5hcnJheVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzQ2FyZFxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL1N0YXRzQ2FyZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IGFycm93cyA9IHsgXG5cdCdhc2MnOiAnXFx1MjVCMicsXG5cdCdkZXNjJzogJ1xcdTI1QkMnXG59XG5cblxuY29uc3QgUm91dGVIZWFkZXIgPSAocHJvcHMpID0+IHtcblx0ZnVuY3Rpb24gYXJyb3cocGFyYW0pIHtcblx0XHRyZXR1cm4gcHJvcHMuc29ydCA9PT0gcGFyYW0/IGFycm93c1twcm9wcy5kaXJdIDogbnVsbFxuXHR9IFxuXG5cdHJldHVybiAoXG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0YWJsZS1jZW50ZXJcIj5cbiAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnc2V0X29uJyl9PkRhdGUge2Fycm93KCdzZXRfb24nKX08L3RoPlxuICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdncmFkZScpfT5HcmFkZSB7YXJyb3coJ2dyYWRlJyl9PC90aD5cbiAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnY29sb3InKX0+Q29sb3Ige2Fycm93KCdjb2xvcicpfTwvdGg+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ3dhbGwnKX0+V2FsbCB7YXJyb3coJ3dhbGwnKX08L3RoPlxuICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdzZXR0ZXInKX0+U2V0dGVyIHthcnJvdygnc2V0dGVyJyl9PC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdoaWRkZW4tc20tZG93bic+RWRpdDwvdGg+XG4gICAgICAgICAgPHRoPntwcm9wcy5zZWxlY3RlZD8gPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtwcm9wcy5kZWxldGVIYW5kbGVyfT5SZW1vdmU8L2E+IDogJ1NlbGVjdCd9PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG5cdClcbn1cblxuUm91dGVIZWFkZXIucHJvcFR5cGVzID0ge1xuXHRoYW5kbGVTb3J0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cdGRlbGV0ZUhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuXHRkaXI6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlSGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgUnRTd2F0Y2gsIEZsZXhSb3csIEljb24gfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuaW1wb3J0IHtkYXRlTWF0aH0gZnJvbSAncnR1dGlsJ1xuaW1wb3J0IHtkaXNzb2MsIG9taXR9IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBUZElucHV0ID0gcHJvcHMgPT4gPHRkIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT48aW5wdXQgey4uLmRpc3NvYygnY2xhc3NOYW1lJywgcHJvcHMpfSBjbGFzc05hbWU9XCJpbnB1dC1zbSBmb3JtLWNvbnRyb2xcIi8+PC90ZD5cblxuY29uc3QgVGRTZWxlY3QgPSBwcm9wcyA9PiAoXG4gIDx0ZCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG4gICAgPHNlbGVjdCBjbGFzc05hbWU9XCJpbnB1dC1zbSBmb3JtLWNvbnRyb2xcIiB7Li4ub21pdChbJ2NsYXNzTmFtZScsICdjaGlsZHJlbiddLCBwcm9wcyl9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9zZWxlY3Q+XG4gIDwvdGQ+XG4pXG5cblxuY2xhc3MgUm91dGVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRlZGl0OiBmYWxzZVxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRpbmQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0cm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0c2VsZWN0SGFuZGxlcjogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cdFx0dGVhbTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHR1cGRhdGVSb3V0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cdFx0d2FsbHM6IFByb3BUeXBlcy5hcnJheVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmVkaXQgPyAoXG4gICAgICA8dHIgY2xhc3NOYW1lPXsndGFibGUtY2VudGVyICcgKyAodGhpcy5wcm9wcy5zZWxlY3RlZCA/ICdyb3V0ZS1yb3dfX3NlbGVjdGVkJyA6ICcnKX0+XG4gICAgICAgIDxUZElucHV0XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3ltLXJvd19fZGF0ZVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJzZXRfb25cIlxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZSh0aGlzLnByb3BzLnJvdXRlLnNldF9vbikudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IC8+XG4gICAgICAgIDxUZElucHV0XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cImdyYWRlXCJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZS5ncmFkZX0gLz5cbiAgICAgICAgPFRkSW5wdXRcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBuYW1lPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnJvdXRlLmNvbG9yfSAvPlxuICAgICAgICA8VGRTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3YWxsXCJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZS53YWxsfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy53YWxscy5tYXAod2FsbCA9PiBcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXt3YWxsfSB2YWx1ZT17d2FsbH0+XG4gICAgICAgICAgICAgICAgICAgIHt3YWxsfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UZFNlbGVjdD5cbiAgICAgICAgPFRkU2VsZWN0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2V0dGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZS5zZXR0ZXJ9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudGVhbS5tZW1iZXJzLm1hcChzZXR0ZXIgPT4gKFxuICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3NldHRlci5faWR9IHZhbHVlPXtzZXR0ZXIubmlja25hbWV9PlxuICAgICAgICAgICAgICAgICB7c2V0dGVyLm5pY2tuYW1lfVxuICAgICAgICAgICAgICAgPC9vcHRpb24+KSl9XG4gICAgICAgIDwvVGRTZWxlY3Q+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJneW0tcm93X19lZGl0IGhpZGRlbi1zbS1kb3duXCI+XG4gICAgICAgICAgPEZsZXhSb3cgaW5saW5lIGFyb3VuZCBzdHlsZT17eyB3aWR0aDogJzgwJScgfX0+XG4gICAgICAgICAgICA8SWNvbiBvbkNsaWNrPXt0aGlzLmNhbmNlbEVkaXR9IGljb249XCJ4XCIgLz5cbiAgICAgICAgICAgIDxJY29uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdH0gaWNvbj1cImNoZWNrXCIgLz5cbiAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaGlkZGVuLXNtXCJcbiAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHJvcHMuc2VsZWN0SGFuZGxlci5tb3VzZURvd259XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgIGRhdGEtaW5kZXg9e3RoaXMucHJvcHMuaW5kfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgICkgOiAoXG4gICAgICA8dHIgY2xhc3NOYW1lPXsndGFibGUtY2VudGVyICcgKyAodGhpcy5wcm9wcy5zZWxlY3RlZCA/ICdyb3V0ZS1yb3dfX3NlbGVjdGVkJyA6ICcnKX0gb25Eb3VibGVDbGljaz17dGhpcy50b2dnbGVFZGl0fT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImd5bS1yb3dfX2RhdGVcIiBhbHQ9eycgKCcgKyBkYXRlTWF0aC53ZWVrc09sZCh0aGlzLnByb3BzLnJvdXRlLnNldF9vbikgKyAnIHdlZWtzIG9sZCknfT5cbiAgICAgICAgICB7bmV3IERhdGUodGhpcy5wcm9wcy5yb3V0ZS5zZXRfb24pLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge3RoaXMucHJvcHMucm91dGUuZ3JhZGV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7PFJ0U3dhdGNoIGNsYXNzTmFtZT1cImxpc3RfX3N3YXRjaFwiIGNvbG9yPXt0aGlzLnByb3BzLnJvdXRlLmNvbG9yfSAvPn1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJvdXRlLndhbGx9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yb3V0ZS5zZXR0ZXJ9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J2hpZGRlbi1zbS1kb3duJz5cbiAgICAgICAgICA8SWNvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXR9IGljb249XCJwZW5jaWxcIiAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaGlkZGVuLXNtXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByb3BzLnNlbGVjdEhhbmRsZXIubW91c2VEb3dufVxuICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICBkYXRhLWluZGV4PXt0aGlzLnByb3BzLmluZH0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICApXG5cdH1cblxuXHRjYW5jZWxFZGl0ID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZWRpdDogIXRoaXMuc3RhdGUuZWRpdFxuXHRcdH0pXG5cdH1cblxuXHR0b2dnbGVFZGl0ID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLnN0YXRlLmVkaXQpIHtcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlUm91dGUodGhpcy5yb3V0ZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yb3V0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMucm91dGUpXG5cdFx0fVxuXG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGVkaXQ6ICF0aGlzLnN0YXRlLmVkaXRcblx0XHR9KVxuXHR9XG5cblx0ZGVsZXRlUm91dGUgPSAoKSA9PiB7XG5cdH1cblxuXHR1cGRhdGVGaWVsZCA9IGV2ZW50ID0+IHtcblx0XHRsZXQgZmllbGQgPSBldmVudC50YXJnZXQubmFtZVxuXHRcdHRoaXMucm91dGVbZmllbGRdID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cdH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlUm93XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZVJvdy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2UgZnJvbSAncmVhY3QtY3NzLXRyYW5zaXRpb24tcmVwbGFjZSdcblxuaW1wb3J0IFJ0QmlnQmFyIGZyb20gJ2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0JhcidcbmltcG9ydCB7IExvYWRDb250YWluZXIsIExvYWRCYXIsIFJ0Q2FyZCwgVGFiU3dpdGNoZXIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCB7Um93LCBDb2x9IGZyb20gJ3JlYWN0c3RyYXAnXG5cbmltcG9ydCBTdGF0c0NhcmQgZnJvbSAnLi9jb21wb25lbnRzL1N0YXRzQ2FyZCdcbmltcG9ydCBSb3V0ZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL1JvdXRlTGlzdCdcblxuaW1wb3J0IHsgZ2V0VGVhbSB9IGZyb20gJ2RhdGEvYWN0aW9ucy90ZWFtJ1xuaW1wb3J0IHsgZ2V0Um91dGVzQnlHeW0sIHB1dFJvdXRlLCByZW1vdmVSb3V0ZXMgfSBmcm9tICdkYXRhL2FjdGlvbnMvcm91dGUnXG5cbmltcG9ydCBwaSBmcm9tICdydHV0aWwnXG5cbmNsYXNzIEd5bU92ZXJ2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRhY3RpdmU6ICdyb3BlJ1xuXHR9XG5cblx0ZGVmYXVsdFByb3BzID0ge1xuXHRcdHR5cGVzOiBbXVxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdGd5bTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRtYXRjaDogUHJvcFR5cGVzLm9iamVjdCxcblx0XHR0ZWFtOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRcdHJvdXRlczogUHJvcFR5cGVzLmFycmF5LFxuXHRcdGdldFRlYW06IFByb3BUeXBlcy5mdW5jLFxuXHRcdGdldFJvdXRlczogUHJvcFR5cGVzLmZ1bmMsXG5cdFx0dXBkYXRlUm91dGU6IFByb3BUeXBlcy5mdW5jLFxuXHRcdHJlbW92ZVJvdXRlczogUHJvcFR5cGVzLmZ1bmNcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuZ2V0RGF0YUZvckd5bSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5uYW1lKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5neW0gJiYgbmV4dFByb3BzLmd5bSAmJiB0aGlzLnByb3BzLmd5bS5uYW1lICE9PSBuZXh0UHJvcHMuZ3ltLm5hbWUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRsb2FkZWQ6IGZhbHNlXG5cdFx0XHR9KVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmdldERhdGFGb3JHeW0obmV4dFByb3BzLmd5bS51cmwpLCAzMDApXG5cdFx0fVxuXG5cdFx0aWYgKG5leHRQcm9wcy5yb3V0ZXMgJiYgdGhpcy5wcm9wcy5neW0pIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRjb3VudDogdGhpcy51cGRhdGVSb3V0ZXMobmV4dFByb3BzLnJvdXRlcyksXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVJvdXRlcyA9IChuZXdSb3V0ZXMsIHR5cGUpID0+IHtcblx0XHR0eXBlID0gdHlwZT8gdHlwZS50b0xvd2VyQ2FzZSgpIDogdGhpcy5wcm9wcy5neW0udHlwZVswXVxuXHRcdGxldCBncmFkZXMgPSB0aGlzLnByb3BzLnRlYW0uZ3JhZGVzW3R5cGVdXG5cdFx0bGV0IHJvdXRlcyA9IG5ld1JvdXRlcy5maWx0ZXIocm91dGUgPT4gcm91dGUudHlwZSA9PT0gdHlwZSlcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJvdXRlczogcm91dGVzXG5cdFx0fSlcblx0XHRyZXR1cm4gdHJhbnNmb3JtUm91dGVzKHJvdXRlcywgZ3JhZGVzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmVycm9yKSByZXR1cm4gPFJlZGlyZWN0IHRvPScvJyAvPlxuXHRcdGlmICghdGhpcy5wcm9wcy5neW0pIHJldHVybiAoPFJ0Q2FyZCBzdHlsZT17eyBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJyB9fT4gPExvYWRCYXIvPjwvUnRDYXJkPilcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT17dGhpcy5zdGF0ZS5sb2FkZWQ/IHRoaXMucHJvcHMuZ3ltLm5hbWUgOiAnJ30ga2V5PXt0aGlzLnByb3BzLmd5bS5uYW1lfSBzdHlsZT17eyBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJyB9fT5cbiAgICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXt0aGlzLnN0YXRlLmxvYWRlZH0+XG4gICAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJTd2l0Y2hlciB0YWJzPXt0aGlzLnByb3BzLmd5bS50eXBlfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGVyYXRvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UnRCaWdCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3RoaXMucHJvcHMuZ3ltLmNvbG9yfT48L1J0QmlnQmFyPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI0XCIgY2xhc3NOYW1lPVwiY29sLW5wIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGF0c0NhcmQgZGF0YT17dGhpcy5zdGF0ZS5yb3V0ZXN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwZXJhdG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2UgdHJhbnNpdGlvbk5hbWU9XCJsb2FkX2NvbnRhaW5lclwiIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezUwMH0gdHJhbnNpdGlvbkxlYXZlVGltZW91dD17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnN0YXRlLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzPXt0aGlzLnN0YXRlLnJvdXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm91dGU9e3RoaXMucHJvcHMudXBkYXRlUm91dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJvdXRlcz17dGhpcy5wcm9wcy5yZW1vdmVSb3V0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW09e3RoaXMucHJvcHMudGVhbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbHM9e3RoaXMucHJvcHMuZ3ltLndhbGxzW3RoaXMuc3RhdGUuYWN0aXZlXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2U+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG4gICAgICAgICAgICA8L1J0Q2FyZD5cblxuXHRcdClcblx0fVxuXG5cdHRvZ2dsZSA9IChrZXkpID0+IHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGtleSkgcmV0dXJuXG5cdFx0bGV0IHJvdXRlcyA9IHRoaXMudXBkYXRlUm91dGVzKHRoaXMucHJvcHMucm91dGVzLCBrZXkpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmU6IGtleSxcblx0XHRcdGNvdW50OiByb3V0ZXNcblx0XHR9KVxuXHR9XG5cblx0Z2V0RGF0YUZvckd5bShuYW1lKSB7XG5cdFx0dGhpcy5wcm9wcy5nZXRUZWFtKClcbiAgICAgICAgICAgIC50aGVuKHRoaXMub25UZWFtKG5hbWUpKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5zZXRMb2FkZWQpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5zZXRFcnJvcilcblx0fVxuXG5cdG9uVGVhbSA9IChuYW1lKSA9PiAodGVhbSkgPT4ge1xuXHRcdGxldCBjdXJyZW50R3ltID0gdGVhbS5neW1zLmZpbHRlcihneW0gPT4gbmFtZSA9PT0gZ3ltLnVybClbMF1cblx0XHRpZiAoIWN1cnJlbnRHeW0pIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRlcnJvcjogdHJ1ZVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Um91dGVzKGN1cnJlbnRHeW0uX2lkKVxuXHRcdH1cblx0fVxuXG5cdHNldExvYWRlZCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtsb2FkZWQ6IHRydWV9KVxuXHR9XG5cblx0c2V0RXJyb3IgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlLCBvd25Qcm9wcykge1xuXHRsZXQgZ3ltID0gc3RhdGUuZ3ltcy5maWx0ZXIoZ3ltID0+IGd5bS51cmwgPT09IG93blByb3BzLm1hdGNoLnBhcmFtcy5uYW1lKVswXVxuXHRsZXQgcm91dGVzID0gc3RhdGUucm91dGVzLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5neW0gPT09IGd5bS5faWQpXG5cdGxldCBhcnIgPSByb3V0ZXMudG9BcnJheSgpXG5cdGFyci5mb3JFYWNoKChyb3V0ZSwgaW5kKSA9PiByb3V0ZS5pbmQgPSBpbmQpXG5cdHJldHVybiB7XG5cdFx0Z3ltOiBneW0sXG5cdFx0cm91dGVzOiBhcnIsXG5cdFx0dGVhbTogc3RhdGUudGVhbVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG5cdHJldHVybiB7XG5cdFx0Z2V0VGVhbTogKCkgPT4gZGlzcGF0Y2goZ2V0VGVhbSgpKSxcblx0XHRnZXRSb3V0ZXM6IChpZCkgPT4gZGlzcGF0Y2goZ2V0Um91dGVzQnlHeW0oaWQpKSxcblx0XHR1cGRhdGVSb3V0ZTogKHJvdXRlKSA9PiBkaXNwYXRjaChwdXRSb3V0ZShyb3V0ZSkpLFxuXHRcdHJlbW92ZVJvdXRlczogKGFycikgPT4gZGlzcGF0Y2gocmVtb3ZlUm91dGVzKGFycikpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEd5bU92ZXJ2aWV3KVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzLCBncmFkZXMpIHtcblx0aWYgKCFncmFkZXMgfHwgIXJvdXRlcykgcmV0dXJuIFtdXG5cdGxldCBzb3J0ZWQgPSBwaS5idWNrZXRzKHJvdXRlcy5tYXAocm91dGUgPT4gcm91dGUuZ3JhZGUpLCBwaS5yYW5nZShncmFkZXMubGVuZ3RoKSlcblx0cmV0dXJuIE9iamVjdC5rZXlzKHNvcnRlZCkubWFwKGtleSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdyYWRlOiBncmFkZXNba2V5XSAmJiBncmFkZXNba2V5XS52YWx1ZSxcblx0XHRcdGNvdW50OiBzb3J0ZWRba2V5XVxuXHRcdH1cblx0fSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgR3ltTGlzdCBmcm9tICdjb21wb25lbnRzL2d5bUxpc3QnXG5pbXBvcnQgR3ltT3ZlcnZpZXcgZnJvbSAnY29tcG9uZW50cy9neW1PdmVydmlldydcbmltcG9ydCBBY2NvdW50IGZyb20gJ2NvbXBvbmVudHMvYWNjb3VudCdcblxuaW1wb3J0IFJ0V2l6YXJkQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvcnRXaXphcmQnXG5cbmNvbnN0IFJ0Q29udGVudCA9IHByb3BzID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJydC1jb250ZW50XCI+XG4gICAgICAgIDxTd2l0Y2ggbG9jYXRpb249e3Byb3BzLmxvY2F0aW9ufT5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0d5bUxpc3R9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2d5bXMvOm5hbWUnIGNvbXBvbmVudD17R3ltT3ZlcnZpZXd9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2FkZCcgY29tcG9uZW50PXtSdFdpemFyZENvbnRhaW5lcn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWNjb3VudCcgY29tcG9uZW50PXtBY2NvdW50fSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICA8L2Rpdj4pXG5cblJ0Q29udGVudC5wcm9wVHlwZXMgPSB7XG5cdGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0Q29udGVudFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9SdENvbnRlbnQuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBDb2xsYXBzZSwgTmF2YmFyLCBOYXZiYXJUb2dnbGVyLCBOYXZiYXJCcmFuZCwgTmF2LCBOYXZEcm9wZG93biwgRHJvcGRvd25JdGVtLCBEcm9wZG93blRvZ2dsZSwgRHJvcGRvd25NZW51LCBOYXZMaW5rIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItYm9vdHN0cmFwJ1xuaW1wb3J0IHtOYXZMaW5rIGFzIE5hdlJvdXRlckxpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7c3RhdGVUb2dnbGV9IGZyb20gJ2RhdGEvdXRpbCdcblxuY2xhc3MgUnRIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRpc09wZW46IGZhbHNlLFxuXHRcdGRyb3Bkb3duSXNPcGVuOiBmYWxzZVxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRneW1zOiBQcm9wVHlwZXMuYXJyYXlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgPE5hdmJhciB0b2dnbGVhYmxlIGNvbG9yPVwicHJpbWFyeVwiIGludmVyc2U+XG4gICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvXCI+XG4gICAgICAgICAgICA8TmF2YmFyQnJhbmQ+XG4gICAgICAgICAgICAgIFJvdXRldHJhY2tlclxuICAgICAgICAgICAgPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPE5hdmJhclRvZ2dsZXIgcmlnaHQgb25DbGljaz17dGhpcy50b2dnbGV9Lz5cbiAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXsgdGhpcy5zdGF0ZS5pc09wZW4gfSBuYXZiYXI+XG4gICAgICAgICAgICA8TmF2IG5hdmJhcj5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiR3ltc1wiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCIgdG9nZ2xlPXt0aGlzLnRvZ2dsZURyb3Bkb3dufSBpc09wZW49e3RoaXMuc3RhdGUuZHJvcGRvd25Jc09wZW59PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBuYXY+XG4gICAgICAgICAgICAgICAgICBHeW1zXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IG9uQ2xpY2s9e3RoaXMudG9nZ2xlRHJvcGRvd259PlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmd5bXMgPyB0aGlzLnByb3BzLmd5bXMubWFwKGd5bSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxOYXZSb3V0ZXJMaW5rIGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbScga2V5PXsgZ3ltLl9pZCB9IHRvPXsgJy9neW1zLycgKyBneW0udXJsIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZ3ltLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Um91dGVyTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKSkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlci8+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICBTZXBhcmF0ZWQgbGlua1xuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9hZGRcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbms+XG4gICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8TmF2IG5hdmJhciBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2FjY291bnRcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbms+XG4gICAgICAgICAgICAgICAgTXkgQWNjb3VudFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8L05hdmJhcj5cblx0XHQpXG5cdH1cblxuXHR0b2dnbGUgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZVRvZ2dsZSgnaXNPcGVuJykpXG5cdH1cblxuXHR0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlVG9nZ2xlKCdkcm9wZG93bklzT3BlbicpKVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0Z3ltczogc3RhdGUuZ3ltc1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUpKFJ0SGVhZGVyKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9SdEhlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRUZWFtIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3RlYW0nXG5pbXBvcnQgeyBnZXRHeW1zIH0gZnJvbSAnZGF0YS9hY3Rpb25zL2d5bSdcblxuaW1wb3J0IFJ0SGVhZGVyIGZyb20gJy4vUnRIZWFkZXInXG5pbXBvcnQgUnRDb250ZW50IGZyb20gJy4vUnRDb250ZW50J1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7IFxuXHRcdHRoaXMucHJvcHMuZ2V0VGVhbSgpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UnRIZWFkZXIgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259Lz5cbiAgICAgICAgICAgICAgICA8UnRDb250ZW50IGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5NYWluLnByb3BUeXBlcyA9IHtcblx0Z2V0VGVhbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0Z2V0R3ltczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0bG9jYXRpb246IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHR0ZWFtOiBzdGF0ZS50ZWFtLFxuXHRcdGd5bXM6IHN0YXRlLmd5bXMsXG5cdFx0bG9jYXRpb246IHN0YXRlLnJvdXRlci5sb2NhdGlvblxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG5cdHJldHVybiB7XG5cdFx0Z2V0VGVhbTogKCkgPT4gZGlzcGF0Y2goZ2V0VGVhbSgpKSxcblx0XHRnZXRHeW1zOiB0ZWFtID0+IGRpc3BhdGNoKGdldEd5bXModGVhbSkpXG5cdH1cbn1cblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShNYWluKVxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRhaW5lclxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5jbGFzcyBSdFN0YWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bWFrZUNoYXJ0LmFwcGx5KHRoaXMpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JyB9fSByZWY9e2VsID0+IHRoaXMuZWwgPSBlbH0+PC9kaXY+XG5cdFx0KVxuXHR9XG5cblxufVxuXG5mdW5jdGlvbiBtYWtlQ2hhcnQoKSB7XG5cdGlmICghdGhpcy5wcm9wcy5kYXRhKSByZXR1cm5cblxuXHRjb25zdCB7ZGF0YSwgd2lkdGgsIGhlaWdodCA9ICcxMDAnfSA9IHRoaXMucHJvcHNcblxuXHRjb25zdCB0b3RhbCA9IGRhdGEucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnZhbHVlLCAwKVxuXG5cdGNvbnN0IGNoYXJ0ID0gZDNcblx0XHQuc2VsZWN0KHRoaXMuZWwpXG5cdFx0LmFwcGVuZCgnc3ZnJylcblx0XHQuYXR0cigndmlld0JveCcsICcwIDAgMTAwIDEwMCcpXG5cdFx0LmF0dHIoJ3dpZHRoJywgd2lkdGgpXG5cdFx0LmF0dHIoJ2hlaWdodCcsIGhlaWdodClcblxuXHRjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdC5kb21haW4oWzAsIHRvdGFsXSlcblx0XHQucmFuZ2UoWzAsIDEwMF0pXG5cblx0Y29uc3Qgc2VnbWVudHMgPSBjaGFydC5zZWxlY3RBbGwoJ2cnKVxuXHRcdC5kYXRhKGRhdGEpXG5cdFx0LmVudGVyKClcblx0XHQuYXBwZW5kKCdnJylcblx0XHQuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCkge1xuXHRcdFx0cmV0dXJuICd0cmFuc2xhdGUoJyArIHgoZCkgKyAnLCAwKSdcblx0XHR9KVxuXG5cdHNlZ21lbnRzLmFwcGVuZCgncmVjdCcpXG5cdFx0LmF0dHIoJ3dpZHRoJywgZCA9PiB4KGQudmFsdWUpKVxuXHRcdC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG5cdFx0LmF0dHIoJ3gnLCBkID0+IHgoZC52YWx1ZSkpXG5cdFx0LmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0U3RhY2tcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L1J0U3RhY2suanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBwYWxhdHRlIH0gZnJvbSAncnRjb25maWcnXG5cbmNsYXNzIFJ0QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bWFrZUNoYXJ0LmFwcGx5KHRoaXMpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgcmVmPXtlbCA9PiB0aGlzLmVsID0gZWx9PjwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdEJhclxuXG5mdW5jdGlvbiBtYWtlQ2hhcnQoKSB7XG5cdGlmICghdGhpcy5wcm9wcy5kYXRhKSByZXR1cm5cblxuXHRjb25zdCB7ZGF0YX0gPSB0aGlzLnByb3BzXG5cdGNvbnN0IHdpZHRoID0gOTRcblx0Y29uc3QgaGVpZ2h0ID0gOTRcblx0Y29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGRhdGEubGVuZ3RoXG5cblx0Y29uc3QgeSA9IGQzXG5cdFx0LnNjYWxlTGluZWFyKClcblx0XHQuZG9tYWluKFswLCBkMy5tYXgoZGF0YSldKVxuXHRcdC5yYW5nZShbMCwgaGVpZ2h0XSlcblxuXHRjb25zdCBjb2xvciA9IHBhbGF0dGVbdGhpcy5wcm9wcy5jb2xvcl0gfHwge1xuXHRcdHByaW1hcnk6ICdibGFjaycsXG5cdFx0c2Vjb25kYXJ5OiAnYmxhY2snXG5cdH1cblxuXHRjb25zdCBjb2xvclNjYWxlID0gdGhpcy5wcm9wcy5jb2xvciA/XG5cdFx0KFxuXHRcdGQzLnNjYWxlTGluZWFyKGQzLmludGVycG9sYXRlSGNsKVxuXHRcdFx0LmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXHRcdFx0LnJhbmdlKFtjb2xvci5wcmltYXJ5LCBjb2xvci5zZWNvbmRhcnldKVxuXHRcdCkgOiAoXG5cdFx0ZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdylcblx0XHRcdC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcblx0XHQpXG5cblx0Y29uc3QgY2hhcnQgPSBkM1xuXHRcdC5zZWxlY3QodGhpcy5lbClcblx0XHQuYXBwZW5kKCdzdmcnKVxuXHRcdC5hdHRyKCd2aWV3Qm94JywgJy0zIC0zIDEwMCAxMDAnKVxuXHRcdC5hdHRyKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWluIG1lZXQnKVxuXHRcdC5jbGFzc2VkKCd3MTAwJywgdHJ1ZSlcblxuXHRjb25zdCBiYXIgPSBjaGFydFxuXHRcdC5zZWxlY3RBbGwoJ2cnKVxuXHRcdC5kYXRhKGRhdGEpXG5cdFx0LmVudGVyKClcblx0XHQuYXBwZW5kKCdnJylcblx0XHQuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+ICd0cmFuc2xhdGUoJyArIGkgKiBiYXJXaWR0aCArICcsIDApJylcblxuXHRiYXIuYXBwZW5kKCdyZWN0Jylcblx0XHQuY2xhc3NlZCgncnQtYmFyJywgdHJ1ZSlcblx0XHQuYXR0cignd2lkdGgnLCBiYXJXaWR0aCAtIDEpXG5cdFx0LmF0dHIoJ3J4JywgMSlcblx0XHQuYXR0cigncnknLCAxKVxuXHRcdC5hdHRyKCdoZWlnaHQnLCAwKVxuXHRcdC5hdHRyKCdvcGFjaXR5JywgZCA9PiArZCA/IDEgOiAwLjQpXG5cdFx0LmF0dHIoJ3knLCBoZWlnaHQpXG5cdFx0LmF0dHIoJ2ZpbGwnLCAoZCwgaSkgPT4gY29sb3JTY2FsZShpKSlcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmRlbGF5KCgpID0+IDQwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDApXG5cdFx0LmR1cmF0aW9uKDMwMClcblx0XHQuZWFzZShkMy5lYXNlRXhwSW4pXG5cdFx0LmF0dHIoJ3knLCBkID0+IGhlaWdodCAtIHkoZCkpXG5cdFx0LmF0dHIoJ2hlaWdodCcsIGQgPT4geShkKSlcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvcnRCYXIuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCBkM3RpcCBmcm9tICdkMy10aXAnXG5pbXBvcnQgeyBwYWxhdHRlIH0gZnJvbSAncnRjb25maWcnXG5kMy50aXAgPSBkM3RpcFxuXG5jbGFzcyBSdEJpZ0JhciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0ZGF0YTogUHJvcFR5cGVzLmFycmF5LFxuXHRcdGdvYWw6IFByb3BUeXBlcy5hcnJheSxcblx0XHR0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmNoYXJ0ID0gZDMuc2VsZWN0KHRoaXMuZWwpXG5cdFx0dGhpcy5tYWtlQ2hhcnQoKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRpZiAobmV4dFByb3BzLnR5cGUgIT09IHRoaXMucHJvcHMudHlwZSkge1xuXHRcdFx0dGhpcy5jaGFydC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKVxuXHRcdFx0dGhpcy5tYWtlQ2hhcnQobmV4dFByb3BzLmRhdGEpXG5cdFx0fVxuXHRcdGlmIChuZXh0UHJvcHMuZGF0YSkge1xuXHRcdFx0dGhpcy51cGRhdGVDaGFydChuZXh0UHJvcHMuZGF0YSlcblx0XHR9XG5cdFx0aWYgKG5leHRQcm9wcy5jb2xvcikge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCItNSAtNSA1MDAgMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pbiBtZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIncxMDAgY2hhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB0aGlzLmVsID0gZWx9PlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0dXBkYXRlQ2hhcnQgPSBkYXRhID0+IHtcblx0XHR2YXIgc3ZnID0gZDMuc2VsZWN0KHRoaXMuZWwpXG5cblx0XHQvLyBjYWxjdWxhdGUgbmV3IGhlaWdodFxuXHRcdHRoaXMueSA9IGQzXG5cdFx0XHQuc2NhbGVMaW5lYXIoKVxuXHRcdFx0LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGQgPT4gZC5jb3VudCldKVxuXHRcdFx0LnJhbmdlKFswLCB0aGlzLmhlaWdodF0pXG5cblx0XHQvLyBNYWtlIHRoZSBjaGFuZ2VzXG5cdFx0c3ZnLnNlbGVjdEFsbCgnLnJ0LWJhcicpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LnRyYW5zaXRpb24oKSAvLyBjaGFuZ2UgdGhlIGxpbmVcblx0XHRcdC5kdXJhdGlvbig3NTApXG5cdFx0XHQuYXR0cigneScsIGQgPT4gdGhpcy5oZWlnaHQgLSB0aGlzLnkoZC5jb3VudCkpXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgZCA9PiB0aGlzLnkoZC5jb3VudCkgKyA2KVxuXG5cdFx0c3ZnLnNlbGVjdEFsbCgnLnJ0LW1hcmtlcicpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LnRleHQoZCA9PiBkLmdyYWRlKVxuXHR9XG5cblx0bWFrZUNoYXJ0ID0gZGF0YSA9PiB7XG5cdFx0aWYgKCF0aGlzLnByb3BzLmRhdGEpXG5cdFx0XHRyZXR1cm5cblx0XHRkYXRhID0gZGF0YSB8fCB0aGlzLnByb3BzLmRhdGFcblxuXHRcdHRoaXMud2lkdGggPSA0OTBcblx0XHR0aGlzLmhlaWdodCA9IDI4NVxuXG5cdFx0Y29uc3QgY29sb3IgPSBwYWxhdHRlW3RoaXMucHJvcHMuY29sb3JdIHx8IHtcblx0XHRcdHByaW1hcnk6ICdibGFjaycsXG5cdFx0XHRzZWNvbmRhcnk6ICdibGFjaydcblx0XHR9XG5cdFx0Y29uc3QgY29sb3JTY2FsZSA9IHRoaXMucHJvcHMuY29sb3IgP1xuXHRcdFx0KFxuXHRcdFx0ZDMuc2NhbGVMaW5lYXIoZDMuaW50ZXJwb2xhdGVIY2wpXG5cdFx0XHRcdC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcblx0XHRcdFx0LnJhbmdlKFtjb2xvci5wcmltYXJ5LCBjb2xvci5zZWNvbmRhcnldKVxuXHRcdFx0KSA6IChcblx0XHRcdGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpXG5cdFx0XHRcdC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcblx0XHRcdClcblxuXHRcdGNvbnN0IGJhcldpZHRoID0gdGhpcy53aWR0aCAvIGRhdGEubGVuZ3RoXG5cblx0XHR0aGlzLnkgPSBkM1xuXHRcdFx0LnNjYWxlTGluZWFyKClcblx0XHRcdC5kb21haW4oWzAsIGQzLm1heChkYXRhLCBkID0+IGQuY291bnQpXSlcblx0XHRcdC5yYW5nZShbMCwgdGhpcy5oZWlnaHRdKVxuXG5cdFx0Y29uc3QgZm9udFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdFx0LmRvbWFpbihbMzIwLCA1MDBdKSAvLyBleHBlY3RlZCBsaW1pdHMgb2YgU1ZHIHdpZHRoXG5cdFx0XHQucmFuZ2UoWzMwLCAxNV0pXG5cdFx0XHQuY2xhbXAodHJ1ZSlcblxuXHRcdGNvbnN0IGJhciA9IHRoaXMuY2hhcnRcblx0XHRcdC5zZWxlY3RBbGwoJ2cnKVxuXHRcdFx0LmRhdGEoZGF0YSlcblx0XHRcdC5lbnRlcigpXG5cdFx0XHQuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdiYXItZ3JvdXAnKVxuXHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiAndHJhbnNsYXRlKCcgKyBpICogYmFyV2lkdGggKyAnLCAwKScpXG5cblx0XHR2YXIgdGlwID0gZDMudGlwKClcblx0XHRcdC5hdHRyKCdjbGFzcycsICdkMy10aXAnKVxuXHRcdFx0Lm9mZnNldChbLTEwLCAwXSlcblx0XHRcdC5odG1sKGQgPT4gYDxzdHJvbmc+JHtkLmdyYWRlfTo8L3N0cm9uZz4gPHNwYW4gc3R5bGU9J2NvbG9yOiNmZjAwNDQnPiR7ZC5jb3VudH08L3NwYW4+YClcblxuXHRcdHRoaXMuY2hhcnQuY2FsbCh0aXApXG5cblx0XHRiYXIuYXBwZW5kKCdyZWN0Jylcblx0XHRcdC5jbGFzc2VkKCdydC1iYXInLCB0cnVlKVxuXHRcdFx0LmF0dHIoJ3dpZHRoJywgYmFyV2lkdGggLSA1KVxuXHRcdFx0LmF0dHIoJ3J4JywgMylcblx0XHRcdC5hdHRyKCdyeScsIDMpXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgNilcblx0XHRcdC5hdHRyKCdvcGFjaXR5JywgZCA9PiArZC5jb3VudCA/IDEgOiAwLjQpXG5cdFx0XHQuYXR0cigneScsIHRoaXMuaGVpZ2h0KVxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCAoZCwgaSkgPT4gY29sb3JTY2FsZShpKSlcblx0XHRcdC5vbignbW91c2VvdmVyJywgdGlwLnNob3cpXG5cdFx0XHQub24oJ21vdXNlb3V0JywgdGlwLmhpZGUpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZGVsYXkoKCkgPT4gNDAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMClcblx0XHRcdC5kdXJhdGlvbigzMDApXG5cdFx0XHQuZWFzZShkMy5lYXNlRXhwSW4pXG5cdFx0XHQuYXR0cigneScsIGQgPT4gdGhpcy5oZWlnaHQgLSB0aGlzLnkoZC5jb3VudCkpXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgZCA9PiB0aGlzLnkoZC5jb3VudCkgKyA2KVxuXG5cdFx0YmFyLmFwcGVuZCgndGV4dCcpXG5cdFx0XHQuY2xhc3NlZCgncnQtbWFya2VyJywgdHJ1ZSlcblx0XHRcdC5hdHRyKCd5JywgYmFyV2lkdGggLyAyICsgMylcblx0XHRcdC5hdHRyKCd4JywgLTI4MClcblx0XHRcdC5hdHRyKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG5cdFx0XHQudGV4dChkID0+IGQuZ3JhZGUpXG5cdFx0XHQuYXR0cignZm9udC1zaXplJywgJzE0cHgnKVxuXHRcdFx0LmF0dHIoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDUwMClcblx0XHRcdC5hdHRyKCdvcGFjaXR5JywgMSlcblxuXHRcdGNvbnN0IHJlc2l6ZWQgPSAoKSA9PiB7XG5cdFx0XHR2YXIgc2NhbGUgPSBmb250U2NhbGUodGhpcy5jaGFydC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpXG5cdFx0XHR2YXIgdGV4dCA9IGQzLnNlbGVjdEFsbCgndGV4dCcpXG5cdFx0XHR0ZXh0LmF0dHIoJ2ZvbnQtc2l6ZScsIHNjYWxlICsgJ3B4Jylcblx0XHRcdGlmIChzY2FsZSA+IDE4KSB7XG5cdFx0XHRcdHRleHQuYXR0cignb3BhY2l0eScsIDApXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZXh0LmF0dHIoJ29wYWNpdHknLCAxKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJlc2l6ZWQoKVxuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZWRcblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0QmlnQmFyXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvcnRCaWdCYXIuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cbmNsYXNzIFJ0UGllIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bWFrZUNoYXJ0LmFwcGx5KHRoaXMpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JyB9fSByZWY9e2VsID0+IHRoaXMuZWwgPSBlbH0+PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0UGllXG5cbmZ1bmN0aW9uIG1ha2VDaGFydCgpIHtcblx0aWYgKCF0aGlzLnByb3BzLmRhdGEpXG5cdFx0cmV0dXJuXG5cdGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGFcblxuXHRjb25zdCB3aWR0aCA9IDk0XG5cdGNvbnN0IGhlaWdodCA9IDk0XG5cblx0Y29uc3QgY2hhcnQgPSBkM1xuXHRcdC5zZWxlY3QodGhpcy5lbClcblx0XHQuYXBwZW5kKCdzdmcnKVxuXHRcdC5hdHRyKCd2aWV3Qm94JywgJy0zIC0zIDEwMCAxMDAnKVxuXHRcdC5hdHRyKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWluIG1lZXQnKVxuXHRcdC5jbGFzc2VkKCd3MTAwJywgdHJ1ZSlcblxuXG5cdHZhciByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIsXG5cdFx0ZyA9IGNoYXJ0LmFwcGVuZCgnZycpLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHdpZHRoIC8gMiArICcsJyArIGhlaWdodCAvIDIgKyAnKScpXG5cblxuXHR2YXIgcGllID0gZDMucGllKClcblx0XHQuc29ydChudWxsKVxuXHRcdC52YWx1ZShkID0+IGQpXG5cblx0Y29uc3QgcmFpbmJvdyA9IGQzXG5cdFx0LnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpXG5cdFx0LmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXG5cdHZhciBwYXRoID0gZDMuYXJjKClcblx0XHQub3V0ZXJSYWRpdXMocmFkaXVzIC0gMTApXG5cdFx0LmlubmVyUmFkaXVzKDMwKVxuXG5cdHZhciBob3ZlclBhdGggPSBkMy5hcmMoKVxuXHRcdC5vdXRlclJhZGl1cyhyYWRpdXMgLSA4KVxuXHRcdC5pbm5lclJhZGl1cygzMClcblxuXHR2YXIgbGFiZWwgPSBkMy5hcmMoKVxuXHRcdC5vdXRlclJhZGl1cyhyYWRpdXMgLSA0MClcblx0XHQuaW5uZXJSYWRpdXMocmFkaXVzIC0gNDApXG5cblxuXHR2YXIgYXJjID0gZy5zZWxlY3RBbGwoJy5hcmMnKVxuXHRcdC5kYXRhKHBpZShkYXRhKSlcblx0XHQuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuXHRcdC5hdHRyKCdjbGFzcycsICdhcmMnKVxuXG5cdGFyYy5hcHBlbmQoJ3BhdGgnKVxuXHRcdC5hdHRyKCdkJywgcGF0aClcblx0XHQuYXR0cignZmlsbCcsIGQgPT4gcmFpbmJvdyhkLmRhdGEpKVxuXHRcdC5vbignbW91c2VvdmVyJywgKCkgPT4gZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2QnLCBob3ZlclBhdGgpKVxuXHRcdC5vbignbW91c2VvdXQnLCAoKSA9PiBkMy5zZWxlY3QodGhpcykuYXR0cignZCcsIHBhdGgpKVxuXG5cdGFyYy5hcHBlbmQoJ3RleHQnKVxuXHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+ICd0cmFuc2xhdGUoJyArIGxhYmVsLmNlbnRyb2lkKGQpICsgJyknKVxuXHRcdC5hdHRyKCdkeScsICcwLjM1ZW0nKVxuXHRcdC50ZXh0KGQgPT4gZC5kYXRhLmFnZSlcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IFd6Q29udGFpbmVyID0gcHJvcHMgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3otYmlnLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXdpbmdcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otaW5uZXJcIiBzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsocHJvcHMuc3RlcCkgKiAtMTYuNn0lKWB9fT5cbiAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwgZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXdpbmdcIj4gPC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cbld6Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcblx0c3RlcDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBXekNvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvV3pDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFd6TGlzdEl0ZW0gZnJvbSAnLi93ekxpc3RJdGVtJ1xuaW1wb3J0IFd6SXRlbSBmcm9tICcuL3d6SXRlbSdcblxuY29uc3QgV3pHcmlkID0gcHJvcHMgPT4ge1xuXHRjb25zdCBFbCA9IHByb3BzLmxpc3QgPyBXekxpc3RJdGVtIDogV3pJdGVtXG5cblx0Y29uc3QgaXNTZWxlY3RlZCA9IGl0ZW0gPT4ge1xuXHRcdGlmKHByb3BzLnNlbGVjdG9yID09PSAndGFncycpIHJldHVybiBwcm9wcy5yb3V0ZS50YWdzLmluZGV4T2YoaXRlbS52YWx1ZSkgPiAtMVxuXHRcdHJldHVybiAgcHJvcHMucm91dGVbcHJvcHMuc2VsZWN0b3JdID09PSBpdGVtIFxuXHR9XG5cblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInd6LWdyaWRcIj5cbiAgICAgICAgICAgICAgeyBwcm9wcy5pdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxFbCBrZXk9eyBpdGVtLl9pZCB8fCBpdGVtfSBpdGVtPXsgaXRlbSB9IHR5cGU9eyBwcm9wcy5zZWxlY3RvciB9IHVwZGF0ZT17IHByb3BzLnVwZGF0ZSB9IHNlbGVjdGVkPXtpc1NlbGVjdGVkKGl0ZW0pfSAvPlxuICAgICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXHQpXG59XG5cblxuXG5XekdyaWQucHJvcFR5cGVzID0ge1xuXHRpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuXHRzZWxlY3RvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0cm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG5cdGxpc3Q6IFByb3BUeXBlcy5vbmVPZihbdW5kZWZpbmVkLCB0cnVlXSksXG5cdHRhZ3M6IFByb3BUeXBlcy5vbmVPZihbdW5kZWZpbmVkLCB0cnVlXSksXG5cdGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR1cGRhdGU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6R3JpZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvV3pHcmlkLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7RmxleFJvdywgUnRTd2F0Y2h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgcG9zdFJvdXRlIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3JvdXRlJ1xuXG5pbXBvcnQge3NsZWVwLCByZW5kZXJJZn0gZnJvbSAncnR1dGlsJ1xuXG5cbmNsYXNzIFd6UHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge31cblxuXHRyZW5kZXIoKSB7XG5cdFx0dGhpcy50cmFuc2Zvcm1lZFJvdXRlID0gdHJhbnNmb3JtUm91dGUodGhpcy5wcm9wcy5yb3V0ZSlcblx0XHRpZiAodGhpcy50cmFuc2Zvcm1lZFJvdXRlKSB7XG5cdFx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnRyYW5zZm9ybWVkUm91dGU/IChcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3ei1saXN0IHAxMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFR5cGU6IHt0aGlzLnByb3BzLnJvdXRlLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3ei1saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ29sb3I6IFxuICAgICAgICAgICAgICAgICAgICAgIDxSdFN3YXRjaCBjb2xvcj17IHRoaXMucHJvcHMucm91dGUuY29sb3IgfHwgZmFsc2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEdyYWRlOiB7dGhpcy5wcm9wcy5yb3V0ZS5ncmFkZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBHeW06IHt0aGlzLnByb3BzLnJvdXRlLmd5bS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFdhbGw6IHt0aGlzLnByb3BzLnJvdXRlLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRhZ3M6IHt0aGlzLnByb3BzLnJvdXRlLnRhZ3Muam9pbignLCAnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPEZsZXhSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuZWRpdH0+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2J0biBidG4tb3V0bGluZS1wcmltYXJ5JyArIHJlbmRlcklmKHRoaXMuc3RhdGUucGVuZGluZykoJyBidG4tb3V0bGluZS1wZW5kaW5nJyl9IG9uQ2xpY2s9e3RoaXMucG9zdFJvdXRlfT5BZGQgUm91dGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdFx0fVxuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRwb3N0Um91dGUgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cGVuZGluZzogdHJ1ZX0pXG5cdFx0dGhpcy5wcm9wcy5wb3N0Um91dGUodGhpcy50cmFuc2Zvcm1lZFJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oc2xlZXAoMTAwMCkpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdHRoaXMucHJvcHMucmVzZXQoKVxuXHR0aGlzLnNldFN0YXRlKHtcblx0XHRhZGRlZDogdHJ1ZSxcblx0XHRwZW5kaW5nOiBmYWxzZVxuXHR9KVxufSlcblx0fVxuXG5cdGVkaXQgPSAoKSA9PiB7XG5cdFx0dGhpcy5wcm9wcy5tb3ZlKC0xKVxuXHR9XG59XG5cbld6UHJldmlldy5wcm9wVHlwZXMgPSB7XG5cdHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRncmFkZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cdHJlc2V0OiBQcm9wVHlwZXMuZnVuYyxcblx0bW92ZTogUHJvcFR5cGVzLmZ1bmMsXG5cdHBvc3RSb3V0ZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGUob2JqKSB7XG5cdGlmIChvYmouZ3ltICYmIG9iai5ncmFkZSAmJiBvYmouY29sb3IgJiYgb2JqLnRhZ3MgJiYgb2JqLmxvY2F0aW9uKVxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBvYmoudHlwZSxcblx0XHRcdGNvbG9yOiBvYmouY29sb3IudmFsdWUsXG5cdFx0XHRncmFkZTogb2JqLmdyYWRlLl9pZCxcblx0XHRcdGd5bTogb2JqLmd5bS5faWQsXG5cdFx0XHR3YWxsOiBvYmoubG9jYXRpb24sXG5cdFx0XHR0YWdzOiBvYmoudGFncy5qb2luKCcsICcpLFxuXHRcdFx0c2V0X29uOiBEYXRlLm5vdygpXG5cdFx0fVxuXHRyZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRyb3V0ZTogc3RhdGUucm91dGUsXG5cdFx0Z3JhZGVzOiBzdGF0ZS50ZWFtLmdyYWRlc1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG5cdHJldHVybiB7XG5cdFx0cG9zdFJvdXRlOiAocm91dGUpID0+IGRpc3BhdGNoKHBvc3RSb3V0ZShyb3V0ZSkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKFd6UHJldmlldylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL1d6UHJldmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgV3pQYWdlIGZyb20gJy4vd3pQYWdlJ1xuaW1wb3J0IHtSdENhcmR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uLydcblxuY29uc3QgV3pTdGVwID0gcHJvcHMgPT4gKFxuXHRwcm9wcy5yZXZpZXc/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDNcIj48L2Rpdj5cbiAgICAgIDxSdENhcmQgdGl0bGU9e3Byb3BzLm5hbWV9Pntwcm9wcy5jaGlsZHJlbn08L1J0Q2FyZD5cbiAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3otaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoMyB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgeyBwcm9wcy5uYW1lIH06PC9kaXY+XG4gICAgICA8V3pQYWdlIG5leHQ9e3Byb3BzLm5leHR9IHByZXY9e3Byb3BzLnByZXZ9Lz5cbiAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICAgIClcbilcblxuV3pTdGVwLnByb3BUeXBlcyA9IHtcblx0cmV2aWV3OiBQcm9wVHlwZXMuYm9vbCxcblx0bmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRuZXh0OiBQcm9wVHlwZXMuZnVuYyxcblx0cHJldjogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3pTdGVwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XelN0ZXAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNvbG9yIGZyb20gJ3NlcnZpY2VzL2NvbG9yU2VydmljZSdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCBXekl0ZW0gPSBwcm9wcyA9PiB7XG5cdGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0cHJvcHMudXBkYXRlKHByb3BzLnR5cGUsIHByb3BzLml0ZW0pXG5cdH1cblxuXHRjb25zdCBpdGVtU3R5bGUgPSB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBwcm9wcy5pdGVtLmNvbG9yID8gcHJvcHMuaXRlbS5jb2xvciA6ICd3aGl0ZScsXG5cdFx0Y29sb3I6IHByb3BzLml0ZW0uY29sb3IgPyBjb2xvci50ZXh0Q29sb3IocHJvcHMuaXRlbS5jb2xvcikgOiAnaW5oZXJpdCdcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2N4KCd3ei1kb3QnLCB7J2l0ZW0tc2VsZWN0ZWQnOiBwcm9wcy5zZWxlY3RlZH0pfSBzdHlsZT17aXRlbVN0eWxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgZ3JpZC1sYWJlbFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtLnZhbHVlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXHQpXG5cbn1cblxuV3pJdGVtLnByb3BUeXBlcyA9IHtcblx0dXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcblx0aXRlbTogUHJvcFR5cGVzLm9iamVjdCxcblx0dHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6SXRlbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBXekxpc3RJdGVtID0gcHJvcHMgPT4ge1xuXHRmdW5jdGlvbiBfY2xpY2soKSB7XG5cdFx0cHJvcHMudXBkYXRlKHByb3BzLnR5cGUsIHByb3BzLml0ZW0pXG5cdH1cblx0cmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2V0Q2xhc3MocHJvcHMpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBsaXN0LWxhYmVsXCIgb25DbGljaz17X2NsaWNrfT57cHJvcHMuaXRlbS52YWx1ZSB8fCBwcm9wcy5pdGVtfTwvZGl2PlxuICAgIDwvZGl2PlxuXHQpXG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKHByb3BzKSB7XG5cdHJldHVybiAnd3otbGlzdC1pdGVtICcgKyAocHJvcHMuc2VsZWN0ZWQ/ICdpdGVtLXNlbGVjdGVkJyA6ICcnKVxufVxuXG5Xekxpc3RJdGVtLnByb3BUeXBlcyA9IHtcblx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXHR1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuXHRpdGVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cdHR5cGU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3pMaXN0SXRlbVxuICAgICAgICAgICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekxpc3RJdGVtLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY2xhc3MgV3pQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5wcmV2ID0gdGhpcy5wcmV2LmJpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHAxMGIgaGlkZGVuLXhzIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e3RoaXMucHJldn0+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e3RoaXMubmV4dCB9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdHRoaXMucHJvcHMubmV4dCgxKVxuXHR9XG5cblx0cHJldigpIHtcblx0XHR0aGlzLnByb3BzLnByZXYoLTEpXG5cdH1cbn1cblxuV3pQYWdlLnByb3BUeXBlcyA9IHtcblx0cHJldjogUHJvcFR5cGVzLmZ1bmMsXG5cdG5leHQ6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6UGFnZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pQYWdlLmpzeCIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUnRXaXphcmQgZnJvbSAnLi9ydFdpemFyZCdcbmltcG9ydCB7dXBkYXRlUm91dGUsIHVwZGF0ZVRhZ3MsIHJlc2V0V2l6YXJkfSBmcm9tICdkYXRhL2FjdGlvbnMvd2l6YXJkJ1xuaW1wb3J0IHtnZXRUZWFtfSBmcm9tICdkYXRhL2FjdGlvbnMvdGVhbSdcbmltcG9ydCB7Z2V0R3ltc30gZnJvbSAnZGF0YS9hY3Rpb25zL2d5bSdcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGU6IHN0YXRlLnJvdXRlLFxuICAgICAgICB0ZWFtOiBzdGF0ZS50ZWFtLFxuICAgICAgICBneW1zOiBzdGF0ZS5neW1zXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZTogKGZpZWxkLCB2YWx1ZSkgPT4gZGlzcGF0Y2godXBkYXRlUm91dGUoZmllbGQsIHZhbHVlKSksXG4gICAgICAgIHVwZGF0ZVRhZ3M6ICh2YWx1ZSkgPT4gZGlzcGF0Y2godXBkYXRlVGFncyh2YWx1ZSkpLFxuICAgICAgICByZXNldEZvcm06ICgpID0+IGRpc3BhdGNoKHJlc2V0V2l6YXJkKCkpLFxuICAgICAgICBnZXRUZWFtOiAoKSA9PiBkaXNwYXRjaChnZXRUZWFtKCkpLFxuICAgICAgICBnZXRHeW1zOiAoKSA9PiBkaXNwYXRjaChnZXRHeW1zKCkpXG4gICAgfVxufVxuXG5jb25zdCBSdFdpemFyZENvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaCkoUnRXaXphcmQpXG5cbmV4cG9ydCBkZWZhdWx0IFJ0V2l6YXJkQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFd6R3JpZCBmcm9tICcuL2NvbXBvbmVudHMvV3pHcmlkJ1xuaW1wb3J0IFd6Q29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9XekNvbnRhaW5lcidcbmltcG9ydCBXelN0ZXAgZnJvbSAnLi9jb21wb25lbnRzL1d6U3RlcCdcbmltcG9ydCBXelByZXZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1d6UHJldmlldydcbmltcG9ydCB7U3dpcGVDb250YWluZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5jbGFzcyBSdFdpemFyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHN0ZXA6IDAsXG5cdFx0Z3ltRmlsdGVyOiB1bmRlZmluZWRcblx0fVxuXG5cdGNsaWNrcyA9IDBcblx0Y2xpY2tlZCA9ICdneW0nXG5cdHN0ZXBzID0gWydneW0nLCAnY29sb3InLCAnZ3JhZGUnLCAnbG9jYXRpb24nLCAndGFncyddXG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRyb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRneW1zOiBQcm9wVHlwZXMuYXJyYXksXG5cdFx0dXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcblx0XHR0ZWFtOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRcdHJlc2V0Rm9ybTogUHJvcFR5cGVzLmZ1bmNcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMucmVzZXRGb3JtKClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPFN3aXBlQ29udGFpbmVyIG9uU3dpcGU9e3RoaXMub25Td2lwZX0+XG4gICAgICAgICAgICAgICAgPFd6Q29udGFpbmVyIHN0ZXA9e3RoaXMuc3RhdGUuc3RlcH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0ZXBDb250ZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0ZXApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V3pTdGVwIGtleT17c3RlcC5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3N0ZXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXY9e3RoaXMubW92ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0PXt0aGlzLm1vdmV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ9e3N0ZXAuZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3PXtzdGVwLnJldmlld30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9XelN0ZXA+KVxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICA8L1d6Q29udGFpbmVyPlxuICAgICAgICAgICAgPC9Td2lwZUNvbnRhaW5lcj5cblx0XHQpXG5cdH1cblxuXHRvblN3aXBlID0gKGRpcikgPT4ge1xuXHRcdGlmKCh0aGlzLnN0YXRlLnN0ZXAgIT09IDUgJiYgZGlyIDwgMCkgfHwgISh0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcF0gaW4gdGhpcy5wcm9wcy5yb3V0ZSkpIHJldHVyblxuICAgICAgICBcblx0XHRsZXQgdG9TdGVwID0gdGhpcy5zdGF0ZS5zdGVwICsgKGRpciA+IDA/IC0xIDogMSlcblxuXHRcdHRoaXMuc2V0U3RhdGUoe3N0ZXA6IHRvU3RlcH0pXG5cdH1cblxuXHRtb3ZlID0gKGRpciwgZmllbGQpID0+IHtcblx0XHRsZXQgY3VycmVudCA9IHRoaXMuc3RhdGUuc3RlcFxuICAgICAgICAvLyBjYWxsZWQgYnkgdXBkYXRlXG5cdFx0aWYoZmllbGQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtzdGVwOiBjdXJyZW50ICsgZGlyfSlcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UndmUgbWFkZSBpdCBwYXN0IHRoaXMgc3RlcCBhbHJlYWR5XG5cdFx0aWYoY3VycmVudCArIGRpciA8IDAgfHwgISh0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcF0gaW4gdGhpcy5wcm9wcy5yb3V0ZSkgJiYgZGlyID4gMCkgcmV0dXJuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7c3RlcDogY3VycmVudCArIGRpcn0pXG5cdH1cblxuXHR1cGRhdGUgPSAoZmllbGQsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGhhbmRsZSBkb3VibGUgY2xpY2tcblx0XHRpZiAodGhpcy5jbGlja3MgPiAwICYmIHRoaXMucHJvcHMucm91dGVbZmllbGRdID09PSB2YWx1ZSkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcblxuXHRcdHRoaXMucHJvcHMudXBkYXRlKGZpZWxkLCB2YWx1ZSlcblx0XHRsZXQgbmV4dCA9IHRoaXMuc3RhdGUuc3RlcCArIDFcblxuXHRcdGlmIChcbiAgICAgICAgICAgIC8vIGlmIHdlJ3ZlIG1hbnVhbGx5IGdvbmUgYmFja3dhcmRzLCBkb24ndCBtb3ZlXG4gICAgICAgICAgICAoIXRoaXMucHJvcHMucm91dGVbdGhpcy5zdGVwc1tuZXh0XV0gJiYgZmllbGQgIT09ICd0eXBlJylcbiAgICAgICAgICAgIC8vIG9yIHRoZSBuZXh0IHN0ZXAgaXMgbXVsdGlwbGUgY2hvaWNlXG4gICAgICAgICAgICB8fCB0aGlzLnN0ZXBzW25leHRdID09PSAndGFncydcbiAgICAgICAgKSByZXR1cm4gdGhpcy5tb3ZlKDEsIGZpZWxkKVxuXG4gICAgICAgIC8vIHN0b3JlIGNsaWNrIGZvciBkb3VibGUgY2xpY2tcblx0XHR0aGlzLmNsaWNrcysrXG5cdFx0dGhpcy5jbGlja2VkID0gZmllbGRcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xpY2tzLS0sIDUwMClcblx0fVxuXG5cdHVwZGF0ZVRhZ3MgPSAodGFncywgdGFnKSA9PiB7XG5cdFx0bGV0IHt2YWx1ZX0gPSB0YWdcbiAgICAgICAgXG4gICAgICAgIC8vIGhhbmRsZSBkb3VibGUgY2xpY2tcblx0XHRpZiAodGhpcy5jbGlja3MgPiAwICYmIHRoaXMucHJvcHMucm91dGUudGFncy5pbmRleE9mKHZhbHVlKSA+PTAgKSByZXR1cm4gdGhpcy5tb3ZlKDEsIHRydWUpXG5cbiAgICAgICAgLy8gaWYgd2UndmUgbWFudWFsbHkgZ29uZSBiYWNrd2FyZHMsIGRvbid0IG1vdmVcbiAgICAgICAgLy8gaWYgKCF0aGlzLnByb3BzLnJvdXRlW3RoaXMuc3RlcHNbdGhpcy5zdGF0ZS5zdGVwICsgMV1dKSByZXR1cm4gdGhpcy5tb3ZlKDEsIGZpZWxkKVxuXHRcdHRoaXMucHJvcHMudXBkYXRlVGFncyh2YWx1ZSlcblxuICAgICAgICAvLyBzdG9yZSBjbGljayBmb3IgZG91YmxlIGNsaWNrXG5cdFx0dGhpcy5jbGlja3MrK1xuXHRcdHRoaXMuY2xpY2tlZCA9IHZhbHVlXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmNsaWNrcy0tLCA1MDApXG5cdH1cblxuXHRmaWx0ZXJHeW1zKGd5bXMsIGZpbHRlcikge1xuXHRcdGlmKCFmaWx0ZXIpIHJldHVybiBbXVxuXHRcdHJldHVybiBneW1zLmZpbHRlcihneW0gPT4gZ3ltLndhbGxzW2ZpbHRlcl0ubGVuZ3RoKVxuXHR9XG5cblx0c2V0RmlsdGVyKGZpbHRlcikge1xuXHRcdHRoaXMudXBkYXRlKCd0eXBlJywgZmlsdGVyKVxuXHRcdHRoaXMuc2V0U3RhdGUoe2d5bUZpbHRlcjogZmlsdGVyfSlcblx0fVxuXG5cdHJlc2V0Rm9ybSA9ICgpID0+IHtcblx0XHR0aGlzLnByb3BzLnJlc2V0Rm9ybSgpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7c3RlcDogMX0pXG5cdH1cblxuXHRzdGVwQ29udGVudCgpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnZ3ltJyxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAnd3otbGlzdC1pdGVtICcgKyAodGhpcy5zdGF0ZS5neW1GaWx0ZXIgPT09ICdib3VsZGVyJyA/ICdpdGVtLXNlbGVjdGVkJyA6ICcnICl9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0RmlsdGVyKCdib3VsZGVyJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgbGlzdC1sYWJlbFwiPkJvdWxkZXJpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3d6LWxpc3QtaXRlbSAnICsgKHRoaXMuc3RhdGUuZ3ltRmlsdGVyID09PSAncm9wZScgPyAnaXRlbS1zZWxlY3RlZCcgOiAnJyApfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEZpbHRlcigncm9wZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGxpc3QtbGFiZWxcIj5Sb3BlczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMuZmlsdGVyR3ltcyh0aGlzLnByb3BzLmd5bXMsIHRoaXMuc3RhdGUuZ3ltRmlsdGVyKX0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnZ3ltJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0gbGlzdC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiAnY29sb3InLFxuXHRcdFx0XHRjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMudGVhbS5jb2xvcnN9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2NvbG9yJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0vPlxuICAgICAgICAgICAgICAgIClcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogJ2dyYWRlJyxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnJvdXRlLnR5cGU/IHRoaXMucHJvcHMudGVhbS5ncmFkZXNbdGhpcy5wcm9wcy5yb3V0ZS50eXBlXSA6IHRoaXMucHJvcHMudGVhbS5ncmFkZXMuYm91bGRlcn0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnZ3JhZGUnfSB1cGRhdGU9e3RoaXMudXBkYXRlfS8+XG4gICAgICAgICAgICAgICAgKVxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiAnbG9jYXRpb24nLFxuXHRcdFx0XHRjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMucm91dGUuZ3ltICYmIHRoaXMucHJvcHMucm91dGUuZ3ltLndhbGxzW3RoaXMuc3RhdGUuZ3ltRmlsdGVyXSB8fCBbXX0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnbG9jYXRpb24nfSB1cGRhdGU9e3RoaXMudXBkYXRlfSBsaXN0Lz5cbiAgICAgICAgICAgICAgICApXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6ICd0YWdzJyxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnRlYW0udGFnc30gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsndGFncyd9IHVwZGF0ZT17dGhpcy51cGRhdGVUYWdzfSBsaXN0Lz5cbiAgICAgICAgICAgICAgICApXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6ICdyZXZpZXcnLFxuXHRcdFx0XHRlbmQ6IHRydWUsXG5cdFx0XHRcdHJldmlldzogdHJ1ZSxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pQcmV2aWV3IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBtb3ZlPXt0aGlzLm1vdmV9IHJlc2V0PXt0aGlzLnJlc2V0Rm9ybX0vPlxuICAgICAgICAgICAgICAgIClcblx0XHRcdH1cblx0XHRdXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRXaXphcmRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9ydFdpemFyZC5qc3giLCJleHBvcnQgZnVuY3Rpb24gcmVjZWl2ZUd5bXMoZ3ltcykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdSRUNFSVZFX0dZTVMnLFxuXHRcdHBheWxvYWQ6IGd5bXNcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3ltcyh0ZWFtKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PmZldGNoZXIuZ2V0KCdneW1zL3RlYW0vJyt0ZWFtLl9pZCkudGhlbihneW1zID0+IHtcblx0XHRkaXNwYXRjaChyZWNlaXZlR3ltcyhneW1zKSlcblx0XHRyZXR1cm4gZ3ltc1xuXHR9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvZ3ltLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdXRlKHJvdXRlKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ0FERF9ST1VURScsXG5cdFx0cGF5bG9hZDogcm91dGVcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVJvdXRlcyhyb3V0ZXMpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVDRUlWRV9ST1VURVMnLFxuXHRcdHBheWxvYWQ6IHJvdXRlc1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb3V0ZShyb3V0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdVUERBVEVfUk9VVEUnLFxuXHRcdHBheWxvYWQ6IHJvdXRlXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvdXRlcyhhcnIpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVNT1ZFX1JPVVRFUycsXG5cdFx0cGF5bG9hZDogYXJyXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlc0J5R3ltKGlkKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiBmZXRjaGVyLmdldChgcm91dGUvZ3ltLyR7aWR9YCwge1xuXHRcdGd5bTogaWRcblx0fSkudGhlbihyb3V0ZXMgPT4ge1xuXHRcdGRpc3BhdGNoKHJlY2VpdmVSb3V0ZXMocm91dGVzKSlcblx0Ly9yZXR1cm4gcm91dGVzXG5cdH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0Um91dGUocm91dGUpIHtcblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+IGZldGNoZXIuY3JlYXRlKCdyb3V0ZScsIHJvdXRlKVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRkaXNwYXRjaChhZGRSb3V0ZShyZXMpKVxuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXRSb3V0ZShyb3V0ZSkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4gZmV0Y2hlci51cGRhdGUoYHJvdXRlLyR7cm91dGUuX2lkfWAsIHJvdXRlKVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRkaXNwYXRjaCh1cGRhdGVSb3V0ZShyZXMpKVxuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy9yb3V0ZS5qcyIsImltcG9ydCB7IHJlY2VpdmVHeW1zIH0gZnJvbSAnLi9neW0nXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVGVhbSh0ZWFtKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1JFQ0VJVkVfVEVBTScsXG5cdFx0cGF5bG9hZDogdGVhbVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZWFtKCkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuXHRcdGxldCBzdGF0ZSA9IGdldFN0YXRlKClcblx0XHRpZiAoc3RhdGUudGVhbS5neW1zKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YXRlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmV0Y2hlci5nZXQoJ3RlYW1zL2N1cnJlbnQnKVxuXHRcdFx0XHQudGhlbih0ZWFtID0+IHtcblx0XHRcdFx0XHRkaXNwYXRjaChyZWNlaXZlVGVhbSh0ZWFtKSlcblx0XHRcdFx0XHRkaXNwYXRjaChyZWNlaXZlR3ltcyh0ZWFtLmd5bXMpKVxuXHRcdFx0XHRcdHJldHVybiB0ZWFtXG5cdFx0XHRcdH0pXG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy90ZWFtLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVVc2VyKHVzZXIpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVDRUlWRV9VU0VSJyxcblx0XHRwYXlsb2FkOiB1c2VyXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXIoKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiB7XG5cdFx0bGV0IHN0YXRlID0gZ2V0U3RhdGUoKVxuXHRcdGlmIChzdGF0ZS51c2VyLl9pZCkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZS51c2VyKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmV0Y2hlci5nZXQoJ3VzZXJzL2N1cnJlbnQnKVxuXHRcdFx0XHQudGhlbih1c2VyID0+IHtcblx0XHRcdFx0XHRkaXNwYXRjaChyZWNlaXZlVXNlcih1c2VyKSlcblx0XHRcdFx0XHRyZXR1cm4gdXNlclxuXHRcdFx0XHR9KVxuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvdXNlci5qcyIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb3V0ZShmaWVsZCwgdmFsdWUpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnVVBEQVRFX05FV19ST1VURScsXG5cdFx0cGF5bG9hZDoge1xuXHRcdFx0ZmllbGQsXG5cdFx0XHR2YWx1ZVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFncyh2YWx1ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdVUERBVEVfVEFHUycsXG5cdFx0cGF5bG9hZDogdmFsdWVcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRXaXphcmQoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1JFU0VUX1dJWkFSRCdcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy93aXphcmQuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSBbXVxuXG5jb25zdCB0cmFuc2Zvcm1HeW1zID0gKGd5bXMpID0+IHtcbiAgICBneW1zLmZvckVhY2goZ3ltID0+IHtcbiAgICAgICAgZ3ltLnZhbHVlID0gZ3ltLm5hbWVcbiAgICB9KVxuICAgIHJldHVybiBneW1zXG59XG5cbmNvbnN0IGd5bSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfR1lNUyc6XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1HeW1zKGFjdGlvbi5wYXlsb2FkKVxuICAgIGNhc2UgJ0dFVF9HWU1TJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBneW0gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2d5bS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcbmltcG9ydCB3aXphcmQgZnJvbSAnLi93aXphcmQnXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgcm91dGUgZnJvbSAnLi9yb3V0ZSdcbmltcG9ydCB0ZWFtIGZyb20gJy4vdGVhbSdcbmltcG9ydCBneW0gZnJvbSAnLi9neW0nXG5cbmNvbnN0IG1haW5SZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICByb3V0ZTogd2l6YXJkLCBcbiAgICByb3V0ZXM6IHJvdXRlLFxuICAgIHRlYW06IHRlYW0sXG4gICAgZ3ltczogZ3ltLFxuICAgIHVzZXIsXG4gICAgcm91dGVyOiByb3V0ZXJSZWR1Y2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCBtYWluUmVkdWNlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5jb25zdCBpbml0aWFsU3RhdGUgPSBuZXcgSW1tdXRhYmxlLk1hcCgpXG5cbmZ1bmN0aW9uIHJvdXRlKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChhY3Rpb24ucGF5bG9hZC5faWQsIGFjdGlvbi5wYXlsb2FkKVxuICAgIGNhc2UgJ1JFTU9WRV9ST1VURVMnOiB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBJbW11dGFibGUuU2V0KGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICByZXR1cm4gc3RhdGUuZmlsdGVyTm90KCh2KSA9PnJvdXRlcy5oYXModi5faWQpKVxuICAgIH1cbiAgICBjYXNlICdSRUNFSVZFX1JPVVRFUyc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5jb25jYXQoYWN0aW9uLnBheWxvYWQubWFwKHJvdXRlID0+IFtyb3V0ZS5faWQscm91dGVdKSlcbiAgICBjYXNlICdVUERBVEVfUk9VVEUnOlxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0KGFjdGlvbi5wYXlsb2FkLl9pZCwgYWN0aW9uLnBheWxvYWQpXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3JvdXRlLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGNvbG9yczogW10sXG4gICAgdGFnczogW10sXG4gICAgZ3JhZGVzOiB7XG4gICAgICAgIGJvdWxkZXI6IFtdLFxuICAgICAgICByb3BlOiBbXVxuICAgIH1cbn1cblxuY29uc3QgdHJhbnNmb3JtVGVhbSA9ICh0ZWFtKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGVhbSxcbiAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICBib3VsZGVyOiB0ZWFtLmdyYWRlcy5ib3VsZGVyLm1hcCgoZ3JhZGUsIGluZGV4KSA9PiB7cmV0dXJuIHtfaWQ6IGluZGV4LCB2YWx1ZTogZ3JhZGV9fSksXG4gICAgICAgICAgICByb3BlOiB0ZWFtLmdyYWRlcy5yb3BlLm1hcCgoZ3JhZGUsIGluZGV4KSA9PiB7cmV0dXJuIHtfaWQ6IGluZGV4LCB2YWx1ZTogZ3JhZGV9fSlcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3JzOiB0ZWFtLmNvbG9ycy5tYXAoY29sb3IgPT4ge3JldHVybiB7X2lkOiBjb2xvci5uYW1lLCB2YWx1ZTogY29sb3IubmFtZSwgY29sb3I6IGNvbG9yLmNvbG9yfX0pLFxuICAgICAgICB0YWdzOiB0ZWFtLnRhZ3MubWFwKHRhZyA9PiB7cmV0dXJuIHtfaWQ6IHRhZywgdmFsdWU6IHRhZ319KVxuICAgIH1cbn1cblxuY29uc3QgdGVhbSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfVEVBTSc6XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1UZWFtKGFjdGlvbi5wYXlsb2FkKVxuICAgIGNhc2UgJ0dFVF9URUFNJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0ZWFtICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy90ZWFtLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuY29uc3QgdXNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfVVNFUic6XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgIGNhc2UgJ0dFVF9VU0VSJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy91c2VyLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHRhZ3M6IFtdXG59XG5cbmNvbnN0IHdpemFyZCA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1VQREFURV9ORVdfUk9VVEUnOlxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgW2FjdGlvbi5wYXlsb2FkLmZpZWxkXTogYWN0aW9uLnBheWxvYWQudmFsdWV9KVxuICAgIGNhc2UgJ1VQREFURV9UQUdTJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7dGFnczogdG9nZ2xlVGFnKHN0YXRlLnRhZ3MsIGFjdGlvbi5wYXlsb2FkKX0pXG4gICAgY2FzZSAnUkVTRVRfV0laQVJEJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtneW06IHN0YXRlLmd5bSwgdGFnczogW119KVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l6YXJkXG5cbi8vIHV0aWxpdGllc1xuXG5mdW5jdGlvbiB0b2dnbGVUYWcodGFncywgdGFnKSB7XG4gICAgbGV0IGluZCA9IHRhZ3MuaW5kZXhPZih0YWcpXG4gICAgdGFncyA9IFsuLi50YWdzXVxuICAgIGlmIChpbmQgPj0gMCkge1xuICAgICAgICB0YWdzW2luZF0gPSB0YWdzW3RhZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgdGFncy5sZW5ndGggPSB0YWdzLmxlbmd0aCAtIDFcbiAgICAgICAgcmV0dXJuIHRhZ3NcbiAgICB9XG4gICAgcmV0dXJuIHRhZ3MuY29uY2F0KHRhZylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy93aXphcmQuanMiLCIgLyoqXG4gKiBAbmFtZSBzdGF0ZVRvZ2dsZVxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgcHJvcGVydHkgb2Ygc3RhdGUgdG8gdG9nZ2xlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cblxuXG5leHBvcnQgY29uc3Qgc3RhdGVUb2dnbGUgPSBwcm9wID0+IHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBbcHJvcF06ICFzdGF0ZVtwcm9wXVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS91dGlsL2luZGV4LmpzIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcbmltcG9ydCBTdmdJbmplY3RvciBmcm9tICdzdmctaW5qZWN0b3InXG5cbmNvbnN0IHJlbmRlciA9IENvbXBvbmVudCA9PiB7XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG5cdFx0PENvbXBvbmVudCAvPlxuXHQ8L0FwcENvbnRhaW5lcj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICApXG59XG5cbnJlbmRlcihBcHApXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbmljLXNwcml0ZScpXG4gICAgU3ZnSW5qZWN0b3IoaWNvbnMpXG59KVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIGNvbnNvbGUubG9nKCdzbyBzbyBob3QnKVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL2FwcCcsICgpID0+IHsgXG4gICAgICAgIGNvbnN0IEFwcCA9IHJlcXVpcmUoJy4vYXBwJykuZGVmYXVsdFxuICAgICAgICByZW5kZXIoQXBwKVxuICAgIH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL21haW4uanN4IiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFtcbiAgICB7ICdfaWQnOiAncmVkJywgJ3ZhbHVlJzogJ3JlZCcsICdjb2xvcic6ICcjZmUyZTJlJyB9LFxuICAgIHsgJ19pZCc6ICdvcmFuZ2UnLCAndmFsdWUnOiAnb3JhbmdlJywgJ2NvbG9yJzogJyNmOTInIH0sXG4gICAgeyAnX2lkJzogJ3llbGxvdycsICd2YWx1ZSc6ICd5ZWxsb3cnLCAnY29sb3InOiAnI2ZmZjA0YycgfSxcbiAgICB7ICdfaWQnOiAnZ3JlZW4nLCAndmFsdWUnOiAnZ3JlZW4nLCAnY29sb3InOiAnIzBiMCcgfSxcbiAgICB7ICdfaWQnOiAnYmx1ZScsICd2YWx1ZSc6ICdibHVlJywgJ2NvbG9yJzogJyMxZTU0ZjQnIH0sXG4gICAgeyAnX2lkJzogJ3B1cnBsZScsICd2YWx1ZSc6ICdwdXJwbGUnLCAnY29sb3InOiAnIzgwOCcgfSxcbiAgICB7ICdfaWQnOiAnYmxhY2snLCAndmFsdWUnOiAnYmxhY2snLCAnY29sb3InOiAnIzAwMCcgfSxcbiAgICB7ICdfaWQnOiAnd2hpdGUnLCAndmFsdWUnOiAnd2hpdGUnLCAnY29sb3InOiAnI2ZmZicgfSxcbiAgICB7ICdfaWQnOiAncGluaycsICd2YWx1ZSc6ICdwaW5rJywgJ2NvbG9yJzogJyNlNWQnIH1cbl1cblxuXG5leHBvcnQgY29uc3QgcGFsYXR0ZSA9IHtcbiAgICB0ZWFsOiB7cHJpbWFyeTogJyMwOGUwYzUnLCBzZWNvbmRhcnk6ICcjNGJkMGRkJ30sXG4gICAgcGluazoge3ByaW1hcnk6ICcjZmE0OTc4Jywgc2Vjb25kYXJ5OiAnI2ViNjdhOCd9LFxuICAgIG9yYW5nZToge3ByaW1hcnk6ICcjZmI5NTAwJywgc2Vjb25kYXJ5OiAnI2ZiYzEwMCd9LFxuICAgIGdyZWVuOiB7cHJpbWFyeTogJyM4M2JmMDAnLCBzZWNvbmRhcnk6ICcjODNiZjAwJ30sXG4gICAgeWVsbG93OiB7cHJpbWFyeTogJyNmZmRjMDAnLCBzZWNvbmRhcnk6ICcjZmZmNDAwJ30sXG4gICAgYmx1ZToge3ByaW1hcnk6ICcjMDA4RkZGJywgc2Vjb25kYXJ5OiAnIzI1NzdFOCd9LFxuICAgIHJlZDoge3ByaW1hcnk6ICcjRUMzNTM1Jywgc2Vjb25kYXJ5OiAnI0UzMTgyOCd9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvcnRjb25maWcuanMiLCJjbGFzcyDPgCB7XG4gICAgY291bnRCeShhcnIsIGNvbXApIHtcbiAgICAgICAgaWYgKCFjb21wKSBcbiAgICAgICAgICAgIGNvbXAgPSAoYSkgPT4gYVxuICAgICAgICBsZXQgZ3JvdXBlZCA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGEgPSBhcnJbaV1cbiAgICAgICAgICAgIGlmIChjb21wKGEpIGluIGdyb3VwZWQpIHtcbiAgICAgICAgICAgICAgICBncm91cGVkW2NvbXAoYSldKytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBlZFtjb21wKGEpXSA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXBlZFxuICAgIH1cblxuICAgIGJ1Y2tldHMoYXJyLCBsaXN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpIFxuICAgICAgICAgICAgbGlzdCA9IGxpc3Quc3BsaXQoJyAnKVxuICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSBcbiAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9tYWtlSGFzaChsaXN0LCAwKVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RbYXJyW2ldXSsrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RcbiAgICB9XG5cbiAgICByYW5nZShhLCBiKSB7XG4gICAgICAgIGxldCBzdGFydCA9IGJcbiAgICAgICAgICAgID8gYVxuICAgICAgICAgICAgOiAwXG4gICAgICAgIGxldCBlbmQgPSBiXG4gICAgICAgICAgICA/IGJcbiAgICAgICAgICAgIDogYVxuICAgICAgICBsZXQgYXJyID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2goaSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICBleHBhbmRTaW1wbGVPYmplY3Qob2JqKSB7XG4gICAgICAgIG9iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSAhPT0gLTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VEb3ROb3RhdGlvbihrZXksIG9ialtrZXldLCBvYmopXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIHRvZ2dsZUFycmF5KGEsIHYpIHtcbiAgICAgICAgYSA9IFsuLi5hXVxuICAgICAgICB2YXIgaSA9IGEuaW5kZXhPZih2KVxuICAgICAgICBpZiAoaSA9PT0gLTEpXG4gICAgICAgICAgICBhLnB1c2godilcbiAgICAgICAgZWxzZVxuICAgICAgICBhLnNwbGljZShpLDEpXG5cbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cblxuICAgIC8vIGludGVybmFsXG5cbiAgICBfbWFrZUhhc2goYXJyLCB2YWwpIHtcbiAgICAgICAgbGV0IGhhc2ggPSB7fVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hbYXJyW2ldXSA9IHZhbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgfVxuXG4gICAgX3BhcnNlRG90Tm90YXRpb24oc3RyLCB2YWwsIG9iaikge1xuICAgICAgICB2YXIgY3VycmVudE9iaiA9IG9iaixcbiAgICAgICAgICAgIGtleXMgPSBzdHIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGksIGwgPSBNYXRoLm1heCgxLCBrZXlzLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAga2V5XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXVxuICAgICAgICAgICAgY3VycmVudE9ialtrZXldID0gY3VycmVudE9ialtrZXldIHx8IHt9XG4gICAgICAgICAgICBjdXJyZW50T2JqID0gY3VycmVudE9ialtrZXldXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRPYmpba2V5c1tpXV0gPSB2YWxcbiAgICAgICAgZGVsZXRlIG9ialtzdHJdXG4gICAgfVxuXG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IM+AKClcblxuZXhwb3J0IGNvbnN0IHJlbmRlcklmID0gY29uZGl0aW9uID0+IGVsZW1lbnQgPT4gKGNvbmRpdGlvbiAmJiBlbGVtZW50KSB8fCAnJyBcblxuZXhwb3J0IGNvbnN0IGRhdGVNYXRoID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgZGF5ID0gOC42NGU3XG4gICAgY29uc3Qgd2VlayA9IDYuMDQ4ZSs4XG4gICAgXG4gICAgZnVuY3Rpb24gd2Vla3NPbGQoZGF5KSB7XG4gICAgICAgIGNvbnN0IG1zID0gRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGRheSkuZ2V0VGltZSgpXG5cbiAgICAgICAgY29uc3Qgd2Vla3MgPSBtcy93ZWVrXG5cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQod2Vla3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF5LFxuICAgICAgICB3ZWVrLFxuICAgICAgICB3ZWVrc09sZFxuICAgIH1cblxufSkoKVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAodGltZSkgPT4gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9ydHV0aWwuanMiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY29sb3JGYWN0b3J5KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRleHRDb2xvclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHRDb2xvcihjb2xvcikge1xuICAgICAgICBpZighY29sb3IpIHJldHVyblxuICAgICAgICBsZXQgc3BsaXR0ZXIgPSBjb2xvci5sZW5ndGggPiA0PyAvLnsyfS9nIDogLy4vZ1xuICAgICAgICBsZXQgbWlkZGxlID0gY29sb3IubGVuZ3RoID4gND8gMTI4IDogOFxuICAgICAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnJykubWF0Y2goc3BsaXR0ZXIpXG4gICAgICAgIHJldHVybiBjb2xvci5yZWR1Y2UoKGEsIGIpID0+IChwYXJzZUludChiLCAxNikgLyAzKSArIGEsIDApID4gbWlkZGxlID8gJyM1NTUnIDogJyNmZmYnXG4gICAgfVxufSkoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NlcnZpY2VzL2NvbG9yU2VydmljZS5qcyIsImNsYXNzIGZldGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByZWZpeCA9ICcvYXBpLydcbiAgICB9XG5cbiAgICBnZXQocmVzb3VyY2UsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSArIHBhcmFtVG9RdWVyeShwYXJhbXMpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgfVxuXG4gICAgY3JlYXRlKHJlc291cmNlLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLnByZWZpeCArIHJlc291cmNlLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBmb3JtYXRCb2R5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlKHJlc291cmNlLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLnByZWZpeCArIHJlc291cmNlLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICBib2R5OiBmb3JtYXRCb2R5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IGZldGNoZXIoKVxuXG5mdW5jdGlvbiBwYXJhbVRvUXVlcnkob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiAnJ1xuXG4gICAgcmV0dXJuICc/JyArXG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICtcbiAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pXG4gICAgICAgIH0pLmpvaW4oJyYnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRCb2R5KG9iaikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc2VydmljZXMvZmV0Y2hlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9wdWJsaWMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9