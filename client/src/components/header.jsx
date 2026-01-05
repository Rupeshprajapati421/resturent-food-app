
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className="bg-white border-b sticky top-0 z-50">
			<div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
				<Link to="/" className="text-xl font-bold text-gray-900">
					FoodApp
				</Link>

				<nav className="hidden md:flex space-x-6 items-center" aria-label="Main navigation">
					<Link to="/" className="text-gray-600 hover:text-gray-900">
						Home
					</Link>
					<Link to="/foods" className="text-gray-600 hover:text-gray-900">
						Foods
					</Link>
					<Link to="/orders" className="text-gray-600 hover:text-gray-900">
						Orders
					</Link>
				</nav>

				<div className="flex items-center space-x-3">
					<Link to="/login" className="px-3 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
						Login
					</Link>
					<Link to="/register" className="px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">
						Sign up
					</Link>

					<button className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100" aria-label="Open menu">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</header>
	)
}
