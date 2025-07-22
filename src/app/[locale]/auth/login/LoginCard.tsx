'use client'

import PasswordInput from '@/components/components/PasswordInput'
import GoogleIcon from '@/components/icons/GoogleIcon'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import React from 'react'

// Login form schema
const loginSchema = z.object({
	email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
	password: z.string().min(1, 'Password is required'),
	rememberMe: z.boolean(),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginCard() {
	const t = useTranslations("auth.login");

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
			rememberMe: false,
		},
	})

	const onSubmit = (data: LoginFormValues) => {
		// Handle login logic here
		console.log('Login data:', data)
	}

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
											{...field}
											type="email"
											placeholder={t("emailPlaceholder")}
											className="h-11 border-gray-200 focus:border-orange-400 focus:ring-orange-400/20 bg-white"
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
											password={field.value}
											onPasswordChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Remember Me & Forgot Password */}
						<div className="flex items-center justify-between">
							<FormField
								control={form.control}
								name="rememberMe"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center space-x-2 space-y-0">
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
												id="rememberMe"
												className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
											/>
										</FormControl>
										<FormLabel htmlFor="rememberMe" className="text-sm text-gray-600 cursor-pointer">
											{t("rememberMe")}
										</FormLabel>
									</FormItem>
								)}
							/>
							<Link
								href="/auth/forgot-password"
								className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
							>
								{t("forgotPassword")}
							</Link>
						</div>

						{/* Sign In Button */}
						<Button
							type="submit"
							className="w-full h-11 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
						>
							{t("signInButton")}
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

						{/* Social Login Buttons */}
						<Button
							type="button"
							variant="outline"
							className="w-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
						>
							<GoogleIcon className="w-5 h-5 mr-2" />
							Google
						</Button>

						{/* Sign Up Link */}
						<div className="text-center pt-4">
							<p className="text-sm text-gray-600">
								{t("noAccount")}{" "}
								<Link
									href="/auth/register"
									className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
								>
									{t("signUp")}
								</Link>
							</p>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
