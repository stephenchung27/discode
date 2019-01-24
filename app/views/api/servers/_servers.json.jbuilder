servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :server_name, :path, :image_url
  end
end