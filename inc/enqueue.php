<?php
/** 
 * Enqueue in editor
 */
function mctooltip_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'mctooltip', 
		MCTT_URL . 'build/index.js', 
		MCTT_ASSET['dependencies'],
		MCTT_ASSET['version']
	);
	wp_enqueue_style(
		'mctooltip-style',
		MCTT_URL . 'build/style-index.css',
		[],
		MCTT_ASSET['version']
	);
}
add_action('enqueue_block_editor_assets', 'mctooltip_enqueue_block_editor_assets');

/** 
 * Enqueue on front-end
 */
/*
function mctooltip_enqueue_scripts() {
		
	}
}
add_action('wp_enqueue_scripts', 'mctooltip_enqueue_scripts');*/