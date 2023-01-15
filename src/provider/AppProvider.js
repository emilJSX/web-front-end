import React from 'react'
import { Provider } from 'react-redux';
import { Layout } from '../shared/components/layout';
import { store } from '../store'

const AppProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <Layout>
                {children}
            </Layout>
        </Provider>
    )
}

export default AppProvider