# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

Created or generated the set up our controller for views and routes to connect external request and matching internal action inside this blog app ---1)
# class BlogPostsController < ApplicationController
#   def index
Setting the embeded instance variable @post as index, to connect the route of data in the controller  ---2)
#     @posts = BlogPost.all
#   end
# 
#   def show
Setting index @post to connect the route in "show" method to find a post in using params :id ---3)
#     @post = BlogPost.find(params[:id])
#   end
# 
We are defining "new" method to create a new form or blog post---4)
#   def new
#     @post = Post.new
#   end
# 
#   def create
Setting index @post to connect the route allowing creating a new blog post in accodance to the params and if valid direct to internal path(route), if   ---5)
#     @post = BlogPost.create(blog_post_params)
#     if @post.valid?
#       redirect_to blog_post_path(@post)
#     else
#       redirect_to new_blog_post_path
#     end
#   end
# 
Defining "edit" method to find and edit a single blog post using params :id ---6)
#   def edit
#     @post = BlogPost.find(params[:id])
#   end
# 
#   def update
#     @post = BlogPost.find(params[:id])
Specifing an edit or update made to blog and if valid re-direct to internal path or route if not direct to the edit blog post path.  ---7)
#     @post.update(blog_post_params)
#     if @post.valid?
#       redirect_to blog_post_path(@post)
#     else
#       redirect_to edit_blog_post_path
#     end
#   end
# 
#   def destroy
#     @post = BlogPost.find(params[:id])
#     if @post.destroy
#       redirect_to blog_posts_path
#     else
Setting conditional "else" if post is not destroyed or deleted or valid redirect to a differnt route ---8)
#       redirect_to blog_post_path(@post)
#     end
#   end
# 
Defining blog_post_params, under word Private. Anything below private cannout be accessed outside the scope of the class ---9)
#   private
#   def blog_post_params
Setting the privacy parameters to require to input title and content for permission to access blog ---10)
#     params.require(:blog_post).permit(:title, :content)
#   end
# end
