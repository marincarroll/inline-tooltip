<?php

function mctooltip_enqueue_block_assets() {
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
add_action('enqueue_block_assets', 'mctooltip_enqueue_block_assets');