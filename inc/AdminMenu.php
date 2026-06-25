<?php

if ( !defined( 'ABSPATH' ) ) { exit; }

class CTCadminMenu {
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'adminMenu' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'adminEnqueueScripts' ] );
	}

	public function adminMenu() {
		add_submenu_page(
			'tools.php',
			__( 'Click To Copy - bPlugins', 'click-to-copy' ), 
			__( 'Click To Copy', 'click-to-copy' ),           
			'manage_options',
			'click-to-copy-dashboard',
			[ $this, 'renderDashboardPage' ]
		);

	}

	// Dashboard Page
	public function renderDashboardPage() { ?>
		<div
			id="CTCBClickToCopy"
			data-info='<?php echo esc_attr( wp_json_encode( [
				'version'   => CTC_PLUGIN_VERSION,
				'isPremium' => bpctcPremiumChecker(),
				'hasPro'    => CTC_HAS_PRO,
				'licenseActiveNonce' => wp_create_nonce('bplLicenseActive'),
				'nonce' => wp_create_nonce( 'ctcCreatePage' ),
				'adminUrl' => admin_url(),
				'deleteDataOnUninstall' => (bool) get_option( 'ctcDeleteDataOnUninstall', false ),
				'uninstallNonce' => wp_create_nonce( 'ctc_save_uninstall_option' ),
			] ) ); ?>'
		></div>
	<?php }

	// Help & Demo Page
	public function renderHelpPage() { ?>
		<div class="wrap">
			<h1><?php _e( 'Click To Copy - Help & Demo', 'click-to-copy' ); ?></h1>
			<p><?php _e( 'Here you can find documentation, demos, and support links for Click To Copy plugin.', 'click-to-copy' ); ?></p>
		</div>
	<?php }

	// Load scripts only for these pages
	public function adminEnqueueScripts( $hook ) {
		if ( strpos( $hook, 'click-to-copy-dashboard' ) !== false || strpos( $hook, 'click-to-copy-help' ) !== false ) {
			$asset_file = CTC_DIR_PATH . 'build/admin-dashboard.asset.php';
			$asset      = file_exists( $asset_file ) ? require $asset_file : [ 'dependencies' => [], 'version' => CTC_PLUGIN_VERSION ];

			// wp-util provides wp.ajax (used by useWPAjax) — a runtime global, not auto-detected.
			$dependencies = array_unique( array_merge( $asset['dependencies'], [ 'wp-util' ] ) );

			wp_enqueue_style( 'ctc-admin-dashboard', CTC_DIR_URL . 'build/admin-dashboard.css', [], CTC_PLUGIN_VERSION );
			wp_enqueue_script( 'ctc-admin-dashboard', CTC_DIR_URL . 'build/admin-dashboard.js', $dependencies, $asset['version'], true );
			wp_set_script_translations( 'ctc-admin-dashboard', 'click-to-copy', CTC_DIR_PATH . 'languages' );
		}
	}
}

new CTCadminMenu();
