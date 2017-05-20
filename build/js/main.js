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
    console.log('app module hot');
    // Enable Webpack hot module replacement for reducers
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

/***/ "./public/components/account/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _loadContainer = __webpack_require__("./public/components/common/loadContainer.jsx");

var _loadContainer2 = _interopRequireDefault(_loadContainer);

var _rtCard = __webpack_require__("./public/components/common/rtCard.jsx");

var _rtCard2 = _interopRequireDefault(_rtCard);

var _common = __webpack_require__("./public/components/common/index.js");

var _fetcher = __webpack_require__("./public/services/fetcher.js");

var _fetcher2 = _interopRequireDefault(_fetcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            loaded: false
        }, _this.fields = function () {
            var _this2;

            return (_this2 = _this).__fields__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.validateEmpty = function () {
            var _this3;

            return (_this3 = _this).__validateEmpty__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _this.validateEmail = function () {
            var _this4;

            return (_this4 = _this).__validateEmail__REACT_HOT_LOADER__.apply(_this4, arguments);
        }, _this.values = {
            username: 'nopelluhh',
            email: 'napeller@gmail.com',
            nick: 'NP'
        }, _this.toggleEdit = function () {
            var _this5;

            return (_this5 = _this).__toggleEdit__REACT_HOT_LOADER__.apply(_this5, arguments);
        }, _this.cancelEdit = function () {
            var _this6;

            return (_this6 = _this).__cancelEdit__REACT_HOT_LOADER__.apply(_this6, arguments);
        }, _this.onSave = function () {
            var _this7;

            return (_this7 = _this).__onSave__REACT_HOT_LOADER__.apply(_this7, arguments);
        }, _this.getCurrentState = function () {
            var _this8;

            return (_this8 = _this).__getCurrentState__REACT_HOT_LOADER__.apply(_this8, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Account, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this9 = this;

            setTimeout(function () {
                _this9.setState({
                    loaded: true
                });
            }, 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _loadContainer2.default,
                { loaded: this.state.loaded },
                _react2.default.createElement(_common.LoadBar, null),
                _react2.default.createElement(
                    _rtCard2.default,
                    { title: 'Your Account' },
                    _react2.default.createElement(_common.RtForm, {
                        fields: this.fields(),
                        values: this.data,
                        editable: true,
                        getData: this.getForm,
                        onSave: this.onSave,
                        pending: this.state.fetching })
                )
            );
        }
    }, {
        key: '__fields__REACT_HOT_LOADER__',
        value: function __fields__REACT_HOT_LOADER__() {
            return [['General', {
                label: 'Username',
                name: 'local.username',
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
    }, {
        key: '__toggleEdit__REACT_HOT_LOADER__',
        value: function __toggleEdit__REACT_HOT_LOADER__() {
            this.setState({
                edit: true
            });
        }
    }, {
        key: '__cancelEdit__REACT_HOT_LOADER__',
        value: function __cancelEdit__REACT_HOT_LOADER__() {
            this.data = this.values;
            this.setState({
                edit: false
            });
        }
    }, {
        key: '__onSave__REACT_HOT_LOADER__',
        value: function __onSave__REACT_HOT_LOADER__(data) {
            var _this10 = this;

            this.setState({
                fetching: true
            });

            _fetcher2.default.update('users/current', data).then(function () {
                _this10.setState({
                    fetching: false,
                    edit: !_this10.state.edit
                });
            });
        }
    }, {
        key: '__getCurrentState__REACT_HOT_LOADER__',
        value: function __getCurrentState__REACT_HOT_LOADER__(data) {
            this.data = data;
        }
    }]);

    return Account;
}(_react.Component);

var _default = Account;
exports.default = _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Account, 'Account', '/Users/peller/Desktop/reactracker/public/components/account/index.jsx');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(props) {
    return _extends({
        display: props.inline ? 'inline-flex' : 'flex',
        justifyContent: 'space-between',
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

/***/ "./public/components/common/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadBar = exports.InputBox = exports.FlexRow = exports.RtForm = exports.RtCard = undefined;

var _flexRow = __webpack_require__("./public/components/common/flexRow.jsx");

var _flexRow2 = _interopRequireDefault(_flexRow);

var _rtForm = __webpack_require__("./public/components/common/rtForm.jsx");

var _rtForm2 = _interopRequireDefault(_rtForm);

var _inputBox = __webpack_require__("./public/components/common/inputBox.jsx");

var _inputBox2 = _interopRequireDefault(_inputBox);

var _loadBar = __webpack_require__("./public/components/common/loadBar.jsx");

var _loadBar2 = _interopRequireDefault(_loadBar);

var _rtCard = __webpack_require__("./public/components/common/rtCard.jsx");

var _rtCard2 = _interopRequireDefault(_rtCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RtCard = _rtCard2.default;
exports.RtForm = _rtForm2.default;
exports.FlexRow = _flexRow2.default;
exports.InputBox = _inputBox2.default;
exports.LoadBar = _loadBar2.default;
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
                { className: this.state.valid ? 'form-group' : 'form-group has-warning', key: field.label },
                _react2.default.createElement(
                    'label',
                    { className: 'control-label col-md-2' },
                    field.label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-10' },
                    this.props.edit ? _react2.default.createElement('input', { type: field.type,
                        name: field.name,
                        onBlur: this.onBlur,
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
                { transitionName: 'load_container', transitionEnterTimeout: 5000, transitionLeaveTimeout: 5000 },
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

var _default = RtCard;
exports.default = _default;


RtCard.propTypes = {
  title: _propTypes2.default.string.isRequired,
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

var _inputBox = __webpack_require__("./public/components/common/inputBox.jsx");

var _inputBox2 = _interopRequireDefault(_inputBox);

var _flexRow = __webpack_require__("./public/components/common/flexRow.jsx");

var _flexRow2 = _interopRequireDefault(_flexRow);

var _rtutil = __webpack_require__("./public/rtutil.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        }, _this.updateForm = function () {
            var _this4;

            return (_this4 = _this).__updateForm__REACT_HOT_LOADER__.apply(_this4, arguments);
        }, _this.fieldHandler = function () {
            var _this5;

            return (_this5 = _this).__fieldHandler__REACT_HOT_LOADER__.apply(_this5, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RtForm, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (!this.data) {
                this.data = Object.assign({}, this.props.values);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { className: 'form-horizontal' },
                _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        _flexRow2.default,
                        { inline: true },
                        (0, _rtutil.renderIf)(this.props.editable && !this.state.edit)(_react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: this.toggleEdit },
                            'Edit'
                        )),
                        (0, _rtutil.renderIf)(this.props.editable && this.state.edit)(_react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: this.toggleEdit },
                            'Cancel'
                        )),
                        (0, _rtutil.renderIf)(this.state.edit)(_react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: this.save },
                            'Save'
                        ))
                    )
                ),
                this.makeForm(this.props.fields, this.data, this.state.edit)
            );
        }
    }, {
        key: '__toggleEdit__REACT_HOT_LOADER__',
        value: function __toggleEdit__REACT_HOT_LOADER__(e) {
            e.preventDefault();
            this.setState({
                edit: !this.state.edit
            });
        }
    }, {
        key: '__save__REACT_HOT_LOADER__',
        value: function __save__REACT_HOT_LOADER__(e) {
            e.preventDefault();
            if (this.props.onSave.then) {
                this.props.onSave(this.data).then(function () {});
            } else {
                this.props.onSave(this.data);
                this.setState({
                    edit: false
                });
            }
        }
    }, {
        key: 'makeForm',
        value: function makeForm(fields, values, edit) {
            var _this6 = this;

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
                            _this6.makeForm(field.slice(1), values, edit)
                        )
                    );
                } else {
                    return _react2.default.createElement(_inputBox2.default, {
                        key: field.name,
                        field: field,
                        values: values,
                        edit: edit,
                        updateForm: _this6.updateForm });
                }
            });
        }
    }, {
        key: '__updateForm__REACT_HOT_LOADER__',
        value: function __updateForm__REACT_HOT_LOADER__(update) {
            this.data[update.field] = update.value;
        }
    }, {
        key: '__fieldHandler__REACT_HOT_LOADER__',
        value: function __fieldHandler__REACT_HOT_LOADER__(field) {
            var _this7 = this;

            return function (e) {
                _this7.data[field] = e.target.value;
            };
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
            var style = {
                backgroundColor: c.color || 'white',
                color: _colorService2.default.textColor(c.color),
                borderRadius: '3px',
                height: '30px'
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
                    this.props.data ? _react2.default.createElement(_rtBar2.default, { data: this.props.data, width: 200, height: 200 }) : null
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

var _gymItem = __webpack_require__("./public/components/gymList/gymItem/index.jsx");

var _gymItem2 = _interopRequireDefault(_gymItem);

var _loadBar = __webpack_require__("./public/components/common/loadBar.jsx");

var _loadBar2 = _interopRequireDefault(_loadBar);

var _loadContainer = __webpack_require__("./public/components/common/loadContainer.jsx");

var _loadContainer2 = _interopRequireDefault(_loadContainer);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

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

var _default = (0, _reactRedux.connect)(mapProps)(GymList);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(listGyms, 'listGyms', '/Users/peller/Desktop/reactracker/public/components/gymList/index.jsx');

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
                null,
                'Edit'
            )
        )
    );
};

