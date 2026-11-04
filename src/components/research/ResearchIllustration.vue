<template>
  <svg class="research-illustration" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <ellipse cx="80" cy="60" rx="65" ry="48" fill="#edf6ff" />
    <ellipse cx="80" cy="108" rx="49" ry="4" fill="#cce1f8" opacity=".55" />
    <circle cx="22" cy="29" r="3" fill="#c3dff9" />
    <circle cx="143" cy="79" r="2.5" fill="#a8d6e2" />

    <g v-if="name === 'clipboard'" class="scene" stroke-linecap="round" stroke-linejoin="round">
      <rect x="55" y="22" width="61" height="77" rx="7" fill="#d5e8fb" stroke="#a9cceb" transform="rotate(8 85 60)" />
      <rect class="paper-shadow" x="34" y="18" width="68" height="83" rx="7" fill="white" stroke="#6fa5da" stroke-width="1.7" />
      <path d="M52 18v-5h10a7 7 0 0 1 14 0h10v12H52z" fill="#bad9f6" stroke="#276ab5" stroke-width="1.7" />
      <circle cx="52" cy="44" r="7" fill="#cce4fb" stroke="#4d8fce" stroke-width="1.5" />
      <path d="M40 63v-4a12 12 0 0 1 24 0v4" fill="#d8ebfc" stroke="#4d8fce" stroke-width="1.5" />
      <path d="M75 41h16M75 48h11" stroke="#91bade" stroke-width="3" />
      <path d="M44 76h38M44 85h29" stroke="#a9cbea" stroke-width="3.5" />
      <rect class="paper-shadow" x="88" y="57" width="47" height="38" rx="7" fill="#fafdff" stroke="#b1d1ed" stroke-width="1.5" />
      <circle cx="111.5" cy="76" r="11" fill="#1b6bb9" />
      <path d="m106 76 4 4 7-8" stroke="white" stroke-width="2.4" />
    </g>

    <g v-else-if="name === 'monitor'" class="scene" stroke-linecap="round" stroke-linejoin="round">
      <rect x="29" y="20" width="105" height="68" rx="8" fill="#c9e1f9" />
      <rect class="paper-shadow" x="21" y="16" width="107" height="69" rx="8" fill="#fff" stroke="#5a94d0" stroke-width="1.8" />
      <rect x="28" y="23" width="93" height="48" rx="4" fill="#e9f4ff" />
      <path d="M29 38h91M29 54h91M47 25v44M70 25v44M94 25v44" stroke="#d1e4f6" stroke-width="1" />
      <path d="M31 48h13l6-13 10 26 9-20 7 7h15l5-8 6 8h15" stroke="#1268b8" stroke-width="2.5" />
      <circle cx="113" cy="78" r="2" fill="#3e8dcb" /><circle cx="105" cy="78" r="2" fill="#9fc8e9" />
      <path d="M66 86v13h18V86" fill="#b9d9f4" stroke="#659acd" stroke-width="1.4" />
      <rect x="49" y="99" width="51" height="7" rx="3.5" fill="#d3e6f8" stroke="#8ab3da" stroke-width="1.3" />
      <rect class="paper-shadow" x="107" y="58" width="36" height="41" rx="5" fill="#fff" stroke="#9bc1e5" stroke-width="1.5" />
      <path d="M114 70h20M114 77h12" stroke="#b0d0ec" stroke-width="2.5" />
      <path d="m114 90 6-5 6 3 9-7" stroke="#4a9eae" stroke-width="2" />
    </g>

    <g v-else-if="name === 'recovery'" class="scene" stroke-linecap="round" stroke-linejoin="round">
      <rect x="104" y="19" width="36" height="30" rx="5" fill="#fff" stroke="#80add8" stroke-width="1.6" />
      <rect x="109" y="24" width="26" height="18" rx="3" fill="#e6f2ff" />
      <path d="M111 34h6l3-6 4 11 3-5h6M121 50v11" stroke="#307bbb" stroke-width="1.6" />
      <rect x="24" y="66" width="112" height="25" rx="8" fill="#c6dff7" stroke="#659bd0" stroke-width="1.6" />
      <rect x="29" y="61" width="37" height="15" rx="7" fill="#fff" stroke="#a6c8e8" stroke-width="1.2" />
      <path d="m52 64 12 4 6 9H53z" fill="#e4f0fb" stroke="#7fa9d0" stroke-width="1.2" />
      <path d="M39 55c0-6 4-10 10-10 5 0 9 3 10 8l3 4-3 2v3c0 4-4 7-8 7h-3c-6 0-10-5-10-11z" fill="#e4f0fb" stroke="#79a3cc" stroke-width="1.3" />
      <path d="M39 62c-3-4-3-10 0-14 4-5 11-6 16-2l3 6-7-2-3 4-4-1v8l-2 4z" fill="#608ebc" />
      <path d="M52 55q2 1 4 0M55 64h3" stroke="#4879a8" stroke-width="1.2" />
      <path d="M65 67c10-11 31-8 46 1l13 12H62z" fill="#87b8e7" stroke="#508dc8" stroke-width="1.5" />
      <path d="M75 65v13M85 65v13M95 68v10" stroke="#c4e0f8" stroke-width="1.5" />
      <rect x="21" y="77" width="117" height="9" rx="4.5" fill="#fff" stroke="#5d98cf" stroke-width="1.6" />
      <path d="M27 86v14M132 86v14M25 58v23" stroke="#397dbb" stroke-width="3" />
      <circle cx="27" cy="102" r="3" fill="#8cb7df" /><circle cx="132" cy="102" r="3" fill="#8cb7df" />
      <circle class="paper-shadow" cx="38" cy="31" r="16" fill="#fff" stroke="#bfd9ef" stroke-width="1.4" />
      <circle cx="38" cy="31" r="11" fill="#1c6fba" /><path d="m32.5 31 4 4 7-8" stroke="#fff" stroke-width="2.3" />
    </g>

    <g v-else-if="name === 'molecule'" class="scene" stroke-linecap="round" stroke-linejoin="round">
      <g stroke="#91b7dd" stroke-width="5">
        <path d="m47 35 33-13 30 22-3 34-33 17-34-23zM47 35 21 24M110 44l24-19M107 78l27 16M40 72 19 85M80 22l4-11" />
      </g>
      <g stroke="#d5e7f7" stroke-width="1.5">
        <circle class="node-shadow" cx="47" cy="35" r="10" fill="#6da4db" /><circle class="node-shadow" cx="80" cy="22" r="9" fill="#276fba" />
        <circle class="node-shadow" cx="110" cy="44" r="12" fill="#5a96d2" /><circle class="node-shadow" cx="107" cy="78" r="10" fill="#7ebdc7" />
        <circle class="node-shadow" cx="74" cy="95" r="11" fill="#4d8bc9" /><circle class="node-shadow" cx="40" cy="72" r="11" fill="#2f77bc" />
        <circle cx="21" cy="24" r="6" fill="#a2c8e9" /><circle cx="134" cy="25" r="7" fill="#9dc8ed" /><circle cx="134" cy="94" r="7" fill="#a7d0ed" /><circle cx="19" cy="85" r="6" fill="#a0c7e8" /><circle cx="84" cy="11" r="4" fill="#afcfea" />
      </g>
      <g fill="#e7f5ff" opacity=".8"><circle cx="44" cy="32" r="3" /><circle cx="106" cy="40" r="4" /><circle cx="37" cy="68" r="3" /><circle cx="71" cy="91" r="3" /></g>
    </g>

    <g v-else-if="name === 'dna'" class="scene" stroke-linecap="round" stroke-linejoin="round">
      <g stroke="#b6d5ee" stroke-width="3">
        <path d="M51 21h58M63 34h34M61 47h38M49 60h62M61 73h38M63 86h34M51 99h58" />
      </g>
      <g stroke="#80b5df" stroke-width="3">
        <path d="M52 21h22M64 34h12M62 47h18M50 60h23M62 73h15M64 86h15M52 99h24" />
      </g>
      <path d="M49 12c0 24 62 24 62 48s-62 24-62 48" stroke="#b6dcf8" stroke-width="10" />
      <path d="M111 12c0 24-62 24-62 48s62 24 62 48" stroke="#2a75bc" stroke-width="10" />
      <path d="M49 12c0 24 62 24 62 48s-62 24-62 48" stroke="#76afdc" stroke-width="5" />
      <path d="M111 12c0 24-62 24-62 48s62 24 62 48" stroke="#76b6d1" stroke-width="3" opacity=".75" />
      <g fill="#dcefff"><circle cx="49" cy="12" r="3" /><circle cx="111" cy="108" r="3" /></g>
    </g>

    <g v-else-if="name === 'protein'" class="scene" stroke-linecap="round" stroke-linejoin="round">
      <path d="M27 80C13 48 47 18 68 36s-8 57 23 47 43-40 18-47-27 47 15 35" stroke="#b0d3f4" stroke-width="17" />
      <path d="M27 80C13 48 47 18 68 36s-8 57 23 47 43-40 18-47-27 47 15 35" stroke="#5596cf" stroke-width="10" />
      <path d="M27 80C16 53 40 28 59 32M71 47c2 15-3 36 20 30M112 36c16 7 10 21 3 29" stroke="#b3ddf2" stroke-width="4" />
      <path d="M38 85c-6-15 2-29 17-23 16 6 1 29 18 34" stroke="#7fbdc8" stroke-width="10" />
      <path d="M38 85c-6-15 2-29 17-23 16 6 1 29 18 34" stroke="#c5e7ec" stroke-width="3" />
      <circle cx="27" cy="80" r="4" fill="#3a81bd" /><circle cx="124" cy="71" r="4" fill="#3a81bd" />
    </g>

    <g v-else-if="name === 'target'" class="scene" stroke-linecap="round" stroke-linejoin="round">
      <path d="M46 42 22 28M106 40l28-15M44 77 25 93M109 75l26 18" stroke="#9ec6e6" stroke-width="3" />
      <circle cx="77" cy="59" r="35" fill="#d6e9fb" stroke="#99bfdf" stroke-width="1.6" />
      <circle cx="77" cy="59" r="25" fill="#f9fcff" stroke="#6c9fd1" stroke-width="1.6" />
      <circle cx="77" cy="59" r="14" fill="#b6d8f4" stroke="#3a7dbd" stroke-width="1.6" />
      <circle cx="77" cy="59" r="6" fill="#1a65ae" />
      <path d="M91 45 110 26M108 18v10h10" stroke="#286fb2" stroke-width="3" />
      <g stroke="#d7e8f6" stroke-width="1.2"><circle cx="22" cy="28" r="8" fill="#6ba2d7" /><circle cx="134" cy="25" r="9" fill="#78bac8" /><circle cx="25" cy="93" r="7" fill="#95bee1" /><circle cx="135" cy="93" r="8" fill="#5d9ad1" /></g>
    </g>

    <g v-else-if="name === 'graph'" class="scene" stroke-linecap="round" stroke-linejoin="round">
      <rect x="29" y="21" width="110" height="82" rx="9" fill="#d4e7f9" />
      <rect class="paper-shadow" x="21" y="15" width="112" height="84" rx="9" fill="#fff" stroke="#a9c8e4" stroke-width="1.5" />
      <path d="m46 47 32-16 31 21-14 30-48-2zM46 47l49 35M78 31l-1 39M46 47l63 5" stroke="#82acd4" stroke-width="2" />
      <circle cx="46" cy="47" r="10" fill="#b8d9f5" stroke="#5187bb" stroke-width="1.5" />
      <rect x="70" y="23" width="16" height="16" rx="4" fill="#4e94d1" stroke="#3579b7" stroke-width="1.5" />
      <circle cx="109" cy="52" r="9" fill="#d0e7f9" stroke="#6a9ac5" stroke-width="1.5" />
      <path d="m95 70 11 18H84z" fill="#84bdca" stroke="#579eae" stroke-width="1.5" />
      <rect x="39" y="72" width="16" height="16" rx="4" fill="#8bbbe1" stroke="#5c95c4" stroke-width="1.5" />
      <circle cx="77" cy="70" r="5" fill="#fff" stroke="#6496c5" stroke-width="1.5" />
    </g>

    <g v-else-if="name === 'evidence'" class="scene" stroke-linecap="round" stroke-linejoin="round">
      <rect x="51" y="14" width="64" height="80" rx="7" fill="#d1e7fa" stroke="#a7c9e7" stroke-width="1.5" transform="rotate(6 83 54)" />
      <rect class="paper-shadow" x="29" y="23" width="68" height="80" rx="7" fill="#fff" stroke="#79a9d3" stroke-width="1.6" />
      <rect x="40" y="36" width="38" height="5" rx="2.5" fill="#6ca5d7" /><path d="M40 49h44M40 57h38" stroke="#c0d9ee" stroke-width="3" />
      <rect x="38" y="66" width="48" height="12" rx="3" fill="#d9eef3" /><path d="M43 72h33M40 87h36" stroke="#88b6d7" stroke-width="2.5" />
      <circle class="paper-shadow" cx="114" cy="76" r="20" fill="#f9fcff" stroke="#4c8bc5" stroke-width="2.4" />
      <path d="m129 91 11 12" stroke="#427db5" stroke-width="7" /><path d="m129 91 10 11" stroke="#86b2d8" stroke-width="3" />
      <path d="m105 76 6 6 12-13" stroke="#5ba7b6" stroke-width="3" />
    </g>

    <g v-else class="scene" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="80" cy="102" rx="43" ry="5" fill="#b9d8f4" />
      <path d="M31 64h23M114 64h19" stroke="#9ac2e4" stroke-width="2" stroke-dasharray="3 4" />
      <rect x="51" y="20" width="68" height="71" rx="9" fill="#d1e6fa" />
      <rect class="paper-shadow" x="44" y="15" width="68" height="73" rx="9" fill="#fff" stroke="#699ed0" stroke-width="1.7" />
      <rect x="52" y="24" width="52" height="7" rx="3" fill="#e1effb" />
      <path d="m61 53 28-12 9 30-31 2zM61 53l37 18" stroke="#72a5d3" stroke-width="2" />
      <circle cx="61" cy="53" r="7" fill="#a2ccee" stroke="#4d8bc1" stroke-width="1.3" /><circle cx="89" cy="41" r="7" fill="#5c9ed3" stroke="#4d8bc1" stroke-width="1.3" /><circle cx="98" cy="71" r="7" fill="#95c4d0" stroke="#5c9fb0" stroke-width="1.3" /><circle cx="67" cy="73" r="6" fill="#d0e5f7" stroke="#4d8bc1" stroke-width="1.3" />
      <rect class="paper-shadow" x="15" y="47" width="29" height="37" rx="5" fill="#fff" stroke="#a2c5e5" stroke-width="1.3" /><path d="M22 57h15M22 64h15M22 71h10" stroke="#a7cae6" stroke-width="2" />
      <rect x="124" y="47" width="23" height="30" rx="5" fill="#e4f0fb" stroke="#b2d1ea" stroke-width="1.3" /><path d="M130 55h11M130 62h8M130 69h11" stroke="#91b8da" stroke-width="2" />
      <circle cx="113" cy="88" r="13" fill="#2e7cba" stroke="#fff" stroke-width="3" /><path d="m107 88 4 4 8-9" stroke="#fff" stroke-width="2.3" />
    </g>
  </svg>
</template>

<script setup>
defineProps({ name: { type: String, required: true } });
</script>

<style scoped>
.research-illustration {
  display: block;
  width: 160px;
  height: 120px;
  flex: 0 0 auto;
  overflow: visible;
}
.paper-shadow { filter: drop-shadow(0 3px 3px rgb(27 80 132 / 9%)); }
.node-shadow { filter: drop-shadow(0 2px 2px rgb(27 80 132 / 8%)); }
</style>
