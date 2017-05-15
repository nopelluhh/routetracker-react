export function updateRoute(field, value) {
    return {
        type: 'UPDATE_NEW_ROUTE',
        payload: {
            field,
            value
        }
    }
}

export function updateTags(value) {
    return {
        type: 'UPDATE_TAGS',
        payload: value
    }
}

export function resetWizard() {
    return {
        type: 'RESET_WIZARD'
    }
}
