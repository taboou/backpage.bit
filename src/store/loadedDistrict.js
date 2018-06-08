/**
 * Retrieves the district's id (slug) from the url.
 *
 * @notice A helper function to parse out the post id from the url.
 *
 * @dev TODO Handle this using ReactJs native router function.
 */
export default function () {
    /* Retrieve the current url. */
    const currentUrl = window.location.href

    /* Retrieve the district id as the last argument of the url. */
    const districtId = currentUrl.split('/').pop()

    /* Update the store's active district. */
    this.activeDistrict = districtId

    return districtId
}
