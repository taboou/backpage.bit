import { autorun, observable } from 'mobx'


class TabooStore {
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
}

const store = window.store = new TabooStore

export default store

autorun(() => {
	console.log('posts #1 --', store.posts[0])
	console.log('filter --', store.filter)
})