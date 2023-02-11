import React, { useEffect } from 'react'
import { Provider } from 'react-redux';
import { Layout } from '../shared/components/layout';

const AppProvider = ({ children }) => {
    return (
            <Layout>
                {children}
            </Layout>

    )
}

export default AppProvider