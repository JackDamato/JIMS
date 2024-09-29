const CurrentUser = (() => {
    let state = "";

    return {
        getState: () => state,
        setState: (newState) => {
            state = newState;
        }
    };
})();
