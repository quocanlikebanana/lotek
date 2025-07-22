'use client';

import { useState } from 'react'
import { Input } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Lock } from 'lucide-react';

export default function PasswordInput({
	label,
	placeholder,
	password,
	onPasswordChange,
}: {
	label?: string;
	placeholder?: string;
	password: string;
	onPasswordChange: (value: string) => void;
}) {
	const [showPassword, setShowPassword] = useState(false);
	const common = useTranslations("auth.common");
	const passwordLabel = common(label || "passwordLabel");
	const passwordPlaceholder = common(placeholder || "passwordPlaceholder");

	return (
		<div className="space-y-2">
			<label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center gap-2">
				<Lock className="w-4 h-4 text-gray-500" />
				{passwordLabel}
			</label>

			<div className="relative">
				<Input
					id="password"
					name="password"
					type={showPassword ? "text" : "password"}
					value={password}
					onChange={(e) => onPasswordChange(e.target.value)}
					placeholder={passwordPlaceholder}
					className="h-11 border-gray-200 focus:border-orange-400 focus:ring-orange-400/20 bg-white pr-10"
					required
				/>
				<button
					type="button"
					onClick={() => setShowPassword(!showPassword)}
					className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
				>
					{showPassword ? (
						<EyeOff className="w-4 h-4" />
					) : (
						<Eye className="w-4 h-4" />
					)}
				</button>
			</div>
		</div>
	);
}
