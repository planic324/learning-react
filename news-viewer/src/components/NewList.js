
import { useState, useEffect } from 'react'
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 2rem auto 0;
    @media screen and (max-width: 768px){
        width: 100%;
        padding: 0 1rem;
    }
`;

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fatchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cf6e924a4d8e41a8a0f6329349a83509`,
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e)
            }
            setLoading(false);
        };
        fatchData();
    }, [category]);

    // 대기 중일 때
    if(loading) {
        return<NewsListBlock>대기 중 ...</NewsListBlock>
    }

    // 아직 articles 값이 설정되지 않았을 때
    if(!articles) {
        return null;
    }

    // articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};



export default NewsList;