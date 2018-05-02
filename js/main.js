/**
 * Event Emitter
 * 
 * Create root event emitter as a new Vue class with `fire` and `listen` events.
 */
window.Event = new class {
    constructor() {
        this.vue = new Vue()
    }

    fire(event, data = null) {
        this.vue.$emit(event, data)
    }

    listen(event, callback) {
        this.vue.$on(event, callback)
    }
}

/**
 * Shared State
 *
 * A shared storage state to be shared by the whole application.
 */
let store = {
    profile: {
        btc_account : null,
        eth_account : null
    }
}

/* Alert component. */
Vue.component('alert', {
    template: '<div class="alert alert-success" role="alert"><b>Smashing!</b> Nice work.</div>'
})

/* Initialize string variables. */
const post_ad 				= 'post ad'
const Choose_a_location 	= 'Choose a location'
const link  				= 'link'

const app = new Vue({
  	el: '#app',
  	data: {
    	post_ad,
    	Choose_a_location,
    	cities,
    	link
  	},
  	methods: {
  		postAd: function() {
  			alert('post a new ad?')
  		},
        addLibrary: () => {
            this.libraries.push(this.newlibrary)
            this.newlibrary = ''
        },
        deleteLibraries: () => {
            this.libraries = []
        }
    },
    computed: {
    	
    }
})
