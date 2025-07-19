/* eslint-disable */
function fn() {
	var env = karate.env;
	if (!env) {
		env = 'certificacion';
	}

	var config = { 
        baseUrl : 'https://serverest.dev/'

    };

	if (env == 'integracion') {

    }

    if (env == 'certificacion') {
        config.baseUrl = 'https://serverest.dev/'
    }

    if (env == 'produccion') {
        config.baseUrl = '';
    }

	karate.configure('connectTimeout', 5000);
	karate.configure('readTimeout', 5000);
	karate.configure('logPrettyRequest', true);
	karate.configure('logPrettyResponse', true);
	return config;
}