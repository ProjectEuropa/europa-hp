'use client';

import { useEffect } from 'react';
import CyberCard from '@/components/ui/CyberCard';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="container mx-auto px-4 py-8 min-h-[60vh] flex items-center justify-center">
            <CyberCard title="SYSTEM ERROR">
                <div className="text-center space-y-6">
                    <div className="text-6xl mb-4">⚠</div>
                    <h2 className="text-2xl font-bold text-cyber-error font-mono tracking-wider">
                        ERROR DETECTED
                    </h2>
                    <p className="text-foreground/80 max-w-md mx-auto">
                        システムエラーが発生しました。問題が解決しない場合は、お問い合わせください。
                    </p>
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="inline-block px-8 py-3 bg-cyber-blue/20 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(38,218,253,0.2)] hover:shadow-[0_0_30px_rgba(38,218,253,0.6)]"
                    >
                        <span className="mr-2">&gt;</span> RETRY
                    </button>
                </div>
            </CyberCard>
        </div>
    );
}
