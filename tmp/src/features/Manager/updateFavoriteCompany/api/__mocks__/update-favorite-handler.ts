import { http, HttpResponse } from "msw";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const favoritesDeleteHandler = [
  http.put(`${baseUrl}/favorites/:favorite_id`, async ({ request }) => {

    // 정상 처리
    return HttpResponse.json(
      { message: `관심기업 ${1}이(가) 수정되었습니다.` },
      { status: 200 }
    );
  }),
];
