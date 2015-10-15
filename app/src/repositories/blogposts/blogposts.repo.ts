import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import BlogService from '../../services/blog/blog.svc';

export default class BlogPostsRepository extends BaseRepository {

	constructor(private blogService: BlogService) {
		super();
	}

	getPosts(): async.IThenable<Array<models.IPost>> {
		return this.blogService.getPosts();
	}
	
	newPost(blogPost: any): any {
		return this.blogService.newPost(blogPost);
	}

}

register.injectable('blogposts-repo', BlogPostsRepository, [BlogService]);
