import React from 'react'
import SignInForm from './index'
import StoreProvider from '@/stores/store-provider'

describe('<SignInForm />', () => {

  beforeEach(() => {
    cy.mount(
      <StoreProvider>
        <SignInForm />
      </StoreProvider>
    )
  })

})