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
	walls: _propTypes2.default.object
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvQmFzaWNJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvVGVhbUluZm8uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9GbGV4Um93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vSWNvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0lucHV0Qm94LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vTG9hZEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdENhcmQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdEZvcm0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdExpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFBhbmUuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdFN3YXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1NvcnRhYmxlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1N3aXBlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vVGFiU3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2NvbXBvbmVudHMvR3ltSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9Sb3V0ZUxpc3QuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvU3RhdHNDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlUm93LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9SdENvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vUnRIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjay5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekl0ZW0uanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pMaXN0SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elBhZ2UuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6U3RlcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC93ekdyaWQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvZ3ltLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy90ZWFtLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL2FjdGlvbnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3dpemFyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9neW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvdGVhbS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3dpemFyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcnRjb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3J0dXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2VydmljZXMvY29sb3JTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zZXJ2aWNlcy9mZXRjaGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbImhpc3RvcnkiLCJyb3V0ZU1pZGRsZXdhcmUiLCJzdG9yZSIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJ3aXRoRXh0cmFBcmd1bWVudCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsIm5leHRSb290UmVkdWNlciIsInJlcXVpcmUiLCJyZXBsYWNlUmVkdWNlciIsIkFwcCIsIkJhc2ljSW5mbyIsInN0YXRlIiwib25TYXZlIiwic2F2ZVN1Y2Nlc3MiLCJmaWVsZHMiLCJ2YWxpZGF0ZUVtcHR5IiwidmFsaWRhdGVFbWFpbCIsInByb3BzIiwidXNlciIsInBlbmRpbmciLCJkYXRhIiwic2V0U3RhdGUiLCJ2YWx1ZXMiLCJleHBhbmRTaW1wbGVPYmplY3QiLCJ1cGRhdGUiLCJ0aGVuIiwibGFiZWwiLCJuYW1lIiwidHlwZSIsInZhbGlkYXRlIiwidmFsdWUiLCJsZW5ndGgiLCJ0ZXN0IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiTGlzdEl0ZW1Db2xvciIsImNvbG9yIiwiTGlzdEl0ZW0iLCJhdmFpbGFibGUiLCJtYXAiLCJUZWFtSW5mbyIsInRlYW0iLCJjb2xvcnMiLCJzbGljZSIsImEiLCJiIiwiX2lkIiwiZ3JhZGVzIiwiYm91bGRlciIsIm1hcFN0YXRlIiwidGFicyIsIkFjY291bnQiLCJsb2FkZWQiLCJhY3RpdmUiLCJ0b2dnbGUiLCJnZXRVc2VyIiwiaW5kIiwiZnVuYyIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJzdHlsZXMiLCJkaXNwbGF5IiwiaW5saW5lIiwianVzdGlmeUNvbnRlbnQiLCJhcm91bmQiLCJtYXJnaW4iLCJzdHlsZSIsImZsZXhSb3ciLCJjaGlsZHJlbiIsIm5vZGUiLCJJY29uIiwiYWx0Q2xhc3MiLCJjbGFzc05hbWUiLCJpY29uIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIklucHV0Qm94IiwidmFsaWQiLCJoYW5kbGVDaGFuZ2UiLCJvbkJsdXIiLCJlIiwiZmllbGQiLCJ0YXJnZXQiLCJ1cGRhdGVGb3JtIiwiZWRpdCIsIkNvbXBvbmVudCIsImJvb2wiLCJMb2FkQmFyIiwiTG9hZENvbnRhaW5lciIsImNvbnRlbnQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJSdENhcmQiLCJ0aXRsZSIsIlJ0Rm9ybSIsIlNldCIsInRvZ2dsZUVkaXQiLCJzYXZlIiwibWFrZUZvcm0iLCJPYmplY3QiLCJhc3NpZ24iLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInBvc2l0aW9uIiwiZWRpdGFibGUiLCJzaXplIiwicHJldmVudERlZmF1bHQiLCJyZXN1bHQiLCJpIiwiQXJyYXkiLCJwYWRkaW5nIiwibW9kaWZpZXIiLCJhZGQiLCJkZWxldGUiLCJkZWZhdWx0UHJvcHMiLCJhcnJheU9mIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJzaGFwZSIsIm9uQ2xpY2siLCJSdExpc3QiLCJsaXN0SXRlbXMiLCJpdGVtIiwiaW5kZXgiLCJSdFN3YXRjaCIsImMiLCJ0IiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJsb2NhbFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiU29ydGFibGVMaXN0IiwiaXRlbXMiLCJtYWtlSGFuZGxlcnMiLCJjb21wb25lbnQiLCJjb21wYXJhdG9yIiwiY3VycmVudCIsImxpc3QiLCJvcHRpb25zIiwiZGlmZmVyZW5jZVdpdGgiLCJuZXh0UHJvcHMiLCJmb250U2l6ZSIsImFyciIsImtleSIsInNvdXJjZSIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJvbkRyYWdPdmVyIiwib25Ecm9wIiwiZ2V0RGF0YSIsImRlc3QiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm9sZEluZCIsIm5ld0luZCIsImxpc3RzIiwibmV3RWwiLCJzcGxpY2UiLCJTd2lwZUNvbnRhaW5lciIsInRvdWNoU3RhcnQiLCJ0b3VjaEVuZCIsImNoYW5nZWRUb3VjaGVzIiwic3RhcnRYIiwiY2xpZW50WCIsImRpc3QiLCJvbkxlZnQiLCJvblN3aXBlIiwib25SaWdodCIsImlzQWN0aXZlIiwidGFiIiwiU2xpZGVyIiwidGFiU3dpdGNoZXIiLCJSdFBhbmUiLCJUYWJTd2l0Y2hlciIsIkZsZXhSb3ciLCJHeW1JdGVtIiwidW5kZWZpbmVkIiwiZ2V0Um91dGVzIiwiZ3ltIiwidXJsIiwib3duUHJvcHMiLCJneW1Sb3V0ZXMiLCJyb3V0ZXMiLCJyb3V0ZSIsInRyYW5zZm9ybVJvdXRlcyIsImlkIiwic29ydGVkIiwiYnVja2V0cyIsImdyYWRlIiwicmFuZ2UiLCJrZXlzIiwiR3ltTGlzdCIsImd5bXMiLCJtYXBQcm9wcyIsImZldGNoaW5nIiwiUm91dGVMaXN0Iiwic2VsZWN0SGFuZGxlciIsIm1vdXNlRG93biIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnQiLCJzaGlmdEtleSIsIk51bWJlciIsImxhc3RTZWxlY3RlZCIsImwiLCJNYXRoIiwibWluIiwiaCIsIm1heCIsInNlbGVjdGVkIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJ0ZW1wIiwiaGFzIiwiZGVsZXRlSGFuZGxlciIsImhhbmRsZVNvcnQiLCJ1cGRhdGVSb3V0ZSIsInNvcnRPbiIsIm5leHQiLCJzb3J0IiwiZGlyIiwicmV2ZXJzZSIsInVwZGF0ZWRfYXQiLCJ3YWxscyIsImV2ZW50IiwiaW5kcyIsImlkcyIsInJlbW92ZVJvdXRlcyIsInBhcmFtIiwibmV3Um91dGVzIiwibmV3Um91dGUiLCJwcm9wIiwiRGF0ZSIsInBhcnNlIiwic2V0X29uIiwiU3RhdHNDYXJkIiwibWFrZU92ZXJ2aWV3IiwiY291bnQiLCJvbGRlc3QiLCJJbmZpbml0eSIsImZvckVhY2giLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJhcnJvd3MiLCJSb3V0ZUhlYWRlciIsImFycm93IiwiVGRJbnB1dCIsIlRkU2VsZWN0IiwiUm91dGVSb3ciLCJjYW5jZWxFZGl0IiwiZGVsZXRlUm91dGUiLCJ1cGRhdGVGaWVsZCIsIndhbGwiLCJzZXR0ZXIiLCJtZW1iZXJzIiwibmlja25hbWUiLCJ3aWR0aCIsIndlZWtzT2xkIiwibnVtYmVyIiwiR3ltT3ZlcnZpZXciLCJ0eXBlcyIsInVwZGF0ZVJvdXRlcyIsIm9uVGVhbSIsInNldExvYWRlZCIsInNldEVycm9yIiwiZ2V0RGF0YUZvckd5bSIsIm1hdGNoIiwicGFyYW1zIiwic2V0VGltZW91dCIsImVycm9yIiwibWluSGVpZ2h0IiwiZ2V0VGVhbSIsImNhdGNoIiwiY3VycmVudEd5bSIsIlJ0Q29udGVudCIsImxvY2F0aW9uIiwiUnRIZWFkZXIiLCJpc09wZW4iLCJkcm9wZG93bklzT3BlbiIsInRvZ2dsZURyb3Bkb3duIiwiTWFpbiIsImdldEd5bXMiLCJyb3V0ZXIiLCJtYWluQ29udGFpbmVyIiwiZDMiLCJSdFN0YWNrIiwibWFrZUNoYXJ0IiwiYXBwbHkiLCJlbCIsInRvdGFsIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwiY2hhcnQiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwic2VnbWVudHMiLCJzZWxlY3RBbGwiLCJlbnRlciIsImQiLCJSdEJhciIsImJhcldpZHRoIiwieSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJjb2xvclNjYWxlIiwiaW50ZXJwb2xhdGVIY2wiLCJzY2FsZVNlcXVlbnRpYWwiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJjbGFzc2VkIiwiYmFyIiwiZGVsYXkiLCJyYW5kb20iLCJkdXJhdGlvbiIsImVhc2UiLCJlYXNlRXhwSW4iLCJ0aXAiLCJSdEJpZ0JhciIsInVwZGF0ZUNoYXJ0IiwicmVtb3ZlIiwic3ZnIiwidGV4dCIsImZvbnRTY2FsZSIsImNsYW1wIiwib2Zmc2V0IiwiaHRtbCIsImNhbGwiLCJvbiIsInNob3ciLCJoaWRlIiwicmVzaXplZCIsInNjYWxlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib25yZXNpemUiLCJiaW5kIiwiZ29hbCIsIlJ0UGllIiwicmFkaXVzIiwiZyIsInNjYWxlT3JkaW5hbCIsInBpZSIsInJhaW5ib3ciLCJwYXRoIiwiYXJjIiwib3V0ZXJSYWRpdXMiLCJpbm5lclJhZGl1cyIsImhvdmVyUGF0aCIsImNlbnRyb2lkIiwiYWdlIiwiV3pDb250YWluZXIiLCJ0cmFuc2Zvcm0iLCJzdGVwIiwiV3pJdGVtIiwiX2NsaWNrIiwic2V0Q2xhc3MiLCJXekxpc3RJdGVtIiwiV3pQYWdlIiwicHJldiIsIld6UHJldmlldyIsInBvc3RSb3V0ZSIsInRyYW5zZm9ybWVkUm91dGUiLCJ0cmFuc2Zvcm1Sb3V0ZSIsInRhZ3MiLCJqb2luIiwicmVzZXQiLCJhZGRlZCIsIm1vdmUiLCJvYmoiLCJub3ciLCJXelN0ZXAiLCJyZXZpZXciLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1cGRhdGVUYWdzIiwicmVzZXRGb3JtIiwiUnRXaXphcmRDb250YWluZXIiLCJSdFdpemFyZCIsImd5bUZpbHRlciIsImNsaWNrcyIsImNsaWNrZWQiLCJzdGVwcyIsInN0ZXBDb250ZW50IiwiZW5kIiwidG9TdGVwIiwidGFnIiwiaW5kZXhPZiIsInNldEZpbHRlciIsImZpbHRlckd5bXMiLCJXekdyaWQiLCJFbCIsImlzU2VsZWN0ZWQiLCJzZWxlY3RvciIsIm9uZU9mIiwicmVjZWl2ZUd5bXMiLCJwYXlsb2FkIiwiZ2V0U3RhdGUiLCJmZXRjaGVyIiwiZ2V0IiwiYWRkUm91dGUiLCJyZWNlaXZlUm91dGVzIiwiZ2V0Um91dGVzQnlHeW0iLCJwdXRSb3V0ZSIsImNyZWF0ZSIsInJlcyIsInJlY2VpdmVUZWFtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWNlaXZlVXNlciIsInJlc2V0V2l6YXJkIiwiaW5pdGlhbFN0YXRlIiwidHJhbnNmb3JtR3ltcyIsImFjdGlvbiIsIm1haW5SZWR1Y2VyIiwiTWFwIiwic2V0IiwiZmlsdGVyTm90IiwidiIsImNvbmNhdCIsInJvcGUiLCJ0cmFuc2Zvcm1UZWFtIiwid2l6YXJkIiwidG9nZ2xlVGFnIiwic3RhdGVUb2dnbGUiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdCIsInBhbGF0dGUiLCJ0ZWFsIiwicGluayIsIm9yYW5nZSIsImdyZWVuIiwieWVsbG93IiwiYmx1ZSIsInJlZCIsIs+AIiwiY29tcCIsImdyb3VwZWQiLCJzcGxpdCIsIl9tYWtlSGFzaCIsInN0YXJ0IiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfcGFyc2VEb3ROb3RhdGlvbiIsInZhbCIsImhhc2giLCJzdHIiLCJjdXJyZW50T2JqIiwicmVuZGVySWYiLCJjb25kaXRpb24iLCJlbGVtZW50IiwiZGF0ZU1hdGgiLCJkYXkiLCJ3ZWVrIiwibXMiLCJnZXRUaW1lIiwid2Vla3MiLCJyb3VuZCIsInNsZWVwIiwidGltZSIsImNvbG9yRmFjdG9yeSIsInNwbGl0dGVyIiwibWlkZGxlIiwicmVwbGFjZSIsInBhcnNlSW50IiwicHJlZml4IiwicmVzb3VyY2UiLCJmZXRjaCIsInBhcmFtVG9RdWVyeSIsImpzb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiZm9ybWF0Qm9keSIsImNyZWRlbnRpYWxzIiwiZW5jb2RlVVJJQ29tcG9uZW50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QixFQVNOSyxJQVRNLENBU0Q7QUFBQSx1QkFBT21ZLElBQUl1RSxJQUFKLEVBQVA7QUFBQSxhQVRDLENBQVA7QUFVSDs7Ozs7O2VBR1UsSUFBSTlFLE9BQUosRTs7Ozs7QUFFZixTQUFTNkUsWUFBVCxDQUFzQnpHLEdBQXRCLEVBQTJCO0FBQ3ZCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sRUFBUDs7QUFFVixXQUFPLE1BQ0h0UixPQUFPaUcsSUFBUCxDQUFZcUwsR0FBWixFQUFpQmxWLEdBQWpCLENBQXFCLFVBQVMyRyxHQUFULEVBQWM7QUFDL0IsZUFBT3NWLG1CQUFtQnRWLEdBQW5CLElBQTBCLEdBQTFCLEdBQ0hzVixtQkFBbUIvRyxJQUFJdk8sR0FBSixDQUFuQixDQURKO0FBRUgsS0FIRCxFQUdHbU8sSUFISCxDQUdRLEdBSFIsQ0FESjtBQUtIOztBQUVELFNBQVNpSCxVQUFULENBQW9CN0csR0FBcEIsRUFBeUI7QUFDckIsV0FBTzhFLEtBQUtDLFNBQUwsQ0FBZS9FLEdBQWYsQ0FBUDtBQUNIOzs7Ozs7OztrQ0FqREs0QixPOztrQ0FxQ0c2RSxZOztrQ0FVQUksVTs7Ozs7Ozs7Ozs7O0FDL0NULHlDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZXBlbmRlbmNpZXMgc3VibW9kdWxlcyBpbXBvcnQgJy4vY29tcG9uZW50cy91dGlsL3V0aWwnIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydENoYXJ0L3J0Q2hhcnQnIGltcG9ydCAnLi9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkJyBpbXBvcnRcbi8vICcuL2NvbXBvbmVudHMvZ3ltTGlzdC9neW1MaXN0JyBpbXBvcnQgJy4vY29tcG9uZW50cy9tYWluL21haW4nIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydEd5bS9ydEd5bSdcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW4gZnJvbSAnY29tcG9uZW50cy9tYWluJ1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnc2VydmljZXMvZmV0Y2hlcidcbmltcG9ydCBtYWluUmVkdWNlciBmcm9tICdkYXRhL3JlZHVjZXJzJ1xuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyLCByb3V0ZXJNaWRkbGV3YXJlfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSgpXG5jb25zdCByb3V0ZU1pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgbWFpblJlZHVjZXIsIFxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCksIFxuICAgIGFwcGx5TWlkZGxld2FyZShyb3V0ZU1pZGRsZXdhcmUsIHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KGZldGNoZXIpKVxuICAgIClcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9kYXRhL3JlZHVjZXJzJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuL2RhdGEvcmVkdWNlcnMvaW5kZXgnKVxuICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXh0Um9vdFJlZHVjZXIpXG4gICAgfSlcbn1cblxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgICAgICAgICAgICAgPE1haW4vPlxuICAgICAgICAgICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2FwcC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IFJ0Rm9ybSB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdzZXJ2aWNlcy9mZXRjaGVyJ1xuaW1wb3J0IHBpLCB7IHNsZWVwIH0gZnJvbSAncnR1dGlsJ1xuXG5jbGFzcyBCYXNpY0luZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHsgIH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHVzZXI6IFByb3BUeXBlcy5vYmplY3Rcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Rm9ybVxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM9eyB0aGlzLmZpZWxkcygpIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXsgdGhpcy5wcm9wcy51c2VyIH1cbiAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9eyB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgb25TYXZlPXsgdGhpcy5vblNhdmUgfVxuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nPXsgdGhpcy5zdGF0ZS5wZW5kaW5nIH0gLz5cblx0XHQpXG5cdH1cblxuXHRvblNhdmUgPSBkYXRhID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBlbmRpbmc6IHRydWVcblx0XHR9KVxuXG5cdFx0dGhpcy52YWx1ZXMgPSBwaS5leHBhbmRTaW1wbGVPYmplY3QoZGF0YSlcblxuXHRcdHJldHVybiBmZXRjaGVyLnVwZGF0ZSgndXNlcnMvY3VycmVudCcsIGRhdGEpXG4gICAgICAgICAgICAudGhlbihzbGVlcCgxMDAwKSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuc2F2ZVN1Y2Nlc3MoZGF0YSkpXG5cdH1cblxuXHRzYXZlU3VjY2VzcyA9IGRhdGEgPT4gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cGVuZGluZzogZmFsc2Vcblx0XHR9KVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblxuXHRmaWVsZHMgPSAoKSA9PiBbXG5cdFx0W1xuXHRcdFx0J0dlbmVyYWwnLFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ1VzZXJuYW1lJyxcblx0XHRcdFx0bmFtZTogJ3VzZXJuYW1lJyxcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0XHR2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZUVtcHR5XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogJ0UtbWFpbCcsXG5cdFx0XHRcdG5hbWU6ICdlbWFpbCcsXG5cdFx0XHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0XHRcdHZhbGlkYXRlOiB0aGlzLnZhbGlkYXRlRW1haWxcblx0XHRcdH1cblx0XHRdLFxuXHRcdFtcblx0XHRcdCdTZXR0aW5nJyxcblx0XHRcdHtcblx0XHRcdFx0bGFiZWw6ICdOaWNrbmFtZScsXG5cdFx0XHRcdG5hbWU6ICduaWNrbmFtZScsXG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0dmFsaWRhdGU6IHRoaXMudmFsaWRhdGVFbXB0eVxuXHRcdFx0fV1cblx0XVxuXG5cdHZhbGlkYXRlRW1wdHkgPSB2YWx1ZSA9PiB2YWx1ZS5sZW5ndGggPiAwXG5cblx0dmFsaWRhdGVFbWFpbCA9IHZhbHVlID0+IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QodmFsdWUpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNJbmZvXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvY29tcG9uZW50cy9CYXNpY0luZm8uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBSdFN3YXRjaCwgU29ydGFibGVMaXN0IH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCBSdFBpZSBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvcnRQaWUnXG5pbXBvcnQgUnRTdGFjayBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvUnRTdGFjaydcblxuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdydGNvbmZpZydcblxuXG5jb25zdCBMaXN0SXRlbUNvbG9yID0gcHJvcHMgPT4gPGxpIHsuLi5wcm9wc30+PFJ0U3dhdGNoIGNvbG9yPXsgcHJvcHMuY29sb3IgfSAvPjwvbGk+XG5cblxuY29uc3QgTGlzdEl0ZW0gPSBwcm9wcyA9PiAoPGxpIHsuLi5wcm9wc30+e3Byb3BzLnZhbHVlfTwvbGk+KSAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5jb25zdCBhdmFpbGFibGUgPSBjb2xvcnMubWFwKGNvbG9yID0+IHtcblx0cmV0dXJuIHtcblx0XHRjb2xvclxuXHR9XG59KVxuXG5cbmNsYXNzIFRlYW1JbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7ICB9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHR0ZWFtOiBQcm9wVHlwZXMub2JqZWN0XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17IHRoaXMucHJvcHMudGVhbS5jb2xvcnMuc2xpY2UoMCwgNSkubWFwKGNvbG9yID0+IHsgcmV0dXJuIHsgY29sb3J9IH0pIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBhdmFpbGFibGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXsgTGlzdEl0ZW1Db2xvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJhdG9yPXsoYSwgYikgPT4gIGEuY29sb3IuX2lkID09PSBiLmNvbG9yLl9pZH0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgICA8U29ydGFibGVMaXN0XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaXN0LXVuc3R5bGVkJ1xuICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RoaXMucHJvcHMudGVhbS5ncmFkZXMuYm91bGRlci5zbGljZSgwLCAyKX1cbiAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnByb3BzLnRlYW0uZ3JhZGVzLmJvdWxkZXJ9XG4gICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaXN0SXRlbX1cbiAgICAgICAgICAgICAgICAgICBjb21wYXJhdG9yPXsoYSwgYikgPT4gYS52YWx1ZSA9PT0gYi52YWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj48L2Rpdj5cbiAgICAgICAgICAgICAgPFJ0UGllIGRhdGE9e1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF19Lz5cbiAgICAgICAgICAgICAgPFJ0U3RhY2sgZGF0YT17W1xuXHR7XG5cdFx0dmFsdWU6IDE1XG5cdH0sIHtcblx0XHR2YWx1ZTogMTBcblx0fSwge1xuXHRcdHZhbHVlOiA1MFxuXHR9XX1cbiAgICAgICAgICAgICAgd2lkdGg9JzEwMHB4Jy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXHRcdClcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHRlYW06IHN0YXRlLnRlYW1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShUZWFtSW5mbylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2NvbXBvbmVudHMvVGVhbUluZm8uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFRhYiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IExvYWRCYXIsIFJ0Q2FyZCwgTG9hZENvbnRhaW5lciwgVGFiU3dpdGNoZXIgfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCBCYXNpY0luZm8gZnJvbSAnLi9jb21wb25lbnRzL0Jhc2ljSW5mbydcbmltcG9ydCBUZWFtSW5mbyBmcm9tICcuL2NvbXBvbmVudHMvVGVhbUluZm8nXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ2RhdGEvYWN0aW9ucy91c2VyJ1xuXG5jb25zdCB0YWJzID0gWydCYXNpYyBJbmZvJywgJ1RlYW0gSW5mbyddXG5cbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdHBlbmRpbmc6IGZhbHNlLFxuXHRcdGFjdGl2ZTogJ0Jhc2ljIEluZm8nXG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGdldFVzZXI6IFBULmZ1bmMsXG5cdFx0dXNlcjogUFQub2JqZWN0XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLmdldFVzZXIoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXHR0aGlzLnNldFN0YXRlKHtcblx0XHRsb2FkZWQ6IHRydWVcblx0fSlcbn0pXG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXt0aGlzLnN0YXRlLmxvYWRlZH0+XG4gICAgICAgICAgICAgIDxMb2FkQmFyLz5cbiAgICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT1cIk15IEFjY291bnRcIj5cbiAgICAgICAgICAgICAgICA8VGFiU3dpdGNoZXIgdGFicz17dGFic30gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICB7cmVuZGVySWYodGhpcy5zdGF0ZS5hY3RpdmUgPT0gJ0Jhc2ljIEluZm8nKShcbiAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJCYXNpYyBJbmZvXCIgZXZlbnRLZXk9ezF9IHRhYkNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxCYXNpY0luZm8gdXNlcj17dGhpcy5wcm9wcy51c2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3JlbmRlcklmKHRoaXMuc3RhdGUuYWN0aXZlID09PSAnVGVhbSBJbmZvJykoXG4gICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiVGVhbSBJbmZvXCIgZXZlbnRLZXk9ezJ9IHRhYkNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxUZWFtSW5mby8+XG4gICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9SdENhcmQ+XG4gICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG5cdFx0KVxuXHR9XG5cblx0dG9nZ2xlID0gKGluZCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBpbmRcblx0XHR9KVxuXHR9XG5cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHR1c2VyOiBzdGF0ZS51c2VyXG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcblx0cmV0dXJuIHtcblx0XHRnZXRVc2VyOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyKCkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEFjY291bnQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvYWNjb3VudC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHN0eWxlcyA9IHByb3BzID0+ICh7XG5cdGRpc3BsYXk6IHByb3BzLmlubGluZT8gJ2lubGluZS1mbGV4JyA6ICdmbGV4Jyxcblx0anVzdGlmeUNvbnRlbnQ6IHByb3BzLmFyb3VuZD8gJ3NwYWNlLWFyb3VuZCcgOiAnc3BhY2UtYmV0d2VlbicsXG5cdG1hcmdpbjogJ2F1dG8nLFxuXHQuLi5wcm9wcy5zdHlsZVxufSlcblxuY29uc3QgZmxleFJvdyA9IHByb3BzID0+IChcbiAgICA8ZGl2IHN0eWxlPXsgc3R5bGVzKHByb3BzKSB9IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4pXG5cbmZsZXhSb3cucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxleFJvd1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9GbGV4Um93LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHtvbWl0fSBmcm9tICdyYW1kYSdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5cbmNvbnN0IEljb24gPSBwcm9wcyA9PiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDggOFwiIHsuLi5vbWl0KFsnaWNvbicsICdjb2xvcicsICdhbHRDbGFzcycsICdjbGFzc05hbWUnXSwgcHJvcHMpfSBjbGFzc05hbWU9e2N4KHByb3BzLmFsdENsYXNzIHx8ICdpY29uJywgcHJvcHMuY2xhc3NOYW1lKX0+XG4gICAgICA8dXNlIHhsaW5rSHJlZj17JyMnICsgcHJvcHMuaWNvbn0gY2xhc3NOYW1lPXtwcm9wcy5jb2xvciB8fCAnaWNvbi1ibGFjayd9IC8+XG4gICAgPC9zdmc+XG4pXG5cbkljb24ucHJvcFR5cGVzID0ge1xuXHRpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRhbHRDbGFzczogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9JY29uLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jbGFzcyBJbnB1dEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHZhbGlkOiB0cnVlXG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdHVwZGF0ZUZvcm06IFByb3BUeXBlcy5mdW5jXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgPSBlID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5maWVsZC52YWxpZGF0ZSkge1xuXHRcdFx0bGV0IHZhbGlkID0gdGhpcy5wcm9wcy5maWVsZC52YWxpZGF0ZShlLnRhcmdldC52YWx1ZSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR2YWxpZFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRvbkJsdXIgPSBlID0+IHtcblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0dmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuXHRcdFx0ZmllbGQ6IHRoaXMucHJvcHMuZmllbGQsXG5cdFx0XHR2YWxpZDogdGhpcy5zdGF0ZS52YWxpZFxuXHRcdH1cblx0XHR0aGlzLnByb3BzLnVwZGF0ZUZvcm0oZGF0YSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQge2ZpZWxkLCB2YWx1ZXN9ID0gdGhpcy5wcm9wc1xuXG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS52YWxpZCA/ICdmb3JtLWdyb3VwIHJvdycgOiAnZm9ybS1ncm91cCByb3cgaGFzLXdhcm5pbmcnIH0ga2V5PXsgZmllbGQubGFiZWwgfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbCBjb2wtbWQtMiBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIHsgZmllbGQubGFiZWwgfVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5lZGl0ID8gKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17IGZpZWxkLnR5cGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9eyBmaWVsZC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyB2YWx1ZXNbZmllbGQubmFtZV0gfHwgZmllbGQubGFiZWwgfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1zdGF0aWMgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWVzW2ZpZWxkLm5hbWVdIHx8IGZpZWxkLmxhYmVsIH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcblx0fVxufVxuXG5JbnB1dEJveC5wcm9wVHlwZXMgPSB7XG5cdGZpZWxkOiBQcm9wVHlwZXMub2JqZWN0LFxuXHR2YWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cdGVkaXQ6IFByb3BUeXBlcy5ib29sXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IElucHV0Qm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0lucHV0Qm94LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgTG9hZEJhciA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuaW5saW5lPyAnbG9hZC1iYXIgbG9hZC1iYXItaW5saW5lJyA6ICdsb2FkLWJhcid9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtYmFyX19iYXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWJhcl9fYmFyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1iYXJfX2JhclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5Mb2FkQmFyLnByb3BUeXBlcyA9IHtcblx0aW5saW5lOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQmFyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZSBmcm9tICdyZWFjdC1jc3MtdHJhbnNpdGlvbi1yZXBsYWNlJ1xuXG5cbmNsYXNzIExvYWRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGxvYWRlZDogUHJvcFR5cGVzLmJvb2xcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBjb250ZW50ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIHRyYW5zaXRpb25OYW1lPVwibG9hZF9jb250YWluZXJcIiB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9IHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezUwMH0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubG9hZGVkID8gY29udGVudFsxXSA6IGNvbnRlbnRbMF19XG4gICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2U+XG5cdFx0KVxuXHR9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL0xvYWRDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuY29uc3QgUnRDYXJkID0gcHJvcHMgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInJ0LWNhcmRfX2NvbnRlbnRcIiBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgICAgICB7cmVuZGVySWYocHJvcHMudGl0bGUpKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJydC1jYXJkX19oZWFkZXIgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cblx0XHRcdDwvZGl2Pil9XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbilcblxuUnRDYXJkLnByb3BUeXBlcyA9IHtcblx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblx0c3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRDYXJkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRDYXJkLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBJbnB1dEJveCwgRmxleFJvdyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuXG5cbmNsYXNzIFJ0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHZhbGlkOiBuZXcgU2V0KClcblx0fVxuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0ZmllbGRzOiBbXSxcblx0XHR2YWx1ZXM6IHt9XG5cdH1cblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGZpZWxkczogUFQuYXJyYXlPZihcbiAgICAgICAgICAgIFBULm9uZU9mVHlwZShbXG5cdFBULmFycmF5LFxuXHRQVC5zaGFwZSh7XG5cdFx0bmFtZTogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0dHlwZTogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0bGFiZWw6IFBULnN0cmluZyxcblx0XHRvbkJsdXI6IFBULmZ1bmMsXG5cdFx0b25DbGljazogUFQuZnVuYyxcblx0XHR2YWxpZGF0ZTogUFQuZnVuY1xuXHR9KVxuXVxuICAgICAgICAgICAgKSkuaXNSZXF1aXJlZCxcblx0XHR2YWx1ZXM6IFBULm9iamVjdCxcblx0XHRlZGl0YWJsZTogUFQuYm9vbCxcblx0XHRwZW5kaW5nOiBQVC5ib29sLFxuXHRcdG9uU2F2ZTogUFQuZnVuY1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy52YWx1ZXMpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCIgc3R5bGU9eyB7IG9wYWNpdHk6IHRoaXMucHJvcHMucGVuZGluZyA/IDAuNSA6IDEsIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuM3MgbGluZWFyJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfSB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8RmxleFJvdyBpbmxpbmU+XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMucHJvcHMuZWRpdGFibGUgJiYgIXRoaXMuc3RhdGUuZWRpdCkoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17IHRoaXMudG9nZ2xlRWRpdCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMucHJvcHMuZWRpdGFibGUgJiYgdGhpcy5zdGF0ZS5lZGl0KShcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZUVkaXQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICB7IHJlbmRlcklmKHRoaXMuc3RhdGUuZWRpdCkoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshIXRoaXMuc3RhdGUudmFsaWQuc2l6ZX0gY2xhc3NOYW1lPXtjeCgnYnRuJywgIXRoaXMuc3RhdGUudmFsaWQuc2l6ZT8gJ2J0bi1vdXRsaW5lLXByaW1hcnknOidkaXNhYmxlZCcsIHsnYnRuLW91dGxpbmUtcGVuZGluZyc6IHRoaXMucHJvcHMucGVuZGluZ30pfSBvbkNsaWNrPXsgdGhpcy5zYXZlIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7IHRoaXMubWFrZUZvcm0oKSB9XG4gICAgICAgICAgICAgIDwvZm9ybT5cblx0XHQpXG5cdH1cblxuXHR0b2dnbGVFZGl0ID0gZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZWRpdCA/IHRoaXMucHJvcHMudmFsdWVzIDogdGhpcy5zdGF0ZS5kYXRhKVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZWRpdDogIXRoaXMuc3RhdGUuZWRpdCxcblx0XHRcdGRhdGFcblx0XHR9KVxuXHR9XG5cblx0c2F2ZSA9IGUgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGxldCByZXN1bHQgPSB0aGlzLnByb3BzLm9uU2F2ZSh0aGlzLnN0YXRlLmRhdGEpXG5cdFx0aWYgKHJlc3VsdC50aGVuKSB7XG5cdFx0XHRyZXN1bHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZWRpdDogZmFsc2UsXG5cdFx0XHRcdFx0ZGF0YTogZGF0YVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGVkaXQ6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiByZXN1bHRcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0bWFrZUZvcm0gPSBmaWVsZHMgPT4ge1xuXHRcdGZpZWxkcyA9IGZpZWxkcyB8fCB0aGlzLnByb3BzLmZpZWxkc1xuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZCwgaSkgPT4ge1xuXHRcdFx0aWYgKGZpZWxkIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0cmV0dXJuICg8ZGl2IGtleT17IGkgfSBzdHlsZT17IHsgcGFkZGluZzogJzMwcHggMCAwJyB9IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57IGZpZWxkWzBdIH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5tYWtlRm9ybShmaWVsZC5zbGljZSgxKSwgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmVkaXQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGZpZWxkLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9eyBmaWVsZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9eyB0aGlzLnN0YXRlLmRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdD17IHRoaXMuc3RhdGUuZWRpdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXsgdGhpcy51cGRhdGVGb3JtIH0gLz5cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHR1cGRhdGVGb3JtID0gdXBkYXRlID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcblx0XHRcdGxldCBtb2RpZmllciA9IHtcblx0XHRcdFx0dmFsaWQ6IG5ldyBTZXQoc3RhdGUudmFsaWQpLFxuXHRcdFx0XHRkYXRhOiBPYmplY3QuYXNzaWduKHN0YXRlLmRhdGEsIHtbdXBkYXRlLmZpZWxkLm5hbWVdOiB1cGRhdGUudmFsdWV9KVxuXHRcdFx0fVxuXG5cdFx0XHRpZighdXBkYXRlLnZhbGlkKSB7XG5cdFx0XHRcdG1vZGlmaWVyLnZhbGlkLmFkZCh1cGRhdGUuZmllbGQubmFtZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1vZGlmaWVyLnZhbGlkLmRlbGV0ZSh1cGRhdGUuZmllbGQubmFtZSlcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1vZGlmaWVyXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRGb3JtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuXG5jb25zdCBSdExpc3QgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvX3BvZF9fbGlzdFwiPlxuICAgICAgICB7IHByb3BzLmxpc3RJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoPGRpdiBrZXk9e2l0ZW0uX2lkIHx8IGluZGV4fSBjbGFzc05hbWU9XCJcIj57aXRlbS52YWx1ZSB8fCBpdGVtfTwvZGl2PikpIH1cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUnRMaXN0XG5cblJ0TGlzdC5wcm9wVHlwZXMgPSB7XG5cdGxpc3RJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pKSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9SdExpc3QuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNvbnN0IFJ0Q2FyZCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9eydydC1wYW5lICcgKyAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKX0+XG4gICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSdENhcmRcblxuUnRDYXJkLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRQYW5lLmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBjb2xvciBmcm9tICdzZXJ2aWNlcy9jb2xvclNlcnZpY2UnXG5cbmNsYXNzIFJ0U3dhdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCBjID0gdGhpcy5wcm9wcy5jb2xvclxuXHRcdGlmICghdGhpcy5wcm9wcy5jb2xvci5jb2xvcikge1xuXHRcdFx0bGV0IHQgPSB0aGlzLnByb3BzLmNvbG9ycy5maWx0ZXIoY29sb3IgPT4gY29sb3IudmFsdWUgPT09IHRoaXMucHJvcHMuY29sb3IudG9Mb3dlckNhc2UoKSlbMF1cblx0XHRcdGMgPSB7XG5cdFx0XHRcdGNvbG9yOiB0PyB0LmNvbG9yIDogJyNGRkYnLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy5jb2xvci50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9jYWxTdHlsZSA9IHtcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYy5jb2xvciB8fCAnd2hpdGUnLFxuXHRcdFx0Y29sb3I6IGNvbG9yLnRleHRDb2xvcihjLmNvbG9yKSxcblx0XHRcdGJvcmRlclJhZGl1czogJzNweCcsXG5cdFx0XHRoZWlnaHQ6ICczMHB4J1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgbG9jYWxTdHlsZSwgdGhpcy5wcm9wcy5zdHlsZT8gdGhpcy5wcm9wcy5zdHlsZSA6IHt9KVxuXG5cdFx0cmV0dXJuICg8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17IHN0eWxlIH0+PHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLXNtLWRvd25cIj57IGMudmFsdWUgfHwgJycgfTwvc3Bhbj48L3NwYW4+KVxuXHR9XG5cbn1cblxuUnRTd2F0Y2gucHJvcFR5cGVzID0ge1xuXHRjb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXHRjb2xvcnM6IFByb3BUeXBlcy5hcnJheSxcblx0c3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRjb2xvcnM6IHN0YXRlLnRlYW0uY29sb3JzXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSkoUnRTd2F0Y2gpXG5cbmV4cG9ydCB7IFJ0U3dhdGNoIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vUnRTd2F0Y2guanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnXG5cbmNsYXNzIFNvcnRhYmxlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGl0ZW1zOiBbXVxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0Y29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdGxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXHRcdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcblx0XHRjb21wYXJhdG9yOiBQcm9wVHlwZXMuZnVuY1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5MaXN0SXRlbSA9IHRoaXMucHJvcHMuY29tcG9uZW50XG5cdFx0dGhpcy5jb21wYXJhdG9yID0gdGhpcy5wcm9wcy5jb21wYXJhdG9yIHx8ICgoYSwgYikgPT4gYSA9PT0gYilcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogdGhpcy5wcm9wcy5saXN0XG5cdFx0fSlcblxuXHRcdGlmICh0aGlzLnByb3BzLm9wdGlvbnMpIHtcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBSLmRpZmZlcmVuY2VXaXRoKHRoaXMuY29tcGFyYXRvciwgdGhpcy5wcm9wcy5vcHRpb25zLCB0aGlzLnByb3BzLmxpc3QpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0b3B0aW9uc1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDogbmV4dFByb3BzLmxpc3Rcblx0XHR9KVxuXHRcdGlmIChuZXh0UHJvcHMub3B0aW9ucyAmJiB0aGlzLnN0YXRlLmN1cnJlbnQgfHwgbmV4dFByb3BzLmxpc3QpIHtcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBSLmRpZmZlcmVuY2VXaXRoKHRoaXMuY29tcGFyYXRvciwgbmV4dFByb3BzLm9wdGlvbnMsIG5leHRQcm9wcy5saXN0KVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG9wdGlvbnNcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5jdXJyZW50KSByZXR1cm4gbnVsbFxuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfSBzdHlsZT17IHsgZm9udFNpemU6ICcxLjVlbScgfSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5jdXJyZW50Lm1hcCgoaXRlbSwgaW5kLCBhcnIpID0+IFxuXHRcdFx0XHRcdDx0aGlzLkxpc3RJdGVtIGRhdGEtc291cmNlPVwibGlzdFwiIGtleT17IGl0ZW0ua2V5IHx8IGluZCB9IHsuLi5pdGVtfSB7Li4udGhpcy5tYWtlSGFuZGxlcnMoaW5kLCBhcnIsICdsaXN0Jyl9Lz4pIH1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcHRpb25zID8gKFxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17IHRoaXMucHJvcHMuY2xhc3NOYW1lIH0gc3R5bGU9eyB7IGZvbnRTaXplOiAnMS41ZW0nIH0gfT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcHRpb25zLm1hcCgoaXRlbSwgaW5kLCBhcnIpID0+IFxuXHRcdFx0XHRcdFx0PHRoaXMuTGlzdEl0ZW0gZGF0YS1zb3VyY2U9XCJvcHRpb25zXCIga2V5PXsgaXRlbS5rZXkgfHwgaW5kIH0gey4uLml0ZW19IHsuLi50aGlzLm1ha2VIYW5kbGVycyhpbmQsIGFyciwgJ29wdGlvbnMnKX0vPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9Db2w+KSA6IG51bGwgfVxuICAgICAgICAgICAgPC9Sb3c+XG5cdFx0KVxuXHR9XG5cblx0bWFrZUhhbmRsZXJzID0gKGluZCwgYXJyLCBzb3VyY2UpID0+ICh7XG5cdFx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRcdG9uRHJhZ1N0YXJ0OiBlID0+IHtcblx0XHRcdGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2luZCcsIGluZClcblx0XHRcdGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3NvdXJjZScsIHNvdXJjZSlcblx0XHRcdGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcblx0XHR9LFxuXHRcdG9uRHJhZ092ZXI6IGUgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0fSxcblx0XHRvbkRyb3A6IGUgPT4ge1xuXHRcdFx0bGV0IHNvdXJjZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3NvdXJjZScpXG5cdFx0XHRsZXQgZGVzdCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNvdXJjZVxuXG5cdFx0XHRpZiAoc291cmNlID09PSBkZXN0KSByZXR1cm5cblxuXHRcdFx0bGV0IG9sZEluZCA9ICtlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdpbmQnKVxuXHRcdFx0bGV0IG5ld0luZCA9IGluZFxuXG5cdFx0XHRsZXQgbGlzdHMgPSB7XG5cdFx0XHRcdGxpc3Q6IFsuLi50aGlzLnN0YXRlLmN1cnJlbnRdLFxuXHRcdFx0XHRvcHRpb25zOiBbLi4udGhpcy5zdGF0ZS5vcHRpb25zXVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3SW5kID09IGFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdG5ld0luZCA9IGFyci5sZW5ndGhcblx0XHRcdH1cblx0XHRcdGxldCBuZXdFbCA9IGxpc3RzW3NvdXJjZV0uc3BsaWNlKG9sZEluZCwgMSlbMF1cblx0XHRcdGxpc3RzW2Rlc3RdLnNwbGljZShuZXdJbmQsIDAsIG5ld0VsKVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Y3VycmVudDogbGlzdHMubGlzdCxcblx0XHRcdFx0b3B0aW9uczogbGlzdHMub3B0aW9uc1xuXHRcdFx0fSlcblx0XHR9XG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9Tb3J0YWJsZUxpc3QuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBTd2lwZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBvblRvdWNoU3RhcnQ9e3RoaXMudG91Y2hTdGFydH0gb25Ub3VjaEVuZD17dGhpcy50b3VjaEVuZH0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHR0b3VjaFN0YXJ0ID0gZSA9PiB7XG5cdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuXG5cdFx0dGhpcy5zdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFhcblx0fVxuXG5cdHRvdWNoRW5kID0gZSA9PiB7XG5cdFx0bGV0IGRpc3QgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnN0YXJ0WFxuXHRcdGlmIChkaXN0IDwgMTAwICYmIGRpc3QgPiAtMTAwKSByZXR1cm5cblxuXHRcdGlmICghdGhpcy5wcm9wcy5vbkxlZnQpIHJldHVybiB0aGlzLnByb3BzLm9uU3dpcGUoZGlzdClcblxuXHRcdGRpc3QgPiAwID8gdGhpcy5wcm9wcy5vblJpZ2h0KCkgOiB0aGlzLnByb3BzLm9uTGVmdCgpXG5cdH1cbn1cblxuU3dpcGVDb250YWluZXIucHJvcFR5cGVzID0ge1xuXHRvbkxlZnQ6IFByb3BUeXBlcy5mdW5jLFxuXHRvblJpZ2h0OiBQcm9wVHlwZXMuZnVuYyxcblx0b25Td2lwZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vU3dpcGVDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2LCBOYXZJdGVtLCBOYXZMaW5rIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZnVuY3Rpb24gaXNBY3RpdmUocHJvcHMsIHRhYikge1xuXHRyZXR1cm4gcHJvcHMuYWN0aXZlID09PSB0YWIgPyAnYWN0aXZlIHRleHQtY2FwaXRhbGl6ZScgOiAndGV4dC1jYXBpdGFsaXplJ1xufVxuXG5jb25zdCBTbGlkZXIgPSAoKSA9PiA8bGkgY2xhc3NOYW1lPSd0YWItc2xpZGVyJy8+XG5cbmNvbnN0IHRhYlN3aXRjaGVyID0gcHJvcHMgPT4gKFxuICAgIDxOYXYgdGFicz5cbiAgICAgIHsgcHJvcHMudGFicy5tYXAodGFiID0+IChcbiAgICAgICAgICAgIDxOYXZJdGVtIGtleT17dGFifT5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyBpc0FjdGl2ZShwcm9wcywgdGFiKSB9IFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7cHJvcHMudG9nZ2xlKHRhYil9IH0+XG4gICAgICAgICAgICAgICAge3RhYn1cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgKSkgfVxuICAgICAgICA8U2xpZGVyIGtleT0nc2xpZGVyJy8+XG4gICAgPC9OYXY+XG4pXG5cbnRhYlN3aXRjaGVyLnByb3BUeXBlcyA9IHtcblx0dGFiczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cdGFjdGl2ZTogUHJvcFR5cGVzLnN0cmluZyxcblx0dG9nZ2xlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG50YWJTd2l0Y2hlci5kZWZhdWx0UHJvcHMgPSB7XG5cdHRhYnM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYlN3aXRjaGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL1RhYlN3aXRjaGVyLmpzeCIsImltcG9ydCBGbGV4Um93IGZyb20gJy4vRmxleFJvdydcbmltcG9ydCBJbnB1dEJveCBmcm9tICcuL0lucHV0Qm94J1xuaW1wb3J0IExvYWRCYXIgZnJvbSAnLi9Mb2FkQmFyJ1xuaW1wb3J0IExvYWRDb250YWluZXIgZnJvbSAnLi9Mb2FkQ29udGFpbmVyJ1xuaW1wb3J0IFJ0Q2FyZCBmcm9tICcuL1J0Q2FyZCdcbmltcG9ydCBSdEZvcm0gZnJvbScuL1J0Rm9ybSdcbmltcG9ydCBSdExpc3QgZnJvbSAnLi9SdExpc3QnXG5pbXBvcnQgUnRTd2F0Y2ggZnJvbSAnLi9SdFN3YXRjaCdcbmltcG9ydCBTd2lwZUNvbnRhaW5lciBmcm9tICcuL1N3aXBlQ29udGFpbmVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuaW1wb3J0IFJ0UGFuZSBmcm9tICcuL1J0UGFuZSdcbmltcG9ydCBTb3J0YWJsZUxpc3QgZnJvbSAnLi9Tb3J0YWJsZUxpc3QnXG5pbXBvcnQgVGFiU3dpdGNoZXIgZnJvbSAnLi9UYWJTd2l0Y2hlcidcblxuZXhwb3J0IHtcbiAgICAvLyBVSSBcbiAgICBSdENhcmQsXG4gICAgUnRQYW5lLFxuICAgIFJ0Rm9ybSxcbiAgICBSdExpc3QsXG4gICAgSWNvbixcbiAgICBTb3J0YWJsZUxpc3QsXG4gICAgVGFiU3dpdGNoZXIsXG5cbiAgICAvLyBMQVlPVVRcbiAgICBGbGV4Um93LFxuICAgIExvYWRDb250YWluZXIsXG4gICAgU3dpcGVDb250YWluZXIsXG5cbiAgICAvL0VMRU1FTlRTXG4gICAgSW5wdXRCb3gsXG4gICAgTG9hZEJhcixcbiAgICBSdFN3YXRjaFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUnRCYXIgZnJvbSAnY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyJ1xuXG5pbXBvcnQgeyBnZXRSb3V0ZXNCeUd5bSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IM+AIGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgR3ltSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGRhdGE6IHVuZGVmaW5lZFxuXHR9XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRneW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0Z2V0Um91dGVzOiBQcm9wVHlwZXMuZnVuYyxcblx0XHRkYXRhOiBQcm9wVHlwZXMuYXJyYXlcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuZ2V0Um91dGVzKHRoaXMucHJvcHMuZ3ltLl9pZClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneW0taXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3ltLXRpdGxlIHRleHQtYnJhbmQgdGV4dC11cHBlcmNhc2UgdGV4dC10aGluXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17ICcvZ3ltcy8nICsgdGhpcy5wcm9wcy5neW0udXJsIH0gY2xhc3NOYW1lPVwibGluay1wbGFpblwiPlxuICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd5bS1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVxuICAgICAgICAgICAgICAgICAgICA/IDxSdEJhciBkYXRhPXsgdGhpcy5wcm9wcy5kYXRhIH0gY29sb3I9e3RoaXMucHJvcHMuZ3ltLmNvbG9yfS8+XG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlLCBvd25Qcm9wcykge1xuXHRsZXQgZ3ltUm91dGVzID0gc3RhdGUucm91dGVzLnRvQXJyYXkoKS5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBvd25Qcm9wcy5neW0uX2lkKVxuXG5cdHJldHVybiB7XG5cdFx0ZGF0YTogdHJhbnNmb3JtUm91dGVzKGd5bVJvdXRlcylcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuXHRyZXR1cm4ge1xuXHRcdGdldFJvdXRlczogaWQgPT4gZGlzcGF0Y2goZ2V0Um91dGVzQnlHeW0oaWQpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShHeW1JdGVtKVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzKSB7XG5cdGlmICghcm91dGVzLmxlbmd0aCkgcmV0dXJuIG51bGxcblx0bGV0IHNvcnRlZCA9IM+ALmJ1Y2tldHMocm91dGVzLm1hcChib3VsZGVyID0+IGJvdWxkZXIuZ3JhZGUpLCDPgC5yYW5nZSgxMykpXG5cdHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4gc29ydGVkW2tleV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9jb21wb25lbnRzL0d5bUl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgR3ltSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvR3ltSXRlbSdcbmltcG9ydCB7IExvYWRCYXIsIExvYWRDb250YWluZXIsIFJ0Q2FyZCB9ZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmNsYXNzIEd5bUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ3ltczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT1cIkd5bXNcIj5cbiAgICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXsgISF0aGlzLnByb3BzLmd5bXMubGVuZ3RoIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIwXCIgY2xhc3NOYW1lPVwiZ3ltLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMVwiIGNsYXNzTmFtZT1cImd5bS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZ3ltcy5tYXAoZ3ltID0+ICg8R3ltSXRlbSBrZXk9eyBneW0uX2lkIH0gZ3ltPXsgZ3ltIH0gY2xhc3NOYW1lPVwiZ3ltLWl0ZW1cIiAvPikpIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Mb2FkQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9SdENhcmQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcFByb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltcyxcbiAgICAgICAgZmV0Y2hpbmc6IHN0YXRlLmZldGNoaW5nXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShHeW1MaXN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBSb3V0ZVJvdyBmcm9tICcuL3JvdXRlUm93J1xuaW1wb3J0IFJvdXRlSGVhZGVyIGZyb20gJy4vcm91dGVIZWFkZXInXG5cbmltcG9ydCBwaSBmcm9tICdydHV0aWwnXG5cbmNsYXNzIFJvdXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHJhbmdlOiBuZXcgU2V0KClcblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0cm91dGVzOiBQcm9wVHlwZXMuYXJyYXksXG5cdFx0dGVhbTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRneW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0dXBkYXRlUm91dGU6IFByb3BUeXBlcy5mdW5jLFxuXHRcdHJlbW92ZVJvdXRlczogUHJvcFR5cGVzLmZ1bmMsXG5cdFx0d2FsbHM6IFByb3BUeXBlcy5vYmplY3Rcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJvdXRlczogc29ydE9uKFsuLi50aGlzLnByb3BzLnJvdXRlc10sICdzZXRfb24nKVxuXHRcdH0pXG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHQpIHtcblx0XHRpZiAobmV4dC5yb3V0ZXMpIHtcblx0XHRcdGxldCByb3V0ZXMgPSBzb3J0T24obmV4dC5yb3V0ZXMsIHRoaXMuc3RhdGUuc29ydCB8fCAnc2V0X29uJylcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyb3V0ZXM6IHRoaXMuc3RhdGUuZGlyID09PSAnZGVzYycgPyByb3V0ZXMucmV2ZXJzZSgpIDogcm91dGVzXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUgdGFibGUtc20gdGFibGUtbW9iaWxlIHRhYmxlLWZpeGVkIHRhYmxlX19yb3V0ZWxpc3QnPlxuICAgICAgICAgICAgICA8Um91dGVIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNvcnQ9eyB0aGlzLmhhbmRsZVNvcnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydD17IHRoaXMuc3RhdGUuc29ydCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI9eyB0aGlzLnN0YXRlLmRpciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVIYW5kbGVyPXsgdGhpcy5kZWxldGVIYW5kbGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsgdGhpcy5zdGF0ZS5yYW5nZS5zaXplID4gMCB9IC8+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5yb3V0ZXMubWFwKChyb3V0ZSwgaW5kKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmQ9eyBpbmQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IHJvdXRlLl9pZCArIHJvdXRlLnVwZGF0ZWRfYXQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlPXsgcm91dGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEhhbmRsZXI9eyB0aGlzLnNlbGVjdEhhbmRsZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsgdGhpcy5zdGF0ZS5yYW5nZS5oYXMoaW5kKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbT17IHRoaXMucHJvcHMudGVhbSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm91dGU9eyB0aGlzLnVwZGF0ZVJvdXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxscz17dGhpcy5wcm9wcy53YWxsc30gLz5cbiAgICAgICAgICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblx0XHQpXG5cdH1cblxuXHRzZWxlY3RIYW5kbGVyID0ge1xuXHRcdG1vdXNlRG93bjogZSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0bGV0IG1vZGlmaWVyID0gZS5jdHJsS2V5IHx8IGUubWV0YUtleVxuXHRcdFx0bGV0IHNoaWZ0ID0gZS5zaGlmdEtleVxuXHRcdFx0bGV0IGluZCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxuXHRcdFx0bGV0IHJhbmdlXG5cblx0XHRcdGlmIChtb2RpZmllciAmJiB0aGlzLmxhc3RTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxldCBsID0gTWF0aC5taW4odGhpcy5sYXN0U2VsZWN0ZWQsIGluZClcblx0XHRcdFx0bGV0IGggPSBNYXRoLm1heCh0aGlzLmxhc3RTZWxlY3RlZCwgaW5kKVxuXHRcdFx0XHRsZXQgc2VsZWN0ZWQgPSBwaS5yYW5nZShsLCBoICsgMSlcblx0XHRcdFx0dGhpcy5sYXN0U2VsZWN0ZWQgPSB1bmRlZmluZWRcblx0XHRcdFx0cmFuZ2UgPSBuZXcgU2V0KFsuLi50aGlzLnN0YXRlLnJhbmdlLCAuLi5zZWxlY3RlZF0pXG5cdFx0XHR9IGVsc2UgaWYgKG1vZGlmaWVyICYmICF0aGlzLmxhc3RTZWxlY3RlZCkge1xuXHRcdFx0XHR0aGlzLmxhc3RTZWxlY3RlZCA9IGluZFxuXHRcdFx0XHRyYW5nZSA9IHRoaXMuc3RhdGUucmFuZ2UuYWRkKGluZClcblx0XHRcdH0gZWxzZSBpZiAoc2hpZnQgJiYgdGhpcy5zdGF0ZS5yYW5nZS5zaXplKSB7XG5cdFx0XHRcdGxldCBsID0gTWF0aC5taW4oLi4udGhpcy5zdGF0ZS5yYW5nZSlcblx0XHRcdFx0bGV0IGggPSBNYXRoLm1heCguLi50aGlzLnN0YXRlLnJhbmdlKVxuXHRcdFx0XHRsZXQgc2VsZWN0ZWQgPSBpbmQgPD0gaCA/IHBpLnJhbmdlKGluZCwgaCArIDEpIDogcGkucmFuZ2UobCwgaW5kICsgMSlcblx0XHRcdFx0dGhpcy5sYXN0U2VsZWN0ZWQgPSB1bmRlZmluZWRcblx0XHRcdFx0cmFuZ2UgPSBuZXcgU2V0KFsuLi50aGlzLnN0YXRlLnJhbmdlLCAuLi5zZWxlY3RlZF0pXG5cdFx0XHR9IGVsc2UgaWYoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDEwMDApe1xuXHRcdFx0XHRsZXQgdGVtcCA9IG5ldyBTZXQodGhpcy5zdGF0ZS5yYW5nZSlcblx0XHRcdFx0dGhpcy5zdGF0ZS5yYW5nZS5oYXMoaW5kKT8gdGVtcC5kZWxldGUoaW5kKSA6IHRlbXAuYWRkKGluZClcblx0XHRcdFx0cmFuZ2UgPSB0ZW1wICBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGFzdFNlbGVjdGVkID0gaW5kXG5cdFx0XHRcdHJhbmdlID0gdGhpcy5zdGF0ZS5yYW5nZS5oYXMoaW5kKSAmJiB0aGlzLnN0YXRlLnJhbmdlLnNpemUgPT09IDEgPyBuZXcgU2V0KCkgOiBuZXcgU2V0KFtpbmRdKVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0cmFuZ2Vcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlSGFuZGxlciA9IGV2ZW50ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgaW5kcyA9IFsuLi5uZXcgU2V0KHRoaXMuc3RhdGUucmFuZ2UpXVxuXHRcdGNvbnN0IGlkcyA9IGluZHMubWFwKGluZCA9PiB0aGlzLnN0YXRlLnJvdXRlc1tpbmRdLl9pZClcblxuXHRcdHRoaXMucHJvcHMucmVtb3ZlUm91dGVzKGlkcylcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJhbmdlOiBuZXcgU2V0KClcblx0XHR9KVxuXHR9XG5cblx0aGFuZGxlU29ydCA9IHBhcmFtID0+ICgpID0+IHtcblx0XHRsZXQgbmV3Um91dGVzID0gWy4uLnRoaXMuc3RhdGUucm91dGVzXSxcblx0XHRcdGRpclxuXHRcdGlmICh0aGlzLnN0YXRlLnNvcnQgPT09IHBhcmFtKSB7XG5cdFx0XHRuZXdSb3V0ZXMucmV2ZXJzZSgpXG5cdFx0XHRkaXIgPSB0aGlzLnN0YXRlLmRpciA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzb3J0T24obmV3Um91dGVzLCBwYXJhbSlcblx0XHRcdGRpciA9ICdhc2MnXG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkaXIsXG5cdFx0XHRzb3J0OiBwYXJhbSxcblx0XHRcdHJvdXRlczogbmV3Um91dGVzXG5cdFx0fSlcblx0fVxuXG5cdHVwZGF0ZVJvdXRlID0gbmV3Um91dGUgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cm91dGVzOiB0aGlzLnN0YXRlLnJvdXRlcy5tYXAocm91dGUgPT4gcm91dGUuX2lkID09PSBuZXdSb3V0ZS5faWQgPyBuZXdSb3V0ZSA6IHJvdXRlKVxuXHRcdH0pXG5cdFx0dGhpcy5wcm9wcy51cGRhdGVSb3V0ZShuZXdSb3V0ZSlcblx0fVxufVxuXG5mdW5jdGlvbiBzb3J0T24oYXJyLCBwcm9wKSB7XG5cdGlmIChwcm9wID09PSAnZ3JhZGUnKSB7XG5cdFx0cmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBhW3Byb3BdIC0gYltwcm9wXSlcblx0fVxuXG5cdGlmIChwcm9wID09PSAnc2V0X29uJykge1xuXHRcdHJldHVybiBhcnIuc29ydCgoYSwgYikgPT4gRGF0ZS5wYXJzZShhLnNldF9vbikgLSBEYXRlLnBhcnNlKGIuc2V0X29uKSlcblx0fVxuXHRyZXR1cm4gYXJyLnNvcnQoXG4gICAgICAgIGZ1bmN0aW9uKGEsIGIpIHtcblx0aWYgKGFbcHJvcF0gPCBiW3Byb3BdKSB7XG5cdFx0cmV0dXJuIC0xXG5cdH0gZWxzZSBpZiAoYVtwcm9wXSA+IGJbcHJvcF0pIHtcblx0XHRyZXR1cm4gMVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAwXG5cdH1cbn1cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvUm91dGVMaXN0LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFJ0UGFuZSB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5jbGFzcyBTdGF0c0NhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRhdGE6IHRoaXMubWFrZU92ZXJ2aWV3KHRoaXMucHJvcHMuZGF0YSlcblx0XHR9KVxuXHR9XG5cdFxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlKSByZXR1cm4gbnVsbFxuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8UnRQYW5lPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJydC1wYW5lX19oZWFkZXJcIj5PdmVydmlldzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIENvdW50OlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmRhdGEuY291bnQgfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXMgTmVlZGVkOlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgTi9BXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIE9sZGVzdCBSb3V0ZTpcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5kYXRhLm9sZGVzdCB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L1J0UGFuZT5cblx0XHQpXG5cdH1cblxuXHRtYWtlT3ZlcnZpZXcoZGF0YSkge1xuXHRcdGxldCBtaW4gPSBJbmZpbml0eVxuXG5cdFx0ZGF0YS5mb3JFYWNoKHJvdXRlID0+IHtcblx0XHRcdGlmIChtaW4gPiBEYXRlLnBhcnNlKHJvdXRlLnNldF9vbikpXG5cdFx0XHRcdG1pbiA9IHJvdXRlLnNldF9vblxuXHRcdH0pXG5cdFx0XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvdW50OiBkYXRhLmxlbmd0aCxcblx0XHRcdG9sZGVzdDogbmV3IERhdGUobWluKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuXHRcdH1cblx0fVxufVxuXG5TdGF0c0NhcmQucHJvcFR5cGVzID0ge1xuXHRkYXRhOiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTdGF0c0NhcmRcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9TdGF0c0NhcmQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBhcnJvd3MgPSB7IFxuXHQnYXNjJzogJ1xcdTI1QjInLFxuXHQnZGVzYyc6ICdcXHUyNUJDJ1xufVxuXG5cbmNvbnN0IFJvdXRlSGVhZGVyID0gKHByb3BzKSA9PiB7XG5cdGZ1bmN0aW9uIGFycm93KHBhcmFtKSB7XG5cdFx0cmV0dXJuIHByb3BzLnNvcnQgPT09IHBhcmFtPyBhcnJvd3NbcHJvcHMuZGlyXSA6IG51bGxcblx0fSBcblxuXHRyZXR1cm4gKFxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGFibGUtY2VudGVyXCI+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ3NldF9vbicpfT5EYXRlIHthcnJvdygnc2V0X29uJyl9PC90aD5cbiAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnZ3JhZGUnKX0+R3JhZGUge2Fycm93KCdncmFkZScpfTwvdGg+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ2NvbG9yJyl9PkNvbG9yIHthcnJvdygnY29sb3InKX08L3RoPlxuICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCd3YWxsJyl9PldhbGwge2Fycm93KCd3YWxsJyl9PC90aD5cbiAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnc2V0dGVyJyl9PlNldHRlciB7YXJyb3coJ3NldHRlcicpfTwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0naGlkZGVuLXNtLWRvd24nPkVkaXQ8L3RoPlxuICAgICAgICAgIDx0aD57cHJvcHMuc2VsZWN0ZWQ/IDxhIGhyZWY9XCIjXCIgb25DbGljaz17cHJvcHMuZGVsZXRlSGFuZGxlcn0+UmVtb3ZlPC9hPiA6ICdTZWxlY3QnfTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuXHQpXG59XG5cblJvdXRlSGVhZGVyLnByb3BUeXBlcyA9IHtcblx0aGFuZGxlU29ydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblx0c29ydDogUHJvcFR5cGVzLnN0cmluZyxcblx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRkZWxldGVIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcblx0ZGlyOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZUhlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IFJ0U3dhdGNoLCBGbGV4Um93LCBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCB7ZGF0ZU1hdGh9IGZyb20gJ3J0dXRpbCdcbmltcG9ydCB7ZGlzc29jLCBvbWl0fSBmcm9tICdyYW1kYSdcblxuY29uc3QgVGRJbnB1dCA9IHByb3BzID0+IDx0ZCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+PGlucHV0IHsuLi5kaXNzb2MoJ2NsYXNzTmFtZScsIHByb3BzKX0gY2xhc3NOYW1lPVwiaW5wdXQtc20gZm9ybS1jb250cm9sXCIvPjwvdGQ+XG5cbmNvbnN0IFRkU2VsZWN0ID0gcHJvcHMgPT4gKFxuICA8dGQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiaW5wdXQtc20gZm9ybS1jb250cm9sXCIgey4uLm9taXQoWydjbGFzc05hbWUnLCAnY2hpbGRyZW4nXSwgcHJvcHMpfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvc2VsZWN0PlxuICA8L3RkPlxuKVxuXG5cbmNsYXNzIFJvdXRlUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0ZWRpdDogZmFsc2Vcblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0aW5kOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRcdHNlbGVjdEhhbmRsZXI6IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0c2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRcdHRlYW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0dXBkYXRlUm91dGU6IFByb3BUeXBlcy5mdW5jLFxuXHRcdHdhbGxzOiBQcm9wVHlwZXMuYXJyYXlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5lZGl0ID8gKFxuICAgICAgPHRyIGNsYXNzTmFtZT17J3RhYmxlLWNlbnRlciAnICsgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPyAncm91dGUtcm93X19zZWxlY3RlZCcgOiAnJyl9PlxuICAgICAgICA8VGRJbnB1dFxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImd5bS1yb3dfX2RhdGVcIlxuICAgICAgICAgICAgICAgICBuYW1lPVwic2V0X29uXCJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmV3IERhdGUodGhpcy5wcm9wcy5yb3V0ZS5zZXRfb24pLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAvPlxuICAgICAgICA8VGRJbnB1dFxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJncmFkZVwiXG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZpZWxkfVxuICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucm91dGUuZ3JhZGV9IC8+XG4gICAgICAgIDxUZElucHV0XG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZS5jb2xvcn0gLz5cbiAgICAgICAgPFRkU2VsZWN0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2FsbFwiXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucm91dGUud2FsbH0+XG4gICAgICAgICAge3RoaXMucHJvcHMud2FsbHMubWFwKHdhbGwgPT4gXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17d2FsbH0gdmFsdWU9e3dhbGx9PlxuICAgICAgICAgICAgICAgICAgICB7d2FsbH1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGRTZWxlY3Q+XG4gICAgICAgIDxUZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNldHRlclwiXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMudXBkYXRlRmllbGR9XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucm91dGUuc2V0dGVyfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRlYW0ubWVtYmVycy5tYXAoc2V0dGVyID0+IChcbiAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtzZXR0ZXIuX2lkfSB2YWx1ZT17c2V0dGVyLm5pY2tuYW1lfT5cbiAgICAgICAgICAgICAgICAge3NldHRlci5uaWNrbmFtZX1cbiAgICAgICAgICAgICAgIDwvb3B0aW9uPikpfVxuICAgICAgICA8L1RkU2VsZWN0PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ3ltLXJvd19fZWRpdCBoaWRkZW4tc20tZG93blwiPlxuICAgICAgICAgIDxGbGV4Um93IGlubGluZSBhcm91bmQgc3R5bGU9e3sgd2lkdGg6ICc4MCUnIH19PlxuICAgICAgICAgICAgPEljb24gb25DbGljaz17dGhpcy5jYW5jZWxFZGl0fSBpY29uPVwieFwiIC8+XG4gICAgICAgICAgICA8SWNvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXR9IGljb249XCJjaGVja1wiIC8+XG4gICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImhpZGRlbi1zbVwiXG4gICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByb3BzLnNlbGVjdEhhbmRsZXIubW91c2VEb3dufVxuICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICBkYXRhLWluZGV4PXt0aGlzLnByb3BzLmluZH0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICApIDogKFxuICAgICAgPHRyIGNsYXNzTmFtZT17J3RhYmxlLWNlbnRlciAnICsgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPyAncm91dGUtcm93X19zZWxlY3RlZCcgOiAnJyl9IG9uRG91YmxlQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdH0+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJneW0tcm93X19kYXRlXCIgYWx0PXsnICgnICsgZGF0ZU1hdGgud2Vla3NPbGQodGhpcy5wcm9wcy5yb3V0ZS5zZXRfb24pICsgJyB3ZWVrcyBvbGQpJ30+XG4gICAgICAgICAge25ldyBEYXRlKHRoaXMucHJvcHMucm91dGUuc2V0X29uKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJvdXRlLmdyYWRlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgezxSdFN3YXRjaCBjbGFzc05hbWU9XCJsaXN0X19zd2F0Y2hcIiBjb2xvcj17dGhpcy5wcm9wcy5yb3V0ZS5jb2xvcn0gLz59XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yb3V0ZS53YWxsfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAge3RoaXMucHJvcHMucm91dGUuc2V0dGVyfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdoaWRkZW4tc20tZG93bic+XG4gICAgICAgICAgPEljb24gb25DbGljaz17dGhpcy50b2dnbGVFZGl0fSBpY29uPVwicGVuY2lsXCIgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImhpZGRlbi1zbVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5zZWxlY3RIYW5kbGVyLm1vdXNlRG93bn1cbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgZGF0YS1pbmRleD17dGhpcy5wcm9wcy5pbmR9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgKVxuXHR9XG5cblx0Y2FuY2VsRWRpdCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGVkaXQ6ICF0aGlzLnN0YXRlLmVkaXRcblx0XHR9KVxuXHR9XG5cblx0dG9nZ2xlRWRpdCA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5zdGF0ZS5lZGl0KSB7XG5cdFx0XHR0aGlzLnByb3BzLnVwZGF0ZVJvdXRlKHRoaXMucm91dGUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucm91dGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnJvdXRlKVxuXHRcdH1cblxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlZGl0OiAhdGhpcy5zdGF0ZS5lZGl0XG5cdFx0fSlcblx0fVxuXG5cdGRlbGV0ZVJvdXRlID0gKCkgPT4ge1xuXHR9XG5cblx0dXBkYXRlRmllbGQgPSBldmVudCA9PiB7XG5cdFx0bGV0IGZpZWxkID0gZXZlbnQudGFyZ2V0Lm5hbWVcblx0XHR0aGlzLnJvdXRlW2ZpZWxkXSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXHR9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZVJvd1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVSb3cuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIGZyb20gJ3JlYWN0LWNzcy10cmFuc2l0aW9uLXJlcGxhY2UnXG5cbmltcG9ydCBSdEJpZ0JhciBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvcnRCaWdCYXInXG5pbXBvcnQgeyBMb2FkQ29udGFpbmVyLCBMb2FkQmFyLCBSdENhcmQsIFRhYlN3aXRjaGVyIH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdyZWFjdHN0cmFwJ1xuXG5pbXBvcnQgU3RhdHNDYXJkIGZyb20gJy4vY29tcG9uZW50cy9TdGF0c0NhcmQnXG5pbXBvcnQgUm91dGVMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Sb3V0ZUxpc3QnXG5cbmltcG9ydCB7IGdldFRlYW0gfSBmcm9tICdkYXRhL2FjdGlvbnMvdGVhbSdcbmltcG9ydCB7IGdldFJvdXRlc0J5R3ltLCBwdXRSb3V0ZSwgcmVtb3ZlUm91dGVzIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3JvdXRlJ1xuXG5pbXBvcnQgcGkgZnJvbSAncnR1dGlsJ1xuXG5jbGFzcyBHeW1PdmVydmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0YWN0aXZlOiAncm9wZSdcblx0fVxuXG5cdGRlZmF1bHRQcm9wcyA9IHtcblx0XHR0eXBlczogW11cblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0bmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRneW06IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0bWF0Y2g6IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0dGVhbTogUHJvcFR5cGVzLm9iamVjdCxcblx0XHRyb3V0ZXM6IFByb3BUeXBlcy5hcnJheSxcblx0XHRnZXRUZWFtOiBQcm9wVHlwZXMuZnVuYyxcblx0XHRnZXRSb3V0ZXM6IFByb3BUeXBlcy5mdW5jLFxuXHRcdHVwZGF0ZVJvdXRlOiBQcm9wVHlwZXMuZnVuYyxcblx0XHRyZW1vdmVSb3V0ZXM6IFByb3BUeXBlcy5mdW5jXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmdldERhdGFGb3JHeW0odGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubmFtZSlcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZ3ltICYmIG5leHRQcm9wcy5neW0gJiYgdGhpcy5wcm9wcy5neW0ubmFtZSAhPT0gbmV4dFByb3BzLmd5bS5uYW1lKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bG9hZGVkOiBmYWxzZVxuXHRcdFx0fSlcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5nZXREYXRhRm9yR3ltKG5leHRQcm9wcy5neW0udXJsKSwgMzAwKVxuXHRcdH1cblxuXHRcdGlmIChuZXh0UHJvcHMucm91dGVzICYmIHRoaXMucHJvcHMuZ3ltKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Y291bnQ6IHRoaXMudXBkYXRlUm91dGVzKG5leHRQcm9wcy5yb3V0ZXMpLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVSb3V0ZXMgPSAobmV3Um91dGVzLCB0eXBlKSA9PiB7XG5cdFx0dHlwZSA9IHR5cGU/IHR5cGUudG9Mb3dlckNhc2UoKSA6IHRoaXMucHJvcHMuZ3ltLnR5cGVbMF1cblx0XHRsZXQgZ3JhZGVzID0gdGhpcy5wcm9wcy50ZWFtLmdyYWRlc1t0eXBlXVxuXHRcdGxldCByb3V0ZXMgPSBuZXdSb3V0ZXMuZmlsdGVyKHJvdXRlID0+IHJvdXRlLnR5cGUgPT09IHR5cGUpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyb3V0ZXM6IHJvdXRlc1xuXHRcdH0pXG5cdFx0cmV0dXJuIHRyYW5zZm9ybVJvdXRlcyhyb3V0ZXMsIGdyYWRlcylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5lcnJvcikgcmV0dXJuIDxSZWRpcmVjdCB0bz0nLycgLz5cblx0XHRpZiAoIXRoaXMucHJvcHMuZ3ltKSByZXR1cm4gKDxSdENhcmQgc3R5bGU9e3sgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KScgfX0+IDxMb2FkQmFyLz48L1J0Q2FyZD4pXG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxSdENhcmQgdGl0bGU9e3RoaXMuc3RhdGUubG9hZGVkPyB0aGlzLnByb3BzLmd5bS5uYW1lIDogJyd9IGtleT17dGhpcy5wcm9wcy5neW0ubmFtZX0gc3R5bGU9e3sgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KScgfX0+XG4gICAgICAgICAgICAgIDxMb2FkQ29udGFpbmVyIGxvYWRlZD17dGhpcy5zdGF0ZS5sb2FkZWR9PlxuICAgICAgICAgICAgICAgIDxMb2FkQmFyLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtc3RyZXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFiU3dpdGNoZXIgdGFicz17dGhpcy5wcm9wcy5neW0udHlwZX0gdG9nZ2xlPXt0aGlzLnRvZ2dsZX0gYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBlcmF0b3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFJ0QmlnQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXt0aGlzLnByb3BzLmd5bS5jb2xvcn0+PC9SdEJpZ0Jhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNFwiIGNsYXNzTmFtZT1cImNvbC1ucCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U3RhdHNDYXJkIGRhdGE9e3RoaXMuc3RhdGUucm91dGVzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGVyYXRvclwiIC8+XG4gICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlIHRyYW5zaXRpb25OYW1lPVwibG9hZF9jb250YWluZXJcIiB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXs1MDB9IHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezUwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5zdGF0ZS5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcz17dGhpcy5zdGF0ZS5yb3V0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvdXRlPXt0aGlzLnByb3BzLnVwZGF0ZVJvdXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVSb3V0ZXM9e3RoaXMucHJvcHMucmVtb3ZlUm91dGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtPXt0aGlzLnByb3BzLnRlYW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxzPXt0aGlzLnByb3BzLmd5bS53YWxsc1t0aGlzLnN0YXRlLmFjdGl2ZV19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9Mb2FkQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9SdENhcmQ+XG5cblx0XHQpXG5cdH1cblxuXHR0b2dnbGUgPSAoa2V5KSA9PiB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBrZXkpIHJldHVyblxuXHRcdGxldCByb3V0ZXMgPSB0aGlzLnVwZGF0ZVJvdXRlcyh0aGlzLnByb3BzLnJvdXRlcywga2V5KVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBrZXksXG5cdFx0XHRjb3VudDogcm91dGVzXG5cdFx0fSlcblx0fVxuXG5cdGdldERhdGFGb3JHeW0obmFtZSkge1xuXHRcdHRoaXMucHJvcHMuZ2V0VGVhbSgpXG4gICAgICAgICAgICAudGhlbih0aGlzLm9uVGVhbShuYW1lKSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuc2V0TG9hZGVkKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuc2V0RXJyb3IpXG5cdH1cblxuXHRvblRlYW0gPSAobmFtZSkgPT4gKHRlYW0pID0+IHtcblx0XHRsZXQgY3VycmVudEd5bSA9IHRlYW0uZ3ltcy5maWx0ZXIoZ3ltID0+IG5hbWUgPT09IGd5bS51cmwpWzBdXG5cdFx0aWYgKCFjdXJyZW50R3ltKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZXJyb3I6IHRydWVcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLmdldFJvdXRlcyhjdXJyZW50R3ltLl9pZClcblx0XHR9XG5cdH1cblxuXHRzZXRMb2FkZWQgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7bG9hZGVkOiB0cnVlfSlcblx0fVxuXG5cdHNldEVycm9yID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2Vycm9yOiB0cnVlfSlcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSwgb3duUHJvcHMpIHtcblx0bGV0IGd5bSA9IHN0YXRlLmd5bXMuZmlsdGVyKGd5bSA9PiBneW0udXJsID09PSBvd25Qcm9wcy5tYXRjaC5wYXJhbXMubmFtZSlbMF1cblx0bGV0IHJvdXRlcyA9IHN0YXRlLnJvdXRlcy5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBneW0uX2lkKVxuXHRsZXQgYXJyID0gcm91dGVzLnRvQXJyYXkoKVxuXHRhcnIuZm9yRWFjaCgocm91dGUsIGluZCkgPT4gcm91dGUuaW5kID0gaW5kKVxuXHRyZXR1cm4ge1xuXHRcdGd5bTogZ3ltLFxuXHRcdHJvdXRlczogYXJyLFxuXHRcdHRlYW06IHN0YXRlLnRlYW1cblx0fVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuXHRyZXR1cm4ge1xuXHRcdGdldFRlYW06ICgpID0+IGRpc3BhdGNoKGdldFRlYW0oKSksXG5cdFx0Z2V0Um91dGVzOiAoaWQpID0+IGRpc3BhdGNoKGdldFJvdXRlc0J5R3ltKGlkKSksXG5cdFx0dXBkYXRlUm91dGU6IChyb3V0ZSkgPT4gZGlzcGF0Y2gocHV0Um91dGUocm91dGUpKSxcblx0XHRyZW1vdmVSb3V0ZXM6IChhcnIpID0+IGRpc3BhdGNoKHJlbW92ZVJvdXRlcyhhcnIpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShHeW1PdmVydmlldylcblxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGVzKHJvdXRlcywgZ3JhZGVzKSB7XG5cdGlmICghZ3JhZGVzIHx8ICFyb3V0ZXMpIHJldHVybiBbXVxuXHRsZXQgc29ydGVkID0gcGkuYnVja2V0cyhyb3V0ZXMubWFwKHJvdXRlID0+IHJvdXRlLmdyYWRlKSwgcGkucmFuZ2UoZ3JhZGVzLmxlbmd0aCkpXG5cdHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRncmFkZTogZ3JhZGVzW2tleV0gJiYgZ3JhZGVzW2tleV0udmFsdWUsXG5cdFx0XHRjb3VudDogc29ydGVkW2tleV1cblx0XHR9XG5cdH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IEd5bUxpc3QgZnJvbSAnY29tcG9uZW50cy9neW1MaXN0J1xuaW1wb3J0IEd5bU92ZXJ2aWV3IGZyb20gJ2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcnXG5pbXBvcnQgQWNjb3VudCBmcm9tICdjb21wb25lbnRzL2FjY291bnQnXG5cbmltcG9ydCBSdFdpemFyZENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL3J0V2l6YXJkJ1xuXG5jb25zdCBSdENvbnRlbnQgPSBwcm9wcyA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwicnQtY29udGVudFwiPlxuICAgICAgICA8U3dpdGNoIGxvY2F0aW9uPXtwcm9wcy5sb2NhdGlvbn0+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLycgY29tcG9uZW50PXtHeW1MaXN0fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9neW1zLzpuYW1lJyBjb21wb25lbnQ9e0d5bU92ZXJ2aWV3fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9hZGQnIGNvbXBvbmVudD17UnRXaXphcmRDb250YWluZXJ9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2FjY291bnQnIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgPC9kaXY+KVxuXG5SdENvbnRlbnQucHJvcFR5cGVzID0ge1xuXHRsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBSdENvbnRlbnRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vUnRDb250ZW50LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgQ29sbGFwc2UsIE5hdmJhciwgTmF2YmFyVG9nZ2xlciwgTmF2YmFyQnJhbmQsIE5hdiwgTmF2RHJvcGRvd24sIERyb3Bkb3duSXRlbSwgRHJvcGRvd25Ub2dnbGUsIERyb3Bkb3duTWVudSwgTmF2TGluayB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCdcbmltcG9ydCB7TmF2TGluayBhcyBOYXZSb3V0ZXJMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQge3N0YXRlVG9nZ2xlfSBmcm9tICdkYXRhL3V0aWwnXG5cbmNsYXNzIFJ0SGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRkcm9wZG93bklzT3BlbjogZmFsc2Vcblx0fVxuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Z3ltczogUHJvcFR5cGVzLmFycmF5XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcbiAgICAgIDxOYXZiYXIgdG9nZ2xlYWJsZSBjb2xvcj1cInByaW1hcnlcIiBpbnZlcnNlPlxuICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL1wiPlxuICAgICAgICAgICAgPE5hdmJhckJyYW5kPlxuICAgICAgICAgICAgICBSb3V0ZXRyYWNrZXJcbiAgICAgICAgICAgIDwvTmF2YmFyQnJhbmQ+XG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIHJpZ2h0IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfS8+XG4gICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17IHRoaXMuc3RhdGUuaXNPcGVuIH0gbmF2YmFyPlxuICAgICAgICAgICAgPE5hdiBuYXZiYXI+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIkd5bXNcIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiIHRvZ2dsZT17dGhpcy50b2dnbGVEcm9wZG93bn0gaXNPcGVuPXt0aGlzLnN0YXRlLmRyb3Bkb3duSXNPcGVufT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgbmF2PlxuICAgICAgICAgICAgICAgICAgR3ltc1xuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBvbkNsaWNrPXt0aGlzLnRvZ2dsZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5neW1zID8gdGhpcy5wcm9wcy5neW1zLm1hcChneW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TmF2Um91dGVyTGluayBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGtleT17IGd5bS5faWQgfSB0bz17ICcvZ3ltcy8nICsgZ3ltLnVybCB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L05hdlJvdXRlckxpbms+XG4gICAgICAgICAgICAgICAgICAgICkpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIvPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgU2VwYXJhdGVkIGxpbmtcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvYWRkXCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rPlxuICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPE5hdiBuYXZiYXIgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2xvZ291dFwiPlxuICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9hY2NvdW50XCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rPlxuICAgICAgICAgICAgICAgIE15IEFjY291bnRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG5cdFx0KVxuXHR9XG5cblx0dG9nZ2xlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGVUb2dnbGUoJ2lzT3BlbicpKVxuXHR9XG5cblx0dG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZVRvZ2dsZSgnZHJvcGRvd25Jc09wZW4nKSlcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdGd5bXM6IHN0YXRlLmd5bXNcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShSdEhlYWRlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vUnRIZWFkZXIuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0VGVhbSB9IGZyb20gJ2RhdGEvYWN0aW9ucy90ZWFtJ1xuaW1wb3J0IHsgZ2V0R3ltcyB9IGZyb20gJ2RhdGEvYWN0aW9ucy9neW0nXG5cbmltcG9ydCBSdEhlYWRlciBmcm9tICcuL1J0SGVhZGVyJ1xuaW1wb3J0IFJ0Q29udGVudCBmcm9tICcuL1J0Q29udGVudCdcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkgeyBcblx0XHR0aGlzLnByb3BzLmdldFRlYW0oKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJ0SGVhZGVyIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufS8+XG4gICAgICAgICAgICAgICAgPFJ0Q29udGVudCBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuTWFpbi5wcm9wVHlwZXMgPSB7XG5cdGdldFRlYW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdGdldEd5bXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0dGVhbTogc3RhdGUudGVhbSxcblx0XHRneW1zOiBzdGF0ZS5neW1zLFxuXHRcdGxvY2F0aW9uOiBzdGF0ZS5yb3V0ZXIubG9jYXRpb25cblx0fVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuXHRyZXR1cm4ge1xuXHRcdGdldFRlYW06ICgpID0+IGRpc3BhdGNoKGdldFRlYW0oKSksXG5cdFx0Z2V0R3ltczogdGVhbSA9PiBkaXNwYXRjaChnZXRHeW1zKHRlYW0pKVxuXHR9XG59XG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoTWFpbilcbmV4cG9ydCBkZWZhdWx0IG1haW5Db250YWluZXJcblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuY2xhc3MgUnRTdGFjayBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdG1ha2VDaGFydC5hcHBseSh0aGlzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcgfX0gcmVmPXtlbCA9PiB0aGlzLmVsID0gZWx9PjwvZGl2PlxuXHRcdClcblx0fVxuXG5cbn1cblxuZnVuY3Rpb24gbWFrZUNoYXJ0KCkge1xuXHRpZiAoIXRoaXMucHJvcHMuZGF0YSkgcmV0dXJuXG5cblx0Y29uc3Qge2RhdGEsIHdpZHRoLCBoZWlnaHQgPSAnMTAwJ30gPSB0aGlzLnByb3BzXG5cblx0Y29uc3QgdG90YWwgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci52YWx1ZSwgMClcblxuXHRjb25zdCBjaGFydCA9IGQzXG5cdFx0LnNlbGVjdCh0aGlzLmVsKVxuXHRcdC5hcHBlbmQoJ3N2ZycpXG5cdFx0LmF0dHIoJ3ZpZXdCb3gnLCAnMCAwIDEwMCAxMDAnKVxuXHRcdC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuXHRcdC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG5cblx0Y29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcblx0XHQuZG9tYWluKFswLCB0b3RhbF0pXG5cdFx0LnJhbmdlKFswLCAxMDBdKVxuXG5cdGNvbnN0IHNlZ21lbnRzID0gY2hhcnQuc2VsZWN0QWxsKCdnJylcblx0XHQuZGF0YShkYXRhKVxuXHRcdC5lbnRlcigpXG5cdFx0LmFwcGVuZCgnZycpXG5cdFx0LmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdHJldHVybiAndHJhbnNsYXRlKCcgKyB4KGQpICsgJywgMCknXG5cdFx0fSlcblxuXHRzZWdtZW50cy5hcHBlbmQoJ3JlY3QnKVxuXHRcdC5hdHRyKCd3aWR0aCcsIGQgPT4geChkLnZhbHVlKSlcblx0XHQuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuXHRcdC5hdHRyKCd4JywgZCA9PiB4KGQudmFsdWUpKVxuXHRcdC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcblxufVxuXG5leHBvcnQgZGVmYXVsdCBSdFN0YWNrXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9SdFN0YWNrLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHtwYWxhdHRlfSBmcm9tICdydGNvbmZpZydcblxuY2xhc3MgUnRCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBtYWtlQ2hhcnQuYXBwbHkodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj17IChlbCkgPT4gdGhpcy5lbCA9IGVsIH0+PC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0QmFyXG5cbmZ1bmN0aW9uIG1ha2VDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGF0YSkgcmV0dXJuXG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB3aWR0aCA9IDk0XG4gICAgY29uc3QgaGVpZ2h0ID0gOTRcbiAgICBjb25zdCBiYXJXaWR0aCA9IHdpZHRoIC8gZGF0YS5sZW5ndGhcblxuICAgIGNvbnN0IHkgPSBkM1xuICAgICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFtcbiAgICAgICAgICAgIDAsIGQzLm1heChkYXRhKVxuICAgICAgICBdKVxuICAgICAgICAucmFuZ2UoWzAsIGhlaWdodF0pXG5cbiAgICBjb25zdCBjb2xvciA9IHBhbGF0dGVbdGhpcy5wcm9wcy5jb2xvcl0gfHwge3ByaW1hcnk6ICdibGFjaycsIHNlY29uZGFyeTogJ2JsYWNrJ31cblxuXG4gICAgY29uc3QgY29sb3JTY2FsZSA9IHRoaXMucHJvcHMuY29sb3IgP1xuICAgICAgICBkMy5zY2FsZUxpbmVhcihkMy5pbnRlcnBvbGF0ZUhjbClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcbiAgICAgICAgICAgIC5yYW5nZShbY29sb3IucHJpbWFyeSwgY29sb3Iuc2Vjb25kYXJ5XSkgOlxuICAgICAgICBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXG4gICAgY29uc3QgY2hhcnQgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMuZWwpXG4gICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJy0zIC0zIDEwMCAxMDAnKVxuICAgICAgICAuYXR0cigncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pbiBtZWV0JylcbiAgICAgICAgLmNsYXNzZWQoJ3cxMDAnLCB0cnVlKVxuXG4gICAgY29uc3QgYmFyID0gY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGkgKiBiYXJXaWR0aCArICcsIDApJ1xuICAgICAgICB9KVxuXG4gICAgYmFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5jbGFzc2VkKCdydC1iYXInLCB0cnVlKVxuICAgICAgICAuYXR0cignd2lkdGgnLCBiYXJXaWR0aCAtIDEpXG4gICAgICAgIC5hdHRyKCdyeCcsIDEpXG4gICAgICAgIC5hdHRyKCdyeScsIDEpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIChkKSA9PiArZFxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IDAuNClcbiAgICAgICAgLmF0dHIoJ3knLCBoZWlnaHQpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoaSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZGVsYXkoKCkgPT4gNDAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmVhc2UoZDMuZWFzZUV4cEluKVxuICAgICAgICAuYXR0cigneScsIChkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0IC0geShkKVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IHkoZCkpXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgZDN0aXAgZnJvbSAnZDMtdGlwJ1xuaW1wb3J0IHtwYWxhdHRlfSBmcm9tICdydGNvbmZpZydcbmQzLnRpcCA9IGQzdGlwXG5cbmNsYXNzIFJ0QmlnQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIGdvYWw6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jaGFydCA9IGQzLnNlbGVjdCh0aGlzLmVsKVxuICAgICAgICB0aGlzLm1ha2VDaGFydCgpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy50eXBlICE9PSB0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKClcbiAgICAgICAgICAgIHRoaXMubWFrZUNoYXJ0KG5leHRQcm9wcy5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0UHJvcHMuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDaGFydChuZXh0UHJvcHMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFByb3BzLmNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiLTUgLTUgNTAwIDMwMFwiXG4gICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWluIG1lZXRcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIncxMDAgY2hhcnRcIlxuICAgICAgICAgICAgICAgICAgIHJlZj17IChlbCkgPT4gdGhpcy5lbCA9IGVsIH0+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFydCA9IChkYXRhKSA9PiB7XG4gICAgICAgIHZhciBzdmcgPSBkMy5zZWxlY3QodGhpcy5lbClcblxuICAgICAgICAvLyBjYWxjdWxhdGUgbmV3IGhlaWdodFxuICAgICAgICB0aGlzLnkgPSBkM1xuICAgICAgICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5kb21haW4oW1xuICAgICAgICAgICAgICAgIDAsIGQzLm1heChkYXRhLCAoZCkgPT4gZC5jb3VudClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHRoaXMuaGVpZ2h0XSlcblxuICAgICAgICAvLyBNYWtlIHRoZSBjaGFuZ2VzXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJy5ydC1iYXInKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKCkgLy8gY2hhbmdlIHRoZSBsaW5lXG4gICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAtIHRoaXMueShkLmNvdW50KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4gdGhpcy55KGQuY291bnQpICsgNilcblxuICAgICAgICBzdmcuc2VsZWN0QWxsKCcucnQtbWFya2VyJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZ3JhZGUpXG4gICAgfVxuXG4gICAgbWFrZUNoYXJ0ID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRhdGEpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgZGF0YSA9IGRhdGEgfHwgdGhpcy5wcm9wcy5kYXRhXG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDQ5MFxuICAgICAgICB0aGlzLmhlaWdodCA9IDI4NVxuXG4gICAgICAgIGNvbnN0IGNvbG9yID0gcGFsYXR0ZVt0aGlzLnByb3BzLmNvbG9yXSB8fCB7cHJpbWFyeTogJ2JsYWNrJywgc2Vjb25kYXJ5OiAnYmxhY2snfVxuXG5cbiAgICAgICAgY29uc3QgY29sb3JTY2FsZSA9IHRoaXMucHJvcHMuY29sb3IgP1xuICAgICAgICBkMy5zY2FsZUxpbmVhcihkMy5pbnRlcnBvbGF0ZUhjbClcbiAgICAgICAgICAgIC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcbiAgICAgICAgICAgIC5yYW5nZShbY29sb3IucHJpbWFyeSwgY29sb3Iuc2Vjb25kYXJ5XSkgOlxuICAgICAgICAgICAgZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdylcbiAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cblxuICAgICAgICBjb25zdCBiYXJXaWR0aCA9IHRoaXMud2lkdGggLyBkYXRhLmxlbmd0aFxuXG5cbiAgICAgICAgdGhpcy55ID0gZDNcbiAgICAgICAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAuZG9tYWluKFtcbiAgICAgICAgICAgICAgICAwLCBkMy5tYXgoZGF0YSwgKGQpID0+IGQuY291bnQpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB0aGlzLmhlaWdodF0pXG5cbiAgICAgICAgY29uc3QgZm9udFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLmRvbWFpbihbMzIwLCA1MDBdKSAvLyBleHBlY3RlZCBsaW1pdHMgb2YgU1ZHIHdpZHRoXG4gICAgICAgICAgICAucmFuZ2UoWzMwLCAxNV0pXG4gICAgICAgICAgICAuY2xhbXAodHJ1ZSlcblxuICAgICAgICBjb25zdCBiYXIgPSB0aGlzLmNoYXJ0XG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYmFyLWdyb3VwJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGkgKiBiYXJXaWR0aCArICcsIDApJ1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB2YXIgdGlwID0gZDMudGlwKClcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdkMy10aXAnKVxuICAgICAgICAgICAgLm9mZnNldChbLTEwLCAwXSlcbiAgICAgICAgICAgIC5odG1sKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxzdHJvbmc+JyArIGQuZ3JhZGUgKyAnOjwvc3Ryb25nPiA8c3BhbiBzdHlsZT1cXCdjb2xvcjojZmYwMDQ0XFwnPicgKyBkLmNvdW50ICsgJzwvc3Bhbj4nXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY2hhcnQuY2FsbCh0aXApXG5cbiAgICAgICAgYmFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgncnQtYmFyJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGJhcldpZHRoIC0gNSlcbiAgICAgICAgICAgIC5hdHRyKCdyeCcsIDMpXG4gICAgICAgICAgICAuYXR0cigncnknLCAzKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDYpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsIChkKSA9PiArZC5jb3VudCA/IDEgOiAwLjQpXG4gICAgICAgICAgICAuYXR0cigneScsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoaSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIHRpcC5zaG93KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIHRpcC5oaWRlKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmRlbGF5KCgpID0+IDQwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgICAgLmVhc2UoZDMuZWFzZUV4cEluKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAtIHRoaXMueShkLmNvdW50KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4gdGhpcy55KGQuY291bnQpICsgNilcblxuICAgICAgICBiYXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdydC1tYXJrZXInLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCBiYXJXaWR0aCAvIDIgKyAzKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAtMjgwKVxuICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5ncmFkZSlcbiAgICAgICAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnMTRweCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxuXG5cblxuXG4gICAgICAgIGNvbnN0IHJlc2l6ZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBmb250U2NhbGUodGhpcy5jaGFydC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpXG4gICAgICAgICAgICB2YXIgdGV4dCA9IGQzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICB0ZXh0LmF0dHIoJ2ZvbnQtc2l6ZScsIHNjYWxlICsgJ3B4JylcbiAgICAgICAgICAgIGlmIChzY2FsZSA+IDE4KSB7XG4gICAgICAgICAgICAgICAgdGV4dC5hdHRyKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGV4dC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2l6ZWQoKVxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSByZXNpemVkLmJpbmQodGhpcylcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRCaWdCYXJcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJpZ0Jhci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuY2xhc3MgUnRQaWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBtYWtlQ2hhcnQuYXBwbHkodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4J319IHJlZj17IChlbCkgPT4gdGhpcy5lbCA9IGVsIH0+PC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0UGllXG5cbmZ1bmN0aW9uIG1ha2VDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGF0YSlcbiAgICAgICAgcmV0dXJuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YVxuXG4gICAgY29uc3Qgd2lkdGggPSA5NFxuICAgIGNvbnN0IGhlaWdodCA9IDk0XG4gICAgY29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGRhdGEubGVuZ3RoXG5cbiAgICBjb25zdCBjaGFydCA9IGQzXG4gICAgICAgIC5zZWxlY3QodGhpcy5lbClcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnLTMgLTMgMTAwIDEwMCcpXG4gICAgICAgIC5hdHRyKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWluIG1lZXQnKVxuICAgICAgICAuY2xhc3NlZCgndzEwMCcsIHRydWUpXG5cblxuICAgIHZhciByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIsXG4gICAgICAgIGcgPSBjaGFydC5hcHBlbmQoJ2cnKS5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB3aWR0aCAvIDIgKyAnLCcgKyBoZWlnaHQgLyAyICsgJyknKVxuXG4gICAgdmFyIGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKFsnIzk4YWJjNScsICcjOGE4OWE2JywgJyM3YjY4ODgnLCAnIzZiNDg2YicsICcjYTA1ZDU2JywgJyNkMDc0M2MnLCAnI2ZmOGMwMCddKVxuXG4gICAgdmFyIHBpZSA9IGQzLnBpZSgpXG4gICAgLnNvcnQobnVsbClcbiAgICAudmFsdWUoZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZFxuICAgIH0pXG4gICAgY29uc3QgcmFpbmJvdyA9IGQzXG4gICAgICAgIC5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVSYWluYm93KVxuICAgICAgICAuZG9tYWluKFswLCBkYXRhLmxlbmd0aF0pXG5cbiAgICB2YXIgcGF0aCA9IGQzLmFyYygpXG4gICAgLm91dGVyUmFkaXVzKHJhZGl1cyAtIDEwKVxuICAgIC5pbm5lclJhZGl1cygzMClcblxuICAgIHZhciBob3ZlclBhdGggPSBkMy5hcmMoKVxuICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgLSA4KVxuICAgIC5pbm5lclJhZGl1cygzMClcblxuICAgIHZhciBsYWJlbCA9IGQzLmFyYygpXG4gICAgLm91dGVyUmFkaXVzKHJhZGl1cyAtIDQwKVxuICAgIC5pbm5lclJhZGl1cyhyYWRpdXMgLSA0MClcblxuXG4gICAgdmFyIGFyYyA9IGcuc2VsZWN0QWxsKCcuYXJjJylcbiAgICAuZGF0YShwaWUoZGF0YSkpXG4gICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAuYXR0cignY2xhc3MnLCAnYXJjJylcblxuICAgIGFyYy5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAuYXR0cignZmlsbCcsIGQgPT4gcmFpbmJvdyhkLmRhdGEpKVxuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgaG92ZXJQYXRoKVxuICAgIH0pXG4gICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICB9KVxuXG4gICAgYXJjLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGxhYmVsLmNlbnRyb2lkKGQpICsgJyknXG4gICAgfSlcbiAgICAuYXR0cignZHknLCAnMC4zNWVtJylcbiAgICAudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEuYWdlXG4gICAgfSlcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydFBpZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFd6Q29udGFpbmVyID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1iaWctY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtd2luZ1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1pbm5lclwiIHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkeyhwcm9wcy5zdGVwKSAqIC0xNi42fSUpYH19PlxuICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCBkaXYgY2xhc3NOYW1lPVwicmlnaHQtd2luZ1wiPiA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgV3pDb250YWluZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6Q29udGFpbmVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjb2xvciBmcm9tICdzZXJ2aWNlcy9jb2xvclNlcnZpY2UnXG5cbmNvbnN0IFd6SXRlbSA9IChwcm9wcykgPT4ge1xuICAgIGZ1bmN0aW9uIF9jbGljaygpIHtcbiAgICAgICAgcHJvcHMudXBkYXRlKHByb3BzLnR5cGUscHJvcHMuaXRlbSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e19jbGlja30gY2xhc3NOYW1lPXtzZXRDbGFzcyhwcm9wcyl9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBwcm9wcy5pdGVtLmNvbG9yPyBwcm9wcy5pdGVtLmNvbG9yIDogJ3doaXRlJywgY29sb3I6IHByb3BzLml0ZW0uY29sb3I/IGNvbG9yLnRleHRDb2xvcihwcm9wcy5pdGVtLmNvbG9yKSA6ICdpbmhlcml0J319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGdyaWQtbGFiZWxcIiBvbkNsaWNrPXtfY2xpY2t9Pntwcm9wcy5pdGVtLnZhbHVlfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcblxufVxuXG5Xekl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXRlbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKHByb3BzKSB7XG4gICAgcmV0dXJuICd3ei1kb3QgJyArIChwcm9wcy5zZWxlY3RlZD8gJ2l0ZW0tc2VsZWN0ZWQnIDogJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6SXRlbVxuICAgICAgICAgICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBXekxpc3RJdGVtID0gKHByb3BzKSA9PiB7XG4gICAgZnVuY3Rpb24gX2NsaWNrKCkge1xuICAgICAgICBwcm9wcy51cGRhdGUocHJvcHMudHlwZSwgcHJvcHMuaXRlbSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2V0Q2xhc3MocHJvcHMpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBsaXN0LWxhYmVsXCIgb25DbGljaz17X2NsaWNrfT57cHJvcHMuaXRlbS52YWx1ZSB8fCBwcm9wcy5pdGVtfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgICl9XG5cbmZ1bmN0aW9uIHNldENsYXNzKHByb3BzKSB7XG4gICAgcmV0dXJuICd3ei1saXN0LWl0ZW0gJyArIChwcm9wcy5zZWxlY3RlZD8gJ2l0ZW0tc2VsZWN0ZWQnIDogJycpXG59XG5cbld6TGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGl0ZW06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6TGlzdEl0ZW1cbiAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pMaXN0SXRlbS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNsYXNzIFd6UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5uZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5wcmV2LmJpbmQodGhpcylcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcDEwYiBoaWRkZW4teHMganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgb25DbGljaz17dGhpcy5wcmV2fT5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgb25DbGljaz17dGhpcy5uZXh0IH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXh0KDEpXG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcmV2KC0xKVxuICAgIH1cbn1cblxuV3pQYWdlLnByb3BUeXBlcyA9IHtcbiAgICBwcmV2OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXh0OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBXelBhZ2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6UGFnZS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge0ZsZXhSb3csIFJ0U3dhdGNofSBmcm9tICdjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHBvc3RSb3V0ZSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IHtzbGVlcCwgcmVuZGVySWZ9IGZyb20gJ3J0dXRpbCdcblxuXG5jbGFzcyBXelByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge31cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1lZFJvdXRlID0gdHJhbnNmb3JtUm91dGUodGhpcy5wcm9wcy5yb3V0ZSlcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtZWRSb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy50cmFuc2Zvcm1lZFJvdXRlPyAoXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid3otbGlzdCBwMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBUeXBlOiB7dGhpcy5wcm9wcy5yb3V0ZS50eXBlfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3otbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIENvbG9yOiBcbiAgICAgICAgICAgICAgICAgICAgICA8UnRTd2F0Y2ggY29sb3I9eyB0aGlzLnByb3BzLnJvdXRlLmNvbG9yIHx8IGZhbHNlIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBHcmFkZToge3RoaXMucHJvcHMucm91dGUuZ3JhZGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3ei1saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgR3ltOiB7dGhpcy5wcm9wcy5yb3V0ZS5neW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBXYWxsOiB7dGhpcy5wcm9wcy5yb3V0ZS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBUYWdzOiB7dGhpcy5wcm9wcy5yb3V0ZS50YWdzLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDxGbGV4Um93PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmVkaXR9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydidG4gYnRuLW91dGxpbmUtcHJpbWFyeScgKyByZW5kZXJJZih0aGlzLnN0YXRlLnBlbmRpbmcpKCcgYnRuLW91dGxpbmUtcGVuZGluZycpfSBvbkNsaWNrPXt0aGlzLnBvc3RSb3V0ZX0+QWRkIFJvdXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBwb3N0Um91dGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BlbmRpbmc6IHRydWV9KVxuICAgICAgICB0aGlzLnByb3BzLnBvc3RSb3V0ZSh0aGlzLnRyYW5zZm9ybWVkUm91dGUpXG4gICAgICAgICAgICAudGhlbihzbGVlcCgxMDAwKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZWRpdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5tb3ZlKC0xKVxuICAgIH1cbn1cblxuV3pQcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgICByb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBncmFkZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcmVzZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvc3RSb3V0ZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGUob2JqKSB7XG4gICAgaWYgKG9iai5neW0gJiYgb2JqLmdyYWRlICYmIG9iai5jb2xvciAmJiBvYmoudGFncyAmJiBvYmoubG9jYXRpb24pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBvYmoudHlwZSxcbiAgICAgICAgICAgIGNvbG9yOiBvYmouY29sb3IudmFsdWUsXG4gICAgICAgICAgICBncmFkZTogb2JqLmdyYWRlLl9pZCxcbiAgICAgICAgICAgIGd5bTogb2JqLmd5bS5faWQsXG4gICAgICAgICAgICB3YWxsOiBvYmoubG9jYXRpb24sXG4gICAgICAgICAgICB0YWdzOiBvYmoudGFncy5qb2luKCcsICcpLFxuICAgICAgICAgICAgc2V0X29uOiBEYXRlLm5vdygpXG4gICAgICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZTogc3RhdGUucm91dGUsXG4gICAgICAgIGdyYWRlczogc3RhdGUudGVhbS5ncmFkZXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdFJvdXRlOiAocm91dGUpID0+IGRpc3BhdGNoKHBvc3RSb3V0ZShyb3V0ZSkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoV3pQcmV2aWV3KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pQcmV2aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXelBhZ2UgZnJvbSAnLi93elBhZ2UnXG5pbXBvcnQge1J0Q2FyZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vJ1xuXG5jb25zdCBXelN0ZXAgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gcHJvcHMucmV2aWV3PyAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzXCI+PC9kaXY+XG4gICAgICA8UnRDYXJkIHRpdGxlPXtwcm9wcy5uYW1lfT57cHJvcHMuY2hpbGRyZW59PC9SdENhcmQ+XG4gICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaDMgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgIHsgcHJvcHMubmFtZSB9OjwvZGl2PlxuICAgICAgPFd6UGFnZSBuZXh0PXtwcm9wcy5uZXh0fSBwcmV2PXtwcm9wcy5wcmV2fS8+XG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbld6U3RlcC5wcm9wVHlwZXMgPSB7XG4gICAgcmV2aWV3OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBuZXh0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwcmV2OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBXelN0ZXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6U3RlcC5qc3giLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJ0V2l6YXJkIGZyb20gJy4vcnRXaXphcmQnXG5pbXBvcnQge3VwZGF0ZVJvdXRlLCB1cGRhdGVUYWdzLCByZXNldFdpemFyZH0gZnJvbSAnZGF0YS9hY3Rpb25zL3dpemFyZCdcbmltcG9ydCB7Z2V0VGVhbX0gZnJvbSAnZGF0YS9hY3Rpb25zL3RlYW0nXG5pbXBvcnQge2dldEd5bXN9IGZyb20gJ2RhdGEvYWN0aW9ucy9neW0nXG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlOiBzdGF0ZS5yb3V0ZSxcbiAgICAgICAgdGVhbTogc3RhdGUudGVhbSxcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGU6IChmaWVsZCwgdmFsdWUpID0+IGRpc3BhdGNoKHVwZGF0ZVJvdXRlKGZpZWxkLCB2YWx1ZSkpLFxuICAgICAgICB1cGRhdGVUYWdzOiAodmFsdWUpID0+IGRpc3BhdGNoKHVwZGF0ZVRhZ3ModmFsdWUpKSxcbiAgICAgICAgcmVzZXRGb3JtOiAoKSA9PiBkaXNwYXRjaChyZXNldFdpemFyZCgpKSxcbiAgICAgICAgZ2V0VGVhbTogKCkgPT4gZGlzcGF0Y2goZ2V0VGVhbSgpKSxcbiAgICAgICAgZ2V0R3ltczogKCkgPT4gZGlzcGF0Y2goZ2V0R3ltcygpKVxuICAgIH1cbn1cblxuY29uc3QgUnRXaXphcmRDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2gpKFJ0V2l6YXJkKVxuXG5leHBvcnQgZGVmYXVsdCBSdFdpemFyZENvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXekdyaWQgZnJvbSAnLi93ekdyaWQnXG5pbXBvcnQgV3pDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL3d6Q29udGFpbmVyJ1xuaW1wb3J0IFd6U3RlcCBmcm9tICcuL2NvbXBvbmVudHMvd3pTdGVwJ1xuaW1wb3J0IFd6UHJldmlldyBmcm9tICcuL2NvbXBvbmVudHMvd3pQcmV2aWV3J1xuaW1wb3J0IHtTd2lwZUNvbnRhaW5lcn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24nXG5cbmNsYXNzIFJ0V2l6YXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RlcDogMCxcbiAgICAgICAgICAgIGd5bUZpbHRlcjogdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsaWNrcyA9IDBcbiAgICAgICAgdGhpcy5jbGlja2VkID0gJ2d5bSdcbiAgICAgICAgdGhpcy5zdGVwcyA9IFsnZ3ltJywgJ2NvbG9yJywgJ2dyYWRlJywgJ2xvY2F0aW9uJywgJ3RhZ3MnXVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMucmVzZXRGb3JtKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3dpcGVDb250YWluZXIgb25Td2lwZT17dGhpcy5vblN3aXBlfT5cbiAgICAgICAgICAgICAgICA8V3pDb250YWluZXIgc3RlcD17dGhpcy5zdGF0ZS5zdGVwfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RlcENvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3RlcCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXelN0ZXAga2V5PXtzdGVwLm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17c3RlcC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldj17dGhpcy5tb3ZlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ9e3RoaXMubW92ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZD17c3RlcC5lbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXc9e3N0ZXAucmV2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1d6U3RlcD4pXG4gICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgIDwvV3pDb250YWluZXI+XG4gICAgICAgICAgICA8L1N3aXBlQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgb25Td2lwZSA9IChkaXIpID0+IHtcbiAgICAgICAgaWYoIFxuICAgICAgICAgICAgLy8gbGFzdCBzdGVwXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS5zdGVwICE9PSA1ICYmIGRpciA8IDApIHx8ICEodGhpcy5zdGVwc1t0aGlzLnN0YXRlLnN0ZXBdIGluIHRoaXMucHJvcHMucm91dGUpKSByZXR1cm5cbiAgICAgICAgXG4gICAgICAgIGxldCB0b1N0ZXAgPSB0aGlzLnN0YXRlLnN0ZXAgKyAoZGlyID4gMD8gLTEgOiAxKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IHRvU3RlcH0pXG4gICAgfVxuXG4gICAgbW92ZSA9IChkaXIsIGZpZWxkKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZS5zdGVwXG4gICAgICAgIC8vIGNhbGxlZCBieSB1cGRhdGVcbiAgICAgICAgaWYoZmllbGQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtzdGVwOiBjdXJyZW50ICsgZGlyfSlcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UndmUgbWFkZSBpdCBwYXN0IHRoaXMgc3RlcCBhbHJlYWR5XG4gICAgICAgIGlmKGN1cnJlbnQgKyBkaXIgPCAwIHx8ICEodGhpcy5zdGVwc1t0aGlzLnN0YXRlLnN0ZXBdIGluIHRoaXMucHJvcHMucm91dGUpICYmIGRpciA+IDApIHJldHVyblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiBjdXJyZW50ICsgZGlyfSlcbiAgICB9XG5cbiAgICB1cGRhdGUgPSAoZmllbGQsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGhhbmRsZSBkb3VibGUgY2xpY2tcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tzID4gMCAmJiB0aGlzLnByb3BzLnJvdXRlW2ZpZWxkXSA9PT0gdmFsdWUpIHJldHVybiB0aGlzLm1vdmUoMSwgZmllbGQpXG5cbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGUoZmllbGQsIHZhbHVlKVxuICAgICAgICBsZXQgbmV4dCA9IHRoaXMuc3RhdGUuc3RlcCArIDFcblxuICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gaWYgd2UndmUgbWFudWFsbHkgZ29uZSBiYWNrd2FyZHMsIGRvbid0IG1vdmVcbiAgICAgICAgICAgICghdGhpcy5wcm9wcy5yb3V0ZVt0aGlzLnN0ZXBzW25leHRdXSAmJiBmaWVsZCAhPT0gJ3R5cGUnKVxuICAgICAgICAgICAgLy8gb3IgdGhlIG5leHQgc3RlcCBpcyBtdWx0aXBsZSBjaG9pY2VcbiAgICAgICAgICAgIHx8IHRoaXMuc3RlcHNbbmV4dF0gPT09ICd0YWdzJ1xuICAgICAgICApIHJldHVybiB0aGlzLm1vdmUoMSwgZmllbGQpXG5cbiAgICAgICAgLy8gc3RvcmUgY2xpY2sgZm9yIGRvdWJsZSBjbGlja1xuICAgICAgICB0aGlzLmNsaWNrcysrXG4gICAgICAgIHRoaXMuY2xpY2tlZCA9IGZpZWxkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbGlja3MtLSwgNTAwKVxuICAgIH1cblxuICAgIHVwZGF0ZVRhZ3MgPSAodGFncywgdGFnKSA9PiB7XG4gICAgICAgIGxldCB7dmFsdWV9ID0gdGFnXG4gICAgICAgIFxuICAgICAgICAvLyBoYW5kbGUgZG91YmxlIGNsaWNrXG4gICAgICAgIGlmICh0aGlzLmNsaWNrcyA+IDAgJiYgdGhpcy5wcm9wcy5yb3V0ZS50YWdzLmluZGV4T2YodmFsdWUpID49MCApIHJldHVybiB0aGlzLm1vdmUoMSwgdHJ1ZSlcblxuICAgICAgICAvLyBpZiB3ZSd2ZSBtYW51YWxseSBnb25lIGJhY2t3YXJkcywgZG9uJ3QgbW92ZVxuICAgICAgICAvLyBpZiAoIXRoaXMucHJvcHMucm91dGVbdGhpcy5zdGVwc1t0aGlzLnN0YXRlLnN0ZXAgKyAxXV0pIHJldHVybiB0aGlzLm1vdmUoMSwgZmllbGQpXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlVGFncyh2YWx1ZSlcblxuICAgICAgICAvLyBzdG9yZSBjbGljayBmb3IgZG91YmxlIGNsaWNrXG4gICAgICAgIHRoaXMuY2xpY2tzKytcbiAgICAgICAgdGhpcy5jbGlja2VkID0gdmFsdWVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsaWNrcy0tLCA1MDApXG4gICAgfVxuXG4gICAgZmlsdGVyR3ltcyhneW1zLCBmaWx0ZXIpIHtcbiAgICAgICAgaWYoIWZpbHRlcikgcmV0dXJuIFtdXG4gICAgICAgIHJldHVybiBneW1zLmZpbHRlcihneW0gPT4gZ3ltLndhbGxzW2ZpbHRlcl0ubGVuZ3RoKVxuICAgIH1cblxuICAgIHNldEZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoJ3R5cGUnLCBmaWx0ZXIpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2d5bUZpbHRlcjogZmlsdGVyfSlcbiAgICB9XG5cbiAgICByZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucmVzZXRGb3JtKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogMX0pXG4gICAgfVxuXG4gICAgc3RlcENvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2d5bScsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAnd3otbGlzdC1pdGVtICcgKyAodGhpcy5zdGF0ZS5neW1GaWx0ZXIgPT09ICdib3VsZGVyJyA/ICdpdGVtLXNlbGVjdGVkJyA6ICcnICl9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0RmlsdGVyKCdib3VsZGVyJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgbGlzdC1sYWJlbFwiPkJvdWxkZXJpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ3d6LWxpc3QtaXRlbSAnICsgKHRoaXMuc3RhdGUuZ3ltRmlsdGVyID09PSAncm9wZScgPyAnaXRlbS1zZWxlY3RlZCcgOiAnJyApfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEZpbHRlcigncm9wZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd6LWxhYmVsIGxpc3QtbGFiZWxcIj5Sb3BlczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMuZmlsdGVyR3ltcyh0aGlzLnByb3BzLmd5bXMsIHRoaXMuc3RhdGUuZ3ltRmlsdGVyKX0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnZ3ltJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0gbGlzdC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2xvcicsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnRlYW0uY29sb3JzfSByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gc2VsZWN0b3I9eydjb2xvcid9IHVwZGF0ZT17dGhpcy51cGRhdGV9Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2dyYWRlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMucm91dGUudHlwZT8gdGhpcy5wcm9wcy50ZWFtLmdyYWRlc1t0aGlzLnByb3BzLnJvdXRlLnR5cGVdIDogdGhpcy5wcm9wcy50ZWFtLmdyYWRlcy5ib3VsZGVyfSByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gc2VsZWN0b3I9eydncmFkZSd9IHVwZGF0ZT17dGhpcy51cGRhdGV9Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMucm91dGUuZ3ltICYmIHRoaXMucHJvcHMucm91dGUuZ3ltLndhbGxzW3RoaXMuc3RhdGUuZ3ltRmlsdGVyXSB8fCBbXX0gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsnbG9jYXRpb24nfSB1cGRhdGU9e3RoaXMudXBkYXRlfSBsaXN0Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RhZ3MnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5wcm9wcy50ZWFtLnRhZ3N9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J3RhZ3MnfSB1cGRhdGU9e3RoaXMudXBkYXRlVGFnc30gbGlzdC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgIGVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXZpZXc6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pQcmV2aWV3IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBtb3ZlPXt0aGlzLm1vdmV9IHJlc2V0PXt0aGlzLnJlc2V0Rm9ybX0vPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbn1cblxuUnRXaXphcmQucHJvcFR5cGVzID0ge1xuICAgIHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGd5bXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRlYW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcmVzZXRGb3JtOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBSdFdpemFyZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXekxpc3RJdGVtIGZyb20gJy4vY29tcG9uZW50cy93ekxpc3RJdGVtJ1xuaW1wb3J0IFd6SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvd3pJdGVtJ1xuXG5jb25zdCBXekdyaWQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBFbCA9IHByb3BzLmxpc3QgPyBXekxpc3RJdGVtIDogV3pJdGVtXG5cbiAgICBjb25zdCBpc1NlbGVjdGVkID0gKGl0ZW0pID0+IHtcbiAgICAgICAgaWYocHJvcHMuc2VsZWN0b3IgPT09ICd0YWdzJykgcmV0dXJuIHByb3BzLnJvdXRlLnRhZ3MuaW5kZXhPZihpdGVtLnZhbHVlKSA+IC0xXG4gICAgICAgIHJldHVybiAgcHJvcHMucm91dGVbcHJvcHMuc2VsZWN0b3JdID09PSBpdGVtIFxuICAgIH1cblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ3ei1ncmlkXCI+XG4gICAgICAgICAgICAgIHsgcHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RWwga2V5PXsgaXRlbS5faWQgfHwgaXRlbX0gaXRlbT17IGl0ZW0gfSB0eXBlPXsgcHJvcHMuc2VsZWN0b3IgfSB1cGRhdGU9eyBwcm9wcy51cGRhdGUgfSBzZWxlY3RlZD17aXNTZWxlY3RlZChpdGVtKX0gLz5cbiAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuXG5XekdyaWQucHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbGlzdDogUHJvcFR5cGVzLm9uZU9mKFt1bmRlZmluZWQsIHRydWVdKSxcbiAgICB0YWdzOiBQcm9wVHlwZXMub25lT2YoW3VuZGVmaW5lZCwgdHJ1ZV0pLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6R3JpZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3d6R3JpZC5qc3giLCJleHBvcnQgZnVuY3Rpb24gcmVjZWl2ZUd5bXMoZ3ltcykge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdSRUNFSVZFX0dZTVMnLFxuXHRcdHBheWxvYWQ6IGd5bXNcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3ltcyh0ZWFtKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PmZldGNoZXIuZ2V0KCdneW1zL3RlYW0vJyt0ZWFtLl9pZCkudGhlbihneW1zID0+IHtcblx0XHRkaXNwYXRjaChyZWNlaXZlR3ltcyhneW1zKSlcblx0XHRyZXR1cm4gZ3ltc1xuXHR9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvZ3ltLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdXRlKHJvdXRlKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ0FERF9ST1VURScsXG5cdFx0cGF5bG9hZDogcm91dGVcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVJvdXRlcyhyb3V0ZXMpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVDRUlWRV9ST1VURVMnLFxuXHRcdHBheWxvYWQ6IHJvdXRlc1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb3V0ZShyb3V0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdVUERBVEVfUk9VVEUnLFxuXHRcdHBheWxvYWQ6IHJvdXRlXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvdXRlcyhhcnIpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVNT1ZFX1JPVVRFUycsXG5cdFx0cGF5bG9hZDogYXJyXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlc0J5R3ltKGlkKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiBmZXRjaGVyLmdldChgcm91dGUvZ3ltLyR7aWR9YCwge1xuXHRcdGd5bTogaWRcblx0fSkudGhlbihyb3V0ZXMgPT4ge1xuXHRcdGRpc3BhdGNoKHJlY2VpdmVSb3V0ZXMocm91dGVzKSlcbiAgICAgICAgICAgIC8vcmV0dXJuIHJvdXRlc1xuXHR9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdFJvdXRlKHJvdXRlKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiBmZXRjaGVyLmNyZWF0ZSgncm91dGUnLCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG5cdGRpc3BhdGNoKGFkZFJvdXRlKHJlcykpXG5cdHJldHVybiByZXNcbn0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXRSb3V0ZShyb3V0ZSkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4gZmV0Y2hlci51cGRhdGUoYHJvdXRlLyR7cm91dGUuX2lkfWAsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcblx0ZGlzcGF0Y2godXBkYXRlUm91dGUocmVzKSlcblx0cmV0dXJuIHJlc1xufSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3JvdXRlLmpzIiwiaW1wb3J0IHsgcmVjZWl2ZUd5bXMgfSBmcm9tICcuL2d5bSdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUZWFtKHRlYW0pIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnUkVDRUlWRV9URUFNJyxcblx0XHRwYXlsb2FkOiB0ZWFtXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlYW0oKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBmZXRjaGVyKSA9PiB7XG5cdFx0bGV0IHN0YXRlID0gZ2V0U3RhdGUoKVxuXHRcdGlmIChzdGF0ZS50ZWFtLmd5bXMpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmZXRjaGVyLmdldCgndGVhbXMvY3VycmVudCcpXG5cdFx0XHRcdC50aGVuKHRlYW0gPT4ge1xuXHRcdFx0XHRcdGRpc3BhdGNoKHJlY2VpdmVUZWFtKHRlYW0pKVxuXHRcdFx0XHRcdGRpc3BhdGNoKHJlY2VpdmVHeW1zKHRlYW0uZ3ltcykpXG5cdFx0XHRcdFx0cmV0dXJuIHRlYW1cblx0XHRcdFx0fSlcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3RlYW0uanMiLCJleHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVVzZXIodXNlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdSRUNFSVZFX1VTRVInLFxuICAgICAgICBwYXlsb2FkOiB1c2VyXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSBnZXRTdGF0ZSgpXG4gICAgICAgIGlmIChzdGF0ZS51c2VyLl9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZS51c2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoZXIuZ2V0KCd1c2Vycy9jdXJyZW50JylcbiAgICAgICAgICAgICAgICAudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVzZXIodXNlcikpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3VzZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gdXBkYXRlUm91dGUoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9ORVdfUk9VVEUnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYWdzKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9UQUdTJyxcbiAgICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFdpemFyZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnUkVTRVRfV0laQVJEJ1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvd2l6YXJkLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0gW11cblxuY29uc3QgdHJhbnNmb3JtR3ltcyA9IChneW1zKSA9PiB7XG4gICAgZ3ltcy5mb3JFYWNoKGd5bSA9PiB7XG4gICAgICAgIGd5bS52YWx1ZSA9IGd5bS5uYW1lXG4gICAgfSlcbiAgICByZXR1cm4gZ3ltc1xufVxuXG5jb25zdCBneW0gPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX0dZTVMnOlxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtR3ltcyhhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdHRVRfR1lNUyc6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ3ltICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9neW0uanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5pbXBvcnQgd2l6YXJkIGZyb20gJy4vd2l6YXJkJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IHJvdXRlIGZyb20gJy4vcm91dGUnXG5pbXBvcnQgdGVhbSBmcm9tICcuL3RlYW0nXG5pbXBvcnQgZ3ltIGZyb20gJy4vZ3ltJ1xuXG5jb25zdCBtYWluUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcm91dGU6IHdpemFyZCwgXG4gICAgcm91dGVzOiByb3V0ZSxcbiAgICB0ZWFtOiB0ZWFtLFxuICAgIGd5bXM6IGd5bSxcbiAgICB1c2VyLFxuICAgIHJvdXRlcjogcm91dGVyUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgbWFpblJlZHVjZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuY29uc3QgaW5pdGlhbFN0YXRlID0gbmV3IEltbXV0YWJsZS5NYXAoKVxuXG5mdW5jdGlvbiByb3V0ZShzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9ST1VURSc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zZXQoYWN0aW9uLnBheWxvYWQuX2lkLCBhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdSRU1PVkVfUk9VVEVTJzoge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSBuZXcgSW1tdXRhYmxlLlNldChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlck5vdCgodikgPT5yb3V0ZXMuaGFzKHYuX2lkKSlcbiAgICB9XG4gICAgY2FzZSAnUkVDRUlWRV9ST1VURVMnOlxuICAgICAgICByZXR1cm4gc3RhdGUuY29uY2F0KGFjdGlvbi5wYXlsb2FkLm1hcChyb3V0ZSA9PiBbcm91dGUuX2lkLHJvdXRlXSkpXG4gICAgY2FzZSAnVVBEQVRFX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChhY3Rpb24ucGF5bG9hZC5faWQsIGFjdGlvbi5wYXlsb2FkKVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9yb3V0ZS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjb2xvcnM6IFtdLFxuICAgIHRhZ3M6IFtdLFxuICAgIGdyYWRlczoge1xuICAgICAgICBib3VsZGVyOiBbXSxcbiAgICAgICAgcm9wZTogW11cbiAgICB9XG59XG5cbmNvbnN0IHRyYW5zZm9ybVRlYW0gPSAodGVhbSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRlYW0sXG4gICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgYm91bGRlcjogdGVhbS5ncmFkZXMuYm91bGRlci5tYXAoKGdyYWRlLCBpbmRleCkgPT4ge3JldHVybiB7X2lkOiBpbmRleCwgdmFsdWU6IGdyYWRlfX0pLFxuICAgICAgICAgICAgcm9wZTogdGVhbS5ncmFkZXMucm9wZS5tYXAoKGdyYWRlLCBpbmRleCkgPT4ge3JldHVybiB7X2lkOiBpbmRleCwgdmFsdWU6IGdyYWRlfX0pXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yczogdGVhbS5jb2xvcnMubWFwKGNvbG9yID0+IHtyZXR1cm4ge19pZDogY29sb3IubmFtZSwgdmFsdWU6IGNvbG9yLm5hbWUsIGNvbG9yOiBjb2xvci5jb2xvcn19KSxcbiAgICAgICAgdGFnczogdGVhbS50YWdzLm1hcCh0YWcgPT4ge3JldHVybiB7X2lkOiB0YWcsIHZhbHVlOiB0YWd9fSlcbiAgICB9XG59XG5cbmNvbnN0IHRlYW0gPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX1RFQU0nOlxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtVGVhbShhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdHRVRfVEVBTSc6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVhbSAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvdGVhbS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IHVzZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX1VTRVInOlxuICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICBjYXNlICdHRVRfVVNFUic6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlciAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvdXNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0YWdzOiBbXVxufVxuXG5jb25zdCB3aXphcmQgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVUERBVEVfTkVXX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFthY3Rpb24ucGF5bG9hZC5maWVsZF06IGFjdGlvbi5wYXlsb2FkLnZhbHVlfSlcbiAgICBjYXNlICdVUERBVEVfVEFHUyc6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3RhZ3M6IHRvZ2dsZVRhZyhzdGF0ZS50YWdzLCBhY3Rpb24ucGF5bG9hZCl9KVxuICAgIGNhc2UgJ1JFU0VUX1dJWkFSRCc6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7Z3ltOiBzdGF0ZS5neW0sIHRhZ3M6IFtdfSlcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpemFyZFxuXG4vLyB1dGlsaXRpZXNcblxuZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZ3MsIHRhZykge1xuICAgIGxldCBpbmQgPSB0YWdzLmluZGV4T2YodGFnKVxuICAgIHRhZ3MgPSBbLi4udGFnc11cbiAgICBpZiAoaW5kID49IDApIHtcbiAgICAgICAgdGFnc1tpbmRdID0gdGFnc1t0YWdzLmxlbmd0aCAtIDFdXG4gICAgICAgIHRhZ3MubGVuZ3RoID0gdGFncy5sZW5ndGggLSAxXG4gICAgICAgIHJldHVybiB0YWdzXG4gICAgfVxuICAgIHJldHVybiB0YWdzLmNvbmNhdCh0YWcpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvd2l6YXJkLmpzIiwiIC8qKlxuICogQG5hbWUgc3RhdGVUb2dnbGVcbiAqIEBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIHByb3BlcnR5IG9mIHN0YXRlIHRvIHRvZ2dsZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5cblxuZXhwb3J0IGNvbnN0IHN0YXRlVG9nZ2xlID0gcHJvcCA9PiBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW3Byb3BdOiAhc3RhdGVbcHJvcF1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvdXRpbC9pbmRleC5qcyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcbmltcG9ydCB7IEFwcENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXG5pbXBvcnQgU3ZnSW5qZWN0b3IgZnJvbSAnc3ZnLWluamVjdG9yJ1xuXG5jb25zdCByZW5kZXIgPSBDb21wb25lbnQgPT4ge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwQ29udGFpbmVyPlxuXHRcdDxDb21wb25lbnQgLz5cblx0PC9BcHBDb250YWluZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgKVxufVxuXG5yZW5kZXIoQXBwKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb25pYy1zcHJpdGUnKVxuICAgIFN2Z0luamVjdG9yKGljb25zKVxufSlcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBjb25zb2xlLmxvZygnc28gc28gaG90JylcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9hcHAnLCAoKSA9PiB7IFxuICAgICAgICBjb25zdCBBcHAgPSByZXF1aXJlKCcuL2FwcCcpLmRlZmF1bHRcbiAgICAgICAgcmVuZGVyKEFwcClcbiAgICB9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9tYWluLmpzeCIsImV4cG9ydCBjb25zdCBjb2xvcnMgPSBbXG4gICAgeyAnX2lkJzogJ3JlZCcsICd2YWx1ZSc6ICdyZWQnLCAnY29sb3InOiAnI2ZlMmUyZScgfSxcbiAgICB7ICdfaWQnOiAnb3JhbmdlJywgJ3ZhbHVlJzogJ29yYW5nZScsICdjb2xvcic6ICcjZjkyJyB9LFxuICAgIHsgJ19pZCc6ICd5ZWxsb3cnLCAndmFsdWUnOiAneWVsbG93JywgJ2NvbG9yJzogJyNmZmYwNGMnIH0sXG4gICAgeyAnX2lkJzogJ2dyZWVuJywgJ3ZhbHVlJzogJ2dyZWVuJywgJ2NvbG9yJzogJyMwYjAnIH0sXG4gICAgeyAnX2lkJzogJ2JsdWUnLCAndmFsdWUnOiAnYmx1ZScsICdjb2xvcic6ICcjMWU1NGY0JyB9LFxuICAgIHsgJ19pZCc6ICdwdXJwbGUnLCAndmFsdWUnOiAncHVycGxlJywgJ2NvbG9yJzogJyM4MDgnIH0sXG4gICAgeyAnX2lkJzogJ2JsYWNrJywgJ3ZhbHVlJzogJ2JsYWNrJywgJ2NvbG9yJzogJyMwMDAnIH0sXG4gICAgeyAnX2lkJzogJ3doaXRlJywgJ3ZhbHVlJzogJ3doaXRlJywgJ2NvbG9yJzogJyNmZmYnIH0sXG4gICAgeyAnX2lkJzogJ3BpbmsnLCAndmFsdWUnOiAncGluaycsICdjb2xvcic6ICcjZTVkJyB9XG5dXG5cblxuZXhwb3J0IGNvbnN0IHBhbGF0dGUgPSB7XG4gICAgdGVhbDoge3ByaW1hcnk6ICcjMDhlMGM1Jywgc2Vjb25kYXJ5OiAnIzRiZDBkZCd9LFxuICAgIHBpbms6IHtwcmltYXJ5OiAnI2ZhNDk3OCcsIHNlY29uZGFyeTogJyNlYjY3YTgnfSxcbiAgICBvcmFuZ2U6IHtwcmltYXJ5OiAnI2ZiOTUwMCcsIHNlY29uZGFyeTogJyNmYmMxMDAnfSxcbiAgICBncmVlbjoge3ByaW1hcnk6ICcjODNiZjAwJywgc2Vjb25kYXJ5OiAnIzgzYmYwMCd9LFxuICAgIHllbGxvdzoge3ByaW1hcnk6ICcjZmZkYzAwJywgc2Vjb25kYXJ5OiAnI2ZmZjQwMCd9LFxuICAgIGJsdWU6IHtwcmltYXJ5OiAnIzAwOEZGRicsIHNlY29uZGFyeTogJyMyNTc3RTgnfSxcbiAgICByZWQ6IHtwcmltYXJ5OiAnI0VDMzUzNScsIHNlY29uZGFyeTogJyNFMzE4MjgnfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3J0Y29uZmlnLmpzIiwiY2xhc3Mgz4Age1xuICAgIGNvdW50QnkoYXJyLCBjb21wKSB7XG4gICAgICAgIGlmICghY29tcCkgXG4gICAgICAgICAgICBjb21wID0gKGEpID0+IGFcbiAgICAgICAgbGV0IGdyb3VwZWQgPSB7fVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhID0gYXJyW2ldXG4gICAgICAgICAgICBpZiAoY29tcChhKSBpbiBncm91cGVkKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBlZFtjb21wKGEpXSsrXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyb3VwZWRbY29tcChhKV0gPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb3VwZWRcbiAgICB9XG5cbiAgICBidWNrZXRzKGFyciwgbGlzdCkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnKSBcbiAgICAgICAgICAgIGxpc3QgPSBsaXN0LnNwbGl0KCcgJylcbiAgICAgICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkgXG4gICAgICAgICAgICBsaXN0ID0gdGhpcy5fbWFrZUhhc2gobGlzdCwgMClcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0W2FycltpXV0rK1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuXG4gICAgcmFuZ2UoYSwgYikge1xuICAgICAgICBsZXQgc3RhcnQgPSBiXG4gICAgICAgICAgICA/IGFcbiAgICAgICAgICAgIDogMFxuICAgICAgICBsZXQgZW5kID0gYlxuICAgICAgICAgICAgPyBiXG4gICAgICAgICAgICA6IGFcbiAgICAgICAgbGV0IGFyciA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgZXhwYW5kU2ltcGxlT2JqZWN0KG9iaikge1xuICAgICAgICBvYmogPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgIT09IC0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlRG90Tm90YXRpb24oa2V5LCBvYmpba2V5XSwgb2JqKVxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG5cbiAgICB0b2dnbGVBcnJheShhLCB2KSB7XG4gICAgICAgIGEgPSBbLi4uYV1cbiAgICAgICAgdmFyIGkgPSBhLmluZGV4T2YodilcbiAgICAgICAgaWYgKGkgPT09IC0xKVxuICAgICAgICAgICAgYS5wdXNoKHYpXG4gICAgICAgIGVsc2VcbiAgICAgICAgYS5zcGxpY2UoaSwxKVxuXG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuXG5cbiAgICAvLyBpbnRlcm5hbFxuXG4gICAgX21ha2VIYXNoKGFyciwgdmFsKSB7XG4gICAgICAgIGxldCBoYXNoID0ge31cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoW2FycltpXV0gPSB2YWxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFzaFxuICAgIH1cblxuICAgIF9wYXJzZURvdE5vdGF0aW9uKHN0ciwgdmFsLCBvYmopIHtcbiAgICAgICAgdmFyIGN1cnJlbnRPYmogPSBvYmosXG4gICAgICAgICAgICBrZXlzID0gc3RyLnNwbGl0KCcuJyksXG4gICAgICAgICAgICBpLCBsID0gTWF0aC5tYXgoMSwga2V5cy5sZW5ndGggLSAxKSxcbiAgICAgICAgICAgIGtleVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV1cbiAgICAgICAgICAgIGN1cnJlbnRPYmpba2V5XSA9IGN1cnJlbnRPYmpba2V5XSB8fCB7fVxuICAgICAgICAgICAgY3VycmVudE9iaiA9IGN1cnJlbnRPYmpba2V5XVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdXJyZW50T2JqW2tleXNbaV1dID0gdmFsXG4gICAgICAgIGRlbGV0ZSBvYmpbc3RyXVxuICAgIH1cblxuXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyDPgCgpXG5cbmV4cG9ydCBjb25zdCByZW5kZXJJZiA9IGNvbmRpdGlvbiA9PiBlbGVtZW50ID0+IChjb25kaXRpb24gJiYgZWxlbWVudCkgfHwgJycgXG5cbmV4cG9ydCBjb25zdCBkYXRlTWF0aCA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGRheSA9IDguNjRlN1xuICAgIGNvbnN0IHdlZWsgPSA2LjA0OGUrOFxuICAgIFxuICAgIGZ1bmN0aW9uIHdlZWtzT2xkKGRheSkge1xuICAgICAgICBjb25zdCBtcyA9IERhdGUubm93KCkgLSBuZXcgRGF0ZShkYXkpLmdldFRpbWUoKVxuXG4gICAgICAgIGNvbnN0IHdlZWtzID0gbXMvd2Vla1xuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdlZWtzKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRheSxcbiAgICAgICAgd2VlayxcbiAgICAgICAgd2Vla3NPbGRcbiAgICB9XG5cbn0pKClcblxuZXhwb3J0IGNvbnN0IHNsZWVwID0gKHRpbWUpID0+ICgpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvcnR1dGlsLmpzIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGNvbG9yRmFjdG9yeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0Q29sb3JcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgaWYoIWNvbG9yKSByZXR1cm5cbiAgICAgICAgbGV0IHNwbGl0dGVyID0gY29sb3IubGVuZ3RoID4gND8gLy57Mn0vZyA6IC8uL2dcbiAgICAgICAgbGV0IG1pZGRsZSA9IGNvbG9yLmxlbmd0aCA+IDQ/IDEyOCA6IDhcbiAgICAgICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKCcjJywgJycpLm1hdGNoKHNwbGl0dGVyKVxuICAgICAgICByZXR1cm4gY29sb3IucmVkdWNlKChhLCBiKSA9PiAocGFyc2VJbnQoYiwgMTYpIC8gMykgKyBhLCAwKSA+IG1pZGRsZSA/ICcjNTU1JyA6ICcjZmZmJ1xuICAgIH1cbn0pKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zZXJ2aWNlcy9jb2xvclNlcnZpY2UuanMiLCJjbGFzcyBmZXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSAnL2FwaS8nXG4gICAgfVxuXG4gICAgZ2V0KHJlc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMucHJlZml4ICsgcmVzb3VyY2UgKyBwYXJhbVRvUXVlcnkocGFyYW1zKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGNyZWF0ZShyZXNvdXJjZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogZm9ybWF0Qm9keShkYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZShyZXNvdXJjZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgYm9keTogZm9ybWF0Qm9keShkYXRhKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBmZXRjaGVyKClcblxuZnVuY3Rpb24gcGFyYW1Ub1F1ZXJ5KG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gJydcblxuICAgIHJldHVybiAnPycgK1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArXG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKVxuICAgICAgICB9KS5qb2luKCcmJylcbn1cblxuZnVuY3Rpb24gZm9ybWF0Qm9keShvYmopIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NlcnZpY2VzL2ZldGNoZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3N0eWxlcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcHVibGljL3N0eWxlcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==