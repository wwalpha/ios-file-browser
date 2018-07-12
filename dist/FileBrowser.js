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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@material-ui/core/styles");
var List_1 = require("@material-ui/core/List");
var Item_1 = require("./Item");
var FileBrowser = (function (_super) {
    __extends(FileBrowser, _super);
    function FileBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileBrowser.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement(List_1.default, { component: "nav", classes: { root: classes.root } },
            React.createElement(Item_1.default, { key: 1, deep: 0, label: "Application", path: cordova.file.applicationDirectory, directory: true }),
            React.createElement(Item_1.default, { key: 2, deep: 0, label: "ApplicationStorage", path: cordova.file.applicationStorageDirectory, directory: true }),
            React.createElement(Item_1.default, { key: 3, deep: 0, label: "Cache", path: cordova.file.cacheDirectory, directory: true }),
            React.createElement(Item_1.default, { key: 4, deep: 0, label: "Data", path: cordova.file.dataDirectory, directory: true }),
            React.createElement(Item_1.default, { key: 5, deep: 0, label: "Document", path: cordova.file.documentsDirectory, directory: true }),
            React.createElement(Item_1.default, { key: 6, deep: 0, label: "Shared", path: cordova.file.syncedDataDirectory, directory: true }),
            React.createElement(Item_1.default, { key: 7, deep: 0, label: "Temp", path: cordova.file.tempDirectory, directory: true })));
    };
    return FileBrowser;
}(React.Component));
var styles = function (theme) { return ({
    root: {
        minHeight: '200px',
        maxHeight: '200px',
    },
}); };
exports.default = styles_1.withStyles(styles)(FileBrowser);
