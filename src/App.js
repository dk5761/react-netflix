import React, { useEffect } from 'react';
import './App.css';
import { HomeScreen } from './pages/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginScreen } from './pages/LoginScreen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux'
import { logout, login, selectUser } from './features/userSlice';
import { ProfileScreen } from './pages/ProfileScreen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">

      <Router>
        {
          !user ?
            <LoginScreen /> :
            (
              <Routes>
                <Route path='/' element={<HomeScreen />} />

                <Route path='/profile' element={<ProfileScreen />} />
              </Routes>
            )
        }

      </Router>
    </div>
  );
}

export default App;
