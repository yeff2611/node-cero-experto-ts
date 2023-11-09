"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.http = exports.getAge = exports.getUUID = void 0;
//Este es el archivo de barril
var get_uuid_plugin_1 = require("./get-uuid.plugin");
Object.defineProperty(exports, "getUUID", { enumerable: true, get: function () { return get_uuid_plugin_1.getUUID; } });
var get_age_plugin_1 = require("./get-age.plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var http_client_plugin_1 = require("./http-client.plugin");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
var logger_plugin_1 = require("./logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
// const { getUUID } = require('../plugins/get-uuid.plugin')
// const { getAge } = require('../plugins/get-age.plugin')
// const { http } = require('../plugins/http-client.plugin')
// const buildLogger = require('../plugins/logger.plugin')
// module.exports = {
//     getUUID,
//     getAge,
//     http,
//     buildLogger,
// }
