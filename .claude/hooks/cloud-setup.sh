#!/bin/bash
# Cloud-session setup (claude.ai/code). No-op on the laptop: CLAUDE_CODE_REMOTE is only set in the cloud VM.
[ "$CLAUDE_CODE_REMOTE" = "true" ] || exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0

[ -d node_modules ] || npm ci --no-audit --no-fund --loglevel=error
echo "Cloud setup: deps installed. Verify changes with npm run build."
exit 0
