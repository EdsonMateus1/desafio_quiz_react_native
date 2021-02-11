"use strict";
exports.__esModule = true;
exports.Home = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var expo_status_bar_1 = require("expo-status-bar");
exports.Home = function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.container },
        react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.title }, "Quiz"),
        react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.paragraph }, "Responda \u00E0s perguntas e tente a sorte s\u00E3o 15 perguntas sobre diversos temas, consiga o maior n\u00FAmero de acerto e se sinta um g\u00EAnio"),
        react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.btnContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.btn },
                react_1["default"].createElement(react_native_1.Button, { color: "#ff9b00", onPress: function () { return navigation.navigate("Quiz"); }, title: "Vamos la" }))),
        react_1["default"].createElement(expo_status_bar_1.StatusBar, { style: "auto" })));
};
