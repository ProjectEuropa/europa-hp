import Link from "next/link";
import CyberCard from "@/components/ui/CyberCard";

export const metadata = {
	title: "404 Not Found - Project Europa",
	description: "Page not found.",
};

export default function NotFound() {
	return (
		<div className="container mx-auto px-4 py-8 min-h-[60vh] flex items-center justify-center">
			<div className="w-full max-w-2xl">
				<CyberCard title="ERROR 404">
					<div className="text-center py-8">
						<h1
							className="text-6xl font-mono font-bold text-cyber-blue mb-4 tracking-widest glitch-text"
							data-text="404"
						>
							404
						</h1>
						<h2 className="text-xl font-mono text-red-500 mb-6 tracking-widest">
							LOCATION NOT FOUND
						</h2>

						<div className="text-foreground/80 space-y-4 mb-8 max-w-lg mx-auto">
							<p>
								The requested coordinates do not match any known location in our
								system.
							</p>
							<p>
								The page you are looking for might have been removed, had its
								name changed, or is temporarily unavailable.
							</p>
						</div>

						<Link
							href="/"
							className="inline-block px-8 py-3 bg-cyber-blue/10 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(38,218,253,0.3)] hover:shadow-[0_0_20px_rgba(38,218,253,0.6)] text-sm"
						>
							<span className="mr-2">&gt;</span> RETURN TO HOME BASE
						</Link>
					</div>
				</CyberCard>
			</div>
		</div>
	);
}
