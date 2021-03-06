import axios from 'axios';

export const logIn = async (email, password) => {
  try {
    const response = await axios.post('http://0.0.0.0:4000/api/auth/login', {
      email,
      password,
    });

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }

    throw error;
  }
};

export const getTeamsEmployees = async token => {
  try {
    const response = await axios.get('http://0.0.0.0:4000/api/team/employees', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      throw error.response;
    }

    throw error;
  }
};

export const addTeam = async (teamName, token) => {
  try {
    const response = await axios.post(
      'http://0.0.0.0:4000/api/team',
      { name: teamName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }

    throw error;
  }
};

export const addPosition = async (positionName, token) => {
  try {
    const response = await axios.post(
      'http://0.0.0.0:4000/api/position',
      { name: positionName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }

    throw error;
  }
};

export const getAllPositions = async token => {
  try {
    const response = await axios.get('http://0.0.0.0:4000/api/position', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }

    throw error;
  }
};

export const getAllTeams = async token => {
  try {
    const response = await axios.get('http://0.0.0.0:4000/api/team', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }

    throw error;
  }
};

export const addEmployee = async (
  token,
  team,
  position,
  email,
  password,
  name,
  lastName,
  mothersName,
) => {
  try {
    const response = await axios.post(
      'http://0.0.0.0:4000/api/auth/register',
      {
        team,
        position,
        email,
        password,
        name,
        lastName,
        mothersName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }

    throw error;
  }
};

export const getAllReports = async token => {
  try {
    const response = await axios.get('http://0.0.0.0:4000/api/report', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }

    throw error;
  }
};

export const addReport = async (
  token,
  assignedBy,
  assignedTo,
  arrivalTime,
  departureTime,
  workingDay,
) => {
  try {
    const response = await axios.post(
      'http://0.0.0.0:4000/api/report',
      {
        assignedBy,
        assignedTo,
        arrivalTime,
        departureTime,
        workingDay,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response && response.data && response.data.data) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    }

    throw error;
  }
};
