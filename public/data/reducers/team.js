const initialState = {
    colors: [],
    tags: [],
    grades: {
        boulder: [],
        rope: []
    }
}

const transformTeam = (team) => {
    return {
        ...team,
        grades: {
            boulder: team.grades.boulder.map((grade, index) => {return {_id: index, value: grade}}),
            rope: team.grades.rope.map((grade, index) => {return {_id: index, value: grade}})
        },
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