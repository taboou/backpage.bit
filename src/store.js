import { autorun, observable } from 'mobx'


class TabooStore {
	/* Initialize system variables. */
	@observable hasAgreedToDisclaimer = false

	@observable posts = ['come by tonight', 'new provider']
	@observable filter = ''

	get completedPostsCount() {
    	return this.posts.filter(
			todo => todo.completed === true
		).length
    }

	report() {
		if (this.posts.length === 0)
			return "<none>"
		
		return `Next todo: "${this.posts[0].task}". ` +
			`Progress: ${this.completedPostsCount} / ${this.posts.length}`
	}

    addPost(task) {
		this.posts.push({
			task      : task,
			completed : false,
            assignee  : null
		})
	}

	/**
	 * @notice Posters must agree to the service disclaimer. At the moment
	 *		   all that is required is a button click. However, content 
	 *         control in development & testing include:
	 *             1. Phone number verification
	 *             2. ID verification
	 *             3. Other 3rd-party service verification
	 */
	agree() {
console.log('i agree to eerything u say', this.hasAgreedToDisclaimer)
		
		/* Toggle agreed for boolean. */
		this.hasAgreedToDisclaimer = true
	}
}

const store = window.store = new TabooStore

export default store

autorun(() => {
	console.log('posts #1 --', store.posts[0])
	console.log('filter --', store.filter)
})