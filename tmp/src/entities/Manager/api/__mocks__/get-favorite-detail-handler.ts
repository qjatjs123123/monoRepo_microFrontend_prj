import { http, HttpResponse } from "msw";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const favoriteDetailHandler = [
  http.get(`${baseUrl}/favorites/:favorite_id`, ({ request }) => {
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    
    const TARGET_EMAIL = 'error@example.com'; 

    if (email === TARGET_EMAIL) {
      console.log(`[MSW] Error triggered for email: ${email}`);
      return HttpResponse.json(
        { message: '특정 이메일 사용자에게는 접근이 금지됩니다.' },
        { status: 400 }
      );
    }
    
    console.log(`[MSW] Success for email: ${email}`);
    return HttpResponse.json(
      {
        id: 1,
        email: email,
        company_name: "삼성",
        memo: "메모1",
        created_at: "2025-11-12T07:57:31.623756",
      },
      { status: 200 }
    );
  }),
];