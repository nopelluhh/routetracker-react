export const UPDATE_ROUTE = 'UPDATE_ROUTE'

export function updateRoute(field, value) {
    return {
        type: UPDATE_ROUTE,
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