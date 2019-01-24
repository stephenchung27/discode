json.currentUser do
  json.partial! "api/users/user", user: @user
end

json.servers do
  @user.servers.each do |server|
    json.set! server.id do
      json.extract! server, :id, :server_name, :path, :image_url
    end
  end
end