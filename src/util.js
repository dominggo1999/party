const convertSecondsToDate = (s) => {
  const date = new Date(s * 1000);
  return `${date}`;
};

export default convertSecondsToDate;
