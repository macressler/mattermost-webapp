// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import ProfilePopover from './profile_popover.jsx';
import Pluggable from 'plugins/pluggable';

import PropTypes from 'prop-types';

import * as PostUtils from 'utils/post_utils.jsx';
import React from 'react';
import StatusIcon from './status_icon.jsx';
import {OverlayTrigger} from 'react-bootstrap';

export default class ProfilePicture extends React.PureComponent {
    static defaultProps = {
        width: '36',
        height: '36',
        isRHS: false,
        hasMention: false
    };

    static propTypes = {
        src: PropTypes.string.isRequired,
        status: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
        user: PropTypes.object,
        isBusy: PropTypes.bool,
        isRHS: PropTypes.bool,
        hasMention: PropTypes.bool,
        post: PropTypes.object
    };

    hideProfilePopover = () => {
        this.refs.overlay.hide();
    }

    render() {
        let isSystemMessage = false;
        if (this.props.post) {
            isSystemMessage = PostUtils.isSystemMessage(this.props.post);
        }
        if (this.props.user) {
            return (
                <OverlayTrigger
                    ref='overlay'
                    className='hidden-xs'
                    trigger='click'
                    placement='right'
                    rootClose={true}
                    overlay={
                        <Pluggable>
                            <ProfilePopover
                                user={this.props.user}
                                src={this.props.src}
                                status={this.props.status}
                                isBusy={this.props.isBusy}
                                hide={this.hideProfilePopover}
                                isRHS={this.props.isRHS}
                                hasMention={this.props.hasMention}
                            />
                        </Pluggable>
                    }
                >
                    <span className='status-wrapper'>
                        <img
                            className={`more-modal__image ${isSystemMessage ? 'icon--uchat' : ''}`}
                            width={this.props.width}
                            height={this.props.width}
                            src={this.props.src}
                        />
                        <StatusIcon status={this.props.status}/>
                    </span>
                </OverlayTrigger>
            );
        }
        return (
            <span className='status-wrapper'>
                <img
                    className={`more-modal__image ${isSystemMessage ? 'icon--uchat' : ''}`}
                    width={this.props.width}
                    height={this.props.width}
                    src={this.props.src}
                />
                <StatusIcon status={this.props.status}/>
            </span>
        );
    }
}
