Raincity Bike Crew website
==========================

Website built by Holly and Bart.

See the live site at TODO

Data
----

Any of the data in [`_data`](_data) can be included. For example:

- `{{ metadata.title }}` for the group name
- `{{ metadata.tagline }}` for the group tagline
- `{{ social.discordLink }}` for the Discord invitation link
- `{{ social.instagramLink }}` for the Instagram link
- `{{ social.instagramHandle }}` for the Instagram handle

Components
----------

Snippets can be included anywhere. They come from the files in [the `_includes` directory](_includes).

- `{% include components/section-start.njk %}`: start a section with a pattern/logo circle "bullet point". Don't forget to close it again with `section-end`.
- `{% include components/section-end.njk %}`: end a section. Must be used somewhere after `section-start`, before the next `section-start`.
