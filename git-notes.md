# Git Notes

## What is a commit?

A commit is a saved snapshot of your project at a specific point in time.
When you run `git add` then `git commit`, git looks at every file you've
staged, freezes their exact contents, and stores that as a permanent,
numbered entry in the project's history (identified by a hash like
`a1b2c3d`).

Each commit also stores:
- who made it and when
- a message describing what changed
- a link back to the commit before it

That last part is what makes git a *history*, not just a folder of saves —
every commit points to its parent, forming a chain you can walk backward
through. If something breaks, you can always return to an earlier snapshot.

## What does a push do?

A commit only exists on your machine until you push it. `git push` sends
your local commits to a remote copy of the repository (in this case, one
hosted on GitHub) and updates that remote to match your local history.

Locally, git tracks history; a push is what makes that history visible and
usable somewhere else — so other people (or other machines) can pull it
down, collaborate on it, or so it's simply backed up off your laptop.

## Why any of this matters

- **Commits give you a undo button.** Instead of manually keeping copies of
  files "just in case," every meaningful change is checkpointed. You can
  compare, revert, or blame (find out when/why a line changed) at any point.
- **Pushing turns local work into shared, backed-up work.** Your laptop
  dying doesn't erase the project if it's been pushed to GitHub.
- **Together, commit + push are the core loop of collaboration.** Everyone
  commits their own snapshots, pushes them, and pulls each other's — that's
  how teams work on the same codebase without overwriting one another.
