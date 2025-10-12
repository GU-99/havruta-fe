'use client';

import { DeckCard } from './DeckCard';
import { useRef, useState } from 'react';

interface DeckData {
    id: string;
    title: string;
    timeAgo: string;
    cardCount: number;
    likes: number;
    comments: number;
    views: number;
}

interface DeckSectionProps {
    title: string;
    icon: React.ReactNode;
    decks: DeckData[];
    onSeeAll?: () => void;
}

export const DeckSection = ({ title, icon, decks, onSeeAll }: DeckSectionProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleSeeAll = () => {
        if (onSeeAll) {
            onSeeAll();
        } else {
            alert(`${title} 전체 보기`);
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // 스크롤 속도 조절
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="flex flex-col gap-[10px]">
            {/* 헤더 */}
            <div className="flex flex-row h-[64px] md:h-[80px] max-w-screen-xl p-[8px] md:p-[16px] gap-[20px] bg-[#F7F7FA] rounded-[20px] border border-[#E1E1E4] items-center">
                <div className="flex items-center gap-[8px]">
                    <div className="flex bg-white w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-[16px] p-[8px] border border-[#E1E1E4] items-center justify-center">
                        {icon}
                    </div>
                    <h3 className="font-bold text-[14px] md:text-[18px]">{title}</h3>
                </div>
                <button
                    onClick={handleSeeAll}
                    className="text-[12px] px-[14px] md:text-[14px] text-[#555558] ml-auto gap-[6px]"
                >
                    모든 덱 보기 →
                </button>
            </div>

            {/* 덱 카드 목록 */}
            <div className="flex flex-col gap-[20px] rounded-[20px]">
                <div
                    ref={scrollContainerRef}
                    className={`flex gap-[16px] overflow-x-auto pb-[8px] scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    onWheel={(e) => {
                        e.preventDefault();
                        const container = e.currentTarget;
                        container.scrollLeft += e.deltaY;
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    {decks.map((deck) => (
                        <DeckCard
                            key={deck.id}
                            title={deck.title}
                            timeAgo={deck.timeAgo}
                            cardCount={deck.cardCount}
                            likes={deck.likes}
                            comments={deck.comments}
                            views={deck.views}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

