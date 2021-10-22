import React from 'react'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Header from '../components/Header'
import DemoPageLinks from '../components/DemoPageLinks'

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const Demo = () => {
  const AuthUser = useAuthUser()
  return (
    <div>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      
      <div style={styles.content}>
        <div style={styles.infoTextContainer}>
          <h1 style={{ fontSize: "40px", textAlign: 'center'}}>Home</h1>
            <div className="container">
            <div className="row text-center">
              <div className="col, col-md">
                <a href="/todo" style={{ fontSize: "20px", textDecoration: 'underline' }}>Add a todo!</a>
              </div>
              <div className="col, col-md">  
                <a href="/event" style={{ fontSize: "20px", textDecoration: 'underline' }}>Add an event!</a>
              </div>
              <div className="col, col-md">  
                <a href="/contacts" style={{ fontSize: "20px", textDecoration: 'underline' }}>Add a contact!</a>
              </div>
            </div>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Demo)