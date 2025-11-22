<template>
  <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950/90 backdrop-blur-sm">
    <div class="flex flex-col items-center gap-4">
      <div class="relative flex h-[145px] w-[145px] items-center justify-center">
        <!-- الحلقة حوالين اللوغو -->
        <div class="signal-ring pointer-events-none" />

        <!-- اللوغو نفسه -->
        <GlobalLogo
          class="pulsing-logo h-auto w-[100px] shrink-0 opacity-70 brightness-100 ms-[3px] md:ms-[0]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.signal-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(91, 185, 247, 0) 0deg,
    rgba(91, 185, 247, 0.274) 40deg,
    rgba(105, 217, 231, 0.85) 90deg,
    rgba(91, 185, 247, 0.1) 140deg,
    rgba(91, 185, 247, 0) 200deg,
    rgba(91, 185, 247, 0) 360deg
  );
  filter: blur(10px);
  mix-blend-mode: screen;
  /* دوران + نبض بالـ CSS مباشرة */
  animation:
    ring-rotate 2.8s linear infinite,
    ring-pulse 1.8s ease-in-out infinite alternate;
}

.pulsing-logo {
  /* نبض خفيف للّوغو */
  animation: logo-pulse 2.2s ease-in-out infinite;
}

/* دوران الحلقة */
@keyframes ring-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* نبض شفافية الحلقة */
@keyframes ring-pulse {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
}

/* نبض اللوغو (سطوع + شفافية) */
@keyframes logo-pulse {
  0% {
    filter: brightness(1);
    opacity: 0.7;
  }
  40% {
    filter: brightness(2);
    opacity: 1;
  }
  100% {
    filter: brightness(1);
    opacity: 0.7;
  }
}
</style>
