require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  def setup
    @todo = Todo.new(name: '', description: '')
  end

  test 'validates name presence' do
    @todo.description = 'todo description'
    @todo.valid?
    assert @todo.errors.details.keys.include?(:name)
  end

  test 'validates description presence' do
    @todo.name = 'Todo Name'
    @todo.valid?
    assert @todo.errors.details.keys.include?(:description)
  end
end
