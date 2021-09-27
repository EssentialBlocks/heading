<?php
/**
 * Plugin Name:     Advanced Heading
 * Description:     Create Advanced Heading with Title, Subtitle and Separator Controls
 * Version:         1.0.0
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     advanced-heading
 *
 * @package         advanced-heading
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler-inline/style-handler.php';

function advanced_heading_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "advanced-heading/advanced-heading" block first.'
		);
	}
	$index_js = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'advanced-heading-advanced-heading-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
		),
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'advanced-heading-advanced-heading-editor',
		plugins_url($editor_css, __FILE__),
		array('advanced-heading-advanced-heading-block', 'fontawesome-frontend-css'),
		filemtime("$dir/$editor_css")
	);

	$fontawesome_css = 'lib/resources/css/font-awesome5.css';
	wp_register_style(
		'fontawesome-frontend-css',
		plugins_url( $fontawesome_css, __FILE__),
		array(),
		filemtime( "$dir/$fontawesome_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'advanced-heading-advanced-heading-block',
		plugins_url( $style_css, __FILE__ ),
		array('fontawesome-frontend-css'),
		filemtime( "$dir/$style_css" ) 
	);

	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/advanced-heading' ) ) {
		register_block_type(
			'advanced-heading/advanced-heading',
			array (
				'editor_script' => 'advanced-heading-advanced-heading-editor',
				'editor_style'  => 'advanced-heading-advanced-heading-editor',
				'render_callback' => function( $attributes, $content ) {
					if( !is_admin() ) {
						wp_enqueue_style('advanced-heading-advanced-heading-block');
					}
					return $content;
				  }
			)
		);
	}
}
add_action( 'init', 'create_block_heading_block_init' );
