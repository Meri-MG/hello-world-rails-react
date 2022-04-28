# frozen_string_literal: true

class V1::GreetingsController < ApplicationController
  def index
    render json: { greetings: [
      {
        name: 'Hello',
        guid: '0415674d-a0e8-4748-af68-a5f53a05c453'
      },
      {
        name: 'Bonjour',
        guid: '0415674d-a0e8-4748-af68-a5f53a05c445'
      },
      {
        name: 'Hola',
        guid: '0415674d-a0e8-4748-af68-a5f53a05c445'
      },
      {
        name: 'Gamarjoba',
        guid: '0415674d-a0e8-4748-af68-a5f53a05c445'
      },
      {
        name: 'Oi',
        guid: '0415674d-a0e8-4748-af68-a5f53a05c445'
      }

    ] }.to_json
  end
end
