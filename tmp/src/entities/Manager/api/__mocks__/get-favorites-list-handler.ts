import { http, HttpResponse } from "msw";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const favoritesHandler = [
  http.get(`${baseUrl}/favorites`, ({ request }) => {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");
    const page = Number(url.searchParams.get("page") || "1");
    const pageSize = 11;

    // 이메일 없으면 400
    // return HttpResponse.json({}, { status: 400 });
    const allItems = [
      { id: 1, company_name: "삼성", created_at: "2025-11-12T07:57:31.623756" },
      { id: 2, company_name: "현대", created_at: "2025-11-12T08:10:21.123456" },
      { id: 3, company_name: "LG", created_at: "2025-11-12T09:05:12.654321" },
      {
        id: 4,
        company_name: "카카오",
        created_at: "2025-11-12T10:20:45.987654",
      },
      {
        id: 5,
        company_name: "네이버",
        created_at: "2025-11-12T11:15:30.111222",
      },
      { id: 6, company_name: "SK", created_at: "2025-11-12T12:00:00.333444" },
      {
        id: 7,
        company_name: "포스코",
        created_at: "2025-11-12T12:45:10.555666",
      },
      { id: 8, company_name: "KT", created_at: "2025-11-12T13:30:20.777888" },
      {
        id: 9,
        company_name: "LG화학",
        created_at: "2025-11-12T14:15:30.999000",
      },
      {
        id: 10,
        company_name: "한화",
        created_at: "2025-11-12T15:00:40.121314",
      },
      { id: 11, company_name: "CJ", created_at: "2025-11-12T15:45:50.151617" },
    ];

    const total = allItems.length;
    const totalPages = Math.ceil(total / pageSize);
    const items = allItems.slice((page - 1) * pageSize, page * pageSize);

    return HttpResponse.json({
      total,
      page,
      page_size: pageSize,
      total_pages: totalPages,
      items,
    });
  }),
];
