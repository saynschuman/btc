export const authenticate = hash => {
  fetch(`https://atc-bl.nadzor.online/bl198765/admin/exchange/${hash.replace('#/', '')}`)
    .then(res => res.json())
    .then(res => localStorage.setItem('token', res.jwt))
    .catch(error => console.log(error))
}