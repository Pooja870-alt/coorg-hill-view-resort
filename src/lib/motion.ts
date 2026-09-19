/**
 * Shared motion design system for Coorg Heritage Hill View Resort.
 *
 * All animation variants, easing curves, and reusable transition
 * configs are defined here so every component speaks the same
 * motion language.
 */

import type { Variants, Transition } from 'motion/react';

// ---------------------------------------------------------------------------
// Easing curves
// ---------------------------------------------------------------------------

/** Primary cinematic ease — fast-in, slow settle */
export const ease = [0.25, 1, 0.5, 1] as const;

/** Extra smooth ease for large layout moves */
export const easeSmooth = [0.16, 1, 0.3, 1] as const;

/** Subtle ease for small micro-interactions */
export const easeMicro = [0.4, 0, 0.2, 1] as const;

// ---------------------------------------------------------------------------
// Core reusable transitions
// ---------------------------------------------------------------------------

export const transitionBase: Transition = {
  duration: 0.7,
  ease: ease as number[],
};

export const transitionFast: Transition = {
  duration: 0.45,
  ease: ease as number[],
};

export const transitionSlow: Transition = {
  duration: 1.0,
  ease: easeSmooth as number[],
};

// ---------------------------------------------------------------------------
// Viewport trigger settings
// ---------------------------------------------------------------------------

export const viewport = { once: true, margin: '-60px' } as const;
export const viewportEarly = { once: true, margin: '-20px' } as const;

// ---------------------------------------------------------------------------
// Masked text / element reveal (overflow-hidden parent required)
// Reveals from below upward — the cinematic theatre-curtain feel
// ---------------------------------------------------------------------------

export const maskReveal: Variants = {
  hidden: { y: '105%', opacity: 0 },
  visible: { y: '0%', opacity: 1 },
};

export const maskRevealUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// ---------------------------------------------------------------------------
// Fade + lift — for supporting body copy, pills, metadata
// ---------------------------------------------------------------------------

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// ---------------------------------------------------------------------------
// Scale-settle — image/card enters from slightly zoomed
// ---------------------------------------------------------------------------

export const scaleSettle: Variants = {
  hidden: { scale: 1.07, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

// ---------------------------------------------------------------------------
// Clip-path image reveal — sweeps from left to right
// ---------------------------------------------------------------------------

export const clipRevealLeft: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
  visible: { clipPath: 'inset(0 0% 0 0)', opacity: 1 },
};

// Clip-path reveal from bottom — for cards / panels
export const clipRevealBottom: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 1 },
  visible: { clipPath: 'inset(0% 0 0 0)', opacity: 1 },
};

// ---------------------------------------------------------------------------
// Stagger container — orchestrates children
// ---------------------------------------------------------------------------

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// ---------------------------------------------------------------------------
// Slide-in variants — for menus and drawers
// ---------------------------------------------------------------------------

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

// ---------------------------------------------------------------------------
// Modal / overlay
// ---------------------------------------------------------------------------

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const modalContentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.97, y: 8 },
};

// ---------------------------------------------------------------------------
// Reduced-motion safe helper
// Returns a "safe" variants object where every keyframe uses opacity only.
// Usage: const v = reducedMotionVariants(maskReveal);
// ---------------------------------------------------------------------------

export function reducedMotionVariants(variants: Variants): Variants {
  const safe: Variants = {};
  for (const key of Object.keys(variants)) {
    const frame = variants[key] as Record<string, unknown>;
    safe[key] = {
      opacity: frame['opacity'] ?? (key === 'hidden' ? 0 : 1),
      y: 0,
      x: 0,
      scale: 1,
      clipPath: undefined,
    };
  }
  return safe;
}
