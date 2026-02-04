import CyberCard from "@/components/ui/CyberCard";
import SectionTitle from "@/components/ui/SectionTitle";
import TechTag from "@/components/ui/TechTag";

export const metadata = {
  title: "Portfolio - Project Europa",
  description:
    "Team Project Europaのプロジェクト実績。クラウドインフラ構築、Webアプリケーション開発、CI/CD導入など。",
};

type ProjectItem = {
  title: string;
  desc: string;
  descJp: string;
  tech: string[];
};

type AchievementItem = {
  title: string;
  desc: string;
  tech: string[];
  iconPath: string;
};

const recentProjects: ProjectItem[] = [
  {
    title: "Consumer Lifestyle Support Platform Development",
    desc: "Full-stack development of a new consumer lifestyle support platform on Google Cloud, implementing modern CI/CD pipelines and Infrastructure as Code (IaC) practices.",
    descJp:
      "消費者向け生活支援サービスプラットフォームの新規開発。Google Cloudを基盤にCI/CDパイプラインとInfrastructure as Code（IaC）を実装し、スケーラブルなサービス基盤を構築。",
    tech: [
      "Cloud Run",
      "Terraform",
      "GitHub Actions",
      "Laravel 12.x",
      "PHP 8.4",
    ],
  },
  {
    title: "Consumer Lifestyle Service Infrastructure Operations",
    desc: "Infrastructure operations and DevOps for a consumer lifestyle support service. Implemented deployment automation, IaC, AI-powered PR reviews, and security hardening.",
    descJp:
      "消費者向け生活支援サービス基幹システムの運用保守。GitHub Actionsによるデプロイ自動化、TerraformによるIaC、生成AIを活用したPR自動レビュー機能、マルウェア対策などのセキュリティ施策を実施。",
    tech: [
      "Compute Engine",
      "Cloud Run",
      "Terraform",
      "GitHub Actions",
      "Laravel 8.x",
      "PHP 8.0",
    ],
  },
  {
    title: "Enterprise Big Data Search System",
    desc: "Development of a high-performance search system for enterprise big data, providing real-time insights and analytics across multiple data sources.",
    descJp:
      "企業の大規模データに対する高性能検索システムの開発。複数のデータソースからリアルタイムの洞察と分析を提供し、クエリパフォーマンスを最適化。",
    tech: [
      "AWS ECS",
      "Aurora MySQL",
      "AWS CDK",
      "Docker",
      "Laravel 11.x",
      "Next.js 13.x",
    ],
  },
  {
    title: "Google Maps Business Listings & Reviews Management Platform",
    desc: "Development of a centralized management platform to update information and respond to reviews across thousands of business locations on Google Maps.",
    descJp:
      "複数の大企業の数千店舗のGoogleMAP情報や口コミを一括管理するプラットフォームを開発。店舗管理時間を90%以上削減し、業務効率を大幅に向上。",
    tech: [
      "AWS EC2",
      "Aurora MySQL",
      "Datadog",
      "Docker",
      "PHP 7.2",
      "Laravel 5.5",
    ],
  },
  {
    title: "Real Estate Matching Platform Infrastructure Optimization",
    desc: "Optimization of infrastructure for a high-traffic real estate matching platform, migrating from EC2 to ECS with auto-scaling capabilities.",
    descJp:
      "高トラフィックの不動産マッチングプラットフォームのインフラ最適化。EC2からECSへの移行とオートスケーリングの導入により、トラフィックスパイクに対応。",
    tech: [
      "AWS ECS",
      "EC2",
      "Aurora PostgreSQL",
      "Terraform",
      "Ansible",
      "Docker",
      "Ruby 3.2",
      "Ruby on Rails 7.1",
    ],
  },
];

