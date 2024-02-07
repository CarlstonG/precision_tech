import {createClient} from '@sanity/client'

const client = createClient({
    projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_REACT_APP_SANITY_DATASET,
    apiVersion: '2021-08-31'
})

export default client;
