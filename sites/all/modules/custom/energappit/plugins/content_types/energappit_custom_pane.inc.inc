<?php


$plugin = array(
  'single' => TRUE,  // Just do this one, it is needed.
  'title' => t('My Module Custom Pane'),  // Title to show up on the pane screen.
  'description' => t('ER MAH GERD, ERT DERS THINS'), // Description to show up on the pane screen.
  'category' => t('energapp.it'), // A category to put this under.
  'render callback' => 'energappit_pane_custom_pane_render', // A function that will return the renderable content.
  'all contexts' => TRUE, // This is NEEDED to be able to use substitution strings in your pane.
);


/**
 * Run-time rendering of the body of the block (content type)
 * See ctools_plugin_examples for more advanced info
 */
function energappit_pane_custom_pane_render($subtype, $conf, $args, $contexts) {

  libraries_load('d3');
  drupal_add_js(drupal_get_path('module', 'energappit') . '/js/usage.js');

  $block = new stdClass();

  // initial content is blank
  $block->title = t('This month\'s savings'); // This will be overridden by the user within the panel options.
  $block->content = '<div id="usage"></div>';

  return $block;
}
