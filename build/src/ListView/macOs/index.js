'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./style/10.11');

var _2 = _interopRequireDefault(_);

var _macOs = require('../../style/background/macOs');

var _macOs2 = _interopRequireDefault(_macOs);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _padding = require('../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListView = (_dec = (0, _macOs2.default)(), _dec2 = (0, _dimension2.default)(), _dec3 = (0, _hidden2.default)(), _dec4 = (0, _margin2.default)(), _dec5 = (0, _padding2.default)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_temp = _class2 = function (_Component) {
  _inherits(ListView, _Component);

  function ListView() {
    _classCallCheck(this, ListView);

    return _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));
  }

  _createClass(ListView, [{
    key: 'mapChildren',
    value: function mapChildren(children) {
      var hasDirectRows = false;
      var header = null,
          items = null,
          footer = null;
      _react.Children.map(children, function (child) {
        var HeaderEl = _react2.default.createElement(_Header2.default, null);
        var FooterEl = _react2.default.createElement(_Footer2.default, null);
        var RowEl = _react2.default.createElement(_Row2.default, null);

        if (child.type === HeaderEl.type) return header = child;else if (child.type === FooterEl.type) return footer = child;else if (child.type === RowEl.type) hasDirectRows = true;

        if (!items) items = [];
        items.push(child);
      });

      if (hasDirectRows) {
        items = _react2.default.createElement(
          'ul',
          { style: _2.default.list },
          items
        );
      }

      return { header: header, items: items, footer: footer };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['children', 'style']);

      var _mapChildren = this.mapChildren(children),
          header = _mapChildren.header,
          items = _mapChildren.items,
          footer = _mapChildren.footer;

      return _react2.default.createElement(
        'section',
        _extends({ style: _extends({}, _2.default.container, style) }, props),
        header,
        _react2.default.createElement(
          'div',
          { ref: 'scrollable', style: _extends({}, _2.default.scrollable) },
          items
        ),
        footer
      );
    }
  }]);

  return ListView;
}(_react.Component), _class2.propTypes = _extends({}, _macOs.backgroundPropTypes, _dimension.dimensionPropTypes, _hidden.hiddenPropTypes, _margin.marginPropTypes, _padding.paddingPropTypes), _temp)) || _class) || _class) || _class) || _class) || _class);
exports.default = ListView;