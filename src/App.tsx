import React from 'react';
import { useLocalStorage } from '@webcored/react-local-storage'
import './App.css';

// storage config
import './storage'

// storage type
import { UserStorage } from './storages/user';

function App() {
  const [user, userDispatch] = useLocalStorage<UserStorage>('user');

  return (
    <div className="App">
      <header className="App-header">
        <img src='https://webcored-assets.netlify.app/react-local-storage.png' className="App-logo" alt="logo" />
        <br />

        <div className='storage'>
          <small>Available value for storage key: user</small>
          <pre>
            {JSON.stringify(user)}
          </pre>
        </div>

         <br />

        <div className='flex'>
          {/* update name */}
          <button onClick={() => userDispatch.update({ ...user, name: 'Tony Stark' })}>Update</button>

          {/* reset to default */}
          <button onClick={() => userDispatch.reset()}>Reset</button>

          {/* remove from the storage */}
          <button onClick={() => userDispatch.remove()}>Remove</button>
        </div>

      </header>
    </div>
  );
}

export default App;
