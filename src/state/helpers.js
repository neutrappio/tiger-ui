import { mapGetters, mapActions } from 'vuex'

/**
 * Theme
 */
const themeMethods = mapActions('theme', [
    'initTheme',
    'toggleTheme'
]);

const themeComputed = mapGetters('theme', [
    'getTheme',
    'isNightMode',
]);


export { themeMethods, themeComputed };