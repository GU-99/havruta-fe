'use client';

import { DeckSection } from './DeckSection';

// 좋아요 누른 덱 아이콘
const LikedDecksIcon = () => (
    <img src="/images/ph_cards-fill.svg" alt="좋아요 누른 덱" width="20" height="20" />
);

// 공유한 덱 아이콘
const SharedDecksIcon = () => (
    <img src="/images/ph_cards-fill.svg" alt="공유한 덱" width="20" height="20" />
);

export const UserDeckSections = () => {
    // 좋아요 누른 덱 데이터 (예시)
    const likedDecks = [
        {
            id: '1',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 690,
            comments: 2620,
            views: 2620,
        },
        {
            id: '2',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 680,
            comments: 2600,
            views: 2620,
        },
        {
            id: '3',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 608,
            comments: 2620,
            views: 2600,
        },
        {
            id: '4',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 900,
            comments: 2619,
            views: 2619,
        },
        {
            id: '5',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 690,
            comments: 2620,
            views: 2620,
        },
    ];

    // 공유한 덱 데이터 (예시)
    const sharedDecks = [
        {
            id: '6',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 690,
            comments: 2620,
            views: 2620,
        },
        {
            id: '7',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 680,
            comments: 2620,
            views: 2620,
        },
        {
            id: '8',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 608,
            comments: 2620,
            views: 2620,
        },
        {
            id: '9',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 900,
            comments: 2620,
            views: 2620,
        },
        {
            id: '10',
            title: '덱제목',
            timeAgo: '2주 전',
            cardCount: 220,
            likes: 690,
            comments: 2620,
            views: 2620,
        },
    ];

    const handleLikedDecksSeeAll = () => {
        alert('좋아요 누른 덱 전체 보기');
    };

    const handleSharedDecksSeeAll = () => {
        alert('공유한 덱 전체 보기');
    };

    return (
        <div className="flex flex-col gap-8">
            <DeckSection
                title="좋아요 누른 덱"
                icon={<LikedDecksIcon />}
                decks={likedDecks}
                onSeeAll={handleLikedDecksSeeAll}
            />

            <DeckSection
                title="공유한 덱"
                icon={<SharedDecksIcon />}
                decks={sharedDecks}
                onSeeAll={handleSharedDecksSeeAll}
            />
        </div>
    );
};

