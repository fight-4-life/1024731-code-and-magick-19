
'use strict';

(function () {

  var WIZARD_NAMES = [
    'Иван',
    'Хуан',
    'Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var WIZARD_LASTNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COATS_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var WIZARDS_QUANTITY = 4;

  // opening setup window
  document.querySelector('.setup').classList.remove('hidden');

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function renderSimilarWizards() {
    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      var wizard = {
        name: WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length)] + ' ' + WIZARD_LASTNAMES[getRandomNumber(0, WIZARD_LASTNAMES.length)],
        coatColor: COATS_COLORS[getRandomNumber(0, COATS_COLORS.length)],
        eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)]
      };

      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

      similarListElement.appendChild(wizardElement);
    }
  }
  // showing the block with similar wizards
  document.querySelector('.setup-similar').classList.remove('hidden');

  renderSimilarWizards();
})();
