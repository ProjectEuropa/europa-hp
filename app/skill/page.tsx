import CyberCard from "@/components/ui/CyberCard";
import SectionTitle from "@/components/ui/SectionTitle";
import TechTag from "@/components/ui/TechTag";

export const metadata = {
  title: "Skills - Project Europa",
  description:
    "Team Project Europaの技術スキルと認定資格一覧。AWS全12資格、Google Cloud 6資格を保有。",
};

// Skill Data Types
type CertItem = {
  title: string;
  desc: string;
  descJp: string;
  iconPath: string;
};

// AWS Certifications Data
const awsCerts: CertItem[] = [
  {
    title: "Solutions Architect Professional",
    desc: "AWS certified professional level architect skilled in designing and deploying scalable, highly available systems.",
    descJp:
      "AWSの最上位資格の一つ。スケーラブルで高可用性のクラウドアーキテクチャを設計・実装する専門的なスキルを認定。",
    iconPath:
      "M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.91,3.91L7.83,7H13.5M6,18H8V20H6V18Z",
  },
  {
    title: "DevOps Engineer Professional",
    desc: "Professional certification for implementing CI/CD systems and automating infrastructure on AWS.",
    descJp:
      "CI/CDパイプラインの実装とインフラ自動化に関する専門的なスキルを認定する上級資格。",
    iconPath:
      "M12,1.5A10.5,10.5 0 0,1 22.5,12A10.5,10.5 0 0,1 12,22.5A10.5,10.5 0 0,1 1.5,12A10.5,10.5 0 0,1 12,1.5M12,3.5A8.5,8.5 0 0,0 3.5,12A8.5,8.5 0 0,0 12,20.5A8.5,8.5 0 0,0 20.5,12A8.5,8.5 0 0,0 12,3.5M17,6.5L15.5,8.5L17.5,11H14V13H17.5L15.5,15.5L17,17.5L22,12L17,6.5M7,6.5L2,12L7,17.5L8.5,15.5L6.5,13H10V11H6.5L8.5,8.5L7,6.5Z",
  },
  {
    title: "Advanced Networking Specialty",
    desc: "Expert in designing, developing, and deploying complex networking solutions on AWS infrastructure.",
    descJp:
      "AWS インフラストラクチャ上での複雑なネットワーキングソリューションの設計、開発、デプロイに関する専門知識。",
    iconPath:
      "M15,20A1,1 0 0,0 16,19V4H8A1,1 0 0,0 7,5V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V19A3,3 0 0,1 19,22H15V20M1,15H3V17H1V15M1,11H3V13H1V11M1,7H3V9H1V7M1,3H3V5H1V3M5,3H7V5H5V3M5,19H7V21H5V19M5,11H7V13H5V11M5,7H7V9H5V7M9,3H11V5H9V3M9,19H11V21H9V19Z",
  },
  {
    title: "Security Specialty",
    desc: "Specialized knowledge in securing AWS infrastructure and implementing compliance frameworks.",
    descJp:
      "AWSインフラストラクチャのセキュリティ強化とコンプライアンスフレームワークの実装に関する専門知識。",
    iconPath:
      "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z",
  },
  {
    title: "Machine Learning Specialty",
    desc: "Expertise in designing, implementing, and deploying machine learning solutions on AWS.",
    descJp:
      "AWSにおける機械学習ソリューションの設計、実装、デプロイに関する専門知識。",
    iconPath:
      "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M17,15A2,2 0 0,0 15,17A2,2 0 0,0 17,19A2,2 0 0,0 19,17A2,2 0 0,0 17,15Z",
  },
  {
    title: "Solutions Architect Associate",
    desc: "Capable of designing available, cost-efficient, fault-tolerant systems on AWS.",
    descJp:
      "可用性が高く、コスト効率の良い耐障害性システムをAWS上で設計する能力。",
    iconPath:
      "M18,9V10.5L21,7.5L18,4.5V6H15V9H18M14,10H3V12H14V10M14,6H3V8H14V6M3,16H10V14H3V16Z",
  },
  {
    title: "SysOps Administrator Associate",
    desc: "Skilled in AWS operations including deployment, management, and operations.",
    descJp: "AWS環境におけるデプロイ、管理、運用を含む運用管理スキル。",
    iconPath:
      "M15,17H17V14H19V17H21V19H19V22H17V19H15V17M13,13H7V11H13V13M13,9H7V7H13V9M7,15H13V17H7V15M21,3V9H3V3H21M19,5H5V7H19V5Z",
  },
  {
    title: "Developer Associate",
    desc: "Proficient in developing and maintaining applications on AWS platform.",
    descJp: "AWSプラットフォーム上でのアプリケーション開発と保守に熟練。",
    iconPath:
      "M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z",
  },
  {
    title: "Data Engineer Associate",
    desc: "Expert in designing, implementing and maintaining data processing systems.",
    descJp:
      "セキュリティ、回復力、パフォーマンスに焦点を当てたデータ処理システムの設計、実装、保守における専門知識。",
    iconPath: "M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z",
  },
  {
    title: "Machine Learning Engineer - Associate",
    desc: "Associate-level certification for implementing ML solutions on AWS.",
    descJp:
      "事前トレーニング済みのAIサービスとMLフレームワークを使用したAWS上のML解決策実装に関する準専門レベルの認定資格。",
    iconPath:
      "M16,3C14.89,3 14,3.89 14,5V9C14,10.11 14.89,11 16,11H20V13H17.5C16.12,13 15,14.12 15,15.5V16.27C14.23,16.62 13.54,17.13 13,17.77L12,18.77C10.29,20.5 9,22 5,22V20C8,20 8.68,19 10,17.77L11.06,16.72C10.55,15.84 10.25,14.83 10.16,13.78C8.9,13.4 8,12.3 8,11V9C8,7.7 9.34,6.8 11,7.2V5C11,3.89 10.11,3 9,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H9C10.11,21 11,20.11 11,19V15.5C11,14.12 12.12,13 13.5,13H20V11H18.65C18.87,10.69 19,10.35 19,10V9H22V5C22,3.89 21.11,3 20,3H16M16,5H20V9H16V5M9,11H5V9H9V11M9,15H5V13H9V15M9,19H5V17H9V19Z",
  },
  {
    title: "AI Practitioner",
    desc: "Foundational certification for applying AI services in real-world applications.",
    descJp:
      "実世界のアプリケーションでAIサービスを適用するための基礎的な認定資格。AWS AI/MLツールとベストプラクティスに焦点を当てています。",
    iconPath:
      "M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z",
  },
  {
    title: "Cloud Practitioner",
    desc: "Comprehensive understanding of the AWS Cloud, its services, and basic architecture patterns.",
    descJp:
      "AWSクラウド、そのサービス、および基本的なアーキテクチャパターンの包括的な理解。",
    iconPath:
      "M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18Z",
  },
];

