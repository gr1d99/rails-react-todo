require 'test_helper'

class ApiV1TodoTest < ActionDispatch::IntegrationTest
  def setup
    @params = { todo: {} }
  end

  test 'responds with status 400 when params is empty' do
    post api_v1_todos_path, params: @params, as: :json
    assert_response :bad_request
  end

  test 'create todo' do
    @params[:todo] = { name: 'Todo', description: 'Todo Description' }
    post api_v1_todos_path, params: @params, as: :json
    assert_response :created
  end
end
