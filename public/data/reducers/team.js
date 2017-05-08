const initialState = {
    colors: [],
    tags: [],
    grades: []
}

const transformTeam = (team) => {
    return {
        ...team,
        grades: team.grades.map(grade => {return {_id: grade, value: grade}}),
        colors: team.colors.map(color => {return {_id: color.name, value: color.name, color: color.color}}),
        tags: team.tags.map(tag => {return {_id: tag, value: tag}})
    }
}

const team = (state = initialState, action) => {
    switch (action.type) {
    case 'RECEIVE_TEAM':
        return transformTeam(action.team)
    case 'GET_TEAM':
        return state
    default:
        return state
    }
}

export default team  