// Google Cloud Certifications Data
const gcpCerts: CertItem[] = [
  {
    title: "Professional Cloud Architect",
    desc: "Professional certification for designing, developing, and managing secure, scalable cloud solutions on Google Cloud.",
    descJp:
      "Google Cloud上でセキュアでスケーラブルなクラウドソリューションを設計・開発・管理する専門的なスキルを認定。",
    iconPath:
      "M12,2L2,7L12,12L22,7L12,2M2,17L12,22L22,17L12,12L2,17M12,14.5L4.5,10L12,5.5L19.5,10L12,14.5Z",
  },
  {
    title: "Professional Cloud Developer",
    desc: "Professional certification for building scalable and highly available applications using Google Cloud recommended practices.",
    descJp:
      "Google Cloud推奨のプラクティスとツールを使用して、スケーラブルで高可用性のアプリケーションを構築する専門的なスキルを認定。",
    iconPath:
      "M20,19V7H4V19H20M20,3A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5C2,3.89 2.9,3 4,3H20M13,17V15H18V17H13M9.58,13L5.57,9H8.4L11.7,12.3C12.09,12.69 12.09,13.33 11.7,13.72L8.42,17H5.59L9.58,13Z",
  },
  {
    title: "Associate Cloud Engineer",
    desc: "Certified to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud.",
    descJp:
      "Google Cloud上でのアプリケーションのデプロイ、運用監視、エンタープライズソリューションの管理に関する認定資格。",
    iconPath:
      "M12,7V4H8V7H5V11H8V14H5V18H8V21H12V18H15V21H19V18H22V14H19V11H22V7H19V4H15V7H12M12,11H15V14H12V11Z",
  },
  {
    title: "Professional Cloud DevOps Engineer",
    desc: "Professional certification for implementing DevOps practices, SRE principles, and CI/CD pipelines on Google Cloud.",
    descJp:
      "Google CloudインフラストラクチャにおけるDevOps実践、SRE原則、CI/CDパイプラインの実装に関する専門的なスキルを認定。",
    iconPath:
      "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16,6L14.5,8.5L17,11H14V13H17L14.5,15.5L16,18L21,12L16,6M8,6L3,12L8,18L9.5,15.5L7,13H10V11H7L9.5,8.5L8,6Z",
  },
  {
    title: "Generative AI Leader",
    desc: "Demonstrating leadership skills in applying generative AI technologies and strategies.",
    descJp:
      "生成AI技術と戦略を活用してビジネス変革とイノベーションを推進するリーダーシップスキルを証明する認定資格。",
    iconPath:
      "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z",
  },
  {
    title: "Cloud Digital Leader",
    desc: "Foundational certification demonstrating knowledge of cloud concepts and Google Cloud products and services.",
    descJp:
      "クラウドの概念とGoogle Cloudの製品・サービスに関する知識を証明する基礎的な認定資格。",
    iconPath:
      "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z",
  },
];

