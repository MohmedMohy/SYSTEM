export function successResponse(data: unknown) {
    return {
        success: true,
        data,
    };
}

export function errorResponse(
    type: string,
    message: string,
    issues?: unknown
) {
    return {
        success: false,

        error: {
            type,
            message,
            issues,
        },
    };
}