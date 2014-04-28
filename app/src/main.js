/*globals define*/
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var StateModifier = require('famous/modifiers/StateModifier');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var firstSurface = new Surface({
        size: ['undefinded', 200],
        content: '<h3>Header</h3>',
        properties: {
            color: '#888',
            padding: '10px',
            backgroundColor: 'red',
            textAlign: 'center',
            width: '100%',
            display: 'block'
        }
    });
    var logo = new ImageSurface({
        size: [200, 200],
        content: '/content/images/famous_logo.png'
    });

    var firstSurfaceModifier = new StateModifier({
        origin: [0.5, 0]
    });
    var logoModifier = new StateModifier({
        origin: [0.5, 0.5]
    });

    mainContext.add(firstSurfaceModifier).add(firstSurface);
    mainContext.add(logoModifier).add(logo);

firstSurface.on('click', function() {
  firstSurface.setProperties({
    backgroundColor: 'blue'
  });
});

});
