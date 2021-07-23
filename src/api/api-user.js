const saveUser = async (user) => {
  try {
    // eslint-disable-next-line no-undef
    let response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const checkEmail = async (email) => {
  try {
    // eslint-disable-next-line no-undef
    let response = await fetch(`http://localhost:3001/users?personalData.email=${email}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export {saveUser, checkEmail};
