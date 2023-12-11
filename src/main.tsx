import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayoutMain from './components/Layouts/LayoutMain';
import { CartProvider } from './context/CartProvider';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Login } from './pages/Login/Login';
import { Dashboard } from './pages/Dashboard/Dashboard';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutMain />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/checkout', element: <Checkout /> },
		],
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/dashboard',
		element: <Dashboard />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
