import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogRepository from '../../repositories/blogposts/blogposts.repo';
import BlogService from '../../services/blog/blog.svc';
import BlogNewPostViewControl from '../blognewpost/blognewpost.vc'

export default class BlogViewControl extends BaseViewControl {

    templateString: string = require('./blog.vc.html');

	constructor(private blogRepository: BlogRepository) {
		super();
	};

	context: any = {
		blogPosts: <Array<models.IPost>> []
	};
	
	navigatedTo(): void {
		this.blogRepository.getPosts().then((blogPosts) => {
			console.log(blogPosts);
			this.context.blogPosts = blogPosts;
		});
	};
	
	newPost(): any {
		this.navigator.navigate(BlogNewPostViewControl);
	}
}

register.viewControl('blog-vc', BlogViewControl, [BlogRepository]);