const technicalAchievements: AchievementItem[] = [
  {
    title: "レガシーシステムのモダナイゼーション",
    desc: "PHP7.0からPHP8.4へのアップグレード、Laravel5.1からLaravel12.xへのマイグレーション、Vue.js2からNext.jsへのリプレイス。レガシーシステムを最新技術でリニューアルし、パフォーマンスとセキュリティを大幅に向上。",
    tech: [
      "PHP 8.4",
      "Laravel 11.x",
      "Next.js",
      "TypeScript",
      "Docker",
      "GitHub Actions",
    ],
    iconPath:
      "M17.55,11.2C17.32,10.9 17.05,10.64 16.79,10.38C16.14,9.78 15.39,9.35 14.76,8.72C13.3,7.26 13,4.85 13.91,3C13,3.23 12.16,3.75 11.46,4.32C8.92,6.4 7.92,10.07 9.12,13.22C9.16,13.32 9.2,13.42 9.2,13.55C9.2,13.77 9.05,13.97 8.85,14.05C8.63,14.15 8.39,14.09 8.21,13.93C8.15,13.88 8.11,13.83 8.06,13.76C6.96,12.33 6.78,10.28 7.53,8.64C5.89,10 5,12.3 5.14,14.47C5.18,14.97 5.24,15.47 5.41,15.97C5.55,16.57 5.81,17.17 6.13,17.7C7.17,19.43 9,20.67 10.97,20.92C13.07,21.19 15.32,20.8 16.93,19.32C18.73,17.66 19.38,15 18.43,12.72L18.3,12.46C18.1,12 17.83,11.59 17.5,11.21L17.55,11.2M14.45,17.5C14.17,17.74 13.72,18 13.37,18.1C12.27,18.5 11.17,17.94 10.5,17.28C11.69,17 12.39,16.12 12.59,15.23C12.76,14.43 12.45,13.77 12.32,13C12.2,12.26 12.22,11.63 12.5,10.94C12.67,11.32 12.87,11.7 13.1,12C13.86,13 15.05,13.44 15.3,14.8C15.34,14.94 15.36,15.08 15.36,15.23C15.39,16.05 15.04,16.95 14.44,17.5H14.45Z",
  },
  {
    title: "高性能ビッグデータ検索エンジンの開発",
    desc: "AWS CDKとAurora MySQLを活用し、数十万件のデータベースレコードを1〜2秒で検索できる高速システムを実現。複数のデータソースを統合し、インデックス最適化とキャッシュ戦略を駆使して応答時間を劇的に改善。Next.jsとLaravelによる直感的なUI/UXも実装。",
    tech: [
      "AWS ECS",
      "Aurora MySQL",
      "AWS CDK",
      "Laravel 11.x",
      "Next.js 13.x",
      "Redis",
    ],
    iconPath:
      "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z",
  },
  {
    title: "自動化されたCI/CDパイプラインと高品質テスト体制の構築",
    desc: "GitHub ActionsによるCI/CD自動化とPlaywrightを用いたE2Eテストの導入。テスト失敗時にはSlackに自動通知し、動画で問題を確認できる仕組みを構築。また、ReviewdogとRubocopによるコードレビュー自動化で品質向上と工数削減を実現。",
    tech: [
      "GitHub Actions",
      "Playwright",
      "Reviewdog",
      "Rubocop",
      "Terraform",
      "Docker",
    ],
    iconPath:
      "M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z",
  },
  {
    title: "包括的な監視・障害対応システムの構築",
    desc: "DatadogとPagerDutyを連携させた監視体制を構築。エラー発生時のSlack通知自動化、クリティカル障害時の電話連絡自動化により、障害検知から復旧までの時間を大幅に短縮。障害対応を受動的から能動的に転換。",
    tech: ["Datadog", "PagerDuty", "Slack API", "AWS CloudWatch"],
    iconPath:
      "M17,22V20H20V17H22V20.5C22,21.32 21.32,22 20.5,22H17M7,22H3.5C2.68,22 2,21.32 2,20.5V17H4V20H7V22M17,2H20.5C21.32,2 22,2.68 22,3.5V7H20V4H17V2M7,2V4H4V7H2V3.5C2,2.68 2.68,2 3.5,2H7M13,17.25C13,17.66 12.66,18 12.25,18H11.75C11.34,18 11,17.66 11,17.25V10.75C11,10.34 11.34,10 11.75,10H12.25C12.66,10 13,10.34 13,10.75V17.25M13,8.25C13,8.66 12.66,9 12.25,9H11.75C11.34,9 11,8.66 11,8.25V7.75C11,7.34 11.34,7 11.75,7H12.25C12.66,7 13,7.34 13,7.75V8.25Z",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Introduction */}
      <section className="mb-12">
        <CyberCard title="Portfolio Database">
          <div className="flex flex-col items-center text-center">
            <div className="relative inline-block mb-4 md:mb-8 px-6 md:px-0">
              <span className="hidden md:block absolute top-0 -left-8 text-cyber-blue font-mono text-4xl animate-blink">
                &gt;
              </span>
              <h1 className="text-lg sm:text-xl md:text-4xl font-bold text-cyber-blue tracking-wider font-mono md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-4 md:border-cyber-blue md:pr-1">
                Project Experience Overview
              </h1>
            </div>
            <p className="text-sm md:text-base text-cyber-light opacity-80 mb-6 font-mono border-b border-cyber-blue/30 pb-2 inline-block">
              プロジェクト実績
            </p>
            <p className="leading-relaxed text-foreground/90 max-w-3xl mx-auto">
              Team Project
              Europaが手がけたプロジェクトと実績をご紹介します。クラウドインフラ構築、Webアプリケーション開発、CI/CD導入など、様々な分野での実績があります。
            </p>
          </div>
        </CyberCard>
      </section>

      {/* Recent Projects */}
      <section className="mb-12">
        <CyberCard title="Project Experience">
          <SectionTitle title="Recent Projects" subtitle="最近のプロジェクト" />

          <div className="space-y-6">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="border border-cyber-blue/30 p-6 rounded bg-cyber-black/40 hover:border-cyber-blue transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-cyber-blue mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-2 italic hidden">
                  {project.desc}
                </p>
                <p className="text-sm text-foreground/90 mb-4 leading-relaxed">
                  {project.descJp}
                </p>
                <div className="flex flex-wrap gap-2 justify-center border-t border-cyber-blue/20 pt-3">
                  {project.tech.map((tag) => (
                    <TechTag key={tag}>{tag}</TechTag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CyberCard>
      </section>

      {/* Technical Achievements */}
      <section className="mb-12">
        <CyberCard title="Technical Achievements">
          <SectionTitle
            title="Key Technical Accomplishments"
            subtitle="主な技術的成果"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalAchievements.map((item, index) => (
              <div
                key={index}
                className="bg-cyber-black/40 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue hover:shadow-[0_0_15px_rgba(38,218,253,0.3)] transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyber-blue/10 rounded-full flex items-center justify-center mr-4 shrink-0 border border-cyber-blue/30">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-cyber-blue"
                      fill="currentColor"
                    >
                      <path d={item.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-cyber-blue">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.tech.map((tag) => (
                    <TechTag key={tag}>{tag}</TechTag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CyberCard>
      </section>
    </div>
  );
}
