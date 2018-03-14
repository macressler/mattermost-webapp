// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';

//import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import PreferenceStore from 'stores/preference_store.jsx';

import Pluggable from './pluggable.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        components: state.plugins.components,
        theme: PreferenceStore.getTheme() //getTheme(state)
    };
}

export default connect(mapStateToProps)(Pluggable);