// Tech Stack Data
const techStack: CertItem[] = [
  {
    title: "JavaScript / TypeScript",
    desc: "Modern front-end and back-end development with JavaScript and TypeScript.",
    descJp:
      "JavaScriptとTypeScriptを使用したモダンなフロントエンドおよびバックエンド開発。",
    iconPath:
      "M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z",
  },
  {
    title: "Vue.js / Nuxt.js",
    desc: "Creating dynamic, progressive web applications using Vue.js ecosystem.",
    descJp:
      "Vue.jsエコシステムを活用した動的でプログレッシブなWebアプリケーションの開発。",
    iconPath:
      "M13.37 2.094L12.99 2.724L17.19 6.82L22 7.234V6.414L17.78 5.414L13.37 2.094zM11.29 4.554L8.83 8.424L14.49 10.53L17.19 6.82L12.99 2.724L11.29 4.554zM15.45 11.414L16.7 13.964L18.33 12.654L17.19 6.824L14.48 10.544L15.45 11.414zM8.21 11.654L3.76 13.594L3.46 17.024L7.65 17.434L9.95 14.054L8.21 11.654zM10.21 15.304L10.4 17.534L7.65 17.434L3.46 17.034L4.19 19.564L8.39 19.974L11.27 18.754L10.21 15.304z",
  },
  {
    title: "PHP / Laravel",
    desc: "Building robust back-end systems and web applications with PHP and Laravel.",
    descJp:
      "PHPとLaravelを使用した堅牢なバックエンドシステムとWebアプリケーションの構築。",
    iconPath:
      "M12 18.08C5.37 18.08 0 15.36 0 12C0 8.64 5.37 5.92 12 5.92C18.63 5.92 24 8.64 24 12C24 15.36 18.63 18.08 12 18.08M6.81 14.13C7.35 14.13 7.72 13.95 8.39 13.54C8.72 13.34 9.15 13.08 9.87 12.87C9.86 12.56 9.37 12.31 8.82 11.97C7.69 11.32 6.21 10.5 6.21 8.31C6.21 5.11 9.57 3.11 12 3.11C14.43 3.11 17.79 5.11 17.79 8.31C17.79 10.5 16.31 11.32 15.18 11.97C14.63 12.31 14.14 12.56 14.13 12.87C14.85 13.08 15.28 13.34 15.61 13.54C16.28 13.95 16.65 14.13 17.19 14.13C18.24 14.13 18.5 13.36 18.5 12.83C18.5 12.44 18.23 12.24 17.95 12.04C17.67 11.84 17.39 11.64 17.39 11.27C17.39 10.83 17.57 10.5 18.24 10.1C18.55 9.93 18.92 9.67 19.25 9.36C19.71 8.93 20.05 8.34 20.05 7.59C20.05 6.5 19.27 5.69 18.09 5.18C18.08 5.18 18.88 4.89 19.13 4.8C19.27 4.75 19.39 4.59 19.33 4.44C19.26 4.3 19.09 4.3 19.09 4.3H17.2C17.2 4.3 17.02 4.28 16.86 4.34C16.7 4.4 16.45 4.5 16.37 4.5C16.34 4.5 16.29 4.5 16.23 4.42C16.17 4.34 16.08 4.34 16.08 4.34C14.08 3.31 13.25 3.67 13.25 4.38C13.25 4.38 13.08 4.77 13.71 4.65C14.35 4.53 14.97 5.42 14.97 5.42L15.34 4.77C15.34 4.77 14.39 3.89 14.03 3.77C13.7 3.67 13.2 3.77 13.12 3.77C13.09 3.77 13.07 3.77 13.07 3.77C15.34 1.11 19.44 1.69 20.87 4.41C22.28 7.11 19.5 8.29 19.5 9.35C19.5 10.41 20.68 10.23 20.68 12.35C20.7 14.37 18.5 16.12 16.24 16.12C15.41 16.12 14.97 15.97 14.28 15.59C13.98 15.41 13.57 15.19 12.96 15C12.97 15.2 13.31 15.61 13.71 15.91C14.81 16.72 15.89 17.28 15.89 18.81C15.89 21.11 11.3 21.96 8.08 20.45C8.08 20.45 9.54 19.58 10.06 18.82C10.57 18.06 10.06 17.47 10.06 17.47C7.5 17.3 4.83 16.28 4.83 14.13C4.83 13.7 4.95 13.32 5.16 12.98C5.69 12.12 6.8 11.82 6.8 9.85C6.8 7.85 4.21 7.85 4.21 6.29C4.21 5.29 5.04 4.88 5.79 4.6C6.53 4.3 7.25 4.2 7.25 3.57C7.25 2.94 5.78 3.75 4.57 3.75C3.38 3.75 2.58 3.03 2.58 2.23C2.58 1.77 2.93 1.25 3.26 1.04C3.58 0.834 1.46 0.66 1.17 2.76C0.899 4.85 3.2 5.87 3.2 5.87C2.28 6.5 1.75 7.28 1.75 8.12C1.75 9.5 2.42 10.39 3.26 10.97C3.73 11.29 4.25 11.5 4.64 11.74C5.03 11.97 5.31 12.18 5.31 12.5C5.31 13.1 4.39 13.39 3.5 13.39C2.21 13.39 1.21 12.39 1.21 12.39C1.21 12.39 0 13.48 0 14.94C0 16.56 1.37 17.95 4.63 18.95C4.63 18.95 4.25 18.23 4.72 17.59C5.18 16.95 6.93 16.18 6.93 16.18C6.93 16.18 5.95 15.62 5.95 14.5C5.93 14.36 5.94 14.23 5.96 14.1L6 14.13H6.81",
  },
  {
    title: "Ruby / Ruby on Rails",
    desc: "Server-side development with Ruby and Rails framework.",
    descJp:
      "Rubyおよび Rails フレームワークを使用した、迅速で保守性の高いWebアプリケーション開発。",
    iconPath:
      "M18.8,2.07C21.32,2.5 22.04,4.23 22,6.04V6L20.86,20.93L6.08,21.94H6.09C4.86,21.89 2.13,21.77 2,17.95L3.37,15.45L6.14,21.91L8.5,14.29L8.45,14.3L8.47,14.28L16.18,16.74L14.19,8.96L21.54,8.5L15.75,3.76L18.8,2.06V2.07M2,17.91V17.93L2,17.91V17.91M6.28,6.23C9.24,3.28 13.07,1.54 14.54,3.03C16,4.5 14.46,8.12 11.5,11.06C8.5,14 4.73,15.84 3.26,14.36C1.79,12.87 3.3,9.17 6.27,6.23H6.28Z",
  },
  {
    title: "React.js / Next.js",
    desc: "Building modern, performant web applications with React ecosystem.",
    descJp:
      "Reactエコシステムを活用したモダンで高性能なWebアプリケーションの構築。",
    iconPath:
      "M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z",
  },
  {
    title: "Infrastructure as Code",
    desc: "Managing cloud infrastructure with Terraform, CloudFormation, and CDK.",
    descJp:
      "Terraform、CloudFormation、CDKによるクラウドインフラのコード管理。",
    iconPath:
      "M12,5.37L11.56,5.31L6,14.9C6.24,15.11 6.4,15.38 6.47,15.68H17.53C17.6,15.38 17.76,15.11 18,14.9L12.44,5.31L12,5.37M6.6,16.53L3.82,15.42L12,3.5L20.18,15.42L17.4,16.53L12,17.86L6.6,16.53Z",
  },
];

