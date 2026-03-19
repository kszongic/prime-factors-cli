#!/usr/bin/env node
'use strict';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h') || args.length === 0) {
  console.log(`Usage: prime-factors <number> [number...]

Factorize integers into their prime factors.

Options:
  --json       Output as JSON
  --exponent   Show exponent notation (e.g. 2^3 × 3)
  -h, --help   Show this help

Examples:
  prime-factors 60          # 2 × 2 × 3 × 5
  prime-factors 100 72      # factorize multiple numbers
  prime-factors 60 --json   # {"input":60,"factors":[2,2,3,5]}
  prime-factors 360 --exponent  # 2^3 × 3^2 × 5`);
  process.exit(0);
}

const jsonMode = args.includes('--json');
const exponentMode = args.includes('--exponent');
const nums = args.filter(a => !a.startsWith('--'));

function primeFactors(n) {
  if (n < 2) return [];
  const factors = [];
  for (let d = 2; d * d <= n; d++) {
    while (n % d === 0) {
      factors.push(d);
      n /= d;
    }
  }
  if (n > 1) factors.push(n);
  return factors;
}

function toExponent(factors) {
  if (factors.length === 0) return '';
  const counts = [];
  let prev = factors[0], count = 1;
  for (let i = 1; i < factors.length; i++) {
    if (factors[i] === prev) { count++; }
    else { counts.push([prev, count]); prev = factors[i]; count = 1; }
  }
  counts.push([prev, count]);
  return counts.map(([p, e]) => e > 1 ? `${p}^${e}` : `${p}`).join(' × ');
}

let exitCode = 0;

for (const raw of nums) {
  const n = parseInt(raw, 10);
  if (isNaN(n) || n < 1 || !Number.isSafeInteger(n)) {
    console.error(`Error: "${raw}" is not a valid positive integer`);
    exitCode = 1;
    continue;
  }
  const factors = primeFactors(n);
  if (jsonMode) {
    console.log(JSON.stringify({ input: n, factors }));
  } else if (exponentMode) {
    const label = nums.length > 1 ? `${n} = ` : '';
    console.log(n < 2 ? `${label}${n}` : `${label}${toExponent(factors)}`);
  } else {
    const label = nums.length > 1 ? `${n} = ` : '';
    console.log(n < 2 ? `${label}${n}` : `${label}${factors.join(' × ')}`);
  }
}

process.exit(exitCode);
