'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import GoogleIcon from "@/components/icons/GoogleIcon";
import PasswordInput from "@/components/components/PasswordInput";

// Form validation schema
const registerSchema = (t: (key: string) => string) => z.object({
	name: z
		.string()
		.min(1, t("nameRequired"))
		.min(2, t("nameMinLength"))
		.max(50, t("nameMaxLength")),
	email: z
		.email(t("emailFormatError")),
	password: z
		.string()
		.min(1, t("passwordRequired"))
		.min(8, t("passwordMinLength"))
		.max(50, t("passwordMaxLength"))
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			t("passwordFormatError")
		),
	confirmPassword: z
		.string()
		.min(1, t("confirmPasswordRequired")),
	agreeTerms: z
		.boolean()
		.refine((val) => val === true, {
			message: t("agreeTermsRequired"),
		}),
}).refine((data) => data.password === data.confirmPassword, {
	message: t("confirmPasswordMismatch"),
	path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<ReturnType<typeof registerSchema>>;

export default function RegisterCard() {
	const t = useTranslations("auth.register");
	const tError = useTranslations("auth.register.errors");

	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema(tError)),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			agreeTerms: false,
		},
	});

	const onSubmit = (values: RegisterFormValues) => {
		// TODO: Implement register API call
		console.log("Register form submitted:", values);
	};

	return (
		<Card className="backdrop-blur-sm bg-white/90 border-white/50 shadow-2xl">
			<CardHeader className="space-y-1 text-center pb-6">
				<CardTitle className="text-2xl font-bold text-gray-900">
					{t("title")}
				</CardTitle>
				<CardDescription className="text-gray-600">
					{t("subtitle")}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						{/* Name Field */}
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
										<User className="w-4 h-4 text-gray-500" />
										{t("nameLabel")}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t("namePlaceholder")}
											className="h-11 border-gray-200 focus:border-orange-400 focus:ring-orange-400/20 bg-white"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Email Field */}
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
										<Mail className="w-4 h-4 text-gray-500" />
										{t("emailLabel")}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t("emailPlaceholder")}
											className="h-11 border-gray-200 focus:border-orange-400 focus:ring-orange-400/20 bg-white"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Password Field */}
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<PasswordInput
											label={"passwordLabel"}
											placeholder={"passwordPlaceholder"}
											password={field.value}
											onPasswordChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Confirm Password Field */}
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<PasswordInput
											label={"confirmPasswordLabel"}
											placeholder={"confirmPasswordPlaceholder"}
											password={field.value}
											onPasswordChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Agree to Terms */}
						<FormField
							control={form.control}
							name="agreeTerms"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
											className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel className="text-sm text-gray-600 cursor-pointer">
											{t("agreeTerms")}
										</FormLabel>
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>

						{/* Sign Up Button */}
						<Button
							type="submit"
							className="w-full h-11 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
							disabled={!form.watch("agreeTerms")}
						>
							{t("signUpButton")}
						</Button>

						{/* Divider */}
						<div className="relative my-6">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-200"></div>
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="bg-white px-4 text-gray-500">{t("orContinueWith")}</span>
							</div>
						</div>

						{/* Social Register Button (Google only) */}
						<div className="grid grid-cols-1 gap-3">
							<Button
								type="button"
								variant="outline"
								className="h-11 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
							>
								<GoogleIcon className="w-5 h-5 mr-2" />
								Google
							</Button>
						</div>

						{/* Sign In Link */}
						<div className="text-center pt-4">
							<p className="text-sm text-gray-600">
								{t("alreadyHaveAccount")}{" "}
								<Link
									href="/auth/login"
									className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
								>
									{t("signIn")}
								</Link>
							</p>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
