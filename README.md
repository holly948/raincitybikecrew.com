Raincity Bike Crew website
==========================

Website built by Holly and Bart.

See the live site at TODO

Data
----

Any of the data in [`data/metadata.json`](data/metadata.json) can be included. For example:

- `{{ metadata.title }}` for the site title
- `{{ metadata.discordLink }}` for the Discord invitation link
- `{{ metadata.instagramLink }}` for the Instagram link
- `{{ metadata.instagramHandle }}` for the Instagram handle

Components
----------

Snippets can be included anywhere. They come from the files in [the `_includes` directory](_includes).

- `{% include components/section-start.njk %}`: start a section with a pattern/logo circle "bullet point". Don't forget to close it again with `section-end`.
- `{% include components/section-end.njk %}`: end a section. Must be used somewhere after `section-start`, before the next `section-start`.
