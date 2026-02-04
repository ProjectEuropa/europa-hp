export default function TechTag({ children }: { children: string }) {
	return (
		<span className="text-xs px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded font-mono">
			{children}
		</span>
	);
}
