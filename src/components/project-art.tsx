import type { Project } from "@/types";

/** Decorative, invented examples: no real account data or product screenshots. */
export function ProjectArt({ kind }: { kind: NonNullable<Project["visual"]> }) {
  return (
    <div className={`project-art art-${kind}`} aria-hidden="true">
      <span className="art-grid" />
      {kind === "cuadre" && (
        <div className="ledger">
          <div className="mock-heading">
            <span>
              cuadre<span className="tiny-dot">.</span>
            </span>
            <span>↗</span>
          </div>
          <div className="ledger-title">
            Good times.
            <br />
            <i>All settled.</i>
          </div>
          <div className="receipt">
            <span>WEEKEND AWAY</span>
            <div>
              <span>The stay</span>
              <b>$240</b>
            </div>
            <div>
              <span>Dinner together</span>
              <b>$96</b>
            </div>
            <div className="receipt-total">
              <span>Split among 4 friends</span>
              <b>✓</b>
            </div>
          </div>
        </div>
      )}
      {kind === "stillroom" && (
        <>
          <div className="photo-back" />
          <div className="photo-print">
            <div className="landscape">
              <span className="sun" />
              <span className="hill hill-back" />
              <span className="hill hill-front" />
              <span className="crop-corner top-left" />
              <span className="crop-corner bottom-right" />
            </div>
            <div className="photo-caption">
              stillroom <span>Find your frame.</span>
            </div>
          </div>
          <span className="art-stamp">LOCAL BY NATURE</span>
        </>
      )}
      {kind === "wishlist" && (
        <>
          <div className="wish-note">
            <span>
              A few things
              <br />
              <i>I’d love.</i>
            </span>
            <span className="wish-heart">♡</span>
          </div>
          <div className="gift gift-one">
            <span className="gift-ribbon" />
            <span className="gift-bow">⋈</span>
          </div>
          <div className="gift gift-two">
            <span className="gift-ribbon" />
          </div>
          <span className="wish-label">A LITTLE LESS GUESSWORK.</span>
        </>
      )}
      {kind === "trips" && (
        <div className="travel-ticket">
          <div className="ticket-top">
            <span>VIAJES</span>
            <span>↗</span>
          </div>
          <div className="ticket-title">
            Somewhere
            <br />
            <i>at just the right time.</i>
          </div>
          <div className="month-grid">
            {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map(
              (month, i) => (
                <span key={i} className={i > 4 && i < 9 ? "good-month" : ""}>
                  {month}
                </span>
              ),
            )}
          </div>
          <div className="ticket-footer">
            <span>30 REGIONS</span>
            <span>9 DESTINATIONS</span>
            <span>∞ POSSIBILITIES</span>
          </div>
        </div>
      )}
    </div>
  );
}
