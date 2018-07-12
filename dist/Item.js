"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var List_1 = require("@material-ui/core/List");
var ListItem_1 = require("@material-ui/core/ListItem");
var ListItemIcon_1 = require("@material-ui/core/ListItemIcon");
var ListItemText_1 = require("@material-ui/core/ListItemText");
var icons_1 = require("@material-ui/icons");
var Collapse_1 = require("@material-ui/core/Collapse");
var Item_1 = require("./Item");
var FileUtils = require("./FileUtils");
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            opened: false,
            childList: [],
        };
        _this.handleClick = function () { return __awaiter(_this, void 0, void 0, function () {
            var path, opened, dirList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.props.path;
                        opened = this.state.opened;
                        return [4, FileUtils.dirList(path)];
                    case 1:
                        dirList = _a.sent();
                        this.setState({
                            opened: !opened,
                            childList: dirList,
                        });
                        return [2];
                }
            });
        }); };
        return _this;
    }
    Item.prototype.render = function () {
        var _a = this.props, _b = _a.directory, directory = _b === void 0 ? false : _b, label = _a.label, deep = _a.deep, theme = _a.theme;
        var _c = this.state, opened = _c.opened, childList = _c.childList;
        var children = childList.map(function (child, index) { return (React.createElement(Item_1.default, { key: index, deep: deep + 1, path: child.nativeURL, directory: child.isDirectory, label: child.name })); });
        var unit = theme ? theme.spacing.unit : 4;
        return (React.createElement(React.Fragment, null,
            React.createElement(ListItem_1.default, { button: true, onClick: this.handleClick, style: { marginLeft: deep * unit + "px" } },
                (function () {
                    if (!directory)
                        return null;
                    var icon = opened ? React.createElement(icons_1.Add, null) : React.createElement(icons_1.Remove, null);
                    return (React.createElement(ListItemIcon_1.default, null, icon));
                })(),
                React.createElement(ListItemIcon_1.default, null, directory ? React.createElement(icons_1.Folder, null) : React.createElement(icons_1.Star, null)),
                React.createElement(ListItemText_1.default, { inset: true, primary: label })),
            directory && (React.createElement(Collapse_1.default, { in: opened, timeout: "auto", unmountOnExit: true },
                React.createElement(List_1.default, { component: "div", disablePadding: true }, children)))));
    };
    return Item;
}(React.Component));
var styles = function (theme) { return ({}); };
exports.default = styles_1.withStyles(styles)(Item);
