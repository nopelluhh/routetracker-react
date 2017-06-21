webpackJsonp([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(14);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = function Block(props) {
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('block', props.className), style: props.style },
        props.children
    );
};

Block.propTypes = {
    children: _propTypes2.default.node,
    style: _propTypes2.default.object
};

exports.default = Block;

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderText = function HeaderText(props) {
  return _react2.default.createElement(
    "h1",
    _extends({ className: "header-text" }, props, { ref: props.refTo }),
    "ROUTETRACKER"
  );
};

exports.default = HeaderText;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(30);

var _Header2 = _interopRequireDefault(_Header);

var _Features = __webpack_require__(29);

var _Features2 = _interopRequireDefault(_Features);

var _Contact = __webpack_require__(28);

var _Contact2 = _interopRequireDefault(_Contact);

var _Login = __webpack_require__(31);

var _Login2 = _interopRequireDefault(_Login);

var _reactTrack = __webpack_require__(48);

var _loginutil = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loginOpen: false
    }, _this.render = function () {
      return _react2.default.createElement(
        _reactTrack.TrackDocument,
        { formulas: [], updateOnDidMount: true },
        function () {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactTrack.Track,
              { component: _Header2.default, formulas: [_loginutil.blockScroll, _loginutil.top, _loginutil.height] },
              function (HeaderTracked, percent, top, height) {
                return _react2.default.createElement(HeaderTracked, { scroll: percent, top: top, height: height, toggleLogin: _this.toggleLogin });
              }
            ),
            _react2.default.createElement(
              _reactTrack.Track,
              { component: _Features2.default, formulas: [_loginutil.blockScroll, _loginutil.top, _loginutil.height] },
              function (FeaturesTracked, percent, top, height) {
                return _react2.default.createElement(FeaturesTracked, { scroll: percent, top: top, height: height });
              }
            ),
            _react2.default.createElement(
              _reactTrack.Track,
              { component: _Contact2.default, formulas: [_loginutil.blockScroll, _loginutil.top, _loginutil.height] },
              function (ContactTracked, percent, top, height) {
                return _react2.default.createElement(ContactTracked, { scroll: percent, top: top, height: height });
              }
            ),
            _react2.default.createElement(_Login2.default, { isOpen: _this.state.loginOpen, toggle: _this.toggleLogin })
          );
        }
      );
    }, _this.toggleLogin = function () {
      _this.setState({ loginOpen: !_this.state.loginOpen });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Block = __webpack_require__(10);

var _Block2 = _interopRequireDefault(_Block);

var _HeaderText = __webpack_require__(11);

var _HeaderText2 = _interopRequireDefault(_HeaderText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function Content(props) {
    return _react2.default.createElement(
        'div',
        { className: 'block__content' },
        props.children
    );
};

var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var pinned = this.props.scroll < 0;
            var offset = -this.props.top + 30;

            var headerStyle = {
                top: pinned ? '5vh' : offset + 'px',
                position: pinned ? 'fixed' : 'relative',
                transform: 'none',
                zIndex: 300
            };

            return _react2.default.createElement(
                _Block2.default,
                { className: 'contact', style: { overflow: 'hidden' } },
                _react2.default.createElement(_HeaderText2.default, { ref: function ref(el) {
                        return _this2.header = el;
                    }, style: headerStyle }),
                _react2.default.createElement(
                    Content,
                    null,
                    _react2.default.createElement(
                        'form',
                        { method: 'POST', className: 'contact__form' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'text-center' },
                            ' CONTACT US '
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'flex space-between' },
                            _react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'name', className: 'text-center' }),
                            _react2.default.createElement('input', { type: 'email', name: 'email', placeholder: 'email', className: 'text-center' })
                        ),
                        _react2.default.createElement('textarea', { name: 'body', placeholder: 'ask us anything!', style: { width: '100%', height: '30vh' } }),
                        _react2.default.createElement(
                            'div',
                            { className: 'flex space-around', style: { width: '40%', margin: 'auto' } },
                            _react2.default.createElement('input', { type: 'button', value: 'Clear' }),
                            _react2.default.createElement('input', { type: 'submit' })
                        )
                    )
                )
            );
        }
    }]);

    return Contact;
}(_react.Component);

exports.default = Contact;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Block = __webpack_require__(10);

var _Block2 = _interopRequireDefault(_Block);

