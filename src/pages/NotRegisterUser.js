import React from 'react'
import Context from '../Context'
export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <form onSubmit={activateAuth} >
            <button>Inciar Sesion</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)
