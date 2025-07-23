export type ErrorResponse = {
	statusCode: number;
	title?: string;
	message: string;
	details?: Record<string, any>;
};
