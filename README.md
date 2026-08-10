# LAWXYGEN Frontend V1

Frontend-first starter for the redesigned LAWXYGEN website.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- No database/backend dependency in UI components

## Why this structure?

The UI is split into:
- `components/` = visual building blocks
- `data/` = temporary frontend content
- `lib/api.ts` = future backend boundary

When the backend arrives, replace static data calls with API functions.
The page structure and styling do not need to be rewritten.

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Next UI steps

1. Final LAWXYGEN logo + navigation
2. Exact Nexaris-inspired typography and color refinement
3. 3 premium homepage directions
4. Services mega-menu
5. Service detail page template
6. Search
7. Responsive polish
8. Motion/interaction layer
9. Backend integration later through `lib/api.ts`
