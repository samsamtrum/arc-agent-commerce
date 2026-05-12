#!/usr/bin/env bash
set -euo pipefail

# Optional manual recording helper. Requires a graphical session and ffmpeg.
# Usage: ./scripts/record-demo-with-ffmpeg.sh

mkdir -p videos
OUT="videos/arc-agent-commerce-demo-$(date +%Y%m%d-%H%M%S).mp4"
DISPLAY_ID="${DISPLAY:-:0.0}"
SIZE="${VIDEO_SIZE:-1440x1000}"
FPS="${VIDEO_FPS:-30}"

echo "Recording $DISPLAY_ID at $SIZE to $OUT"
echo "Press q in this terminal to stop."
ffmpeg -y -video_size "$SIZE" -framerate "$FPS" -f x11grab -i "$DISPLAY_ID" -pix_fmt yuv420p "$OUT"
