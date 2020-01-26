'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_COLOR = 'white';
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 30;
var TEXT_COLOR = 'black';
var TEXT_MESSAGE_STYLE = '16px PT Mono';
var MAX_BAR_HEIGHT = 150;
var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
var messages = ['Ура вы победили!', 'Список результатов: '];
var RANDOM_BLUE = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%' + ', 50%)';

var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
};

var getMessage = function (ctx, arr) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = TEXT_MESSAGE_STYLE;
    for (var i = 0; i < messages.length; i++) {
    ctx.fillText(messages[i], CLOUD_WIDTH / 2, TEXT_HEIGHT * (i + 1));
    }
};

var getBar = function (ctx, names, times) {
    var maxTime = getMaxElement(times);
    for (var i = 0; i < names.length; i++) {
        var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
        ctx.fillStyle = TEXT_COLOR;
        ctx.fillText(names[i], CLOUD_X + BAR_GAP * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT);
        ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT - barHeight - GAP);
        if (names[i] === 'Вы') {
            ctx.fillStyle = PLAYER_COLOR;
        } else {
            ctx.fillStyle = RANDOM_BLUE;
        } 
        ctx.fillRect(CLOUD_X + BAR_GAP * (i + 1) + BAR_WIDTH * i, CLOUD_HEIGHT - barHeight - TEXT_HEIGHT, BAR_WIDTH, barHeight);
    }
};

window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COLOR);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
    getMessage(ctx, messages);
    getBar(ctx, names, times);
};