/* eslint-disable */
function fn() {
	var env = karate.env;
	if (!env) {
		env = 'integracion';
	}

	var config = { 

    };

	if (env == 'integracion') {
        config.baseUrl = 'https://serverest.dev/';
        config.LoginPassword = 'teste'
    }

    if (env == 'certificacion') {
        config.baseUrl = '';
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