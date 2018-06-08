/**
 * @notice Posters must agree to the service disclaimer. At the moment
 *		   all that is required is a button click. However, content
 *         control in development & testing include:
 *             1. Phone number verification
 *             2. ID verification
 *             3. Other 3rd-party service verification
 */
export default function () {
    /* Toggle denied for boolean. */
    this.hasAgreedToDisclaimer = false

    /* Initialize list of info sites. */
    const infoSites = [
        'https://polarisproject.org/',
        'https://humantraffickinghotline.org/'
    ]

    /* Random integer selection. */
    const rnd = Math.floor(Math.random() * Math.floor(infoSites.length))

    /* Redirect users away to a random info site. */
    document.location = infoSites[rnd]
}
