# frozen_string_literal: true

json.array!(@users) do |user|
  json.extract! user, :id, :username, :discriminator
end
