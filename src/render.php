<?php
if ( ! defined( 'ABSPATH' ) ) exit;

$id = wp_unique_id( 'ctcb_click_to_copy_block-' );
?>
<div <?php echo get_block_wrapper_attributes(); ?>
     id="<?php echo esc_attr( $id ); ?>"
     data-attributes="<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>"
     >
</div>
