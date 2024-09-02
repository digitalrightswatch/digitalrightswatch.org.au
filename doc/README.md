# Digital Rights Watch Static Website

This is the latest version of the [Digital Rights Watch](https://digitalrightswatch.org.au/) website as of February 2024. It is a [Hugo](https://gohugo.io/) static site using the [Apsho](https://jamstackthemes.dev/theme/hugo-apsho/) theme.

## How we got here

The previous version of the website was a WordPress site. Here's how we got here from there:

1. Install the [WordPress to Hugo Exporter](https://github.com/SchumacherFM/wordpress-to-hugo-exporter) WordPress plugin
2. Use the plugin to export a zip file of all the website content. (NOTE: I followed [this documentation](https://github.com/SchumacherFM/wordpress-to-hugo-exporter?tab=readme-ov-file#if-you-cannot-install-plugins-in-your-wordpresscom-instance) to get an XML export and then do a Hugo export on a local WordPress instance instead)
3. [Create a new Hugo site](https://gohugo.io/getting-started/quick-start/) (`hugo new site drw-website`)
4. Install the theme (`git submodule add git@github.com:StaticMania/hugo-apsho.git themes/apsho && git submodule update`)
4. Drop the `hugo-export.zip` file into into the top of the new site
5. Use the `[wordpress-import](./wordpress-import)` script I wrote to move the converted site's files into the correct places and do some customisations

## The CMS

This website can be managed using [Decap CMS](https://decapcms.org/). Browsing to https://digitalrightswatch.org.au/admin accesses the CMS, and you can log in using your GitHub credentials, assuming you have access to the GitHub repository for this site.

## MVP

- Home page
- Store files in Fastmail file storage for now
- Blog
    - make sure Sam knows how to get in and use the CMS
- Links to donation/campaign pages
- Ensure not to break active links


```
tailscale funnel --set-path=/decap --bg 8081; sudo tailscale funnel --bg 8000
tailscale funnel --https=443 off
python -m http.server -d public/
npx decap-server
```

## User Guide

This is a [Hugo](https://gohugo.io/) static site using the [Apsho](https://jamstackthemes.dev/theme/hugo-apsho/) theme.

Any changes to the `main` branch of this Github repository are automatically detected by [Netlify](https://netlify.com) and deployed to <https://digitalrightswatch.netlify.app/>.

While it's possible to contribute updates using the GitHub web interface or by cloning the repository with git, the simplest approach is to use the configured [Decap CMS](https://decapcms.org/). Browse to <https://digitalrightswatch.netlify.app/admin> accesses the CMS, and log in using your GitHub credentials, assuming you have access to the GitHub repository for this site.

In the CMS, the Collections on the left give access to different parts of the site:

- The Post collection lists all the blog posts
- The Page collection lists non-blog post pages; mostly annual reports, About Us, etc.
- Site Settings is not configured to do much yet, but *could* be set up to configure parts of the site, such as its description and banner image
- Data Files controls content that is displayed on the different sections of the home page

## Administrator Guide

This is a [Hugo](https://gohugo.io/) static site using the [Apsho](https://jamstackthemes.dev/theme/hugo-apsho/) theme.

We've made a [few customisations to the theme](https://github.com/StaticMania/hugo-apsho/compare/master...digitalrightswatch:hugo-apsho:drw-theme), but after getting a better understanding of how Hugo's themes work, this was not the best approach, and we should instead be overriding specific theme files in the website repository itself. @mattcen intends to spend some time tidying this up soon.

Any commits to the `main` branch of this Github repository are automatically detected by [Netlify](https://netlify.com) and deployed to <https://digitalrightswatch.netlify.app/>. These commits could be made via the GitHub web interface, or by cloning the repository locally with Git, making commits, and pushing them, or by using [Decap CMS](https://decapcms.org/).

The website layout is as follows:

- **config.toml**: The main Hugo configuration file for the whole website
- **archetypes/**: Templates for files that Hugo creates within `content/`. Note this is *not* used by DecapCMS
- **content/**: Website content Markdown format. Files in this directory are usually of `type: page`
  - **category/**: Configurations for the list pages of different page categories…
  - **category/events/**: … such as events. The `_index.md` file in here stores the content to display at the top of the `/events` page above the list of events
  - **blog/**: Blog posts, again in Markdown format
- **data/**: The data files currently in here (in `yaml` format) control various content on the home page
- **layouts/**: HTML templates for various page types. These files augment or override those in the equivalent `layouts/` directory within the theme
- **static/**: Any static files that should be served as-is with no customisations or processing, such as images, CSS, or JavaScript files
  - **images/**: Any newly added images go here
  - **admin/**: The `index.html` in here is what displays the Decap CMS page, whose configuration is controlled by the adjacent `config.yml`
  - **wp-content/uploads/**: These are all the static files that existed as part of the old WordPress installation. New files shouldn't go here
- **themes/**: Any Hugo website themes
  - **apsho/**: The main theme we use
    - **archetypes/**: Templates for files that Hugo creates within `content/`. Note this is *not* used by DecapCMS
    - **layouts/**: HTML templates for various page types. These files can be augmented or overridden by files of the same name in the top-level `layouts/` directory
    - **static/**: Any static files provided by the theme
    - **assets/**: Similar to `static/`, except these files are processed in some way by Hugo at build time. For example, CSS or JavaScript files might be minified and combined, and image files might be converted to one or more different dimensions, or compressed
