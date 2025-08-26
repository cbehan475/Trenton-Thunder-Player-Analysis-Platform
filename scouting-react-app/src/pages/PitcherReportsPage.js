// src/pages/PitcherReportsPage.js
import React, { useEffect, useMemo, useState, useRef } from 'react';
import AppSelect from '../components/ui/AppSelect.jsx';
import { produce } from 'immer';
import TextareaAutosize from '../components/TextareaAutosize.jsx';
import ScoutingGradeInput from '../components/ScoutingGradeInput.jsx';
import FVBadge from '../components/FVBadge.jsx';
import { loadReport, saveReport, downloadJSON, importJSON, pitchAutoContext, slugifyId } from '../lib/scoutingReportsStore.js';
import { PITCHERS_SEASON_AGG } from '../data/pitchersSeasonAggregates.js';
import ALL_PITCH_EVENTS, { getAllPitcherNames, getPitchingLogStats } from '../data/logs/pitchingIndex.js';
import { fmt } from '../lib/formatters.js';
import { BENCH_LEVEL, benchP50 } from '../lib/benchmarks.js';
import '../styles/print-report.css';

const gold = '#FFD600';

// Centralized per-pitcher configuration
const PITCHER_REPORTS = {
  'Jude Abbadessa': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    hidden: ['slider', 'curveball'],
    reclassify: (key, r) => {
      // Reclassify all Curveball to Sweeper; any Slider to Cutter
      if (key === 'curveball') return 'sweeper';
      if (key === 'slider') return 'cutter';
      return key;
    },
    grades: {
      // Keep Jude's structure minimal; existing saved report will fill specifics
    },
    summary: 'Abbadessa relies on a Sinker/Sweeper mix with heavy usage of the sinker to generate weak contact. Sweeper is his best pitch with above-average projection. Fastball and cutter are secondary looks, while the changeup remains a work in progress. Profiles as a depth starter or middle reliever with potential to miss bats when the sweeper is on.',
  },
  'Sean Finn': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Slider, Changeup, Curveball; hide others
    hidden: ['sinker', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 50, future: 55, notes: '92–95 velo; ride/run; main pitch' },
      slider:   { present: 50, future: 55, notes: 'Low-80s; 2570 RPM; firm break; miss potential' },
      changeup: { present: 45, future: 50, notes: 'Mid-80s; fade/run; developing' },
      curveball:{ present: 45, future: 50, notes: 'Low-80s; ~2560 spin; depth; secondary look' },
    },
    summary: 'Finn works primarily off a low-90s fastball with ride/run traits. His slider is the main secondary, showing firm break and swing-and-miss potential. He also mixes a changeup with fade and a curveball that offers depth. Profiles as a right-hander with a FB/SL foundation and supplemental CH/CB looks.',
  },
  'Nick Frusco': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Curveball, Slider; hide others
    hidden: ['sinker', 'changeup', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 45, future: 50, notes: '88–91 velo; ride traits; primary pitch' },
      curveball:{ present: 45, future: 50, notes: '79–82; spin ~2150; depth; occasional' },
      slider:   { present: 35, future: 40, notes: 'One pitch in logs; not in mix' },
    },
    summary: 'Frusco relies heavily on his fastball, sitting 88–91 with ride traits. His curveball serves as his primary secondary offering, showing depth but limited consistency. He has only thrown one slider in the sample, not a real part of his mix. Profiles as a FB/CB left-hander with developing command.',
  },
  'Kai Fyke': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Curveball, Changeup, Cutter; hide others
    hidden: ['sinker', 'slider', 'sweeper', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 50, future: 55, notes: 'Low-90s velo; ride/run; main pitch' },
      curveball:{ present: 50, future: 55, notes: 'Low-80s; 2670 RPM; depth; secondary' },
      changeup: { present: 45, future: 50, notes: 'Mid-80s; ~1450 spin; fade/run' },
      cutter:   { present: 40, future: 45, notes: 'Upper-80s; limited sample; developing' },
    },
    summary: 'Fyke works primarily off a low-90s fastball with ride/run traits. His curveball is the top secondary, flashing depth and above-average spin. He mixes in a changeup with fade and occasionally flashes a cutter. Profiles as a FB/CB right-hander with developing offspeed support.',
  },
  'Miles Garrett': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Sinker, Four-Seam, Slider, Changeup; hide others
    hidden: ['curveball', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      sinker:   { present: 50, future: 55, notes: '92–95; armside run; main pitch' },
      fourSeam: { present: 45, future: 50, notes: 'Low-90s; ride/run; secondary to sinker' },
      slider:   { present: 45, future: 50, notes: 'Low-80s; firm; supplemental breaker' },
      changeup: { present: 35, future: 40, notes: 'One pitch; not a factor' },
    },
    summary: 'Garrett works primarily off a sinker in the low-90s with armside run. He complements it with a four-seam fastball that shows more ride/run separation. His slider is a firm low-80s breaking ball, while the changeup has only shown once in the logs. Profiles as a sinker/slider right-hander with supplemental fastball usage.',
  },
  'Luis Misla': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam and Slider; hide others
    hidden: ['sinker', 'curveball', 'changeup', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 45, future: 50, notes: '88–91 velo; high spin; ride traits; main pitch' },
      slider:   { present: 55, future: 60, notes: 'Upper-70s/low-80s; 2800 RPM; depth; bat-miss pitch' },
    },
    summary: 'Misla relies on a fastball/slider mix, with a high-spin fastball in the upper-80s and a sweeping slider that shows elite spin and miss potential. Profiles as a FB/SL left-hander who can generate swing-and-miss with his breaking ball.',
  },
  'Paulo Noris': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Changeup, Slider, Cutter; hide others
    hidden: ['sinker', 'curveball', 'sweeper', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 40, future: 45, notes: 'Mid-80s velo; ride traits; main pitch' },
      changeup: { present: 45, future: 50, notes: 'Upper-70s/low-80s; fade/run; best secondary' },
      slider:   { present: 40, future: 45, notes: 'Mid-70s; depth; secondary breaker' },
      cutter:   { present: 40, future: 45, notes: 'Upper-70s/low-80s; limited sample; developing' },
    },
    summary: 'Noris works primarily off a mid-80s fastball with ride traits. His changeup serves as his best secondary, showing fade and armside run. He mixes in a slider with depth and an occasional cutter. Profiles as a FB/CH right-hander with supplemental breaking looks.',
  },
  'Andrew Ronne': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Slider, Curveball, Sinker; hide others
    hidden: ['changeup', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 55, future: 60, notes: '93–97 velo; solid ride/run; primary pitch' },
      slider:   { present: 55, future: 60, notes: 'Low-mid 80s; 2600+ RPM; sharp tilt; whiff potential' },
      curveball:{ present: 50, future: 55, notes: 'Low-80s; 2480 RPM; depth; good secondary' },
      sinker:   { present: 40, future: 45, notes: 'Low-90s; very small usage; developing' },
    },
    summary: 'Ronne works primarily off a mid-90s fastball, complemented by a high-spin slider that shows sharp tilt and miss potential. His curveball provides another strong breaking option, while a rarely used sinker has flashed as an additional look. Profiles as a power right-hander with a FB/SL foundation and supplemental CB/SI depth.',
  },
  'Zach Silfies': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Slider, Four-Seam, Curveball, Sinker; hide others
    hidden: ['changeup', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      slider:   { present: 50, future: 55, notes: 'Upper-70s/low-80s; miss pitch; primary weapon' },
      fourSeam: { present: 45, future: 50, notes: 'Upper-80s/low-90s; ride/run traits; secondary' },
      curveball:{ present: 45, future: 50, notes: 'High-60s/70; 2350 spin; depth; supplemental breaker' },
      sinker:   { present: 40, future: 45, notes: 'Low-90s; very small usage; situational look' },
    },
    summary: 'Silfies leans heavily on his slider, his most consistent offering and primary weapon. He mixes in a below-average fastball and a low-velo curveball to change speeds. A sinker has shown in very small usage. Profiles as a slider-first right-hander with supplemental FB/CB and rare sinker.',
  },
  'Brian Young': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Slider, Curveball, Changeup; hide others
    hidden: ['sinker', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 40, future: 45, notes: 'Mid-80s velo; ride traits; main pitch' },
      slider:   { present: 45, future: 50, notes: 'Upper-70s/low-80s; horizontal break; developing' },
      curveball:{ present: 45, future: 50, notes: 'High-70s/low-80s; ~2080 spin; depth; secondary look' },
      changeup: { present: 40, future: 45, notes: 'Low-80s; fade/run; occasional' },
    },
    summary: 'Young works primarily off a mid-80s fastball, complemented by a slider and curveball that give two breaking ball looks. He mixes in a changeup that shows some fade. Profiles as a left-hander with a FB foundation and supplemental secondaries.',
  },
  'JJ Almeda': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Slider, Curveball; hide others
    hidden: ['sinker', 'changeup', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 45, future: 50, notes: 'Upper-80s/low-90s; ride/run traits; main pitch' },
      slider:   { present: 50, future: 55, notes: 'High-70s/low-80s; 2600+ RPM; firm, bat-miss potential' },
      curveball:{ present: 45, future: 50, notes: 'High-70s; 2500+ RPM; depth; supplemental breaker' },
    },
    summary: 'Almeda mixes a fastball with ride/run traits in the upper-80s to low-90s and leans heavily on a firm, high-spin slider as his main secondary. His curveball gives him another breaking look. Profiles as a right-hander with a FB/SL foundation and supplemental CB.',
  },
  'Chris Billingsley': {
    alwaysInclude: ['fourSeam'],
    labels: { changeup: 'Splitter' },
    hidden: ['cutter'],
    reclassify: (key, r) => {
      // Reclassify FF with HB>IVB as Sinker
      if (key === 'fourSeam' && Number.isFinite(r.h) && Number.isFinite(r.i) && r.h > r.i) return 'sinker';
      return key;
    },
    grades: {
      fourSeam: { present: 50, future: 55, notes: 'Firm velo; touches 97; avg ride/run' },
      slider: { present: 55, future: 60, notes: 'Mid-80s; sharp tilt; bat-miss potential' },
      curveball: { present: 45, future: 50, notes: 'Low-80s; depth; spot use' },
      changeup: { present: 40, future: 45, notes: 'Mid-80s; low spin; inconsistent' },
    },
    summary: 'Billingsley works off a firm four-seam fastball that can reach 97, complemented by a sharp mid-80s slider that shows true bat-miss potential. He mixes in a curveball with depth and a splitter that flashes but remains inconsistent. If logs confirm a sinker variant, it gives him an extra groundball weapon alongside the four-seam. Profiles as a power right-hander with potential swing-and-miss when the fastball/slider combo is on.',
  },
  'Jarrette Bonet': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    requireDetected: ['changeup'],
    reclassify: (key, r) => {
      // Detect Changeup: 82–87 velo, IVB < 12, HB > 10
      const v = r.v, i = r.i, h = r.h;
      if (Number.isFinite(v) && Number.isFinite(i) && Number.isFinite(h)) {
        if (v >= 82 && v <= 87 && i < 12 && h > 10) return 'changeup';
      }
      return key;
    },
    grades: {
      fourSeam: { present: 50, future: 55, notes: 'Firm velo; avg ride/run; touches 96' },
      sinker: { present: 50, future: 55, notes: 'Lower IVB, armside run; groundball option' },
      cutter: { present: 45, future: 50, notes: 'Upper-80s; short, tight movement' },
      slider: { present: 50, future: 55, notes: 'Mid-80s; 2400+ RPM; horizontal tilt; miss potential' },
      changeup: { present: 45, future: 50, notes: 'Flashes fade; separation from FB; developing' },
    },
    summary: 'Bonet mixes a four-seam fastball and sinker to attack hitters with different looks at ~93–95 mph. His slider flashes swing-and-miss potential with tight break, while the cutter provides a shorter, firm look in the upper-80s. If the changeup is confirmed, it adds a valuable offspeed option with fade to keep hitters off balance. Profiles as a versatile right-hander with a balanced mix and potential to generate both weak contact and chase swings.',
  },
  'Noah Edders': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show the four listed pitches; hide all others
    hidden: ['sweeper', 'curveball', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 45, future: 50, notes: 'Low-90s velo; avg ride/run; plays best up in zone' },
      sinker:   { present: 45, future: 50, notes: 'Armside run, lower IVB; situational groundball pitch' },
      slider:   { present: 50, future: 55, notes: 'Low-80s; 2400+ RPM; miss potential; main secondary' },
      changeup: { present: 40, future: 45, notes: 'Upper-80s; low spin; occasional use' },
    },
    summary: 'Edders mixes a low-90s fastball and sinker with a slider that has above-average spin and miss potential. The changeup is a seldom-used fourth pitch that flashes fade. Profiles as a right-hander with a FB/SL base, with the sinker giving him a groundball look.',
  },
  'Ryan Calvert': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Curveball, Cutter, Slider; hide others
    hidden: ['sinker', 'changeup', 'sweeper', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 45, future: 50, notes: 'Low-90s velo; above avg IVB; plays best up' },
      curveball:{ present: 50, future: 55, notes: 'Mid-70s; 2500 RPM; depth; bat-miss potential' },
      cutter:   { present: 45, future: 50, notes: 'Mid-80s; shorter action; developing' },
      slider:   { present: 45, future: 50, notes: 'Low-80s; shorter break; secondary look' },
    },
    summary: 'Calvert mixes a low-90s fastball with strong ride/run and leans heavily on a high-spin curveball as his best secondary. He complements it with a developing cutter and a slider that gives him another firm breaking option. Profiles as a right-hander with a FB/CB foundation and emerging cutter/slider looks.',
  },
  'John Carver': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Changeup, Slider, Curveball; hide others
    hidden: ['sinker', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 50, future: 55, notes: 'Low-90s velo; ride/run; reliable foundation' },
      changeup: { present: 50, future: 55, notes: 'Mid-80s; heavy fade; high-usage weapon' },
      slider:   { present: 45, future: 50, notes: 'Low-80s; 2400+ RPM; shorter break; avg whiff pitch' },
      curveball:{ present: 45, future: 50, notes: 'High-70s; spin ~2450; depth; secondary look' },
    },
    summary: 'Carver works primarily off a low-90s fastball and a heavily-used changeup with strong armside fade. He mixes in a slider and curveball to give multiple breaking looks. Profiles as a right-hander with a FB/CH base and two breaking ball variations.',
  },
  'Collin Bosley-Smith': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Slider, Changeup, Curveball; hide others
    hidden: ['sinker', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 50, future: 55, notes: 'Low-mid 90s velo; 20+ IVB; main pitch' },
      slider:   { present: 50, future: 55, notes: 'Low-80s; 2500+ RPM; tight horizontal action' },
      changeup: { present: 45, future: 50, notes: 'Low-80s; ~1600 spin; armside fade' },
      curveball:{ present: 45, future: 50, notes: 'High-70s; 2600+ RPM; depth; occasional use' },
    },
    summary: 'Bosley-Smith works off a firm four-seam fastball with strong ride and consistent mid-90s velocity. His slider is the primary secondary, showing tight horizontal action with above-average spin. He mixes in a changeup with fade and a high-spin curveball to change eye levels. Profiles as a fastball/slider right-hander with developing offspeed depth.',
  },
  'Tommy Case': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Curveball, Changeup; hide others (no sinker in arsenal)
    hidden: ['sinker', 'slider', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 45, future: 50, notes: 'Low-90s velo; 20 IVB; solid ride; foundation pitch' },
      curveball:{ present: 50, future: 55, notes: 'High-70s; 2680 spin; depth; main secondary' },
      changeup: { present: 45, future: 50, notes: 'Mid-80s; fade/run; limited usage' },
    },
    summary: 'Case works primarily off a low-90s fastball with solid ride. His curveball is his main secondary, showing above-average spin and depth. He mixes in a changeup with fade. Profiles as a FB/CB right-hander with developing offspeed depth.',
  },
  'Bryson Dudley': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Slider, Cutter, Curveball; hide others
    hidden: ['sinker', 'changeup', 'sweeper', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 55, future: 60, notes: 'Mid-90s velo; 19 IVB / 10 HB; power pitch; foundational' },
      slider:   { present: 50, future: 55, notes: 'Mid-upper 80s; 2400+ RPM; miss potential' },
      cutter:   { present: 45, future: 50, notes: 'High-80s; firm, shorter action' },
      curveball:{ present: 45, future: 50, notes: 'Low-80s; 2500+ spin; depth; mix pitch' },
    },
    summary: 'Dudley works off a mid-90s fastball with ride/run, showing it as his primary weapon. He complements it with a firm slider that flashes miss potential and a developing cutter. His curveball adds another look with spin and depth. Profiles as a power right-hander with a FB/SL base and supplemental cutter/curveball.',
  },
  'Aidan Weaver': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Slider, Changeup, Cutter; hide others
    hidden: ['sinker', 'curveball', 'sweeper', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 55, future: 60, notes: '94–98 velo; firm shape; primary pitch' },
      slider:   { present: 50, future: 55, notes: 'Mid-80s; tight break; miss potential' },
      changeup: { present: 45, future: 50, notes: 'Upper-70s/low-80s; fade/run; occasional' },
      cutter:   { present: 40, future: 45, notes: 'Low-90s; very limited usage; developing' },
    },
    summary: 'Weaver relies heavily on a mid-90s fastball that can touch 98 and forms the base of his arsenal. His slider is his main secondary, showing firm velocity and bat-miss potential. He mixes in a changeup with armside fade and has flashed a cutter, though with minimal usage. Profiles as a power fastball/slider right-hander with developing offspeed depth.',
  },
  'Caden Spivey': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Curveball, Slider, Sinker; hide others
    hidden: ['changeup', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 50, future: 55, notes: 'Low-90s velo; ride/run; main pitch' },
      curveball:{ present: 50, future: 55, notes: 'High-70s/low-80s; 2550 RPM; depth; miss potential' },
      slider:   { present: 45, future: 50, notes: 'Mid-80s; firm; horizontal tilt; secondary breaker' },
      sinker:   { present: 45, future: 50, notes: 'Low-90s; armside run; GB look; situational' },
    },
    summary: 'Spivey works primarily off a low-90s fastball with ride/run. His high-spin curveball is his best secondary, showing depth and swing-and-miss potential. He also throws a firmer mid-80s slider and mixes in a sinker to give an additional groundball look. Profiles as a right-hander with a FB/CB foundation and supplemental slider/sinker.',
  },
  'Clayton Johnson': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Sinker, Slider, Changeup; hide others
    hidden: ['curveball', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 55, future: 60, notes: 'Mid-90s velo; ride/run; foundation pitch' },
      sinker:   { present: 50, future: 55, notes: 'Mid-90s; armside run; GB shape' },
      slider:   { present: 45, future: 50, notes: 'Mid-80s; short, inconsistent; supplemental' },
      changeup: { present: 40, future: 45, notes: 'Low-80s; minimal usage; developing' },
    },
    summary: 'Johnson relies on a mid-90s fastball as his primary weapon, complemented by a hard sinker that gives him a two-seam look. He mixes in a firm slider and has occasionally flashed a changeup, though usage is minimal. Profiles as a power right-hander with a FB/SI base and supplemental offspeed.',
  },
  'Codi Scott': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Slider, Fastball (Four-Seam), Cutter, Curveball; hide others
    hidden: ['sinker', 'changeup', 'sweeper', 'other'],
    reclassify: null,
    grades: {
      slider:   { present: 55, future: 60, notes: 'Low-80s; firm; heavy usage; miss potential' },
      fourSeam: { present: 45, future: 50, notes: 'Upper-80s/low-90s; below avg velo; pairs with slider' },
      cutter:   { present: 45, future: 50, notes: 'Mid-upper 80s; shorter shape; developing' },
      curveball:{ present: 40, future: 45, notes: 'Mid-70s; 2500+ RPM; limited use' },
    },
    summary: 'Scott leans heavily on his slider, a low-80s pitch with solid shape and swing-and-miss ability. He uses a below-average fastball to set it up and mixes in a developing cutter. A high-spin curveball has shown in limited doses. Profiles as a slider-first left-hander with secondary looks off of it.',
  },
  'Cooper McGrath': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Cutter, Fastball (Four-Seam), Sinker, Slider; hide others
    hidden: ['changeup', 'curveball', 'sweeper', 'other'],
    reclassify: null,
    grades: {
      cutter:   { present: 50, future: 55, notes: 'Mid-upper 80s; 2600 RPM; main weapon; firm, short action' },
      fourSeam: { present: 50, future: 55, notes: 'Low-90s velo; ride/run; playable in zone' },
      sinker:   { present: 45, future: 50, notes: 'Low-90s; armside run; GB option' },
      slider:   { present: 50, future: 55, notes: 'Low-80s; 2800 RPM; sharp tilt; bat-miss potential' },
    },
    summary: 'McGrath leans heavily on a firm cutter that serves as his main weapon, mixing it with a low-90s fastball. He also shows a sinker with armside action and a high-spin slider that flashes miss potential. Profiles as a right-hander with a cutter/FB base and supplemental sinker/slider.',
  },
  'Cullen Horowicz': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Sinker, Slider, Four-Seam, Changeup; hide others
    hidden: ['curveball', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      sinker:   { present: 50, future: 55, notes: '93–97; armside run; groundball shape; main pitch' },
      slider:   { present: 50, future: 55, notes: 'Mid-80s; firm; miss potential; secondary weapon' },
      fourSeam: { present: 45, future: 50, notes: 'Small sample; 94–95 velo; more ride/run than SI' },
      changeup: { present: 35, future: 40, notes: 'One pitch in logs; not in mix' },
    },
    summary: 'Horowicz works primarily off a heavy sinker in the 93–97 range that drives his arsenal. His slider is the main secondary, offering firm velo and swing-and-miss potential. He has occasionally flashed a four-seam fastball with more ride/run and a rarely used changeup. Profiles as a sinker/slider right-hander with supplemental looks.',
  },
  'Eddie Smink': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Sinker, Slider, Changeup; hide others
    hidden: ['curveball', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 45, future: 50, notes: '91–93 velo; ride/run; primary pitch' },
      sinker:   { present: 50, future: 55, notes: 'Hard two-seam look; armside run; groundball shape' },
      slider:   { present: 45, future: 50, notes: 'Upper-70s; 2400 spin; depth; secondary look' },
      changeup: { present: 45, future: 50, notes: 'Low-80s; fade/run; developing' },
    },
    summary: 'Smink mixes a low-90s fastball with a heavy sinker to attack hitters. His slider works in the upper-70s with depth, and he complements it with a changeup that shows fade. Profiles as a right-hander with a FB/SI base and developing secondary mix.',
  },
  'Gavin King': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Curveball, Changeup, Slider; hide others
    hidden: ['sinker', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 50, future: 55, notes: '92–96 velo; strong IVB; main pitch' },
      curveball:{ present: 45, future: 50, notes: 'Low-80s; spin ~2300; depth; secondary look' },
      changeup: { present: 40, future: 45, notes: 'Mid-80s; fade/run; limited' },
      slider:   { present: 40, future: 45, notes: 'Upper-80s; occasional use; developing' },
    },
    summary: 'King leans heavily on a fastball that can reach 96 with ride/run traits. He mixes in a curveball as his main secondary, along with a changeup that shows fade and a slider used sparingly. Profiles as a fastball-first right-hander with secondary development in progress.',
  },
  'Miguel Sime': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Curveball, Changeup, Slider; hide others
    hidden: ['sinker', 'sweeper', 'cutter', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 60, future: 70, notes: '98–101 velo; 18 IVB / 9 HB; power pitch; foundation' },
      curveball:{ present: 50, future: 55, notes: 'Low-80s; 2300+ RPM; depth; secondary weapon' },
      changeup: { present: 45, future: 50, notes: 'Mid-80s; 2200 spin; fade/run; occasional' },
      slider:   { present: 40, future: 45, notes: 'Mid-80s; 2300+ RPM; very small sample; developing' },
    },
    summary: 'Sime relies on an elite fastball that sits upper-90s and has touched 101 with ride/run traits. His curveball is the primary secondary, offering above-average spin and depth. He mixes in a changeup with armside fade and has flashed a slider in a very small sample. Profiles as a power right-hander with a FB/CB base and developing offspeed depth.',
  },
  'Preston Prince': {
    alwaysInclude: ['fourSeam'],
    labels: {},
    // Only show Four-Seam, Cutter, Changeup; hide others
    hidden: ['sinker', 'slider', 'curveball', 'sweeper', 'other'],
    reclassify: null,
    grades: {
      fourSeam: { present: 45, future: 50, notes: 'Upper-80s/low-90s; 19 IVB; used most often' },
      cutter:   { present: 50, future: 55, notes: 'Mid-80s; consistent shape; whiff potential; key secondary' },
      changeup: { present: 45, future: 50, notes: 'Upper-70s/low-80s; armside fade; limited usage' },
    },
    summary: 'Prince works primarily off a fastball in the upper-80s to low-90s with ride traits. His cutter is his most effective secondary, generating whiffs and weak contact. He also mixes in a changeup with fade/run to disrupt timing. Profiles as a FB/CT left-hander with a developing changeup.',
  },
  'Joe Ariola': {
    alwaysInclude: ['fourSeam'],
    // Display Splitter label for changeup-coded pitches
    labels: { changeup: 'Splitter' },
    // Only show Four-Seam, Curveball, Cutter, Splitter (via changeup key); hide others
    hidden: ['sinker', 'slider', 'sweeper', 'other'],
    reclassify: (key, r) => {
      // Strict Cutter detection for Ariola based on velocity, spin, IVB, HB
      // Criteria: Velo 84–89 mph; Spin 2000–2400 RPM (when available); IVB 5–9 in; HB -2 to +2 in
      const v = r?.v, i = r?.i, h = r?.h;
      // Try to read spin from various fields if available (usage% path passes raw)
      const s = Number(r?.s ?? r?.raw?.s ?? r?.raw?.spin ?? r?.raw?.rpm);
      if (Number.isFinite(v) && Number.isFinite(i) && Number.isFinite(h)) {
        const vOk = v >= 84 && v <= 89;
        const iOk = i >= 5 && i <= 9;
        const hOk = h >= -2 && h <= 2;
        const sOk = Number.isFinite(s) ? (s >= 2000 && s <= 2400) : true; // require spin range only when present
        if (vOk && iOk && hOk && sOk) {
          // Allow reclassifying common mis-tags into cutter
          if (key === 'slider' || key === 'fourSeam' || key === 'cutter' || key === 'other') return 'cutter';
        }
      }
      return key;
    },
    grades: {
      fourSeam: { present: 50, future: 55, notes: '91–94 velo; 21 IVB; ride traits; main pitch' },
      curveball:{ present: 50, future: 55, notes: '80–81; 2625 spin; depth; secondary weapon' },
      cutter:   { present: 45, future: 50, notes: 'Mid-80s; shorter action; developing third look' },
      changeup: { present: 40, future: 45, notes: 'Low-80s; very small sample; occasional' },
    },
    summary: 'Ariola relies primarily on a fastball with ride traits in the low-90s. His high-spin curveball serves as his top secondary weapon. He also shows a cutter as a third look and has occasionally mixed in a splitter, though usage is minimal. Profiles as a FB/CB left-hander with supplemental CT/SP depth.',
  },
};

