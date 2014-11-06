# Angular vs. React

This repo contains materials for my Systems Design course project, including the final presentation slides, final paper, and example code.

## Presenting

Call `npm run-script present` to start the presentation locally. A few tips:

- Hit `esc` to enter the slide overview
- Hit `b` to pause/dim the presentation if necessary

## Paper

The final paper lives in the `paper/` directory. Run the following to build it:

```bash
pdflatex Gaul\ William\ Angular\ vs\ React\ v1.tex
bibtex Gaul\ William\ Angular\ vs\ React\ v1
pdflatex Gaul\ William\ Angular\ vs\ React\ v1.tex  # Twice
```

Naturally, you will need to run `bibtex` every time your bibliography changes, and `pdflatex` twice to get the updated references right.

## Examples

Each example demonstrates manipulating the contents of an `h1` element via a select box and input field. You can run the examples by calling `npm run-script X` and visiting `http://localhost:8080/`, where `X` is one of:

- `ex-pure-js`: A pure JavaScript implementation
- `ex-angular`: Using Angular
- `ex-react`: Using React
