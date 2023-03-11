import React, {useEffect, useState} from 'react';
import {css} from '@emotion/react';
import { baseApi } from '../Config/api';
import { Layout } from '../components/Layout';
import { getSessionToken } from '../Config/CookieHandler';
import CollectionResult from '../components/Collection/CollectionResults';
const CollectionCSS = css`

`
const getCollections = async () =>{
    const response = baseApi.get('collections/',{
        headers:{
            'Authorization': 'Token ' + getSessionToken(),
        }
    })
    //console.log(response.data)
    return response
}

const Collections = () => {
    const [collectionItems, setCollectionItems] = useState("Loading Collections")

useEffect(() => {
    
        getCollections().then((d) => {
            //console.log("collection d", d.data['results']);
            setCollectionItems(<CollectionResult collections={d.data['results']}/>);
        })
    },[])
    

    //console.log("collecitons", collectionItems);
    return (
        <Layout>
            <div css={CollectionCSS} >
                <h1>
                    Collections
                </h1>
                {collectionItems}
            </div>
        </Layout>
        
    )
};
export default Collections;