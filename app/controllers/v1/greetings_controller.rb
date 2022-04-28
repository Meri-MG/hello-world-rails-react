class V1::GreetingsController < ApplicationController
  def index
    # @greetings = Greeting.all
    # render json: @greetings, status: :ok
    # puts @greetings
    render json: { :greetings => [
      {
        greeting: "Bonjour",
        id: 1
      },
      {
        greeting: "Hello",
        id: 2
      }
    ] }.to_json
  end
end