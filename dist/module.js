(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * BottleJS v1.0.1 - 2015-10-05
 * A powerful dependency injection micro container
 *
 * Copyright (c) 2015 Stephen Young
 * Licensed MIT
 */

"use strict";

(function (a) {
  "use strict";var b = 0,
      c = Array.prototype.slice,
      d = [],
      e = function e(a, b) {
    return a.concat(b);
  },
      f = function f(a, b, c) {
    var d = a[b];return d || (d = a[b] = {}), c && !d[c] && (d[c] = []), c ? d[c] : d;
  },
      g = function g(a, b, c) {
    return f(d, b, c).map(h.bind(null, a)).reduce(e, f(a, b, c)).concat(f(a, b, "__global__"));
  },
      h = function h(a, b) {
    return f(a, b.id, b.fullname);
  },
      i = function i(a, b) {
    return a[b];
  },
      j = function j(a) {
    return a.split(".").reduce(i, this);
  },
      k = function k(a, b, c, d) {
    "function" == typeof c && (d = c, c = "__global__"), f(a, b, c).push(d);
  },
      l = function l(a, b) {
    var c = a.split(".");return a = c.pop(), m.call(c.reduce(I, this.container), a, b), this;
  },
      m = function m(a, b) {
    Object.defineProperty(this, a, { configurable: !1, enumerable: !0, value: b, writable: !1 });
  },
      n = [],
      o = function o(a, b) {
    return k(n, this.id, a, b), this;
  },
      p = [],
      q = function q(a) {
    return k(p, this.id, a), this;
  },
      r = function r(a) {
    return (a || []).map(j, this.container);
  },
      s = function s(a, b) {
    return B.call(this, a, function () {
      this.$get = b;
    });
  },
      t = [],
      u = function u(a, b, c, d) {
    var e = g(t, a, b),
        f = { configurable: !0, enumerable: !0 };return e.length ? f.get = function () {
      var a = 0,
          b = function b() {
        e[a] && e[a++](c, b);
      };return b(), c;
    } : (f.value = c, f.writable = !0), Object.defineProperty(d, b, f), d[b];
  },
      v = function v(a, b) {
    return k(t, this.id, a, b), this;
  },
      w = {},
      x = function x(a) {
    var b;return a ? (b = w[a], b || (w[a] = b = new K(), b.constant("BOTTLE_NAME", a)), b) : new K();
  },
      y = [],
      z = [],
      A = function A(a, b) {
    return b(a);
  },
      B = function B(a, b) {
    var c, d, e, g, h;return g = this.id, d = f(z, g), d[a] ? void 0 : (d[a] = !0, c = a.split("."), e = c.shift(), h = c.length ? D : C, h.call(this, e, b, a, c));
  },
      C = function C(b, c) {
    var d, e, f, h;return h = this.id, f = this.container, d = b + "Provider", e = Object.create(null), e[d] = { configurable: !0, enumerable: !0, get: function get() {
        var a = new c();return delete f[d], f[d] = a, a;
      } }, e[b] = { configurable: !0, enumerable: !0, get: function get() {
        var c,
            e = f[d];return e && (delete f[d], delete f[b], c = g(n, h, b).reduce(A, e.$get(f))), c === a ? c : u(h, b, c, f);
      } }, Object.defineProperties(f, e), this;
  },
      D = function D(a, b, c, e) {
    var g, h, i, j;return j = this.id, h = f(y, j), g = h[a], g || (this.container[a] = (g = h[a] = K.pop()).container), i = e.join("."), g.provider(i, b), k(d, g.id, i, { fullname: c, id: j }), this;
  },
      E = function E(a) {
    return this[a.$type || "service"].apply(this, [a.$name, a].concat(a.$inject || []));
  },
      F = function F(a) {
    return f(p, this.id, "__global__").forEach(function (b) {
      b(a);
    }), this;
  },
      G = function G(a, b) {
    var d = arguments.length > 2 ? c.call(arguments, 2) : null,
        e = this;return s.call(this, a, function () {
      return d && (d = d.map(j, e.container), d.unshift(b), b = b.bind.apply(b, d)), new b();
    });
  },
      H = function H(a, b) {
    var c;return c = a.split("."), a = c.pop(), J.call(c.reduce(I, this.container), a, b), this;
  },
      I = function I(a, b) {
    var c = {};return J.call(a, b, c), c;
  },
      J = function J(a, b) {
    Object.defineProperty(this, a, { configurable: !0, enumerable: !0, value: b, writable: !0 });
  },
      K = function M(a) {
    return this instanceof M ? (this.id = b++, void (this.container = { $register: E.bind(this) })) : M.pop(a);
  };K.prototype = { constant: l, decorator: o, defer: q, digest: r, factory: s, middleware: v, provider: B, register: E, resolve: F, service: G, value: H }, K.pop = x;var L = { "function": !0, object: !0 };!(function (a) {
    var b = L[typeof exports] && exports && !exports.nodeType && exports,
        c = L[typeof module] && module && !module.nodeType && module,
        d = c && c.exports === b && b,
        e = L[typeof global] && global;!e || e.global !== e && e.window !== e || (a = e), "function" == typeof define && "object" == typeof define.amd && define.amd ? (a.Bottle = K, define(function () {
      return K;
    })) : b && c ? d ? (c.exports = K).Bottle = K : b.Bottle = K : a.Bottle = K;
  })(L[typeof window] && window || this);
}).call(undefined);


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
/* vim: set shiftwidth=2 tabstop=2 noexpandtab textwidth=80 wrap : */
/*global Proxy:true */
"use strict";

// We need to have at least old-style Proxies
if (typeof Proxy === 'undefined')
	throw new Error('Native proxies not enabled. use `node --harmony` or `node --harmony-proxies`');

// Check if we actually have new-style Proxies
module.exports = typeof Proxy.create !== 'function' ? Proxy : ProxyShim;

function ProxyShim(target, handler) {
	// this code is mostly copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Old_Proxy_API
	var oldHandler = {
		// Fundamental traps
		getOwnPropertyDescriptor: function (name) {
			if (handler.getOwnPropertyDescriptor)
				return handler.getOwnPropertyDescriptor(target, name);
			var desc = Object.getOwnPropertyDescriptor(target, name);
			// a trapping proxy's properties must always be configurable
			if (desc !== undefined) { desc.configurable = true; }
			return desc;
		},
		getPropertyDescriptor: function (name) {
			var proto = target;
			var desc;
			do {
				desc = Object.getOwnPropertyDescriptor(proto, name);
			} while (desc === undefined && (proto = Object.getPrototypeOf(proto)));
			// a trapping proxy's properties must always be configurable
			if (desc !== undefined) { desc.configurable = true; }
			return desc;
		},
		getOwnPropertyNames: function (name) {
			if (handler.getOwnPropertyNames)
				return handler.getOwnPropertyNames(target, name);
			return Object.getOwnPropertyNames(target);
		},
		getPropertyNames: function () {
			var names = [];
			var proto = target;
			do {
				names = names.concat(Object.getOwnPropertyNames(proto));
			} while ((proto = Object.getPrototypeOf(proto)) && proto !== Object.prototype);
			return names;
		},
		defineProperty: function (name, desc) {
			if (handler.defineProperty)
				return handler.defineProperty(target, name, desc);
			return Object.defineProperty(target, name, desc);
		},
		delete: function (name) {
			if (handler.deleteProperty)
				return handler.deleteProperty(target, name);
			return delete target[name];
		},
		/* TODO: freeze, seal, preventExtensions
		fix: function() {
			if (Object.isFrozen(obj)) {
				return Object.getOwnPropertyNames(obj).map(function(name) {
					return Object.getOwnPropertyDescriptor(obj, name);
				});
			}
			// As long as obj is not frozen, the proxy won't allow itself to be fixed
			return undefined; // will cause a TypeError to be thrown
		},*/
	};
	// derived traps
	if (handler.has)
		oldHandler.has = function (name) {
			return handler.has(target, name);
		};
	if (handler.hasOwn)
		oldHandler.hasOwn = function (name) {
			return handler.hasOwn(target, name);
		};
	if (handler.get)
		oldHandler.get = function (receiver, name) {
			return handler.get(target, name, receiver);
		};
	if (handler.set)
		oldHandler.set = function (receiver, name, val) {
			return handler.set(target, name, val, receiver);
		};
	if (handler.enumerate)
		oldHandler.enumerate = function () {
			return handler.enumerate(target);
		};
	if (handler.keys)
		oldHandler.keys = function() {
			return handler.keys(target);
		};

	if (typeof target !== 'function')
		return Proxy.create(oldHandler, Object.getPrototypeOf(target));
	return Proxy.createFunction(
		oldHandler,
		function () {
			if (handler.apply)
				return handler.apply(target, this, Array.prototype.slice.call(arguments));
			return target.apply(this, Array.prototype.slice.call(arguments));
		},
		handler.construct && function () {
			return handler.construct(target, Array.prototype.slice.call(arguments));
		}
	);
}


},{}],3:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function Car(engine) {
    _classCallCheck(this, Car);

    this.engine = engine;
};

