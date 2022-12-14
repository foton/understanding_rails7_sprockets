/*
 *= link_tree ../images
 *
 * build separate css file for each /app/assets/stylesheets/*.css file (no traversing!)
 *= link_directory ../stylesheets .css
 *
 * build separate JS file for each .js file anywhere in /app/javascript
 * folder structure is kept in public/assets
 *= link_tree ../../javascript .js
 *
 * build separate JS file for each .js file anywhere in /app/vendor/javascript
 * folder structure is kept in public/assets
 *= link_tree ../../../vendor/javascript .js
 */
