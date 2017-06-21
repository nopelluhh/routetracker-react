webpackJsonp([0],{

/***/ "./public/app.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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
                'Date',
                arrow('set_on')
            ),
            _react2.default.createElement(
                'th',
                { onClick: props.handleSort('grade') },
                'Grade',
                arrow('grade')
            ),
            _react2.default.createElement(
                'th',
                { onClick: props.handleSort('color') },
                'Color',
                arrow('color')
            ),
            _react2.default.createElement(
                'th',
                { onClick: props.handleSort('wall') },
                'Wall',
                arrow('wall')
            ),
            _react2.default.createElement(
                'th',
                { onClick: props.handleSort('setter') },
                'Setter',
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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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

var _react = __webpack_require__("./node_modules/react/index.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvQmFzaWNJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvVGVhbUluZm8uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9GbGV4Um93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0lucHV0Qm94LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vTG9hZEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdENhcmQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdEZvcm0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdExpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFBhbmUuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFN3YXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1NvcnRhYmxlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1N3aXBlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vVGFiU3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2NvbXBvbmVudHMvR3ltSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9Sb3V0ZUxpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvU3RhdHNDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlUm93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9SdENvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vUnRIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjay5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XekNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XekdyaWQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvV3pQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL1d6U3RlcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekl0ZW0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pMaXN0SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elBhZ2UuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9ydFdpemFyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9neW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3RlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy91c2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvd2l6YXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2d5bS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy90ZWFtLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvd2l6YXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21haW4uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9ydGNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcnR1dGlsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zZXJ2aWNlcy9jb2xvclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NlcnZpY2VzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiaGlzdG9yeSIsInJvdXRlTWlkZGxld2FyZSIsInN0b3JlIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsIndpdGhFeHRyYUFyZ3VtZW50IiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwibmV4dFJvb3RSZWR1Y2VyIiwicmVxdWlyZSIsInJlcGxhY2VSZWR1Y2VyIiwiQXBwIiwiQmFzaWNJbmZvIiwic3RhdGUiLCJvblNhdmUiLCJzYXZlU3VjY2VzcyIsImZpZWxkcyIsInZhbGlkYXRlRW1wdHkiLCJ2YWxpZGF0ZUVtYWlsIiwicHJvcHMiLCJ1c2VyIiwicGVuZGluZyIsImRhdGEiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImV4cGFuZFNpbXBsZU9iamVjdCIsInVwZGF0ZSIsInRoZW4iLCJsYWJlbCIsIm5hbWUiLCJ0eXBlIiwidmFsaWRhdGUiLCJ2YWx1ZSIsImxlbmd0aCIsInRlc3QiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJMaXN0SXRlbUNvbG9yIiwiY29sb3IiLCJMaXN0SXRlbSIsImF2YWlsYWJsZSIsIm1hcCIsIlRlYW1JbmZvIiwidGVhbSIsImNvbG9ycyIsInNsaWNlIiwiYSIsImIiLCJfaWQiLCJncmFkZXMiLCJib3VsZGVyIiwibWFwU3RhdGUiLCJ0YWJzIiwiQWNjb3VudCIsImxvYWRlZCIsImFjdGl2ZSIsInRvZ2dsZSIsImdldFVzZXIiLCJpbmQiLCJmdW5jIiwibWFwRGlzcGF0Y2giLCJkaXNwYXRjaCIsInN0eWxlcyIsImRpc3BsYXkiLCJpbmxpbmUiLCJqdXN0aWZ5Q29udGVudCIsImFyb3VuZCIsIm1hcmdpbiIsInN0eWxlIiwiZmxleFJvdyIsImNoaWxkcmVuIiwibm9kZSIsIkljb24iLCJhbHRDbGFzcyIsImNsYXNzTmFtZSIsImljb24iLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiSW5wdXRCb3giLCJ2YWxpZCIsImhhbmRsZUNoYW5nZSIsIm9uQmx1ciIsImUiLCJmaWVsZCIsInRhcmdldCIsInVwZGF0ZUZvcm0iLCJlZGl0IiwiQ29tcG9uZW50IiwiYm9vbCIsIkxvYWRCYXIiLCJMb2FkQ29udGFpbmVyIiwiY29udGVudCIsIkNoaWxkcmVuIiwidG9BcnJheSIsIlJ0Q2FyZCIsInRpdGxlIiwiUnRGb3JtIiwiU2V0IiwidG9nZ2xlRWRpdCIsInNhdmUiLCJtYWtlRm9ybSIsIk9iamVjdCIsImFzc2lnbiIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwicG9zaXRpb24iLCJlZGl0YWJsZSIsInNpemUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsImkiLCJBcnJheSIsInBhZGRpbmciLCJtb2RpZmllciIsImFkZCIsImRlbGV0ZSIsImRlZmF1bHRQcm9wcyIsImFycmF5T2YiLCJvbmVPZlR5cGUiLCJhcnJheSIsInNoYXBlIiwib25DbGljayIsIlJ0TGlzdCIsImxpc3RJdGVtcyIsIml0ZW0iLCJpbmRleCIsIlJ0U3dhdGNoIiwiYyIsInQiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJTb3J0YWJsZUxpc3QiLCJpdGVtcyIsIm1ha2VIYW5kbGVycyIsImNvbXBvbmVudCIsImNvbXBhcmF0b3IiLCJjdXJyZW50IiwibGlzdCIsIm9wdGlvbnMiLCJkaWZmZXJlbmNlV2l0aCIsIm5leHRQcm9wcyIsImZvbnRTaXplIiwiYXJyIiwia2V5Iiwic291cmNlIiwiZHJhZ2dhYmxlIiwib25EcmFnU3RhcnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJnZXREYXRhIiwiZGVzdCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib2xkSW5kIiwibmV3SW5kIiwibGlzdHMiLCJuZXdFbCIsInNwbGljZSIsIlN3aXBlQ29udGFpbmVyIiwidG91Y2hTdGFydCIsInRvdWNoRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJzdGFydFgiLCJjbGllbnRYIiwiZGlzdCIsIm9uTGVmdCIsIm9uU3dpcGUiLCJvblJpZ2h0IiwiaXNBY3RpdmUiLCJ0YWIiLCJTbGlkZXIiLCJ0YWJTd2l0Y2hlciIsIlJ0UGFuZSIsIlRhYlN3aXRjaGVyIiwiRmxleFJvdyIsIkd5bUl0ZW0iLCJ1bmRlZmluZWQiLCJnZXRSb3V0ZXMiLCJneW0iLCJ1cmwiLCJvd25Qcm9wcyIsImd5bVJvdXRlcyIsInJvdXRlcyIsInJvdXRlIiwidHJhbnNmb3JtUm91dGVzIiwiaWQiLCJzb3J0ZWQiLCJidWNrZXRzIiwiZ3JhZGUiLCJyYW5nZSIsImtleXMiLCJHeW1MaXN0IiwiZ3ltcyIsIm1hcFByb3BzIiwiZmV0Y2hpbmciLCJSb3V0ZUxpc3QiLCJzZWxlY3RIYW5kbGVyIiwibW91c2VEb3duIiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdCIsInNoaWZ0S2V5IiwiTnVtYmVyIiwibGFzdFNlbGVjdGVkIiwibCIsIk1hdGgiLCJtaW4iLCJoIiwibWF4Iiwic2VsZWN0ZWQiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsInRlbXAiLCJoYXMiLCJkZWxldGVIYW5kbGVyIiwiaGFuZGxlU29ydCIsInVwZGF0ZVJvdXRlIiwic29ydE9uIiwibmV4dCIsInNvcnQiLCJkaXIiLCJyZXZlcnNlIiwidXBkYXRlZF9hdCIsIndhbGxzIiwiZXZlbnQiLCJpbmRzIiwiaWRzIiwicmVtb3ZlUm91dGVzIiwicGFyYW0iLCJuZXdSb3V0ZXMiLCJuZXdSb3V0ZSIsInByb3AiLCJEYXRlIiwicGFyc2UiLCJzZXRfb24iLCJTdGF0c0NhcmQiLCJtYWtlT3ZlcnZpZXciLCJjb3VudCIsIm9sZGVzdCIsIkluZmluaXR5IiwiZm9yRWFjaCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImFycm93cyIsIlJvdXRlSGVhZGVyIiwiYXJyb3ciLCJUZElucHV0IiwiVGRTZWxlY3QiLCJSb3V0ZVJvdyIsImNhbmNlbEVkaXQiLCJkZWxldGVSb3V0ZSIsInVwZGF0ZUZpZWxkIiwid2FsbCIsInNldHRlciIsIm1lbWJlcnMiLCJuaWNrbmFtZSIsIndpZHRoIiwid2Vla3NPbGQiLCJudW1iZXIiLCJHeW1PdmVydmlldyIsInR5cGVzIiwidXBkYXRlUm91dGVzIiwib25UZWFtIiwic2V0TG9hZGVkIiwic2V0RXJyb3IiLCJnZXREYXRhRm9yR3ltIiwibWF0Y2giLCJwYXJhbXMiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJtaW5IZWlnaHQiLCJnZXRUZWFtIiwiY2F0Y2giLCJjdXJyZW50R3ltIiwiUnRDb250ZW50IiwibG9jYXRpb24iLCJSdEhlYWRlciIsImlzT3BlbiIsImRyb3Bkb3duSXNPcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJNYWluIiwiZ2V0R3ltcyIsInJvdXRlciIsIm1haW5Db250YWluZXIiLCJkMyIsIlJ0U3RhY2siLCJtYWtlQ2hhcnQiLCJhcHBseSIsImVsIiwidG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjaGFydCIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJzZWdtZW50cyIsInNlbGVjdEFsbCIsImVudGVyIiwiZCIsIlJ0QmFyIiwiYmFyV2lkdGgiLCJ5IiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yU2NhbGUiLCJpbnRlcnBvbGF0ZUhjbCIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRlUmFpbmJvdyIsImNsYXNzZWQiLCJiYXIiLCJkZWxheSIsInJhbmRvbSIsImR1cmF0aW9uIiwiZWFzZSIsImVhc2VFeHBJbiIsInRpcCIsIlJ0QmlnQmFyIiwidXBkYXRlQ2hhcnQiLCJyZW1vdmUiLCJzdmciLCJ0ZXh0IiwiZm9udFNjYWxlIiwiY2xhbXAiLCJvZmZzZXQiLCJodG1sIiwiY2FsbCIsIm9uIiwic2hvdyIsImhpZGUiLCJyZXNpemVkIiwic2NhbGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvbnJlc2l6ZSIsImdvYWwiLCJSdFBpZSIsInJhZGl1cyIsImciLCJwaWUiLCJyYWluYm93IiwicGF0aCIsImFyYyIsIm91dGVyUmFkaXVzIiwiaW5uZXJSYWRpdXMiLCJob3ZlclBhdGgiLCJjZW50cm9pZCIsImFnZSIsIld6Q29udGFpbmVyIiwidHJhbnNmb3JtIiwic3RlcCIsIld6R3JpZCIsIkVsIiwiaXNTZWxlY3RlZCIsInNlbGVjdG9yIiwidGFncyIsImluZGV4T2YiLCJvbmVPZiIsIld6UHJldmlldyIsInBvc3RSb3V0ZSIsInRyYW5zZm9ybWVkUm91dGUiLCJ0cmFuc2Zvcm1Sb3V0ZSIsImpvaW4iLCJyZXNldCIsImFkZGVkIiwibW92ZSIsIm9iaiIsIm5vdyIsIld6U3RlcCIsInJldmlldyIsInByZXYiLCJXekl0ZW0iLCJpdGVtU3R5bGUiLCJXekxpc3RJdGVtIiwiX2NsaWNrIiwic2V0Q2xhc3MiLCJXelBhZ2UiLCJiaW5kIiwibWFwU3RhdGVUb1Byb3BzIiwidXBkYXRlVGFncyIsInJlc2V0Rm9ybSIsIlJ0V2l6YXJkQ29udGFpbmVyIiwiUnRXaXphcmQiLCJneW1GaWx0ZXIiLCJjbGlja3MiLCJjbGlja2VkIiwic3RlcHMiLCJzdGVwQ29udGVudCIsImVuZCIsInRvU3RlcCIsInRhZyIsInNldEZpbHRlciIsImZpbHRlckd5bXMiLCJyZWNlaXZlR3ltcyIsInBheWxvYWQiLCJnZXRTdGF0ZSIsImZldGNoZXIiLCJnZXQiLCJhZGRSb3V0ZSIsInJlY2VpdmVSb3V0ZXMiLCJnZXRSb3V0ZXNCeUd5bSIsInB1dFJvdXRlIiwiY3JlYXRlIiwicmVzIiwicmVjZWl2ZVRlYW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY2VpdmVVc2VyIiwicmVzZXRXaXphcmQiLCJpbml0aWFsU3RhdGUiLCJ0cmFuc2Zvcm1HeW1zIiwiYWN0aW9uIiwibWFpblJlZHVjZXIiLCJNYXAiLCJzZXQiLCJmaWx0ZXJOb3QiLCJ2IiwiY29uY2F0Iiwicm9wZSIsInRyYW5zZm9ybVRlYW0iLCJ3aXphcmQiLCJ0b2dnbGVUYWciLCJzdGF0ZVRvZ2dsZSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwicGFsYXR0ZSIsInRlYWwiLCJwaW5rIiwib3JhbmdlIiwiZ3JlZW4iLCJ5ZWxsb3ciLCJibHVlIiwicmVkIiwiz4AiLCJjb21wIiwiZ3JvdXBlZCIsInNwbGl0IiwiX21ha2VIYXNoIiwic3RhcnQiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9wYXJzZURvdE5vdGF0aW9uIiwidmFsIiwiaGFzaCIsInN0ciIsImN1cnJlbnRPYmoiLCJyZW5kZXJJZiIsImNvbmRpdGlvbiIsImVsZW1lbnQiLCJkYXRlTWF0aCIsImRheSIsIndlZWsiLCJtcyIsImdldFRpbWUiLCJ3ZWVrcyIsInJvdW5kIiwic2xlZXAiLCJ0aW1lIiwiY29sb3JGYWN0b3J5Iiwic3BsaXR0ZXIiLCJtaWRkbGUiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJwcmVmaXgiLCJyZXNvdXJjZSIsImZldGNoIiwicGFyYW1Ub1F1ZXJ5IiwianNvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJmb3JtYXRCb2R5IiwiY3JlZGVudGlhbHMiLCJlbmNvZGVVUklD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QUFNNlEsV0FBV2xkLElBQVg7QUFQMkIsYUFBOUIsRUFTTkssSUFUTSxDQVNEO0FBQUEsdUJBQU9tWSxJQUFJdUUsSUFBSixFQUFQO0FBQUEsYUFUQyxDQUFQO0FBVUg7Ozs7OztlQUdVLElBQUk5RSxPQUFKLEU7Ozs7O0FBRWYsU0FBUzZFLFlBQVQsQ0FBc0IzRyxHQUF0QixFQUEyQjtBQUN2QixRQUFJLENBQUNBLEdBQUwsRUFBVSxPQUFPLEVBQVA7O0FBRVYsV0FBTyxNQUNIcFIsT0FBT2lHLElBQVAsQ0FBWW1MLEdBQVosRUFBaUJoVixHQUFqQixDQUFxQixVQUFTMkcsR0FBVCxFQUFjO0FBQy9CLGVBQU9zVixtQkFBbUJ0VixHQUFuQixJQUEwQixHQUExQixHQUNIc1YsbUJBQW1CakgsSUFBSXJPLEdBQUosQ0FBbkIsQ0FESjtBQUVILEtBSEQsRUFHR2lPLElBSEgsQ0FHUSxHQUhSLENBREo7QUFLSDs7QUFFRCxTQUFTbUgsVUFBVCxDQUFvQi9HLEdBQXBCLEVBQXlCO0FBQ3JCLFdBQU9nRixLQUFLQyxTQUFMLENBQWVqRixHQUFmLENBQVA7QUFDSDs7Ozs7Ozs7a0NBakRLOEIsTzs7a0NBcUNHNkUsWTs7a0NBVUFJLFU7Ozs7Ozs7Ozs7OztBQy9DVCx5QyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZGVwZW5kZW5jaWVzIHN1Ym1vZHVsZXMgaW1wb3J0ICcuL2NvbXBvbmVudHMvdXRpbC91dGlsJyBpbXBvcnRcbi8vICcuL2NvbXBvbmVudHMvcnRDaGFydC9ydENoYXJ0JyBpbXBvcnQgJy4vY29tcG9uZW50cy9ydFdpemFyZC9ydFdpemFyZCcgaW1wb3J0XG4vLyAnLi9jb21wb25lbnRzL2d5bUxpc3QvZ3ltTGlzdCcgaW1wb3J0ICcuL2NvbXBvbmVudHMvbWFpbi9tYWluJyBpbXBvcnRcbi8vICcuL2NvbXBvbmVudHMvcnRHeW0vcnRHeW0nXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNYWluIGZyb20gJ2NvbXBvbmVudHMvbWFpbidcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdzZXJ2aWNlcy9mZXRjaGVyJ1xuaW1wb3J0IG1haW5SZWR1Y2VyIGZyb20gJ2RhdGEvcmVkdWNlcnMnXG5pbXBvcnQgeyBDb25uZWN0ZWRSb3V0ZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSgpXG5jb25zdCByb3V0ZU1pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG5cdG1haW5SZWR1Y2VyLFxuXHR3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpLFxuXHRhcHBseU1pZGRsZXdhcmUocm91dGVNaWRkbGV3YXJlLCB0aHVuay53aXRoRXh0cmFBcmd1bWVudChmZXRjaGVyKSlcbilcblxuaWYgKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoJy4vZGF0YS9yZWR1Y2VycycsICgpID0+IHtcblx0XHRjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuL2RhdGEvcmVkdWNlcnMvaW5kZXgnKVxuXHRcdHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSb290UmVkdWNlcilcblx0fSlcbn1cblxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgICAgICAgICAgICAgPE1haW4vPlxuICAgICAgICAgICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2FwcC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IFJ0Rm9ybSB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdzZXJ2aWNlcy9mZXRjaGVyJ1xuaW1wb3J0IHBpLCB7IHNsZWVwIH0gZnJvbSAncnR1dGlsJ1xuXG5jbGFzcyBCYXNpY0luZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHsgIH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHVzZXI6IFByb3BUeXBlcy5vYmplY3Rcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Rm9ybVxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM9eyB0aGlzLmZpZWxkcygpIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXsgdGhpcy5wcm9wcy51c2VyIH1cbiAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9eyB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgb25TYXZlPXsgdGhpcy5vblNhdmUgfVxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nPXsgdGhpcy5zdGF0ZS5wZW5kaW5nIH0gLz5cblx0XHQpXG5cdH1cblxuXHRvblNhdmUgPSBkYXRhID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBlbmRpbmc6IHRydWVcblx0XHR9KVxuXG5cdFx0dGhpcy52YWx1ZXMgPSBwaS5leHBhbmRTaW1wbGVPYmplY3QoZGF0YSlcblxuXHRcdHJldHVybiBmZXRjaGVyLnVwZGF0ZSgndXNlcnMvY3VycmVudCcsIGRhdGEpXG4gICAgICAgICAgICAudGhlbihzbGVlcCgxMDAwKSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuc2F2ZVN1Y2Nlc3MoZGF0YSkpXG5cdH1cblxuXHRzYXZlU3VjY2VzcyA9IGRhdGEgPT4gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cGVuZGluZzogZmFsc2Vcblx0XHR9KVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblxuXHRmaWVsZHMgPSAoKSA9PiBbXG5cdFx0W1xuXHRcdFx0J0dlbmVyYWwnLFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ1VzZXJuYW1lJyxcblx0XHRcdFx0bmFtZTogJ3VzZXJuYW1lJyxcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZUVtcHR5XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ0UtbWFpbCcsXG5cdFx0XHRcdG5hbWU6ICdlbWFpbCcsXG5cdFx0XHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0XHRcdHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlRW1haWxcblx0XHRcdH1cblx0XHRdLFxuXHRcdFtcblx0XHRcdCdTZXR0aW5nJyxcblx0XHRcdHtcblx0XHRcdFx0bGFiZWw6ICdOaWNrbmFtZScsXG5cdFx0XHRcdG5hbWU6ICduaWNrbmFtZScsXG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dmFsaWRhdGU6IHRoaXMudmFsaWRhdGVFbXB0eVxuXHRcdFx0fV1cblx0XVxuXG5cdHZhbGlkYXRlRW1wdHkgPSB2YWx1ZSA9PiB2YWx1ZS5sZW5ndGggPiAwXG5cblx0dmFsaWRhdGVFbWFpbCA9IHZhbHVlID0+IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QodmFsdWUpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNJbmZvXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvY29tcG9uZW50cy9CYXNpY0luZm8uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBSdFN3YXRjaCwgU29ydGFibGVMaXN0IH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCBSdFBpZSBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvcnRQaWUnXG5pbXBvcnQgUnRTdGFjayBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjaydcblxuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdydGNvbmZpZydcblxuXG5jb25zdCBMaXN0SXRlbUNvbG9yID0gcHJvcHMgPT4gPGxpIHsuLi5wcm9wc30+PFJ0U3dhdGNoIGNvbG9yPXsgcHJvcHMuY29sb3IgfSAvPjwvbGk+XG5cblxuY29uc3QgTGlzdEl0ZW0gPSBwcm9wcyA9PiAoPGxpIHsuLi5wcm9wc30+e3Byb3BzLnZhbHVlfTwvbGk+KSAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5jb25zdCBhdmFpbGFibGUgPSBjb2xvcnMubWFwKGNvbG9yID0+IHtcblx0cmV0dXJuIHtcblx0XHRjb2xvclxuXHR9XG59KVxuXG5cbmNsYXNzIFRlYW1JbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7ICB9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHR0ZWFtOiBQcm9wVHlwZXMub2JqZWN0XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17IHRoaXMucHJvcHMudGVhbS5jb2xvcnMuc2xpY2UoMCwgNSkubWFwKGNvbG9yID0+IHsgcmV0dXJuIHsgY29sb3J9IH0pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBhdmFpbGFibGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXsgTGlzdEl0ZW1Db2xvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJhdG9yPXsoYSwgYikgPT4gIGEuY29sb3IuX2lkID09PSBiLmNvbG9yLl9pZH0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgICA8U29ydGFibGVMaXN0XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaXN0LXVuc3R5bGVkJ1xuICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RoaXMucHJvcHMudGVhbS5ncmFkZXMuYm91bGRlci5zbGljZSgwLCAyKX1cbiAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLnRlYW0uZ3JhZGVzLmJvdWxkZXJ9XG4gICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaXN0SXRlbX1cbiAgICAgICAgICAgICAgICAgICBjb21wYXJhdG9yPXsoYSwgYikgPT4gYS52YWx1ZSA9PT0gYi52YWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj48L2Rpdj5cbiAgICAgICAgICAgICAgPFJ0UGllIGRhdGE9e1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF19Lz5cbiAgICAgICAgICAgICAgPFJ0U3RhY2sgZGF0YT17W1xuXHR7XG5cdFx0dmFsdWU6IDE1XG5cdH0sIHtcblx0XHR2YWx1ZTogMTBcblx0fSwge1xuXHRcdHZhbHVlOiA1MFxuXHR9XX1cbiAgICAgICAgICAgICAgd2lkdGg9JzEwMHB4Jy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXHRcdClcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHRlYW06IHN0YXRlLnRlYW1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShUZWFtSW5mbylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvVGVhbUluZm8uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFRhYiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IExvYWRCYXIsIFJ0Q2FyZCwgTG9hZENvbnRhaW5lciwgVGFiU3dpdGNoZXIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCBCYXNpY0luZm8gZnJvbSAnLi9jb21wb25lbnRzL0Jhc2ljSW5mbydcbmltcG9ydCBUZWFtSW5mbyBmcm9tICcuL2NvbXBvbmVudHMvVGVhbUluZm8nXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ2RhdGEvYWN0aW9ucy91c2VyJ1xuXG5jb25zdCB0YWJzID0gWydCYXNpYyBJbmZvJywgJ1RlYW0gSW5mbyddXG5cbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdHBlbmRpbmc6IGZhbHNlLFxuXHRcdGFjdGl2ZTogJ0Jhc2ljIEluZm8nXG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGdldFVzZXI6IFBULmZ1bmMsXG5cdFx0dXNlcjogUFQub2JqZWN0XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLmdldFVzZXIoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHR0aGlzLnNldFN0YXRlKHtcblx0XHRsb2FkZWQ6IHRydWVcblx0fSlcbn0pXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXt0aGlzLnN0YXRlLmxvYWRlZH0+XG4gICAgICAgICAgICAgIDxMb2FkQmFyLz5cbiAgICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT1cIk15IEFjY291bnRcIj5cbiAgICAgICAgICAgICAgICA8VGFiU3dpdGNoZXIgdGFicz17dGFic30gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICB7cmVuZGVySWYodGhpcy5zdGF0ZS5hY3RpdmUgPT0gJ0Jhc2ljIEluZm8nKShcbiAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJCYXNpYyBJbmZvXCIgZXZlbnRLZXk9ezF9IHRhYkNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxCYXNpY0luZm8gdXNlcj17dGhpcy5wcm9wcy51c2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3JlbmRlcklmKHRoaXMuc3RhdGUuYWN0aXZlID09PSAnVGVhbSBJbmZvJykoXG4gICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiVGVhbSBJbmZvXCIgZXZlbnRLZXk9ezJ9IHRhYkNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxUZWFtSW5mby8+XG4gICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9SdENhcmQ+XG4gICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG5cdFx0KVxuXHR9XG5cblx0dG9nZ2xlID0gKGluZCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBpbmRcblx0XHR9KVxuXHR9XG5cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHR1c2VyOiBzdGF0ZS51c2VyXG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcblx0cmV0dXJuIHtcblx0XHRnZXRVc2VyOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyKCkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEFjY291bnQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWNjb3VudC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHN0eWxlcyA9IHByb3BzID0+ICh7XG5cdGRpc3BsYXk6IHByb3BzLmlubGluZT8gJ2lubGluZS1mbGV4JyA6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6IHByb3BzLmFyb3VuZD8gJ3NwYWNlLWFyb3VuZCcgOiAnc3BhY2UtYmV0d2VlbicsXG5cdG1hcmdpbjogJ2F1dG8nLFxuXHQuLi5wcm9wcy5zdHlsZVxufSlcblxuY29uc3QgZmxleFJvdyA9IHByb3BzID0+IChcbiAgICA8ZGl2IHN0eWxlPXsgc3R5bGVzKHByb3BzKSB9IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4pXG5cbmZsZXhSb3cucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxleFJvd1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9GbGV4Um93LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHtvbWl0fSBmcm9tICdyYW1kYSdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5cbmNvbnN0IEljb24gPSBwcm9wcyA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDggOFwiIHsuLi5vbWl0KFsnaWNvbicsICdjb2xvcicsICdhbHRDbGFzcycsICdjbGFzc05hbWUnXSwgcHJvcHMpfSBjbGFzc05hbWU9e2N4KHByb3BzLmFsdENsYXNzIHx8ICdpY29uJywgcHJvcHMuY2xhc3NOYW1lKX0+XG4gICAgICA8dXNlIHhsaW5rSHJlZj17JyMnICsgcHJvcHMuaWNvbn0gY2xhc3NOYW1lPXtwcm9wcy5jb2xvciB8fCAnaWNvbi1ibGFjayd9IC8+XG4gICAgPC9zdmc+XG4pXG5cbkljb24ucHJvcFR5cGVzID0ge1xuXHRpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRhbHRDbGFzczogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9JY29uLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jbGFzcyBJbnB1dEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHZhbGlkOiB0cnVlXG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHVwZGF0ZUZvcm06IFByb3BUeXBlcy5mdW5jXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgPSBlID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5maWVsZC52YWxpZGF0ZSkge1xuXHRcdFx0bGV0IHZhbGlkID0gdGhpcy5wcm9wcy5maWVsZC52YWxpZGF0ZShlLnRhcmdldC52YWx1ZSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR2YWxpZFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRvbkJsdXIgPSBlID0+IHtcblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0dmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuXHRcdFx0ZmllbGQ6IHRoaXMucHJvcHMuZmllbGQsXG5cdFx0XHR2YWxpZDogdGhpcy5zdGF0ZS52YWxpZFxuXHRcdH1cblx0XHR0aGlzLnByb3BzLnVwZGF0ZUZvcm0oZGF0YSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQge2ZpZWxkLCB2YWx1ZXN9ID0gdGhpcy5wcm9wc1xuXG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS52YWxpZCA/ICdmb3JtLWdyb3VwIHJvdycgOiAnZm9ybS1ncm91cCByb3cgaGFzLXdhcm5pbmcnIH0ga2V5PXsgZmllbGQubGFiZWwgfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbCBjb2wtbWQtMiBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIHsgZmllbGQubGFiZWwgfVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5lZGl0ID8gKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17IGZpZWxkLnR5cGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBmaWVsZC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyB2YWx1ZXNbZmllbGQubmFtZV0gfHwgZmllbGQubGFiZWwgfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1zdGF0aWMgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWVzW2ZpZWxkLm5hbWVdIHx8IGZpZWxkLmxhYmVsIH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcblx0fVxufVxuXG5JbnB1dEJveC5wcm9wVHlwZXMgPSB7XG5cdGZpZWxkOiBQcm9wVHlwZXMub2JqZWN0LFxuXHR2YWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cdGVkaXQ6IFByb3BUeXBlcy5ib29sXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IElucHV0Qm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0lucHV0Qm94LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgTG9hZEJhciA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuaW5saW5lPyAnbG9hZC1iYXIgbG9hZC1iYXItaW5saW5lJyA6ICdsb2FkLWJhcid9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtYmFyX19iYXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWJhcl9fYmFyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1iYXJfX2JhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5Mb2FkQmFyLnByb3BUeXBlcyA9IHtcblx0aW5saW5lOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQmFyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZSBmcm9tICdyZWFjdC1jc3MtdHJhbnNpdGlvbi1yZXBsYWNlJ1xuXG5cbmNsYXNzIExvYWRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGxvYWRlZDogUHJvcFR5cGVzLmJvb2xcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBjb250ZW50ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIHRyYW5zaXRpb25OYW1lPVwibG9hZF9jb250YWluZXJcIiB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9IHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezUwMH0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubG9hZGVkID8gY29udGVudFsxXSA6IGNvbnRlbnRbMF19XG4gICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2U+XG5cdFx0KVxuXHR9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuY29uc3QgUnRDYXJkID0gcHJvcHMgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInJ0LWNhcmRfX2NvbnRlbnRcIiBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgICAgICB7cmVuZGVySWYocHJvcHMudGl0bGUpKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJydC1jYXJkX19oZWFkZXIgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cblx0XHRcdDwvZGl2Pil9XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbilcblxuUnRDYXJkLnByb3BUeXBlcyA9IHtcblx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblx0c3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRDYXJkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRDYXJkLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBJbnB1dEJveCwgRmxleFJvdyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuXG5cbmNsYXNzIFJ0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHZhbGlkOiBuZXcgU2V0KClcblx0fVxuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0ZmllbGRzOiBbXSxcblx0XHR2YWx1ZXM6IHt9XG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGZpZWxkczogUFQuYXJyYXlPZihcbiAgICAgICAgICAgIFBULm9uZU9mVHlwZShbXG5cdFBULmFycmF5LFxuXHRQVC5zaGFwZSh7XG5cdFx0bmFtZTogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0dHlwZTogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0bGFiZWw6IFBULnN0cmluZyxcblx0XHRvbkJsdXI6IFBULmZ1bmMsXG5cdFx0b25DbGljazogUFQuZnVuYyxcblx0XHR2YWxpZGF0ZTogUFQuZnVuY1xuXHR9KVxuXVxuICAgICAgICAgICAgKSkuaXNSZXF1aXJlZCxcblx0XHR2YWx1ZXM6IFBULm9iamVjdCxcblx0XHRlZGl0YWJsZTogUFQuYm9vbCxcblx0XHRwZW5kaW5nOiBQVC5ib29sLFxuXHRcdG9uU2F2ZTogUFQuZnVuY1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy52YWx1ZXMpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCIgc3R5bGU9eyB7IG9wYWNpdHk6IHRoaXMucHJvcHMucGVuZGluZyA/IDAuNSA6IDEsIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuM3MgbGluZWFyJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfSB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8RmxleFJvdyBpbmxpbmU+XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMucHJvcHMuZWRpdGFibGUgJiYgIXRoaXMuc3RhdGUuZWRpdCkoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17IHRoaXMudG9nZ2xlRWRpdCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMucHJvcHMuZWRpdGFibGUgJiYgdGhpcy5zdGF0ZS5lZGl0KShcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZUVkaXQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMuc3RhdGUuZWRpdCkoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshIXRoaXMuc3RhdGUudmFsaWQuc2l6ZX0gY2xhc3NOYW1lPXtjeCgnYnRuJywgIXRoaXMuc3RhdGUudmFsaWQuc2l6ZT8gJ2J0bi1vdXRsaW5lLXByaW1hcnknOidkaXNhYmxlZCcsIHsnYnRuLW91dGxpbmUtcGVuZGluZyc6IHRoaXMucHJvcHMucGVuZGluZ30pfSBvbkNsaWNrPXsgdGhpcy5zYXZlIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7IHRoaXMubWFrZUZvcm0oKSB9XG4gICAgICAgICAgICAgIDwvZm9ybT5cblx0XHQpXG5cdH1cblxuXHR0b2dnbGVFZGl0ID0gZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZWRpdCA/IHRoaXMucHJvcHMudmFsdWVzIDogdGhpcy5zdGF0ZS5kYXRhKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZWRpdDogIXRoaXMuc3RhdGUuZWRpdCxcblx0XHRcdGRhdGFcblx0XHR9KVxuXHR9XG5cblx0c2F2ZSA9IGUgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGxldCByZXN1bHQgPSB0aGlzLnByb3BzLm9uU2F2ZSh0aGlzLnN0YXRlLmRhdGEpXG5cdFx0aWYgKHJlc3VsdC50aGVuKSB7XG5cdFx0XHRyZXN1bHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZWRpdDogZmFsc2UsXG5cdFx0XHRcdFx0ZGF0YTogZGF0YVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGVkaXQ6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiByZXN1bHRcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0bWFrZUZvcm0gPSBmaWVsZHMgPT4ge1xuXHRcdGZpZWxkcyA9IGZpZWxkcyB8fCB0aGlzLnByb3BzLmZpZWxkc1xuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZCwgaSkgPT4ge1xuXHRcdFx0aWYgKGZpZWxkIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0cmV0dXJuICg8ZGl2IGtleT17IGkgfSBzdHlsZT17IHsgcGFkZGluZzogJzMwcHggMCAwJyB9IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57IGZpZWxkWzBdIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5tYWtlRm9ybShmaWVsZC5zbGljZSgxKSwgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmVkaXQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGZpZWxkLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9eyBmaWVsZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9eyB0aGlzLnN0YXRlLmRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdD17IHRoaXMuc3RhdGUuZWRpdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXsgdGhpcy51cGRhdGVGb3JtIH0gLz5cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHR1cGRhdGVGb3JtID0gdXBkYXRlID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcblx0XHRcdGxldCBtb2RpZmllciA9IHtcblx0XHRcdFx0dmFsaWQ6IG5ldyBTZXQoc3RhdGUudmFsaWQpLFxuXHRcdFx0XHRkYXRhOiBPYmplY3QuYXNzaWduKHN0YXRlLmRhdGEsIHtbdXBkYXRlLmZpZWxkLm5hbWVdOiB1cGRhdGUudmFsdWV9KVxuXHRcdFx0fVxuXG5cdFx0XHRpZighdXBkYXRlLnZhbGlkKSB7XG5cdFx0XHRcdG1vZGlmaWVyLnZhbGlkLmFkZCh1cGRhdGUuZmllbGQubmFtZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1vZGlmaWVyLnZhbGlkLmRlbGV0ZSh1cGRhdGUuZmllbGQubmFtZSlcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1vZGlmaWVyXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRGb3JtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jb25zdCBSdExpc3QgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvX3BvZF9fbGlzdFwiPlxuICAgICAgICB7IHByb3BzLmxpc3RJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoPGRpdiBrZXk9e2l0ZW0uX2lkIHx8IGluZGV4fSBjbGFzc05hbWU9XCJcIj57aXRlbS52YWx1ZSB8fCBpdGVtfTwvZGl2PikpIH1cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUnRMaXN0XG5cblJ0TGlzdC5wcm9wVHlwZXMgPSB7XG5cdGxpc3RJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pKSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdExpc3QuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNvbnN0IFJ0Q2FyZCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9eydydC1wYW5lICcgKyAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKX0+XG4gICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSdENhcmRcblxuUnRDYXJkLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRQYW5lLmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBjb2xvciBmcm9tICdzZXJ2aWNlcy9jb2xvclNlcnZpY2UnXG5cbmNsYXNzIFJ0U3dhdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCBjID0gdGhpcy5wcm9wcy5jb2xvclxuXHRcdGlmICghdGhpcy5wcm9wcy5jb2xvci5jb2xvcikge1xuXHRcdFx0bGV0IHQgPSB0aGlzLnByb3BzLmNvbG9ycy5maWx0ZXIoY29sb3IgPT4gY29sb3IudmFsdWUgPT09IHRoaXMucHJvcHMuY29sb3IudG9Mb3dlckNhc2UoKSlbMF1cblx0XHRcdGMgPSB7XG5cdFx0XHRcdGNvbG9yOiB0PyB0LmNvbG9yIDogJyNGRkYnLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy5jb2xvci50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9jYWxTdHlsZSA9IHtcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYy5jb2xvciB8fCAnd2hpdGUnLFxuXHRcdFx0Y29sb3I6IGNvbG9yLnRleHRDb2xvcihjLmNvbG9yKSxcblx0XHRcdGJvcmRlclJhZGl1czogJzNweCcsXG5cdFx0XHRoZWlnaHQ6ICczMHB4J1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgbG9jYWxTdHlsZSwgdGhpcy5wcm9wcy5zdHlsZT8gdGhpcy5wcm9wcy5zdHlsZSA6IHt9KVxuXG5cdFx0cmV0dXJuICg8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17IHN0eWxlIH0+PHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLXNtLWRvd25cIj57IGMudmFsdWUgfHwgJycgfTwvc3Bhbj48L3NwYW4+KVxuXHR9XG5cbn1cblxuUnRTd2F0Y2gucHJvcFR5cGVzID0ge1xuXHRjb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXHRjb2xvcnM6IFByb3BUeXBlcy5hcnJheSxcblx0c3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRjb2xvcnM6IHN0YXRlLnRlYW0uY29sb3JzXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSkoUnRTd2F0Y2gpXG5cbmV4cG9ydCB7IFJ0U3dhdGNoIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRTd2F0Y2guanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnXG5cbmNsYXNzIFNvcnRhYmxlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGl0ZW1zOiBbXVxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0Y29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdGxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXHRcdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcblx0XHRjb21wYXJhdG9yOiBQcm9wVHlwZXMuZnVuY1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5MaXN0SXRlbSA9IHRoaXMucHJvcHMuY29tcG9uZW50XG5cdFx0dGhpcy5jb21wYXJhdG9yID0gdGhpcy5wcm9wcy5jb21wYXJhdG9yIHx8ICgoYSwgYikgPT4gYSA9PT0gYilcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogdGhpcy5wcm9wcy5saXN0XG5cdFx0fSlcblxuXHRcdGlmICh0aGlzLnByb3BzLm9wdGlvbnMpIHtcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBSLmRpZmZlcmVuY2VXaXRoKHRoaXMuY29tcGFyYXRvciwgdGhpcy5wcm9wcy5vcHRpb25zLCB0aGlzLnByb3BzLmxpc3QpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0b3B0aW9uc1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogbmV4dFByb3BzLmxpc3Rcblx0XHR9KVxuXHRcdGlmIChuZXh0UHJvcHMub3B0aW9ucyAmJiB0aGlzLnN0YXRlLmN1cnJlbnQgfHwgbmV4dFByb3BzLmxpc3QpIHtcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBSLmRpZmZlcmVuY2VXaXRoKHRoaXMuY29tcGFyYXRvciwgbmV4dFByb3BzLm9wdGlvbnMsIG5leHRQcm9wcy5saXN0KVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG9wdGlvbnNcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5jdXJyZW50KSByZXR1cm4gbnVsbFxuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfSBzdHlsZT17IHsgZm9udFNpemU6ICcxLjVlbScgfSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5jdXJyZW50Lm1hcCgoaXRlbSwgaW5kLCBhcnIpID0+IFxuXHRcdFx0XHRcdDx0aGlzLkxpc3RJdGVtIGRhdGEtc291cmNlPVwibGlzdFwiIGtleT17IGl0ZW0ua2V5IHx8IGluZCB9IHsuLi5pdGVtfSB7Li4udGhpcy5tYWtlSGFuZGxlcnMoaW5kLCBhcnIsICdsaXN0Jyl9Lz4pIH1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcHRpb25zID8gKFxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuY2xhc3NOYW1lIH0gc3R5bGU9eyB7IGZvbnRTaXplOiAnMS41ZW0nIH0gfT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcHRpb25zLm1hcCgoaXRlbSwgaW5kLCBhcnIpID0+IFxuXHRcdFx0XHRcdFx0PHRoaXMuTGlzdEl0ZW0gZGF0YS1zb3VyY2U9XCJvcHRpb25zXCIga2V5PXsgaXRlbS5rZXkgfHwgaW5kIH0gey4uLml0ZW19IHsuLi50aGlzLm1ha2VIYW5kbGVycyhpbmQsIGFyciwgJ29wdGlvbnMnKX0vPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Db2w+KSA6IG51bGwgfVxuICAgICAgICAgICAgPC9Sb3c+XG5cdFx0KVxuXHR9XG5cblx0bWFrZUhhbmRsZXJzID0gKGluZCwgYXJyLCBzb3VyY2UpID0+ICh7XG5cdFx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRcdG9uRHJhZ1N0YXJ0OiBlID0+IHtcblx0XHRcdGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2luZCcsIGluZClcblx0XHRcdGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NvdXJjZScsIHNvdXJjZSlcblx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcblx0XHR9LFxuXHRcdG9uRHJhZ092ZXI6IGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0fSxcblx0XHRvbkRyb3A6IGUgPT4ge1xuXHRcdFx0bGV0IHNvdXJjZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NvdXJjZScpXG5cdFx0XHRsZXQgZGVzdCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNvdXJjZVxuXG5cdFx0XHRpZiAoc291cmNlID09PSBkZXN0KSByZXR1cm5cblxuXHRcdFx0bGV0IG9sZEluZCA9ICtlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdpbmQnKVxuXHRcdFx0bGV0IG5ld0luZCA9IGluZFxuXG5cdFx0XHRsZXQgbGlzdHMgPSB7XG5cdFx0XHRcdGxpc3Q6IFsuLi50aGlzLnN0YXRlLmN1cnJlbnRdLFxuXHRcdFx0XHRvcHRpb25zOiBbLi4udGhpcy5zdGF0ZS5vcHRpb25zXVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3SW5kID09IGFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdG5ld0luZCA9IGFyci5sZW5ndGhcblx0XHRcdH1cblx0XHRcdGxldCBuZXdFbCA9IGxpc3RzW3NvdXJjZV0uc3BsaWNlKG9sZEluZCwgMSlbMF1cblx0XHRcdGxpc3RzW2Rlc3RdLnNwbGljZShuZXdJbmQsIDAsIG5ld0VsKVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Y3VycmVudDogbGlzdHMubGlzdCxcblx0XHRcdFx0b3B0aW9uczogbGlzdHMub3B0aW9uc1xuXHRcdFx0fSlcblx0XHR9XG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9Tb3J0YWJsZUxpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBTd2lwZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBvblRvdWNoU3RhcnQ9e3RoaXMudG91Y2hTdGFydH0gb25Ub3VjaEVuZD17dGhpcy50b3VjaEVuZH0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHR0b3VjaFN0YXJ0ID0gZSA9PiB7XG5cdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuXG5cdFx0dGhpcy5zdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFhcblx0fVxuXG5cdHRvdWNoRW5kID0gZSA9PiB7XG5cdFx0bGV0IGRpc3QgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnN0YXJ0WFxuXHRcdGlmIChkaXN0IDwgMTAwICYmIGRpc3QgPiAtMTAwKSByZXR1cm5cblxuXHRcdGlmICghdGhpcy5wcm9wcy5vbkxlZnQpIHJldHVybiB0aGlzLnByb3BzLm9uU3dpcGUoZGlzdClcblxuXHRcdGRpc3QgPiAwID8gdGhpcy5wcm9wcy5vblJpZ2h0KCkgOiB0aGlzLnByb3BzLm9uTGVmdCgpXG5cdH1cbn1cblxuU3dpcGVDb250YWluZXIucHJvcFR5cGVzID0ge1xuXHRvbkxlZnQ6IFByb3BUeXBlcy5mdW5jLFxuXHRvblJpZ2h0OiBQcm9wVHlwZXMuZnVuYyxcblx0b25Td2lwZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vU3dpcGVDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2LCBOYXZJdGVtLCBOYXZMaW5rIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZnVuY3Rpb24gaXNBY3RpdmUocHJvcHMsIHRhYikge1xuXHRyZXR1cm4gcHJvcHMuYWN0aXZlID09PSB0YWIgPyAnYWN0aXZlIHRleHQtY2FwaXRhbGl6ZScgOiAndGV4dC1jYXBpdGFsaXplJ1xufVxuXG5jb25zdCBTbGlkZXIgPSAoKSA9PiA8bGkgY2xhc3NOYW1lPSd0YWItc2xpZGVyJy8+XG5cbmNvbnN0IHRhYlN3aXRjaGVyID0gcHJvcHMgPT4gKFxuICAgIDxOYXYgdGFicz5cbiAgICAgIHsgcHJvcHMudGFicy5tYXAodGFiID0+IChcbiAgICAgICAgICAgIDxOYXZJdGVtIGtleT17dGFifT5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBpc0FjdGl2ZShwcm9wcywgdGFiKSB9IFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7cHJvcHMudG9nZ2xlKHRhYil9IH0+XG4gICAgICAgICAgICAgICAge3RhYn1cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgKSkgfVxuICAgICAgICA8U2xpZGVyIGtleT0nc2xpZGVyJy8+XG4gICAgPC9OYXY+XG4pXG5cbnRhYlN3aXRjaGVyLnByb3BUeXBlcyA9IHtcblx0dGFiczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cdGFjdGl2ZTogUHJvcFR5cGVzLnN0cmluZyxcblx0dG9nZ2xlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG50YWJTd2l0Y2hlci5kZWZhdWx0UHJvcHMgPSB7XG5cdHRhYnM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYlN3aXRjaGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1RhYlN3aXRjaGVyLmpzeCIsImltcG9ydCBGbGV4Um93IGZyb20gJy4vRmxleFJvdydcbmltcG9ydCBJbnB1dEJveCBmcm9tICcuL0lucHV0Qm94J1xuaW1wb3J0IExvYWRCYXIgZnJvbSAnLi9Mb2FkQmFyJ1xuaW1wb3J0IExvYWRDb250YWluZXIgZnJvbSAnLi9Mb2FkQ29udGFpbmVyJ1xuaW1wb3J0IFJ0Q2FyZCBmcm9tICcuL1J0Q2FyZCdcbmltcG9ydCBSdEZvcm0gZnJvbScuL1J0Rm9ybSdcbmltcG9ydCBSdExpc3QgZnJvbSAnLi9SdExpc3QnXG5pbXBvcnQgUnRTd2F0Y2ggZnJvbSAnLi9SdFN3YXRjaCdcbmltcG9ydCBTd2lwZUNvbnRhaW5lciBmcm9tICcuL1N3aXBlQ29udGFpbmVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IFJ0UGFuZSBmcm9tICcuL1J0UGFuZSdcbmltcG9ydCBTb3J0YWJsZUxpc3QgZnJvbSAnLi9Tb3J0YWJsZUxpc3QnXG5pbXBvcnQgVGFiU3dpdGNoZXIgZnJvbSAnLi9UYWJTd2l0Y2hlcidcblxuZXhwb3J0IHtcbiAgICAvLyBVSSBcbiAgICBSdENhcmQsXG4gICAgUnRQYW5lLFxuICAgIFJ0Rm9ybSxcbiAgICBSdExpc3QsXG4gICAgSWNvbixcbiAgICBTb3J0YWJsZUxpc3QsXG4gICAgVGFiU3dpdGNoZXIsXG5cbiAgICAvLyBMQVlPVVRcbiAgICBGbGV4Um93LFxuICAgIExvYWRDb250YWluZXIsXG4gICAgU3dpcGVDb250YWluZXIsXG5cbiAgICAvL0VMRU1FTlRTXG4gICAgSW5wdXRCb3gsXG4gICAgTG9hZEJhcixcbiAgICBSdFN3YXRjaFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUnRCYXIgZnJvbSAnY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyJ1xuXG5pbXBvcnQgeyBnZXRSb3V0ZXNCeUd5bSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IM+AIGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgR3ltSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGRhdGE6IHVuZGVmaW5lZFxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRneW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0Z2V0Um91dGVzOiBQcm9wVHlwZXMuZnVuYyxcblx0XHRkYXRhOiBQcm9wVHlwZXMuYXJyYXlcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuZ2V0Um91dGVzKHRoaXMucHJvcHMuZ3ltLl9pZClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneW0taXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3ltLXRpdGxlIHRleHQtYnJhbmQgdGV4dC11cHBlcmNhc2UgdGV4dC10aGluXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17ICcvZ3ltcy8nICsgdGhpcy5wcm9wcy5neW0udXJsIH0gY2xhc3NOYW1lPVwibGluay1wbGFpblwiPlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd5bS1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVxuICAgICAgICAgICAgICAgICAgICA/IDxSdEJhciBkYXRhPXsgdGhpcy5wcm9wcy5kYXRhIH0gY29sb3I9e3RoaXMucHJvcHMuZ3ltLmNvbG9yfS8+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlLCBvd25Qcm9wcykge1xuXHRsZXQgZ3ltUm91dGVzID0gc3RhdGUucm91dGVzLnRvQXJyYXkoKS5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBvd25Qcm9wcy5neW0uX2lkKVxuXG5cdHJldHVybiB7XG5cdFx0ZGF0YTogdHJhbnNmb3JtUm91dGVzKGd5bVJvdXRlcylcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuXHRyZXR1cm4ge1xuXHRcdGdldFJvdXRlczogaWQgPT4gZGlzcGF0Y2goZ2V0Um91dGVzQnlHeW0oaWQpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShHeW1JdGVtKVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzKSB7XG5cdGlmICghcm91dGVzLmxlbmd0aCkgcmV0dXJuIG51bGxcblx0bGV0IHNvcnRlZCA9IM+ALmJ1Y2tldHMocm91dGVzLm1hcChib3VsZGVyID0+IGJvdWxkZXIuZ3JhZGUpLCDPgC5yYW5nZSgxMykpXG5cdHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4gc29ydGVkW2tleV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9jb21wb25lbnRzL0d5bUl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgR3ltSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvR3ltSXRlbSdcbmltcG9ydCB7IExvYWRCYXIsIExvYWRDb250YWluZXIsIFJ0Q2FyZCB9ZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmNsYXNzIEd5bUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ3ltczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT1cIkd5bXNcIj5cbiAgICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXsgISF0aGlzLnByb3BzLmd5bXMubGVuZ3RoIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIwXCIgY2xhc3NOYW1lPVwiZ3ltLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMVwiIGNsYXNzTmFtZT1cImd5bS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZ3ltcy5tYXAoZ3ltID0+ICg8R3ltSXRlbSBrZXk9eyBneW0uX2lkIH0gZ3ltPXsgZ3ltIH0gY2xhc3NOYW1lPVwiZ3ltLWl0ZW1cIiAvPikpIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Mb2FkQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9SdENhcmQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcFByb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltcyxcbiAgICAgICAgZmV0Y2hpbmc6IHN0YXRlLmZldGNoaW5nXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShHeW1MaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBSb3V0ZVJvdyBmcm9tICcuL3JvdXRlUm93J1xuaW1wb3J0IFJvdXRlSGVhZGVyIGZyb20gJy4vcm91dGVIZWFkZXInXG5cbmltcG9ydCBwaSBmcm9tICdydHV0aWwnXG5cbmNsYXNzIFJvdXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHJhbmdlOiBuZXcgU2V0KClcblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0cm91dGVzOiBQcm9wVHlwZXMuYXJyYXksXG5cdFx0dGVhbTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRneW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0dXBkYXRlUm91dGU6IFByb3BUeXBlcy5mdW5jLFxuXHRcdHJlbW92ZVJvdXRlczogUHJvcFR5cGVzLmZ1bmMsXG5cdFx0d2FsbHM6IFByb3BUeXBlcy5hcnJheVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cm91dGVzOiBzb3J0T24oWy4uLnRoaXMucHJvcHMucm91dGVzXSwgJ3NldF9vbicpXG5cdFx0fSlcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dCkge1xuXHRcdGlmIChuZXh0LnJvdXRlcykge1xuXHRcdFx0bGV0IHJvdXRlcyA9IHNvcnRPbihuZXh0LnJvdXRlcywgdGhpcy5zdGF0ZS5zb3J0IHx8ICdzZXRfb24nKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJvdXRlczogdGhpcy5zdGF0ZS5kaXIgPT09ICdkZXNjJyA/IHJvdXRlcy5yZXZlcnNlKCkgOiByb3V0ZXNcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1zbSB0YWJsZS1tb2JpbGUgdGFibGUtZml4ZWQgdGFibGVfX3JvdXRlbGlzdCc+XG4gICAgICAgICAgICAgIDxSb3V0ZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU29ydD17IHRoaXMuaGFuZGxlU29ydCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0PXsgdGhpcy5zdGF0ZS5zb3J0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcj17IHRoaXMuc3RhdGUuZGlyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUhhbmRsZXI9eyB0aGlzLmRlbGV0ZUhhbmRsZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyB0aGlzLnN0YXRlLnJhbmdlLnNpemUgPiAwIH0gLz5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnJvdXRlcy5tYXAoKHJvdXRlLCBpbmQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZD17IGluZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgcm91dGUuX2lkICsgcm91dGUudXBkYXRlZF9hdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU9eyByb3V0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0SGFuZGxlcj17IHRoaXMuc2VsZWN0SGFuZGxlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyB0aGlzLnN0YXRlLnJhbmdlLmhhcyhpbmQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtPXsgdGhpcy5wcm9wcy50ZWFtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSb3V0ZT17IHRoaXMudXBkYXRlUm91dGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxzPXt0aGlzLnByb3BzLndhbGxzfSAvPlxuICAgICAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXHRcdClcblx0fVxuXG5cdHNlbGVjdEhhbmRsZXIgPSB7XG5cdFx0bW91c2VEb3duOiBlID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0XHRsZXQgbW9kaWZpZXIgPSBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5XG5cdFx0XHRsZXQgc2hpZnQgPSBlLnNoaWZ0S2V5XG5cdFx0XHRsZXQgaW5kID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXG5cdFx0XHRsZXQgcmFuZ2VcblxuXHRcdFx0aWYgKG1vZGlmaWVyICYmIHRoaXMubGFzdFNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bGV0IGwgPSBNYXRoLm1pbih0aGlzLmxhc3RTZWxlY3RlZCwgaW5kKVxuXHRcdFx0XHRsZXQgaCA9IE1hdGgubWF4KHRoaXMubGFzdFNlbGVjdGVkLCBpbmQpXG5cdFx0XHRcdGxldCBzZWxlY3RlZCA9IHBpLnJhbmdlKGwsIGggKyAxKVxuXHRcdFx0XHR0aGlzLmxhc3RTZWxlY3RlZCA9IHVuZGVmaW5lZFxuXHRcdFx0XHRyYW5nZSA9IG5ldyBTZXQoWy4uLnRoaXMuc3RhdGUucmFuZ2UsIC4uLnNlbGVjdGVkXSlcblx0XHRcdH0gZWxzZSBpZiAobW9kaWZpZXIgJiYgIXRoaXMubGFzdFNlbGVjdGVkKSB7XG5cdFx0XHRcdHRoaXMubGFzdFNlbGVjdGVkID0gaW5kXG5cdFx0XHRcdHJhbmdlID0gdGhpcy5zdGF0ZS5yYW5nZS5hZGQoaW5kKVxuXHRcdFx0fSBlbHNlIGlmIChzaGlmdCAmJiB0aGlzLnN0YXRlLnJhbmdlLnNpemUpIHtcblx0XHRcdFx0bGV0IGwgPSBNYXRoLm1pbiguLi50aGlzLnN0YXRlLnJhbmdlKVxuXHRcdFx0XHRsZXQgaCA9IE1hdGgubWF4KC4uLnRoaXMuc3RhdGUucmFuZ2UpXG5cdFx0XHRcdGxldCBzZWxlY3RlZCA9IGluZCA8PSBoID8gcGkucmFuZ2UoaW5kLCBoICsgMSkgOiBwaS5yYW5nZShsLCBpbmQgKyAxKVxuXHRcdFx0XHR0aGlzLmxhc3RTZWxlY3RlZCA9IHVuZGVmaW5lZFxuXHRcdFx0XHRyYW5nZSA9IG5ldyBTZXQoWy4uLnRoaXMuc3RhdGUucmFuZ2UsIC4uLnNlbGVjdGVkXSlcblx0XHRcdH0gZWxzZSBpZihkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgMTAwMCl7XG5cdFx0XHRcdGxldCB0ZW1wID0gbmV3IFNldCh0aGlzLnN0YXRlLnJhbmdlKVxuXHRcdFx0XHR0aGlzLnN0YXRlLnJhbmdlLmhhcyhpbmQpPyB0ZW1wLmRlbGV0ZShpbmQpIDogdGVtcC5hZGQoaW5kKVxuXHRcdFx0XHRyYW5nZSA9IHRlbXAgIFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sYXN0U2VsZWN0ZWQgPSBpbmRcblx0XHRcdFx0cmFuZ2UgPSB0aGlzLnN0YXRlLnJhbmdlLmhhcyhpbmQpICYmIHRoaXMuc3RhdGUucmFuZ2Uuc2l6ZSA9PT0gMSA/IG5ldyBTZXQoKSA6IG5ldyBTZXQoW2luZF0pXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyYW5nZVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRkZWxldGVIYW5kbGVyID0gZXZlbnQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCBpbmRzID0gWy4uLm5ldyBTZXQodGhpcy5zdGF0ZS5yYW5nZSldXG5cdFx0Y29uc3QgaWRzID0gaW5kcy5tYXAoaW5kID0+IHRoaXMuc3RhdGUucm91dGVzW2luZF0uX2lkKVxuXG5cdFx0dGhpcy5wcm9wcy5yZW1vdmVSb3V0ZXMoaWRzKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cmFuZ2U6IG5ldyBTZXQoKVxuXHRcdH0pXG5cdH1cblxuXHRoYW5kbGVTb3J0ID0gcGFyYW0gPT4gKCkgPT4ge1xuXHRcdGxldCBuZXdSb3V0ZXMgPSBbLi4udGhpcy5zdGF0ZS5yb3V0ZXNdLFxuXHRcdFx0ZGlyXG5cdFx0aWYgKHRoaXMuc3RhdGUuc29ydCA9PT0gcGFyYW0pIHtcblx0XHRcdG5ld1JvdXRlcy5yZXZlcnNlKClcblx0XHRcdGRpciA9IHRoaXMuc3RhdGUuZGlyID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNvcnRPbihuZXdSb3V0ZXMsIHBhcmFtKVxuXHRcdFx0ZGlyID0gJ2FzYydcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRpcixcblx0XHRcdHNvcnQ6IHBhcmFtLFxuXHRcdFx0cm91dGVzOiBuZXdSb3V0ZXNcblx0XHR9KVxuXHR9XG5cblx0dXBkYXRlUm91dGUgPSBuZXdSb3V0ZSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyb3V0ZXM6IHRoaXMuc3RhdGUucm91dGVzLm1hcChyb3V0ZSA9PiByb3V0ZS5faWQgPT09IG5ld1JvdXRlLl9pZCA/IG5ld1JvdXRlIDogcm91dGUpXG5cdFx0fSlcblx0XHR0aGlzLnByb3BzLnVwZGF0ZVJvdXRlKG5ld1JvdXRlKVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNvcnRPbihhcnIsIHByb3ApIHtcblx0aWYgKHByb3AgPT09ICdncmFkZScpIHtcblx0XHRyZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IGFbcHJvcF0gLSBiW3Byb3BdKVxuXHR9XG5cblx0aWYgKHByb3AgPT09ICdzZXRfb24nKSB7XG5cdFx0cmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBEYXRlLnBhcnNlKGEuc2V0X29uKSAtIERhdGUucGFyc2UoYi5zZXRfb24pKVxuXHR9XG5cdHJldHVybiBhcnIuc29ydChcbiAgICAgICAgZnVuY3Rpb24oYSwgYikge1xuXHRpZiAoYVtwcm9wXSA8IGJbcHJvcF0pIHtcblx0XHRyZXR1cm4gLTFcblx0fSBlbHNlIGlmIChhW3Byb3BdID4gYltwcm9wXSkge1xuXHRcdHJldHVybiAxXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIDBcblx0fVxufVxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVMaXN0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9Sb3V0ZUxpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUnRQYW5lIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmNsYXNzIFN0YXRzQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGF0YTogdGhpcy5tYWtlT3ZlcnZpZXcodGhpcy5wcm9wcy5kYXRhKVxuXHRcdH0pXG5cdH1cblx0XG5cdHJlbmRlcigpIHtcblx0XHRpZiAoIXRoaXMuc3RhdGUpIHJldHVybiBudWxsXG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxSdFBhbmU+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJ0LXBhbmVfX2hlYWRlclwiPk92ZXJ2aWV3PC9zcGFuPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ291bnQ6XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuZGF0YS5jb3VudCB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJvdXRlcyBOZWVkZWQ6XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBOL0FcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgT2xkZXN0IFJvdXRlOlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmRhdGEub2xkZXN0IH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvUnRQYW5lPlxuXHRcdClcblx0fVxuXG5cdG1ha2VPdmVydmlldyhkYXRhKSB7XG5cdFx0bGV0IG1pbiA9IEluZmluaXR5XG5cblx0XHRkYXRhLmZvckVhY2gocm91dGUgPT4ge1xuXHRcdFx0aWYgKG1pbiA+IERhdGUucGFyc2Uocm91dGUuc2V0X29uKSlcblx0XHRcdFx0bWluID0gcm91dGUuc2V0X29uXG5cdFx0fSlcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y291bnQ6IGRhdGEubGVuZ3RoLFxuXHRcdFx0b2xkZXN0OiBuZXcgRGF0ZShtaW4pLnRvTG9jYWxlRGF0ZVN0cmluZygpXG5cdFx0fVxuXHR9XG59XG5cblN0YXRzQ2FyZC5wcm9wVHlwZXMgPSB7XG5cdGRhdGE6IFByb3BUeXBlcy5hcnJheVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzQ2FyZFxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL1N0YXRzQ2FyZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IGFycm93cyA9IHtcblx0J2FzYyc6ICdcXHUyNUIyJyxcblx0J2Rlc2MnOiAnXFx1MjVCQydcbn1cblxuXG5jb25zdCBSb3V0ZUhlYWRlciA9IHByb3BzID0+IHtcblx0ZnVuY3Rpb24gYXJyb3cocGFyYW0pIHtcblx0XHRyZXR1cm4gcHJvcHMuc29ydCA9PT0gcGFyYW0gPyBhcnJvd3NbcHJvcHMuZGlyXSA6IG51bGxcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHRoZWFkPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRhYmxlLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdzZXRfb24nKX0+XG4gICAgICAgICAgICAgICAgICAgIERhdGVcbiAgICAgICAgICAgICAgICAgICAge2Fycm93KCdzZXRfb24nKX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdncmFkZScpfT5cbiAgICAgICAgICAgICAgICAgICAgR3JhZGVcbiAgICAgICAgICAgICAgICAgICAge2Fycm93KCdncmFkZScpfVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ2NvbG9yJyl9PlxuICAgICAgICAgICAgICAgICAgICBDb2xvclxuICAgICAgICAgICAgICAgICAgICB7YXJyb3coJ2NvbG9yJyl9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnd2FsbCcpfT5cbiAgICAgICAgICAgICAgICAgICAgV2FsbFxuICAgICAgICAgICAgICAgICAgICB7YXJyb3coJ3dhbGwnKX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdzZXR0ZXInKX0+XG4gICAgICAgICAgICAgICAgICAgIFNldHRlclxuICAgICAgICAgICAgICAgICAgICB7YXJyb3coJ3NldHRlcicpfVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0naGlkZGVuLXNtLWRvd24nPlxuICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zZWxlY3RlZCA/IDxhIGhyZWY9XCIjXCIgb25DbGljaz17cHJvcHMuZGVsZXRlSGFuZGxlcn0+UmVtb3ZlPC9hPiA6ICdTZWxlY3QnfVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuXHQpXG59XG5cblJvdXRlSGVhZGVyLnByb3BUeXBlcyA9IHtcblx0aGFuZGxlU29ydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0c29ydDogUHJvcFR5cGVzLnN0cmluZyxcblx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRkZWxldGVIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcblx0ZGlyOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZUhlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IFJ0U3dhdGNoLCBGbGV4Um93LCBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCB7ZGF0ZU1hdGh9IGZyb20gJ3J0dXRpbCdcbmltcG9ydCB7ZGlzc29jLCBvbWl0fSBmcm9tICdyYW1kYSdcblxuY29uc3QgVGRJbnB1dCA9IHByb3BzID0+IDx0ZCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+PGlucHV0IHsuLi5kaXNzb2MoJ2NsYXNzTmFtZScsIHByb3BzKX0gY2xhc3NOYW1lPVwiaW5wdXQtc20gZm9ybS1jb250cm9sXCIvPjwvdGQ+XG5cbmNvbnN0IFRkU2VsZWN0ID0gcHJvcHMgPT4gKFxuICA8dGQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiaW5wdXQtc20gZm9ybS1jb250cm9sXCIgey4uLm9taXQoWydjbGFzc05hbWUnLCAnY2hpbGRyZW4nXSwgcHJvcHMpfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvc2VsZWN0PlxuICA8L3RkPlxuKVxuXG5cbmNsYXNzIFJvdXRlUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0ZWRpdDogZmFsc2Vcblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0aW5kOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRcdHNlbGVjdEhhbmRsZXI6IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRcdHRlYW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0dXBkYXRlUm91dGU6IFByb3BUeXBlcy5mdW5jLFxuXHRcdHdhbGxzOiBQcm9wVHlwZXMuYXJyYXlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5lZGl0ID8gKFxuICAgICAgPHRyIGNsYXNzTmFtZT17J3RhYmxlLWNlbnRlciAnICsgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPyAncm91dGUtcm93X19zZWxlY3RlZCcgOiAnJyl9PlxuICAgICAgICA8VGRJbnB1dFxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd5bS1yb3dfX2RhdGVcIlxuICAgICAgICAgICAgICAgICBuYW1lPVwic2V0X29uXCJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmV3IERhdGUodGhpcy5wcm9wcy5yb3V0ZS5zZXRfb24pLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAvPlxuICAgICAgICA8VGRJbnB1dFxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJncmFkZVwiXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZpZWxkfVxuICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucm91dGUuZ3JhZGV9IC8+XG4gICAgICAgIDxUZElucHV0XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZS5jb2xvcn0gLz5cbiAgICAgICAgPFRkU2VsZWN0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2FsbFwiXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucm91dGUud2FsbH0+XG4gICAgICAgICAge3RoaXMucHJvcHMud2FsbHMubWFwKHdhbGwgPT4gXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17d2FsbH0gdmFsdWU9e3dhbGx9PlxuICAgICAgICAgICAgICAgICAgICB7d2FsbH1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGRTZWxlY3Q+XG4gICAgICAgIDxUZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNldHRlclwiXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucm91dGUuc2V0dGVyfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRlYW0ubWVtYmVycy5tYXAoc2V0dGVyID0+IChcbiAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzZXR0ZXIuX2lkfSB2YWx1ZT17c2V0dGVyLm5pY2tuYW1lfT5cbiAgICAgICAgICAgICAgICAge3NldHRlci5uaWNrbmFtZX1cbiAgICAgICAgICAgICAgIDwvb3B0aW9uPikpfVxuICAgICAgICA8L1RkU2VsZWN0PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ3ltLXJvd19fZWRpdCBoaWRkZW4tc20tZG93blwiPlxuICAgICAgICAgIDxGbGV4Um93IGlubGluZSBhcm91bmQgc3R5bGU9e3sgd2lkdGg6ICc4MCUnIH19PlxuICAgICAgICAgICAgPEljb24gb25DbGljaz17dGhpcy5jYW5jZWxFZGl0fSBpY29uPVwieFwiIC8+XG4gICAgICAgICAgICA8SWNvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXR9IGljb249XCJjaGVja1wiIC8+XG4gICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImhpZGRlbi1zbVwiXG4gICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByb3BzLnNlbGVjdEhhbmRsZXIubW91c2VEb3dufVxuICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICBkYXRhLWluZGV4PXt0aGlzLnByb3BzLmluZH0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICApIDogKFxuICAgICAgPHRyIGNsYXNzTmFtZT17J3RhYmxlLWNlbnRlciAnICsgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPyAncm91dGUtcm93X19zZWxlY3RlZCcgOiAnJyl9IG9uRG91YmxlQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdH0+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJneW0tcm93X19kYXRlXCIgYWx0PXsnICgnICsgZGF0ZU1hdGgud2Vla3NPbGQodGhpcy5wcm9wcy5yb3V0ZS5zZXRfb24pICsgJyB3ZWVrcyBvbGQpJ30+XG4gICAgICAgICAge25ldyBEYXRlKHRoaXMucHJvcHMucm91dGUuc2V0X29uKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJvdXRlLmdyYWRlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgezxSdFN3YXRjaCBjbGFzc05hbWU9XCJsaXN0X19zd2F0Y2hcIiBjb2xvcj17dGhpcy5wcm9wcy5yb3V0ZS5jb2xvcn0gLz59XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yb3V0ZS53YWxsfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge3RoaXMucHJvcHMucm91dGUuc2V0dGVyfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdoaWRkZW4tc20tZG93bic+XG4gICAgICAgICAgPEljb24gb25DbGljaz17dGhpcy50b2dnbGVFZGl0fSBpY29uPVwicGVuY2lsXCIgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImhpZGRlbi1zbVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5zZWxlY3RIYW5kbGVyLm1vdXNlRG93bn1cbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgZGF0YS1pbmRleD17dGhpcy5wcm9wcy5pbmR9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgKVxuXHR9XG5cblx0Y2FuY2VsRWRpdCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGVkaXQ6ICF0aGlzLnN0YXRlLmVkaXRcblx0XHR9KVxuXHR9XG5cblx0dG9nZ2xlRWRpdCA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5zdGF0ZS5lZGl0KSB7XG5cdFx0XHR0aGlzLnByb3BzLnVwZGF0ZVJvdXRlKHRoaXMucm91dGUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucm91dGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnJvdXRlKVxuXHRcdH1cblxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlZGl0OiAhdGhpcy5zdGF0ZS5lZGl0XG5cdFx0fSlcblx0fVxuXG5cdGRlbGV0ZVJvdXRlID0gKCkgPT4ge1xuXHR9XG5cblx0dXBkYXRlRmllbGQgPSBldmVudCA9PiB7XG5cdFx0bGV0IGZpZWxkID0gZXZlbnQudGFyZ2V0Lm5hbWVcblx0XHR0aGlzLnJvdXRlW2ZpZWxkXSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXHR9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZVJvd1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVSb3cuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIGZyb20gJ3JlYWN0LWNzcy10cmFuc2l0aW9uLXJlcGxhY2UnXG5cbmltcG9ydCBSdEJpZ0JhciBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvcnRCaWdCYXInXG5pbXBvcnQgeyBMb2FkQ29udGFpbmVyLCBMb2FkQmFyLCBSdENhcmQsIFRhYlN3aXRjaGVyIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdyZWFjdHN0cmFwJ1xuXG5pbXBvcnQgU3RhdHNDYXJkIGZyb20gJy4vY29tcG9uZW50cy9TdGF0c0NhcmQnXG5pbXBvcnQgUm91dGVMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Sb3V0ZUxpc3QnXG5cbmltcG9ydCB7IGdldFRlYW0gfSBmcm9tICdkYXRhL2FjdGlvbnMvdGVhbSdcbmltcG9ydCB7IGdldFJvdXRlc0J5R3ltLCBwdXRSb3V0ZSwgcmVtb3ZlUm91dGVzIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3JvdXRlJ1xuXG5pbXBvcnQgcGkgZnJvbSAncnR1dGlsJ1xuXG5jbGFzcyBHeW1PdmVydmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0YWN0aXZlOiAncm9wZSdcblx0fVxuXG5cdGRlZmF1bHRQcm9wcyA9IHtcblx0XHR0eXBlczogW11cblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0bmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRneW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0bWF0Y2g6IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0dGVhbTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRyb3V0ZXM6IFByb3BUeXBlcy5hcnJheSxcblx0XHRnZXRUZWFtOiBQcm9wVHlwZXMuZnVuYyxcblx0XHRnZXRSb3V0ZXM6IFByb3BUeXBlcy5mdW5jLFxuXHRcdHVwZGF0ZVJvdXRlOiBQcm9wVHlwZXMuZnVuYyxcblx0XHRyZW1vdmVSb3V0ZXM6IFByb3BUeXBlcy5mdW5jXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmdldERhdGFGb3JHeW0odGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubmFtZSlcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZ3ltICYmIG5leHRQcm9wcy5neW0gJiYgdGhpcy5wcm9wcy5neW0ubmFtZSAhPT0gbmV4dFByb3BzLmd5bS5uYW1lKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bG9hZGVkOiBmYWxzZVxuXHRcdFx0fSlcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5nZXREYXRhRm9yR3ltKG5leHRQcm9wcy5neW0udXJsKSwgMzAwKVxuXHRcdH1cblxuXHRcdGlmIChuZXh0UHJvcHMucm91dGVzICYmIHRoaXMucHJvcHMuZ3ltKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Y291bnQ6IHRoaXMudXBkYXRlUm91dGVzKG5leHRQcm9wcy5yb3V0ZXMpLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVSb3V0ZXMgPSAobmV3Um91dGVzLCB0eXBlKSA9PiB7XG5cdFx0dHlwZSA9IHR5cGU/IHR5cGUudG9Mb3dlckNhc2UoKSA6IHRoaXMucHJvcHMuZ3ltLnR5cGVbMF1cblx0XHRsZXQgZ3JhZGVzID0gdGhpcy5wcm9wcy50ZWFtLmdyYWRlc1t0eXBlXVxuXHRcdGxldCByb3V0ZXMgPSBuZXdSb3V0ZXMuZmlsdGVyKHJvdXRlID0+IHJvdXRlLnR5cGUgPT09IHR5cGUpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyb3V0ZXM6IHJvdXRlc1xuXHRcdH0pXG5cdFx0cmV0dXJuIHRyYW5zZm9ybVJvdXRlcyhyb3V0ZXMsIGdyYWRlcylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5lcnJvcikgcmV0dXJuIDxSZWRpcmVjdCB0bz0nLycgLz5cblx0XHRpZiAoIXRoaXMucHJvcHMuZ3ltKSByZXR1cm4gKDxSdENhcmQgc3R5bGU9e3sgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KScgfX0+IDxMb2FkQmFyLz48L1J0Q2FyZD4pXG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxSdENhcmQgdGl0bGU9e3RoaXMuc3RhdGUubG9hZGVkPyB0aGlzLnByb3BzLmd5bS5uYW1lIDogJyd9IGtleT17dGhpcy5wcm9wcy5neW0ubmFtZX0gc3R5bGU9e3sgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KScgfX0+XG4gICAgICAgICAgICAgIDxMb2FkQ29udGFpbmVyIGxvYWRlZD17dGhpcy5zdGF0ZS5sb2FkZWR9PlxuICAgICAgICAgICAgICAgIDxMb2FkQmFyLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtc3RyZXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFiU3dpdGNoZXIgdGFicz17dGhpcy5wcm9wcy5neW0udHlwZX0gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBlcmF0b3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFJ0QmlnQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXt0aGlzLnByb3BzLmd5bS5jb2xvcn0+PC9SdEJpZ0Jhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNFwiIGNsYXNzTmFtZT1cImNvbC1ucCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhdHNDYXJkIGRhdGE9e3RoaXMuc3RhdGUucm91dGVzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGVyYXRvclwiIC8+XG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIHRyYW5zaXRpb25OYW1lPVwibG9hZF9jb250YWluZXJcIiB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9IHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5zdGF0ZS5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcz17dGhpcy5zdGF0ZS5yb3V0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvdXRlPXt0aGlzLnByb3BzLnVwZGF0ZVJvdXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVSb3V0ZXM9e3RoaXMucHJvcHMucmVtb3ZlUm91dGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtPXt0aGlzLnByb3BzLnRlYW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxzPXt0aGlzLnByb3BzLmd5bS53YWxsc1t0aGlzLnN0YXRlLmFjdGl2ZV19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9Mb2FkQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9SdENhcmQ+XG5cblx0XHQpXG5cdH1cblxuXHR0b2dnbGUgPSBrZXkgPT4ge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0ga2V5KSByZXR1cm5cblx0XHRsZXQgcm91dGVzID0gdGhpcy51cGRhdGVSb3V0ZXModGhpcy5wcm9wcy5yb3V0ZXMsIGtleSlcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFjdGl2ZToga2V5LFxuXHRcdFx0Y291bnQ6IHJvdXRlc1xuXHRcdH0pXG5cdH1cblxuXHRnZXREYXRhRm9yR3ltKG5hbWUpIHtcblx0XHR0aGlzLnByb3BzLmdldFRlYW0oKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5vblRlYW0obmFtZSkpXG4gICAgICAgICAgICAudGhlbih0aGlzLnNldExvYWRlZClcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLnNldEVycm9yKVxuXHR9XG5cblx0b25UZWFtID0gbmFtZSA9PiB0ZWFtID0+IHtcblx0XHRsZXQgY3VycmVudEd5bSA9IHRlYW0uZ3ltcy5maWx0ZXIoZ3ltID0+IG5hbWUgPT09IGd5bS51cmwpWzBdXG5cdFx0aWYgKCFjdXJyZW50R3ltKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZXJyb3I6IHRydWVcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLmdldFJvdXRlcyhjdXJyZW50R3ltLl9pZClcblx0XHR9XG5cdH1cblxuXHRzZXRMb2FkZWQgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7bG9hZGVkOiB0cnVlfSlcblx0fVxuXG5cdHNldEVycm9yID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiB0cnVlfSlcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSwgb3duUHJvcHMpIHtcblx0bGV0IGd5bSA9IHN0YXRlLmd5bXMuZmlsdGVyKGd5bSA9PiBneW0udXJsID09PSBvd25Qcm9wcy5tYXRjaC5wYXJhbXMubmFtZSlbMF1cblx0bGV0IHJvdXRlcyA9IHN0YXRlLnJvdXRlcy5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBneW0uX2lkKVxuXHRsZXQgYXJyID0gcm91dGVzLnRvQXJyYXkoKVxuXHRhcnIuZm9yRWFjaCgocm91dGUsIGluZCkgPT4gcm91dGUuaW5kID0gaW5kKVxuXHRyZXR1cm4ge1xuXHRcdGd5bTogZ3ltLFxuXHRcdHJvdXRlczogYXJyLFxuXHRcdHRlYW06IHN0YXRlLnRlYW1cblx0fVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuXHRyZXR1cm4ge1xuXHRcdGdldFRlYW06ICgpID0+IGRpc3BhdGNoKGdldFRlYW0oKSksXG5cdFx0Z2V0Um91dGVzOiBpZCA9PiBkaXNwYXRjaChnZXRSb3V0ZXNCeUd5bShpZCkpLFxuXHRcdHVwZGF0ZVJvdXRlOiByb3V0ZSA9PiBkaXNwYXRjaChwdXRSb3V0ZShyb3V0ZSkpLFxuXHRcdHJlbW92ZVJvdXRlczogYXJyID0+IGRpc3BhdGNoKHJlbW92ZVJvdXRlcyhhcnIpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShHeW1PdmVydmlldylcblxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGVzKHJvdXRlcywgZ3JhZGVzKSB7XG5cdGlmICghZ3JhZGVzIHx8ICFyb3V0ZXMpIHJldHVybiBbXVxuXHRsZXQgc29ydGVkID0gcGkuYnVja2V0cyhyb3V0ZXMubWFwKHJvdXRlID0+IHJvdXRlLmdyYWRlKSwgcGkucmFuZ2UoZ3JhZGVzLmxlbmd0aCkpXG5cdHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4gKHtcblx0XHRcdGdyYWRlOiBncmFkZXNba2V5XSAmJiBncmFkZXNba2V5XS52YWx1ZSxcblx0XHRcdGNvdW50OiBzb3J0ZWRba2V5XVxuXHRcdH0pKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBHeW1MaXN0IGZyb20gJ2NvbXBvbmVudHMvZ3ltTGlzdCdcbmltcG9ydCBHeW1PdmVydmlldyBmcm9tICdjb21wb25lbnRzL2d5bU92ZXJ2aWV3J1xuaW1wb3J0IEFjY291bnQgZnJvbSAnY29tcG9uZW50cy9hY2NvdW50J1xuXG5pbXBvcnQgUnRXaXphcmRDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9ydFdpemFyZCdcblxuY29uc3QgUnRDb250ZW50ID0gcHJvcHMgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInJ0LWNvbnRlbnRcIj5cbiAgICAgICAgPFN3aXRjaCBsb2NhdGlvbj17cHJvcHMubG9jYXRpb259PlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17R3ltTGlzdH0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvZ3ltcy86bmFtZScgY29tcG9uZW50PXtHeW1PdmVydmlld30gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWRkJyBjb21wb25lbnQ9e1J0V2l6YXJkQ29udGFpbmVyfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hY2NvdW50JyBjb21wb25lbnQ9e0FjY291bnR9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgIDwvZGl2PilcblxuUnRDb250ZW50LnByb3BUeXBlcyA9IHtcblx0bG9jYXRpb246IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRDb250ZW50XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL1J0Q29udGVudC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IENvbGxhcHNlLCBOYXZiYXIsIE5hdmJhclRvZ2dsZXIsIE5hdmJhckJyYW5kLCBOYXYsIE5hdkRyb3Bkb3duLCBEcm9wZG93bkl0ZW0sIERyb3Bkb3duVG9nZ2xlLCBEcm9wZG93bk1lbnUsIE5hdkxpbmsgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IHsgTGlua0NvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXJvdXRlci1ib290c3RyYXAnXG5pbXBvcnQge05hdkxpbmsgYXMgTmF2Um91dGVyTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHtzdGF0ZVRvZ2dsZX0gZnJvbSAnZGF0YS91dGlsJ1xuXG5jbGFzcyBSdEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0ZHJvcGRvd25Jc09wZW46IGZhbHNlXG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGd5bXM6IFByb3BUeXBlcy5hcnJheVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICA8TmF2YmFyIHRvZ2dsZWFibGUgY29sb3I9XCJwcmltYXJ5XCIgaW52ZXJzZT5cbiAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9cIj5cbiAgICAgICAgICAgIDxOYXZiYXJCcmFuZD5cbiAgICAgICAgICAgICAgUm91dGV0cmFja2VyXG4gICAgICAgICAgICA8L05hdmJhckJyYW5kPlxuICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICA8TmF2YmFyVG9nZ2xlciByaWdodCBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0vPlxuICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49eyB0aGlzLnN0YXRlLmlzT3BlbiB9IG5hdmJhcj5cbiAgICAgICAgICAgIDxOYXYgbmF2YmFyPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJHeW1zXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIiB0b2dnbGU9e3RoaXMudG9nZ2xlRHJvcGRvd259IGlzT3Blbj17dGhpcy5zdGF0ZS5kcm9wZG93bklzT3Blbn0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdj5cbiAgICAgICAgICAgICAgICAgIEd5bXNcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgb25DbGljaz17dGhpcy50b2dnbGVEcm9wZG93bn0+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZ3ltcyA/IHRoaXMucHJvcHMuZ3ltcy5tYXAoZ3ltID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE5hdlJvdXRlckxpbmsgY2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJyBrZXk9eyBneW0uX2lkIH0gdG89eyAnL2d5bXMvJyArIGd5bS51cmwgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBneW0ubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9OYXZSb3V0ZXJMaW5rPlxuICAgICAgICAgICAgICAgICAgICApKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyLz5cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIFNlcGFyYXRlZCBsaW5rXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2FkZFwiPlxuICAgICAgICAgICAgICA8TmF2TGluaz5cbiAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxOYXYgbmF2YmFyIGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9sb2dvdXRcIj5cbiAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvYWNjb3VudFwiPlxuICAgICAgICAgICAgICA8TmF2TGluaz5cbiAgICAgICAgICAgICAgICBNeSBBY2NvdW50XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgIDwvTmF2YmFyPlxuXHRcdClcblx0fVxuXG5cdHRvZ2dsZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlVG9nZ2xlKCdpc09wZW4nKSlcblx0fVxuXG5cdHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGVUb2dnbGUoJ2Ryb3Bkb3duSXNPcGVuJykpXG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRneW1zOiBzdGF0ZS5neW1zXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSkoUnRIZWFkZXIpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL1J0SGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldFRlYW0gfSBmcm9tICdkYXRhL2FjdGlvbnMvdGVhbSdcbmltcG9ydCB7IGdldEd5bXMgfSBmcm9tICdkYXRhL2FjdGlvbnMvZ3ltJ1xuXG5pbXBvcnQgUnRIZWFkZXIgZnJvbSAnLi9SdEhlYWRlcidcbmltcG9ydCBSdENvbnRlbnQgZnJvbSAnLi9SdENvbnRlbnQnXG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHsgXG5cdFx0dGhpcy5wcm9wcy5nZXRUZWFtKClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxSdEhlYWRlciBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0vPlxuICAgICAgICAgICAgICAgIDxSdENvbnRlbnQgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbk1haW4ucHJvcFR5cGVzID0ge1xuXHRnZXRUZWFtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRnZXRHeW1zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHRlYW06IHN0YXRlLnRlYW0sXG5cdFx0Z3ltczogc3RhdGUuZ3ltcyxcblx0XHRsb2NhdGlvbjogc3RhdGUucm91dGVyLmxvY2F0aW9uXG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcblx0cmV0dXJuIHtcblx0XHRnZXRUZWFtOiAoKSA9PiBkaXNwYXRjaChnZXRUZWFtKCkpLFxuXHRcdGdldEd5bXM6IHRlYW0gPT4gZGlzcGF0Y2goZ2V0R3ltcyh0ZWFtKSlcblx0fVxufVxuXG5jb25zdCBtYWluQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKE1haW4pXG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGFpbmVyXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5cbmNsYXNzIFJ0U3RhY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRtYWtlQ2hhcnQuYXBwbHkodGhpcylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnIH19IHJlZj17ZWwgPT4gdGhpcy5lbCA9IGVsfT48L2Rpdj5cblx0XHQpXG5cdH1cblxuXG59XG5cbmZ1bmN0aW9uIG1ha2VDaGFydCgpIHtcblx0aWYgKCF0aGlzLnByb3BzLmRhdGEpIHJldHVyblxuXG5cdGNvbnN0IHtkYXRhLCB3aWR0aCwgaGVpZ2h0ID0gJzEwMCd9ID0gdGhpcy5wcm9wc1xuXG5cdGNvbnN0IHRvdGFsID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIudmFsdWUsIDApXG5cblx0Y29uc3QgY2hhcnQgPSBkM1xuXHRcdC5zZWxlY3QodGhpcy5lbClcblx0XHQuYXBwZW5kKCdzdmcnKVxuXHRcdC5hdHRyKCd2aWV3Qm94JywgJzAgMCAxMDAgMTAwJylcblx0XHQuYXR0cignd2lkdGgnLCB3aWR0aClcblx0XHQuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuXG5cdGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpXG5cdFx0LmRvbWFpbihbMCwgdG90YWxdKVxuXHRcdC5yYW5nZShbMCwgMTAwXSlcblxuXHRjb25zdCBzZWdtZW50cyA9IGNoYXJ0LnNlbGVjdEFsbCgnZycpXG5cdFx0LmRhdGEoZGF0YSlcblx0XHQuZW50ZXIoKVxuXHRcdC5hcHBlbmQoJ2cnKVxuXHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRyZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeChkKSArICcsIDApJ1xuXHRcdH0pXG5cblx0c2VnbWVudHMuYXBwZW5kKCdyZWN0Jylcblx0XHQuYXR0cignd2lkdGgnLCBkID0+IHgoZC52YWx1ZSkpXG5cdFx0LmF0dHIoJ2hlaWdodCcsIGhlaWdodClcblx0XHQuYXR0cigneCcsIGQgPT4geChkLnZhbHVlKSlcblx0XHQuYXR0cignZmlsbCcsICdibGFjaycpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRTdGFja1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjay5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IHBhbGF0dGUgfSBmcm9tICdydGNvbmZpZydcblxuY2xhc3MgUnRCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRtYWtlQ2hhcnQuYXBwbHkodGhpcylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiByZWY9e2VsID0+IHRoaXMuZWwgPSBlbH0+PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0QmFyXG5cbmZ1bmN0aW9uIG1ha2VDaGFydCgpIHtcblx0aWYgKCF0aGlzLnByb3BzLmRhdGEpIHJldHVyblxuXG5cdGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHNcblx0Y29uc3Qgd2lkdGggPSA5NFxuXHRjb25zdCBoZWlnaHQgPSA5NFxuXHRjb25zdCBiYXJXaWR0aCA9IHdpZHRoIC8gZGF0YS5sZW5ndGhcblxuXHRjb25zdCB5ID0gZDNcblx0XHQuc2NhbGVMaW5lYXIoKVxuXHRcdC5kb21haW4oWzAsIGQzLm1heChkYXRhKV0pXG5cdFx0LnJhbmdlKFswLCBoZWlnaHRdKVxuXG5cdGNvbnN0IGNvbG9yID0gcGFsYXR0ZVt0aGlzLnByb3BzLmNvbG9yXSB8fCB7XG5cdFx0cHJpbWFyeTogJ2JsYWNrJyxcblx0XHRzZWNvbmRhcnk6ICdibGFjaydcblx0fVxuXG5cdGNvbnN0IGNvbG9yU2NhbGUgPSB0aGlzLnByb3BzLmNvbG9yID9cblx0XHQoXG5cdFx0ZDMuc2NhbGVMaW5lYXIoZDMuaW50ZXJwb2xhdGVIY2wpXG5cdFx0XHQuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cdFx0XHQucmFuZ2UoW2NvbG9yLnByaW1hcnksIGNvbG9yLnNlY29uZGFyeV0pXG5cdFx0KSA6IChcblx0XHRkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuXHRcdFx0LmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXHRcdClcblxuXHRjb25zdCBjaGFydCA9IGQzXG5cdFx0LnNlbGVjdCh0aGlzLmVsKVxuXHRcdC5hcHBlbmQoJ3N2ZycpXG5cdFx0LmF0dHIoJ3ZpZXdCb3gnLCAnLTMgLTMgMTAwIDEwMCcpXG5cdFx0LmF0dHIoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaW4gbWVldCcpXG5cdFx0LmNsYXNzZWQoJ3cxMDAnLCB0cnVlKVxuXG5cdGNvbnN0IGJhciA9IGNoYXJ0XG5cdFx0LnNlbGVjdEFsbCgnZycpXG5cdFx0LmRhdGEoZGF0YSlcblx0XHQuZW50ZXIoKVxuXHRcdC5hcHBlbmQoJ2cnKVxuXHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gJ3RyYW5zbGF0ZSgnICsgaSAqIGJhcldpZHRoICsgJywgMCknKVxuXG5cdGJhci5hcHBlbmQoJ3JlY3QnKVxuXHRcdC5jbGFzc2VkKCdydC1iYXInLCB0cnVlKVxuXHRcdC5hdHRyKCd3aWR0aCcsIGJhcldpZHRoIC0gMSlcblx0XHQuYXR0cigncngnLCAxKVxuXHRcdC5hdHRyKCdyeScsIDEpXG5cdFx0LmF0dHIoJ2hlaWdodCcsIDApXG5cdFx0LmF0dHIoJ29wYWNpdHknLCBkID0+ICtkID8gMSA6IDAuNClcblx0XHQuYXR0cigneScsIGhlaWdodClcblx0XHQuYXR0cignZmlsbCcsIChkLCBpKSA9PiBjb2xvclNjYWxlKGkpKVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoKCkgPT4gNDAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMClcblx0XHQuZHVyYXRpb24oMzAwKVxuXHRcdC5lYXNlKGQzLmVhc2VFeHBJbilcblx0XHQuYXR0cigneScsIGQgPT4gaGVpZ2h0IC0geShkKSlcblx0XHQuYXR0cignaGVpZ2h0JywgZCA9PiB5KGQpKVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJhci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IGQzdGlwIGZyb20gJ2QzLXRpcCdcbmltcG9ydCB7IHBhbGF0dGUgfSBmcm9tICdydGNvbmZpZydcbmQzLnRpcCA9IGQzdGlwXG5cbmNsYXNzIFJ0QmlnQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRkYXRhOiBQcm9wVHlwZXMuYXJyYXksXG5cdFx0Z29hbDogUHJvcFR5cGVzLmFycmF5LFxuXHRcdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0Y29sb3I6IFByb3BUeXBlcy5zdHJpbmdcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuY2hhcnQgPSBkMy5zZWxlY3QodGhpcy5lbClcblx0XHR0aGlzLm1ha2VDaGFydCgpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdGlmIChuZXh0UHJvcHMudHlwZSAhPT0gdGhpcy5wcm9wcy50eXBlKSB7XG5cdFx0XHR0aGlzLmNoYXJ0LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpXG5cdFx0XHR0aGlzLm1ha2VDaGFydChuZXh0UHJvcHMuZGF0YSlcblx0XHR9XG5cdFx0aWYgKG5leHRQcm9wcy5kYXRhKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZUNoYXJ0KG5leHRQcm9wcy5kYXRhKVxuXHRcdH1cblx0XHRpZiAobmV4dFByb3BzLmNvbG9yKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIi01IC01IDUwMCAzMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWluIG1lZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidzEwMCBjaGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHRoaXMuZWwgPSBlbH0+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHR1cGRhdGVDaGFydCA9IGRhdGEgPT4ge1xuXHRcdHZhciBzdmcgPSBkMy5zZWxlY3QodGhpcy5lbClcblxuXHRcdC8vIGNhbGN1bGF0ZSBuZXcgaGVpZ2h0XG5cdFx0dGhpcy55ID0gZDNcblx0XHRcdC5zY2FsZUxpbmVhcigpXG5cdFx0XHQuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZCA9PiBkLmNvdW50KV0pXG5cdFx0XHQucmFuZ2UoWzAsIHRoaXMuaGVpZ2h0XSlcblxuXHRcdC8vIE1ha2UgdGhlIGNoYW5nZXNcblx0XHRzdmcuc2VsZWN0QWxsKCcucnQtYmFyJylcblx0XHRcdC5kYXRhKGRhdGEpXG5cdFx0XHQudHJhbnNpdGlvbigpIC8vIGNoYW5nZSB0aGUgbGluZVxuXHRcdFx0LmR1cmF0aW9uKDc1MClcblx0XHRcdC5hdHRyKCd5JywgZCA9PiB0aGlzLmhlaWdodCAtIHRoaXMueShkLmNvdW50KSlcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCBkID0+IHRoaXMueShkLmNvdW50KSArIDYpXG5cblx0XHRzdmcuc2VsZWN0QWxsKCcucnQtbWFya2VyJylcblx0XHRcdC5kYXRhKGRhdGEpXG5cdFx0XHQudGV4dChkID0+IGQuZ3JhZGUpXG5cdH1cblxuXHRtYWtlQ2hhcnQgPSBkYXRhID0+IHtcblx0XHRpZiAoIXRoaXMucHJvcHMuZGF0YSlcblx0XHRcdHJldHVyblxuXHRcdGRhdGEgPSBkYXRhIHx8IHRoaXMucHJvcHMuZGF0YVxuXG5cdFx0dGhpcy53aWR0aCA9IDQ5MFxuXHRcdHRoaXMuaGVpZ2h0ID0gMjg1XG5cblx0XHRjb25zdCBjb2xvciA9IHBhbGF0dGVbdGhpcy5wcm9wcy5jb2xvcl0gfHwge1xuXHRcdFx0cHJpbWFyeTogJ2JsYWNrJyxcblx0XHRcdHNlY29uZGFyeTogJ2JsYWNrJ1xuXHRcdH1cblx0XHRjb25zdCBjb2xvclNjYWxlID0gdGhpcy5wcm9wcy5jb2xvciA/XG5cdFx0XHQoXG5cdFx0XHRkMy5zY2FsZUxpbmVhcihkMy5pbnRlcnBvbGF0ZUhjbClcblx0XHRcdFx0LmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXHRcdFx0XHQucmFuZ2UoW2NvbG9yLnByaW1hcnksIGNvbG9yLnNlY29uZGFyeV0pXG5cdFx0XHQpIDogKFxuXHRcdFx0ZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdylcblx0XHRcdFx0LmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXHRcdFx0KVxuXG5cdFx0Y29uc3QgYmFyV2lkdGggPSB0aGlzLndpZHRoIC8gZGF0YS5sZW5ndGhcblxuXHRcdHRoaXMueSA9IGQzXG5cdFx0XHQuc2NhbGVMaW5lYXIoKVxuXHRcdFx0LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGQgPT4gZC5jb3VudCldKVxuXHRcdFx0LnJhbmdlKFswLCB0aGlzLmhlaWdodF0pXG5cblx0XHRjb25zdCBmb250U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG5cdFx0XHQuZG9tYWluKFszMjAsIDUwMF0pIC8vIGV4cGVjdGVkIGxpbWl0cyBvZiBTVkcgd2lkdGhcblx0XHRcdC5yYW5nZShbMzAsIDE1XSlcblx0XHRcdC5jbGFtcCh0cnVlKVxuXG5cdFx0Y29uc3QgYmFyID0gdGhpcy5jaGFydFxuXHRcdFx0LnNlbGVjdEFsbCgnZycpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LmVudGVyKClcblx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2Jhci1ncm91cCcpXG5cdFx0XHQuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+ICd0cmFuc2xhdGUoJyArIGkgKiBiYXJXaWR0aCArICcsIDApJylcblxuXHRcdHZhciB0aXAgPSBkMy50aXAoKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2QzLXRpcCcpXG5cdFx0XHQub2Zmc2V0KFstMTAsIDBdKVxuXHRcdFx0Lmh0bWwoZCA9PiBgPHN0cm9uZz4ke2QuZ3JhZGV9Ojwvc3Ryb25nPiA8c3BhbiBzdHlsZT0nY29sb3I6I2ZmMDA0NCc+JHtkLmNvdW50fTwvc3Bhbj5gKVxuXG5cdFx0dGhpcy5jaGFydC5jYWxsKHRpcClcblxuXHRcdGJhci5hcHBlbmQoJ3JlY3QnKVxuXHRcdFx0LmNsYXNzZWQoJ3J0LWJhcicsIHRydWUpXG5cdFx0XHQuYXR0cignd2lkdGgnLCBiYXJXaWR0aCAtIDUpXG5cdFx0XHQuYXR0cigncngnLCAzKVxuXHRcdFx0LmF0dHIoJ3J5JywgMylcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCA2KVxuXHRcdFx0LmF0dHIoJ29wYWNpdHknLCBkID0+ICtkLmNvdW50ID8gMSA6IDAuNClcblx0XHRcdC5hdHRyKCd5JywgdGhpcy5oZWlnaHQpXG5cdFx0XHQuYXR0cignZmlsbCcsIChkLCBpKSA9PiBjb2xvclNjYWxlKGkpKVxuXHRcdFx0Lm9uKCdtb3VzZW92ZXInLCB0aXAuc2hvdylcblx0XHRcdC5vbignbW91c2VvdXQnLCB0aXAuaGlkZSlcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kZWxheSgoKSA9PiA0MDAgLSBNYXRoLnJhbmRvbSgpICogMTAwKVxuXHRcdFx0LmR1cmF0aW9uKDMwMClcblx0XHRcdC5lYXNlKGQzLmVhc2VFeHBJbilcblx0XHRcdC5hdHRyKCd5JywgZCA9PiB0aGlzLmhlaWdodCAtIHRoaXMueShkLmNvdW50KSlcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCBkID0+IHRoaXMueShkLmNvdW50KSArIDYpXG5cblx0XHRiYXIuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdC5jbGFzc2VkKCdydC1tYXJrZXInLCB0cnVlKVxuXHRcdFx0LmF0dHIoJ3knLCBiYXJXaWR0aCAvIDIgKyAzKVxuXHRcdFx0LmF0dHIoJ3gnLCAtMjgwKVxuXHRcdFx0LmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0Jylcblx0XHRcdC50ZXh0KGQgPT4gZC5ncmFkZSlcblx0XHRcdC5hdHRyKCdmb250LXNpemUnLCAnMTRweCcpXG5cdFx0XHQuYXR0cignb3BhY2l0eScsIDApXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oNTAwKVxuXHRcdFx0LmF0dHIoJ29wYWNpdHknLCAxKVxuXG5cdFx0Y29uc3QgcmVzaXplZCA9ICgpID0+IHtcblx0XHRcdHZhciBzY2FsZSA9IGZvbnRTY2FsZSh0aGlzLmNoYXJ0Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aClcblx0XHRcdHZhciB0ZXh0ID0gZDMuc2VsZWN0QWxsKCd0ZXh0Jylcblx0XHRcdHRleHQuYXR0cignZm9udC1zaXplJywgc2NhbGUgKyAncHgnKVxuXHRcdFx0aWYgKHNjYWxlID4gMTgpIHtcblx0XHRcdFx0dGV4dC5hdHRyKCdvcGFjaXR5JywgMClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRleHQuYXR0cignb3BhY2l0eScsIDEpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmVzaXplZCgpXG5cdFx0d2luZG93Lm9ucmVzaXplID0gcmVzaXplZFxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRCaWdCYXJcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0Jhci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuY2xhc3MgUnRQaWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRtYWtlQ2hhcnQuYXBwbHkodGhpcylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnIH19IHJlZj17ZWwgPT4gdGhpcy5lbCA9IGVsfT48L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRQaWVcblxuZnVuY3Rpb24gbWFrZUNoYXJ0KCkge1xuXHRpZiAoIXRoaXMucHJvcHMuZGF0YSlcblx0XHRyZXR1cm5cblx0Y29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YVxuXG5cdGNvbnN0IHdpZHRoID0gOTRcblx0Y29uc3QgaGVpZ2h0ID0gOTRcblxuXHRjb25zdCBjaGFydCA9IGQzXG5cdFx0LnNlbGVjdCh0aGlzLmVsKVxuXHRcdC5hcHBlbmQoJ3N2ZycpXG5cdFx0LmF0dHIoJ3ZpZXdCb3gnLCAnLTMgLTMgMTAwIDEwMCcpXG5cdFx0LmF0dHIoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaW4gbWVldCcpXG5cdFx0LmNsYXNzZWQoJ3cxMDAnLCB0cnVlKVxuXG5cblx0dmFyIHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMixcblx0XHRnID0gY2hhcnQuYXBwZW5kKCdnJykuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgd2lkdGggLyAyICsgJywnICsgaGVpZ2h0IC8gMiArICcpJylcblxuXG5cdHZhciBwaWUgPSBkMy5waWUoKVxuXHRcdC5zb3J0KG51bGwpXG5cdFx0LnZhbHVlKGQgPT4gZClcblxuXHRjb25zdCByYWluYm93ID0gZDNcblx0XHQuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdylcblx0XHQuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cblx0dmFyIHBhdGggPSBkMy5hcmMoKVxuXHRcdC5vdXRlclJhZGl1cyhyYWRpdXMgLSAxMClcblx0XHQuaW5uZXJSYWRpdXMoMzApXG5cblx0dmFyIGhvdmVyUGF0aCA9IGQzLmFyYygpXG5cdFx0Lm91dGVyUmFkaXVzKHJhZGl1cyAtIDgpXG5cdFx0LmlubmVyUmFkaXVzKDMwKVxuXG5cdHZhciBsYWJlbCA9IGQzLmFyYygpXG5cdFx0Lm91dGVyUmFkaXVzKHJhZGl1cyAtIDQwKVxuXHRcdC5pbm5lclJhZGl1cyhyYWRpdXMgLSA0MClcblxuXG5cdHZhciBhcmMgPSBnLnNlbGVjdEFsbCgnLmFyYycpXG5cdFx0LmRhdGEocGllKGRhdGEpKVxuXHRcdC5lbnRlcigpLmFwcGVuZCgnZycpXG5cdFx0LmF0dHIoJ2NsYXNzJywgJ2FyYycpXG5cblx0YXJjLmFwcGVuZCgncGF0aCcpXG5cdFx0LmF0dHIoJ2QnLCBwYXRoKVxuXHRcdC5hdHRyKCdmaWxsJywgZCA9PiByYWluYm93KGQuZGF0YSkpXG5cdFx0Lm9uKCdtb3VzZW92ZXInLCAoKSA9PiBkMy5zZWxlY3QodGhpcykuYXR0cignZCcsIGhvdmVyUGF0aCkpXG5cdFx0Lm9uKCdtb3VzZW91dCcsICgpID0+IGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdkJywgcGF0aCkpXG5cblx0YXJjLmFwcGVuZCgndGV4dCcpXG5cdFx0LmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gJ3RyYW5zbGF0ZSgnICsgbGFiZWwuY2VudHJvaWQoZCkgKyAnKScpXG5cdFx0LmF0dHIoJ2R5JywgJzAuMzVlbScpXG5cdFx0LnRleHQoZCA9PiBkLmRhdGEuYWdlKVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0UGllLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgV3pDb250YWluZXIgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1iaWctY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtd2luZ1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1pbm5lclwiIHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkeyhwcm9wcy5zdGVwKSAqIC0xNi42fSUpYH19PlxuICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCBkaXYgY2xhc3NOYW1lPVwicmlnaHQtd2luZ1wiPiA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcblxuV3pDb250YWluZXIucHJvcFR5cGVzID0ge1xuXHRzdGVwOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6Q29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XekNvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgV3pMaXN0SXRlbSBmcm9tICcuL3d6TGlzdEl0ZW0nXG5pbXBvcnQgV3pJdGVtIGZyb20gJy4vd3pJdGVtJ1xuXG5jb25zdCBXekdyaWQgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IEVsID0gcHJvcHMubGlzdCA/IFd6TGlzdEl0ZW0gOiBXekl0ZW1cblxuXHRjb25zdCBpc1NlbGVjdGVkID0gaXRlbSA9PiB7XG5cdFx0aWYocHJvcHMuc2VsZWN0b3IgPT09ICd0YWdzJykgcmV0dXJuIHByb3BzLnJvdXRlLnRhZ3MuaW5kZXhPZihpdGVtLnZhbHVlKSA+IC0xXG5cdFx0cmV0dXJuICBwcm9wcy5yb3V0ZVtwcm9wcy5zZWxlY3Rvcl0gPT09IGl0ZW0gXG5cdH1cblxuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwid3otZ3JpZFwiPlxuICAgICAgICAgICAgICB7IHByb3BzLml0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEVsIGtleT17IGl0ZW0uX2lkIHx8IGl0ZW19IGl0ZW09eyBpdGVtIH0gdHlwZT17IHByb3BzLnNlbGVjdG9yIH0gdXBkYXRlPXsgcHJvcHMudXBkYXRlIH0gc2VsZWN0ZWQ9e2lzU2VsZWN0ZWQoaXRlbSl9IC8+XG4gICAgICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgPC9kaXY+XG5cdClcbn1cblxuV3pHcmlkLnByb3BUeXBlcyA9IHtcblx0aXRlbXM6IFByb3BUeXBlcy5hcnJheSxcblx0c2VsZWN0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRsaXN0OiBQcm9wVHlwZXMub25lT2YoW3VuZGVmaW5lZCwgdHJ1ZV0pLFxuXHR0YWdzOiBQcm9wVHlwZXMub25lT2YoW3VuZGVmaW5lZCwgdHJ1ZV0pLFxuXHRjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0dXBkYXRlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBXekdyaWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL1d6R3JpZC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge0ZsZXhSb3csIFJ0U3dhdGNofSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHBvc3RSb3V0ZSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IHtzbGVlcCwgcmVuZGVySWZ9IGZyb20gJ3J0dXRpbCdcblxuXG5jbGFzcyBXelByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHt9XG5cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMudHJhbnNmb3JtZWRSb3V0ZSA9IHRyYW5zZm9ybVJvdXRlKHRoaXMucHJvcHMucm91dGUpXG5cdFx0aWYgKHRoaXMudHJhbnNmb3JtZWRSb3V0ZSkge1xuXHRcdFx0cmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy50cmFuc2Zvcm1lZFJvdXRlPyAoXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid3otbGlzdCBwMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBUeXBlOiB7dGhpcy5wcm9wcy5yb3V0ZS50eXBlfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIENvbG9yOiBcbiAgICAgICAgICAgICAgICAgICAgICA8UnRTd2F0Y2ggY29sb3I9eyB0aGlzLnByb3BzLnJvdXRlLmNvbG9yIHx8IGZhbHNlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBHcmFkZToge3RoaXMucHJvcHMucm91dGUuZ3JhZGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3ei1saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgR3ltOiB7dGhpcy5wcm9wcy5yb3V0ZS5neW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBXYWxsOiB7dGhpcy5wcm9wcy5yb3V0ZS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBUYWdzOiB7dGhpcy5wcm9wcy5yb3V0ZS50YWdzLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDxGbGV4Um93PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmVkaXR9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydidG4gYnRuLW91dGxpbmUtcHJpbWFyeScgKyByZW5kZXJJZih0aGlzLnN0YXRlLnBlbmRpbmcpKCcgYnRuLW91dGxpbmUtcGVuZGluZycpfSBvbkNsaWNrPXt0aGlzLnBvc3RSb3V0ZX0+QWRkIFJvdXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbFxuXHR9XG5cblx0cG9zdFJvdXRlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3BlbmRpbmc6IHRydWV9KVxuXHRcdHRoaXMucHJvcHMucG9zdFJvdXRlKHRoaXMudHJhbnNmb3JtZWRSb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKHNsZWVwKDEwMDApKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHR0aGlzLnByb3BzLnJlc2V0KClcblx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0YWRkZWQ6IHRydWUsXG5cdFx0cGVuZGluZzogZmFsc2Vcblx0fSlcbn0pXG5cdH1cblxuXHRlZGl0ID0gKCkgPT4ge1xuXHRcdHRoaXMucHJvcHMubW92ZSgtMSlcblx0fVxufVxuXG5XelByZXZpZXcucHJvcFR5cGVzID0ge1xuXHRyb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcblx0Z3JhZGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRyZXNldDogUHJvcFR5cGVzLmZ1bmMsXG5cdG1vdmU6IFByb3BUeXBlcy5mdW5jLFxuXHRwb3N0Um91dGU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlKG9iaikge1xuXHRpZiAob2JqLmd5bSAmJiBvYmouZ3JhZGUgJiYgb2JqLmNvbG9yICYmIG9iai50YWdzICYmIG9iai5sb2NhdGlvbilcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogb2JqLnR5cGUsXG5cdFx0XHRjb2xvcjogb2JqLmNvbG9yLnZhbHVlLFxuXHRcdFx0Z3JhZGU6IG9iai5ncmFkZS5faWQsXG5cdFx0XHRneW06IG9iai5neW0uX2lkLFxuXHRcdFx0d2FsbDogb2JqLmxvY2F0aW9uLFxuXHRcdFx0dGFnczogb2JqLnRhZ3Muam9pbignLCAnKSxcblx0XHRcdHNldF9vbjogRGF0ZS5ub3coKVxuXHRcdH1cblx0cmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0cm91dGU6IHN0YXRlLnJvdXRlLFxuXHRcdGdyYWRlczogc3RhdGUudGVhbS5ncmFkZXNcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuXHRyZXR1cm4ge1xuXHRcdHBvc3RSb3V0ZTogKHJvdXRlKSA9PiBkaXNwYXRjaChwb3N0Um91dGUocm91dGUpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShXelByZXZpZXcpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XelByZXZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFd6UGFnZSBmcm9tICcuL3d6UGFnZSdcbmltcG9ydCB7UnRDYXJkfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi8nXG5cbmNvbnN0IFd6U3RlcCA9IHByb3BzID0+IChcblx0cHJvcHMucmV2aWV3PyAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzXCI+PC9kaXY+XG4gICAgICA8UnRDYXJkIHRpdGxlPXtwcm9wcy5uYW1lfT57cHJvcHMuY2hpbGRyZW59PC9SdENhcmQ+XG4gICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaDMgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgIHsgcHJvcHMubmFtZSB9OjwvZGl2PlxuICAgICAgPFd6UGFnZSBuZXh0PXtwcm9wcy5uZXh0fSBwcmV2PXtwcm9wcy5wcmV2fS8+XG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgICApXG4pXG5cbld6U3RlcC5wcm9wVHlwZXMgPSB7XG5cdHJldmlldzogUHJvcFR5cGVzLmJvb2wsXG5cdG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblx0bmV4dDogUHJvcFR5cGVzLmZ1bmMsXG5cdHByZXY6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6U3RlcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvV3pTdGVwLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjb2xvciBmcm9tICdzZXJ2aWNlcy9jb2xvclNlcnZpY2UnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3QgV3pJdGVtID0gcHJvcHMgPT4ge1xuXHRmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdHByb3BzLnVwZGF0ZShwcm9wcy50eXBlLCBwcm9wcy5pdGVtKVxuXHR9XG5cblx0Y29uc3QgaXRlbVN0eWxlID0ge1xuXHRcdGJhY2tncm91bmRDb2xvcjogcHJvcHMuaXRlbS5jb2xvciA/IHByb3BzLml0ZW0uY29sb3IgOiAnd2hpdGUnLFxuXHRcdGNvbG9yOiBwcm9wcy5pdGVtLmNvbG9yID8gY29sb3IudGV4dENvbG9yKHByb3BzLml0ZW0uY29sb3IpIDogJ2luaGVyaXQnXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjeCgnd3otZG90JywgeydpdGVtLXNlbGVjdGVkJzogcHJvcHMuc2VsZWN0ZWR9KX0gc3R5bGU9e2l0ZW1TdHlsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGdyaWQtbGFiZWxcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbS52YWx1ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblx0KVxuXG59XG5cbld6SXRlbS5wcm9wVHlwZXMgPSB7XG5cdHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cdGl0ZW06IFByb3BUeXBlcy5vYmplY3QsXG5cdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBXekl0ZW1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pJdGVtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgV3pMaXN0SXRlbSA9IHByb3BzID0+IHtcblx0ZnVuY3Rpb24gX2NsaWNrKCkge1xuXHRcdHByb3BzLnVwZGF0ZShwcm9wcy50eXBlLCBwcm9wcy5pdGVtKVxuXHR9XG5cdHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3NldENsYXNzKHByb3BzKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgbGlzdC1sYWJlbFwiIG9uQ2xpY2s9e19jbGlja30+e3Byb3BzLml0ZW0udmFsdWUgfHwgcHJvcHMuaXRlbX08L2Rpdj5cbiAgICA8L2Rpdj5cblx0KVxufVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhwcm9wcykge1xuXHRyZXR1cm4gJ3d6LWxpc3QtaXRlbSAnICsgKHByb3BzLnNlbGVjdGVkPyAnaXRlbS1zZWxlY3RlZCcgOiAnJylcbn1cblxuV3pMaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG5cdHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblx0dXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcblx0aXRlbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXHR0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6TGlzdEl0ZW1cbiAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pMaXN0SXRlbS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNsYXNzIFd6UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKVxuXHRcdHRoaXMucHJldiA9IHRoaXMucHJldi5iaW5kKHRoaXMpXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwMTBiIGhpZGRlbi14cyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXt0aGlzLnByZXZ9PlByZXZpb3VzPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXt0aGlzLm5leHQgfT5OZXh0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0bmV4dCgpIHtcblx0XHR0aGlzLnByb3BzLm5leHQoMSlcblx0fVxuXG5cdHByZXYoKSB7XG5cdFx0dGhpcy5wcm9wcy5wcmV2KC0xKVxuXHR9XG59XG5cbld6UGFnZS5wcm9wVHlwZXMgPSB7XG5cdHByZXY6IFByb3BUeXBlcy5mdW5jLFxuXHRuZXh0OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBXelBhZ2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6UGFnZS5qc3giLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJ0V2l6YXJkIGZyb20gJy4vcnRXaXphcmQnXG5pbXBvcnQge3VwZGF0ZVJvdXRlLCB1cGRhdGVUYWdzLCByZXNldFdpemFyZH0gZnJvbSAnZGF0YS9hY3Rpb25zL3dpemFyZCdcbmltcG9ydCB7Z2V0VGVhbX0gZnJvbSAnZGF0YS9hY3Rpb25zL3RlYW0nXG5pbXBvcnQge2dldEd5bXN9IGZyb20gJ2RhdGEvYWN0aW9ucy9neW0nXG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlOiBzdGF0ZS5yb3V0ZSxcbiAgICAgICAgdGVhbTogc3RhdGUudGVhbSxcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGU6IChmaWVsZCwgdmFsdWUpID0+IGRpc3BhdGNoKHVwZGF0ZVJvdXRlKGZpZWxkLCB2YWx1ZSkpLFxuICAgICAgICB1cGRhdGVUYWdzOiAodmFsdWUpID0+IGRpc3BhdGNoKHVwZGF0ZVRhZ3ModmFsdWUpKSxcbiAgICAgICAgcmVzZXRGb3JtOiAoKSA9PiBkaXNwYXRjaChyZXNldFdpemFyZCgpKSxcbiAgICAgICAgZ2V0VGVhbTogKCkgPT4gZGlzcGF0Y2goZ2V0VGVhbSgpKSxcbiAgICAgICAgZ2V0R3ltczogKCkgPT4gZGlzcGF0Y2goZ2V0R3ltcygpKVxuICAgIH1cbn1cblxuY29uc3QgUnRXaXphcmRDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2gpKFJ0V2l6YXJkKVxuXG5leHBvcnQgZGVmYXVsdCBSdFdpemFyZENvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXekdyaWQgZnJvbSAnLi9jb21wb25lbnRzL1d6R3JpZCdcbmltcG9ydCBXekNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvV3pDb250YWluZXInXG5pbXBvcnQgV3pTdGVwIGZyb20gJy4vY29tcG9uZW50cy9XelN0ZXAnXG5pbXBvcnQgV3pQcmV2aWV3IGZyb20gJy4vY29tcG9uZW50cy9XelByZXZpZXcnXG5pbXBvcnQge1N3aXBlQ29udGFpbmVyfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuY2xhc3MgUnRXaXphcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRzdGVwOiAwLFxuXHRcdGd5bUZpbHRlcjogdW5kZWZpbmVkXG5cdH1cblxuXHRjbGlja3MgPSAwXG5cdGNsaWNrZWQgPSAnZ3ltJ1xuXHRzdGVwcyA9IFsnZ3ltJywgJ2NvbG9yJywgJ2dyYWRlJywgJ2xvY2F0aW9uJywgJ3RhZ3MnXVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0cm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0Z3ltczogUHJvcFR5cGVzLmFycmF5LFxuXHRcdHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cdFx0dGVhbTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRyZXNldEZvcm06IFByb3BUeXBlcy5mdW5jXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLnJlc2V0Rm9ybSgpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxTd2lwZUNvbnRhaW5lciBvblN3aXBlPXt0aGlzLm9uU3dpcGV9PlxuICAgICAgICAgICAgICAgIDxXekNvbnRhaW5lciBzdGVwPXt0aGlzLnN0YXRlLnN0ZXB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGVwQ29udGVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChzdGVwKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFd6U3RlcCBrZXk9e3N0ZXAubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdGVwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2PXt0aGlzLm1vdmV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dD17dGhpcy5tb3ZlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy51cGRhdGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kPXtzdGVwLmVuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldz17c3RlcC5yZXZpZXd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcC5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV3pTdGVwPilcbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgPC9XekNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU3dpcGVDb250YWluZXI+XG5cdFx0KVxuXHR9XG5cblx0b25Td2lwZSA9IChkaXIpID0+IHtcblx0XHRpZigodGhpcy5zdGF0ZS5zdGVwICE9PSA1ICYmIGRpciA8IDApIHx8ICEodGhpcy5zdGVwc1t0aGlzLnN0YXRlLnN0ZXBdIGluIHRoaXMucHJvcHMucm91dGUpKSByZXR1cm5cbiAgICAgICAgXG5cdFx0bGV0IHRvU3RlcCA9IHRoaXMuc3RhdGUuc3RlcCArIChkaXIgPiAwPyAtMSA6IDEpXG5cblx0XHR0aGlzLnNldFN0YXRlKHtzdGVwOiB0b1N0ZXB9KVxuXHR9XG5cblx0bW92ZSA9IChkaXIsIGZpZWxkKSA9PiB7XG5cdFx0bGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLnN0ZXBcbiAgICAgICAgLy8gY2FsbGVkIGJ5IHVwZGF0ZVxuXHRcdGlmKGZpZWxkKSByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7c3RlcDogY3VycmVudCArIGRpcn0pXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlJ3ZlIG1hZGUgaXQgcGFzdCB0aGlzIHN0ZXAgYWxyZWFkeVxuXHRcdGlmKGN1cnJlbnQgKyBkaXIgPCAwIHx8ICEodGhpcy5zdGVwc1t0aGlzLnN0YXRlLnN0ZXBdIGluIHRoaXMucHJvcHMucm91dGUpICYmIGRpciA+IDApIHJldHVyblxuXHRcdHRoaXMuc2V0U3RhdGUoe3N0ZXA6IGN1cnJlbnQgKyBkaXJ9KVxuXHR9XG5cblx0dXBkYXRlID0gKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBoYW5kbGUgZG91YmxlIGNsaWNrXG5cdFx0aWYgKHRoaXMuY2xpY2tzID4gMCAmJiB0aGlzLnByb3BzLnJvdXRlW2ZpZWxkXSA9PT0gdmFsdWUpIHJldHVybiB0aGlzLm1vdmUoMSwgZmllbGQpXG5cblx0XHR0aGlzLnByb3BzLnVwZGF0ZShmaWVsZCwgdmFsdWUpXG5cdFx0bGV0IG5leHQgPSB0aGlzLnN0YXRlLnN0ZXAgKyAxXG5cblx0XHRpZiAoXG4gICAgICAgICAgICAvLyBpZiB3ZSd2ZSBtYW51YWxseSBnb25lIGJhY2t3YXJkcywgZG9uJ3QgbW92ZVxuICAgICAgICAgICAgKCF0aGlzLnByb3BzLnJvdXRlW3RoaXMuc3RlcHNbbmV4dF1dICYmIGZpZWxkICE9PSAndHlwZScpXG4gICAgICAgICAgICAvLyBvciB0aGUgbmV4dCBzdGVwIGlzIG11bHRpcGxlIGNob2ljZVxuICAgICAgICAgICAgfHwgdGhpcy5zdGVwc1tuZXh0XSA9PT0gJ3RhZ3MnXG4gICAgICAgICkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcblxuICAgICAgICAvLyBzdG9yZSBjbGljayBmb3IgZG91YmxlIGNsaWNrXG5cdFx0dGhpcy5jbGlja3MrK1xuXHRcdHRoaXMuY2xpY2tlZCA9IGZpZWxkXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmNsaWNrcy0tLCA1MDApXG5cdH1cblxuXHR1cGRhdGVUYWdzID0gKHRhZ3MsIHRhZykgPT4ge1xuXHRcdGxldCB7dmFsdWV9ID0gdGFnXG4gICAgICAgIFxuICAgICAgICAvLyBoYW5kbGUgZG91YmxlIGNsaWNrXG5cdFx0aWYgKHRoaXMuY2xpY2tzID4gMCAmJiB0aGlzLnByb3BzLnJvdXRlLnRhZ3MuaW5kZXhPZih2YWx1ZSkgPj0wICkgcmV0dXJuIHRoaXMubW92ZSgxLCB0cnVlKVxuXG4gICAgICAgIC8vIGlmIHdlJ3ZlIG1hbnVhbGx5IGdvbmUgYmFja3dhcmRzLCBkb24ndCBtb3ZlXG4gICAgICAgIC8vIGlmICghdGhpcy5wcm9wcy5yb3V0ZVt0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcCArIDFdXSkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcblx0XHR0aGlzLnByb3BzLnVwZGF0ZVRhZ3ModmFsdWUpXG5cbiAgICAgICAgLy8gc3RvcmUgY2xpY2sgZm9yIGRvdWJsZSBjbGlja1xuXHRcdHRoaXMuY2xpY2tzKytcblx0XHR0aGlzLmNsaWNrZWQgPSB2YWx1ZVxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbGlja3MtLSwgNTAwKVxuXHR9XG5cblx0ZmlsdGVyR3ltcyhneW1zLCBmaWx0ZXIpIHtcblx0XHRpZighZmlsdGVyKSByZXR1cm4gW11cblx0XHRyZXR1cm4gZ3ltcy5maWx0ZXIoZ3ltID0+IGd5bS53YWxsc1tmaWx0ZXJdLmxlbmd0aClcblx0fVxuXG5cdHNldEZpbHRlcihmaWx0ZXIpIHtcblx0XHR0aGlzLnVwZGF0ZSgndHlwZScsIGZpbHRlcilcblx0XHR0aGlzLnNldFN0YXRlKHtneW1GaWx0ZXI6IGZpbHRlcn0pXG5cdH1cblxuXHRyZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0dGhpcy5wcm9wcy5yZXNldEZvcm0oKVxuXHRcdHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDF9KVxuXHR9XG5cblx0c3RlcENvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2d5bScsXG5cdFx0XHRcdGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3d6LWxpc3QtaXRlbSAnICsgKHRoaXMuc3RhdGUuZ3ltRmlsdGVyID09PSAnYm91bGRlcicgPyAnaXRlbS1zZWxlY3RlZCcgOiAnJyApfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEZpbHRlcignYm91bGRlcicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGxpc3QtbGFiZWxcIj5Cb3VsZGVyaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd3ei1saXN0LWl0ZW0gJyArICh0aGlzLnN0YXRlLmd5bUZpbHRlciA9PT0gJ3JvcGUnID8gJ2l0ZW0tc2VsZWN0ZWQnIDogJycgKX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRGaWx0ZXIoJ3JvcGUnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBsaXN0LWxhYmVsXCI+Um9wZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLmZpbHRlckd5bXModGhpcy5wcm9wcy5neW1zLCB0aGlzLnN0YXRlLmd5bUZpbHRlcil9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2d5bSd9IHVwZGF0ZT17dGhpcy51cGRhdGV9IGxpc3QvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pilcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogJ2NvbG9yJyxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnRlYW0uY29sb3JzfSByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gc2VsZWN0b3I9eydjb2xvcid9IHVwZGF0ZT17dGhpcy51cGRhdGV9Lz5cbiAgICAgICAgICAgICAgICApXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6ICdncmFkZScsXG5cdFx0XHRcdGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5wcm9wcy5yb3V0ZS50eXBlPyB0aGlzLnByb3BzLnRlYW0uZ3JhZGVzW3RoaXMucHJvcHMucm91dGUudHlwZV0gOiB0aGlzLnByb3BzLnRlYW0uZ3JhZGVzLmJvdWxkZXJ9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2dyYWRlJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0vPlxuICAgICAgICAgICAgICAgIClcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogJ2xvY2F0aW9uJyxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnJvdXRlLmd5bSAmJiB0aGlzLnByb3BzLnJvdXRlLmd5bS53YWxsc1t0aGlzLnN0YXRlLmd5bUZpbHRlcl0gfHwgW119IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2xvY2F0aW9uJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0gbGlzdC8+XG4gICAgICAgICAgICAgICAgKVxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiAndGFncycsXG5cdFx0XHRcdGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5wcm9wcy50ZWFtLnRhZ3N9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J3RhZ3MnfSB1cGRhdGU9e3RoaXMudXBkYXRlVGFnc30gbGlzdC8+XG4gICAgICAgICAgICAgICAgKVxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiAncmV2aWV3Jyxcblx0XHRcdFx0ZW5kOiB0cnVlLFxuXHRcdFx0XHRyZXZpZXc6IHRydWUsXG5cdFx0XHRcdGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6UHJldmlldyByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gbW92ZT17dGhpcy5tb3ZlfSByZXNldD17dGhpcy5yZXNldEZvcm19Lz5cbiAgICAgICAgICAgICAgICApXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0V2l6YXJkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvcnRXaXphcmQuanN4IiwiZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVHeW1zKGd5bXMpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVDRUlWRV9HWU1TJyxcblx0XHRwYXlsb2FkOiBneW1zXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEd5bXModGVhbSkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT5mZXRjaGVyLmdldCgnZ3ltcy90ZWFtLycrdGVhbS5faWQpLnRoZW4oZ3ltcyA9PiB7XG5cdFx0ZGlzcGF0Y2gocmVjZWl2ZUd5bXMoZ3ltcykpXG5cdFx0cmV0dXJuIGd5bXNcblx0fSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL2d5bS5qcyIsImV4cG9ydCBmdW5jdGlvbiBhZGRSb3V0ZShyb3V0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdBRERfUk9VVEUnLFxuXHRcdHBheWxvYWQ6IHJvdXRlXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVSb3V0ZXMocm91dGVzKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1JFQ0VJVkVfUk9VVEVTJyxcblx0XHRwYXlsb2FkOiByb3V0ZXNcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUm91dGUocm91dGUpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnVVBEQVRFX1JPVVRFJyxcblx0XHRwYXlsb2FkOiByb3V0ZVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSb3V0ZXMoYXJyKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1JFTU9WRV9ST1VURVMnLFxuXHRcdHBheWxvYWQ6IGFyclxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZXNCeUd5bShpZCkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4gZmV0Y2hlci5nZXQoYHJvdXRlL2d5bS8ke2lkfWAsIHtcblx0XHRneW06IGlkXG5cdH0pLnRoZW4ocm91dGVzID0+IHtcblx0XHRkaXNwYXRjaChyZWNlaXZlUm91dGVzKHJvdXRlcykpXG5cdC8vcmV0dXJuIHJvdXRlc1xuXHR9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdFJvdXRlKHJvdXRlKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiBmZXRjaGVyLmNyZWF0ZSgncm91dGUnLCByb3V0ZSlcblx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0ZGlzcGF0Y2goYWRkUm91dGUocmVzKSlcblx0XHRcdHJldHVybiByZXNcblx0XHR9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHV0Um91dGUocm91dGUpIHtcblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+IGZldGNoZXIudXBkYXRlKGByb3V0ZS8ke3JvdXRlLl9pZH1gLCByb3V0ZSlcblx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0ZGlzcGF0Y2godXBkYXRlUm91dGUocmVzKSlcblx0XHRcdHJldHVybiByZXNcblx0XHR9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvcm91dGUuanMiLCJpbXBvcnQgeyByZWNlaXZlR3ltcyB9IGZyb20gJy4vZ3ltJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVRlYW0odGVhbSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdSRUNFSVZFX1RFQU0nLFxuXHRcdHBheWxvYWQ6IHRlYW1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVhbSgpIHtcblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+IHtcblx0XHRsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpXG5cdFx0aWYgKHN0YXRlLnRlYW0uZ3ltcykge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZldGNoZXIuZ2V0KCd0ZWFtcy9jdXJyZW50Jylcblx0XHRcdFx0LnRoZW4odGVhbSA9PiB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2gocmVjZWl2ZVRlYW0odGVhbSkpXG5cdFx0XHRcdFx0ZGlzcGF0Y2gocmVjZWl2ZUd5bXModGVhbS5neW1zKSlcblx0XHRcdFx0XHRyZXR1cm4gdGVhbVxuXHRcdFx0XHR9KVxuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvdGVhbS5qcyIsImV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVXNlcih1c2VyKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1JFQ0VJVkVfVVNFUicsXG5cdFx0cGF5bG9hZDogdXNlclxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyKCkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuXHRcdGxldCBzdGF0ZSA9IGdldFN0YXRlKClcblx0XHRpZiAoc3RhdGUudXNlci5faWQpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUudXNlcilcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZldGNoZXIuZ2V0KCd1c2Vycy9jdXJyZW50Jylcblx0XHRcdFx0LnRoZW4odXNlciA9PiB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2gocmVjZWl2ZVVzZXIodXNlcikpXG5cdFx0XHRcdFx0cmV0dXJuIHVzZXJcblx0XHRcdFx0fSlcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3VzZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gdXBkYXRlUm91dGUoZmllbGQsIHZhbHVlKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1VQREFURV9ORVdfUk9VVEUnLFxuXHRcdHBheWxvYWQ6IHtcblx0XHRcdGZpZWxkLFxuXHRcdFx0dmFsdWVcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhZ3ModmFsdWUpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnVVBEQVRFX1RBR1MnLFxuXHRcdHBheWxvYWQ6IHZhbHVlXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0V2l6YXJkKCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdSRVNFVF9XSVpBUkQnXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvd2l6YXJkLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0gW11cblxuY29uc3QgdHJhbnNmb3JtR3ltcyA9IChneW1zKSA9PiB7XG4gICAgZ3ltcy5mb3JFYWNoKGd5bSA9PiB7XG4gICAgICAgIGd5bS52YWx1ZSA9IGd5bS5uYW1lXG4gICAgfSlcbiAgICByZXR1cm4gZ3ltc1xufVxuXG5jb25zdCBneW0gPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX0dZTVMnOlxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtR3ltcyhhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdHRVRfR1lNUyc6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ3ltICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9neW0uanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5pbXBvcnQgd2l6YXJkIGZyb20gJy4vd2l6YXJkJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IHJvdXRlIGZyb20gJy4vcm91dGUnXG5pbXBvcnQgdGVhbSBmcm9tICcuL3RlYW0nXG5pbXBvcnQgZ3ltIGZyb20gJy4vZ3ltJ1xuXG5jb25zdCBtYWluUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcm91dGU6IHdpemFyZCwgXG4gICAgcm91dGVzOiByb3V0ZSxcbiAgICB0ZWFtOiB0ZWFtLFxuICAgIGd5bXM6IGd5bSxcbiAgICB1c2VyLFxuICAgIHJvdXRlcjogcm91dGVyUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgbWFpblJlZHVjZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuY29uc3QgaW5pdGlhbFN0YXRlID0gbmV3IEltbXV0YWJsZS5NYXAoKVxuXG5mdW5jdGlvbiByb3V0ZShzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9ST1VURSc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zZXQoYWN0aW9uLnBheWxvYWQuX2lkLCBhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdSRU1PVkVfUk9VVEVTJzoge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSBuZXcgSW1tdXRhYmxlLlNldChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlck5vdCgodikgPT5yb3V0ZXMuaGFzKHYuX2lkKSlcbiAgICB9XG4gICAgY2FzZSAnUkVDRUlWRV9ST1VURVMnOlxuICAgICAgICByZXR1cm4gc3RhdGUuY29uY2F0KGFjdGlvbi5wYXlsb2FkLm1hcChyb3V0ZSA9PiBbcm91dGUuX2lkLHJvdXRlXSkpXG4gICAgY2FzZSAnVVBEQVRFX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChhY3Rpb24ucGF5bG9hZC5faWQsIGFjdGlvbi5wYXlsb2FkKVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9yb3V0ZS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjb2xvcnM6IFtdLFxuICAgIHRhZ3M6IFtdLFxuICAgIGdyYWRlczoge1xuICAgICAgICBib3VsZGVyOiBbXSxcbiAgICAgICAgcm9wZTogW11cbiAgICB9XG59XG5cbmNvbnN0IHRyYW5zZm9ybVRlYW0gPSAodGVhbSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRlYW0sXG4gICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgYm91bGRlcjogdGVhbS5ncmFkZXMuYm91bGRlci5tYXAoKGdyYWRlLCBpbmRleCkgPT4ge3JldHVybiB7X2lkOiBpbmRleCwgdmFsdWU6IGdyYWRlfX0pLFxuICAgICAgICAgICAgcm9wZTogdGVhbS5ncmFkZXMucm9wZS5tYXAoKGdyYWRlLCBpbmRleCkgPT4ge3JldHVybiB7X2lkOiBpbmRleCwgdmFsdWU6IGdyYWRlfX0pXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yczogdGVhbS5jb2xvcnMubWFwKGNvbG9yID0+IHtyZXR1cm4ge19pZDogY29sb3IubmFtZSwgdmFsdWU6IGNvbG9yLm5hbWUsIGNvbG9yOiBjb2xvci5jb2xvcn19KSxcbiAgICAgICAgdGFnczogdGVhbS50YWdzLm1hcCh0YWcgPT4ge3JldHVybiB7X2lkOiB0YWcsIHZhbHVlOiB0YWd9fSlcbiAgICB9XG59XG5cbmNvbnN0IHRlYW0gPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX1RFQU0nOlxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtVGVhbShhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdHRVRfVEVBTSc6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVhbSAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvdGVhbS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IHVzZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX1VTRVInOlxuICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICBjYXNlICdHRVRfVVNFUic6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlciAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvdXNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0YWdzOiBbXVxufVxuXG5jb25zdCB3aXphcmQgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVUERBVEVfTkVXX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFthY3Rpb24ucGF5bG9hZC5maWVsZF06IGFjdGlvbi5wYXlsb2FkLnZhbHVlfSlcbiAgICBjYXNlICdVUERBVEVfVEFHUyc6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3RhZ3M6IHRvZ2dsZVRhZyhzdGF0ZS50YWdzLCBhY3Rpb24ucGF5bG9hZCl9KVxuICAgIGNhc2UgJ1JFU0VUX1dJWkFSRCc6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7Z3ltOiBzdGF0ZS5neW0sIHRhZ3M6IFtdfSlcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpemFyZFxuXG4vLyB1dGlsaXRpZXNcblxuZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZ3MsIHRhZykge1xuICAgIGxldCBpbmQgPSB0YWdzLmluZGV4T2YodGFnKVxuICAgIHRhZ3MgPSBbLi4udGFnc11cbiAgICBpZiAoaW5kID49IDApIHtcbiAgICAgICAgdGFnc1tpbmRdID0gdGFnc1t0YWdzLmxlbmd0aCAtIDFdXG4gICAgICAgIHRhZ3MubGVuZ3RoID0gdGFncy5sZW5ndGggLSAxXG4gICAgICAgIHJldHVybiB0YWdzXG4gICAgfVxuICAgIHJldHVybiB0YWdzLmNvbmNhdCh0YWcpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvd2l6YXJkLmpzIiwiIC8qKlxuICogQG5hbWUgc3RhdGVUb2dnbGVcbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIHByb3BlcnR5IG9mIHN0YXRlIHRvIHRvZ2dsZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5cblxuZXhwb3J0IGNvbnN0IHN0YXRlVG9nZ2xlID0gcHJvcCA9PiBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW3Byb3BdOiAhc3RhdGVbcHJvcF1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvdXRpbC9pbmRleC5qcyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXG5pbXBvcnQgU3ZnSW5qZWN0b3IgZnJvbSAnc3ZnLWluamVjdG9yJ1xuXG5jb25zdCByZW5kZXIgPSBDb21wb25lbnQgPT4ge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwQ29udGFpbmVyPlxuXHRcdDxDb21wb25lbnQgLz5cblx0PC9BcHBDb250YWluZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgKVxufVxuXG5yZW5kZXIoQXBwKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb25pYy1zcHJpdGUnKVxuICAgIFN2Z0luamVjdG9yKGljb25zKVxufSlcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBjb25zb2xlLmxvZygnc28gc28gaG90JylcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9hcHAnLCAoKSA9PiB7IFxuICAgICAgICBjb25zdCBBcHAgPSByZXF1aXJlKCcuL2FwcCcpLmRlZmF1bHRcbiAgICAgICAgcmVuZGVyKEFwcClcbiAgICB9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9tYWluLmpzeCIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSBbXG4gICAgeyAnX2lkJzogJ3JlZCcsICd2YWx1ZSc6ICdyZWQnLCAnY29sb3InOiAnI2ZlMmUyZScgfSxcbiAgICB7ICdfaWQnOiAnb3JhbmdlJywgJ3ZhbHVlJzogJ29yYW5nZScsICdjb2xvcic6ICcjZjkyJyB9LFxuICAgIHsgJ19pZCc6ICd5ZWxsb3cnLCAndmFsdWUnOiAneWVsbG93JywgJ2NvbG9yJzogJyNmZmYwNGMnIH0sXG4gICAgeyAnX2lkJzogJ2dyZWVuJywgJ3ZhbHVlJzogJ2dyZWVuJywgJ2NvbG9yJzogJyMwYjAnIH0sXG4gICAgeyAnX2lkJzogJ2JsdWUnLCAndmFsdWUnOiAnYmx1ZScsICdjb2xvcic6ICcjMWU1NGY0JyB9LFxuICAgIHsgJ19pZCc6ICdwdXJwbGUnLCAndmFsdWUnOiAncHVycGxlJywgJ2NvbG9yJzogJyM4MDgnIH0sXG4gICAgeyAnX2lkJzogJ2JsYWNrJywgJ3ZhbHVlJzogJ2JsYWNrJywgJ2NvbG9yJzogJyMwMDAnIH0sXG4gICAgeyAnX2lkJzogJ3doaXRlJywgJ3ZhbHVlJzogJ3doaXRlJywgJ2NvbG9yJzogJyNmZmYnIH0sXG4gICAgeyAnX2lkJzogJ3BpbmsnLCAndmFsdWUnOiAncGluaycsICdjb2xvcic6ICcjZTVkJyB9XG5dXG5cblxuZXhwb3J0IGNvbnN0IHBhbGF0dGUgPSB7XG4gICAgdGVhbDoge3ByaW1hcnk6ICcjMDhlMGM1Jywgc2Vjb25kYXJ5OiAnIzRiZDBkZCd9LFxuICAgIHBpbms6IHtwcmltYXJ5OiAnI2ZhNDk3OCcsIHNlY29uZGFyeTogJyNlYjY3YTgnfSxcbiAgICBvcmFuZ2U6IHtwcmltYXJ5OiAnI2ZiOTUwMCcsIHNlY29uZGFyeTogJyNmYmMxMDAnfSxcbiAgICBncmVlbjoge3ByaW1hcnk6ICcjODNiZjAwJywgc2Vjb25kYXJ5OiAnIzgzYmYwMCd9LFxuICAgIHllbGxvdzoge3ByaW1hcnk6ICcjZmZkYzAwJywgc2Vjb25kYXJ5OiAnI2ZmZjQwMCd9LFxuICAgIGJsdWU6IHtwcmltYXJ5OiAnIzAwOEZGRicsIHNlY29uZGFyeTogJyMyNTc3RTgnfSxcbiAgICByZWQ6IHtwcmltYXJ5OiAnI0VDMzUzNScsIHNlY29uZGFyeTogJyNFMzE4MjgnfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3J0Y29uZmlnLmpzIiwiY2xhc3Mgz4Age1xuICAgIGNvdW50QnkoYXJyLCBjb21wKSB7XG4gICAgICAgIGlmICghY29tcCkgXG4gICAgICAgICAgICBjb21wID0gKGEpID0+IGFcbiAgICAgICAgbGV0IGdyb3VwZWQgPSB7fVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyW2ldXG4gICAgICAgICAgICBpZiAoY29tcChhKSBpbiBncm91cGVkKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBlZFtjb21wKGEpXSsrXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyb3VwZWRbY29tcChhKV0gPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwZWRcbiAgICB9XG5cbiAgICBidWNrZXRzKGFyciwgbGlzdCkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnKSBcbiAgICAgICAgICAgIGxpc3QgPSBsaXN0LnNwbGl0KCcgJylcbiAgICAgICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkgXG4gICAgICAgICAgICBsaXN0ID0gdGhpcy5fbWFrZUhhc2gobGlzdCwgMClcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0W2FycltpXV0rK1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuXG4gICAgcmFuZ2UoYSwgYikge1xuICAgICAgICBsZXQgc3RhcnQgPSBiXG4gICAgICAgICAgICA/IGFcbiAgICAgICAgICAgIDogMFxuICAgICAgICBsZXQgZW5kID0gYlxuICAgICAgICAgICAgPyBiXG4gICAgICAgICAgICA6IGFcbiAgICAgICAgbGV0IGFyciA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgZXhwYW5kU2ltcGxlT2JqZWN0KG9iaikge1xuICAgICAgICBvYmogPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgIT09IC0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlRG90Tm90YXRpb24oa2V5LCBvYmpba2V5XSwgb2JqKVxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG5cbiAgICB0b2dnbGVBcnJheShhLCB2KSB7XG4gICAgICAgIGEgPSBbLi4uYV1cbiAgICAgICAgdmFyIGkgPSBhLmluZGV4T2YodilcbiAgICAgICAgaWYgKGkgPT09IC0xKVxuICAgICAgICAgICAgYS5wdXNoKHYpXG4gICAgICAgIGVsc2VcbiAgICAgICAgYS5zcGxpY2UoaSwxKVxuXG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuXG5cbiAgICAvLyBpbnRlcm5hbFxuXG4gICAgX21ha2VIYXNoKGFyciwgdmFsKSB7XG4gICAgICAgIGxldCBoYXNoID0ge31cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoW2FycltpXV0gPSB2YWxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFzaFxuICAgIH1cblxuICAgIF9wYXJzZURvdE5vdGF0aW9uKHN0ciwgdmFsLCBvYmopIHtcbiAgICAgICAgdmFyIGN1cnJlbnRPYmogPSBvYmosXG4gICAgICAgICAgICBrZXlzID0gc3RyLnNwbGl0KCcuJyksXG4gICAgICAgICAgICBpLCBsID0gTWF0aC5tYXgoMSwga2V5cy5sZW5ndGggLSAxKSxcbiAgICAgICAgICAgIGtleVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV1cbiAgICAgICAgICAgIGN1cnJlbnRPYmpba2V5XSA9IGN1cnJlbnRPYmpba2V5XSB8fCB7fVxuICAgICAgICAgICAgY3VycmVudE9iaiA9IGN1cnJlbnRPYmpba2V5XVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdXJyZW50T2JqW2tleXNbaV1dID0gdmFsXG4gICAgICAgIGRlbGV0ZSBvYmpbc3RyXVxuICAgIH1cblxuXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyDPgCgpXG5cbmV4cG9ydCBjb25zdCByZW5kZXJJZiA9IGNvbmRpdGlvbiA9PiBlbGVtZW50ID0+IChjb25kaXRpb24gJiYgZWxlbWVudCkgfHwgJycgXG5cbmV4cG9ydCBjb25zdCBkYXRlTWF0aCA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGRheSA9IDguNjRlN1xuICAgIGNvbnN0IHdlZWsgPSA2LjA0OGUrOFxuICAgIFxuICAgIGZ1bmN0aW9uIHdlZWtzT2xkKGRheSkge1xuICAgICAgICBjb25zdCBtcyA9IERhdGUubm93KCkgLSBuZXcgRGF0ZShkYXkpLmdldFRpbWUoKVxuXG4gICAgICAgIGNvbnN0IHdlZWtzID0gbXMvd2Vla1xuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdlZWtzKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRheSxcbiAgICAgICAgd2VlayxcbiAgICAgICAgd2Vla3NPbGRcbiAgICB9XG5cbn0pKClcblxuZXhwb3J0IGNvbnN0IHNsZWVwID0gKHRpbWUpID0+ICgpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvcnR1dGlsLmpzIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGNvbG9yRmFjdG9yeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0Q29sb3JcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgaWYoIWNvbG9yKSByZXR1cm5cbiAgICAgICAgbGV0IHNwbGl0dGVyID0gY29sb3IubGVuZ3RoID4gND8gLy57Mn0vZyA6IC8uL2dcbiAgICAgICAgbGV0IG1pZGRsZSA9IGNvbG9yLmxlbmd0aCA+IDQ/IDEyOCA6IDhcbiAgICAgICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKCcjJywgJycpLm1hdGNoKHNwbGl0dGVyKVxuICAgICAgICByZXR1cm4gY29sb3IucmVkdWNlKChhLCBiKSA9PiAocGFyc2VJbnQoYiwgMTYpIC8gMykgKyBhLCAwKSA+IG1pZGRsZSA/ICcjNTU1JyA6ICcjZmZmJ1xuICAgIH1cbn0pKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zZXJ2aWNlcy9jb2xvclNlcnZpY2UuanMiLCJjbGFzcyBmZXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSAnL2FwaS8nXG4gICAgfVxuXG4gICAgZ2V0KHJlc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMucHJlZml4ICsgcmVzb3VyY2UgKyBwYXJhbVRvUXVlcnkocGFyYW1zKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGNyZWF0ZShyZXNvdXJjZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogZm9ybWF0Qm9keShkYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZShyZXNvdXJjZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgYm9keTogZm9ybWF0Qm9keShkYXRhKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBmZXRjaGVyKClcblxuZnVuY3Rpb24gcGFyYW1Ub1F1ZXJ5KG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gJydcblxuICAgIHJldHVybiAnPycgK1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArXG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKVxuICAgICAgICB9KS5qb2luKCcmJylcbn1cblxuZnVuY3Rpb24gZm9ybWF0Qm9keShvYmopIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NlcnZpY2VzL2ZldGNoZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3N0eWxlcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcHVibGljL3N0eWxlcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==