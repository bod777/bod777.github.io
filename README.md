# bod777.github.io

Bríd O'Donnell's personal site: little apps built for the people Bríd cares about.
Built with [Astro](https://astro.build) and deployed to GitHub Pages on every push to `main`.

## Add or edit a project

Each project is one Markdown file in `src/content/projects/`. The body is the story; the
frontmatter says where it goes and how it looks:

```yaml
---
title: May Madness
group: friends            # brother | mum | friends | colleague | me
order: 1                  # position down the page
summary: One line under the title.
builtWith: [Node, Express]
live: https://…           # optional "Try it" link
code: https://github.com/bod777/…   # optional "Code" link
status: Code coming soon  # optional, shown when there are no links
image: ../../assets/projects/may-madness.png   # optional screenshot
imageAlt: What the screenshot shows.
frame: desktop            # desktop | phone (narrower)
plate: "oklch(0.2 0.02 280)"   # background behind the screenshot
---
```

Screenshots go in `src/assets/projects/`. Astro resizes and converts them at build time.

## Run it locally

Needs Node 22.12+ (`.tool-versions` pins it for asdf).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build into dist/
```

`PRODUCT.md` records who the site is for and the design principles behind it.
