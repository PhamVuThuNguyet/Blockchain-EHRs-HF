/**
 * @author Nguyetpvt
 * @email pvtnguyet.19it1@vku.udn.vn
 * @desc Add admin of Hosp3. Execute node addHosp3.js to execute
 */


/* eslint-disable new-cap */
const {enrollAdminHosp3} = require('./enrollAdmin-Hospital3');
const redis = require('redis');

/**
 * @description enrol admin of hospital 3 in redis
 */
async function initRedis3() {
  redisUrl = 'redis://127.0.0.1:6381';
  redisPassword = 'hosp3neuralmed';
  redisClient = redis.createClient(redisUrl);
  redisClient.AUTH(redisPassword);
  redisClient.SET('hosp3admin', redisPassword);
  console.log('Done');
  redisClient.QUIT();
  return;
}

/**
 * @description enrol admin of hospital 3
 */
async function main() {
  await enrollAdminHosp3();
  await initRedis3();
}

main();
