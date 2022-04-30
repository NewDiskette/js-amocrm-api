const AmoCRM = require( 'amocrm-js' );

const crm = new AmoCRM({
    // логин пользователя в портале, где адрес портала domain.amocrm.ru
    domain: 'newdiskette', // может быть указан полный домен вида domain.amocrm.ru, domain.amocrm.com !? нет, только логин!
    /* 
      Информация об интеграции (подробности подключения 
      описаны на https://www.amocrm.ru/developers/content/oauth/step-by-step)
    */
    auth: {
      client_id: 'clientId', // ID интеграции
      client_secret: 'clientSecret', // Секретный ключ
      redirect_uri: 'https://example.com', // Ссылка для перенаправления
      code: 'code' // Код авторизации
    },
});

(async () => {
    const response = await crm.request.get( '/api/v4/leads' );
    console.log( response.data );
})();