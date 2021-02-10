"use strict";
exports.__esModule = true;
exports.Answer = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("../styles/styles");
exports.Answer = function (_a) {
    var onPressAnswer = _a.onPressAnswer, answer = _a.answer;
    var _b = react_1.useState(0), answersIdexState = _b[0], setIdexanswers = _b[1];
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return onPressAnswer; } },
        react_1["default"].createElement(react_native_1.View, { style: [answersIdexState ? styles_1.styles.answersContainerCheck : styles_1.styles.answersContainer] },
            react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.answers }, answer))));
};
