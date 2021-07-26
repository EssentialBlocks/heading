<?php
/**
 * Plugin Name:     Advanced Heading
 * Description:     Create Advanced Heading with Title, Subtitle and Separator Controls
 * Version:         1.0.0
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     advance-heading
 *
 * @package         advance-heading
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_heading_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "advance-heading/advance-heading" block first.'
		);
	}
	$index_js = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'advance-heading-advance-heading-editor',
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
		'advance-heading-advance-heading-editor',
		plugins_url($editor_css, __FILE__),
		array(),
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
		'advance-heading-advance-heading-block',
		plugins_url( $style_css, __FILE__ ),
		array('fontawesome-frontend-css'),
		filemtime( "$dir/$style_css" )
	);

	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/heading2' ) ) {
		register_block_type(
			'advance-heading/advance-heading',
			array (
				'editor_script' => 'advance-heading-advance-heading-editor',
				'editor_style'  => 'advance-heading-advance-heading-editor',
				'style'  		=> 'advance-heading-advance-heading-block',
			)
		);
	}
}
add_action( 'init', 'create_block_heading_block_init' );
