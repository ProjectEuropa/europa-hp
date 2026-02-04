import Link from "next/link";
import CyberCard from "@/components/ui/CyberCard";

export const metadata = {
	title: "Message Sent - Project Europa",
	description: "Team Project Europaへのお問い合わせが送信されました。",
};

export default function ContactSuccessPage() {
	return (
		<div className="container mx-auto px-4 py-8 min-h-[60vh] flex items-center justify-center">
			<div className="w-full max-w-2xl">
				<CyberCard title="Message Sent">
					<div className="text-center py-8">
						<h1 className="text-2xl font-mono text-cyber-blue mb-6">
							TRANSMISSION COMPLETE
						</h1>

						<div className="text-foreground/90 space-y-4 mb-8">
							<p>メッセージの送信が完了しました。</p>
							<p>
								お問い合わせいただきありがとうございます。内容を確認の上、折り返しご連絡いたします。
							</p>
						</div>

						<div className="flex justify-center mb-10">
							<div className="w-24 h-24 bg-cyber-blue/10 rounded-full flex items-center justify-center border border-cyber-blue/30 animate-pulse-glow">
								<svg
									viewBox="0 0 24 24"
									className="w-12 h-12 text-cyber-blue"
									fill="currentColor"
								>
									<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
								</svg>
							</div>
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
