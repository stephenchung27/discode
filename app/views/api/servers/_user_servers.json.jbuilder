json.set! current_user.private_server_id do
  json.partial! "api/servers/server.json.jbuilder", server: current_user.private_server
end
current_user.servers.each do |server|
  json.set! server.id do
    json.partial! "api/servers/server.json.jbuilder", server: server
  end
end

json.set! "index", current_user.server_index