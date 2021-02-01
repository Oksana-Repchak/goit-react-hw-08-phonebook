const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getLoading,
  getError,
};
export default authSelectors;
