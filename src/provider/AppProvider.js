import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import { Layout } from '../shared/components/layout';
import { store } from '../store/index.js'

const AppProvider = ({ children }) => {
    return (
      <Layout>
          {children}
      </Layout>
    )
}

export default AppProvider