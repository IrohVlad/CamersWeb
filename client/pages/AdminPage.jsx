import React, {useEffect, useState} from 'react';
import { SERVER } from '../utils/const.js';
import { fetchMainGet, fetchPostsGet, fetchPriceGet, fetchWhyGet } from '../fethes.jsx';
import AdminContainer from '../src/components/AdminContainer.jsx';

const AdminPage = () => {
    const [MainInfo, setMainInfo] = useState([]);
    const [PostsInfo, setPostsInfo] = useState([]);
    const [PriceInfo, setPriceInfo] = useState([]);
    const [WhyInfo, setWhyInfo] = useState([]);

    useEffect(()=>{
        fetchMainGet("GET", setMainInfo);
        fetchPostsGet("GET", setPostsInfo);
        fetchPriceGet("GET", setPriceInfo);
        fetchWhyGet("GET", setWhyInfo);
    }, [])
    console.log(MainInfo);
    return (
        <main style={{backgroundColor: 'black'}}>
            <AdminContainer AllSetters={[setMainInfo, setPostsInfo, setPriceInfo, setWhyInfo]} AllInfo={[MainInfo, PostsInfo, PriceInfo, WhyInfo]}/>
        </main>
    );
};

export default AdminPage;