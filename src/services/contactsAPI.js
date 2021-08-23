import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';

export async function fetchAllContacts() {
  const { data } = await axios.get(`/contacts`);

  console.log(`data >>`, data);

  return data;
}

export async function postContact(name, number) {
  const { data } = await axios.post(`/contacts`, { name, number });

  console.log(`data >>`, data);

  return data;
}

export async function deleteContactById(id) {
  await axios.delete(`/contacts/${id}`);

  console.log(`data >>`, id);

  return id;
}
