# @kszongic/prime-factors-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/prime-factors-cli)](https://www.npmjs.com/package/@kszongic/prime-factors-cli)
[![npm downloads](https://img.shields.io/npm/dm/@kszongic/prime-factors-cli)](https://www.npmjs.com/package/@kszongic/prime-factors-cli)
[![license](https://img.shields.io/npm/l/@kszongic/prime-factors-cli)](./LICENSE)
[![node](https://img.shields.io/node/v/@kszongic/prime-factors-cli)](https://nodejs.org)
![zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)
![platform](https://img.shields.io/badge/platform-win%20%7C%20mac%20%7C%20linux-blue)

> Factorize integers into their prime factors from the command line. **Zero dependencies.**

```
$ prime-factors 360
2 x 2 x 2 x 3 x 3 x 5

$ prime-factors 360 --exponent
2^3 × 3^2 × 5
```

## Why?

Need to quickly check prime factors while coding, debugging crypto, or doing math homework? Instead of opening a browser and searching "prime factorization of 1234567", just:

```bash
npx @kszongic/prime-factors-cli 1234567
# 127 x 9721
```

- ⚡ **Instant** — no website, no Python, no calculator app
- 📦 **Zero dependencies** — installs in under a second
- 🖥️ **Cross-platform** — Windows, macOS, Linux
- 🔗 **Pipe-friendly** — JSON output for scripting

## Install

```bash
npm i -g @kszongic/prime-factors-cli
```

Or run directly without installing:

```bash
npx @kszongic/prime-factors-cli 42
```

## Usage

### Basic factorization

```bash
prime-factors 60
# 2 x 2 x 3 x 5
```

### Multiple numbers

```bash
prime-factors 100 72 360
# 100 = 2 x 2 x 5 x 5
# 72 = 2 x 2 x 2 x 3 x 3
# 360 = 2 x 2 x 2 x 3 x 3 x 5
```

### Exponent notation

```bash
prime-factors 360 --exponent
# 2^3 x 3^2 x 5

prime-factors 1000000 --exponent
# 2^6 x 5^6
```

### JSON output

```bash
prime-factors 60 --json
# {"input":60,"factors":[2,2,3,5]}

prime-factors 60 --json --exponent
# {"input":60,"factors":{"2":2,"3":1,"5":1}}
```

### Pipe into other tools

```bash
# Find the largest prime factor
prime-factors 2310 --json | jq '.factors[-1]'
# 11

# Batch factorize from a file
cat numbers.txt | xargs prime-factors --json
```

## Options

| Flag | Description |
|------|-------------|
| `<number> [number...]` | One or more positive integers to factorize |
| `--exponent` | Show exponent notation (e.g. `2^3 x 3`) |
| `--json` | Output as JSON (great for piping) |
| `-h, --help` | Show help |

## Recipes

### 🔑 RSA key analysis

```bash
# Quick check if a number is prime (single factor = prime)
prime-factors 997
# 997
# Just the number itself — it's prime!
```

### 📊 GCD / LCM helper

```bash
# Factorize two numbers to find GCD manually
prime-factors 120 84 --exponent
# 120 = 2^3 x 3 x 5
# 84 = 2^2 x 3 x 7
# GCD = 2^2 x 3 = 12
```

### 🧪 Project Euler / competitive programming

```bash
# Quick factorization during problem-solving
prime-factors 600851475143
```

### 📝 npm scripts

```json
{
  "scripts": {
    "factor": "prime-factors"
  }
}
```

## How It Works

Uses **trial division** — the simplest and most intuitive factorization algorithm:

1. Start with the smallest prime (2)
2. While the number is divisible, divide and record the factor
3. Move to the next candidate
4. Stop when the candidate exceeds √n

This is efficient for numbers up to ~10^15. For larger numbers, you'd need more advanced algorithms (Pollard's rho, quadratic sieve), but for CLI use this covers virtually all practical cases.

## Use Cases

- **Math homework** — quick factorization without leaving the terminal
- **Cryptography** — check if a number is prime, analyze key components
- **Competitive programming** — fast factor lookup during contests
- **Teaching** — demonstrate prime factorization interactively
- **Number theory exploration** — find patterns, verify conjectures

## Comparison

| Tool | Zero deps | Cross-platform | JSON output | Exponent notation | Install |
|------|-----------|---------------|-------------|-------------------|---------|
| **prime-factors-cli** | ✅ | ✅ Win/Mac/Linux | ✅ | ✅ | `npx @kszongic/prime-factors-cli` |
| `factor` (coreutils) | N/A | ❌ Unix only | ❌ | ❌ | Built-in (Linux) |
| Python one-liner | N/A | ✅ | Manual | Manual | Requires Python |
| Wolfram Alpha | N/A | ✅ (browser) | API only | ✅ | Browser / API key |
| Online calculators | N/A | ✅ (browser) | ❌ | Varies | None |

## Related

- [perfect-number-cli](https://github.com/kszongic/perfect-number-cli) — Check if numbers are perfect
- [roman-calc-cli](https://github.com/kszongic/roman-calc-cli) — Roman numeral arithmetic
- [happy-number-cli](https://github.com/kszongic/happy-number-cli) — Check happy numbers
- [pwd-entropy-cli](https://github.com/kszongic/pwd-entropy-cli) — Calculate password entropy
- [bar-chart-cli](https://github.com/kszongic/bar-chart-cli) — Visualize data in the terminal

## License

MIT © 2026 kszongic
