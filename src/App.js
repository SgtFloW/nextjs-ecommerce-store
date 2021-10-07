import './App.css';
import { useState } from 'react';
import Guestbook from './Guestbook';
import SignUpForm from './SignUpForm';

function App() {
  const [__guestList, setGuestList] = useState([]);
  const [__firstName, setFirstName] = useState();
  const [__lastName, setLastName] = useState();

  const baseUrl = 'https://my-react-guest-list-serv.herokuapp.com';

  async function downloadGuestList() {
    const response = await fetch(`${baseUrl}/`);
    const allGuests = await response.json();
    setGuestList(allGuests);
  }

  async function createGuest(event) {
    const response = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: __firstName, lastName: __lastName }),
    });
    const createdGuest = await response.json();
    console.log(createdGuest);
    setGuestList(createdGuest);
    event.preventDefault();
    setFirstName('');
    setLastName('');
  }

  async function deleteGuest(userId) {
    const response = await fetch(`${baseUrl}/${userId}`, { method: 'DELETE' });
    const deletedGuest = await response.json();
    __guestList.splice(__guestList.indexOf(deletedGuest), 1);
  }

  async function toggleAttentance(userId) {
    const guest = __guestList.filter((user) => user.id === userId)[0];

    const response = await fetch(`${baseUrl}/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: !guest.attending }),
    });

    const updatedGuest = await response.json();

    for (let index = 0; index < __guestList.length; index++) {
      const user = __guestList[index];
      if (user.id === userId) {
        user.attending = updatedGuest.attending;
      }
    }
  }

  function handleChange(type, event) {
    if (type === 'firstname') {
      setFirstName(event.currentTarget.value);
    } else {
      setLastName(event.currentTarget.value);
    }
  }

  if (__guestList.length === 0) {
    downloadGuestList();
  }

  return (
    <>
      <SignUpForm handleChange={handleChange} createGuest={createGuest} />
      <br />
      <Guestbook
        __guestList={__guestList}
        deleteGuest={deleteGuest}
        toggleAttentance={toggleAttentance}
      />
    </>
  );
}

export default App;
