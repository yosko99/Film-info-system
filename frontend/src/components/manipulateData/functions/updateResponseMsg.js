const responseUpdate = (setter, msg = undefined) => {
  // Something went wrong with the action
  if (msg !== undefined) {
    setter({
      msg,
      variant: 'danger'
    });
  } else {
    // Successfull action
    setter({
      msg: 'Успешно действие :)',
      variant: 'success'
    });
  }
};

export default responseUpdate;
