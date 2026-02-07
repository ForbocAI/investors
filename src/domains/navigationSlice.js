/**
 * Navigation Domain
 * Hash-based routing for investor pages.
 */

const NAVIGATE = 'navigation/NAVIGATE';

export const navigate = (path) => ({
    type: NAVIGATE,
    payload: path
});

const getPathFromHash = () => {
    const hash = window.location.hash.substring(1);
    return hash || 'index';
};

const initialState = {
    currentPath: getPathFromHash()
};

export const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return {
                ...state,
                currentPath: action.payload.replace('#', '') || 'index'
            };
        default:
            return state;
    }
};

export const selectCurrentPath = (state) => state.navigation.currentPath;

export const selectCurrentPage = (state) => {
    const path = selectCurrentPath(state);
    if (path === 'materials') return 'materials';
    if (path === 'contact') return 'contact';
    if (path.startsWith('deck')) return 'deck';
    return 'index';
};

export const selectDeckSlide = (state) => {
    const path = selectCurrentPath(state);
    if (!path.startsWith('deck')) return 1;
    const parts = path.split('/');
    if (parts.length > 1) {
        return parseInt(parts[1], 10) || 1;
    }
    return 1;
};
