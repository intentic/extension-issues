# intentic-issues

Installs as **`intentic.issues`**, from the registry (Extensions → Browse) or by repository URL at a commit. A
first-party intentic extension that is LISTED rather than baked into the sandbox: a sandbox is itself without it,
so it arrives only where someone reaches for it. Moved out of the monorepo at `intentic/intentic@41f72ba4aae6`
(`_extensions/issues` there; this repository is where it lives now).

**Issues** — the inbox of bugs the owner's own users hit, arriving from the reporter SDK embedded on their
sites and apps. A first-party rail extension; the other half of the wire is `_sandbox/sandbox/src/issues/` in intentic/intentic.

## What this page is, and is not

- **The list is groups, not events.** A crash that hit a thousand browsers is *one row with a count*, because
  the daemon fingerprints every report before storing it (`issues/fingerprint.ts`). That is what makes the page
  readable at all, and it is also why the count is the number to sort your afternoon by.
- **Nothing here creates an issue.** Reports arrive at a public `/intake/…` endpoint and the daemon writes
  them. This side triages: put an agent on one, file it away, reopen it, forget it. That is the difference from
  Drafts, which this page is otherwise shaped like — a draft is *authored* by the agent and approved here.
- **What came back is the loudest thing on the page.** The daemon reopens a resolved group when it happens
  again, so an open row that has already had a turn is a fix that did not hold. It gets a warning tone and a
  "Came back" badge; a merely new crash gets neither, because new is the resting state of this list.
- **The evidence opens under the row.** Deciding whether a bug deserves a turn means reading the stack and the
  breadcrumbs, and a decision that needs a navigation is one people make from the title alone.

## Things worth knowing before you edit this

- **Everything in `IssueEvidence.vue` came from a stranger's browser** — the message, the stack, the sentence a
  person typed, the name they claim. It is rendered as text, never as markup, and the reporter's name carries
  the word *unverified* because nothing signed it.
- **`open` rows deliberately carry no status badge.** They are the majority of the list; a badge on every row
  is a badge nobody reads. `issueText.ts` owns that judgment and is tested for it.
- **`SplitView` and `DisclosureRow` have no default slot.** Body content goes in `#detail` and expanded row
  content in `#below`; a bare child of either is silently dropped, which renders as a heading with nothing
  under it. Both are easy to write and impossible to notice in a diff.
- **The badge reads from module state, not from the view** (`extension.ts`). A count that only updated while
  somebody was already reading the inbox could never tell them anything — and, since the badge is also what
  seats the rail tile, could never seat it either.
- **Ten-minute poll, not one.** Every way the number changes is a write under `.intentic/records/issues/`, and
  the manifest's `contributes.files` binding pushes those. The interval is only the frame nobody delivered.
- **Starting a turn is the maintainer floor**, matching the daemon's own gate on the routes. Below it the page
  is a read, which is exactly what a viewer is for.

## Commands

```sh
./node_modules/.bin/vitest run
vue-tsc --noEmit
```

## Key files

- [src/IssuesView.vue](src/IssuesView.vue): the inbox — three sections, in the order they owe a decision.
- [src/IssueEvidence.vue](src/IssueEvidence.vue): the most recent occurrence in full, under the row.
- [src/issueText.ts](src/issueText.ts): the wording and the judgments, kept testable outside a component.
- [src/useIssues.ts](src/useIssues.ts): the query and the three triage mutations.
- [src/extension.ts](src/extension.ts): activation, and the badge that seats the rail tile.

## Building and publishing

```sh
pnpm install     # pnpm, not npm: pnpm-workspace.yaml carries the build approvals the install needs
pnpm build       # dist/ — the UI bundle the host blob-imports
pnpm typecheck
pnpm test        # the source (vitest), then the manifest and the BUILT bundle against a host stub (node --test)
```

`dist/` **is committed**: there is no build step at install time, so the sha you publish is literally the code
that runs in the owner's browser. Build before the commit, or a stale `dist` publishes stale behaviour under a
sha whose source says otherwise; `test/activate.test.mjs` runs against `dist/`, never `src/`, for that reason.

Publishing is a commit on `main` and a pull request against
[`intentic/registry`](https://github.com/intentic/registry) moving this extension's listing to the new sha. The
listing pins a commit, so fixing the code and leaving the listing is the one failure that reaches nobody but the
installer: **bumping `engines` means opening the listing pull request in the same sitting.**

The bundle inlines `@intentic/sandbox-contract` and `@intentic/extension-manifest` (and zod with them), since the host
publishes only `vue`, `@tanstack/vue-query`, `@intentic/extension-api` and `@intentic/extension-ui` to an installed
bundle. Narrowing the routes this extension reads to a `wire.ts` of its own, the way `intentic/extension-logs`
did, is the follow-up that makes it a version boundary rather than a coincidence.
