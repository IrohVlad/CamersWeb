import React, {useEffect, useState} from 'react';
import { SERVER } from '../utils/const.js';
import { fetchMainGet, fetchPostsGet, fetchPriceGet, fetchWhyGet, fetchMainPost, fetchPostsPost, fetchPricePost, fetchWhyPost } from '../fethes.jsx';
import AdminContainer from '../src/components/AdminContainer.jsx';

const AdminPage = () => {
    const [refresher, setRefresher] = useState(1);
    const [MainInfo, setMainInfo] = useState([]);
    const [PostsInfo, setPostsInfo] = useState([]);
    const [PriceInfo, setPriceInfo] = useState([]);
    const [WhyInfo, setWhyInfo] = useState([]);

    useEffect(()=>{
        fetchMainGet("GET", setMainInfo);
        fetchPostsGet("GET", setPostsInfo);
        fetchPriceGet("GET", setPriceInfo);
        fetchWhyGet("GET", setWhyInfo);
    }, [refresher])
    console.log(MainInfo);
    return (
        <main style={{backgroundColor: 'black'}}>
            <AdminContainer refresh={[refresher, setRefresher]} AllFetch={[fetchMainPost, fetchPostsPost, fetchPricePost, fetchWhyPost]} AllSetters={[setMainInfo, setPostsInfo, setPriceInfo, setWhyInfo]} AllInfo={{MainInfo, PostsInfo, PriceInfo, WhyInfo}}/>
        </main>
    );
};

export default AdminPage;