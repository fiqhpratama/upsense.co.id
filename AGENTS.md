# Ponytail

Automatically apply [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) at the `full` level for every coding task.

- Understand the affected flow before editing, then choose the smallest correct change.
- Reuse existing code, the standard library, native platform features, or installed dependencies before adding code or packages.
- Do not add speculative abstractions, configuration, or dependencies.
- Preserve validation, error handling, security, and accessibility requirements.
- Add one small runnable check for non-trivial new logic.

## Service JSON-LD

For every service page, include factual JSON-LD using the `Service` type (or `Product` only when the page is for a genuine product).

- Set `name`, `image`, and `description` to the real service or product details; the description must identify that service or product.
- Add `aggregateRating` or `review` only when UPSENSE has an approved, genuine, and attributable customer review.
- Preserve the actual reviewer name, rating, review body, and publication date. Never generate or randomize reviews, names, ratings, or review text.

## Analytics

Include the Google Analytics tag with measurement ID `G-SWV1XGRBS6` once in the root layout so it runs on every page. Use Next.js `Script` with `afterInteractive`; do not duplicate the tag in individual pages.
