module Api
  module V1
    class TodosController < ApplicationController
      before_action :set_todo, only: %i[show update destroy]

      def show
        render json: @todo
      end

      def index
        @todos = Todo.all
        render json: @todos
      end

      def create
        @todo = Todo.new(todo_params)

        if @todo.valid?
          @todo.save!

          render json: @todo, status: :created
        else
          render json: @todo.errors
        end
      end

      def update
        p todo_params
        @todo.update(todo_params)
        render json: @todo
      end

      def destroy
        @todo.destroy
      end

      private

      def todo_params
        params.require(:todo).permit(:name, :description, :done)
      end

      def set_todo
        @todo = Todo.find(params[:id])
      end
    end
  end
end