exports["default"] = Car;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Engine = function Engine(type, fuel) {
    _classCallCheck(this, Engine);

    this.type = type;
    this.fuel = fuel;
};

exports["default"] = Engine;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fuel = function Fuel(name) {
    _classCallCheck(this, Fuel);

    this.name = name;
};

exports["default"] = Fuel;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _bottleJs = require("../bottle.js");

var _bottleJs2 = _interopRequireDefault(_bottleJs);

var _node_modulesHarmonyProxyIndexJs = require("../node_modules/harmony-proxy/index.js");

var _node_modulesHarmonyProxyIndexJs2 = _interopRequireDefault(_node_modulesHarmonyProxyIndexJs);

var _FuelJs = require("./Fuel.js");

var _FuelJs2 = _interopRequireDefault(_FuelJs);

var _EngineJs = require("./Engine.js");

var _EngineJs2 = _interopRequireDefault(_EngineJs);

var _CarJs = require("./Car.js");

var _CarJs2 = _interopRequireDefault(_CarJs);

var handler = (function () {
    function handler() {
        _classCallCheck(this, handler);
    }

    handler.get = function get(bottle, name) {
        return bottle.container[name];
    };

    return handler;
})();

;

var bottle = new _bottleJs2["default"]();

bottle.factory('Gasoline', function () {
    return new _FuelJs2["default"]('Gasoline');
});