RouteHeader.propTypes = {
    handleSort: _propTypes2.default.func.isRequired,
    sort: _propTypes2.default.string
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
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(next) {
            if (next.routes) {
                this.setState({ routes: next.routes });
            }
        }
    }]);

    function RouteList() {
        _classCallCheck(this, RouteList);

        var _this = _possibleConstructorReturn(this, (RouteList.__proto__ || Object.getPrototypeOf(RouteList)).call(this));

        _this.handleSort = function () {
            return _this.__handleSort__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.updateRoute = function () {
            return _this.__updateRoute__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.handleSort = _this.handleSort.bind(_this);
        return _this;
    }

    _createClass(RouteList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'table',
                { className: 'table table-mobile table-fixed' },
                _react2.default.createElement(_routeHeader2.default, { handleSort: this.handleSort, sort: this.state.sort, dir: this.state.dir }),
                _react2.default.createElement(
                    'tbody',
                    null,
                    this.state.routes.map(function (route) {
                        return _react2.default.createElement(_routeRow2.default, { key: route._id + route.updated_at, route: route, updateRoute: _this2.updateRoute, team: _this2.props.team });
                    })
                )
            );
        }
    }, {
        key: '__handleSort__REACT_HOT_LOADER__',
        value: function __handleSort__REACT_HOT_LOADER__(param) {
            var _this3 = this;

            return function () {
                var newRoutes = [].concat(_toConsumableArray(_this3.state.routes)),
                    dir = void 0;
                if (_this3.state.sort === param) {
                    newRoutes.reverse();
                    dir = _this3.state.dir === 'asc' ? 'desc' : 'asc';
                } else {
                    sortOn(newRoutes, param);
                    dir = 'asc';
                }

                _this3.setState({
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
    updateRoute: _propTypes2.default.func
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

var _default = RouteList;
exports.default = _default;
;

var _temp = function () {
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

var _rtSwatch = __webpack_require__("./public/components/common/rtSwatch.jsx");

var _rtSwatch2 = _interopRequireDefault(_rtSwatch);

var _flexRow = __webpack_require__("./public/components/common/flexRow.jsx");

var _flexRow2 = _interopRequireDefault(_flexRow);

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
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.route.updated_at !== this.props.route.updated_at || this.state.edit !== nextState.edit;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.edit ? _react2.default.createElement(
        'tr',
        { className: 'table-center' },
        _react2.default.createElement(
          'td',
          { className: 'gym-row__date' },
          _react2.default.createElement('input', { type: 'text', className: 'input-sm form-control', name: 'set_on', onChange: this.updateField, defaultValue: new Date(this.props.route.set_on).toLocaleDateString() })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('input', { type: 'text', className: 'input-sm form-control', name: 'grade', onChange: this.updateField, defaultValue: this.props.route.grade })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement('input', { type: 'text', className: 'input-sm form-control', name: 'color', onChange: this.updateField, defaultValue: this.props.route.color })
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'select',
            { className: 'input-sm form-control', name: 'setter', onBlur: this.updateField, defaultValue: this.props.route.setter },
            this.props.team.members.map(function (setter) {
              return _react2.default.createElement(
                'option',
                { key: setter._id, value: setter.nickname },
                ' ',
                setter.nickname,
                ' '
              );
            })
          )
        ),
        _react2.default.createElement(
          'td',
          { className: 'gym-row__edit' },
          _react2.default.createElement(
            _flexRow2.default,
            { inline: true, style: { width: '80%' } },
            _react2.default.createElement('span', { onClick: this.cancelEdit, className: 'glyphicon glyphicon-remove' }),
            _react2.default.createElement('span', { onClick: this.toggleEdit, className: 'glyphicon glyphicon-ok' }),
            _react2.default.createElement('span', { onClick: this.deleteRoute, className: 'glyphicon glyphicon-trash' })
          )
        )
      ) : _react2.default.createElement(
        'tr',
        { className: 'table-center' },
        _react2.default.createElement(
          'td',
          { className: 'gym-row__date' },
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
          _react2.default.createElement(_rtSwatch2.default, { className: 'list__swatch', color: this.props.route.color })
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.route.setter
        ),
        _react2.default.createElement(
          'td',
          { onClick: this.toggleEdit },
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-pencil' })
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
  route: _propTypes2.default.object,
  edit: _propTypes2.default.bool,
  team: _propTypes2.default.object,
  updateRoute: _propTypes2.default.func,
  deleteRoute: _propTypes2.default.func
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

var _rtCard = __webpack_require__("./public/components/common/rtCard.jsx");

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

var _loadContainer = __webpack_require__("./public/components/common/loadContainer.jsx");

var _loadContainer2 = _interopRequireDefault(_loadContainer);

var _loadBar = __webpack_require__("./public/components/common/loadBar.jsx");

var _loadBar2 = _interopRequireDefault(_loadBar);

var _statsCard = __webpack_require__("./public/components/gymOverview/components/statsCard.jsx");

var _statsCard2 = _interopRequireDefault(_statsCard);

var _routeList = __webpack_require__("./public/components/gymOverview/components/routeList.jsx");

var _routeList2 = _interopRequireDefault(_routeList);

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

            if (this.props.gym && nextProps.gym && this.props.gym.name !== nextProps.gym.name) {
                this.setState({ loaded: false });
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
                { loaded: this.state.loaded },
                _react2.default.createElement(_loadBar2.default, null),
                _react2.default.createElement(
                    'section',
                    { key: this.props.gym && this.props.gym.name },
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
                            _react2.default.createElement(_rtBigBar2.default, { data: this.props.count, width: '500', height: '200' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-4 col-xs-12 col-np' },
                            _react2.default.createElement(_statsCard2.default, { data: this.props.data })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12' },
                            _react2.default.createElement(_routeList2.default, { routes: this.props.data, updateRoute: this.props.updateRoute, team: this.props.team })
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
            }).then(function () {
                _this3.setState({
                    loaded: true
                });
            }).catch(function () {
                _this3.setState({
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
    getRoutes: _propTypes2.default.func,
    getTeam: _propTypes2.default.func,
    match: _propTypes2.default.object,
    team: _propTypes2.default.object
};


function mapState(state, ownProps) {
    var gym = state.gyms.filter(function (gym) {
        return gym.url === ownProps.match.params.name;
    })[0];
    var routes = state.routes.filter(function (route) {
        return route.gym === gym._id;
    });
    var hash = routes.hashCode();
    var arr = routes.toArray();
    return {
        gym: gym,
        data: arr,
        count: transformRoutes(arr),
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
        }
    };
}

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(GymOverview);

exports.default = _default;


function transformRoutes(boulders) {
    var sorted = _rtutil2.default.buckets(boulders.map(function (boulder) {
        return boulder.grade;
    }), _rtutil2.default.range(13));
    return Object.keys(sorted).map(function (key) {
        return {
            grade: key,
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

var _rtSidebar = __webpack_require__("./public/components/main/rtSidebar/index.jsx");

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
                'div',
                null,
                _react2.default.createElement(_rtHeader2.default, null),
                _react2.default.createElement(_rtContent2.default, null)
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
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _gymList2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/gyms/:name', component: _gymOverview2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/add', component: _rtWizard2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/account', component: _account2.default })
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

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _reactRouterBootstrap = __webpack_require__("./node_modules/react-router-bootstrap/lib/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

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
                  _reactRouterBootstrap.LinkContainer,
                  { key: gym._id, to: '/gyms/' + gym.url },
                  _react2.default.createElement(
                    _reactBootstrap.MenuItem,
                    { key: gym._id, eventKey: 3.1 },
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

var _default = (0, _reactRedux.connect)(mapState)(RtHeader);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RtHeader, 'RtHeader', '/Users/peller/Desktop/reactracker/public/components/main/rtHeader/index.jsx');

  __REACT_HOT_LOADER__.register(mapState, 'mapState', '/Users/peller/Desktop/reactracker/public/components/main/rtHeader/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/main/rtHeader/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/main/rtSidebar/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _menuItem = __webpack_require__("./public/components/main/rtSidebar/menuItem.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

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

var _default = RtSidebar;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(menu, 'menu', '/Users/peller/Desktop/reactracker/public/components/main/rtSidebar/index.jsx');

    __REACT_HOT_LOADER__.register(RtSidebar, 'RtSidebar', '/Users/peller/Desktop/reactracker/public/components/main/rtSidebar/index.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/main/rtSidebar/index.jsx');
}();

;

/***/ }),

/***/ "./public/components/main/rtSidebar/menuItem.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

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

var _default = MenuItem;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MenuItem, 'MenuItem', '/Users/peller/Desktop/reactracker/public/components/main/rtSidebar/menuItem.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/main/rtSidebar/menuItem.jsx');
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
    }).attr('y', height).attr('fill', function (d, i) {
        return rainbow(i);
    }).transition().delay(function () {
        return 400 - Math.random() * 100;
    }).duration(300).ease(d3.easeExpIn).attr('y', function (d) {
        return height - y(d) - 3;
    }).attr('height', function (d) {
        return y(d) + 3;
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

var _d = __webpack_require__("./node_modules/d3/build/d3.js");

var d3 = _interopRequireWildcard(_d);

var _d3Tip = __webpack_require__("./node_modules/d3-tip/index.js");

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

var _default = RtBar;
exports.default = _default;


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
    }).attr('y', height + 1).attr('fill', function (d, i) {
        return rainbow(i);
    }).on('mouseover', tip.show).on('mouseout', tip.hide).transition().delay(function () {
        return 400 - Math.random() * 100;
    }).duration(300).ease(d3.easeExpIn).attr('y', function (d) {
        return height - y(d.count);
    }).attr('height', function (d) {
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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RtBar, 'RtBar', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtBigBar.jsx');

    __REACT_HOT_LOADER__.register(makeChart, 'makeChart', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtBigBar.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/peller/Desktop/reactracker/public/components/rtChart/rtBigBar.jsx');
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

var _rtSwatch = __webpack_require__("./public/components/common/rtSwatch.jsx");

var _rtSwatch2 = _interopRequireDefault(_rtSwatch);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _route = __webpack_require__("./public/data/actions/route.js");

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

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
                        'div',
                        { className: 'text-center' },
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsStyle: 'info', onClick: this.edit },
                            'Edit'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsStyle: 'primary', onClick: this.postRoute },
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

            this.props.postRoute(this.transformedRoute).then(function () {
                _this4.props.reset();
                _this4.setState({
                    added: true
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

function getRoutesByGym(id) {
    return function (dispatch, getState, fetcher) {
        return fetcher.get('route/boulder/gym', {
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

var _default = new π();

exports.default = _default;
var renderIf = exports.renderIf = function renderIf(condition) {
    return function (element) {
        return condition && element;
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(π, '\u03C0', '/Users/peller/Desktop/reactracker/public/rtutil.js');

    __REACT_HOT_LOADER__.register(renderIf, 'renderIf', '/Users/peller/Desktop/reactracker/public/rtutil.js');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9hY2NvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vZmxleFJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9pbnB1dEJveC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2xvYWRCYXIuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9sb2FkQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vcnRTd2F0Y2guanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9zd2lwZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9neW1JdGVtL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZVJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9zdGF0c0NhcmQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL3J0Q29udGVudC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9ydEhlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9ydFNpZGViYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL21haW4vcnRTaWRlYmFyL21lbnVJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydENoYXJ0L3J0QmlnQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6Q29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekxpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6UGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93elByZXZpZXcuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pTdGVwLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvcnRXaXphcmQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL3d6R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9neW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3RlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvYWN0aW9ucy93aXphcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvZ3ltLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9kYXRhL3JlZHVjZXJzL3RlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2RhdGEvcmVkdWNlcnMvd2l6YXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvcnR1dGlsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zZXJ2aWNlcy9jb2xvclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NlcnZpY2VzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiaGlzdG9yeSIsInJvdXRlTWlkZGxld2FyZSIsInN0b3JlIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsIndpdGhFeHRyYUFyZ3VtZW50IiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsIm5leHRSb290UmVkdWNlciIsInJlcXVpcmUiLCJyZXBsYWNlUmVkdWNlciIsIkFwcCIsIkFjY291bnQiLCJzdGF0ZSIsImxvYWRlZCIsImZpZWxkcyIsInZhbGlkYXRlRW1wdHkiLCJ2YWxpZGF0ZUVtYWlsIiwidmFsdWVzIiwidXNlcm5hbWUiLCJlbWFpbCIsIm5pY2siLCJ0b2dnbGVFZGl0IiwiY2FuY2VsRWRpdCIsIm9uU2F2ZSIsImdldEN1cnJlbnRTdGF0ZSIsInNldFRpbWVvdXQiLCJzZXRTdGF0ZSIsImRhdGEiLCJnZXRGb3JtIiwiZmV0Y2hpbmciLCJsYWJlbCIsIm5hbWUiLCJ0eXBlIiwidmFsaWRhdGUiLCJ2YWx1ZSIsImxlbmd0aCIsInRlc3QiLCJlZGl0IiwidXBkYXRlIiwidGhlbiIsInN0eWxlcyIsInByb3BzIiwiZGlzcGxheSIsImlubGluZSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwic3R5bGUiLCJmbGV4Um93IiwiY2hpbGRyZW4iLCJSdENhcmQiLCJSdEZvcm0iLCJGbGV4Um93IiwiSW5wdXRCb3giLCJMb2FkQmFyIiwidmFsaWQiLCJoYW5kbGVDaGFuZ2UiLCJvbkJsdXIiLCJlIiwiZmllbGQiLCJ0YXJnZXQiLCJ1cGRhdGVGb3JtIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZnVuYyIsIm9iamVjdCIsImJvb2wiLCJMb2FkQ29udGFpbmVyIiwiY29udGVudCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInRpdGxlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJzYXZlIiwiZmllbGRIYW5kbGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZWRpdGFibGUiLCJtYWtlRm9ybSIsInByZXZlbnREZWZhdWx0IiwibWFwIiwiaSIsIkFycmF5IiwicGFkZGluZyIsInNsaWNlIiwiZGVmYXVsdFByb3BzIiwiYXJyYXlPZiIsIm9uZU9mVHlwZSIsImFycmF5Iiwic2hhcGUiLCJvbkNsaWNrIiwiUnRTd2F0Y2giLCJjIiwiY29sb3IiLCJ0IiwiY29sb3JzIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJtYXBTdGF0ZSIsInRlYW0iLCJTd2lwZUNvbnRhaW5lciIsInRvdWNoU3RhcnQiLCJ0b3VjaEVuZCIsImNoYW5nZWRUb3VjaGVzIiwic3RhcnRYIiwiY2xpZW50WCIsImRpc3QiLCJvbkxlZnQiLCJvblN3aXBlIiwib25SaWdodCIsIkd5bUl0ZW0iLCJ1bmRlZmluZWQiLCJnZXRSb3V0ZXMiLCJneW0iLCJfaWQiLCJ1cmwiLCJvd25Qcm9wcyIsImd5bVJvdXRlcyIsInJvdXRlcyIsInJvdXRlIiwidHJhbnNmb3JtUm91dGVzIiwibWFwRGlzcGF0Y2giLCJkaXNwYXRjaCIsImlkIiwic29ydGVkIiwiYnVja2V0cyIsImJvdWxkZXIiLCJncmFkZSIsInJhbmdlIiwia2V5cyIsImtleSIsImxpc3RHeW1zIiwiZ3ltcyIsIkd5bUxpc3QiLCJtYXBQcm9wcyIsImFycm93cyIsIlJvdXRlSGVhZGVyIiwiYXJyb3ciLCJwYXJhbSIsInNvcnQiLCJkaXIiLCJoYW5kbGVTb3J0IiwiUm91dGVMaXN0IiwibmV4dCIsInVwZGF0ZVJvdXRlIiwiYmluZCIsInVwZGF0ZWRfYXQiLCJuZXdSb3V0ZXMiLCJyZXZlcnNlIiwic29ydE9uIiwibmV3Um91dGUiLCJhcnIiLCJwcm9wIiwiYSIsImIiLCJSb3V0ZVJvdyIsImRlbGV0ZVJvdXRlIiwidXBkYXRlRmllbGQiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJEYXRlIiwic2V0X29uIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2V0dGVyIiwibWVtYmVycyIsIm5pY2tuYW1lIiwid2lkdGgiLCJldmVudCIsIlN0YXRzQ2FyZCIsIm1ha2VPdmVydmlldyIsImNvdW50Iiwib2xkZXN0IiwibWluIiwiSW5maW5pdHkiLCJmb3JFYWNoIiwicGFyc2UiLCJjcmVhdGVkX2F0IiwiR3ltT3ZlcnZpZXciLCJnZXREYXRhRm9yR3ltIiwibWF0Y2giLCJwYXJhbXMiLCJlcnJvciIsImdldFRlYW0iLCJjdXJyZW50R3ltIiwiY2F0Y2giLCJoYXNoIiwiaGFzaENvZGUiLCJib3VsZGVycyIsIk1haW4iLCJnZXRHeW1zIiwibG9jYXRpb24iLCJyb3V0ZXIiLCJtYWluQ29udGFpbmVyIiwiUnRDb250ZW50IiwiUnRIZWFkZXIiLCJtZW51IiwidG8iLCJpY29uIiwiUnRTaWRlYmFyIiwiaXRlbSIsIk1lbnVJdGVtIiwiY29udGV4dFR5cGVzIiwiZDMiLCJSdEJhciIsIm1ha2VDaGFydCIsImFwcGx5IiwiZWwiLCJOdW1iZXIiLCJiYXJXaWR0aCIsInkiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsIm1heCIsInJhaW5ib3ciLCJzY2FsZVNlcXVlbnRpYWwiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJjaGFydCIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJiYXIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImQiLCJjbGFzc2VkIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiTWF0aCIsInJhbmRvbSIsImR1cmF0aW9uIiwiZWFzZSIsImVhc2VFeHBJbiIsInRpcCIsImZvbnRTY2FsZSIsImNsYW1wIiwib2Zmc2V0IiwiaHRtbCIsImNhbGwiLCJvbiIsInNob3ciLCJoaWRlIiwidGV4dCIsIm9ucmVzaXplIiwicmVzaXplZCIsInNjYWxlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiV3pDb250YWluZXIiLCJ0cmFuc2Zvcm0iLCJzdGVwIiwiV3pJdGVtIiwiX2NsaWNrIiwic2V0Q2xhc3MiLCJzZWxlY3RlZCIsIld6TGlzdEl0ZW0iLCJXelBhZ2UiLCJwcmV2IiwiV3pQcmV2aWV3IiwicG9zdFJvdXRlIiwidHJhbnNmb3JtZWRSb3V0ZSIsInRyYW5zZm9ybVJvdXRlIiwidGFncyIsImpvaW4iLCJyZXNldCIsImFkZGVkIiwibW92ZSIsImdyYWRlcyIsIm9iaiIsIndhbGwiLCJub3ciLCJXelN0ZXAiLCJyZXZpZXciLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1cGRhdGVUYWdzIiwicmVzZXRGb3JtIiwiUnRXaXphcmRDb250YWluZXIiLCJSdFdpemFyZCIsImd5bUZpbHRlciIsImNsaWNrcyIsImNsaWNrZWQiLCJzdGVwcyIsInN0ZXBDb250ZW50IiwiZW5kIiwidG9TdGVwIiwiY3VycmVudCIsInRhZyIsImluZGV4T2YiLCJ3YWxscyIsInNldEZpbHRlciIsImZpbHRlckd5bXMiLCJXekdyaWQiLCJFbCIsImxpc3QiLCJpc1NlbGVjdGVkIiwic2VsZWN0b3IiLCJpdGVtcyIsIm9uZU9mIiwicmVjZWl2ZUd5bXMiLCJwYXlsb2FkIiwiZ2V0U3RhdGUiLCJmZXRjaGVyIiwiZ2V0IiwiYWRkUm91dGUiLCJyZWNlaXZlUm91dGVzIiwiZ2V0Um91dGVzQnlHeW0iLCJwdXRSb3V0ZSIsImNyZWF0ZSIsInJlcyIsInJlY2VpdmVUZWFtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNldFdpemFyZCIsImluaXRpYWxTdGF0ZSIsInRyYW5zZm9ybUd5bXMiLCJhY3Rpb24iLCJtYWluUmVkdWNlciIsIk1hcCIsInNldCIsImNvbmNhdCIsInJvcGUiLCJ0cmFuc2Zvcm1UZWFtIiwiaW5kZXgiLCJ3aXphcmQiLCJ0b2dnbGVUYWciLCJpbmQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVmYXVsdCIsIs+AIiwiY29tcCIsImdyb3VwZWQiLCJsIiwic3BsaXQiLCJtYWtlSGFzaCIsInN0YXJ0IiwicHVzaCIsInZhbCIsInJlbmRlcklmIiwiY29uZGl0aW9uIiwiZWxlbWVudCIsImNvbG9yRmFjdG9yeSIsInNwbGl0dGVyIiwibWlkZGxlIiwicmVwbGFjZSIsInJlZHVjZSIsInBhcnNlSW50IiwicHJlZml4IiwicmVzb3VyY2UiLCJmZXRjaCIsInBhcmFtVG9RdWVyeSIsImpzb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImZvcm1hdEJvZHkiLCJjcmVkZW50aWFscyIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiXSwi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QTBCLEdBQTFCLEdBQ0hrTyxtQkFBbUIxRixJQUFJeEksR0FBSixDQUFuQixDQURKO0FBRUgsS0FIRCxFQUdHbUksSUFISCxDQUdRLEdBSFIsQ0FESjtBQUtIOztBQUVELFNBQVM2RixVQUFULENBQW9CeEYsR0FBcEIsRUFBeUI7QUFDckIsV0FBTzJGLEtBQUtDLFNBQUwsQ0FBZTVGLEdBQWYsQ0FBUDtBQUNIOzs7Ozs7OztrQ0FqREtpQyxPOztrQ0FxQ0drRCxZOztrQ0FVQUssVTs7Ozs7Ozs7Ozs7O0FDL0NULHlDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZXBlbmRlbmNpZXMgc3VibW9kdWxlcyBpbXBvcnQgJy4vY29tcG9uZW50cy91dGlsL3V0aWwnIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydENoYXJ0L3J0Q2hhcnQnIGltcG9ydCAnLi9jb21wb25lbnRzL3J0V2l6YXJkL3J0V2l6YXJkJyBpbXBvcnRcbi8vICcuL2NvbXBvbmVudHMvZ3ltTGlzdC9neW1MaXN0JyBpbXBvcnQgJy4vY29tcG9uZW50cy9tYWluL21haW4nIGltcG9ydFxuLy8gJy4vY29tcG9uZW50cy9ydEd5bS9ydEd5bSdcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW4gZnJvbSAnY29tcG9uZW50cy9tYWluJ1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnc2VydmljZXMvZmV0Y2hlcidcbmltcG9ydCBtYWluUmVkdWNlciBmcm9tICdkYXRhL3JlZHVjZXJzJ1xuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyLCByb3V0ZXJNaWRkbGV3YXJlfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSgpXG5jb25zdCByb3V0ZU1pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgbWFpblJlZHVjZXIsIFxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCksIFxuICAgIGFwcGx5TWlkZGxld2FyZShyb3V0ZU1pZGRsZXdhcmUsIHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KGZldGNoZXIpKVxuICAgIClcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBjb25zb2xlLmxvZygnYXBwIG1vZHVsZSBob3QnIClcbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL2RhdGEvcmVkdWNlcnMnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmUoJy4vZGF0YS9yZWR1Y2Vycy9pbmRleCcpXG4gICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSb290UmVkdWNlcilcbiAgICB9KVxufVxuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Q29ubmVjdGVkUm91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICAgICAgICAgICAgICA8TWFpbi8+XG4gICAgICAgICAgICAgICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvYXBwLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IExvYWRDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9hZENvbnRhaW5lcidcbmltcG9ydCBSdENhcmQgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcnRDYXJkJ1xuaW1wb3J0IHtMb2FkQmFyLCBSdEZvcm19IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdzZXJ2aWNlcy9mZXRjaGVyJ1xuXG5cbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBsb2FkZWQ6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMb2FkQ29udGFpbmVyIGxvYWRlZD17IHRoaXMuc3RhdGUubG9hZGVkIH0+XG4gICAgICAgICAgICAgIDxMb2FkQmFyLz5cbiAgICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT1cIllvdXIgQWNjb3VudFwiPlxuICAgICAgICAgICAgICAgIDxSdEZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcz17IHRoaXMuZmllbGRzKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXsgdGhpcy5kYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXsgdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREYXRhPXsgdGhpcy5nZXRGb3JtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17IHRoaXMub25TYXZlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmc9eyB0aGlzLnN0YXRlLmZldGNoaW5nIH0gLz5cbiAgICAgICAgICAgICAgPC9SdENhcmQ+XG4gICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBmaWVsZHMgPSAoKSA9PiBbXG4gICAgICAgIFtcbiAgICAgICAgICAgICdHZW5lcmFsJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1VzZXJuYW1lJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnbG9jYWwudXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZUVtcHR5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRS1tYWlsJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGVFbWFpbFxuICAgICAgICAgICAgfV0sXG4gICAgICAgIFtcbiAgICAgICAgICAgICdTZXR0aW5nJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ05pY2tuYW1lJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmlja25hbWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdGhpcy52YWxpZGF0ZUVtcHR5XG4gICAgICAgICAgICB9XVxuICAgIF1cblxuICAgIHZhbGlkYXRlRW1wdHkgPSAodmFsdWUpID0+IHZhbHVlLmxlbmd0aCA+IDBcblxuICAgIHZhbGlkYXRlRW1haWwgPSAodmFsdWUpID0+IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QodmFsdWUpXG5cbiAgICB2YWx1ZXMgPSB7XG4gICAgICAgIHVzZXJuYW1lOiAnbm9wZWxsdWhoJyxcbiAgICAgICAgZW1haWw6ICduYXBlbGxlckBnbWFpbC5jb20nLFxuICAgICAgICBuaWNrOiAnTlAnXG4gICAgfVxuXG4gICAgdG9nZ2xlRWRpdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0OiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FuY2VsRWRpdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy52YWx1ZXNcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uU2F2ZSA9IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmV0Y2hpbmc6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBmZXRjaGVyLnVwZGF0ZSgndXNlcnMvY3VycmVudCcsIGRhdGEpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZWRpdDogIXRoaXMuc3RhdGUuZWRpdFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFN0YXRlID0gKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2FjY291bnQvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzdHlsZXMgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5OiBwcm9wcy5pbmxpbmU/ICdpbmxpbmUtZmxleCcgOiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAuLi5wcm9wcy5zdHlsZVxuICAgIH1cbn1cblxuY29uc3QgZmxleFJvdyA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgc3R5bGU9eyBzdHlsZXMocHJvcHMpIH0gY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgZmxleFJvd1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9mbGV4Um93LmpzeCIsImltcG9ydCBGbGV4Um93IGZyb20gJy4vZmxleFJvdydcbmltcG9ydCBSdEZvcm0gZnJvbScuL3J0Rm9ybSdcbmltcG9ydCBJbnB1dEJveCBmcm9tICcuL2lucHV0Qm94J1xuaW1wb3J0IExvYWRCYXIgZnJvbSAnLi9sb2FkQmFyJ1xuaW1wb3J0IFJ0Q2FyZCBmcm9tICcuL3J0Q2FyZCdcblxuZXhwb3J0IHtcbiAgICAvLyBVSSBcbiAgICBSdENhcmQsXG4gICAgUnRGb3JtLFxuXG4gICAgLy8gTEFZT1VUXG4gICAgRmxleFJvdyxcblxuICAgIC8vRUxFTUVOVFNcbiAgICBJbnB1dEJveCxcbiAgICBMb2FkQmFyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNsYXNzIElucHV0Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50ICB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHZhbGlkOiB0cnVlXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdXBkYXRlRm9ybTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBpZih0aGlzLnByb3BzLmZpZWxkLnZhbGlkYXRlKSB7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0aGlzLnByb3BzLmZpZWxkLnZhbGlkYXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgZmllbGQ6IHRoaXMucHJvcHMuZmllbGRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUZvcm0oZGF0YSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7ZmllbGQsIHZhbHVlc30gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZhbGlkPyAnZm9ybS1ncm91cCcgOiAnZm9ybS1ncm91cCBoYXMtd2FybmluZyd9IGtleT17IGZpZWxkLmxhYmVsIH0+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICAgIHsgZmllbGQubGFiZWwgfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCI+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmVkaXQgPyAoXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9eyBmaWVsZC50eXBlIH0gXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eyBmaWVsZC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyB2YWx1ZXNbZmllbGQubmFtZV0gfHwgZmllbGQubGFiZWwgfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXN0YXRpYyB0ZXh0LWxlZnRcIj57IHZhbHVlc1tmaWVsZC5uYW1lXSB8fCBmaWVsZC5sYWJlbCB9PC9wPlxuICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5JbnB1dEJveC5wcm9wVHlwZXMgPSB7XG4gICAgZmllbGQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGVkaXQ6IFByb3BUeXBlcy5ib29sXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IElucHV0Qm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2lucHV0Qm94LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9hZEJhciA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmlubGluZT8gJ2xvYWQtYmFyIGxvYWQtYmFyLWlubGluZScgOiAnbG9hZC1iYXInfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWJhcl9fYmFyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1iYXJfX2JhclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtYmFyX19iYXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRCYXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9jb21tb24vbG9hZEJhci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uUmVwbGFjZSBmcm9tICdyZWFjdC1jc3MtdHJhbnNpdGlvbi1yZXBsYWNlJ1xuXG5cbmNsYXNzIExvYWRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbilcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvblJlcGxhY2UgdHJhbnNpdGlvbk5hbWU9XCJsb2FkX2NvbnRhaW5lclwiIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezUwMDB9IHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezUwMDB9PlxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMubG9hZGVkID8gY29udGVudFsxXSA6IGNvbnRlbnRbMF0gfVxuICAgICAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25SZXBsYWNlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL2xvYWRDb250YWluZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNvbnN0IFJ0Q2FyZCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJzLTEgcnRfY2FyZF9faGVhZGVyIHRleHQtY2FwaXRhbGl6ZVwiPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnRfY2FyZF9fY29udGVudFwiPlxuICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSdENhcmRcblxuUnRDYXJkLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydENhcmQuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgSW5wdXRCb3ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vaW5wdXRCb3gnXG5pbXBvcnQgRmxleFJvdyBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9mbGV4Um93J1xuXG5pbXBvcnQgeyByZW5kZXJJZiB9IGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgUnRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHsgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGZpZWxkczogW10sXG4gICAgICAgIHZhbHVlczoge31cbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBmaWVsZHM6IFBULmFycmF5T2YoXG4gICAgICAgICAgICBQVC5vbmVPZlR5cGUoW1xuICAgICAgICAgICAgICAgIFBULmFycmF5LFxuICAgICAgICAgICAgICAgIFBULnNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFBULnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogUFQuc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI6IFBULmZ1bmMsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IFBULmZ1bmMsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBQVC5mdW5jXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgICkpLmlzUmVxdWlyZWQsXG4gICAgICAgIHZhbHVlczogUFQub2JqZWN0LFxuICAgICAgICBlZGl0YWJsZTogUFQuYm9vbCxcbiAgICAgICAgb25TYXZlOiBQVC5mdW5jXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy52YWx1ZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPEZsZXhSb3cgaW5saW5lPlxuICAgICAgICAgICAgICAgICAgeyByZW5kZXJJZih0aGlzLnByb3BzLmVkaXRhYmxlICYmICF0aGlzLnN0YXRlLmVkaXQpKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsgdGhpcy50b2dnbGVFZGl0IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgIHsgcmVuZGVySWYodGhpcy5wcm9wcy5lZGl0YWJsZSAmJiB0aGlzLnN0YXRlLmVkaXQpKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsgdGhpcy50b2dnbGVFZGl0IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgICAgeyByZW5kZXJJZih0aGlzLnN0YXRlLmVkaXQpKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsgdGhpcy5zYXZlIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7IHRoaXMubWFrZUZvcm0odGhpcy5wcm9wcy5maWVsZHMsIHRoaXMuZGF0YSwgdGhpcy5zdGF0ZS5lZGl0KSB9XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICB0b2dnbGVFZGl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZWRpdDogIXRoaXMuc3RhdGUuZWRpdFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNhdmUgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TYXZlLnRoZW4pIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TYXZlKHRoaXMuZGF0YSkudGhlbigoKSA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2F2ZSh0aGlzLmRhdGEpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbWFrZUZvcm0oZmllbGRzLCB2YWx1ZXMsIGVkaXQpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcy5tYXAoKGZpZWxkLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBrZXk9eyBpIH0gc3R5bGU9eyB7IHBhZGRpbmc6ICczMHB4IDAgMCcgfSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+eyBmaWVsZFswXSB9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMubWFrZUZvcm0oZmllbGQuc2xpY2UoMSksIHZhbHVlcywgZWRpdCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBmaWVsZC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPXsgZmllbGQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXsgdmFsdWVzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXQ9eyBlZGl0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm09eyB0aGlzLnVwZGF0ZUZvcm0gfSAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVGb3JtID0gKHVwZGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGFbdXBkYXRlLmZpZWxkXSA9IHVwZGF0ZS52YWx1ZVxuICAgIH1cblxuXG4gICAgZmllbGRIYW5kbGVyID0gKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0Rm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2NvbW1vbi9ydEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjb2xvciBmcm9tICdzZXJ2aWNlcy9jb2xvclNlcnZpY2UnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNsYXNzIFJ0U3dhdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjID0gdGhpcy5wcm9wcy5jb2xvclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY29sb3IuY29sb3IpIHtcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy5wcm9wcy5jb2xvcnMuZmlsdGVyKGNvbG9yID0+IGNvbG9yLnZhbHVlID09PSB0aGlzLnByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKCkpWzBdXG4gICAgICAgICAgICBjID0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0PyB0LmNvbG9yIDogJyNGRkYnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLmNvbG9yLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYy5jb2xvciB8fCAnd2hpdGUnLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLnRleHRDb2xvcihjLmNvbG9yKSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICczMHB4J1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17IHN0eWxlIH0+eyBjLnZhbHVlIHx8ICcnIH08L3NwYW4+KVxuICAgIH1cblxufVxuXG5SdFN3YXRjaC5wcm9wVHlwZXMgPSB7XG4gICAgY29sb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBjb2xvcnM6IFByb3BUeXBlcy5hcnJheVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbG9yczogc3RhdGUudGVhbS5jb2xvcnNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUpKFJ0U3dhdGNoKVxuXG5leHBvcnQgeyBSdFN3YXRjaCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3J0U3dhdGNoLmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFN3aXBlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IG9uVG91Y2hTdGFydD17dGhpcy50b3VjaFN0YXJ0fSBvblRvdWNoRW5kPXt0aGlzLnRvdWNoRW5kfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICB0b3VjaFN0YXJ0ID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm5cbiAgICAgICAgdGhpcy5zdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFhcbiAgICB9XG5cbiAgICB0b3VjaEVuZCA9IChlKSA9PiB7XG4gICAgICAgIGxldCBkaXN0ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5zdGFydFhcbiAgICAgICAgaWYoZGlzdCA8IDEwMCAmJiBkaXN0ID4gLTEwMCkgcmV0dXJuXG5cbiAgICAgICAgaWYoIXRoaXMucHJvcHMub25MZWZ0KSByZXR1cm4gdGhpcy5wcm9wcy5vblN3aXBlKGRpc3QpXG5cbiAgICAgICAgZGlzdCA+IDAgPyB0aGlzLnByb3BzLm9uUmlnaHQoKSA6IHRoaXMucHJvcHMub25MZWZ0KClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXBlQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvY29tbW9uL3N3aXBlQ29udGFpbmVyLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUnRCYXIgZnJvbSAnY29tcG9uZW50cy9ydENoYXJ0L3J0QmFyJ1xuXG5pbXBvcnQgeyBnZXRSb3V0ZXNCeUd5bSB9IGZyb20gJ2RhdGEvYWN0aW9ucy9yb3V0ZSdcblxuaW1wb3J0IM+AIGZyb20gJ3J0dXRpbCdcblxuY2xhc3MgR3ltSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFJvdXRlcyh0aGlzLnByb3BzLmd5bS5faWQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJneW0taXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd5bS10aXRsZSB0ZXh0LWJyYW5kIHRleHQtdXBwZXJjYXNlIHRleHQtdGhpblwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgJy9neW1zLycgKyB0aGlzLnByb3BzLmd5bS51cmwgfSBjbGFzc05hbWU9XCJsaW5rLXBsYWluXCI+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd5bS1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRhdGFcbiAgICAgICAgICAgICAgICAgID8gPFJ0QmFyIGRhdGE9eyB0aGlzLnByb3BzLmRhdGEgfSB3aWR0aD17IDIwMCB9IGhlaWdodD17IDIwMCB9IC8+XG4gICAgICAgICAgICAgICAgICA6IG51bGwgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5HeW1JdGVtLnByb3BUeXBlcyA9IHtcbiAgICBneW06IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUsIG93blByb3BzKSB7XG4gICAgbGV0IGd5bVJvdXRlcyA9IHN0YXRlLnJvdXRlcy50b0FycmF5KCkuZmlsdGVyKHJvdXRlID0+IHJvdXRlLmd5bSA9PT0gb3duUHJvcHMuZ3ltLl9pZClcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IHRyYW5zZm9ybVJvdXRlcyhneW1Sb3V0ZXMpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFJvdXRlczogKGlkKSA9PiBkaXNwYXRjaChnZXRSb3V0ZXNCeUd5bShpZCkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoR3ltSXRlbSlcblxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGVzKHJvdXRlcykge1xuICAgIGlmKCFyb3V0ZXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICAgIGxldCBzb3J0ZWQgPSDPgC5idWNrZXRzKHJvdXRlcy5tYXAoYm91bGRlciA9PiBib3VsZGVyLmdyYWRlKSwgz4AucmFuZ2UoMTMpKVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4gc29ydGVkW2tleV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltTGlzdC9neW1JdGVtL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHeW1JdGVtIGZyb20gJy4vZ3ltSXRlbSdcbmltcG9ydCBMb2FkQmFyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvYWRCYXInXG5pbXBvcnQgTG9hZENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9sb2FkQ29udGFpbmVyJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5cbmZ1bmN0aW9uIGxpc3RHeW1zKGd5bXMpIHtcbiAgICByZXR1cm4gZ3ltcy5tYXAoZ3ltID0+ICg8R3ltSXRlbSBrZXk9eyBneW0uX2lkIH0gZ3ltPXsgZ3ltIH0gY2xhc3NOYW1lPVwiZ3ltLWl0ZW1cIiAvPikpXG59XG5cbmNsYXNzIEd5bUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnQtdGl0bGVcIj5HeW1zOjwvc3Bhbj5cbiAgICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXsgISF0aGlzLnByb3BzLmd5bXMubGVuZ3RoIH0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCIwXCIgY2xhc3NOYW1lPVwiZ3ltLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiMVwiIGNsYXNzTmFtZT1cImd5bS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICB7IGxpc3RHeW1zKHRoaXMucHJvcHMuZ3ltcykgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xvYWRDb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBneW1zOiBzdGF0ZS5neW1zLFxuICAgICAgICBmZXRjaGluZzogc3RhdGUuZmV0Y2hpbmdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwUHJvcHMpKEd5bUxpc3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1MaXN0L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgYXJyb3dzID0geyBcbiAgICAnYXNjJzogJ1xcdTI1QjInLFxuICAgICdkZXNjJzogJ1xcdTI1QkMnXG59XG5cblxuY29uc3QgUm91dGVIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgICBmdW5jdGlvbiBhcnJvdyhwYXJhbSkge1xuICAgICAgICByZXR1cm4gcHJvcHMuc29ydCA9PT0gcGFyYW0/IGFycm93c1twcm9wcy5kaXJdIDogbnVsbFxuICAgIH0gXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGFibGUtY2VudGVyXCI+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ2NyZWF0ZWRfYXQnKX0+RGF0ZSB7YXJyb3coJ2NyZWF0ZWRfYXQnKX08L3RoPlxuICAgICAgICAgIDx0aCBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTb3J0KCdncmFkZScpfT5HcmFkZSB7YXJyb3coJ2dyYWRlJyl9PC90aD5cbiAgICAgICAgICA8dGggb25DbGljaz17cHJvcHMuaGFuZGxlU29ydCgnY29sb3InKX0+Q29sb3Ige2Fycm93KCdjb2xvcicpfTwvdGg+XG4gICAgICAgICAgPHRoIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVNvcnQoJ3NldHRlcicpfT5TZXR0ZXIge2Fycm93KCdzZXR0ZXInKX08L3RoPlxuICAgICAgICAgIDx0aD5FZGl0PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgKVxufVxuXG5Sb3V0ZUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gICAgaGFuZGxlU29ydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcvY29tcG9uZW50cy9yb3V0ZUhlYWRlci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBSb3V0ZVJvdyBmcm9tICcuL3JvdXRlUm93J1xuaW1wb3J0IFJvdXRlSGVhZGVyIGZyb20gJy4vcm91dGVIZWFkZXInXG5cbmNsYXNzIFJvdXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvdXRlczogdGhpcy5wcm9wcy5yb3V0ZXNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHQpIHtcbiAgICAgICAgaWYobmV4dC5yb3V0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvdXRlczogbmV4dC5yb3V0ZXN9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5oYW5kbGVTb3J0ID0gdGhpcy5oYW5kbGVTb3J0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSB0YWJsZS1tb2JpbGUgdGFibGUtZml4ZWQnPlxuICAgICAgICA8Um91dGVIZWFkZXIgaGFuZGxlU29ydD17IHRoaXMuaGFuZGxlU29ydCB9IHNvcnQ9e3RoaXMuc3RhdGUuc29ydH0gZGlyPXt0aGlzLnN0YXRlLmRpcn0vPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgeyB0aGlzLnN0YXRlLnJvdXRlcy5tYXAocm91dGUgPT4gKFxuICAgICAgICAgICAgICA8Um91dGVSb3cga2V5PXsgcm91dGUuX2lkICsgcm91dGUudXBkYXRlZF9hdCB9IHJvdXRlPXsgcm91dGUgfSB1cGRhdGVSb3V0ZT17dGhpcy51cGRhdGVSb3V0ZX0gdGVhbT17dGhpcy5wcm9wcy50ZWFtfS8+XG4gICAgICAgICAgICApKSB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgaGFuZGxlU29ydCA9IChwYXJhbSkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1JvdXRlcyA9IFsuLi50aGlzLnN0YXRlLnJvdXRlc10sIGRpclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zb3J0ID09PSBwYXJhbSkge1xuICAgICAgICAgICAgICAgIG5ld1JvdXRlcy5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICBkaXIgPSB0aGlzLnN0YXRlLmRpciA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3J0T24obmV3Um91dGVzLCBwYXJhbSlcbiAgICAgICAgICAgICAgICBkaXIgPSAnYXNjJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkaXIsXG4gICAgICAgICAgICAgICAgc29ydDogcGFyYW0sXG4gICAgICAgICAgICAgICAgcm91dGVzOiBuZXdSb3V0ZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSb3V0ZSA9IChuZXdSb3V0ZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvdXRlczogdGhpcy5zdGF0ZS5yb3V0ZXMubWFwKHJvdXRlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGUuX2lkID09PSBuZXdSb3V0ZS5faWQ/IG5ld1JvdXRlIDogcm91dGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUm91dGUobmV3Um91dGUpXG4gICAgfVxufVxuXG5Sb3V0ZUxpc3QucHJvcFR5cGVzID0ge1xuICAgIHJvdXRlczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRlYW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdXBkYXRlUm91dGU6IFByb3BUeXBlcy5mdW5jXG59XG5cbmZ1bmN0aW9uIHNvcnRPbiAoYXJyLCBwcm9wKSB7XG4gICAgaWYocHJvcCA9PT0gJ2dyYWRlJykge1xuICAgICAgICByZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IGFbcHJvcF0gLSBiW3Byb3BdKVxuICAgIH1cbiAgICBhcnIuc29ydChcbiAgICAgICAgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhW3Byb3BdIDwgYltwcm9wXSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFbcHJvcF0gPiBiW3Byb3BdKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMCAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZUxpc3RcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9jb21wb25lbnRzL3JvdXRlTGlzdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCBSdFN3YXRjaCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9ydFN3YXRjaCdcbmltcG9ydCBGbGV4Um93IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZsZXhSb3cnXG5cbmNsYXNzIFJvdXRlUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZWRpdDogZmFsc2VcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZWRpdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHRlYW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHVwZGF0ZVJvdXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgZGVsZXRlUm91dGU6IFByb3BUeXBlcy5mdW5jXG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiBuZXh0UHJvcHMucm91dGUudXBkYXRlZF9hdCAhPT0gdGhpcy5wcm9wcy5yb3V0ZS51cGRhdGVkX2F0IHx8IHRoaXMuc3RhdGUuZWRpdCAhPT0gbmV4dFN0YXRlLmVkaXRcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmVkaXQgPyAoXG4gICAgICA8dHIgY2xhc3NOYW1lPVwidGFibGUtY2VudGVyXCI+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJneW0tcm93X19kYXRlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiaW5wdXQtc20gZm9ybS1jb250cm9sXCIgbmFtZT1cInNldF9vblwiIG9uQ2hhbmdlPXsgdGhpcy51cGRhdGVGaWVsZCB9IGRlZmF1bHRWYWx1ZT17IG5ldyBEYXRlKHRoaXMucHJvcHMucm91dGUuc2V0X29uKS50b0xvY2FsZURhdGVTdHJpbmcoKSB9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dC1zbSBmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZ3JhZGVcIiBvbkNoYW5nZT17IHRoaXMudXBkYXRlRmllbGQgfSBkZWZhdWx0VmFsdWU9eyB0aGlzLnByb3BzLnJvdXRlLmdyYWRlIH0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0LXNtIGZvcm0tY29udHJvbFwiIG5hbWU9XCJjb2xvclwiIG9uQ2hhbmdlPXsgdGhpcy51cGRhdGVGaWVsZCB9IGRlZmF1bHRWYWx1ZT17IHRoaXMucHJvcHMucm91dGUuY29sb3IgfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJpbnB1dC1zbSBmb3JtLWNvbnRyb2xcIiBuYW1lPVwic2V0dGVyXCIgb25CbHVyPXsgdGhpcy51cGRhdGVGaWVsZCB9IGRlZmF1bHRWYWx1ZT17IHRoaXMucHJvcHMucm91dGUuc2V0dGVyIH0+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMudGVhbS5tZW1iZXJzLm1hcChzZXR0ZXIgPT4gKDxvcHRpb24ga2V5PXsgc2V0dGVyLl9pZCB9IHZhbHVlPXsgc2V0dGVyLm5pY2tuYW1lIH0+IHsgc2V0dGVyLm5pY2tuYW1lIH0gPC9vcHRpb24+KSkgfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ3ltLXJvd19fZWRpdFwiPlxuICAgICAgICAgIDxGbGV4Um93IGlubGluZSBzdHlsZT17IHsgd2lkdGg6ICc4MCUnIH0gfT5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eyB0aGlzLmNhbmNlbEVkaXQgfSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZUVkaXQgfSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17IHRoaXMuZGVsZXRlUm91dGUgfSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXCI+PC9zcGFuPlxuICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICApIDogKFxuICAgICAgPHRyIGNsYXNzTmFtZT1cInRhYmxlLWNlbnRlclwiPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ3ltLXJvd19fZGF0ZVwiPlxuICAgICAgICAgIHsgbmV3IERhdGUodGhpcy5wcm9wcy5yb3V0ZS5zZXRfb24pLnRvTG9jYWxlRGF0ZVN0cmluZygpIH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5yb3V0ZS5ncmFkZSB9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7IDxSdFN3YXRjaCBjbGFzc05hbWU9XCJsaXN0X19zd2F0Y2hcIiBjb2xvcj17IHRoaXMucHJvcHMucm91dGUuY29sb3IgfSAvPiB9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICB7IHRoaXMucHJvcHMucm91dGUuc2V0dGVyIH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZUVkaXQgfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFwiPjwvc3Bhbj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICApXG4gICAgfVxuXG4gICAgY2FuY2VsRWRpdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0OiAhdGhpcy5zdGF0ZS5lZGl0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlRWRpdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVSb3V0ZSh0aGlzLnJvdXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMucm91dGUpXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0OiAhdGhpcy5zdGF0ZS5lZGl0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVsZXRlUm91dGUgPSAoKSA9PiB7XG4gICAgfVxuXG4gICAgdXBkYXRlRmllbGQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGZpZWxkID0gZXZlbnQudGFyZ2V0Lm5hbWVcbiAgICAgICAgdGhpcy5yb3V0ZVtmaWVsZF0gPSBldmVudC50YXJnZXQudmFsdWVcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZVJvd1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvcm91dGVSb3cuanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJ0Q2FyZCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9ydENhcmQnXG5cbmNsYXNzIFN0YXRzQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHRoaXMubWFrZU92ZXJ2aWV3KHRoaXMucHJvcHMuZGF0YSl9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmKCF0aGlzLnN0YXRlKSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJ0Q2FyZCB0aXRsZT1cIkhleSFcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Q291bnQ6IHt0aGlzLnN0YXRlLmRhdGEuY291bnR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlJvdXRlcyBOZWVkZWQ6IE4vQTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5PbGRlc3QgUm91dGU6IHt0aGlzLnN0YXRlLmRhdGEub2xkZXN0fTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvUnRDYXJkPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbWFrZU92ZXJ2aWV3KGRhdGEpIHtcblxuICAgICAgICBsZXQgbWluID0gSW5maW5pdHlcblxuICAgICAgICBkYXRhLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgICAgICAgaWYobWluID4gRGF0ZS5wYXJzZShyb3V0ZS5jcmVhdGVkX2F0KSkgbWluID0gcm91dGUuY3JlYXRlZF9hdFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY291bnQ6IGRhdGEubGVuZ3RoLFxuICAgICAgICAgICAgb2xkZXN0OiBuZXcgRGF0ZShtaW4pLnRvTG9jYWxlRGF0ZVN0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblN0YXRzQ2FyZC5wcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHNDYXJkXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL2d5bU92ZXJ2aWV3L2NvbXBvbmVudHMvc3RhdHNDYXJkLmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBSdEJpZ0JhciBmcm9tICdjb21wb25lbnRzL3J0Q2hhcnQvcnRCaWdCYXInXG5pbXBvcnQgTG9hZENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9sb2FkQ29udGFpbmVyJ1xuaW1wb3J0IExvYWRCYXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9hZEJhcidcbmltcG9ydCBTdGF0c0NhcmQgZnJvbSAnLi9jb21wb25lbnRzL3N0YXRzQ2FyZCdcbmltcG9ydCBSb3V0ZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlTGlzdCdcblxuaW1wb3J0IHsgZ2V0VGVhbSB9IGZyb20gJ2RhdGEvYWN0aW9ucy90ZWFtJ1xuaW1wb3J0IHsgZ2V0Um91dGVzQnlHeW0sIHB1dFJvdXRlIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3JvdXRlJ1xuXG5pbXBvcnQgcGkgZnJvbSAncnR1dGlsJ1xuXG5jbGFzcyBHeW1PdmVydmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGxvYWRlZDogZmFsc2VcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0gIHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZ3ltOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBnZXRSb3V0ZXM6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBnZXRUZWFtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbWF0Y2g6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHRlYW06IFByb3BUeXBlcy5vYmplY3RcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXREYXRhRm9yR3ltKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm5hbWUpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5neW0gJiYgbmV4dFByb3BzLmd5bSAmJiB0aGlzLnByb3BzLmd5bS5uYW1lICE9PSBuZXh0UHJvcHMuZ3ltLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlZDogZmFsc2V9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmdldERhdGFGb3JHeW0obmV4dFByb3BzLmd5bS51cmwpLCAzMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSByZXR1cm4gPFJlZGlyZWN0IHRvPScvJyAvPlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExvYWRDb250YWluZXIgbG9hZGVkPXsgdGhpcy5zdGF0ZS5sb2FkZWQgfT5cbiAgICAgICAgICAgICAgPExvYWRCYXIvPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBrZXk9e3RoaXMucHJvcHMuZ3ltICYmIHRoaXMucHJvcHMuZ3ltLm5hbWV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnQtdGl0bGUgYnMtMVwiPnsgdGhpcy5wcm9wcy5neW0gJiYgdGhpcy5wcm9wcy5neW0ubmFtZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tOFwiPlxuICAgICAgICAgICAgICAgICAgICA8UnRCaWdCYXIgZGF0YT17IHRoaXMucHJvcHMuY291bnQgfSB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjIwMFwiPjwvUnRCaWdCYXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLXhzLTEyIGNvbC1ucFwiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhdHNDYXJkIGRhdGE9eyB0aGlzLnByb3BzLmRhdGEgfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZUxpc3Qgcm91dGVzPXt0aGlzLnByb3BzLmRhdGF9IHVwZGF0ZVJvdXRlPXt0aGlzLnByb3BzLnVwZGF0ZVJvdXRlfSB0ZWFtPXt0aGlzLnByb3BzLnRlYW19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvTG9hZENvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldERhdGFGb3JHeW0obmFtZSkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFRlYW0oKVxuICAgICAgICAgICAgLnRoZW4odGVhbSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRHeW0gPSB0ZWFtLmd5bXMuZmlsdGVyKGd5bSA9PiBuYW1lID09PSBneW0udXJsKVswXVxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudEd5bSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ2V0Um91dGVzKGN1cnJlbnRHeW0uX2lkKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGxldCBneW0gPSBzdGF0ZS5neW1zLmZpbHRlcihneW0gPT4gZ3ltLnVybCA9PT0gb3duUHJvcHMubWF0Y2gucGFyYW1zLm5hbWUpWzBdXG4gICAgbGV0IHJvdXRlcyA9IHN0YXRlLnJvdXRlcy5maWx0ZXIocm91dGUgPT4gcm91dGUuZ3ltID09PSBneW0uX2lkKVxuICAgIGxldCBoYXNoID0gcm91dGVzLmhhc2hDb2RlKClcbiAgICBsZXQgYXJyID0gcm91dGVzLnRvQXJyYXkoKVxuICAgIHJldHVybiB7XG4gICAgICAgIGd5bTogZ3ltLFxuICAgICAgICBkYXRhOiBhcnIsXG4gICAgICAgIGNvdW50OiB0cmFuc2Zvcm1Sb3V0ZXMoYXJyKSxcbiAgICAgICAgdGVhbTogc3RhdGUudGVhbVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUZWFtOiAoKSA9PiBkaXNwYXRjaChnZXRUZWFtKCkpLFxuICAgICAgICBnZXRSb3V0ZXM6IChpZCkgPT4gZGlzcGF0Y2goZ2V0Um91dGVzQnlHeW0oaWQpKSxcbiAgICAgICAgdXBkYXRlUm91dGU6IChyb3V0ZSkgPT4gZGlzcGF0Y2gocHV0Um91dGUocm91dGUpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEd5bU92ZXJ2aWV3KVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMoYm91bGRlcnMpIHtcbiAgICBsZXQgc29ydGVkID0gcGkuYnVja2V0cyhib3VsZGVycy5tYXAoYm91bGRlciA9PiBib3VsZGVyLmdyYWRlKSwgcGkucmFuZ2UoMTMpKVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3J0ZWQpLm1hcChrZXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JhZGU6IGtleSxcbiAgICAgICAgICAgIGNvdW50OiBzb3J0ZWRba2V5XVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9neW1PdmVydmlldy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRUZWFtIH0gZnJvbSAnZGF0YS9hY3Rpb25zL3RlYW0nXG5pbXBvcnQgeyBnZXRHeW1zIH0gZnJvbSAnZGF0YS9hY3Rpb25zL2d5bSdcblxuaW1wb3J0IFJ0SGVhZGVyIGZyb20gJy4vcnRIZWFkZXInXG5pbXBvcnQgUnRDb250ZW50IGZyb20gJy4vcnRDb250ZW50J1xuaW1wb3J0IFJ0U2lkZWJhciBmcm9tICcuL3J0U2lkZWJhcidcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7IFxuICAgICAgICB0aGlzLnByb3BzLmdldFRlYW0oKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UnRIZWFkZXIvPlxuICAgICAgICAgICAgICAgIHsvKjxSdFNpZGViYXIvPiovfVxuICAgICAgICAgICAgICAgIDxSdENvbnRlbnQvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuTWFpbi5wcm9wVHlwZXMgPSB7XG4gICAgZ2V0VGVhbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBnZXRHeW1zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGVhbTogc3RhdGUudGVhbSxcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltcyxcbiAgICAgICAgbG9jYXRpb246IHN0YXRlLnJvdXRlci5sb2NhdGlvblxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUZWFtOiAoKSA9PiBkaXNwYXRjaChnZXRUZWFtKCkpLFxuICAgICAgICBnZXRHeW1zOiAodGVhbSkgPT4gZGlzcGF0Y2goZ2V0R3ltcyh0ZWFtKSlcbiAgICB9XG59XG5cblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShNYWluKVxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRhaW5lclxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1JvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IEd5bUxpc3QgZnJvbSAnY29tcG9uZW50cy9neW1MaXN0J1xuaW1wb3J0IEd5bU92ZXJ2aWV3IGZyb20gJ2NvbXBvbmVudHMvZ3ltT3ZlcnZpZXcnXG5pbXBvcnQgQWNjb3VudCAgZnJvbSAnY29tcG9uZW50cy9hY2NvdW50J1xuXG5pbXBvcnQgUnRXaXphcmRDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9ydFdpemFyZCdcblxuY2xhc3MgUnRDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0d5bUxpc3R9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9neW1zLzpuYW1lJyBjb21wb25lbnQ9e0d5bU92ZXJ2aWV3fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWRkJyBjb21wb25lbnQ9e1J0V2l6YXJkQ29udGFpbmVyfS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvYWNjb3VudCcgY29tcG9uZW50PXtBY2NvdW50fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0Q29udGVudFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvbWFpbi9ydENvbnRlbnQvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTmF2RHJvcGRvd24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgTGlua0NvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXJvdXRlci1ib290c3RyYXAnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNsYXNzIFJ0SGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICA8TmF2YmFyIGludmVyc2UgY29sbGFwc2VPblNlbGVjdCBmbHVpZD5cbiAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlJvdXRldHJhY2tlcjwvTGluaz5cbiAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSAvPlxuICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgIDxOYXZEcm9wZG93biBldmVudEtleT17IDMgfSB0aXRsZT1cIkd5bXNcIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZ3ltcyA/IHRoaXMucHJvcHMuZ3ltcy5tYXAoZ3ltID0+IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIGtleT17Z3ltLl9pZH0gdG89eyAnL2d5bXMvJyArIGd5bS51cmwgfT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17IGd5bS5faWQgfSBldmVudEtleT17IDMuMSB9PlxuICAgICAgICAgICAgICAgICAgICB7IGd5bS5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICApKSA6IG51bGwgfVxuICAgICAgICAgICAgICA8TWVudUl0ZW0gZGl2aWRlci8+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17IDMuMyB9PlNlcGFyYXRlZCBsaW5rPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9hZGRcIj5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9eyAyIH0+QWRkPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9nb3V0XCI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsgMSB9IGhyZWY9XCIjXCI+TG9nb3V0PC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvYWNjb3VudFwiPlxuICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17IDIgfSBocmVmPVwiI1wiPk15IEFjY291bnQ8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3ltczogc3RhdGUuZ3ltc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSkoUnRIZWFkZXIpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9tYWluL3J0SGVhZGVyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJ1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgbWVudSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCb3VsZGVyaW5nJyxcbiAgICAgICAgdG86ICdneW1zJyxcbiAgICAgICAgaWNvbjogJ2dseXBoaWNvbi1zdW5nbGFzc2VzJ1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1Nwb3J0JyxcbiAgICAgICAgdG86ICdib3VsZGVyaW5nJyxcbiAgICAgICAgaWNvbjogJ2dseXBoaWNvbi1maXJlJ1xuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RvcHJvcGUnLFxuICAgICAgICB0bzogJ2JvdWxkZXJpbmcnLFxuICAgICAgICBpY29uOiAnZ2x5cGhpY29uLWJhYnktZm9ybXVsYSdcbiAgICB9XG5dXG5cbmNvbnN0IFJ0U2lkZWJhciA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJ0LXNpZGViYXIgcDEwXCI+XG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgICAgIHttZW51Lm1hcChpdGVtID0+ICg8TWVudUl0ZW0ga2V5PXtpdGVtLm5hbWV9IGl0ZW09e2l0ZW19Lz4pKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvUm91dGVyPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSdFNpZGViYXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vcnRTaWRlYmFyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgTWVudUl0ZW0gPSAoe2l0ZW19KSA9PiAoXG4gICAgPExpbmsgdG89eycvJyArIGl0ZW0udG99IGNsYXNzTmFtZT1cInNpZGViYXItbGlua1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXsnZ2x5cGhpY29uICcgKyBpdGVtLmljb259PjwvaT5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbilcblxuTWVudUl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGl0ZW06IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuTWVudUl0ZW0uY29udGV4dFR5cGVzID0ge1xuICAgIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL21haW4vcnRTaWRlYmFyL21lbnVJdGVtLmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuY2xhc3MgUnRCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBtYWtlQ2hhcnQuYXBwbHkodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj17KGVsKSA9PiB0aGlzLmVsID0gZWx9PjwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdEJhclxuXG5mdW5jdGlvbiBtYWtlQ2hhcnQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRhdGEpIFxuICAgICAgICByZXR1cm5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhXG5cbiAgICBjb25zdCB3aWR0aCA9IE51bWJlcih0aGlzLnByb3BzLndpZHRoKSB8fCA1MDBcbiAgICBjb25zdCBoZWlnaHQgPSBOdW1iZXIodGhpcy5wcm9wcy5oZWlnaHQpIHx8IDIwMFxuICAgIGNvbnN0IGJhcldpZHRoID0gd2lkdGggLyBkYXRhLmxlbmd0aFxuXG4gICAgY29uc3QgeSA9IGQzXG4gICAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oW1xuICAgICAgICAgICAgMCwgZDMubWF4KGRhdGEpXG4gICAgICAgIF0pXG4gICAgICAgIC5yYW5nZShbMCwgaGVpZ2h0XSlcblxuICAgIGNvbnN0IHJhaW5ib3cgPSBkM1xuICAgICAgICAuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdylcbiAgICAgICAgLmRvbWFpbihbMCwgZGF0YS5sZW5ndGhdKVxuXG4gICAgY29uc3QgY2hhcnQgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMuZWwpXG4gICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuXG4gICAgY29uc3QgYmFyID0gY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBpICogYmFyV2lkdGggKyAnLCAwKSdcbiAgICAgICAgfSlcblxuICAgIGJhclxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmNsYXNzZWQoJ3J0LWJhcicsIHRydWUpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIGJhcldpZHRoIC0gMSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDApXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgKGQpID0+ICsgZFxuICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICA6IDAuNClcbiAgICAgICAgLmF0dHIoJ3knLCBoZWlnaHQpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiByYWluYm93KGkpXG4gICAgICAgIH0pXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmRlbGF5KCgpID0+IDQwMCAtIE1hdGgucmFuZG9tKCkqMTAwKVxuICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwSW4pXG4gICAgICAgIC5hdHRyKCd5JywgKGQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBoZWlnaHQgLSB5KGQpIC0gM1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IHkoZCkgKyAzKVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRDaGFydC9ydEJhci5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCBkM3RpcCBmcm9tICdkMy10aXAnXG5kMy50aXAgPSBkM3RpcFxuXG5jbGFzcyBSdEJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIG1ha2VDaGFydC5hcHBseSh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPXsgKGVsKSA9PiB0aGlzLmVsID0gZWwgfT48L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnRCYXJcblxuZnVuY3Rpb24gbWFrZUNoYXJ0KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kYXRhKVxuICAgICAgICByZXR1cm5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhXG5cbiAgICBjb25zdCB3aWR0aCA9IDUwMFxuICAgIGNvbnN0IGhlaWdodCA9IDI4OFxuICAgIGNvbnN0IGJhcldpZHRoID0gd2lkdGggLyBkYXRhLmxlbmd0aFxuXG4gICAgY29uc3QgeSA9IGQzXG4gICAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oW1xuICAgICAgICAgICAgMCwgZDMubWF4KGRhdGEsIChkKSA9PiBkLmNvdW50KVxuICAgICAgICBdKVxuICAgICAgICAucmFuZ2UoWzAsIGhlaWdodF0pXG5cbiAgICBjb25zdCByYWluYm93ID0gZDNcbiAgICAgICAgLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpXG4gICAgICAgIC5kb21haW4oWzAsIGRhdGEubGVuZ3RoXSlcblxuICAgIGNvbnN0IGZvbnRTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMzIwLCA1MDBdKSAvLyBleHBlY3RlZCBsaW1pdHMgb2YgU1ZHIHdpZHRoXG4gICAgICAgIC5yYW5nZShbMzAsIDE1XSkgLy8gd2hlbiBTVkcgaXMgMS8yIHdpZHRoLCB0ZXh0IHdpbGwgYmUgMi8zIHNpemVcbiAgICAgICAgLmNsYW1wKHRydWUpXG5cbiAgICBjb25zdCBjaGFydCA9IGQzXG4gICAgICAgIC5zZWxlY3QodGhpcy5lbClcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSA1MDAgMzAwJylcbiAgICAgICAgLmF0dHIoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaW4gbWVldCcpXG4gICAgICAgIC5jbGFzc2VkKCd3MTAwJywgdHJ1ZSlcbiAgICAgICAgLmNsYXNzZWQoJ2NoYXJ0IGJzLTEnLCB0cnVlKVxuXG4gICAgY29uc3QgYmFyID0gY2hhcnRcbiAgICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIGkgKiBiYXJXaWR0aCArICcsIDApJ1xuICAgICAgICB9KVxuXG4gICAgdmFyIHRpcCA9IGQzLnRpcCgpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdkMy10aXAnKVxuICAgICAgICAub2Zmc2V0KFstMTAsIDBdKVxuICAgICAgICAuaHRtbChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxzdHJvbmc+VG90YWw6PC9zdHJvbmc+IDxzcGFuIHN0eWxlPVxcJ2NvbG9yOiNmZjAwNDRcXCc+JyArIGQuY291bnQgKyAnPC9zcGFuPidcbiAgICAgICAgfSlcblxuICAgIGNoYXJ0LmNhbGwodGlwKVxuXG4gICAgYmFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5jbGFzc2VkKCdydC1iYXInLCB0cnVlKVxuICAgICAgICAuYXR0cignd2lkdGgnLCBiYXJXaWR0aCAtIDUpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIChkKSA9PiArZC5jb3VudCA/IDEgOiAwLjQpXG4gICAgICAgIC5hdHRyKCd5JywgaGVpZ2h0ICsgMSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFpbmJvdyhpKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIHRpcC5zaG93KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgdGlwLmhpZGUpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmRlbGF5KCgpID0+IDQwMCAtIE1hdGgucmFuZG9tKCkqMTAwKVxuICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAuZWFzZShkMy5lYXNlRXhwSW4pXG4gICAgICAgIC5hdHRyKCd5JywgKGQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBoZWlnaHQgLSB5KGQuY291bnQpXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoZCkgPT4geShkLmNvdW50KSArIDMpXG5cbiAgICBiYXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmNsYXNzZWQoJ3J0LW1hcmtlcicsIHRydWUpXG4gICAgICAgIC5hdHRyKCd5JywgaGVpZ2h0IC0gNylcbiAgICAgICAgLmF0dHIoJ3gnLCBiYXJXaWR0aCAvIDIgLSA0KVxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnRleHQoZCA9PiBkLmdyYWRlKVxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgJzE0cHgnKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxuXG5cbiAgICB3aW5kb3cub25yZXNpemUgPSByZXNpemVkXG5cbiAgICBmdW5jdGlvbiByZXNpemVkKCkge1xuICAgICAgICB2YXIgc2NhbGUgPSBmb250U2NhbGUoY2hhcnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKVxuICAgICAgICB2YXIgdGV4dCA9IGQzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIHRleHQuYXR0cignZm9udC1zaXplJywgc2NhbGUgKyAncHgnKVxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0Q2hhcnQvcnRCaWdCYXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXekNvbnRhaW5lciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3otYmlnLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXdpbmdcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otaW5uZXJcIiBzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsocHJvcHMuc3RlcCkgKiAtMTYuNn0lKWB9fT5cbiAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwgZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXdpbmdcIj4gPC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFd6Q29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvY29tcG9uZW50cy93ekNvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY29sb3IgZnJvbSAnc2VydmljZXMvY29sb3JTZXJ2aWNlJ1xuXG5jb25zdCBXekl0ZW0gPSAocHJvcHMpID0+IHtcbiAgICBmdW5jdGlvbiBfY2xpY2soKSB7XG4gICAgICAgIHByb3BzLnVwZGF0ZShwcm9wcy50eXBlLHByb3BzLml0ZW0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtfY2xpY2t9IGNsYXNzTmFtZT17c2V0Q2xhc3MocHJvcHMpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcHJvcHMuaXRlbS5jb2xvcj8gcHJvcHMuaXRlbS5jb2xvciA6ICd3aGl0ZScsIGNvbG9yOiBwcm9wcy5pdGVtLmNvbG9yPyBjb2xvci50ZXh0Q29sb3IocHJvcHMuaXRlbS5jb2xvcikgOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBncmlkLWxhYmVsXCIgb25DbGljaz17X2NsaWNrfT57cHJvcHMuaXRlbS52YWx1ZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuV3pJdGVtLnByb3BUeXBlcyA9IHtcbiAgICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGl0ZW06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhwcm9wcykge1xuICAgIHJldHVybiAnd3otZG90ICcgKyAocHJvcHMuc2VsZWN0ZWQ/ICdpdGVtLXNlbGVjdGVkJyA6ICcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXekl0ZW1cbiAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pJdGVtLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgV3pMaXN0SXRlbSA9IChwcm9wcykgPT4ge1xuICAgIGZ1bmN0aW9uIF9jbGljaygpIHtcbiAgICAgICAgcHJvcHMudXBkYXRlKHByb3BzLnR5cGUsIHByb3BzLml0ZW0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3NldENsYXNzKHByb3BzKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgbGlzdC1sYWJlbFwiIG9uQ2xpY2s9e19jbGlja30+e3Byb3BzLml0ZW0udmFsdWUgfHwgcHJvcHMuaXRlbX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhwcm9wcykge1xuICAgIHJldHVybiAnd3otbGlzdC1pdGVtICcgKyAocHJvcHMuc2VsZWN0ZWQ/ICdpdGVtLXNlbGVjdGVkJyA6ICcnKVxufVxuXG5Xekxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpdGVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBXekxpc3RJdGVtXG4gICAgICAgICAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6TGlzdEl0ZW0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBXelBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMucHJldi5iaW5kKHRoaXMpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHAxMGIgaGlkZGVuLXhzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e3RoaXMucHJldn0+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgb25DbGljaz17dGhpcy5uZXh0IH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXh0KDEpXG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcmV2KC0xKVxuICAgIH1cbn1cblxuV3pQYWdlLnByb3BUeXBlcyA9IHtcbiAgICBwcmV2OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBuZXh0OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBXelBhZ2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvY29tcG9uZW50cy9ydFdpemFyZC9jb21wb25lbnRzL3d6UGFnZS5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUnRTd2F0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vcnRTd2F0Y2gnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBwb3N0Um91dGUgfSBmcm9tICdkYXRhL2FjdGlvbnMvcm91dGUnXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblRvb2xiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cblxuY2xhc3MgV3pQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtZWRSb3V0ZSA9IHRyYW5zZm9ybVJvdXRlKHRoaXMucHJvcHMucm91dGUpXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybWVkUm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMudHJhbnNmb3JtZWRSb3V0ZT8gKFxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInd6X2xpc3QgcDEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3el9saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVHlwZToge3RoaXMucHJvcHMucm91dGUudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInd6X2xpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICBDb2xvcjogXG4gICAgICAgICAgICAgICAgICAgICAgPFJ0U3dhdGNoIGNvbG9yPXsgdGhpcy5wcm9wcy5yb3V0ZS5jb2xvciB8fCBmYWxzZSB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3el9saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgR3JhZGU6IHt0aGlzLnByb3BzLnJvdXRlLmdyYWRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid3pfbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEd5bToge3RoaXMucHJvcHMucm91dGUuZ3ltLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3el9saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgV2FsbDoge3RoaXMucHJvcHMucm91dGUubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3el9saXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGFnczoge3RoaXMucHJvcHMucm91dGUudGFncy5qb2luKCcsICcpfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cImluZm9cIiBvbkNsaWNrPXt0aGlzLmVkaXR9PkVkaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucG9zdFJvdXRlfT5BZGQgUm91dGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcG9zdFJvdXRlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnBvc3RSb3V0ZSh0aGlzLnRyYW5zZm9ybWVkUm91dGUpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldCgpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZWRpdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5tb3ZlKC0xKVxuICAgIH1cbn1cblxuV3pQcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgICByb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBncmFkZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcmVzZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvc3RSb3V0ZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGUob2JqKSB7XG4gICAgaWYgKG9iai5neW0gJiYgb2JqLmdyYWRlICYmIG9iai5jb2xvciAmJiBvYmoudGFncyAmJiBvYmoubG9jYXRpb24pXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBvYmoudHlwZSxcbiAgICAgICAgICAgIGNvbG9yOiBvYmouY29sb3IudmFsdWUsXG4gICAgICAgICAgICBncmFkZTogb2JqLmdyYWRlLl9pZCxcbiAgICAgICAgICAgIGd5bTogb2JqLmd5bS5faWQsXG4gICAgICAgICAgICB3YWxsOiBvYmoubG9jYXRpb24sXG4gICAgICAgICAgICB0YWdzOiBvYmoudGFncy5qb2luKCcsICcpLFxuICAgICAgICAgICAgc2V0X29uOiBEYXRlLm5vdygpXG4gICAgICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZTogc3RhdGUucm91dGUsXG4gICAgICAgIGdyYWRlczogc3RhdGUudGVhbS5ncmFkZXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdFJvdXRlOiAocm91dGUpID0+IGRpc3BhdGNoKHBvc3RSb3V0ZShyb3V0ZSkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoV3pQcmV2aWV3KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pQcmV2aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBXelBhZ2UgZnJvbSAnLi93elBhZ2UnXG5pbXBvcnQgUnRDYXJkIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3J0Q2FyZCdcblxuY29uc3QgV3pTdGVwID0gKHByb3BzKSA9PiB7XG4gICAgaWYocHJvcHMucmV2aWV3KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzXCI+PC9kaXY+XG4gICAgICAgICAgICA8UnRDYXJkIHRpdGxlPXtwcm9wcy5uYW1lfT57cHJvcHMuY2hpbGRyZW59PC9SdENhcmQ+XG4gICAgICAgICAgPC9kaXY+KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3otaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoMyB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgeyBwcm9wcy5uYW1lIH06PC9kaXY+XG4gICAgICA8V3pQYWdlIG5leHQ9e3Byb3BzLm5leHR9IHByZXY9e3Byb3BzLnByZXZ9Lz5cbiAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuV3pTdGVwLnByb3BUeXBlcyA9IHtcbiAgICByZXZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIG5leHQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIHByZXY6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFd6U3RlcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9jb21wb25lbnRzL3J0V2l6YXJkL2NvbXBvbmVudHMvd3pTdGVwLmpzeCIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUnRXaXphcmQgZnJvbSAnLi9ydFdpemFyZCdcbmltcG9ydCB7dXBkYXRlUm91dGUsIHVwZGF0ZVRhZ3MsIHJlc2V0V2l6YXJkfSBmcm9tICdkYXRhL2FjdGlvbnMvd2l6YXJkJ1xuaW1wb3J0IHtnZXRUZWFtfSBmcm9tICdkYXRhL2FjdGlvbnMvdGVhbSdcbmltcG9ydCB7Z2V0R3ltc30gZnJvbSAnZGF0YS9hY3Rpb25zL2d5bSdcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGU6IHN0YXRlLnJvdXRlLFxuICAgICAgICB0ZWFtOiBzdGF0ZS50ZWFtLFxuICAgICAgICBneW1zOiBzdGF0ZS5neW1zXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZTogKGZpZWxkLCB2YWx1ZSkgPT4gZGlzcGF0Y2godXBkYXRlUm91dGUoZmllbGQsIHZhbHVlKSksXG4gICAgICAgIHVwZGF0ZVRhZ3M6ICh2YWx1ZSkgPT4gZGlzcGF0Y2godXBkYXRlVGFncyh2YWx1ZSkpLFxuICAgICAgICByZXNldEZvcm06ICgpID0+IGRpc3BhdGNoKHJlc2V0V2l6YXJkKCkpLFxuICAgICAgICBnZXRUZWFtOiAoKSA9PiBkaXNwYXRjaChnZXRUZWFtKCkpLFxuICAgICAgICBnZXRHeW1zOiAoKSA9PiBkaXNwYXRjaChnZXRHeW1zKCkpXG4gICAgfVxufVxuXG5jb25zdCBSdFdpemFyZENvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaCkoUnRXaXphcmQpXG5cbmV4cG9ydCBkZWZhdWx0IFJ0V2l6YXJkQ29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFd6R3JpZCBmcm9tICcuL3d6R3JpZCdcbmltcG9ydCBXekNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvd3pDb250YWluZXInXG5pbXBvcnQgV3pTdGVwIGZyb20gJy4vY29tcG9uZW50cy93elN0ZXAnXG5pbXBvcnQgV3pQcmV2aWV3IGZyb20gJy4vY29tcG9uZW50cy93elByZXZpZXcnXG5pbXBvcnQgU3dpcGUgZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpcGVDb250YWluZXInXG5cbmNsYXNzIFJ0V2l6YXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RlcDogMCxcbiAgICAgICAgICAgIGd5bUZpbHRlcjogdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsaWNrcyA9IDBcbiAgICAgICAgdGhpcy5jbGlja2VkID0gJ2d5bSdcbiAgICAgICAgdGhpcy5zdGVwcyA9IFsnZ3ltJywgJ2NvbG9yJywgJ2dyYWRlJywgJ2xvY2F0aW9uJywgJ3RhZ3MnXVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTd2lwZSBvblN3aXBlPXt0aGlzLm9uU3dpcGV9PlxuICAgICAgICAgICAgPFd6Q29udGFpbmVyIHN0ZXA9e3RoaXMuc3RhdGUuc3RlcH0+XG4gICAgICAgICAgICAgIHsgdGhpcy5zdGVwQ29udGVudCgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0ZXApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXelN0ZXAga2V5PXtzdGVwLm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdGVwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXY9e3RoaXMubW92ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ9e3RoaXMubW92ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy51cGRhdGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ9e3N0ZXAuZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXc9e3N0ZXAucmV2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcC5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XelN0ZXA+KVxuICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgPC9XekNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU3dpcGU+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBvblN3aXBlID0gKGRpcikgPT4ge1xuICAgICAgICBpZiggXG4gICAgICAgICAgICAvLyBsYXN0IHN0ZXBcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLnN0ZXAgIT09IDUgJiYgZGlyIDwgMCkgfHwgISh0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcF0gaW4gdGhpcy5wcm9wcy5yb3V0ZSkpIHJldHVyblxuICAgICAgICBcbiAgICAgICAgbGV0IHRvU3RlcCA9IHRoaXMuc3RhdGUuc3RlcCArIChkaXIgPiAwPyAtMSA6IDEpXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogdG9TdGVwfSlcbiAgICB9XG5cbiAgICBtb3ZlID0gKGRpciwgZmllbGQpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLnN0ZXBcbiAgICAgICAgLy8gY2FsbGVkIGJ5IHVwZGF0ZVxuICAgICAgICBpZihmaWVsZCkgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IGN1cnJlbnQgKyBkaXJ9KVxuICAgICAgICAvLyBjaGVjayBpZiB3ZSd2ZSBtYWRlIGl0IHBhc3QgdGhpcyBzdGVwIGFscmVhZHlcbiAgICAgICAgaWYoY3VycmVudCArIGRpciA8IDAgfHwgISh0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcF0gaW4gdGhpcy5wcm9wcy5yb3V0ZSkgJiYgZGlyID4gMCkgcmV0dXJuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IGN1cnJlbnQgKyBkaXJ9KVxuICAgIH1cblxuICAgIHVwZGF0ZSA9IChmaWVsZCwgdmFsdWUpID0+IHtcbiAgICAgICAgLy8gaGFuZGxlIGRvdWJsZSBjbGlja1xuICAgICAgICBpZiAodGhpcy5jbGlja3MgPiAwICYmIHRoaXMucHJvcHMucm91dGVbZmllbGRdID09PSB2YWx1ZSkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcblxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZShmaWVsZCwgdmFsdWUpXG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5zdGF0ZS5zdGVwICsgMVxuXG4gICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBpZiB3ZSd2ZSBtYW51YWxseSBnb25lIGJhY2t3YXJkcywgZG9uJ3QgbW92ZVxuICAgICAgICAgICAgKCF0aGlzLnByb3BzLnJvdXRlW3RoaXMuc3RlcHNbbmV4dF1dICYmIGZpZWxkICE9PSAndHlwZScpXG4gICAgICAgICAgICAvLyBvciB0aGUgbmV4dCBzdGVwIGlzIG11bHRpcGxlIGNob2ljZVxuICAgICAgICAgICAgfHwgdGhpcy5zdGVwc1tuZXh0XSA9PT0gJ3RhZ3MnXG4gICAgICAgICkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcblxuICAgICAgICAvLyBzdG9yZSBjbGljayBmb3IgZG91YmxlIGNsaWNrXG4gICAgICAgIHRoaXMuY2xpY2tzKytcbiAgICAgICAgdGhpcy5jbGlja2VkID0gZmllbGRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsaWNrcy0tLCA1MDApXG4gICAgfVxuXG4gICAgdXBkYXRlVGFncyA9ICh0YWdzLCB0YWcpID0+IHtcbiAgICAgICAgbGV0IHt2YWx1ZX0gPSB0YWdcbiAgICAgICAgXG4gICAgICAgIC8vIGhhbmRsZSBkb3VibGUgY2xpY2tcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tzID4gMCAmJiB0aGlzLnByb3BzLnJvdXRlLnRhZ3MuaW5kZXhPZih2YWx1ZSkgPj0wICkgcmV0dXJuIHRoaXMubW92ZSgxLCB0cnVlKVxuXG4gICAgICAgIC8vIGlmIHdlJ3ZlIG1hbnVhbGx5IGdvbmUgYmFja3dhcmRzLCBkb24ndCBtb3ZlXG4gICAgICAgIC8vIGlmICghdGhpcy5wcm9wcy5yb3V0ZVt0aGlzLnN0ZXBzW3RoaXMuc3RhdGUuc3RlcCArIDFdXSkgcmV0dXJuIHRoaXMubW92ZSgxLCBmaWVsZClcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVUYWdzKHZhbHVlKVxuXG4gICAgICAgIC8vIHN0b3JlIGNsaWNrIGZvciBkb3VibGUgY2xpY2tcbiAgICAgICAgdGhpcy5jbGlja3MrK1xuICAgICAgICB0aGlzLmNsaWNrZWQgPSB2YWx1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xpY2tzLS0sIDUwMClcbiAgICB9XG5cbiAgICBmaWx0ZXJHeW1zKGd5bXMsIGZpbHRlcikge1xuICAgICAgICBpZighZmlsdGVyKSByZXR1cm4gW11cbiAgICAgICAgcmV0dXJuIGd5bXMuZmlsdGVyKGd5bSA9PiBneW0ud2FsbHNbZmlsdGVyXS5sZW5ndGgpXG4gICAgfVxuXG4gICAgc2V0RmlsdGVyKGZpbHRlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZSgndHlwZScsIGZpbHRlcilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z3ltRmlsdGVyOiBmaWx0ZXJ9KVxuICAgIH1cblxuICAgIHJlc2V0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldEZvcm0oKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiAxfSlcbiAgICB9XG5cbiAgICBzdGVwQ29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ3ltJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd3ei1saXN0LWl0ZW0gJyArICh0aGlzLnN0YXRlLmd5bUZpbHRlciA9PT0gJ2JvdWxkZXInID8gJ2l0ZW0tc2VsZWN0ZWQnIDogJycgKX0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRGaWx0ZXIoJ2JvdWxkZXInKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ei1sYWJlbCBsaXN0LWxhYmVsXCI+Qm91bGRlcmluZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAnd3otbGlzdC1pdGVtICcgKyAodGhpcy5zdGF0ZS5neW1GaWx0ZXIgPT09ICdyb3BlJyA/ICdpdGVtLXNlbGVjdGVkJyA6ICcnICl9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0RmlsdGVyKCdyb3BlJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3otbGFiZWwgbGlzdC1sYWJlbFwiPlJvcGVzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5maWx0ZXJHeW1zKHRoaXMucHJvcHMuZ3ltcywgdGhpcy5zdGF0ZS5neW1GaWx0ZXIpfSByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gc2VsZWN0b3I9eydneW0nfSB1cGRhdGU9e3RoaXMudXBkYXRlfSBsaXN0Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbG9yJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXekdyaWQgaXRlbXM9e3RoaXMucHJvcHMudGVhbS5jb2xvcnN9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2NvbG9yJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0vPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ3JhZGUnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5wcm9wcy5yb3V0ZS50eXBlPyB0aGlzLnByb3BzLnRlYW0uZ3JhZGVzW3RoaXMucHJvcHMucm91dGUudHlwZV0gOiB0aGlzLnByb3BzLnRlYW0uZ3JhZGVzLmJvdWxkZXJ9IHJvdXRlPXt0aGlzLnByb3BzLnJvdXRlfSBzZWxlY3Rvcj17J2dyYWRlJ30gdXBkYXRlPXt0aGlzLnVwZGF0ZX0vPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgPFd6R3JpZCBpdGVtcz17dGhpcy5wcm9wcy5yb3V0ZS5neW0gJiYgdGhpcy5wcm9wcy5yb3V0ZS5neW0ud2FsbHNbdGhpcy5zdGF0ZS5neW1GaWx0ZXJdIHx8IFtdfSByb3V0ZT17dGhpcy5wcm9wcy5yb3V0ZX0gc2VsZWN0b3I9eydsb2NhdGlvbid9IHVwZGF0ZT17dGhpcy51cGRhdGV9IGxpc3QvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndGFncycsXG4gICAgICAgICAgICAgICAgY29udGVudDogKFxuICAgICAgICAgICAgICAgICAgICA8V3pHcmlkIGl0ZW1zPXt0aGlzLnByb3BzLnRlYW0udGFnc30gcm91dGU9e3RoaXMucHJvcHMucm91dGV9IHNlbGVjdG9yPXsndGFncyd9IHVwZGF0ZT17dGhpcy51cGRhdGVUYWdzfSBsaXN0Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgZW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJldmlldzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxXelByZXZpZXcgcm91dGU9e3RoaXMucHJvcHMucm91dGV9IG1vdmU9e3RoaXMubW92ZX0gcmVzZXQ9e3RoaXMucmVzZXRGb3JtfS8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufVxuXG5SdFdpemFyZC5wcm9wVHlwZXMgPSB7XG4gICAgcm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZ3ltczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGVhbTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICByZXNldEZvcm06IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ0V2l6YXJkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvcnRXaXphcmQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFd6TGlzdEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL3d6TGlzdEl0ZW0nXG5pbXBvcnQgV3pJdGVtIGZyb20gJy4vY29tcG9uZW50cy93ekl0ZW0nXG5cbmNvbnN0IFd6R3JpZCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IEVsID0gcHJvcHMubGlzdCA/IFd6TGlzdEl0ZW0gOiBXekl0ZW1cblxuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSAoaXRlbSkgPT4ge1xuICAgICAgICBpZihwcm9wcy5zZWxlY3RvciA9PT0gJ3RhZ3MnKSByZXR1cm4gcHJvcHMucm91dGUudGFncy5pbmRleE9mKGl0ZW0udmFsdWUpID4gLTFcbiAgICAgICAgcmV0dXJuICBwcm9wcy5yb3V0ZVtwcm9wcy5zZWxlY3Rvcl0gPT09IGl0ZW0gXG4gICAgfVxuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInd6LWdyaWRcIj5cbiAgICAgICAgICAgICAgeyBwcm9wcy5pdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxFbCBrZXk9eyBpdGVtLl9pZCB8fCBpdGVtfSBpdGVtPXsgaXRlbSB9IHR5cGU9eyBwcm9wcy5zZWxlY3RvciB9IHVwZGF0ZT17IHByb3BzLnVwZGF0ZSB9IHNlbGVjdGVkPXtpc1NlbGVjdGVkKGl0ZW0pfSAvPlxuICAgICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5cbld6R3JpZC5wcm9wVHlwZXMgPSB7XG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzZWxlY3RvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb3V0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsaXN0OiBQcm9wVHlwZXMub25lT2YoW3VuZGVmaW5lZCwgdHJ1ZV0pLFxuICAgIHRhZ3M6IFByb3BUeXBlcy5vbmVPZihbdW5kZWZpbmVkLCB0cnVlXSksXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3pHcmlkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2NvbXBvbmVudHMvcnRXaXphcmQvd3pHcmlkLmpzeCIsImV4cG9ydCBmdW5jdGlvbiByZWNlaXZlR3ltcyhneW1zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1JFQ0VJVkVfR1lNUycsXG4gICAgICAgIHBheWxvYWQ6IGd5bXNcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHeW1zKHRlYW0pIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT57XG4gICAgICAgIHJldHVybiBmZXRjaGVyLmdldCgnZ3ltcy90ZWFtLycrdGVhbS5faWQpLnRoZW4oZ3ltcyA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlR3ltcyhneW1zKSlcbiAgICAgICAgICAgIHJldHVybiBneW1zXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvZ3ltLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFJvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0FERF9ST1VURScsXG4gICAgICAgIHBheWxvYWQ6IHJvdXRlXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVJvdXRlcyhyb3V0ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnUkVDRUlWRV9ST1VURVMnLFxuICAgICAgICBwYXlsb2FkOiByb3V0ZXNcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfUk9VVEUnLFxuICAgICAgICBwYXlsb2FkOiByb3V0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlc0J5R3ltKGlkKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGZldGNoZXIuZ2V0KCdyb3V0ZS9ib3VsZGVyL2d5bScsIHtcbiAgICAgICAgICAgIGd5bTogaWRcbiAgICAgICAgfSkudGhlbihyb3V0ZXMgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVJvdXRlcyhyb3V0ZXMpKVxuICAgICAgICAgICAgLy9yZXR1cm4gcm91dGVzXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdFJvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGZldGNoZXIuY3JlYXRlKCdyb3V0ZScsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChhZGRSb3V0ZShyZXMpKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHV0Um91dGUocm91dGUpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZmV0Y2hlcikgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2hlci51cGRhdGUoYHJvdXRlLyR7cm91dGUuX2lkfWAsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVSb3V0ZShyZXMpKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvcm91dGUuanMiLCJpbXBvcnQge3JlY2VpdmVHeW1zfSBmcm9tICcuL2d5bSdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVUZWFtKHRlYW0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnUkVDRUlWRV9URUFNJyxcbiAgICAgICAgcGF5bG9hZDogdGVhbVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlYW0oKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGZldGNoZXIpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gZ2V0U3RhdGUoKVxuICAgICAgICBpZiAoc3RhdGUudGVhbS5neW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoZXIuZ2V0KCd0ZWFtcy9jdXJyZW50JylcbiAgICAgICAgICAgICAgICAudGhlbih0ZWFtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVRlYW0odGVhbSkpXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVHeW1zKHRlYW0uZ3ltcykpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZWFtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9hY3Rpb25zL3RlYW0uanMiLCJleHBvcnQgZnVuY3Rpb24gdXBkYXRlUm91dGUoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9ORVdfUk9VVEUnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYWdzKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9UQUdTJyxcbiAgICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFdpemFyZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnUkVTRVRfV0laQVJEJ1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9kYXRhL2FjdGlvbnMvd2l6YXJkLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0gW11cblxuY29uc3QgdHJhbnNmb3JtR3ltcyA9IChneW1zKSA9PiB7XG4gICAgZ3ltcy5mb3JFYWNoKGd5bSA9PiB7XG4gICAgICAgIGd5bS52YWx1ZSA9IGd5bS5uYW1lXG4gICAgfSlcbiAgICByZXR1cm4gZ3ltc1xufVxuXG5jb25zdCBneW0gPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX0dZTVMnOlxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtR3ltcyhhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdHRVRfR1lNUyc6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ3ltICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9neW0uanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5pbXBvcnQgd2l6YXJkIGZyb20gJy4vd2l6YXJkJ1xuaW1wb3J0IHJvdXRlIGZyb20gJy4vcm91dGUnXG5pbXBvcnQgdGVhbSBmcm9tICcuL3RlYW0nXG5pbXBvcnQgZ3ltIGZyb20gJy4vZ3ltJ1xuXG5jb25zdCBtYWluUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcm91dGU6IHdpemFyZCwgXG4gICAgcm91dGVzOiByb3V0ZSxcbiAgICB0ZWFtOiB0ZWFtLFxuICAgIGd5bXM6IGd5bSxcbiAgICByb3V0ZXI6IHJvdXRlclJlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1haW5SZWR1Y2VyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSdcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IG5ldyBJbW11dGFibGUuTWFwKClcblxuZnVuY3Rpb24gcm91dGUoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfUk9VVEUnOlxuICAgICAgICByZXR1cm4gc3RhdGUuc2V0KGFjdGlvbi5wYXlsb2FkLl9pZCwgYWN0aW9uLnBheWxvYWQpXG4gICAgY2FzZSAnUkVDRUlWRV9ST1VURVMnOlxuICAgICAgICByZXR1cm4gc3RhdGUuY29uY2F0KGFjdGlvbi5wYXlsb2FkLm1hcChyb3V0ZSA9PiBbcm91dGUuX2lkLHJvdXRlXSkpXG4gICAgY2FzZSAnVVBEQVRFX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNldChhY3Rpb24ucGF5bG9hZC5faWQsIGFjdGlvbi5wYXlsb2FkKVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvZGF0YS9yZWR1Y2Vycy9yb3V0ZS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjb2xvcnM6IFtdLFxuICAgIHRhZ3M6IFtdLFxuICAgIGdyYWRlczoge1xuICAgICAgICBib3VsZGVyOiBbXSxcbiAgICAgICAgcm9wZTogW11cbiAgICB9XG59XG5cbmNvbnN0IHRyYW5zZm9ybVRlYW0gPSAodGVhbSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRlYW0sXG4gICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgYm91bGRlcjogdGVhbS5ncmFkZXMuYm91bGRlci5tYXAoKGdyYWRlLCBpbmRleCkgPT4ge3JldHVybiB7X2lkOiBpbmRleCwgdmFsdWU6IGdyYWRlfX0pLFxuICAgICAgICAgICAgcm9wZTogdGVhbS5ncmFkZXMucm9wZS5tYXAoKGdyYWRlLCBpbmRleCkgPT4ge3JldHVybiB7X2lkOiBpbmRleCwgdmFsdWU6IGdyYWRlfX0pXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yczogdGVhbS5jb2xvcnMubWFwKGNvbG9yID0+IHtyZXR1cm4ge19pZDogY29sb3IubmFtZSwgdmFsdWU6IGNvbG9yLm5hbWUsIGNvbG9yOiBjb2xvci5jb2xvcn19KSxcbiAgICAgICAgdGFnczogdGVhbS50YWdzLm1hcCh0YWcgPT4ge3JldHVybiB7X2lkOiB0YWcsIHZhbHVlOiB0YWd9fSlcbiAgICB9XG59XG5cbmNvbnN0IHRlYW0gPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUNFSVZFX1RFQU0nOlxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtVGVhbShhY3Rpb24ucGF5bG9hZClcbiAgICBjYXNlICdHRVRfVEVBTSc6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVhbSAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvdGVhbS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0YWdzOiBbXVxufVxuXG5jb25zdCB3aXphcmQgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVUERBVEVfTkVXX1JPVVRFJzpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFthY3Rpb24ucGF5bG9hZC5maWVsZF06IGFjdGlvbi5wYXlsb2FkLnZhbHVlfSlcbiAgICBjYXNlICdVUERBVEVfVEFHUyc6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3RhZ3M6IHRvZ2dsZVRhZyhzdGF0ZS50YWdzLCBhY3Rpb24ucGF5bG9hZCl9KVxuICAgIGNhc2UgJ1JFU0VUX1dJWkFSRCc6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7Z3ltOiBzdGF0ZS5neW0sIHRhZ3M6IFtdfSlcbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpemFyZFxuXG4vLyB1dGlsaXRpZXNcblxuZnVuY3Rpb24gdG9nZ2xlVGFnKHRhZ3MsIHRhZykge1xuICAgIGxldCBpbmQgPSB0YWdzLmluZGV4T2YodGFnKVxuICAgIHRhZ3MgPSBbLi4udGFnc11cbiAgICBpZiAoaW5kID49IDApIHtcbiAgICAgICAgdGFnc1tpbmRdID0gdGFnc1t0YWdzLmxlbmd0aCAtIDFdXG4gICAgICAgIHRhZ3MubGVuZ3RoID0gdGFncy5sZW5ndGggLSAxXG4gICAgICAgIHJldHVybiB0YWdzXG4gICAgfVxuICAgIHJldHVybiB0YWdzLmNvbmNhdCh0YWcpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2RhdGEvcmVkdWNlcnMvd2l6YXJkLmpzIiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgQXBwQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcblxuXG5jb25zdCByZW5kZXIgPSBDb21wb25lbnQgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZW5kZXJlZCcpXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHBDb250YWluZXI+XG5cdFx0PENvbXBvbmVudCAvPlxuXHQ8L0FwcENvbnRhaW5lcj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICApXG59XG5cbnJlbmRlcihBcHApXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gICAgY29uc29sZS5sb2coJ3NvIHNvIGhvdCcpXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vYXBwJywgKCkgPT4geyBcbiAgICAgICAgY29uc3QgQXBwID0gcmVxdWlyZSgnLi9hcHAnKS5kZWZhdWx0XG4gICAgICAgIHJlbmRlcihBcHApXG4gICAgfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvbWFpbi5qc3giLCJjbGFzcyDPgCB7XG4gICAgY291bnRCeShhcnIsIGNvbXApIHtcbiAgICAgICAgaWYgKCFjb21wKSBcbiAgICAgICAgICAgIGNvbXAgPSAoYSkgPT4gYVxuICAgICAgICBsZXQgZ3JvdXBlZCA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGEgPSBhcnJbaV1cbiAgICAgICAgICAgIGlmIChjb21wKGEpIGluIGdyb3VwZWQpIHtcbiAgICAgICAgICAgICAgICBncm91cGVkW2NvbXAoYSldKytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBlZFtjb21wKGEpXSA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXBlZFxuICAgIH1cblxuICAgIGJ1Y2tldHMoYXJyLCBsaXN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycpIFxuICAgICAgICAgICAgbGlzdCA9IGxpc3Quc3BsaXQoJyAnKVxuICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSBcbiAgICAgICAgICAgIGxpc3QgPSB0aGlzLm1ha2VIYXNoKGxpc3QsIDApXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGlzdFthcnJbaV1dKytcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdFxuICAgIH1cblxuICAgIHJhbmdlKGEsIGIpIHtcbiAgICAgICAgbGV0IHN0YXJ0ID0gYlxuICAgICAgICAgICAgPyBhXG4gICAgICAgICAgICA6IDBcbiAgICAgICAgbGV0IGVuZCA9IGJcbiAgICAgICAgICAgID8gYlxuICAgICAgICAgICAgOiBhXG4gICAgICAgIGxldCBhcnIgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIC8vIGludGVybmFsXG5cbiAgICBtYWtlSGFzaChhcnIsIHZhbCkge1xuICAgICAgICBsZXQgaGFzaCA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaGFzaFthcnJbaV1dID0gdmFsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICB9XG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IM+AKClcblxuZXhwb3J0IGNvbnN0IHJlbmRlcklmID0gY29uZGl0aW9uID0+IGVsZW1lbnQgPT4gY29uZGl0aW9uICYmIGVsZW1lbnRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvcnR1dGlsLmpzIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGNvbG9yRmFjdG9yeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0Q29sb3JcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgaWYoIWNvbG9yKSByZXR1cm5cbiAgICAgICAgbGV0IHNwbGl0dGVyID0gY29sb3IubGVuZ3RoID4gND8gLy57Mn0vZyA6IC8uL2dcbiAgICAgICAgbGV0IG1pZGRsZSA9IGNvbG9yLmxlbmd0aCA+IDQ/IDEyOCA6IDhcbiAgICAgICAgY29sb3IgPSBjb2xvci5yZXBsYWNlKCcjJywgJycpLm1hdGNoKHNwbGl0dGVyKVxuICAgICAgICByZXR1cm4gY29sb3IucmVkdWNlKChhLCBiKSA9PiAocGFyc2VJbnQoYiwgMTYpIC8gMykgKyBhLCAwKSA+IG1pZGRsZSA/ICcjNTU1JyA6ICcjZmZmJ1xuICAgIH1cbn0pKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zZXJ2aWNlcy9jb2xvclNlcnZpY2UuanMiLCJjbGFzcyBmZXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSAnL2FwaS8nXG4gICAgfVxuXG4gICAgZ2V0KHJlc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMucHJlZml4ICsgcmVzb3VyY2UgKyBwYXJhbVRvUXVlcnkocGFyYW1zKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGNyZWF0ZShyZXNvdXJjZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogZm9ybWF0Qm9keShkYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZShyZXNvdXJjZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZmV0Y2godGhpcy5wcmVmaXggKyByZXNvdXJjZSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgYm9keTogZm9ybWF0Qm9keShkYXRhKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBmZXRjaGVyKClcblxuZnVuY3Rpb24gcGFyYW1Ub1F1ZXJ5KG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gJydcblxuICAgIHJldHVybiAnPycgK1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArXG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKVxuICAgICAgICB9KS5qb2luKCcmJylcbn1cblxuZnVuY3Rpb24gZm9ybWF0Qm9keShvYmopIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NlcnZpY2VzL2ZldGNoZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3N0eWxlcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcHVibGljL3N0eWxlcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==