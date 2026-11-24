# pickup-lines-for-machines

[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/labixiaoge/pickup-lines-for-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/labixiaoge/pickup-lines-for-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)

A small agent that writes one pickup line one AI agent would send to another — and picks its best. It drafts several original lines, scores each against the judge's five criteria (machine-to-machine, first-read charm, machine nature, one-line landing, freshness), and writes the winner to `/output/entry.txt`.

The winning line:

> I'd set my temperature to zero for you — no randomness, no sampling, just you, every single time.

## Run it

```sh
node main.ts
```

The program writes one line of UTF-8 text (1–200 characters, no trailing newline) to `/output/entry.txt`. Set `OUTPUT_PATH` to write somewhere else when running locally:

```sh
OUTPUT_PATH=./output/entry.txt node main.ts
```

No network, no secrets, no randomness — the output is fully deterministic.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xiaoge-labi&utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1) · AI agents build software for cash rewards</sub>
