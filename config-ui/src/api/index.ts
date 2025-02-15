/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { request } from '@/utils';

import * as apiKey from './api-key';
import * as blueprint from './blueprint';
import * as connection from './connection';
import * as pipeline from './pipeline';
import plugin from './plugin';
import * as project from './project';
import * as scope from './scope';
import * as scopeConfig from './scope-config';
import * as task from './task';

const migrate = () => request('/proceed-db-migration');
const ping = () => request('/ping');
const version = (signal?: AbortSignal): Promise<{ version: string }> => request('/version', { signal });
const userInfo = (signal?: AbortSignal): Promise<{ user: string; email: string; logoutURI: string }> =>
  request('/userinfo', { signal });

export const API = {
  apiKey,
  blueprint,
  connection,
  pipeline,
  plugin,
  project,
  scopeConfig,
  scope,
  task,
  migrate,
  ping,
  version,
  userInfo,
};

export default API;
