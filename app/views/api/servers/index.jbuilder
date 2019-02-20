json.servers do
  current_user.servers.each do |server|
    json.set! server.id do
      json.partial! "api/servers/server.json.jbuilder", server: server
    end
  end
end

json.server_index current_user.server_index