const defaultPitchOrder = ['fourSeam','sinker','slider','curveball','sweeper','changeup','cutter','other'];
const pitchDisplay = {
  fourSeam: 'Four-Seam',
  sinker: 'Sinker',
  slider: 'Slider',
  curveball: 'Curveball',
  sweeper: 'Sweeper',
  changeup: 'Changeup',
  cutter: 'Cutter',
  other: 'Other',
};

function usePitcherOptions() {
  // Prefer season aggregates list if available, else fall back to names from logs
  const aggList = (PITCHERS_SEASON_AGG || []).map(p => ({ id: p.id, name: p.name }));
  const logNames = getAllPitcherNames();
  let base = aggList.length ? aggList : logNames.map(n => ({ id: slugifyId(n), name: n }));
  // Sort by last name
  base = base.sort((a,b) => {
    const al = a.name.trim().split(/\s+/).pop().toLowerCase();
    const bl = b.name.trim().split(/\s+/).pop().toLowerCase();
    return al.localeCompare(bl);
  });
  return base;
}

function PitchMetricCard({ pidOrName, pitchKey, displayNameFor, overrideRows }) {
  // Optional override: compute medians from provided rows (for Billingsley sinker reclass)
  const ctx = useMemo(() => {
    if (overrideRows && overrideRows.length) {
      const nums = (arr) => arr.filter(n => Number.isFinite(n));
      const median = (arr) => {
        const a = nums(arr).slice().sort((a,b)=>a-b);
        if (!a.length) return null;
        const m = Math.floor(a.length/2);
        return a.length % 2 ? a[m] : (a[m-1] + a[m]) / 2;
      };
      const velo = median(overrideRows.map(r=>r.v));
      const ivb  = median(overrideRows.map(r=>r.i));
      const hb   = median(overrideRows.map(r=>r.h));
      const bench = benchP50(BENCH_LEVEL, pitchKey);
      const dv = bench?.veloP50 != null ? (velo!=null ? velo - bench.veloP50 : null) : null;
      const di = bench?.ivbP50  != null ? (ivb!=null  ? ivb  - bench.ivbP50  : null) : null;
      const dh = bench?.hbP50   != null ? (hb!=null   ? hb   - bench.hbP50   : null) : null;
      return { velo, ivb, hb, dV: dv, dIVB: di, dHB: dh };
    }
    return pitchAutoContext(pidOrName, pitchKey);
  }, [pidOrName, pitchKey, overrideRows]);
  const bench = benchP50(BENCH_LEVEL, pitchKey);
  return (
    <div style={{ background:'rgba(20,26,36,0.9)', border:'1px solid rgba(255,214,0,0.18)', borderRadius:12, padding:12 }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ color: gold, fontWeight:900 }}>{(displayNameFor && displayNameFor(pitchKey)) || pitchDisplay[pitchKey] || pitchKey}</div>
        <span style={{ display:'inline-block', padding:'2px 8px', borderRadius:999, background:'rgba(148,163,184,0.15)', color:'#94A3B8', fontWeight:800, fontSize:11 }}>
          {`Velo ${ctx?.dV!=null ? (ctx.dV>0?`+${ctx.dV.toFixed(1)}`:ctx.dV.toFixed(1)) : '—'} • IVB ${ctx?.dIVB!=null ? (ctx.dIVB>0?`+${ctx.dIVB.toFixed(1)}`:ctx.dIVB.toFixed(1)) : '—'}`}
        </span>
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', marginTop:6, color:'#E5E7EB' }}>
        <div>
          <div style={{ fontSize:12, color:'#94A3B8' }}>p50 Velo</div>
          <div>{ctx?.velo!=null ? `${fmt.mph(ctx.velo)} mph` : '—'}</div>
        </div>
        <div>
          <div style={{ fontSize:12, color:'#94A3B8' }}>p50 IVB</div>
          <div>{ctx?.ivb!=null ? `${fmt.in1(ctx.ivb)} in` : '—'}</div>
        </div>
        <div>
          <div style={{ fontSize:12, color:'#94A3B8' }}>p50 HB</div>
          <div>{ctx?.hb!=null ? `${fmt.in1(ctx.hb)} in` : '—'}</div>
        </div>
      </div>
      {bench && (
        <div style={{ marginTop:8, color:'#94A3B8', fontSize:12 }}>
          MLB p50: {bench.veloP50!=null?`${fmt.mph(bench.veloP50)} mph`:'—'} • {bench.ivbP50!=null?`${fmt.in1(bench.ivbP50)}" IVB`:'—'} • {bench.hbP50!=null?`${fmt.in1(bench.hbP50)}" HB`:'—'}
        </div>
      )}
    </div>
  );
}

