const initState = {
  projects: [
    { id: '1', title: 'fgeawgaewgew', content: '25632t23g4g24g224g24' },
    { id: '2', title: 'makan bang', content: '25632t23g4g24g224g24' },
    { id: '3', title: 'wughewgewgew', content: 'lalalalalalalalalal' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log(action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
