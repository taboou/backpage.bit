/**
 * @notice Posters must agree to the service disclaimer. At the moment
 *		   all that is required is a button click. However, content
 *         control in development & testing include:
 *             1. Phone number verification
 *             2. ID verification
 *             3. Other 3rd-party service verification
 */
export default function() {
    /* Toggle agreed for boolean. */
    this.hasAgreedToDisclaimer = true
}
