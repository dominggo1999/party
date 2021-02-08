const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Perform async code here
    const firestore = getFirestore();

    firestore.collection('projects').add({
      ...project,
      authorFirstname: 'arnold',
      authorLastname: 'dominggo',
      authorID: 12345,
      createdId: new Date(),
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    });
  };
};

export default createProject;
