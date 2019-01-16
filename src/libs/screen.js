const getInitialScreen = (authUser) => {
  if (authUser) {
    return "HomeScreen";
  }

  return "HomeScreen";
};

export { getInitialScreen };
