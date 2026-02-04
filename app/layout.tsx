import type { Metadata } from "next";
import {
	Electrolize,
	Rajdhani,
	Share_Tech_Mono,
	Titillium_Web,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";

const titillium = Titillium_Web({
	weight: ["200", "300", "400", "600", "700", "900"],
	subsets: ["latin"],
	variable: "--font-titillium",
	display: "swap",
});

const rajdhani = Rajdhani({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-rajdhani",
	display: "swap",
});

const electrolize = Electrolize({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-electrolize",
	display: "swap",
});

const shareTechMono = Share_Tech_Mono({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-share-tech-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Project Europa // Cybernetic Interface",
	description:
		"Team Project Europaは、スケーラブルなクラウドインフラストラクチャの構築と新卒エンジニア向け技術研修を提供するプロフェッショナルチームです。AWS・Google Cloud認定資格を全て保有。",
	metadataBase: new URL("https://hp.project-europa.work"),
	icons: {
		icon: "/icon.svg",
	},
	openGraph: {
		title: "Project Europa // Cybernetic Interface",
		description:
			"Team Project Europaはスケーラブルなクラウドインフラストラクチャソリューションの構築と、新卒エンジニア向け技術研修を提供しています。",
		url: "https://hp.project-europa.work",
		siteName: "Project Europa",
		images: [
			{
				url: "/images/ogp.png",
				width: 1024,
				height: 1024,
				alt: "Project Europa - Exploration Mission Interface",
			},
		],
		locale: "ja_JP",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Project Europa // Cybernetic Interface",
		description:
			"Team Project Europaの公式サイト。最新テクノロジーと創造性を融合。",
		images: ["/images/ogp.png"],
		site: "@projecteuropa",
		creator: "@projecteuropa",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={`${titillium.variable} ${rajdhani.variable} ${electrolize.variable} ${shareTechMono.variable} antialiased flex flex-col min-h-screen`}
			>
				<div className="fixed top-0 left-0 w-full h-full bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c4ZZKCAAAAQHRSTlMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM4QemUgAAAPESURBVEjH7ZbblsMgCEYNKGpM0xjTNH3/92xtjqYCgbU32U3DX2fGjO4RwQP2h2ynDMs86DdvMw+NwCYgAqsHqEeo3s6BBxgDuTxA/QI5PAY+QYDDAbT7cQx8gACGAWj34RD4BPFWBtD0+0PgEORrDaBp90PgEJQrGUDz98fAHii2MoCm3Y+BLVCPAJp2PwS2QDsCqPv9GNgAxQig7vdjYB+UIkCz3w+BDZA1Al7SjYEtENtGwIu/MWBA5m0EFIc2BgyIR8CLvzFgQHgaAZXFGHh7FUgjoFL3GHh/Fagg4Fpq8pYDwSqQ+gKWxeXwGEjnAMgWlPo+BrIpQA+CXL/HQDIDZBBsUzHwMbmMYZBbK0VWb0Eg3YBB8GOxQsYLCGbA/QgEEmVhZ8BwRmxAqnwBevU7CZQJHh0gg+DDYoWMBVDBRFhA9VP/NbC4PhLQsm7/PHAkMKpA8YEO8KF8C4GcXnm/HdEvDkSaoeMPIWGfDTQMgSCIAYkEGlbbJAPmXwdGBAohYR8MHHAPkBFAEMSA7UsGvKGvG5AmjEYmxIAVAgYiLCOA2ZYM+kIgTRgPTYhNMt8VgZkIA9aTcP9G4K4MdRjwjr5sQEbgFYEXBOoQPMdA9AIYBY8xkOUBUPAQA8EVAKkMvMdA+bgnz+mRgfvvJr1yxiQD+3KO4cT3FQPmk4F3CKDDgl8RKP8xIG4CUBegwj9rQHMHZAxBXYCi4VcNqKICGQNQF6Dgnw1oZkCmSqj79TcNBPcABK4B5n8YCAIIKFwDCP5nQOQGBJvAegA/++8GWhjo3QOcPqDBFQMiAehK+HUzptuBZJ6B7h4/1jrQI6Abgf6eP8M6cEIgHwHhvXinH2XCdR6FwCEDx3eK+a64O6yAyxpYLEDhbp6jl7PLA0gpQKEAGbZfDQwOgDEFGCpAhr+TKMGUZXoUgA+A4J0C5Nj/emDV/gDIF0AHQPzjgWHfH/0N0LD/0UBdb7//EGjZ/8dHKbfff3SitQVYZgtF3kPgkwF/NLDzqYAHBnxeA5UMFLKpEFwQcH4KcOZ3MpB5D4E3xN+xLwRaMHKgIOQDob/EpzliLQPXTGRAxouBDEAyEJ4D2JYMnO9CfRkDJbQfITy8W3CFT2XgmokMCOMQDw9KZeB8E6mJ2TbJhrZFJjKgeBGkg1MVMHCjEnouRpuAFmjBNnJgQDifBWnbjbZWQJvUQNtCTeSAbWHQYMzPPGDgRgayBadTDfw+EOix/zgHUGSw/rk5kKmA5X9DBmoQMH81BbwluMpA8oaO0zxg4H9/MPsL4p/4n/q/A4YnWEAqUHxiAAAAAElFTkSuQmCC')] opacity-[0.08] z-[1] pointer-events-none" />
				<div className="fixed top-0 left-0 w-full h-[6px] bg-gradient-to-b from-cyber-blue/20 via-cyber-blue/10 to-transparent opacity-20 z-[999] animate-scanline pointer-events-none" />

				<StarField />

				<div className="relative z-10 flex flex-col flex-grow">
					<Navbar />
					<main className="flex-grow pt-48 md:pt-64 pb-12">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
