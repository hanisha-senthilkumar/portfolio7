
import bgVideo from "@/assets/bg1.mp4";


/**
 * Full-page video background component.
 * - Autoplays, loops, muted, covers viewport
 * - Renders `children` on top of the video
 */
const Background = ({ children }) => {
    return (
        <>
            <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
                <video className="video-bg" autoPlay loop muted playsInline>
                    <source src={bgVideo} type="video/mp4" />
                </video>
                {/* overlay to enrich background (tint + subtle vignette + animated gradient) */}
                <div className="bg-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />
            </div>

            <div className="relative z-10">{children}</div>
        </>
    );
};

export default Background;