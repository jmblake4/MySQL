import * as mysql from 'mysql';
//SQL query string will be used to interact with the database. i.e `SELECT user from table`

export function getAllPosts(): Promise<any>  {
	var sqlBlogDBCon = mysql.createConnection({
		host: "localhost",
		user: "jay",
		password: "jay1",
		database: "blog"
	});
	return sqlBlogDBCon.query('select * from BlogPosts', function(results) {
		console.log(results);
		return this.Promise.resolve(results);
	});
};

export function createNewPost(data:any): void  {
};