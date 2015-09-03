/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe('Controller: modules/home/HomeCtrl', function () {
  var $rootScope, $scope, $controller, $httpBackend, mockedApi;

  beforeEach(module('dataCollectorApp'));

  beforeEach(inject(function (_$rootScope_, _$controller_, _$httpBackend_, api, _) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;
    mockedApi = api;
    $controller('HomeController', {
      '$rootScope': $rootScope,
      '$scope': $scope,
      'api': mockedApi,
      '_': _
    });
  }));

});