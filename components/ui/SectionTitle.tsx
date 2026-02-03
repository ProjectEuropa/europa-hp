interface SectionTitleProps {
    title: string;
    subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className="mb-8 text-center animate-text-appear">
            <h2 className="font-mono text-2xl md:text-[28px] text-cyber-blue tracking-[2px] uppercase mb-4 relative inline-block">
                {title}
                <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[50px] h-[2px] bg-cyber-blue shadow-[0_0_10px_#26dafd]" />
            </h2>
            <p className="text-sm opacity-80 mt-1">{subtitle}</p>
        </div>
    );
}
