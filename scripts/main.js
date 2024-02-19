requirejs.config({
    baseUrl: 'js', // Directory base
    paths: {
        'jquery'    : 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min', // Percorso del modulo jQuery
        'jquery-ui' : 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min', // Percorso del modulo jQuery UI
        'scrambler2': 'https://www.jqueryscript.net/demo/scrambling-letters/jquery.scrambler',
        'jscookie'  : 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min'
    },
    shim: {
        'jquery-ui': {
            deps: ['jquery'] // Dipendenza di jQuery UI da jQuery
        },
        'scrambler2': {
            deps: ['jquery'] // Dipendenza di scrambler2 da jQuery
        },
        'jscookie': {
            deps: ['jquery'] // Dipendenza di jscookie da jQuery
        }
    }
});