/**
 * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
 * @fileoverview Refresh Token <Higher Order Component>
 * @copyright Arkadip Bhattacharya 2020
 *
 * Copyright 2020 Arkadip Bhattacharya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import {AuthContextConsumer} from '../AuthContext';
import RefreshToken from '../RefreshToken';

/**
 * @interface withRefreshTokenProps
 */
interface withRefreshTokenProps {
  refreshToken: RefreshToken
}

/**
 * @public
 * @function
 * @name withAuthHeader
 * @description Inject Authentication Header inside the Component's Prop
 * @param Component - React Component
 */
function withRefreshToken<P extends withRefreshTokenProps>(
    Component: React.ComponentType<P>,
): React.FunctionComponent<P> {
  return (props) => {
    return (
      <AuthContextConsumer>
        {(c) => {
          if (c === null) {
            throw new
            Error('Auth Provider is missing. ' +
              'Please add the AuthProvider before Router');
          }
          return (
            <Component
              {...props}
              refreshToken={
                new RefreshToken(c)
              }
            />
          );
        }}
      </AuthContextConsumer>
    );
  }
  ;
}

export default withRefreshToken;
