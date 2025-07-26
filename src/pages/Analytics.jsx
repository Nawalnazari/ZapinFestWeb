import React from "react";
import Sidebar from "../partials/Sidebar";
import { NavLink } from "react-router-dom";
import NameCard from "../components/NameCard";
import DashboardList from "../components/DasboardList";

const workers = [
	{
		name: "Alice Johnson",
		age: 28,
		email: "alice.johnson@example.com",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
		position: "Software Engineer",
		status: "Active",
		department: "Engineering",
	},
	{
		name: "Bob Smith",
		age: 34,
		email: "bob.smith@example.com",
		image: "https://randomuser.me/api/portraits/men/46.jpg",
		position: "Product Manager",
		status: "Inactive",
		department: "Product",
	},
	{
		name: "Carol Lee",
		age: 30,
		email: "carol.lee@example.com",
		image: "https://randomuser.me/api/portraits/women/68.jpg",
		position: "UX Designer",
		status: "Active",
		department: "Design",
	},
	{
		name: "David Kim",
		age: 41,
		email: "david.kim@example.com",
		image: "https://randomuser.me/api/portraits/men/65.jpg",
		position: "QA Engineer",
		status: "Active",
		department: "Quality Assurance",
	},
];

export default function Analytics() {
	const [sidebarOpen, setSidebarOpen] = React.useState(false);

	return (
		<div className="flex min-h-screen bg-gray-50">
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			<main className="flex-1 p-6">
				<div className="max-w-md mx-auto mt-2 space-y-6">
					{workers.map((worker, idx) => (
						<NavLink
							key={idx}
							to={`/worker/${encodeURIComponent(worker.name)}`}
							className="block"
						>
							<NameCard worker={worker} />
						</NavLink>
					))}
				</div>
				{/* Dashboard Table */}
				<div className="w-full mt-10">
					<DashboardList workers={workers} />
				</div>
			</main>
		</div>
	);
}
