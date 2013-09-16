/*!
 *
 * Copyright (c) 2013 Sebastian Golasch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

'use strict';

/**
 * Cookie related Marionette commands
 * see [JsonProtocol](https://wiki.mozilla.org/Auto-tools/Projects/Marionette/JSON_Protocol)
 *
 * @module FirefoxDriver
 * @class Cookie
 * @namespace FirefoxDriver.Commands.Marionette
 */

module.exports = function (Marionette) {

  /**
   *
   */

  Marionette.addCommand({
    name: 'element',
    params: ['selector'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      value: ':selector',
      type: 'findElement',
      using: 'css selector'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'elements',
    params: ['selector'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      value: ':selector',
      type: 'findElements',
      using: 'css selector'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'click',
    params: ['elementId'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      type: 'clickElement'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'size',
    params: ['elementId'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      type: 'getElementSize'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'displayed',
    params: ['elementId'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      type: 'isElementDisplayed'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'text',
    params: ['elementId'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      type: 'getElementText'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'val',
    params: ['elementId', 'value'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      value: ':value',
      type: 'sendKeysToElement'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'clear',
    params: ['elementId'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      type: 'clearElement'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'cssProperty',
    params: ['elementId'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      propertyName: ':propertyName',
      type: 'getElementValueOfCssProperty'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'enabled',
    params: ['elementId'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      type: 'isElementEnabled'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'selected',
    params: ['elementId'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      type: 'isElementSelected'
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'submit',
    params: ['elementId'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      type: 'executeScript',
      value: 'document.getElementById("jumpContact").submit()',
      newSandbox: true,
      specialPowers: true
    }
  });

  /**
   *
   */

  Marionette.addCommand({
    name: 'attribute',
    params: ['elementId', 'attr'],
    request: {
      to: ':marionetteId',
      session: ':sessionId',
      element: ':elementId',
      name: ':attr',
      type: 'getElementAttribute'
    }
  });

};
