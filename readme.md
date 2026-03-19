# @kszongic/prime-factors-cli

[![npm version](https://img.shields.io/npm/v/@kszongic/prime-factors-cli)](https://www.npmjs.com/package/@kszongic/prime-factors-cli)
[![license](https://img.shields.io/npm/l/@kszongic/prime-factors-cli)](./LICENSE)

Factorize integers into their prime factors from the command line. Zero dependencies.

## Install

```bash
npm i -g @kszongic/prime-factors-cli
```

## Usage

```bash
prime-factors 60
# 2 × 2 × 3 × 5

prime-factors 100 72
# 100 = 2 × 2 × 5 × 5
# 72 = 2 × 2 × 2 × 3 × 3

prime-factors 360 --exponent
# 2^3 × 3^2 × 5

prime-factors 60 --json
# {"input":60,"factors":[2,2,3,5]}
```

## Options

| Flag | Description |
|------|-------------|
| `--json` | Output as JSON |
| `--exponent` | Show exponent notation (e.g. `2^3 × 3`) |
| `-h, --help` | Show help |

## License

MIT © 2026 kszongic
