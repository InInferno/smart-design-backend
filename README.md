# Smart Design Backend


Ссылка: [Smart Design Backend](https://github.com/InInferno/smart-design-backend "Smart Design Backend"). 
Бэкенд сервиса размещения товаров.

### Технологии: 
- JS
- Node.js
- MongoDB
- GIT

### Настройка:

Клонировать [репозиторий](https://github.com/InInferno/smart-design-backend.git)

Установить пакеты

    npm install

### Запуск:

Запуск mongoDB

      mongosh
      mongo (или "C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe")
      
Запуск сервера

    npm run build-start


### Запросы:

#### Получение всех товаров.
**GET /products**

Возвращает массив всех товаров.


#### Поиск товара по ID.
**GET /products/:id**

Возвращает объект товара найденного по ID.


#### Поиск товара по Name.
**GET /products/name/:name**

Возвращает объект товара найденного по Name.


#### Поиск товара по параметрам.
**GET /products/parameters/:parameter/:value**
(Пример: /products/parameters/parameterOne/value)

Возвращает объект товара найденного по параметру.


#### Добавить товар.
**POST /products**

Формат тела запроса (JSON):
```json
{
  "name": "name",
  "description": "description4",
  "parameters": {
      "parameterOne": "one",
      "parameterTwo": "two"
  }
}
```

#### Обновить данные товара.
**PUT /products/:id**

Формат тела запроса (JSON):
```json
{
  "name": "name",
  "description": "description4",
  "parameters": {
      "parameterOne": "one",
      "parameterTwo": "two"
  }
}
```


#### Удалить товар.
**DELETE /products/:id**

Формат тела запроса (JSON):
```json
{
  "name": "name",
  "description": "description4",
  "parameters": {
      "parameterOne": "one",
      "parameterTwo": "two"
  }
}
