import Link from 'next/link';
import CyberCard from '@/components/ui/CyberCard';
import Planet from '@/components/ui/Planet';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="mb-12 relative overflow-hidden">
        <Planet />
        <CyberCard title="System Message" className="relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative inline-block mb-4 md:mb-8 px-6 md:px-0">
              <span className="hidden md:block absolute top-0 -left-8 text-cyber-blue font-mono text-4xl animate-blink">&gt;</span>
              <h1 className="text-lg sm:text-xl md:text-4xl font-bold text-cyber-blue tracking-wider font-mono md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-4 md:border-cyber-blue md:pr-1">
                Architecting Scalable Cloud & Technical Training Solutions
              </h1>
            </div>
            <p className="text-sm md:text-base text-cyber-light opacity-80 mb-6 font-mono border-b border-cyber-blue/30 pb-2 inline-block">
              スケーラブルなクラウドソリューション
            </p>
            <p className="leading-relaxed text-foreground/90 max-w-3xl mx-auto mb-6">
              Team Project Europaは、スケーラブルなクラウドインフラストラクチャの構築と、新卒エンジニア向け技術研修を提供するプロフェッショナルチームです。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/contact" className="inline-block px-6 sm:px-8 py-3 bg-cyber-blue/10 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-[0_0_10px_rgba(38,218,253,0.3)] hover:shadow-[0_0_20px_rgba(38,218,253,0.6)]">
                Contact Us
              </Link>
              <Link href="/portfolio" className="inline-block px-6 sm:px-8 py-3 bg-transparent border border-gray-600 text-foreground hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm">
                View Portfolio
              </Link>
            </div>
          </div>
        </CyberCard>
      </section>


      {/* Achievements Section */}
      <section className="py-10">
        <div className="w-full">
          <CyberCard title="Proven Track Record">
            <SectionTitle title="Key Achievements" subtitle="主な実績" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              {/* Project 1 */}
              <div className="border border-cyber-blue/30 p-5 hover:border-cyber-blue transition-colors duration-300 bg-cyber-black/40">
                <h3 className="text-cyber-blue font-bold mb-2">コンシューマー向けライフスタイルプラットフォーム</h3>
                <p className="text-sm mb-3">Google Cloud & Laravelを基盤とした大規模ユーザー向けプラットフォーム開発。高いスケーラビリティを実現するためCI/CD、IaCなどモダンなDevOpsを導入。</p>
                <div className="flex flex-wrap gap-2 justify-center border-t border-cyber-blue/20 pt-3">
                  {['Cloud Run', 'Terraform', 'GitHub Actions', 'Laravel 12.x'].map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded font-mono">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Project 2 */}
              <div className="border border-cyber-blue/30 p-5 hover:border-cyber-blue transition-colors duration-300 bg-cyber-black/40">
                <h3 className="text-cyber-blue font-bold mb-2">大規模データ検索エンジン</h3>
                <p className="text-sm mb-3">AWS ECS & Auroraを活用し、数百万件のレコードをサブ秒レイテンシで処理する高性能なエンタープライズ向け検索システムを開発。</p>
                <div className="flex flex-wrap gap-2 justify-center border-t border-cyber-blue/20 pt-3">
                  {['AWS ECS', 'Aurora', 'AWS CDK', 'Next.js'].map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded font-mono">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Project 3 */}
              <div className="border border-cyber-blue/30 p-5 hover:border-cyber-blue transition-colors duration-300 bg-cyber-black/40">
                <h3 className="text-cyber-blue font-bold mb-2">新卒技術研修講師</h3>
                <p className="text-sm mb-3">新卒エンジニア向けの技術研修講師として、クラウドアーキテクチャ、バックエンド開発、DevOpsのベストプラクティスを指導。</p>
                <div className="flex flex-wrap gap-2 justify-center border-t border-cyber-blue/20 pt-3">
                  {['Technical Leadership', 'Mentoring', 'Curriculum Design'].map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded font-mono">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Banner */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-6 border-t border-cyber-blue/20 pt-6">
              <div className="flex items-center justify-center gap-3 p-3 bg-cyber-black/40 border border-cyber-blue/20 rounded hover:scale-105 transition-transform duration-300">
                <div className="text-cyber-blue w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8C4 8 6 6 12 6C18 6 20 8 20 8" />
                    <path d="M5 12C5 12 7 10 12 10C17 10 19 12 19 12" />
                    <path d="M12 14L12 18M12 18L9 15M12 18L15 15" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-cyber-blue text-sm">AWS All Certifications</h4>
                  <p className="text-xs">12/12 Fully Certified</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-3 bg-cyber-black/40 border border-cyber-blue/20 rounded hover:scale-105 transition-transform duration-300">
                <div className="text-cyber-blue w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-cyber-blue text-sm">Google Cloud Certified</h4>
                  <p className="text-xs">6/14 Certifications</p>
                </div>
              </div>
            </div>

          </CyberCard>
        </div>
      </section>

      {/* Skills Section */}
      <section className="pb-10">
        <div className="w-full">
          <CyberCard title="Skills Database">
            <SectionTitle title="Our Skills" subtitle="提供サービス" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-foreground">

              {/* Skill 1 */}
              <div className="group p-5 transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyber-blue/30 group-hover:border-cyber-blue group-hover:shadow-[0_0_15px_rgba(38,218,253,0.5)]">
                  <svg className="w-8 h-8 text-cyber-blue group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18Z" />
                  </svg>
                </div>
                <h3 className="font-mono text-xl text-cyber-blue mb-2">Cloud Infrastructure</h3>
                <p className="text-sm mb-1 opacity-90">We build and manage scalable cloud infrastructure solutions.</p>
                <p className="text-xs opacity-70">スケーラブルなクラウドインフラストラクチャソリューションの構築と管理を行っています。</p>
              </div>

              {/* Skill 2 */}
              <div className="group p-5 transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyber-blue/30 group-hover:border-cyber-blue group-hover:shadow-[0_0_15px_rgba(38,218,253,0.5)]">
                  <svg className="w-8 h-8 text-cyber-blue group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                  </svg>
                </div>
                <h3 className="font-mono text-xl text-cyber-blue mb-2">Technical Training</h3>
                <p className="text-sm mb-1 opacity-90">We provide technical training for new graduates.</p>
                <p className="text-xs opacity-70">新卒エンジニア向けの技術研修を提供します。</p>
              </div>

              {/* Skill 3 */}
              <div className="group p-5 transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyber-blue/30 group-hover:border-cyber-blue group-hover:shadow-[0_0_15px_rgba(38,218,253,0.5)]">
                  <svg className="w-8 h-8 text-cyber-blue group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6,3L3,6V21H18V18H21L24,15V3M14,15H6V17H14M14,11H6V13H14M14,7H6V9H14M18,17H16V15H18M18,13H16V11H18M18,9H16V7H18M18,5H16V3H18Z" />
                  </svg>
                </div>
                <h3 className="font-mono text-xl text-cyber-blue mb-2">Web Application</h3>
                <p className="text-sm mb-1 opacity-90">We will accept requests for web applications.</p>
                <p className="text-xs opacity-70">Webアプリケーション制作を受託します。</p>
              </div>

            </div>
          </CyberCard>
        </div>
      </section>

    </div>
  );
}
