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

/***/ "./public/components/account/components/basicInfo.jsx":
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

var _react = __webpack_require__("./node_modules/react/index.js");

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

  __REACT_HOT_LOADER__.register(isActive, 'isActive', '/Users/peller/Desktop/reactracker/public/components/common/tabSwitcher.jsx');

  __REACT_HOT_LOADER__.register(Slider, 'Slider', '/Users/peller/Desktop/reactracker/public/components/common/tabSwitcher.jsx');

  __REACT_HOT_LOADER__.register(tabSwitcher, 'tabSwitcher', '/Users/peller/Desktop/reactracker/public/components/common/tabSwitcher.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/common/tabSwitcher.jsx');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvYmFzaWNJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvdGVhbUluZm8uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9mbGV4Um93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vaWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbnB1dEJveC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2xvYWRCYXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9sb2FkQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRQYW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRTd2F0Y2guanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9zb3J0YWJsZUxpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9zd2lwZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3RhYlN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2NvbXBvbmVudHMvR3ltSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9Sb3V0ZUxpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvU3RhdHNDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlUm93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9SdENvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vUnRIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjay5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XekNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XekdyaWQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvV3pQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL1d6U3RlcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekl0ZW0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pMaXN0SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elBhZ2UuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9ydFdpemFyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9neW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3RlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy91c2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvd2l6YXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2d5bS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy90ZWFtLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvd2l6YXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21haW4uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9ydGNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcnR1dGlsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zZXJ2aWNlcy9jb2xvclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NlcnZpY2VzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiaGlzdG9yeSIsInJvdXRlTWlkZGxld2FyZSIsInN0b3JlIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsIndpdGhFeHRyYUFyZ3VtZW50IiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwibmV4dFJvb3RSZWR1Y2VyIiwicmVxdWlyZSIsInJlcGxhY2VSZWR1Y2VyIiwiQXBwIiwiQmFzaWNJbmZvIiwic3RhdGUiLCJvblNhdmUiLCJzYXZlU3VjY2VzcyIsImZpZWxkcyIsInZhbGlkYXRlRW1wdHkiLCJ2YWxpZGF0ZUVtYWlsIiwicHJvcHMiLCJ1c2VyIiwicGVuZGluZyIsImRhdGEiLCJzZXRTdGF0ZSIsInZhbHVlcyIsImV4cGFuZFNpbXBsZU9iamVjdCIsInVwZGF0ZSIsInRoZW4iLCJsYWJlbCIsIm5hbWUiLCJ0eXBlIiwidmFsaWRhdGUiLCJ2YWx1ZSIsImxlbmd0aCIsInRlc3QiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJMaXN0SXRlbUNvbG9yIiwiY29sb3IiLCJMaXN0SXRlbSIsImF2YWlsYWJsZSIsIm1hcCIsIlRlYW1JbmZvIiwidGVhbSIsImNvbG9ycyIsInNsaWNlIiwiYSIsImIiLCJfaWQiLCJncmFkZXMiLCJib3VsZGVyIiwibWFwU3RhdGUiLCJ0YWJzIiwiQWNjb3VudCIsImxvYWRlZCIsImFjdGl2ZSIsInRvZ2dsZSIsImdldFVzZXIiLCJpbmQiLCJmdW5jIiwibWFwRGlzcGF0Y2giLCJkaXNwYXRjaCIsInN0eWxlcyIsImRpc3BsYXkiLCJpbmxpbmUiLCJqdXN0aWZ5Q29udGVudCIsImFyb3VuZCIsIm1hcmdpbiIsInN0eWxlIiwiZmxleFJvdyIsImNoaWxkcmVuIiwibm9kZSIsIkljb24iLCJhbHRDbGFzcyIsImNsYXNzTmFtZSIsImljb24iLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiUnRDYXJkIiwiUnRQYW5lIiwiUnRGb3JtIiwiUnRMaXN0IiwiU29ydGFibGVMaXN0IiwiVGFiU3dpdGNoZXIiLCJGbGV4Um93IiwiTG9hZENvbnRhaW5lciIsIlN3aXBlQ29udGFpbmVyIiwiSW5wdXRCb3giLCJMb2FkQmFyIiwiUnRTd2F0Y2giLCJ2YWxpZCIsImhhbmRsZUNoYW5nZSIsIm9uQmx1ciIsImUiLCJmaWVsZCIsInRhcmdldCIsInVwZGF0ZUZvcm0iLCJlZGl0IiwiQ29tcG9uZW50IiwiYm9vbCIsImNvbnRlbnQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJ0aXRsZSIsIlNldCIsInRvZ2dsZUVkaXQiLCJzYXZlIiwibWFrZUZvcm0iLCJPYmplY3QiLCJhc3NpZ24iLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInBvc2l0aW9uIiwiZWRpdGFibGUiLCJzaXplIiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJpIiwiQXJyYXkiLCJwYWRkaW5nIiwibW9kaWZpZXIiLCJhZGQiLCJkZWxldGUiLCJkZWZhdWx0UHJvcHMiLCJhcnJheU9mIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJzaGFwZSIsIm9uQ2xpY2siLCJsaXN0SXRlbXMiLCJpdGVtIiwiaW5kZXgiLCJjIiwidCIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwibG9jYWxTdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIml0ZW1zIiwibWFrZUhhbmRsZXJzIiwiY29tcG9uZW50IiwiY29tcGFyYXRvciIsImN1cnJlbnQiLCJsaXN0Iiwib3B0aW9ucyIsImRpZmZlcmVuY2VXaXRoIiwibmV4dFByb3BzIiwiZm9udFNpemUiLCJhcnIiLCJrZXkiLCJzb3VyY2UiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsImdldERhdGEiLCJkZXN0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJvbGRJbmQiLCJuZXdJbmQiLCJsaXN0cyIsIm5ld0VsIiwic3BsaWNlIiwidG91Y2hTdGFydCIsInRvdWNoRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJzdGFydFgiLCJjbGllbnRYIiwiZGlzdCIsIm9uTGVmdCIsIm9uU3dpcGUiLCJvblJpZ2h0IiwiaXNBY3RpdmUiLCJ0YWIiLCJTbGlkZXIiLCJ0YWJTd2l0Y2hlciIsIkd5bUl0ZW0iLCJ1bmRlZmluZWQiLCJnZXRSb3V0ZXMiLCJneW0iLCJ1cmwiLCJvd25Qcm9wcyIsImd5bVJvdXRlcyIsInJvdXRlcyIsInJvdXRlIiwidHJhbnNmb3JtUm91dGVzIiwiaWQiLCJzb3J0ZWQiLCJidWNrZXRzIiwiZ3JhZGUiLCJyYW5nZSIsImtleXMiLCJHeW1MaXN0IiwiZ3ltcyIsIm1hcFByb3BzIiwiZmV0Y2hpbmciLCJSb3V0ZUxpc3QiLCJzZWxlY3RIYW5kbGVyIiwibW91c2VEb3duIiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdCIsInNoaWZ0S2V5IiwiTnVtYmVyIiwibGFzdFNlbGVjdGVkIiwibCIsIk1hdGgiLCJtaW4iLCJoIiwibWF4Iiwic2VsZWN0ZWQiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsInRlbXAiLCJoYXMiLCJkZWxldGVIYW5kbGVyIiwiaGFuZGxlU29ydCIsInVwZGF0ZVJvdXRlIiwic29ydE9uIiwibmV4dCIsInNvcnQiLCJkaXIiLCJyZXZlcnNlIiwidXBkYXRlZF9hdCIsIndhbGxzIiwiZXZlbnQiLCJpbmRzIiwiaWRzIiwicmVtb3ZlUm91dGVzIiwicGFyYW0iLCJuZXdSb3V0ZXMiLCJuZXdSb3V0ZSIsInByb3AiLCJEYXRlIiwicGFyc2UiLCJzZXRfb24iLCJTdGF0c0NhcmQiLCJtYWtlT3ZlcnZpZXciLCJjb3VudCIsIm9sZGVzdCIsIkluZmluaXR5IiwiZm9yRWFjaCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImFycm93cyIsIlJvdXRlSGVhZGVyIiwiYXJyb3ciLCJUZElucHV0IiwiVGRTZWxlY3QiLCJSb3V0ZVJvdyIsImNhbmNlbEVkaXQiLCJkZWxldGVSb3V0ZSIsInVwZGF0ZUZpZWxkIiwid2FsbCIsInNldHRlciIsIm1lbWJlcnMiLCJuaWNrbmFtZSIsIndpZHRoIiwid2Vla3NPbGQiLCJudW1iZXIiLCJHeW1PdmVydmlldyIsInR5cGVzIiwidXBkYXRlUm91dGVzIiwib25UZWFtIiwic2V0TG9hZGVkIiwic2V0RXJyb3IiLCJnZXREYXRhRm9yR3ltIiwibWF0Y2giLCJwYXJhbXMiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJtaW5IZWlnaHQiLCJnZXRUZWFtIiwiY2F0Y2giLCJjdXJyZW50R3ltIiwiUnRDb250ZW50IiwibG9jYXRpb24iLCJSdEhlYWRlciIsImlzT3BlbiIsImRyb3Bkb3duSXNPcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJNYWluIiwiZ2V0R3ltcyIsInJvdXRlciIsIm1haW5Db250YWluZXIiLCJkMyIsIlJ0U3RhY2siLCJtYWtlQ2hhcnQiLCJhcHBseSIsImVsIiwidG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjaGFydCIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJzZWdtZW50cyIsInNlbGVjdEFsbCIsImVudGVyIiwiZCIsIlJ0QmFyIiwiYmFyV2lkdGgiLCJ5IiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yU2NhbGUiLCJpbnRlcnBvbGF0ZUhjbCIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRlUmFpbmJvdyIsImNsYXNzZWQiLCJiYXIiLCJkZWxheSIsInJhbmRvbSIsImR1cmF0aW9uIiwiZWFzZSIsImVhc2VFeHBJbiIsInRpcCIsIlJ0QmlnQmFyIiwidXBkYXRlQ2hhcnQiLCJyZW1vdmUiLCJzdmciLCJ0ZXh0IiwiZm9udFNjYWxlIiwiY2xhbXAiLCJvZmZzZXQiLCJodG1sIiwiY2FsbCIsIm9uIiwic2hvdyIsImhpZGUiLCJyZXNpemVkIiwic2NhbGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvbnJlc2l6ZSIsImdvYWwiLCJSdFBpZSIsInJhZGl1cyIsImciLCJwaWUiLCJyYWluYm93IiwicGF0aCIsImFyYyIsIm91dGVyUmFkaXVzIiwiaW5uZXJSYWRpdXMiLCJob3ZlclBhdGgiLCJjZW50cm9pZCIsImFnZSIsIld6Q29udGFpbmVyIiwidHJhbnNmb3JtIiwic3RlcCIsIld6R3JpZCIsIkVsIiwiaXNTZWxlY3RlZCIsInNlbGVjdG9yIiwidGFncyIsImluZGV4T2YiLCJvbmVPZiIsIld6UHJldmlldyIsInBvc3RSb3V0ZSIsInRyYW5zZm9ybWVkUm91dGUiLCJ0cmFuc2Zvcm1Sb3V0ZSIsImpvaW4iLCJyZXNldCIsImFkZGVkIiwibW92ZSIsIm9iaiIsIm5vdyIsIld6U3RlcCIsInJldmlldyIsInByZXYiLCJXekl0ZW0iLCJpdGVtU3R5bGUiLCJXekxpc3RJdGVtIiwiX2NsaWNrIiwic2V0Q2xhc3MiLCJXelBhZ2UiLCJiaW5kIiwibWFwU3RhdGVUb1Byb3BzIiwidXBkYXRlVGFncyIsInJlc2V0Rm9ybSIsIlJ0V2l6YXJkQ29udGFpbmVyIiwiUnRXaXphcmQiLCJneW1GaWx0ZXIiLCJjbGlja3MiLCJjbGlja2VkIiwic3RlcHMiLCJzdGVwQ29udGVudCIsImVuZCIsInRvU3RlcCIsInRhZyIsInNldEZpbHRlciIsImZpbHRlckd5bXMiLCJyZWNlaXZlR3ltcyIsInBheWxvYWQiLCJnZXRTdGF0ZSIsImZldGNoZXIiLCJnZXQiLCJhZGRSb3V0ZSIsInJlY2VpdmVSb3V0ZXMiLCJnZXRSb3V0ZXNCeUd5bSIsInB1dFJvdXRlIiwiY3JlYXRlIiwicmVzIiwicmVjZWl2ZVRlYW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlY2VpdmVVc2VyIiwicmVzZXRXaXphcmQiLCJpbml0aWFsU3RhdGUiLCJ0cmFuc2Zvcm1HeW1zIiwiYWN0aW9uIiwibWFpblJlZHVjZXIiLCJNYXAiLCJzZXQiLCJmaWx0ZXJOb3QiLCJ2IiwiY29uY2F0Iiwicm9wZSIsInRyYW5zZm9ybVRlYW0iLCJ3aXphcmQiLCJ0b2dnbGVUYWciLCJzdGF0ZVRvZ2dsZSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwicGFsYXR0ZSIsInRlYWwiLCJwaW5rIiwib3JhbmdlIiwiZ3JlZW4iLCJ5ZWxsb3ciLCJibHVlIiwicmVkIiwiz4AiLCJjb21wIiwiZ3JvdXBlZCIsInNwbGl0IiwiX21ha2VIYXNoIiwic3RhcnQiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9wYXJzZURvdE5vdGF0aW9uIiwidmFsIiwiaGFzaCIsInN0ciIsImN1cnJlbnRPYmoiLCJyZW5kZXJJZiIsImNvbmRpdGlvbiIsImVsZW1lbnQiLCJkYXRlTWF0aCIsImRheSIsIndlZWsiLCJtcyIsImdldFRpbWUiLCJ3ZWVrcyIsInJvdW5kIiwic2xlZXAiLCJ0aW1lIiwiY29sb3JGYWN0b3J5Iiwic3BsaXR0ZXIiLCJtaWRkbGUiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJwcmVmaXgiLCJyZXNvdXJjZSIsImZldGNoIiwicGFyYW1Ub1F1ZXJ5IiwianNvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJmb3JtYXRCb2R5IiwiY3JlZGVudGlhbHMiLCJlbmNvZGVVUklD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TEssSUFUSyxDQVNBO0FBQUEsV0FBT21ZLElBQUl1RSxJQUFKLEVBQVA7QUFBQSxJQVRBLENBQVA7QUFVQTs7Ozs7O2VBR2EsSUFBSTlFLE9BQUosRTs7Ozs7QUFFZixTQUFTNkUsWUFBVCxDQUFzQjNHLEdBQXRCLEVBQTJCO0FBQzFCLEtBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sRUFBUDs7QUFFVixRQUFPLE1BQ043USxPQUFPMEYsSUFBUCxDQUFZbUwsR0FBWixFQUFpQmhWLEdBQWpCLENBQXFCLFVBQVMrRyxHQUFULEVBQWM7QUFDbEMsU0FBT2tWLG1CQUFtQmxWLEdBQW5CLElBQTBCLEdBQTFCLEdBQ05rVixtQkFBbUJqSCxJQUFJak8sR0FBSixDQUFuQixDQUREO0FBRUEsRUFIRCxFQUdHNk4sSUFISCxDQUdRLEdBSFIsQ0FERDtBQUtBOztBQUVELFNBQVNtSCxVQUFULENBQW9CL0csR0FBcEIsRUFBeUI7QUFDeEIsUUFBT2dGLEtBQUtDLFNBQUwsQ0FBZWpGLEdBQWYsQ0FBUDtBQUNBOzs7Ozs7OzsrQkFqREs4QixPOzsrQkFxQ0c2RSxZOzsrQkFVQUksVTs7Ozs7Ozs7Ozs7O0FDL0NULHlDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZXBlbmRlbmNpZXMgc3VibW9kdWxlcyBpbXBvcnQgJy4vY29tcG9uZW50cy91dGlsL3V0aWwnIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydENoYXJ0L3J0Q2hhcnQnIGltcG9ydCAnLi9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkJyBpbXBvcnRcbi8vICcuL2NvbXBvbmVudHMvZ3ltTGlzdC9neW1MaXN0JyBpbXBvcnQgJy4vY29tcG9uZW50cy9tYWluL21haW4nIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydEd5bS9ydEd5bSdcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW4gZnJvbSAnY29tcG9uZW50cy9tYWluJ1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZUhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeSdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBmZXRjaGVyIGZyb20gJ3NlcnZpY2VzL2ZldGNoZXInXG5pbXBvcnQgbWFpblJlZHVjZXIgZnJvbSAnZGF0YS9yZWR1Y2VycydcbmltcG9ydCB7IENvbm5lY3RlZFJvdXRlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KClcbmNvbnN0IHJvdXRlTWlkZGxld2FyZSA9IHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSlcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcblx0bWFpblJlZHVjZXIsXG5cdHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCksXG5cdGFwcGx5TWlkZGxld2FyZShyb3V0ZU1pZGRsZXdhcmUsIHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KGZldGNoZXIpKVxuKVxuXG5pZiAobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgnLi9kYXRhL3JlZHVjZXJzJywgKCkgPT4ge1xuXHRcdGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmUoJy4vZGF0YS9yZWR1Y2Vycy9pbmRleCcpXG5cdFx0c3RvcmUucmVwbGFjZVJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyKVxuXHR9KVxufVxuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Q29ubmVjdGVkUm91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgICAgICAgICAgICA8TWFpbi8+XG4gICAgICAgICAgICAgICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvYXBwLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgUnRGb3JtIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCBmZXRjaGVyIGZyb20gJ3NlcnZpY2VzL2ZldGNoZXInXG5pbXBvcnQgcGksIHsgc2xlZXAgfSBmcm9tICdydHV0aWwnXG5cbmNsYXNzIEJhc2ljSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0geyAgfVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0dXNlcjogUHJvcFR5cGVzLm9iamVjdFxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8UnRGb3JtXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcz17IHRoaXMuZmllbGRzKCkgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9eyB0aGlzLnByb3BzLnVzZXIgfVxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZT17IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICBvblNhdmU9eyB0aGlzLm9uU2F2ZSB9XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmc9eyB0aGlzLnN0YXRlLnBlbmRpbmcgfSAvPlxuXHRcdClcblx0fVxuXG5cdG9uU2F2ZSA9IGRhdGEgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cGVuZGluZzogdHJ1ZVxuXHRcdH0pXG5cblx0XHR0aGlzLnZhbHVlcyA9IHBpLmV4cGFuZFNpbXBsZU9iamVjdChkYXRhKVxuXG5cdFx0cmV0dXJuIGZldGNoZXIudXBkYXRlKCd1c2Vycy9jdXJyZW50JywgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKHNsZWVwKDEwMDApKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5zYXZlU3VjY2VzcyhkYXRhKSlcblx0fVxuXG5cdHNhdmVTdWNjZXNzID0gZGF0YSA9PiAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwZW5kaW5nOiBmYWxzZVxuXHRcdH0pXG5cdFx0cmV0dXJuIGRhdGFcblx0fVxuXG5cdGZpZWxkcyA9ICgpID0+IFtcblx0XHRbXG5cdFx0XHQnR2VuZXJhbCcsXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiAnVXNlcm5hbWUnLFxuXHRcdFx0XHRuYW1lOiAndXNlcm5hbWUnLFxuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlRW1wdHlcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiAnRS1tYWlsJyxcblx0XHRcdFx0bmFtZTogJ2VtYWlsJyxcblx0XHRcdFx0dHlwZTogJ2VtYWlsJyxcblx0XHRcdFx0dmFsaWRhdGU6IHRoaXMudmFsaWRhdGVFbWFpbFxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0J1NldHRpbmcnLFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ05pY2tuYW1lJyxcblx0XHRcdFx0bmFtZTogJ25pY2tuYW1lJyxcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZUVtcHR5XG5cdFx0XHR9XVxuXHRdXG5cblx0dmFsaWRhdGVFbXB0eSA9IHZhbHVlID0+IHZhbHVlLmxlbmd0aCA+IDBcblxuXHR2YWxpZGF0ZUVtYWlsID0gdmFsdWUgPT4gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdCh2YWx1ZSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0luZm9cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWNjb3VudC9jb21wb25lbnRzL2Jhc2ljSW5mby5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFJ0U3dhdGNoLCBTb3J0YWJsZUxpc3QgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuaW1wb3J0IFJ0UGllIGZyb20gJ2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZSdcbmltcG9ydCBSdFN0YWNrIGZyb20gJ2NvbXBvbmVudHMvcnRDaGFydC9SdFN0YWNrJ1xuXG5cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ3J0Y29uZmlnJ1xuXG5cbmNvbnN0IExpc3RJdGVtQ29sb3IgPSBwcm9wcyA9PiA8bGkgey4uLnByb3BzfT48UnRTd2F0Y2ggY29sb3I9eyBwcm9wcy5jb2xvciB9IC8+PC9saT5cblxuXG5jb25zdCBMaXN0SXRlbSA9IHByb3BzID0+ICg8bGkgey4uLnByb3BzfT57cHJvcHMudmFsdWV9PC9saT4pICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbmNvbnN0IGF2YWlsYWJsZSA9IGNvbG9ycy5tYXAoY29sb3IgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGNvbG9yXG5cdH1cbn0pXG5cblxuY2xhc3MgVGVhbUluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHsgIH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHRlYW06IFByb3BUeXBlcy5vYmplY3Rcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgPFNvcnRhYmxlTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXsgdGhpcy5wcm9wcy50ZWFtLmNvbG9ycy5zbGljZSgwLCA1KS5tYXAoY29sb3IgPT4geyByZXR1cm4geyBjb2xvcn0gfSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IGF2YWlsYWJsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9eyBMaXN0SXRlbUNvbG9yIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmF0b3I9eyhhLCBiKSA9PiAgYS5jb2xvci5faWQgPT09IGIuY29sb3IuX2lkfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUxpc3RcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xpc3QtdW5zdHlsZWQnXG4gICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5wcm9wcy50ZWFtLmdyYWRlcy5ib3VsZGVyLnNsaWNlKDAsIDIpfVxuICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMudGVhbS5ncmFkZXMuYm91bGRlcn1cbiAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpc3RJdGVtfVxuICAgICAgICAgICAgICAgICAgIGNvbXBhcmF0b3I9eyhhLCBiKSA9PiBhLnZhbHVlID09PSBiLnZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8UnRQaWUgZGF0YT17WzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXX0vPlxuICAgICAgICAgICAgICA8UnRTdGFjayBkYXRhPXtbXG5cdHtcblx0XHR2YWx1ZTogMTVcblx0fSwge1xuXHRcdHZhbHVlOiAxMFxuXHR9LCB7XG5cdFx0dmFsdWU6IDUwXG5cdH1dfVxuICAgICAgICAgICAgICB3aWR0aD0nMTAwcHgnLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cdFx0KVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0dGVhbTogc3RhdGUudGVhbVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUpKFRlYW1JbmZvKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvY29tcG9uZW50cy90ZWFtSW5mby5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgVGFiIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgTG9hZEJhciwgUnRDYXJkLCBMb2FkQ29udGFpbmVyLCBUYWJTd2l0Y2hlciB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuaW1wb3J0IEJhc2ljSW5mbyBmcm9tICcuL2NvbXBvbmVudHMvYmFzaWNJbmZvJ1xuaW1wb3J0IFRlYW1JbmZvIGZyb20gJy4vY29tcG9uZW50cy90ZWFtSW5mbydcbmltcG9ydCB7IHJlbmRlcklmIH0gZnJvbSAncnR1dGlsJ1xuXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3VzZXInXG5cbmNvbnN0IHRhYnMgPSBbJ0Jhc2ljIEluZm8nLCAnVGVhbSBJbmZvJ11cblxuY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0cGVuZGluZzogZmFsc2UsXG5cdFx0YWN0aXZlOiAnQmFzaWMgSW5mbydcblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Z2V0VXNlcjogUFQuZnVuYyxcblx0XHR1c2VyOiBQVC5vYmplY3Rcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuZ2V0VXNlcigpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdHRoaXMuc2V0U3RhdGUoe1xuXHRcdGxvYWRlZDogdHJ1ZVxuXHR9KVxufSlcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8TG9hZENvbnRhaW5lciBsb2FkZWQ9e3RoaXMuc3RhdGUubG9hZGVkfT5cbiAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICA8UnRDYXJkIHRpdGxlPVwiTXkgQWNjb3VudFwiPlxuICAgICAgICAgICAgICAgIDxUYWJTd2l0Y2hlciB0YWJzPXt0YWJzfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJJZih0aGlzLnN0YXRlLmFjdGl2ZSA9PSAnQmFzaWMgSW5mbycpKFxuICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cIkJhc2ljIEluZm9cIiBldmVudEtleT17MX0gdGFiQ2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPEJhc2ljSW5mbyB1c2VyPXt0aGlzLnByb3BzLnVzZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7cmVuZGVySWYodGhpcy5zdGF0ZS5hY3RpdmUgPT09ICdUZWFtIEluZm8nKShcbiAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJUZWFtIEluZm9cIiBldmVudEtleT17Mn0gdGFiQ2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPFRlYW1JbmZvLz5cbiAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1J0Q2FyZD5cbiAgICAgICAgICAgIDwvTG9hZENvbnRhaW5lcj5cblx0XHQpXG5cdH1cblxuXHR0b2dnbGUgPSBpbmQgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBpbmRcblx0XHR9KVxuXHR9XG5cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHR1c2VyOiBzdGF0ZS51c2VyXG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcblx0cmV0dXJuIHtcblx0XHRnZXRVc2VyOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyKCkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEFjY291bnQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWNjb3VudC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHN0eWxlcyA9IHByb3BzID0+ICh7XG5cdGRpc3BsYXk6IHByb3BzLmlubGluZT8gJ2lubGluZS1mbGV4JyA6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6IHByb3BzLmFyb3VuZD8gJ3NwYWNlLWFyb3VuZCcgOiAnc3BhY2UtYmV0d2VlbicsXG5cdG1hcmdpbjogJ2F1dG8nLFxuXHQuLi5wcm9wcy5zdHlsZVxufSlcblxuY29uc3QgZmxleFJvdyA9IHByb3BzID0+IChcbiAgICA8ZGl2IHN0eWxlPXsgc3R5bGVzKHByb3BzKSB9IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4pXG5cbmZsZXhSb3cucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxleFJvd1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2ZsZXhSb3cuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQge29taXR9IGZyb20gJ3JhbWRhJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5cblxuY29uc3QgSWNvbiA9IHByb3BzID0+IChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgOCA4XCIgey4uLm9taXQoWydpY29uJywgJ2NvbG9yJywgJ2FsdENsYXNzJywgJ2NsYXNzTmFtZSddLCBwcm9wcyl9IGNsYXNzTmFtZT17Y3gocHJvcHMuYWx0Q2xhc3MgfHwgJ2ljb24nLCBwcm9wcy5jbGFzc05hbWUpfT5cbiAgICAgIDx1c2UgeGxpbmtIcmVmPXsnIycgKyBwcm9wcy5pY29ufSBjbGFzc05hbWU9e3Byb3BzLmNvbG9yIHx8ICdpY29uLWJsYWNrJ30gLz5cbiAgICA8L3N2Zz5cbilcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG5cdGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGFsdENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2ljb24uanN4IiwiaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi9mbGV4Um93J1xuaW1wb3J0IElucHV0Qm94IGZyb20gJy4vaW5wdXRCb3gnXG5pbXBvcnQgTG9hZEJhciBmcm9tICcuL2xvYWRCYXInXG5pbXBvcnQgTG9hZENvbnRhaW5lciBmcm9tICcuL2xvYWRDb250YWluZXInXG5pbXBvcnQgUnRDYXJkIGZyb20gJy4vcnRDYXJkJ1xuaW1wb3J0IFJ0Rm9ybSBmcm9tJy4vcnRGb3JtJ1xuaW1wb3J0IFJ0TGlzdCBmcm9tICcuL3J0TGlzdCdcbmltcG9ydCBSdFN3YXRjaCBmcm9tICcuL3J0U3dhdGNoJ1xuaW1wb3J0IFN3aXBlQ29udGFpbmVyIGZyb20gJy4vc3dpcGVDb250YWluZXInXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24nXG5pbXBvcnQgUnRQYW5lIGZyb20gJy4vcnRQYW5lJ1xuaW1wb3J0IFNvcnRhYmxlTGlzdCBmcm9tICcuL3NvcnRhYmxlTGlzdCdcbmltcG9ydCBUYWJTd2l0Y2hlciBmcm9tICcuL3RhYlN3aXRjaGVyJ1xuXG5leHBvcnQge1xuICAgIC8vIFVJIFxuICAgIFJ0Q2FyZCxcbiAgICBSdFBhbmUsXG4gICAgUnRGb3JtLFxuICAgIFJ0TGlzdCxcbiAgICBJY29uLFxuICAgIFNvcnRhYmxlTGlzdCxcbiAgICBUYWJTd2l0Y2hlcixcblxuICAgIC8vIExBWU9VVFxuICAgIEZsZXhSb3csXG4gICAgTG9hZENvbnRhaW5lcixcbiAgICBTd2lwZUNvbnRhaW5lcixcblxuICAgIC8vRUxFTUVOVFNcbiAgICBJbnB1dEJveCxcbiAgICBMb2FkQmFyLFxuICAgIFJ0U3dhdGNoXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNsYXNzIElucHV0Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0dmFsaWQ6IHRydWVcblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0dXBkYXRlRm9ybTogUHJvcFR5cGVzLmZ1bmNcblx0fVxuXG5cdGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuXHRcdGlmICh0aGlzLnByb3BzLmZpZWxkLnZhbGlkYXRlKSB7XG5cdFx0XHRsZXQgdmFsaWQgPSB0aGlzLnByb3BzLmZpZWxkLnZhbGlkYXRlKGUudGFyZ2V0LnZhbHVlKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHZhbGlkXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdG9uQmx1ciA9IGUgPT4ge1xuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHR2YWx1ZTogZS50YXJnZXQudmFsdWUsXG5cdFx0XHRmaWVsZDogdGhpcy5wcm9wcy5maWVsZCxcblx0XHRcdHZhbGlkOiB0aGlzLnN0YXRlLnZhbGlkXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMudXBkYXRlRm9ybShkYXRhKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB7ZmllbGQsIHZhbHVlc30gPSB0aGlzLnByb3BzXG5cblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyB0aGlzLnN0YXRlLnZhbGlkID8gJ2Zvcm0tZ3JvdXAgcm93JyA6ICdmb3JtLWdyb3VwIHJvdyBoYXMtd2FybmluZycgfSBrZXk9eyBmaWVsZC5sYWJlbCB9PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsIGNvbC1tZC0yIGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgeyBmaWVsZC5sYWJlbCB9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCI+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmVkaXQgPyAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsgZmllbGQudHlwZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17IGZpZWxkLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IHZhbHVlc1tmaWVsZC5uYW1lXSB8fCBmaWVsZC5sYWJlbCB9IC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXN0YXRpYyB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZXNbZmllbGQubmFtZV0gfHwgZmllbGQubGFiZWwgfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxuXHR9XG59XG5cbklucHV0Qm94LnByb3BUeXBlcyA9IHtcblx0ZmllbGQ6IFByb3BUeXBlcy5vYmplY3QsXG5cdHZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcblx0ZWRpdDogUHJvcFR5cGVzLmJvb2xcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCb3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vaW5wdXRCb3guanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBMb2FkQmFyID0gcHJvcHMgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5pbmxpbmU/ICdsb2FkLWJhciBsb2FkLWJhci1pbmxpbmUnIDogJ2xvYWQtYmFyJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1iYXJfX2JhclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtYmFyX19iYXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWJhcl9fYmFyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cbkxvYWRCYXIucHJvcFR5cGVzID0ge1xuXHRpbmxpbmU6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRCYXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vbG9hZEJhci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIGZyb20gJ3JlYWN0LWNzcy10cmFuc2l0aW9uLXJlcGxhY2UnXG5cblxuY2xhc3MgTG9hZENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0bG9hZGVkOiBQcm9wVHlwZXMuYm9vbFxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2UgdHJhbnNpdGlvbk5hbWU9XCJsb2FkX2NvbnRhaW5lclwiIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezUwMH0gdHJhbnNpdGlvbkxlYXZlVGltZW91dD17NTAwfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2FkZWQgPyBjb250ZW50WzFdIDogY29udGVudFswXX1cbiAgICAgICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZT5cblx0XHQpXG5cdH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vbG9hZENvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IHJlbmRlcklmIH0gZnJvbSAncnR1dGlsJ1xuXG5jb25zdCBSdENhcmQgPSBwcm9wcyA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwicnQtY2FyZF9fY29udGVudFwiIHN0eWxlPXtwcm9wcy5zdHlsZX0+XG4gICAgICAgIHtyZW5kZXJJZihwcm9wcy50aXRsZSkoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJ0LWNhcmRfX2hlYWRlciB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuXHRcdFx0PC9kaXY+KX1cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuKVxuXG5SdENhcmQucHJvcFR5cGVzID0ge1xuXHR0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBSdENhcmRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydENhcmQuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IElucHV0Qm94LCBGbGV4Um93IH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCB7IHJlbmRlcklmIH0gZnJvbSAncnR1dGlsJ1xuXG5cblxuY2xhc3MgUnRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0dmFsaWQ6IG5ldyBTZXQoKVxuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRmaWVsZHM6IFtdLFxuXHRcdHZhbHVlczoge31cblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0ZmllbGRzOiBQVC5hcnJheU9mKFxuICAgICAgICAgICAgUFQub25lT2ZUeXBlKFtcblx0UFQuYXJyYXksXG5cdFBULnNoYXBlKHtcblx0XHRuYW1lOiBQVC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR0eXBlOiBQVC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRsYWJlbDogUFQuc3RyaW5nLFxuXHRcdG9uQmx1cjogUFQuZnVuYyxcblx0XHRvbkNsaWNrOiBQVC5mdW5jLFxuXHRcdHZhbGlkYXRlOiBQVC5mdW5jXG5cdH0pXG5dXG4gICAgICAgICAgICApKS5pc1JlcXVpcmVkLFxuXHRcdHZhbHVlczogUFQub2JqZWN0LFxuXHRcdGVkaXRhYmxlOiBQVC5ib29sLFxuXHRcdHBlbmRpbmc6IFBULmJvb2wsXG5cdFx0b25TYXZlOiBQVC5mdW5jXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnZhbHVlcylcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIiBzdHlsZT17IHsgb3BhY2l0eTogdGhpcy5wcm9wcy5wZW5kaW5nID8gMC41IDogMSwgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4zcyBsaW5lYXInLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9IH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxGbGV4Um93IGlubGluZT5cbiAgICAgICAgICAgICAgICAgIHsgcmVuZGVySWYodGhpcy5wcm9wcy5lZGl0YWJsZSAmJiAhdGhpcy5zdGF0ZS5lZGl0KShcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBvbkNsaWNrPXsgdGhpcy50b2dnbGVFZGl0IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgIHsgcmVuZGVySWYodGhpcy5wcm9wcy5lZGl0YWJsZSAmJiB0aGlzLnN0YXRlLmVkaXQpKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgb25DbGljaz17IHRoaXMudG9nZ2xlRWRpdCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgIHsgcmVuZGVySWYodGhpcy5zdGF0ZS5lZGl0KShcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyEhdGhpcy5zdGF0ZS52YWxpZC5zaXplfSBjbGFzc05hbWU9e2N4KCdidG4nLCAhdGhpcy5zdGF0ZS52YWxpZC5zaXplPyAnYnRuLW91dGxpbmUtcHJpbWFyeSc6J2Rpc2FibGVkJywgeydidG4tb3V0bGluZS1wZW5kaW5nJzogdGhpcy5wcm9wcy5wZW5kaW5nfSl9IG9uQ2xpY2s9eyB0aGlzLnNhdmUgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsgdGhpcy5tYWtlRm9ybSgpIH1cbiAgICAgICAgICAgICAgPC9mb3JtPlxuXHRcdClcblx0fVxuXG5cdHRvZ2dsZUVkaXQgPSBlID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lZGl0ID8gdGhpcy5wcm9wcy52YWx1ZXMgOiB0aGlzLnN0YXRlLmRhdGEpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlZGl0OiAhdGhpcy5zdGF0ZS5lZGl0LFxuXHRcdFx0ZGF0YVxuXHRcdH0pXG5cdH1cblxuXHRzYXZlID0gZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0bGV0IHJlc3VsdCA9IHRoaXMucHJvcHMub25TYXZlKHRoaXMuc3RhdGUuZGF0YSlcblx0XHRpZiAocmVzdWx0LnRoZW4pIHtcblx0XHRcdHJlc3VsdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRlZGl0OiBmYWxzZSxcblx0XHRcdFx0XHRkYXRhOiBkYXRhXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZWRpdDogZmFsc2UsXG5cdFx0XHRcdGRhdGE6IHJlc3VsdFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRtYWtlRm9ybSA9IGZpZWxkcyA9PiB7XG5cdFx0ZmllbGRzID0gZmllbGRzIHx8IHRoaXMucHJvcHMuZmllbGRzXG5cdFx0cmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkLCBpKSA9PiB7XG5cdFx0XHRpZiAoZmllbGQgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0XHRyZXR1cm4gKDxkaXYga2V5PXsgaSB9IHN0eWxlPXsgeyBwYWRkaW5nOiAnMzBweCAwIDAnIH0gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PnsgZmllbGRbMF0gfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLm1ha2VGb3JtKGZpZWxkLnNsaWNlKDEpLCB0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUuZWRpdCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pilcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgZmllbGQubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD17IGZpZWxkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17IHRoaXMuc3RhdGUuZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0PXsgdGhpcy5zdGF0ZS5lZGl0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09eyB0aGlzLnVwZGF0ZUZvcm0gfSAvPlxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdHVwZGF0ZUZvcm0gPSB1cGRhdGUgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4ge1xuXHRcdFx0bGV0IG1vZGlmaWVyID0ge1xuXHRcdFx0XHR2YWxpZDogbmV3IFNldChzdGF0ZS52YWxpZCksXG5cdFx0XHRcdGRhdGE6IE9iamVjdC5hc3NpZ24oc3RhdGUuZGF0YSwge1t1cGRhdGUuZmllbGQubmFtZV06IHVwZGF0ZS52YWx1ZX0pXG5cdFx0XHR9XG5cblx0XHRcdGlmKCF1cGRhdGUudmFsaWQpIHtcblx0XHRcdFx0bW9kaWZpZXIudmFsaWQuYWRkKHVwZGF0ZS5maWVsZC5uYW1lKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bW9kaWZpZXIudmFsaWQuZGVsZXRlKHVwZGF0ZS5maWVsZC5uYW1lKVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbW9kaWZpZXJcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0Rm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNvbnN0IFJ0TGlzdCA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9fcG9kX19saXN0XCI+XG4gICAgICAgIHsgcHJvcHMubGlzdEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+ICg8ZGl2IGtleT17aXRlbS5faWQgfHwgaW5kZXh9IGNsYXNzTmFtZT1cIlwiPntpdGVtLnZhbHVlIHx8IGl0ZW19PC9kaXY+KSkgfVxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSdExpc3RcblxuUnRMaXN0LnByb3BUeXBlcyA9IHtcblx0bGlzdEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkpLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3J0TGlzdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cblxuY29uc3QgUnRDYXJkID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17J3J0LXBhbmUgJyArIChwcm9wcy5jbGFzc05hbWUgfHwgJycpfT5cbiAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFJ0Q2FyZFxuXG5SdENhcmQucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydFBhbmUuanN4IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IGNvbG9yIGZyb20gJ3NlcnZpY2VzL2NvbG9yU2VydmljZSdcblxuY2xhc3MgUnRTd2F0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGMgPSB0aGlzLnByb3BzLmNvbG9yXG5cdFx0aWYgKCF0aGlzLnByb3BzLmNvbG9yLmNvbG9yKSB7XG5cdFx0XHRsZXQgdCA9IHRoaXMucHJvcHMuY29sb3JzLmZpbHRlcihjb2xvciA9PiBjb2xvci52YWx1ZSA9PT0gdGhpcy5wcm9wcy5jb2xvci50b0xvd2VyQ2FzZSgpKVswXVxuXHRcdFx0YyA9IHtcblx0XHRcdFx0Y29sb3I6IHQ/IHQuY29sb3IgOiAnI0ZGRicsXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBsb2NhbFN0eWxlID0ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBjLmNvbG9yIHx8ICd3aGl0ZScsXG5cdFx0XHRjb2xvcjogY29sb3IudGV4dENvbG9yKGMuY29sb3IpLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAnM3B4Jyxcblx0XHRcdGhlaWdodDogJzMwcHgnXG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBsb2NhbFN0eWxlLCB0aGlzLnByb3BzLnN0eWxlPyB0aGlzLnByb3BzLnN0eWxlIDoge30pXG5cblx0XHRyZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IHN0eWxlPXsgc3R5bGUgfT48c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4tc20tZG93blwiPnsgYy52YWx1ZSB8fCAnJyB9PC9zcGFuPjwvc3Bhbj4pXG5cdH1cblxufVxuXG5SdFN3YXRjaC5wcm9wVHlwZXMgPSB7XG5cdGNvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cdGNvbG9yczogUHJvcFR5cGVzLmFycmF5LFxuXHRzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdGNvbG9yczogc3RhdGUudGVhbS5jb2xvcnNcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShSdFN3YXRjaClcblxuZXhwb3J0IHsgUnRTd2F0Y2ggfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydFN3YXRjaC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCdcblxuY2xhc3MgU29ydGFibGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0aXRlbXM6IFtdXG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdFx0bGlzdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cdFx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuXHRcdGNvbXBhcmF0b3I6IFByb3BUeXBlcy5mdW5jXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLkxpc3RJdGVtID0gdGhpcy5wcm9wcy5jb21wb25lbnRcblx0XHR0aGlzLmNvbXBhcmF0b3IgPSB0aGlzLnByb3BzLmNvbXBhcmF0b3IgfHwgKChhLCBiKSA9PiBhID09PSBiKVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50OiB0aGlzLnByb3BzLmxpc3Rcblx0XHR9KVxuXG5cdFx0aWYgKHRoaXMucHJvcHMub3B0aW9ucykge1xuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFIuZGlmZmVyZW5jZVdpdGgodGhpcy5jb21wYXJhdG9yLCB0aGlzLnByb3BzLm9wdGlvbnMsIHRoaXMucHJvcHMubGlzdClcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRvcHRpb25zXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50OiBuZXh0UHJvcHMubGlzdFxuXHRcdH0pXG5cdFx0aWYgKG5leHRQcm9wcy5vcHRpb25zICYmIHRoaXMuc3RhdGUuY3VycmVudCB8fCBuZXh0UHJvcHMubGlzdCkge1xuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFIuZGlmZmVyZW5jZVdpdGgodGhpcy5jb21wYXJhdG9yLCBuZXh0UHJvcHMub3B0aW9ucywgbmV4dFByb3BzLmxpc3QpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0b3B0aW9uc1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlLmN1cnJlbnQpIHJldHVybiBudWxsXG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmNsYXNzTmFtZSB9IHN0eWxlPXsgeyBmb250U2l6ZTogJzEuNWVtJyB9IH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnQubWFwKChpdGVtLCBpbmQsIGFycikgPT4gXG5cdFx0XHRcdFx0PHRoaXMuTGlzdEl0ZW0gZGF0YS1zb3VyY2U9XCJsaXN0XCIga2V5PXsgaXRlbS5rZXkgfHwgaW5kIH0gey4uLml0ZW19IHsuLi50aGlzLm1ha2VIYW5kbGVycyhpbmQsIGFyciwgJ2xpc3QnKX0vPikgfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLm9wdGlvbnMgPyAoXG4gICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfSBzdHlsZT17IHsgZm9udFNpemU6ICcxLjVlbScgfSB9PlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLm9wdGlvbnMubWFwKChpdGVtLCBpbmQsIGFycikgPT4gXG5cdFx0XHRcdFx0XHQ8dGhpcy5MaXN0SXRlbSBkYXRhLXNvdXJjZT1cIm9wdGlvbnNcIiBrZXk9eyBpdGVtLmtleSB8fCBpbmQgfSB7Li4uaXRlbX0gey4uLnRoaXMubWFrZUhhbmRsZXJzKGluZCwgYXJyLCAnb3B0aW9ucycpfS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L0NvbD4pIDogbnVsbCB9XG4gICAgICAgICAgICA8L1Jvdz5cblx0XHQpXG5cdH1cblxuXHRtYWtlSGFuZGxlcnMgPSAoaW5kLCBhcnIsIHNvdXJjZSkgPT4gKHtcblx0XHRkcmFnZ2FibGU6IHRydWUsXG5cdFx0b25EcmFnU3RhcnQ6IGUgPT4ge1xuXHRcdFx0ZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnaW5kJywgaW5kKVxuXHRcdFx0ZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnc291cmNlJywgc291cmNlKVxuXHRcdFx0ZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuXHRcdH0sXG5cdFx0b25EcmFnT3ZlcjogZSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHR9LFxuXHRcdG9uRHJvcDogZSA9PiB7XG5cdFx0XHRsZXQgc291cmNlID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc291cmNlJylcblx0XHRcdGxldCBkZXN0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc291cmNlXG5cblx0XHRcdGlmIChzb3VyY2UgPT09IGRlc3QpIHJldHVyblxuXG5cdFx0XHRsZXQgb2xkSW5kID0gK2UuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2luZCcpXG5cdFx0XHRsZXQgbmV3SW5kID0gaW5kXG5cblx0XHRcdGxldCBsaXN0cyA9IHtcblx0XHRcdFx0bGlzdDogWy4uLnRoaXMuc3RhdGUuY3VycmVudF0sXG5cdFx0XHRcdG9wdGlvbnM6IFsuLi50aGlzLnN0YXRlLm9wdGlvbnNdXG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZXdJbmQgPT0gYXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0bmV3SW5kID0gYXJyLmxlbmd0aFxuXHRcdFx0fVxuXHRcdFx0bGV0IG5ld0VsID0gbGlzdHNbc291cmNlXS5zcGxpY2Uob2xkSW5kLCAxKVswXVxuXHRcdFx0bGlzdHNbZGVzdF0uc3BsaWNlKG5ld0luZCwgMCwgbmV3RWwpXG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRjdXJyZW50OiBsaXN0cy5saXN0LFxuXHRcdFx0XHRvcHRpb25zOiBsaXN0cy5vcHRpb25zXG5cdFx0XHR9KVxuXHRcdH1cblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29ydGFibGVMaXN0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3NvcnRhYmxlTGlzdC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNsYXNzIFN3aXBlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IG9uVG91Y2hTdGFydD17dGhpcy50b3VjaFN0YXJ0fSBvblRvdWNoRW5kPXt0aGlzLnRvdWNoRW5kfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdHRvdWNoU3RhcnQgPSBlID0+IHtcblx0XHRpZiAoZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm5cblx0XHR0aGlzLnN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WFxuXHR9XG5cblx0dG91Y2hFbmQgPSBlID0+IHtcblx0XHRsZXQgZGlzdCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuc3RhcnRYXG5cdFx0aWYgKGRpc3QgPCAxMDAgJiYgZGlzdCA+IC0xMDApIHJldHVyblxuXG5cdFx0aWYgKCF0aGlzLnByb3BzLm9uTGVmdCkgcmV0dXJuIHRoaXMucHJvcHMub25Td2lwZShkaXN0KVxuXG5cdFx0ZGlzdCA+IDAgPyB0aGlzLnByb3BzLm9uUmlnaHQoKSA6IHRoaXMucHJvcHMub25MZWZ0KClcblx0fVxufVxuXG5Td2lwZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG5cdG9uTGVmdDogUHJvcFR5cGVzLmZ1bmMsXG5cdG9uUmlnaHQ6IFByb3BUeXBlcy5mdW5jLFxuXHRvblN3aXBlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZUNvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9zd2lwZUNvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5mdW5jdGlvbiBpc0FjdGl2ZShwcm9wcywgdGFiKSB7XG5cdHJldHVybiBwcm9wcy5hY3RpdmUgPT09IHRhYiA/ICdhY3RpdmUgdGV4dC1jYXBpdGFsaXplJyA6ICd0ZXh0LWNhcGl0YWxpemUnXG59XG5cbmNvbnN0IFNsaWRlciA9ICgpID0+IDxsaSBjbGFzc05hbWU9J3RhYi1zbGlkZXInLz5cblxuY29uc3QgdGFiU3dpdGNoZXIgPSBwcm9wcyA9PiAoXG4gICAgPE5hdiB0YWJzPlxuICAgICAgeyBwcm9wcy50YWJzLm1hcCh0YWIgPT4gKFxuICAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXt0YWJ9PlxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGlzQWN0aXZlKHByb3BzLCB0YWIpIH0gXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtwcm9wcy50b2dnbGUodGFiKX0gfT5cbiAgICAgICAgICAgICAgICB7dGFifVxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICApKSB9XG4gICAgICAgIDxTbGlkZXIga2V5PSdzbGlkZXInLz5cbiAgICA8L05hdj5cbilcblxudGFiU3dpdGNoZXIucHJvcFR5cGVzID0ge1xuXHR0YWJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblx0YWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR0b2dnbGU6IFByb3BUeXBlcy5mdW5jXG59XG5cbnRhYlN3aXRjaGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0dGFiczogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFiU3dpdGNoZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vdGFiU3dpdGNoZXIuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBSdEJhciBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvcnRCYXInXG5cbmltcG9ydCB7IGdldFJvdXRlc0J5R3ltIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3JvdXRlJ1xuXG5pbXBvcnQgz4AgZnJvbSAncnR1dGlsJ1xuXG5jbGFzcyBHeW1JdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0ZGF0YTogdW5kZWZpbmVkXG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGd5bTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRnZXRSb3V0ZXM6IFByb3BUeXBlcy5mdW5jLFxuXHRcdGRhdGE6IFByb3BUeXBlcy5hcnJheVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5nZXRSb3V0ZXModGhpcy5wcm9wcy5neW0uX2lkKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd5bS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneW0tdGl0bGUgdGV4dC1icmFuZCB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXRoaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgJy9neW1zLycgKyB0aGlzLnByb3BzLmd5bS51cmwgfSBjbGFzc05hbWU9XCJsaW5rLXBsYWluXCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZ3ltLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3ltLXByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgID8gPFJ0QmFyIGRhdGE9eyB0aGlzLnByb3BzLmRhdGEgfSBjb2xvcj17dGhpcy5wcm9wcy5neW0uY29sb3J9Lz5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUsIG93blByb3BzKSB7XG5cdGxldCBneW1Sb3V0ZXMgPSBzdGF0ZS5yb3V0ZXMudG9BcnJheSgpLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5neW0gPT09IG93blByb3BzLmd5bS5faWQpXG5cblx0cmV0dXJuIHtcblx0XHRkYXRhOiB0cmFuc2Zvcm1Sb3V0ZXMoZ3ltUm91dGVzKVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG5cdHJldHVybiB7XG5cdFx0Z2V0Um91dGVzOiBpZCA9PiBkaXNwYXRjaChnZXRSb3V0ZXNCeUd5bShpZCkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEd5bUl0ZW0pXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlcyhyb3V0ZXMpIHtcblx0aWYgKCFyb3V0ZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuXHRsZXQgc29ydGVkID0gz4AuYnVja2V0cyhyb3V0ZXMubWFwKGJvdWxkZXIgPT4gYm91bGRlci5ncmFkZSksIM+ALnJhbmdlKDEzKSlcblx0cmV0dXJuIE9iamVjdC5rZXlzKHNvcnRlZCkubWFwKGtleSA9PiBzb3J0ZWRba2V5XSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2NvbXBvbmVudHMvR3ltSXRlbS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBHeW1JdGVtIGZyb20gJy4vY29tcG9uZW50cy9HeW1JdGVtJ1xuaW1wb3J0IHsgTG9hZEJhciwgTG9hZENvbnRhaW5lciwgUnRDYXJkIH1mcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuY2xhc3MgR3ltTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBneW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UnRDYXJkIHRpdGxlPVwiR3ltc1wiPlxuICAgICAgICAgICAgICA8TG9hZENvbnRhaW5lciBsb2FkZWQ9eyAhIXRoaXMucHJvcHMuZ3ltcy5sZW5ndGggfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIjBcIiBjbGFzc05hbWU9XCJneW0tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZEJhci8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIxXCIgY2xhc3NOYW1lPVwiZ3ltLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5neW1zLm1hcChneW0gPT4gKDxHeW1JdGVtIGtleT17IGd5bS5faWQgfSBneW09eyBneW0gfSBjbGFzc05hbWU9XCJneW0taXRlbVwiIC8+KSkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG4gICAgICAgICAgICA8L1J0Q2FyZD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBneW1zOiBzdGF0ZS5neW1zLFxuICAgICAgICBmZXRjaGluZzogc3RhdGUuZmV0Y2hpbmdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwUHJvcHMpKEd5bUxpc3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IFJvdXRlUm93IGZyb20gJy4vcm91dGVSb3cnXG5pbXBvcnQgUm91dGVIZWFkZXIgZnJvbSAnLi9yb3V0ZUhlYWRlcidcblxuaW1wb3J0IHBpIGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgUm91dGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0cmFuZ2U6IG5ldyBTZXQoKVxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRyb3V0ZXM6IFByb3BUeXBlcy5hcnJheSxcblx0XHR0ZWFtOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRcdGd5bTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHR1cGRhdGVSb3V0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cdFx0cmVtb3ZlUm91dGVzOiBQcm9wVHlwZXMuZnVuYyxcblx0XHR3YWxsczogUHJvcFR5cGVzLmFycmF5XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyb3V0ZXM6IHNvcnRPbihbLi4udGhpcy5wcm9wcy5yb3V0ZXNdLCAnc2V0X29uJylcblx0XHR9KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0KSB7XG5cdFx0aWYgKG5leHQucm91dGVzKSB7XG5cdFx0XHRsZXQgcm91dGVzID0gc29ydE9uKG5leHQucm91dGVzLCB0aGlzLnN0YXRlLnNvcnQgfHwgJ3NldF9vbicpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0cm91dGVzOiB0aGlzLnN0YXRlLmRpciA9PT0gJ2Rlc2MnID8gcm91dGVzLnJldmVyc2UoKSA6IHJvdXRlc1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLW1vYmlsZSB0YWJsZS1maXhlZCB0YWJsZV9fcm91dGVsaXN0Jz5cbiAgICAgICAgICAgICAgPFJvdXRlSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTb3J0PXsgdGhpcy5oYW5kbGVTb3J0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ9eyB0aGlzLnN0YXRlLnNvcnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyPXsgdGhpcy5zdGF0ZS5kaXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSGFuZGxlcj17IHRoaXMuZGVsZXRlSGFuZGxlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHRoaXMuc3RhdGUucmFuZ2Uuc2l6ZSA+IDAgfSAvPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUucm91dGVzLm1hcCgocm91dGUsIGluZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kPXsgaW5kIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyByb3V0ZS5faWQgKyByb3V0ZS51cGRhdGVkX2F0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZT17IHJvdXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RIYW5kbGVyPXsgdGhpcy5zZWxlY3RIYW5kbGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHRoaXMuc3RhdGUucmFuZ2UuaGFzKGluZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW09eyB0aGlzLnByb3BzLnRlYW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvdXRlPXsgdGhpcy51cGRhdGVSb3V0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbHM9e3RoaXMucHJvcHMud2FsbHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cdFx0KVxuXHR9XG5cblx0c2VsZWN0SGFuZGxlciA9IHtcblx0XHRtb3VzZURvd246IGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRcdGxldCBtb2RpZmllciA9IGUuY3RybEtleSB8fCBlLm1ldGFLZXlcblx0XHRcdGxldCBzaGlmdCA9IGUuc2hpZnRLZXlcblx0XHRcdGxldCBpbmQgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleClcblx0XHRcdGxldCByYW5nZVxuXG5cdFx0XHRpZiAobW9kaWZpZXIgJiYgdGhpcy5sYXN0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRsZXQgbCA9IE1hdGgubWluKHRoaXMubGFzdFNlbGVjdGVkLCBpbmQpXG5cdFx0XHRcdGxldCBoID0gTWF0aC5tYXgodGhpcy5sYXN0U2VsZWN0ZWQsIGluZClcblx0XHRcdFx0bGV0IHNlbGVjdGVkID0gcGkucmFuZ2UobCwgaCArIDEpXG5cdFx0XHRcdHRoaXMubGFzdFNlbGVjdGVkID0gdW5kZWZpbmVkXG5cdFx0XHRcdHJhbmdlID0gbmV3IFNldChbLi4udGhpcy5zdGF0ZS5yYW5nZSwgLi4uc2VsZWN0ZWRdKVxuXHRcdFx0fSBlbHNlIGlmIChtb2RpZmllciAmJiAhdGhpcy5sYXN0U2VsZWN0ZWQpIHtcblx0XHRcdFx0dGhpcy5sYXN0U2VsZWN0ZWQgPSBpbmRcblx0XHRcdFx0cmFuZ2UgPSB0aGlzLnN0YXRlLnJhbmdlLmFkZChpbmQpXG5cdFx0XHR9IGVsc2UgaWYgKHNoaWZ0ICYmIHRoaXMuc3RhdGUucmFuZ2Uuc2l6ZSkge1xuXHRcdFx0XHRsZXQgbCA9IE1hdGgubWluKC4uLnRoaXMuc3RhdGUucmFuZ2UpXG5cdFx0XHRcdGxldCBoID0gTWF0aC5tYXgoLi4udGhpcy5zdGF0ZS5yYW5nZSlcblx0XHRcdFx0bGV0IHNlbGVjdGVkID0gaW5kIDw9IGggPyBwaS5yYW5nZShpbmQsIGggKyAxKSA6IHBpLnJhbmdlKGwsIGluZCArIDEpXG5cdFx0XHRcdHRoaXMubGFzdFNlbGVjdGVkID0gdW5kZWZpbmVkXG5cdFx0XHRcdHJhbmdlID0gbmV3IFNldChbLi4udGhpcy5zdGF0ZS5yYW5nZSwgLi4uc2VsZWN0ZWRdKVxuXHRcdFx0fSBlbHNlIGlmKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCAxMDAwKXtcblx0XHRcdFx0bGV0IHRlbXAgPSBuZXcgU2V0KHRoaXMuc3RhdGUucmFuZ2UpXG5cdFx0XHRcdHRoaXMuc3RhdGUucmFuZ2UuaGFzKGluZCk/IHRlbXAuZGVsZXRlKGluZCkgOiB0ZW1wLmFkZChpbmQpXG5cdFx0XHRcdHJhbmdlID0gdGVtcCAgXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxhc3RTZWxlY3RlZCA9IGluZFxuXHRcdFx0XHRyYW5nZSA9IHRoaXMuc3RhdGUucmFuZ2UuaGFzKGluZCkgJiYgdGhpcy5zdGF0ZS5yYW5nZS5zaXplID09PSAxID8gbmV3IFNldCgpIDogbmV3IFNldChbaW5kXSlcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJhbmdlXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZUhhbmRsZXIgPSBldmVudCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IGluZHMgPSBbLi4ubmV3IFNldCh0aGlzLnN0YXRlLnJhbmdlKV1cblx0XHRjb25zdCBpZHMgPSBpbmRzLm1hcChpbmQgPT4gdGhpcy5zdGF0ZS5yb3V0ZXNbaW5kXS5faWQpXG5cblx0XHR0aGlzLnByb3BzLnJlbW92ZVJvdXRlcyhpZHMpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyYW5nZTogbmV3IFNldCgpXG5cdFx0fSlcblx0fVxuXG5cdGhhbmRsZVNvcnQgPSBwYXJhbSA9PiAoKSA9PiB7XG5cdFx0bGV0IG5ld1JvdXRlcyA9IFsuLi50aGlzLnN0YXRlLnJvdXRlc10sXG5cdFx0XHRkaXJcblx0XHRpZiAodGhpcy5zdGF0ZS5zb3J0ID09PSBwYXJhbSkge1xuXHRcdFx0bmV3Um91dGVzLnJldmVyc2UoKVxuXHRcdFx0ZGlyID0gdGhpcy5zdGF0ZS5kaXIgPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYydcblx0XHR9IGVsc2Uge1xuXHRcdFx0c29ydE9uKG5ld1JvdXRlcywgcGFyYW0pXG5cdFx0XHRkaXIgPSAnYXNjJ1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGlyLFxuXHRcdFx0c29ydDogcGFyYW0sXG5cdFx0XHRyb3V0ZXM6IG5ld1JvdXRlc1xuXHRcdH0pXG5cdH1cblxuXHR1cGRhdGVSb3V0ZSA9IG5ld1JvdXRlID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJvdXRlczogdGhpcy5zdGF0ZS5yb3V0ZXMubWFwKHJvdXRlID0+IHJvdXRlLl9pZCA9PT0gbmV3Um91dGUuX2lkID8gbmV3Um91dGUgOiByb3V0ZSlcblx0XHR9KVxuXHRcdHRoaXMucHJvcHMudXBkYXRlUm91dGUobmV3Um91dGUpXG5cdH1cbn1cblxuZnVuY3Rpb24gc29ydE9uKGFyciwgcHJvcCkge1xuXHRpZiAocHJvcCA9PT0gJ2dyYWRlJykge1xuXHRcdHJldHVybiBhcnIuc29ydCgoYSwgYikgPT4gYVtwcm9wXSAtIGJbcHJvcF0pXG5cdH1cblxuXHRpZiAocHJvcCA9PT0gJ3NldF9vbicpIHtcblx0XHRyZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IERhdGUucGFyc2UoYS5zZXRfb24pIC0gRGF0ZS5wYXJzZShiLnNldF9vbikpXG5cdH1cblx0cmV0dXJuIGFyci5zb3J0KFxuICAgICAgICBmdW5jdGlvbihhLCBiKSB7XG5cdGlmIChhW3Byb3BdIDwgYltwcm9wXSkge1xuXHRcdHJldHVybiAtMVxuXHR9IGVsc2UgaWYgKGFbcHJvcF0gPiBiW3Byb3BdKSB7XG5cdFx0cmV0dXJuIDFcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gMFxuXHR9XG59XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZUxpc3RcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL1JvdXRlTGlzdC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBSdFBhbmUgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuY2xhc3MgU3RhdHNDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkYXRhOiB0aGlzLm1ha2VPdmVydmlldyh0aGlzLnByb3BzLmRhdGEpXG5cdFx0fSlcblx0fVxuXHRcblx0cmVuZGVyKCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZSkgcmV0dXJuIG51bGxcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPFJ0UGFuZT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicnQtcGFuZV9faGVhZGVyXCI+T3ZlcnZpZXc8L3NwYW4+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDb3VudDpcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5kYXRhLmNvdW50IH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgUm91dGVzIE5lZWRlZDpcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIE4vQVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBPbGRlc3QgUm91dGU6XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuZGF0YS5vbGRlc3QgfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9SdFBhbmU+XG5cdFx0KVxuXHR9XG5cblx0bWFrZU92ZXJ2aWV3KGRhdGEpIHtcblx0XHRsZXQgbWluID0gSW5maW5pdHlcblxuXHRcdGRhdGEuZm9yRWFjaChyb3V0ZSA9PiB7XG5cdFx0XHRpZiAobWluID4gRGF0ZS5wYXJzZShyb3V0ZS5zZXRfb24pKVxuXHRcdFx0XHRtaW4gPSByb3V0ZS5zZXRfb25cblx0XHR9KVxuXHRcdFxuXHRcdHJldHVybiB7XG5cdFx0XHRjb3VudDogZGF0YS5sZW5ndGgsXG5cdFx0XHRvbGRlc3Q6IG5ldyBEYXRlKG1pbikudG9Mb2NhbGVEYXRlU3RyaW5nKClcblx0XHR9XG5cdH1cbn1cblxuU3RhdHNDYXJkLnByb3BUeXBlcyA9IHtcblx0ZGF0YTogUHJvcFR5cGVzLmFycmF5XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHNDYXJkXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvU3RhdHNDYXJkLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgYXJyb3dzID0ge1xuXHQnYXNjJzogJ1xcdTI1QjInLFxuXHQnZGVzYyc6ICdcXHUyNUJDJ1xufVxuXG5cbmNvbnN0IFJvdXRlSGVhZGVyID0gcHJvcHMgPT4ge1xuXHRmdW5jdGlvbiBhcnJvdyhwYXJhbSkge1xuXHRcdHJldHVybiBwcm9wcy5zb3J0ID09PSBwYXJhbSA/IGFycm93c1twcm9wcy5kaXJdIDogbnVsbFxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8dGhlYWQ+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGFibGUtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ3NldF9vbicpfT5cbiAgICAgICAgICAgICAgICAgICAgRGF0ZVxuICAgICAgICAgICAgICAgICAgICB7YXJyb3coJ3NldF9vbicpfVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ2dyYWRlJyl9PlxuICAgICAgICAgICAgICAgICAgICBHcmFkZVxuICAgICAgICAgICAgICAgICAgICB7YXJyb3coJ2dyYWRlJyl9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnY29sb3InKX0+XG4gICAgICAgICAgICAgICAgICAgIENvbG9yXG4gICAgICAgICAgICAgICAgICAgIHthcnJvdygnY29sb3InKX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCd3YWxsJyl9PlxuICAgICAgICAgICAgICAgICAgICBXYWxsXG4gICAgICAgICAgICAgICAgICAgIHthcnJvdygnd2FsbCcpfVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ3NldHRlcicpfT5cbiAgICAgICAgICAgICAgICAgICAgU2V0dGVyXG4gICAgICAgICAgICAgICAgICAgIHthcnJvdygnc2V0dGVyJyl9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdoaWRkZW4tc20tZG93bic+XG4gICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNlbGVjdGVkID8gPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtwcm9wcy5kZWxldGVIYW5kbGVyfT5SZW1vdmU8L2E+IDogJ1NlbGVjdCd9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG5cdClcbn1cblxuUm91dGVIZWFkZXIucHJvcFR5cGVzID0ge1xuXHRoYW5kbGVTb3J0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cdGRlbGV0ZUhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuXHRkaXI6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlSGVhZGVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHsgUnRTd2F0Y2gsIEZsZXhSb3csIEljb24gfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcblxuaW1wb3J0IHtkYXRlTWF0aH0gZnJvbSAncnR1dGlsJ1xuaW1wb3J0IHtkaXNzb2MsIG9taXR9IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBUZElucHV0ID0gcHJvcHMgPT4gPHRkIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT48aW5wdXQgey4uLmRpc3NvYygnY2xhc3NOYW1lJywgcHJvcHMpfSBjbGFzc05hbWU9XCJpbnB1dC1zbSBmb3JtLWNvbnRyb2xcIi8+PC90ZD5cblxuY29uc3QgVGRTZWxlY3QgPSBwcm9wcyA9PiAoXG4gIDx0ZCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG4gICAgPHNlbGVjdCBjbGFzc05hbWU9XCJpbnB1dC1zbSBmb3JtLWNvbnRyb2xcIiB7Li4ub21pdChbJ2NsYXNzTmFtZScsICdjaGlsZHJlbiddLCBwcm9wcyl9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9zZWxlY3Q+XG4gIDwvdGQ+XG4pXG5cblxuY2xhc3MgUm91dGVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRlZGl0OiBmYWxzZVxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRpbmQ6IFByb3BUeXBlcy5udW1iZXIsXG5cdFx0cm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0c2VsZWN0SGFuZGxlcjogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cdFx0dGVhbTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHR1cGRhdGVSb3V0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cdFx0d2FsbHM6IFByb3BUeXBlcy5hcnJheVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmVkaXQgPyAoXG4gICAgICA8dHIgY2xhc3NOYW1lPXsndGFibGUtY2VudGVyICcgKyAodGhpcy5wcm9wcy5zZWxlY3RlZCA/ICdyb3V0ZS1yb3dfX3NlbGVjdGVkJyA6ICcnKX0+XG4gICAgICAgIDxUZElucHV0XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3ltLXJvd19fZGF0ZVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJzZXRfb25cIlxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZSh0aGlzLnByb3BzLnJvdXRlLnNldF9vbikudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IC8+XG4gICAgICAgIDxUZElucHV0XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cImdyYWRlXCJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZS5ncmFkZX0gLz5cbiAgICAgICAgPFRkSW5wdXRcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBuYW1lPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnJvdXRlLmNvbG9yfSAvPlxuICAgICAgICA8VGRTZWxlY3RcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3YWxsXCJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZS53YWxsfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy53YWxscy5tYXAod2FsbCA9PiBcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXt3YWxsfSB2YWx1ZT17d2FsbH0+XG4gICAgICAgICAgICAgICAgICAgIHt3YWxsfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UZFNlbGVjdD5cbiAgICAgICAgPFRkU2VsZWN0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2V0dGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy51cGRhdGVGaWVsZH1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZS5zZXR0ZXJ9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudGVhbS5tZW1iZXJzLm1hcChzZXR0ZXIgPT4gKFxuICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3NldHRlci5faWR9IHZhbHVlPXtzZXR0ZXIubmlja25hbWV9PlxuICAgICAgICAgICAgICAgICB7c2V0dGVyLm5pY2tuYW1lfVxuICAgICAgICAgICAgICAgPC9vcHRpb24+KSl9XG4gICAgICAgIDwvVGRTZWxlY3Q+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJneW0tcm93X19lZGl0IGhpZGRlbi1zbS1kb3duXCI+XG4gICAgICAgICAgPEZsZXhSb3cgaW5saW5lIGFyb3VuZCBzdHlsZT17eyB3aWR0aDogJzgwJScgfX0+XG4gICAgICAgICAgICA8SWNvbiBvbkNsaWNrPXt0aGlzLmNhbmNlbEVkaXR9IGljb249XCJ4XCIgLz5cbiAgICAgICAgICAgIDxJY29uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdH0gaWNvbj1cImNoZWNrXCIgLz5cbiAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaGlkZGVuLXNtXCJcbiAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHJvcHMuc2VsZWN0SGFuZGxlci5tb3VzZURvd259XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgIGRhdGEtaW5kZXg9e3RoaXMucHJvcHMuaW5kfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgICkgOiAoXG4gICAgICA8dHIgY2xhc3NOYW1lPXsndGFibGUtY2VudGVyICcgKyAodGhpcy5wcm9wcy5zZWxlY3RlZCA/ICdyb3V0ZS1yb3dfX3NlbGVjdGVkJyA6ICcnKX0gb25Eb3VibGVDbGljaz17dGhpcy50b2dnbGVFZGl0fT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImd5bS1yb3dfX2RhdGVcIiBhbHQ9eycgKCcgKyBkYXRlTWF0aC53ZWVrc09sZCh0aGlzLnByb3BzLnJvdXRlLnNldF9vbikgKyAnIHdlZWtzIG9sZCknfT5cbiAgICAgICAgICB7bmV3IERhdGUodGhpcy5wcm9wcy5yb3V0ZS5zZXRfb24pLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge3RoaXMucHJvcHMucm91dGUuZ3JhZGV9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7PFJ0U3dhdGNoIGNsYXNzTmFtZT1cImxpc3RfX3N3YXRjaFwiIGNvbG9yPXt0aGlzLnByb3BzLnJvdXRlLmNvbG9yfSAvPn1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJvdXRlLndhbGx9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yb3V0ZS5zZXR0ZXJ9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J2hpZGRlbi1zbS1kb3duJz5cbiAgICAgICAgICA8SWNvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXR9IGljb249XCJwZW5jaWxcIiAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaGlkZGVuLXNtXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByb3BzLnNlbGVjdEhhbmRsZXIubW91c2VEb3dufVxuICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICBkYXRhLWluZGV4PXt0aGlzLnByb3BzLmluZH0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICApXG5cdH1cblxuXHRjYW5jZWxFZGl0ID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZWRpdDogIXRoaXMuc3RhdGUuZWRpdFxuXHRcdH0pXG5cdH1cblxuXHR0b2dnbGVFZGl0ID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLnN0YXRlLmVkaXQpIHtcblx0XHRcdHRoaXMucHJvcHMudXBkYXRlUm91dGUodGhpcy5yb3V0ZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yb3V0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMucm91dGUpXG5cdFx0fVxuXG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGVkaXQ6ICF0aGlzLnN0YXRlLmVkaXRcblx0XHR9KVxuXHR9XG5cblx0ZGVsZXRlUm91dGUgPSAoKSA9PiB7XG5cdH1cblxuXHR1cGRhdGVGaWVsZCA9IGV2ZW50ID0+IHtcblx0XHRsZXQgZmllbGQgPSBldmVudC50YXJnZXQubmFtZVxuXHRcdHRoaXMucm91dGVbZmllbGRdID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cdH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlUm93XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZVJvdy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2UgZnJvbSAncmVhY3QtY3NzLXRyYW5zaXRpb24tcmVwbGFjZSdcblxuaW1wb3J0IFJ0QmlnQmFyIGZyb20gJ2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0JhcidcbmltcG9ydCB7IExvYWRDb250YWluZXIsIExvYWRCYXIsIFJ0Q2FyZCwgVGFiU3dpdGNoZXIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCB7Um93LCBDb2x9IGZyb20gJ3JlYWN0c3RyYXAnXG5cbmltcG9ydCBTdGF0c0NhcmQgZnJvbSAnLi9jb21wb25lbnRzL1N0YXRzQ2FyZCdcbmltcG9ydCBSb3V0ZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL1JvdXRlTGlzdCdcblxuaW1wb3J0IHsgZ2V0VGVhbSB9IGZyb20gJ2RhdGEvYWN0aW9ucy90ZWFtJ1xuaW1wb3J0IHsgZ2V0Um91dGVzQnlHeW0sIHB1dFJvdXRlLCByZW1vdmVSb3V0ZXMgfSBmcm9tICdkYXRhL2FjdGlvbnMvcm91dGUnXG5cbmltcG9ydCBwaSBmcm9tICdydHV0aWwnXG5cbmNsYXNzIEd5bU92ZXJ2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRhY3RpdmU6ICdyb3BlJ1xuXHR9XG5cblx0ZGVmYXVsdFByb3BzID0ge1xuXHRcdHR5cGVzOiBbXVxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdGd5bTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRtYXRjaDogUHJvcFR5cGVzLm9iamVjdCxcblx0XHR0ZWFtOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRcdHJvdXRlczogUHJvcFR5cGVzLmFycmF5LFxuXHRcdGdldFRlYW06IFByb3BUeXBlcy5mdW5jLFxuXHRcdGdldFJvdXRlczogUHJvcFR5cGVzLmZ1bmMsXG5cdFx0dXBkYXRlUm91dGU6IFByb3BUeXBlcy5mdW5jLFxuXHRcdHJlbW92ZVJvdXRlczogUHJvcFR5cGVzLmZ1bmNcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuZ2V0RGF0YUZvckd5bSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5uYW1lKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5neW0gJiYgbmV4dFByb3BzLmd5bSAmJiB0aGlzLnByb3BzLmd5bS5uYW1lICE9PSBuZXh0UHJvcHMuZ3ltLm5hbWUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRsb2FkZWQ6IGZhbHNlXG5cdFx0XHR9KVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmdldERhdGFGb3JHeW0obmV4dFByb3BzLmd5bS51cmwpLCAzMDApXG5cdFx0fVxuXG5cdFx0aWYgKG5leHRQcm9wcy5yb3V0ZXMgJiYgdGhpcy5wcm9wcy5neW0pIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRjb3VudDogdGhpcy51cGRhdGVSb3V0ZXMobmV4dFByb3BzLnJvdXRlcyksXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVJvdXRlcyA9IChuZXdSb3V0ZXMsIHR5cGUpID0+IHtcblx0XHR0eXBlID0gdHlwZT8gdHlwZS50b0xvd2VyQ2FzZSgpIDogdGhpcy5wcm9wcy5neW0udHlwZVswXVxuXHRcdGxldCBncmFkZXMgPSB0aGlzLnByb3BzLnRlYW0uZ3JhZGVzW3R5cGVdXG5cdFx0bGV0IHJvdXRlcyA9IG5ld1JvdXRlcy5maWx0ZXIocm91dGUgPT4gcm91dGUudHlwZSA9PT0gdHlwZSlcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJvdXRlczogcm91dGVzXG5cdFx0fSlcblx0XHRyZXR1cm4gdHJhbnNmb3JtUm91dGVzKHJvdXRlcywgZ3JhZGVzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmVycm9yKSByZXR1cm4gPFJlZGlyZWN0IHRvPScvJyAvPlxuXHRcdGlmICghdGhpcy5wcm9wcy5neW0pIHJldHVybiAoPFJ0Q2FyZCBzdHlsZT17eyBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJyB9fT4gPExvYWRCYXIvPjwvUnRDYXJkPilcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT17dGhpcy5zdGF0ZS5sb2FkZWQ/IHRoaXMucHJvcHMuZ3ltLm5hbWUgOiAnJ30ga2V5PXt0aGlzLnByb3BzLmd5bS5uYW1lfSBzdHlsZT17eyBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJyB9fT5cbiAgICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXt0aGlzLnN0YXRlLmxvYWRlZH0+XG4gICAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJTd2l0Y2hlciB0YWJzPXt0aGlzLnByb3BzLmd5bS50eXBlfSB0b2dnbGU9e3RoaXMudG9nZ2xlfSBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGVyYXRvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UnRCaWdCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3RoaXMucHJvcHMuZ3ltLmNvbG9yfT48L1J0QmlnQmFyPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI0XCIgY2xhc3NOYW1lPVwiY29sLW5wIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGF0c0NhcmQgZGF0YT17dGhpcy5zdGF0ZS5yb3V0ZXN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwZXJhdG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2UgdHJhbnNpdGlvbk5hbWU9XCJsb2FkX2NvbnRhaW5lclwiIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezUwMH0gdHJhbnNpdGlvbkxlYXZlVGltZW91dD17NTAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnN0YXRlLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzPXt0aGlzLnN0YXRlLnJvdXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm91dGU9e3RoaXMucHJvcHMudXBkYXRlUm91dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJvdXRlcz17dGhpcy5wcm9wcy5yZW1vdmVSb3V0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW09e3RoaXMucHJvcHMudGVhbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbHM9e3RoaXMucHJvcHMuZ3ltLndhbGxzW3RoaXMuc3RhdGUuYWN0aXZlXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2U+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG4gICAgICAgICAgICA8L1J0Q2FyZD5cblxuXHRcdClcblx0fVxuXG5cdHRvZ2dsZSA9IGtleSA9PiB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBrZXkpIHJldHVyblxuXHRcdGxldCByb3V0ZXMgPSB0aGlzLnVwZGF0ZVJvdXRlcyh0aGlzLnByb3BzLnJvdXRlcywga2V5KVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBrZXksXG5cdFx0XHRjb3VudDogcm91dGVzXG5cdFx0fSlcblx0fVxuXG5cdGdldERhdGFGb3JHeW0obmFtZSkge1xuXHRcdHRoaXMucHJvcHMuZ2V0VGVhbSgpXG4gICAgICAgICAgICAudGhlbih0aGlzLm9uVGVhbShuYW1lKSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuc2V0TG9hZGVkKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuc2V0RXJyb3IpXG5cdH1cblxuXHRvblRlYW0gPSBuYW1lID0+IHRlYW0gPT4ge1xuXHRcdGxldCBjdXJyZW50R3ltID0gdGVhbS5neW1zLmZpbHRlcihneW0gPT4gbmFtZSA9PT0gZ3ltLnVybClbMF1cblx0XHRpZiAoIWN1cnJlbnRHeW0pIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRlcnJvcjogdHJ1ZVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0Um91dGVzKGN1cnJlbnRHeW0uX2lkKVxuXHRcdH1cblx0fVxuXG5cdHNldExvYWRlZCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtsb2FkZWQ6IHRydWV9KVxuXHR9XG5cblx0c2V0RXJyb3IgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWV9KVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlLCBvd25Qcm9wcykge1xuXHRsZXQgZ3ltID0gc3RhdGUuZ3ltcy5maWx0ZXIoZ3ltID0+IGd5bS51cmwgPT09IG93blByb3BzLm1hdGNoLnBhcmFtcy5uYW1lKVswXVxuXHRsZXQgcm91dGVzID0gc3RhdGUucm91dGVzLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5neW0gPT09IGd5bS5faWQpXG5cdGxldCBhcnIgPSByb3V0ZXMudG9BcnJheSgpXG5cdGFyci5mb3JFYWNoKChyb3V0ZSwgaW5kKSA9PiByb3V0ZS5pbmQgPSBpbmQpXG5cdHJldHVybiB7XG5cdFx0Z3ltOiBneW0sXG5cdFx0cm91dGVzOiBhcnIsXG5cdFx0dGVhbTogc3RhdGUudGVhbVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG5cdHJldHVybiB7XG5cdFx0Z2V0VGVhbTogKCkgPT4gZGlzcGF0Y2goZ2V0VGVhbSgpKSxcblx0XHRnZXRSb3V0ZXM6IGlkID0+IGRpc3BhdGNoKGdldFJvdXRlc0J5R3ltKGlkKSksXG5cdFx0dXBkYXRlUm91dGU6IHJvdXRlID0+IGRpc3BhdGNoKHB1dFJvdXRlKHJvdXRlKSksXG5cdFx0cmVtb3ZlUm91dGVzOiBhcnIgPT4gZGlzcGF0Y2gocmVtb3ZlUm91dGVzKGFycikpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEd5bU92ZXJ2aWV3KVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzLCBncmFkZXMpIHtcblx0aWYgKCFncmFkZXMgfHwgIXJvdXRlcykgcmV0dXJuIFtdXG5cdGxldCBzb3J0ZWQgPSBwaS5idWNrZXRzKHJvdXRlcy5tYXAocm91dGUgPT4gcm91dGUuZ3JhZGUpLCBwaS5yYW5nZShncmFkZXMubGVuZ3RoKSlcblx0cmV0dXJuIE9iamVjdC5rZXlzKHNvcnRlZCkubWFwKGtleSA9PiAoe1xuXHRcdFx0Z3JhZGU6IGdyYWRlc1trZXldICYmIGdyYWRlc1trZXldLnZhbHVlLFxuXHRcdFx0Y291bnQ6IHNvcnRlZFtrZXldXG5cdFx0fSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IEd5bUxpc3QgZnJvbSAnY29tcG9uZW50cy9neW1MaXN0J1xuaW1wb3J0IEd5bU92ZXJ2aWV3IGZyb20gJ2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcnXG5pbXBvcnQgQWNjb3VudCBmcm9tICdjb21wb25lbnRzL2FjY291bnQnXG5cbmltcG9ydCBSdFdpemFyZENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL3J0V2l6YXJkJ1xuXG5jb25zdCBSdENvbnRlbnQgPSBwcm9wcyA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwicnQtY29udGVudFwiPlxuICAgICAgICA8U3dpdGNoIGxvY2F0aW9uPXtwcm9wcy5sb2NhdGlvbn0+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtHeW1MaXN0fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9neW1zLzpuYW1lJyBjb21wb25lbnQ9e0d5bU92ZXJ2aWV3fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hZGQnIGNvbXBvbmVudD17UnRXaXphcmRDb250YWluZXJ9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2FjY291bnQnIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgPC9kaXY+KVxuXG5SdENvbnRlbnQucHJvcFR5cGVzID0ge1xuXHRsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBSdENvbnRlbnRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vUnRDb250ZW50LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgQ29sbGFwc2UsIE5hdmJhciwgTmF2YmFyVG9nZ2xlciwgTmF2YmFyQnJhbmQsIE5hdiwgTmF2RHJvcGRvd24sIERyb3Bkb3duSXRlbSwgRHJvcGRvd25Ub2dnbGUsIERyb3Bkb3duTWVudSwgTmF2TGluayB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCdcbmltcG9ydCB7TmF2TGluayBhcyBOYXZSb3V0ZXJMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQge3N0YXRlVG9nZ2xlfSBmcm9tICdkYXRhL3V0aWwnXG5cbmNsYXNzIFJ0SGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRkcm9wZG93bklzT3BlbjogZmFsc2Vcblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Z3ltczogUHJvcFR5cGVzLmFycmF5XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcbiAgICAgIDxOYXZiYXIgdG9nZ2xlYWJsZSBjb2xvcj1cInByaW1hcnlcIiBpbnZlcnNlPlxuICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL1wiPlxuICAgICAgICAgICAgPE5hdmJhckJyYW5kPlxuICAgICAgICAgICAgICBSb3V0ZXRyYWNrZXJcbiAgICAgICAgICAgIDwvTmF2YmFyQnJhbmQ+XG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIHJpZ2h0IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfS8+XG4gICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17IHRoaXMuc3RhdGUuaXNPcGVuIH0gbmF2YmFyPlxuICAgICAgICAgICAgPE5hdiBuYXZiYXI+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIkd5bXNcIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiIHRvZ2dsZT17dGhpcy50b2dnbGVEcm9wZG93bn0gaXNPcGVuPXt0aGlzLnN0YXRlLmRyb3Bkb3duSXNPcGVufT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgbmF2PlxuICAgICAgICAgICAgICAgICAgR3ltc1xuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBvbkNsaWNrPXt0aGlzLnRvZ2dsZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5neW1zID8gdGhpcy5wcm9wcy5neW1zLm1hcChneW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TmF2Um91dGVyTGluayBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGtleT17IGd5bS5faWQgfSB0bz17ICcvZ3ltcy8nICsgZ3ltLnVybCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L05hdlJvdXRlckxpbms+XG4gICAgICAgICAgICAgICAgICAgICkpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIvPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgU2VwYXJhdGVkIGxpbmtcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvYWRkXCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rPlxuICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPE5hdiBuYXZiYXIgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2xvZ291dFwiPlxuICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9hY2NvdW50XCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rPlxuICAgICAgICAgICAgICAgIE15IEFjY291bnRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG5cdFx0KVxuXHR9XG5cblx0dG9nZ2xlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGVUb2dnbGUoJ2lzT3BlbicpKVxuXHR9XG5cblx0dG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZVRvZ2dsZSgnZHJvcGRvd25Jc09wZW4nKSlcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdGd5bXM6IHN0YXRlLmd5bXNcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShSdEhlYWRlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vUnRIZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0VGVhbSB9IGZyb20gJ2RhdGEvYWN0aW9ucy90ZWFtJ1xuaW1wb3J0IHsgZ2V0R3ltcyB9IGZyb20gJ2RhdGEvYWN0aW9ucy9neW0nXG5cbmltcG9ydCBSdEhlYWRlciBmcm9tICcuL1J0SGVhZGVyJ1xuaW1wb3J0IFJ0Q29udGVudCBmcm9tICcuL1J0Q29udGVudCdcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkgeyBcblx0XHR0aGlzLnByb3BzLmdldFRlYW0oKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJ0SGVhZGVyIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufS8+XG4gICAgICAgICAgICAgICAgPFJ0Q29udGVudCBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuTWFpbi5wcm9wVHlwZXMgPSB7XG5cdGdldFRlYW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdGdldEd5bXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0dGVhbTogc3RhdGUudGVhbSxcblx0XHRneW1zOiBzdGF0ZS5neW1zLFxuXHRcdGxvY2F0aW9uOiBzdGF0ZS5yb3V0ZXIubG9jYXRpb25cblx0fVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuXHRyZXR1cm4ge1xuXHRcdGdldFRlYW06ICgpID0+IGRpc3BhdGNoKGdldFRlYW0oKSksXG5cdFx0Z2V0R3ltczogdGVhbSA9PiBkaXNwYXRjaChnZXRHeW1zKHRlYW0pKVxuXHR9XG59XG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoTWFpbilcbmV4cG9ydCBkZWZhdWx0IG1haW5Db250YWluZXJcblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuY2xhc3MgUnRTdGFjayBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdG1ha2VDaGFydC5hcHBseSh0aGlzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcgfX0gcmVmPXtlbCA9PiB0aGlzLmVsID0gZWx9PjwvZGl2PlxuXHRcdClcblx0fVxuXG5cbn1cblxuZnVuY3Rpb24gbWFrZUNoYXJ0KCkge1xuXHRpZiAoIXRoaXMucHJvcHMuZGF0YSkgcmV0dXJuXG5cblx0Y29uc3Qge2RhdGEsIHdpZHRoLCBoZWlnaHQgPSAnMTAwJ30gPSB0aGlzLnByb3BzXG5cblx0Y29uc3QgdG90YWwgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci52YWx1ZSwgMClcblxuXHRjb25zdCBjaGFydCA9IGQzXG5cdFx0LnNlbGVjdCh0aGlzLmVsKVxuXHRcdC5hcHBlbmQoJ3N2ZycpXG5cdFx0LmF0dHIoJ3ZpZXdCb3gnLCAnMCAwIDEwMCAxMDAnKVxuXHRcdC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuXHRcdC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG5cblx0Y29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcblx0XHQuZG9tYWluKFswLCB0b3RhbF0pXG5cdFx0LnJhbmdlKFswLCAxMDBdKVxuXG5cdGNvbnN0IHNlZ21lbnRzID0gY2hhcnQuc2VsZWN0QWxsKCdnJylcblx0XHQuZGF0YShkYXRhKVxuXHRcdC5lbnRlcigpXG5cdFx0LmFwcGVuZCgnZycpXG5cdFx0LmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdHJldHVybiAndHJhbnNsYXRlKCcgKyB4KGQpICsgJywgMCknXG5cdFx0fSlcblxuXHRzZWdtZW50cy5hcHBlbmQoJ3JlY3QnKVxuXHRcdC5hdHRyKCd3aWR0aCcsIGQgPT4geChkLnZhbHVlKSlcblx0XHQuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuXHRcdC5hdHRyKCd4JywgZCA9PiB4KGQudmFsdWUpKVxuXHRcdC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcblxufVxuXG5leHBvcnQgZGVmYXVsdCBSdFN0YWNrXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9SdFN0YWNrLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgcGFsYXR0ZSB9IGZyb20gJ3J0Y29uZmlnJ1xuXG5jbGFzcyBSdEJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdG1ha2VDaGFydC5hcHBseSh0aGlzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHJlZj17ZWwgPT4gdGhpcy5lbCA9IGVsfT48L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRCYXJcblxuZnVuY3Rpb24gbWFrZUNoYXJ0KCkge1xuXHRpZiAoIXRoaXMucHJvcHMuZGF0YSkgcmV0dXJuXG5cblx0Y29uc3Qge2RhdGF9ID0gdGhpcy5wcm9wc1xuXHRjb25zdCB3aWR0aCA9IDk0XG5cdGNvbnN0IGhlaWdodCA9IDk0XG5cdGNvbnN0IGJhcldpZHRoID0gd2lkdGggLyBkYXRhLmxlbmd0aFxuXG5cdGNvbnN0IHkgPSBkM1xuXHRcdC5zY2FsZUxpbmVhcigpXG5cdFx0LmRvbWFpbihbMCwgZDMubWF4KGRhdGEpXSlcblx0XHQucmFuZ2UoWzAsIGhlaWdodF0pXG5cblx0Y29uc3QgY29sb3IgPSBwYWxhdHRlW3RoaXMucHJvcHMuY29sb3JdIHx8IHtcblx0XHRwcmltYXJ5OiAnYmxhY2snLFxuXHRcdHNlY29uZGFyeTogJ2JsYWNrJ1xuXHR9XG5cblx0Y29uc3QgY29sb3JTY2FsZSA9IHRoaXMucHJvcHMuY29sb3IgP1xuXHRcdChcblx0XHRkMy5zY2FsZUxpbmVhcihkMy5pbnRlcnBvbGF0ZUhjbClcblx0XHRcdC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcblx0XHRcdC5yYW5nZShbY29sb3IucHJpbWFyeSwgY29sb3Iuc2Vjb25kYXJ5XSlcblx0XHQpIDogKFxuXHRcdGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpXG5cdFx0XHQuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cdFx0KVxuXG5cdGNvbnN0IGNoYXJ0ID0gZDNcblx0XHQuc2VsZWN0KHRoaXMuZWwpXG5cdFx0LmFwcGVuZCgnc3ZnJylcblx0XHQuYXR0cigndmlld0JveCcsICctMyAtMyAxMDAgMTAwJylcblx0XHQuYXR0cigncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pbiBtZWV0Jylcblx0XHQuY2xhc3NlZCgndzEwMCcsIHRydWUpXG5cblx0Y29uc3QgYmFyID0gY2hhcnRcblx0XHQuc2VsZWN0QWxsKCdnJylcblx0XHQuZGF0YShkYXRhKVxuXHRcdC5lbnRlcigpXG5cdFx0LmFwcGVuZCgnZycpXG5cdFx0LmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiAndHJhbnNsYXRlKCcgKyBpICogYmFyV2lkdGggKyAnLCAwKScpXG5cblx0YmFyLmFwcGVuZCgncmVjdCcpXG5cdFx0LmNsYXNzZWQoJ3J0LWJhcicsIHRydWUpXG5cdFx0LmF0dHIoJ3dpZHRoJywgYmFyV2lkdGggLSAxKVxuXHRcdC5hdHRyKCdyeCcsIDEpXG5cdFx0LmF0dHIoJ3J5JywgMSlcblx0XHQuYXR0cignaGVpZ2h0JywgMClcblx0XHQuYXR0cignb3BhY2l0eScsIGQgPT4gK2QgPyAxIDogMC40KVxuXHRcdC5hdHRyKCd5JywgaGVpZ2h0KVxuXHRcdC5hdHRyKCdmaWxsJywgKGQsIGkpID0+IGNvbG9yU2NhbGUoaSkpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheSgoKSA9PiA0MDAgLSBNYXRoLnJhbmRvbSgpICogMTAwKVxuXHRcdC5kdXJhdGlvbigzMDApXG5cdFx0LmVhc2UoZDMuZWFzZUV4cEluKVxuXHRcdC5hdHRyKCd5JywgZCA9PiBoZWlnaHQgLSB5KGQpKVxuXHRcdC5hdHRyKCdoZWlnaHQnLCBkID0+IHkoZCkpXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgZDN0aXAgZnJvbSAnZDMtdGlwJ1xuaW1wb3J0IHsgcGFsYXR0ZSB9IGZyb20gJ3J0Y29uZmlnJ1xuZDMudGlwID0gZDN0aXBcblxuY2xhc3MgUnRCaWdCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGRhdGE6IFByb3BUeXBlcy5hcnJheSxcblx0XHRnb2FsOiBQcm9wVHlwZXMuYXJyYXksXG5cdFx0dHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRjb2xvcjogUHJvcFR5cGVzLnN0cmluZ1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5jaGFydCA9IGQzLnNlbGVjdCh0aGlzLmVsKVxuXHRcdHRoaXMubWFrZUNoYXJ0KClcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0aWYgKG5leHRQcm9wcy50eXBlICE9PSB0aGlzLnByb3BzLnR5cGUpIHtcblx0XHRcdHRoaXMuY2hhcnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKClcblx0XHRcdHRoaXMubWFrZUNoYXJ0KG5leHRQcm9wcy5kYXRhKVxuXHRcdH1cblx0XHRpZiAobmV4dFByb3BzLmRhdGEpIHtcblx0XHRcdHRoaXMudXBkYXRlQ2hhcnQobmV4dFByb3BzLmRhdGEpXG5cdFx0fVxuXHRcdGlmIChuZXh0UHJvcHMuY29sb3IpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiLTUgLTUgNTAwIDMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaW4gbWVldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3MTAwIGNoYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4gdGhpcy5lbCA9IGVsfT5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdClcblx0fVxuXG5cdHVwZGF0ZUNoYXJ0ID0gZGF0YSA9PiB7XG5cdFx0dmFyIHN2ZyA9IGQzLnNlbGVjdCh0aGlzLmVsKVxuXG5cdFx0Ly8gY2FsY3VsYXRlIG5ldyBoZWlnaHRcblx0XHR0aGlzLnkgPSBkM1xuXHRcdFx0LnNjYWxlTGluZWFyKClcblx0XHRcdC5kb21haW4oWzAsIGQzLm1heChkYXRhLCBkID0+IGQuY291bnQpXSlcblx0XHRcdC5yYW5nZShbMCwgdGhpcy5oZWlnaHRdKVxuXG5cdFx0Ly8gTWFrZSB0aGUgY2hhbmdlc1xuXHRcdHN2Zy5zZWxlY3RBbGwoJy5ydC1iYXInKVxuXHRcdFx0LmRhdGEoZGF0YSlcblx0XHRcdC50cmFuc2l0aW9uKCkgLy8gY2hhbmdlIHRoZSBsaW5lXG5cdFx0XHQuZHVyYXRpb24oNzUwKVxuXHRcdFx0LmF0dHIoJ3knLCBkID0+IHRoaXMuaGVpZ2h0IC0gdGhpcy55KGQuY291bnQpKVxuXHRcdFx0LmF0dHIoJ2hlaWdodCcsIGQgPT4gdGhpcy55KGQuY291bnQpICsgNilcblxuXHRcdHN2Zy5zZWxlY3RBbGwoJy5ydC1tYXJrZXInKVxuXHRcdFx0LmRhdGEoZGF0YSlcblx0XHRcdC50ZXh0KGQgPT4gZC5ncmFkZSlcblx0fVxuXG5cdG1ha2VDaGFydCA9IGRhdGEgPT4ge1xuXHRcdGlmICghdGhpcy5wcm9wcy5kYXRhKVxuXHRcdFx0cmV0dXJuXG5cdFx0ZGF0YSA9IGRhdGEgfHwgdGhpcy5wcm9wcy5kYXRhXG5cblx0XHR0aGlzLndpZHRoID0gNDkwXG5cdFx0dGhpcy5oZWlnaHQgPSAyODVcblxuXHRcdGNvbnN0IGNvbG9yID0gcGFsYXR0ZVt0aGlzLnByb3BzLmNvbG9yXSB8fCB7XG5cdFx0XHRwcmltYXJ5OiAnYmxhY2snLFxuXHRcdFx0c2Vjb25kYXJ5OiAnYmxhY2snXG5cdFx0fVxuXHRcdGNvbnN0IGNvbG9yU2NhbGUgPSB0aGlzLnByb3BzLmNvbG9yID9cblx0XHRcdChcblx0XHRcdGQzLnNjYWxlTGluZWFyKGQzLmludGVycG9sYXRlSGNsKVxuXHRcdFx0XHQuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cdFx0XHRcdC5yYW5nZShbY29sb3IucHJpbWFyeSwgY29sb3Iuc2Vjb25kYXJ5XSlcblx0XHRcdCkgOiAoXG5cdFx0XHRkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuXHRcdFx0XHQuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cdFx0XHQpXG5cblx0XHRjb25zdCBiYXJXaWR0aCA9IHRoaXMud2lkdGggLyBkYXRhLmxlbmd0aFxuXG5cdFx0dGhpcy55ID0gZDNcblx0XHRcdC5zY2FsZUxpbmVhcigpXG5cdFx0XHQuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZCA9PiBkLmNvdW50KV0pXG5cdFx0XHQucmFuZ2UoWzAsIHRoaXMuaGVpZ2h0XSlcblxuXHRcdGNvbnN0IGZvbnRTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcblx0XHRcdC5kb21haW4oWzMyMCwgNTAwXSkgLy8gZXhwZWN0ZWQgbGltaXRzIG9mIFNWRyB3aWR0aFxuXHRcdFx0LnJhbmdlKFszMCwgMTVdKVxuXHRcdFx0LmNsYW1wKHRydWUpXG5cblx0XHRjb25zdCBiYXIgPSB0aGlzLmNoYXJ0XG5cdFx0XHQuc2VsZWN0QWxsKCdnJylcblx0XHRcdC5kYXRhKGRhdGEpXG5cdFx0XHQuZW50ZXIoKVxuXHRcdFx0LmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnYmFyLWdyb3VwJylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gJ3RyYW5zbGF0ZSgnICsgaSAqIGJhcldpZHRoICsgJywgMCknKVxuXG5cdFx0dmFyIHRpcCA9IGQzLnRpcCgpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnZDMtdGlwJylcblx0XHRcdC5vZmZzZXQoWy0xMCwgMF0pXG5cdFx0XHQuaHRtbChkID0+IGA8c3Ryb25nPiR7ZC5ncmFkZX06PC9zdHJvbmc+IDxzcGFuIHN0eWxlPSdjb2xvcjojZmYwMDQ0Jz4ke2QuY291bnR9PC9zcGFuPmApXG5cblx0XHR0aGlzLmNoYXJ0LmNhbGwodGlwKVxuXG5cdFx0YmFyLmFwcGVuZCgncmVjdCcpXG5cdFx0XHQuY2xhc3NlZCgncnQtYmFyJywgdHJ1ZSlcblx0XHRcdC5hdHRyKCd3aWR0aCcsIGJhcldpZHRoIC0gNSlcblx0XHRcdC5hdHRyKCdyeCcsIDMpXG5cdFx0XHQuYXR0cigncnknLCAzKVxuXHRcdFx0LmF0dHIoJ2hlaWdodCcsIDYpXG5cdFx0XHQuYXR0cignb3BhY2l0eScsIGQgPT4gK2QuY291bnQgPyAxIDogMC40KVxuXHRcdFx0LmF0dHIoJ3knLCB0aGlzLmhlaWdodClcblx0XHRcdC5hdHRyKCdmaWxsJywgKGQsIGkpID0+IGNvbG9yU2NhbGUoaSkpXG5cdFx0XHQub24oJ21vdXNlb3ZlcicsIHRpcC5zaG93KVxuXHRcdFx0Lm9uKCdtb3VzZW91dCcsIHRpcC5oaWRlKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmRlbGF5KCgpID0+IDQwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDApXG5cdFx0XHQuZHVyYXRpb24oMzAwKVxuXHRcdFx0LmVhc2UoZDMuZWFzZUV4cEluKVxuXHRcdFx0LmF0dHIoJ3knLCBkID0+IHRoaXMuaGVpZ2h0IC0gdGhpcy55KGQuY291bnQpKVxuXHRcdFx0LmF0dHIoJ2hlaWdodCcsIGQgPT4gdGhpcy55KGQuY291bnQpICsgNilcblxuXHRcdGJhci5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LmNsYXNzZWQoJ3J0LW1hcmtlcicsIHRydWUpXG5cdFx0XHQuYXR0cigneScsIGJhcldpZHRoIC8gMiArIDMpXG5cdFx0XHQuYXR0cigneCcsIC0yODApXG5cdFx0XHQuYXR0cigndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuXHRcdFx0LnRleHQoZCA9PiBkLmdyYWRlKVxuXHRcdFx0LmF0dHIoJ2ZvbnQtc2l6ZScsICcxNHB4Jylcblx0XHRcdC5hdHRyKCdvcGFjaXR5JywgMClcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbig1MDApXG5cdFx0XHQuYXR0cignb3BhY2l0eScsIDEpXG5cblx0XHRjb25zdCByZXNpemVkID0gKCkgPT4ge1xuXHRcdFx0dmFyIHNjYWxlID0gZm9udFNjYWxlKHRoaXMuY2hhcnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKVxuXHRcdFx0dmFyIHRleHQgPSBkMy5zZWxlY3RBbGwoJ3RleHQnKVxuXHRcdFx0dGV4dC5hdHRyKCdmb250LXNpemUnLCBzY2FsZSArICdweCcpXG5cdFx0XHRpZiAoc2NhbGUgPiAxOCkge1xuXHRcdFx0XHR0ZXh0LmF0dHIoJ29wYWNpdHknLCAwKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGV4dC5hdHRyKCdvcGFjaXR5JywgMSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXNpemVkKClcblx0XHR3aW5kb3cub25yZXNpemUgPSByZXNpemVkXG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdEJpZ0JhclxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0QmlnQmFyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5jbGFzcyBSdFBpZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdG1ha2VDaGFydC5hcHBseSh0aGlzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcgfX0gcmVmPXtlbCA9PiB0aGlzLmVsID0gZWx9PjwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdFBpZVxuXG5mdW5jdGlvbiBtYWtlQ2hhcnQoKSB7XG5cdGlmICghdGhpcy5wcm9wcy5kYXRhKVxuXHRcdHJldHVyblxuXHRjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhXG5cblx0Y29uc3Qgd2lkdGggPSA5NFxuXHRjb25zdCBoZWlnaHQgPSA5NFxuXG5cdGNvbnN0IGNoYXJ0ID0gZDNcblx0XHQuc2VsZWN0KHRoaXMuZWwpXG5cdFx0LmFwcGVuZCgnc3ZnJylcblx0XHQuYXR0cigndmlld0JveCcsICctMyAtMyAxMDAgMTAwJylcblx0XHQuYXR0cigncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pbiBtZWV0Jylcblx0XHQuY2xhc3NlZCgndzEwMCcsIHRydWUpXG5cblxuXHR2YXIgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyLFxuXHRcdGcgPSBjaGFydC5hcHBlbmQoJ2cnKS5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB3aWR0aCAvIDIgKyAnLCcgKyBoZWlnaHQgLyAyICsgJyknKVxuXG5cblx0dmFyIHBpZSA9IGQzLnBpZSgpXG5cdFx0LnNvcnQobnVsbClcblx0XHQudmFsdWUoZCA9PiBkKVxuXG5cdGNvbnN0IHJhaW5ib3cgPSBkM1xuXHRcdC5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuXHRcdC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcblxuXHR2YXIgcGF0aCA9IGQzLmFyYygpXG5cdFx0Lm91dGVyUmFkaXVzKHJhZGl1cyAtIDEwKVxuXHRcdC5pbm5lclJhZGl1cygzMClcblxuXHR2YXIgaG92ZXJQYXRoID0gZDMuYXJjKClcblx0XHQub3V0ZXJSYWRpdXMocmFkaXVzIC0gOClcblx0XHQuaW5uZXJSYWRpdXMoMzApXG5cblx0dmFyIGxhYmVsID0gZDMuYXJjKClcblx0XHQub3V0ZXJSYWRpdXMocmFkaXVzIC0gNDApXG5cdFx0LmlubmVyUmFkaXVzKHJhZGl1cyAtIDQwKVxuXG5cblx0dmFyIGFyYyA9IGcuc2VsZWN0QWxsKCcuYXJjJylcblx0XHQuZGF0YShwaWUoZGF0YSkpXG5cdFx0LmVudGVyKCkuYXBwZW5kKCdnJylcblx0XHQuYXR0cignY2xhc3MnLCAnYXJjJylcblxuXHRhcmMuYXBwZW5kKCdwYXRoJylcblx0XHQuYXR0cignZCcsIHBhdGgpXG5cdFx0LmF0dHIoJ2ZpbGwnLCBkID0+IHJhaW5ib3coZC5kYXRhKSlcblx0XHQub24oJ21vdXNlb3ZlcicsICgpID0+IGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdkJywgaG92ZXJQYXRoKSlcblx0XHQub24oJ21vdXNlb3V0JywgKCkgPT4gZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2QnLCBwYXRoKSlcblxuXHRhcmMuYXBwZW5kKCd0ZXh0Jylcblx0XHQuYXR0cigndHJhbnNmb3JtJywgZCA9PiAndHJhbnNsYXRlKCcgKyBsYWJlbC5jZW50cm9pZChkKSArICcpJylcblx0XHQuYXR0cignZHknLCAnMC4zNWVtJylcblx0XHQudGV4dChkID0+IGQuZGF0YS5hZ2UpXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvcnRQaWUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBXekNvbnRhaW5lciA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWJpZy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC13aW5nXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWlubmVyXCIgc3R5bGU9e3t0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7KHByb3BzLnN0ZXApICogLTE2LjZ9JSlgfX0+XG4gICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8IGRpdiBjbGFzc05hbWU9XCJyaWdodC13aW5nXCI+IDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5XekNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG5cdHN0ZXA6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3pDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL1d6Q29udGFpbmVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXekxpc3RJdGVtIGZyb20gJy4vd3pMaXN0SXRlbSdcbmltcG9ydCBXekl0ZW0gZnJvbSAnLi93ekl0ZW0nXG5cbmNvbnN0IFd6R3JpZCA9IHByb3BzID0+IHtcblx0Y29uc3QgRWwgPSBwcm9wcy5saXN0ID8gV3pMaXN0SXRlbSA6IFd6SXRlbVxuXG5cdGNvbnN0IGlzU2VsZWN0ZWQgPSBpdGVtID0+IHtcblx0XHRpZihwcm9wcy5zZWxlY3RvciA9PT0gJ3RhZ3MnKSByZXR1cm4gcHJvcHMucm91dGUudGFncy5pbmRleE9mKGl0ZW0udmFsdWUpID4gLTFcblx0XHRyZXR1cm4gIHByb3BzLnJvdXRlW3Byb3BzLnNlbGVjdG9yXSA9PT0gaXRlbSBcblx0fVxuXG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ3ei1ncmlkXCI+XG4gICAgICAgICAgICAgIHsgcHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RWwga2V5PXsgaXRlbS5faWQgfHwgaXRlbX0gaXRlbT17IGl0ZW0gfSB0eXBlPXsgcHJvcHMuc2VsZWN0b3IgfSB1cGRhdGU9eyBwcm9wcy51cGRhdGUgfSBzZWxlY3RlZD17aXNTZWxlY3RlZChpdGVtKX0gLz5cbiAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICA8L2Rpdj5cblx0KVxufVxuXG5XekdyaWQucHJvcFR5cGVzID0ge1xuXHRpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuXHRzZWxlY3RvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0cm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG5cdGxpc3Q6IFByb3BUeXBlcy5vbmVPZihbdW5kZWZpbmVkLCB0cnVlXSksXG5cdHRhZ3M6IFByb3BUeXBlcy5vbmVPZihbdW5kZWZpbmVkLCB0cnVlXSksXG5cdGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR1cGRhdGU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6R3JpZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvV3pHcmlkLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7RmxleFJvdywgUnRTd2F0Y2h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgcG9zdFJvdXRlIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3JvdXRlJ1xuXG5pbXBvcnQge3NsZWVwLCByZW5kZXJJZn0gZnJvbSAncnR1dGlsJ1xuXG5cbmNsYXNzIFd6UHJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge31cblxuXHRyZW5kZXIoKSB7XG5cdFx0dGhpcy50cmFuc2Zvcm1lZFJvdXRlID0gdHJhbnNmb3JtUm91dGUodGhpcy5wcm9wcy5yb3V0ZSlcblx0XHRpZiAodGhpcy50cmFuc2Zvcm1lZFJvdXRlKSB7XG5cdFx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnRyYW5zZm9ybWVkUm91dGU/IChcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3ei1saXN0IHAxMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFR5cGU6IHt0aGlzLnByb3BzLnJvdXRlLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3ei1saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ29sb3I6IFxuICAgICAgICAgICAgICAgICAgICAgIDxSdFN3YXRjaCBjb2xvcj17IHRoaXMucHJvcHMucm91dGUuY29sb3IgfHwgZmFsc2UgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEdyYWRlOiB7dGhpcy5wcm9wcy5yb3V0ZS5ncmFkZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBHeW06IHt0aGlzLnByb3BzLnJvdXRlLmd5bS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFdhbGw6IHt0aGlzLnByb3BzLnJvdXRlLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRhZ3M6IHt0aGlzLnByb3BzLnJvdXRlLnRhZ3Muam9pbignLCAnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPEZsZXhSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMuZWRpdH0+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J2J0biBidG4tb3V0bGluZS1wcmltYXJ5JyArIHJlbmRlcklmKHRoaXMuc3RhdGUucGVuZGluZykoJyBidG4tb3V0bGluZS1wZW5kaW5nJyl9IG9uQ2xpY2s9e3RoaXMucG9zdFJvdXRlfT5BZGQgUm91dGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdFx0fVxuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRwb3N0Um91dGUgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cGVuZGluZzogdHJ1ZX0pXG5cdFx0dGhpcy5wcm9wcy5wb3N0Um91dGUodGhpcy50cmFuc2Zvcm1lZFJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oc2xlZXAoMTAwMCkpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG5cdHRoaXMucHJvcHMucmVzZXQoKVxuXHR0aGlzLnNldFN0YXRlKHtcblx0XHRhZGRlZDogdHJ1ZSxcblx0XHRwZW5kaW5nOiBmYWxzZVxuXHR9KVxufSlcblx0fVxuXG5cdGVkaXQgPSAoKSA9PiB7XG5cdFx0dGhpcy5wcm9wcy5tb3ZlKC0xKVxuXHR9XG59XG5cbld6UHJldmlldy5wcm9wVHlwZXMgPSB7XG5cdHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRncmFkZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cdHJlc2V0OiBQcm9wVHlwZXMuZnVuYyxcblx0bW92ZTogUHJvcFR5cGVzLmZ1bmMsXG5cdHBvc3RSb3V0ZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGUob2JqKSB7XG5cdGlmIChvYmouZ3ltICYmIG9iai5ncmFkZSAmJiBvYmouY29sb3IgJiYgb2JqLnRhZ3MgJiYgb2JqLmxvY2F0aW9uKVxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBvYmoudHlwZSxcblx0XHRcdGNvbG9yOiBvYmouY29sb3IudmFsdWUsXG5cdFx0XHRncmFkZTogb2JqLmdyYWRlLl9pZCxcblx0XHRcdGd5bTogb2JqLmd5bS5faWQsXG5cdFx0XHR3YWxsOiBvYmoubG9jYXRpb24sXG5cdFx0XHR0YWdzOiBvYmoudGFncy5qb2luKCcsICcpLFxuXHRcdFx0c2V0X29uOiBEYXRlLm5vdygpXG5cdFx0fVxuXHRyZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRyb3V0ZTogc3RhdGUucm91dGUsXG5cdFx0Z3JhZGVzOiBzdGF0ZS50ZWFtLmdyYWRlc1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG5cdHJldHVybiB7XG5cdFx0cG9zdFJvdXRlOiAocm91dGUpID0+IGRpc3BhdGNoKHBvc3RSb3V0ZShyb3V0ZSkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKFd6UHJldmlldylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL1d6UHJldmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgV3pQYWdlIGZyb20gJy4vd3pQYWdlJ1xuaW1wb3J0IHtSdENhcmR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uLydcblxuY29uc3QgV3pTdGVwID0gcHJvcHMgPT4gKFxuXHRwcm9wcy5yZXZpZXc/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDNcIj48L2Rpdj5cbiAgICAgIDxSdENhcmQgdGl0bGU9e3Byb3BzLm5hbWV9Pntwcm9wcy5jaGlsZHJlbn08L1J0Q2FyZD5cbiAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3otaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoMyB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgeyBwcm9wcy5uYW1lIH06PC9kaXY+XG4gICAgICA8V3pQYWdlIG5leHQ9e3Byb3BzLm5leHR9IHByZXY9e3Byb3BzLnByZXZ9Lz5cbiAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICAgIClcbilcblxuV3pTdGVwLnByb3BUeXBlcyA9IHtcblx0cmV2aWV3OiBQcm9wVHlwZXMuYm9vbCxcblx0bmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRuZXh0OiBQcm9wVHlwZXMuZnVuYyxcblx0cHJldjogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3pTdGVwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy9XelN0ZXAuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNvbG9yIGZyb20gJ3NlcnZpY2VzL2NvbG9yU2VydmljZSdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCBXekl0ZW0gPSBwcm9wcyA9PiB7XG5cdGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0cHJvcHMudXBkYXRlKHByb3BzLnR5cGUsIHByb3BzLml0ZW0pXG5cdH1cblxuXHRjb25zdCBpdGVtU3R5bGUgPSB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBwcm9wcy5pdGVtLmNvbG9yID8gcHJvcHMuaXRlbS5jb2xvciA6ICd3aGl0ZScsXG5cdFx0Y29sb3I6IHByb3BzLml0ZW0uY29sb3IgPyBjb2xvci50ZXh0Q29sb3IocHJvcHMuaXRlbS5jb2xvcikgOiAnaW5oZXJpdCdcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2N4KCd3ei1kb3QnLCB7J2l0ZW0tc2VsZWN0ZWQnOiBwcm9wcy5zZWxlY3RlZH0pfSBzdHlsZT17aXRlbVN0eWxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgZ3JpZC1sYWJlbFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtLnZhbHVlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXHQpXG5cbn1cblxuV3pJdGVtLnByb3BUeXBlcyA9IHtcblx0dXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcblx0aXRlbTogUHJvcFR5cGVzLm9iamVjdCxcblx0dHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6SXRlbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBXekxpc3RJdGVtID0gcHJvcHMgPT4ge1xuXHRmdW5jdGlvbiBfY2xpY2soKSB7XG5cdFx0cHJvcHMudXBkYXRlKHByb3BzLnR5cGUsIHByb3BzLml0ZW0pXG5cdH1cblx0cmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2V0Q2xhc3MocHJvcHMpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBsaXN0LWxhYmVsXCIgb25DbGljaz17X2NsaWNrfT57cHJvcHMuaXRlbS52YWx1ZSB8fCBwcm9wcy5pdGVtfTwvZGl2PlxuICAgIDwvZGl2PlxuXHQpXG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKHByb3BzKSB7XG5cdHJldHVybiAnd3otbGlzdC1pdGVtICcgKyAocHJvcHMuc2VsZWN0ZWQ/ICdpdGVtLXNlbGVjdGVkJyA6ICcnKVxufVxuXG5Xekxpc3RJdGVtLnByb3BUeXBlcyA9IHtcblx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXHR1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuXHRpdGVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cdHR5cGU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3pMaXN0SXRlbVxuICAgICAgICAgICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekxpc3RJdGVtLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY2xhc3MgV3pQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5wcmV2ID0gdGhpcy5wcmV2LmJpbmQodGhpcylcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHAxMGIgaGlkZGVuLXhzIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e3RoaXMucHJldn0+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e3RoaXMubmV4dCB9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdHRoaXMucHJvcHMubmV4dCgxKVxuXHR9XG5cblx0cHJldigpIHtcblx0XHR0aGlzLnByb3BzLnByZXYoLTEpXG5cdH1cbn1cblxuV3pQYWdlLnByb3BUeXBlcyA9IHtcblx0cHJldjogUHJvcFR5cGVzLmZ1bmMsXG5cdG5leHQ6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6UGFnZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pQYWdlLmpzeCIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUnRXaXphcmQgZnJvbSAnLi9ydFdpemFyZCdcbmltcG9ydCB7dXBkYXRlUm91dGUsIHVwZGF0ZVRhZ3MsIHJlc2V0V2l6YXJkfSBmcm9tICdkYXRhL2FjdGlvbnMvd2l6YXJkJ1xuaW1wb3J0IHtnZXRUZWFtfSBmcm9tICdkYXRhL2FjdGlvbnMvdGVhbSdcbmltcG9ydCB7Z2V0R3ltc30gZnJvbSAnZGF0YS9hY3Rpb25zL2d5bSdcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGU6IHN0YXRlLnJvdXRlLFxuICAgICAgICB0ZWFtOiBzdGF0ZS50ZWFtLFxuICAgICAgICBneW1zOiBzdGF0ZS5neW1zXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZTogKGZpZWxkLCB2YWx1ZSkgPT4gZGlzcGF0Y2godXBkYXRlUm91dGUoZmllbGQsIHZhbHVlKSksXG4gICAgICAgIHVwZGF0ZVRhZ3M6ICh2YWx1ZSkgPT4gZGlzcGF0Y2godXBkYXRlVGFncyh2YWx1ZSkpLFxuICAgICAgICByZXNldEZvcm06ICgpID0+IGRpc3BhdGNoKHJlc2V0V2l6YXJkKCkpLFxuICAgICAgICBnZXRUZWFtOiAoKSA9PiBkaXNwYXRjaChnZXRUZWFtKCkpLFxuICAgICAgICBnZXRHeW1zOiAoKSA9PiBkaXNwYXRjaChnZXRHeW1zKCkpXG4gICAgfVxufVxuXG5jb25zdCBSdFdpemFyZENvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaCkoUnRXaXphcmQpXG5cbmV4cG9ydCBkZWZhdWx0IFJ0V2l6YXJkQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFd6R3JpZCBmcm9tICcuL2NvbXBvbmVudHMvV3pHcmlkJ1xuaW1wb3J0IFd6Q29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9XekNvbnRhaW5lcidcbmltcG9ydCBXelN0ZXAgZnJvbSAnLi9jb21wb25lbnRzL1d6U3RlcCdcbmltcG9ydCBXelByZXZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1d6UHJldmlldydcbmltcG9ydCB7U3dpcGVDb250YWluZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5jbGFzcyBSdFdpemFyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHN0ZXA6IDAsXG5cdFx0Z3ltRmlsdGVyOiB1bmRlZmluZWRcblx0fVxuXG5cdGNsaWNrcyA9IDBcblx0Y2xpY2tlZCA9ICdneW0nXG5cdHN0ZXBzID0gWydneW0nLCAnY29sb3InLCAnZ3JhZGUnLCAnbG9jYXRpb24nLCAndGFncyddXG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRyb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRneW1zOiBQcm9wVHlwZXMuYXJyYXksXG5cdFx0dXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcblx0XHR0ZWFtOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRcdHJlc2V0Rm9ybTogUHJvcFR5cGVzLmZ1bmNcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMucmVzZXRGb3JtKClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPFN3aXBlQ29udGFpbmVyIG9uU3dpcGU9e3RoaXMub25Td2lwZX0+XG4gICAgICAgICAgICAgICAgPFd6Q29udGFpbmVyIHN0ZXA9e3RoaXMuc3RhdGUuc3RlcH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0ZXBDb250ZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0ZXApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V3pTdGVwIGtleT17c3RlcC5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3N0ZXAubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXY9e3RoaXMubW92ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0PXt0aGlzLm1vdmV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ9e3N0ZXAuZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3PXtzdGVwLnJldmlld30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9XelN0ZXA+KVxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICA8L1d6Q29udGFpbmVyPlxuICAgICAgICAgICAgPC9Td2lwZUNvbnRhaW5lcj5cblx0XHQpXG5cdH1cblxuXHRvblN3aXBlID0gKGRpcikgPT4ge1xuXHRcdGlmKCh0aGlzLnN0YXRlLnN0ZXAgIT09IDUgJiYgZGlyIDwgMCkgfHwgISh0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcF0gaW4gdGhpcy5wcm9wcy5yb3V0ZSkpIHJldHVyblxuICAgICAgICBcblx0XHRsZXQgdG9TdGVwID0gdGhpcy5zdGF0ZS5zdGVwICsgKGRpciA+IDA/IC0xIDogMSlcblxuXHRcdHRoaXMuc2V0U3RhdGUoe3N0ZXA6IHRvU3RlcH0pXG5cdH1cblxuXHRtb3ZlID0gKGRpciwgZmllbGQpID0+IHtcblx0XHRsZXQgY3VycmVudCA9IHRoaXMuc3RhdGUuc3RlcFxuICAgICAgICAvLyBjYWxsZWQgYnkgdXBkYXRlXG5cdFx0aWYoZmllbGQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtzdGVwOiBjdXJyZW50ICsgZGlyfSlcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UndmUgbWFkZSBpdCBwYXN0IHRoaXMgc3RlcCBhbHJlYWR5XG5cdFx0aWYoY3VycmVudCArIGRpciA8IDAgfHwgISh0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcF0gaW4gdGhpcy5wcm9wcy5yb3V0ZSkgJiYgZGlyID4gMCkgcmV0dXJuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7c3RlcDogY3VycmVudCArIGRpcn0pXG5cdH1cblxuXHR1cGRhdGUgPSAoZmllbGQsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGhhbmRsZSBkb3VibGUgY2xpY2tcblx0XHRpZiAodGhpcy5jbGlja3MgPiAwICYmIHRoaXMucHJvcHMucm91dGVbZmllbGRdID09PSB2YWx1ZSkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcblxuXHRcdHRoaXMucHJvcHMudXBkYXRlKGZpZWxkLCB2YWx1ZSlcblx0XHRsZXQgbmV4dCA9IHRoaXMuc3RhdGUuc3RlcCArIDFcblxuXHRcdGlmIChcbiAgICAgICAgICAgIC8vIGlmIHdlJ3ZlIG1hbnVhbGx5IGdvbmUgYmFja3dhcmRzLCBkb24ndCBtb3ZlXG4gICAgICAgICAgICAoIXRoaXMucHJvcHMucm91dGVbdGhpcy5zdGVwc1tuZXh0XV0gJiYgZmllbGQgIT09ICd0eXBlJylcbiAgICAgICAgICAgIC8vIG9yIHRoZSBuZXh0IHN0ZXAgaXMgbXVsdGlwbGUgY2hvaWNlXG4gICAgICAgICAgICB8fCB0aGlzLnN0ZXBzW25leHRdID09PSAndGFncydcbiAgICAgICAgKSByZXR1cm4gdGhpcy5tb3ZlKDEsIGZpZWxkKVxuXG4gICAgICAgIC8vIHN0b3JlIGNsaWNrIGZvciBkb3VibGUgY2xpY2tcblx0XHR0aGlzLmNsaWNrcysrXG5cdFx0dGhpcy5jbGlja2VkID0gZmllbGRcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xpY2tzLS0sIDUwMClcblx0fVxuXG5cdHVwZGF0ZVRhZ3MgPSAodGFncywgdGFnKSA9PiB7XG5cdFx0bGV0IHt2YWx1ZX0gPSB0YWdcbiAgICAgICAgXG4gICAgICAgIC8vIGhhbmRsZSBkb3VibGUgY2xpY2tcblx0XHRpZiAodGhpcy5jbGlja3MgPiAwICYmIHRoaXMucHJvcHMucm91dGUudGFncy5pbmRleE9mKHZhbHVlKSA+PTAgKSByZXR1cm4gdGhpcy5tb3ZlKDEsIHRydWUpXG5cbiAgICAgICAgLy8gaWYgd2UndmUgbWFudWFsbHkgZ29uZSBiYWNrd2FyZHMsIGRvbid0IG1vdmVcbiAgICAgICAgLy8gaWYgKCF0aGlzLnByb3BzLnJvdXRlW3RoaXMuc3RlcHNbdGhpcy5zdGF0ZS5zdGVwICsgMV1dKSByZXR1cm4gdGhpcy5tb3ZlKDEsIGZpZWxkKVxuXHRcdHRoaXMucHJvcHMudXBkYXRlVGFncyh2YWx1ZSlcblxuICAgICAgICAvLyBzdG9yZSBjbGljayBmb3IgZG91YmxlIGNsaWNrXG5cdFx0dGhpcy5jbGlja3MrK1xuXHRcdHRoaXMuY2xpY2tlZCA9IHZhbHVlXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmNsaWNrcy0tLCA1MDApXG5cdH1cblxuXHRmaWx0ZXJHeW1zKGd5bXMsIGZpbHRlcikge1xuXHRcdGlmKCFmaWx0ZXIpIHJldHVybiBbXVxuXHRcdHJldHVybiBneW1zLmZpbHRlcihneW0gPT4gZ3ltLndhbGxzW2ZpbHRlcl0ubGVuZ3RoKVxuXHR9XG5cblx0c2V0RmlsdGVyKGZpbHRlcikge1xuXHRcdHRoaXMudXBkYXRlKCd0eXBlJywgZmlsdGVyKVxuXHRcdHRoaXMuc2V0U3RhdGUoe2d5bUZpbHRlcjogZmlsdGVyfSlcblx0fVxuXG5cdHJlc2V0Rm9ybSA9ICgpID0+IHtcblx0XHR0aGlzLnByb3BzLnJlc2V0Rm9ybSgpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7c3RlcDogMX0pXG5cdH1cblxuXHRzdGVwQ29udGVudCgpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnZ3ltJyxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAnd3otbGlzdC1pdGVtICcgKyAodGhpcy5zdGF0ZS5neW1GaWx0ZXIgPT09ICdib3VsZGVyJyA/ICdpdGVtLXNlbGVjdGVkJyA6ICcnICl9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0RmlsdGVyKCdib3VsZGVyJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgbGlzdC1sYWJlbFwiPkJvdWxkZXJpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3d6LWxpc3QtaXRlbSAnICsgKHRoaXMuc3RhdGUuZ3ltRmlsdGVyID09PSAncm9wZScgPyAnaXRlbS1zZWxlY3RlZCcgOiAnJyApfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEZpbHRlcigncm9wZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGxpc3QtbGFiZWxcIj5Sb3BlczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMuZmlsdGVyR3ltcyh0aGlzLnByb3BzLmd5bXMsIHRoaXMuc3RhdGUuZ3ltRmlsdGVyKX0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnZ3ltJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0gbGlzdC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiAnY29sb3InLFxuXHRcdFx0XHRjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMudGVhbS5jb2xvcnN9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2NvbG9yJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0vPlxuICAgICAgICAgICAgICAgIClcblx0XHRcdH0sIHtcblx0XHRcdFx0bmFtZTogJ2dyYWRlJyxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnJvdXRlLnR5cGU/IHRoaXMucHJvcHMudGVhbS5ncmFkZXNbdGhpcy5wcm9wcy5yb3V0ZS50eXBlXSA6IHRoaXMucHJvcHMudGVhbS5ncmFkZXMuYm91bGRlcn0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnZ3JhZGUnfSB1cGRhdGU9e3RoaXMudXBkYXRlfS8+XG4gICAgICAgICAgICAgICAgKVxuXHRcdFx0fSwge1xuXHRcdFx0XHRuYW1lOiAnbG9jYXRpb24nLFxuXHRcdFx0XHRjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMucm91dGUuZ3ltICYmIHRoaXMucHJvcHMucm91dGUuZ3ltLndhbGxzW3RoaXMuc3RhdGUuZ3ltRmlsdGVyXSB8fCBbXX0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnbG9jYXRpb24nfSB1cGRhdGU9e3RoaXMudXBkYXRlfSBsaXN0Lz5cbiAgICAgICAgICAgICAgICApXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6ICd0YWdzJyxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnRlYW0udGFnc30gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsndGFncyd9IHVwZGF0ZT17dGhpcy51cGRhdGVUYWdzfSBsaXN0Lz5cbiAgICAgICAgICAgICAgICApXG5cdFx0XHR9LCB7XG5cdFx0XHRcdG5hbWU6ICdyZXZpZXcnLFxuXHRcdFx0XHRlbmQ6IHRydWUsXG5cdFx0XHRcdHJldmlldzogdHJ1ZSxcblx0XHRcdFx0Y29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pQcmV2aWV3IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBtb3ZlPXt0aGlzLm1vdmV9IHJlc2V0PXt0aGlzLnJlc2V0Rm9ybX0vPlxuICAgICAgICAgICAgICAgIClcblx0XHRcdH1cblx0XHRdXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRXaXphcmRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9ydFdpemFyZC5qc3giLCJleHBvcnQgZnVuY3Rpb24gcmVjZWl2ZUd5bXMoZ3ltcykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdSRUNFSVZFX0dZTVMnLFxuXHRcdHBheWxvYWQ6IGd5bXNcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3ltcyh0ZWFtKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PmZldGNoZXIuZ2V0KCdneW1zL3RlYW0vJyt0ZWFtLl9pZCkudGhlbihneW1zID0+IHtcblx0XHRkaXNwYXRjaChyZWNlaXZlR3ltcyhneW1zKSlcblx0XHRyZXR1cm4gZ3ltc1xuXHR9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvZ3ltLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdXRlKHJvdXRlKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ0FERF9ST1VURScsXG5cdFx0cGF5bG9hZDogcm91dGVcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVJvdXRlcyhyb3V0ZXMpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVDRUlWRV9ST1VURVMnLFxuXHRcdHBheWxvYWQ6IHJvdXRlc1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb3V0ZShyb3V0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdVUERBVEVfUk9VVEUnLFxuXHRcdHBheWxvYWQ6IHJvdXRlXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvdXRlcyhhcnIpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVNT1ZFX1JPVVRFUycsXG5cdFx0cGF5bG9hZDogYXJyXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlc0J5R3ltKGlkKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiBmZXRjaGVyLmdldChgcm91dGUvZ3ltLyR7aWR9YCwge1xuXHRcdGd5bTogaWRcblx0fSkudGhlbihyb3V0ZXMgPT4ge1xuXHRcdGRpc3BhdGNoKHJlY2VpdmVSb3V0ZXMocm91dGVzKSlcblx0Ly9yZXR1cm4gcm91dGVzXG5cdH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0Um91dGUocm91dGUpIHtcblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+IGZldGNoZXIuY3JlYXRlKCdyb3V0ZScsIHJvdXRlKVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRkaXNwYXRjaChhZGRSb3V0ZShyZXMpKVxuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXRSb3V0ZShyb3V0ZSkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4gZmV0Y2hlci51cGRhdGUoYHJvdXRlLyR7cm91dGUuX2lkfWAsIHJvdXRlKVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRkaXNwYXRjaCh1cGRhdGVSb3V0ZShyZXMpKVxuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy9yb3V0ZS5qcyIsImltcG9ydCB7IHJlY2VpdmVHeW1zIH0gZnJvbSAnLi9neW0nXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVGVhbSh0ZWFtKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1JFQ0VJVkVfVEVBTScsXG5cdFx0cGF5bG9hZDogdGVhbVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZWFtKCkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuXHRcdGxldCBzdGF0ZSA9IGdldFN0YXRlKClcblx0XHRpZiAoc3RhdGUudGVhbS5neW1zKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YXRlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmV0Y2hlci5nZXQoJ3RlYW1zL2N1cnJlbnQnKVxuXHRcdFx0XHQudGhlbih0ZWFtID0+IHtcblx0XHRcdFx0XHRkaXNwYXRjaChyZWNlaXZlVGVhbSh0ZWFtKSlcblx0XHRcdFx0XHRkaXNwYXRjaChyZWNlaXZlR3ltcyh0ZWFtLmd5bXMpKVxuXHRcdFx0XHRcdHJldHVybiB0ZWFtXG5cdFx0XHRcdH0pXG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy90ZWFtLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVVc2VyKHVzZXIpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVDRUlWRV9VU0VSJyxcblx0XHRwYXlsb2FkOiB1c2VyXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXIoKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiB7XG5cdFx0bGV0IHN0YXRlID0gZ2V0U3RhdGUoKVxuXHRcdGlmIChzdGF0ZS51c2VyLl9pZCkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZS51c2VyKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmV0Y2hlci5nZXQoJ3VzZXJzL2N1cnJlbnQnKVxuXHRcdFx0XHQudGhlbih1c2VyID0+IHtcblx0XHRcdFx0XHRkaXNwYXRjaChyZWNlaXZlVXNlcih1c2VyKSlcblx0XHRcdFx0XHRyZXR1cm4gdXNlclxuXHRcdFx0XHR9KVxuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvdXNlci5qcyIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb3V0ZShmaWVsZCwgdmFsdWUpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnVVBEQVRFX05FV19ST1VURScsXG5cdFx0cGF5bG9hZDoge1xuXHRcdFx0ZmllbGQsXG5cdFx0XHR2YWx1ZVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFncyh2YWx1ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdVUERBVEVfVEFHUycsXG5cdFx0cGF5bG9hZDogdmFsdWVcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRXaXphcmQoKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ1JFU0VUX1dJWkFSRCdcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvYWN0aW9ucy93aXphcmQuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSBbXVxuXG5jb25zdCB0cmFuc2Zvcm1HeW1zID0gKGd5bXMpID0+IHtcbiAgICBneW1zLmZvckVhY2goZ3ltID0+IHtcbiAgICAgICAgZ3ltLnZhbHVlID0gZ3ltLm5hbWVcbiAgICB9KVxuICAgIHJldHVybiBneW1zXG59XG5cbmNvbnN0IGd5bSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfR1lNUyc6XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1HeW1zKGFjdGlvbi5wYXlsb2FkKVxuICAgIGNhc2UgJ0dFVF9HWU1TJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBneW0gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2d5bS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcbmltcG9ydCB3aXphcmQgZnJvbSAnLi93aXphcmQnXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgcm91dGUgZnJvbSAnLi9yb3V0ZSdcbmltcG9ydCB0ZWFtIGZyb20gJy4vdGVhbSdcbmltcG9ydCBneW0gZnJvbSAnLi9neW0nXG5cbmNvbnN0IG1haW5SZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICByb3V0ZTogd2l6YXJkLCBcbiAgICByb3V0ZXM6IHJvdXRlLFxuICAgIHRlYW06IHRlYW0sXG4gICAgZ3ltczogZ3ltLFxuICAgIHVzZXIsXG4gICAgcm91dGVyOiByb3V0ZXJSZWR1Y2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCBtYWluUmVkdWNlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5jb25zdCBpbml0aWFsU3RhdGUgPSBuZXcgSW1tdXRhYmxlLk1hcCgpXG5cbmZ1bmN0aW9uIHJvdXRlKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChhY3Rpb24ucGF5bG9hZC5faWQsIGFjdGlvbi5wYXlsb2FkKVxuICAgIGNhc2UgJ1JFTU9WRV9ST1VURVMnOiB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBJbW11dGFibGUuU2V0KGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICByZXR1cm4gc3RhdGUuZmlsdGVyTm90KCh2KSA9PnJvdXRlcy5oYXModi5faWQpKVxuICAgIH1cbiAgICBjYXNlICdSRUNFSVZFX1JPVVRFUyc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5jb25jYXQoYWN0aW9uLnBheWxvYWQubWFwKHJvdXRlID0+IFtyb3V0ZS5faWQscm91dGVdKSlcbiAgICBjYXNlICdVUERBVEVfUk9VVEUnOlxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0KGFjdGlvbi5wYXlsb2FkLl9pZCwgYWN0aW9uLnBheWxvYWQpXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3JvdXRlLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGNvbG9yczogW10sXG4gICAgdGFnczogW10sXG4gICAgZ3JhZGVzOiB7XG4gICAgICAgIGJvdWxkZXI6IFtdLFxuICAgICAgICByb3BlOiBbXVxuICAgIH1cbn1cblxuY29uc3QgdHJhbnNmb3JtVGVhbSA9ICh0ZWFtKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGVhbSxcbiAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICBib3VsZGVyOiB0ZWFtLmdyYWRlcy5ib3VsZGVyLm1hcCgoZ3JhZGUsIGluZGV4KSA9PiB7cmV0dXJuIHtfaWQ6IGluZGV4LCB2YWx1ZTogZ3JhZGV9fSksXG4gICAgICAgICAgICByb3BlOiB0ZWFtLmdyYWRlcy5yb3BlLm1hcCgoZ3JhZGUsIGluZGV4KSA9PiB7cmV0dXJuIHtfaWQ6IGluZGV4LCB2YWx1ZTogZ3JhZGV9fSlcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3JzOiB0ZWFtLmNvbG9ycy5tYXAoY29sb3IgPT4ge3JldHVybiB7X2lkOiBjb2xvci5uYW1lLCB2YWx1ZTogY29sb3IubmFtZSwgY29sb3I6IGNvbG9yLmNvbG9yfX0pLFxuICAgICAgICB0YWdzOiB0ZWFtLnRhZ3MubWFwKHRhZyA9PiB7cmV0dXJuIHtfaWQ6IHRhZywgdmFsdWU6IHRhZ319KVxuICAgIH1cbn1cblxuY29uc3QgdGVhbSA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfVEVBTSc6XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1UZWFtKGFjdGlvbi5wYXlsb2FkKVxuICAgIGNhc2UgJ0dFVF9URUFNJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0ZWFtICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy90ZWFtLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuY29uc3QgdXNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFQ0VJVkVfVVNFUic6XG4gICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgIGNhc2UgJ0dFVF9VU0VSJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy91c2VyLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHRhZ3M6IFtdXG59XG5cbmNvbnN0IHdpemFyZCA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1VQREFURV9ORVdfUk9VVEUnOlxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgW2FjdGlvbi5wYXlsb2FkLmZpZWxkXTogYWN0aW9uLnBheWxvYWQudmFsdWV9KVxuICAgIGNhc2UgJ1VQREFURV9UQUdTJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7dGFnczogdG9nZ2xlVGFnKHN0YXRlLnRhZ3MsIGFjdGlvbi5wYXlsb2FkKX0pXG4gICAgY2FzZSAnUkVTRVRfV0laQVJEJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtneW06IHN0YXRlLmd5bSwgdGFnczogW119KVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l6YXJkXG5cbi8vIHV0aWxpdGllc1xuXG5mdW5jdGlvbiB0b2dnbGVUYWcodGFncywgdGFnKSB7XG4gICAgbGV0IGluZCA9IHRhZ3MuaW5kZXhPZih0YWcpXG4gICAgdGFncyA9IFsuLi50YWdzXVxuICAgIGlmIChpbmQgPj0gMCkge1xuICAgICAgICB0YWdzW2luZF0gPSB0YWdzW3RhZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgdGFncy5sZW5ndGggPSB0YWdzLmxlbmd0aCAtIDFcbiAgICAgICAgcmV0dXJuIHRhZ3NcbiAgICB9XG4gICAgcmV0dXJuIHRhZ3MuY29uY2F0KHRhZylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy93aXphcmQuanMiLCIgLyoqXG4gKiBAbmFtZSBzdGF0ZVRvZ2dsZVxuICogQGZ1bmN0aW9uIFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgcHJvcGVydHkgb2Ygc3RhdGUgdG8gdG9nZ2xlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cblxuXG5leHBvcnQgY29uc3Qgc3RhdGVUb2dnbGUgPSBwcm9wID0+IHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBbcHJvcF06ICFzdGF0ZVtwcm9wXVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS91dGlsL2luZGV4LmpzIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcbmltcG9ydCBTdmdJbmplY3RvciBmcm9tICdzdmctaW5qZWN0b3InXG5cbmNvbnN0IHJlbmRlciA9IENvbXBvbmVudCA9PiB7XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG5cdFx0PENvbXBvbmVudCAvPlxuXHQ8L0FwcENvbnRhaW5lcj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICApXG59XG5cbnJlbmRlcihBcHApXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbmljLXNwcml0ZScpXG4gICAgU3ZnSW5qZWN0b3IoaWNvbnMpXG59KVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIGNvbnNvbGUubG9nKCdzbyBzbyBob3QnKVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL2FwcCcsICgpID0+IHsgXG4gICAgICAgIGNvbnN0IEFwcCA9IHJlcXVpcmUoJy4vYXBwJykuZGVmYXVsdFxuICAgICAgICByZW5kZXIoQXBwKVxuICAgIH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL21haW4uanN4IiwiZXhwb3J0IGNvbnN0IGNvbG9ycyA9IFtcbiAgICB7ICdfaWQnOiAncmVkJywgJ3ZhbHVlJzogJ3JlZCcsICdjb2xvcic6ICcjZmUyZTJlJyB9LFxuICAgIHsgJ19pZCc6ICdvcmFuZ2UnLCAndmFsdWUnOiAnb3JhbmdlJywgJ2NvbG9yJzogJyNmOTInIH0sXG4gICAgeyAnX2lkJzogJ3llbGxvdycsICd2YWx1ZSc6ICd5ZWxsb3cnLCAnY29sb3InOiAnI2ZmZjA0YycgfSxcbiAgICB7ICdfaWQnOiAnZ3JlZW4nLCAndmFsdWUnOiAnZ3JlZW4nLCAnY29sb3InOiAnIzBiMCcgfSxcbiAgICB7ICdfaWQnOiAnYmx1ZScsICd2YWx1ZSc6ICdibHVlJywgJ2NvbG9yJzogJyMxZTU0ZjQnIH0sXG4gICAgeyAnX2lkJzogJ3B1cnBsZScsICd2YWx1ZSc6ICdwdXJwbGUnLCAnY29sb3InOiAnIzgwOCcgfSxcbiAgICB7ICdfaWQnOiAnYmxhY2snLCAndmFsdWUnOiAnYmxhY2snLCAnY29sb3InOiAnIzAwMCcgfSxcbiAgICB7ICdfaWQnOiAnd2hpdGUnLCAndmFsdWUnOiAnd2hpdGUnLCAnY29sb3InOiAnI2ZmZicgfSxcbiAgICB7ICdfaWQnOiAncGluaycsICd2YWx1ZSc6ICdwaW5rJywgJ2NvbG9yJzogJyNlNWQnIH1cbl1cblxuXG5leHBvcnQgY29uc3QgcGFsYXR0ZSA9IHtcbiAgICB0ZWFsOiB7cHJpbWFyeTogJyMwOGUwYzUnLCBzZWNvbmRhcnk6ICcjNGJkMGRkJ30sXG4gICAgcGluazoge3ByaW1hcnk6ICcjZmE0OTc4Jywgc2Vjb25kYXJ5OiAnI2ViNjdhOCd9LFxuICAgIG9yYW5nZToge3ByaW1hcnk6ICcjZmI5NTAwJywgc2Vjb25kYXJ5OiAnI2ZiYzEwMCd9LFxuICAgIGdyZWVuOiB7cHJpbWFyeTogJyM4M2JmMDAnLCBzZWNvbmRhcnk6ICcjODNiZjAwJ30sXG4gICAgeWVsbG93OiB7cHJpbWFyeTogJyNmZmRjMDAnLCBzZWNvbmRhcnk6ICcjZmZmNDAwJ30sXG4gICAgYmx1ZToge3ByaW1hcnk6ICcjMDA4RkZGJywgc2Vjb25kYXJ5OiAnIzI1NzdFOCd9LFxuICAgIHJlZDoge3ByaW1hcnk6ICcjRUMzNTM1Jywgc2Vjb25kYXJ5OiAnI0UzMTgyOCd9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvcnRjb25maWcuanMiLCJjbGFzcyDPgCB7XG4gICAgY291bnRCeShhcnIsIGNvbXApIHtcbiAgICAgICAgaWYgKCFjb21wKSBcbiAgICAgICAgICAgIGNvbXAgPSAoYSkgPT4gYVxuICAgICAgICBsZXQgZ3JvdXBlZCA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGEgPSBhcnJbaV1cbiAgICAgICAgICAgIGlmIChjb21wKGEpIGluIGdyb3VwZWQpIHtcbiAgICAgICAgICAgICAgICBncm91cGVkW2NvbXAoYSldKytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBlZFtjb21wKGEpXSA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXBlZFxuICAgIH1cblxuICAgIGJ1Y2tldHMoYXJyLCBsaXN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpIFxuICAgICAgICAgICAgbGlzdCA9IGxpc3Quc3BsaXQoJyAnKVxuICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSBcbiAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9tYWtlSGFzaChsaXN0LCAwKVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RbYXJyW2ldXSsrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RcbiAgICB9XG5cbiAgICByYW5nZShhLCBiKSB7XG4gICAgICAgIGxldCBzdGFydCA9IGJcbiAgICAgICAgICAgID8gYVxuICAgICAgICAgICAgOiAwXG4gICAgICAgIGxldCBlbmQgPSBiXG4gICAgICAgICAgICA/IGJcbiAgICAgICAgICAgIDogYVxuICAgICAgICBsZXQgYXJyID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2goaSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICBleHBhbmRTaW1wbGVPYmplY3Qob2JqKSB7XG4gICAgICAgIG9iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSAhPT0gLTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VEb3ROb3RhdGlvbihrZXksIG9ialtrZXldLCBvYmopXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIHRvZ2dsZUFycmF5KGEsIHYpIHtcbiAgICAgICAgYSA9IFsuLi5hXVxuICAgICAgICB2YXIgaSA9IGEuaW5kZXhPZih2KVxuICAgICAgICBpZiAoaSA9PT0gLTEpXG4gICAgICAgICAgICBhLnB1c2godilcbiAgICAgICAgZWxzZVxuICAgICAgICBhLnNwbGljZShpLDEpXG5cbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cblxuICAgIC8vIGludGVybmFsXG5cbiAgICBfbWFrZUhhc2goYXJyLCB2YWwpIHtcbiAgICAgICAgbGV0IGhhc2ggPSB7fVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2hbYXJyW2ldXSA9IHZhbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgfVxuXG4gICAgX3BhcnNlRG90Tm90YXRpb24oc3RyLCB2YWwsIG9iaikge1xuICAgICAgICB2YXIgY3VycmVudE9iaiA9IG9iaixcbiAgICAgICAgICAgIGtleXMgPSBzdHIuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGksIGwgPSBNYXRoLm1heCgxLCBrZXlzLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAga2V5XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXVxuICAgICAgICAgICAgY3VycmVudE9ialtrZXldID0gY3VycmVudE9ialtrZXldIHx8IHt9XG4gICAgICAgICAgICBjdXJyZW50T2JqID0gY3VycmVudE9ialtrZXldXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRPYmpba2V5c1tpXV0gPSB2YWxcbiAgICAgICAgZGVsZXRlIG9ialtzdHJdXG4gICAgfVxuXG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IM+AKClcblxuZXhwb3J0IGNvbnN0IHJlbmRlcklmID0gY29uZGl0aW9uID0+IGVsZW1lbnQgPT4gKGNvbmRpdGlvbiAmJiBlbGVtZW50KSB8fCAnJyBcblxuZXhwb3J0IGNvbnN0IGRhdGVNYXRoID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgZGF5ID0gOC42NGU3XG4gICAgY29uc3Qgd2VlayA9IDYuMDQ4ZSs4XG4gICAgXG4gICAgZnVuY3Rpb24gd2Vla3NPbGQoZGF5KSB7XG4gICAgICAgIGNvbnN0IG1zID0gRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGRheSkuZ2V0VGltZSgpXG5cbiAgICAgICAgY29uc3Qgd2Vla3MgPSBtcy93ZWVrXG5cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQod2Vla3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF5LFxuICAgICAgICB3ZWVrLFxuICAgICAgICB3ZWVrc09sZFxuICAgIH1cblxufSkoKVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAodGltZSkgPT4gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9ydHV0aWwuanMiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY29sb3JGYWN0b3J5KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRleHRDb2xvclxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHRDb2xvcihjb2xvcikge1xuICAgICAgICBpZighY29sb3IpIHJldHVyblxuICAgICAgICBsZXQgc3BsaXR0ZXIgPSBjb2xvci5sZW5ndGggPiA0PyAvLnsyfS9nIDogLy4vZ1xuICAgICAgICBsZXQgbWlkZGxlID0gY29sb3IubGVuZ3RoID4gND8gMTI4IDogOFxuICAgICAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnJykubWF0Y2goc3BsaXR0ZXIpXG4gICAgICAgIHJldHVybiBjb2xvci5yZWR1Y2UoKGEsIGIpID0+IChwYXJzZUludChiLCAxNikgLyAzKSArIGEsIDApID4gbWlkZGxlID8gJyM1NTUnIDogJyNmZmYnXG4gICAgfVxufSkoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NlcnZpY2VzL2NvbG9yU2VydmljZS5qcyIsImNsYXNzIGZldGNoZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnByZWZpeCA9ICcvYXBpLydcblx0fVxuXG5cdGdldChyZXNvdXJjZSwgcGFyYW1zKSB7XG5cdFx0cmV0dXJuIGZldGNoKHRoaXMucHJlZml4ICsgcmVzb3VyY2UgKyBwYXJhbVRvUXVlcnkocGFyYW1zKSlcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHR9XG5cblx0Y3JlYXRlKHJlc291cmNlLCBkYXRhKSB7XG5cdFx0cmV0dXJuIGZldGNoKHRoaXMucHJlZml4ICsgcmVzb3VyY2UsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogZm9ybWF0Qm9keShkYXRhKVxuXHRcdH0pXG5cdH1cblxuXHR1cGRhdGUocmVzb3VyY2UsIGRhdGEpIHtcblx0XHRyZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSwge1xuXHRcdFx0bWV0aG9kOiAnUFVUJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fSxcblx0XHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG5cdFx0XHRib2R5OiBmb3JtYXRCb2R5KGRhdGEpXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBmZXRjaGVyKClcblxuZnVuY3Rpb24gcGFyYW1Ub1F1ZXJ5KG9iaikge1xuXHRpZiAoIW9iaikgcmV0dXJuICcnXG5cblx0cmV0dXJuICc/JyArXG5cdFx0T2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pXG5cdFx0fSkuam9pbignJicpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdEJvZHkob2JqKSB7XG5cdHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc2VydmljZXMvZmV0Y2hlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9wdWJsaWMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9