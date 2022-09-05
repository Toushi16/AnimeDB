const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=e2870b1d2bcde1e9ce0efac1ebcac75f";

const GET = async( type, page ) => {
  const res = await fetch(BASE_URL+type+'/'+API_KEY+'&with_genres=16&with_origin_country=JP&page='+page);
  return await res.json();
}

export { GET };