bottle.factory('Diesel', function () {
    return new _FuelJs2["default"]('Diesel');
});

bottle.factory('DieselEngine', function (container) {
    return new _EngineJs2["default"]('v6', container.Diesel);
});

bottle.factory('GasolineEngine', function (container) {
    return new _EngineJs2["default"]('v12', container.Gasoline);
});

bottle.factory('Toyota', function (container) {
    return new _CarJs2["default"](container.DieselEngine);
});

bottle.factory('Ferrari', function (container) {
    return new _CarJs2["default"](container.GasolineEngine);
});

exports["default"] = new _node_modulesHarmonyProxyIndexJs2["default"](bottle, handler);
module.exports = exports["default"];

},{"../bottle.js":1,"../node_modules/harmony-proxy/index.js":2,"./Car.js":3,"./Engine.js":4,"./Fuel.js":5}],7:[function(require,module,exports){
'use strict';

require('./test.js');

},{"./test.js":8}],8:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _containerJs = require("./container.js");

var Test = (function () {
    function Test() {
        _classCallCheck(this, Test);
    }

    Test.test = function test() {
        console.log('Toyota:', _containerJs.Toyota);
        console.log('Ferrari:', _containerJs.Ferrari);
    };

    return Test;
})();

Test.test();

},{"./container.js":6}]},{},[7]);
