export function updateRoute(field, value) {
    return {
        type: 'UPDATE_NEW_ROUTE',
        field,
        value
    }
}

export function updateTags(value) {
    return {
        type: 'UPDATE_TAGS',
        value
    }
}

export function resetWizard() {
    return {
        type: 'RESET_WIZARD'
    }
}