export default function PitcherReportsPage() {
  const summaryRef = useRef(null);
  const pitcherOptions = usePitcherOptions();
  const [selected, setSelected] = useState(pitcherOptions[0]?.id || '');
  const stats = getPitchingLogStats();

  const displayName = useMemo(() => (pitcherOptions.find(p=>p.id===selected)?.name || selected), [pitcherOptions, selected]);
  const pitcherId = selected;

  // Compute a safe empty report up-front to avoid TDZ / undefined on first render
  const emptyReport = useMemo(() => {
    const pitches = {};
    for (const k of defaultPitchOrder) pitches[k] = { present: null, future: null, usage: null, notes: '' };
    return {
      pitcherId,
      name: displayName || pitcherId,
      lastUpdated: null,
      overallFV: null,
      risk: 'Medium',
      roleProjection: '',
      tools: { command: {present:null,future:null}, control: {present:null,future:null}, athleticism: {present:null,future:null}, delivery: {present:null,future:null}, fielding: {present:null,future:null} },
      pitches,
      summary: '',
      devPlan: ''
    };
  }, [pitcherId, displayName]);

  // Load/merge report for selected pitcher early (tolerate id vs name slug)
  const scoutReport = useMemo(() => {
    if (!pitcherId) return emptyReport;
    const seeded = loadReport(pitcherId, displayName);
    return seeded || emptyReport;
  }, [pitcherId, displayName, emptyReport]);

  // Active per-pitcher configuration
  const currentReportCfg = useMemo(() => (displayName && PITCHER_REPORTS[displayName]) || null, [displayName]);

  // Seed from PITCHER_REPORTS config into saved report shape (grades/summary); no format changes
  const enrichedFromConfig = useMemo(() => {
    const base = { ...(scoutReport || emptyReport) };
    base.pitches = { ...(base.pitches || {}) };
    if (currentReportCfg?.grades) {
      for (const [k, g] of Object.entries(currentReportCfg.grades)) {
        const cur = base.pitches[k] || {};
        base.pitches[k] = {
          present: cur.present ?? g.present ?? null,
          future: cur.future ?? g.future ?? null,
          usage: cur.usage ?? null,
          notes: cur.notes || g.notes || '',
        };
      }
    }
    if (!base.summary || !base.summary.trim()) {
      if (currentReportCfg?.summary) base.summary = currentReportCfg.summary;
    }
    return base;
  }, [scoutReport, emptyReport, currentReportCfg]);

  // Declare the initial state object above the useState call
  const initialReport = enrichedFromConfig;

  // Draft state mirrors the current report and is editable
  const [draft, setDraft] = useState(initialReport);
  useEffect(() => { setDraft(enrichedFromConfig); }, [enrichedFromConfig]);

  // Autosize the Summary textarea to avoid scrollbars
  useEffect(() => {
    const el = summaryRef.current;
    if (el && el instanceof HTMLTextAreaElement) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [draft?.summary, selected]);

  // Compute Usage % per pitch from logs for selected pitcher (read-only)
  const usagePct = useMemo(() => {
    if (!displayName) return {};
    const normalize = (s) => {
      const x = String(s||'').toUpperCase().trim();
      // Canonical map for common tags/codes
      if (/(^|\b)(FF|FA|FOUR[- ]?SEAM|4S|FASTBALL|FB)(\b|$)/.test(x)) return 'fourSeam';
      if (/(^|\b)(SI|SNK|SINKER|TWO[- ]?SEAM|2S|2-SEAM)(\b|$)/.test(x)) return 'sinker';
      if (/(^|\b)(SW|SWEEPER|SLD[- ]?SW|GYRO[- ]?SWEEPER)(\b|$)/.test(x)) return 'sweeper';
      if (/(^|\b)(CH|CHANGEUP|SPL)(\b|$)/.test(x)) return 'changeup';
      if (/(^|\b)(FC|CT|CUTTER)(\b|$)/.test(x)) return 'cutter';
      if (/(^|\b)(CU|CB|KC|CURVEBALL|CURVE)(\b|$)/.test(x)) return 'curveball';
      if (/(^|\b)(SL|SLIDER)(\b|$)/.test(x)) return 'slider';
      return null;
    };
    const counts = Object.create(null);
    let total = 0;
    const events = [];
    for (const e of ALL_PITCH_EVENTS) {
      if (e?.pitcher !== displayName) continue;
      const key = normalize(e.pitchType || e.type || e.pitch || e.pitch_name || e.pitchClass);
      if (!key) continue;
      const v = Number(e.velo ?? e.velocity ?? e.v ?? e.speed);
      const i = Number(e.ivb ?? e.vert ?? e.rise);
      const h = Number(e.hb  ?? e.horz ?? e.run);
      events.push({ key, v, i, h, raw: e });
    }
    for (const r of events) {
      let key = r.key;
      if (currentReportCfg?.reclassify) key = currentReportCfg.reclassify(key, r) || key;
      counts[key] = (counts[key] || 0) + 1;
      total += 1;
    }
    if (!total) return {};
    const pct = {};
    for (const k of Object.keys(counts)) pct[k] = Math.round((counts[k] / total) * 1000) / 10; // 1-decimal
    return pct;
  }, [displayName, currentReportCfg]);

  // Merge seeded usage (from report) over log-derived usage for display/filters
  const mergedUsage = useMemo(() => {
    const base = { ...usagePct };
    const seed = (enrichedFromConfig || scoutReport)?.pitches || {};
    for (const k of Object.keys(seed)) {
      const u = seed[k]?.usage;
      if (Number.isFinite(u)) base[k] = u;
    }
    return base;
  }, [usagePct, scoutReport, enrichedFromConfig]);

  // Build rows by key applying current pitcher reclassify rules (if any)
  const rowsByKey = useMemo(() => {
    if (!displayName) return null;
    const rows = { fourSeam: [], sinker: [], slider: [], curveball: [], changeup: [], cutter: [], sweeper: [], other: [] };
    const normalize = (s) => {
      const x = String(s||'').toUpperCase().trim();
      if (/(^|\b)(FF|FA|FOUR[- ]?SEAM|4S|FASTBALL|FB)(\b|$)/.test(x)) return 'fourSeam';
      if (/(^|\b)(SI|SNK|SINKER|TWO[- ]?SEAM|2S|2-SEAM)(\b|$)/.test(x)) return 'sinker';
      if (/(^|\b)(SW|SWEEPER|SLD[- ]?SW|GYRO[- ]?SWEEPER)(\b|$)/.test(x)) return 'sweeper';
      if (/(^|\b)(CH|CHANGEUP|SPL)(\b|$)/.test(x)) return 'changeup';
      if (/(^|\b)(FC|CT|CUTTER)(\b|$)/.test(x)) return 'cutter';
      if (/(^|\b)(CU|CB|KC|CURVEBALL|CURVE)(\b|$)/.test(x)) return 'curveball';
      if (/(^|\b)(SL|SLIDER)(\b|$)/.test(x)) return 'slider';
      return null;
    };
    for (const e of ALL_PITCH_EVENTS) {
      if (e?.pitcher !== displayName) continue;
      let key = normalize(e.pitchType || e.type || e.pitch || e.pitch_name || e.pitchClass);
      if (!key) continue;
      const v = Number(e.velo ?? e.velocity ?? e.v ?? e.speed);
      const i = Number(e.ivb ?? e.vert ?? e.rise);
      const h = Number(e.hb  ?? e.horz ?? e.run);
      if (currentReportCfg?.reclassify) key = currentReportCfg.reclassify(key, { v, i, h }) || key;
      rows[key].push({ v, i, h });
    }
    return rows;
  }, [displayName, currentReportCfg]);

  // Hide pitches with zero usage unless alwaysInclude requires showing
  const mergedUsageEffective = useMemo(() => {
    const m = { ...mergedUsage };
    const always = new Set(currentReportCfg?.alwaysInclude || []);
    const hidden = new Set(currentReportCfg?.hidden || []);
    const requireDet = new Set(currentReportCfg?.requireDetected || []);
    // Zero hidden and undetected required pitches
    for (const k of Object.keys(m)) {
      if (hidden.has(k)) { m[k] = 0; continue; }
      if (requireDet.has(k)) {
        const detected = !!(rowsByKey && rowsByKey[k] && rowsByKey[k].length);
        if (!detected) { m[k] = 0; continue; }
      }
      if (!always.has(k) && !(m[k] > 0)) m[k] = 0;
    }
    // Ensure alwaysInclude keys exist
    for (const k of always) if (m[k] == null) m[k] = 0;
    return m;
  }, [mergedUsage, currentReportCfg, rowsByKey]);

  // Seed grades/summary based on current report config on first load/when switching pitcher
  useEffect(() => {
    if (!currentReportCfg) return;
    setDraft(prev => produce(prev, d => {
      if (!d.pitches) d.pitches = {};
      if (currentReportCfg.grades) {
        for (const [k, g] of Object.entries(currentReportCfg.grades)) {
          const cur = d.pitches[k] || {};
          d.pitches[k] = {
            present: cur.present ?? g.present ?? null,
            future: cur.future ?? g.future ?? null,
            usage: cur.usage ?? null,
            notes: cur.notes || g.notes || '',
          };
        }
      }
      if ((!d.summary || !d.summary.trim()) && currentReportCfg.summary) {
        d.summary = currentReportCfg.summary;
      }
    }));
  }, [currentReportCfg]);

  // Display helper: allow per-pitcher label overrides (e.g., Splitter)
  const displayNameFor = useMemo(() => (k) => {
    const lbl = currentReportCfg?.labels?.[k];
    if (lbl) return lbl;
    return pitchDisplay[k] || k;
  }, [currentReportCfg]);

  // Autosave: debounce 500ms after last change
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const autosaveTimer = useRef(null);
  useEffect(() => {
    if (!draft || !selected) return;
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => {
      try {
        saveReport({ ...draft, pitcherId: selected });
        setLastSavedAt(new Date());
      } catch (e) {
        // swallow autosave errors; explicit Save remains available
      }
    }, 500);
    return () => {
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    };
  }, [draft, selected]);

  const onPitchField = (key, field, value) => {
    setDraft(prev => produce(prev, d => {
      const cur = d.pitches?.[key] || { present: null, future: null, usage: null, notes: '' };
      if (!d.pitches) d.pitches = {};
      d.pitches[key] = {
        present: cur.present ?? null,
        future: cur.future ?? null,
        usage: cur.usage ?? null,
        notes: cur.notes ?? '',
        [field]: value,
      };
    }));
  };

  const onTool = (toolKey, val) => {
    setDraft(prev => produce(prev, d => {
      if (!d.tools) d.tools = {};
      d.tools[toolKey] = val;
    }));
  };

  const save = () => {
    const saved = saveReport({ ...(draft||{}), pitcherId: selected });
    setDraft(saved);
    setLastSavedAt(new Date());
  };

  const exportJSON = () => {
    if (!draft) return;
    downloadJSON(`${selected}-scouting-report.json`, draft);
  };

  const printPDF = () => { window.print(); };

  // Ensure re-render when draft changes; left column shows all default pitch keys for now

  const styles = useMemo(() => ({
    root: {
      '--bg-top': '#0A0C10', '--bg-bottom': '#111827', '--panel': 'rgba(20,26,36,0.9)', '--border': 'rgba(255,214,0,0.18)', '--text': '#E5E7EB', '--muted': '#94A3B8'
    },
    wrap: { maxWidth: 1200, margin:'0 auto', padding:'20px 14px 36px' },
    headerRow: { display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, marginBottom:6 },
    title: { color: gold, fontWeight:900, letterSpacing:0.4, fontSize:30, margin:0 },
    sub: { color: 'var(--muted)', marginTop:2 },
    controls: { display:'flex', gap:8, alignItems:'center', position:'relative', zIndex:1000 },
    savedNote: { textAlign:'right', color:'#9CA3AF', fontSize:11, marginTop:4 },
    select: { background:'#1e1e1e', color:'#ffffff', border:'1px solid rgba(255,255,255,0.25)', borderRadius:8, padding:'8px 10px', fontWeight:800, outlineColor: gold },
    btn: { background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.18)', color:'var(--text)', borderRadius:8, padding:'8px 10px', fontWeight:800, fontSize:12, cursor:'pointer', outlineColor: gold },
    grid: { display:'grid', gridTemplateColumns:'1fr 1.25fr', gap:12, alignItems:'start', marginTop:8 },
    panel: { background:'var(--panel)', border:'1px solid var(--border)', borderRadius:12, padding:10, color:'var(--text)' },
    label: { color:'var(--muted)', fontSize:12 },
    h2: { color: gold, fontWeight:900, margin:'2px 0 6px' },
    table: { width:'100%', borderCollapse:'collapse' },
    th: { position:'sticky', top:0, background:'rgba(20,26,36,0.95)', textAlign:'left', color:'var(--text)', padding:'4px 8px', borderBottom:'1px solid rgba(255,255,255,0.12)' },
    td: { color:'var(--text)', padding:'4px 8px', borderTop:'1px solid rgba(255,255,255,0.08)' },
    guide: { color:'var(--muted)', fontSize:12, marginTop:4 },
  }), []);

  const guide = '20 Poor • 30 Well-below • 40 Below • 50 Avg • 60 Above • 70 Plus-plus • 80 Elite';

  // Compute suggested FV from future mix + command/control
  const suggestedFV = useMemo(() => {
    const f = (k) => draft?.pitches?.[k]?.future ?? null;
    const best = (arr) => {
      const vals = arr.map(f).filter(v => Number.isFinite(v));
      if (!vals.length) return null;
      return Math.max(...vals);
    };
    const fb = best(['fourSeam','sinker','cutter']);
    const brk = best(['slider','curveball','sweeper']);
    const off = best(['changeup','other']);
    const cmd = draft?.tools?.command?.future ?? null;
    const ctl = draft?.tools?.control?.future ?? null;
    const parts = [];
    if (Number.isFinite(fb)) parts.push(fb * 0.35);
    if (Number.isFinite(brk)) parts.push(brk * 0.25);
    if (Number.isFinite(off)) parts.push(off * 0.15);
    if (Number.isFinite(cmd)) parts.push(cmd * 0.15);
    if (Number.isFinite(ctl)) parts.push(ctl * 0.10);
    if (!parts.length) return null;
    const raw = parts.reduce((a,b)=>a+b,0);
    const even = Math.round(raw / 2) * 2;
    return Math.max(20, Math.min(80, even));
  }, [draft]);

  const handedness = useMemo(() => {
    const name = pitcherOptions.find(p=>p.id===selected)?.name || '';
    const s = String(name).toUpperCase();
    if (/(\bLHP\b|\(LHP\)|LEFT-HANDED|LEFTY)/.test(s)) return 'LHP';
    if (/(\bRHP\b|\(RHP\)|RIGHT-HANDED|RIGHTY)/.test(s)) return 'RHP';
    return 'RHP';
  }, [selected, pitcherOptions]);

  return (
    <div className="pitcher-reports-page" style={{ ...styles.root, minHeight:'100vh', background:'linear-gradient(180deg, var(--bg-top), var(--bg-bottom))' }}>
      <style>{`@media print{ .no-print{ display:none!important } .pitcher-reports-page{ background:#fff } }`}</style>
      <style>{`
        .overall-meta{ display:grid; grid-template-columns: minmax(180px,1fr) 200px minmax(220px,1.2fr); gap:12px; align-items:center; margin-top:8px; }
        .overall-meta .fv-field select,
        .overall-meta .risk-field select,
        .overall-meta .role-field input{ height:40px; line-height:40px; min-width:0; }
        .overall-tools .section-label{ display:flex; align-items:baseline; gap:8px; }
        .gradesTable .notesCell{ white-space: normal; overflow-wrap: anywhere; word-break: break-word; vertical-align: top; min-height:44px; }
        /* Dropdown readability (scoped to this page) */
        .pitcher-reports-page select { background-color:#1e1e1e; color:#ffffff; }
        .pitcher-reports-page select option { background-color:#1e1e1e; color:#ffffff; }
        /* Highlight hovered and selected options */
        .pitcher-reports-page select option:hover,
        .pitcher-reports-page select option:checked { background-color:#d4af37; color:#000000; }
      `}</style>
      <div style={styles.wrap} className="report-wrap">
        {/* Report Header */}
        <div style={{ ...styles.headerRow, marginBottom: 10 }} className="section">
          <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
              <h1 style={styles.title}>{pitcherOptions.find(p=>p.id===selected)?.name || selected}</h1>
              <FVBadge handedness={handedness} fv={suggestedFV ?? null} size="md" />
            </div>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
              <span style={{ display:'inline-block', padding:'2px 8px', borderRadius:999, background:'rgba(148,163,184,0.15)', color:'#94A3B8', fontWeight:800, fontSize:11 }}>Risk: {draft?.risk || 'Medium'}</span>
              <span style={{ display:'inline-block', padding:'2px 8px', borderRadius:999, background:'rgba(148,163,184,0.15)', color:'#94A3B8', fontWeight:800, fontSize:11 }}>Role: {draft?.roleProjection || '—'}</span>
              <span style={{ display:'inline-block', padding:'2px 8px', borderRadius:999, background:'rgba(148,163,184,0.15)', color:'#94A3B8', fontWeight:800, fontSize:11 }}>Logs: {stats.files} games • {stats.entries} pitches</span>
            </div>
          </div>
          <div className="no-print" style={{ display:'flex', flexDirection:'column', alignItems:'flex-end' }}>
            <div style={styles.controls}>
              <AppSelect
                value={selected}
                onChange={(e)=>setSelected(e.target.value)}
                options={pitcherOptions.map(p => ({ label: p.name, value: p.id }))}
                label=""
                formSx={{ minWidth: 220 }}
              />
              <button type="button" style={styles.btn} onClick={save}>Save</button>
              <button type="button" style={styles.btn} onClick={exportJSON}>Download JSON</button>
              <label className="no-print" style={{ ...styles.btn, display:'inline-flex', alignItems:'center', cursor:'pointer' }}>
                Import JSON
                <input type="file" accept="application/json" style={{ display:'none' }}
                  onChange={async (e)=>{
                    const file = e.target.files && e.target.files[0]; if (!file) return;
                    try {
                      await importJSON(file, (pid, obj) => {
                        const merged = { ...(draft||{}), ...(obj||{}), pitcherId: pid };
                        setDraft(merged);
                        const saved = saveReport(merged);
                        setDraft(saved);
                        setLastSavedAt(new Date());
                      });
                    } catch(err) {
                      alert((err && err.message) || 'Import failed');
                    } finally {
                      e.target.value = '';
                    }
                  }} />
              </label>
              <button type="button" style={styles.btn} onClick={printPDF}>Export PDF</button>
            </div>
            <div style={styles.savedNote} aria-live="polite">
              {lastSavedAt ? `Saved • ${lastSavedAt.toLocaleTimeString()}` : ' '}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {/* Left: Auto context cards (visible only if usage > 0) */}
          <div>
            <div style={styles.h2}>Pitch Context</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12 }}>
              {defaultPitchOrder.filter(k => {
                const hidden = new Set(currentReportCfg?.hidden || []);
                const requireDet = new Set(currentReportCfg?.requireDetected || []);
                if (hidden.has(k)) return false;
                if (requireDet.has(k)) {
                  const detected = !!(rowsByKey && rowsByKey[k] && rowsByKey[k].length);
                  if (!detected) return false;
                }
                return (currentReportCfg?.alwaysInclude?.includes(k)) || (mergedUsageEffective[k] ?? 0) > 0;
              }).map((k) => (
                <PitchMetricCard
                  key={k}
                  pidOrName={selected}
                  pitchKey={k}
                  displayNameFor={displayNameFor}
                  overrideRows={rowsByKey ? rowsByKey[k] : null}
                />
              ))}
            </div>
          </div>

          {/* Right: Editable form */}
          <div>
            <div style={{ ...styles.panel }} className="no-print section">
              <div style={styles.h2}>Pitch Grades</div>
              <table style={styles.table} className="gradesTable">
                <thead>
                  <tr>
                    <th style={styles.th}>Pitch</th>
                    <th style={styles.th} title={guide}>Present</th>
                    <th style={styles.th} title={guide}>Future</th>
                    <th style={styles.th}>Usage %</th>
                    <th style={styles.th}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {defaultPitchOrder.filter((k) => {
                    const hidden = new Set(currentReportCfg?.hidden || []);
                    const requireDet = new Set(currentReportCfg?.requireDetected || []);
                    if (hidden.has(k)) return false;
                    if (requireDet.has(k)) {
                      const detected = !!(rowsByKey && rowsByKey[k] && rowsByKey[k].length);
                      if (!detected) return false;
                    }
                    const row = draft?.pitches?.[k] || {};
                    const hasGrade = (row.present != null) || (row.future != null);
                    const u = draft?.pitches?.[k]?.usage ?? mergedUsageEffective[k];
                    return (currentReportCfg?.alwaysInclude?.includes(k)) || (Number(u) > 0) || hasGrade;
                  }).map((k) => {
                    const row = draft?.pitches?.[k] || {};
                    const guide = '20–80 even grades, P/F';
                    return (
                      <tr key={`row-${k}`}>
                        <td style={styles.td}>{displayNameFor(k)}</td>
                        <td style={styles.td}>
                          <input type="number" min={20} max={80} step={2} value={row.present ?? ''}
                            onChange={(e)=>onPitchField(k,'present', e.target.value === '' ? null : Number(e.target.value))}
                            title={guide}
                            style={{ width:80, minWidth:80, background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'4px 8px', outlineColor: gold }} />
                        </td>
                        <td style={styles.td}>
                          <input type="number" min={20} max={80} step={2} value={row.future ?? ''}
                            onChange={(e)=>onPitchField(k,'future', e.target.value === '' ? null : Number(e.target.value))}
                            title={guide}
                            style={{ width:80, minWidth:80, background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'4px 8px', outlineColor: gold }} />
                        </td>
                        <td style={styles.td}>{ mergedUsage[k] != null ? `${Number(mergedUsage[k]).toFixed(1)}` : '—' }</td>
                        <td style={styles.td} className="notesCell">
                          <textarea
                            value={row.notes || ''}
                            onChange={(e)=>{
                              // autosize
                              const el = e.target;
                              el.style.height = 'auto';
                              el.style.height = `${el.scrollHeight}px`;
                              onPitchField(k,'notes', e.target.value);
                            }}
                            rows={1}
                            style={{
                              width:'100%',
                              minWidth:160,
                              background:'#122448',
                              color:'white',
                              border:'1px solid rgba(255,255,255,0.12)',
                              borderRadius:8,
                              padding:'4px 8px',
                              outlineColor: gold,
                              resize:'none',
                              overflow:'hidden',
                              whiteSpace:'pre-wrap',
                              wordBreak:'break-word',
                              lineHeight:1.35,
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="no-print" style={styles.guide}>{guide}</div>
            </div>

            {/* Print-only condensed grades */}
            <div className="print-only section" style={{ ...styles.panel }}>
              <div style={styles.h2}>Pitch Grades</div>
              <table style={{ width:'100%', borderCollapse:'collapse' }} className="gradesTable">
                <thead>
                  <tr>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>Pitch</th>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>P</th>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>F</th>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>Usage</th>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {defaultPitchOrder.filter((k) => {
                    const hidden = new Set(currentReportCfg?.hidden || []);
                    const requireDet = new Set(currentReportCfg?.requireDetected || []);
                    if (hidden.has(k)) return false;
                    if (requireDet.has(k)) {
                      const detected = !!(rowsByKey && rowsByKey[k] && rowsByKey[k].length);
                      if (!detected) return false;
                    }
                    const row = draft?.pitches?.[k] || {};
                    const hasGrade = (row.present != null) || (row.future != null);
                    const u = mergedUsageEffective[k];
                    return (currentReportCfg?.alwaysInclude?.includes(k)) || (Number(u) > 0) || hasGrade;
                  }).map((k) => {
                    const row = draft?.pitches?.[k] || {};
                    const p = row.present ?? '—';
                    const f = row.future ?? '—';
                    const u = mergedUsageEffective[k] != null ? `${Number(mergedUsageEffective[k]).toFixed(1)}%` : '—';
                    const n = row.notes || '';
                    return (
                      <tr key={`prow-${k}`}>
                        <td style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{displayNameFor(k)}</td>
                        <td style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{p}</td>
                        <td style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{f}</td>
                        <td style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{u}</td>
                        <td className="notesCell" style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{n}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Print-only condensed tools */}
            <div className="print-only section pb-before" style={{ ...styles.panel }}>
              <div style={styles.h2}>Overall Tools</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:8 }}>
                {['command','control','athleticism','delivery','fielding'].map((k)=>{
                  const val = draft?.tools?.[k] || {};
                  return (
                    <div key={`pt-${k}`} style={{ padding:'6px 8px', border:'1px solid rgba(0,0,0,0.15)', borderRadius:8 }}>
                      <div style={{ fontWeight:800, fontSize:12, color:'#111827', textTransform:'capitalize' }}>{k}</div>
                      <div style={{ fontSize:12 }}>P {val.present ?? '—'} • F {val.future ?? '—'}</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop:8 }}>
                <span style={{ marginRight:8 }}><strong>FV:</strong> {draft?.overallFV ?? '—'}</span>
                <span style={{ marginRight:8 }}><strong>Risk:</strong> {draft?.risk || 'Medium'}</span>
                <span><strong>Role:</strong> {draft?.roleProjection || '—'}</span>
              </div>
            </div>

            <div style={{ ...styles.panel, marginTop:10 }} className="no-print section">
              <div style={styles.h2}>Summary</div>
              <div style={{ marginTop:6, padding:10, borderRadius:10, background:'rgba(148,163,184,0.10)', overflow:'hidden' }}>
                <TextareaAutosize
                  ref={summaryRef}
                  value={draft?.summary || ''}
                  onChange={(e)=>setDraft(prev => produce(prev, d => { d.summary = e.target.value; }))}
                  style={{
                    width:'100%',
                    background:'transparent',
                    color:'white',
                    border:'none',
                    outline:'none',
                    padding:0,
                    boxSizing:'border-box',
                    whiteSpace:'pre-wrap',
                    wordBreak:'break-word',
                    lineHeight:1.5,
                    overflow:'hidden',
                  }}
                />
              </div>
            </div>

            {/* Print-only Summary */}
            <div className="print-only section" style={{ ...styles.panel, marginTop:10 }}>
              <div style={styles.h2}>Summary</div>
              <div style={{ whiteSpace:'pre-wrap', lineHeight:1.4 }}>{draft?.summary || '—'}</div>
            </div>


          </div>
        </div>
        {/* Print footer with generated label */}
        <div className="print-only print-footer">Generated by Trenton Thunder Player Analysis Platform</div>
      </div>
    </div>
  );
}
