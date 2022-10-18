DROP DATABASE IF EXISTS tech_blog_db;

CREATE DATABASE tech_blog_db;


CREATE TABLE `User` (
  `User ID` int,
  `User Name` varChar(20),
  `password hash` Type,
  PRIMARY KEY (`User ID`)
);

CREATE TABLE `Post` (
  `post ID` Type,
  `Title` Type,
  `Contents` Type,
  `date created` Type,
  `Creator` Type,
  PRIMARY KEY (`post ID`),
  FOREIGN KEY (`Creator`) REFERENCES `User`(`User ID`)
);

CREATE TABLE `Comment` (
  `comment ID` Type,
  `Content` Type,
  `creator ID` Type,
  `Post ID` Type,
  `date created` Type,
  `Field` Type,
  PRIMARY KEY (`comment ID`),
  FOREIGN KEY (`creator ID`) REFERENCES `User`(`User ID`),
  FOREIGN KEY (`Post ID`) REFERENCES `Post`(`post ID`)
);
