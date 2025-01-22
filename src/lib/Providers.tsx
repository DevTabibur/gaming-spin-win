/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { GlobalLoaderProvider } from '@/context/GlobalLoaderContext'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
// import { Toaster } from 'react-hot-toast';

// **  redux provider
//!====================================================================================================================================>>>
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalLoaderProvider>
        {/* <Loader /> */}
        <Provider store={store}>{children}</Provider>
      </GlobalLoaderProvider>
    </>
  )
}

export default Providers
