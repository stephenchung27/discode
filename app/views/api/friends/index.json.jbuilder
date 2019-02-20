# frozen_string_literal: true

json.friends @friends.map(&:id)

json.users do
  json.partial! "api/users/users", users: @friends
end