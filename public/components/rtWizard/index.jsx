import {connect} from 'react-redux'
import RtWizard from './rtWizard'
import {updateRoute, updateTags, resetWizard} from 'data/actions/wizard'
import {getTeam} from 'data/actions/team'
import {getGyms} from 'data/actions/gym'

function mapStateToProps(state) {
    return {
        route: state.route,
        team: state.team,
        gyms: state.gyms
    }
}

function mapDispatch(dispatch) {
    return {
        update: (field, value) => dispatch(updateRoute(field, value)),
        updateTags: (value) => dispatch(updateTags(value)),
        resetForm: () => dispatch(resetWizard()),
        getTeam: () => dispatch(getTeam()),
        getGyms: () => dispatch(getGyms())
    }
}

const RtWizardContainer = connect(mapStateToProps, mapDispatch)(RtWizard)

export default RtWizardContainer