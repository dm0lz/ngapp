class Api::V1::ArticlesController < Api::V1::ApplicationController

  protect_from_forgery with: :null_session, :if => Proc.new { |c| c.request.format == 'application/json' }

  def index
    @articles = Article.all
    render json: { success: true, data: @articles }
  end

  def show 
    @article = Article.find(params[:id])
    render json: { success: true, data: @article }
  end

  def create
    @article = Article.create!(name: safe_article_params)
    render json: { success: true, data: @article }
  end

  private
  def safe_article_params
    #params.require(:article).permit(:name)
    params.require(:name)
  end

end
