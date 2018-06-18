import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

@observer
export default class NewsPost extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        this.state = {
            postId: null
        }
    }

    render() {
        return this._displayPost()
    }

    componentDidMount() {
        /* Scroll to top. */
        $('html,body').scrollTop(0)

        /* Initialize post id. */
        this._initPostId()
    }

    _initPostId() {
        /* Retrieve the current url. */
        const currentUrl = window.location.href

        /* Retrieve the post id as the last argument of the url. */
        const postId = currentUrl.split('/').pop()

        /* Update state. */
        this.setState({ postId })
    }

    _displayPost() {
        /* Initialize post title. */
        let title = null

        /* Initialize post body. */
        let body = null

        /* Initialize post author. */
        let author = null

        switch(this.state.postId) {
            case 'backpage-shutdown':
                title = 'Backpage Shutdown'
                body = `
                    <div>
                        Welcome Sex Workers,<br>
                        Couple quick questions:
                    </div>

                    <div class="mt-1 ml-4">
                        Do you hate dealing with sweaty, needy, selfish clients all the time?<br>
                    </div>

                    <div class="mt-1 ml-4">
                        Do you enjoy making lots of money?<br>
                    </div>

                    <div class="mt-3">
                        Now you can earn Gold Coins writing &amp; promoting your articles on Backpage Zero
                        <em>, up to $1.00 per word.</em>
                    </div>
                `
                author = 'Londynn Lee'
                break
            case 'getting-a-better-response':
                title = 'Getting a Better Response'
                body = `
                    <p>
                        Escort Directories like Exotics, Eros, and Cityvibe are very popular. They've all been around  for over 10 years now with new comers and copy cat directories showing up almost daily.
                    </p>

                    <p>
                        Their format s are fairly similar, dividing their website into cities, and from there the local escorts can pick from categories that best describe them or their services. They can chose from hair color, Blonde, Brunettes, Redheads, or ethnicity, Asian, Latina , Ebony, etc., or they can chose based on availability, Daytime Delights or After Dark girls. They can also chose categories based on service types, from Sensual Body Rub Massage, to Fetish, to BDSM.
                    </p>

                    <p>
                        Once placed in these categories, if the directory is popular and has many advertisers, an escort's ad can be lost among the dozens and dozens of escort ads posted there where they are all competing against each other for the viewer's attention.
                    </p>

                    <p>
                        All escorts feel they aren't getting enough calls and want to know how they can be more competitive. After looking at the largest and most popular directories I came up with some recommendations.
                    </p>

                    <p>
                        <strong>1. Advertise in Many Directories not just one.</strong> Look, it's not like you're buying a sixty thousand dollar sports car and you have to choose only one. Internet directories average about $150 per month so why not pick two three or four directories to cover your bases. The major directories seem to have their own followings and even if each directory costs around $150 for a month, that is really quite a bargain considering you can get a dozen or more calls and make quite a few thousand in return.
                    </p>

                    <p>
                        <strong>2. Advertise in More Categories.</strong> Directories divide their cities into the types of categories that best describe an escort's looks , services, or availability. If you fit more than one, for a nominal extra fee you can choose all the categories that apply to you. That way you'll have more exposure on that Directory. If you're blond and only work in the evenings because you have a day job, place yourself in Blond and After Dark categories. If you do sensual massage, then put yourself in that category too. Same with Fetish and BDSM.
                    </p>

                    <p>
                        <strong>3. Offer More Services that'll place you in more categories.</strong> If you're a Brunette and other than escorting, you like to dress up in high heel shoes or role play as a naughty cheerleader or school girl, consider advertising in the Fetish Categories to place yourself in front of that audience. Make sure you have photos that show you in these outfits to stimulate the imaginations of the viewers who are turned on by these things.
                    </p>

                    <p class="offset-1">
                        <small>
                        *Be Specfic in what you do, or in what you do not do!. If you do not offer Full Service, say so in your ad. While it may turn some customers away, it will probably keep you from being called by vice cops who would wish to test you.
                        </small>
                    </p>

                    <p class="offset-1">
                        <small>
                        If you offer GFE (Girl Friend Experience), or PSE (Porn Star Experience) you could say so, but you should be also aware that Vice Cops understand these terms too, and posting this information will be cause to bust you should you get caught in a sting by an undercover vice cop. One of the first pieces of evidence a vice cop will submit to a judge in court is your posted ad text. Your online posting is a contractual offer for some act, GFE or PSE let's say, in return for a customer's money. If you show up and take the money, you are completing the terms for an illegal act and will be busted if the customer is a cop. So Beware!
                        </small>
                    </p>

                    <p>
                        <strong>4. Have a good Thumbnail Photo.</strong> Since website viewers usually go first to the category of their primary interest and sees who is available form there, they will be looking over the small thumbnail photos to see who grabs his attention, then he will click that photo to view the corresponding ad. So having a good thumbnail photo that captures the viewer's attention is a must.
                    </p>

                    <p>
                        <strong>5. Have Good Professional Photos.</strong> If you put up cheap, blurry photos, you are promoting yourself as a low grade amateur. While some people think this is a novel approach to separate you from the deceiving stock photos ploy which is a common among practice among agencies who buy left over professional modeling photo-shoot photos,, our research shows that escorts that use real photos of themselves that are professional, sharp, and colorful get so many more clicks and visitors to their ads that the escort ads that don't.
                    </p>

                    <p>
                        <strong>6. Have your Photo Ad Verified.</strong> Since I just mentioned the problem with stock photos, one way you can get a much better response to your ad is to have your photos verified by the directory who's posting your ads. Send them photo copy of your ID so they can match your photo ID to the pictures you submitted for your ad. If they match they will Verify your ad by placing some icon on it saying so. Then customers will know your ad is real and that you are an independent provider. This seems to be of value because Independent providers have a much better working attitude than agency girls." Some of you may not want to submit you photo ID, but with Federal Law 2257 becoming the standard practice, you'll have to submit your ID anyway to advertise any adult services or content. So you might as well make it work for you and use it toward your advantage.
                    </p>

                    <p>
                         <strong>7. Change Your Photos Often.</strong> Hobbyists visit escort directories as often as people eat when they are hungry. If your ad stays the same its ability to attract viewers will diminish with time. Keep people coming to your ad by changing your photos every 6 - 8 weeks. Try different looks and different outfits. A customer who was not captivated before in your sexy bikini just might call you when you model those thigh high fishnet stockings with high heal shoes because he has a foot , pantyhose, or shoe fetish.
                    </p>

                    <p>
                        <strong>8. Make Sure Your Photos and Text Match the category you are placing your ads in.</strong> If you do sensual massage, make sure your ad descriptions describe how good you will make them feel under your sensitive and healing touch, and have photos to match the mood you wish to create. If you also do Dominatrix or BDSM services, make sure your text here is specific to your services and your photos show you in leather Domina gear holding a flogger, whip, paddle, etc. and looking stern. Help the viewer see that you do have the proper attire, equipment, and attitude to provide the services you claim.
                    </p>

                    <p>
                        <strong>9. Use a Blinking Thumbnail.</strong> An animated Gif or blinking Thumbnail is a feature where two or three photos blink from one to the other. If your ad is lost in a crowded category of many other escorts, one way you can draw their attention away from what they are looking at and to your ad is to use a blinking thumbnail. Since the human eye is drawn to movement, the he movement action will draw much more response to your ad, thus increasing the amount of call you get. Our statistics show that escorts who use blinking thumbnails get consistently more visits to their ad each month than ads that have one static photo.
                    </p>

                    <p>
                        <strong>10. Buy a Top Position.</strong> Most directories rotate the ads in the thumbnails rails with each visit so that each escort ad gets a chance at the top of the page. Our statistics show that escorts who pay for the top positions get consistently more visits to their ad each month than ads that are not prominently placed.
                    </p>

                    <p>
                        <strong>11. Front Page Positioning.</strong> Many directories have advertising space on their front page or home page where you can get yourself seen first by every visitor to the page, and beat the other advertisers to the punch so to speak. It's like cutting in front of the line at the movies, but here you can pay for it, and your increased response will more than pay for itself.
                    </p>

                    <p>
                        <strong>12. Get Reviews.</strong> Many hobbyists are spooked by new advertisers or ads with new very attractive advertisers because often these ads are just law enforcement setting up stings to bust escorts and Johns. See if you can get a review on a well know review site by an established and respected hobbyist so that all other hobbyists who may have been reluctant to try you out, will now know you are real and safe.
                    </p>

                    <p>
                        <strong>13. Be Good, But Not Too Good!</strong> While reviews do help you get more calls, ask your clients to not go to town sharing your private time together. if your reviews are too good, you'll start drawing the attention of law enforcement looking to bust you. Then once you get a few reviews on the boards and everyone knows you are safe, ask your clients not to write anymore reviews about you and if they do, keep it good, but not over the top.
                    </p>

                    <p>
                        Will many of the suggestions above cost you a few extra dollars? Sure, but think of it this way. Think of how much more money you'd be losing in lost calls.
                    </p>
                `
                author = 'Bob Stevens'
                break
            default:
                title = 'Unknown'
                body = '...'
                author = 'Anonymous'
        }

        /* Allows for "dangerous" html to be inserted. */
        return <div class="container-fluid">
            <nav aria-label="breadcrumb">
                <small>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><NavLink to="/news">News</NavLink></li>
                        <li class="breadcrumb-item active" aria-current="page">{ title }</li>
                    </ol>
                </small>
            </nav>

            <h2 dangerouslySetInnerHTML = {{ __html: title }} class="mb-0" />

            <footer class="blockquote-footer mt-0 mb-3 ml-1">
                author: { author }
            </footer>

            <div dangerouslySetInnerHTML = {{ __html: body }} />
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
