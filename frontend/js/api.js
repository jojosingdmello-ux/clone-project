const BASE_URL = "https://clone-project-6u5j.onrender.com";
const API = {
  async request(method, endpoint, data = null) {
    const opts = {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    if (data) opts.body = JSON.stringify(data);

    const res = await fetch(BASE_URL + '/api' + endpoint, opts);

    const json = await res.json();
    if (!res.ok) throw new Error(json.error || 'Request failed');
    return json;
  },
  get:    (e)    => API.request('GET',    e),
  post:   (e, d) => API.request('POST',   e, d),
  put:    (e, d) => API.request('PUT',    e, d),
  delete: (e)    => API.request('DELETE', e),
};
