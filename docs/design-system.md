# TaskFlow Design System Snapshot

## Tokens
| Token | Value |
| --- | --- |
| Shell background | `#f8fafc` |
| Accent | `#6366f1` |
| Success | `#10b981` |
| Text | `#0f172a` |
| Border | `rgba(15,23,42,0.08)` |
| Radius | `24px cards / 12px chips` |

Spacing: 8px baseline, sections use 64px rhythm.

## Typography
- Display: 48px / 1.2, `font-semibold`
- Section heads: 32px / 1.3
- Body: 16px regular
- Meta: 12px uppercase

## Components
- `.app-shell` wraps hero to preview logged-in UI.
- `.card-surface` standardizes blur, border, and hover states.
- Swimlane cards use `border` + `hover:bg-indigo-50` interactions.

## Accessibility
- Skip link + focus rings.
- Semantic `nav`, `section`, `footer` landmarks.
- Color palette double-checked for contrast.

## Handoff
- `/blueprint` route includes sitemap, grid rules, motion, and dev checklist.
- Figma: `https://www.figma.com/file/gamemaker-taskflow/TaskFlow-Dashboard-Spec?type=design`.
