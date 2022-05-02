<?php
/** 
 * Plugin Name: Inline Tooltip Text Format
 * Plugin URI: https://github.com/marincarroll/inline-tooltip
 * Description: A custom Gutenberg text format to add tooltips on hover
 * Version: 1.0.0
 * Author: Marin Carroll
 * Author URI: https://github.com/marincarroll
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: mctooltip
 */

defined( 'ABSPATH' ) or die( 'No, thank you.' );

define( 'MCTT_URL', plugin_dir_url( __FILE__ ) );
define( 'MCTT_PATH', plugin_dir_path( __FILE__ ) );
define( 'MCTT_ASSET', include( MCTT_PATH . 'build/index.asset.php' ) );

require MCTT_PATH . '/inc/enqueue.php';
