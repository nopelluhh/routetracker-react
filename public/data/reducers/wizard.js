const initialState = {
    tags: []
}

const wizard = (state = initialState, action) => {
    switch (action.type) {
    case 'UPDATE_NEW_ROUTE':
        return Object.assign({}, state, { [action.field]: action.value})
    case 'UPDATE_TAGS':
        return Object.assign({}, state, {tags: toggleTag(state.tags, action.value)})
    case 'RESET_WIZARD':
        return Object.assign({}, {gym: state.gym, tags: []})
    default:
        return state
    }
}

export default wizard

// utilities

function toggleTag(tags, tag) {
    let ind = tags.indexOf(tag)
    tags = [...tags]
    if (ind >= 0) {
        tags[ind] = tags[tags.length - 1]
        tags.length = tags.length - 1
        return tags
    }
    return tags.concat(tag)
}