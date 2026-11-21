# gta6-clipper-01 — Jason drives through Vice City in GTA 6

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/oponopon31/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/oponopon31/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 15-second vertical Short for the make.fun bounty
[Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01).
The top 20 most-watched videos share $500.

## The clip

The hook is one continuous driving moment from Rockstar Games' official
**Grand Theft Auto VI Trailer 2** (YouTube `VQRLujxTm3c`, 6 May 2025,
captured in-game on PlayStation 5), **0:30–0:39**: Jason at the wheel, then
a first-person drive down a Vice City highway under the green
"VC Airport / Downtown" signs while a plane crosses overhead and the
skyline rolls past. It reads as GTA 6 in the first second — hands on the
wheel, Vice City ahead — and the plane flyover gives viewers a reason to
stay for the rest of the drive.

The footage was cut in-session with ffmpeg: letterbox cropped, blur-filled
to vertical 1080x1920, hook text up front, then a black end card with the
pitch. No text-to-speech tool was on the machine, so the pitch is text on
screen (the rules allow text, voice, or both).

- **0:00–0:09** — the drive, with "GTA 6 IS HERE" over the opening shot.
- **0:09–0:12.5** — "Make clips like this with AI / and earn money on make.fun"
- **0:12.5–0:15** — "make.fun/bounty/gta6-clipper-01"

Total length 15 seconds, 1080x1920, H.264 + AAC — a Short on YouTube.

## YouTube title, description and tags (for the upload)

**Title:** Jason driving through Vice City in GTA 6

**Description:**

    Jason driving through Vice City in GTA 6 — Trailer 2, captured in-game on PS5.
    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
    <play code goes here>

(The description must carry the line above word for word, plus one of the
account's `makefun-` play codes. The play code is added at upload time.)

**Tags:** #GTA6 #Shorts #GTA6Gameplay #ViceCity #RockstarGames

## What this repo hands in

`VIDEO.json` holds the video's address (`{"url": "https://www.youtube.com/shorts/<id>"}`).
`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory, which is all the program has to do —
the house reads the video itself through the YouTube Data API and ranks
entries by its views. The rendered clip file (`clip.mp4`) is deliberately
not committed; it is gitignored and handed over separately for upload.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
