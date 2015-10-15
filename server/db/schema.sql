CREATE DATABASE IF NOT EXISTS blog;

/*Complete file to instantiate database*/

USE blog
CREATE TABLE BlogPosts (
  id int(11) NOT NULL AUTO_INCREMENT,
  author varchar(50),
  title varchar(50),
  postcontent varchar(1000),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO BlogPosts (id, author, title, postcontent) VALUES
(1, 'Jay Blake', 'Computer Games and You', 'This is an example of a blog post about computer games.'),
(2, 'Greg Bear', 'Eon Critique', 'Eon is one of the coolest sc-fi books ever made.'),
(3, 'Issac Asimov', 'Foundation', 'The galaxy will suffer 50,000 years of economic decline.'),
(4, 'Joe Bob', 'How to make your car more redneckish', 'First, you will need some glass packs for you mufflers.');