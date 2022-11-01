import { configureStore } from '@reduxjs/toolkit'

import taskSlice  from './taskSilce';


export const store = configureStore({
    reducer: {task:taskSlice},
})