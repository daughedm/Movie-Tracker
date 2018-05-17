import key from './apiKey';

const fetchRecentFilms = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;
  try{
    const response = await fetch(url);
    const filmData = await response.json();
    return filmData;
  } catch(err){
    const error = 'Failed to fetch data'
    throw error;
  }
}

const addUserFetch = async (user) => {
  const url = "http://localhost:3000/api/users/new"
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"}
    })
    const userData = await response.json();
    return userData;
  } catch(err){
    const error = 'Failed to fetch data'
    throw error;
  }
}

const fetchUser = async (user) => {
  const email = user.email.toLowerCase();
  const  userBody = {
    method: 'POST',
    body: JSON.stringify({ email, password: user.password }),
    headers: {"Content-Type": "application/json"}
  }
  const url = 'http://localhost:3000/api/users';
  try {
    const response = await fetch(url, userBody)
    const userData = await response.json();
    return userData;
  } catch (err) {
    const error = 'Failed to fetch data'
    throw error;
  }
}

export {
  fetchRecentFilms, 
  addUserFetch, 
  fetchUser
};