var _HeaderText = __webpack_require__(11);

var _HeaderText2 = _interopRequireDefault(_HeaderText);

var _loginutil = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Features = function (_Component) {
	_inherits(Features, _Component);

	function Features() {
		_classCallCheck(this, Features);

		return _possibleConstructorReturn(this, (Features.__proto__ || Object.getPrototypeOf(Features)).apply(this, arguments));
	}

	_createClass(Features, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var pinned = this.props.scroll < 0;
			var offset = -this.props.top;

			var headerStyle = {
				top: pinned ? '5vh' : 'calc(' + offset + 'px + 5vh)',
				position: pinned ? 'fixed' : 'relative',
				transform: 'none',
				zIndex: 300
			};

			var laptopStyle = {
				transform: 'rotate(' + (0, _loginutil.clamp)(offset / 12 + 10, -Infinity, 10) + 'deg)',
				left: (0, _loginutil.translate)(-100, 100, -15, 15, true)(-this.props.scroll) + 'vw',
				position: 'absolute',
				height: 'calc(100px + 15vw)',
				minHeight: '200px',
				top: 'calc(40% - 10vw)'
			};

			var phoneStyle = {
				transform: 'rotate(' + (0, _loginutil.clamp)(-offset / 5 + 20, 19, Infinity) + 'deg)',
				right: (0, _loginutil.translate)(-100, 100, -5, 22, true)(-this.props.scroll) + 'vw',
				position: 'absolute',
				height: 'calc(350px + 8vw)',
				top: '-3vw'
			};

			var letterStyle = {
				position: 'relative',
				letterSpacing: (0, _loginutil.clamp)((0, _loginutil.translate)(-100, 100, 1.02, -1)(-this.props.scroll), 0, Infinity) + 'em',
				opacity: 1 + (0, _loginutil.translate)(-100, 100, 2, -2)(-this.props.scroll)
			};

			return _react2.default.createElement(
				_Block2.default,
				{ className: 'features', style: { overflow: 'hidden' } },
				_react2.default.createElement(_HeaderText2.default, { ref: function ref(el) {
						return _this2.header = el;
					}, style: headerStyle }),
				_react2.default.createElement(
					'section',
					{ className: 'features__content' },
					_react2.default.createElement(
						'div',
						{ className: 'drop-shadow-1' },
						_react2.default.createElement('img', { className: 'hidden-sm-down', style: phoneStyle, src: '/assets/login/assets/phone.png' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'drop-shadow-1' },
						_react2.default.createElement('img', { className: 'hidden-sm-down', style: laptopStyle, src: '/assets/login/assets/laptop.png' })
					),
					_react2.default.createElement(
						'span',
						{ className: 'headline' },
						'Add routes from your computer, your phone, your iPad, ',
						_react2.default.createElement(
							'del',
							null,
							'your spaceship'
						),
						'.'
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'features-two' },
					_react2.default.createElement(
						'h3',
						{ className: 'center-block text-center', style: letterStyle },
						'Print tags, visualize distribution, get paid.'
					)
				)
			);
		}
	}]);

	return Features;
}(_react.Component);

Features.propTypes = {
	scroll: _propTypes2.default.number,
	top: _propTypes2.default.number
};
exports.default = Features;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Block = __webpack_require__(10);

var _Block2 = _interopRequireDefault(_Block);

var _HeaderText = __webpack_require__(11);

var _HeaderText2 = _interopRequireDefault(_HeaderText);

var _loginutil = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
		_inherits(Header, _React$Component);

		function Header() {
				var _ref;

				var _temp, _this, _ret;

				_classCallCheck(this, Header);

				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
				}

				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
						var height = _this.props.height;


						var clientHeight = document.documentElement.clientHeight;
						var offset = (0, _loginutil.translate)(0, 100, height / 4, height - 60)(-_this.props.scroll);
						var pinned = _this.header && _this.header.getBoundingClientRect().top <= clientHeight / 20;

						var headerStyle = {
								top: pinned ? 'calc(' + -_this.props.top + 'px + 5vh' : offset + 'px',
								transform: pinned ? 'none' : 'translate(0, -50%)',
								zIndex: 300
						};

						var headerSecondStyle = {
								top: pinned ? '5vh' : -height / 2 + offset + 'px',
								position: pinned ? 'fixed' : 'relative',
								transform: pinned ? 'none' : 'translate(0, -50%)'
						};

						return _react2.default.createElement(
								_Block2.default,
								null,
								_react2.default.createElement(
										'div',
										{ className: 'header', style: { zIndex: 20 } },
										_react2.default.createElement(_HeaderText2.default, { refTo: function refTo(el) {
														return _this.header = el;
												}, style: headerStyle }),
										_react2.default.createElement(
												'div',
												{ className: 'header__login', onClick: _this.props.toggleLogin },
												'LOGIN'
										)
								),
								_react2.default.createElement(
										'div',
										{ className: 'header-two' },
										_react2.default.createElement(_HeaderText2.default, { style: headerSecondStyle }),
										_react2.default.createElement(
												'div',
												{ className: 'header-two__content' },
												_react2.default.createElement(
														'span',
														null,
														'Simple route management, designed for the whole team.'
												)
										)
								)
						);
				}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		return Header;
}(_react2.default.Component);

