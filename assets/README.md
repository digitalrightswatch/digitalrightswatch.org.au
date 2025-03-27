# Javascript build readme 
## Javascript dependencies management

We have reduced JavaScript bloat by extracting only essential dependencies (jQuery and a Bootstrap navigation toggle) into the assets/ directory. Importing these into assets/js/main.js allows Hugo's esbuild to compile and minify the code through the head.html partial template ( shrinking file size from 240KB to 80KB by the way).

It would be worth exploring a more comprehensive and maintainable approach possibly with hugo modules and its npm interoperability if more javascript gets added. 

## JavaScript Dependencies

The relevant js files appear at the top level of assets/ (not in assets/js) as that meant we could leave various 'import' and 'require' statements unchanged. 

- jQuery: v3.3.1 - Slim version
- Bootstrap Collapse Plugin: v4.6.2 - Mobile navigation menu toggling
    - Dependency: Requires jQuery

