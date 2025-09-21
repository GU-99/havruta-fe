import Image from 'next/image';

// 스켈레톤 UI 테스트를 위한 지연 함수
// async function fetchData() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return 'Hello, Next.js!';
// }

export default async function page() {
  // await fetchData();

  return (
    <main className="flex flex-col justify-center">
      {/* 페이지 타이틀 */}
      <section className="mx-4 mb-5 flex h-16 flex-1 items-center justify-start gap-2.5 rounded-[20px] border border-[#E1E1E4] bg-[#F7F7FA] p-3 sm:h-[84px]">
        <div className="flex size-10 items-center justify-center rounded-[10px] border border-[#E1E1E4] bg-[#FEFEFE] sm:size-16">
          <div className="relative size-6 sm:size-8">
            <Image fill src="/images/search.svg" alt="검색 아이콘" />
          </div>
        </div>
        <span className="text-xl font-bold">덱 검색</span>
      </section>

      {/* 검색 UI */}
      <section className="mx-4 mb-2 flex flex-col items-start justify-start gap-5 sm:mb-10 sm:flex-row sm:items-center">
        <div className="h-12 w-full flex-1 rounded-3xl border border-[#E1E1E4] px-6 py-2">
          {/* 검색창 */}
          <div className="flex h-full w-full items-center justify-start gap-2 overflow-auto">
            <div className="relative size-6"></div>
            <Image src="/images/search.svg" alt="검색 아이콘" width={24} height={24} />
            <input type="text" className="flex-1 font-medium text-[#555558]" placeholder="검색" />
            <Image src="/images/proicons_cancel.svg" alt="삭제 아이콘" width={24} height={24} />
          </div>
          {/* 검색 타입 (덱 | 태그)  */}
          {/* <div className="gap-[10px]">
            <span>덱</span>
            <span>태그</span>
          </div> */}
        </div>
        <div className="mb-2 flex w-[132px] items-center justify-start gap-2">
          <Image src="/images/mynaui_filter.svg" alt="ooo 아이콘" width={24} height={24} />
          <select name="" id="">
            <option value="">좋아요 순</option>
            <option value="">조회수 순</option>
          </select>
        </div>
      </section>

      {/* 공유덱 목록 */}
      <section className="mx-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-7">
        {/* 공유덱 */}
        <div className="flex flex-col gap-5 rounded-[20px] border border-[#E1E1E4] px-6 py-5">
          {/* 공유덱 제목 */}
          <div className="flex items-center justify-between">
            <div className="text-base font-bold sm:text-xl sm:font-medium">덱 제목</div>
            <div className="flex flex-col items-end justify-end gap-1 text-sm font-medium sm:text-base">
              <span>2주 전</span>
              <div className="flex items-center justify-start gap-[6px]">
                <div className="relative size-[14px] sm:size-4">
                  <Image fill src="/images/cards.svg" alt="카드 아이콘" />
                </div>
                <span>220</span>
              </div>
            </div>
          </div>
          {/* 태그 목록 */}
          <div className="flex flex-wrap items-center justify-start gap-[10px] overflow-auto">
            {/* 태그1 */}
            <div className="flex items-center justify-start gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-[10px] py-[2px]">
              <div className="relative size-3 sm:size-4">
                <Image fill src="/images/ellipse.svg" alt="태그 아이콘" />
              </div>
              <span className="text-sm font-medium sm:text-base">태그</span>
            </div>
            {/* 태그2 */}
            <div className="flex items-center justify-start gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-[10px] py-[2px]">
              <div className="relative size-3 sm:size-4">
                <Image fill src="/images/ellipse.svg" alt="태그 아이콘" />
              </div>
              <span className="text-sm font-medium sm:text-base">태그</span>
            </div>
            {/* 태그3 */}
            <div className="flex items-center justify-start gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-[10px] py-[2px]">
              <div className="relative size-3 sm:size-4">
                <Image fill src="/images/ellipse.svg" alt="태그 아이콘" />
              </div>
              <span className="text-sm font-medium sm:text-base">태그</span>
            </div>
            {/* 태그4 */}
            <div className="flex items-center justify-start gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-[10px] py-[2px]">
              <div className="relative size-3 sm:size-4">
                <Image fill src="/images/ellipse.svg" alt="태그 아이콘" />
              </div>
              <span className="text-sm font-medium sm:text-base">태그</span>
            </div>
          </div>
          {/* 구별선 */}
          <hr className="border-[#E1E1E4]" />
          {/* 공유덱 등록 정보 */}
          <div className="flex justify-between overflow-auto">
            {/* 공유자 정보 */}
            <div className="flex items-center justify-start gap-2 sm:gap-[14px]">
              <div className="relative size-7 sm:size-10">
                <Image fill src="/images/default_profile.svg" alt="프로필 이미지" />
              </div>
              <div className="text-sm font-medium sm:text-base">등록자</div>
            </div>
            {/* 공유덱 좋아요, 조회수, 댓글수 정보 */}
            <div className="flex items-center justify-start gap-1 sm:gap-[10px]">
              <div className="flex h-7 items-center justify-center gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-2 py-[6px] sm:h-[34px]">
                <div className="relative size-4 sm:size-5">
                  <Image fill src="/images/thumbs_up.svg" alt="좋아요 아이콘" />
                </div>
                <span className="text-[11px] font-medium sm:text-base">600</span>
              </div>
              <div className="flex h-7 items-center justify-center gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-2 py-[6px] sm:h-[34px]">
                <div className="relative size-4 sm:size-5">
                  <Image fill src="/images/comments.svg" alt="댓글수 아이콘" />
                </div>
                <span className="text-[11px] font-medium sm:text-base">2,620</span>
              </div>
              <div className="flex h-7 items-center justify-center gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-2 py-[6px] sm:h-[34px]">
                <div className="relative size-4 sm:size-5">
                  <Image fill src="/images/views.svg" alt="조회수 아이콘" />
                </div>
                <span className="text-[11px] font-medium sm:text-base">2,620</span>
              </div>
            </div>
          </div>
        </div>
        {/* 공유덱 */}
        <div className="flex flex-col gap-5 rounded-[20px] border border-[#E1E1E4] px-6 py-5">
          {/* 공유덱 제목 */}
          <div className="flex items-center justify-between">
            <div className="text-base font-bold sm:text-xl sm:font-medium">덱 제목</div>
            <div className="flex flex-col items-end justify-end gap-1 text-sm font-medium sm:text-base">
              <span>2주 전</span>
              <div className="flex items-center justify-start gap-[6px]">
                <div className="relative size-[14px] sm:size-4">
                  <Image fill src="/images/cards.svg" alt="카드 아이콘" />
                </div>
                <span>220</span>
              </div>
            </div>
          </div>
          {/* 태그 목록 */}
          <div className="flex flex-wrap items-center justify-start gap-[10px] overflow-auto">
            {/* 태그1 */}
            <div className="flex items-center justify-start gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-[10px] py-[2px]">
              <div className="relative size-3 sm:size-4">
                <Image fill src="/images/ellipse.svg" alt="태그 아이콘" />
              </div>
              <span className="text-sm font-medium sm:text-base">태그</span>
            </div>
            {/* 태그2 */}
            <div className="flex items-center justify-start gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-[10px] py-[2px]">
              <div className="relative size-3 sm:size-4">
                <Image fill src="/images/ellipse.svg" alt="태그 아이콘" />
              </div>
              <span className="text-sm font-medium sm:text-base">태그</span>
            </div>
            {/* 태그3 */}
            <div className="flex items-center justify-start gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-[10px] py-[2px]">
              <div className="relative size-3 sm:size-4">
                <Image fill src="/images/ellipse.svg" alt="태그 아이콘" />
              </div>
              <span className="text-sm font-medium sm:text-base">태그</span>
            </div>
            {/* 태그4 */}
            <div className="flex items-center justify-start gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-[10px] py-[2px]">
              <div className="relative size-3 sm:size-4">
                <Image fill src="/images/ellipse.svg" alt="태그 아이콘" />
              </div>
              <span className="text-sm font-medium sm:text-base">태그</span>
            </div>
          </div>
          {/* 구별선 */}
          <hr className="border-[#E1E1E4]" />
          {/* 공유덱 등록 정보 */}
          <div className="flex justify-between overflow-auto">
            {/* 공유자 정보 */}
            <div className="flex items-center justify-start gap-2 sm:gap-[14px]">
              <div className="relative size-7 sm:size-10">
                <Image fill src="/images/default_profile.svg" alt="프로필 이미지" />
              </div>
              <div className="text-sm font-medium sm:text-base">등록자</div>
            </div>
            {/* 공유덱 좋아요, 조회수, 댓글수 정보 */}
            <div className="flex items-center justify-start gap-1 sm:gap-[10px]">
              <div className="flex h-7 items-center justify-center gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-2 py-[6px] sm:h-[34px]">
                <div className="relative size-4 sm:size-5">
                  <Image fill src="/images/thumbs_up.svg" alt="좋아요 아이콘" />
                </div>
                <span className="text-[11px] font-medium sm:text-base">600</span>
              </div>
              <div className="flex h-7 items-center justify-center gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-2 py-[6px] sm:h-[34px]">
                <div className="relative size-4 sm:size-5">
                  <Image fill src="/images/comments.svg" alt="댓글수 아이콘" />
                </div>
                <span className="text-[11px] font-medium sm:text-base">2,620</span>
              </div>
              <div className="flex h-7 items-center justify-center gap-[6px] rounded-[10px] border border-[#F5F5F5] bg-[#F7F7FA] px-2 py-[6px] sm:h-[34px]">
                <div className="relative size-4 sm:size-5">
                  <Image fill src="/images/views.svg" alt="조회수 아이콘" />
                </div>
                <span className="text-[11px] font-medium sm:text-base">2,620</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[20px] border border-[#E1E1E4] px-6 py-5">test</div>
        <div className="rounded-[20px] border border-[#E1E1E4] px-6 py-5">test</div>
        <div className="rounded-[20px] border border-[#E1E1E4] px-6 py-5">test</div>
        <div className="rounded-[20px] border border-[#E1E1E4] px-6 py-5">test</div>
        <div className="rounded-[20px] border border-[#E1E1E4] px-6 py-5">test</div>
        <div className="rounded-[20px] border border-[#E1E1E4] px-6 py-5">test</div>
        <div className="rounded-[20px] border border-[#E1E1E4] px-6 py-5">test</div>
        <div className="rounded-[20px] border border-[#E1E1E4] px-6 py-5">test</div>
      </section>
    </main>
  );
}
