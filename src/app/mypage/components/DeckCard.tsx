'use client';

interface DeckCardProps {
    title: string;
    timeAgo: string;
    cardCount: number;
    likes: number;
    comments: number;
    views: number;
}

export const DeckCard = ({ title, timeAgo, cardCount, likes, comments, views }: DeckCardProps) => {
    return (
        <div className="flex flex-col flex-shrink-0 w-[311px] h-[146px] px-[24px] py-[20px] justify-center bg-white rounded-[20px] border border-[#E1E1E4] hover:shadow-sm transition-shadow">
            {/* 헤더 */}
            <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm font-medium text-[#1C1C1F]">{title}</h4>
                <div className="flex flex-col items-end gap-1">
                    <span className="text-sm text-[#555558]">{timeAgo}</span>
                    <div className="flex items-center gap-1">
                        <img src="/images/ph_cards-fill.svg" alt="스크랩" width="16" height="16" />
                        <span className="text-sm text-[#555558]">{cardCount}</span>
                    </div>
                </div>
            </div>

            {/* 통계 */}
            <div className="flex gap-[5px] items-center">
                <div className="flex items-center gap-1 bg-[#F7F7FA] px-[10px] py-[6px] rounded-[11px]">
                    <img src="/images/uil_thumbs-up.svg" alt="좋아요" width="12" height="12" />
                    <span className="text-xs text-bold">{likes.toLocaleString()}</span>
                </div>

                <div className="flex items-center gap-1 bg-[#F7F7FA] px-[10px] py-[6px] rounded-[11px]">
                    <img src="/images/hit.svg" alt="시간" width="12" height="12" />
                    <span className="text-xs text-bold">{comments.toLocaleString()}</span>
                </div>

                <div className="flex items-center gap-1 bg-[#F7F7FA] px-[10px] py-[6px] rounded-[11px]">
                    <img src="/images/tabler_clock.svg" alt="시간" width="12" height="12" />
                    <span className="text-xs text-bold">{views.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

