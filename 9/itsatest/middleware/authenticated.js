export default function ({ store, redirect }) {
    // If the user is not authenticated
    // if (!process.server && localStorage.accessToken === undefined) {
    if (store.state.userType === 'admin') {
        store.dispatch('setDarkMode', true)
    }
}