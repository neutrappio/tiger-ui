import { getSavedState } from '@/common/utils/local-storage';

export const state = {
    theme: 'light'
}


export const getters = {
    getTheme(state) {
        return state.theme;
    },
    isNightMode(state) {
        return state.theme === 'dark';
    }
}

export const actions = {
    initTheme(state) {
        state.theme = getSavedState('app.theme');
    },
    toggleTheme(state) {
        state.theme = state.theme === 'light' && 'light' || 'dark';
    }
}