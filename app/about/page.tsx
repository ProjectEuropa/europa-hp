import Link from 'next/link';
import CyberCard from '@/components/ui/CyberCard';
import SectionTitle from '@/components/ui/SectionTitle';

export const metadata = {
    title: 'About - Project Europa',
    description: 'Team Project Europaの理念、ビジョン、チームメンバーについて。',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">

            {/* About Database (Page Title) */}
            <section className="mb-12">
                <CyberCard title="About Database">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative inline-block mb-4 md:mb-8 px-6 md:px-0">
                            <span className="hidden md:block absolute top-0 -left-8 text-cyber-blue font-mono text-4xl animate-blink">&gt;</span>
                            <h1 className="text-lg sm:text-xl md:text-4xl font-bold text-cyber-blue tracking-wider font-mono md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-4 md:border-cyber-blue md:pr-1">
                                About Team Project Europa
                            </h1>
                        </div>
                        <p className="text-sm md:text-base text-cyber-light opacity-80 mb-6 font-mono border-b border-cyber-blue/30 pb-2 inline-block">
                            Team Project Europaについて
                        </p>
                        <p className="leading-relaxed text-foreground/90 max-w-3xl mx-auto">
                            私たちの理念、ビジョン、そしてチームメンバーについての紹介です。技術と創造性を融合させ、革新的なデジタルソリューションを提供しています。
                        </p>
                    </div>
                </CyberCard>
            </section>

            {/* Introduction */}
            <section className="mb-12">
                <CyberCard title="Mission Statement">
                    <SectionTitle title="Our Vision & Mission" subtitle="ビジョンとミッション" />

                    <div className="text-foreground/90 space-y-6 leading-relaxed">
                        <p>
                            Team Project Europaは、技術の力で人々の生活と仕事を向上させることを目指すテクノロジー集団です。私たちの名前「Europa」は、木星の衛星であり、生命が存在する可能性を秘めた場所からインスピレーションを得ています。未知の可能性を探求し、革新的なソリューションを生み出すという私たちの姿勢を象徴しています。
                        </p>
                        <p>
                            クラウドインフラからWebアプリケーション開発、AIソリューションまで、幅広い技術スタックを駆使して、クライアントのビジネス課題を解決します。私たちは単なる技術提供者ではなく、クライアントのビジネスパートナーとして、長期的な成功に貢献することを目指しています。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {/* Mission Point 1 */}
                        <div className="bg-cyber-blue/5 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue transition-colors duration-300 flex flex-col items-center text-center">
                            <div className="w-12 h-12 text-cyber-blue mb-4">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-cyber-blue mb-2">革新</h3>
                            <p className="text-sm opacity-80">最新技術を活用し、常に革新的なソリューションを追求します</p>
                        </div>

                        {/* Mission Point 2 */}
                        <div className="bg-cyber-blue/5 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue transition-colors duration-300 flex flex-col items-center text-center">
                            <div className="w-12 h-12 text-cyber-blue mb-4">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-cyber-blue mb-2">協働</h3>
                            <p className="text-sm opacity-80">クライアントとの緊密な連携を通じて、真のニーズに応えるソリューションを提供します</p>
                        </div>

                        {/* Mission Point 3 */}
                        <div className="bg-cyber-blue/5 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue transition-colors duration-300 flex flex-col items-center text-center">
                            <div className="w-12 h-12 text-cyber-blue mb-4">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13,3L16,6H13V10H11V6H8L11,3H13M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91M12,10.85L17.96,7.5L12,4.15L6.04,7.5L12,10.85Z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-cyber-blue mb-2">GenAIによる高速開発</h3>
                            <p className="text-sm opacity-80">最新のAI技術を活用し、開発プロセスを加速させながら革新的なソリューションを提供します</p>
                        </div>
                    </div>
                </CyberCard>
            </section>

            {/* Team Members */}
            <section className="mb-12">
                <CyberCard title="Team Members">
                    <SectionTitle title="Our Specialists" subtitle="チームメンバー" />
                    <div className="border border-cyber-blue/30 bg-cyber-blue/5 p-6 rounded hover:border-cyber-blue transition-all duration-300">
                        <h3 className="text-xl font-bold text-cyber-blue mb-1">M2</h3>
                        <p className="text-sm text-cyber-light font-mono mb-4 border-b border-cyber-blue/20 pb-2 inline-block">Lead Developer & Cloud Architect</p>
                        <p className="text-sm mb-4 leading-relaxed">AWSおよびGoogle Cloudの認定資格を保持するクラウドスペシャリスト。複層的なインフラ設計から効率的なアプリケーション開発まで幅広く対応。</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {['AWS', 'Google Cloud', 'DevOps', 'Backend', 'Terraform', 'CDK', 'PHP', 'Laravel', 'Ruby', 'Ruby on Rails'].map(skill => (
                                <span key={skill} className="text-xs px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded font-mono">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </CyberCard>
            </section>

            {/* Our Approach */}
            <section className="mb-12">
                <CyberCard title="Our Approach">
                    <SectionTitle title="What Sets Us Apart" subtitle="私たちの強み" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Strength 1 */}
                        <div className="bg-cyber-blue/5 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue transition-colors duration-300">
                            <div className="w-10 h-10 text-cyber-blue mb-4 mx-auto">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                                </svg>
                            </div>
                            <h3 className="text-base font-bold text-cyber-blue mb-2">技術的卓越性</h3>
                            <p className="text-sm opacity-80">AWS認定資格を全て取得するなど、常に最高レベルの技術力を追求しています。理論だけでなく実践的な知識と経験を重視し、確実な成果を提供します。</p>
                        </div>

                        {/* Strength 2 */}
                        <div className="bg-cyber-blue/5 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue transition-colors duration-300">
                            <div className="w-10 h-10 text-cyber-blue mb-4 mx-auto">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C6.22,11.88 6.22,7.12 9.17,4.17C12.12,1.22 16.88,1.22 19.83,4.17C22.78,7.12 22.78,11.88 19.83,14.83C19.44,15.22 18.8,15.22 18.41,14.83C18,14.44 18,13.8 18.41,13.41C20.59,11.23 20.59,7.77 18.41,5.59C16.23,3.41 12.77,3.41 10.59,5.59C8.41,7.77 8.41,11.23 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C17.78,12.12 17.78,16.88 14.83,19.83C11.88,22.78 7.12,22.78 4.17,19.83C1.22,16.88 1.22,12.12 4.17,9.17C4.56,8.78 5.2,8.78 5.59,9.17C6,9.56 6,10.2 5.59,10.59C3.41,12.77 3.41,16.23 5.59,18.41C7.77,20.59 11.23,20.59 13.41,18.41C15.59,16.23 15.59,12.77 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
                                </svg>
                            </div>
                            <h3 className="text-base font-bold text-cyber-blue mb-2">エンドツーエンドソリューション</h3>
                            <p className="text-sm opacity-80">インフラ設計からアプリケーション開発、運用保守まで一貫したサービスを提供。複数のベンダーを管理する必要がなく、効率的なプロジェクト進行が可能です。</p>
                        </div>

                        {/* Strength 3 */}
                        <div className="bg-cyber-blue/5 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue transition-colors duration-300">
                            <div className="w-10 h-10 text-cyber-blue mb-4 mx-auto">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16,4H20V8H18V6H16V4M4,4H8V6H6V8H4V4M20,16V20H16V18H18V16H20M6,18V16H4V20H8V18H6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
                                </svg>
                            </div>
                            <h3 className="text-base font-bold text-cyber-blue mb-2">スケーラブルな設計</h3>
                            <p className="text-sm opacity-80">将来の拡張性を考慮した設計を心がけています。ビジネスの成長に合わせて柔軟にスケールできるソリューションを提供します。</p>
                        </div>
                    </div>
                </CyberCard>
            </section>

            {/* Training & Education */}
            <section className="mb-12">
                <CyberCard title="Training & Education">
                    <SectionTitle title="Training & Education" subtitle="研修・教育" />
                    <div className="space-y-6">
                        <div className="border border-cyber-blue/30 p-5 rounded bg-cyber-blue/5">
                            <div className="text-center mb-2">
                                <h3 className="text-lg font-bold text-cyber-blue">大手企業向け新卒エンジニア研修講師</h3>
                                <span className="text-xs font-mono text-cyber-light bg-cyber-blue/10 px-2 py-1 rounded mt-1 inline-block">2024-現在</span>
                            </div>
                            <p className="text-sm mb-3 text-foreground/80">大手重工業系企業、大手通信企業、大手データ分析企業、大手飲料メーカーなど、複数の大手企業にて新卒エンジニア向けの技術研修を担当。</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {['AWS', '生成AI'].map(skill => (
                                    <span key={skill} className="text-xs px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded font-mono">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </CyberCard>
            </section>

            {/* Achievements Highlights (Link to Portfolio) */}
            <section className="mb-12">
                <CyberCard title="Achievements">
                    <SectionTitle title="Our Key Projects" subtitle="主要プロジェクト" />
                    <div className="space-y-6">

                        <div className="border border-cyber-blue/30 p-5 rounded bg-cyber-blue/5">
                            <div className="text-center mb-2">
                                <h3 className="text-lg font-bold text-cyber-blue">消費者向け生活支援サービスプラットフォームの開発・運用</h3>
                                <span className="text-xs font-mono text-cyber-light bg-cyber-blue/10 px-2 py-1 rounded mt-1 inline-block">2025-現在</span>
                            </div>
                            <p className="text-sm mb-3 text-foreground/80">Google Cloudを基盤とした消費者向け生活支援サービスの新規開発および基幹システムの運用保守。CI/CDパイプラインの構築、TerraformによるIaC、生成AIを活用したPR自動レビュー機能、セキュリティ対策などを実施。</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {['Cloud Run', 'Compute Engine', 'Terraform', 'GitHub Actions', 'Laravel 12.x', 'PHP'].map(skill => (
                                    <span key={skill} className="text-xs px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded font-mono">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="border border-cyber-blue/30 p-5 rounded bg-cyber-blue/5">
                            <div className="text-center mb-2">
                                <h3 className="text-lg font-bold text-cyber-blue">高性能ビッグデータ検索エンジンの開発</h3>
                                <span className="text-xs font-mono text-cyber-light bg-cyber-blue/10 px-2 py-1 rounded mt-1 inline-block">2024-2025</span>
                            </div>
                            <p className="text-sm mb-3 text-foreground/80">AWS CDKとAurora MySQLを活用し、数十万件のデータベースレコードを1〜2秒で検索できる高速システムを実現。複数のデータソースを統合し、インデックス最適化とキャッシュ戦略を駆使して応答時間を劇的に改善。</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {['AWS ECS', 'Aurora MySQL', 'AWS CDK', 'Laravel 11.x', 'Next.js 13.x', 'Redis'].map(skill => (
                                    <span key={skill} className="text-xs px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded font-mono">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <Link href="/portfolio" className="inline-block px-8 py-3 bg-cyber-blue/10 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_0_10px_rgba(38,218,253,0.3)] hover:shadow-[0_0_20px_rgba(38,218,253,0.6)]">
                                View Full Portfolio
                            </Link>
                        </div>

                    </div>
                </CyberCard>
            </section>
        </div>
    );
}