export default function SkillPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Instruction */}
      <section className="mb-12">
        <CyberCard title="Skills Database">
          <div className="flex flex-col items-center text-center">
            <div className="relative inline-block mb-4 md:mb-8 px-6 md:px-0">
              <span className="hidden md:block absolute top-0 -left-8 text-cyber-blue font-mono text-4xl animate-blink">
                &gt;
              </span>
              <h1 className="text-lg sm:text-xl md:text-4xl font-bold text-cyber-blue tracking-wider font-mono md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-4 md:border-cyber-blue md:pr-1">
                Technical Skills Overview
              </h1>
            </div>
            <p className="text-sm md:text-base text-cyber-light opacity-80 mb-6 font-mono border-b border-cyber-blue/30 pb-2 inline-block">
              技術スキル一覧
            </p>
            <p className="leading-relaxed text-foreground/90 max-w-3xl mx-auto">
              Team Project
              Europaが持つ技術スキルと認定資格の一覧です。クラウドインフラ、Webアプリケーション開発、システム設計など幅広い分野に対応しています。
            </p>
          </div>
        </CyberCard>
      </section>

      {/* AWS Certifications */}
      <section className="mb-12">
        <CyberCard title="Qualification Records">
          <SectionTitle title="AWS Certifications" subtitle="AWS認定資格" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awsCerts.map((cert, index) => (
              <div
                key={index}
                className="bg-cyber-black/40 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue hover:shadow-[0_0_15px_rgba(38,218,253,0.3)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyber-blue/30 group-hover:border-cyber-blue">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-cyber-blue group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                  >
                    <path d={cert.iconPath} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-cyber-blue mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm opacity-70 mb-2">{cert.desc}</p>
                <p className="text-xs text-cyber-light border-t border-cyber-blue/20 pt-2 w-full">
                  {cert.descJp}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-cyber-blue/5 border border-cyber-blue/30 rounded text-center">
            <p className="font-bold text-cyber-blue mb-1">
              ※ AWS の全ての認定資格を取得しています。
            </p>
            <p className="text-xs opacity-70 max-w-2xl mx-auto">
              これらの認定資格は、AWSプラットフォーム全体に渡る専門知識を証明し、様々なビジネスニーズに対応した高度なクラウドソリューションの設計、実装、運用を可能にします。
            </p>
          </div>
        </CyberCard>
      </section>

      {/* Google Cloud Certifications */}
      <section className="mb-12">
        <CyberCard title="Qualification Records">
          <SectionTitle
            title="Google Cloud Certifications"
            subtitle="Google Cloud認定資格"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gcpCerts.map((cert, index) => (
              <div
                key={index}
                className="bg-cyber-black/40 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue hover:shadow-[0_0_15px_rgba(38,218,253,0.3)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyber-blue/30 group-hover:border-cyber-blue">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-cyber-blue group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                  >
                    <path d={cert.iconPath} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-cyber-blue mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm opacity-70 mb-2">{cert.desc}</p>
                <p className="text-xs text-cyber-light border-t border-cyber-blue/20 pt-2 w-full">
                  {cert.descJp}
                </p>
              </div>
            ))}
          </div>
        </CyberCard>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <CyberCard title="Technical Stack">
          <SectionTitle title="Development Skills" subtitle="開発スキル" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((item, index) => (
              <div
                key={index}
                className="bg-cyber-black/40 border border-cyber-blue/20 p-6 rounded hover:border-cyber-blue hover:shadow-[0_0_15px_rgba(38,218,253,0.3)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyber-blue/30 group-hover:border-cyber-blue">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-cyber-blue group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                  >
                    <path d={item.iconPath} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-cyber-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-70 mb-2">{item.desc}</p>
                <p className="text-xs text-cyber-light border-t border-cyber-blue/20 pt-2 w-full">
                  {item.descJp}
                </p>
              </div>
            ))}
          </div>
        </CyberCard>
      </section>

      {/* Detailed Skills Text (Skill Areas) */}
      <section className="mb-12">
        <CyberCard title="Detailed Technical Skills">
          <SectionTitle
            title="Tech Stack & Capabilities"
            subtitle="技術スタックと対応領域"
          />

          <div className="space-y-6">
            {/* Server Side */}
            <div className="border-b border-cyber-blue/20 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-cyber-blue mb-2">
                サーバーサイド開発
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                PHP/Laravel、Ruby/Ruby on
                Rails環境において、事業・要件のフェーズに合わせたアプリケーションのアーキテクチャ選定から設計実装まで対応可能です。
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "PHP",
                  "Laravel",
                  "Ruby",
                  "Ruby on Rails",
                  "API Design",
                  "Architecture Design",
                ].map((tag) => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </div>
            </div>

            {/* Front End */}
            <div className="border-b border-cyber-blue/20 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-cyber-blue mb-2">
                フロントエンド開発
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Vue.js/React.js/TypeScript環境において、コンポーネント設計や実装まで対応可能です。
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Vue.js",
                  "Nuxt.js",
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Component Design",
                  "SPA",
                  "PWA",
                ].map((tag) => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div className="border-b border-cyber-blue/20 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-cyber-blue mb-2">
                インフラ構築・運用
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                AWS/Google Cloud/Terraform、EC2/ECS/GCE/Cloud
                Runなどを利用した本番環境の設計や構築まで対応可能です。
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "AWS",
                  "Google Cloud",
                  "EC2",
                  "ECS",
                  "GCE",
                  "Cloud Run",
                  "Terraform",
                  "CloudFormation",
                  "CDK",
                  "Ansible",
                  "IaC",
                  "Docker",
                ].map((tag) => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </div>
            </div>

            {/* Monitoring */}
            <div className="border-b border-cyber-blue/20 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-cyber-blue mb-2">
                サーバー監視
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Datadog/NewRelic/Mackerel/Sentry、標準的なAPM対応からエラー通知まで対応可能です。
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Datadog",
                  "NewRelic",
                  "CloudWatch",
                  "Mackerel",
                  "Sentry",
                  "APM",
                  "SigNoz",
                ].map((tag) => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </div>
            </div>

            {/* CI/CD */}
            <div className="border-b border-cyber-blue/20 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-cyber-blue mb-2">CI/CD</h3>
              <p className="text-sm text-foreground/80 mb-3">
                GitHub
                Actions、Unitテスト自動化からE2Eテストの自動化、EC2/ECS/Cloud
                Runデプロイの自動化まで対応可能です。
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "GitHub Actions",
                  "Circle CI",
                  "Jenkins",
                  "CI/CD",
                  "Automatic Testing",
                  "E2E Testing",
                  "Auto Deployment",
                  "Cloud Run",
                ].map((tag) => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </div>
            </div>

            {/* Gen AI */}
            <div className="border-b border-cyber-blue/20 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-cyber-blue mb-2">
                生成AI活用・開発効率化
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                Claude
                Codeなどの生成AIを活用した開発効率化、PR自動レビュー、E2Eテスト自動修復パイプラインの構築が可能です。
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Claude Code",
                  "AI PR Review",
                  "Auto Repair Pipeline",
                  "Prompt Engineering",
                ].map((tag) => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </div>
            </div>
          </div>
        </CyberCard>
      </section>
    </div>
  );
}
