export type User = {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
};

// 웹 서비스 응답 타입
export type ApiResponse<T> = {
    status: number;
    data: T;
};

// 사용자 목록 응답 타입
export type UsersResponse = ApiResponse<User[]>;

// 장바구니에 담긴 상품 정보 타입
export type CartItem = {
    productId: number;
    name: string;
    price: number;
    quantity: number;
};

// API 요청 결과 타입
export type ApiResult = {
    success: boolean;
    message: string;
};
