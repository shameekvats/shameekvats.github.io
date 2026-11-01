# shameekvats.github.io

Source for my personal website and portfolio: **[shameekvats.github.io](https://shameekvats.github.io)**

I'm an R&D engineer working with polymers, electrospinning and additive manufacturing.
The site collects my publications, projects, blog posts and CV.

## What's on the site

| Section | Content |
|---|---|
| [About](https://shameekvats.github.io/) | Short introduction and featured projects |
| [Projects](https://shameekvats.github.io/projects/) | Electrospinning, additive manufacturing, home servers, embedded systems, web development, project management |
| [Blog](https://shameekvats.github.io/blog/) | Build logs and technical write-ups |
| [Publications](https://shameekvats.github.io/publications/) | Peer-reviewed papers and theses |
| [CV](https://shameekvats.github.io/cv/) | Short CV |

## How it's built

- [Jekyll](https://jekyllrb.com/) static site using the [al-folio](https://github.com/alshedivat/al-folio) theme.
- Deployed to GitHub Pages by the `deploy` GitHub Actions workflow on every push to `main`.
- Content lives in `_pages/`, `_projects/`, `_posts/`, `_bibliography/papers.bib` and `assets/json/resume.json`.

### Run it locally

With Docker:

```bash
docker compose pull
docker compose up
```

Then open <http://localhost:8080>.

## License

The theme is © Maruan Al-Shedivat and contributors, released under the [MIT License](LICENSE).
Site content (text, images, publications) © Shameek Vats.
