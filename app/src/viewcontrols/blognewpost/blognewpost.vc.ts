import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogViewControl from '../blog/blog.vc';
import BlogPostsRepository from '../../repositories/blogposts/blogposts.repo';

export default class BlogNewPostViewControl extends BaseViewControl {

	constructor(private blogPostsRepository: BlogPostsRepository) {
		super();
	}
	
    templateString: string = require('./blognewpost.vc.html');

    context: any = {
		blogTitle: <string> '',
		blogAuthor: <string> '',
		blogContent: <string> ''
	};
	
	newPost(): void {
		if ( this.context.blogAuthor === '' || this.context.blogTitle === '' || this.context.blogContent === '' || this.context.blogAuthor === undefined || this.context.blogTitle === undefined || this.context.blogContent === undefined) {
			alert('Invalid blog entry!');
			// $window.location.href = '#blogposts';
		} else {
			var blogPost = {
				title: this.context.blogTitle,
				author: this.context.blogAuthor,
				content: this.context.blogContent
			};
			this.blogPostsRepository.newPost(blogPost);
			this.navigator.navigate(BlogViewControl);	
		}		
	}
	
}

register.viewControl('blognewpost-vc', BlogNewPostViewControl, [BlogPostsRepository]);
