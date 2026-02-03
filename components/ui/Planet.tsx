export default function Planet() {
    return (
        <div className="absolute right-[10%] top-[50%] -translate-y-1/2 w-[300px] h-[300px] rounded-full z-0 overflow-hidden hidden sm:block pointer-events-none"
            style={{
                background: 'linear-gradient(135deg, #0a1a2a 0%, #000810 100%)',
                boxShadow: 'inset -30px -30px 80px #000, 0 0 40px rgba(32, 237, 255, 0.2)'
            }}>
            {/* Inner Gradient */}
            <div className="absolute w-full h-full"
                style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(32, 237, 255, 0.1), transparent 70%)'
                }}
            />
            {/* Rotating Grid */}
            <div className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] opacity-30 animate-rotate"
                style={{
                    backgroundImage: `
               linear-gradient(90deg, rgba(32, 237, 255, 0.1) 1px, transparent 1px),
               linear-gradient(0deg, rgba(32, 237, 255, 0.1) 1px, transparent 1px)
             `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: 'center',
                }}
            />
        </div>
    );
}