Header.propTypes = {
		toggleLogin: _propTypes2.default.func,
		scroll: _propTypes2.default.number.isRequired,
		height: _propTypes2.default.number
};
exports.default = Header;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(14);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
	_inherits(Login, _Component);

	function Login() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Login);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('login-overlay', { 'open': _this.props.isOpen }) },
				_react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)('login', { 'open': _this.props.isOpen }) },
					_react2.default.createElement(
						'form',
						{ action: 'api/login/', method: 'POST' },
						_react2.default.createElement(
							'h2',
							null,
							'LOGIN'
						),
						_react2.default.createElement('input', { type: 'text', name: 'username', placeholder: 'username' }),
						_react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'password' }),
						_react2.default.createElement(
							'div',
							{ className: 'flex space-between' },
							_react2.default.createElement('input', { type: 'button', value: 'Cancel', onClick: _this.props.toggle }),
							_react2.default.createElement('input', { type: 'submit' })
						)
					)
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return Login;
}(_react.Component);

exports.default = Login;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(25);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(26);

var _smoothscrollPolyfill = __webpack_require__(27);

var _loginutil = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _smoothscrollPolyfill.polyfill)();

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('root'));

// let totalHeight, percentage

// const locks = [0, 33.4, 66.9]

// function resizeUpdate() {
//     totalHeight = document.documentElement.scrollHeight
//     percentage = document.body.scrollTop / totalHeight
// }

// function scroll() {
//     percentage = document.body.scrollTop / totalHeight
//     locks.reduce((a, b) => {
//         if(between(a, b, percentage * 100)) {
//             let targ = closest(a, b, percentage * 100)
//             window.scroll({left: 0, top: totalHeight * (targ / 100), behavior: 'smooth'})
//         }
//         return b
//     })
// }

// function closest(a, b, t) {
//     let da = Math.abs(t-a)
//     let db = Math.abs(t-b)

//     return da < db? a : b
// }

// function between(a, b, t) {
//     return t >= a && t <=b
// }

// window.addEventListener('resize', resizeUpdate)
// window.addEventListener('scroll', debounce(scroll, 100))
// window.addEventListener('DOMContentLoaded', resizeUpdate)
// window.addEventListener('load', resizeUpdate)

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.byPercent = byPercent;
exports.clamp = clamp;
exports.translate = translate;
exports.debounce = debounce;
var height = exports.height = function height(_, el) {
    return el.clientHeight;
};

var top = exports.top = function top(rect) {
    return rect.top;
};

var blockScroll = exports.blockScroll = function blockScroll(_ref) {
    var top = _ref.top;

    var val = top / document.documentElement.clientHeight * 100;
    return Math.max(-100, Math.min(100, val));
};

function byPercent(min, max, per) {
    if (arguments.length === 2) {
        per = max;
        max = min;
        min = 0;
    }

    return min + Math.abs(min - max) * (per / 100);
}

function clamp(n, a, b) {
    if (a !== null && n < a) {
        return a;
    }

    if (b !== null & n > b) {
        return b;
    }

    return n;
}

function translate(targStart, targEnd, scaleStart, scaleEnd, limit) {
    return function (x) {
        var d = Math.abs(targEnd - targStart);
        var p = (x - targStart) / d;
        var r = scaleStart + (scaleEnd - scaleStart) * p;
        return limit ? clamp(r, scaleStart, scaleEnd) : r;
    };
}

function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/***/ })

},[51]);