'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

var _reactImageTiler = require('react-image-tiler');

var _reactImageTiler2 = _interopRequireDefault(_reactImageTiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockDynamic = function (_Component) {
  (0, _inherits3.default)(BlockDynamic, _Component);

  function BlockDynamic(props) {
    (0, _classCallCheck3.default)(this, BlockDynamic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BlockDynamic.__proto__ || (0, _getPrototypeOf2.default)(BlockDynamic)).call(this, props));

    _this.nextImage = function () {
      var currentImage = _this.state.currentImage;

      var newImage = currentImage + 1 > _this.props.resource.data.images.length - 1 ? 0 : currentImage + 1;
      _this.setState({
        currentImage: newImage
      });
    };

    _this.previousImage = function () {
      var currentImage = _this.state.currentImage;

      var newImage = currentImage - 1 < 0 ? _this.props.resource.data.images.length - 1 : currentImage - 1;
      _this.setState({
        currentImage: newImage
      });
    };

    _this.onOpenLightBox = function () {
      _this.setState({
        currentImage: 0,
        lightBoxOpen: true
      });
    };

    _this.onCloseLightBox = function () {
      _this.setState({
        lightBoxOpen: false
      });
    };

    _this.state = {
      currentImage: 0,
      lightBoxOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(BlockDynamic, [{
    key: 'render',
    value: function render() {
      var resource = this.props.resource,
          _state = this.state,
          _state$currentImage = _state.currentImage,
          currentImage = _state$currentImage === undefined ? 0 : _state$currentImage,
          lightBoxOpen = _state.lightBoxOpen,
          _context$datasets = this.context.datasets,
          datasets = _context$datasets === undefined ? {} : _context$datasets,
          nextImage = this.nextImage,
          previousImage = this.previousImage,
          onOpenLightBox = this.onOpenLightBox,
          onCloseLightBox = this.onCloseLightBox;


      var images = resource.data && resource.data.images && resource.data.images.map(function (image) {
        return {
          src: datasets[image.imageDataset] && datasets[image.imageDataset].uri
        };
      });

      return _react2.default.createElement(
        'figure',
        {
          className: 'peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-image',
          onClick: onOpenLightBox
        },
        _react2.default.createElement(_reactImageTiler2.default, { images: images.map(function (image) {
            return image.src;
          }), minWidth: '200' }),
        _react2.default.createElement(_reactImages2.default, {
          images: images,
          isOpen: lightBoxOpen,
          currentImage: currentImage,
          onClickPrev: previousImage,
          onClickNext: nextImage,
          onClose: onCloseLightBox
        })
      );
    }
  }]);
  return BlockDynamic;
}(_react.Component);

BlockDynamic.contextTypes = {
  datasets: _propTypes2.default.object
};

exports.default = BlockDynamic;