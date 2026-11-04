<template>
  <svg class="research-icon" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <g v-if="name === 'clipboard'">
      <rect x="23" y="18" width="52" height="66" rx="6" />
      <path d="M37 18v-5h7a6 6 0 0 1 12 0h7v13H37z" fill="#edf5ff" />
      <circle cx="39" cy="43" r="6" /><path d="M29 63c0-13 20-13 20 0M56 40h11M56 48h11M56 61h11M31 74h36" />
    </g>
    <g v-else-if="name === 'monitor' || name === 'waveform'">
      <rect x="12" y="16" width="72" height="52" rx="6" />
      <path d="M19 45h12l6-14 10 25 8-18 6 7h16M38 68v13M58 68v13M29 81h38" />
    </g>
    <g v-else-if="name === 'recovery'">
      <path d="M12 51v30M12 70h69v11M19 51h52a9 9 0 0 1 9 9v10M37 48v15h42M19 63h18" />
      <circle cx="26" cy="42" r="9" /><path d="M71 14h17M80 10v45M71 17v19a4 4 0 0 0 8 0V17M75 40v8h-6v10" />
    </g>
    <g v-else-if="name === 'molecule'">
      <path d="m25 35 21-12 21 12v25L46 72 25 60zM30 38l16-9M61 39v17M45 66 31 57M25 35 13 27M46 23V12M67 35l14-8M67 60l13 9M25 60 13 71" />
      <circle cx="11" cy="24" r="5" fill="#edf5ff" /><circle cx="46" cy="9" r="5" fill="#edf5ff" /><circle cx="84" cy="24" r="5" fill="#edf5ff" /><circle cx="84" cy="72" r="5" fill="#edf5ff" /><circle cx="10" cy="74" r="5" fill="#edf5ff" />
    </g>
    <g v-else-if="name === 'dna'">
      <path d="M24 11c0 24 48 49 48 74M72 11c0 24-48 49-48 74M25 16h46M30 28h36M41 41h14M40 56h16M29 69h38M25 81h46" />
    </g>
    <g v-else-if="name === 'protein'" stroke-width="5">
      <path d="M13 65c17-59 21 32 37-27s20 47 34-11" stroke="#7fb2e9" />
      <path d="M17 53c15-31 24 37 37-15s20 44 29-2" />
    </g>
    <g v-else-if="name === 'target'">
      <circle cx="48" cy="47" r="15" fill="#edf5ff" /><circle cx="48" cy="47" r="5" fill="currentColor" />
      <path d="m35 39-17-12M61 38l16-12M35 56 19 69M61 56l17 14M48 31V18M48 62v16" />
      <circle cx="13" cy="23" r="7" /><circle cx="82" cy="22" r="7" /><circle cx="14" cy="74" r="7" /><circle cx="83" cy="75" r="7" /><circle cx="48" cy="12" r="6" /><circle cx="48" cy="84" r="6" />
    </g>
    <g v-else-if="name === 'graph'">
      <path d="m17 49 25-29 35 13M17 49l27 26 34-16M42 20l2 55M17 49l61 10M42 20l36 39" />
      <circle cx="17" cy="49" r="9" fill="#edf5ff" /><circle cx="42" cy="20" r="8" fill="#edf5ff" /><circle cx="77" cy="33" r="7" fill="#edf5ff" /><rect x="36" y="67" width="16" height="16" rx="3" fill="#edf5ff" /><path d="m78 49 10 18H68z" fill="#edf5ff" />
    </g>
    <g v-else-if="name === 'evidence'">
      <rect x="29" y="14" width="43" height="58" rx="4" fill="#f3f8ff" /><rect x="16" y="27" width="43" height="58" rx="4" fill="#fff" />
      <path d="M26 39h23M26 49h23M26 59h13M26 71h21M40 24h22M68 43h12v39H68" />
    </g>
    <g v-else-if="name === 'agent'">
      <rect x="16" y="15" width="64" height="54" rx="6" fill="#edf5ff" /><path d="m16 69-7 11h78l-7-11M32 80h32M33 49l16-19 17 22z" />
      <circle cx="33" cy="49" r="5" fill="#fff" /><circle cx="49" cy="30" r="5" fill="#fff" /><circle cx="66" cy="52" r="5" fill="#fff" />
    </g>
    <g v-else-if="name === 'flask'">
      <path d="M38 13h20M41 13v28L21 75a6 6 0 0 0 5 9h44a6 6 0 0 0 5-9L55 41V13M34 55h28M29 69h37" />
      <circle cx="43" cy="64" r="2" /><circle cx="55" cy="76" r="2" />
    </g>
    <g v-else-if="name === 'pill'">
      <path d="M22 75a18 18 0 0 1 0-25l28-28a18 18 0 0 1 25 25L47 75a18 18 0 0 1-25 0zM35 37l25 25" />
    </g>
    <g v-else-if="name === 'arrow-right'"><path d="M19 48h58M59 30l18 18-18 18" /></g>
    <g v-else-if="name === 'arrow-down'"><path d="M48 19v58M30 59l18 18 18-18" /></g>
    <g v-else-if="name === 'mail'"><rect x="12" y="23" width="72" height="51" rx="5" /><path d="m15 27 33 27 33-27M15 70l24-22M81 70 57 48" /></g>
    <g v-else><path d="M26 47h44M48 25v44" /></g>
  </svg>
</template>

<script setup>
defineProps({ name: { type: String, required: true } });
</script>

<style scoped>
.research-icon { display: block; width: 72px; height: 72px; flex: 0 0 auto; }
</style>
