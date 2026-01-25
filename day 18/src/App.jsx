import React from 'react'
import ArticleCard from './ArticleCard'

const cardInfo = {
    title: 'Serene Landscapes of Santorini',
    date: new Date('2023-06-15'),
    comments: 42,
    subTitle: 'Where the Aegean meets the sky.',
    description:
        'Santorini, with its iconic white-washed buildings and blue domes, offers breathtaking views of the caldera, stunning sunsets, and a unique volcanic landscape that captivates every visitor.',
    category: 'travel',
    imageURL:
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
};

function App() {
    return (
        <>
            <ArticleCard data={cardInfo} />
        </>
    )
}

export default App
