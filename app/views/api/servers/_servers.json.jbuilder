servers.each do |server|
  json.set! server.id do
    json.partial! "api/servers/server.json.jbuilder", server: server
  end
end