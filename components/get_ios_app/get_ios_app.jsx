// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

import logoImage from 'images/uchat_color.png';

const {IosAppUrlScheme, IosAppDownloadLink} = global.mm_config;

export default function GetIosApp() {
    return (

        <div className='get-app get-ios-app'>
            <img
                src={logoImage}
                className='get-app__logo'
            />
            <a
                href={IosAppUrlScheme ? `${IosAppUrlScheme}://` : IosAppDownloadLink}
                className='btn btn-primary get-ios-app__open-mattermost'
            >
                <FormattedMessage
                    id='get_app.openMattermost'
                    defaultMessage={IosAppUrlScheme ? 'Open in uChat App' : 'Download uChat for iOS'}
                />
            </a>
            <a
                href='/login'
                className='btn btn-secondary get-ios-app__continue-with-browser'
            >
                <FormattedMessage
                    id='get_app.continueWithBrowserLink'
                    defaultMessage='Continue to mobile site'
                />
            </a>
        </div>
    );
}
