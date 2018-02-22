/*
 * Code generated by Microsoft (R) SwaggerTools.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from 'ms-rest';

import Account = require('./account/accountClient');
import Codepush = require('./codepush/codepushClient');


declare class AppCenterClient {
  /**
   * @class
   * Initializes a new instance of the AppCenterClient class.
   * @constructor
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: any, baseUri?: string, options?: ServiceClientOptions);

  account: Account;

  codepush: Codepush;

}

export = AppCenterClient;
