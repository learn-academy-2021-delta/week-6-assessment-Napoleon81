# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. 
How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:The foreign key called the child table and would be on the Cohort model. If not added you need execute the SQL commands to enable. 

  Researched answer:The foreign key called the child table and would be on the Cohort model. If not added you need execute the SQL commands to enable. 

If you require to add the foriegn key yoy need to pass a migration.

2. Which RESTful routes must always be passed params? Why?

  Your answer:Show, edit, update and destroy must always be passed params because forms cannot execute requests.

  Researched answer:Show,edit, update and destroy must always be passed params because forms cannot execute requests.

Have to Know which iteam you are updating unless yiu have a param

3. Name three rails generator commands. What is created by each?

  Your answer:Three generator commands are rails g rspec:install that creates a testing platform, rails g model that helps find, upate, or remove data and rails g db:migrate used 
  for changing an application's database that can be used to create boilerplate folders and files for a project.  

  Researched answer:Three generator commands: rails g rspec:install that's is used to create a testing ruby code,
   rails g model that helps find, upate, or remove data and rails g db:migrate used 
  for changing an application's database that can be used to create boilerplate folders and files for a project.  
  *view folder

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"  /students          INDEX = "Show" all data of all students

method="Post"   /students       CREATE = "Post"  new student

method="GET"    /students/new NEW = creates a new form (new student)NEW = creates a new form (new student)

method="GET"    /students/2  SHOW = one item or student

method="GET"    /students/2/edit    SHOW = "Post"

method="PATCH" /students/2  EDIT = Update UPDATE= modifies item

method="DELETE" /students/2      DESTROY = removes item 



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer, I want to write down app ideas, so i can plan presentation.  
As a developer, I want to go to bank, for loan possibilies. 
As a a developer, I want to sketch a layout, to build a tech road map.

As a developer, I want to meet with Delta class, for tech advice.
As a developer, I want to reserch, for tips. 
As a a developer, I want to meet with friends, for user feedback.

As a developer, I want to reserch color schemes , for logo and front end look.
As a developer, I want to meet with investors, for financial backing.
As a a developer, I want to go to apple store, look and price out computer equipment.

As a developer, I want to call out, for recruiting other developers to work with.







