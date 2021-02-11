"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.QuestViews = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var expo_status_bar_1 = require("expo-status-bar");
var quest_array_1 = require("../../utils/quest_array");
var styles_1 = require("../../styles/styles");
var answer_1 = require("../../widgets/answer");
exports.QuestViews = function () {
    var _a = react_1.useState(quest_array_1.quest), questState = _a[0], setQuest = _a[1];
    var _b = react_1.useState(false), resultState = _b[0], setResult = _b[1];
    var _c = react_1.useState(0), questIdexState = _c[0], setIdexQuest = _c[1];
    var _d = react_1.useState(0), answerIdexState = _d[0], setIdexanswer = _d[1];
    var _e = react_1.useState(0), questCorrectCount = _e[0], setQuestCorrectCount = _e[1];
    var _f = react_1.useState(["vazio"]), alreadyHit = _f[0], setAlreadyhit = _f[1];
    react_1.useEffect(function () {
        setQuest(quest_array_1.quest);
    }, []);
    var checkQuestCorrect = react_1.useCallback(function (questSelect) {
        var conditionCorrect = questSelect.includes(questState[questIdexState].correct);
        var conditionCorrectAlreadyHit = false;
        for (var _i = 0, alreadyHit_1 = alreadyHit; _i < alreadyHit_1.length; _i++) {
            var iterator = alreadyHit_1[_i];
            if (questSelect.includes(iterator)) {
                conditionCorrectAlreadyHit = true;
            }
        }
        if (conditionCorrectAlreadyHit) {
            return;
        }
        if (conditionCorrect) {
            setQuestCorrectCount(questCorrectCount + 1);
            setAlreadyhit(__spreadArrays(alreadyHit, [questSelect]));
        }
    }, [questIdexState]);
    var reset = react_1.useCallback(function () {
        setAlreadyhit((alreadyHit = ["vazio"]));
        setIdexQuest((questIdexState = 0));
        setQuestCorrectCount((questCorrectCount = 0));
        setResult((resultState = false));
    }, []);
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: styles_1.styles.container },
        resultState ? (react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.containerResult },
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.containerResultTitle },
                react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.ResultTitle }, "Voc\u00EA acertou"),
                react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.Result },
                    " ",
                    questCorrectCount,
                    " "),
                react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.ResultTitle }, "quest\u00F5es")),
            react_1["default"].createElement(react_native_1.Button, { color: "#ff9b00", onPress: function () {
                    return reset();
                }, title: "Tente outra vez" }))) : (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.imgContainer },
                react_1["default"].createElement(react_native_1.Image, { style: styles_1.styles.imgQuest, source: questState[questIdexState].image })),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.questContainer },
                react_1["default"].createElement(react_native_1.Text, { style: styles_1.styles.questTitle }, questState[questIdexState].quest),
                questState[questIdexState].answers.map(function (answer, index) {
                    return (react_1["default"].createElement(answer_1.Answer, { style: [
                            // implementar estilo na pergunta que foi selecionada
                            false
                                ? styles_1.styles.answersContainerCheck
                                : styles_1.styles.answersContainer,
                        ], answer: answer, key: answer, onPressAnswer: function () {
                            setIdexanswer((answerIdexState = index));
                            checkQuestCorrect(answer);
                            if (questIdexState < questState.length - 1) {
                                setIdexQuest(questIdexState + 1);
                            }
                        } }));
                })),
            react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.btnContainer },
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.btn },
                    react_1["default"].createElement(react_native_1.Button, { color: "#f3be6f", onPress: function () {
                            if (questIdexState > 0) {
                                setIdexQuest(questIdexState - 1);
                            }
                        }, title: "Anterior" })),
                react_1["default"].createElement(react_native_1.View, { style: styles_1.styles.btn }, questIdexState == questState.length - 1 ? (react_1["default"].createElement(react_native_1.Button, { color: "#ff9b00", onPress: function () {
                        return setResult(true);
                    }, title: "Finalizar" })) : (react_1["default"].createElement(react_native_1.Button, { color: "#ff9b00", onPress: function () {
                        if (questIdexState < questState.length - 1) {
                            setIdexQuest(questIdexState + 1);
                        }
                    }, title: "Seguinte" })))))),
        react_1["default"].createElement(expo_status_bar_1.StatusBar, { style: "auto" })));
};
