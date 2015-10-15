import {async, register} from 'platypus';
import BaseService from '../base/base.svc';
import BlogPostsRepository from '../../repositories/blogposts/blogposts.repo';

export default class BlogService extends BaseService {

    constructor(private blogPostsRepository: BlogPostsRepository) {
        super();
    }

    getPosts(): async.IThenable<Array<models.IPost>> {
        return this.http.json<models.IResponse>({
            method: 'GET',
            url: this.host,
        }).then((success) => {
			var res: any = success;
			console.log(res);
            return <Array<models.IPost>>res.response;
        });
    }
	
	newPost(blogPost: any): any {
        return this.http.json<models.IResponse>({
            method: 'POST',
            url: this.host,
			data: blogPost
		});
        // }).then((success) => {
		// 	var res: any = success;
        //     return res.response.objectId;
        // });
    }

}

register.injectable('blog-svc', BlogService);
